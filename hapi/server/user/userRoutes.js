"use strict"

const config = require("config")

const userHandler = require("./userHandler")
const userValidations = require("./userValidations")

const API_PATH = "/" + config.get("app.name") + "/api/1.0/user"

const routes = [
	{
		path: API_PATH + "/session/create",
		method: "POST",
		handler: userHandler.createSession,
		config: {
			tags: ["taw", "api", "user management", "login"],
			validate: userValidations.login
		}
	},
	{
		path: API_PATH + "/logout",
		method: "POST",
		handler: userHandler.getuserByCityName,
		config: {
			tags: ["taw", "api", "user management", "logout"],
			validate: userValidations.getWeatherByCityName
		}
	},
	{
		path: API_PATH + "/register",
		method: "POST",
		handler: userHandler.getuserByCityName,
		config: {
			tags: ["taw", "api", "user management", "register"],
			validate: userValidations.getWeatherByCityName
		}
	}
]

module.exports = routes
