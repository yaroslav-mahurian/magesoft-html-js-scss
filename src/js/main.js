/* --------------------------------- BURGER --------------------------------- */ 

const burgerMenu = document.querySelector('#burgerMenu');
const burgerBtn = document.querySelector('#burgerBtn');


burgerMenu.addEventListener("click", () => {
    burgerBtn.classList.toggle('is-active');
});


/* --------------------------------- SCROLL ACTIONS --------------------------------- */ 

/* Variables */
const round = document.querySelector("#round");
const roundDefOffset = offset(round).top;
const solutionsList = document.querySelector('#solutionsList');
const menuLogo = document.querySelector('#menuLogo');


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
    round.classList.remove('round--transition');
    const scrolled = window.pageYOffset;
    const innerHeight = window.innerHeight;
    const coords = document.documentElement.clientHeight;


    if (scrolled >= roundDefOffset - innerHeight / 2) {
        round.style.transform = `translate3d(-50%, ${scrolled - (roundDefOffset - innerHeight / 2)}px, 0)`;
    } else {
        round.style.transform = "translate3d(-50%, 0, 0)";
    }

    checkActiveEl();

   /*  round.addEventListener("transitionend", checkActiveEl); */
    if (scrolled > coords) {
        menuLogo.classList.add('menu__logo-img--active');
    } else {
        menuLogo.classList.remove('menu__logo-img--active');
    }
}

solutionsList.addEventListener("mouseover", function(e) {
    if (e.target.hasAttribute("data-scroll-anim-element")) {
        let currentElOffset = offset(e.target).top;
        round.classList.add('round--transition');
        round.style.transform = `translate3d(-50%, ${(currentElOffset + 2) - roundDefOffset}px, 0)`;
         
        round.addEventListener("transitionend", checkActiveEl);
    } /* else {
        /* const scrolled = window.pageYOffset;
        const innerHeight = window.innerHeight;
        round.style.transform = `translate3d(-50%, ${scrolled - (roundDefOffset - innerHeight / 2)}px, 0)`;
    } */
});

function removeRoundTransition() {
    round.classList.remove('round--transition');
}

function checkActiveEl() {
    let roundCurrentOffset = offset(round).top;
    allElemArr.forEach((el) => {
        if (roundCurrentOffset >= offset(el).top) {
            el.classList.add("solutions__list-el--active");
        } else {
            el.classList.remove("solutions__list-el--active");
        }
    });
} 

// Функция для получения offset элемента от верхней точки страницы
function offset(el) {
	const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
}
