const myCarouselElement = document.querySelector("#carousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2500, // Changes the image every 3 seconds (1000 = 1 Second)
  touch: false,
});

//JavaScript code
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
