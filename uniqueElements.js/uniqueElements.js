var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  console.log(uniq(line.split(',')).join(','));
});

function uniq(arr){
  var a = {};
  var b = [];
  arr.forEach( function( x ){
    a[x] = true;
  })
  for (var key in a){
    b.push(key)
  }
  return b;
}