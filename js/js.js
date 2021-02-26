const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("active");
});