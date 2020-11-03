const openTab = (evt, tabName) => {
  let tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach((el) => {
    el.style.display = "none";
  });
  tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach((el) => {
    el.classList.remove("active");
  });
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
};
