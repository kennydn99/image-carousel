let slideNum = 0;
const allSlides = document.querySelectorAll(".slide");
console.log(allSlides.length);
function nextSlide() {
  if (slideNum !== allSlides.length - 1) showSlide(++slideNum);
  console.log("Going to next slide!", "slideNum is: ", slideNum);
}

function prevSlide() {
  if (slideNum !== 0) {
    showSlide(--slideNum);
    console.log("Going to prev slide!", "slideNum is: ", slideNum);
  }
}

function showSlide(num) {
  allSlides.forEach((slide, index) => {
    if (!slide.classList.contains("hidden")) {
      slide.classList.toggle("hidden");
    }
  });
  allSlides[num].classList.toggle("hidden");
}
