var s = {};
var fs  = require("fs");
var filename = process.argv[2] || 'test.txt'
var lineArr;
var tempStr;
var i;
fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
    if (line != "") {
      lineArr = line.split(' ');
      tempStr = '';
      for (i = lineArr.length - 1; i > 1; i -= 2){
        tempStr += lineArr[i] + ' ';
      }
      tempStr += lineArr[i];
      console.log(tempStr);
    }
});