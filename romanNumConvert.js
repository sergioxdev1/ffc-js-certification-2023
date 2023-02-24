/*
Roman Numeral Converter
Convert the given number into a roman numeral.
Roman numerals	Arabic numerals
M	              1000
CM	            900
D	              500
CD	            400
C	              100
XC	            90
L	              50
XL	            40
X	              10
IX	            9
V	              5
IV	            4
I	              1
All roman numerals answers should be provided in upper-case.
*/
function convertToRoman(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      roman += key;
      num -= romanNumerals[key];
    }
  }
  return roman;
}
console.log(convertToRoman(1111));
console.log(convertToRoman(213));

/* -- Explanation
This function works by iterating through the romanNumerals object, which contains the Roman numeral equivalents of the Arabic numerals. It uses a while loop to repeatedly add the largest Roman numeral less than or equal to the input number to the roman string, and subtracts the value of the Roman numeral from the input number until the input number is zero. Finally, it returns the roman string, which contains the Roman numeral equivalent of the input number.
*/