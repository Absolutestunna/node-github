const express = require('express');
const router = express.Router();
const axios = require('axios');
const aboutRoute = require('./about');


const baseURL = 'https://api.github.com';


//main index route
router.get('/', ( req, res ) => {
  // res.send('At the index route')
  axios.get(`${baseURL}`)
  .then( response => {
    // handle success
    console.log('response', response.data);
    const { data } = response;
    res.json(data);
  })
  .catch( error => {
    // handle error
    console.log('ERROR', error);
  })

});


// individual routes
router.use('/about', aboutRoute);



module.exports = router;
