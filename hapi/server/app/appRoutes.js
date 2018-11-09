"use strict"

const config = require("config")

const handler = require("./appHandler")
const validations = require("./appValidations")

const API_PATH = "/" + config.get("app.name") + "/api/1.0/app"

const routes = [
	{
		path: API_PATH + "/add",
		method: "PUT",
		handler: handler.getAllApps,
		config: {
			tags: ["taw", "api", "application management", "add"],
			validate: validations.addApp
		}
	},
	{
		path: API_PATH + "/delete",
		method: "DELETE",
		handler: handler.getAllApps,
		config: {
			tags: ["taw", "api", "application management", "delete"],
			validate: validations.getWeatherByCityName
		}
	},
	{
		path: API_PATH + "/edit",
		method: "POST",
		handler: handler.getAllApps,
		config: {
			tags: ["taw", "api", "application management", "edit"],
			validate: validations.getWeatherByCityName
		}
	},
	{
		path: API_PATH + "/list",
		method: "GET",
		handler: handler.getAllApps,
		config: {
			tags: ["taw", "api", "application management", "get"],
			validate: {}
		}
	}
]

module.exports = routes
