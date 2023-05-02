const { PostModel } = require("../Model/PostModel.js");
const express = require("express");

const PostRouter = express.Router();

PostRouter.get("/", async (req, res) => {
  const { authorId, email, password } = req.body;
  try {
    let posts = await PostModel.find({ authorId });
    res.status(200).send(posts);
  } catch (Err) {
    res.status(200).send("error in post");
  }
});

PostRouter.post("/add", async (req, res) => {
  try {
    let posts = await new PostModel(req.body);
    posts.save();
    res.status(200).send("post added successfully");
  } catch (Err) {
    res.status(200).send("error in post adding");
  }
});

PostRouter.get("/top", async (req, res) => {
  const { authorId, email, password } = req.body;
  try {
    let posts = await PostModel.find({ authorId: authorId })
      .sort({ no_of_comments: -1 })
      .limit(3);

    res.status(200).send(posts);
  } catch (Err) {
    res.status(200).send("error in post getting top 3");
  }
});

PostRouter.delete("/delete/:id", async (req, res) => {});

PostRouter.patch("/update/:id", async (req, res) => {});

module.exports = PostRouter;
