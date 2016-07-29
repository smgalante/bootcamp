var mysql = require('mysql');
var Table = require('cli-table2');
var table = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "icecreamDB"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

connection.query('SELECT * FROM products', function(err, res){
	if (err) throw err;
	//for(i = 0; i < res.length; i++) {
	//	console.log(res[i].id +'  '+ res[i].flavor + '  '+ res[i].price+'  '+res[i].quantity);
	//}
	console.table(res);
});