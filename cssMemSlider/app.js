let screenSize = screen.width;
window.addEventListener(
  "resize",
  () => {
    screenSize = this.screen.width;
  },
  true
);
let par = document.querySelector(".text");
let img = document.querySelector(".img");
let allImgAssets = [
  { src: "assets/bmw.jpg", title: "BMW X5" },
  { src: "assets/mers.jfif", title: "Mercedes-Benz G-Class AMG" },
  { src: "assets/cadillac.jfif", title: "Cadillac Escalade" },
  { src: "assets/tesla.jpg", title: "Tesla Model X" },
  { src: "assets/tahoe.jpg", title: "Chevrolet Tahoe" },
];
let current = 0;
let previous = 0;
let allButtons = document.getElementsByName("btn");
let allButtonWrappers = document.querySelectorAll(".btn-wrapper");
allButtons.forEach((el) => {
  el.addEventListener("click", () => {
    showHtml(el);
  });
});
allButtonWrappers.forEach((el) => {
  el.addEventListener("click", () => {
    showHtml(el);
  });
});
function showHtml(element) {
  current = element.id;
  allButtons[previous].classList.remove("active");
  allButtons[previous].classList.add("btn");
  allButtons[current].classList.remove("btn");
  allButtons[current].classList.add("active");
  img.style.opacity = "0";
  par.style.opacity = "0";
  setTimeout(() => {
    img.style.background = `url(${allImgAssets[current].src}) no-repeat`;
    if (screenSize > 480) {
      img.style.backgroundSize = "70vw 80vh";
    } else {
      img.style.backgroundSize = "85vw 35vh";
    }
    par.innerHTML = allImgAssets[current].title;
  }, 400);
  setTimeout(() => {
    img.style.opacity = "1";
    par.style.opacity = "1";
  }, 600);
  previous = current;
}
