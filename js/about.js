let historySwiper = new Swiper(".history-carousel", {
  slidesPerView: 1,
  spaceBetween: 10,
  preventClicksPropagation: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
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
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    "@1.00": {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
  },
});

let animateValue = (id, start, end, duration, incr) => {
  if (start === end) return;
  let range = end - start;
  let current = start;
  let increment = end > start ? incr : -incr;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(id);
  let timer = setInterval(function () {
    current += increment;
    obj.innerHTML = numberWithCommas(current);
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  console.log("rect ", rect);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function isElementOutViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.bottom < 0 ||
    rect.right < 0 ||
    rect.left > window.innerWidth ||
    rect.top > window.innerHeight
  );
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

const community = document.querySelector("#community");
let countStarted = false;

document.addEventListener("scroll", () => {
  if (countStarted) {
    return;
  }
  if (isElementOutViewport(community)) {
    return;
  } else {
    countStarted = true;
    animateValue("employee", 0, 50, 2000, 1);
    animateValue("visitors", 0, 75000, 2000, 500);
    animateValue("business", 0, 25, 2000, 1);
    animateValue("employee2", 0, 50, 2000, 1);
    animateValue("visitors2", 0, 75000, 2000, 500);
    animateValue("business2", 0, 25, 2000, 1);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (countStarted) {
    return;
  }
  if (isElementOutViewport(community)) {
    return;
  } else {
    countStarted = true;
    animateValue("employee", 0, 50, 2000, 1);
    animateValue("visitors", 0, 75000, 2000, 500);
    animateValue("business", 0, 25, 2000, 1);
    animateValue("employee2", 0, 50, 2000, 1);
    animateValue("visitors2", 0, 75000, 2000, 500);
    animateValue("business2", 0, 25, 2000, 1);
  }
});

const playBtn = document.querySelector(".play-icon-container");
const video = document.querySelector(".video-wrapper");
const videoHeight = video.clientHeight;
const videoWidth = video.clientWidth;

playBtn.addEventListener("click", () => {
  video.innerHTML = `<iframe src="https://www.youtube.com/embed/${playBtn.getAttribute(
    "data-video"
  )}?autoplay=1" height="${videoHeight}" width="${videoWidth}" style="background:#000000"></iframe>`;
});
