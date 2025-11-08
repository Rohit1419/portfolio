import mongoose from "mongoose";

const DB_Name = "portfolioDB";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDb connected : ${mongoose.connection.host}`);
  } catch (error) {
    console.log("Error connecting to database:", error);
    process.exit(1);
  }
};

export default connectDB;
