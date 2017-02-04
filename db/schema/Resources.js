var db = require('../config.js')
var Sequelize = require('sequelize')

var Resources = db.define('Resources', {
  title : {
    type : Sequelize.STRING,
    allowNull : false
  },
  subject : {
    type : Sequelize.STRING,
    allowNull : false
  },
  link: {
    type : Sequelize.STRING,
    allowNull : false
  }

});

module.exports = Resources;
