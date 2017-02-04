var Sequelize = require('sequelize');
// rakon db mysql://admin:VJRRJJDHOFSKAPWL@aws-us-east-1-portal.5.dblayer.com:16918/compose

var db = new Sequelize('mysql://admin:VJRRJJDHOFSKAPWL@aws-us-east-1-portal.5.dblayer.com:16918/compose');
module.exports = db;
