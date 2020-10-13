'use strict'

function stringExpansion(str) {

  var expandedStr = [];
  var multiplier = 1;

  for (var i = 0; i < str.length; i++) {
    if (isNaN(Number(str[i]))) {
      for (var j = 0; j < multiplier; j++) {
        expandedStr.push(str[i]);
      }
      multiplier = 1;
    } else {
      multiplier = Number(str[i]);
    }
  }

  return expandedStr.join('');
}

console.log(stringExpansion('3d323f25a'));