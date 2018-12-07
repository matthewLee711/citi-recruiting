const { completeUserInterview,
  initRecuiting,
  getRedisData,
  getAllUsers 
} = require('../services/RecruiterService');


exports.getRedisInfo = async(req, res) => {
  var data = await getRedisData();
  res.status(200).send(data);
}

exports.initializeRecruiting = async(req, res) => {
  var data = await initRecuiting('temp');
  res.status(200).send(data);
}

exports.getAllUsersPostgres = async(req, res) => {
  var data = await getAllUsers();
  res.status(200).send(data);
}

exports.endUserInterview = async(req, res) => {
  await completeUserInterview(req.body);
  res.status(200).send('Ended Interview');
}