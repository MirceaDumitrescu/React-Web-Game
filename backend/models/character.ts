import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const characterSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  uuid: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  class: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: 1,
  },
  location: {
    type: String,
    default: "The Shire",
  },
  exp: {
    type: Number,
    default: 0,
  },
  gold: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  user: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
});

export const Character = mongoose.model("Character", characterSchema);
