var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 24,
  centeredSlides: true,
  mousewheel: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});



let pagination__images = [
  './images/reviews/1.jpg',
  './images/reviews/2.jpg',
  './images/reviews/3.jpg'
]
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  mousewheel: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass: 'reviews__img-active',
    bulletClass: 'swiper__pagination--custom--bullet',
    clickable: true,
    renderBullet: function (index, className) {
      return `
                <div 
                  class='${className}' 
                  style='background-image:url(${pagination__images[index]})'>
                </div>
              `
    },
  },
});


const aboutSwiper = new Swiper(".aboutSwiper", {
  slidesPerView: "auto",
  centeredSlides: false,
  slidesPerView: 3, 
  spaceBetween: 24,
  // centeredSlides: true,
  mousewheel: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".aboutSwiper-button-next",
    prevEl: ".aboutSwiper-button-prev",
  },
  // pagination: {
  //   el: ".aboutSwiper-pagination",
  //   clickable: true,
  // },
  
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
