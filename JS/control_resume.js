var frame = document.getElementById("resume-frame");
var button_content = document.querySelector("#resume_button div span");

function expand_close_resume() {
  if (frame.style.display === "none") {
    frame.style.display = "block";
    button_content.innerHTML = "Close Resume";
  }
  else if (frame.style.display === "block") {
    frame.style.display = "none";
    button_content.innerHTML = "View Resume";
  }
  else {
    frame.style.display = "block";
    button_content.innerHTML = "Close Resume";
  }
}
