import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/minidb");
    console.log("db esta conectado");
  } catch (error) {
    console.log(error);
  }
};
