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
  userId: {
    type: String,
    required: true,
  },
  attack: {
    type: Number,
    default: 1,
  },
  defense: {
    type: Number,
    default: 1,
  },
  health: {
    type: Number,
    default: 1,
  },
  maxHealth: {
    type: Number,
    default: 1,
  },
  mana: {
    type: Number,
    default: 1,
  },
  maxMana: {
    type: Number,
    default: 1,
  },
  inventory: {
    type: Array,
    default: [],
  },
  equipped: {
    type: Array,
    default: [],
  },
  spells: {
    type: Array,
    default: [],
  },
  equippedSpells: {
    type: Array,
    default: [],
  },
  intelligence: {
    type: Number,
    default: 1,
  },
});

export const Character = mongoose.model("Character", characterSchema);
