const express = require("express");
const env = require("env2")("./.env");
const app = express();
const { connection } = require("./db.js");
app.use(express.json());
const userRouter = require("./Routes/userRoutes.js");
app.use("/", userRouter);
// console.log(process.env.DB_MongoDB_URL);
// console.log(process.env.PORT);

const port = process.env.PORT;
app.listen(port, "localhost", async () => {
  try {
    console.log("connecting to dB");
    await connection;
    console.log("successfully connected");
  } catch (err) {
    console.log("error is", err);
  }
});
