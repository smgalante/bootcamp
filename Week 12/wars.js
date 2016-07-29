// Dependencies
// ===========================================================
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Data
// ===========================================================
var yoda = {
	name: "Yoda",
	role: "Jedi Master",
	age: 900,
	forcePoints: 2000
}

var darthmaul = {
	name: "Darth Maul",
	role: "Sith Lord",
	age: 200,
	forcePoints: 1200
}

// Create one more data entry for the character Obi Wan Kenobi. 
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
// 

// YOUR CODE GOES HERE
var kenobi = {
	name: "Obi Wan Kenobi",
	role: "Jedi Master",
	age: 80,
	forcePoints: 1500
}
// 

// Routes
// ===========================================================
app.get('/', function(req, res){
	res.send("Welcome to the Star Wars Page!")
})

app.get('/yoda', function(req, res){
	res.json(yoda);
});

app.get('/darthmaul', function(req, res){
	res.json(darthmaul);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes 
// 

// YOUR CODE GOES HERE

// 
app.get('/kenobi', function(req, res){
	res.json(kenobi);
});


// Listener
// ===========================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})

