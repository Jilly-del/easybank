"use script";

let nav = document.querySelectorAll(".nav-link");
nav.forEach(function (el) {
  el.addEventListener("click", function () {
    nav.forEach(function (link) {
      link.style.borderBottom = "";
      link.style.paddingBottom = "";
    });
    el.style.borderBottom = `2px solid hsl(136, 65%, 51%)`;
    el.style.paddingBottom = "5px";
  });
});
