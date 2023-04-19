const express = require("express");
const app = express();
app.use(express.json());

const { connection, UserModel } = require("./db.js");
app.get("/", (req, res) => {
  res.status(200).send({ message: "This is Home page" });
});

app.post("/add", async (req, res) => {
  const user = new UserModel(req.body);
  await user.save();
  res.send("added new user");
});

app.get("/user", async (req, res) => {
  const user = await UserModel.find();
  res.status(200).send(user);
});
app.listen(8080, "localhost", async () => {
  try {
    console.log("server listening on port:8080");
    //server should get connected to dB as soon as it starts listening
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.err(err);
  }
});
