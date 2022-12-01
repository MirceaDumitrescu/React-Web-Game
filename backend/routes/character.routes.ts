import { db } from "../src";
import mongoose from "mongoose";

const router = require("express").Router();
import { Character } from "../models/character";

router.get("/all", async (req: any, res: any) => {
  Character.find()
    .select("_id uuid name class level location exp gold date user")
    .populate("user", "username")
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        characters: docs.map((doc) => {
          return {
            _id: doc._id,
            uuid: doc.uuid,
            name: doc.name,
            class: doc.class,
            level: doc.level,
            location: doc.location,
            exp: doc.exp,
            gold: doc.gold,
            date: doc.date,
            user: doc.user,
            request: {
              type: "GET",
              url: "http://localhost:3000/characters/" + doc.uuid,
            },
          };
        }),
      });
    });
});

router.get("/:id", async (req: any, res: any) => {
  const id = req.params.id;
  Character.findOne({ _id: id })
    .select("_id uuid name class level location exp gold date user")
    .populate("user", "username")
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json({
          character: doc,
          request: {
            type: "GET",
            url: "http://localhost:3000/characters",
          },
        });
      } else {
        res.status(404).json({
          message: "No valid entry found for provided ID",
        });
      }
    });
});

router.post("/create", async (req: any, res: any) => {
  const character = new Character({
    _id: new mongoose.Types.ObjectId(),
    uuid: req.body.uuid,
    name: req.body.name,
    class: req.body.class,
    level: req.body.level,
    location: req.body.location,
    exp: req.body.exp,
    gold: req.body.gold,
    date: req.body.date,
    user: req.body.user,
  });

  const characterExists = await Character.findOne({ name: req.body.name });

  if (characterExists) {
    return res.status(400).json({
      error: "Character already exists",
    });
  }

  character.save().then((result) => {
    res.status(201).json({
      message: "Created character successfully",
      createdCharacter: {
        _id: result._id,
        uuid: result.uuid,
        name: result.name,
        class: result.class,
        level: result.level,
        location: result.location,
        exp: result.exp,
        gold: result.gold,
        date: result.date,
        user: result.user,
        request: {
          type: "GET",
          url: "http://localhost:3000/characters/" + result.uuid,
        },
      },
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
  user?: string;
};

router.patch("/:id", async (req: any, res: any) => {
  const id = req.params.productId;
  const updateOps: ICharacter = {};
  for (const ops of req.body) {
    updateOps[ops.propName as keyof ICharacter] = ops.value;
  }
  Character.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Product updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/" + id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete("/:id", async (req: any, res: any, next: any) => {
  const id = req.params.id;
  Character.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Character deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
