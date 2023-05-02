const mongoose = require("mongoose");
const Schema = mongoose.Schema(
  {
    title: { type: String },
    body: { type: String, required: true },
    device: { type: String, required: true },
    no_of_comments: { type: Number, required: true },
    authorId: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);
const PostModel = mongoose.model("PostDbToTest", Schema);
module.exports = { PostModel };
