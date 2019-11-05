/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
  let charCode;
  let newStr = '';
  // Get each index of str
  for(let i = 0; i < str.length; i++){
    // Get Str.Charcode from its index
    charCode = str.charCodeAt(i);

    //add 13 for charcode [A-M] and other stays same
    if(charCode < 65 || charCode > 90) {
      charCode = charCode;
    } else {
       charCode += 13;
       if(charCode > 90) {
         charCode = (charCode - 90) + 64;
       }
    }
    newStr += String.fromCharCode(charCode);
  }
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));
