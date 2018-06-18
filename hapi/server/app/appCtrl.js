"use strict"

const appService = require("./appService")

const getWeatherByCityName = async function(cityName) {
	return appService.getWeatherByCityName(cityName)
}

module.exports = {
	getWeatherByCityName
}
