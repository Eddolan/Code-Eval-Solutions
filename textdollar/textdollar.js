var numbersToWords = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
};
var numbersToPlace = {
  10: 'Ten',
  100: 'Hundred',
  1000: 'Thousand',
  1000000: 'Million',
  1000000000: 'Billion',
  1000000000000: 'Trillion',
  1000000000000000: 'Quadrillion',
  1000000000000000000: 'Quintillion',
};

var place = ['Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion'];
Number.prototype.toEnglish = function () {
  var number = this;
  var hasDot = this.toString().indexOf('.') !== -1;
  var result = "";
  var placeCount = 0;
  if(!hasDot) {
    if(number <= 999) {
      return convert999(number);
    }
    while(number > 0) {
      if(number % 1000 !== 0) {
        var temp = number % 1000;
        var str = convert999(temp);
        if(placeCount > 0) {
          str = str + "" + place[placeCount - 1];
        }
        if(result.length === 0) {
          result += str;
        } else {
          result = str + "" + result;
        }
      }
      number = Math.floor(number / 1000);
      placeCount ++;
    }
  } else {
    var part1 = Math.floor(number);
    var integerPart = part1;
    var timesCount = 0;
    while(number - Math.floor(number) !== 0) {
      number = number * 10;
      integerPart = integerPart * 10;
      timesCount ++;
    }
    var part2 = number - integerPart;

    var str1 = part1.toEnglish();
    var str2 = part2.toEnglish();
    var str3 = convertDecimal(timesCount);
    console.log(str3);

    if(part2 !== 1) {
      str3 = str3 + "s";
    }

    if(part1 === 0) {
      result = str2 + "" + str3;
    } else {
      result = str1 + "" + str2 + "" +str3;
    }
  }
  return result;
};

var convert99 = function(num) {
  var result;
  if(num <= 20) {
    result = numbersToWords[num];
  } else {
    var digit1 = numbersToWords[num % 10];
    var digit2 = numbersToWords[num - num % 10];
    if(digit1 !== 'zero') {
      result = digit2 + "" + digit1;
    } else {
      result = digit2;
    }
  }
  return result;
}

var convert999 = function(num) {
  var result;
  var hundred = Math.floor(num / 100);
  var ten = convert99(num % 100);
  if(ten === 'zero') {
    if(hundred === 0) {
      result = numbersToWords[0];
    } else {
      result = numbersToWords[hundred] + "hundred";
    }
  } else {
    if(hundred !== 0) {
      result = numbersToWords[hundred] + "hundred" + ten;
    } else {
      result = ten;
    }
  }
  return result;
}

var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
    if (line === "1"){
      console.log('OneDollar');
    } else if (line != "") {
      console.log(parseInt(line).toEnglish() + 'Dollars');
    }
});
