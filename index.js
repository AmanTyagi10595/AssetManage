const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Error = require('./error/error');
const cors = require('cors');

// set up express app
const app = express();
app.use(cors());

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
app.use('/common', require('./routes/common'));

// error handling middleware
app.use(function (err, req, res, next) {
  console.log("Error:", err.message); // to see properties of message in our console
  res.status(err.status).send({ error: err.message });
});

// listen for requests
app.listen(process.env.port || 4000, function () {
  console.log('listening at 4000');
});
