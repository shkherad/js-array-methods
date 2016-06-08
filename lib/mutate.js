'use strict'

//mutate() should take and array and a callback function as arguments
//mutate will mutate the original array based on the callback
//and will return the updated array

let mutate = function(array, callback) {
  for (let i = 0, max = array.length; i < max ; i++){
    array[i] = callback(array[i]);
  }
return array
};

module.exports = mutate;
