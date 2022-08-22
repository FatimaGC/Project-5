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

//Function to filter images
function filterImages(searchValue) {
  const images = Array.from(document.querySelectorAll(".gallery_img"));
  const rejectedImages = images.filter((image) => {
    const imageCaption = image.getAttribute("data-caption").toLowerCase();
    return !imageCaption.includes(searchValue);
  });

  displayFilteredImages(rejectedImages, images);
}

//Function to display images
function displayFilteredImages(rejectedImages, images) {
  images.forEach((image) => {
    image.classList.remove("hide");
  });
  rejectedImages.forEach((image) => {
    image.classList.add("hide");
  });
}
