'use strict';

let arr = [1, 2, 3];

let cb = function(i){
  ++i;
  return i;
};

let mutate = function(array, transform){
  for (let i = 0; i < array.length; i++) {
    array[i] = transform(array[i]);
  }
  return array;
}

mutate(arr, cb);
