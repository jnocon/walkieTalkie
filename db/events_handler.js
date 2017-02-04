var db = require('./config.js')
var sequelize = require('sequelize')
var Promise = require('bluebird')
var Events = require('./schema/Event.js');
var request = require('request');
var cheerio = require('cheerio');

module.exports.createEvent = (eventObj, cb) => {
	console.log('in event creation')
	var url, title, organizer, location, description, time
	url = eventObj.url
	scraper(eventObj.url, function(err, result) {
		if(err) {
			console.log('error getting resulst from scraper', err)
		} else {
			title = result.title || eventObj.title
			organizer = result.organizer || eventObj.organizer
			location = result.location || eventObj.location
			description = result.description || eventObj.description
			time = result.time || eventObj.time
			console.log('we have', title, organizer, location, description, time)
			Events.create({
				url: url,
				title: title,
				organizer: organizer,
				location: location,
				description: description,
				time: time
			})
			.then(createdEvent => {
				cb(null, createdEvent)
			})
			.catch(error => {
				console.log('error trying to create an event in db', error)
				cb(error)
			})
		}
	})
}

var scraper = (url, cb) => {
	console.log('in scraper')
	request(url, (error, response, html) => {
		if(!error) {
			var $ = cheerio.load(html)

			var title, organizer, location, description, time
			var json = { title: '', organizer: '', location: '', description: '', time: '' }

			$('.listing-title').filter(function(){
				var data =$(this);

				title=data.text()

				console.log('the title of this event is', title)
				json.title = title
			})

			$('.listing-organizer-name').filter(function() {
				var data = $(this);

				organizer = data.text()

				console.log('the organizer of this event is', organizer)
				json.organizer = organizer
			})

			$('.event-details').filter(function() {
				var data = $(this);

				time = data.children().first().next().children().first().next().next().children().first().text()
				location = data.children().last().prev().children().first().text()

				console.log('the location of this event is', location, 'and time is', time)
				json.location = location
				json.time = time
			})

			// $('.js-xd-read-more-contents').filter(function() {
			// 	var data = $(this);

			// 	description = data.children()

			// 	console.log('the description of this event is', description)
			// 	json.description = description
			// })

			cb(null, json)

		} else {
			console.log('i dont know how to webscapre')
		}
	})
}


module.exports.getAllEvents=(cb) => {
	db.query('select * from Events', {type: sequelize.QueryTypes.SELECT})
	.then(eventsFound => {
		cb(null, eventsFound)
	})
	.catch(error => {
		cb(error)
	})
}
