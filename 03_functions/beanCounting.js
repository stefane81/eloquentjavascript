/*global console*/
'use strict';


function countChar(str, ch){
  var count = 0, i;

// loop length of str
  for(i= 0; i<str.length;i++) {    
    if(str.charAt(i) === ch){
      count++;
    }
  }

  return count;
}

// console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
