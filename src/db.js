import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://tonnyseko:Tonnny99@cluster0.yyxptew.mongodb.net/?retryWrites=true&w=majority";
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
    throw new error("Connect to the database before calling this function");
  }
  return db;
};

export { connectDB, getDB };