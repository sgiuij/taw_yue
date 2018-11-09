"use strict"

const joi = require("joi")

module.exports = {
  login: {
    payload: {
      username: joi.string().required(),
      password: joi
        .string()
        .min(6)
        .max(200)
        .required()
    }
  },
  validate: {
    payload: {
      token: joi.string().required()
    }
  },
  register: {
    payload: {
      username: joi.string().required(),
      email: joi.string().email(),
      fname: joi.string().required(),
      lname: joi.string().required(),
      about: joi.string(),
      password: joi
        .string()
        .min(8)
        .max(200)
        .required()
    }
  },
  edit: {
    payload: {
      username: joi.string(),
      email: joi.string().email(),
      fname: joi.string(),
      lname: joi.string(),
      about: joi.string(),
      password: joi
        .string()
        .min(8)
        .max(200)
    }
  }
}
