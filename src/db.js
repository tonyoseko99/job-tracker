const { MongoClient } = require("mongodb");

const uri = process.env.DB_MONGODB_URI;
console.log(process.env.DB_MONGODB_URI);
console.log(`Connecting to ${uri}`);

const options = {
  useUnifiedTopology: true,
};

let client;
let db;

const connectDB = async () => {
  if (client && client.isConnected()) {
    return client;
  }

  client = await MongoClient.connect(uri, options);
  db = client.db();
  return client;
};

const getDB = () => {
  if (!db) {
    console.log("Connect to the database before calling this function");
  }
  return db;
};

const closeDB = () => {
  if (client) {
    client.close();
  }
};

module.exports = {
  connectDB,
  getDB,
  closeDB,
};
