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
  var userScheduled = await checkUserAlreadyScheduled(student.userid);
  var queueNumber = await generateQueueNumber();
  // const joinTime = moment().unix();
  // Get queue number
  if (!userScheduled) {
    return Users.create({
      userid: student.userid,
      interviewed: false,
      queuenumber: queueNumber
    });
  } else {
    console.log('Already Scheduled');
    return { error: 'Already Scheduled' };
  }
}

async function generateQueueNumber() {
  // get list of
  // Redis keep track of people interviewed
  const currentQueueNumber = await client.hget('recruit', 'queueNumber');
  client.hset('recruit', 'queueNumber', currentQueueNumber + 1);
  return currentQueueNumber;
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