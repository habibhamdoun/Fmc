window.scrollTo(0, 0);
const collapsibles = document.querySelectorAll(".nav__collapsible__container");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    document.getElementById("nav").classList.toggle("collapsible--expanded");
  })
);
