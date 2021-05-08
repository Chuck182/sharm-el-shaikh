function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const burger = () => {
    const burgerBtn = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    burgerBtn.addEventListener('click', e => {
        e.preventDefault();
        nav.classList.toggle('active');
        burgerBtn.classList.toggle('active');
    })
}
burger();



const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider__btn-next',
        prevEl: '.slider__btn-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});


const footer = () => {
    const footerTitle = document.querySelectorAll('.footer__col-title');
    footerTitle.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            if (!item.nextElementSibling.classList.contains('active')) {
                item.nextElementSibling.classList.add('active');
                item.nextElementSibling.style.height = 'auto';

                let height = item.nextElementSibling.clientHeight + 'px';
                item.nextElementSibling.style.height = '0px';

                setTimeout(() => {
                    item.nextElementSibling.style.height = height;
                }, 0);
            }
            else {
                item.nextElementSibling.style.height = '0px';
                item.nextElementSibling.addEventListener('transitionend', () => {
                    item.nextElementSibling.classList.remove('active');
                }, {
                    once: true
                });
            }
        });
    })
}
footer();