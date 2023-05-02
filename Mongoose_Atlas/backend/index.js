const express = require("express");
const env = require("env2")("./.env");
const app = express();
const cors = require("cors");
const { Auth } = require("./Middleware/Auth.js");
const { connection } = require("./db.js");
app.use(express.json());
app.use(cors({
  origin: '*'
}));
const userRouter = require("./Routes/userRoutes.js");
const postRouter = require("./Routes/PostRoutes.js");

app.use("/users", userRouter);
// console.log(process.env.DB_MongoDB_URL);
// console.log(process.env.PORT);
app.use(Auth);
app.use("/posts", postRouter);
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
