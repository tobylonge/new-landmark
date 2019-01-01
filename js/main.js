// put your js here
document.addEventListener("DOMContentLoaded", () => {
  console.log("I got here:::");
});

getDetails = (e) => {
  const infoDiv = document.querySelector(".more-info");
  console.log(
    "Lets get details ",
    e.getAttribute("data-slide"),
    e.dataset.slide
  );
  document.querySelectorAll(".service-card").forEach((el) => {
    el.classList.remove("active");
  });
  e.classList.add("active");
  infoDiv.innerHTML = `<p>${e.dataset.slide}</p>`;
};
