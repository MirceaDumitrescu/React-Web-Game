import mongoose from "mongoose";
import { permissions } from "../utils/permissions";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  uuid: {
    type: String,
    default: uuidv4,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  permissions: {
    type: Object,
    default: permissions.user,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  characters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],
});

export const User = mongoose.model("User", userSchema);
