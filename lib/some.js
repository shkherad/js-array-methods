'use strict'
//some(); will test whether some element in the array
//passes the test implemented by
//the callback

let some = function(array,callback){
  for (let i=0,max=array.length; i<max; i++){
    if (callback(array[i])){
      return true
    }
  } return false
}


let fxn = function(number){
  if (number > 10) {
    return true
  } else {
    return false
  }
}
