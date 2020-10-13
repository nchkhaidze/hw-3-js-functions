'use strict'

function splitAndMerge(str, sp) {
  var newStr = str.split(' ')
  .map(word => word.split(''))
  .map(word => word.join(sp))
  .join(' ');

  return newStr;
}

console.log(splitAndMerge('My name is John', ' '));
