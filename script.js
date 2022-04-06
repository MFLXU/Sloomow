
const navBar = document.querySelector("nav");

// nav bar color change when scrolling
window.addEventListener("scroll", () => {
  navBar.classList.toggle("on", window.scrollY > 0);
});
