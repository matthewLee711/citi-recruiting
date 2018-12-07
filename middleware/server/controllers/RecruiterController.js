const { completeUserInterview,
  initRecuiting,
  getRedisData,
  getAllUsers,
  getUserFromLineByQueueID,
  getNextInLineQueueNumber
} = require('../services/RecruiterService');
const moment = require('moment');

exports.getRedisInfo = async(req, res) => {
  var data = await getRedisData();
  res.status(200).send(data);
}

exports.initializeRecruiting = async(req, res) => {
  var data = await initRecuiting(req.body);
  var date = new Date();
  var current_hour = date.getDate;
  res.status(200).send(current_hour);
}

exports.getAllUsersPostgres = async(req, res) => {
  var data = await getAllUsers();
  res.status(200).send(data);
}

exports.endUserInterview = async(req, res) => {
  await completeUserInterview(req.body);
  console.log('Ended Interview');
  res.status(200).send('Ended Interview');
}

exports.getNextUserInLineByQueueID = async(req, res) => {
  const queueid = await getNextInLineQueueNumber();
  const user = await getUserFromLineByQueueID(queueid);
  console.log('Got user:',user.userid);
  res.status(200).send(user);
}