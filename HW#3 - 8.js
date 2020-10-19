// https://jsfiddle.net/njahnik/o2sxuw9z/

'use strict'

function sum() {

  var numbers = Array.prototype.slice.call(arguments);

  if (numbers.length === 1) {
    return numbers[0];
  }

  return numbers[0] + sum.apply(this, numbers.slice(1));
}

console.log(sum(1, 3, 5, 7));