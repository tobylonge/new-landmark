let galleryThumbs=new Swiper(".career-carousel",{slidesPerView:1,spaceBetween:15,preventClicksPropagation:!0,speed:1e3,freeMode:!0,loopedSlides:3,watchSlidesVisibility:!0,watchSlidesProgress:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{"@0.00":{slidesPerView:1,slidesPerGroup:1,spaceBetween:15},"@0.75":{slidesPerView:2,slidesPerGroup:2,spaceBetween:15},"@1.00":{slidesPerView:3,slidesPerGroup:3,spaceBetween:15}}}),galleryTop=new Swiper(".gallery",{spaceBetween:15,loop:!0,lazy:!0,loopedSlides:3,navigation:{nextEl:".gallery-button-next",prevEl:".gallery-button-prev"},thumbs:{swiper:galleryThumbs}}),career=document.querySelector(".career-carousel"),allslides=career.querySelectorAll(".swiper-slide");document.querySelector(".close-modal").addEventListener("click",()=>{document.querySelector("body").classList.remove("overflow-hidden"),document.querySelector(".gallery-view").classList.remove("flex"),document.querySelector(".gallery-view").classList.add("hidden")});for(const a of allslides)a.addEventListener("click",function(){console.log("realIndex ",galleryThumbs.realIndex),document.querySelector("body").classList.add("overflow-hidden"),document.querySelector(".gallery-view").classList.add("flex"),document.querySelector(".gallery-view").classList.remove("hidden"),setTimeout(()=>{galleryTop.update(),galleryTop.updateProgress()},300)});