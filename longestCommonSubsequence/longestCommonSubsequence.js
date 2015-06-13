var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';
var temp;
var tree;

var Tree = function(val){
  this.value = val;
  this.children = [];
};

Tree.prototype.addChild = function( val ){
  this.children.forEach( function( child ){
    child.addChild(val);
  })
  this.children.push( new Tree(val) );
};

Tree.prototype.contains = function( searchArr ){
//   var subArrs = [];
//   var scores = [];
//   var result = 0;
//   var i;
//   var index;

//   for ( var i = 0; i < searchArr.length; i++ ){
//     index = searchArr.indexOf( )
//   }

//   if ( !this.children.length ){
//     return result;
//   }

//   return result + this.mapChildren( val, searchArr );

// };

// Tree.prototype.mapChildren = function( dataArr, searchArr ){
//   var a = Math.max.apply(null, this.children.map( function( child ){
//     return child.contains( val, searchArr );
//   }));
//   console.log(a)
//   return a


  // given an array and a branch

  // base case is no array

  // look for a match in the array to this value
  // if match return


}

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
    if (line != "") {
      temp = line.split(';');
      temp[0] = temp[0].split('');
      temp[1] = temp[1].split('');
      tree = new Tree();

      temp[0].forEach( function( child ){
        tree.addChild( child );
      });

      var x = tree.contains( temp[1] );
      console.log(x)
    }
});


