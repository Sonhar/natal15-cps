$(document).ready(function() {
  var $sky = $(".header");
  var factor = 30000;
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

    var glow = $('<img src="imgs/cloud.png">');

    glow.css({
     width: starSize,
     height: (Math.random() * starSize/3) + starSize/10,
     top: starTop,
     left: starLeft,
     position: "absolute",
   });

   glow.prependTo($sky);

   glow.plaxify({
     xRange: starSize/5,
     yRange: starSize/5,
     invert: true
   })

  }

  $.plax.enable();
})
