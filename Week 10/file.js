var fs = require('fs');

fs.writeFile('movies.txt', 'inception, die hard', function(){
	console.log('complete!');
});

fs.readFile('movies.txt', 'utf8', function(error, data){
	if (error){
		console.log('hey there\'s an error!');
	} else { console.log(data);
}
});