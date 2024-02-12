const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
let i = 1;

slides[0].style.display = "block";
dots[0].classList.add("active");

const showSlide = (i) => {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[i].style.display = "block";

  dots[i].classList.add("active");
};
let slideInterval = null;
const slideshow = (flag) => {
  if (flag) {
    slideInterval = setInterval(() => {
      if (i === slides.length) {
        i = 0;
      }
      showSlide(i);
      i++;
    }, 2000);
  } else {
    clearInterval(slideInterval);
  }
};

slideshow(true);

// const arrowClick = (button) => {
//   slideshow(false);
//   if (button === "prev") {
//     i--;
//     if (i < 0) {
//       i = slides.length - 1;
//     }
//   } else {
//     i++;
//     if (i === slides.length) {
//       i = 0;
//     }
//   }
//   showSlide(i);
//   slideshow(true);
// };

const previousSlide = () => {
  slideshow(false); // This stops the interval
  i--;
  if (i < 0) {
    i = slides.length - 1;
  }
  showSlide(i);
  slideshow(true); // This starts the interval again
};

const nextSlide = () => {
  slideshow(false); // This stops the interval
  i++;
  if (i === slides.length) {
    i = 0;
  }
  showSlide(i);
  slideshow(true); // This starts the interval again
};
