"use strict";
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/ban-ts-comment */
const aboutMe = document.getElementById('about__me');
const platform = document.getElementById('platform');
const textBox = document.createElement('div');
textBox.setAttribute('id', 'textbox');
const servicesArray = ['javascript', 'typescript', 'nodeJS', 'mongodb', 'wordpress', 'netlify', 'linode'];
servicesArray.forEach((service) => {
    const div = document.createElement('div');
    div.setAttribute('id', service);
    div.setAttribute('class', 'service');
    div.innerHTML = `<img src="../../11-resources/02-img/${service}.png" />`;
    platform.appendChild(div);
});
const allServices = document.querySelectorAll('.service');
function displayText(e) {
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const parent = e.target.parentElement.id;
    if (parent === 'netlify') {
        textBox.innerHTML = `
			<p>Netlify is a service that</p>
			<button onclick="closeTextbox()"> Close </button>`;
    }
    else if (parent === 'wordpress') {
        textBox.innerHTML = `
			<p>Wordpress is a service that</p>
			<button onclick="closeTextbox()"> Close </button>`;
    }
    else if (parent === 'linode') {
        textBox.innerHTML = `
	        <p>linode is a service that</p>
			<button onclick="closeTextbox()"> Close </button>`;
    }
    else if (parent === 'typescript') {
        textBox.innerHTML = `
	        <p>typescript is a service that</p>
			<button onclick="closeTextbox()"> Close </button>`;
    }
    else if (parent === 'javascript') {
        textBox.innerHTML = `
		<p>javascript is a service that</p>
		<button onclick="closeTextbox()"> Close </button>`;
    }
    else if (parent === 'nodeJS') {
        textBox.innerHTML = `
		<p>NodeJS makes JavaScript run on servers - together with Express.js and connected to databases, there are no bounds to the magic.</p>
		<button onclick="closeTextbox()"> Close </button>`;
    }
    else if (parent === 'mongodb') {
        textBox.innerHTML = `
		<p>javascript is a service that</p>
		<button onclick="closeTextbox()"> Close </button>`;
    }
    aboutMe.appendChild(textBox);
    textBox.style.display = 'flex';
}
function closeTextbox() {
    console.log('hello');
    textBox.style.display = 'none';
}
allServices.forEach((service) => {
    // @ts-expect-error
    service.addEventListener('click', displayText);
});
window.onload = () => {
    document.querySelector('.quote').classList.add('fade-in');
};
// allServices.forEach((service) => {
// 	service.addEventListener('mouseout', () => {
// 		textBox.style.display = 'none';
// 	});
// });
