const sideMenuButton = document.querySelector('.sidemenu_button');
const sideBar = document.querySelector('.sidebar');
const list = sideBar.classList;
const nav = document.querySelector('.nav');

function toggleSideMenu() {
	list.toggle('display__there');
}

sideMenuButton.addEventListener('click', toggleSideMenu);

let topOfNav = nav.offsetTop;

function fixNav() {
	if (window.scrollY >= topOfNav) {
		document.body.style.paddingTop = nav.offsetHeight + 'px';
		document.body.classList.add('fixed-nav');
	} else {
		document.body.classList.remove('fixed-nav');
		document.body.style.paddingTop = 0;
	}
}

window.addEventListener('scroll', () => {
	if (window.innerWidth > 700) {
		fixNav();
	}
});
