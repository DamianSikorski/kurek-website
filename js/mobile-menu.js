const openMenu = document.querySelector(".open-menu");
const navMenu = document.querySelector(".mobile-menu");

openMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const closeMenu = document.querySelector(".close-menu");

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
});
