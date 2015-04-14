'use strict';
var x,y, chessBoard='', cbSize = 8;
// loop vertical
for(y=0;y<cbSize;y++){
  // loop horizontal
  for(x=0;x<cbSize;x++){
    // If y is an even number
    if(y%2 === 0){
      // Set # every other time if x is an even number
      if(x%2 === 0){
        chessBoard += ' ';
      } else {
        chessBoard += '#';
      }
    } else { // if y is an odd number
      if(x%2 === 0){
        chessBoard += '#';
      } else {
        chessBoard += ' ';
      }
    }

  }
  chessBoard += '\n'; // newline after every x loop
}

console.log(chessBoard);
