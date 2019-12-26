const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Error = require('./error/error');

// set up express app
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

  // // Request methods you wish to allow
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // // Set to true if you need the website to include cookies in the requests sent
  // // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// connect to mongodb
mongoose.connect('mongodb://localhost/AssetsManag');
mongoose.Promise = global.Promise;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
// use body-parser middleware
app.use(bodyParser.json());
app.use(require('body-parser').urlencoded({ extended: true }));
// initialize routes

app.use('/building', require('./routes/Building'));
app.use('/room', require('./routes/Rooms'));
app.use('/asset', require('./routes/Assets'));

// error handling middleware
app.use(function (err, req, res, next) {
  console.log("Error:", err.message); // to see properties of message in our console
  res.status(err.status).send({ error: err.message });
});

// listen for requests
app.listen(process.env.port || 4000, function () {
  console.log('listening at 4000');
});
