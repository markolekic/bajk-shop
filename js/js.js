const navbar = document.querySelector(".navbar");
const hero = document.querySelector('#hero')
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
    navbar.classList.add('white')
    navbar.classList.remove('transparent')
  } else {
    navbar.classList.add('transparent')
    navbar.classList.remove('white')
  }
});

//Init swiper
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});