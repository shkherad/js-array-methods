'use strict';

let arrayEven = [12, 8, 130, 44];
let arrayOdd = [18, 83, 50, 47];


function isEven(num) {
  return num % 2 === 0;
}

//*//////////////////////
// broken down
//////////////////////*//
let every = function(array, callback) {
  let allEven = true;
  for (var i = 0; i < array.length; i++) {
    if (isEven(array[i]) === false) {
      allEven = false;
    }
  }
  return allEven;
};

//*//////////////////////
// examples
//////////////////////*//
arrayOdd.every(num => num % 2);

// same as
// arrayOdd.every(function(num){
//   return num % 2 === 0;
// })

module.exports = every;
