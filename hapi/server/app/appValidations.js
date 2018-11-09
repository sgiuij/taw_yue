"use strict"

const joi = require("joi")

const getWeatherByCityName = {
  headers: {},
  query: {
    cityName: joi
      .string()
      .trim()
      .required()
      .description("name of the city whose weather is to be fetched")
  },
  options: {
    allowUnknown: true
  }
}

const addApp = {
  headers: {},
  query: {
    cityName: joi
      .string()
      .trim()
      .required()
      .description("name of the city whose weather is to be fetched")
  },
  options: {
    allowUnknown: true
  }
}

module.exports = {
  addApp,
  getWeatherByCityName
}
