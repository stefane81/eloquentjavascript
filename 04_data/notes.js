/*global console, require*/
'use strict';
// load journal object as JOURNAL
var JOURNAL = require('./jacques_journal.js');

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

console.log('');
console.log('Computing correlation');
function hasEvent(event, entry){
  // return entry if found, else returns -1
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0,0,0,0];
  for(var i = 0; i<journal.length;i++){
    var entry = journal[i], index = 0;
    if(hasEvent(event, entry)){
      index += 1;
    }
    if(entry.squirrel){
      index += 2;
    }
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]

console.log('');
console.log('Objects as maps');
// store variables in map/dictionary
var map = {};
function storePhi(event, phi){
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
// → true
console.log(map["touched tree"]);
// → -0.081

// mapped objects cant for loop, instead use 'varible' in 'map'
for(var event in map){
  console.log("The correlation for '" + event + "' is " + map[event]);
}
