var s = {};
var fs  = require("fs");
var filename = process.argv[2] || 'test.txt'
var lineArr;
var distance;
var pointCount = 0;
var points = [];
var min;
var i;
var j;
var tempNum;
var a;
var b;
var minsq;

var minDist = function(arr){
  min = 10000;
  for (i = 0; i < arr.length - 1; i++){
    for (j = i + 1; j < arr.length; j++){
      tempNum = dist(arr[i], arr[j])
      if (tempNum < min){
        min = tempNum;
        minsq = tempNum * tempNum;
      }
    }
  }
  if (min === 10000){
    console.log('INFINITY');
  } else{
    console.log(min);
  }
}

var dist = function(p1, p2){
  var a = p1[0] - p2[0];
  var b = p1[1] - p2[1];
  if (a + b > min || a * b > minsq){
    return 10000;
  }
  return Math.round(Math.sqrt( Math.pow(a,2) + Math.pow(b,2)) * 10000)/ 10000;
}

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
    if (line != "") {
      if (!pointCount){
        if (points.length){
          minDist(points);
        }
        points = [];
        pointCount = parseInt(line);
      } else{
        points.push(line.split(' '));
        pointCount--;
      }
    }
});