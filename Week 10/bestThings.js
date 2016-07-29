var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', function(error, data) {
	if(error){
		console.log(error);
	}
	var text = data.toString();
	var results = text.split(",");
	//console.log(results);

	for (var i = 0; i < results.length; i++){
		console.log(results[i]);
	}
});

