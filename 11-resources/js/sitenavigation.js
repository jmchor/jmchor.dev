"use strict";
const anchorLinkMain = document.getElementById('down');
const goToHere = document.getElementById('anchor-2');
function scrollToMain() {
    // window.scrollTo({
    // 	top: window.innerHeight + 405,
    // 	behavior: 'smooth',
    // });
    goToHere.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}
anchorLinkMain.addEventListener('click', scrollToMain);
