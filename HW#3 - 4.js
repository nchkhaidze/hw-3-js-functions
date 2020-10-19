// https://jsfiddle.net/njahnik/naLk6xc1/

'use strict'

function reverse(str) {
  var newStr = str.split(' ');

  for (var i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].split('').reverse().join('');
  }

  newStr = newStr.join(' ');

  return newStr;
}

console.log(reverse('A fun little challenge!'));