require('dotenv').config(); 
const mongoDB_ID = process.env.MONGO_ATLAS_ID
const mongoDB_PW = process.env.MONGO_ATLAS_PW

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://mymongo:${mongoDB_PW}@cluster0.07ilpgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  await client.connect();
  const adminDB = client.db('test').admin();
  const listDatabases = await adminDB.listDatabases();
  console.log(listDatabases);
  return "OK";
}

run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
