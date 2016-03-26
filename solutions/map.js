"use strict";

let arr = [1, 2, 3];

let cb = function(i){
  ++i;
  return i;
};

//*//////////////////////
// broken down
//////////////////////*//
let map = function(array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr[i] = callback(array[i]);
  }
  return newArr;
};

//*//////////////////////
// example
//////////////////////*//
arr.map(i => ++i);

// same as
// arr.map(function(i){
//   return ++i;
// })

module.exports = map;
