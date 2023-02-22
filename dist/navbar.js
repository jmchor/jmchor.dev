"use strict";

// src/navbar.ts
var sideMenuButton = document.querySelector(".sidemenu_button");
var sideBar = document.querySelector(".sidebar");
var list = sideBar.classList;
var nav = document.querySelector(".nav");
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
window.addEventListener("scroll", () => {
  if (window.innerWidth > 700) {
    fixNav();
  }
});
window.addEventListener("scroll", scrollFunction);
