// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';



/* Swiper
**************************************************************/
var swiper = Swiper;
var init = false;

function swiperMode() {

  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 498px)');
  let tablet = window.matchMedia('(min-width: 499px)');

  if(mobile.matches) {

    if (!init) {
      init = true;

      swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 20,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        },

        breakpoints: {
          767: {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: 'coverflow',
            coverflowEffect: {
              rotate: 0,
              stretch: 20,
              depth: 120,
              modifier: 3,
              slideShadows: false,
            }
          }
        },
      });
    }
  } else if(tablet.matches) {
    swiper.destroy();
    init = false;
    }
};


/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});
