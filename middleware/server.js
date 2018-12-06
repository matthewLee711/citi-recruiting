const http = require('http');
const express = require('express');
const router = require('./server/router');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
router(app);

const port = process.env.PORT || 3000;
var server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});