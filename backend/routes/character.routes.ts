import mongoose from "mongoose";

const router = require("express").Router();
import { Character } from "../models/character";

router.get("/", (req: any, res: any, next: any) => {
  Character.find()
    .select("name class userId _id")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        products: docs.map((doc) => {
          return {
            name: doc.name,
            class: doc.class,
            level: doc.level,
            location: doc.location,
            exp: doc.exp,
            gold: doc.gold,
            userId: doc.userId,
            attack: doc.attack,
            defense: doc.defense,
            health: doc.health,
            maxHealth: doc.maxHealth,
            mana: doc.mana,
            maxMana: doc.maxMana,
            intelligence: doc.intelligence,
            equipped: doc.equipped,
            inventory: doc.inventory,
            spells: doc.spells,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:5050/api/character/" + doc._id,
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err: any) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:charId", (req: any, res: any, next: any) => {
  const id = req.params.charId;
  Character.findById(id)
    .select("name class userId _id location level exp attack defense health")
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json({
          name: doc.name,
          class: doc.class,
          level: doc.level,
          location: doc.location,
          exp: doc.exp,
          gold: doc.gold,
          userId: doc.userId,
          attack: doc.attack,
          defense: doc.defense,
          health: doc.health,
          maxHealth: doc.maxHealth,
          mana: doc.mana,
          maxMana: doc.maxMana,
          intelligence: doc.intelligence,
          equipped: doc.equipped,
          inventory: doc.inventory,
          spells: doc.spells,
          _id: doc._id,
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});

router.post("/", async (req: any, res: any, next: any) => {
  const character = new Character({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    class: req.body.class,
    userId: req.body.userId,
    attack: req.body.attack,
    defense: req.body.defense,
    health: req.body.health,
    mana: req.body.mana,
    intelligence: req.body.intelligence,
  });

  const existingCharacter = await Character.findOne({ name: req.body.name });

  if (existingCharacter) {
    res.status(409).json({
      message: "Character already exists",
    });
  }

  character
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Created character successfully",
        createdCharacter: {
          name: result.name,
          class: result.class,
          userId: result.userId,
          attack: result.attack,
          defense: result.defense,
          health: result.health,
          mana: result.mana,
          intelligence: result.intelligence,
          _id: result._id,
        },
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
});

type ICharacter = {
  _id?: string;
  uuid?: string;
  name?: string;
  class?: string;
  level?: number;
  location?: string;
  exp?: number;
  gold?: number;
  date?: Date;
  userId?: string;
  attack?: number;
  defense?: number;
  health?: number;
  maxHealth?: number;
  mana?: number;
  maxMana?: number;
  intelligence?: number;
  equipped?: string[];
  inventory?: string[];
  spells?: string[];
};

router.patch("/:charId", (req: any, res: any, next: any) => {
  const id = req.params.charId;
  const updateOps: ICharacter = {};

  Object.keys(req.body).forEach((key) => {
    updateOps[key as keyof ICharacter] = req.body[key];
  });

  Character.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Character updated",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete("/:charId", (req: any, res: any, next: any) => {
  const id = req.params.charId;
  Character.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Character deleted",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
