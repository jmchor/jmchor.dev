const anchorLinkMain = document.getElementById('down') as HTMLButtonElement;

function scrollToMain(): void {
	window.scrollTo({
		top: 1650,
		behavior: 'smooth',
	});
}

anchorLinkMain.addEventListener('click', scrollToMain);
