var request = require('request');
var cheerio = require('cheerio');
request('https://www.indeed.com/jobs?q=developer&l=Los+Angeles%2C+CA', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    console.log($);
    $('span.summary').each(function(i, element) {
      var a = $(this).prev();
      console.log(a.text());
    });
  }
});
