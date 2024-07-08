import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { User } from "./models/userModel";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email || undefined;
        const password = credentials.password || undefined;

        if (!email || !password) {
          throw new Error("Invalid Email or Password");
        }
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid email or password");
        }

        if (!user.password) {
          throw new Error("Invalid Password supplied");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password mismatch");
        }

        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          id: user._id,
        };

        return userData;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    signIn: async ({ user, account }) => {
      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});
