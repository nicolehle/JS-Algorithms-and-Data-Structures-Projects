/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

function palindrome(str) {

 str = str.toLowerCase().replace(/[\W_]+/g, "");
 console.log(str)
 return Array.from(str).toString() === Array.from(str).reverse().toString()
}



palindrome("eye");
console.log(palindrome("eye"));

// 0. remove all non alphanumeric characters and white space. (with regex, first character of a sentence didn't changed so before replace it change characters to lower case.)
// 1. get another array of str that has oposite order of original str (Array.from(string) allows a string to be in an array)
// 2. compare a reversed array with original
