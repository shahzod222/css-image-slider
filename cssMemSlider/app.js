let par = document.querySelector(".text");
let img = document.querySelector(".img");
let allImgs = [
  { src: "assets/bmw.jpg", title: "BMW X5" },
  { src: "assets/mers.jfif", title: "Mercedes-Benz G-Class AMG" },
  { src: "assets/cadillac.jfif", title: "Cadillac Escalade" },
  { src: "assets/tesla.jpg", title: "Tesla Model X" },
  { src: "assets/tahoe.jpg", title: "Chevrolet Tahoe" },
];
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
  allButtons.forEach((e) => {
    e.classList.remove("active");
    e.classList.add("btn");
  });
  allButtons[element.id].classList.remove("btn");
  allButtons[element.id].classList.add("active");
  img.style.opacity = "0";
  img.style.transform = "scale(0.9)";
  par.style.opacity = "0";
  setTimeout(() => {
    img.style.transform = "scale(1)";
    img.src = allImgs[element.id].src;
    par.innerHTML = allImgs[element.id].title;
  }, 500);
  setTimeout(() => {
    img.style.opacity = "1";
    par.style.opacity = "1";
  }, 520);
}
