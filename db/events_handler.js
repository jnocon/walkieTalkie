var db = require('./config.js')
var sequelize = require('sequelize')
var Promise = require('bluebird')
var Events = require('./schema/Event.js');

module.exports.createEvent = (eventObj, cb) => {
	Events.create({
		url: eventObj.url,
		title: eventObj.title,
		organizer: eventObj.organizer,
		location: eventObj.location,
		description: eventObj.description
	})
	.then(createdEvent => {
		cb(null, createdEvent)
	})
	.catch(error => {
		cb(error)
	})
}


module.exports.getAllEvents=(cb) => {
	db.query('select * from Events')
	.then(eventsFound => {
		cb(null, eventsFound)
	})
	.catch(error => {
		cb(error)
	})
}
