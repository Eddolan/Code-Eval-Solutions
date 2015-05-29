// -**----*--***--***---*---****--**--****--**---**--
// *--*--**-----*----*-*--*-*----*-------*-*--*-*--*-
// *--*---*---**---**--****-***--***----*---**---***-
// *--*---*--*-------*----*----*-*--*--*---*--*----*-
// -**---***-****-***-----*-***---**---*----**---**--
// --------------------------------------------------

var s = {};
var fs  = require("fs");
var filename = process.argv[2] || 'test.txt'

var nums = {
  0: {
    0: '-**-',
    1: '*--*',
    2: '*--*',
    3: '*--*',
    4: '-**-',
    5: '----'
  },
  1: {
    0: '--*-',
    1: '-**-',
    2: '--*-',
    3: '--*-',
    4: '-***',
    5: '----'
  },
  2: {
    0: '***-',
    1: '---*',
    2: '-**-',
    3: '*---',
    4: '****',
    5: '----'
  },
  3: {
    0: '***-',
    1: '---*',
    2: '-**-',
    3: '---*',
    4: '***-',
    5: '----'
  },
  4: {
    0: '-*--',
    1: '*--*',
    2: '****',
    3: '---*',
    4: '---*',
    5: '----'
  },
  5: {
    0: '****',
    1: '*---',
    2: '***-',
    3: '---*',
    4: '***-',
    5: '----'
  },
  6: {
    0: '-**-',
    1: '*---',
    2: '***-',
    3: '*--*',
    4: '-**-',
    5: '----'
  },
  7: {
    0: '****',
    1: '---*',
    2: '--*-',
    3: '-*--',
    4: '-*--',
    5: '----'
  },
  8: {
    0: '-**-',
    1: '*--*',
    2: '-**-',
    3: '*--*',
    4: '-**-',
    5: '----'
  },
  9: {
    0: '-**-',
    1: '*--*',
    2: '-***',
    3: '---*',
    4: '-**-',
    5: '----'
  },
}

var a1 = '';
var a2 = '';
var a3 = '';
var a4 = '';
var a5 = '';
var a6 = '';
var rows = [a1,a2,a3,a4,a5,a6]

var bigDigits = function(num){

  var reuturnString = '';
  for (var i = 0; i < rows.length; i++){
    reuturnString += nums[num][i] + '-'
  }
};

var join = function(){
  var retString = '';
  for (var i = 0; i < rows.length - 1; i++){
    retString += rows[i] + '\n'
  }
  retString += rows[5]
  console.log(retString)
};
console.log(bigDigits('8'));


// var s = {};
// var fs  = require("fs");
// fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
//     if (line != "") {
//     }
// });