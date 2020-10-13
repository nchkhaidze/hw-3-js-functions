'use strict'

function toCamelCase(str) {

  var newStr = str.split(/[-_]/g);

  for (var i = 1; i < newStr.length; i++) {
    var firstLetter = newStr[i][0].toUpperCase();
    newStr.splice(i, 1, newStr[i].replace(/^./, firstLetter));
  }

  newStr = newStr.join('');

  return newStr;
}

console.log(toCamelCase('The_stealth-warrior'));