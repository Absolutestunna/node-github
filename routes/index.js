const express = require('express');
const router = express.Router();
const requestFunc = require('./../lib/requestFunc')


const query = '/';
//routes
const aboutRoute = require('./about');
const userRoute = require('./user');


//main index route
router.get('/', ( req, res ) => {
  requestFunc(query, req, res);
});


// individual routes
router.use('/about', aboutRoute);
router.use('/user', userRoute);




module.exports = router;
