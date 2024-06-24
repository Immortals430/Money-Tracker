import "dotenv/config";
import express from "express";
import connectDb from "./config/mongoose.js";
import {
  addRecord,
  home,
  deleteRecord,
} from "./controller/tracker_controller.js";
const app = express();
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));

// routes
app.get("/", home);
app.post("/add-record", addRecord);
app.get("/delete-record/:id", deleteRecord);

app.listen(PORT, () => {
  connectDb();
  console.log(`Connected to server at port: ${PORT}`);
});
