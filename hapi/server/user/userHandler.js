"use strict"

const boom = require("boom")
const httpStatus = require("http-status")
const userCtrl = require("./userCtrl")
const logger = require("../utils/logger")
const config = require("config")
const _ = require("lodash")
const jwt = require("jsonwebtoken")

var users = [
  {
    id: 1,
    username: "test",
    password: "testte"
  }
]

function createToken(user) {
  return jwt.sign(_.omit(user, "password"), config.auth.secret, {
    expiresIn: "300 Minutes"
  })
}

function getUserScheme(req) {
  var username
  var type
  var userSearch = {}

  // The POST contains a username and not an email
  if (req.payload.username) {
    username = req.payload.username
    type = "username"
    userSearch = { username: username }
  }
  // The POST contains an email and not an username
  else if (req.payload.email) {
    username = req.payload.email
    type = "email"
    userSearch = { email: username }
  }

  return {
    username: username,
    type: type,
    userSearch: userSearch
  }
}

const getuserByCityName = async function(req, res) {
  const cityName = req.query.cityName

  try {
    const data = await userCtrl.getWeatherByCityName(cityName)
    return res({
      name: data.name,
      coord: data.coord,
      user: data.user
    })
  } catch (error) {
    const errorMessage = `Failed to fetch user for ${cityName}`
    !error.logged && logger.error(error, errorMessage)
    return res(
      boom.boomify(error, {
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        message: errorMessage
      })
    )
  }
}

const createSession = async function(req, res) {
  let userScheme = getUserScheme(req)
  let user = _.find(users, userScheme.userSearch)

  if (!user) {
    return res(boom.unauthorized(`User doesn't exist`))
  }

  if (user.password !== req.payload.password) {
    return res(boom.unauthorized(`The username or password don't match`))
  }

  res({
    id_token: createToken(user)
  }).code(201)
}

module.exports = {
  createSession,
  getuserByCityName
}
