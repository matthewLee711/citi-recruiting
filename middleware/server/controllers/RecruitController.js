// Async get request 
exports.helloWorldAsync = async(req, res, next) => {
  res.status(200).send('Hello World');
}

// Hello world get request
exports.getLineNumber = (req, res) => {
  res.status(200).send('Hello World');
}

// Post request to uppercase a string
// Send a json { "string" : "text" } to /upper
// returns "TEXT"
// Import BasicService file which contains function
// const { toUpper } = require('../services/BasicService');

exports.returnUpper = (req, res) => {
  var str = req.body.string;
  upperCaseStr = toUpper(str);
  res.status(200).send(upperCaseStr);
}