module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/modules/rootReducer.ts":
/*!************************************!*\
  !*** ./src/modules/rootReducer.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tasksModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksModule */ "./src/modules/tasksModule.tsx");
/* harmony import */ var _userModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userModule */ "./src/modules/userModule.tsx");



const rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  tasks: _tasksModule__WEBPACK_IMPORTED_MODULE_1__["default"].reducer,
  user: _userModule__WEBPACK_IMPORTED_MODULE_2__["default"].reducer
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/modules/store.ts":
/*!******************************!*\
  !*** ./src/modules/store.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ "./src/modules/rootReducer.ts");


const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/modules/tasksModule.tsx":
/*!*************************************!*\
  !*** ./src/modules/tasksModule.tsx ***!
  \*************************************/
/*! exports provided: init, Register, allDelete, taskCheckComplete, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDelete", function() { return allDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskCheckComplete", function() { return taskCheckComplete; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  userTaskInfo: {
    calendar: {
      [new Date("Thu, 22 May 2020 02:00:00").getFullYear()]: {
        [new Date("Thu, 22 May 2020 02:00:00").getMonth() + 1]: {
          [new Date("Thu, 22 May 2020 02:00:00").getDate()]: {
            PatternId: 1,
            tasks: [{
              order: 1,
              detail1: "testDetail1 22 1",
              detail2: "testDetail2 22 1",
              flug: false
            }, {
              order: 2,
              detail1: "testDetail1 22 2",
              detail2: "testDetail2 22 2",
              flug: false
            }]
          },
          [new Date("Thu, 23 May 2020 02:00:00").getDate()]: {
            PatternId: 1,
            tasks: [{
              order: 1,
              detail1: "testDetail1 23 1",
              detail2: "testDetail2 23 1",
              flug: false
            }, {
              order: 2,
              detail1: "testDetail1 23 2",
              detail2: "testDetail2 23 2",
              flug: false
            }]
          }
        }
      }
    },
    //             [date: number]: {
    //                 PatternId: number;
    //                 tasks: {
    //                     detail1: string;
    //                     detail2: string;
    //                     flug: boolean;
    //                 }[];
    //             }[];
    //         }[];
    //     }[];
    // ]
    // year: new Date("Thu, 22 May 2020 02:00:00").getFullYear(),[{
    //     month: new Date("Thu, 22 May 2020 02:00:00").getMonth() + 1,[{
    //         date: new Date("Thu, 22 May 2020 02:00:00").getDate(),[{
    //             PatternId: 1,
    //             tasks: [
    //                 {
    //                     detail1: "testDetail1 22 1",
    //                     detail2: "testDetail2 22 1",
    //                     flug: false,
    //                 },
    //                 {
    //                     detail1: "testDetail1 22 2",
    //                     detail2: "testDetail2 22 2",
    //                     flug: false,
    //                 },
    //             ],
    //         }]
    //     }]
    // }]
    // {
    //     year: new Date("Thu, 23 May 2020 02:00:00").getFullYear(),
    //     month: new Date("Thu, 23 May 2020 02:00:00").getMonth() + 1,
    //     date: new Date("Thu, 23 May 2020 02:00:00").getDate(),
    //     PatternId: 2,
    //     tasks: [
    //         {
    //             detail1: "testDetail1 23 1",
    //             detail2: "testDetail2 23 1",
    //             flug: false,
    //         },
    //         {
    //             detail1: "testDetail1 23 2",
    //             detail2: "testDetail2 23 2",
    //             flug: false,
    //         },
    //     ],
    // },
    pattern: [{
      patternId: 1,
      patternName: "testPattern1"
    }, {
      patternId: 2,
      patternName: "testPattern2"
    }],
    tasks: [{
      detail1: "testDetail1A",
      detail2: "testDetail2A",
      patternInfo: [{
        patternID: 1,
        order: 1
      }]
    }, {
      detail1: "testDetail1B",
      detail2: "testDetail2B",
      patternInfo: [{
        patternID: 1,
        order: 2
      }]
    }, {
      detail1: "testDetail1C",
      detail2: "testDetail2C",
      patternInfo: [{
        patternID: 2,
        order: 1
      }, {
        patternID: 1,
        order: 3
      }]
    }, {
      detail1: "testDetail1D",
      detail2: "testDetail2D",
      patternInfo: [{
        patternID: 2,
        order: 2
      }]
    }]
  }
};
const tasksModule = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "tasks",
  initialState,
  reducers: {
    init(state, action) {
      const data = action.payload;
      console.log("init data");
      console.log(data); // state = {...data};

      console.log("init state.userTaskInfo.calendar 前"); // console.log(state.userTaskInfo.calendar[0].PatternId);

      state.userTaskInfo = data;
      console.log("init state.userTaskInfo.calendar 後");
      console.log(state); // console.log(state.userTaskInfo.calendar[0]);
    },

    Register(state, action) {
      const data = action.payload;
      state = _objectSpread(_objectSpread({}, state), data); // console.log('state');
      // console.log(state);
    },

    allDelete(state) {
      state = initialState;
      console.log("check allDelete");
    },

    // DayPlanにてタスクをクリックした際に完了フラグをtrueに変更する処理。引数にて年、月、日、タスクのインデックス番号を受け取っている。
    taskCheckComplete(state, action) {
      const index = state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks.findIndex(tasks => tasks.order == action.payload[3]);
      console.log(index);
      state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[index].flug = !state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[index].flug;
    }

  }
});
const {
  init,
  Register,
  allDelete,
  taskCheckComplete
} = tasksModule.actions;
/* harmony default export */ __webpack_exports__["default"] = (tasksModule);

/***/ }),

/***/ "./src/modules/userModule.tsx":
/*!************************************!*\
  !*** ./src/modules/userModule.tsx ***!
  \************************************/
/*! exports provided: login, logout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  userId: ''
};
const userModule = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      console.log('login'); // console.log(action.payload);

      console.log(state.userId);
      state.userId = action.payload;
      console.log(state.userId);
    },

    logout(state) {
      console.log('logout');
      state.userId = '';
    }

  }
});
const {
  login,
  logout
} = userModule.actions;
/* harmony default export */ __webpack_exports__["default"] = (userModule);

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/store */ "./src/modules/store.ts");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const HabitPlanApp = ({
  Component,
  pageProps
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HabitPlanApp);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcm9vdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VzZXJNb2R1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidGFza3MiLCJ0YXNrc01vZHVsZSIsInJlZHVjZXIiLCJ1c2VyIiwidXNlck1vZHVsZSIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJ1c2VyVGFza0luZm8iLCJjYWxlbmRhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsIlBhdHRlcm5JZCIsIm9yZGVyIiwiZGV0YWlsMSIsImRldGFpbDIiLCJmbHVnIiwicGF0dGVybiIsInBhdHRlcm5JZCIsInBhdHRlcm5OYW1lIiwicGF0dGVybkluZm8iLCJwYXR0ZXJuSUQiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluaXQiLCJzdGF0ZSIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsIlJlZ2lzdGVyIiwiYWxsRGVsZXRlIiwidGFza0NoZWNrQ29tcGxldGUiLCJpbmRleCIsImZpbmRJbmRleCIsImFjdGlvbnMiLCJ1c2VySWQiLCJsb2dpbiIsImxvZ291dCIsIkhhYml0UGxhbkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9w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Q0FBWUwsS0FBSyxDQUFDWSxNQUFsQjtBQUNBWixXQUFLLENBQUNZLE1BQU4sR0FBZVgsTUFBTSxDQUFDRSxPQUF0QjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBSyxDQUFDWSxNQUFsQjtBQUNILEtBUEs7O0FBUU5FLFVBQU0sQ0FBQ2QsS0FBRCxFQUFlO0FBQ2pCSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FMLFdBQUssQ0FBQ1ksTUFBTixHQUFlLEVBQWY7QUFDSDs7QUFYSztBQUhpQixDQUFELENBQTlCO0FBbUJPLE1BQU07QUFBRUMsT0FBRjtBQUFTQztBQUFULElBQW9CdEMsVUFBVSxDQUFDbUMsT0FBckM7QUFFUW5DLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBRUE7QUFDQTs7QUFJQSxNQUFNdUMsWUFBWSxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBd0M7QUFDM0QsU0FDRSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFeEMsc0RBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZXdDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREY7QUFLRCxDQU5EOztBQVFlRiwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHRhc2tzTW9kdWxlIGZyb20gJy4vdGFza3NNb2R1bGUnO1xyXG5pbXBvcnQgdXNlck1vZHVsZSBmcm9tICcuL3VzZXJNb2R1bGUnO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgdGFza3M6IHRhc2tzTW9kdWxlLnJlZHVjZXIsXHJcbiAgICB1c2VyOiB1c2VyTW9kdWxlLnJlZHVjZXJcclxufSlcclxuXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXIiLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXJcclxufSlcclxuXHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZSIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHtcclxuICAgIGNhbGVuZGFyLFxyXG4gICAgcGF0dGVybixcclxuICAgIHRhc2tzLFxyXG4gICAgdXNlclRhc2ssXHJcbiAgICB1c2VyVGFza0luZm8sXHJcbn0gZnJvbSBcIi4vdXNlclRhc2tzVHlwZVwiO1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogdXNlclRhc2sgPSB7XHJcbiAgICB1c2VyVGFza0luZm86IHtcclxuICAgICAgICBjYWxlbmRhcjogXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKV06IHtcclxuICAgICAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldE1vbnRoKCkgKyAxXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjoxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMiAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjoyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMiAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIzIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjoxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMiAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjoyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMiAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBbZGF0ZTogbnVtYmVyXToge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgUGF0dGVybklkOiBudW1iZXI7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0YXNrczoge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRldGFpbDE6IHN0cmluZztcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZmx1ZzogYm9vbGVhbjtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVtdO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgLy8gICAgIH1bXTtcclxuXHJcbiAgICAgICAgICAgIC8vIF1cclxuICAgICAgICAgICAgLy8geWVhcjogbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCksW3tcclxuICAgICAgICAgICAgLy8gICAgIG1vbnRoOiBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDEsW3tcclxuICAgICAgICAgICAgLy8gICAgICAgICBkYXRlOiBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpLFt7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIyIDFcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMiAyMiAyXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICB9XVxyXG5cclxuICAgICAgICAgICAgLy8gICAgIH1dXHJcblxyXG4gICAgICAgICAgICAvLyB9XVxyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgICB5ZWFyOiBuZXcgRGF0ZShcIlRodSwgMjMgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgLy8gICAgIG1vbnRoOiBuZXcgRGF0ZShcIlRodSwgMjMgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDEsXHJcbiAgICAgICAgICAgIC8vICAgICBkYXRlOiBuZXcgRGF0ZShcIlRodSwgMjMgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgICAvLyAgICAgUGF0dGVybklkOiAyLFxyXG4gICAgICAgICAgICAvLyAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIzIDFcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIzIDJcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGF0dGVybjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogXCJ0ZXN0UGF0dGVybjFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiAyLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4yXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxQVwiLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMkFcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxQlwiLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMkJcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxQ1wiLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMkNcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxRFwiLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMkRcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgdGFza3NNb2R1bGUgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInRhc2tzXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGluaXQoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dXNlclRhc2tJbmZvPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBkYXRhXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgLy8gc3RhdGUgPSB7Li4uZGF0YX07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIg5YmNXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbMF0uUGF0dGVybklkKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvID0gZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbml0IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhciDlvoxcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyWzBdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJUYXNrPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIC4uLmRhdGEgfTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXRlJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFsbERlbGV0ZShzdGF0ZTogdXNlclRhc2spIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgYWxsRGVsZXRlXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gRGF5UGxhbuOBq+OBpuOCv+OCueOCr+OCkuOCr+ODquODg+OCr+OBl+OBn+mam+OBq+WujOS6huODleODqeOCsOOCknRydWXjgavlpInmm7TjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjgablubTjgIHmnIjjgIHml6XjgIHjgr/jgrnjgq/jga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLlj5fjgZHlj5bjgaPjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrQ2hlY2tDb21wbGV0ZShzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXJbXT4pIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW2FjdGlvbi5wYXlsb2FkWzFdXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3MuZmluZEluZGV4KCh0YXNrcykgPT4gdGFza3Mub3JkZXIgPT0gYWN0aW9uLnBheWxvYWRbM10pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bYWN0aW9uLnBheWxvYWRbMV1dW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrc1tpbmRleF0uZmx1ZyA9ICFzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW2FjdGlvbi5wYXlsb2FkWzFdXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3NbaW5kZXhdLmZsdWc7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIGluaXQsXHJcbiAgICBSZWdpc3RlcixcclxuICAgIGFsbERlbGV0ZSxcclxuICAgIHRhc2tDaGVja0NvbXBsZXRlLFxyXG59ID0gdGFza3NNb2R1bGUuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tzTW9kdWxlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuICAgIHVzZXJJZDogJydcclxufTtcclxuXHJcbmNvbnN0IHVzZXJNb2R1bGUgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInVzZXJcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgbG9naW4oc3RhdGU6IFN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4nKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS51c2VySWQpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VySWQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudXNlcklkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ291dChzdGF0ZTogU3RhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ291dCcpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VySWQgPSAnJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0IH0gPSB1c2VyTW9kdWxlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyTW9kdWxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9tb2R1bGVzL3N0b3JlJztcclxuXHJcblxyXG5cclxuY29uc3QgSGFiaXRQbGFuQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhYml0UGxhbkFwcDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=