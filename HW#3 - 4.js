'use strict'

function reverse(str) {
  var newStr = str.split(' ');

  for (var i = 0; i < newStr.length; i++) {
    var word = newStr[i].split('');
    word = word.reverse().join('');
    newStr[i] = word;
  }

  newStr = newStr.join(' ');

  return newStr;
}

console.log(reverse('Улыбок тебе дед макар'));