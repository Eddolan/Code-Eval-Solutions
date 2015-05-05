var fs  = require("fs");
var storage;
var m;
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
    if (line != "") {
        storage = line.split(' ')
        m = parseInt(storage.pop());
        if (storage.length >= m){
          console.log(storage[storage.length - m]);
        }
 ;   }
});