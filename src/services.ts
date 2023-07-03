/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
export function renderServices() {
	const platform = document.getElementById('platform') as HTMLDivElement;
	const divText = document.createElement('div');
	divText.setAttribute('id', 'divText');

	const servicesArray: string[] = [
		'JavaScript',
		'TypeScript',
		'NodeJS',
		'MongoDB',
		'React',
		'Express',
		'Wordpress',
		'netlify',
		'Linode',
		'Git',
		'GitHub',
		'VSCode',
		'HTML',
		'CSS',
		'Bootstrap',
	];

	servicesArray.forEach((service) => {
		const outerContainer = document.createElement('div');
		outerContainer.setAttribute('id', 'outer-container');
		const div = document.createElement('div');
		div.setAttribute('id', service);
		div.setAttribute('class', 'service');
		div.innerHTML = `<img src="../../11-resources/11-img/${service}.png" />`;

		const textContainer = document.createElement('div');
		textContainer.setAttribute('id', 'text-container');
		textContainer.innerHTML = `<p>${service}</p>`;

		outerContainer.appendChild(div);
		outerContainer.appendChild(textContainer);
		platform.appendChild(outerContainer);

		// platform.appendChild(div);
	});
}

// WARN function displayText not imported in index.js

export function displayText(e: MouseEvent) {
	// @ts-expect-error
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
	const parent: string = e.target.parentElement.id;
	const allServices = document.querySelectorAll('.service');
	const aboutMe = document.getElementById('about__me') as HTMLDivElement;
	const textBox = document.createElement('div');
	textBox.setAttribute('id', 'textbox');

	if (parent === 'netlify') {
		textBox.innerHTML = `
			<p>Netlify is a service that</p>
			<button onclick="closeTextbox()"> Close </button>`;
	} else if (parent === 'wordpress') {
		textBox.innerHTML = `
			<p>Wordpress is a service that</p>
			<button onclick="closeTextbox()"> Close </button>`;
	} else if (parent === 'linode') {
		textBox.innerHTML = `
		<p>linode is a service that</p>
			<button onclick="closeTextbox()"> Close </button>`;
	} else if (parent === 'typescript') {
		textBox.innerHTML = `
		<p>typescript is a service that</p>
			<button onclick="closeTextbox()"> Close </button>`;
	} else if (parent === 'javascript') {
		textBox.innerHTML = `
		<p>javascript is a service that</p>
		<button onclick="closeTextbox()"> Close </button>`;
	} else if (parent === 'nodeJS') {
		textBox.innerHTML = `
		<p>NodeJS makes JavaScript run on servers - together with Express.js and connected to databases, there are no bounds to the magic.</p>
		<button onclick="closeTextbox()"> Close </button>`;
	} else if (parent === 'mongodb') {
		textBox.innerHTML = `
		<p>javascript is a service that</p>
		<button onclick="closeTextbox()"> Close </button>`;
	}

	aboutMe.appendChild(textBox);
	textBox.style.display = 'flex';
	allServices.forEach((service) => {
		// @ts-expect-error
		service.addEventListener('click', displayText);
	});
}

// allServices.forEach((service) => {
// 	service.addEventListener('mouseout', () => {
// 		textBox.style.display = 'none';
// 	});
// });
// WARN function closeTextbox not imported in index.js
export function closeTextbox(): void {
	const textBox = document.querySelector('#textbox') as HTMLDivElement;

	textBox.style.display = 'none';
}
