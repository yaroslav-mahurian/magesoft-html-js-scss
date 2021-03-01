import RoundAnim from './roundAnim';
import CardPagination from './cardPagination';
import SwiperCore, { Pagination } from 'swiper/core';

const roundAnimFunc = new RoundAnim();
const cardPaginationFunc = new CardPagination();


window.onload = function() {
    roundAnimFunc.init();
    cardPaginationFunc.init('[data-card-page-container-projects]', '[data-card-page-projects]');
    cardPaginationFunc.init('[data-card-page-container-news]', '[data-card-page-news]');

    /* ---------------------------------- SWIPER ----------------------------------- */

    // configure Swiper to use modules
    SwiperCore.use([Pagination]);

    // init Swiper:
    const teamSlider = new SwiperCore('#teamSlider', {
        // Optional parameters
    wrapperClass: 'team-slider-wrapper', 
    slideClass: 'team-slide',   
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,	
    spaceBetween: 90,

    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        999: {
            slidesPerView: 3,
            spaceBetween: 2
        },
        1279: {
            slidesPerView: 3,
            spaceBetween: 90
        }
    },
    // If we need pagination
    pagination: {
        el: '.team-slider-pagination',
        bulletClass: 'team-slider-pagination-el',
        bulletActiveClass: 'team-slider-pagination-el-active',
        clickable: true,
    },
    });

    const clientsSlider = new SwiperCore('#clientsSlider', {
    wrapperClass: 'clients-slider-wrapper', 
    slideClass: 'clients-slide', 
    direction: 'horizontal',
    loop: false,

    breakpoints: {
        320: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 6,
        }
    },
    });

};

