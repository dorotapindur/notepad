//choose color

var colorInput = document.getElementById("color");
   
colorInput.addEventListener("input", function() {
  var theColor = colorInput.value;
  document.documentElement.style.setProperty('--color', theColor);
});