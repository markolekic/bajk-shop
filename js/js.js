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
  //setting offset to 0
  let offset = 0;
  //if hero class contains transparent class
  if (hero.classList.contains('js-transparent-header')) {
    //count hero buttom edge 
    offset = hero.offsetTop + hero.offsetHeight;
    console.log(offset);
  }
  //on scroll add white color
  if (window.scrollY > offset) {
    navbar.classList.add('js-white-header');
    return;
  }
  //else
  navbar.classList.remove('js-white-header');
});

//Init swiper
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});