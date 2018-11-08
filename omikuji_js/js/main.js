(function() {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function(){
    var results = ["大吉", "中吉", "凶"];
    var n = Math.random();
    if (n<0.05) {
      n = 0;
    } else if (n < 0.2) {
      n = 1;
    } else {
      n = 2;
    }
    this.textContent = results[n];
  });
  btn.addEventListener('mousedown', function(){
    this.className = "pushed";
  });
  btn.addEventListener("mouseup", function(){
    this.className = "";
  });
})();
