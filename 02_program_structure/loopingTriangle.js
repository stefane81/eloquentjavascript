'use strict';
var x,y,hash;
// loop vertical
for(y=0;y<7;y++){
  // loop horizontal
  hash = '#'; // init hash
  for(x=0;x<(y);x++){
    hash += '#';
  }
  console.log(hash); // print out hash, no newline required
}
