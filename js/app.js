const mySlider = new Swiper('.my-slider', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
