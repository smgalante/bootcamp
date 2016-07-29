function Character(options){
	this.name = options.name;
	this.profession = options.profession;
	this.gender = options.gender;
	this.age = options.age;
	this.strength = options.age;
	this.hitPoints = options.hitPoints;
	this.printStatus = function(){
		console.log(this.name, this.profession, this.gender, this.age, this.strength, this.hitPoints)
	}
}

var john = new Character({name:'john', profession: "blacksmith", age: 34, gender: "male", strength: 300, hitPoints: 1000});
var sara = new Character({name:'sara', profession: "dragon charmer", age: 22, gender: "female", strength: 400, hitPoints: 900});

john.printStatus();
sara.printStatus();
