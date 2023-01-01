module.exports = function toReadable (number) {
   
}

/* 
toReadable(1); // Will return 'one'
toReadable(997); //will return 'nine hundred ninety seven'
*/

/* 
1 - 13 - one, two, three, four, six, seven, eigth, nine, ten, eleven, twelve, thirteen

14 - 19 - fourteen fifteen sixteen seventeen eighteen nineteen 

20 - twenty

30 - thirty

40 - forty

50 - fifty

60 - sixty

70 - seventy

80 - eighty

90 - ninety

100 - one hundred

997 - nine hundred ninety seven
*/

function toReadable(num) {
    let result;
  
    // check num is number
    if (isNaN(+num)) {
      return "Argument must be a number";
    }
  
    // if 0
    if (num === 0) {
      result = "zero";
    }
  
    const preDecimal = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen"
    };
  
    const another = {
      0: "ten",
      1: "eleven",
      2: "twelve",
      3: "thirteen",
      4: "fourteen",
      5: "fifteen",
      6: "sixteen",
      7: "seventeen",
      8: "eighteen",
      9: "nineteen"
    };
  
    const decimal = {
      1:"", 
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty",
      6: "sixty",
      7: "seventy",
      8: "eighty",
      9: "ninety"
    };
    // if less then 20
    if (num > 0 && num < 20) {
      result = preDecimal[num];
    }
    // if more then 20
    if (num >= 20 && num < 100) {

      const numStr = num.toString();
  
      // if second number === 0
      if (+numStr[1] === 0) {

        result = decimal[+numStr[0]];

      } else {

        result = `${decimal[numStr[0]]} ${preDecimal[+numStr[1]]}`;
      }
    }
  
    // if 100 and more
    if (num >= 100) {

      const numStr = num.toString();
      const firstIndex = +numStr[0];
      const middleIndex = +numStr[1];
      const lastIndex = +numStr[2];
  
      if (middleIndex === 0) {

        result = `${preDecimal[firstIndex]} hundred`;

        result += ` ${preDecimal[lastIndex] ? preDecimal[lastIndex] : ""}`;

      } else {

        result = `${preDecimal[firstIndex]} hundred`;

        result += ` ${
          decimal[middleIndex] && lastIndex === 0
            ? decimal[middleIndex]
            : decimal[middleIndex]
        }`;
        
        result += ` ${preDecimal[lastIndex] ? preDecimal[lastIndex] : ""}`;
      } 
    }
  
    return result;
  }
  
  console.log(toReadable(1));
  console.log(toReadable(997));
