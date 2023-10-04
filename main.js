/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/app.js
const app_button = document.querySelector(".button");
const popover = document.querySelector("#popover");
function showPopover() {
  let position = app_button.getBoundingClientRect();
  let triangleHeight = 20;
  app_button.removeEventListener("click", showPopover);
  popover.classList.add("popover_wrapper");
  popover.classList.remove("display_none");
  popover.style.top = position.top - popover.offsetHeight - triangleHeight + "px";
  popover.style.left = position.left + (app_button.offsetWidth - popover.offsetWidth) / 2 + "px";
  app_button.addEventListener("click", removePopover);
}
function removePopover() {
  popover.classList.remove("popover_wrapper");
  popover.classList.add("display_none");
  app_button.addEventListener("click", showPopover);
}
app_button.addEventListener("click", showPopover);
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;