'use strict'

//filter(); creates a new array with all elements that passe
//the test function

let filter(array,callback){
  let result = [];
    for (let i=0,max=array.length; i<max; i++){
      if (callback(array[i])){
        result.push(array[i])
      }
    } return false
  }
