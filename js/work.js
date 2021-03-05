//Work swiper 
var swiper = new Swiper(".work-slider", {
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