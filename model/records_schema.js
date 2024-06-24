import { Schema, model } from "mongoose";

const recordesSchema = new Schema({
  category: {
    type: String,
    required: true,
    enum: ["income", "expense"],
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Records = model("records", recordesSchema);
export default Records;
