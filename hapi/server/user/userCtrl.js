"use strict"

const userService = require("./userService")

const getWeatherByCityName = async function(cityName) {
	return userService.getWeatherByCityName(cityName)
}

module.exports = {
	getWeatherByCityName
}
