import mongoose from "mongoose";

const Schema = mongoose.Schema;

const therapistSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, default: "therapist" },
  field: { type: String, default: "therapist" },
  about: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  image: { type: String, default: "" },
  location: { type: String, default: "Nigeria" },
});

export const Therapist =
  mongoose.models?.Therapist || mongoose.model("Therapist", therapistSchema);
