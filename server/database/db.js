import mongoose from "mongoose";

const DBConnection = async () => {
  const MONODB_URL = "mongodb://0.0.0.0:27017/dbs";
  try {
    await mongoose.connect(MONODB_URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting with the database", error.message);
  }
};
export default DBConnection;
