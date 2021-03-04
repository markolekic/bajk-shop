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

//Work swiper 

// Swiper Configuration
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.3,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  }
});