// https://jsfiddle.net/njahnik/ukLs8fpr/

'use strict'

// Functions accept variable amount of arguments

function largest() {
  return Math.max.apply(null, arguments);
}

function smallest() {
  return Math.min.apply(null, arguments);
}

console.log(largest(2, -1, 100, 500, 50));
console.log(smallest(2, 0.1));