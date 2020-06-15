//choose size

var sizeInput = document.getElementById("size");
   
sizeInput.addEventListener("input", function() {
  var theSize = sizeInput.value;
  document.documentElement.style.setProperty('--size', theSize);
});