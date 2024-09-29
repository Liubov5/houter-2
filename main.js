// слайдер с отзывами
let pagination__images = ['./images/reviews/1.jpg' , './images/reviews/2.jpg' , './images/reviews/3.jpg' ]

let swiper_reviews = new Swiper(".mySwiper-reviews", {
  direction: "vertical",
  pagination: {
    el: ".swiper__review--pagination",
    bulletActiveClass:'reviews__img-active',
    bulletClass:'swiper__pagination--custom--bullet',
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class=' ${className}' style='background-image:url(${pagination__images[index]})'></div>`
    },
  },
});

// слайдер с командой
let team_names = [{name:"Wade Warren", profession:"Architect"}, {name:"Brooklyn Simmons", profession: "Architect Designer"}, {name:"Jonson Duoing", profession:"Architect"}, {name:"Esther Howard", profession:"Architect"}];

let swiper_team = new Swiper(".MySwiper-team",{
  direction:"vertical",
  pagination:{
    el:".swiper_pagination--team",
    clickable:true,
    bulletActiveClass:"swiper__pagination--team--bullet-active",
    bulletClass:"swiper__pagination--team--bullet",
    renderBullet: function(index, className) {
      return `<div class='${className}'>
                <p class='jost-600 swiper__team--name '>${team_names[index].name}</p> 
                <p class='jost-400 swiper__team--profession'>${team_names[index].profession}</p> 
              </div>`
    }
  }
})

//табы процесс
const url_videos = ["https://www.youtube.com/embed/TC5cWh-YTKQ?si=5PYGb9jPK2CbnHbp", "https://www.youtube.com/embed/-KDNFBgHdBc?si=AWYp0OP2o-ZEaHke", "https://www.youtube.com/embed/awuFYqq4z_o?si=6aC6_Gu0Ol8vm3ZX"];

let process_tab = document.querySelectorAll(".process__tab");
let process_content_video = document.querySelector(".process__content--video");
let previos_tab = process_tab[0];
for(let i = 0; i< process_tab.length; i++) {
    process_tab[i].onclick = function(){
        if(previos_tab) {
            previos_tab.classList.remove("process__tab--active");
        }
        process_tab[i].classList.add("process__tab--active");
        previos_tab = process_tab[i];
        process_content_video.src = url_videos[i];
    }
}

//слайдер с проектами
let swiper_projects = new Swiper(".MySwiper-projects",{ 
    slidesPerView:3,
    spaceBetween:50,
    freeMode:true,
    navigation: {
        nextEl: ".projects__swiper__button--next",
        prevEl: ".projects__swiper__button--prev",
    },
})

