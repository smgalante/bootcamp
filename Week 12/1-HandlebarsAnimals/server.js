var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var animals = [
  {animalType: 'dog', pet: true, fierceness: 4},
  {animalType: 'cat', pet: true, fierceness: 10},
  {animalType: 'giraffe', pet: false, fierceness: 4},
  {animalType: 'zebra', pet: false, fierceness: 8},
  {animalType: 'lion', pet: false, fierceness: 10}
];

app.get('/dog', function(req,res) {
  res.render('dog', animals[0]);

  //handlebars requires an object to be sent to the dog handlebars file
  //lucky for us, animals[0] is an object!

  //1. send the dog object from the animals array to the dog handlebars file.

});

app.get('/all-pets', function(req,res) {
  var data = {
    anims : []
  };

  for(var i = 0; i < animals.length; i++) {
    var currentAnimal = animals[i];

    if (currentAnimal.pet){
      data.anims.push(currentAnimal);
    }
  }
  //handlebars requires an object to be sent to the index handlebars file
res.render('index', data);
  //2. send the animals to the index handlebars file. Remember that animals is an array and not an object.

});

app.get('/all-non-pets', function(req,res) {
  //handlebars requires an object to be sent to the index handlebars file.

  //3. send all the animals that are not pets to the index handlebars file.

});

var port = 3000;
app.listen(port);
