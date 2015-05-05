var arr = [];
var first = false;
var limit;
var addToArray = function(newLine){
  var i;
  for (i = 0; i < arr.length; i++){
    if (arr[i].length > newLine.length){
      break;
    }
  }
  arr.splice(i, 0, newLine);
}

var longestLines = function(line){
  if (!first){
    limit = parseInt(line);
    first = true;
  };
  if (arr.length < limit){
    addToArray(line);
  } else if (line.length > arr[0].length){
    arr.splice(0,1);
    addToArray(line);
  };
};
var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
    if (line != "") {
        longestLines(line);
    }
});
for (var i = arr.length - 1; i >= 0; i--){
  console.log(arr[i])
}