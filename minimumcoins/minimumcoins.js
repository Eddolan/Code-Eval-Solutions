var s = {};
var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';
var returnArr;
var coins = [5,3,1];
var rem;
var sum;
var temp;

var minCoins = function(num){
  rem = num;
  sum = 0;
  for (var i = 0; i < coins.length; i++){
    temp = divMod(rem, coins[i])
    rem = temp[1];
    sum += temp[0];
  }
  console.log(sum);
}

var divMod = function(num, div){
  returnArr = [];
  returnArr.push(Math.floor(num / div));
  returnArr.push(num % div);
  return returnArr;
}

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
    if (line != "") {
      minCoins(line);
    }
});