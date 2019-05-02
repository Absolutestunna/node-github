const express = require('express');
const app = express();
const aboutRoute = express.Router();

aboutRoute.get('/something', (req, res ) => {
  res.send('something subroute');
})

aboutRoute.get('/', ( req, res ) => {
  res.send('index of about')
})


module.exports = aboutRoute;
