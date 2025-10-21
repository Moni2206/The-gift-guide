const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll(".image-box img");
let current = 0;

const showImage = (index) => {
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
};

carousel.querySelector(".arrow.left").addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

carousel.querySelector(".arrow.right").addEventListener("click", () => {
  current = (current + 1) % images.length;
  showImage(current);
});

// Vis første billede ved start
showImage(current);
