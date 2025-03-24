(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["r34DownloadUtils"] = factory();
	else
		root["r34DownloadUtils"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/storage/constants.js":
/*!**********************************!*\
  !*** ./src/storage/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOWNLOADED_KEY: () => (/* binding */ DOWNLOADED_KEY),
/* harmony export */   SELECTED_KEY: () => (/* binding */ SELECTED_KEY)
/* harmony export */ });
const DOWNLOADED_KEY = 'anaaya-downloaded';
const SELECTED_KEY = 'anaaya-selected';


/***/ }),

/***/ "./src/storage/index.js":
/*!******************************!*\
  !*** ./src/storage/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/storage/constants.js");

// 持久化存储已经下载的id
const LSDownloadedManager = {
  cache: undefined,
  initCache() {
    const dListStr = LS.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.DOWNLOADED_KEY);
    if (dListStr === null) {
      this.cache = [];
      return;
    }
    this.cache = JSON.parse(dListStr);
  },
  /**
   * 添加id至已下载列表并保存
   * @param {number} id
   */
  add(id) {
    const dListStr = LS.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.DOWNLOADED_KEY);
    const dList = dListStr === null ? [] : JSON.parse(dListStr);
    dList.push(id);
    LS.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.DOWNLOADED_KEY, JSON.stringify(dList));
    this.cache = dList;
  },
  /**
   * 查询指定id是否在列表中
   * @param {number} id
   * @returns {boolean}
   */
  has(id) {
    if (!this.cache) {
      this.initCache();
    }
    const numberSet = new Set(this.cache);
    return numberSet.has(id);
  },
};

/**
 * 待下载视频详情
 * @typedef {Object} SelectedVideoInfo
 * @property {number} videoId 视频ID，不同清晰度ID相同
 * @property {string} videoTitle 视频标题
 * @property {string} videoUrl 视频下载链接
 * @property {string} videoRes 视频清晰度
 */

// 持久化存储已经选中、待下载的信息
const LSSelectedManager = {
  cache: undefined,
  initCache() {
    const dListStr = LS.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.SELECTED_KEY);
    if (dListStr === null) {
      this.cache = [];
      return;
    }
    this.cache = JSON.parse(dListStr);
  },
  /**
   * 添加视频信息至待下载列表
   * @param {SelectedVideoInfo} info 视频信息
   */
  add(info) {
    const dListStr = LS.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.SELECTED_KEY);
    const dList = dListStr === null ? [] : JSON.parse(dListStr);
    dList.push(info);
    LS.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.SELECTED_KEY, JSON.stringify(dList));
    this.cache = dList;
  },
  /**
   * 获取待下载列表
   * @returns {SelectedVideoInfo[]} 待下载列表
   */
  getList() {
    if (!this.cache) {
      this.initCache();
    }
    return this.cache;
  },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ LSDownloadedManager, LSSelectedManager });


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage/index.js");




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=r34-download-utils.js.map