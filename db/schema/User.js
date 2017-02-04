var db = require('../config.js')
var Sequelize = require('sequelize')

var Users = db.define('Users', {
  email : {
    type : Sequelize.STRING,
    allowNull : false,
    uniqueValue : true
  },
  firstname : {
    type : Sequelize.STRING,
    allowNull : false
  },
  lastname : {
    type : Sequelize.STRING,
    allowNull : false
  },
  password : {
    type : Sequelize.STRING,
    allowNull : false
  },
  upName : {
    type : Sequelize.STRING,
    allowNull : false,
    defaultValue: "Your Name"
  },
   upImage : {
    type : Sequelize.STRING,
    allowNull : false,
    defaultValue: "Put Image URL Here"
  },
   upLanguages : {
    type : Sequelize.STRING,
    allowNull : false,
    defaultValue: "Javascript, C++, etc.,"
  },
  upFrameworks : {
    type : Sequelize.STRING,
    allowNull : false,
    defaultValue: "Angular, Express, etc.,"
  },
    upLocation : {
    type : Sequelize.STRING,
    allowNull : false,
    defaultValue: "Location"
  },
   upEmail : {
    type : Sequelize.STRING,
    allowNull : false,
    defaultValue: "Email"
  },
   upPhone : {
    type : Sequelize.STRING,
    allowNull : false,
    defaultValue: "Phone Number"
  },
   upSkype : {
    type : Sequelize.STRING,
    allowNull : false,
    defaultValue: "Skype Handle"
  },
   upGitHub : {
    type : Sequelize.STRING,
    allowNull : false,
    defaultValue: "Github Username"
  },
   upLinkedIn : {
    type : Sequelize.STRING,
    allowNull : false,
    defaultValue: "LinkedIn URL"
  }
  
});


module.exports = Users;

