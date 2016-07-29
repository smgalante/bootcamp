var dogs = {
	raining: true,
	noise: "woof!",
	makeNoise: function () {
		if (dogs.raining === true){
		console.log(this.noise);
			}
		}
	}

var cats = {
	raining: false,
	noise: "meow!",
	makeNoise: function (){
		if (cats.raining == true){
		console.log(this.noise);	
		}
	}
}
dogs.makeNoise();
cats.makeNoise();

function(dog, cat){
	if(dogs.raning && cats.raining == true){
	console.log()
}