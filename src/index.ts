import { fixNav, scrollFunction, toggleSideMenu } from './navbar';
import { closeTextbox, displayText } from './services';

document.querySelector('.sidemenu_button')!.addEventListener('click', toggleSideMenu);

window.addEventListener('scroll', () => {
	if (window.innerWidth > 700) {
		fixNav();
	}
});

window.addEventListener('scroll', scrollFunction);

// _________Services________________

document.querySelectorAll('.service').forEach((service) => {
	// @ts-expect-error
	service.addEventListener('click', displayText);
});

window.onload = () => {
	// @ts-expect-error
	document.querySelector('.quote').classList.add('fade-in');
	closeTextbox();
};

//--------------------------------
