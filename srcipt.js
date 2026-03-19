const gallery = document.querySelector(".gallery");

let acc = 0;

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    acc -= 5;
    gallery.style.marginLeft = `${acc}px`;
  }
  if (event.code === "ArrowLeft") {
    acc += 5;
    gallery.style.marginLeft = `${acc}px`;
  }
});

gallery.addEventListener("click", (e) => {
  const image = e.target.closest(".gallery__item");

  if (!image) return;

  const instance = basicLightbox.create(image.outerHTML);

  instance.show();
});