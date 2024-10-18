"use strict";
const bodyEl = document.querySelector('body');
const menuOpenIcon = document.querySelector('.mobile-menu-icon');
const menuCloseIcon = document.querySelector('.close');
const navMobile = document.querySelector('.nav-mobile');
const toggleNavMenu = () => {
    if (navMobile.style.right === '-1rem') {
        bodyEl.style.overflow = 'unset';
        navMobile.style.opacity = '0';
        navMobile.style.right = '-16rem';
        navMobile.classList.add('hidden');
    }
    else {
        bodyEl.style.overflow = 'hidden';
        navMobile.classList.remove('hidden');
        navMobile.style.right = '-1rem';
        navMobile.style.opacity = '1';
    }
};
menuOpenIcon.addEventListener('click', toggleNavMenu);
menuCloseIcon.addEventListener('click', toggleNavMenu);
