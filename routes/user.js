const express = require('express');
const userRoute = express.Router();
const requestFunc = require('./../lib/requestFunc');

const query = '/users/Absolutestunna/repos';

userRoute.get('/', (req, res) => {
  requestFunc(query, req, res)
})

module.exports = userRoute;
