export default class PostsFilter {
    constructor() {

    }

    init(postsContainerSelector, postsElementAllSelector, postsElementsSelector) {

        const postContainer = document.querySelector(postsContainerSelector);
        const postElements = document.querySelectorAll(postsElementsSelector);

        postContainer.addEventListener("click", (e) => {
    
            let el;
            let target = e.target;
            if (target.hasAttribute(postsElementAllSelector)) {
                el = target.closest(postsElementAllSelector);
            } else {
                el = target.closest(postsElementsSelector);
            }

            if (!el) return;
            if (!postContainer.contains(el)) return;
            postElements.forEach((postEl) => {
                if (el.hasAttribute(postsElementAllSelector)) {
                    postEl.classList.remove('section__filter-list-all--active');
                    postEl.classList.remove('section__filter-list-el--active');
                } else {
                    postEl.classList.remove('section__filter-list-all--active');
                    postEl.classList.remove('section__filter-list-el--active');
                }
            });
            if (el.hasAttribute(postsElementAllSelector)) {
                el.classList.add('section__filter-list-all--active');
            } else {
                el.classList.add('section__filter-list-el--active');
            }
        }); 
        
    }
}
