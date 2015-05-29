var s = {};
var fs  = require("fs");
var filename = process.argv[2] || 'test.txt'
var lineArr;
var tempStr;
var tempArr;
var storage = [];
var ans;

var recurse = function(arr, tempStr){
  if (arr.length === 1){
    return storage.push(tempStr + arr[0]);
  }
  for (var i = 0; i < arr.length; i++){
    tempArr = [];
    tempStr += arr[i];
    tempArr = arr.slice(0, i).concat(arr.slice(i + 1))
    recurse(tempArr, tempStr);
    tempStr = tempStr.slice(0, tempStr.length - 1);
  }
  return storage;
};

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
    if (line != "") {
      storage = [];
      lineArr = line.split('').sort();
      ans = recurse(lineArr, '');
      tempStr = '';
      for (var i = 0; i < ans.length - 1; i++){
        tempStr += ans[i] + ',';
      }
      tempStr += ans[ans.length - 1];
      console.log(tempStr);
    }
});