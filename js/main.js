document.addEventListener("DOMContentLoaded", () => {
  console.log("I got here:::");

  //nav toggle
  document.querySelector(".hfe-nav-menu-icon").addEventListener("click", () => {
    console.log("menu clicked:::");
    document.querySelector(".menu-nav").classList.remove("hidden");
  });

  document.querySelector(".menu-nav").addEventListener("click", () => {
    document.querySelector(".menu-nav").classList.add("hidden");
  });
  document.querySelector(".close-btn").addEventListener("click", () => {
    document.querySelector(".menu-nav").classList.add("hidden");
  });
});
