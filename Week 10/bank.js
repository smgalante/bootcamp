var fs = require('fs');

var transaction = process.argv[2];
var amount = process.argv[3];

if (transaction == 'deposit'){
	fs.appendFile('bank_txt.txt', amount + ',');
}else if(transaction == 'total'){
	console.log('total is');
}else if (transaction == 'withdraw') {
	console.log('withdraw!' + amount);
}else if (transaction == 'lotto') {
	console.log('withdraw!' + amount);
}


//fs.readFile('bank_txt.txt', 'utf8', function(error, data){
//	var numbers = data.split(',');
//	console.log(data);
//	var total = 0;
//	for(i = 0; i < numbers.length; i++){
//		total = 

//	}

//});
