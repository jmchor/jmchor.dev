"use strict";
/* eslint-disable @typescript-eslint/ban-ts-comment */
const aboutMe = document.getElementById('about__me');
const platform = document.getElementById('platform');
const textBox = document.createElement('div');
textBox.setAttribute('id', 'textbox');
const netlify = document.createElement('div');
netlify.setAttribute('id', 'netlify');
netlify.setAttribute('class', 'service');
netlify.innerHTML = ` <img src="../../11-resources/02-img/netlify.svg" />`;
const wordpress = document.createElement('div');
wordpress.setAttribute('id', 'wordpress');
wordpress.setAttribute('class', 'service');
wordpress.innerHTML = `<img src="../../11-resources/02-img/wordpress-blue.svg" />`;
const linode = document.createElement('div');
linode.setAttribute('id', 'linode');
linode.setAttribute('class', 'service');
linode.innerHTML = `<img src="../../11-resources/02-img/linode.svg" />`;
platform.appendChild(netlify);
platform.appendChild(wordpress);
platform.appendChild(linode);
const allServices = document.querySelectorAll('.service');
function displayText(e) {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const parent = e.target.parentElement.id;
    if (parent === 'netlify') {
        textBox.innerHTML = `
	        <p>Netlify is a service that</p>
	    `;
    }
    else if (parent === 'wordpress') {
        textBox.innerHTML = `
	        <p>Wordpress is a service that</p>`;
    }
    else if (parent === 'linode') {
        textBox.innerHTML = `
	        <p>linode is a service that</p>`;
    }
    aboutMe.appendChild(textBox);
    textBox.style.display = 'block';
}
allServices.forEach((service) => {
    // @ts-ignore
    service.addEventListener('mouseover', displayText);
});
allServices.forEach((service) => {
    service.addEventListener('mouseout', () => {
        textBox.style.display = 'none';
    });
});
