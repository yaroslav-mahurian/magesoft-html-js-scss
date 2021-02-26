import lax from 'lax.js';



window.onload = function () {
    
    const lineCoopRound = document.querySelector('#lineCoopRound');
    
    const coopAnimElementsArr = Array.from(document.querySelectorAll('[data-coop-anim-elem]'));

    window.addEventListener("scroll", checkActiveCoopEl);

    function checkActiveCoopEl() {
        const lineCoopRoundOffset = offset(lineCoopRound).top; 

        coopAnimElementsArr.forEach((el) => {
            if(lineCoopRoundOffset >= offset(el).top) {

                if (el.className === "coop-list__el") {
                    el.classList.add('coop-list__el--active');
                } else {
                    el.classList.add('btn--coop-active');
                }

            } else {
                
                el.classList.remove('coop-list__el--active');
                el.classList.remove('btn--coop-active');
            }
        });
    }

    lax.init();

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY;
    });

    // Add animation bindings to elements
    lax.addElements('#lineCoopRound', {
        scrollY: {
        translateY: [
            [
                "elCenterY", 
                "elCenterY + 239", 
                "elCenterY + 300", 
                "elCenterY + 445",
                "elCenterY + 510",
                "elCenterY + 650",
                "elCenterY + 720",
                "elCenterY + 856",
                "elCenterY + 926",
                "elCenterY + 1063",
                "elCenterY + 1133",
                "elCenterY + 1222",
            ],
            [
                0, 
                239,  
                239, 
                445,
                445,
                650,
                650,
                856,
                856,
                1063,
                1063,
                1222,
            ],
        ],
        translateX: [ 
            [
                "elCenterY + 239", 
                "elCenterY + 300", 
                "elCenterY + 445", 
                "elCenterY + 510",
                "elCenterY + 650",
                "elCenterY + 720",
                "elCenterY + 856",
                "elCenterY + 926",
                "elCenterY + 1063",
                "elCenterY + 1133",
            ],
            [
                0, 
                337, 
                337, 
                -429,
                -429,
                344,
                344,
                -576,
                -576,
                299,
            ],
        ],
        }
    });
};


/* --------------------------------- SCROLL ACTIONS --------------------------------- */ 


function runScrollScript() {

    /* Variables */
    const vline = document.querySelector("#vline");
    const vlineRound = document.querySelector("#vlineRound");
    const vlineOffsetLeft = offset(vline).left;
    const vlineOffsetTop = offset(vline).top;
    /* Set round position */
    vlineRound.style.left = `${vlineOffsetLeft}px`;
    vlineRound.style.top = `${(vlineOffsetTop - window.innerHeight) - 10}px`;

    const vlineTitlesBlocks = document.querySelectorAll('[data-event-title-block]');
    const vlineRoundDefOffset = offset(vlineRound).top;
    const lastAnimElem = document.querySelector('[data-last-anim-elem]');
    const lastAnimElemOffset = offset(lastAnimElem).top;

    const menuLogo = document.querySelector('#menuLogo');
    const qualitiesTitlesArr = Array.from(document.querySelectorAll('[data-qualities-header]'));

    /* Get titles offsets */
    let allElemPosArr = [];
    const allElemArr = Array.from(document.querySelectorAll('[data-scroll-anim-element]'));
    allElemArr.forEach(function(element) {
        const ElemPos = offset(element).top;
            allElemPosArr.push(ElemPos);
    }); 

    /* Scroll event listener */
    window.addEventListener("scroll", activateScrollActions);

    function activateScrollActions() {
        
        vlineRound.classList.remove('round--transition');
        const scrolled = window.pageYOffset;
        const innerHeight = window.innerHeight;
        const coords = document.documentElement.clientHeight;


        if (scrolled >= lastAnimElemOffset - innerHeight / 2) {
            vlineRound.style.transform = `translate3d(-45%, ${lastAnimElemOffset - vlineRoundDefOffset}px, 0)`;
            vlineRound.style.opacity = "0"; 
            
        } else if (scrolled >= vlineRoundDefOffset - innerHeight / 2) {
            vlineRound.style.opacity = "1";
            vlineRound.style.transform = `translate3d(-45%, ${scrolled - (vlineRoundDefOffset - innerHeight / 2)}px, 0)`;
        } else {
            vlineRound.style.opacity = "1";
            vlineRound.style.transform = "translate3d(-45%, 0, 0)";
        }
            
        checkActiveEl();

        /* Show/hide menu logo */
        if (scrolled > coords) {
            menuLogo.classList.add('menu__logo-img--active');
            menuLogo.dataset.status = "active";
        } else {
            menuLogo.classList.remove('menu__logo-img--active');
            menuLogo.dataset.status = "";
        }
    }

    Array.from(vlineTitlesBlocks).forEach((block) => {
        block.addEventListener("mouseover", function(e) {
            if (e.target.hasAttribute("data-scroll-anim-element")) {
                let currentElOffset = offset(e.target).top;
                vlineRound.classList.add('round--transition');
                vlineRound.style.transform = `translate3d(-45%, ${(currentElOffset) - vlineRoundDefOffset}px, 0)`;
                vlineRound.addEventListener("transitionend", checkActiveEl);
            }
        });
    });


    function checkActiveEl() {
        let vlineRoundCurrentOffset = offset(vlineRound).top;
        const blackBlockOffset = offset(document.querySelector('[data-block-color="black"]')).top;
        const whiteBlockOffset = offset(document.querySelector('[data-block-color="white"]')).top;
        
        allElemArr.forEach((el) => {
            if (vlineRoundCurrentOffset >= offset(el).top) {
                el.classList.add("vline-titles__el--active");
                qualitiesTitlesArr.forEach((title) => {
                    if (el.dataset.qualities === title.dataset.qualitiesHeader) {
                        title.classList.add("qualities__titles-el--active");
                    } else {
                        title.classList.remove("qualities__titles-el--active");
                    }
                });
            } else {
                el.classList.remove("vline-titles__el--active");
            }
        });


    if (vlineRoundCurrentOffset >= blackBlockOffset && vlineRoundCurrentOffset <= whiteBlockOffset) {
            vlineRound.style.borderColor = "#ffffff";
            vlineRound.style.backgroundColor = "#000000";
        } else {
            vlineRound.style.borderColor = "#000000";
            vlineRound.style.backgroundColor = "#ffffff";
        }
    } 
}

setTimeout(runScrollScript, 200);

/* window.addEventListener('resize', function() {
    setTimeout(runScrollScript, 200);
}, true); */


/* --------------------------------- MENU --------------------------------- */ 

const burgerMenu = document.querySelector('#burgerMenu');
const burgerBtn = document.querySelector('#burgerBtn');
const menuWrapper = document.querySelector('#menuWrapper');
const contactWrapper = document.querySelector('#contactWrapper');
const oneProjectWrapper = document.querySelector('#oneProjectWrapper');
const oneNewsWrapper = document.querySelector('#oneProjectWrapper');
const menuWrapperLogo = document.querySelector('#menuWrapperLogo');
const closeMenuBtns = document.querySelectorAll("[data-action-close-menu]");
const closeContactBtn = document.querySelector("[data-action-close-contact]");
const showContactWrapperLinks = document.querySelectorAll("[data-link-contact]");

burgerMenu.addEventListener("click", () => {
    burgerBtn.classList.toggle('is-active');

        if(contactWrapper) {
            if (contactWrapper.hasAttribute("data-status-active")) {
                contactWrapper.classList.remove('menu-wrapper--active');
        
                if (contactWrapper.hasAttribute("data-status-active")) {
                    contactWrapper.removeAttribute("data-status-active");
                }
        
            } else {
                if (menuWrapper.hasAttribute("data-status-active")) {
                    menuWrapper.removeAttribute("data-status-active");
                } else {
                    menuWrapper.setAttribute("data-status-active", "");
                }
                
                menuWrapper.classList.toggle('menu-wrapper--active');
            }

        } else {
            if (menuWrapper.hasAttribute("data-status-active")) {
                menuWrapper.removeAttribute("data-status-active");
            } else {
                menuWrapper.setAttribute("data-status-active", "");
            }
            
            menuWrapper.classList.toggle('menu-wrapper--active');
        }

    if(menuLogo.dataset.status === "active") {  
        menuWrapperLogo.style.opacity = "0";
    } else {
        menuWrapperLogo.style.opacity = "1";
    }
});

Array.from(closeMenuBtns).forEach((btn) => {
    btn.addEventListener("click", ()=> {
        /* if (menuWrapper.className ==="menu-wrapper menu-wrapper--active") { */
        if (menuWrapper.hasAttribute("data-status-active")) {
            burgerBtn.classList.remove('is-active');
            menuWrapper.classList.remove('menu-wrapper--active');
            menuWrapper.removeAttribute("data-status-active");
        }        
    });
});

if (closeContactBtn) {
    closeContactBtn.addEventListener("click", () => {
        contactWrapper.classList.remove('menu-wrapper--active');
        burgerBtn.classList.toggle('is-active');
        contactWrapper.removeAttribute("data-status-active");
    });
}


Array.from(showContactWrapperLinks).forEach((link) => {
    link.addEventListener("click", (e)=> {
        e.preventDefault();
        burgerBtn.classList.add('is-active');
        contactWrapper.classList.add('menu-wrapper--active');
        if (contactWrapper.hasAttribute("data-status-active")) {
            contactWrapper.removeAttribute("data-status-active");
        } else {
            contactWrapper.setAttribute("data-status-active", "");
        }
    });
});



/* --------------------------------- Get offset func --------------------------------- */
function offset(elem) {
    // (1)
    var box = elem.getBoundingClientRect();
    
    // (2)
    var body = document.body;
    var docElem = document.documentElement;
    
    // (3)
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    
    // (4)
    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    
    // (5)
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    
    return { top: Math.round(top), left: Math.round(left) };
}

/* ------------------------------ Mobile vh fix func ------------------------------- */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

/* -------------------- Smooth scroll for anchors script ------------------------ */
/*   */
const anchors = document.querySelectorAll('[data-smooth-scroll]');
Array.from(anchors).forEach((anchor) => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
});

/* ---------------------------------- SWIPER ----------------------------------- */

import SwiperCore, { Pagination, Scrollbar } from 'swiper/core';
        // configure Swiper to use modules
        SwiperCore.use([Pagination, Scrollbar]);

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
            768: {
                slidesPerView: 1,
                spaceBetween: 50
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 2
            },
            1280: {
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
