// https://jsfiddle.net/njahnik/1vq9c05p/2/

'use strict'

Function.prototype.myBind = function(context) {
  var boundArgs = Array.prototype.slice.call(arguments, 1);
  var newFunction = this;
  
  return function() {
    var definedArgs = Array.prototype.slice.call(arguments);
    // returning function with applied context and args from both calls
    return newFunction.apply(context, boundArgs.concat(definedArgs));
  }
};

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1)); // 10