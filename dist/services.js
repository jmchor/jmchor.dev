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
  displayText: () => displayText,
  renderServices: () => renderServices
});
module.exports = __toCommonJS(services_exports);
function renderServices() {
  var _a;
  const platform = document.getElementById("platform");
  const divText = document.createElement("div");
  divText.setAttribute("id", "divText");
  const servicesArray = [
    "JavaScript",
    "TypeScript",
    "NodeJS",
    "MongoDB",
    "React",
    "Express",
    "Wordpress",
    "netlify",
    "Linode",
    "Git",
    "GitHub",
    "VSCode",
    "HTML",
    "CSS",
    "Bootstrap"
  ];
  servicesArray.forEach((service) => {
    const outerContainer = document.createElement("div");
    outerContainer.setAttribute("id", "outer-container");
    const div = document.createElement("div");
    div.setAttribute("id", service);
    div.setAttribute("class", "service");
    div.innerHTML = `<img src="../../11-resources/11-img/${service}.png" />`;
    const textContainer = document.createElement("div");
    textContainer.setAttribute("id", "text-container");
    textContainer.innerHTML = `<p>${service}</p>`;
    outerContainer.appendChild(div);
    outerContainer.appendChild(textContainer);
    platform.appendChild(outerContainer);
  });
  const reactService = (_a = document.getElementById("React")) == null ? void 0 : _a.parentElement;
  reactService.classList.add("locked");
}
function displayText(e) {
  const parent = e.target.parentElement.id;
  const allServices = document.querySelectorAll(".service");
  const aboutMe = document.getElementById("about__me");
  const textBox = document.createElement("div");
  textBox.setAttribute("id", "textbox");
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
  allServices.forEach((service) => {
    service.addEventListener("click", displayText);
  });
}
function closeTextbox() {
  const textBox = document.querySelector("#textbox");
  textBox.style.display = "none";
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  closeTextbox,
  displayText,
  renderServices
});
