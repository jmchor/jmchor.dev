"use strict";

// src/navbar.ts
var sideMenuButton = document.querySelector(".sidemenu_button");
var sideBar = document.querySelector(".sidebar");
var list = sideBar.classList;
var nav = document.getElementById("nav");
var headerLogo = document.querySelector("#header__logo");
function toggleSideMenu() {
  list.toggle("display__there");
}
sideMenuButton.addEventListener("click", toggleSideMenu);
var topOfNav = nav.offsetTop;
function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = "0";
  }
}
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerLogo.style.height = "50px";
  } else {
    headerLogo.style.height = "200px";
  }
}

// src/services.ts
var aboutMe = document.getElementById("about__me");
var platform = document.getElementById("platform");
var textBox = document.createElement("div");
textBox.setAttribute("id", "textbox");
var servicesArray = ["javascript", "typescript", "nodeJS", "mongodb", "wordpress", "netlify", "linode"];
servicesArray.forEach((service) => {
  const div = document.createElement("div");
  div.setAttribute("id", service);
  div.setAttribute("class", "service");
  div.innerHTML = `<img src="../../11-resources/02-img/${service}.png" />`;
  platform.appendChild(div);
});
var allServices = document.querySelectorAll(".service");
function displayText(e) {
  const parent = e.target.parentElement.id;
  if (parent === "netlify") {
    textBox.innerHTML = `
			<p>Netlify is a service that</p>
			<button onclick="closeTextbox()"> Close </button>`;
  } else if (parent === "wordpress") {
    textBox.innerHTML = `
			<p>Wordpress is a service that</p>
			<button onclick="closeTextbox()"> Close </button>`;
  } else if (parent === "linode") {
    textBox.innerHTML = `
	        <p>linode is a service that</p>
			<button onclick="closeTextbox()"> Close </button>`;
  } else if (parent === "typescript") {
    textBox.innerHTML = `
	        <p>typescript is a service that</p>
			<button onclick="closeTextbox()"> Close </button>`;
  } else if (parent === "javascript") {
    textBox.innerHTML = `
		<p>javascript is a service that</p>
		<button onclick="closeTextbox()"> Close </button>`;
  } else if (parent === "nodeJS") {
    textBox.innerHTML = `
		<p>NodeJS makes JavaScript run on servers - together with Express.js and connected to databases, there are no bounds to the magic.</p>
		<button onclick="closeTextbox()"> Close </button>`;
  } else if (parent === "mongodb") {
    textBox.innerHTML = `
		<p>javascript is a service that</p>
		<button onclick="closeTextbox()"> Close </button>`;
  }
  aboutMe.appendChild(textBox);
  textBox.style.display = "flex";
}
allServices.forEach((service) => {
  service.addEventListener("click", displayText);
});
window.onload = () => {
  document.querySelector(".quote").classList.add("fade-in");
};
function closeTextbox() {
  console.log("hello");
  textBox.style.display = "none";
}

// src/index.ts
document.querySelector(".sidemenu_button").addEventListener("click", toggleSideMenu);
window.addEventListener("scroll", () => {
  if (window.innerWidth > 700) {
    fixNav();
  }
});
window.addEventListener("scroll", scrollFunction);
document.querySelectorAll(".service").forEach((service) => {
  service.addEventListener("click", displayText);
});
window.onload = () => {
  document.querySelector(".quote").classList.add("fade-in");
  closeTextbox();
};
