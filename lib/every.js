'use strict';

let every = function(array, callback) {
  let bool = true;

  for (let i=0, max = array.length; i< max; i++){
    if (!callback(array[i])){
      return false;
    }
  }

  return true;
};

module.exports = every;
