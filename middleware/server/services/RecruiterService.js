const Users = require('../models').users;

async function getUserAccount(email) {
  console.log("email: ", email)
  return Users.findOne({ where: { email: email }});
}

async function addUserToLine(student) {
  var emailAvailable = await userAlreadyScheduledCheck(student.email);

  // Get queue number
  if (!emailAvailable) {
    return Users.create({
      userid: student.email,
      interviewed: false,
      queuenumber: 5,
      scheduledtime: student.scheduledtime
    });
  } else {
    console.log('Already Scheduled');
    return { error: 'Already Scheduled' };
  }
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

async function userAlreadyScheduledCheck(userid) {
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
  
    if (objectValue['email'] === email) {
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