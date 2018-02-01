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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Get's mah sass
//Create default page
var Page =
/*#__PURE__*/
function () {
  function Page() {
    _classCallCheck(this, Page);

    this.page = "<header class=\"header\">\n            <h1>API Mashup!</h1>\n            <h2>stuff will go here</h2>\n            <form>\n                <input type=\"search\"\n                       placeholder=\"Search\"\n                       id=\"searchString\">\n                <button id=\"searchButton\">\n                Go!\n                </button>\n                </form>\n            </header>\n            <main class=\"main\">\n            <p>Hello world</p>\n            </main>\n            <aside class=\"sidebar\">\n                <ul>\n                <li><a href=\"#\">2</a></li>\n                <li>2</li>\n                <li>3</li>\n                <li>4</li>\n                </ul>\n            </aside>\n            <footer>\n            <p>\n            With the help of Big Huge Thesaurus and Flickr\n            </p>\n            </footer>";
    this.searchbutton = document.getElementById('searchButton');
    this.searchbar = document.getElementById('searchString');
    this.main = document.querySelector('main');
    this.sidebar = document.querySelector('sidebar');
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      document.open();
      document.write(this.page);
      document.close();
    }
  }]);

  return Page;
}();

var page = new Page(); // Instance page

page.render(); //  Render page

document.getElementById('searchButton').addEventListener('click', search);

function search() {
  var pokenumber = getSearchString();
  var apiSource = "http://pokeapi.co/api/v2/type/".concat(pokenumber);
  var myRequest = new Request(apiSource);
  var myURL = myRequest.url;
  var myMethod = myRequest.method;
  var myCred = myRequest.credentials;
  fetch(myRequest).then(function (response) {
    if (response.status === 200) {
      return response.json();
      debugger;
    } else {
      throw new Error('Something went wrong on api server!');
    }
  }).then(function (response) {
    renderResult(response);
    debugger; // ...
  }).catch(function (error) {
    console.error(error);
  });

  function getSearchString() {
    event.preventDefault();
    return document.getElementById('searchString').value;
  }

  function parse(blob) {
    debugger;
    console.log(pokeOb);
    debugger;
    return pokeList;
  }

  function renderResult(blob) {
    var pokeOb = blob['pokemon'];
    var parsedBlob = parse(pokeOb);
    var pokemon = document.createTextNode(parsedBlob);
    document.querySelector('main').appendChild(pokemon);
  }
}

var Image = function Image(url, alt) {
  _classCallCheck(this, Image);

  this.url = url;
  this.alt = alt;
  this.html = "\n        <img src=\"".concat(this.url, "\" \n             alt=\"").concat(this.alt, "\">");
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);