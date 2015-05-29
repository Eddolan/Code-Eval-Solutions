var data;
var temp;
var i;
var missing;
var max;
var fs  = require("fs");
var retString;
var filename = process.argv[2] || 'test.txt'
fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
    if (line != "") {
      data = line.split(';');
      temp = data[1].split(' ')
      data[1] = temp.map( function(x){
        return parseInt(x);
      })
      data[0] = data[0].split(' ');
      max = Math.max.apply(null, data[1]);
      missing = false;
      for ( i = 1; i < max; i++){
        if ( data[1].indexOf(i) === -1 ){
          data[1].push(i);
          missing = true;
        }
      }
      if ( !missing ){
        data[1].push( max + 1 );
        max = max + 1;
      }
      retString = '';
      for ( i = 1; i <= max; i++){
        retString += data[0][data[1].indexOf(i)] + ' ';
      }
      console.log(retString.trim())
    }
});