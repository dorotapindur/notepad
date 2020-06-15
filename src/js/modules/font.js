//choose font

var fontInput = document.getElementById("font");
   
fontInput.addEventListener("input", function() {
  var theFont = fontInput.value;
  document.documentElement.style.setProperty('--font', theFont);
});