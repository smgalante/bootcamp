var request = require('request');

request('https://en.wikipedia.org/wiki/Granola#Granola_bar', function(error, response, body){

	if(!error && response.statusCode == 200) {
		console.log(body);
	}


})