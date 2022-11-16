const sideMenuButton = document.querySelector('.sidemenu_button');
const sideBar = document.querySelector('.sidebar');
const list = sideBar.classList;

function toggleSideMenu() {
	list.toggle('display__there');
}

sideMenuButton.addEventListener('click', toggleSideMenu);
