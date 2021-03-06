import mongoose from "mongoose";
import config from "config";

const dbUrl = `mongodb://${config.get("dbName")}:${config.get(
  "dbPass"
)}@localhost:${config.get("dbPort")}/${config.get("db")}?authSource=admin`;

console.log(dbUrl);

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Database connected...");
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
