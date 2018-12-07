const Users = require('../models').users;
const moment = require('moment');
const util = require('util');
const client = require('./redis-client');
client.get = util.promisify(client.get);
client.hget = util.promisify(client.hget);
client.hmget = util.promisify(client.hmget);
client.hdel = util.promisify(client.hdel);
// {
//   userid: "",
//   interviewed: "",
//   queuenumber: "",
//   scheduledtime:""
// }

async function addUserToLine(student) {
  console.log('adding', student.userid);
  var userScheduled = await checkUserAlreadyScheduled(student.userid);
  var availableTime = await checkAvailableTime();
  await incrementResultTime();
  // const joinTime = moment().unix();
  // Get queue number
  if (!availableTime) {
    console.log('No available time left');
    return 500;
  }
  if (!userScheduled || !availableTime) {
    var queueNumber = await generateQueueNumber();
    return Users.create({
      userid: student.userid,
      interviewed: false,
      queuenumber: queueNumber
    });
  } else {
    console.log('Already Scheduled');
    return 500;
  }
}

async function generateQueueNumber() {
  // get list of
  // Redis keep track of people interviewed
  const currentQueueNumber = await client.hget('recruit', 'queueNumber');
  var plusOne = parseInt(currentQueueNumber) + 1;
  client.hset('recruit', 'queueNumber', plusOne);
  return currentQueueNumber;
}

async function checkAvailableTime() {
  const resultTime = await client.hget('recruit', 'resultTime');
  const totalTime = await client.hget('recruit', 'totalTime');
  const availableTime = parseInt(totalTime) - parseInt(resultTime);
  if (availableTime < 5 ) {
    return false;
  } else {
    return true;
  }
}

async function incrementResultTime() {
  const resultTime = await client.hget('recruit', 'resultTime');
  var updatedResultTime = parseInt(resultTime) + 5;
  client.hset('recruit', 'resultTime', updatedResultTime);
}

async function getQueueTime(student) {
  return Users.findOne({ where: { userid: student }});
}

async function getUserFromLine(student) {
  console.log("userid: ", student)
  return Users.findOne({ where: { userid: student }});
}

async function deleteUserFromLine(student) {
  client.hdel('user', 'bob', false);
  const result = await isUserEligible('bob');
  console.log(result);
}

async function checkUserAlreadyScheduled(userid) {
  // Dynamic username + useridchecking?
  var res = await Users.findOne({ 
    attributes: ['userid'],
    where: { userid: userid }
  });

  if(res === null) {
    return false;
  } else {
    var string = JSON.stringify(res);
    var objectValue = JSON.parse(string);
  
    if (objectValue['userid'] === userid) {
      return true;
    } else {
      return false;
    }
  }
   
};

module.exports = {
  addUserToLine,
  getUserFromLine,
  deleteUserFromLine
};