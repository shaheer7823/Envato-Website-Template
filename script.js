var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    autoplay: {
        delay: 1000, // Delay in milliseconds between each slide
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions
      },

  });