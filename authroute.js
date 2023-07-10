const express = require('express');
const { signup } = require('../../controller/authcontroller');
const authrouter = express.Router();

authrouter.post('/signup', signup);

module.exports = authrouter;    