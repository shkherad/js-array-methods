'use strict';

//map() takes an array and calls the callback on each
//member of the array, returning a new array with all
//the results of these operations

let map = function(array, callback) {
  let result = [];
  for (let i = 1, max = array.length; i < max , i++){
    result.push = callback(array[i]);
  }
return array
};

module.exports = map;
