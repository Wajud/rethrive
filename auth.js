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
          about: user.about,
          city: user.city,

          state: user.state,
        };

        return userData;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
        token.firstName = user.firstName;
        token.userName = user.userName;
        token.city = user.city;
        token.state = user.state;
        token.about = user.about;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.firstName = token.firstName;
      session.user.userName = token.userName;
      session.user.city = token.city;
      session.user.state = token.state;
      session.user.about = token.about;
      return session;
    },

    signIn: async ({ user, account }) => {
      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});
