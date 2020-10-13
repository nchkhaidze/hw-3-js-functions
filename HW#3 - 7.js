'use strict'

function transform(arr) {
  var functionArray = [];

  for (var i = 0; i < arr.length; i++) {

    // using a wrapper function to make a closure of arr[i] and IIFE to invoke it
    
    functionArray[i] = (function(element) {
        return function() {
          return element;
        }
    })(arr[i]);
  }

  return functionArray;
}

var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);
console.log(newArray);
console.log(newArray[0]());
