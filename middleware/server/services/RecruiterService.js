const Users = require('../models').users;

async function getUserAccount(email) {
  console.log("email: ", email)
  return Users.findOne({ where: { email: email }});
}