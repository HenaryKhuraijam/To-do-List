/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktask_organiser"] = self["webpackChunktask_organiser"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n\n\n\nconst tasks = new _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst addTaskBtn = document.getElementById('addBtn');\n\naddTaskBtn.addEventListener('click', () => {\n  tasks.addTask();\n});\n\nconst clearBtn = document.getElementById('clearBtn');\nclearBtn.addEventListener('click', () => {\n  tasks.clearComplete();\n});\n\n//# sourceURL=webpack://task-organiser/./src/index.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\\n| \\n| $primary-color: #2fa8cc;\");\n\n//# sourceURL=webpack://task-organiser/./src/styles/main.scss?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(desc, isComplete) {\n    this.desc = desc;\n    this.isComplete = isComplete;\n  }\n}\n\n//# sourceURL=webpack://task-organiser/./src/task.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\n\nclass Tasks {\n  constructor() {\n    this.tasksList = document.getElementById('listContainer');\n    this.taskDesc = document.getElementById('desc');\n    this.tasksArray = [];\n    if (localStorage.getItem('TaskStorage')) {\n      this.tasksArray = JSON.parse(localStorage.getItem('TaskStorage'));\n      this.tasksDisplay();\n    }\n  }\n\n  addTask = () => {\n    const desc = this.taskDesc.value;\n    const isComplete = false;\n    const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](desc, isComplete);\n    this.tasksArray.push(task);\n    this.tasksDisplay();\n    this.saveToLocalStorage();\n    this.taskDesc.value = '';\n  };\n\n  saveToLocalStorage = () => {\n    localStorage.setItem('TaskStorage', JSON.stringify(this.tasksArray));\n  };\n\n  tasksDisplay = () => {\n    this.tasksArray.forEach((task, index) => {\n      this.tasksHtml = (desc) => `        <div class=\"task-container\">\n      <input type=\"checkbox\" id=\"checkBox\"></input>\n      <input class=\"task-desc\" type=\"text\" id=\"taskDesc\" value=\"${desc}\"</input>\n      <button id=\"removeBtn\">x</button> \n      </div>`;\n      const htmlToAdd = this.tasksHtml(task.desc, task.isComplete);\n      this.tasksList.insertAdjacentHTML('afterbegin', htmlToAdd);\n      this.checkBox = document.getElementById('checkBox');\n      if (this.tasksArray[index].isComplete === true) {\n        this.checkBox.checked = true;\n      } else {\n        this.checkBox.checked = false;\n      }\n      this.checkBox.addEventListener('change', (event) => {\n        if (event.currentTarget.checked) {\n          this.tasksArray[index].isComplete = true;\n        } else {\n          this.tasksArray[index].isComplete = false;\n        }\n        this.saveToLocalStorage();\n      });\n      this.removeBtn = document.getElementById('removeBtn');\n      this.removeBtn.onclick = () => this.removeTask(index);\n      this.taskDescription = document.getElementById('taskDesc');\n      this.taskDescription.addEventListener('change', () => {\n        this.editTask(index);\n      });\n    });\n  }\n\n  removeTask = (index) => {\n    this.tasksArray.splice(index, 1);\n    this.tasksList.innerHTML = '';\n    this.tasksDisplay();\n    this.saveToLocalStorage();\n  };\n\n  clearComplete = () => {\n    this.tasksArray = this.tasksArray.filter((task) => task.isComplete === false);\n    this.tasksList.innerHTML = '';\n    this.tasksDisplay();\n    this.saveToLocalStorage();\n  }\n\n  editTask = (index) => {\n    this.tasksArray[index].desc = this.taskDescription.value;\n    this.saveToLocalStorage();\n  }\n}\n\n//# sourceURL=webpack://task-organiser/./src/tasks.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);