const mongoose = require("mongoose");
const env = require("env2")("./.env");
const mongodb_url = process.env.DB_MongoDB_URL;
console.log(mongodb_url);
const connection = mongoose.connect(mongodb_url);

module.exports = { connection };
