const bodyEl = document.querySelector('body') as HTMLElement;
const menuOpenIcon = document.querySelector(
	'.mobile-menu-icon'
) as HTMLButtonElement;
const menuCloseIcon = document.querySelector('.close') as HTMLButtonElement;
const navMobile = document.querySelector('.nav-mobile') as HTMLElement;

const toggleNavMenu = () => {
	if (navMobile.style.right === '-1rem') {
		bodyEl.style.overflow = 'unset';
		navMobile.style.opacity = '0';
		navMobile.style.right = '-16rem';
		navMobile.classList.add('hidden');
	} else {
		bodyEl.style.overflow = 'hidden';
		navMobile.classList.remove('hidden');
		navMobile.style.right = '-1rem';
		navMobile.style.opacity = '1';
	}
};

menuOpenIcon.addEventListener('click', toggleNavMenu);
menuCloseIcon.addEventListener('click', toggleNavMenu);
