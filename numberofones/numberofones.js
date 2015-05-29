var s = {};
var fs  = require("fs");
var filename = process.argv[2] || 'test.txt'

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
    if (line != "") {
      console.log(parseInt(line).toString(2).replace(/0/g,"").length);
    }
});