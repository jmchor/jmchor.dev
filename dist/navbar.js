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

// src/navbar.ts
var navbar_exports = {};
__export(navbar_exports, {
  fixNav: () => fixNav,
  scrollFunction: () => scrollFunction,
  toggleSideMenu: () => toggleSideMenu
});
module.exports = __toCommonJS(navbar_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  fixNav,
  scrollFunction,
  toggleSideMenu
});
