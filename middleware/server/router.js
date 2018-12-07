const Recruit = require('./controllers/RecruitController');
const Recruiter = require('./controllers/RecruiterController');

module.exports = function(app) {
  app.get('/', Recruit.getLineNumber);

  app.get('/getuser', Recruit.getUserLineInfo);

  app.post('/adduser', Recruit.addStudentToLine);

  app.get('/redisinfo', Recruiter.getRedisInfo);

  app.post('/initrecruiting', Recruiter.initializeRecruiting);

  app.get('/allusers', Recruiter.getAllUsersPostgres);

  app.post('/endinterview', Recruiter.endUserInterview);

  app.get('/nextuserinline', Recruiter.getNextUserInLineByQueueID);

  // app.post('/upper', Simple.returnUpper);
}