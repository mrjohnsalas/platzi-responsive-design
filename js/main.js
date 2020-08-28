const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('#burger-menu');
const ipad = window.matchMedia('screen and (max-width: 767px)');

function hideShow() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
    
}

ipad.addListener(validation);

function validation(event) {
    if (event.matches) {
        burgerMenu.addEventListener('click', hideShow);
    } else {
        burgerMenu.removeEventListener('click', hideShow);
    }
}

validation(ipad);