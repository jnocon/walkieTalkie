var db = require('../config.js')
var Sequelize = require('sequelize')

var Event = db.define('Event', {
  url : {
    type : Sequelize.STRING,
    allowNull : false,
    uniqueValue : true
  },
  title : {
    type : Sequelize.STRING,
    allowNull : false
  },
  organizer : {
    type : Sequelize.STRING,
    allowNull : false
  },
  location: {
    type : Sequelize.STRING,
    allowNull : true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Event;

