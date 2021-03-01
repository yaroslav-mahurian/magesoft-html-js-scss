import lax from 'lax.js';

export default class RoundAnim {
    constructor() {

    }

    init() {

        /* Lax anim */
        lax.init();

        // Add a driver that we use to control our animations
        lax.addDriver('scrollY', function () {
            return window.scrollY;
        });

        // Add animation bindings to elements
        lax.addElements('#lineCoopRound', {
            scrollY: {
            translateY: [
                {
                    11520: [
                        "elCenterY - 200",
                        "elCenterY - 200 + 155",
                        "elCenterY - 200 + 255",
                        "elCenterY - 200 + 360",
                        "elCenterY - 200 + 460",
                        "elCenterY - 200 + 565",
                        "elCenterY - 200 + 665",
                        "elCenterY - 200 + 770",
                        "elCenterY - 200 + 870",
                        "elCenterY - 200 + 975",
                        "elCenterY - 200 + 1075",
                        "elCenterY - 200 + 1150",
                    ],
                    1279: [
                        "elCenterY - 200",
                        "elCenterY - 200 + 155",
                        "elCenterY - 200 + 255",
                        "elCenterY - 200 + 360",
                        "elCenterY - 200 + 460",
                        "elCenterY - 200 + 565",
                        "elCenterY - 200 + 665",
                        "elCenterY - 200 + 770",
                        "elCenterY - 200 + 870",
                        "elCenterY - 200 + 975",
                        "elCenterY - 200 + 1075",
                        "elCenterY - 200 + 1150",
                    ],
                    999: [
                        "elCenterY - 200",
                        "elCenterY - 200 + 155",
                        "elCenterY - 200 + 255",
                        "elCenterY - 200 + 360",
                        "elCenterY - 200 + 460",
                        "elCenterY - 200 + 565",
                        "elCenterY - 200 + 665",
                        "elCenterY - 200 + 770",
                        "elCenterY - 200 + 870",
                        "elCenterY - 200 + 975",
                        "elCenterY - 200 + 1075",
                        "elCenterY - 200 + 1150",
                    ],

                    767: [
                        "elCenterY - 200",
                        "elCenterY - 200 + 155",
                        "elCenterY - 200 + 255",
                        "elCenterY - 200 + 345",
                        "elCenterY - 200 + 445",
                        "elCenterY - 200 + 535",
                        "elCenterY - 200 + 630",
                        "elCenterY - 200 + 725",
                        "elCenterY - 200 + 825",
                        "elCenterY - 200 + 915",
                        "elCenterY - 200 + 1015",
                        "elCenterY - 200 + 1075",
                    ],

                    479: [
                        "elCenterY - 200",
                        "elCenterY - 200 + 155",
                        "elCenterY - 200 + 255",
                        "elCenterY - 200 + 345",
                        "elCenterY - 200 + 445",
                        "elCenterY - 200 + 535",
                        "elCenterY - 200 + 630",
                        "elCenterY - 200 + 725",
                        "elCenterY - 200 + 825",
                        "elCenterY - 200 + 915",
                        "elCenterY - 200 + 1015",
                        "elCenterY - 200 + 1065",
                    ]
                },
                {
                    11520: [
                        0,
                        155, 
                        155, 
                        360, 
                        360, 
                        565,
                        565,
                        770,
                        770,
                        975,
                        975,
                        1150,
                    ],
                    1279: [
                        0,
                        155, 
                        155, 
                        360, 
                        360, 
                        565,
                        565,
                        770,
                        770,
                        975,
                        975,
                        1150,
                    ],
                    999: [
                        0,
                        155, 
                        155, 
                        360, 
                        360, 
                        565,
                        565,
                        770,
                        770,
                        975,
                        975,
                        1150,
                    ],
                    767: [
                        0,
                        155, 
                        155, 
                        345, 
                        345, 
                        535,
                        535,
                        725,
                        725,
                        915,
                        915,
                        1075,
                    ],

                    479: [
                        0,
                        155, 
                        155, 
                        345, 
                        345, 
                        535,
                        535,
                        725,
                        725,
                        915,
                        915,
                        1065,
                    ]
                }
            ],
            translateX: [ 
                {
                    11520: [
                        "elCenterY - 200",
                        "elCenterY - 200 + 155",
                        "elCenterY - 200 + 255",
                        "elCenterY - 200 + 360",
                        "elCenterY - 200 + 460",
                        "elCenterY - 200 + 565",
                        "elCenterY - 200 + 665",
                        "elCenterY - 200 + 770",
                        "elCenterY - 200 + 870",
                        "elCenterY - 200 + 975",
                        "elCenterY - 200 + 1075",
                    ],
                    1279: [
                        "elCenterY - 200",
                        "elCenterY - 200 + 155",
                        "elCenterY - 200 + 255",
                        "elCenterY - 200 + 360",
                        "elCenterY - 200 + 460",
                        "elCenterY - 200 + 565",
                        "elCenterY - 200 + 665",
                        "elCenterY - 200 + 770",
                        "elCenterY - 200 + 870",
                        "elCenterY - 200 + 975",
                        "elCenterY - 200 + 1075",
                    ],
                    999: [
                        "elCenterY - 200",
                        "elCenterY - 200 + 155",
                        "elCenterY - 200 + 255",
                        "elCenterY - 200 + 360",
                        "elCenterY - 200 + 460",
                        "elCenterY - 200 + 565",
                        "elCenterY - 200 + 665",
                        "elCenterY - 200 + 770",
                        "elCenterY - 200 + 870",
                        "elCenterY - 200 + 975",
                        "elCenterY - 200 + 1075",
                    ],

                    767: [
                        "elCenterY - 200",
                        "elCenterY - 200 + 155",
                        "elCenterY - 200 + 255",
                        "elCenterY - 200 + 345",
                        "elCenterY - 200 + 445",
                        "elCenterY - 200 + 535",
                        "elCenterY - 200 + 630",
                        "elCenterY - 200 + 725",
                        "elCenterY - 200 + 825",
                        "elCenterY - 200 + 915",
                        "elCenterY - 200 + 1015",
                    ],

                    479: [
                        "elCenterY - 200",
                        "elCenterY - 200 + 155",
                        "elCenterY - 200 + 255",
                        "elCenterY - 200 + 345",
                        "elCenterY - 200 + 445",
                        "elCenterY - 200 + 535",
                        "elCenterY - 200 + 630",
                        "elCenterY - 200 + 725",
                        "elCenterY - 200 + 825",
                        "elCenterY - 200 + 915",
                        "elCenterY - 200 + 1015",
                    ]

                },
                {
                    11520: [
                        0,
                        0,
                        938,
                        938,
                        3,
                        3,
                        938,
                        938,
                        3,
                        3,
                        875,
                    ],
                    1279:[
                        0,
                        0,
                        658,
                        658,
                        3,
                        3,
                        658,
                        658,
                        3,
                        3,
                        595,
                    ],
                    999: [
                        0,
                        0,
                        500,
                        500,
                        3,
                        3,
                        500,
                        500,
                        3,
                        3,
                        438,
                    ],
                    767: [
                        0,
                        0,
                        283,
                        283,
                        3,
                        3,
                        283,
                        283,
                        3,
                        3,
                        240,
                    ],

                    479: [
                        0,
                        0,
                        142,
                        142,
                        3,
                        3,
                        142,
                        142,
                        3,
                        3,
                        73,
                    ]
                } 
            ],
            }
        });

        lax.addElements('#newsRound', {
            scrollY: {
                translateY: [ 
                    {
                        11520: [
                            "elCenterY - 200",
                            "elCenterY - 200 + 200",
                        ],
                        999: [0],
                    },

                    {
                        11520: [
                            0,
                            200,
                        ],
                        999: [0],
                    }
                ]
            }
        });

        lax.addElements('#noticeRound', {
            scrollY: {
                translateY: [ 
                    {
                        11520: [
                            "elCenterY + 100",
                            "elCenterY + 100 + 85",
                        ],
                        999: [0],
                    },

                    {
                        11520: [
                            0,
                            85,
                        ],
                        999: [0],
                    }
                ]
            },
            },   
        );

        /* Vline block elements */
        const vline = document.querySelector("#vline");
        console.log("🚀 ~ file: roundAnim.js ~ line 360 ~ RoundAnim ~ init ~ vline", vline);
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


        const qualitiesTitlesArr = Array.from(document.querySelectorAll('[data-qualities-header]'));

            /* Get titles offsets */
        let allElemPosArr = [];
        const allElemArr = Array.from(document.querySelectorAll('[data-scroll-anim-element]'));
        allElemArr.forEach(function(element) {
            const ElemPos = offset(element).top;
                allElemPosArr.push(ElemPos);
        }); 

        /* Coop block elements */
        const lineCoopRound = document.querySelector('#lineCoopRound');
        const noticeBlock = document.querySelector('#noticeBlock');
        const noticeRound = document.querySelector('#noticeRound');
        const noticeRoundStatic = document.querySelector('#noticeRoundStatic');
        const coopAnimElementsArr = Array.from(document.querySelectorAll('[data-coop-anim-elem]'));
    
        /* Scroll event listener */
        window.addEventListener("scroll", function() {
            vlineScrollActions();
            checkActiveCoopEl();
        });

        /* Mouseover event listener for vline block */
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

        function vlineScrollActions() {
            
            vlineRound.classList.remove('round--transition');
            const scrolled = window.pageYOffset;
            const innerHeight = window.innerHeight;

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
        }
    
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


            if(document.documentElement.clientWidth >= 999) {
                const noticeRoundOffset = offset(noticeRound).top;
                const noticeRoundStaticOffset = offset(noticeRoundStatic).top;
                if (noticeRoundOffset >= noticeRoundStaticOffset) {
                    noticeBlock.classList.add('notice--active');
                    noticeRound.style.borderColor = "#000000";
                    noticeRound.style.backgroundColor = "#ffffff";
        
                } else {
                    noticeBlock.classList.remove('notice--active');
                    noticeRound.style.borderColor = "#ffffff";
                    noticeRound.style.backgroundColor = "#000000";
                }
            }
            
        }
    }
}



