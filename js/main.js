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

  let menus = document.querySelectorAll(".menu-item a");
  menus.forEach((el) => {
    console.log("el ", el);
    el.addEventListener("click", (e) => {
      console.log("open here::: ", el, el.nextElementSibling);
      if (el.nextElementSibling) {
        e.preventDefault();
        e.stopPropagation();
        if (el.nextElementSibling.classList.contains("hidden")) {
          el.nextElementSibling.classList.remove("hidden");
          el.querySelector(".fa-caret-down").classList.add(
            "transform",
            "rotate-180"
          );
        } else {
          el.nextElementSibling.classList.add("hidden");
          el.querySelector(".fa-caret-down").classList.remove(
            "transform",
            "rotate-180"
          );
        }
      } else {
        return true;
      }
      // document
      //   .querySelector(".menu-item a + .dropdown-menu")
      //   .classList.add("block");
    });
  });

  const openEls = document.querySelectorAll("[data-open]");
  const closeEls = document.querySelectorAll("[data-close]");
  const isVisible = "is-visible";

  for (const el of openEls) {
    el.addEventListener("click", function () {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
    });
  }

  for (const el of closeEls) {
    el.addEventListener("click", function () {
      this.parentElement.parentElement.parentElement.classList.remove(
        isVisible
      );
    });
  }

  document.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
  });

  document.addEventListener("keyup", (e) => {
    // if we press the ESC
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
  });
});
