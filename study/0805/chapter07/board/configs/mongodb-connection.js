require("dotenv").config()
const mongoDB_PW = process.env.MONGO_ATLAS_PW

const { MongoClient } = require("mongodb")

const uri = `mongodb+srv://mymongo:${mongoDB_PW}@cluster0.07ilpgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

module.exports = function (callback) {
    return MongoClient.connect(uri, callback)
}
