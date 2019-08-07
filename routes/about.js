const express = require('express');
const aboutRoute = express.Router();

aboutRoute.get('/', ( req, res ) => {
  res.send('main about page')
});

aboutRoute.get('/something', (req, res ) => {
  res.send('about subroute');
});


module.exports = aboutRoute;
