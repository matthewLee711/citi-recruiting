const http = require('http');
const express = require('express');
const router = require('./server/router');
var bodyParser = require('body-parser');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
router(app);

const port = process.env.PORT || 3001;
var server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});