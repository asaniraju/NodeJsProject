var fs=require("fs")
console.log("start writing file!!!")
fs.writeFile('recieve.txt','Hello world', function(err,data){
	if(err){
		throw err;
		console.log(err)
	}
	console.log(data)
})
console.log("Done writing file!!")