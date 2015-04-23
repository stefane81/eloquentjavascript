/*global console*/
'use strict';

function isEven(num){
  // when num <2 return results
  if(num === 0){
    return true;
  } else if (num === 1 || num < 0){
    return false;
  }

    // call function again (recursion), but subtract 2 from num
    return isEven(num-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
