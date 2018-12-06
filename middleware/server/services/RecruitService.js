const client = require('./redis-client');
client.get = util.promisify(client.get);
client.hget = util.promisify(client.hget);
client.hmget = util.promisify(client.hmget);
client.hdel = util.promisify(client.hdel);


// False - user not interviewed yet
// True - user has been interviewed
async function addUserToLine(student) {
  client.hset('user', 'bob', false);
  const result = await isUserEligible('bob');
  console.log(result);
}

async function getUserFromLine(student) {
  client.hget('user', 'bob');
  const result = await isUserEligible('bob');
  return result;
}

async function deleteUserFromLine(student) {
  client.hdel('user', 'bob', false);
  const result = await isUserEligible('bob');
  console.log(result);
}

module.exports = {
  addUserToLine,
  getUserFromLine,
  deleteUserFromLine
};