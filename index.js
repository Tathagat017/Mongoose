const mongoose = require("mongoose");

// const add = (a, b) => console.log(a + b);

// add(10, 10);
//name of db -> learningMongoose
async function main() {
  //logic to connect to Mongo
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/learningMongoose"
    );
    //!insert Multiple document
    await UserModel.insertMany([
      { name: "Aman", age: 34, city: "Mumbai" },
      { name: "Beng", age: 34, city: "New York" },
    ]);
    //~``````````````````````````````

    //!insert One document
    const user = new UserModel({
      name: "Shaunty",
      age: 34,
      city: "Delhi",
    });
    await user.save();

    //~````````````````````````````````

    console.log("Connected to Mongo");
    connection.disconnect();
    console.log("Disconnected from Mongo");
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
//These works because main is asynchronous in nature

// ~ 1.Schema   =>  2.Model  =>  3.Document
const userSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    city: String,
  },
  {
    versionKey: false, //removes version key
  }
);
//! const userModel = mongoose.Model("collection Name", schema from which Model should be created);
//* Moongoose will automatically collection : "users"
//* the name of the db is placed in the Mongo DB url in connect
const UserModel = mongoose.model("user", userSchema);
//* mongoose will automatically add 's to  to the collection last of the collection name : "users"
// id, __v is automatically added ;

// Mongoose does not have insertOne option :
//Single user Model
//constructor function : Model is constructor function
