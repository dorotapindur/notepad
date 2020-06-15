//choose color

export const colorInput = document.getElementById("color");
export let theColor = colorInput.value;

colorInput.addEventListener("input", function() {
  theColor = colorInput.value;
  document.documentElement.style.setProperty('--color', theColor);
});