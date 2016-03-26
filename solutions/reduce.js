'use strict';

// if we want sum of all numbers in array

let arr = [1, 2, 3];

//*//////////////////////
// broken down
//////////////////////*//
let cb = function(array){
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

let reduce = function(array, callback) {
  return callback(array);
};

//*//////////////////////
// examples
//////////////////////*//
let total = arr.reduce((a, b) => a + b);

// same as
// arr.reduce(function(a,b){
//   return a + b;
// })

let flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => a.concat(b));

module.exports = reduce;
