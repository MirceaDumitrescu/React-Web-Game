const router = require("express").Router();
import { User } from "../models/user";
import {
  registerValidation,
  loginValidation,
} from "../middlewares/validations";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";

interface IJwtPayload {
  _id: string;
}

router.post("/register", async (req: any, res: any) => {
  const { username, password, email } = req.body;
  const { error } = registerValidation(req.body);
  if (registerValidation(req.body).error) {
    return res.status(400).send(error.details[0].message);
  }
  if (!username || !password || !email) {
    res.status(400).json({
      error: "Please provide a username, password and Email",
    });
  } else {
    const user = new User({
      username,
      password,
      email,
    });
    try {
      //check if username already exists
      const userExists = await User.findOne({
        username,
      });
      if (userExists) {
        return res.status(400).json({
          error: "Username already exists",
        });
      }
      //check if email already exists
      const emailExists = await User.findOne({
        email,
      });
      if (emailExists) {
        return res.status(400).json({
          error: "Email already exists",
        });
      }

      //hash the passwords
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      res.status(200).json({
        message: "User created successfully",
      });
    } catch (err) {
      res.json({ message: err });
    }
  }
});

router.get("/", async (req: any, res: any) => {
  //check if the authorization header is set
  if (!req.headers.authorization) {
    return res.status(401).json({
      error: "You are not authorized to view this page",
    });
  }

  //verify the token
  const token = req.headers.authorization.split(" ")[1];
  console.log("token", token);
  if (!token) {
    return res.status(401).json({
      error: "You are not authorized to view this page",
    });
  }
  const decoded = jwt.verify(
    token,
    process.env.TOKEN_SECRET as string
  ) as IJwtPayload;
  if (!decoded) {
    return res.status(401).json({
      error: "You are not authorized to view this page",
    });
  }

  // check if the user exists
  const user = await User.findOne({ _id: decoded._id });
  if (!user) {
    return res.status(401).json({
      error: "You are not authorized to view this page",
    });
  }

  return res.status(200).json({
    message: "You are authorized to view this page",
  });
});

router.post("/login", async (req: any, res: any) => {
  const { email, password } = req.body;
  const { error } = loginValidation(req.body);
  if (loginValidation(req.body).error) {
    return res.status(400).send(error.details[0].message);
  }

  if (!email || !password) {
    res.status(400).json({
      error: "Please provide a email and password",
    });
  } else {
    try {
      const user = await User.findOne({
        email,
      });
      if (!user) {
        return res.status(400).json({
          error: "User does not exist",
        });
      }

      const validPass = await bcrypt.compare(password, user.password);
      if (!validPass) {
        return res.status(400).json({
          error: "Invalid password",
        });
      }

      const token = jwt.sign(
        { _id: user._id },
        process.env.TOKEN_SECRET as string
      );
      res.status(200).json({
        message: "User logged in successfully",
        token: token,
        user: user,
      });
    } catch (err) {
      res.json({ message: err });
    }
  }
});

module.exports = router;
