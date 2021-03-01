export default class CardPagination {
    constructor() {

    }

    init(cardPageContainerSelector, cardPageElementsSelector) {

        const cardPageContainer = document.querySelector(cardPageContainerSelector);
        const cardPageElements = document.querySelectorAll(cardPageElementsSelector);

        cardPageContainer.addEventListener("click", (e) => {
    
    
            let target = e.target;
            let page = target.closest(cardPageElementsSelector);

            if (!page) return;
            if (!cardPageContainer.contains(page)) return;

            cardPageElements.forEach((pageEl) => {
                pageEl.classList.remove('card-pages__list-el--active');
            });
            page.classList.add('card-pages__list-el--active');
        }); 
        
    }
}
