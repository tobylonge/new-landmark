// put your js here

// Initialize Swiper

let swiper = new Swiper(".carousel", {
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

let swiperSlider = new Swiper(".sliders", {
  slidesPerView: 1,
  spaceBetween: 10,
  preventClicksPropagation: true,
  preloadImages: false,
  lazy: true,
  // init: false,
  // mousewheel: true,
  // keyboard: true,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      slidesPerGroup: 2,
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
    "@1.50": {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 15,
    },
  },
});

const businessInfo = [
  {
    id: 1,
    bImg: "img/development/LMV33.jpg",
    title: "Enjoy the Cool Breeze of the Atlantic Ocean",
    text:
      "Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa’s “Business.Leisure.Lifestyle” concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town.",
  },
  {
    id: 2,
    bImg: "img/development/LMB1.jpg",
    title: "Enjoy the Cool Breeze of the Atlantic Ocean",
    text:
      "Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa’s “Business.Leisure.Lifestyle” concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town.",
  },
  {
    id: 3,
    bImg: "img/development/LMV22.jpg",
    title: "Enjoy the Cool Breeze of the Atlantic Ocean",
    text:
      "Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa’s “Business.Leisure.Lifestyle” concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town.      ",
  },
  {
    id: 4,
    bImg: "img/development/retailboulevard.jpg",
    title: "Enjoy the Cool Breeze of the Atlantic Ocean",
    text:
      "Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa’s “Business.Leisure.Lifestyle” concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town.",
  },
  {
    id: 5,
    bImg: "img/development/LMV33.jpg",
    title: "Enjoy the Cool Breeze of the Atlantic Ocean",
    text:
      "Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa’s “Business.Leisure.Lifestyle” concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town.",
  },
  {
    id: 6,
    bImg: "img/development/LMB1.jpg",
    title: "Enjoy the Cool Breeze of the Atlantic Ocean",
    text:
      "Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa’s “Business.Leisure.Lifestyle” concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town.",
  },
  {
    id: 7,
    bImg: "img/development/LMV22.jpg",
    title: "Enjoy the Cool Breeze of the Atlantic Ocean",
    text:
      "Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa’s “Business.Leisure.Lifestyle” concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town.",
  },
  {
    id: 8,
    bImg: "img/development/LMV33.jpg",
    title: "Enjoy the Cool Breeze of the Atlantic Ocean",
    text:
      "Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa’s “Business.Leisure.Lifestyle” concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town.",
  },
  {
    id: 8,
    bImg: "img/development/LMV33.jpg",
    title: "Enjoy the Cool Breeze of the Atlantic Ocean",
    text:
      "Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa’s “Business.Leisure.Lifestyle” concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  console.log("I got here:::");
  fetchInfo(1);
});

getDetails = (e) => {
  swiperSlider.detachEvents();

  console.log(
    "Lets get details ",
    e.getAttribute("data-slide"),
    e.dataset.slide
  );
  document.querySelectorAll(".service-card").forEach((el) => {
    el.classList.remove("active");
  });
  e.classList.add("active");
  const id = e.getAttribute("data-slide");
  fetchInfo(id);
};

fetchInfo = (id) => {
  const info = businessInfo.filter((el) => el.id === Number(id));
  console.log("id ", id, "info ", info);
  if (info) {
    const infoDiv = document.querySelector(".more-info");
    infoDiv.innerHTML = `<div class="details">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
          <img src=${info[0].bImg} alt="" class="swiper-lazy dev-img">
          <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="background-overlay">
            <div class="container mx-auto content px-4 md:px-0">
              <div class="md:w-2/5 pt-16 w-full development-slider">
                <h2 class="text-white content-text text-xl font-semibold">${info[0].title}</h2>
                <p class="text-white content-text">${info[0].text}</p>
                <ul class="text-white">
                  <li>
                    <span><i class="text-primary font-semibold">Size: </i>600sqm</span>
                  </li>
                  <li>
                  <span><i class="text-primary font-semibold">No of Floors: </i>2000</span>
                  </li>
                  <li>
                  <span><i class="text-primary font-semibold">Development status: </i>Ready</span>
                  </li>
                  <li>
                  <span><i class="text-primary font-semibold">Date completed: </i>18/20/2020</span>
                  </li>
                </ul>
                <h3 class="text-white text-2xl font-semibold mb-4">Schedule a Visit <span class="text-primary">Today</span></h3>
              </div>
            </div>
            <div class="element-divider"></div>
            <div class="container mx-auto content px-4 md:px-0">
                <ul class="text-white">
                    <li>
                        <span><i class="fas fa-phone-alt text-primary mr-2"> </i> +234 01 631 1447</span>
                    </li>
                    <li>
                    <span><i class="far fa-envelope text-primary mr-2"> </i> contactus@landmarkafrica.com</span>
                    </li>
                </ul>
            </div>
        </div>
         
      </div>
      
    </div>`;
    var swiperDetails = new Swiper(".details", {
      // preloadImages: false,
      lazy: true,
      effect: "fade",
      speed: 1000,
      fadeEffect: {
        crossFade: true,
      },
    });
  }
};
