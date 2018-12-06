'use strict';

module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    // id: { type: DataTypes.INTEGER, primaryKey: true },
    userid: { type: DataTypes.STRING(128) },
    interviewed: { type: DataTypes.BOOLEAN },
    queuenumber: { type: DataTypes.INTEGER },
    createdate: { type: DataTypes.DATE },
    scheduledtime: { type: DataTypes.DATE },
  }, {
    timestamps: false
  });

  return users;
};