var fs = require("fs")
var filepath = './go.txt';

console.log("Start Reading File !!!!")

/*fs.readFileSync(filepath)*/
fs.readFile(filepath, function(err, data){
	if(err){
		console.log(err)
	}
console.log("Done Reading File !!!")

console.log("Start writing file !!")

	fs.writeFile('recieve.txt', data, function(err, data){
	if(err){
		throw err;
		console.log(err)
	}
	
	})
	
})
console.log("Done writing File !!!")








/*var data = fs.readFileSync(filepath)
fs.writeFileSync('uma.txt',data)
*/