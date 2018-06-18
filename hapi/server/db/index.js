const MongoClient = require("mongodb").MongoClient(async function() {
    // Connection URL
    const url = "mongodb://mongodb:27017"
    // Database Name
    const dbName = "users"
    let client

    try {
        // Use connect method to connect to the Server
        client = await MongoClient.connect(url)

        const db = client.db(dbName)
    } catch (err) {
        console.log(err.stack)
    }

    if (client) {
        client.close()
    }
})()
