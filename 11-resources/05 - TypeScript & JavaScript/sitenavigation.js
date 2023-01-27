"use strict";
const anchorLinkMain = document.getElementById('down');
function scrollToMain() {
    window.scrollTo({
        top: 1650,
        behavior: 'smooth',
    });
}
anchorLinkMain.addEventListener('click', scrollToMain);
