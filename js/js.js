const navbar = document.querySelector(".navbar");
const hero = document.querySelector('.hero')
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");

//Navbar toggle
navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("active");
});

//Onscroll color change
window.addEventListener("scroll", () => {
  if (window.scrollY > hero.offsetTop + hero.offsetHeight) {
    navbar.classList.add('js-white-header')
    navbar.classList.remove('js-transparent-header')
  } else {
    navbar.classList.add('js-transparent-header')
    navbar.classList.remove('js-white-header')
  }
});

//Init swiper
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});