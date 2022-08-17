//Lightbox plugin code

window.addEventListener("load", function () {
  baguetteBox.run(".gallery");
});

const input = document.querySelector("#search-form");

input.addEventListener("keyup", () => {
  console.log(input.value);
});
