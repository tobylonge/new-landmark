//  Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 15,
  // init: false,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
