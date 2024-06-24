import { connect } from "mongoose";
const DB = process.env.DB || "mongodb://127.0.0.1/Money_Tracker";

const connectDb = async () => {
  try {
    await connect(DB);
    console.log("Connected to DB successfully");
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
