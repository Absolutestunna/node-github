const express = require('express');
const userRoute = express.Router();

userRoute.get('/', (req, res) => {
  res.send('user route')
})

module.exports = userRoute;
