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
  await clearDatabases();
  initDatabases();
  if(data != null) {
    setRecruitingInterval(data.totalTime);
  }
}

async function clearDatabases() {
  // clear redis

  // clear postgres
  return Users.destroy({
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
  client.hset('recruit', 'nextInLineQueueNumber', 1);
  client.hset('recruit', 'resultTime', 0);
  client.hset('recruit', 'totalTime', 30);
}

async function getRedisData() {
  const currentQueueNumber = await client.hget('recruit', 'queueNumber');
  const nextInLineQueueNumber = await client.hget('recruit', 'nextInLineQueueNumber');
  const currentResultTime = await client.hget('recruit', 'resultTime');
  const currentTotalTime = await client.hget('recruit', 'totalTime');
  // NOT NEEDED
  // const currentTrackerNumber = await client.hget('recruit', 'trackerTime');
  var data = { currentQueueNumber, nextInLineQueueNumber, currentResultTime, currentTotalTime};
  return data;
}

function setRecruitingInterval(totalTime) {
  // calculate time based on start and endTime
  // set totalTime in redis
  console.log(totalTime);
  client.hset('recruit', 'totalTime', parseInt(totalTime));
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

async function getUserFromLineByQueueID(queue) {
  console.log("userid: ", queue)
  return Users.findOne({ where: { queuenumber: queue }});
}

async function getNextInLineQueueNumber() {
  return client.hget('recruit', 'nextInLineQueueNumber');
}

async function completeUserInterview(student) {
  // time calc
  // postgres set user to have been interviewed
  // If student was interviewed, skip all of this

  var interviewed = await checkUserAlreadyInterviewed(student.userid);
  if(!interviewed) {
    // Set user to be interviewed 
    Users.update({
      interviewed: true, 
    }, {where: { userid: student.userid }});
  
    // Update next in line queue number
    var currentLineQueueNumber = await client.hget('recruit', 'nextInLineQueueNumber');
    var nextInLineQueueNumber = parseInt(currentLineQueueNumber) + 1
    client.hset('recruit', 'nextInLineQueueNumber', nextInLineQueueNumber);
  
    // Update Result Time
    var currentResultTime = await client.hget('recruit', 'resultTime');
    var newResultTime = parseInt(currentResultTime) - parseInt(student.interviewTime);
    client.hset('recruit', 'resultTime', newResultTime);
    console.log('Set new result time');
  } else {
    console.log('User has already been interviewed');
  }
}

async function checkUserAlreadyInterviewed(userid) {
  // Dynamic username + useridchecking?
  var res = await Users.findOne({ 
    attributes: ['interviewed'],
    where: { userid: userid }
  });

  if(res === null) {
    return false;
  } else {
    var string = JSON.stringify(res);
    var objectValue = JSON.parse(string);
  
    if (objectValue['interviewed'] === true) {
      return true;
    } else {
      return false;
    }
  }
   
};


async function forceEndRecruitingTime() {

}


module.exports = {
  completeUserInterview,
  initRecuiting,
  getRedisData,
  addSomeUsers,
  getAllUsers,
  getUserFromLineByQueueID,
  getNextInLineQueueNumber
};