/* --------------------------------- SCROLL ACTIONS --------------------------------- */ 

window.addEventListener("scroll", () => {
    const menuLogo = document.querySelector('#menuLogo');

    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    /* Show/hide menu logo */
    if (scrolled > coords) {
        menuLogo.classList.add('menu__logo-img--active');
        menuLogo.dataset.status = "active";
    } else {
        menuLogo.classList.remove('menu__logo-img--active');
        menuLogo.dataset.status = "";
    }
});



/* --------------------------------- MENU --------------------------------- */ 

const burgerMenu = document.querySelector('#burgerMenu');
const burgerBtn = document.querySelector('#burgerBtn');
const menuBtn = document.querySelector('#menuBtn');
const menuWrapper = document.querySelector('#menuWrapper');
const contactWrapper = document.querySelector('#contactWrapper');
const oneProjectWrapper = document.querySelector('#oneProjectWrapper');
const oneNewsWrapper = document.querySelector('#oneProjectWrapper');
const menuWrapperLogo = document.querySelector('#menuWrapperLogo');
const closeMenuBtns = document.querySelectorAll("[data-action-close-menu]");
const closeContactBtn = document.querySelector("[data-action-close-contact]");
const showContactWrapperLinks = document.querySelectorAll("[data-link-contact]");


if (burgerMenu) {
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
}

if(menuBtn) {
    menuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        menuWrapper.classList.toggle('menu-wrapper--active');
    });
}


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


/* ------------------------------ Mobile vh fix func ------------------------------- */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

/* -------------------- Smooth scroll for anchors script ------------------------ */
const anchors = document.querySelectorAll('[data-smooth-scroll]');
if(anchors) {
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
}
