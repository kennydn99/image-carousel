let slideNum = 0;
const allSlides = document.querySelectorAll(".slide");

function nextSlide() {
  if (slideNum !== allSlides.length - 1) showSlide(++slideNum);
}

function prevSlide() {
  if (slideNum !== 0) {
    showSlide(--slideNum);
  }
}

function showSlide(num) {
  allSlides.forEach((slide) => {
    if (!slide.classList.contains("hidden")) {
      slide.classList.toggle("hidden");
    }
  });
  allSlides[num].classList.toggle("hidden");
  activateDot(num);
}

function activateDot(num) {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot) => {
    if (dot.classList.contains("active")) {
      dot.classList.toggle("active");
    }
  });
  allDots[num].classList.toggle("active");
  slideNum = num;
}
