"use strict"

const boom = require("boom")
const httpStatus = require("http-status")
const appCtrl = require("./appCtrl")
const logger = require("../utils/logger")

var MongoClient = require("mongodb").MongoClient

const dbUrl = "mongodb://mongodb:27017"
const dbName = "local"

const getAllApps = async (req, res) => {
  let client
  try {
    // Use connect method to connect to the Server
    client = await MongoClient.connect(dbUrl)
    const db = client.db(dbName)
    const collection = db.collection("apps")

    const apps = await collection.find({}).toArray()

    return res({ apps })
  } catch (error) {
    const errorMessage = `Failed to fetch apps for warehouse from database`
    !error.logged && logger.error(error, errorMessage)
    return res(
      boom.boomify(error, {
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        message: errorMessage,
        details: error
      })
    )
  }

  if (client) {
    client.close()
  }
}

module.exports = { getAllApps }
