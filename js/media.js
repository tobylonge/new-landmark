// put your js here

// Initialize Swiper
let mediaSwiper = new Swiper(".media-carousel", {
  centeredSlides: true,
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Initialize Swiper
let promoSwiper = new Swiper(".career-carousel", {
  slidesPerView: 1,
  spaceBetween: 15,
  preventClicksPropagation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    "@0.75": {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    "@1.00": {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
  },
});
