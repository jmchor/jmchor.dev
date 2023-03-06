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
function renderServices() {
  const platform = document.getElementById("platform");
  const divText = document.createElement("div");
  divText.setAttribute("id", "divText");
  const servicesArray = [
    "JavaScript",
    "TypeScript",
    "NodeJS",
    "MongoDB",
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
    div.innerHTML = `<img src="../../11-resources/02-img/${service}.png" />`;
    const textContainer = document.createElement("div");
    textContainer.setAttribute("id", "text-container");
    textContainer.innerHTML = `<p>${service}</p>`;
    outerContainer.appendChild(div);
    outerContainer.appendChild(textContainer);
    platform.appendChild(outerContainer);
  });
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
  renderServices();
};
