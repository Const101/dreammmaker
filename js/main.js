/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/navigation/navigation.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/pagination/pagination.js");





swiper_core__WEBPACK_IMPORTED_MODULE_3__.default.use([swiper_core__WEBPACK_IMPORTED_MODULE_4__.default, swiper_core__WEBPACK_IMPORTED_MODULE_5__.default]);
var swiper = new swiper_core__WEBPACK_IMPORTED_MODULE_3__.default();
var a = 5;
var accordionItemHeaders = document.querySelectorAll(".accordion-item-header"); // modall code

var btns = document.querySelectorAll("[data-modal-btn]");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (event) {
    var atr = event.target.getAttribute('data-modal-btn');
    var modal = document.querySelector("[data-modal-window = ".concat(atr, "]"));
    modal.style.display = "block";
    modal.querySelector(".close_modal_window").addEventListener('click', function () {
      return modal.style.display = "none";
    });
  });
}

window.onclick = function (e) {
  if (e.target.hasAttribute('data-modal-window')) {
    var modals = document.querySelectorAll("*[data-modal-window]");

    for (var _i = 0; _i < modals.length; _i++) {
      modals[_i].style.display = "none";
    }
  }
}; //modal code end
// accordion


accordionItemHeaders.forEach(function (accordionItemHeader) {
  accordionItemHeader.addEventListener("click", function (event) {
    var currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");

    if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    var accordionItemBody = accordionItemHeader.nextElementSibling;

    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
}); // Swiper

new swiper_core__WEBPACK_IMPORTED_MODULE_3__.default('.swiper-container', {
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button' // prevEl: '.swiper-button-prev',

  }
});

/***/ }),

/***/ "./images/card-1.png":
/*!***************************!*\
  !*** ./images/card-1.png ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card-1.png");

/***/ }),

/***/ "./images/card-2.png":
/*!***************************!*\
  !*** ./images/card-2.png ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card-2.png");

/***/ }),

/***/ "./images/facebook.png":
/*!*****************************!*\
  !*** ./images/facebook.png ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/facebook.png");

/***/ }),

/***/ "./images/girl.png":
/*!*************************!*\
  !*** ./images/girl.png ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/girl.png");

/***/ }),

/***/ "./images/icon-1.png":
/*!***************************!*\
  !*** ./images/icon-1.png ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/icon-1.png");

/***/ }),

/***/ "./images/icon-2.png":
/*!***************************!*\
  !*** ./images/icon-2.png ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/icon-2.png");

/***/ }),

/***/ "./images/icon-3.png":
/*!***************************!*\
  !*** ./images/icon-3.png ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/icon-3.png");

/***/ }),

/***/ "./images/icon-4.png":
/*!***************************!*\
  !*** ./images/icon-4.png ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/icon-4.png");

/***/ }),

/***/ "./images/instagram.png":
/*!******************************!*\
  !*** ./images/instagram.png ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/instagram.png");

/***/ }),

/***/ "./images/lines.png":
/*!**************************!*\
  !*** ./images/lines.png ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/lines.png");

/***/ }),

/***/ "./images/logo-footer.png":
/*!********************************!*\
  !*** ./images/logo-footer.png ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/logo-footer.png");

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/logo.png");

/***/ }),

/***/ "./images/man.png":
/*!************************!*\
  !*** ./images/man.png ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/man.png");

/***/ }),

/***/ "./images/slider-2.jpg":
/*!*****************************!*\
  !*** ./images/slider-2.jpg ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/slider-2.jpg");

/***/ }),

/***/ "./images/slider-3.png":
/*!*****************************!*\
  !*** ./images/slider-3.png ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/slider-3.png");

/***/ }),

/***/ "./images/slider-4.png":
/*!*****************************!*\
  !*** ./images/slider-4.png ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/slider-4.png");

/***/ }),

/***/ "./images/slider-image.png":
/*!*********************************!*\
  !*** ./images/slider-image.png ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/slider-image.png");

/***/ }),

/***/ "./images/twitter.png":
/*!****************************!*\
  !*** ./images/twitter.png ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/twitter.png");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 42:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./images/logo.png */ "./images/logo.png");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./images/icon-1.png */ "./images/icon-1.png");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ./images/icon-2.png */ "./images/icon-2.png");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ./images/icon-3.png */ "./images/icon-3.png");
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ./images/icon-4.png */ "./images/icon-4.png");
var ___HTML_LOADER_IMPORT_5___ = __webpack_require__(/*! ./images/lines.png */ "./images/lines.png");
var ___HTML_LOADER_IMPORT_6___ = __webpack_require__(/*! ./images/man.png */ "./images/man.png");
var ___HTML_LOADER_IMPORT_7___ = __webpack_require__(/*! ./images/card-1.png */ "./images/card-1.png");
var ___HTML_LOADER_IMPORT_8___ = __webpack_require__(/*! ./images/card-2.png */ "./images/card-2.png");
var ___HTML_LOADER_IMPORT_9___ = __webpack_require__(/*! ./images/girl.png */ "./images/girl.png");
var ___HTML_LOADER_IMPORT_10___ = __webpack_require__(/*! ./images/slider-image.png */ "./images/slider-image.png");
var ___HTML_LOADER_IMPORT_11___ = __webpack_require__(/*! ./images/slider-2.jpg */ "./images/slider-2.jpg");
var ___HTML_LOADER_IMPORT_12___ = __webpack_require__(/*! ./images/slider-3.png */ "./images/slider-3.png");
var ___HTML_LOADER_IMPORT_13___ = __webpack_require__(/*! ./images/slider-4.png */ "./images/slider-4.png");
var ___HTML_LOADER_IMPORT_14___ = __webpack_require__(/*! ./images/facebook.png */ "./images/facebook.png");
var ___HTML_LOADER_IMPORT_15___ = __webpack_require__(/*! ./images/twitter.png */ "./images/twitter.png");
var ___HTML_LOADER_IMPORT_16___ = __webpack_require__(/*! ./images/instagram.png */ "./images/instagram.png");
var ___HTML_LOADER_IMPORT_17___ = __webpack_require__(/*! ./images/logo-footer.png */ "./images/logo-footer.png");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_17___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n    <link href=\"https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Poppins:wght@400;500&family=Rubik:wght@400;600;700&display=swap\" rel=\"stylesheet\">\n    <link href=\"https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap\" rel=\"stylesheet\">\n    <link rel=\"stylesheet\" href=\"https://unpkg.com/swiper/swiper-bundle.min.css\" />\n    <link rel=\"stylesheet\" href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\">\n    <title>new site</title>\n</head>\n\n<body>\n    <header class=\"header\">\n        <div class=\"container\">\n            <div class=\"header__inner\">\n\n                <a class=\"header-logo\" href=\"#\">\n                    <div class=\"header-logo__image\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"></div>\n                    <div class=\"header-logo__text\">Dreammaker</div>\n                </a>\n                <nav class=\"menu\">\n                    <ul class=\"menu__list\">\n                        <li class=\"menu__list-item\">\n                            <a class=\"menu__list-link\" href=\"#\">Home</a>\n                        </li>\n                        <li class=\"menu__list-item\">\n                            <a class=\"menu__list-link\" href=\"#\">About us</a>\n                        </li>\n                        <li class=\"menu__list-item\">\n                            <a class=\"menu__list-link\" href=\"#\">Service</a>\n                        </li>\n                        <li class=\"menu__list-item\">\n                            <a class=\"menu__list-link\" href=\"#\">Setting</a>\n                        </li>\n                    </ul>\n                </nav>\n                <div class=\"header__info\">\n                    <a data-modal-btn=\"my_modal1\" href=\"#\" class=\"header__btn_1\">Contact us</a>\n                    <div data-modal-window=\"my_modal1\" class=\"modal\">\n                        <div class=\"modal__content\">\n                            <div class=\"modal__inner\">\n                                <!-- <div class=\"modal__title\">\n                                    <h3 class=\"title-1\">Please join with us & get all kind of benifit</h3>\n                                </div> -->\n                                <div class=\"close_modal_window\">&times;</div>\n                            </div>\n                            <div class=\"register_form\">\n                                <form class=modal_form>\n                                    <p class=\"form__name\">Name</p>\n                                    <input class=\"contacts__form-line\" placeholder=\"Name\" type=\"text\">\n                                    <p class=\"form__email\">Your email</p>\n                                    <input class=\"contacts__form-line\" placeholder=\"Your email address\" type=\"text\">\n                                    <button class=\"contacts__form-btn\" type=\"submit\">SIGN IN</button>\n                                    <p class=\"Question__Ask\">Don’t have an account?<br> <a class=\"colortext\" href=\"#\">Sign Up here</a></p>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n\n\n            <div class=\"top__inner\">\n                <h1 class=\"top__title\">\n                    Your awesome Dream <br> maker consultant\n                </h1>\n                <p class=\"top__text\">\n                    The occupational traffic permit is one of the most important things in the company <br> when carrying out freight transport. In fact, it is a prerequisite for <br> doing business traffic at all.\n                </p>\n                <div class=\"top__btn\">\n                    <a href=\"#\" class=\"header__btn_2\">Get started</a>\n                </div>\n            </div>\n        </div>\n    </header>\n\n    <section class=\"page-section-products\">\n        <div class=\"container\">\n            <div class=\"products_disc\">\n                <h1 class=\"products__title\">We provide great Service</h1>\n                <ul class=\"perfect__list\">\n                    <li class=\"perfect__list-text\">The occupational traffic permit is one of the most important things in the company </li>\n                    <li class=\"perfect__list-text\">when carrying out freight transport. In fact, it is a</li>\n                    <li class=\"perfect__list-text\">prerequisite for doing business traffic at all. </li>\n                </ul>\n            </div>\n            <div class=\"products__inner\">\n\n                <div class=\"top__bottom\">\n                    <div class=\"top__items\">\n                        <div class=\"top__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"a\">\n                            <h3 class=\"top__item-title\">Web design</h3>\n                            <p class=\"top__item-text\">Here you can find all web design and all of yours designing meterials </p>\n                        </div>\n                        <div class=\"top__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"a\">\n                            <h3 class=\"top__item-title\">Health and study</h3>\n                            <p class=\"top__item-text\">Here you can find all your primary health your good health and education</p>\n                        </div>\n                        <div class=\"top__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"a\">\n                            <h3 class=\"top__item-title\">Packaging</h3>\n                            <p class=\"top__item-text\">Consistency in packaging matter a lot. Give your attention match design elements</p>\n                        </div>\n                        <div class=\"top__item\">\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"a\">\n                            <h3 class=\"top__item-title\">Content writing</h3>\n                            <p class=\"top__item-text\">It can be understood that your fonts, sizes, headings, sub-headings, and button</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"top__bottom_2\">\n                    <div class=\"bottom__inner\">\n                        <h3 class=\"products__title-2\">The People are quick turnaround here</h3>\n                        <p class=\"bottom__text\">The occupational traffic permit is one of the most <br> things in the company How do you do when <br> a commercial traffic permit for freight <br> transport to your business? </p>\n                    </div>\n                    <div class=\"bottom-img\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"a\">\n                    </div>\n\n                </div>\n                <div class=\"header__bottom\">\n                    <h2 class=\"bottom-header\">First see how to expand <br> or our demo </h2>\n                </div>\n\n            </div>\n        </div>\n    </section>\n\n\n    <section class=\"page-section video\">\n        <iframe width=\"100%\" height=\"780px\" src=\"https://www.youtube.com/embed/oLWScthpAgY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n\n    </section>\n\n    <section class=\"page-section__faq\">\n\n        <div class=\"container\">\n\n            <div class=\"column\">\n                <div class=\"group_block\">\n                    <div class=\"question\">\n                        <h2 class=\"Ask-question\">Your Questions and <br> Answers is always ready:</h2>\n                    </div>\n                    <div class=\"accordion\">\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                What is a professional traffic permit?\n                            </div>\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                How to check the traffic condition?\n                            </div>\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                What are the requirements for a professional traffic permit?\n                            </div>\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                Are there professional traffic permit training courses at a distance?\n                            </div>\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                Where to look for a traffic permit?\n                            </div>\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                Are there differences between a traffic permit and a professional traffic permit?\n                            </div>\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                When is a professional traffic permit needed?\n                            </div>\n\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"group_block\">\n                    <img class=\"img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\n                    <div class=\"accordion\">\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                When is a professional traffic permit needed?\n                            </div>\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                Where to look for a traffic permit?\n                            </div>\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                Are there differences between a traffic permit and a professional traffic permit?\n                            </div>\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                How much does a commercial traffic permit cost for goods?\n                            </div>\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                How to plug in for the traffic permit test?\n                            </div>\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"accordion-item\">\n                            <div class=\"accordion-item-header\">\n                                How is the sample for a professional traffic permit booked?\n                            </div>\n                            <div class=\"accordion-item-body\">\n                                <div class=\"accordion-item-body-content\">\n                                    Traffic permits are a requirement for conducting professional traffic.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"Button__btn-features\">\n            <a class=\"Button__btn-features-load\" href=\"#\">Load More</a>\n        </div>\n\n\n\n    </section>\n\n    <section class=\"page-section-Features\">\n        <div class=\"container\">\n            <div class=\"Features-title\">\n                <h3 class=\"products__title-3\">Best Feature in the world </h3>\n                <p class=\"Features__Text\">Here you get the best featured in the world and you can do the best thing <br> when carrying out freight transport. In fact, it is a</p>\n            </div>\n            <div class=\"card-section\">\n                <div class=\"card__one\">\n                    <img class=\"card-one\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"a\">\n                    <h1 class=\"card__title\">Customer</h1>\n                    <p class=\"card__text\">The occupational traffic permit is one things in the company How do you a commercial traffic permit for freight transport to your business? </p>\n                    <div class=\"card__button__btn\">\n                        <a class=\"Button__btn\" href=\"#\">Refer anyone</a>\n                    </div>\n                </div>\n                <div class=\"card__two\">\n                    <img class=\"card-two\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"a\">\n                    <h1 class=\"card__title\">Provider</h1>\n                    <p class=\"card__text\">The occupational traffic permit is one things in the company How do you a commercial traffic permit for freight transport to your business? </p>\n                    <div class=\"card__button__btn\">\n                        <a class=\"Button__btn-red\" href=\"#\">Learn more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"pink-circles\">\n                <div class=\"big-circle\"></div>\n                <div class=\"two-circle-one\"></div>\n                <div class=\"two-circle-two\"></div>\n                <div class=\"medium-circle-one\"></div>\n                <div class=\"medium-circle-two\"></div>\n                <div class=\"big-circle-one\"></div>\n                <div class=\"big-circle-two\"></div>\n\n            </div>\n            <div class=\"girl__images\">\n                <img class=\"Girl\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\n            </div>\n\n\n            <div class=\"bottom__features\">\n                <h3 class=\"title\">Best Feature in the world </h3>\n\n\n\n                <p class=\"Features__Text\">Here you get the best featured in the world and you can do the best thing when carrying out freight transport. In fact, it is a</p>\n            </div>\n\n            <div class=\"swiper-container\">\n                <div class=\"swiper-wrapper\">\n                    <div class=\"swiper-slide\">\n                        <p class=\"swiper__text\">From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan. </p>\n                        <img class=\"swiper__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"a\">\n                        <div class=\"swiper__feedback-rating\">\n                            <p class=\"swiper__name\">Simon Sandberg</p>\n                            <div class=\"swiper__class\">Overall Rating</div>\n                            <div class=\"swiper__feedback__stars\">\n                                <div class=\"star-rating__wrap\">\n                                    <input class=\"star-rating__input\" id=\"star-rating-5\" type=\"radio\" name=\"rating\" value=\"5\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-5\" title=\"5 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-4\" type=\"radio\" name=\"rating\" value=\"4\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-4\" title=\"4 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-3\" type=\"radio\" name=\"rating\" value=\"3\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-3\" title=\"3 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-2\" type=\"radio\" name=\"rating\" value=\"2\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-2\" title=\"2 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-1\" type=\"radio\" name=\"rating\" value=\"1\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-1\" title=\"1 out of 5 stars\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"swiper-slide\">\n                        <p class=\"swiper__text\">From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan. </p>\n                        <img class=\"swiper__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"a\">\n                        <div class=\"swiper__feedback-rating\">\n                            <p class=\"swiper__name\">Tatjana Fastovica</p>\n                            <div class=\"swiper__class\">Overall Rating</div>\n                            <div class=\"swiper__feedback__stars\">\n                                <div class=\"star-rating__wrap\">\n                                    <input class=\"star-rating__input\" id=\"star-rating-5\" type=\"radio\" name=\"rating\" value=\"5\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-5\" title=\"5 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-4\" type=\"radio\" name=\"rating\" value=\"4\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-4\" title=\"4 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-3\" type=\"radio\" name=\"rating\" value=\"3\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-3\" title=\"3 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-2\" type=\"radio\" name=\"rating\" value=\"2\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-2\" title=\"2 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-1\" type=\"radio\" name=\"rating\" value=\"1\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-1\" title=\"1 out of 5 stars\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"swiper-slide\">\n                        <p class=\"swiper__text\">From most We segodna doma idem gulatj. i boltatj asd kfl. askldkalwneosiods Control Supervisors (TCS) who can generate and certify the traffic control plan. </p>\n                        <img class=\"swiper__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"a\">\n                        <div class=\"swiper__feedback-rating\">\n                            <p class=\"swiper__name\">Osipova Ludmila</p>\n                            <div class=\"swiper__class\">Overall Rating</div>\n                            <div class=\"swiper__feedback__stars\">\n                                <div class=\"star-rating__wrap\">\n                                    <input class=\"star-rating__input\" id=\"star-rating-5\" type=\"radio\" name=\"rating\" value=\"5\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-5\" title=\"5 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-4\" type=\"radio\" name=\"rating\" value=\"4\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-4\" title=\"4 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-3\" type=\"radio\" name=\"rating\" value=\"3\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-3\" title=\"3 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-2\" type=\"radio\" name=\"rating\" value=\"2\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-2\" title=\"2 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-1\" type=\"radio\" name=\"rating\" value=\"1\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-1\" title=\"1 out of 5 stars\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"swiper-slide\">\n                        <p class=\"swiper__text\">We segodna doma idem gulatj. i boltatj asd kfl. askldkalwneosiods . </p>\n                        <img class=\"swiper__icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"a\">\n                        <div class=\"swiper__feedback-rating\">\n                            <p class=\"swiper__name\">Vladislavs Shutovs</p>\n                            <div class=\"swiper__class\">Overall Rating</div>\n                            <div class=\"swiper__feedback__stars\">\n                                <div class=\"star-rating__wrap\">\n                                    <input class=\"star-rating__input\" id=\"star-rating-5\" type=\"radio\" name=\"rating\" value=\"5\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-5\" title=\"5 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-4\" type=\"radio\" name=\"rating\" value=\"4\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-4\" title=\"4 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-3\" type=\"radio\" name=\"rating\" value=\"3\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-3\" title=\"3 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-2\" type=\"radio\" name=\"rating\" value=\"2\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-2\" title=\"2 out of 5 stars\"></label>\n                                    <input class=\"star-rating__input\" id=\"star-rating-1\" type=\"radio\" name=\"rating\" value=\"1\">\n                                    <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-1\" title=\"1 out of 5 stars\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"swiper-button-prev\"></div>\n                <div class=\"swiper-button\"></div>\n\n            </div>\n\n\n\n    </section>\n\n    <section class=\"page-section__footer\">\n\n        <div class=\"container\">\n            <h3 class=\"title_3\">Please join with us & get<br> all kind of benifit</h3>\n            <div class=\"Register__form\">\n\n                <div class=\"form\">\n                    <form class=\"footer_form\">\n                        <div class=\"footer-form-dvig\">\n                            <p class=\"form__name\">Name</p>\n                            <input class=\"contacts__form-line\" placeholder=\"Name\" type=\"text\">\n                            <p class=\"form__email\">Password</p>\n                            <input class=\"contacts__form-line\" placeholder=\"Your email address\" type=\"text\">\n                            <button class=\"contacts__form-btn\" type=\"submit\">SIGN IN</button>\n                            <p class=\"Question__Ask\">Don’t have an account ? <span class=\"colortext\">Sign Up here</span></p>\n                    </form>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"circle-wrapper\">\n            <div class=\"footer__circle\">\n\n            </div>\n            <div class=\"container\">\n                <div class=\"section_footer\">\n\n\n\n                    <div class=\"footer__list\">\n                        <div class=\"footer__text\">\n                            <ul>\n                                <h4><a href=\"#\" class=\"link\">Learn More</a></h4>\n                                <li><a href=\"#\" class=\"link\">Sell Fast</a></li>\n                                <li><a href=\"#\" class=\"link\">Buy Now</a></li>\n                                <li><a href=\"#\" class=\"link\">Membership</a></li>\n                                <li><a href=\"#\" class=\"link\">Banner Ads</a></li>\n                                <li><a href=\"#\" class=\"link\">Promotions</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"footer__text\">\n                            <ul>\n                                <h4><a href=\"#\" class=\"link\">Help & Support</a></h4>\n                                <li><a href=\"#\" class=\"link\">FAQ</a></li>\n                                <li><a href=\"#\" class=\"link\">Stay Safe</a></li>\n                                <li><a href=\"#\" class=\"link\">Contact us</a></li>\n\n                            </ul>\n                        </div>\n                        <div class=\"footer__text\">\n                            <ul>\n                                <h4><a href=\"#\" class=\"link\">Social</a></h4>\n                                <li><a href=\"#\" class=\"link\">Blog</a></li>\n                                <li><a href=\"#\" class=\"link\">Facebook</a></li>\n                                <li><a href=\"#\" class=\"link\">Twitter</a></li>\n                                <li><a href=\"#\" class=\"link\">Youtube</a></li>\n\n                            </ul>\n                        </div>\n                        <div class=\"footer__text\">\n                            <ul>\n                                <h4><a href=\"#\" class=\"link\">About us</a></h4>\n                                <li><a href=\"#\" class=\"link\">About us</a></li>\n                                <li><a href=\"#\" class=\"link\">Career</a></li>\n                                <li><a href=\"#\" class=\"link\">Terms and Conditions</a></li>\n                                <li><a href=\"#\" class=\"link\">Privacy Policy</a></li>\n                                <li><a href=\"#\" class=\"link\">Sitemap</a></li>\n                            </ul>\n                        </div>\n                    </div>\n\n\n                    <div class=\"lower__footer\">\n                        <div class=\"copyright\">\n                            <p class=\"footer__copy\">Copyright @ 2019</p>\n                        </div>\n                        <div class=\"social__links\">\n                            <ul class=\"contacts__social-list\">\n                                <li class=\"contact__social-item\">\n                                    <a class=\"contact__social-link \" href=\" # \"></a>\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + " \" alt=\"a \">\n                                </li>\n                                <li class=\"contact__social-item \">\n                                    <a class=\"contact__social-link \" href=\"#\"></a>\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"a\">\n                                </li>\n                                <li class=\"contact__social-item\">\n                                    <a class=\"contact__social-link \" href=\"#\"></a>\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + " \" alt=\"a \">\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"footer__logo \">\n                            <img class=\"footer-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"a\">\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n\n\n        </div>\n    </section>\n    <script src=\"https://unpkg.com/swiper/swiper-bundle.min.js\"></script>\n\n</body>\n\n\n</html>";
// Exports
module.exports = code;

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./js/main.js","vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-ca87c7"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.js.map