var fs  = require("fs");
var fb = function(n,a,b){
  var rs = "";
  if (!(n%a)){
    rs += 'F'
  }
  if (!(n%b)){
    rs += 'B'
  }
  if (rs===''){
    return n;
  }
  return rs;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var a = "";
        var n = line.split(' ');
        for (var i=1; i<n[2];i++){
          a += fb(i,n[0],n[1]) + ' ';
        }
        a += fb(i,n[0],n[1])
        console.log(a);
    }
});