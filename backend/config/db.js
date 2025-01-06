import mongoose from "mongoose";

const connectDB = async () => {
  // Log the MongoDB URI for debugging
  console.log("MongoDB URI:", process.env.MONGODB_URI);

  try {
    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    // Log the connection details
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    //
  } catch (error) {
    // If there's an error, log it and exit the process
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
