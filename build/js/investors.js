let homeSwiper=new Swiper(".home-carousel",{centeredSlides:!0,spaceBetween:30,effect:"fade",fadeEffect:{crossFade:!0},speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),promoSwiper=new Swiper(".promo-carousel",{slidesPerView:1,spaceBetween:10,preventClicksPropagation:!0,speed:1e3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{"@0.00":{slidesPerView:1,slidesPerGroup:1,spaceBetween:15},"@0.75":{slidesPerView:2,slidesPerGroup:2,spaceBetween:15},"@1.00":{slidesPerView:3,slidesPerGroup:3,spaceBetween:15}}});