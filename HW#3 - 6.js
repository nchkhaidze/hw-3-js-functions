'use strict'

// Functions accept arbitrary amount of arguments

function largest(numbers) {
  var max = arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }

  return max;
}

function smallest(numbers) {
  var min = arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }

  return min;
}

console.log(largest(2, -1));
console.log(smallest(2, 0.1));