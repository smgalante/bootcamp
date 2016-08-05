'use strict';
module.exports = function(sequelize, DataTypes) {
  var manager = sequelize.define('manager', {
    fullName: DataTypes.STRING,
    storeZip: DataTypes.INTEGER,
    uniformColor: DataTypes.STRING,
    uniformNumber: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return manager;
};