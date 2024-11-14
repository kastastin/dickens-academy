const menuSelect = document.querySelector(".menu-select");

menuSelect.addEventListener("click", () => {
  menuSelect.classList.toggle("menu-select--active");
});

const testimonialsSlider = new Swiper(".s-testimonials__slider", {
  loop: true,
  speed: 800,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".s-testimonials__btn-prev",
    nextEl: ".s-testimonials__btn-next",
  },
});
