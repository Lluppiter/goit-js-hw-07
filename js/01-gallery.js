import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
const listImages = galleryItems
  .map(
    (image) =>
      `<a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a>`
  )
  .join("");
galleryList.insertAdjacentHTML("beforeend", listImages);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
  const closeModalByEsc = (event) => {
    if (event.code === "Escape") {
      instance.close();
      console.log("отслеживает");
      document.removeEventListener("keydown", closeModalByEsc);
    }
  };
  document.addEventListener("keydown", closeModalByEsc);
});
