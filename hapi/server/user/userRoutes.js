"use strict"

const config = require("config")

const userHandler = require("./userHandler")
const userValidations = require("./userValidations")

const API_PATH = `/${config.get("app.name")}/api/1.0/user`

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
		path: API_PATH + "/session/validate",
		method: "POST",
		handler: userHandler.validateSession,
		config: {
			tags: ["taw", "api", "user management", "token management"],
			validate: userValidations.validate
		}
	},
	{
		path: API_PATH + "/register",
		method: "POST",
		handler: userHandler.register,
		config: {
			tags: ["taw", "api", "user management", "register"],
			validate: userValidations.register
		}
	},
	{
		path: API_PATH + "/edit",
		method: "POST",
		handler: userHandler.createSession,
		config: {
			tags: ["taw", "api", "user management", "edit user"],
			validate: userValidations.edit
		}
	}
]

module.exports = routes
