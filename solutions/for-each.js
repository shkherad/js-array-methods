'use strict';

let arr = [1, 2, 3];

let cb = function(i){
  ++i;
  console.log(i);
};

//*//////////////////////
// broken down
//////////////////////*//
let forEach = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
  return array;
};

//*//////////////////////
// example
//////////////////////*//
arr.forEach(i => console.log(i++));

// same as
// arr.forEach(function(i){
//   console.log(i++);
// })


module.exports = forEach;
