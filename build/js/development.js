let swiper=new Swiper(".carousel",{centeredSlides:!0,spaceBetween:30,effect:"fade",fadeEffect:{crossFade:!0},speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),swiperSlider=new Swiper(".sliders",{slidesPerView:1,spaceBetween:10,preventClicksPropagation:!0,preloadImages:!1,lazy:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{"@0.00":{slidesPerView:2,slidesPerGroup:2,spaceBetween:15},"@0.75":{slidesPerView:2,slidesPerGroup:2,spaceBetween:15},"@1.00":{slidesPerView:3,slidesPerGroup:3,spaceBetween:15},"@1.50":{slidesPerView:6,slidesPerGroup:6,spaceBetween:15}}});const businessInfo=[{id:1,bImg:"img/development/LMV33.jpg",title:"Enjoy the Cool Breeze of the Atlantic Ocean",text:"Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa\u2019s \u201CBusiness.Leisure.Lifestyle\u201D concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town.",items:[{src:"https://farm3.staticflickr.com/2567/5697107145_a4c2eaa0cd_o.jpg",w:1200,h:600},{src:"https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg",w:1200,h:600},{src:"https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg",w:1200,h:600}]},{id:2,bImg:"img/development/LMB1.jpg",title:"Enjoy the Cool Breeze of the Atlantic Ocean",text:"Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa\u2019s \u201CBusiness.Leisure.Lifestyle\u201D concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town.",items:[{src:"https://farm6.staticflickr.com/5023/5578283926_822e5e5791_b.jpg",w:1200,h:600},{src:"https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg",w:1200,h:600},{src:"https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg",w:1200,h:600}]},{id:3,bImg:"img/development/LMV22.jpg",title:"Enjoy the Cool Breeze of the Atlantic Ocean",text:"Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa\u2019s \u201CBusiness.Leisure.Lifestyle\u201D concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town.      "},{id:4,bImg:"img/development/retailboulevard.jpg",title:"Enjoy the Cool Breeze of the Atlantic Ocean",text:"Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa\u2019s \u201CBusiness.Leisure.Lifestyle\u201D concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town."},{id:5,bImg:"img/development/LMV33.jpg",title:"Enjoy the Cool Breeze of the Atlantic Ocean",text:"Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa\u2019s \u201CBusiness.Leisure.Lifestyle\u201D concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town."},{id:6,bImg:"img/development/LMB1.jpg",title:"Enjoy the Cool Breeze of the Atlantic Ocean",text:"Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa\u2019s \u201CBusiness.Leisure.Lifestyle\u201D concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town."},{id:7,bImg:"img/development/LMV22.jpg",title:"Enjoy the Cool Breeze of the Atlantic Ocean",text:"Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa\u2019s \u201CBusiness.Leisure.Lifestyle\u201D concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town."},{id:8,bImg:"img/development/LMV33.jpg",title:"Enjoy the Cool Breeze of the Atlantic Ocean",text:"Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa\u2019s \u201CBusiness.Leisure.Lifestyle\u201D concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town."},{id:8,bImg:"img/development/LMV33.jpg",title:"Enjoy the Cool Breeze of the Atlantic Ocean",text:"Landmark Village is a mixed use, state-of-the-art development on a 38,000m2 site along the Atlantic Ocean waterfront in Victoria Island, Lagos. The project will include five individual 9-storey towers and will fully embody Landmark Africa\u2019s \u201CBusiness.Leisure.Lifestyle\u201D concept. The project is designed to be the first Lagos equivalent of The Rockefeller Centre in New York, Canary Wharf in London, Melrose Arch in Johannesburg and Victoria & Alfred Waterfront in Cape Town."}];document.addEventListener("DOMContentLoaded",()=>{console.log("I got here:::"),fetchInfo(1)}),getDetails=a=>{swiperSlider.detachEvents(),console.log("Lets get details ",a.getAttribute("data-slide"),a.dataset.slide),document.querySelectorAll(".service-card").forEach(a=>{a.classList.remove("active")}),a.classList.add("active");const b=a.getAttribute("data-slide");fetchInfo(b)},fetchInfo=a=>{const b=businessInfo.filter(b=>b.id===+a);if(console.log("id ",a,"info ",b),b){const c=document.querySelector(".more-info");c.innerHTML=`<div class="details">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
          <img src=${b[0].bImg} alt="" class="swiper-lazy dev-img">
          <div class="swiper-lazy-preloader"></div>
          </div>
          <div class="background-overlay">
            <div class="container mx-auto content px-4 md:px-0">
              <div class="md:w-2/5 pt-16 w-full development-slider">
                <h2 class="text-white content-text text-xl font-semibold">${b[0].title}</h2>
                <p class="text-white content-text">${b[0].text}</p>
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
                ${b[0].items?`<div class="flex items-center justify-between mt-8">
                      <button
                        class="bg-primary hover:bg-orange-500 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
                        type="button"
                        onClick="viewGallery(${a});"
                      >
                        View Gallery
                      </button>
                    </div>`:""}
            </div>
            
        </div>
         
      </div>
      
    </div>`;new Swiper(".details",{lazy:!0,effect:"fade",speed:1e3,fadeEffect:{crossFade:!0}})}},viewGallery=a=>{const b=businessInfo.filter(b=>b.id===+a);let c=b[0].items,d=document.querySelectorAll(".pswp")[0];var e=new PhotoSwipe(d,PhotoSwipeUI_Default,c,{index:0});e.init()};