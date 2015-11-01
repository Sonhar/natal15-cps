$(document).ready(function() {

  var $dragon = $(".dragon");
  var $sky = $(".header");


  dragonAnimation();
  function dragonAnimation(){
    $dragon.css(
      {
        "margin-left": $sky.width() + "px",
      }
    );
		$dragon.animate(
			{
        "margin-left": ((-1) * $dragon.width()) + "px",
      },
      10000,
      "linear",
			dragonAnimation
		);
	}
});
