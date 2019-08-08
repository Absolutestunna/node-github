const axios = require('axios');

const baseURL = 'https://api.github.com';

const requestFunc = (query, req, res) => {

  axios.get(`${baseURL}${query}`)
  .then( response => {
    // handle success
    console.log('response', response.status);
    const { data } = response;
    res.json(data);
  })
  .catch( error => {
    // handle error    
    res.send(error.response.status);
  })
}

module.exports = requestFunc;
