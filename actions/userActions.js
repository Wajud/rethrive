"use server";
import connectToDb from "../lib/db";
import { hash } from "bcryptjs";
import { User } from "/models/userModel";
import { redirect } from "next/navigation";
import { signIn, signOut } from "/auth";
import { revalidatePath } from "next/cache";

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

  revalidatePath("/profile");

  redirect("/profile");
};

const logOut = async () => {
  await signOut();
};

const updateBio = async (formData) => {
  let { id, about, userName, email, city, state } =
    Object.fromEntries(formData);

  try {
    await connectToDb();

    const updatedFields = { about, userName, email, city, state };

    const currentUser = await User.findById(id);

    // console.log(currentUser.firstName);
    about =
      updatedFields.about === "" ? currentUser.about : updatedFields.about;
    city = updatedFields.city === "" ? currentUser.city : updatedFields.city;
    state =
      updatedFields.state === "" ? currentUser.state : updatedFields.state;
    userName =
      updatedFields.userName === ""
        ? currentUser.userName
        : updatedFields.userName;

    const updatedUser = {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      about,
      city,
      state,
      userName,
    };

    await User.findByIdAndUpdate(id, updatedUser);
    console.log("updatedUser: ", updatedUser);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Update user");
  }

  revalidatePath("/profile");
  redirect("/profile");
};

export { register, login, logOut, updateBio };
