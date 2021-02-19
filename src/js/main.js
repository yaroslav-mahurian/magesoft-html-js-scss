
/*  Smooth scroll script */
const anchors = document.querySelectorAll('a[href*="#"]');
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

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


/* --------------------------------- SCROLL ACTIONS --------------------------------- */ 

/* Variables */
function script() {
    const vline = document.querySelector("#vline");
    const vlineRound = document.querySelector("#vlineRound");

    const vlineOffsetLeft = offset(vline).left;
    const vlineOffsetTop = offset(vline).top;
    vlineRound.style.left = `${vlineOffsetLeft}px`;
    vlineRound.style.top = `${(vlineOffsetTop - window.innerHeight) - 10}px`;
    const vlineTitlesBlocks = document.querySelectorAll('[data-event-title-block]');
    const menuLogo = document.querySelector('#menuLogo');
    const vlineRoundDefOffset = offset(vlineRound).top;
    const lastAnimElem = document.querySelector('[data-last-anim-elem]');
    const lastAnimElemOffset = offset(lastAnimElem).top;

    qualitiesTitlesArr = Array.from(document.querySelectorAll('[data-qualities-header]'));


    let allElemPosArr = [];

    // Создаем массив из всех page-element слайдера
    const allElemArr = Array.from(document.querySelectorAll('[data-scroll-anim-element]'));

    // Заполняем массив значениями offset каждого page-element
    allElemArr.forEach(function(element) {
        const ElemPos = offset(element).top;
            allElemPosArr.push(ElemPos);
    }); 


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

        if (scrolled > coords) {
            menuLogo.classList.add('menu__logo-img--active');
        } else {
            menuLogo.classList.remove('menu__logo-img--active');
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

setTimeout(script, 200);

/* --------------------------------- MENU --------------------------------- */ 

const burgerMenu = document.querySelector('#burgerMenu');
const burgerBtn = document.querySelector('#burgerBtn');
const menuWrapper = document.querySelector('#menuWrapper');
const menuWrapperLogo = document.querySelector('#menuWrapperLogo');
const closeMenuBtns = document.querySelectorAll("[data-action-close-menu]");


burgerMenu.addEventListener("click", () => {
    burgerBtn.classList.toggle('is-active');
    menuWrapper.classList.toggle('menu-wrapper--active');
    if(menuLogo.className === 'menu__logo-img menu__logo-img--active') {
        menuWrapperLogo.style.opacity = "0";
    } else {
        menuWrapperLogo.style.opacity = "1";
    }
});

Array.from(closeMenuBtns).forEach((btn) => {
    btn.addEventListener("click", ()=> {
        burgerBtn.classList.toggle('is-active');
        menuWrapper.classList.remove('menu-wrapper--active');
    });
});

