import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  userName: { type: String },
  about: { type: String },
  state: { type: String },
  city: { type: String },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
