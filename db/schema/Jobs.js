var db = require('../config.js')
var Sequelize = require('sequelize')

var Jobs = db.define('Jobs', {
  title : {
    type : Sequelize.STRING,
    allowNull : false
  },
  location: {
    type : Sequelize.STRING,
    allowNull : false
  },
  link: {
    type : Sequelize.STRING,
    allowNull : false
  }

});

module.exports = Jobs;
