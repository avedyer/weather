/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    width: 100vw;\n    height: 100vh;\n    padding: 92px 384px 92px 256px;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n    color: white;\n    background-color: \thsl(210, 15%, 25%);\n    margin: 0;\n}\n\nh1 {\n    font-size: 64px;\n}\n\nh2 {\n    font-size: 48px;\n}\n\nh4 {\n    font-style: normal;\n    font-size: 20px;\n    font-weight: normal;\n}\n\ninput[type=text] {\n    font-size: 24px;\n    border: none;\n    border-bottom: 1px solid grey;\n    padding: 0.2em;\n    margin-right: 8px;\n}\n\ninput[type=text]:focus-visible {\n    outline: none;\n}\n\nbutton {\n    font-size: 24px;\n    height: 1.5em;\n    border: none;\n}\n\n.top {\n    width: 100%;\n    height: 20%;\n}\n\n#searchErr {\n    font-style: italic;\n    color: hsl(0, 0%, 90%);\n    display: inline;\n    white-space: nowrap;\n}\n\n.invisible {\n    visibility: hidden;\n}\n\n.unitContainer {\n    float: right;\n    margin-bottom: 0;\n    width: 128px;\n}\n\n#unitLabel {\n    margin-top: 8px; \n    font-style: italic;   \n}\n\n.locationForm {\n    display: inline-block;\n    max-width: 500px;\n}\n\n.locationForm button {\n    margin-right: 12px;\n    margin-top: 2px;\n}\n\n.weather {\n    width: 1028px;\n    margin-left: 128px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: flex-start;\n    animation-name: fade-in;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-in-out;\n}\n\n.topline {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 48px;\n    border-bottom: 2px solid lightgray;\n}\n\n.secondline {\n    width: 512px;\n    display: inline-block;\n}\n\n.topline img {\n    width: 256px;\n    height: 256px;\n}\n\n.weather table {\n    float: right;\n    width: 256px;\n}\n\n.weather table * {\n    font-size: 24px;\n}\n\n.weather table tr {\n    height: 2em;\n}\n\n.weather table tr td:nth-child(2) {\n    text-align: right;\n}\n\n.bottom {\n    position: absolute;\n    width: 100vw;\n    height: 200px;\n    bottom: 0;\n    left: 0;\n}\n\n.bottom::before {\n    content: '';\n    height: 150px;\n    width: 100vw;\n    background: linear-gradient(hsl(210, 15%, 25%), hsla(210, 15%, 25%, 0));\n    position: absolute;\n    top: -50px;\n    left: 0;\n    z-index: 2;\n}\n\n.dot {\n    position: absolute;\n    width: 4px;\n    height: 4px;\n    background-color: white;\n    border-radius: 50%;\n    animation-name: slide-fade;\n    animation-duration: 2s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n@keyframes slide-fade {\n    from {\n        opacity: 0;\n        transform: translateY(0);\n    }    \n\n    75% {\n        opacity: 0.8;\n        transform: translateY(-36px);\n    }\n\n    to {\n        opacity: 0;\n        transform: translateY(-48px);\n    }\n}\n\n@keyframes fade-in {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n /* The switch - the box around the slider */\n .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .2s;\n    transition: .2s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .2s;\n    transition: .2s;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n  \n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  } \n\n@media (max-width: 820px) {\n    body {\n        padding: 16px;\n    }\n\n    h1 {\n        font-size: 32px;\n    }\n    \n    h2 {\n        font-size: 24px;\n    }\n\n    h4 {\n        font-size: 18px;\n    }\n\n    input[type=text], button {\n        font-size: 18px;\n    }\n\n    .top {\n        height: 300\n    }\n\n    .unitContainer {\n        margin-top: 12px;\n    }\n\n    .weather {\n        margin-left: 0;\n        width: 95%;\n        box-sizing: content-box;\n    }\n\n    .weather table {\n        width: 95%;\n    }\n\n    .topline {\n        margin-bottom: 16px;\n    }\n\n    .topline img {\n        height: 128px;\n        width: 128px;\n    }\n\n    .weather table * {\n        font-size: 18px;\n    }\n\n    .bottom {\n        display: none;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    width: 100vw;\n    height: 100vh;\n    padding: 92px 384px 92px 256px;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n    color: white;\n    background-color: \thsl(210, 15%, 25%);\n    margin: 0;\n}\n\nh1 {\n    font-size: 64px;\n}\n\nh2 {\n    font-size: 48px;\n}\n\nh4 {\n    font-style: normal;\n    font-size: 20px;\n    font-weight: normal;\n}\n\ninput[type=text] {\n    font-size: 24px;\n    border: none;\n    border-bottom: 1px solid grey;\n    padding: 0.2em;\n    margin-right: 8px;\n}\n\ninput[type=text]:focus-visible {\n    outline: none;\n}\n\nbutton {\n    font-size: 24px;\n    height: 1.5em;\n    border: none;\n}\n\n.top {\n    width: 100%;\n    height: 20%;\n}\n\n#searchErr {\n    font-style: italic;\n    color: hsl(0, 0%, 90%);\n    display: inline;\n    white-space: nowrap;\n}\n\n.invisible {\n    visibility: hidden;\n}\n\n.unitContainer {\n    float: right;\n    margin-bottom: 0;\n    width: 128px;\n}\n\n#unitLabel {\n    margin-top: 8px; \n    font-style: italic;   \n}\n\n.locationForm {\n    display: inline-block;\n    max-width: 500px;\n}\n\n.locationForm button {\n    margin-right: 12px;\n    margin-top: 2px;\n}\n\n.weather {\n    width: 1028px;\n    margin-left: 128px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: flex-start;\n    animation-name: fade-in;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-in-out;\n}\n\n.topline {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 48px;\n    border-bottom: 2px solid lightgray;\n}\n\n.secondline {\n    width: 512px;\n    display: inline-block;\n}\n\n.topline img {\n    width: 256px;\n    height: 256px;\n}\n\n.weather table {\n    float: right;\n    width: 256px;\n}\n\n.weather table * {\n    font-size: 24px;\n}\n\n.weather table tr {\n    height: 2em;\n}\n\n.weather table tr td:nth-child(2) {\n    text-align: right;\n}\n\n.bottom {\n    position: absolute;\n    width: 100vw;\n    height: 200px;\n    bottom: 0;\n    left: 0;\n}\n\n.bottom::before {\n    content: '';\n    height: 150px;\n    width: 100vw;\n    background: linear-gradient(hsl(210, 15%, 25%), hsla(210, 15%, 25%, 0));\n    position: absolute;\n    top: -50px;\n    left: 0;\n    z-index: 2;\n}\n\n.dot {\n    position: absolute;\n    width: 4px;\n    height: 4px;\n    background-color: white;\n    border-radius: 50%;\n    animation-name: slide-fade;\n    animation-duration: 2s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n@keyframes slide-fade {\n    from {\n        opacity: 0;\n        transform: translateY(0);\n    }    \n\n    75% {\n        opacity: 0.8;\n        transform: translateY(-36px);\n    }\n\n    to {\n        opacity: 0;\n        transform: translateY(-48px);\n    }\n}\n\n@keyframes fade-in {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n /* The switch - the box around the slider */\n .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .2s;\n    transition: .2s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .2s;\n    transition: .2s;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n  \n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  } \n\n@media (max-width: 820px) {\n    body {\n        padding: 16px;\n    }\n\n    h1 {\n        font-size: 32px;\n    }\n    \n    h2 {\n        font-size: 24px;\n    }\n\n    h4 {\n        font-size: 18px;\n    }\n\n    input[type=text], button {\n        font-size: 18px;\n    }\n\n    .top {\n        height: 300\n    }\n\n    .unitContainer {\n        margin-top: 12px;\n    }\n\n    .weather {\n        margin-left: 0;\n        width: 95%;\n        box-sizing: content-box;\n    }\n\n    .weather table {\n        width: 95%;\n    }\n\n    .topline {\n        margin-bottom: 16px;\n    }\n\n    .topline img {\n        height: 128px;\n        width: 128px;\n    }\n\n    .weather table * {\n        font-size: 18px;\n    }\n\n    .bottom {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseLocation": () => (/* binding */ parseLocation),
/* harmony export */   "translateData": () => (/* binding */ translateData),
/* harmony export */   "fetchWeather": () => (/* binding */ fetchWeather),
/* harmony export */   "toggleUnits": () => (/* binding */ toggleUnits),
/* harmony export */   "metric": () => (/* binding */ metric),
/* harmony export */   "Weather": () => (/* binding */ Weather)
/* harmony export */ });
const key = 'ef5127c2d2f14fe834463003fb26ca93';
let metric = true;


function parseLocation (input) {

    //Parses search term into useable format for API

    let location = input.trim();
    location = input.replace(' ', '+')

    let firstFive = location.substring(0, 5);
     if (/^\d+$/.test(firstFive)) {
         return 'zip=' + firstFive               //Zip code return
    }

    return 'q=' + location                        //Formatted string return
}

async function fetchWeather(input) {

    //Returns current data in raw JSON format
    //Return false if fetch throws an error.

    let location = parseLocation(input);

    const url = `https://api.openweathermap.org/data/2.5/weather?${location}&appid=${key}`

    try {
        const response = await fetch(url, {mode: 'cors'});
        const data = await response.json();
        return translateData(data);
    }

    catch(err) {
        console.log(err);
        return false
    }
}

function translateData(data) {

    //Translate JSON data into custom formats, then return a new custom Weather object.

    let name = data.name + ', ' + data.sys.country;
    let main = capitalize(data.weather[0].description);
    let icon = data.weather[0].icon;
    let humidity = data.main.humidity;
    let timezone = data.timezone;
        let today = new Date;
        let offset = today.getTimezoneOffset() * 60;
    let sunrise = data.sys.sunrise + timezone + offset;
    let sunset = data.sys.sunset + timezone + offset;
    let temp, min, max, feels, wind;

    if (metric) {
        temp = cTemp(data.main.temp);
        min = cTemp(data.main.temp_min);
        max = cTemp(data.main.temp_max);
        feels = cTemp(data.main.feels_like)
        wind = toKph(data.wind.speed);
    }
    else {
        temp = fTemp(data.main.temp);
        min = fTemp(data.main.temp_min);
        max = fTemp(data.main.temp_max);
        feels = fTemp(data.main.feels_like)
        wind = toMph(data.wind.speed);
    }
    
    
    return new Weather(name, main, icon, temp, min, max, feels, humidity, wind, sunrise, sunset, timezone);
}

function Weather(name, main, icon, temp, min, max, feels, humidity, wind, sunrise, sunset, timezone) {
    this.name = name;
    this.main = main;
    this.icon = icon;
    this.temp = temp;
    this.min = min;
    this.max = max;
    this.feels = feels;
    this.humidity = humidity;
    this.wind = wind;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.timezone = timezone;
}

//Functions to translate between units

function fTemp(kTemp) {
    let fTemp = 9 / 5 * (kTemp - 273) + 32 
    return Math.round(fTemp);
}

function cTemp(kTemp) {
    return Math.round(kTemp - 273.15);
}

function toMph(speed) {
    return Math.round(speed * 2.236936);
}

function toKph(speed) {
    return Math.round(speed * 3.6)
}

function toggleUnits() {
    metric = !metric
}

function capitalize(str) {

    //Capitalizes first letter of each word of a string. For use on city names.

    str = str.trim();

    let capitalized = str.charAt(0).toUpperCase();

    for (let i=1; i<str.length; ++i){
        capitalized += str.charAt(i);
        if (str.charAt(i) === ' ') {
            capitalized += str.charAt(i+1).toUpperCase();
            ++i       
        }
    }

    return capitalized;
}




/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadUI": () => (/* binding */ loadUI)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/api.js");
/*
    This codebase handles all UI functionality, initialized through the loadUI function.
    The page is loaded with a city chosen at random from a small hardcoded list.
    Weather info is displayed in one container, which is removed and reloaded upon a new search.
*/



const body = document.querySelector('body');
let initialLocations = ['Los Angeles', 'Tokyo', 'Sydney', 'Moscow', 'Barcelona', 'New Delhi', 'Beijing', 'Johannesburg', 'Cairo', 'Tehran', 'Buenos Aires', 'Havana', 'New York', 'Dallas'];

let currLocation = initialLocations[(Math.floor(Math.random() * initialLocations.length))];

function loadUI () {

    // UI is split into three sections: 
    //Top section with a search form and unit switching.
    //Main section with weather info.
    //Bottom section for decorative animation.

    const topThird = document.createElement('div');
        topThird.classList.add('top');

        const locationForm = document.createElement('div');
            locationForm.classList.add('locationForm');

            const searchbar = document.createElement('input');
                searchbar.setAttribute('type', 'text');

            const searchBtn = document.createElement('button');
                searchBtn.setAttribute('type', 'button');
                searchBtn.innerHTML = 'Search';

            const searchErr = document.createElement('h4');
                searchErr.id = ('searchErr');
                searchErr.classList.add('invisible');
                searchErr.innerHTML = 'City not found.'

            searchBtn.onclick = () => {
                currLocation = searchbar.value;
                displayWeather(currLocation);
            };
            searchbar.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    currLocation = searchbar.value;
                    displayWeather(currLocation);
                }
            });

            locationForm.append(searchbar, searchBtn, searchErr);

        //Toggle switch style unit selector
        
        const unitContainer = document.createElement('div');
            unitContainer.classList.add('unitContainer');

            const unitSwitch = document.createElement('label');
                unitSwitch.classList.add('switch');
                
                const unitCheck = document.createElement('input');
                    unitCheck.setAttribute('type', 'checkbox');
                    unitCheck.onclick = () => {
                        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.toggleUnits)();
                        unitLabel.innerHTML === 'Metric' ? unitLabel.innerHTML = 'Imperial' : unitLabel.innerHTML = 'Metric';
                        displayWeather(currLocation);
                    };

                const span = document.createElement('span');
                    span.classList.add('slider', 'round');
                
                unitSwitch.append(
                    unitCheck,
                    span
                );
            
            const unitLabel = document.createElement('h4');
                    unitLabel.id = 'unitLabel';
                    unitLabel.innerHTML = 'Metric';

            unitContainer.append(unitSwitch, unitLabel);
        
        topThird.append(locationForm, unitContainer)

    const bottomAnimation = document.createElement('div');
            bottomAnimation.classList.add('bottom');
            animateDots(bottomAnimation);

    body.append(topThird, bottomAnimation);
    
    displayWeather(currLocation);
}


async function displayWeather (input) {

    //Create a container for all weather info, based on a custom weather object with data fetched from API.

    //Clean up page for new info

    document.getElementById('searchErr').classList.add('invisible');
    
    let weather = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(input);

    if (!weather) {
        document.getElementById('searchErr').classList.remove('invisible');
        return false
    }

    let oldWeather = document.querySelector('.weather');

    if (oldWeather) {
        body.removeChild(oldWeather);
    }

    //Graphic split into three sections:

    //Topline with name, icon.
    //Second Line with current temp, description.
    //Table with tertiary info.


    const weatherDisplay = document.createElement('div');
        weatherDisplay.classList.add('weather');

        const topline = document.createElement('div');
            topline.classList.add('topline');

            const name = document.createElement('h1');
                name.classList.add('name');
                name.innerHTML = weather.name

            const icon = document.createElement('img');
                icon.src = 'https://openweathermap.org/img/wn/' + weather.icon + '@4x.png';

            topline.append(name, icon);
            

        const secondline = document.createElement('div');
            secondline.classList.add('secondline');

            const description = document.createElement('h2');
                description.classList.add('description');
                description.innerHTML = weather.main;

            const mainTemp = document.createElement('h2');
                mainTemp.classList.add('temp');
                mainTemp.innerHTML = weather.temp + '°';

            secondline.append(mainTemp, description);
        

        const dataTable = document.createElement('table');

            const hiRow = document.createElement('tr');
                
                const hiLabel = document.createElement('td');
                    hiLabel.innerHTML = 'High:';
                const hiTemp = document.createElement('td');
                    hiTemp.innerHTML = weather.max + '°';
                
                hiRow.append(hiLabel, hiTemp);
            
            const loRow = document.createElement('tr');
                
                const loLabel = document.createElement('td');
                    loLabel.innerHTML = 'Low:';
                const loTemp = document.createElement('td');
                    loTemp.innerHTML = weather.min + '°';
                
                loRow.append(loLabel, loTemp);

        
            const feelsRow = document.createElement('tr');
                
                const feelsLabel = document.createElement('td');
                    feelsLabel.innerHTML = 'Feels Like:';
                const feelsTemp = document.createElement('td');
                    feelsTemp.innerHTML = weather.feels + '°';
                
                feelsRow.append(feelsLabel, feelsTemp);


            const humidityRow = document.createElement('tr');

                const humidityLabel = document.createElement('td');
                    humidityLabel.innerHTML = 'Humidity:';
                const humidity = document.createElement('td');
                    humidity.innerHTML = weather.humidity;

                humidityRow.append(humidityLabel, humidity);

            const windRow = document.createElement('tr');

                const windLabel = document.createElement('td');
                    windLabel.innerHTML = 'Wind:';
                const wind = document.createElement('td');
                    wind.innerHTML = weather.wind;
                    _api_js__WEBPACK_IMPORTED_MODULE_0__.metric ? wind.innerHTML += 'kph' : wind.innerHTML += 'mph'

                windRow.append(windLabel, wind);


            const sunriseRow = document.createElement('tr');

                const sunriseLabel = document.createElement('td');
                    sunriseLabel.innerHTML = 'Sunrise:'

                const sunrise = document.createElement('td');                
                    let sunriseDate = new Date(weather.sunrise * 1000);
                    sunrise.innerHTML = sunriseDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                sunriseRow.append(sunriseLabel, sunrise);

            const sunsetRow = document.createElement('tr');

                const sunsetLabel = document.createElement('td');
                    sunsetLabel.innerHTML = 'Sunset:'

                const sunset = document.createElement('td');                
                    let sunsetDate = new Date(weather.sunset * 1000);
                    sunset.innerHTML = sunsetDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                sunsetRow.append(sunsetLabel, sunset);

            dataTable.append(hiRow, loRow, feelsRow, humidityRow, windRow, sunriseRow, sunsetRow);

        weatherDisplay.append(topline, secondline, dataTable);

    body.append(weatherDisplay);
}

function animateDots (el) {

    //Generates, appends, and removes blank div elements with dot class on random interval.
    //All stylization in CSS

    setInterval(() => {

        const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.style.left = (Math.random() * 100).toString() + '%';
            dot.style.bottom = (Math.random() * 100).toString() + '%';

            el.append(dot);

            setTimeout(() => {
                el.removeChild(dot)
            }, 3000)

    }, Math.random() * 200);
}



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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.loadUI)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyRDs7QUFFM0Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQVc7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixxREFBWTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJDQUFNOztBQUUxQjs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEVBQThFLGtEQUFrRDs7QUFFaEk7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEVBQTRFLGtEQUFrRDs7QUFFOUg7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViLEtBQUs7QUFDTDs7Ozs7Ozs7VUMxUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDVDs7QUFFckIsOENBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogOTJweCAzODRweCA5MnB4IDI1NnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHRoc2woMjEwLCAxNSUsIDI1JSk7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgICBwYWRkaW5nOiAwLjJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udG9wIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAlO1xcbn1cXG5cXG4jc2VhcmNoRXJyIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5pbnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi51bml0Q29udGFpbmVyIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTI4cHg7XFxufVxcblxcbiN1bml0TGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7IFxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7ICAgXFxufVxcblxcbi5sb2NhdGlvbkZvcm0ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxufVxcblxcbi5sb2NhdGlvbkZvcm0gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi53ZWF0aGVyIHtcXG4gICAgd2lkdGg6IDEwMjhweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEyOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b3BsaW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuXFxuLnNlY29uZGxpbmUge1xcbiAgICB3aWR0aDogNTEycHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRvcGxpbmUgaW1nIHtcXG4gICAgd2lkdGg6IDI1NnB4O1xcbiAgICBoZWlnaHQ6IDI1NnB4O1xcbn1cXG5cXG4ud2VhdGhlciB0YWJsZSB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDI1NnB4O1xcbn1cXG5cXG4ud2VhdGhlciB0YWJsZSAqIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ud2VhdGhlciB0YWJsZSB0ciB7XFxuICAgIGhlaWdodDogMmVtO1xcbn1cXG5cXG4ud2VhdGhlciB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMikge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5ib3R0b206OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChoc2woMjEwLCAxNSUsIDI1JSksIGhzbGEoMjEwLCAxNSUsIDI1JSwgMCkpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTUwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5kb3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGUtZmFkZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtZmFkZSB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfSAgICBcXG5cXG4gICAgNzUlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzZweCk7XFxuICAgIH1cXG5cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDhweCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuIC8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuIC5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4gIC5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbiAgXFxuICAvKiBUaGUgc2xpZGVyICovXFxuICAuc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG4gIH1cXG4gIFxcbiAgLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxuICB9XFxuICBcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB9XFxuICBcXG4gIC5zbGlkZXIucm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbiAgfVxcbiAgXFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIH0gXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgcGFkZGluZzogMTZweDtcXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDMycHg7XFxuICAgIH1cXG4gICAgXFxuICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgfVxcblxcbiAgICBoNCB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT10ZXh0XSwgYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcblxcbiAgICAudG9wIHtcXG4gICAgICAgIGhlaWdodDogMzAwXFxuICAgIH1cXG5cXG4gICAgLnVuaXRDb250YWluZXIge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgfVxcblxcbiAgICAud2VhdGhlciB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgfVxcblxcbiAgICAud2VhdGhlciB0YWJsZSB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxuXFxuICAgIC50b3BsaW5lIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLnRvcGxpbmUgaW1nIHtcXG4gICAgICAgIGhlaWdodDogMTI4cHg7XFxuICAgICAgICB3aWR0aDogMTI4cHg7XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXIgdGFibGUgKiB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG5cXG4gICAgLmJvdHRvbSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNi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O1FBQ1YsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDkycHggMzg0cHggOTJweCAyNTZweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXFx0aHNsKDIxMCwgMTUlLCAyNSUpO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuaDQge1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgcGFkZGluZzogMC4yZW07XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvcCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG59XFxuXFxuI3NlYXJjaEVyciB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udW5pdENvbnRhaW5lciB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEyOHB4O1xcbn1cXG5cXG4jdW5pdExhYmVsIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4OyBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljOyAgIFxcbn1cXG5cXG4ubG9jYXRpb25Gb3JtIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4ubG9jYXRpb25Gb3JtIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG5cXG4ud2VhdGhlciB7XFxuICAgIHdpZHRoOiAxMDI4cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMjhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9wbGluZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcblxcbi5zZWNvbmRsaW5lIHtcXG4gICAgd2lkdGg6IDUxMnB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi50b3BsaW5lIGltZyB7XFxuICAgIHdpZHRoOiAyNTZweDtcXG4gICAgaGVpZ2h0OiAyNTZweDtcXG59XFxuXFxuLndlYXRoZXIgdGFibGUge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHdpZHRoOiAyNTZweDtcXG59XFxuXFxuLndlYXRoZXIgdGFibGUgKiB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLndlYXRoZXIgdGFibGUgdHIge1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLndlYXRoZXIgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDIpIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4uYm90dG9tOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoaHNsKDIxMCwgMTUlLCAyNSUpLCBoc2xhKDIxMCwgMTUlLCAyNSUsIDApKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC01MHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uZG90IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZhZGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWZhZGUge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH0gICAgXFxuXFxuICAgIDc1JSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTM2cHgpO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ4cHgpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbiAvKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbiAuc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICB9XFxuICBcXG4gIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuICAuc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIFxcbiAgLyogVGhlIHNsaWRlciAqL1xcbiAgLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICB9XFxuICBcXG4gIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICB9XFxuICBcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgfVxcbiAgXFxuICAuc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG4gIH1cXG4gIFxcbiAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB9IFxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB9XFxuICAgIFxcbiAgICBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgaDQge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9dGV4dF0sIGJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG5cXG4gICAgLnRvcCB7XFxuICAgICAgICBoZWlnaHQ6IDMwMFxcbiAgICB9XFxuXFxuICAgIC51bml0Q29udGFpbmVyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXIge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIH1cXG5cXG4gICAgLndlYXRoZXIgdGFibGUge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgfVxcblxcbiAgICAudG9wbGluZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICB9XFxuXFxuICAgIC50b3BsaW5lIGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDEyOHB4O1xcbiAgICAgICAgd2lkdGg6IDEyOHB4O1xcbiAgICB9XFxuXFxuICAgIC53ZWF0aGVyIHRhYmxlICoge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB9XFxuXFxuICAgIC5ib3R0b20ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qga2V5ID0gJ2VmNTEyN2MyZDJmMTRmZTgzNDQ2MzAwM2ZiMjZjYTkzJztcbmxldCBtZXRyaWMgPSB0cnVlO1xuXG5cbmZ1bmN0aW9uIHBhcnNlTG9jYXRpb24gKGlucHV0KSB7XG5cbiAgICAvL1BhcnNlcyBzZWFyY2ggdGVybSBpbnRvIHVzZWFibGUgZm9ybWF0IGZvciBBUElcblxuICAgIGxldCBsb2NhdGlvbiA9IGlucHV0LnRyaW0oKTtcbiAgICBsb2NhdGlvbiA9IGlucHV0LnJlcGxhY2UoJyAnLCAnKycpXG5cbiAgICBsZXQgZmlyc3RGaXZlID0gbG9jYXRpb24uc3Vic3RyaW5nKDAsIDUpO1xuICAgICBpZiAoL15cXGQrJC8udGVzdChmaXJzdEZpdmUpKSB7XG4gICAgICAgICByZXR1cm4gJ3ppcD0nICsgZmlyc3RGaXZlICAgICAgICAgICAgICAgLy9aaXAgY29kZSByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gJ3E9JyArIGxvY2F0aW9uICAgICAgICAgICAgICAgICAgICAgICAgLy9Gb3JtYXR0ZWQgc3RyaW5nIHJldHVyblxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoaW5wdXQpIHtcblxuICAgIC8vUmV0dXJucyBjdXJyZW50IGRhdGEgaW4gcmF3IEpTT04gZm9ybWF0XG4gICAgLy9SZXR1cm4gZmFsc2UgaWYgZmV0Y2ggdGhyb3dzIGFuIGVycm9yLlxuXG4gICAgbGV0IGxvY2F0aW9uID0gcGFyc2VMb2NhdGlvbihpbnB1dCk7XG5cbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/JHtsb2NhdGlvbn0mYXBwaWQ9JHtrZXl9YFxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZURhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgY2F0Y2goZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlRGF0YShkYXRhKSB7XG5cbiAgICAvL1RyYW5zbGF0ZSBKU09OIGRhdGEgaW50byBjdXN0b20gZm9ybWF0cywgdGhlbiByZXR1cm4gYSBuZXcgY3VzdG9tIFdlYXRoZXIgb2JqZWN0LlxuXG4gICAgbGV0IG5hbWUgPSBkYXRhLm5hbWUgKyAnLCAnICsgZGF0YS5zeXMuY291bnRyeTtcbiAgICBsZXQgbWFpbiA9IGNhcGl0YWxpemUoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICBsZXQgaWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xuICAgIGxldCBodW1pZGl0eSA9IGRhdGEubWFpbi5odW1pZGl0eTtcbiAgICBsZXQgdGltZXpvbmUgPSBkYXRhLnRpbWV6b25lO1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZTtcbiAgICAgICAgbGV0IG9mZnNldCA9IHRvZGF5LmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDtcbiAgICBsZXQgc3VucmlzZSA9IGRhdGEuc3lzLnN1bnJpc2UgKyB0aW1lem9uZSArIG9mZnNldDtcbiAgICBsZXQgc3Vuc2V0ID0gZGF0YS5zeXMuc3Vuc2V0ICsgdGltZXpvbmUgKyBvZmZzZXQ7XG4gICAgbGV0IHRlbXAsIG1pbiwgbWF4LCBmZWVscywgd2luZDtcblxuICAgIGlmIChtZXRyaWMpIHtcbiAgICAgICAgdGVtcCA9IGNUZW1wKGRhdGEubWFpbi50ZW1wKTtcbiAgICAgICAgbWluID0gY1RlbXAoZGF0YS5tYWluLnRlbXBfbWluKTtcbiAgICAgICAgbWF4ID0gY1RlbXAoZGF0YS5tYWluLnRlbXBfbWF4KTtcbiAgICAgICAgZmVlbHMgPSBjVGVtcChkYXRhLm1haW4uZmVlbHNfbGlrZSlcbiAgICAgICAgd2luZCA9IHRvS3BoKGRhdGEud2luZC5zcGVlZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0ZW1wID0gZlRlbXAoZGF0YS5tYWluLnRlbXApO1xuICAgICAgICBtaW4gPSBmVGVtcChkYXRhLm1haW4udGVtcF9taW4pO1xuICAgICAgICBtYXggPSBmVGVtcChkYXRhLm1haW4udGVtcF9tYXgpO1xuICAgICAgICBmZWVscyA9IGZUZW1wKGRhdGEubWFpbi5mZWVsc19saWtlKVxuICAgICAgICB3aW5kID0gdG9NcGgoZGF0YS53aW5kLnNwZWVkKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcmV0dXJuIG5ldyBXZWF0aGVyKG5hbWUsIG1haW4sIGljb24sIHRlbXAsIG1pbiwgbWF4LCBmZWVscywgaHVtaWRpdHksIHdpbmQsIHN1bnJpc2UsIHN1bnNldCwgdGltZXpvbmUpO1xufVxuXG5mdW5jdGlvbiBXZWF0aGVyKG5hbWUsIG1haW4sIGljb24sIHRlbXAsIG1pbiwgbWF4LCBmZWVscywgaHVtaWRpdHksIHdpbmQsIHN1bnJpc2UsIHN1bnNldCwgdGltZXpvbmUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB0aGlzLnRlbXAgPSB0ZW1wO1xuICAgIHRoaXMubWluID0gbWluO1xuICAgIHRoaXMubWF4ID0gbWF4O1xuICAgIHRoaXMuZmVlbHMgPSBmZWVscztcbiAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gICAgdGhpcy53aW5kID0gd2luZDtcbiAgICB0aGlzLnN1bnJpc2UgPSBzdW5yaXNlO1xuICAgIHRoaXMuc3Vuc2V0ID0gc3Vuc2V0O1xuICAgIHRoaXMudGltZXpvbmUgPSB0aW1lem9uZTtcbn1cblxuLy9GdW5jdGlvbnMgdG8gdHJhbnNsYXRlIGJldHdlZW4gdW5pdHNcblxuZnVuY3Rpb24gZlRlbXAoa1RlbXApIHtcbiAgICBsZXQgZlRlbXAgPSA5IC8gNSAqIChrVGVtcCAtIDI3MykgKyAzMiBcbiAgICByZXR1cm4gTWF0aC5yb3VuZChmVGVtcCk7XG59XG5cbmZ1bmN0aW9uIGNUZW1wKGtUZW1wKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoa1RlbXAgLSAyNzMuMTUpO1xufVxuXG5mdW5jdGlvbiB0b01waChzcGVlZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHNwZWVkICogMi4yMzY5MzYpO1xufVxuXG5mdW5jdGlvbiB0b0twaChzcGVlZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHNwZWVkICogMy42KVxufVxuXG5mdW5jdGlvbiB0b2dnbGVVbml0cygpIHtcbiAgICBtZXRyaWMgPSAhbWV0cmljXG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG5cbiAgICAvL0NhcGl0YWxpemVzIGZpcnN0IGxldHRlciBvZiBlYWNoIHdvcmQgb2YgYSBzdHJpbmcuIEZvciB1c2Ugb24gY2l0eSBuYW1lcy5cblxuICAgIHN0ciA9IHN0ci50cmltKCk7XG5cbiAgICBsZXQgY2FwaXRhbGl6ZWQgPSBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBmb3IgKGxldCBpPTE7IGk8c3RyLmxlbmd0aDsgKytpKXtcbiAgICAgICAgY2FwaXRhbGl6ZWQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgaWYgKHN0ci5jaGFyQXQoaSkgPT09ICcgJykge1xuICAgICAgICAgICAgY2FwaXRhbGl6ZWQgKz0gc3RyLmNoYXJBdChpKzEpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICArK2kgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FwaXRhbGl6ZWQ7XG59XG5cblxuZXhwb3J0IHtcbiAgICBwYXJzZUxvY2F0aW9uLFxuICAgIHRyYW5zbGF0ZURhdGEsXG4gICAgZmV0Y2hXZWF0aGVyLFxuICAgIHRvZ2dsZVVuaXRzLFxuICAgIG1ldHJpYyxcbiAgICBXZWF0aGVyXG59OyIsIi8qXG4gICAgVGhpcyBjb2RlYmFzZSBoYW5kbGVzIGFsbCBVSSBmdW5jdGlvbmFsaXR5LCBpbml0aWFsaXplZCB0aHJvdWdoIHRoZSBsb2FkVUkgZnVuY3Rpb24uXG4gICAgVGhlIHBhZ2UgaXMgbG9hZGVkIHdpdGggYSBjaXR5IGNob3NlbiBhdCByYW5kb20gZnJvbSBhIHNtYWxsIGhhcmRjb2RlZCBsaXN0LlxuICAgIFdlYXRoZXIgaW5mbyBpcyBkaXNwbGF5ZWQgaW4gb25lIGNvbnRhaW5lciwgd2hpY2ggaXMgcmVtb3ZlZCBhbmQgcmVsb2FkZWQgdXBvbiBhIG5ldyBzZWFyY2guXG4qL1xuXG5pbXBvcnQge21ldHJpYywgZmV0Y2hXZWF0aGVyLCB0b2dnbGVVbml0c30gZnJvbSAnLi9hcGkuanMnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IGluaXRpYWxMb2NhdGlvbnMgPSBbJ0xvcyBBbmdlbGVzJywgJ1Rva3lvJywgJ1N5ZG5leScsICdNb3Njb3cnLCAnQmFyY2Vsb25hJywgJ05ldyBEZWxoaScsICdCZWlqaW5nJywgJ0pvaGFubmVzYnVyZycsICdDYWlybycsICdUZWhyYW4nLCAnQnVlbm9zIEFpcmVzJywgJ0hhdmFuYScsICdOZXcgWW9yaycsICdEYWxsYXMnXTtcblxubGV0IGN1cnJMb2NhdGlvbiA9IGluaXRpYWxMb2NhdGlvbnNbKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGluaXRpYWxMb2NhdGlvbnMubGVuZ3RoKSldO1xuXG5mdW5jdGlvbiBsb2FkVUkgKCkge1xuXG4gICAgLy8gVUkgaXMgc3BsaXQgaW50byB0aHJlZSBzZWN0aW9uczogXG4gICAgLy9Ub3Agc2VjdGlvbiB3aXRoIGEgc2VhcmNoIGZvcm0gYW5kIHVuaXQgc3dpdGNoaW5nLlxuICAgIC8vTWFpbiBzZWN0aW9uIHdpdGggd2VhdGhlciBpbmZvLlxuICAgIC8vQm90dG9tIHNlY3Rpb24gZm9yIGRlY29yYXRpdmUgYW5pbWF0aW9uLlxuXG4gICAgY29uc3QgdG9wVGhpcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9wVGhpcmQuY2xhc3NMaXN0LmFkZCgndG9wJyk7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsb2NhdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb25Gb3JtJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgc2VhcmNoYmFyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHNlYXJjaEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgc2VhcmNoQnRuLmlubmVySFRNTCA9ICdTZWFyY2gnO1xuXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hFcnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgICAgICAgIHNlYXJjaEVyci5pZCA9ICgnc2VhcmNoRXJyJyk7XG4gICAgICAgICAgICAgICAgc2VhcmNoRXJyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIHNlYXJjaEVyci5pbm5lckhUTUwgPSAnQ2l0eSBub3QgZm91bmQuJ1xuXG4gICAgICAgICAgICBzZWFyY2hCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyTG9jYXRpb24gPSBzZWFyY2hiYXIudmFsdWU7XG4gICAgICAgICAgICAgICAgZGlzcGxheVdlYXRoZXIoY3VyckxvY2F0aW9uKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZWFyY2hiYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICBjdXJyTG9jYXRpb24gPSBzZWFyY2hiYXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlXZWF0aGVyKGN1cnJMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxvY2F0aW9uRm9ybS5hcHBlbmQoc2VhcmNoYmFyLCBzZWFyY2hCdG4sIHNlYXJjaEVycik7XG5cbiAgICAgICAgLy9Ub2dnbGUgc3dpdGNoIHN0eWxlIHVuaXQgc2VsZWN0b3JcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVuaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVuaXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndW5pdENvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBjb25zdCB1bml0U3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICB1bml0U3dpdGNoLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHVuaXRDaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgdW5pdENoZWNrLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVVbml0cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdExhYmVsLmlubmVySFRNTCA9PT0gJ01ldHJpYycgPyB1bml0TGFiZWwuaW5uZXJIVE1MID0gJ0ltcGVyaWFsJyA6IHVuaXRMYWJlbC5pbm5lckhUTUwgPSAnTWV0cmljJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlXZWF0aGVyKGN1cnJMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicsICdyb3VuZCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHVuaXRTd2l0Y2guYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICB1bml0Q2hlY2ssXG4gICAgICAgICAgICAgICAgICAgIHNwYW5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB1bml0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgICAgICAgICAgICB1bml0TGFiZWwuaWQgPSAndW5pdExhYmVsJztcbiAgICAgICAgICAgICAgICAgICAgdW5pdExhYmVsLmlubmVySFRNTCA9ICdNZXRyaWMnO1xuXG4gICAgICAgICAgICB1bml0Q29udGFpbmVyLmFwcGVuZCh1bml0U3dpdGNoLCB1bml0TGFiZWwpO1xuICAgICAgICBcbiAgICAgICAgdG9wVGhpcmQuYXBwZW5kKGxvY2F0aW9uRm9ybSwgdW5pdENvbnRhaW5lcilcblxuICAgIGNvbnN0IGJvdHRvbUFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYm90dG9tQW5pbWF0aW9uLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbScpO1xuICAgICAgICAgICAgYW5pbWF0ZURvdHMoYm90dG9tQW5pbWF0aW9uKTtcblxuICAgIGJvZHkuYXBwZW5kKHRvcFRoaXJkLCBib3R0b21BbmltYXRpb24pO1xuICAgIFxuICAgIGRpc3BsYXlXZWF0aGVyKGN1cnJMb2NhdGlvbik7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIgKGlucHV0KSB7XG5cbiAgICAvL0NyZWF0ZSBhIGNvbnRhaW5lciBmb3IgYWxsIHdlYXRoZXIgaW5mbywgYmFzZWQgb24gYSBjdXN0b20gd2VhdGhlciBvYmplY3Qgd2l0aCBkYXRhIGZldGNoZWQgZnJvbSBBUEkuXG5cbiAgICAvL0NsZWFuIHVwIHBhZ2UgZm9yIG5ldyBpbmZvXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRXJyJykuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgXG4gICAgbGV0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaFdlYXRoZXIoaW5wdXQpO1xuXG4gICAgaWYgKCF3ZWF0aGVyKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hFcnInKS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IG9sZFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcicpO1xuXG4gICAgaWYgKG9sZFdlYXRoZXIpIHtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChvbGRXZWF0aGVyKTtcbiAgICB9XG5cbiAgICAvL0dyYXBoaWMgc3BsaXQgaW50byB0aHJlZSBzZWN0aW9uczpcblxuICAgIC8vVG9wbGluZSB3aXRoIG5hbWUsIGljb24uXG4gICAgLy9TZWNvbmQgTGluZSB3aXRoIGN1cnJlbnQgdGVtcCwgZGVzY3JpcHRpb24uXG4gICAgLy9UYWJsZSB3aXRoIHRlcnRpYXJ5IGluZm8uXG5cblxuICAgIGNvbnN0IHdlYXRoZXJEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlYXRoZXJEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXInKTtcblxuICAgICAgICBjb25zdCB0b3BsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b3BsaW5lLmNsYXNzTGlzdC5hZGQoJ3RvcGxpbmUnKTtcblxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICAgICAgICAgICAgbmFtZS5pbm5lckhUTUwgPSB3ZWF0aGVyLm5hbWVcblxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGljb24uc3JjID0gJ2h0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8nICsgd2VhdGhlci5pY29uICsgJ0A0eC5wbmcnO1xuXG4gICAgICAgICAgICB0b3BsaW5lLmFwcGVuZChuYW1lLCBpY29uKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHNlY29uZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNlY29uZGxpbmUuY2xhc3NMaXN0LmFkZCgnc2Vjb25kbGluZScpO1xuXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB3ZWF0aGVyLm1haW47XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgICAgICBtYWluVGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XG4gICAgICAgICAgICAgICAgbWFpblRlbXAuaW5uZXJIVE1MID0gd2VhdGhlci50ZW1wICsgJ8KwJztcblxuICAgICAgICAgICAgc2Vjb25kbGluZS5hcHBlbmQobWFpblRlbXAsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgZGF0YVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuICAgICAgICAgICAgY29uc3QgaGlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGhpTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBoaUxhYmVsLmlubmVySFRNTCA9ICdIaWdoOic7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgaGlUZW1wLmlubmVySFRNTCA9IHdlYXRoZXIubWF4ICsgJ8KwJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBoaVJvdy5hcHBlbmQoaGlMYWJlbCwgaGlUZW1wKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbG9Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGxvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBsb0xhYmVsLmlubmVySFRNTCA9ICdMb3c6JztcbiAgICAgICAgICAgICAgICBjb25zdCBsb1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBsb1RlbXAuaW5uZXJIVE1MID0gd2VhdGhlci5taW4gKyAnwrAnO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxvUm93LmFwcGVuZChsb0xhYmVsLCBsb1RlbXApO1xuXG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZmVlbHNSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGZlZWxzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBmZWVsc0xhYmVsLmlubmVySFRNTCA9ICdGZWVscyBMaWtlOic7XG4gICAgICAgICAgICAgICAgY29uc3QgZmVlbHNUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgZmVlbHNUZW1wLmlubmVySFRNTCA9IHdlYXRoZXIuZmVlbHMgKyAnwrAnO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZlZWxzUm93LmFwcGVuZChmZWVsc0xhYmVsLCBmZWVsc1RlbXApO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGh1bWlkaXR5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGh1bWlkaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBodW1pZGl0eUxhYmVsLmlubmVySFRNTCA9ICdIdW1pZGl0eTonO1xuICAgICAgICAgICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgaHVtaWRpdHkuaW5uZXJIVE1MID0gd2VhdGhlci5odW1pZGl0eTtcblxuICAgICAgICAgICAgICAgIGh1bWlkaXR5Um93LmFwcGVuZChodW1pZGl0eUxhYmVsLCBodW1pZGl0eSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHdpbmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZExhYmVsLmlubmVySFRNTCA9ICdXaW5kOic7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmQuaW5uZXJIVE1MID0gd2VhdGhlci53aW5kO1xuICAgICAgICAgICAgICAgICAgICBtZXRyaWMgPyB3aW5kLmlubmVySFRNTCArPSAna3BoJyA6IHdpbmQuaW5uZXJIVE1MICs9ICdtcGgnXG5cbiAgICAgICAgICAgICAgICB3aW5kUm93LmFwcGVuZCh3aW5kTGFiZWwsIHdpbmQpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHN1bnJpc2VSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VucmlzZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgc3VucmlzZUxhYmVsLmlubmVySFRNTCA9ICdTdW5yaXNlOidcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1bnJpc2VEYXRlID0gbmV3IERhdGUod2VhdGhlci5zdW5yaXNlICogMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHN1bnJpc2UuaW5uZXJIVE1MID0gc3VucmlzZURhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSk7XG5cbiAgICAgICAgICAgICAgICBzdW5yaXNlUm93LmFwcGVuZChzdW5yaXNlTGFiZWwsIHN1bnJpc2UpO1xuXG4gICAgICAgICAgICBjb25zdCBzdW5zZXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Vuc2V0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBzdW5zZXRMYWJlbC5pbm5lckhUTUwgPSAnU3Vuc2V0OidcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgc3Vuc2V0RGF0ZSA9IG5ldyBEYXRlKHdlYXRoZXIuc3Vuc2V0ICogMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHN1bnNldC5pbm5lckhUTUwgPSBzdW5zZXREYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICAgICAgc3Vuc2V0Um93LmFwcGVuZChzdW5zZXRMYWJlbCwgc3Vuc2V0KTtcblxuICAgICAgICAgICAgZGF0YVRhYmxlLmFwcGVuZChoaVJvdywgbG9Sb3csIGZlZWxzUm93LCBodW1pZGl0eVJvdywgd2luZFJvdywgc3VucmlzZVJvdywgc3Vuc2V0Um93KTtcblxuICAgICAgICB3ZWF0aGVyRGlzcGxheS5hcHBlbmQodG9wbGluZSwgc2Vjb25kbGluZSwgZGF0YVRhYmxlKTtcblxuICAgIGJvZHkuYXBwZW5kKHdlYXRoZXJEaXNwbGF5KTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZURvdHMgKGVsKSB7XG5cbiAgICAvL0dlbmVyYXRlcywgYXBwZW5kcywgYW5kIHJlbW92ZXMgYmxhbmsgZGl2IGVsZW1lbnRzIHdpdGggZG90IGNsYXNzIG9uIHJhbmRvbSBpbnRlcnZhbC5cbiAgICAvL0FsbCBzdHlsaXphdGlvbiBpbiBDU1NcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcblxuICAgICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgICAgIGRvdC5zdHlsZS5sZWZ0ID0gKE1hdGgucmFuZG9tKCkgKiAxMDApLnRvU3RyaW5nKCkgKyAnJSc7XG4gICAgICAgICAgICBkb3Quc3R5bGUuYm90dG9tID0gKE1hdGgucmFuZG9tKCkgKiAxMDApLnRvU3RyaW5nKCkgKyAnJSc7XG5cbiAgICAgICAgICAgIGVsLmFwcGVuZChkb3QpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmVDaGlsZChkb3QpXG4gICAgICAgICAgICB9LCAzMDAwKVxuXG4gICAgfSwgTWF0aC5yYW5kb20oKSAqIDIwMCk7XG59XG5cbmV4cG9ydCB7XG4gICAgbG9hZFVJXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7bG9hZFVJfSBmcm9tICcuL3VpLmpzJ1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5cbmxvYWRVSSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9