var db = require('../../db/config.js');
var sequelize = require('sequelize')
var Promise = require('bluebird')
var Jobs = require('../../db/schema/Jobs.js');

module.exports.jobsGetAll = function(req, res) {
  db.query('select * from Jobs', {type: sequelize.QueryTypes,SELECT})
  .then(jobsFound => {
    cb(null, jobsFound)
  })
  .catch(error => {
    cb(error)
  })
}

module.exports.jobsAddOne = function(req, res) {
  console.log(req.body.jobObj)
  var title = req.body.jobObj.title;
  var company = req.body.jobObj.company;
  var location = req.body.jobObj.location;
  var salary = req.body.jobObj.salary;
  var link = req.body.jobObj.link;


  Jobs.create({
		title: title,
    company: company,
		location: location,
    salary: salary,
		link: link
	}, function (err, jobs){
    if (err) {
      console.log('error creating job');
      res
      .status(400)
      .json(err);
    } else {
      console.log('Job created', jobs);
      res
      .status(201)
      .json(jobs);
          }
    });
  };
