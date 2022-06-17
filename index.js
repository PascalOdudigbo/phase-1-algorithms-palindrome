function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("");
  if(word === reversedWord){
  return true;
  }
  else {
  return false;
  }
  
  }
  
  /* 
  Add your pseudocode here
  initialize palindrome function with string argument
  convert string to an array
  string "reversedWord" = wordConvertedToArray reversed and converted back to string
  
  if word = reversedWord:
  return true
  else 
  retrun false
  */
  
  /*
  Add written explanation of your solution here
  
  CREATE THE PALINDROME FUNCTION
  CONVERT THE STRING TO AN ARRAY 
  REVERSE THE STRING
  CONVERT THE STRING INTO AN ARRAY
  REVERSE THE ARRAY ELEMENTS
  CONVERT ARRAY BACK INTO A STRING
  INITIALIZE A "REVERSED" STRING VARIABLE WITH THE REVERSED STRING
  CHECK IF WORD IS SAME AS REVERSED STRING 
  IF EQUIVALENT REURN TRUE
  IF NOT RETURN FALSE 
  */
  
  // You can run `node index.js` to view these console logs
  if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  }
  
  module.exports = isPalindrome;
  
  