"use strict"

const Hapi = require("hapi")
const config = require("config")

const routes = require("./routes")
const plugins = require("./plugins")
const logger = require("./server/utils/logger")
const Bcrypt = require("bcrypt")

const server = new Hapi.Server()

const validate = async (request, username, password) => {
	try {
		if (username !== config.auth.apiUser) {
			return { credentials: null, isValid: false }
		}

		const isValid = await Bcrypt.compare(password, config.auth.apiPass)
		const credentials = { name: username }

		return { isValid, credentials }
	} catch (error) {
		logger.error(error, "Failed to verify basic auth")
		throw error
	}
}

server.connection({
	port: config.get("app.port"),
	routes: { cors: true }
})

// attach routes here
server.route(routes)

// register plugins
const registerPlugins = async () => {
	try {
		await server.register(plugins)

		server.auth.strategy("simple", "basic", { validateFunc: validate })
		// server.auth.default("simple")
	} catch (error) {
		logger.error(error, "Failed to register hapi plugins")
		throw error
	}
}

registerPlugins()

// export modules
module.exports = server
