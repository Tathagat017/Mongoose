Notes

backend is a combination of server and dB

frontend is a combination of HTML/CSS and JavaScript/React/Vue/Angular <=>

<--------------> <=>Req - Res cycle ( req object and res object) <=>

<--------------> server ( express / node Https ) <=>
=>this has some logic written to respond to the request from the front end, and the request in prcocessed in frontend, the data is retrived from the database

<--------> =>Mongoose : <=>
1)helps in connecting to dB
2)Structure the data in the database
3)Validation

<-------> =>MongoDB

//Mongoose
install : npm install mongoose
// logic to connect the dB will be inside a function->main
const connection<variable name> = mongoose.connect("MongoDB URL");

............................MongoSh...........................
Please enter a MongoDB connection string (Default: mongodb://localhost/):

Current Mongosh Log ID: 643ebd92022b47a4314e1898
Connecting to: mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0
Using MongoDB: 6.0.5
Using Mongosh: 1.8.0

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

---

The server generated these startup warnings when booting
2023-04-14T02:56:44.041+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted

---

---

Enable MongoDB's free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

The monitoring data will be available on a MongoDB website with a unique URL accessible to you
and anyone you share the URL with. MongoDB may use this information to make product
improvements and to suggest MongoDB products and deployment options to you.

To enable free monitoring, run the following command: db.enableFreeMonitoring()
To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
....................................................end.........

port : 27017
url : mongodb://127.0.0.1:27017
async function main() {
//logic to connect to Mongo
try {
const connection = await mongoose.connect("mongodb://127.0.0.1:27017");
console.log("Connected to Mongo");
} catch (err) {
console.log("Error connecting to MongoDb");
console.log(err);
}
} // async function main as the response of Mongoose.connect() is delayed and async in nature

connection.disconnect() -- > to disconnect
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

//Structuring the data via Mongoose:-

Cast or Mold to provide shape :=
