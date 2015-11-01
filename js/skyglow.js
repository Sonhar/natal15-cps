$(document).ready(function() {
  var $sky = $(".header");
  var factor = 8000;
  var maxSize = 110;
  var middleSize = 30;

  var skyHeight = $sky.innerHeight(),
      skyWidth = $sky.innerWidth();
      numberOfStars = (skyWidth * skyHeight) / factor;

  for (var i = 0; i < numberOfStars; i++) {
    var fSize = (maxSize-middleSize) * (i/numberOfStars) + middleSize;
    var starSize = Math.floor((Math.random() * fSize) + 2),
        starTop = Math.floor(Math.random() * skyHeight),
        starLeft = Math.floor(Math.random() * skyWidth);

    var glow;
    if (starSize > 70) {
      glow = $('<div class="skyglow-big gradient">');
    } else {
      glow = $('<div class="skyglow gradient">');
    }

    glow.css({
     width: starSize,
     height: starSize,
     top: starTop,
     left: starLeft
   });

   glow.prependTo($sky);

   glow.plaxify({
     xRange: starSize,
     yRange: starSize,
     invert: false
   })

  }

  $.plax.enable();
})
