import { db } from "../src";

const router = require("express").Router();
const Character = require("../models/character");

/* Get character by character uuid */
router.get("/:uuid", async (req: any, res: any) => {
  const uuid = req.params.uuid;
  const character = await Character.findOne({ uuid });
  res.status(200).json(character);
  return character;
});

/* Get all characters */
router.get("/all", async (req: any, res: any) => {
  const characters = await Character.find({});
  res.status(200).json(characters);
  return characters;
});

/* Create a new character */
router.post("/create", async (req: any, res: any) => {
  const { name, class: characterClass } = req.body;
  const character = new Character({
    name,
    class: characterClass,
  });
  try {
    await character.save();
    res.status(200).json({
      message: "Character created successfully",
    });
  } catch (err) {
    res.json({ message: err });
  }
});

/* Update a character */
router.put("/update/:uuid", async (req: any, res: any) => {
  const uuid = req.params.uuid;
  const { name, class: characterClass, level, location, exp, gold } = req.body;

  db.collection("characters")
    .updateOne(
      { uuid },
      {
        $set: {
          name: name,
          class: characterClass,
          level: level,
          location: location,
          exp: exp,
          gold: gold,
        },
      }
    )
    .then((result: any) => {
      res.status(200).json({
        message: "Character updated successfully",
      });
    })
    .catch((err: any) => {
      res.json({ message: err });
    });
});

/* Delete a character */
router.delete("/delete/:uuid", async (req: any, res: any) => {
  const uuid = req.params.uuid;
  db.collection("characters")
    .deleteOne({ uuid })
    .then((result: any) => {
      res.status(200).json({
        message: "Character deleted successfully",
      });
    })
    .catch((err: any) => {
      res.json({ message: err });
    });
});

module.exports = router;
