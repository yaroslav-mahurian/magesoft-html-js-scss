
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
    /* const vlineTitlesBlockOffset = offset(vlineTitlesBlock).top; */
    const lastAnimElem = document.querySelector('[data-last-anim-elem]');


    const menuLogo = document.querySelector('#menuLogo');




    const vlineRoundDefOffset = offset(vlineRound).top;




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
        const lastAnimElemOffset = offset(lastAnimElem).top;


        if (scrolled > lastAnimElemOffset - innerHeight / 2) {
            vlineRound.style.transform = `translate3d(-45%, ${lastAnimElemOffset - vlineRoundDefOffset + 7}px, 0)`;
            vlineRound.style.opacity = "0"; 
            
        } else if (scrolled >= vlineRoundDefOffset  - innerHeight / 2) {
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

/* --------------------------------- BURGER --------------------------------- */ 

const burgerMenu = document.querySelector('#burgerMenu');
const burgerBtn = document.querySelector('#burgerBtn');
const menuWrapper = document.querySelector('#menuWrapper');


burgerMenu.addEventListener("click", () => {
    burgerBtn.classList.toggle('is-active');
    menuWrapper.classList.toggle('menu-wrapper--active');

    if(menuLogo.className != 'menu__logo-img menu__logo-img--active') {
        menuLogo.classList.add('menu__logo-img--active');
    }
});

