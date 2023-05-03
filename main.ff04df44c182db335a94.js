/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/logo-welbex.9bc5b55f723e4ca22139.png";

/***/ }),

/***/ 813:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/purple-ball.d111ed6523af9760b734.png";

/***/ }),

/***/ 331:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/purple-light.1ebcdf47f6d3813b1534.png";

/***/ }),

/***/ 847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/red-ball-mini.b592b17c5e7ec39f65b9.png";

/***/ }),

/***/ 724:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/red-ball.ae2c34da148d4923c9da.png";

/***/ }),

/***/ 243:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/red-light.761cb5c8593ac37ff22f.png";

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
const mainPLight = document.querySelector('.purple-light-main');
const headerPurpleBall = document.querySelector('.purple-ball');
const mainLight = document.querySelector('.red-light');
const headerRedBall = document.querySelector('.red-ball');
const headerRedBallMini = document.querySelector('.red-ball-mini');
const logotype = __webpack_require__(462);
const redLight = __webpack_require__(243);
const purpleLight = __webpack_require__(331);
const purpleBall = __webpack_require__(813);
const redBall = __webpack_require__(724);
const redBallMini = __webpack_require__(847);
logo.src = logotype;
headerLight.src = purpleLight;
mainPLight.src = purpleLight;
headerPurpleBall.src = purpleBall;
headerRedBall.src = redBall;
headerRedBallMini.src = redBallMini;
mainLight.src = redLight;
})();

/******/ })()
;