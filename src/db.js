import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
console.log(uri);
const options = {
  useUnifiedTopology: true,
};

let client;
let db;

const connectDB = async () => {
  if (client) {
    return client;
  }

  client = await MongoClient.connect(uri, options);
  db = client.db();
  return client;
};

const getDB = () => {
  if (!db) {
    throw new Error("Connect to the database before calling this function");
  }
  return db;
};

export { connectDB, getDB };
