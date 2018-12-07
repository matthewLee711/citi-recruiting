const Users = require('../models').users;
const util = require('util');
const client = require('./redis-client');
client.get = util.promisify(client.get);
client.hget = util.promisify(client.hget);
client.hmget = util.promisify(client.hmget);
client.hdel = util.promisify(client.hdel);

async function getUserAccount(email) {
  console.log("email: ", email)
  return Users.findOne({ where: { email: email }});
}

async function initRecuiting(data) {
  clearDatabases();
  initDatabases();
  // setRecruitingInterval(data.startTime, data.endTime);
}

function clearDatabases() {
  // clear redis

  // clear postgres
  Users.destroy({
    where: {},
    truncate: true
  })
}

function initDatabases() {
  //In redis:
  // set queueNumber to 0
  // set resultTime to 0
  // set totalTime to 0
  console.log('Initializing databases');
  client.hset('recruit', 'queueNumber', 1);
  client.hset('recruit', 'resultTime', 0);
  client.hset('recruit', 'totalTime', 30);
}

async function getRedisData() {
  const currentQueueNumber = await client.hget('recruit', 'queueNumber');
  const currentResultTime = await client.hget('recruit', 'resultTime');
  const currentTotalTime = await client.hget('recruit', 'totalTime');
  // NOT NEEDED
  // const currentTrackerNumber = await client.hget('recruit', 'trackerTime');
  var data = { currentQueueNumber, currentResultTime, currentTotalTime};
  return data;
}

function setRecruitingInterval(startTime, endTime) {
  // calculate time based on start and endTime
  // set totalTime in redis
}

async function addSomeUsers() {
  // for temp
  Users.create({
    userid: 'bob',
    interviewed: false,
    queuenumber: 1
  });
  Users.create({
    userid: 'John',
    interviewed: false,
    queuenumber: 2
  });
  Users.create({
    userid: 'Barry',
    interviewed: false,
    queuenumber: 3
  });
  console.log("Added some users");
}

async function getAllUsers() {
  return Users.findAll({
    attributes: ['userid', 'interviewed', 'queuenumber']
  });
}

async function getUserFromLine(student) {
  console.log("userid: ", student)
  return Users.findOne({ where: { userid: student }});
}

async function completeUserInterview(student) {
  // time calc
  // postgres set user to have been interviewed
  // Set user to be interviewed 
  Users.update({
    interviewed: true, 
  }, {where: { userid: student.userid }});

  var currentResultTime = await client.hget('recruit', 'resultTime');
  var newResultTime = parseInt(currentResultTime) - parseInt(student.interviewTime);
  client.hset('recruit', 'resultTime', newResultTime);
  console.log('Set new result time');
}

async function forceEndRecruitingTime() {

}


module.exports = {
  completeUserInterview,
  initRecuiting,
  getRedisData,
  addSomeUsers,
  getAllUsers
};