import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("Connected to Database Yay!"));
  } catch (error) {
    console.log(error);
    console.log("Error: Unable to Connect to Database");
  }
};

export default connectToDb;
