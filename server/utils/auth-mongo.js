import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB Connection Success");
  } catch (error) {
    console.error("Database connection Failed ");
    console.error(error.message);
    process.exit(0);
  }
};
export default connectDb;
