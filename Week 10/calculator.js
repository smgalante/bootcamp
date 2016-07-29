var inputString = process.argv;

var operand = inputString[2];
var x = inputString[3];
var y = inputString[4];

if (operand == 'add'){
	console.log(parseInt(x)+parseInt(y));
}
else if (operand == 'subtract'){
	console.log(parseInt(x) - parseInt(y));

}else if (operand == 'multiply'){
	console.log(parseInt(x) * parseInt(y));

}else if (operand == 'divide'){
	console.log(parseInt(x) * parseInt(y));

}
