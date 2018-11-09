let client

const config = require("config")
var MongoClient = require("mongodb").MongoClient

const getCollection = async collectionName => {
    if (!client) {
        client = await MongoClient.connect(config.db.url)
    }
    const db = client.db(config.db.name)
    const collection = db.collection(collectionName)
    return collection
}

module.exports = { getCollection }
