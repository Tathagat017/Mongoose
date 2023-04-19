const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/ExpressDb");

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: Number,
    city: String,
    isMarried: { type: Boolean, required: true },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("UserDetail", UserSchema);

module.exports = { connection, UserModel };
