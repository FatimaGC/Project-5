//Lightbox plugin code

window.addEventListener("load", function () {
  baguetteBox.run(".gallery");
});

//Search Functionality
const searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  const searchInput = document.querySelector(".search-form_input");
  const searchValue = searchInput.value.toLowerCase();
  // console.log(searchValue);

  filterImages(searchValue);
}

function filterImages(searchValue) {
  const imageCaption = document
    .querySelector(".gallery_img")
    .getAttribute("data-caption");

  // console.log(imageCaption);
  console.log(imageCaption.includes("hay"));

  if (imageCaption.includes(searchValue)) {
    return console.log("We have a match!");
  } else {
    return console.log("We don't have a match!");
  }
}
// const input = document.querySelector("#search-form"); //Targets input element

// input.addEventListener("submit", () => {
//   console.log(input.value.toLowerCase());
//   let searchValue = input.value.toLowerCase();
//   // let searchValue = input.value.toLowerCase();
//   // let caption = document.querySelectorAll("data-caption");
//   // caption.getAttribute("data-caption");

// const firstImage = document
//   .querySelector(".gallery_img")
//   .getAttribute("data-caption");

// // for (let i = 0; i < 12; i++) {
// //   console.log(caption[i].dataset.caption);
// // }

//   if (searchValue.includes(firstImage)) {
//     console.log("We have a match!");
//   } else {
//     console.log("We don't have a match!");
//   }
// });

// if (searchValue.includes(caption)) {
//   console.log("We have a match!");
// } else {
//   console.log("We don't have a match!");
// }

// // Code for a single item
// const firstImage = document
//   .querySelector(".gallery_img")
//   .getAttribute("data-caption");

// console.log(firstImage);

// let textValue = firstImage.textContent || firstImage.innerText;
