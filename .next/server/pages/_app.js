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

/***/ "./src/components/test/firebaseTest/firebaseTest.tsx":
/*!***********************************************************!*\
  !*** ./src/components/test/firebaseTest/firebaseTest.tsx ***!
  \***********************************************************/
/*! exports provided: firebase, auth, database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);
 // 認証周りやDB周りで必要なためimportしておく



const firebaseConfig = {
  apiKey: "AIzaSyBUSUAknhe3IUR0uR0odWwSC5hfAmMgokk",
  authDomain: "habit-plan.firebaseapp.com",
  databaseURL: "https://habit-plan.firebaseio.com",
  projectId: "habit-plan",
  storageBucket: "habit-plan.appspot.com",
  messagingSenderId: "389810166808",
  appId: "1:389810166808:web:0f225badb3dea063fef76d",
  measurementId: "G-00XKHK2GY2"
};

if (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length === 0) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
}

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const database = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.database();


/***/ }),

/***/ "./src/modules/reducer.ts":
/*!********************************!*\
  !*** ./src/modules/reducer.ts ***!
  \********************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log('reducer ADD_TODO');
      return state + 1;

    case "TOGGLE_TODO":
      console.log('reducer ADD_TODO');

    default:
      return state;
  }
};

/***/ }),

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

/***/ "./src/modules/store.tsx":
/*!*******************************!*\
  !*** ./src/modules/store.tsx ***!
  \*******************************/
/*! exports provided: Stores, StoreProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stores", function() { return Stores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProvider", function() { return StoreProvider; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/modules/reducer.ts");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ "./src/modules/rootReducer.ts");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\modules\\store.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
const initialState = 0;
const Stores = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(initialState);
const StoreProvider = ({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useReducer(_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"], initialState);
  return __jsx(Stores.Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, " ", children, " ");
};
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/modules/tasksModule.tsx":
/*!*************************************!*\
  !*** ./src/modules/tasksModule.tsx ***!
  \*************************************/
/*! exports provided: init, Register, allDelete, taskCheckComplete, calendarPatternRegister, taskDetailRegister, taskRegister, taskPatternUpdate, taskDelete, taskRemovePattern, patternRegister, patternDelete, patternNameEdit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDelete", function() { return allDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskCheckComplete", function() { return taskCheckComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarPatternRegister", function() { return calendarPatternRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskDetailRegister", function() { return taskDetailRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskRegister", function() { return taskRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskPatternUpdate", function() { return taskPatternUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskDelete", function() { return taskDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskRemovePattern", function() { return taskRemovePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternRegister", function() { return patternRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternDelete", function() { return patternDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternNameEdit", function() { return patternNameEdit; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/test/firebaseTest/firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  userId: '',
  userTaskInfo: {
    calendar: {
      [new Date("Thu, 22 Oct 2020 02:00:00").getFullYear()]: {
        [new Date("Thu, 22 Oct 2020 02:00:00").getMonth() + 1]: {
          [new Date("Thu, 22 Oct 2020 02:00:00").getDate()]: {
            PatternId: 1,
            tasks: [{
              order: 1,
              detail: {
                ["タスク名"]: "タスク名 22 1",
                ["testDetail1"]: "testDetail1 22 1",
                ["testDetail2"]: "testDetail1 22 1"
              },
              flug: false
            }, {
              order: 2,
              detail: {
                ["タスク名"]: "タスク名 22 2",
                ["testDetail1"]: "testDetail1 22 2",
                ["testDetail2"]: "testDetail1 22 2"
              },
              flug: false
            }]
          },
          [new Date("Thu, 23 Oct 2020 02:00:00").getDate()]: {
            PatternId: 1,
            tasks: [{
              order: 1,
              detail: {
                ["タスク名"]: "タスク名 23 1",
                ["testDetail1"]: "testDetail1 23 1",
                ["testDetail2"]: "testDetail1 23 1"
              },
              flug: false
            }, {
              order: 2,
              detail: {
                ["タスク名"]: "タスク名 23 2",
                ["testDetail1"]: "testDetail1 23 2",
                ["testDetail2"]: "testDetail1 23 2"
              },
              flug: false
            }]
          }
        }
      }
    },
    pattern: [{
      patternId: 1,
      patternName: "testPattern1"
    }, {
      patternId: 2,
      patternName: "testPattern2"
    }],
    tasks: [{
      detail: {
        ["タスク名"]: "タスク名 22 1",
        ["defalut"]: "defalut",
        ["testDetail1"]: "testDetail1 22 1",
        ["testDetail2"]: "testDetail1 22 1"
      },
      patternInfo: [{
        patternID: 1,
        order: 1
      }]
    }, {
      detail: {
        ["タスク名"]: "タスク名 22 2",
        ["defalut"]: "defalut",
        ["testDetail1"]: "testDetail1 22 2",
        ["testDetail2"]: "testDetail1 22 2"
      },
      patternInfo: [{
        patternID: 1,
        order: 2
      }]
    }, {
      detail: {
        ["タスク名"]: "タスク名 23 1",
        ["defalut"]: "defalut",
        ["testDetail1"]: "testDetail1 23 1",
        ["testDetail2"]: "testDetail1 23 1"
      },
      patternInfo: [{
        patternID: 2,
        order: 1
      }, {
        patternID: 1,
        order: 3
      }]
    }, {
      detail: {
        ["タスク名"]: "タスク名 23 2",
        ["defalut"]: "defalut",
        ["testDetail2"]: "testDetail1 23 2",
        ["testDetail1"]: "testDetail1 23 2"
      },
      patternInfo: [{
        patternID: 2,
        order: 2
      }]
    }]
  }
}; // const diff = (olds: any[], nexts: any[]) => ({
//     adds: nexts.filter((e) => !olds.includes(e)),
//     subs: olds.filter((e) => !nexts.includes(e)),
// });
// パターン更新時に未来に設定されているパターンの内容を更新する。
// 更新対象はstate.calendar.tasks
// 年月日が未来であり、かつ、パターンIDが同じものを対象に新しいパターンを登録する。

const futurePatternUpdate = (state, updatePatternId) => {
  console.log("====futurePatternUpdateここから====");
  console.log(Object.keys(state.userTaskInfo.calendar));
  const today = new Date();
  const nowYear = today.getFullYear();
  const nowMonth = today.getMonth() + 1;
  const nowDate = today.getDate();
  const choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
    return task.patternInfo.some(task => task.patternID == updatePatternId);
  }); // パターンIDに紐付くタスク一覧からカレンダーへの登録情報を抽出する。

  const updateTasks = choicePatternTasks.map(task => {
    // パターンが複数登録されているタスクへの対応として、選択されているパターンIDに該当する要素だけを抽出する。
    const taskPattern = task.patternInfo.filter(function (patternInfo) {
      return patternInfo.patternID == updatePatternId;
    }); // 配列のタスクと抽出したパターン情報を整形して返す。

    return {
      order: taskPattern[0].order,
      detail: task.detail,
      // detail2: task.detail2,
      flug: false
    };
  });

  const keyMonthList = keyYear => {
    return Object.keys(state.userTaskInfo.calendar[parseInt(keyYear)]);
  };

  const keyDateList = (keyYear, keyMonth) => {
    return Object.keys(state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)]);
  };

  const dateTaskUpdate = (keyYear, keyMonth, keyDate) => {
    if (state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].PatternId == updatePatternId) {
      state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].tasks = updateTasks;
      console.log("===dateTaskUpdate===");
      console.log(keyYear);
      console.log(keyMonth);
      console.log(keyDate);
      console.log(updateTasks);
    }
  };

  const diff = (olds, nexts) => ({
    adds: nexts.filter(e => !olds.includes(e)),
    subs: olds.filter(e => !nexts.includes(e))
  }); // 登録されている年の連想配列のキーを全て取得


  const keyYears = Object.keys(state.userTaskInfo.calendar);
  keyYears.map(keyYear => {
    if (parseInt(keyYear) == nowYear) {
      // もし今年だったら、の処理
      // 登録されている月の連想配列のキーを全て取得
      const keyMonths = keyMonthList(keyYear);
      keyMonths.map(keyMonth => {
        if (parseInt(keyMonth) == nowMonth) {
          // もし今月だったら
          // 登録されている日の連想配列のキーを全て取得
          const keyDates = keyDateList(keyYear, keyMonth);
          keyDates.map(keyDate => {
            if (parseInt(keyDate) > nowDate) {
              // もし明日以降だったら登録内容を更新する
              dateTaskUpdate(keyYear, keyMonth, keyDate);
            } else if (parseInt(keyDate) == nowDate) {
              // もし今日だったら、変更分だけ反映する。
              // 処理未作成
              if (state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].PatternId == updatePatternId) {
                const result = diff(state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].tasks, updateTasks);
                const updateArray = state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].tasks.filter(function (task) {
                  return result.subs.some(sub => sub != task);
                });
                result.adds.map(add => {
                  updateArray.push(add);
                });
                state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].tasks = updateArray;
              }
            }
          });
        } else if (parseInt(keyMonth) > nowMonth) {
          // もし来月以降だったら、すべて更新する。
          const keyDates = keyDateList(keyYear, keyMonth);
          keyDates.map(keyDate => {
            dateTaskUpdate(keyYear, keyMonth, keyDate);
          });
        }
      });
    } else if (parseInt(keyYear) > nowYear) {
      // もし来年以降だったら、の処理。全て更新する。
      const keyMonths = keyMonthList(keyYear);
      keyMonths.map(keyMonth => {
        const keyDates = keyDateList(keyYear, keyMonth);
        keyDates.map(keyDate => {
          dateTaskUpdate(keyYear, keyMonth, keyDate);
        });
      });
    }
  });
  console.log("====futurePatternUpdateここまで====");
};

const DBCRUD = (pass, crud, updateDocument) => {
  const userId = _components_test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid;
  let refPass = '/' + pass;

  if (pass == '') {
    refPass = '';
  }

  const ref = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.database().ref("/users/" + userId + refPass);

  switch (crud) {
    case 'register':
      ref.set(updateDocument);
      break;

    case 'update':
      ref.update(updateDocument);
      break;

    case 'delete':
      ref.remove();
      break;
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
      // console.log("init state.userTaskInfo 前");
      // console.log(state.userTaskInfo);

      state.userTaskInfo = data; // console.log("init state.userTaskInfo 後");
      // console.log(state.userTaskInfo);
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
      DBCRUD(`calendar/${action.payload[0]}/${action.payload[1]}/${action.payload[2]}/tasks/${index}`, 'update', state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[index]);
    },

    // 引数はstateと年、月、日、選択されているパターンIDの4つの数値が格納された配列
    calendarPatternRegister(state, action) {
      // stateから選択されているパターンIDが設定されているタスクを抽出する。
      const choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
        return task.patternInfo.some(task => task.patternID == action.payload[3]);
      }); // パターンIDに紐付くタスク一覧からカレンダーへの登録情報を抽出する。

      const TodayTasks = choicePatternTasks.map(task => {
        // パターンが複数登録されているタスクへの対応として、選択されているパターンIDに該当する要素だけを抽出する。
        const taskPattern = task.patternInfo.filter(function (patternInfo) {
          return patternInfo.patternID == action.payload[3];
        }); // 配列のタスクと抽出したパターン情報を整形して返す。

        return {
          order: taskPattern[0].order,
          detail: task.detail,
          // detail2: task.detail2,
          flug: false
        };
      }); // ここに年がなかった時の処理を加える

      if (action.payload[0] in state.userTaskInfo.calendar) {
        // stateのMonthの連想配列に新しい日付の連想配列を追加する。
        // 追加情報は引数の日とこれまでの処理で作成したカレンダー登録用情報
        state.userTaskInfo.calendar[action.payload[0]][action.payload[1]] = _objectSpread(_objectSpread({}, state.userTaskInfo.calendar[action.payload[0]][action.payload[1]]), {}, {
          [action.payload[2]]: {
            PatternId: action.payload[3],
            tasks: TodayTasks
          }
        });
      } else {
        // stateのMonthの連想配列に新しい日付の連想配列を追加する。
        // 追加情報は引数の日とこれまでの処理で作成したカレンダー登録用情報
        state.userTaskInfo.calendar[action.payload[0]] = _objectSpread(_objectSpread({}, state.userTaskInfo.calendar[action.payload[0]]), {}, {
          [action.payload[1]]: {
            [action.payload[2]]: {
              PatternId: action.payload[3],
              tasks: TodayTasks
            }
          }
        });
      }

      DBCRUD(`calendar/${action.payload[0]}/${action.payload[1]}/${action.payload[2]}`, 'update', state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]]);
      console.log(state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]]);
    },

    // タスクの詳細を設定する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
    taskDetailRegister(state, action) {
      state.userTaskInfo.tasks[parseInt(action.payload[2])].detail = _objectSpread(_objectSpread({}, state.userTaskInfo.tasks[parseInt(action.payload[2])].detail), {}, {
        [action.payload[1]]: action.payload[0]
      });
      DBCRUD(`tasks/${[parseInt(action.payload[2])]}/detail`, 'update', state.userTaskInfo.tasks[parseInt(action.payload[2])].detail);
    },

    // タスクを追加する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
    taskRegister(state, action) {
      const registerTask = action.payload;
      registerTask.patternInfo.map(content => {
        const choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
          return task.patternInfo.some(task => task.patternID == content.patternID);
        });
        content.order = choicePatternTasks.length + 1;
      });
      console.log(registerTask);
      state.userTaskInfo.tasks = [...state.userTaskInfo.tasks, registerTask];
      DBCRUD('tasks', 'register', state.userTaskInfo.tasks);
    },

    // タスクのパターン登録状況を更新する。
    taskPatternUpdate(state, action) {
      // ここでやることは？
      // まず引数にタスクの配列インデックス番号が必要
      // パターンIDの配列を受け取る。
      // 配列とstateを比較して、なければ登録。Orderは最大値+1。逆に削除されているものは除外。
      const statePatternIdList = state.userTaskInfo.tasks[action.payload.index].patternInfo.map(content => {
        return content.patternID;
      });
      console.log("statePatternIdList");
      console.log(statePatternIdList);

      const diff = (olds, nexts) => ({
        adds: nexts.filter(e => !olds.includes(e)),
        subs: olds.filter(e => !nexts.includes(e))
      });

      const result = diff(statePatternIdList, action.payload.newChecked);
      let updateArray;
      console.log(result); // stateから削除対象を除外した配列を抽出する。

      if (result.subs.length > 0) {
        updateArray = state.userTaskInfo.tasks[action.payload.index].patternInfo.filter(function (content) {
          // futurePatternUpdate(state,);
          return result.subs.some(sub => sub != content.patternID);
        });
      } else {
        updateArray = state.userTaskInfo.tasks[action.payload.index].patternInfo;
      }

      console.log("1:updateArray");
      console.log(updateArray); //

      result.adds.map(add => {
        let Max = 0; // 追加されたIDが設定されているタスクを抽出する。

        const choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
          return task.patternInfo.some(taskPatternInfo => taskPatternInfo.patternID == add);
        }); //

        choicePatternTasks.map(task => {
          // 抽出された各タスクのパターンIDを比較し、最大値を取得する。
          let content = task.patternInfo.find(info => info.patternID == add);
          Max < content.order ? Max = content.order : "";
        });
        const pushContent = {
          patternID: add,
          order: Max + 1
        };
        updateArray.push(pushContent);
        futurePatternUpdate(state, add);
      });
      console.log("2:updateArray");
      console.log(updateArray);
      state.userTaskInfo.tasks[action.payload.index].patternInfo = updateArray;
      DBCRUD(`tasks/${action.payload.index}/patternInfo`, 'register', updateArray);
    },

    // タスクを削除する処理。引数には削除対象タスクのインデックス番号が格納されている。
    taskDelete(state, action) {
      // const deleteTask = state.userTaskInfo.tasks.splice(
      //     action.payload,
      //     1
      // );
      const deleteTask = state.userTaskInfo.tasks.filter(function (content, index) {
        return index != action.payload;
      });
      console.log(deleteTask);
      state.userTaskInfo.tasks = deleteTask;
      DBCRUD(`tasks`, 'register', deleteTask);
    },

    // タスクをパターンから除外する処理。引数のオブジェクトにはパターンIDと削除対象タスクの名称が格納されている。
    taskRemovePattern(state, action) {
      console.log(action.payload.detailTitle);
      const index = state.userTaskInfo.tasks.findIndex(content => {
        return content.detail["タスク名"] == action.payload.detailTitle;
      });
      console.log(index);
      const deletedTask = state.userTaskInfo.tasks[index].patternInfo.filter(function (content) {
        return content.patternID != action.payload.patternId;
      });
      state.userTaskInfo.tasks[index].patternInfo = deletedTask;
      console.log(deletedTask);
      DBCRUD(`tasks/${index}/patternInfo`, 'register', deletedTask); // futurePatternUpdate(state);
    },

    // パターンを追加する処理。引数にはパターン名称が格納されている。
    patternRegister(state, action) {
      let MaxId = 0;
      state.userTaskInfo.pattern.map(patternContent => {
        patternContent.patternId > MaxId ? MaxId = patternContent.patternId : "";
      });
      const addPattern = {
        patternId: MaxId + 1,
        patternName: action.payload
      };
      state.userTaskInfo.pattern = [...state.userTaskInfo.pattern, addPattern];
      DBCRUD('pattern', 'register', state.userTaskInfo.pattern);
    },

    // パターンを削除する処理。引数にはパターンIDが格納されている。
    patternDelete(state, action) {
      const updatePatternList = state.userTaskInfo.pattern.filter(patternContent => {
        // console.log(patternContent.patternId);
        // console.log(action.payload);
        return patternContent.patternId != action.payload;
      });
      console.log(updatePatternList);
      state.userTaskInfo.pattern = updatePatternList; // タスクとカレンダーに保管されているパターンを全て削除する必要がある
      // カレンダーは未来分だけ
      // state.userTaskInfo.tasksに保管されているパターン情報を削除する。

      let updateTaskList = state.userTaskInfo.tasks.map(task => {
        const updatePatternInfo = task.patternInfo.filter(taskPatternInfo => {
          return taskPatternInfo.patternID != action.payload;
        });
        const updateTask = {
          detail: task.detail,
          patternInfo: updatePatternInfo
        };
        return updateTask;
      });
      console.log("after:updateTaskList");
      console.log(updateTaskList);
      state.userTaskInfo.tasks = updateTaskList; // state.userTaskInfo.calendarの未来分に保管されているパターン情報を削除する。

      const today = new Date();
      const nowYear = today.getFullYear();
      const nowMonth = today.getMonth() + 1;
      const nowDate = today.getDate();
      const keyYears = Object.keys(state.userTaskInfo.calendar);

      const deleteCalendarDate = (year, month, date) => {
        if (state.userTaskInfo.calendar[parseInt(year)][parseInt(month)][parseInt(date)].PatternId == action.payload) {
          delete state.userTaskInfo.calendar[parseInt(year)][parseInt(month)][parseInt(date)];
        }
      };

      keyYears.map(year => {
        const keyMonth = Object.keys(state.userTaskInfo.calendar[parseInt(year)]);

        if (parseInt(year) > nowYear) {
          // 対象が来年以降である場合、削除する。deleteのほうがいい
          keyMonth.map(month => {
            const keyDate = Object.keys(state.userTaskInfo.calendar[parseInt(year)][parseInt(month)]);
            keyDate.map(date => {
              deleteCalendarDate(year, month, date);
            });
          });
        } else if (parseInt(year) == nowYear) {
          // 対象が今年である場合
          keyMonth.map(month => {
            const keyDate = Object.keys(state.userTaskInfo.calendar[parseInt(year)][parseInt(month)]);

            if (parseInt(month) > nowMonth) {
              // 来月以降の場合、削除する。deleteのほうがいい
              console.log(keyDate);
              keyDate.map(date => {
                deleteCalendarDate(year, month, date);
              });
            } else if (parseInt(month) == nowMonth) {
              // 今月の場合
              keyDate.map(date => {
                if (parseInt(date) > nowDate) {
                  // 明日以降の場合、削除する
                  deleteCalendarDate(year, month, date);
                }
              });
            }
          });
        }
      });
      DBCRUD('', 'register', state.userTaskInfo);
    },

    // パターン名称を編集する処理。引数にはパターンIDとパターン名称が格納されている。
    patternNameEdit(state, action) {
      // IDに合致する要素のインデックス番号を取得
      const editPatternIndex = state.userTaskInfo.pattern.findIndex(patternContent => patternContent.patternId == action.payload.editPatternId); // 取得したインデックス番号を目印に、引数の新しい名称で更新する。

      state.userTaskInfo.pattern[editPatternIndex].patternName = action.payload.patternName;
      DBCRUD(`pattern/${editPatternIndex}`, 'update', state.userTaskInfo.pattern[editPatternIndex]);
    }

  }
});
const {
  init,
  Register,
  allDelete,
  taskCheckComplete,
  calendarPatternRegister,
  taskDetailRegister,
  taskRegister,
  taskPatternUpdate,
  taskDelete,
  taskRemovePattern,
  patternRegister,
  patternDelete,
  patternNameEdit
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
      console.log('login');
      console.log(state.userId);
      console.log(action.payload);
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
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/store */ "./src/modules/store.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])('');

const HabitPlanApp = ({
  Component,
  pageProps
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _modules_store__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_modules_store__WEBPACK_IMPORTED_MODULE_2__["StoreProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }))));
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

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvZmlyZWJhc2VUZXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Jvb3RSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3N0b3JlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90YXNrc01vZHVsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdXNlck1vZHVsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9kYXRhYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiZGF0YWJhc2UiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidGFza3MiLCJ0YXNrc01vZHVsZSIsInVzZXIiLCJ1c2VyTW9kdWxlIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsIlN0b3JlcyIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlN0b3JlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZXJJZCIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwib3JkZXIiLCJkZXRhaWwiLCJmbHVnIiwicGF0dGVybiIsInBhdHRlcm5JZCIsInBhdHRlcm5OYW1lIiwicGF0dGVybkluZm8iLCJwYXR0ZXJuSUQiLCJmdXR1cmVQYXR0ZXJuVXBkYXRlIiwidXBkYXRlUGF0dGVybklkIiwiT2JqZWN0Iiwia2V5cyIsInRvZGF5Iiwibm93WWVhciIsIm5vd01vbnRoIiwibm93RGF0ZSIsImNob2ljZVBhdHRlcm5UYXNrcyIsImZpbHRlciIsInRhc2siLCJzb21lIiwidXBkYXRlVGFza3MiLCJtYXAiLCJ0YXNrUGF0dGVybiIsImtleU1vbnRoTGlzdCIsImtleVllYXIiLCJwYXJzZUludCIsImtleURhdGVMaXN0Iiwia2V5TW9udGgiLCJkYXRlVGFza1VwZGF0ZSIsImtleURhdGUiLCJkaWZmIiwib2xkcyIsIm5leHRzIiwiYWRkcyIsImUiLCJpbmNsdWRlcyIsInN1YnMiLCJrZXlZZWFycyIsImtleU1vbnRocyIsImtleURhdGVzIiwicmVzdWx0IiwidXBkYXRlQXJyYXkiLCJzdWIiLCJhZGQiLCJwdXNoIiwiREJDUlVEIiwicGFzcyIsImNydWQiLCJ1cGRhdGVEb2N1bWVudCIsImN1cnJlbnRVc2VyIiwidWlkIiwicmVmUGFzcyIsInJlZiIsInNldCIsInVwZGF0ZSIsInJlbW92ZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiaW5pdCIsImRhdGEiLCJwYXlsb2FkIiwiUmVnaXN0ZXIiLCJhbGxEZWxldGUiLCJ0YXNrQ2hlY2tDb21wbGV0ZSIsImluZGV4IiwiZmluZEluZGV4IiwiY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIiLCJUb2RheVRhc2tzIiwidGFza0RldGFpbFJlZ2lzdGVyIiwidGFza1JlZ2lzdGVyIiwicmVnaXN0ZXJUYXNrIiwiY29udGVudCIsInRhc2tQYXR0ZXJuVXBkYXRlIiwic3RhdGVQYXR0ZXJuSWRMaXN0IiwibmV3Q2hlY2tlZCIsIk1heCIsInRhc2tQYXR0ZXJuSW5mbyIsImZpbmQiLCJpbmZvIiwicHVzaENvbnRlbnQiLCJ0YXNrRGVsZXRlIiwiZGVsZXRlVGFzayIsInRhc2tSZW1vdmVQYXR0ZXJuIiwiZGV0YWlsVGl0bGUiLCJkZWxldGVkVGFzayIsInBhdHRlcm5SZWdpc3RlciIsIk1heElkIiwicGF0dGVybkNvbnRlbnQiLCJhZGRQYXR0ZXJuIiwicGF0dGVybkRlbGV0ZSIsInVwZGF0ZVBhdHRlcm5MaXN0IiwidXBkYXRlVGFza0xpc3QiLCJ1cGRhdGVQYXR0ZXJuSW5mbyIsInVwZGF0ZVRhc2siLCJkZWxldGVDYWxlbmRhckRhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXRlIiwicGF0dGVybk5hbWVFZGl0IiwiZWRpdFBhdHRlcm5JbmRleCIsImVkaXRQYXR0ZXJuSWQiLCJhY3Rpb25zIiwibG9naW4iLCJsb2dvdXQiLCJVc2VyQ29udGV4dCIsIkhhYml0UGxhbkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUNBOztBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUc7QUFDbkJDLFFBQU0sRUFBRSx5Q0FEVztBQUVuQkMsWUFBVSxFQUFFLDRCQUZPO0FBR25CQyxhQUFXLEVBQUUsbUNBSE07QUFJbkJDLFdBQVMsRUFBRSxZQUpRO0FBS25CQyxlQUFhLEVBQUUsd0JBTEk7QUFNbkJDLG1CQUFpQixFQUFFLGNBTkE7QUFPbkJDLE9BQUssRUFBRSwyQ0FQWTtBQVFuQkMsZUFBYSxFQUFFO0FBUkksQ0FBdkI7O0FBV0EsSUFBSUMsbURBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQzVCRixxREFBUSxDQUFDRyxhQUFULENBQXVCWixjQUF2QjtBQUNIOztBQUNELE1BQU1hLElBQUksR0FBR0osbURBQVEsQ0FBQ0ksSUFBVCxFQUFiO0FBQ0EsTUFBTUMsUUFBUSxHQUFHTCxtREFBUSxDQUFDSyxRQUFULEVBQWpCOzs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBTyxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBRCxFQUFnQkMsTUFBaEIsS0FBNEM7QUFDL0QsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxVQUFMO0FBQ0lDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0EsYUFDSUosS0FBSyxHQUFHLENBRFo7O0FBR0osU0FBSyxhQUFMO0FBQ0lHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaOztBQUNKO0FBQ0ksYUFBT0osS0FBUDtBQVRSO0FBV0gsQ0FaTSxDOzs7Ozs7Ozs7Ozs7QUNKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUssV0FBVyxHQUFHQyx3RUFBZSxDQUFDO0FBQ2hDQyxPQUFLLEVBQUVDLG9EQUFXLENBQUNULE9BRGE7QUFFaENVLE1BQUksRUFBRUMsbURBQVUsQ0FBQ1g7QUFGZSxDQUFELENBQW5DO0FBT2VNLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNTSxLQUFLLEdBQUdDLHVFQUFjLENBQUM7QUFDM0JiLFNBQU8sRUFBRU0sb0RBQVdBO0FBRE8sQ0FBRCxDQUE1QjtBQUlBLE1BQU1RLFlBQW9CLEdBQUcsQ0FBN0I7QUFFTyxNQUFNQyxNQUFNLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQWtDSCxZQUFsQyxDQUFmO0FBRUEsTUFBTUksYUFBdUIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUErQjtBQUNwRSxRQUFNLENBQUNsQixLQUFELEVBQVFtQixRQUFSLElBQW9CSiw0Q0FBSyxDQUFDSyxVQUFOLENBQWlCckIsZ0RBQWpCLEVBQTBCYyxZQUExQixDQUExQjtBQUVBLFNBQ0UsTUFBQyxNQUFELENBQVEsUUFBUjtBQUFpQixTQUFLLEVBQUU7QUFBRWIsV0FBRjtBQUFTbUI7QUFBVCxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWdERCxRQUFoRCxNQURGO0FBR0QsQ0FOTTtBQVVRUCxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQWFBLE1BQU1FLFlBQXNCLEdBQUc7QUFDM0JRLFFBQU0sRUFBRSxFQURtQjtBQUUzQkMsY0FBWSxFQUFFO0FBQ1ZDLFlBQVEsRUFBRTtBQUNOLE9BQUMsSUFBSUMsSUFBSixDQUFTLDJCQUFULEVBQXNDQyxXQUF0QyxFQUFELEdBQXVEO0FBQ25ELFNBQUMsSUFBSUQsSUFBSixDQUFTLDJCQUFULEVBQXNDRSxRQUF0QyxLQUFtRCxDQUFwRCxHQUF3RDtBQUNwRCxXQUFDLElBQUlGLElBQUosQ0FBUywyQkFBVCxFQUFzQ0csT0FBdEMsRUFBRCxHQUFtRDtBQUMvQ0MscUJBQVMsRUFBRSxDQURvQztBQUUvQ3JCLGlCQUFLLEVBQUUsQ0FDSDtBQUNJc0IsbUJBQUssRUFBRSxDQURYO0FBRUlDLG9CQUFNLEVBQUU7QUFDSixpQkFBQyxNQUFELEdBQVUsV0FETjtBQUVKLGlCQUFDLGFBQUQsR0FBaUIsa0JBRmI7QUFHSixpQkFBQyxhQUFELEdBQWlCO0FBSGIsZUFGWjtBQU9JQyxrQkFBSSxFQUFFO0FBUFYsYUFERyxFQVVIO0FBQ0lGLG1CQUFLLEVBQUUsQ0FEWDtBQUVJQyxvQkFBTSxFQUFFO0FBQ0osaUJBQUMsTUFBRCxHQUFVLFdBRE47QUFFSixpQkFBQyxhQUFELEdBQWlCLGtCQUZiO0FBR0osaUJBQUMsYUFBRCxHQUFpQjtBQUhiLGVBRlo7QUFPSUMsa0JBQUksRUFBRTtBQVBWLGFBVkc7QUFGd0MsV0FEQztBQXdCcEQsV0FBQyxJQUFJUCxJQUFKLENBQVMsMkJBQVQsRUFBc0NHLE9BQXRDLEVBQUQsR0FBbUQ7QUFDL0NDLHFCQUFTLEVBQUUsQ0FEb0M7QUFFL0NyQixpQkFBSyxFQUFFLENBQ0g7QUFDSXNCLG1CQUFLLEVBQUUsQ0FEWDtBQUVJQyxvQkFBTSxFQUFFO0FBQ0osaUJBQUMsTUFBRCxHQUFVLFdBRE47QUFFSixpQkFBQyxhQUFELEdBQWlCLGtCQUZiO0FBR0osaUJBQUMsYUFBRCxHQUFpQjtBQUhiLGVBRlo7QUFPSUMsa0JBQUksRUFBRTtBQVBWLGFBREcsRUFVSDtBQUNJRixtQkFBSyxFQUFFLENBRFg7QUFFSUMsb0JBQU0sRUFBRTtBQUNKLGlCQUFDLE1BQUQsR0FBVSxXQUROO0FBRUosaUJBQUMsYUFBRCxHQUFpQixrQkFGYjtBQUdKLGlCQUFDLGFBQUQsR0FBaUI7QUFIYixlQUZaO0FBT0lDLGtCQUFJLEVBQUU7QUFQVixhQVZHO0FBRndDO0FBeEJDO0FBREw7QUFEakQsS0FEQTtBQXNEVkMsV0FBTyxFQUFFLENBQ0w7QUFDSUMsZUFBUyxFQUFFLENBRGY7QUFFSUMsaUJBQVcsRUFBRTtBQUZqQixLQURLLEVBS0w7QUFDSUQsZUFBUyxFQUFFLENBRGY7QUFFSUMsaUJBQVcsRUFBRTtBQUZqQixLQUxLLENBdERDO0FBZ0VWM0IsU0FBSyxFQUFFLENBQ0g7QUFDSXVCLFlBQU0sRUFBRTtBQUNKLFNBQUMsTUFBRCxHQUFVLFdBRE47QUFFSixTQUFDLFNBQUQsR0FBYSxTQUZUO0FBR0osU0FBQyxhQUFELEdBQWlCLGtCQUhiO0FBSUosU0FBQyxhQUFELEdBQWlCO0FBSmIsT0FEWjtBQU9JSyxpQkFBVyxFQUFFLENBQ1Q7QUFDSUMsaUJBQVMsRUFBRSxDQURmO0FBRUlQLGFBQUssRUFBRTtBQUZYLE9BRFM7QUFQakIsS0FERyxFQWVIO0FBQ0lDLFlBQU0sRUFBRTtBQUNKLFNBQUMsTUFBRCxHQUFVLFdBRE47QUFFSixTQUFDLFNBQUQsR0FBYSxTQUZUO0FBR0osU0FBQyxhQUFELEdBQWlCLGtCQUhiO0FBSUosU0FBQyxhQUFELEdBQWlCO0FBSmIsT0FEWjtBQU9JSyxpQkFBVyxFQUFFLENBQ1Q7QUFDSUMsaUJBQVMsRUFBRSxDQURmO0FBRUlQLGFBQUssRUFBRTtBQUZYLE9BRFM7QUFQakIsS0FmRyxFQTZCSDtBQUNJQyxZQUFNLEVBQUU7QUFDSixTQUFDLE1BQUQsR0FBVSxXQUROO0FBRUosU0FBQyxTQUFELEdBQWEsU0FGVDtBQUdKLFNBQUMsYUFBRCxHQUFpQixrQkFIYjtBQUlKLFNBQUMsYUFBRCxHQUFpQjtBQUpiLE9BRFo7QUFPSUssaUJBQVcsRUFBRSxDQUNUO0FBQ0lDLGlCQUFTLEVBQUUsQ0FEZjtBQUVJUCxhQUFLLEVBQUU7QUFGWCxPQURTLEVBS1Q7QUFDSU8saUJBQVMsRUFBRSxDQURmO0FBRUlQLGFBQUssRUFBRTtBQUZYLE9BTFM7QUFQakIsS0E3QkcsRUErQ0g7QUFDSUMsWUFBTSxFQUFFO0FBQ0osU0FBQyxNQUFELEdBQVUsV0FETjtBQUVKLFNBQUMsU0FBRCxHQUFhLFNBRlQ7QUFHSixTQUFDLGFBQUQsR0FBaUIsa0JBSGI7QUFJSixTQUFDLGFBQUQsR0FBaUI7QUFKYixPQURaO0FBT0lLLGlCQUFXLEVBQUUsQ0FDVDtBQUNJQyxpQkFBUyxFQUFFLENBRGY7QUFFSVAsYUFBSyxFQUFFO0FBRlgsT0FEUztBQVBqQixLQS9DRztBQWhFRztBQUZhLENBQS9CLEMsQ0FtSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTVEsbUJBQW1CLEdBQUcsQ0FBQ3JDLEtBQUQsRUFBa0JzQyxlQUFsQixLQUE4QztBQUN0RW5DLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBRUFELFNBQU8sQ0FBQ0MsR0FBUixDQUFZbUMsTUFBTSxDQUFDQyxJQUFQLENBQVl4QyxLQUFLLENBQUNzQixZQUFOLENBQW1CQyxRQUEvQixDQUFaO0FBQ0EsUUFBTWtCLEtBQUssR0FBRyxJQUFJakIsSUFBSixFQUFkO0FBQ0EsUUFBTWtCLE9BQU8sR0FBR0QsS0FBSyxDQUFDaEIsV0FBTixFQUFoQjtBQUNBLFFBQU1rQixRQUFRLEdBQUdGLEtBQUssQ0FBQ2YsUUFBTixLQUFtQixDQUFwQztBQUNBLFFBQU1rQixPQUFPLEdBQUdILEtBQUssQ0FBQ2QsT0FBTixFQUFoQjtBQUVBLFFBQU1rQixrQkFBa0IsR0FBRzdDLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQW5CLENBQXlCdUMsTUFBekIsQ0FBZ0MsVUFBVUMsSUFBVixFQUFnQjtBQUN2RSxXQUFPQSxJQUFJLENBQUNaLFdBQUwsQ0FBaUJhLElBQWpCLENBQ0ZELElBQUQsSUFBVUEsSUFBSSxDQUFDWCxTQUFMLElBQWtCRSxlQUR6QixDQUFQO0FBR0gsR0FKMEIsQ0FBM0IsQ0FUc0UsQ0FldEU7O0FBQ0EsUUFBTVcsV0FBVyxHQUFHSixrQkFBa0IsQ0FBQ0ssR0FBbkIsQ0FBd0JILElBQUQsSUFBVTtBQUNqRDtBQUNBLFVBQU1JLFdBQVcsR0FBR0osSUFBSSxDQUFDWixXQUFMLENBQWlCVyxNQUFqQixDQUF3QixVQUFVWCxXQUFWLEVBQXVCO0FBQy9ELGFBQU9BLFdBQVcsQ0FBQ0MsU0FBWixJQUF5QkUsZUFBaEM7QUFDSCxLQUZtQixDQUFwQixDQUZpRCxDQU1qRDs7QUFDQSxXQUFPO0FBQ0hULFdBQUssRUFBRXNCLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZXRCLEtBRG5CO0FBRUhDLFlBQU0sRUFBRWlCLElBQUksQ0FBQ2pCLE1BRlY7QUFHSDtBQUNBQyxVQUFJLEVBQUU7QUFKSCxLQUFQO0FBTUgsR0FibUIsQ0FBcEI7O0FBZUEsUUFBTXFCLFlBQVksR0FBSUMsT0FBRCxJQUFxQjtBQUN0QyxXQUFPZCxNQUFNLENBQUNDLElBQVAsQ0FBWXhDLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCK0IsUUFBUSxDQUFDRCxPQUFELENBQXBDLENBQVosQ0FBUDtBQUNILEdBRkQ7O0FBR0EsUUFBTUUsV0FBVyxHQUFHLENBQUNGLE9BQUQsRUFBa0JHLFFBQWxCLEtBQXVDO0FBQ3ZELFdBQU9qQixNQUFNLENBQUNDLElBQVAsQ0FDSHhDLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCK0IsUUFBUSxDQUFDRCxPQUFELENBQXBDLEVBQStDQyxRQUFRLENBQUNFLFFBQUQsQ0FBdkQsQ0FERyxDQUFQO0FBR0gsR0FKRDs7QUFNQSxRQUFNQyxjQUFjLEdBQUcsQ0FDbkJKLE9BRG1CLEVBRW5CRyxRQUZtQixFQUduQkUsT0FIbUIsS0FJbEI7QUFDRCxRQUNJMUQsS0FBSyxDQUFDc0IsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEIrQixRQUFRLENBQUNELE9BQUQsQ0FBcEMsRUFBK0NDLFFBQVEsQ0FBQ0UsUUFBRCxDQUF2RCxFQUNJRixRQUFRLENBQUNJLE9BQUQsQ0FEWixFQUVFOUIsU0FGRixJQUVlVSxlQUhuQixFQUlFO0FBQ0V0QyxXQUFLLENBQUNzQixZQUFOLENBQW1CQyxRQUFuQixDQUE0QitCLFFBQVEsQ0FBQ0QsT0FBRCxDQUFwQyxFQUErQ0MsUUFBUSxDQUFDRSxRQUFELENBQXZELEVBQ0lGLFFBQVEsQ0FBQ0ksT0FBRCxDQURaLEVBRUVuRCxLQUZGLEdBRVUwQyxXQUZWO0FBR0E5QyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWWlELE9BQVo7QUFDQWxELGFBQU8sQ0FBQ0MsR0FBUixDQUFZb0QsUUFBWjtBQUNBckQsYUFBTyxDQUFDQyxHQUFSLENBQVlzRCxPQUFaO0FBQ0F2RCxhQUFPLENBQUNDLEdBQVIsQ0FBWTZDLFdBQVo7QUFDSDtBQUNKLEdBbkJEOztBQTZCQSxRQUFNVSxJQUFJLEdBQUcsQ0FBQ0MsSUFBRCxFQUEwQkMsS0FBMUIsTUFBd0Q7QUFDakVDLFFBQUksRUFBRUQsS0FBSyxDQUFDZixNQUFOLENBQWNpQixDQUFELElBQU8sQ0FBQ0gsSUFBSSxDQUFDSSxRQUFMLENBQWNELENBQWQsQ0FBckIsQ0FEMkQ7QUFFakVFLFFBQUksRUFBRUwsSUFBSSxDQUFDZCxNQUFMLENBQWFpQixDQUFELElBQU8sQ0FBQ0YsS0FBSyxDQUFDRyxRQUFOLENBQWVELENBQWYsQ0FBcEI7QUFGMkQsR0FBeEQsQ0FBYixDQXJFc0UsQ0EwRXRFOzs7QUFDQSxRQUFNRyxRQUFRLEdBQUczQixNQUFNLENBQUNDLElBQVAsQ0FBWXhDLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJDLFFBQS9CLENBQWpCO0FBQ0EyQyxVQUFRLENBQUNoQixHQUFULENBQWNHLE9BQUQsSUFBYTtBQUN0QixRQUFJQyxRQUFRLENBQUNELE9BQUQsQ0FBUixJQUFxQlgsT0FBekIsRUFBa0M7QUFDOUI7QUFDQTtBQUNBLFlBQU15QixTQUFTLEdBQUdmLFlBQVksQ0FBQ0MsT0FBRCxDQUE5QjtBQUVBYyxlQUFTLENBQUNqQixHQUFWLENBQWVNLFFBQUQsSUFBYztBQUN4QixZQUFJRixRQUFRLENBQUNFLFFBQUQsQ0FBUixJQUFzQmIsUUFBMUIsRUFBb0M7QUFDaEM7QUFDQTtBQUNBLGdCQUFNeUIsUUFBUSxHQUFHYixXQUFXLENBQUNGLE9BQUQsRUFBVUcsUUFBVixDQUE1QjtBQUNBWSxrQkFBUSxDQUFDbEIsR0FBVCxDQUFjUSxPQUFELElBQWE7QUFDdEIsZ0JBQUlKLFFBQVEsQ0FBQ0ksT0FBRCxDQUFSLEdBQW9CZCxPQUF4QixFQUFpQztBQUM3QjtBQUNBYSw0QkFBYyxDQUFDSixPQUFELEVBQVVHLFFBQVYsRUFBb0JFLE9BQXBCLENBQWQ7QUFDSCxhQUhELE1BR08sSUFBSUosUUFBUSxDQUFDSSxPQUFELENBQVIsSUFBcUJkLE9BQXpCLEVBQWtDO0FBQ3JDO0FBQ0E7QUFDQSxrQkFDSTVDLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCK0IsUUFBUSxDQUFDRCxPQUFELENBQXBDLEVBQ0lDLFFBQVEsQ0FBQ0UsUUFBRCxDQURaLEVBRUVGLFFBQVEsQ0FBQ0ksT0FBRCxDQUZWLEVBRXFCOUIsU0FGckIsSUFHQVUsZUFKSixFQUtFO0FBQ0Usc0JBQU0rQixNQUFNLEdBQUdWLElBQUksQ0FDZjNELEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQ0krQixRQUFRLENBQUNELE9BQUQsQ0FEWixFQUVFQyxRQUFRLENBQUNFLFFBQUQsQ0FGVixFQUVzQkYsUUFBUSxDQUFDSSxPQUFELENBRjlCLEVBR0tuRCxLQUpVLEVBS2YwQyxXQUxlLENBQW5CO0FBT0Esc0JBQU1xQixXQUFXLEdBQUd0RSxLQUFLLENBQUNzQixZQUFOLENBQW1CQyxRQUFuQixDQUNoQitCLFFBQVEsQ0FBQ0QsT0FBRCxDQURRLEVBRWxCQyxRQUFRLENBQUNFLFFBQUQsQ0FGVSxFQUdoQkYsUUFBUSxDQUFDSSxPQUFELENBSFEsRUFJbEJuRCxLQUprQixDQUladUMsTUFKWSxDQUlMLFVBQVVDLElBQVYsRUFBZ0I7QUFDM0IseUJBQU9zQixNQUFNLENBQUNKLElBQVAsQ0FBWWpCLElBQVosQ0FDRnVCLEdBQUQsSUFBU0EsR0FBRyxJQUFJeEIsSUFEYixDQUFQO0FBR0gsaUJBUm1CLENBQXBCO0FBVUFzQixzQkFBTSxDQUFDUCxJQUFQLENBQVlaLEdBQVosQ0FBaUJzQixHQUFELElBQVM7QUFDckJGLDZCQUFXLENBQUNHLElBQVosQ0FBaUJELEdBQWpCO0FBQ0gsaUJBRkQ7QUFHQXhFLHFCQUFLLENBQUNzQixZQUFOLENBQW1CQyxRQUFuQixDQUE0QitCLFFBQVEsQ0FBQ0QsT0FBRCxDQUFwQyxFQUNJQyxRQUFRLENBQUNFLFFBQUQsQ0FEWixFQUVFRixRQUFRLENBQUNJLE9BQUQsQ0FGVixFQUVxQm5ELEtBRnJCLEdBRTZCK0QsV0FGN0I7QUFHSDtBQUNKO0FBQ0osV0F0Q0Q7QUF1Q0gsU0EzQ0QsTUEyQ08sSUFBSWhCLFFBQVEsQ0FBQ0UsUUFBRCxDQUFSLEdBQXFCYixRQUF6QixFQUFtQztBQUN0QztBQUNBLGdCQUFNeUIsUUFBUSxHQUFHYixXQUFXLENBQUNGLE9BQUQsRUFBVUcsUUFBVixDQUE1QjtBQUNBWSxrQkFBUSxDQUFDbEIsR0FBVCxDQUFjUSxPQUFELElBQWE7QUFDdEJELDBCQUFjLENBQUNKLE9BQUQsRUFBVUcsUUFBVixFQUFvQkUsT0FBcEIsQ0FBZDtBQUNILFdBRkQ7QUFHSDtBQUNKLE9BbkREO0FBb0RILEtBekRELE1BeURPLElBQUlKLFFBQVEsQ0FBQ0QsT0FBRCxDQUFSLEdBQW9CWCxPQUF4QixFQUFpQztBQUNwQztBQUNBLFlBQU15QixTQUFTLEdBQUdmLFlBQVksQ0FBQ0MsT0FBRCxDQUE5QjtBQUNBYyxlQUFTLENBQUNqQixHQUFWLENBQWVNLFFBQUQsSUFBYztBQUN4QixjQUFNWSxRQUFRLEdBQUdiLFdBQVcsQ0FBQ0YsT0FBRCxFQUFVRyxRQUFWLENBQTVCO0FBQ0FZLGdCQUFRLENBQUNsQixHQUFULENBQWNRLE9BQUQsSUFBYTtBQUN0QkQsd0JBQWMsQ0FBQ0osT0FBRCxFQUFVRyxRQUFWLEVBQW9CRSxPQUFwQixDQUFkO0FBQ0gsU0FGRDtBQUdILE9BTEQ7QUFNSDtBQUNKLEdBcEVEO0FBc0VBdkQsU0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVo7QUFDSCxDQW5KRDs7QUFxSkEsTUFBTXNFLE1BQU0sR0FBRyxDQUFDQyxJQUFELEVBQWVDLElBQWYsRUFBNkJDLGNBQTdCLEtBQXFEO0FBQ2hFLFFBQU14RCxNQUFNLEdBQUd4QiwrRUFBSSxDQUFDaUYsV0FBTCxDQUFpQkMsR0FBaEM7QUFDQSxNQUFJQyxPQUFPLEdBQUcsTUFBTUwsSUFBcEI7O0FBQ0EsTUFBSUEsSUFBSSxJQUFJLEVBQVosRUFBZ0I7QUFDWkssV0FBTyxHQUFHLEVBQVY7QUFDSDs7QUFDRCxRQUFNQyxHQUFHLEdBQUd4RiwrQ0FBUSxDQUFDSyxRQUFULEdBQW9CbUYsR0FBcEIsQ0FBd0IsWUFBWTVELE1BQVosR0FBcUIyRCxPQUE3QyxDQUFaOztBQUVBLFVBQVFKLElBQVI7QUFDSSxTQUFLLFVBQUw7QUFDSUssU0FBRyxDQUFDQyxHQUFKLENBQVFMLGNBQVI7QUFDQTs7QUFDSixTQUFLLFFBQUw7QUFDSUksU0FBRyxDQUFDRSxNQUFKLENBQVdOLGNBQVg7QUFDQTs7QUFDSixTQUFLLFFBQUw7QUFDSUksU0FBRyxDQUFDRyxNQUFKO0FBQ0E7QUFUUjtBQVdILENBbkJEOztBQXFCQSxNQUFNNUUsV0FBVyxHQUFHNkUsb0VBQVcsQ0FBQztBQUM1QkMsTUFBSSxFQUFFLE9BRHNCO0FBRTVCekUsY0FGNEI7QUFHNUIwRSxVQUFRLEVBQUU7QUFDTkMsUUFBSSxDQUFDeEYsS0FBRCxFQUFrQkMsTUFBbEIsRUFBdUQ7QUFDdkQsWUFBTXdGLElBQUksR0FBR3hGLE1BQU0sQ0FBQ3lGLE9BQXBCO0FBQ0F2RixhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZcUYsSUFBWixFQUh1RCxDQUl2RDtBQUNBO0FBQ0E7O0FBQ0F6RixXQUFLLENBQUNzQixZQUFOLEdBQXFCbUUsSUFBckIsQ0FQdUQsQ0FRdkQ7QUFDQTtBQUNILEtBWEs7O0FBWU5FLFlBQVEsQ0FBQzNGLEtBQUQsRUFBa0JDLE1BQWxCLEVBQW1EO0FBQ3ZELFlBQU13RixJQUFJLEdBQUd4RixNQUFNLENBQUN5RixPQUFwQjtBQUVBMUYsV0FBSyxtQ0FBUUEsS0FBUixHQUFrQnlGLElBQWxCLENBQUwsQ0FIdUQsQ0FJdkQ7QUFDQTtBQUNILEtBbEJLOztBQW1CTkcsYUFBUyxDQUFDNUYsS0FBRCxFQUFrQjtBQUN2QkEsV0FBSyxHQUFHYSxZQUFSO0FBQ0FWLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0gsS0F0Qks7O0FBdUJOO0FBQ0F5RixxQkFBaUIsQ0FBQzdGLEtBQUQsRUFBa0JDLE1BQWxCLEVBQW1EO0FBQ2hFLFlBQU02RixLQUFLLEdBQUc5RixLQUFLLENBQUNzQixZQUFOLENBQW1CQyxRQUFuQixDQUE0QnRCLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBQTVCLEVBQ1Z6RixNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQURVLEVBRVp6RixNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQUZZLEVBRU9uRixLQUZQLENBRWF3RixTQUZiLENBR1R4RixLQUFELElBQVdBLEtBQUssQ0FBQ3NCLEtBQU4sSUFBZTVCLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBSGhCLENBQWQ7QUFLQXZGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZMEYsS0FBWjtBQUNBOUYsV0FBSyxDQUFDc0IsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJ0QixNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQUE1QixFQUErQ3pGLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBQS9DLEVBQ0l6RixNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQURKLEVBRUVuRixLQUZGLENBRVF1RixLQUZSLEVBRWUvRCxJQUZmLEdBRXNCLENBQUMvQixLQUFLLENBQUNzQixZQUFOLENBQW1CQyxRQUFuQixDQUNuQnRCLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBRG1CLEVBRXJCekYsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FGcUIsRUFFRnpGLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBRkUsRUFFaUJuRixLQUZqQixDQUV1QnVGLEtBRnZCLEVBRThCL0QsSUFKckQ7QUFNQTJDLFlBQU0sQ0FBRSxZQUFXekUsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FBa0IsSUFBR3pGLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBQWtCLElBQUd6RixNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQUFrQixVQUFTSSxLQUFNLEVBQXhGLEVBQ0YsUUFERSxFQUVGOUYsS0FBSyxDQUFDc0IsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJ0QixNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQUE1QixFQUErQ3pGLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBQS9DLEVBQWtFekYsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FBbEUsRUFBcUZuRixLQUFyRixDQUEyRnVGLEtBQTNGLENBRkUsQ0FBTjtBQUtILEtBMUNLOztBQTJDTjtBQUNBRSwyQkFBdUIsQ0FDbkJoRyxLQURtQixFQUVuQkMsTUFGbUIsRUFHckI7QUFDRTtBQUNBLFlBQU00QyxrQkFBa0IsR0FBRzdDLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQW5CLENBQXlCdUMsTUFBekIsQ0FDdkIsVUFBVUMsSUFBVixFQUFnQjtBQUNaLGVBQU9BLElBQUksQ0FBQ1osV0FBTCxDQUFpQmEsSUFBakIsQ0FDRkQsSUFBRCxJQUFVQSxJQUFJLENBQUNYLFNBQUwsSUFBa0JuQyxNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQUR6QixDQUFQO0FBR0gsT0FMc0IsQ0FBM0IsQ0FGRixDQVVFOztBQUNBLFlBQU1PLFVBQVUsR0FBR3BELGtCQUFrQixDQUFDSyxHQUFuQixDQUF3QkgsSUFBRCxJQUFVO0FBQ2hEO0FBQ0EsY0FBTUksV0FBVyxHQUFHSixJQUFJLENBQUNaLFdBQUwsQ0FBaUJXLE1BQWpCLENBQXdCLFVBQ3hDWCxXQUR3QyxFQUUxQztBQUNFLGlCQUFPQSxXQUFXLENBQUNDLFNBQVosSUFBeUJuQyxNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQUFoQztBQUNILFNBSm1CLENBQXBCLENBRmdELENBUWhEOztBQUNBLGVBQU87QUFDSDdELGVBQUssRUFBRXNCLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZXRCLEtBRG5CO0FBRUhDLGdCQUFNLEVBQUVpQixJQUFJLENBQUNqQixNQUZWO0FBR0g7QUFDQUMsY0FBSSxFQUFFO0FBSkgsU0FBUDtBQU1ILE9BZmtCLENBQW5CLENBWEYsQ0E0QkU7O0FBQ0EsVUFBSTlCLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLEtBQXFCMUYsS0FBSyxDQUFDc0IsWUFBTixDQUFtQkMsUUFBNUMsRUFBc0Q7QUFDbEQ7QUFDQTtBQUNBdkIsYUFBSyxDQUFDc0IsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJ0QixNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQUE1QixFQUNJekYsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FESixvQ0FHTzFGLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCdEIsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FBNUIsRUFDSHpGLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBREcsQ0FIUDtBQU1JLFdBQUN6RixNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQUFELEdBQXFCO0FBQ2pCOUQscUJBQVMsRUFBRTNCLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBRE07QUFFakJuRixpQkFBSyxFQUFFMEY7QUFGVTtBQU56QjtBQVdILE9BZEQsTUFjTztBQUNIO0FBQ0E7QUFDQWpHLGFBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCdEIsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FBNUIsb0NBQ08xRixLQUFLLENBQUNzQixZQUFOLENBQW1CQyxRQUFuQixDQUE0QnRCLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBQTVCLENBRFA7QUFFSSxXQUFDekYsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FBRCxHQUFxQjtBQUNqQixhQUFDekYsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FBRCxHQUFxQjtBQUNqQjlELHVCQUFTLEVBQUUzQixNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQURNO0FBRWpCbkYsbUJBQUssRUFBRTBGO0FBRlU7QUFESjtBQUZ6QjtBQVNIOztBQUNEdkIsWUFBTSxDQUFFLFlBQVd6RSxNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQUFrQixJQUFHekYsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FBa0IsSUFBR3pGLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBQWtCLEVBQXpFLEVBQTRFLFFBQTVFLEVBQXNGMUYsS0FBSyxDQUFDc0IsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJ0QixNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZixDQUE1QixFQUErQ3pGLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBQS9DLEVBQWtFekYsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FBbEUsQ0FBdEYsQ0FBTjtBQUVBdkYsYUFBTyxDQUFDQyxHQUFSLENBQ0lKLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCdEIsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FBNUIsRUFDQXpGLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBREEsRUFFRXpGLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBRkYsQ0FESjtBQUtILEtBOUdLOztBQStHTjtBQUNBUSxzQkFBa0IsQ0FBQ2xHLEtBQUQsRUFBa0JDLE1BQWxCLEVBQW1EO0FBQ2pFRCxXQUFLLENBQUNzQixZQUFOLENBQW1CZixLQUFuQixDQUF5QitDLFFBQVEsQ0FBQ3JELE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBQUQsQ0FBakMsRUFBc0Q1RCxNQUF0RCxtQ0FDTzlCLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQW5CLENBQXlCK0MsUUFBUSxDQUFDckQsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FBRCxDQUFqQyxFQUFzRDVELE1BRDdEO0FBRUksU0FBQzdCLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBQUQsR0FBcUJ6RixNQUFNLENBQUN5RixPQUFQLENBQWUsQ0FBZjtBQUZ6QjtBQUlBaEIsWUFBTSxDQUFFLFNBQVEsQ0FBQ3BCLFFBQVEsQ0FBQ3JELE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZSxDQUFmLENBQUQsQ0FBVCxDQUE4QixTQUF4QyxFQUFrRCxRQUFsRCxFQUE0RDFGLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQW5CLENBQXlCK0MsUUFBUSxDQUFDckQsTUFBTSxDQUFDeUYsT0FBUCxDQUFlLENBQWYsQ0FBRCxDQUFqQyxFQUFzRDVELE1BQWxILENBQU47QUFDSCxLQXRISzs7QUF1SE47QUFDQXFFLGdCQUFZLENBQUNuRyxLQUFELEVBQWtCQyxNQUFsQixFQUFnRDtBQUN4RCxZQUFNbUcsWUFBWSxHQUFHbkcsTUFBTSxDQUFDeUYsT0FBNUI7QUFDQVUsa0JBQVksQ0FBQ2pFLFdBQWIsQ0FBeUJlLEdBQXpCLENBQThCbUQsT0FBRCxJQUFhO0FBQ3RDLGNBQU14RCxrQkFBa0IsR0FBRzdDLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQW5CLENBQXlCdUMsTUFBekIsQ0FDdkIsVUFBVUMsSUFBVixFQUFnQjtBQUNaLGlCQUFPQSxJQUFJLENBQUNaLFdBQUwsQ0FBaUJhLElBQWpCLENBQ0ZELElBQUQsSUFBVUEsSUFBSSxDQUFDWCxTQUFMLElBQWtCaUUsT0FBTyxDQUFDakUsU0FEakMsQ0FBUDtBQUdILFNBTHNCLENBQTNCO0FBT0FpRSxlQUFPLENBQUN4RSxLQUFSLEdBQWdCZ0Isa0JBQWtCLENBQUNsRCxNQUFuQixHQUE0QixDQUE1QztBQUNILE9BVEQ7QUFVQVEsYUFBTyxDQUFDQyxHQUFSLENBQVlnRyxZQUFaO0FBQ0FwRyxXQUFLLENBQUNzQixZQUFOLENBQW1CZixLQUFuQixHQUEyQixDQUFDLEdBQUdQLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQXZCLEVBQThCNkYsWUFBOUIsQ0FBM0I7QUFDQTFCLFlBQU0sQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQjFFLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQXpDLENBQU47QUFDSCxLQXZJSzs7QUF3SU47QUFDQStGLHFCQUFpQixDQUNidEcsS0FEYSxFQUViQyxNQUZhLEVBTWY7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFlBQU1zRyxrQkFBa0IsR0FBR3ZHLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQW5CLENBQ3ZCTixNQUFNLENBQUN5RixPQUFQLENBQWVJLEtBRFEsRUFFekIzRCxXQUZ5QixDQUViZSxHQUZhLENBRVJtRCxPQUFELElBQWE7QUFDM0IsZUFBT0EsT0FBTyxDQUFDakUsU0FBZjtBQUNILE9BSjBCLENBQTNCO0FBS0FqQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWW1HLGtCQUFaOztBQUNBLFlBQU01QyxJQUFJLEdBQUcsQ0FBQ0MsSUFBRCxFQUFpQkMsS0FBakIsTUFBc0M7QUFDL0NDLFlBQUksRUFBRUQsS0FBSyxDQUFDZixNQUFOLENBQWNpQixDQUFELElBQU8sQ0FBQ0gsSUFBSSxDQUFDSSxRQUFMLENBQWNELENBQWQsQ0FBckIsQ0FEeUM7QUFFL0NFLFlBQUksRUFBRUwsSUFBSSxDQUFDZCxNQUFMLENBQWFpQixDQUFELElBQU8sQ0FBQ0YsS0FBSyxDQUFDRyxRQUFOLENBQWVELENBQWYsQ0FBcEI7QUFGeUMsT0FBdEMsQ0FBYjs7QUFJQSxZQUFNTSxNQUFNLEdBQUdWLElBQUksQ0FBQzRDLGtCQUFELEVBQXFCdEcsTUFBTSxDQUFDeUYsT0FBUCxDQUFlYyxVQUFwQyxDQUFuQjtBQUNBLFVBQUlsQyxXQUFKO0FBSUFuRSxhQUFPLENBQUNDLEdBQVIsQ0FBWWlFLE1BQVosRUF0QkYsQ0F3QkU7O0FBQ0EsVUFBSUEsTUFBTSxDQUFDSixJQUFQLENBQVl0RSxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCMkUsbUJBQVcsR0FBR3RFLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQW5CLENBQ1ZOLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZUksS0FETCxFQUVaM0QsV0FGWSxDQUVBVyxNQUZBLENBRU8sVUFBVXVELE9BQVYsRUFBbUI7QUFDcEM7QUFDQSxpQkFBT2hDLE1BQU0sQ0FBQ0osSUFBUCxDQUFZakIsSUFBWixDQUFrQnVCLEdBQUQsSUFBU0EsR0FBRyxJQUFJOEIsT0FBTyxDQUFDakUsU0FBekMsQ0FBUDtBQUNILFNBTGEsQ0FBZDtBQU1ILE9BUEQsTUFPTztBQUNIa0MsbUJBQVcsR0FDUHRFLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQW5CLENBQXlCTixNQUFNLENBQUN5RixPQUFQLENBQWVJLEtBQXhDLEVBQStDM0QsV0FEbkQ7QUFFSDs7QUFFRGhDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlrRSxXQUFaLEVBdENGLENBd0NFOztBQUNBRCxZQUFNLENBQUNQLElBQVAsQ0FBWVosR0FBWixDQUFpQnNCLEdBQUQsSUFBUztBQUNyQixZQUFJaUMsR0FBVyxHQUFHLENBQWxCLENBRHFCLENBRXJCOztBQUNBLGNBQU01RCxrQkFBa0IsR0FBRzdDLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQW5CLENBQXlCdUMsTUFBekIsQ0FDdkIsVUFBVUMsSUFBVixFQUFnQjtBQUNaLGlCQUFPQSxJQUFJLENBQUNaLFdBQUwsQ0FBaUJhLElBQWpCLENBQ0YwRCxlQUFELElBQ0lBLGVBQWUsQ0FBQ3RFLFNBQWhCLElBQTZCb0MsR0FGOUIsQ0FBUDtBQUlILFNBTnNCLENBQTNCLENBSHFCLENBV3JCOztBQUNBM0IsMEJBQWtCLENBQUNLLEdBQW5CLENBQXdCSCxJQUFELElBQVU7QUFDN0I7QUFDQSxjQUFJc0QsT0FBTyxHQUFHdEQsSUFBSSxDQUFDWixXQUFMLENBQWlCd0UsSUFBakIsQ0FDVEMsSUFBRCxJQUFVQSxJQUFJLENBQUN4RSxTQUFMLElBQWtCb0MsR0FEbEIsQ0FBZDtBQUdBaUMsYUFBRyxHQUFHSixPQUFPLENBQUN4RSxLQUFkLEdBQXVCNEUsR0FBRyxHQUFHSixPQUFPLENBQUN4RSxLQUFyQyxHQUE4QyxFQUE5QztBQUNILFNBTkQ7QUFRQSxjQUFNZ0YsV0FBVyxHQUFHO0FBQUV6RSxtQkFBUyxFQUFFb0MsR0FBYjtBQUFrQjNDLGVBQUssRUFBRTRFLEdBQUcsR0FBRztBQUEvQixTQUFwQjtBQUNBbkMsbUJBQVcsQ0FBQ0csSUFBWixDQUFpQm9DLFdBQWpCO0FBQ0F4RSwyQkFBbUIsQ0FBQ3JDLEtBQUQsRUFBUXdFLEdBQVIsQ0FBbkI7QUFDSCxPQXZCRDtBQXdCQXJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlrRSxXQUFaO0FBRUF0RSxXQUFLLENBQUNzQixZQUFOLENBQW1CZixLQUFuQixDQUNJTixNQUFNLENBQUN5RixPQUFQLENBQWVJLEtBRG5CLEVBRUUzRCxXQUZGLEdBRWdCbUMsV0FGaEI7QUFHQUksWUFBTSxDQUFFLFNBQVF6RSxNQUFNLENBQUN5RixPQUFQLENBQWVJLEtBQU0sY0FBL0IsRUFBOEMsVUFBOUMsRUFBMER4QixXQUExRCxDQUFOO0FBQ0gsS0F2Tks7O0FBd05OO0FBQ0F3QyxjQUFVLENBQUM5RyxLQUFELEVBQWtCQyxNQUFsQixFQUFpRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQU04RyxVQUFVLEdBQUcvRyxLQUFLLENBQUNzQixZQUFOLENBQW1CZixLQUFuQixDQUF5QnVDLE1BQXpCLENBQWdDLFVBQy9DdUQsT0FEK0MsRUFFL0NQLEtBRitDLEVBR2pEO0FBQ0UsZUFBT0EsS0FBSyxJQUFJN0YsTUFBTSxDQUFDeUYsT0FBdkI7QUFDSCxPQUxrQixDQUFuQjtBQU1BdkYsYUFBTyxDQUFDQyxHQUFSLENBQVkyRyxVQUFaO0FBQ0EvRyxXQUFLLENBQUNzQixZQUFOLENBQW1CZixLQUFuQixHQUEyQndHLFVBQTNCO0FBQ0FyQyxZQUFNLENBQUUsT0FBRixFQUFVLFVBQVYsRUFBc0JxQyxVQUF0QixDQUFOO0FBQ0gsS0F2T0s7O0FBd09OO0FBQ0FDLHFCQUFpQixDQUNiaEgsS0FEYSxFQUViQyxNQUZhLEVBR2Y7QUFDRUUsYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZXVCLFdBQTNCO0FBRUEsWUFBTW5CLEtBQUssR0FBRzlGLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQW5CLENBQXlCd0YsU0FBekIsQ0FBb0NNLE9BQUQsSUFBYTtBQUMxRCxlQUFPQSxPQUFPLENBQUN2RSxNQUFSLENBQWUsTUFBZixLQUEwQjdCLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZXVCLFdBQWhEO0FBQ0gsT0FGYSxDQUFkO0FBR0E5RyxhQUFPLENBQUNDLEdBQVIsQ0FBWTBGLEtBQVo7QUFDQSxZQUFNb0IsV0FBVyxHQUFHbEgsS0FBSyxDQUFDc0IsWUFBTixDQUFtQmYsS0FBbkIsQ0FDaEJ1RixLQURnQixFQUVsQjNELFdBRmtCLENBRU5XLE1BRk0sQ0FFQyxVQUFVdUQsT0FBVixFQUFtQjtBQUNwQyxlQUFPQSxPQUFPLENBQUNqRSxTQUFSLElBQXFCbkMsTUFBTSxDQUFDeUYsT0FBUCxDQUFlekQsU0FBM0M7QUFDSCxPQUptQixDQUFwQjtBQUtBakMsV0FBSyxDQUFDc0IsWUFBTixDQUFtQmYsS0FBbkIsQ0FBeUJ1RixLQUF6QixFQUFnQzNELFdBQWhDLEdBQThDK0UsV0FBOUM7QUFDQS9HLGFBQU8sQ0FBQ0MsR0FBUixDQUFZOEcsV0FBWjtBQUNBeEMsWUFBTSxDQUFFLFNBQVFvQixLQUFNLGNBQWhCLEVBQStCLFVBQS9CLEVBQTJDb0IsV0FBM0MsQ0FBTixDQWRGLENBZUU7QUFDSCxLQTVQSzs7QUE2UE47QUFDQUMsbUJBQWUsQ0FBQ25ILEtBQUQsRUFBa0JDLE1BQWxCLEVBQWlEO0FBQzVELFVBQUltSCxLQUFhLEdBQUcsQ0FBcEI7QUFDQXBILFdBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJVLE9BQW5CLENBQTJCa0IsR0FBM0IsQ0FBZ0NtRSxjQUFELElBQW9CO0FBQy9DQSxzQkFBYyxDQUFDcEYsU0FBZixHQUEyQm1GLEtBQTNCLEdBQ09BLEtBQUssR0FBR0MsY0FBYyxDQUFDcEYsU0FEOUIsR0FFTSxFQUZOO0FBR0gsT0FKRDtBQUtBLFlBQU1xRixVQUFVLEdBQUc7QUFDZnJGLGlCQUFTLEVBQUVtRixLQUFLLEdBQUcsQ0FESjtBQUVmbEYsbUJBQVcsRUFBRWpDLE1BQU0sQ0FBQ3lGO0FBRkwsT0FBbkI7QUFJQTFGLFdBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJVLE9BQW5CLEdBQTZCLENBQUMsR0FBR2hDLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJVLE9BQXZCLEVBQWdDc0YsVUFBaEMsQ0FBN0I7QUFDQTVDLFlBQU0sQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QjFFLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJVLE9BQTNDLENBQU47QUFDSCxLQTNRSzs7QUE0UU47QUFDQXVGLGlCQUFhLENBQUN2SCxLQUFELEVBQWtCQyxNQUFsQixFQUFpRDtBQUMxRCxZQUFNdUgsaUJBQWlCLEdBQUd4SCxLQUFLLENBQUNzQixZQUFOLENBQW1CVSxPQUFuQixDQUEyQmMsTUFBM0IsQ0FDckJ1RSxjQUFELElBQW9CO0FBQ2hCO0FBQ0E7QUFDQSxlQUFPQSxjQUFjLENBQUNwRixTQUFmLElBQTRCaEMsTUFBTSxDQUFDeUYsT0FBMUM7QUFDSCxPQUxxQixDQUExQjtBQVFBdkYsYUFBTyxDQUFDQyxHQUFSLENBQVlvSCxpQkFBWjtBQUNBeEgsV0FBSyxDQUFDc0IsWUFBTixDQUFtQlUsT0FBbkIsR0FBNkJ3RixpQkFBN0IsQ0FWMEQsQ0FZMUQ7QUFDQTtBQUVBOztBQUNBLFVBQUlDLGNBQWMsR0FBR3pILEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJmLEtBQW5CLENBQXlCMkMsR0FBekIsQ0FBOEJILElBQUQsSUFBVTtBQUN4RCxjQUFNMkUsaUJBQWlCLEdBQUczRSxJQUFJLENBQUNaLFdBQUwsQ0FBaUJXLE1BQWpCLENBQ3JCNEQsZUFBRCxJQUFxQjtBQUNqQixpQkFBT0EsZUFBZSxDQUFDdEUsU0FBaEIsSUFBNkJuQyxNQUFNLENBQUN5RixPQUEzQztBQUNILFNBSHFCLENBQTFCO0FBS0EsY0FBTWlDLFVBUUwsR0FBRztBQUFFN0YsZ0JBQU0sRUFBRWlCLElBQUksQ0FBQ2pCLE1BQWY7QUFBdUJLLHFCQUFXLEVBQUV1RjtBQUFwQyxTQVJKO0FBU0EsZUFBT0MsVUFBUDtBQUNILE9BaEJvQixDQUFyQjtBQWlCQXhILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZcUgsY0FBWjtBQUNBekgsV0FBSyxDQUFDc0IsWUFBTixDQUFtQmYsS0FBbkIsR0FBMkJrSCxjQUEzQixDQW5DMEQsQ0FxQzFEOztBQUNBLFlBQU1oRixLQUFLLEdBQUcsSUFBSWpCLElBQUosRUFBZDtBQUNBLFlBQU1rQixPQUFPLEdBQUdELEtBQUssQ0FBQ2hCLFdBQU4sRUFBaEI7QUFDQSxZQUFNa0IsUUFBUSxHQUFHRixLQUFLLENBQUNmLFFBQU4sS0FBbUIsQ0FBcEM7QUFDQSxZQUFNa0IsT0FBTyxHQUFHSCxLQUFLLENBQUNkLE9BQU4sRUFBaEI7QUFDQSxZQUFNdUMsUUFBUSxHQUFHM0IsTUFBTSxDQUFDQyxJQUFQLENBQVl4QyxLQUFLLENBQUNzQixZQUFOLENBQW1CQyxRQUEvQixDQUFqQjs7QUFDQSxZQUFNcUcsa0JBQWtCLEdBQUcsQ0FDdkJDLElBRHVCLEVBRXZCQyxLQUZ1QixFQUd2QkMsSUFIdUIsS0FJdEI7QUFDRCxZQUNJL0gsS0FBSyxDQUFDc0IsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEIrQixRQUFRLENBQUN1RSxJQUFELENBQXBDLEVBQ0l2RSxRQUFRLENBQUN3RSxLQUFELENBRFosRUFFRXhFLFFBQVEsQ0FBQ3lFLElBQUQsQ0FGVixFQUVrQm5HLFNBRmxCLElBRStCM0IsTUFBTSxDQUFDeUYsT0FIMUMsRUFJRTtBQUNFLGlCQUFPMUYsS0FBSyxDQUFDc0IsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEIrQixRQUFRLENBQUN1RSxJQUFELENBQXBDLEVBQ0h2RSxRQUFRLENBQUN3RSxLQUFELENBREwsRUFFTHhFLFFBQVEsQ0FBQ3lFLElBQUQsQ0FGSCxDQUFQO0FBR0g7QUFDSixPQWREOztBQWVBN0QsY0FBUSxDQUFDaEIsR0FBVCxDQUFjMkUsSUFBRCxJQUFVO0FBQ25CLGNBQU1yRSxRQUFRLEdBQUdqQixNQUFNLENBQUNDLElBQVAsQ0FDYnhDLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCK0IsUUFBUSxDQUFDdUUsSUFBRCxDQUFwQyxDQURhLENBQWpCOztBQUdBLFlBQUl2RSxRQUFRLENBQUN1RSxJQUFELENBQVIsR0FBaUJuRixPQUFyQixFQUE4QjtBQUMxQjtBQUNBYyxrQkFBUSxDQUFDTixHQUFULENBQWM0RSxLQUFELElBQVc7QUFDcEIsa0JBQU1wRSxPQUFPLEdBQUduQixNQUFNLENBQUNDLElBQVAsQ0FDWnhDLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCK0IsUUFBUSxDQUFDdUUsSUFBRCxDQUFwQyxFQUNBdkUsUUFBUSxDQUFDd0UsS0FBRCxDQURSLENBRFksQ0FBaEI7QUFLQXBFLG1CQUFPLENBQUNSLEdBQVIsQ0FBYTZFLElBQUQsSUFBVTtBQUNsQkgsZ0NBQWtCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFjQyxJQUFkLENBQWxCO0FBQ0gsYUFGRDtBQUdILFdBVEQ7QUFVSCxTQVpELE1BWU8sSUFBSXpFLFFBQVEsQ0FBQ3VFLElBQUQsQ0FBUixJQUFrQm5GLE9BQXRCLEVBQStCO0FBQ2xDO0FBQ0FjLGtCQUFRLENBQUNOLEdBQVQsQ0FBYzRFLEtBQUQsSUFBVztBQUNwQixrQkFBTXBFLE9BQU8sR0FBR25CLE1BQU0sQ0FBQ0MsSUFBUCxDQUNaeEMsS0FBSyxDQUFDc0IsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEIrQixRQUFRLENBQUN1RSxJQUFELENBQXBDLEVBQ0F2RSxRQUFRLENBQUN3RSxLQUFELENBRFIsQ0FEWSxDQUFoQjs7QUFLQSxnQkFBSXhFLFFBQVEsQ0FBQ3dFLEtBQUQsQ0FBUixHQUFrQm5GLFFBQXRCLEVBQWdDO0FBQzVCO0FBQ0F4QyxxQkFBTyxDQUFDQyxHQUFSLENBQVlzRCxPQUFaO0FBQ0FBLHFCQUFPLENBQUNSLEdBQVIsQ0FBYTZFLElBQUQsSUFBVTtBQUNsQkgsa0NBQWtCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFjQyxJQUFkLENBQWxCO0FBQ0gsZUFGRDtBQUdILGFBTkQsTUFNTyxJQUFJekUsUUFBUSxDQUFDd0UsS0FBRCxDQUFSLElBQW1CbkYsUUFBdkIsRUFBaUM7QUFDcEM7QUFDQWUscUJBQU8sQ0FBQ1IsR0FBUixDQUFhNkUsSUFBRCxJQUFVO0FBQ2xCLG9CQUFJekUsUUFBUSxDQUFDeUUsSUFBRCxDQUFSLEdBQWlCbkYsT0FBckIsRUFBOEI7QUFDMUI7QUFDQWdGLG9DQUFrQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBY0MsSUFBZCxDQUFsQjtBQUNIO0FBQ0osZUFMRDtBQU1IO0FBQ0osV0FyQkQ7QUFzQkg7QUFDSixPQXpDRDtBQTBDQXJELFlBQU0sQ0FBQyxFQUFELEVBQUssVUFBTCxFQUFpQjFFLEtBQUssQ0FBQ3NCLFlBQXZCLENBQU47QUFDSCxLQWxYSzs7QUFtWE47QUFDQTBHLG1CQUFlLENBQ1hoSSxLQURXLEVBRVhDLE1BRlcsRUFNYjtBQUNFO0FBQ0EsWUFBTWdJLGdCQUFnQixHQUFHakksS0FBSyxDQUFDc0IsWUFBTixDQUFtQlUsT0FBbkIsQ0FBMkIrRCxTQUEzQixDQUNwQnNCLGNBQUQsSUFDSUEsY0FBYyxDQUFDcEYsU0FBZixJQUE0QmhDLE1BQU0sQ0FBQ3lGLE9BQVAsQ0FBZXdDLGFBRjFCLENBQXpCLENBRkYsQ0FNRTs7QUFDQWxJLFdBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJVLE9BQW5CLENBQTJCaUcsZ0JBQTNCLEVBQTZDL0YsV0FBN0MsR0FBMkRqQyxNQUFNLENBQUN5RixPQUFQLENBQWV4RCxXQUExRTtBQUVBd0MsWUFBTSxDQUFFLFdBQVV1RCxnQkFBaUIsRUFBN0IsRUFBZ0MsUUFBaEMsRUFBMENqSSxLQUFLLENBQUNzQixZQUFOLENBQW1CVSxPQUFuQixDQUEyQmlHLGdCQUEzQixDQUExQyxDQUFOO0FBRUg7O0FBcllLO0FBSGtCLENBQUQsQ0FBL0I7QUE0WU8sTUFBTTtBQUNUekMsTUFEUztBQUVURyxVQUZTO0FBR1RDLFdBSFM7QUFJVEMsbUJBSlM7QUFLVEcseUJBTFM7QUFNVEUsb0JBTlM7QUFPVEMsY0FQUztBQVFURyxtQkFSUztBQVNUUSxZQVRTO0FBVVRFLG1CQVZTO0FBV1RHLGlCQVhTO0FBWVRJLGVBWlM7QUFhVFM7QUFiUyxJQWNUeEgsV0FBVyxDQUFDMkgsT0FkVDtBQWdCUTNILDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2p1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsTUFBTUssWUFBbUIsR0FBRztBQUN4QlEsUUFBTSxFQUFFO0FBRGdCLENBQTVCO0FBSUEsTUFBTVgsVUFBVSxHQUFHMkUsb0VBQVcsQ0FBQztBQUMzQkMsTUFBSSxFQUFFLE1BRHFCO0FBRTNCekUsY0FGMkI7QUFHM0IwRSxVQUFRLEVBQUU7QUFDTjZDLFNBQUssQ0FBQ3BJLEtBQUQsRUFBZUMsTUFBZixFQUE4QztBQUMvQ0UsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBSyxDQUFDcUIsTUFBbEI7QUFFQWxCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUN5RixPQUFuQjtBQUNBMUYsV0FBSyxDQUFDcUIsTUFBTixHQUFlcEIsTUFBTSxDQUFDeUYsT0FBdEI7QUFDQXZGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFLLENBQUNxQixNQUFsQjtBQUNILEtBUks7O0FBU05nSCxVQUFNLENBQUNySSxLQUFELEVBQWU7QUFDakJHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQUosV0FBSyxDQUFDcUIsTUFBTixHQUFlLEVBQWY7QUFDSDs7QUFaSztBQUhpQixDQUFELENBQTlCO0FBb0JPLE1BQU07QUFBRStHLE9BQUY7QUFBU0M7QUFBVCxJQUFvQjNILFVBQVUsQ0FBQ3lILE9BQXJDO0FBRVF6SCx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFFQTtBQUNBO0FBRU8sTUFBTTRILFdBQVcsZ0JBQUd0SCwyREFBYSxDQUFDLEVBQUQsQ0FBakM7O0FBQ1AsTUFBTXVILFlBQVksR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQXdDO0FBQ3pELFNBQ0ksTUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRTlILHNEQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxTQUFELGVBQWU4SCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixDQURKLENBREo7QUFPSCxDQVJEOztBQVVlRiwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuLy8g6KqN6Ki85ZGo44KK44KERELlkajjgorjgaflv4XopoHjgarjgZ/jgoFpbXBvcnTjgZfjgabjgYrjgY9cclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QlVTVUFrbmhlM0lVUjB1UjBvZFd3U0M1aGZBbU1nb2trXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImhhYml0LXBsYW4uZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2hhYml0LXBsYW4uZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJoYWJpdC1wbGFuXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImhhYml0LXBsYW4uYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM4OTgxMDE2NjgwOFwiLFxyXG4gICAgYXBwSWQ6IFwiMTozODk4MTAxNjY4MDg6d2ViOjBmMjI1YmFkYjNkZWEwNjNmZWY3NmRcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy0wMFhLSEsyR1kyXCIsXHJcbn07XHJcblxyXG5pZiAoZmlyZWJhc2UuYXBwcy5sZW5ndGggPT09IDApIHtcclxuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuZXhwb3J0IHsgZmlyZWJhc2UsIGF1dGgsIGRhdGFiYXNlIH07XHJcbiIsImltcG9ydCB7IHVzZURhdGFiYXNlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvREJGZXRjaFwiO1xyXG5pbXBvcnQgeyB1c2VySW5mbywgQWN0aW9ucyB9IGZyb20gXCIuL3VzZXJUYXNrc1R5cGVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZTogbnVtYmVyLCBhY3Rpb246IEFjdGlvbnMpOiBudW1iZXIgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJBRERfVE9ET1wiOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBBRERfVE9ETycpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgc3RhdGUgKyAxXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBjYXNlIFwiVE9HR0xFX1RPRE9cIjpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgQUREX1RPRE8nKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB0YXNrc01vZHVsZSBmcm9tICcuL3Rhc2tzTW9kdWxlJztcclxuaW1wb3J0IHVzZXJNb2R1bGUgZnJvbSAnLi91c2VyTW9kdWxlJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHRhc2tzOiB0YXNrc01vZHVsZS5yZWR1Y2VyLFxyXG4gICAgdXNlcjogdXNlck1vZHVsZS5yZWR1Y2VyXHJcbn0pXHJcblxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIFN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcic7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xyXG5pbXBvcnQgeyB1c2VySW5mbyB9IGZyb20gJy4vdXNlclRhc2tzVHlwZSc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiByb290UmVkdWNlclxyXG59KVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBudW1iZXIgPSAwO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0b3JlcyA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8bnVtYmVyIHwgYW55Pihpbml0aWFsU3RhdGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0b3JlUHJvdmlkZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9yZXMuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PiB7IGNoaWxkcmVufSA8L1N0b3Jlcy5Qcm92aWRlcj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmUiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHN1YlNlY29uZHMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvZmlyZWJhc2VUZXN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBjYWxlbmRhcixcclxuICAgIHBhdHRlcm4sXHJcbiAgICB0YXNrcyxcclxuICAgIHVzZXJJbmZvLFxyXG4gICAgdXNlclRhc2tJbmZvLFxyXG59IGZyb20gXCIuL3VzZXJUYXNrc1R5cGVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IHVzZXJJbmZvID0ge1xyXG4gICAgdXNlcklkOiAnJyxcclxuICAgIHVzZXJUYXNrSW5mbzoge1xyXG4gICAgICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKV06IHtcclxuICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDFdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBPY3QgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIzIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYXR0ZXJuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBcInRlc3RQYXR0ZXJuMVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IDIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogXCJ0ZXN0UGF0dGVybjJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcblxyXG4vLyBjb25zdCBkaWZmID0gKG9sZHM6IGFueVtdLCBuZXh0czogYW55W10pID0+ICh7XHJcbi8vICAgICBhZGRzOiBuZXh0cy5maWx0ZXIoKGUpID0+ICFvbGRzLmluY2x1ZGVzKGUpKSxcclxuLy8gICAgIHN1YnM6IG9sZHMuZmlsdGVyKChlKSA9PiAhbmV4dHMuaW5jbHVkZXMoZSkpLFxyXG4vLyB9KTtcclxuXHJcbi8vIOODkeOCv+ODvOODs+abtOaWsOaZguOBq+acquadpeOBq+ioreWumuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs+OBruWGheWuueOCkuabtOaWsOOBmeOCi+OAglxyXG4vLyDmm7TmlrDlr77osaHjga9zdGF0ZS5jYWxlbmRhci50YXNrc1xyXG4vLyDlubTmnIjml6XjgYzmnKrmnaXjgafjgYLjgorjgIHjgYvjgaTjgIHjg5Hjgr/jg7zjg7NJROOBjOWQjOOBmOOCguOBruOCkuWvvuixoeOBq+aWsOOBl+OBhOODkeOCv+ODvOODs+OCkueZu+mMsuOBmeOCi+OAglxyXG5jb25zdCBmdXR1cmVQYXR0ZXJuVXBkYXRlID0gKHN0YXRlOiB1c2VySW5mbywgdXBkYXRlUGF0dGVybklkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiPT09PWZ1dHVyZVBhdHRlcm5VcGRhdGXjgZPjgZPjgYvjgok9PT09XCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcikpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3Qgbm93WWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBub3dNb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgY29uc3Qgbm93RGF0ZSA9IHRvZGF5LmdldERhdGUoKTtcclxuXHJcbiAgICBjb25zdCBjaG9pY2VQYXR0ZXJuVGFza3MgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IHVwZGF0ZVBhdHRlcm5JZFxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDjg5Hjgr/jg7zjg7NJROOBq+e0kOS7mOOBj+OCv+OCueOCr+S4gOimp+OBi+OCieOCq+ODrOODs+ODgOODvOOBuOOBrueZu+mMsuaDheWgseOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgY29uc3QgdXBkYXRlVGFza3MgPSBjaG9pY2VQYXR0ZXJuVGFza3MubWFwKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgLy8g44OR44K/44O844Oz44GM6KSH5pWw55m76Yyy44GV44KM44Gm44GE44KL44K/44K544Kv44G444Gu5a++5b+c44Go44GX44Gm44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgavoqbLlvZPjgZnjgovopoHntKDjgaDjgZHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICBjb25zdCB0YXNrUGF0dGVybiA9IHRhc2sucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChwYXR0ZXJuSW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybkluZm8ucGF0dGVybklEID09IHVwZGF0ZVBhdHRlcm5JZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g6YWN5YiX44Gu44K/44K544Kv44Go5oq95Ye644GX44Gf44OR44K/44O844Oz5oOF5aCx44KS5pW05b2i44GX44Gm6L+U44GZ44CCXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3JkZXI6IHRhc2tQYXR0ZXJuWzBdLm9yZGVyLFxyXG4gICAgICAgICAgICBkZXRhaWw6IHRhc2suZGV0YWlsLFxyXG4gICAgICAgICAgICAvLyBkZXRhaWwyOiB0YXNrLmRldGFpbDIsXHJcbiAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBrZXlNb250aExpc3QgPSAoa2V5WWVhcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGtleURhdGVMaXN0ID0gKGtleVllYXI6IHN0cmluZywga2V5TW9udGg6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtwYXJzZUludChrZXlNb250aCldXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGF0ZVRhc2tVcGRhdGUgPSAoXHJcbiAgICAgICAga2V5WWVhcjogc3RyaW5nLFxyXG4gICAgICAgIGtleU1vbnRoOiBzdHJpbmcsXHJcbiAgICAgICAga2V5RGF0ZTogc3RyaW5nXHJcbiAgICApID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bcGFyc2VJbnQoa2V5TW9udGgpXVtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleURhdGUpXHJcbiAgICAgICAgICAgIF0uUGF0dGVybklkID09IHVwZGF0ZVBhdHRlcm5JZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildW3BhcnNlSW50KGtleU1vbnRoKV1bXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludChrZXlEYXRlKVxyXG4gICAgICAgICAgICBdLnRhc2tzID0gdXBkYXRlVGFza3M7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09ZGF0ZVRhc2tVcGRhdGU9PT1cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleVllYXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlNb250aCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleURhdGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVUYXNrcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0eXBlIGNhbGVuZGFyUGF0dGVybiA9IHtcclxuICAgICAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICBbY29udGVudDogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmx1ZzogYm9vbGVhbjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlmZiA9IChvbGRzOiBjYWxlbmRhclBhdHRlcm5bXSwgbmV4dHM6IGNhbGVuZGFyUGF0dGVybltdKSA9PiAoe1xyXG4gICAgICAgIGFkZHM6IG5leHRzLmZpbHRlcigoZSkgPT4gIW9sZHMuaW5jbHVkZXMoZSkpLFxyXG4gICAgICAgIHN1YnM6IG9sZHMuZmlsdGVyKChlKSA9PiAhbmV4dHMuaW5jbHVkZXMoZSkpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g55m76Yyy44GV44KM44Gm44GE44KL5bm044Gu6YCj5oOz6YWN5YiX44Gu44Kt44O844KS5YWo44Gm5Y+W5b6XXHJcbiAgICBjb25zdCBrZXlZZWFycyA9IE9iamVjdC5rZXlzKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcik7XHJcbiAgICBrZXlZZWFycy5tYXAoKGtleVllYXIpID0+IHtcclxuICAgICAgICBpZiAocGFyc2VJbnQoa2V5WWVhcikgPT0gbm93WWVhcikge1xyXG4gICAgICAgICAgICAvLyDjgoLjgZfku4rlubTjgaDjgaPjgZ/jgonjgIHjga7lh6bnkIZcclxuICAgICAgICAgICAgLy8g55m76Yyy44GV44KM44Gm44GE44KL5pyI44Gu6YCj5oOz6YWN5YiX44Gu44Kt44O844KS5YWo44Gm5Y+W5b6XXHJcbiAgICAgICAgICAgIGNvbnN0IGtleU1vbnRocyA9IGtleU1vbnRoTGlzdChrZXlZZWFyKTtcclxuXHJcbiAgICAgICAgICAgIGtleU1vbnRocy5tYXAoKGtleU1vbnRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoa2V5TW9udGgpID09IG5vd01vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g44KC44GX5LuK5pyI44Gg44Gj44Gf44KJXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g55m76Yyy44GV44KM44Gm44GE44KL5pel44Gu6YCj5oOz6YWN5YiX44Gu44Kt44O844KS5YWo44Gm5Y+W5b6XXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZXMgPSBrZXlEYXRlTGlzdChrZXlZZWFyLCBrZXlNb250aCk7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5RGF0ZXMubWFwKChrZXlEYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChrZXlEYXRlKSA+IG5vd0RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOCguOBl+aYjuaXpeS7pemZjeOBoOOBo+OBn+OCieeZu+mMsuWGheWuueOCkuabtOaWsOOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRhc2tVcGRhdGUoa2V5WWVhciwga2V5TW9udGgsIGtleURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGtleURhdGUpID09IG5vd0RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOCguOBl+S7iuaXpeOBoOOBo+OBn+OCieOAgeWkieabtOWIhuOBoOOBkeWPjeaYoOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yem55CG5pyq5L2c5oiQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5TW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChrZXlEYXRlKV0uUGF0dGVybklkID09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGF0dGVybklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkaWZmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChrZXlZZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGtleU1vbnRoKV1bcGFyc2VJbnQoa2V5RGF0ZSldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGFza3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRhc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVBcnJheSA9IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5WWVhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGtleU1vbnRoKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleURhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3ViKSA9PiBzdWIgIT0gdGFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkcy5tYXAoKGFkZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcnJheS5wdXNoKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5TW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChrZXlEYXRlKV0udGFza3MgPSB1cGRhdGVBcnJheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChrZXlNb250aCkgPiBub3dNb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOOCguOBl+adpeaciOS7pemZjeOBoOOBo+OBn+OCieOAgeOBmeOBueOBpuabtOaWsOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGVzID0ga2V5RGF0ZUxpc3Qoa2V5WWVhciwga2V5TW9udGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleURhdGVzLm1hcCgoa2V5RGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGFza1VwZGF0ZShrZXlZZWFyLCBrZXlNb250aCwga2V5RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoa2V5WWVhcikgPiBub3dZZWFyKSB7XHJcbiAgICAgICAgICAgIC8vIOOCguOBl+adpeW5tOS7pemZjeOBoOOBo+OBn+OCieOAgeOBruWHpueQhuOAguWFqOOBpuabtOaWsOOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCBrZXlNb250aHMgPSBrZXlNb250aExpc3Qoa2V5WWVhcik7XHJcbiAgICAgICAgICAgIGtleU1vbnRocy5tYXAoKGtleU1vbnRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlcyA9IGtleURhdGVMaXN0KGtleVllYXIsIGtleU1vbnRoKTtcclxuICAgICAgICAgICAgICAgIGtleURhdGVzLm1hcCgoa2V5RGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVUYXNrVXBkYXRlKGtleVllYXIsIGtleU1vbnRoLCBrZXlEYXRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIj09PT1mdXR1cmVQYXR0ZXJuVXBkYXRl44GT44GT44G+44GnPT09PVwiKTtcclxufTtcclxuXHJcbmNvbnN0IERCQ1JVRCA9IChwYXNzOiBzdHJpbmcsIGNydWQ6IHN0cmluZywgdXBkYXRlRG9jdW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgdXNlcklkID0gYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgICBsZXQgcmVmUGFzcyA9ICcvJyArIHBhc3M7XHJcbiAgICBpZiAocGFzcyA9PSAnJykge1xyXG4gICAgICAgIHJlZlBhc3MgPSAnJ1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCIvdXNlcnMvXCIgKyB1c2VySWQgKyByZWZQYXNzKTtcclxuXHJcbiAgICBzd2l0Y2ggKGNydWQpIHtcclxuICAgICAgICBjYXNlICdyZWdpc3Rlcic6XHJcbiAgICAgICAgICAgIHJlZi5zZXQodXBkYXRlRG9jdW1lbnQpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3VwZGF0ZSc6XHJcbiAgICAgICAgICAgIHJlZi51cGRhdGUodXBkYXRlRG9jdW1lbnQpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2RlbGV0ZSc6XHJcbiAgICAgICAgICAgIHJlZi5yZW1vdmUoKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdGFza3NNb2R1bGUgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInRhc2tzXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGluaXQoc3RhdGU6IHVzZXJJbmZvLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dXNlclRhc2tJbmZvPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBkYXRhXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgLy8gc3RhdGUgPSB7Li4uZGF0YX07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pdCBzdGF0ZS51c2VyVGFza0luZm8g5YmNXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8pO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8gPSBkYXRhO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluaXQgc3RhdGUudXNlclRhc2tJbmZvIOW+jFwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlZ2lzdGVyKHN0YXRlOiB1c2VySW5mbywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJJbmZvPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIC4uLmRhdGEgfTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXRlJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFsbERlbGV0ZShzdGF0ZTogdXNlckluZm8pIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgYWxsRGVsZXRlXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gRGF5UGxhbuOBq+OBpuOCv+OCueOCr+OCkuOCr+ODquODg+OCr+OBl+OBn+mam+OBq+WujOS6huODleODqeOCsOOCknRydWXjgavlpInmm7TjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjgablubTjgIHmnIjjgIHml6XjgIHjgr/jgrnjgq/jga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLlj5fjgZHlj5bjgaPjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrQ2hlY2tDb21wbGV0ZShzdGF0ZTogdXNlckluZm8sIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXJbXT4pIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3MuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgKHRhc2tzKSA9PiB0YXNrcy5vcmRlciA9PSBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bYWN0aW9uLnBheWxvYWRbMV1dW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMl1cclxuICAgICAgICAgICAgXS50YXNrc1tpbmRleF0uZmx1ZyA9ICFzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgICAgICBdW2FjdGlvbi5wYXlsb2FkWzFdXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3NbaW5kZXhdLmZsdWc7XHJcblxyXG4gICAgICAgICAgICBEQkNSVUQoYGNhbGVuZGFyLyR7YWN0aW9uLnBheWxvYWRbMF19LyR7YWN0aW9uLnBheWxvYWRbMV19LyR7YWN0aW9uLnBheWxvYWRbMl19L3Rhc2tzLyR7aW5kZXh9YCxcclxuICAgICAgICAgICAgICAgICd1cGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVthY3Rpb24ucGF5bG9hZFsxXV1bYWN0aW9uLnBheWxvYWRbMl1dLnRhc2tzW2luZGV4XVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5byV5pWw44Gvc3RhdGXjgajlubTjgIHmnIjjgIHml6XjgIHpgbjmip7jgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7NJROOBrjTjgaTjga7mlbDlgKTjgYzmoLzntI3jgZXjgozjgZ/phY3liJdcclxuICAgICAgICBjYWxlbmRhclBhdHRlcm5SZWdpc3RlcihcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJJbmZvLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyW10+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIHN0YXRl44GL44KJ6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgYzoqK3lrprjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IGFjdGlvbi5wYXlsb2FkWzNdXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOODkeOCv+ODvOODs0lE44Gr57SQ5LuY44GP44K/44K544Kv5LiA6Kan44GL44KJ44Kr44Os44Oz44OA44O844G444Gu55m76Yyy5oOF5aCx44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IFRvZGF5VGFza3MgPSBjaG9pY2VQYXR0ZXJuVGFza3MubWFwKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7PjgYzopIfmlbDnmbvpjLLjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgbjjga7lr77lv5zjgajjgZfjgabjgIHpgbjmip7jgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7NJROOBq+ipsuW9k+OBmeOCi+imgee0oOOBoOOBkeOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1BhdHRlcm4gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybkluZm9cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuSW5mby5wYXR0ZXJuSUQgPT0gYWN0aW9uLnBheWxvYWRbM107XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDphY3liJfjga7jgr/jgrnjgq/jgajmir3lh7rjgZfjgZ/jg5Hjgr/jg7zjg7Pmg4XloLHjgpLmlbTlvaLjgZfjgabov5TjgZnjgIJcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHRhc2tQYXR0ZXJuWzBdLm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogdGFzay5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGV0YWlsMjogdGFzay5kZXRhaWwyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDjgZPjgZPjgavlubTjgYzjgarjgYvjgaPjgZ/mmYLjga7lh6bnkIbjgpLliqDjgYjjgotcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkWzBdIGluIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcikge1xyXG4gICAgICAgICAgICAgICAgLy8gc3RhdGXjga5Nb250aOOBrumAo+aDs+mFjeWIl+OBq+aWsOOBl+OBhOaXpeS7mOOBrumAo+aDs+mFjeWIl+OCkui/veWKoOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgLy8g6L+95Yqg5oOF5aCx44Gv5byV5pWw44Gu5pel44Go44GT44KM44G+44Gn44Gu5Yem55CG44Gn5L2c5oiQ44GX44Gf44Kr44Os44Oz44OA44O855m76Yyy55So5oOF5aCxXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgICAgICBdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZFsyXV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiBhY3Rpb24ucGF5bG9hZFszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFRvZGF5VGFza3MsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdGF0ZeOBrk1vbnRo44Gu6YCj5oOz6YWN5YiX44Gr5paw44GX44GE5pel5LuY44Gu6YCj5oOz6YWN5YiX44KS6L+95Yqg44GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICAvLyDov73liqDmg4XloLHjga/lvJXmlbDjga7ml6XjgajjgZPjgozjgb7jgafjga7lh6bnkIbjgafkvZzmiJDjgZfjgZ/jgqvjg6zjg7Pjg4Djg7znmbvpjLLnlKjmg4XloLFcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXSxcclxuICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMV1dOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZFsyXV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogYWN0aW9uLnBheWxvYWRbM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogVG9kYXlUYXNrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBEQkNSVUQoYGNhbGVuZGFyLyR7YWN0aW9uLnBheWxvYWRbMF19LyR7YWN0aW9uLnBheWxvYWRbMV19LyR7YWN0aW9uLnBheWxvYWRbMl19YCwgJ3VwZGF0ZScsIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bYWN0aW9uLnBheWxvYWRbMV1dW2FjdGlvbi5wYXlsb2FkWzJdXSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsyXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OBruips+e0sOOCkuioreWumuOBmeOCi+WHpueQhuOAguW8leaVsOOBruODhuOCreOCueODiOmFjeWIl+OBq+OBr1vlhaXlipvlhoXlrrnjgIHpgKPmg7PphY3liJfjga7jgq3jg7zjgIHjgr/jgrnjgq/jga7phY3liJfjgpLmjIflrprjgZnjgovmlbDlrZdd44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza0RldGFpbFJlZ2lzdGVyKHN0YXRlOiB1c2VySW5mbywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQoYWN0aW9uLnBheWxvYWRbMl0pXS5kZXRhaWwgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQoYWN0aW9uLnBheWxvYWRbMl0pXS5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMV1dOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgREJDUlVEKGB0YXNrcy8ke1twYXJzZUludChhY3Rpb24ucGF5bG9hZFsyXSldfS9kZXRhaWxgLCAndXBkYXRlJywgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KGFjdGlvbi5wYXlsb2FkWzJdKV0uZGV0YWlsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OCkui/veWKoOOBmeOCi+WHpueQhuOAguW8leaVsOOBruODhuOCreOCueODiOmFjeWIl+OBq+OBr1vlhaXlipvlhoXlrrnjgIHpgKPmg7PphY3liJfjga7jgq3jg7zjgIHjgr/jgrnjgq/jga7phY3liJfjgpLmjIflrprjgZnjgovmlbDlrZdd44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza1JlZ2lzdGVyKHN0YXRlOiB1c2VySW5mbywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHRhc2tzPikge1xyXG4gICAgICAgICAgICBjb25zdCByZWdpc3RlclRhc2sgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmVnaXN0ZXJUYXNrLnBhdHRlcm5JbmZvLm1hcCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IGNvbnRlbnQucGF0dGVybklEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQub3JkZXIgPSBjaG9pY2VQYXR0ZXJuVGFza3MubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlZ2lzdGVyVGFzayk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcyA9IFsuLi5zdGF0ZS51c2VyVGFza0luZm8udGFza3MsIHJlZ2lzdGVyVGFza107XHJcbiAgICAgICAgICAgIERCQ1JVRCgndGFza3MnLCAncmVnaXN0ZXInLCBzdGF0ZS51c2VyVGFza0luZm8udGFza3MpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44Gu44OR44K/44O844Oz55m76Yyy54q25rOB44KS5pu05paw44GZ44KL44CCXHJcbiAgICAgICAgdGFza1BhdHRlcm5VcGRhdGUoXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VySW5mbyxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICAgICAgICAgIG5ld0NoZWNrZWQ6IG51bWJlcltdO1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IG51bWJlcjtcclxuICAgICAgICAgICAgfT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8g44GT44GT44Gn44KE44KL44GT44Go44Gv77yfXHJcbiAgICAgICAgICAgIC8vIOOBvuOBmuW8leaVsOOBq+OCv+OCueOCr+OBrumFjeWIl+OCpOODs+ODh+ODg+OCr+OCueeVquWPt+OBjOW/heimgVxyXG4gICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7NJROOBrumFjeWIl+OCkuWPl+OBkeWPluOCi+OAglxyXG4gICAgICAgICAgICAvLyDphY3liJfjgahzdGF0ZeOCkuavlOi8g+OBl+OBpuOAgeOBquOBkeOCjOOBsOeZu+mMsuOAgk9yZGVy44Gv5pyA5aSn5YCkKzHjgILpgIbjgavliYrpmaTjgZXjgozjgabjgYTjgovjgoLjga7jga/pmaTlpJbjgIJcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlUGF0dGVybklkTGlzdCA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgIF0ucGF0dGVybkluZm8ubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5wYXR0ZXJuSUQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlUGF0dGVybklkTGlzdFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGVQYXR0ZXJuSWRMaXN0KTtcclxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IChvbGRzOiBudW1iZXJbXSwgbmV4dHM6IG51bWJlcltdKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgYWRkczogbmV4dHMuZmlsdGVyKChlKSA9PiAhb2xkcy5pbmNsdWRlcyhlKSksXHJcbiAgICAgICAgICAgICAgICBzdWJzOiBvbGRzLmZpbHRlcigoZSkgPT4gIW5leHRzLmluY2x1ZGVzKGUpKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRpZmYoc3RhdGVQYXR0ZXJuSWRMaXN0LCBhY3Rpb24ucGF5bG9hZC5uZXdDaGVja2VkKTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZUFycmF5OiB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXRl44GL44KJ5YmK6Zmk5a++6LGh44KS6Zmk5aSW44GX44Gf6YWN5YiX44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3Vicy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVBcnJheSA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICAgICAgXS5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmdXR1cmVQYXR0ZXJuVXBkYXRlKHN0YXRlLCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzLnNvbWUoKHN1YikgPT4gc3ViICE9IGNvbnRlbnQucGF0dGVybklEKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkgPVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1thY3Rpb24ucGF5bG9hZC5pbmRleF0ucGF0dGVybkluZm87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMTp1cGRhdGVBcnJheVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlQXJyYXkpO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgcmVzdWx0LmFkZHMubWFwKChhZGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBNYXg6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyDov73liqDjgZXjgozjgZ9JROOBjOioreWumuOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2tQYXR0ZXJuSW5mbykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrUGF0dGVybkluZm8ucGF0dGVybklEID09IGFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaKveWHuuOBleOCjOOBn+WQhOOCv+OCueOCr+OBruODkeOCv+ODvOODs0lE44KS5q+U6LyD44GX44CB5pyA5aSn5YCk44KS5Y+W5b6X44GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0YXNrLnBhdHRlcm5JbmZvLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbmZvKSA9PiBpbmZvLnBhdHRlcm5JRCA9PSBhZGRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE1heCA8IGNvbnRlbnQub3JkZXIgPyAoTWF4ID0gY29udGVudC5vcmRlcikgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHVzaENvbnRlbnQgPSB7IHBhdHRlcm5JRDogYWRkLCBvcmRlcjogTWF4ICsgMSB9O1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkucHVzaChwdXNoQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBmdXR1cmVQYXR0ZXJuVXBkYXRlKHN0YXRlLCBhZGQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIyOnVwZGF0ZUFycmF5XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVBcnJheSk7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICBdLnBhdHRlcm5JbmZvID0gdXBkYXRlQXJyYXk7XHJcbiAgICAgICAgICAgIERCQ1JVRChgdGFza3MvJHthY3Rpb24ucGF5bG9hZC5pbmRleH0vcGF0dGVybkluZm9gLCAncmVnaXN0ZXInLCB1cGRhdGVBcnJheSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jgpLliYrpmaTjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/liYrpmaTlr77osaHjgr/jgrnjgq/jga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrRGVsZXRlKHN0YXRlOiB1c2VySW5mbywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgLy8gY29uc3QgZGVsZXRlVGFzayA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5zcGxpY2UoXHJcbiAgICAgICAgICAgIC8vICAgICBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgLy8gICAgIDFcclxuICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ICE9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGVsZXRlVGFzayk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcyA9IGRlbGV0ZVRhc2s7XHJcbiAgICAgICAgICAgIERCQ1JVRChgdGFza3NgLCAncmVnaXN0ZXInLCBkZWxldGVUYXNrKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OCkuODkeOCv+ODvOODs+OBi+OCiemZpOWkluOBmeOCi+WHpueQhuOAguW8leaVsOOBruOCquODluOCuOOCp+OCr+ODiOOBq+OBr+ODkeOCv+ODvOODs0lE44Go5YmK6Zmk5a++6LGh44K/44K544Kv44Gu5ZCN56ew44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza1JlbW92ZVBhdHRlcm4oXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VySW5mbyxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgcGF0dGVybklkOiBudW1iZXI7IGRldGFpbFRpdGxlOiBzdHJpbmcgfT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQuZGV0YWlsVGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmluZEluZGV4KChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5kZXRhaWxbXCLjgr/jgrnjgq/lkI1cIl0gPT0gYWN0aW9uLnBheWxvYWQuZGV0YWlsVGl0bGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRUYXNrID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW1xyXG4gICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgXS5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LnBhdHRlcm5JRCAhPSBhY3Rpb24ucGF5bG9hZC5wYXR0ZXJuSWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbaW5kZXhdLnBhdHRlcm5JbmZvID0gZGVsZXRlZFRhc2s7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZWRUYXNrKTtcclxuICAgICAgICAgICAgREJDUlVEKGB0YXNrcy8ke2luZGV4fS9wYXR0ZXJuSW5mb2AsICdyZWdpc3RlcicsIGRlbGV0ZWRUYXNrKTtcclxuICAgICAgICAgICAgLy8gZnV0dXJlUGF0dGVyblVwZGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjg5Hjgr/jg7zjg7PjgpLov73liqDjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/jg5Hjgr/jg7zjg7PlkI3np7DjgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICBwYXR0ZXJuUmVnaXN0ZXIoc3RhdGU6IHVzZXJJbmZvLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBsZXQgTWF4SWQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuLm1hcCgocGF0dGVybkNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZCA+IE1heElkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoTWF4SWQgPSBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgYWRkUGF0dGVybiA9IHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogTWF4SWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybiA9IFsuLi5zdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybiwgYWRkUGF0dGVybl07XHJcbiAgICAgICAgICAgIERCQ1JVRCgncGF0dGVybicsICdyZWdpc3RlcicsIHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOODkeOCv+ODvOODs+OCkuWJiumZpOOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBr+ODkeOCv+ODvOODs0lE44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgcGF0dGVybkRlbGV0ZShzdGF0ZTogdXNlckluZm8sIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVBhdHRlcm5MaXN0ID0gc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHBhdHRlcm5Db250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGF0dGVybkNvbnRlbnQucGF0dGVybklkKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZCAhPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZVBhdHRlcm5MaXN0KTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4gPSB1cGRhdGVQYXR0ZXJuTGlzdDtcclxuXHJcbiAgICAgICAgICAgIC8vIOOCv+OCueOCr+OBqOOCq+ODrOODs+ODgOODvOOBq+S/neeuoeOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs+OCkuWFqOOBpuWJiumZpOOBmeOCi+W/heimgeOBjOOBguOCi1xyXG4gICAgICAgICAgICAvLyDjgqvjg6zjg7Pjg4Djg7zjga/mnKrmnaXliIbjgaDjgZFcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc+OBq+S/neeuoeOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs+aDheWgseOCkuWJiumZpOOBmeOCi+OAglxyXG4gICAgICAgICAgICBsZXQgdXBkYXRlVGFza0xpc3QgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MubWFwKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVQYXR0ZXJuSW5mbyA9IHRhc2sucGF0dGVybkluZm8uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICh0YXNrUGF0dGVybkluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tQYXR0ZXJuSW5mby5wYXR0ZXJuSUQgIT0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVRhc2s6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgICAgIH0gPSB7IGRldGFpbDogdGFzay5kZXRhaWwsIHBhdHRlcm5JbmZvOiB1cGRhdGVQYXR0ZXJuSW5mbyB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVRhc2s7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyOnVwZGF0ZVRhc2tMaXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVUYXNrTGlzdCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcyA9IHVwZGF0ZVRhc2tMaXN0O1xyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFy44Gu5pyq5p2l5YiG44Gr5L+d566h44GV44KM44Gm44GE44KL44OR44K/44O844Oz5oOF5aCx44KS5YmK6Zmk44GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm93WWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vd01vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vd0RhdGUgPSB0b2RheS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleVllYXJzID0gT2JqZWN0LmtleXMoc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ2FsZW5kYXJEYXRlID0gKFxyXG4gICAgICAgICAgICAgICAgeWVhcjogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHN0cmluZ1xyXG4gICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGRhdGUpXS5QYXR0ZXJuSWQgPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGRhdGUpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAga2V5WWVhcnMubWFwKCh5ZWFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlNb250aCA9IE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoeWVhcikgPiBub3dZZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5a++6LGh44GM5p2l5bm05Lul6ZmN44Gn44GC44KL5aC05ZCI44CB5YmK6Zmk44GZ44KL44CCZGVsZXRl44Gu44G744GG44GM44GE44GEXHJcbiAgICAgICAgICAgICAgICAgICAga2V5TW9udGgubWFwKChtb250aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlID0gT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQobW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleURhdGUubWFwKChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDYWxlbmRhckRhdGUoeWVhciwgbW9udGgsIGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoeWVhcikgPT0gbm93WWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWvvuixoeOBjOS7iuW5tOOBp+OBguOCi+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgICAgIGtleU1vbnRoLm1hcCgobW9udGgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZSA9IE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KG1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQobW9udGgpID4gbm93TW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadpeaciOS7pemZjeOBruWgtOWQiOOAgeWJiumZpOOBmeOCi+OAgmRlbGV0ZeOBruOBu+OBhuOBjOOBhOOBhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlEYXRlLm1hcCgoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNhbGVuZGFyRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChtb250aCkgPT0gbm93TW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS7iuaciOOBruWgtOWQiFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5RGF0ZS5tYXAoKGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGF0ZSkgPiBub3dEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaYjuaXpeS7pemZjeOBruWgtOWQiOOAgeWJiumZpOOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDYWxlbmRhckRhdGUoeWVhciwgbW9udGgsIGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBEQkNSVUQoJycsICdyZWdpc3RlcicsIHN0YXRlLnVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjg5Hjgr/jg7zjg7PlkI3np7DjgpLnt6jpm4bjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/jg5Hjgr/jg7zjg7NJROOBqOODkeOCv+ODvOODs+WQjeensOOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHBhdHRlcm5OYW1lRWRpdChcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJJbmZvLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgICAgICAgICAgZWRpdFBhdHRlcm5JZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gSUTjgavlkIjoh7TjgZnjgovopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLlj5blvpdcclxuICAgICAgICAgICAgY29uc3QgZWRpdFBhdHRlcm5JbmRleCA9IHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgIChwYXR0ZXJuQ29udGVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQgPT0gYWN0aW9uLnBheWxvYWQuZWRpdFBhdHRlcm5JZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyDlj5blvpfjgZfjgZ/jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLnm67ljbDjgavjgIHlvJXmlbDjga7mlrDjgZfjgYTlkI3np7Djgafmm7TmlrDjgZnjgovjgIJcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm5bZWRpdFBhdHRlcm5JbmRleF0ucGF0dGVybk5hbWUgPSBhY3Rpb24ucGF5bG9hZC5wYXR0ZXJuTmFtZTtcclxuXHJcbiAgICAgICAgICAgIERCQ1JVRChgcGF0dGVybi8ke2VkaXRQYXR0ZXJuSW5kZXh9YCwgJ3VwZGF0ZScsIHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuW2VkaXRQYXR0ZXJuSW5kZXhdKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIGluaXQsXHJcbiAgICBSZWdpc3RlcixcclxuICAgIGFsbERlbGV0ZSxcclxuICAgIHRhc2tDaGVja0NvbXBsZXRlLFxyXG4gICAgY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIsXHJcbiAgICB0YXNrRGV0YWlsUmVnaXN0ZXIsXHJcbiAgICB0YXNrUmVnaXN0ZXIsXHJcbiAgICB0YXNrUGF0dGVyblVwZGF0ZSxcclxuICAgIHRhc2tEZWxldGUsXHJcbiAgICB0YXNrUmVtb3ZlUGF0dGVybixcclxuICAgIHBhdHRlcm5SZWdpc3RlcixcclxuICAgIHBhdHRlcm5EZWxldGUsXHJcbiAgICBwYXR0ZXJuTmFtZUVkaXQsXHJcbn0gPSB0YXNrc01vZHVsZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza3NNb2R1bGU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG4gICAgdXNlcklkOiAnJ1xyXG59O1xyXG5cclxuY29uc3QgdXNlck1vZHVsZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBsb2dpbihzdGF0ZTogU3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS51c2VySWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VySWQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudXNlcklkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ291dChzdGF0ZTogU3RhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ291dCcpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VySWQgPSAnJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0IH0gPSB1c2VyTW9kdWxlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyTW9kdWxlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUsIHsgU3RvcmVQcm92aWRlciB9IGZyb20gXCIuLi9tb2R1bGVzL3N0b3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCcnKTtcclxuY29uc3QgSGFiaXRQbGFuQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxTdG9yZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L1N0b3JlUHJvdmlkZXI+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYWJpdFBsYW5BcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZGF0YWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==