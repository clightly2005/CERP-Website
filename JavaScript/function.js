//JavaScript code
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// creates variable called slideIndex and sets it to 1 (first image in index)
let slideIndex = 1;

// function is called at top of page so that when the it loads an image appears automatically
showSlides(slideIndex);

// main function. n is a placeholder for any parameter passed in
function showSlides(n) {
  // creates variable 'i' with no value
  let i;
  // variable named 'slides' set by a class tag in index.HTML
  let slides = document.getElementsByClassName("mySlides");
  // variable dots is the same
  let dots = document.getElementsByClassName("dot");
  console.log(dots);

  // if statement: if number value of n when function was called is greater than number of slides (3),
  // set slideIndex to 1 (taken back to image 1)
  if (n > slides.length) {
    slideIndex = 1;
  }
  // if the value of n when function was called is less than the number of slides
  // set slideIndex to be total number of slides(takes us to the last image)
  if (n < 1) {
    slideIndex = slides.length;
  }

  // for loop: variable i now has value of 0, condition is i must be less than total number of slides,
  // each time the loop is ran add 1 to i untill eventualy back to start.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // i to the value of 0, condition is i must be less than the total number of dots,
  // each time loop is ran add 1 to i.
  for (i = 0; i < dots.length; i++) {
    // set to active instead of the default not active
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // displays slides as a block element
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  slideIndex = 0;
  for (i = 0; i < slides.length; i++) {
    setTimeout(showSlides, 4000); // Need to work on this so change image every 4 seconds and also fade images
  }
}

// this function is being called when the user clicks on prev or next, can be put anywhere in this file
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// this function is being called when the user clicks on a dot
function currentSlide(n) {
  showSlides((slideIndex = n));
  let slideIndex = 0;
}

const charlotte = "annoying";
