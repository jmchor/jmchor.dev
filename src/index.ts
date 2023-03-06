import { fixNav, scrollFunction, toggleSideMenu } from './navbar';
import { renderServices } from './services';

document.querySelector('.sidemenu_button')!.addEventListener('click', toggleSideMenu);

window.addEventListener('scroll', () => {
	if (window.innerWidth > 700) {
		fixNav();
	}
});

window.addEventListener('scroll', scrollFunction);

// _________Services________________

document.querySelectorAll('.service').forEach((service) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	service.addEventListener('click', displayText);
});

window.onload = () => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	document.querySelector('.quote').classList.add('fade-in');
	renderServices();
};

//--------------------------------
