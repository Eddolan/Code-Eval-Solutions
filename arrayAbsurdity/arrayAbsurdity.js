var s = {};
var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
    if (line != "") {
      s = {};
      var data = line.split(';');
        var arr = line.split(';').pop().split(',');
        for (var i = 0; i < arr.length; i++){
          if (s[arr[i]]){
            console.log(arr[i]);
            break;
          } else{
            s[arr[i]] = true;
          }
        }
    }
});