var ShopLocator =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_site_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./site.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/site.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_site_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".shop-locator-list {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  border-color: #f1f1f1;\n  border-top: solid #f1f1f1;\n  border-width: .5px;\n  overflow-x: hidden;\n  overflow-y: scroll; }\n  .shop-locator-list ul, .shop-locator-list ol {\n    list-style-type: none;\n    padding: unset; }\n  .shop-locator-list input {\n    display: none; }\n    .shop-locator-list input:checked ~ .shop-locator-list-item__more-content {\n      height: auto;\n      overflow: auto;\n      visibility: visible; }\n  .shop-locator-list label {\n    width: 100%;\n    cursor: pointer; }\n\n.shop-locator-list-item:hover {\n  cursor: pointer;\n  background: #f6f6f6; }\n\n.shop-locator-list-item__address-info {\n  display: flex;\n  flex-direction: column; }\n\n.shop-locator-list-item__more-content {\n  visibility: hidden;\n  height: 0; }\n\n.shop-locator-list-bar {\n  border-bottom: 1px solid #f1f1f1; }\n\n.shop-locator-container--left {\n  min-width: 380px;\n  max-width: 380px;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-shadow: 1px 1px 1px 1px rgba(39, 39, 39, 0.28);\n  box-shadow: 1px 1px 1px 1px rgba(39, 39, 39, 0.28);\n  z-index: 1;\n  border-radius: 4px; }\n\n.shop-locator-container--right {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%; }\n\n.padding--xsmall {\n  padding: 5px; }\n\n.padding--small {\n  padding: 10px; }\n\n.padding--medium {\n  padding: 20px; }\n\n.padding--large {\n  padding: 30px; }\n\n.margin--xsmall {\n  margin: 5px; }\n\n.margin--small {\n  margin: 10px; }\n\n.margin--medium {\n  margin: 20px; }\n\n.margin--large {\n  margin: 30px; }\n\n.result_name {\n  display: block; }\n\n.autoComplete_list {\n  position: absolute;\n  background: white;\n  z-index: 1;\n  width: 100%;\n  border: 1px solid white;\n  margin: unset;\n  border-radius: 4px;\n  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.17); }\n  .autoComplete_list:focus {\n    outline: none; }\n\n.autoComplete_result {\n  background: white;\n  padding: 5px; }\n  .autoComplete_result:hover {\n    cursor: pointer;\n    color: darkgrey; }\n\n.shop-locator-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 450px;\n  height: calc(100vh - 125px);\n  max-height: 1400px;\n  width: 100%;\n  background-color: #fff; }\n", "",{"version":3,"sources":["webpack://./src/styles/components/list.scss","webpack://./src/styles/components/list-item.scss","webpack://./src/styles/components/container.scss","webpack://./src/styles/helpers/padding.scss","webpack://./src/styles/autocomplete/result.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AACI;EACI,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB,EAAA;EARrB;IAWO,qBAAqB;IACrB,cAAc,EAAA;EAZrB;IAgBO,aAAa,EAAA;IAhBpB;MAsBe,YAAY;MACZ,cAAc;MACd,mBAAmB,EAAA;EAxBlC;IA8BO,WAAW;IACX,eAAe,EAAA;;AC9BlB;EAGO,eAAe;EACf,mBAAmB,EAAA;;AAGvB;EACI,aAAa;EACb,sBAAsB,EAAA;;AAG1B;EACI,kBAAkB;EAClB,SAAS,EAAA;;AAIjB;EACI,gCAAgC,EAAA;;ACnBpC;EACI,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,4BAA4B;EAC5B,6BAA6B;EAC7B,0BAA0B;EAC1B,sBAAsB;EACtB,0DAAsD;EACtD,kDAA8C;EAC9C,UAAU;EACV,kBAAkB,EAAA;;AAGtB;EACI,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY,EAAA;;ACtBpB;EACI,YAAY,EAAA;;AAGhB;EACI,aAAa,EAAA;;AAGjB;EACI,aAAa,EAAA;;AAGjB;EACI,aAAa,EAAA;;AAKjB;EACI,WAAW,EAAA;;AAGf;EACI,YAAY,EAAA;;AAGhB;EACI,YAAY,EAAA;;AAGhB;EACI,YAAY,EAAA;;AC/BhB;EACI,cAAc,EAAA;;AAKlB;EACI,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,+CAA+C,EAAA;EARlD;IAWO,aAAa,EAAA;;AAIrB;EACI,iBAAiB;EACjB,YAAY,EAAA;EAFf;IAKO,eAAe;IACf,eAAe,EAAA;;AChB3B;EACI,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,iBAAiB;EACjB,2BAA2B;EAC3B,kBAAkB;EAClB,WAAW;EACX,sBAAsB,EAAA","sourcesContent":["﻿.shop-locator {\n    &-list {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        border-color: #f1f1f1;\n        border-top: solid #f1f1f1;\n        border-width: .5px;\n        overflow-x: hidden;\n        overflow-y: scroll;\n\n        & ul, ol {\n            list-style-type: none;\n            padding: unset;\n        }\n\n        & input {\n            display: none;\n            // Reveal the more-content section when radio button is checked\n            // References a class inside \"list-item.scss\"\n            &:checked {\n\n                & ~ .shop-locator-list-item__more-content {\n                    height: auto;\n                    overflow: auto;\n                    visibility: visible;\n                }\n            }\n        }\n\n        & label {\n            width: 100%;\n            cursor: pointer;\n        }\n    }\n}\n\n// {}","﻿.shop-locator {\n    &-list {\n        &-item {\n\n            &:hover {\n                cursor: pointer;\n                background: #f6f6f6;\n            }\n\n            &__address-info {\n                display: flex;\n                flex-direction: column;\n            }\n\n            &__more-content {\n                visibility: hidden;\n                height: 0;\n            }\n        }\n\n        &-bar {\n            border-bottom: 1px solid #f1f1f1;\n        }\n    }\n}","﻿.shop-locator {\n    &-container {\n        &--left {\n            min-width: 380px;\n            max-width: 380px;\n            height: 100%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n            flex-direction: column;\n            -webkit-box-shadow: 1px 1px 1px 1px rgba(39,39,39,.28);\n            box-shadow: 1px 1px 1px 1px rgba(39,39,39,.28);\n            z-index: 1;\n            border-radius: 4px;\n        }\n\n        &--right {\n            position: relative;\n            overflow: hidden;\n            width: 100%;\n            height: 100%;\n        }\n    }\n}\n","﻿.padding {\n    &--xsmall {\n        padding: 5px;\n    }\n\n    &--small {\n        padding: 10px;\n    }\n\n    &--medium {\n        padding: 20px;\n    }\n\n    &--large {\n        padding: 30px;\n    }\n}\n\n.margin {\n    &--xsmall {\n        margin: 5px;\n    }\n\n    &--small {\n        margin: 10px;\n    }\n\n    &--medium {\n        margin: 20px;\n    }\n\n    &--large {\n        margin: 30px;\n    }\n}\n","﻿.result {\n    &_name {\n        display: block;\n    }\n}\n\n.autoComplete {\n    &_list {\n        position: absolute;\n        background: white;\n        z-index: 1;\n        width: 100%;\n        border: 1px solid white;\n        margin: unset;\n        border-radius: 4px;\n        box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.17);\n\n        &:focus {\n            outline: none;\n        }\n    }\n\n    &_result {\n        background: white;\n        padding: 5px;\n\n        &:hover {\n            cursor: pointer;\n            color: darkgrey;\n        }\n    }\n}\n","// Component imports\n@import \"components/list.scss\";\n@import \"components/list-item.scss\";\n@import \"components/container.scss\";\n\n// Helpers\n@import \"helpers/padding.scss\";\n\n// General styles\n@import \"site.css\";\n@import \"autocomplete/result.scss\";\n\n.shop-locator-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    min-height: 450px;\n    height: calc(100vh - 125px);\n    max-height: 1400px;\n    width: 100%;\n    background-color: #fff;\n}\n\n// ~"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/site.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/site.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification\nfor details on configuring this project to bundle and minify static web assets. */\n\na.navbar-brand {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\n/* Sticky footer styles\n-------------------------------------------------- */\nhtml {\n  font-size: 14px;\n}\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.border-top {\n  border-top: 1px solid #e5e5e5;\n}\n.border-bottom {\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.box-shadow {\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\n}\n\nbutton.accept-policy {\n  font-size: 1rem;\n  line-height: inherit;\n}\n\n/* Sticky footer styles\n-------------------------------------------------- */\nhtml {\n  position: relative;\n  min-height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/site.css"],"names":[],"mappings":"AAAA;iFACiF;;AAEjF;EACE,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;oDACoD;AACpD;EACE,eAAe;AACjB;AACA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,6BAA6B;AAC/B;AACA;EACE,gCAAgC;AAClC;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;oDACoD;AACpD;EACE,kBAAkB;EAClB,gBAAgB;AAClB","sourcesContent":["/* Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification\nfor details on configuring this project to bundle and minify static web assets. */\n\na.navbar-brand {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\n/* Sticky footer styles\n-------------------------------------------------- */\nhtml {\n  font-size: 14px;\n}\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.border-top {\n  border-top: 1px solid #e5e5e5;\n}\n.border-bottom {\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.box-shadow {\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\n}\n\nbutton.accept-policy {\n  font-size: 1rem;\n  line-height: inherit;\n}\n\n/* Sticky footer styles\n-------------------------------------------------- */\nhtml {\n  position: relative;\n  min-height: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./index.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./index.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "index.html");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: MapSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_MapSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/MapSetup */ "./src/js/MapSetup.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapSetup", function() { return _js_MapSetup__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ././styles/main.scss */ "./src/styles/main.scss");
__webpack_require__(/*! file-loader?name=[name].[ext]!../index.html */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./index.html");

 //import app from "./app";
//import autocomplete from "./autocomplete";



/**
 * 
 * Start:
 * 
 * const shopLocator = new ShopLocator(config);
 * callback calls shopLocator.setup();
 * 
 * 
 * 
 */

/***/ }),

/***/ "./src/js/MapSetup.ts":
/*!****************************!*\
  !*** ./src/js/MapSetup.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_getClone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/getClone */ "./src/js/helpers/getClone.ts");
/* harmony import */ var _helpers_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/http */ "./src/js/helpers/http.ts");
// DOCS: https://developers.google.com/maps/documentation/javascript/using-typescript
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var MapSetup = /** @class */ (function () {
    function MapSetup(config) {
        this.copenhagen = {
            lat: 55.6959315,
            lng: 12.4609883,
        };
        this.markerStorage = [];
        this.wrapperForMapId = "mapDiv";
        this.activateAutocomplete = false;
        this.activateAutocomplete = config.autocomplete;
    }
    MapSetup.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, response_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.infoWindow = new google.maps.InfoWindow();
                        this.initMap(); // Setup the map
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(_helpers_http__WEBPACK_IMPORTED_MODULE_1__["default"])("https://getstoresfunction20210216205929.azurewebsites.net/api/GetStores")];
                    case 2:
                        response = _a.sent();
                        console.log(response);
                        this.handleShopDataList(response.parsedBody);
                        return [3 /*break*/, 4];
                    case 3:
                        response_1 = _a.sent();
                        console.log("There was an Error: ", response_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Initiates the map with a custom configuration
     */
    MapSetup.prototype.initMap = function () {
        var centerLatLng = this.copenhagen;
        var wrapperId = this.wrapperForMapId;
        this.map = new google.maps.Map(document.getElementById(wrapperId), {
            center: centerLatLng,
            zoom: 11,
            disableDefaultUI: true,
            zoomControl: true,
            clickableIcons: false,
            styles: [
                {
                    featureType: "poi.business",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "transit",
                    stylers: [{ visibility: "on" }],
                },
            ],
        });
    };
    MapSetup.prototype.contructLatLngObject = function (lat, lng) {
        var latLng = {
            lat: parseFloat(lat),
            lng: parseFloat(lng),
        };
        return latLng;
    };
    MapSetup.prototype.clickMarker = function (marker) {
        google.maps.event.trigger(marker, "click");
    };
    // TOOD: Need to find out if all the shop data should be on the marker itself
    MapSetup.prototype.handleShopDataList = function (shopDataList) {
        var _this = this;
        shopDataList.forEach(function (shop) {
            var latLngObject = _this.contructLatLngObject(shop.lat, shop.lng);
            _this.contructMarker(latLngObject, shop.id);
        });
    };
    MapSetup.prototype.contructMarker = function (latLng, markerId) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
        });
        function addClickHandler(marker) {
            marker.addListener("click", function () {
                var listItemRadio = document
                    .querySelector("#" + this.id)
                    .querySelector("input");
                listItemRadio.checked = true;
                var infoWindowContent = Object(_helpers_getClone__WEBPACK_IMPORTED_MODULE_0__["default"])("popup_" + markerId);
                this.infoWindow.setContent(infoWindowContent);
                this.infoWindow.setPosition(latLng);
                this.infoWindow.setOptions({
                    // Display infowindow correctly relatively to the marker position
                    pixelOffset: new google.maps.Size(0, -30),
                });
                this.map.setZoom(15);
                this.infoWindow.open(this.map);
                this.map.setCenter(latLng);
            });
        }
        addClickHandler(marker);
        this.saveMarker(marker);
        return marker;
    };
    MapSetup.prototype.saveMarker = function (marker) {
        this.markerStorage.push(marker);
    };
    return MapSetup;
}());
/* harmony default export */ __webpack_exports__["default"] = (MapSetup);


/***/ }),

/***/ "./src/js/helpers/getClone.ts":
/*!************************************!*\
  !*** ./src/js/helpers/getClone.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getClone; });
function getClone(id) {
    var node = document.querySelector("#" + id);
    if (!node) {
        throw new Error("Clone base element could not be found");
    }
    // Changed this to be true instead of [true]
    return node.cloneNode(true);
}


/***/ }),

/***/ "./src/js/helpers/http.ts":
/*!********************************!*\
  !*** ./src/js/helpers/http.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return http; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function http(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, _a, _b, e_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _c.sent();
                    _a = response;
                    return [4 /*yield*/, response.json()];
                case 2:
                    _a.parsedBody = _c.sent();
                    _c.label = 3;
                case 3:
                    _c.trys.push([3, 5, , 6]);
                    _b = response;
                    return [4 /*yield*/, response.json()];
                case 4:
                    _b.parsedBody = _c.sent();
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _c.sent();
                    return [3 /*break*/, 6];
                case 6:
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return [2 /*return*/, response];
            }
        });
    });
}


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

            

var options = {"injectType":"singletonStyleTag"};

options.insert = "head";
options.singleton = true;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map