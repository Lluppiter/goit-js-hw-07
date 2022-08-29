import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const listImages = galleryItems
  .map(
    (image) =>
      `<a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a>`
  )
  .join("");
console.log(listImages);
galleryList.insertAdjacentHTML("beforeend", listImages);
