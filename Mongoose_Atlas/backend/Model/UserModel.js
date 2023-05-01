const mongoose = require("mongoose");
const Schema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);
const UserModel = mongoose.model("UsersDbToTest", Schema);
module.exports = { UserModel };
