// https://jsfiddle.net/njahnik/0xp34wt8/

'use strict'

function splitAndMerge(str, sp) {
  var newStr = str.split(' ');

  for (var i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].split('').join(sp);
  }

  return newStr.join(' ');
}

console.log(splitAndMerge("Hello World!",","));

