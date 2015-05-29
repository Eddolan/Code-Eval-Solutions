var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';
var matrix = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']];

function checkPaths( matrix, wordArr ){
  // looping through all i and j combinations and passing to gen words
  for ( i = 0; i < matrix.length; i++ ){
    for ( j = 0; j < matrix[ i ].length; j++ ){
      if ( validPath( i, j, wordArr, [] ) ){
        return true;
      }
    };
  };

  return false

  function validPath( i, j, wordArr, path){
    // if we are out of bounds return false
    if ( i < 0 || j < 0 || i >= matrix.length || j >= matrix[ i ].length ){
      return false;
    }

    // if the array is empty we are in a valid path!!
    if ( !wordArr.length ){
      return true;
    }

    // if this char matches the next char in the word we can proceed
    if ( wordArr[0] === matrix[ i ][ j ] && path.indexOf( '' + i + j ) === -1){
      path = path.slice();
      path.push( '' + i + j );
      return iterator();
    } else {
      return false;
    }


    function iterator(){
      // iterates over the 4 valid next paths
      var subStrArrr = wordArr.slice(1);
      var subpaths = [
        [ i + 1, j ],
        [ i - 1, j ],
        [ i, j + 1],
        [ i, j - 1]
      ]
      return subpaths.some( function( tup ){
        return validPath( tup[0], tup[1], subStrArrr, path );
      })
    }


  }
}

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
    if (line != "") {
      if ( checkPaths( matrix, line.split('') ) ){
        console.log( "True" );
      } else{
        console.log( "False" );
      }
    }
});


