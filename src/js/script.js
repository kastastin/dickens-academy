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

// Accordion
const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const clickedItem = e.target.closest(".accordion__item");
    const isClickedItemActive = clickedItem.classList.contains(
      "accordion__item--active"
    );

    if (!isClickedItemActive) {
      accordionItems.forEach((item) => {
        item.classList.remove("accordion__item--active");
      });

      clickedItem.classList.add("accordion__item--active");
    }
  });
});
