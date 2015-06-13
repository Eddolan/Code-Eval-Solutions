var filename = process.argv[2] || 'test.txt';
var fs = require('fs');
var matrix = [];

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    matrix.push( line.split( ' ' ).map( function( num ){
      return parseInt( num );
    }));
  }
});

// iterating from 2nd last row to the top
for ( var i = matrix.length - 2; i >= 0; i-- ){
  // iterating across row
  for ( var j = 0; j < matrix[ i ].length; j++ ){
    matrix[ i ][ j ] += Math.max( matrix[ i + 1 ][ j ], matrix[ i + 1 ][ j + 1 ] )
  }
}

console.log(matrix[ 0 ][ 0 ]);

