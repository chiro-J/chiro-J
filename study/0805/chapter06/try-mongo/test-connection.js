// 함부로 노출해선 안되는 정보이므로, .env 파일에 정보를 담아서 변수에 주입 받는 방법을 이용
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

async function run() {      // async가 있으므로 비동기 처리 함수
  await client.connect();
  const adminDB = client.db('test').admin();                // admin DB 인스턴스
  const listDatabases = await adminDB.listDatabases();      // 데이터베이스 정보 가져오기
  console.log(listDatabases);
  return "OK";
}

run()           // 실행 함수
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
