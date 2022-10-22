let isRotated = false;
const menuBtn = document.getElementById("menu-icon");
const ulEl = document.getElementsByTagName("ul");
const ulStyle = ulEl[0].style;
// console.log(ulEl[0].style.display);

menuBtn.addEventListener("click", function () {
  menuBtn.style.transition = "0.2s";
  if (isRotated === false) {
    menuBtn.style.transform = "rotate(90deg)";
    ulStyle.display = "flex";
    isRotated = true;
  } else {
    menuBtn.style.transform = "rotate(0deg)";
    isRotated = false;
  }
});
