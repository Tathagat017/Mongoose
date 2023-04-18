const mongoose = require("mongoose");

// const add = (a, b) => console.log(a + b);

// add(10, 10);

async function main() {
  //logic to connect to Mongo
  try {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017");
    console.log("Connected to Mongo");
  } catch (err) {
    console.log("Error connecting to MongoDb");
    console.log(err);
  }
}
main();

/* 

* for disconneting the mongoose connection
async function main() {
  //logic to connect to Mongo
  try {
   ~ const connection = await mongoose.connect("mongodb://127.0.0.1:27017");
    console.log("Connected to Mongo");
   ! connection.disconnect();
   ! console.log("Disconnected from Mongo");
  } catch (err) {
    console.log("Error connecting to MongoDb");
    console.log(err);
  }
}
main();

*/

//* Structuring the data :-
