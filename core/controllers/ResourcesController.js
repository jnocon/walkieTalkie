var db = require('../../db/config.js');
var sequelize = require('sequelize')
var Promise = require('bluebird')
var Resources = require('../../db/schema/Resources.js');

module.exports.resourcesGetAll = function(req, res) {
  console.log('in resource ctrl get all')
  db.query('select * from Resources', {type: sequelize.QueryTypes.SELECT})
  .then(resourcesFound => {
    res
    .json(resourcesFound)
  })
  .catch(error => {
    res
    .status(500)
    .json(err)
  })
}

module.exports.resourcesAddOne = function(req, res) {
  console.log(req.body.resourceObj)
  var title = req.body.resourceObj.title;
  var subject = req.body.resourceObj.subject;
  var link = req.body.resourceObj.link;


  Resources.create({
		title: title,
    subject: subject,
		link: link
	}, function (err, resources){
    if (err) {
      console.log('error creating resource');
      res
      .status(400)
      .json(err);
    } else {
      console.log('Resource created', resources);
      res
      .status(201)
      .json(resources);
          }
    });
  };
