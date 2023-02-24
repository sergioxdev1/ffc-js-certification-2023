function palindrome(str) {
  let strArray = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(strArray)
  let strArray2 = strArray.split("").reverse().join("");
  console.log(strArray2)
  return strArray==strArray2?true:false;
}

palindrome("eye");