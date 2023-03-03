"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/services.ts
var services_exports = {};
__export(services_exports, {
  closeTextbox: () => closeTextbox,
  displayText: () => displayText
});
module.exports = __toCommonJS(services_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  closeTextbox,
  displayText
});
