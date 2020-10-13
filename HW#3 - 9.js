'use strict'

function countdown(sec) {
  var i = sec;

  var timer = setInterval(function() {
    console.log(i--);
  }, 1000);

  // taking extra second to correct for 0
  setTimeout(function() {
    clearInterval(timer);
  }, 1000 * sec + 1000);
}

countdown(10);
