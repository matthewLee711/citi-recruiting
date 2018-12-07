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
}

function initDatabases() {
  //In redis:
  // set queueNumber to 0
  // set resultTime to 0
  // set totalTime to 0
  console.log('Initializing databases');
  client.hset('recruit', 'queueNumber', 0);
  client.hset('recruit', 'resultTime', 0);
  client.hset('recruit', 'totalTime', 0);
}

async function getRedisData() {
  const currentQueueNumber = await client.hget('recruit', 'queueNumber');
  const currentResultNumber = await client.hget('recruit', 'resultTime');
  const currentTotalNumber = await client.hget('recruit', 'totalTime');
  var data = { currentQueueNumber, currentResultNumber, currentTotalNumber};
  return data;
}

function setRecruitingInterval(startTime, endTime) {
  // calculate time based on start and endTime
  // set totalTime in redis
}

async function getUserFromLine(student) {
  console.log("userid: ", student)
  return Users.findOne({ where: { userid: student }});
}

async function completeUserInterview(student) {
  client.hdel('user', 'bob', false);
  const result = await isUserEligible('bob');
  console.log(result);
}

async function forceEndRecruitingTime() {

}


module.exports = {
  completeUserInterview,
  initRecuiting,
  getRedisData
};