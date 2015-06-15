var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

function binary(dec){
    return (dec >>> 0).toString(2);
}

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var a = line.split( ',' ).map( function ( num ){ return parseInt( num ) } );
    var b = binary( a[ 0 ] );
    console.log( b[ b.length - a[ 1 ] ] === b[ b.length - a[ 2 ] ] );
  }
});



