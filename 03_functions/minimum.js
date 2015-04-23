/*global console*/
'use strict';

/// Return the lower number
function min(a,b) {
  if(a<b){
    return a;
  }
  // If same number
  if (a===b){
    return 'Same same no different';
  }
  // Will only reach this statement if the others are false
  return b;
}

console.log(min(0,10));
console.log(min(0,-10));
console.log(min(0,0));
