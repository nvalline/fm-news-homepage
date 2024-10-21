"use strict";
const bodyEl = document.querySelector('body');
const menuOpenIcon = document.querySelector('.mobile-menu-icon');
const menuCloseIcon = document.querySelector('.close');
const navMobile = document.querySelector('.nav-mobile');
const mobileNavLinks = document.querySelector('.mobile-nav-links');
const toggleNavMenu = () => {
    if (navMobile.style.width === '256px') {
        bodyEl.style.overflow = 'unset';
        mobileNavLinks.classList.add('hidden');
        Object.assign(navMobile.style, {
            opacity: '0',
            padding: '1.75rem 0',
            right: '0',
            width: '0'
        });
    }
    else {
        bodyEl.style.overflow = 'hidden';
        mobileNavLinks.classList.remove('hidden');
        Object.assign(navMobile.style, {
            width: '256px',
            right: '-1rem',
            padding: '1.75rem 1.25rem',
            opacity: '1'
        });
    }
};
menuOpenIcon.addEventListener('click', toggleNavMenu);
menuCloseIcon.addEventListener('click', toggleNavMenu);
