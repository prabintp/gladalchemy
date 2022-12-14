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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./assets/psLogo.png */ \"./src/assets/psLogo.png\"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ./assets/icon_location.svg */ \"./src/assets/icon_location.svg\"));\nvar ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ./assets/icon-calendar.svg */ \"./src/assets/icon-calendar.svg\"));\nvar ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ./assets/banner1.jpg */ \"./src/assets/banner1.jpg\"));\nvar ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ./assets/welcometop.png */ \"./src/assets/welcometop.png\"));\nvar ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ./assets/welcomebottom.png */ \"./src/assets/welcomebottom.png\"));\nvar ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(/*! ./assets/welcomebkg.jpg */ \"./src/assets/welcomebkg.jpg\"));\nvar ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(/*! ./assets/bottombg.png */ \"./src/assets/bottombg.png\"));\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  padding: 0; }\\n\\n.holder {\\n  position: relative; }\\n\\n.frame {\\n  width: 100%;\\n  height: 100%; }\\n\\n#clockdiv {\\n  font-family: Pompiere;\\n  font-weight: 400;\\n  color: #fff;\\n  display: inline-block;\\n  font-weight: 100;\\n  text-align: center;\\n  font-size: 30px;\\n  position: absolute;\\n  bottom: 0;\\n  right: 0; }\\n\\n#clockdiv > div {\\n  padding: 10px;\\n  display: inline-block; }\\n\\n#clockdiv div > span {\\n  padding: 10px;\\n  display: inline-block;\\n  min-width: 50px; }\\n\\n.smalltext {\\n  padding-top: 5px;\\n  font-size: 16px; }\\n\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  cursor: pointer; }\\n\\n.p-logo {\\n  background: url(\" + ___CSS_LOADER_URL___0___ + \") no-repeat;\\n  width: 64px;\\n  height: 64px;\\n  position: fixed;\\n  z-index: 1;\\n  left: 12px;\\n  top: 12px;\\n  background-size: 64px 64px; }\\n\\n.tc {\\n  position: absolute;\\n  right: 0;\\n  bottom: 0;\\n  padding: 5px;\\n  background: #fff;\\n  color: #27270a; }\\n\\n.addeventatc1 {\\n  display: inline-block;\\n  position: relative;\\n  z-index: 99998;\\n  font-family: \\\"Open Sans\\\",Roboto,\\\"Helvetica Neue\\\",Helvetica,Optima,Segoe,\\\"Segoe UI\\\",Candara,Calibri,Arial,sans-serif;\\n  color: #000 !important;\\n  font-weight: 600;\\n  line-height: 100%;\\n  background: #fff;\\n  font-size: 15px;\\n  text-decoration: none;\\n  border: 1px solid transparent;\\n  padding: 13px 12px 12px 43px;\\n  -webkit-border-radius: 3px;\\n  border-radius: 3px;\\n  cursor: pointer;\\n  -webkit-font-smoothing: antialiased !important;\\n  outline-color: rgba(0, 78, 255, 0.5);\\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\\n  -webkit-user-select: none;\\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\\n  box-shadow: 0 0 0 0.5px rgba(50, 50, 93, 0.17), 0 2px 5px 0 rgba(50, 50, 93, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 0 0 0 transparent !important;\\n  background-position: -9999px -9999px;\\n  background-repeat: no-repeat; }\\n  .addeventatc1 .addeventatc_icon {\\n    width: 18px;\\n    height: 18px;\\n    position: absolute;\\n    z-index: 1;\\n    left: 12px;\\n    top: 10px;\\n    background-size: 18px 18px; }\\n  .addeventatc1 .loc_icon {\\n    background: url(\" + ___CSS_LOADER_URL___1___ + \") no-repeat; }\\n  .addeventatc1 .cal_icon {\\n    background: url(\" + ___CSS_LOADER_URL___2___ + \") no-repeat; }\\n\\n.heading {\\n  color: red; }\\n\\n.p-bgimage {\\n  background: url(\" + ___CSS_LOADER_URL___3___ + \");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat;\\n  background-position: 42% center; }\\n\\n.p-bgimage02 {\\n  width: 100%; }\\n\\n.content-card {\\n  position: relative;\\n  -ms-flex-align: center;\\n  align-items: center;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-direction: column;\\n  flex-direction: column;\\n  -ms-flex-pack: center;\\n  justify-content: center;\\n  overflow-y: hidden;\\n  word-wrap: break-word; }\\n  .content-card h2 {\\n    font-family: Pompiere;\\n    font-weight: 400;\\n    text-transform: !important;\\n    line-height: 1.1 !important; }\\n\\n.content-box {\\n  margin: 26.5px 0;\\n  padding: 60px;\\n  text-align: center; }\\n  .content-box .title {\\n    font-size: 35px !important; }\\n  .content-box.gallery img {\\n    margin-bottom: 25px; }\\n\\n.p-wrapper {\\n  display: block;\\n  position: relative;\\n  height: 100%;\\n  font-family: proxima-nova,Helvetica Neue,sans-serif;\\n  background: #fff;\\n  min-height: 480px; }\\n  .p-wrapper .p-leftwrapper {\\n    overflow: hidden;\\n    left: 0;\\n    top: 0;\\n    bottom: 0;\\n    position: fixed;\\n    width: 61%; }\\n    .p-wrapper .p-leftwrapper .p-intro {\\n      color: #fff;\\n      position: absolute;\\n      bottom: 0;\\n      right: 0;\\n      top: 0;\\n      left: 0;\\n      margin: 10% 20% 11% 10%;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -ms-flex-direction: column;\\n      flex-direction: column;\\n      -ms-flex-line-pack: center;\\n      align-content: center;\\n      -ms-flex-pack: end;\\n      justify-content: flex-end; }\\n      .p-wrapper .p-leftwrapper .p-intro h2 {\\n        font-family: Pompiere;\\n        font-weight: 400;\\n        text-transform: !important;\\n        line-height: 1.1 !important;\\n        margin: 0;\\n        font-size: 75px; }\\n      .p-wrapper .p-leftwrapper .p-intro h3 {\\n        line-height: 22px;\\n        line-height: 3.275rem;\\n        font-family: Pompiere;\\n        font-weight: 400;\\n        font-size: 30px; }\\n  .p-wrapper .bg-dec {\\n    background-image: url(\" + ___CSS_LOADER_URL___4___ + \"), url(\" + ___CSS_LOADER_URL___5___ + \"), url(\" + ___CSS_LOADER_URL___6___ + \");\\n    background-size: 117%, 117%, cover;\\n    background-position: center top, center bottom, center;\\n    background-repeat: no-repeat; }\\n  .p-wrapper .p-rightwrapper {\\n    position: static;\\n    background: #fff;\\n    color: #333;\\n    width: 39%;\\n    margin-left: auto; }\\n    .p-wrapper .p-rightwrapper .p-bottom {\\n      background-image: url(\" + ___CSS_LOADER_URL___7___ + \");\\n      background-size: 100%;\\n      background-position: center bottom;\\n      background-repeat: no-repeat;\\n      padding: 20px 5% 5%;\\n      padding-bottom: 160px; }\\n      .p-wrapper .p-rightwrapper .p-bottom h1 {\\n        font-family: Pompiere;\\n        font-weight: 800;\\n        font-size: 32px; }\\n    .p-wrapper .p-rightwrapper .p-welcome {\\n      justify-content: center;\\n      min-height: 100vh;\\n      padding: 20px 5% 5%; }\\n      .p-wrapper .p-rightwrapper .p-welcome .welcomeDetails {\\n        margin: 30px 0 15px;\\n        min-width: 370px;\\n        max-width: 100%;\\n        color: #e8e8e8; }\\n        .p-wrapper .p-rightwrapper .p-welcome .welcomeDetails a {\\n          display: block; }\\n        .p-wrapper .p-rightwrapper .p-welcome .welcomeDetails h2 {\\n          max-width: 80%;\\n          margin-left: auto;\\n          margin-right: auto;\\n          text-align: center;\\n          font-weight: 400;\\n          text-transform: !important;\\n          line-height: 1.1 !important;\\n          font-size: 40px; }\\n\\n.p-imgwrap {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0; }\\n\\n.schedule-card .schedule-day {\\n  align-self: flex-start; }\\n\\n.schedule-card .schedule-day-title {\\n  position: relative;\\n  margin-bottom: 40px; }\\n\\n.schedule-card .label {\\n  position: absolute;\\n  padding: 0 15px 0 0;\\n  top: -8px;\\n  left: 0;\\n  display: block;\\n  background-color: #fff;\\n  font-size: 13px;\\n  font-weight: 600;\\n  text-transform: uppercase; }\\n\\n.schedule-card .line {\\n  width: 100%;\\n  height: 1px;\\n  background-color: #e8e8e8;\\n  display: block; }\\n\\n.schedule-card .slot {\\n  position: relative;\\n  -ms-flex-direction: column;\\n  flex-direction: column; }\\n  .schedule-card .slot .information {\\n    padding: 0 20px 50px 10px;\\n    display: -ms-flexbox;\\n    display: flex; }\\n    .schedule-card .slot .information .event {\\n      display: flex;\\n      flex: 5;\\n      -ms-flex-direction: column;\\n      flex-direction: column; }\\n      .schedule-card .slot .information .event .name {\\n        font-size: 17px; }\\n      .schedule-card .slot .information .event .details p {\\n        margin: 1em 0 0;\\n        opacity: .7;\\n        width: 100%;\\n        word-break: break-word; }\\n    .schedule-card .slot .information .time-container {\\n      display: -ms-flexbox;\\n      display: flex;\\n      -ms-flex-direction: row;\\n      flex-direction: row;\\n      -ms-flex-pack: end;\\n      justify-content: flex-end;\\n      -ms-flex-align: start;\\n      align-items: flex-start;\\n      text-align: left;\\n      padding-right: 30px;\\n      padding-top: 4px;\\n      flex: 3; }\\n      .schedule-card .slot .information .time-container .time {\\n        width: auto;\\n        display: -ms-flexbox;\\n        display: flex;\\n        -ms-flex-direction: row;\\n        flex-direction: row; }\\n        .schedule-card .slot .information .time-container .time .start-time, .schedule-card .slot .information .time-container .time .end-time {\\n          display: -ms-flexbox;\\n          display: flex;\\n          text-align: center;\\n          font-size: 13px;\\n          font-weight: 600; }\\n        .schedule-card .slot .information .time-container .time .dash {\\n          display: -ms-flexbox;\\n          display: flex;\\n          padding: 0 5px;\\n          -ms-flex: 1;\\n          flex: 1; }\\n\\n@media only screen and (max-width: 768px) {\\n  .p-wrapper .p-leftwrapper, .p-wrapper .p-rightwrapper {\\n    width: 100%; }\\n  .p-wrapper .p-leftwrapper {\\n    height: calc(100vh - 65px);\\n    position: relative;\\n    -ms-flex-align: center;\\n    align-items: center;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -ms-flex-direction: column;\\n    flex-direction: column;\\n    -ms-flex-pack: center;\\n    justify-content: center;\\n    overflow-y: hidden;\\n    word-wrap: break-word; }\\n    .p-wrapper .p-leftwrapper .p-intro {\\n      margin: 100px 15px; }\\n      .p-wrapper .p-leftwrapper .p-intro h3 {\\n        margin: 10px 0px; }\\n      .p-wrapper .p-leftwrapper .p-intro h2 {\\n        font-size: 60px; }\\n  .p-wrapper .content-box {\\n    margin: 10px 0;\\n    padding: 10px; } }\\n\\n/*!\\n * Generated using the Bootstrap Customizer (https://getbootstrap.com/docs/3.4/customize/)\\n */\\n/*!\\n * Bootstrap v3.4.1 (https://getbootstrap.com/)\\n * Copyright 2011-2019 Twitter, Inc.\\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\\n */\\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\\nhtml {\\n  font-family: sans-serif;\\n  -ms-text-size-adjust: 100%;\\n  -webkit-text-size-adjust: 100%; }\\n\\nbody {\\n  margin: 0; }\\n\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmain,\\nmenu,\\nnav,\\nsection,\\nsummary {\\n  display: block; }\\n\\naudio,\\ncanvas,\\nprogress,\\nvideo {\\n  display: inline-block;\\n  vertical-align: baseline; }\\n\\naudio:not([controls]) {\\n  display: none;\\n  height: 0; }\\n\\n[hidden],\\ntemplate {\\n  display: none; }\\n\\na {\\n  background-color: transparent; }\\n\\na:active,\\na:hover {\\n  outline: 0; }\\n\\nabbr[title] {\\n  border-bottom: none;\\n  text-decoration: underline;\\n  text-decoration: underline dotted; }\\n\\nb,\\nstrong {\\n  font-weight: bold; }\\n\\ndfn {\\n  font-style: italic; }\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0; }\\n\\nmark {\\n  background: #ff0;\\n  color: #000; }\\n\\nsmall {\\n  font-size: 80%; }\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline; }\\n\\nsup {\\n  top: -0.5em; }\\n\\nsub {\\n  bottom: -0.25em; }\\n\\nimg {\\n  border: 0; }\\n\\nsvg:not(:root) {\\n  overflow: hidden; }\\n\\nfigure {\\n  margin: 1em 40px; }\\n\\nhr {\\n  -webkit-box-sizing: content-box;\\n  -moz-box-sizing: content-box;\\n  box-sizing: content-box;\\n  height: 0; }\\n\\npre {\\n  overflow: auto; }\\n\\ncode,\\nkbd,\\npre,\\nsamp {\\n  font-family: monospace, monospace;\\n  font-size: 1em; }\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  color: inherit;\\n  font: inherit;\\n  margin: 0; }\\n\\nbutton {\\n  overflow: visible; }\\n\\nbutton,\\nselect {\\n  text-transform: none; }\\n\\nbutton,\\nhtml input[type=\\\"button\\\"],\\ninput[type=\\\"reset\\\"],\\ninput[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n  cursor: pointer; }\\n\\nbutton[disabled],\\nhtml input[disabled] {\\n  cursor: default; }\\n\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n  border: 0;\\n  padding: 0; }\\n\\ninput {\\n  line-height: normal; }\\n\\ninput[type=\\\"checkbox\\\"],\\ninput[type=\\\"radio\\\"] {\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n  padding: 0; }\\n\\ninput[type=\\\"number\\\"]::-webkit-inner-spin-button,\\ninput[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto; }\\n\\ninput[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield;\\n  -webkit-box-sizing: content-box;\\n  -moz-box-sizing: content-box;\\n  box-sizing: content-box; }\\n\\ninput[type=\\\"search\\\"]::-webkit-search-cancel-button,\\ninput[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none; }\\n\\nfieldset {\\n  border: 1px solid #c0c0c0;\\n  margin: 0 2px;\\n  padding: 0.35em 0.625em 0.75em; }\\n\\nlegend {\\n  border: 0;\\n  padding: 0; }\\n\\ntextarea {\\n  overflow: auto; }\\n\\noptgroup {\\n  font-weight: bold; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\ntd,\\nth {\\n  padding: 0; }\\n\\n* {\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box; }\\n\\n*:before,\\n*:after {\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box; }\\n\\nhtml {\\n  font-size: 10px;\\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\\n\\nbody {\\n  font-family: \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  font-size: 14px;\\n  line-height: 1.42857143;\\n  color: #333333;\\n  background-color: #ffffff; }\\n\\ninput,\\nbutton,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  font-size: inherit;\\n  line-height: inherit; }\\n\\na {\\n  color: #337ab7;\\n  text-decoration: none; }\\n\\na:hover,\\na:focus {\\n  color: #23527c;\\n  text-decoration: underline; }\\n\\na:focus {\\n  outline: 5px auto -webkit-focus-ring-color;\\n  outline-offset: -2px; }\\n\\nfigure {\\n  margin: 0; }\\n\\nimg {\\n  vertical-align: middle; }\\n\\n.img-responsive,\\n.carousel-inner > .item > img,\\n.carousel-inner > .item > a > img {\\n  display: block;\\n  max-width: 100%;\\n  height: auto; }\\n\\n.img-rounded {\\n  border-radius: 6px; }\\n\\n.img-thumbnail {\\n  padding: 4px;\\n  line-height: 1.42857143;\\n  background-color: #ffffff;\\n  border: 1px solid #dddddd;\\n  border-radius: 4px;\\n  -webkit-transition: all 0.2s ease-in-out;\\n  -o-transition: all 0.2s ease-in-out;\\n  transition: all 0.2s ease-in-out;\\n  display: inline-block;\\n  max-width: 100%;\\n  height: auto; }\\n\\n.img-circle {\\n  border-radius: 50%; }\\n\\nhr {\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n  border: 0;\\n  border-top: 1px solid #eeeeee; }\\n\\n.sr-only {\\n  position: absolute;\\n  width: 1px;\\n  height: 1px;\\n  padding: 0;\\n  margin: -1px;\\n  overflow: hidden;\\n  clip: rect(0, 0, 0, 0);\\n  border: 0; }\\n\\n.sr-only-focusable:active,\\n.sr-only-focusable:focus {\\n  position: static;\\n  width: auto;\\n  height: auto;\\n  margin: 0;\\n  overflow: visible;\\n  clip: auto; }\\n\\n[role=\\\"button\\\"] {\\n  cursor: pointer; }\\n\\n.embed-responsive {\\n  position: relative;\\n  display: block;\\n  height: 0;\\n  padding: 0;\\n  overflow: hidden; }\\n\\n.embed-responsive .embed-responsive-item,\\n.embed-responsive iframe,\\n.embed-responsive embed,\\n.embed-responsive object,\\n.embed-responsive video {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  border: 0; }\\n\\n.embed-responsive-16by9 {\\n  padding-bottom: 56.25%; }\\n\\n.embed-responsive-4by3 {\\n  padding-bottom: 75%; }\\n\\n.close {\\n  float: right;\\n  font-size: 21px;\\n  font-weight: bold;\\n  line-height: 1;\\n  color: #fff;\\n  text-shadow: 0 1px 0 #ffffff;\\n  filter: alpha(opacity=20);\\n  opacity: 0.2; }\\n\\n.close:hover,\\n.close:focus {\\n  color: #f3e9e9;\\n  text-decoration: none;\\n  cursor: pointer;\\n  filter: alpha(opacity=50);\\n  opacity: 0.5; }\\n\\nbutton.close {\\n  padding: 0;\\n  cursor: pointer;\\n  background: transparent;\\n  border: 0;\\n  -webkit-appearance: none;\\n  appearance: none; }\\n\\n.modal-open {\\n  overflow: hidden; }\\n\\n.modal {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 1050;\\n  display: none;\\n  overflow: hidden;\\n  -webkit-overflow-scrolling: touch;\\n  outline: 0; }\\n\\n.modal.fade .modal-dialog {\\n  -webkit-transform: translate(0, -25%);\\n  -ms-transform: translate(0, -25%);\\n  -o-transform: translate(0, -25%);\\n  transform: translate(0, -25%);\\n  -webkit-transition: -webkit-transform 0.3s ease-out;\\n  -o-transition: -o-transform 0.3s ease-out;\\n  transition: transform 0.3s ease-out; }\\n\\n.modal-backdrop.show {\\n  filter: alpha(opacity=50);\\n  opacity: 0.6 !important; }\\n\\n.modal.in .modal-dialog {\\n  -webkit-transform: translate(0, 0);\\n  -ms-transform: translate(0, 0);\\n  -o-transform: translate(0, 0);\\n  transform: translate(0, 0); }\\n\\n.modal-open .modal {\\n  overflow-x: hidden;\\n  overflow-y: auto; }\\n\\n.modal-dialog {\\n  position: relative;\\n  width: auto;\\n  margin-top: 120px !important;\\n  padding: 5px; }\\n\\n.modal-content {\\n  position: relative;\\n  background-color: #ffffff;\\n  -webkit-background-clip: padding-box;\\n  background-clip: padding-box;\\n  border: 1px solid #999999;\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  border-radius: 6px;\\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\\n  outline: 0; }\\n\\n.modal-backdrop {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 1040;\\n  background-color: #000000; }\\n\\n.modal-backdrop.fade {\\n  filter: alpha(opacity=0);\\n  opacity: 0; }\\n\\n.modal-backdrop.in {\\n  filter: alpha(opacity=50);\\n  opacity: 0.5; }\\n\\n.modal-header {\\n  padding: 10px;\\n  border-bottom: 1px solid #e5e5e5;\\n  background: #000; }\\n\\n.modal-header .close {\\n  margin-top: -2px; }\\n\\n.modal-title {\\n  margin: 0;\\n  line-height: 1.42857143; }\\n\\n.modal-body {\\n  position: relative;\\n  padding: 15px; }\\n\\n.modal-footer {\\n  padding: 15px;\\n  text-align: right;\\n  border-top: 1px solid #e5e5e5; }\\n\\n.modal-footer .btn + .btn {\\n  margin-bottom: 0;\\n  margin-left: 5px; }\\n\\n.modal-footer .btn-group .btn + .btn {\\n  margin-left: -1px; }\\n\\n.modal-footer .btn-block + .btn-block {\\n  margin-left: 0; }\\n\\n.modal-scrollbar-measure {\\n  position: absolute;\\n  top: -9999px;\\n  width: 50px;\\n  height: 50px;\\n  overflow: scroll; }\\n\\n@media (min-width: 768px) {\\n  .modal-dialog {\\n    width: 600px;\\n    margin: 150px auto; }\\n  .modal-content {\\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\\n  .modal-sm {\\n    width: 300px; } }\\n\\n@media (min-width: 992px) {\\n  .modal-lg {\\n    width: 900px; } }\\n\\n.carousel {\\n  position: relative; }\\n\\n.carousel-inner {\\n  position: relative;\\n  width: 100%;\\n  overflow: hidden; }\\n\\n.carousel-inner > .item {\\n  position: relative;\\n  display: none;\\n  -webkit-transition: 0.6s ease-in-out left;\\n  -o-transition: 0.6s ease-in-out left;\\n  transition: 0.6s ease-in-out left; }\\n\\n.carousel-inner > .item > img,\\n.carousel-inner > .item > a > img {\\n  line-height: 1; }\\n\\n@media all and (transform-3d), (-webkit-transform-3d) {\\n  .carousel-inner > .item {\\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\\n    -o-transition: -o-transform 0.6s ease-in-out;\\n    transition: transform 0.6s ease-in-out;\\n    -webkit-backface-visibility: hidden;\\n    backface-visibility: hidden;\\n    -webkit-perspective: 1000px;\\n    perspective: 1000px; }\\n  .carousel-inner > .item.next,\\n  .carousel-inner > .item.active.right {\\n    -webkit-transform: translate3d(100%, 0, 0);\\n    transform: translate3d(100%, 0, 0);\\n    left: 0; }\\n  .carousel-inner > .item.prev,\\n  .carousel-inner > .item.active.left {\\n    -webkit-transform: translate3d(-100%, 0, 0);\\n    transform: translate3d(-100%, 0, 0);\\n    left: 0; }\\n  .carousel-inner > .item.next.left,\\n  .carousel-inner > .item.prev.right,\\n  .carousel-inner > .item.active {\\n    -webkit-transform: translate3d(0, 0, 0);\\n    transform: translate3d(0, 0, 0);\\n    left: 0; } }\\n\\n.carousel-inner > .active,\\n.carousel-inner > .next,\\n.carousel-inner > .prev {\\n  display: block; }\\n\\n.carousel-inner > .active {\\n  left: 0; }\\n\\n.carousel-inner > .next,\\n.carousel-inner > .prev {\\n  position: absolute;\\n  top: 0;\\n  width: 100%; }\\n\\n.carousel-inner > .next {\\n  left: 100%; }\\n\\n.carousel-inner > .prev {\\n  left: -100%; }\\n\\n.carousel-inner > .next.left,\\n.carousel-inner > .prev.right {\\n  left: 0; }\\n\\n.carousel-inner > .active.left {\\n  left: -100%; }\\n\\n.carousel-inner > .active.right {\\n  left: 100%; }\\n\\n.carousel-control {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  width: 15%;\\n  font-size: 20px;\\n  color: #ffffff;\\n  text-align: center;\\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\\n  background-color: rgba(0, 0, 0, 0);\\n  filter: alpha(opacity=50);\\n  opacity: 0.5; }\\n\\n.carousel-control.left {\\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.0001)));\\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\\n  background-repeat: repeat-x; }\\n\\n.carousel-control.right {\\n  right: 0;\\n  left: auto;\\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.0001)), to(rgba(0, 0, 0, 0.5)));\\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\\n  background-repeat: repeat-x; }\\n\\n.carousel-control:hover,\\n.carousel-control:focus {\\n  color: #ffffff;\\n  text-decoration: none;\\n  outline: 0;\\n  filter: alpha(opacity=90);\\n  opacity: 0.9; }\\n\\n.carousel-control .icon-prev,\\n.carousel-control .icon-next,\\n.carousel-control .glyphicon-chevron-left,\\n.carousel-control .glyphicon-chevron-right {\\n  position: absolute;\\n  top: 50%;\\n  z-index: 5;\\n  display: inline-block;\\n  margin-top: -10px; }\\n\\n.carousel-control .icon-prev,\\n.carousel-control .glyphicon-chevron-left {\\n  left: 50%;\\n  margin-left: -10px; }\\n\\n.carousel-control .icon-next,\\n.carousel-control .glyphicon-chevron-right {\\n  right: 50%;\\n  margin-right: -10px; }\\n\\n.carousel-control .icon-prev,\\n.carousel-control .icon-next {\\n  width: 20px;\\n  height: 20px;\\n  font-family: serif;\\n  line-height: 1; }\\n\\n.carousel-control .icon-prev:before {\\n  content: \\\"\\\\2039\\\"; }\\n\\n.carousel-control .icon-next:before {\\n  content: \\\"\\\\203a\\\"; }\\n\\n.carousel-indicators {\\n  position: absolute;\\n  bottom: 10px;\\n  left: 50%;\\n  z-index: 15;\\n  width: 60%;\\n  padding-left: 0;\\n  margin-left: -30%;\\n  text-align: center;\\n  list-style: none; }\\n\\n.carousel-indicators li {\\n  display: inline-block;\\n  width: 10px;\\n  height: 10px;\\n  margin: 1px;\\n  text-indent: -999px;\\n  cursor: pointer;\\n  background-color: #000 \\\\9;\\n  background-color: rgba(0, 0, 0, 0);\\n  border: 1px solid #ffffff;\\n  border-radius: 10px; }\\n\\n.carousel-indicators .active {\\n  width: 12px;\\n  height: 12px;\\n  margin: 0;\\n  background-color: #ffffff; }\\n\\n.carousel-caption {\\n  position: absolute;\\n  right: 15%;\\n  bottom: 20px;\\n  left: 15%;\\n  z-index: 10;\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n  color: #ffffff;\\n  text-align: center;\\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\\n\\n.carousel-caption .btn {\\n  text-shadow: none; }\\n\\n@media screen and (min-width: 768px) {\\n  .carousel-control .glyphicon-chevron-left,\\n  .carousel-control .glyphicon-chevron-right,\\n  .carousel-control .icon-prev,\\n  .carousel-control .icon-next {\\n    width: 30px;\\n    height: 30px;\\n    margin-top: -10px;\\n    font-size: 30px; }\\n  .carousel-control .glyphicon-chevron-left,\\n  .carousel-control .icon-prev {\\n    margin-left: -10px; }\\n  .carousel-control .glyphicon-chevron-right,\\n  .carousel-control .icon-next {\\n    margin-right: -10px; }\\n  .carousel-caption {\\n    right: 20%;\\n    left: 20%;\\n    padding-bottom: 30px; }\\n  .carousel-indicators {\\n    bottom: 20px; } }\\n\\n.clearfix:before,\\n.clearfix:after,\\n.modal-header:before,\\n.modal-header:after,\\n.modal-footer:before,\\n.modal-footer:after {\\n  display: table;\\n  content: \\\" \\\"; }\\n\\n.clearfix:after,\\n.modal-header:after,\\n.modal-footer:after {\\n  clear: both; }\\n\\n.center-block {\\n  display: block;\\n  margin-right: auto;\\n  margin-left: auto; }\\n\\n.pull-right {\\n  float: right !important; }\\n\\n.pull-left {\\n  float: left !important; }\\n\\n.hide {\\n  display: none !important; }\\n\\n.show {\\n  display: block !important; }\\n\\n.invisible {\\n  visibility: hidden; }\\n\\n.text-hide {\\n  font: 0/0 a;\\n  color: transparent;\\n  text-shadow: none;\\n  background-color: transparent;\\n  border: 0; }\\n\\n.hidden {\\n  display: none !important; }\\n\\n.affix {\\n  position: fixed; }\\n\\n.abt-details h2 {\\n  font-family: Pompiere;\\n  font-size: 40px;\\n  font-weight: bold; }\\n\\n.abt-details h4 {\\n  font-family: proxima-nova,Helvetica Neue,sans-serif;\\n  font-size: 16px;\\n  margin: 5px 0px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/01.jpg":
/*!***************************!*\
  !*** ./src/assets/01.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"aea167c6f7e52c2716dd5247c67a0eea.jpg\");\n\n//# sourceURL=webpack:///./src/assets/01.jpg?");

/***/ }),

/***/ "./src/assets/02.jpg":
/*!***************************!*\
  !*** ./src/assets/02.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4b712b95d97e575abf7fc13812fccf02.jpg\");\n\n//# sourceURL=webpack:///./src/assets/02.jpg?");

/***/ }),

/***/ "./src/assets/03.jpg":
/*!***************************!*\
  !*** ./src/assets/03.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9767eea88d4c6d56d5c26468f8d4b153.jpg\");\n\n//# sourceURL=webpack:///./src/assets/03.jpg?");

/***/ }),

/***/ "./src/assets/04.jpg":
/*!***************************!*\
  !*** ./src/assets/04.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c682b2539b99c9397f35d90db4db802a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/04.jpg?");

/***/ }),

/***/ "./src/assets/banner1.jpg":
/*!********************************!*\
  !*** ./src/assets/banner1.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f35a835b48707cd6003534aa13c18388.jpg\");\n\n//# sourceURL=webpack:///./src/assets/banner1.jpg?");

/***/ }),

/***/ "./src/assets/bottombg.png":
/*!*********************************!*\
  !*** ./src/assets/bottombg.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"97981a437935d182495df659f57e4af5.png\");\n\n//# sourceURL=webpack:///./src/assets/bottombg.png?");

/***/ }),

/***/ "./src/assets/icon-calendar.svg":
/*!**************************************!*\
  !*** ./src/assets/icon-calendar.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4df0ce9221411f3fb3353a2f174ea990.svg\");\n\n//# sourceURL=webpack:///./src/assets/icon-calendar.svg?");

/***/ }),

/***/ "./src/assets/icon_location.svg":
/*!**************************************!*\
  !*** ./src/assets/icon_location.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f717c3b243375bbdf384b1d56bf8587f.svg\");\n\n//# sourceURL=webpack:///./src/assets/icon_location.svg?");

/***/ }),

/***/ "./src/assets/psLogo.png":
/*!*******************************!*\
  !*** ./src/assets/psLogo.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f966624c1593861480f82c2f81666329.png\");\n\n//# sourceURL=webpack:///./src/assets/psLogo.png?");

/***/ }),

/***/ "./src/assets/welcomebkg.jpg":
/*!***********************************!*\
  !*** ./src/assets/welcomebkg.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2af214e3f6ef0939c7a44402dcb17bb3.jpg\");\n\n//# sourceURL=webpack:///./src/assets/welcomebkg.jpg?");

/***/ }),

/***/ "./src/assets/welcomebottom.png":
/*!**************************************!*\
  !*** ./src/assets/welcomebottom.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f4a962e4405dfa573bd8bf74b07f9598.png\");\n\n//# sourceURL=webpack:///./src/assets/welcomebottom.png?");

/***/ }),

/***/ "./src/assets/welcometop.png":
/*!***********************************!*\
  !*** ./src/assets/welcometop.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2df69d32246fb8bd86a5da00ec249c30.png\");\n\n//# sourceURL=webpack:///./src/assets/welcometop.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_01_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/01.jpg */ \"./src/assets/01.jpg\");\n/* harmony import */ var _assets_02_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/02.jpg */ \"./src/assets/02.jpg\");\n/* harmony import */ var _assets_03_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/03.jpg */ \"./src/assets/03.jpg\");\n/* harmony import */ var _assets_04_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/04.jpg */ \"./src/assets/04.jpg\");\n\n// import './assets/10.jpeg';\n\n\n\n\n//import './desktop-style.css';\n\n/*import _ from 'lodash';\n\n\n  function component() {\n    const element = document.createElement('div');\n\n    // Lodash, now imported by this script\n    element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n    element.classList.add('heading');\n\n    return element;\n  }\n\n  document.body.appendChild(component()); */\n\n  $(document).ready(function() {\n    appendGallery();\n\n    autoPlayYouTubeModal();\n    $('.p-wrapper').removeClass('hide');\n\n    var deadline = new Date(2022,11,29,9,30);\n    initializeClock('clockdiv', deadline);\n  });\n\n  function getTimeRemaining(endtime, clock) {\n    var t = Date.parse(endtime) - Date.parse(new Date());\n    \n    var seconds = Math.floor((t / 1000) % 60);\n    var minutes = Math.floor((t / 1000 / 60) % 60);\n    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);\n    var days = Math.floor(t / (1000 * 60 * 60 * 24));\n    if (t < 0){\n      clock.remove();\n      return false;\n    }\n    return {\n      'total': t,\n      'days': days,\n      'hours': hours,\n      'minutes': minutes,\n      'seconds': seconds\n    };\n  }\n  \n  function initializeClock(id, endtime) {\n    var clock = document.getElementById(id);\n    var daysSpan = clock.querySelector('.days');\n    var hoursSpan = clock.querySelector('.hours');\n    var minutesSpan = clock.querySelector('.minutes');\n    var secondsSpan = clock.querySelector('.seconds');\n  \n    function updateClock() {\n      var t = getTimeRemaining(endtime, clock);\n  \n      daysSpan.innerHTML = t.days;\n      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);\n      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);\n      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);\n  \n      if (t.total <= 0) {\n        clearInterval(timeinterval);\n      }\n    }\n  \n    updateClock();\n    var timeinterval = setInterval(updateClock, 1000);\n  }\n  \n  \n\n  function appendGallery() {\n    var g1 = document.getElementById('gallery1');\n    var g2 = document.getElementById('gallery2');\n    var g3 = document.getElementById('gallery3');\n    var g4 = document.getElementById('gallery4');\n    g1.src = _assets_01_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    g2.src = _assets_02_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    g3.src = _assets_03_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    g4.src = _assets_04_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n  }\n  \n  function autoPlayYouTubeModal() {\n    var trigger = $('.trigger');\n    trigger.click(function(e) {\n      e.preventDefault();\n      gtag('event', 'click', {'event_category': 'video', 'event_label': 'save the date'});\n      var theModal = $(this).data(\"target\");\n      var videoSRC = $(this).attr(\"src\");\n      var videoSRCauto = videoSRC + \"?autoplay=1\";\n      $(theModal + ' iframe').attr('src', videoSRCauto);\n      $(theModal).on('hidden.bs.modal', function(e) {\n        $(theModal + ' iframe').attr('src', '');\n      });\n    });\n  };\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });