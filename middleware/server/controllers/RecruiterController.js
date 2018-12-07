const { completeUserInterview,
  initRecuiting,
  getRedisData } = require('../services/RecruiterService');


exports.getRedisInfo = async(req, res) => {
  var data = await getRedisData();
  res.status(200).send(data);
}

exports.initializeRecruiting = async(req, res) => {
  var data = await initRecuiting('temp');
  res.status(200).send(data);
}