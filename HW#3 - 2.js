'use strict'

function convert(hash) {
  var newArr = [];

  for (let prop in hash) {
    var keyValuePair = [];
    keyValuePair.push(prop);
    keyValuePair.push(hash[prop]);
    newArr.push(keyValuePair);
  }

  return newArr;
}

var record = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
console.log(convert(record));