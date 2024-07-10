"use server";
import connectToDb from "../lib/db";
import { hash } from "bcryptjs";
import { User } from "/models/userModel";
import { redirect } from "next/navigation";
import { signIn, signOut } from "/auth";

const register = async (formData) => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  const cPassword = formData.get("confirmPassword");

  if (!firstName || !lastName || !email || !password) {
    throw new Error("Please fill all fields");
  }

  if (password !== cPassword) {
    throw new Error("Password and Confirmed Password does not match");
  }

  await connectToDb();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exist");
  }

  const hashedPassword = await hash(password, 12);

  await User.create({ firstName, lastName, email, password: hashedPassword });
  console.log("User created successfully");

  await signIn("credentials", {
    redirect: false,
    callbackUrl: "/",
    email,
    password,
  });
  redirect("/profile");
};

const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    console.log("Error Signing in");
    throw new Error("Error Signing in");
  }

  redirect("/profile");
};

const logOut = async () => {
  await signOut();
};

export { register, login, logOut };
