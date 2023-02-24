/* PROBLEM
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
  let strArray = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(strArray)
  let strArray2 = strArray.split("").reverse().join("");
  console.log(strArray2)
  return strArray==strArray2?true:false;
}

palindrome("eye");

/* --- EXPLANATION
This function takes a string as input and first removes all non-alphanumeric characters using a regular expression (/[^a-zA-Z0-9]/g) and converts the remaining string to lowercase using the toLowerCase() method.

Then, the function checks if the resulting string is equal to its reverse by splitting it into an array of characters using the split('') method, reversing the array using the reverse() method, and joining the characters back into a string using the join('') method.

If the string is a palindrome, the function returns true. Otherwise, it returns false.
*/