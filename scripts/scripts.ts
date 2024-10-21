const bodyEl = document.querySelector('body') as HTMLElement;
const menuOpenIcon = document.querySelector(
	'.mobile-menu-icon'
) as HTMLButtonElement;
const menuCloseIcon = document.querySelector('.close') as HTMLButtonElement;
const navMobile = document.querySelector('.nav-mobile') as HTMLElement;
const mobileNavLinks = document.querySelector(
	'.mobile-nav-links'
) as HTMLElement;

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
	} else {
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
