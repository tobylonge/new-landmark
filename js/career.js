// Initialize Swiper
let galleryThumbs = new Swiper(".career-carousel", {
  slidesPerView: 1,
  spaceBetween: 15,
  preventClicksPropagation: true,
  speed: 1000,
  freeMode: true,
  loopedSlides: 3, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
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

// var galleryThumbs = new Swiper('.gallery-thumbs', {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   loop: true,
//   freeMode: true,
//   loopedSlides: 5, //looped slides should be the same
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });
let galleryTop = new Swiper(".gallery", {
  spaceBetween: 15,
  loop: true,
  lazy: true,
  loopedSlides: 3, //looped slides should be the same
  navigation: {
    nextEl: ".gallery-button-next",
    prevEl: ".gallery-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

let career = document.querySelector(".career-carousel");
let allslides = career.querySelectorAll(".swiper-slide");

document.querySelector(".close-modal").addEventListener("click", () => {
  document.querySelector("body").classList.remove("overflow-hidden");
  document.querySelector(".gallery-view").classList.remove("flex");
  document.querySelector(".gallery-view").classList.add("hidden");
});

for (const el of allslides) {
  el.addEventListener("click", function () {
    console.log("realIndex ", galleryThumbs.realIndex);
    document.querySelector("body").classList.add("overflow-hidden");
    document.querySelector(".gallery-view").classList.add("flex");
    document.querySelector(".gallery-view").classList.remove("hidden");
    setTimeout(() => {
      galleryTop.update();
      galleryTop.updateProgress();
    }, 300);
    // galleryTop.initialSlide(3);
    // galleryTop.navigation.update();
  });
}
