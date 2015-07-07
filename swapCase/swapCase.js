var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync( filename ).toString().split( '\n' ).forEach( function (line) {
    if ( line != "" ) {
      console.log(line.split('').map(function( letter ){
        return swapCase( letter );
      }).join(''));
    }
});

function swapCase( char ){
  var lower = char.toLowerCase();
  var upper = char.toUpperCase();
  if ( lower === char ){
    return upper;
  } else{
    return lower;
  }
}