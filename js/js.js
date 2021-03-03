const navbar = document.querySelector(".navbar");
const textBlock = document.querySelector('#text-block')
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");

//Navbar toggle
navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("active");
});

//Onscroll color change
window.addEventListener("scroll", () => {
  if (window.scrollY > textBlock.offsetTop) {
    navbar.style.backgroundColor = 'white'
  } else {
    navbar.style.backgroundColor = 'transparent'
  }
});


//Init swiper
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});