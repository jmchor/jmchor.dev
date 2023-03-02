const sideMenuButton = document.querySelector('.sidemenu_button')!;
const sideBar = document.querySelector('.sidebar')!;
const list = sideBar.classList;
const nav = document.getElementById('nav')!;
const headerLogo: HTMLImageElement = document.querySelector('#header__logo')!;

function toggleSideMenu(): void {
	list.toggle('display__there');
}

sideMenuButton.addEventListener('click', toggleSideMenu);

const topOfNav = nav.offsetTop;

function fixNav(): void {
	if (window.scrollY >= topOfNav) {
		document.body.style.paddingTop = `${nav.offsetHeight}px`;
		document.body.classList.add('fixed-nav');
	} else {
		document.body.classList.remove('fixed-nav');
		document.body.style.paddingTop = '0';
	}
}

function scrollFunction(): void {
	// eslint-disable-next-line prettier/prettier
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		headerLogo.style.height = '50px';
	} else {
		headerLogo.style.height = '200px';
	}
}

window.addEventListener('scroll', () => {
	if (window.innerWidth > 700) {
		fixNav();
	}
});

window.addEventListener('scroll', scrollFunction);
