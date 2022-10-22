let isRotated = false;
const menuBtn = document.getElementById("menu-icon");
const ulEl = document.getElementsByTagName("ul");
// console.log(ulEl[0].style.display);

menuBtn.addEventListener("click", function () {
  menuBtn.style.transition = "0.2s";
  ulEl[0].style.transition = "2.4s";
  if (isRotated === false) {
    menuBtn.style.transform = "rotate(90deg)";
    ulEl[0].style.display = "block";
    isRotated = true;
  } else {
    menuBtn.style.transform = "rotate(0deg)";
    // ulEl[0].style.display = "none";
    isRotated = false;
  }
});
