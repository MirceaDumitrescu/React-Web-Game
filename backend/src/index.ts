//create an express server
const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
import { Secret } from "jsonwebtoken";
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const authRoutes = require("../routes/auth.routes");
const charRoutes = require("../routes/character.routes");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/character", charRoutes);

mongoose
  .connect(uri as Secret, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err: any) => {
    console.log(err);
  });

export const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("MongoDB Connected...");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
