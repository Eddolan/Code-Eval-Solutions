var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

var fiboNums = [0,1];

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
    if (line != "") {
      console.log( fibo(line) );
    }
});


function fibo( i ){
  i++
  var k = fiboNums.length
  while( k < i ){
    fiboNums.push(fiboNums[ k - 1 ] + fiboNums[ k - 2 ]);
    k++;
  }
  return fiboNums[ i - 1 ];
}
