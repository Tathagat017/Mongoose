const { UserModel } = require("../Model/UserModel.js");
const express = require("express");

const userRouter = express.Router();

userRouter.get("/users", async (req, res) => {
  const users = await UserModel.find().sort({ name: -1 });
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(users);
});
//to sort users by their email address (alpha) in descending order: users = await UserModel.find().sort({email:-1})
userRouter.post("/users/register", async (req, res) => {
  try {
    let user = await new UserModel(req.body);
    user.save();
    res.status(200).send("created successfully");
  } catch (err) {
    console.log(err);
    res.status(401).send({ Error: err.message });
  }
});

userRouter.post("/users/login", async (req, res) => {
  try {
  } catch (err) {}
});

userRouter.patch("/users/update/:id", async (req, res) => {
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

userRouter.delete("/users/delete/:id", async (req, res) => {
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
