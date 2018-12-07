const Recruit = require('./controllers/RecruitController');
const Recruiter = require('./controllers/RecruiterController');

module.exports = function(app) {
  app.get('/', Recruit.getLineNumber);

  app.get('/getuser', Recruit.getUserLineInfo);

  app.post('/adduser', Recruit.addStudentToLine);

  app.get('/redisinfo', Recruiter.getRedisInfo);

  app.get('/initrecruiting', Recruiter.initializeRecruiting);

  // app.post('/upper', Simple.returnUpper);
}