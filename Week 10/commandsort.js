var funArray = [];

for (var i = 2; i < process.argv.length; i++){
 funArray.push(process.argv[i]);
}

funArray.sort();

console.log(funArray);