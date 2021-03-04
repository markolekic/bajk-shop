const navbar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const hero = document.querySelector('.hero')

//Navbar toggle
navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("active");
});

//Onscroll color change
window.addEventListener("scroll", () => {
  //finding offset
  let offset = hero.offsetTop + hero.offsetHeight;
  //on scroll add white color
  if (window.scrollY > offset) {
    navbar.classList.add('white-header');
    return;
  }
  //else
  navbar.classList.remove('white-header');
});

//Init swiper
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});