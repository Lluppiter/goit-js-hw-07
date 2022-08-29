import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const listImages = galleryItems
  .map(
    (image) =>
      `<a class="gallery__item" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a>`
  )
  .join("");
galleryList.insertAdjacentHTML("beforeend", listImages);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
gallery.on("show.simplelightbox");
