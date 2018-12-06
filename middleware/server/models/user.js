'use strict';

module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    // id: { type: DataTypes.INTEGER, primaryKey: true },
    email: { type: DataTypes.STRING(128) },
    upassword: { type: DataTypes.TEXT },
    created: { type: DataTypes.DATE },
    lastlogin: { type: DataTypes.DATE },
  }, {
    timestamps: false
  });

  return users;
};