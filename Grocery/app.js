"strict";

const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const mobilNavBtn = document.querySelector(".mobil");

let clicked = false;
let xAxis;
let x;

sliderContainer.addEventListener("mouseup", () => {
  sliderContainer.style.cursor = `grab`;
});
sliderContainer.addEventListener("mousedown", (e) => {
  clicked = true;
  xAxis = e.offsetX - slider.offsetLeft;
  // tells the current position

  sliderContainer.style.cursor = `grabbing`;
});

window.addEventListener("mouseup", () => {
  clicked = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
  if (!clicked) return;
  e.preventDefault();

  x = e.offsetX;
  slider.style.left = `${x - xAxis}px`;
  // but we dont want it to scroll forever

  checkSize();
});

function checkSize() {
  let sliderContainerOut = sliderContainer.getBoundingClientRect();
  let sliderIn = slider.getBoundingClientRect();

  if (parseInt(slider.style.left) > 0) {
    slider.style.left = `0px`;
  } else if (sliderIn.right < sliderContainerOut.right) {
    slider.style.left = `-${sliderIn.width - sliderContainerOut.width}px`;
  }
}

//Mobil NAV

mobilNavBtn.addEventListener("click", () => {
  const mobilUl = document.querySelector(".mobil-ul");
  mobilUl.classList.toggle("mobil-ul-add");
});

//Swiper
let swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
