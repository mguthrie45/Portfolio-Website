resume = document.getElementById("resume");
resume_cover = document.getElementById("cover");
res_container = document.getElementById("resume_container")
function open_res() {
	resume.style["display"] = "block";
	resume_cover.style["display"] = "none";
	res_container.style["height"] = "400px"
}

(function(){

  var parallax = document.querySelectorAll("body"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "0 " + (-50-windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();

/*var prev_pos = window.pageYOffset;
var nav_bar = document.getElementById("navBar");
window.onscroll = function(){
	var current_pos = window.pageYOffset;
	if (current_pos > prev_pos) {
		nav_bar.style.top = "-80px";
	}
	else {
		nav_bar.style.top = "0px";
	}
	prev_pos = current_pos;
}*/
