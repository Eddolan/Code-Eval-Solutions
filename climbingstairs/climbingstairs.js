var fibo = [0,1];
var cs = function(fb){
  while (fibo.length - 2 < fb){
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])
  }
  return fibo[parseInt(fb) + 1];
};

var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(cs(line));
    }
});