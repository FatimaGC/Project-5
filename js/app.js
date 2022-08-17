//Lightbox plugin code

window.addEventListener("load", function () {
  baguetteBox.run(".gallery");
});

//Search Functionality

const input = document.querySelector("#search-form"); //Targets input element

input.addEventListener("keyup", () => {
  console.log(input.value.toLowerCase());
});

const caption = document.querySelectorAll("a");

const captionValue = caption.getAttribute("data-caption");

console.log(captionValue);
