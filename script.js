const btnToggle = document.getElementById("toggle-btn");
const navLinks = document.getElementById("nav-links");

btnToggle.addEventListener("click", () => {
  btnToggle.classList.toggle("toggle-btn-active");
  navLinks.classList.toggle("navlinks-active");
});
