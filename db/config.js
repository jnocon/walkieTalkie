var Sequelize = require('sequelize');

// OURs db mysql://admin:VJRRJJDHOFSKAPWL@aws-us-east-1-portal.5.dblayer.com:16918/compose
//ACTUALLY RAKONS mysql://admin:DRCEOPOGMXRLKTZP@aws-us-east-1-portal.7.dblayer.com:15853/compose
var db = new Sequelize('mysql://admin:VJRRJJDHOFSKAPWL@aws-us-east-1-portal.5.dblayer.com:16918/compose');
module.exports = db;
