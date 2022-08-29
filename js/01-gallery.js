import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
console.log(galleryList);

const listImages = galleryItems.map(
  (image) =>
    `<a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a>`
);
console.log(listImages);
listItems.insertAdjacentHTML("beforeend", listImages);
