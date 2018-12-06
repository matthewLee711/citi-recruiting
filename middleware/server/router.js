const Recruit = require('./controllers/RecruitController');

module.exports = function(app) {
  app.get('/', Recruit.getLineNumber);

  // app.get('/async', Simple.helloWorldAsync);

  // app.post('/upper', Simple.returnUpper);
}