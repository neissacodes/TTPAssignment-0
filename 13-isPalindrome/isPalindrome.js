function isPalindrome(word) {
  // Insert code here;
  //Returns true if the word is a palindrome, false if it is not
   return word === word.split(' ').reverse().join(' ');
}

// Do not edit this line;
module.exports = isPalindrome;
