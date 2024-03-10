import mongoose from "mongoose";
import {config} from "dotenv";

config();


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(
        `${process.env.MONGO_URI}/${process.env.MONGODB_NAME}`
      );
      console.log(`userMS connected: ${conn.connection.host}`);
    } catch (error: any) {
      console.log(error.message);
      process.exit(1);
    }
  };
  
  export { connectDB };