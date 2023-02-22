"use strict";

// src/services.ts
var aboutMe = document.getElementById("about__me");
var platform = document.getElementById("platform");
var textBox = document.createElement("div");
textBox.setAttribute("id", "textbox");
var netlify = document.createElement("div");
netlify.setAttribute("id", "netlify");
netlify.setAttribute("class", "service");
netlify.innerHTML = ` <img src="../../11-resources/02-img/netlify.svg" />`;
var wordpress = document.createElement("div");
wordpress.setAttribute("id", "wordpress");
wordpress.setAttribute("class", "service");
wordpress.innerHTML = `<img src="../../11-resources/02-img/wordpress-blue.svg" />`;
var linode = document.createElement("div");
linode.setAttribute("id", "linode");
linode.setAttribute("class", "service");
linode.innerHTML = `<img src="../../11-resources/02-img/linode.svg" />`;
platform.appendChild(netlify);
platform.appendChild(wordpress);
platform.appendChild(linode);
var allServices = document.querySelectorAll(".service");
function displayText(e) {
  const parent = e.target.parentElement.id;
  if (parent === "netlify") {
    textBox.innerHTML = `
	        <p>Netlify is a service that</p>
	    `;
  } else if (parent === "wordpress") {
    textBox.innerHTML = `
	        <p>Wordpress is a service that</p>`;
  } else if (parent === "linode") {
    textBox.innerHTML = `
	        <p>linode is a service that</p>`;
  }
  aboutMe.appendChild(textBox);
  textBox.style.display = "block";
}
allServices.forEach((service) => {
  service.addEventListener("mouseover", displayText);
});
allServices.forEach((service) => {
  service.addEventListener("mouseout", () => {
    textBox.style.display = "none";
  });
});
