var fs = require('fs')     
var contents = fs.readFile(process.argv[2].toString(),function(err,contents){
    // if (err) return console.error(err);
    lines = contents.toString().split('\n').length - 1  
console.log(lines)
})  
