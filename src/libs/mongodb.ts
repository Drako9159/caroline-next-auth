import mongoose from "mongoose";

export async function connectDB() {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI must be defined");
  }

  try {
    const { connection } = await mongoose.connect(MONGODB_URI);
    if (connection.readyState === 1) {
      console.log(">>> MONGODB is connected");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log(error)
    return Promise.reject(false);
  }
}
