let par = document.querySelector(".text");
let img = document.querySelector(".img");
let allImgs = [
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
  previous = current;
  img.classList.add("disappear");
  par.classList.add("disappear");
  setTimeout(() => {
    img.src = allImgs[element.id].src;
    par.innerHTML = allImgs[element.id].title;
  }, 250);

  setTimeout(() => {
    img.classList.remove("disappear");
    par.classList.remove("disappear");
  }, 400);
}
