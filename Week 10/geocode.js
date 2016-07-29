var geocoder = require('geocoder');

geocoder.geocode(process.argv[2], function(err, data){
	if (!err){
		JSON.stringify(data);
	}
	
});