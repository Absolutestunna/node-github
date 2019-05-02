const express = require('express');
const app = express();
const routes = require('./routes/index');


app.use('/', routes)


const baseURL = 'https://api.github.com';

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Network Request error');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  console.log('err', err.message);
  res.status(err.status || 500);
  res.send(err.message);
});



module.exports = app;
