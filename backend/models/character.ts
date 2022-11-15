import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const characterSchema = new mongoose.Schema({
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
});

export const Character = mongoose.model("Character", characterSchema);
