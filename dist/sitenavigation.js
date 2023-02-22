"use strict";

// src/sitenavigation.ts
var anchorLinkMain = document.getElementById("down");
var goToHere = document.getElementById("anchor-2");
function scrollToMain() {
  goToHere.scrollIntoView({ block: "nearest", behavior: "smooth" });
}
anchorLinkMain.addEventListener("click", scrollToMain);
