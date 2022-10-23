let isRotated = false;
const menuBtn = document.getElementById("menu-icon");
const ulEl = document.getElementsByTagName("ul");
const ulStyle = ulEl[0].style;
const navEl = document.getElementById("navbar");
const listItem = document.getElementsByClassName("listItem");

navEl.style.overflow = "hidden";

menuBtn.addEventListener("click", function () {
  menuBtn.style.transition = "0.2s";
  if (isRotated === false) {
    menuBtn.style.transform = "rotate(90deg)";
    navEl.style.removeProperty("overflow");
    navEl.style.height = "fit-content";
    isRotated = true;
  } else {
    menuBtn.style.transform = "rotate(0deg)";
    navEl.style.overflow = "hidden";
    navEl.style.height = "72px";
    isRotated = false;
  }
});
