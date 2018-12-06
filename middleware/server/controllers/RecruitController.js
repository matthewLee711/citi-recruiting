const { addUserToLine, getUserFromLine } = require('../services/RecruiteeService');

// Async get request 
exports.helloWorldAsync = async(req, res, next) => {
  res.status(200).send('Hello World');
}

// Hello world get request
exports.getUserLineInfo = async(req, res) => {
  var data = await getUserFromLine('bob');
  res.status(200).send(data);
}

// {
//   userid: "",
//   interviewed: "",
//   queuenumber: "",
//   scheduledtime:""
// }

exports.addStudentToLine = async(req, res) => {
  var user = req.body.user;
  var status = await addUserToLine(user);
  if(status === true) {
    res.status(200).send('Success');
  } else {
    res.status(500).send('Fail');
  }
}

exports.removeUserFromLine = async(req, res) => {
  var user = req.body.user;
  var status = await addUserToLine(user);
  if(status === true) {
    res.status(200).send('Success');
  } else {
    res.status(500).send('Fail');
  }
}

exports.getLineNumber = async(req, res) => {
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