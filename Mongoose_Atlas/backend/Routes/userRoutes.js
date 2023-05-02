const { UserModel } = require("../Model/UserModel.js");
const express = require("express");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
userRouter.get("/", async (req, res) => {
  const users = await UserModel.find().sort({ name: -1 });
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(users);
});
//to sort users by their email address (alpha) in descending order: users = await UserModel.find().sort({email:-1})
userRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        res.status(405).send({ error: "error received" });
      }
      let user = await new UserModel({
        ...req.body,
        password: hash,
      });
      user.save();
      res.status(200).send("created successfully");
    });
  } catch (err) {
    console.log(err);
    res.status(401).send({ Error: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email: email });

    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          var token = jwt.sign({ authorId: user._id }, "key");
          res
            .status(200)
            .send({ msg: "login successfully done", token: token });
        } else {
          res.send({ error: "here error" });
        }
      });
    } else {
      res.send({ err: "not found user" });
    }
  } catch (err) {}
});

userRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.find({ _id: id });
    if (user) {
      await UserModel.findByIdAndUpdate(id, req.body);
      res.status(200).send({ msg: "updated successfully" });
    } else {
      res.status(200).send({ msg: "Not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("err");
  }
});

userRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      await UserModel.findByIdAndRemove(id);
      res.status(200).send({ msg: "deleted successfully" });
    } else {
      res.status(200).send("Not found");
    }
  } catch (err) {
    res.status(404).send("err");
  }
});

module.exports = userRouter;
