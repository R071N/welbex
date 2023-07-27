/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 180:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/logo-welbex.698c456ee3d074f4689f.webp";

/***/ }),

/***/ 236:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/purple-ball.6807a2d427b6c55a6e64.webp";

/***/ }),

/***/ 927:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/purple-light.3e4738380ef3f120ef2d.webp";

/***/ }),

/***/ 135:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/red-ball-mini.356f7333531d6c847a04.webp";

/***/ }),

/***/ 724:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/red-ball.ae2c34da148d4923c9da.png";

/***/ }),

/***/ 948:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/red-light.06e86ebb482723842110.webp";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/welbex/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {




const logo = document.querySelector('.logo');
const headerLight = document.querySelector('.purple-light');
const headerPurpleBall = document.querySelector('.purple-ball');
const mainLight = document.querySelector('.red-light');
const headerRedBall = document.querySelector('.red-ball');
const headerRedBallMini = document.querySelector('.red-ball-mini');
const logotype = __webpack_require__(180);
const redLight = __webpack_require__(948);
const purpleLight = __webpack_require__(927);
const purpleBall = __webpack_require__(236);
const redBall = __webpack_require__(724);
const redBallMini = __webpack_require__(135);
logo.src = logotype;
headerLight.src = purpleLight;
headerPurpleBall.src = purpleBall;
headerRedBall.src = redBall;
headerRedBallMini.src = redBallMini;
mainLight.src = redLight;
})();

/******/ })()
;