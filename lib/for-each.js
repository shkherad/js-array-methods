'use strict';

//forEach will take an array and apply the callback
//to each member of the array without mutating the original
//array.
//Must return undefined.


let forEach = function(array, callback) {
  for (let i=0,max=array.length; i< max; i++){
    callback(array[i]);
  }
  return undefined
};

module.exports = forEach;

//if want to see output, include console.log in the callback 
