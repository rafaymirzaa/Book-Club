/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Book: () => (/* binding */ Book)\n/* harmony export */ });\n\n\nclass Book {\n  constructor(title, author, pages, isRead) {\n    this.title = title;\n    this.author = author;\n    this.pages = pages;\n    this.isRead = isRead;\n  }\n}\n\n\n\n//# sourceURL=webpack://library/./src/book.js?\n}");

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBook: () => (/* binding */ addBook),\n/* harmony export */   deleteBook: () => (/* binding */ deleteBook),\n/* harmony export */   myLibrary: () => (/* binding */ myLibrary)\n/* harmony export */ });\n/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.js */ \"./src/book.js\");\n// src/library.js\n\n\nconst myLibrary = [];\n\nfunction addBook(book) {\n  myLibrary.push(book);\n}\n\nfunction deleteBook(index) {\n  myLibrary.splice(index, 1);\n}\n\n\n//# sourceURL=webpack://library/./src/library.js?\n}");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n// src/main.js\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  document.getElementById(\"addBookBtn\").addEventListener(\"click\", _ui_js__WEBPACK_IMPORTED_MODULE_0__.addBookRow);\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.displayBooks)();\n});\n\n\n//# sourceURL=webpack://library/./src/main.js?\n}");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBookRow: () => (/* binding */ addBookRow),\n/* harmony export */   displayBooks: () => (/* binding */ displayBooks)\n/* harmony export */ });\n/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.js */ \"./src/library.js\");\n/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book.js */ \"./src/book.js\");\n// src/ui.js\n\n\n\nfunction displayBooks() {\n  const container = document.getElementById(\"tableContainer\");\n\n  if (_library_js__WEBPACK_IMPORTED_MODULE_0__.myLibrary.length === 0) {\n    container.innerHTML = \"<p>No books in library yet.</p>\";\n    return;\n  }\n\n  let tableHTML = `\n    <table id=\"bookTable\">\n      <tr>\n        <th>Title</th>\n        <th>Author</th>\n        <th>Pages</th>\n        <th>Status</th>\n        <th>Action</th>\n      </tr>\n  `;\n\n  _library_js__WEBPACK_IMPORTED_MODULE_0__.myLibrary.forEach((book, index) => {\n    tableHTML += `\n      <tr>\n        <td>${book.title}</td>\n        <td>${book.author}</td>\n        <td>${book.pages}</td>\n        <td>${book.isRead}</td>\n        <td><button class=\"deleteBtn\" data-index=\"${index}\">Delete</button></td>\n      </tr>\n    `;\n  });\n\n  tableHTML += \"</table>\";\n  container.innerHTML = tableHTML;\n\n  document.querySelectorAll(\".deleteBtn\").forEach((btn) => {\n    btn.addEventListener(\"click\", (e) => {\n      const index = e.target.getAttribute(\"data-index\");\n      (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.deleteBook)(index);\n      displayBooks();\n    });\n  });\n}\n\nfunction addBookRow() {\n  const container = document.getElementById(\"tableContainer\");\n\n  let table = document.getElementById(\"bookTable\");\n  if (!table) {\n    container.innerHTML = `\n      <table id=\"bookTable\">\n        <tr>\n          <th>Title</th>\n          <th>Author</th>\n          <th>Pages</th>\n          <th>Status</th>\n          <th>Action</th>\n        </tr>\n      </table>\n    `;\n    table = document.getElementById(\"bookTable\");\n  }\n\n  const newRow = document.createElement(\"tr\");\n  newRow.innerHTML = `\n    <td><input type=\"text\" id=\"titleInput\" placeholder=\"Book title\"></td>\n    <td><input type=\"text\" id=\"authorInput\" placeholder=\"Author\"></td>\n    <td><input type=\"number\" id=\"pagesInput\" placeholder=\"Pages\"></td>\n    <td>\n      <select id=\"isReadInput\">\n        <option value=\"No\">Not Read</option>\n        <option value=\"Yes\">Read</option>\n      </select>\n    </td>\n    <td><button id=\"saveBookBtn\">Save</button></td>\n  `;\n  table.appendChild(newRow);\n\n  document.getElementById(\"saveBookBtn\").addEventListener(\"click\", () => {\n    const title = document.getElementById(\"titleInput\").value.trim();\n    const author = document.getElementById(\"authorInput\").value.trim();\n    const pages = document.getElementById(\"pagesInput\").value.trim();\n    const isRead = document.getElementById(\"isReadInput\").value;\n\n    if (!title || !author || !pages) {\n      alert(\"Please fill out all fields!\");\n      return;\n    }\n\n    (0,_library_js__WEBPACK_IMPORTED_MODULE_0__.addBook)(new _book_js__WEBPACK_IMPORTED_MODULE_1__.Book(title, author, pages, isRead));\n    displayBooks();\n  });\n}\n\n\n//# sourceURL=webpack://library/./src/ui.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;