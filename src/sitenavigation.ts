const anchorLinkMain = document.getElementById('down') as HTMLButtonElement;
const goToHere = document.getElementById('anchor-2') as HTMLDivElement;

function scrollToMain(): void {
	// window.scrollTo({
	// 	top: window.innerHeight + 405,
	// 	behavior: 'smooth',
	// });

	goToHere.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

anchorLinkMain.addEventListener('click', scrollToMain);
