const icon = document.querySelector("#hamuburger-icon");
const menu = document.querySelector(".hamuburger-menu");
let isOpen = false;

icon.addEventListener("click", () => {
  menu.classList.toggle("open");
  isOpen = !isOpen;
});

document.querySelector("body").addEventListener("scroll", (e) => {
  if (isOpen) {
    window.scrollTo(0, 0);
  }
});
