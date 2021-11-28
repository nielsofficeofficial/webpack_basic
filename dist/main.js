/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/main.js":
/*!**********************!*\
  !*** ./dist/main.js ***!
  \**********************/
/***/ (() => {

eval("/*! For license information please see main.js.LICENSE.txt */\n(()=>{var __webpack_exports__={};(()=>{\"use strict\";var e=document.querySelector(\"#secret-button\"),t=document.querySelector(\"#secret-paragraph\"),_=!1;function r(){t.style.display=_?\"block\":\"none\"}e.addEventListener(\"click\",(function(){_=!_,r(),e.textContent=_?\"Hide the Secret\":\"Show the Secret\"})),r()})(),(()=>{(()=>{var __webpack_modules__={\"./dist/main.js\":()=>{eval('/*\\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\\n * This devtool is neither made for production nor for readable output files.\\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\\n * or disable the default devtool with \"devtool: false\".\\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\\n */\\n/******/ (() => { // webpackBootstrap\\n/******/ \\t\"use strict\";\\n/******/ \\tvar __webpack_modules__ = ({\\n\\n/***/ \"./src/js/app.js\":\\n/*!***********************!*\\\\\\n  !*** ./src/js/app.js ***!\\n  \\\\***********************/\\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\\n\\neval(\"__webpack_require__.r(__webpack_exports__);\\\\n/* harmony import */ var _dom_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader */ \\\\\"./src/js/dom-loader.js\\\\\");\\\\n\\\\n\\\\nvar showSecret = false;\\\\n\\\\n_dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretButton.addEventListener(\\'click\\', toggleSecretState);\\\\nupdateSecretParagraph();\\\\n\\\\nfunction toggleSecretState() {\\\\n    showSecret = !showSecret;\\\\n    updateSecretParagraph();\\\\n    updateSecretButton()\\\\n}\\\\n\\\\nfunction updateSecretButton() {\\\\n    if (showSecret) {\\\\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretButton.textContent = \\'Hide the Secret\\';\\\\n    } else {\\\\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretButton.textContent = \\'Show the Secret\\';\\\\n    }\\\\n}\\\\n\\\\nfunction updateSecretParagraph() {\\\\n    if (showSecret) {\\\\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretParagraph.style.display = \\'block\\';\\\\n    } else {\\\\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretParagraph.style.display = \\'none\\';\\\\n    }\\\\n}\\\\n\\\\n//# sourceURL=webpack://wpack/./src/js/app.js?\");\\n\\n/***/ }),\\n\\n/***/ \"./src/js/dom-loader.js\":\\n/*!******************************!*\\\\\\n  !*** ./src/js/dom-loader.js ***!\\n  \\\\******************************/\\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\\n\\neval(\"__webpack_require__.r(__webpack_exports__);\\\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\\\n/* harmony export */   \\\\\"secretButton\\\\\": () => (/* binding */ secretButton),\\\\n/* harmony export */   \\\\\"secretParagraph\\\\\": () => (/* binding */ secretParagraph)\\\\n/* harmony export */ });\\\\nvar secretButton = document.querySelector(\\'#secret-button\\');\\\\nvar secretParagraph = document.querySelector(\\'#secret-paragraph\\');\\\\n\\\\n\\\\n//# sourceURL=webpack://wpack/./src/js/dom-loader.js?\");\\n\\n/***/ })\\n\\n/******/ \\t});\\n/************************************************************************/\\n/******/ \\t// The module cache\\n/******/ \\tvar __webpack_module_cache__ = {};\\n/******/ \\t\\n/******/ \\t// The require function\\n/******/ \\tfunction __nested_webpack_require_2878__(moduleId) {\\n/******/ \\t\\t// Check if module is in cache\\n/******/ \\t\\tvar cachedModule = __webpack_module_cache__[moduleId];\\n/******/ \\t\\tif (cachedModule !== undefined) {\\n/******/ \\t\\t\\treturn cachedModule.exports;\\n/******/ \\t\\t}\\n/******/ \\t\\t// Create a new module (and put it into the cache)\\n/******/ \\t\\tvar module = __webpack_module_cache__[moduleId] = {\\n/******/ \\t\\t\\t// no module.id needed\\n/******/ \\t\\t\\t// no module.loaded needed\\n/******/ \\t\\t\\texports: {}\\n/******/ \\t\\t};\\n/******/ \\t\\n/******/ \\t\\t// Execute the module function\\n/******/ \\t\\t__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_2878__);\\n/******/ \\t\\n/******/ \\t\\t// Return the exports of the module\\n/******/ \\t\\treturn module.exports;\\n/******/ \\t}\\n/******/ \\t\\n/************************************************************************/\\n/******/ \\t/* webpack/runtime/define property getters */\\n/******/ \\t(() => {\\n/******/ \\t\\t// define getter functions for harmony exports\\n/******/ \\t\\t__nested_webpack_require_2878__.d = (exports, definition) => {\\n/******/ \\t\\t\\tfor(var key in definition) {\\n/******/ \\t\\t\\t\\tif(__nested_webpack_require_2878__.o(definition, key) && !__nested_webpack_require_2878__.o(exports, key)) {\\n/******/ \\t\\t\\t\\t\\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\\n/******/ \\t\\t\\t\\t}\\n/******/ \\t\\t\\t}\\n/******/ \\t\\t};\\n/******/ \\t})();\\n/******/ \\t\\n/******/ \\t/* webpack/runtime/hasOwnProperty shorthand */\\n/******/ \\t(() => {\\n/******/ \\t\\t__nested_webpack_require_2878__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\\n/******/ \\t})();\\n/******/ \\t\\n/******/ \\t/* webpack/runtime/make namespace object */\\n/******/ \\t(() => {\\n/******/ \\t\\t// define __esModule on exports\\n/******/ \\t\\t__nested_webpack_require_2878__.r = (exports) => {\\n/******/ \\t\\t\\tif(typeof Symbol !== \\'undefined\\' && Symbol.toStringTag) {\\n/******/ \\t\\t\\t\\tObject.defineProperty(exports, Symbol.toStringTag, { value: \\'Module\\' });\\n/******/ \\t\\t\\t}\\n/******/ \\t\\t\\tObject.defineProperty(exports, \\'__esModule\\', { value: true });\\n/******/ \\t\\t};\\n/******/ \\t})();\\n/******/ \\t\\n/************************************************************************/\\n/******/ \\t\\n/******/ \\t// startup\\n/******/ \\t// Load entry module and return exports\\n/******/ \\t// This entry module can\\'t be inlined because the eval devtool is used.\\n/******/ \\tvar __webpack_exports__ = __nested_webpack_require_2878__(\"./src/js/app.js\");\\n/******/ \\t\\n/******/ })()\\n;\\n\\n//# sourceURL=webpack://wpack/./dist/main.js?')},\"./src/js/app.js\":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{\"use strict\";eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _dom_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader */ \\\"./src/js/dom-loader.js\\\");\\n\\n\\nvar showSecret = false;\\n\\n_dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretButton.addEventListener('click', toggleSecretState);\\nupdateSecretParagraph();\\n\\nfunction toggleSecretState() {\\n    showSecret = !showSecret;\\n    updateSecretParagraph();\\n    updateSecretButton()\\n}\\n\\nfunction updateSecretButton() {\\n    if (showSecret) {\\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretButton.textContent = 'Hide the Secret';\\n    } else {\\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretButton.textContent = 'Show the Secret';\\n    }\\n}\\n\\nfunction updateSecretParagraph() {\\n    if (showSecret) {\\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretParagraph.style.display = 'block';\\n    } else {\\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretParagraph.style.display = 'none';\\n    }\\n}\\n\\n//# sourceURL=webpack://wpack/./src/js/app.js?\")},\"./src/js/dom-loader.js\":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{\"use strict\";eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"secretButton\\\": () => (/* binding */ secretButton),\\n/* harmony export */   \\\"secretParagraph\\\": () => (/* binding */ secretParagraph)\\n/* harmony export */ });\\nvar secretButton = document.querySelector('#secret-button');\\nvar secretParagraph = document.querySelector('#secret-paragraph');\\n\\n\\n//# sourceURL=webpack://wpack/./src/js/dom-loader.js?\")}},__webpack_module_cache__={};function __nested_webpack_require_8643__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__nested_webpack_require_8643__),_.exports}__nested_webpack_require_8643__.d=(e,t)=>{for(var _ in t)__nested_webpack_require_8643__.o(t,_)&&!__nested_webpack_require_8643__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:t[_]})},__nested_webpack_require_8643__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__nested_webpack_require_8643__.r=e=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},__nested_webpack_require_8643__(\"./src/js/app.js\");var __webpack_exports__=__nested_webpack_require_8643__(\"./dist/main.js\")})()})()})();\n\n//# sourceURL=webpack://wpack/./dist/main.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader */ \"./src/js/dom-loader.js\");\n\n\nvar showSecret = false;\n\n_dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretButton.addEventListener('click', toggleSecretState);\nupdateSecretParagraph();\n\nfunction toggleSecretState() {\n    showSecret = !showSecret;\n    updateSecretParagraph();\n    updateSecretButton()\n}\n\nfunction updateSecretButton() {\n    if (showSecret) {\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretButton.textContent = 'Hide the Secret';\n    } else {\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretButton.textContent = 'Show the Secret';\n    }\n}\n\nfunction updateSecretParagraph() {\n    if (showSecret) {\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretParagraph.style.display = 'block';\n    } else {\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.secretParagraph.style.display = 'none';\n    }\n}\n\n//# sourceURL=webpack://wpack/./src/js/app.js?");

/***/ }),

/***/ "./src/js/dom-loader.js":
/*!******************************!*\
  !*** ./src/js/dom-loader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"secretButton\": () => (/* binding */ secretButton),\n/* harmony export */   \"secretParagraph\": () => (/* binding */ secretParagraph)\n/* harmony export */ });\nvar secretButton = document.querySelector('#secret-button');\nvar secretParagraph = document.querySelector('#secret-paragraph');\n\n\n//# sourceURL=webpack://wpack/./src/js/dom-loader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/main.js");
/******/ 	
/******/ })()
;