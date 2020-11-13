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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
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
      } // action.payload[3];


      console.log(state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]]);
    },

    // タスクの詳細を設定する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
    taskDetailRegister(state, action) {
      state.userTaskInfo.tasks[parseInt(action.payload[2])].detail = _objectSpread(_objectSpread({}, state.userTaskInfo.tasks[parseInt(action.payload[2])].detail), {}, {
        [action.payload[1]]: action.payload[0]
      });
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
      state.userTaskInfo.tasks.push(registerTask);
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
          Max < content.patternID ? Max = content.patternID : "";
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
    },

    // タスクをパターンから除外する処理。引数のオブジェクトにはパターンIDと削除対象タスクの名称が格納されている。
    taskRemovePattern(state, action) {
      const index = state.userTaskInfo.tasks.findIndex(content => {
        return content.detail["タスク名"] == action.payload.detailTitle;
      });
      const deletedTask = state.userTaskInfo.tasks[index].patternInfo.filter(function (content) {
        return content.patternID != action.payload.patternId;
      });
      state.userTaskInfo.tasks[index].patternInfo = deletedTask;
      console.log(deletedTask); // futurePatternUpdate(state);
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
      state.userTaskInfo.pattern.push(addPattern);
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
    },

    // パターン名称を編集する処理。引数にはパターンIDとパターン名称が格納されている。
    patternNameEdit(state, action) {
      // IDに合致する要素のインデックス番号を取得
      const editPatternIndex = state.userTaskInfo.pattern.findIndex(patternContent => patternContent.patternId == action.payload.editPatternId); // 取得したインデックス番号を目印に、引数の新しい名称で更新する。

      state.userTaskInfo.pattern[editPatternIndex].patternName = action.payload.patternName;
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
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcm9vdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VzZXJNb2R1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidGFza3MiLCJ0YXNrc01vZHVsZSIsInJlZHVjZXIiLCJ1c2VyIiwidXNlck1vZHVsZSIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJ1c2VyVGFza0luZm8iLCJjYWxlbmRhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsIlBhdHRlcm5JZCIsIm9yZGVyIiwiZGV0YWlsIiwiZmx1ZyIsInBhdHRlcm4iLCJwYXR0ZXJuSWQiLCJwYXR0ZXJuTmFtZSIsInBhdHRlcm5JbmZvIiwicGF0dGVybklEIiwiZnV0dXJlUGF0dGVyblVwZGF0ZSIsInN0YXRlIiwidXBkYXRlUGF0dGVybklkIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJ0b2RheSIsIm5vd1llYXIiLCJub3dNb250aCIsIm5vd0RhdGUiLCJjaG9pY2VQYXR0ZXJuVGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwic29tZSIsInVwZGF0ZVRhc2tzIiwibWFwIiwidGFza1BhdHRlcm4iLCJrZXlNb250aExpc3QiLCJrZXlZZWFyIiwicGFyc2VJbnQiLCJrZXlEYXRlTGlzdCIsImtleU1vbnRoIiwiZGF0ZVRhc2tVcGRhdGUiLCJrZXlEYXRlIiwiZGlmZiIsIm9sZHMiLCJuZXh0cyIsImFkZHMiLCJlIiwiaW5jbHVkZXMiLCJzdWJzIiwia2V5WWVhcnMiLCJrZXlNb250aHMiLCJrZXlEYXRlcyIsInJlc3VsdCIsInVwZGF0ZUFycmF5Iiwic3ViIiwiYWRkIiwicHVzaCIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiaW5pdCIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwiUmVnaXN0ZXIiLCJhbGxEZWxldGUiLCJ0YXNrQ2hlY2tDb21wbGV0ZSIsImluZGV4IiwiZmluZEluZGV4IiwiY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIiLCJUb2RheVRhc2tzIiwidGFza0RldGFpbFJlZ2lzdGVyIiwidGFza1JlZ2lzdGVyIiwicmVnaXN0ZXJUYXNrIiwiY29udGVudCIsImxlbmd0aCIsInRhc2tQYXR0ZXJuVXBkYXRlIiwic3RhdGVQYXR0ZXJuSWRMaXN0IiwibmV3Q2hlY2tlZCIsIk1heCIsInRhc2tQYXR0ZXJuSW5mbyIsImZpbmQiLCJpbmZvIiwicHVzaENvbnRlbnQiLCJ0YXNrRGVsZXRlIiwiZGVsZXRlVGFzayIsInRhc2tSZW1vdmVQYXR0ZXJuIiwiZGV0YWlsVGl0bGUiLCJkZWxldGVkVGFzayIsInBhdHRlcm5SZWdpc3RlciIsIk1heElkIiwicGF0dGVybkNvbnRlbnQiLCJhZGRQYXR0ZXJuIiwicGF0dGVybkRlbGV0ZSIsInVwZGF0ZVBhdHRlcm5MaXN0IiwidXBkYXRlVGFza0xpc3QiLCJ1cGRhdGVQYXR0ZXJuSW5mbyIsInVwZGF0ZVRhc2siLCJkZWxldGVDYWxlbmRhckRhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXRlIiwicGF0dGVybk5hbWVFZGl0IiwiZWRpdFBhdHRlcm5JbmRleCIsImVkaXRQYXR0ZXJuSWQiLCJhY3Rpb25zIiwidXNlcklkIiwibG9naW4iLCJsb2dvdXQiLCJIYWJpdFBsYW5BcHAiLCJDb21wb25lbnQiLCJwYWdl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SixDQURKO0FBS0gsQ0FORDs7QUFRZUYsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB0YXNrc01vZHVsZSBmcm9tICcuL3Rhc2tzTW9kdWxlJztcclxuaW1wb3J0IHVzZXJNb2R1bGUgZnJvbSAnLi91c2VyTW9kdWxlJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHRhc2tzOiB0YXNrc01vZHVsZS5yZWR1Y2VyLFxyXG4gICAgdXNlcjogdXNlck1vZHVsZS5yZWR1Y2VyXHJcbn0pXHJcblxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcidcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyXHJcbn0pXHJcblxyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmUiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHN1YlNlY29uZHMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHtcclxuICAgIGNhbGVuZGFyLFxyXG4gICAgcGF0dGVybixcclxuICAgIHRhc2tzLFxyXG4gICAgdXNlclRhc2ssXHJcbiAgICB1c2VyVGFza0luZm8sXHJcbn0gZnJvbSBcIi4vdXNlclRhc2tzVHlwZVwiO1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogdXNlclRhc2sgPSB7XHJcbiAgICB1c2VyVGFza0luZm86IHtcclxuICAgICAgICBjYWxlbmRhcjoge1xyXG4gICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCldOiB7XHJcbiAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldE1vbnRoKCkgKyAxXToge1xyXG4gICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMyBPY3QgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0dGVybjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogXCJ0ZXN0UGF0dGVybjFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiAyLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4yXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuLy8gY29uc3QgZGlmZiA9IChvbGRzOiBhbnlbXSwgbmV4dHM6IGFueVtdKSA9PiAoe1xyXG4vLyAgICAgYWRkczogbmV4dHMuZmlsdGVyKChlKSA9PiAhb2xkcy5pbmNsdWRlcyhlKSksXHJcbi8vICAgICBzdWJzOiBvbGRzLmZpbHRlcigoZSkgPT4gIW5leHRzLmluY2x1ZGVzKGUpKSxcclxuLy8gfSk7XHJcblxyXG4vLyDjg5Hjgr/jg7zjg7Pmm7TmlrDmmYLjgavmnKrmnaXjgavoqK3lrprjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7Pjga7lhoXlrrnjgpLmm7TmlrDjgZnjgovjgIJcclxuLy8g5pu05paw5a++6LGh44Gvc3RhdGUuY2FsZW5kYXIudGFza3NcclxuLy8g5bm05pyI5pel44GM5pyq5p2l44Gn44GC44KK44CB44GL44Gk44CB44OR44K/44O844OzSUTjgYzlkIzjgZjjgoLjga7jgpLlr77osaHjgavmlrDjgZfjgYTjg5Hjgr/jg7zjg7PjgpLnmbvpjLLjgZnjgovjgIJcclxuY29uc3QgZnV0dXJlUGF0dGVyblVwZGF0ZSA9IChzdGF0ZTogdXNlclRhc2ssIHVwZGF0ZVBhdHRlcm5JZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIj09PT1mdXR1cmVQYXR0ZXJuVXBkYXRl44GT44GT44GL44KJPT09PVwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIpKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG5vd1llYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3Qgbm93TW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuICAgIGNvbnN0IG5vd0RhdGUgPSB0b2RheS5nZXREYXRlKCk7XHJcblxyXG4gICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSB1cGRhdGVQYXR0ZXJuSWRcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g44OR44K/44O844OzSUTjgavntJDku5jjgY/jgr/jgrnjgq/kuIDopqfjgYvjgonjgqvjg6zjg7Pjg4Djg7zjgbjjga7nmbvpjLLmg4XloLHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgIGNvbnN0IHVwZGF0ZVRhc2tzID0gY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgIC8vIOODkeOCv+ODvOODs+OBjOikh+aVsOeZu+mMsuOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OBuOOBruWvvuW/nOOBqOOBl+OBpuOAgemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44Gr6Kmy5b2T44GZ44KL6KaB57Sg44Gg44GR44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgY29uc3QgdGFza1BhdHRlcm4gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAocGF0dGVybkluZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5JbmZvLnBhdHRlcm5JRCA9PSB1cGRhdGVQYXR0ZXJuSWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOmFjeWIl+OBruOCv+OCueOCr+OBqOaKveWHuuOBl+OBn+ODkeOCv+ODvOODs+aDheWgseOCkuaVtOW9ouOBl+OBpui/lOOBmeOAglxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9yZGVyOiB0YXNrUGF0dGVyblswXS5vcmRlcixcclxuICAgICAgICAgICAgZGV0YWlsOiB0YXNrLmRldGFpbCxcclxuICAgICAgICAgICAgLy8gZGV0YWlsMjogdGFzay5kZXRhaWwyLFxyXG4gICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qga2V5TW9udGhMaXN0ID0gKGtleVllYXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBrZXlEYXRlTGlzdCA9IChrZXlZZWFyOiBzdHJpbmcsIGtleU1vbnRoOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bcGFyc2VJbnQoa2V5TW9udGgpXVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRhdGVUYXNrVXBkYXRlID0gKFxyXG4gICAgICAgIGtleVllYXI6IHN0cmluZyxcclxuICAgICAgICBrZXlNb250aDogc3RyaW5nLFxyXG4gICAgICAgIGtleURhdGU6IHN0cmluZ1xyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildW3BhcnNlSW50KGtleU1vbnRoKV1bXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludChrZXlEYXRlKVxyXG4gICAgICAgICAgICBdLlBhdHRlcm5JZCA9PSB1cGRhdGVQYXR0ZXJuSWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtwYXJzZUludChrZXlNb250aCldW1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5RGF0ZSlcclxuICAgICAgICAgICAgXS50YXNrcyA9IHVwZGF0ZVRhc2tzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PWRhdGVUYXNrVXBkYXRlPT09XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlZZWFyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5TW9udGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlEYXRlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlVGFza3MpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdHlwZSBjYWxlbmRhclBhdHRlcm4gPSB7XHJcbiAgICAgICAgb3JkZXI6IG51bWJlcjtcclxuICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZsdWc6IGJvb2xlYW47XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpZmYgPSAob2xkczogY2FsZW5kYXJQYXR0ZXJuW10sIG5leHRzOiBjYWxlbmRhclBhdHRlcm5bXSkgPT4gKHtcclxuICAgICAgICBhZGRzOiBuZXh0cy5maWx0ZXIoKGUpID0+ICFvbGRzLmluY2x1ZGVzKGUpKSxcclxuICAgICAgICBzdWJzOiBvbGRzLmZpbHRlcigoZSkgPT4gIW5leHRzLmluY2x1ZGVzKGUpKSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOeZu+mMsuOBleOCjOOBpuOBhOOCi+W5tOOBrumAo+aDs+mFjeWIl+OBruOCreODvOOCkuWFqOOBpuWPluW+l1xyXG4gICAgY29uc3Qga2V5WWVhcnMgPSBPYmplY3Qua2V5cyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIpO1xyXG4gICAga2V5WWVhcnMubWFwKChrZXlZZWFyKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGtleVllYXIpID09IG5vd1llYXIpIHtcclxuICAgICAgICAgICAgLy8g44KC44GX5LuK5bm044Gg44Gj44Gf44KJ44CB44Gu5Yem55CGXHJcbiAgICAgICAgICAgIC8vIOeZu+mMsuOBleOCjOOBpuOBhOOCi+aciOOBrumAo+aDs+mFjeWIl+OBruOCreODvOOCkuWFqOOBpuWPluW+l1xyXG4gICAgICAgICAgICBjb25zdCBrZXlNb250aHMgPSBrZXlNb250aExpc3Qoa2V5WWVhcik7XHJcblxyXG4gICAgICAgICAgICBrZXlNb250aHMubWFwKChrZXlNb250aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGtleU1vbnRoKSA9PSBub3dNb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOOCguOBl+S7iuaciOOBoOOBo+OBn+OCiVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOeZu+mMsuOBleOCjOOBpuOBhOOCi+aXpeOBrumAo+aDs+mFjeWIl+OBruOCreODvOOCkuWFqOOBpuWPluW+l1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGVzID0ga2V5RGF0ZUxpc3Qoa2V5WWVhciwga2V5TW9udGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleURhdGVzLm1hcCgoa2V5RGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoa2V5RGF0ZSkgPiBub3dEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgoLjgZfmmI7ml6Xku6XpmY3jgaDjgaPjgZ/jgonnmbvpjLLlhoXlrrnjgpLmm7TmlrDjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUYXNrVXBkYXRlKGtleVllYXIsIGtleU1vbnRoLCBrZXlEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChrZXlEYXRlKSA9PSBub3dEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgoLjgZfku4rml6XjgaDjgaPjgZ/jgonjgIHlpInmm7TliIbjgaDjgZHlj43mmKDjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWHpueQhuacquS9nOaIkFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleU1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoa2V5RGF0ZSldLlBhdHRlcm5JZCA9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhdHRlcm5JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGlmZihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5WWVhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChrZXlNb250aCldW3BhcnNlSW50KGtleURhdGUpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRhc2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUYXNrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlQXJyYXkgPSBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleVllYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChrZXlNb250aCldW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChrZXlEYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0udGFza3MuZmlsdGVyKGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc3Vicy5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN1YikgPT4gc3ViICE9IHRhc2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZHMubWFwKChhZGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkucHVzaChhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleU1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoa2V5RGF0ZSldLnRhc2tzID0gdXBkYXRlQXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoa2V5TW9udGgpID4gbm93TW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDjgoLjgZfmnaXmnIjku6XpmY3jgaDjgaPjgZ/jgonjgIHjgZnjgbnjgabmm7TmlrDjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlcyA9IGtleURhdGVMaXN0KGtleVllYXIsIGtleU1vbnRoKTtcclxuICAgICAgICAgICAgICAgICAgICBrZXlEYXRlcy5tYXAoKGtleURhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRhc2tVcGRhdGUoa2V5WWVhciwga2V5TW9udGgsIGtleURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGtleVllYXIpID4gbm93WWVhcikge1xyXG4gICAgICAgICAgICAvLyDjgoLjgZfmnaXlubTku6XpmY3jgaDjgaPjgZ/jgonjgIHjga7lh6bnkIbjgILlhajjgabmm7TmlrDjgZnjgovjgIJcclxuICAgICAgICAgICAgY29uc3Qga2V5TW9udGhzID0ga2V5TW9udGhMaXN0KGtleVllYXIpO1xyXG4gICAgICAgICAgICBrZXlNb250aHMubWFwKChrZXlNb250aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZXMgPSBrZXlEYXRlTGlzdChrZXlZZWFyLCBrZXlNb250aCk7XHJcbiAgICAgICAgICAgICAgICBrZXlEYXRlcy5tYXAoKGtleURhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlVGFza1VwZGF0ZShrZXlZZWFyLCBrZXlNb250aCwga2V5RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCI9PT09ZnV0dXJlUGF0dGVyblVwZGF0ZeOBk+OBk+OBvuOBpz09PT1cIik7XHJcbn07XHJcblxyXG5jb25zdCB0YXNrc01vZHVsZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidGFza3NcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgaW5pdChzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx1c2VyVGFza0luZm8+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbml0IGRhdGFcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyBzdGF0ZSA9IHsuLi5kYXRhfTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0IHN0YXRlLnVzZXJUYXNrSW5mbyDliY1cIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mbyA9IGRhdGE7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pdCBzdGF0ZS51c2VyVGFza0luZm8g5b6MXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dXNlclRhc2s+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgLi4uZGF0YSB9O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RhdGUnKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWxsRGVsZXRlKHN0YXRlOiB1c2VyVGFzaykge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBhbGxEZWxldGVcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBEYXlQbGFu44Gr44Gm44K/44K544Kv44KS44Kv44Oq44OD44Kv44GX44Gf6Zqb44Gr5a6M5LqG44OV44Op44Kw44KSdHJ1ZeOBq+WkieabtOOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBpuW5tOOAgeaciOOAgeaXpeOAgeOCv+OCueOCr+OBruOCpOODs+ODh+ODg+OCr+OCueeVquWPt+OCkuWPl+OBkeWPluOBo+OBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tDaGVja0NvbXBsZXRlKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcltdPikge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICBdW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrcy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAodGFza3MpID0+IHRhc2tzLm9yZGVyID09IGFjdGlvbi5wYXlsb2FkWzNdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVthY3Rpb24ucGF5bG9hZFsxXV1bXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsyXVxyXG4gICAgICAgICAgICBdLnRhc2tzW2luZGV4XS5mbHVnID0gIXN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzBdXHJcbiAgICAgICAgICAgIF1bYWN0aW9uLnBheWxvYWRbMV1dW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrc1tpbmRleF0uZmx1ZztcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOW8leaVsOOBr3N0YXRl44Go5bm044CB5pyI44CB5pel44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjga4044Gk44Gu5pWw5YCk44GM5qC857SN44GV44KM44Gf6YWN5YiXXHJcbiAgICAgICAgY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIoXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VyVGFzayxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcltdPlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBzdGF0ZeOBi+OCiemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44GM6Kit5a6a44GV44KM44Gm44GE44KL44K/44K544Kv44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7NJROOBq+e0kOS7mOOBj+OCv+OCueOCr+S4gOimp+OBi+OCieOCq+ODrOODs+ODgOODvOOBuOOBrueZu+mMsuaDheWgseOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCBUb2RheVRhc2tzID0gY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g44OR44K/44O844Oz44GM6KSH5pWw55m76Yyy44GV44KM44Gm44GE44KL44K/44K544Kv44G444Gu5a++5b+c44Go44GX44Gm44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgavoqbLlvZPjgZnjgovopoHntKDjgaDjgZHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQYXR0ZXJuID0gdGFzay5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybkluZm8ucGF0dGVybklEID09IGFjdGlvbi5wYXlsb2FkWzNdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6YWN5YiX44Gu44K/44K544Kv44Go5oq95Ye644GX44Gf44OR44K/44O844Oz5oOF5aCx44KS5pW05b2i44GX44Gm6L+U44GZ44CCXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiB0YXNrUGF0dGVyblswXS5vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHRhc2suZGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRldGFpbDI6IHRhc2suZGV0YWlsMixcclxuICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g44GT44GT44Gr5bm044GM44Gq44GL44Gj44Gf5pmC44Gu5Yem55CG44KS5Yqg44GI44KLXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFswXSBpbiBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0YXRl44GuTW9udGjjga7pgKPmg7PphY3liJfjgavmlrDjgZfjgYTml6Xku5jjga7pgKPmg7PphY3liJfjgpLov73liqDjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIC8vIOi/veWKoOaDheWgseOBr+W8leaVsOOBruaXpeOBqOOBk+OCjOOBvuOBp+OBruWHpueQhuOBp+S9nOaIkOOBl+OBn+OCq+ODrOODs+ODgOODvOeZu+mMsueUqOaDheWgsVxyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAgICAgXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkWzJdXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IGFjdGlvbi5wYXlsb2FkWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogVG9kYXlUYXNrcyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0YXRl44GuTW9udGjjga7pgKPmg7PphY3liJfjgavmlrDjgZfjgYTml6Xku5jjga7pgKPmg7PphY3liJfjgpLov73liqDjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIC8vIOi/veWKoOaDheWgseOBr+W8leaVsOOBruaXpeOBqOOBk+OCjOOBvuOBp+OBruWHpueQhuOBp+S9nOaIkOOBl+OBn+OCq+ODrOODs+ODgOODvOeZu+mMsueUqOaDheWgsVxyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZFsxXV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkWzJdXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiBhY3Rpb24ucGF5bG9hZFszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBUb2RheVRhc2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgICAgICBdW2FjdGlvbi5wYXlsb2FkWzJdXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44Gu6Kmz57Sw44KS6Kit5a6a44GZ44KL5Yem55CG44CC5byV5pWw44Gu44OG44Kt44K544OI6YWN5YiX44Gr44GvW+WFpeWKm+WGheWuueOAgemAo+aDs+mFjeWIl+OBruOCreODvOOAgeOCv+OCueOCr+OBrumFjeWIl+OCkuaMh+WumuOBmeOCi+aVsOWtl13jgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrRGV0YWlsUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nW10+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1twYXJzZUludChhY3Rpb24ucGF5bG9hZFsyXSldLmRldGFpbCA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1twYXJzZUludChhY3Rpb24ucGF5bG9hZFsyXSldLmRldGFpbCxcclxuICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZFsxXV06IGFjdGlvbi5wYXlsb2FkWzBdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44KS6L+95Yqg44GZ44KL5Yem55CG44CC5byV5pWw44Gu44OG44Kt44K544OI6YWN5YiX44Gr44GvW+WFpeWKm+WGheWuueOAgemAo+aDs+mFjeWIl+OBruOCreODvOOAgeOCv+OCueOCr+OBrumFjeWIl+OCkuaMh+WumuOBmeOCi+aVsOWtl13jgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dGFza3M+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2lzdGVyVGFzayA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZWdpc3RlclRhc2sucGF0dGVybkluZm8ubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaG9pY2VQYXR0ZXJuVGFza3MgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGFzaykgPT4gdGFzay5wYXR0ZXJuSUQgPT0gY29udGVudC5wYXR0ZXJuSURcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5vcmRlciA9IGNob2ljZVBhdHRlcm5UYXNrcy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVnaXN0ZXJUYXNrKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLnB1c2gocmVnaXN0ZXJUYXNrKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OBruODkeOCv+ODvOODs+eZu+mMsueKtuazgeOCkuabtOaWsOOBmeOCi+OAglxyXG4gICAgICAgIHRhc2tQYXR0ZXJuVXBkYXRlKFxyXG4gICAgICAgICAgICBzdGF0ZTogdXNlclRhc2ssXHJcbiAgICAgICAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgICAgICAgICBuZXdDaGVja2VkOiBudW1iZXJbXTtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgICAgIH0+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIOOBk+OBk+OBp+OChOOCi+OBk+OBqOOBr++8n1xyXG4gICAgICAgICAgICAvLyDjgb7jgZrlvJXmlbDjgavjgr/jgrnjgq/jga7phY3liJfjgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgYzlv4XopoFcclxuICAgICAgICAgICAgLy8g44OR44K/44O844OzSUTjga7phY3liJfjgpLlj5fjgZHlj5bjgovjgIJcclxuICAgICAgICAgICAgLy8g6YWN5YiX44Goc3RhdGXjgpLmr5TovIPjgZfjgabjgIHjgarjgZHjgozjgbDnmbvpjLLjgIJPcmRlcuOBr+acgOWkp+WApCsx44CC6YCG44Gr5YmK6Zmk44GV44KM44Gm44GE44KL44KC44Gu44Gv6Zmk5aSW44CCXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZVBhdHRlcm5JZExpc3QgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICBdLnBhdHRlcm5JbmZvLm1hcCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQucGF0dGVybklEO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZVBhdHRlcm5JZExpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlUGF0dGVybklkTGlzdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAob2xkczogbnVtYmVyW10sIG5leHRzOiBudW1iZXJbXSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGFkZHM6IG5leHRzLmZpbHRlcigoZSkgPT4gIW9sZHMuaW5jbHVkZXMoZSkpLFxyXG4gICAgICAgICAgICAgICAgc3Viczogb2xkcy5maWx0ZXIoKGUpID0+ICFuZXh0cy5pbmNsdWRlcyhlKSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkaWZmKHN0YXRlUGF0dGVybklkTGlzdCwgYWN0aW9uLnBheWxvYWQubmV3Q2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVBcnJheToge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklEOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgICAgICAgICB9W107XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZeOBi+OCieWJiumZpOWvvuixoeOCkumZpOWkluOBl+OBn+mFjeWIl+OCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN1YnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgICAgIF0ucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZnV0dXJlUGF0dGVyblVwZGF0ZShzdGF0ZSwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc3Vicy5zb21lKChzdWIpID0+IHN1YiAhPSBjb250ZW50LnBhdHRlcm5JRCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5ID1cclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbYWN0aW9uLnBheWxvYWQuaW5kZXhdLnBhdHRlcm5JbmZvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjE6dXBkYXRlQXJyYXlcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZUFycmF5KTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHJlc3VsdC5hZGRzLm1hcCgoYWRkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgTWF4OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8g6L+95Yqg44GV44KM44GfSUTjgYzoqK3lrprjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrUGF0dGVybkluZm8pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5JbmZvLnBhdHRlcm5JRCA9PSBhZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGNob2ljZVBhdHRlcm5UYXNrcy5tYXAoKHRhc2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmir3lh7rjgZXjgozjgZ/lkITjgr/jgrnjgq/jga7jg5Hjgr/jg7zjg7NJROOCkuavlOi8g+OBl+OAgeacgOWkp+WApOOCkuWPluW+l+OBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gdGFzay5wYXR0ZXJuSW5mby5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW5mbykgPT4gaW5mby5wYXR0ZXJuSUQgPT0gYWRkXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBNYXggPCBjb250ZW50LnBhdHRlcm5JRCA/IChNYXggPSBjb250ZW50LnBhdHRlcm5JRCkgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHVzaENvbnRlbnQgPSB7IHBhdHRlcm5JRDogYWRkLCBvcmRlcjogTWF4ICsgMSB9O1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkucHVzaChwdXNoQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBmdXR1cmVQYXR0ZXJuVXBkYXRlKHN0YXRlLCBhZGQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIyOnVwZGF0ZUFycmF5XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVBcnJheSk7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICBdLnBhdHRlcm5JbmZvID0gdXBkYXRlQXJyYXk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jgpLliYrpmaTjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/liYrpmaTlr77osaHjgr/jgrnjgq/jga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrRGVsZXRlKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgLy8gY29uc3QgZGVsZXRlVGFzayA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5zcGxpY2UoXHJcbiAgICAgICAgICAgIC8vICAgICBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgLy8gICAgIDFcclxuICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ICE9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGVsZXRlVGFzayk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcyA9IGRlbGV0ZVRhc2s7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jgpLjg5Hjgr/jg7zjg7PjgYvjgonpmaTlpJbjgZnjgovlh6bnkIbjgILlvJXmlbDjga7jgqrjg5bjgrjjgqfjgq/jg4jjgavjga/jg5Hjgr/jg7zjg7NJROOBqOWJiumZpOWvvuixoeOCv+OCueOCr+OBruWQjeensOOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tSZW1vdmVQYXR0ZXJuKFxyXG4gICAgICAgICAgICBzdGF0ZTogdXNlclRhc2ssXHJcbiAgICAgICAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IHBhdHRlcm5JZDogbnVtYmVyOyBkZXRhaWxUaXRsZTogc3RyaW5nIH0+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbmRJbmRleCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZGV0YWlsW1wi44K/44K544Kv5ZCNXCJdID09IGFjdGlvbi5wYXlsb2FkLmRldGFpbFRpdGxlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlZFRhc2sgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbXHJcbiAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICBdLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQucGF0dGVybklEICE9IGFjdGlvbi5wYXlsb2FkLnBhdHRlcm5JZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tpbmRleF0ucGF0dGVybkluZm8gPSBkZWxldGVkVGFzaztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGVsZXRlZFRhc2spO1xyXG4gICAgICAgICAgICAvLyBmdXR1cmVQYXR0ZXJuVXBkYXRlKHN0YXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOODkeOCv+ODvOODs+OCkui/veWKoOOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBr+ODkeOCv+ODvOODs+WQjeensOOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHBhdHRlcm5SZWdpc3RlcihzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIGxldCBNYXhJZDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4ubWFwKChwYXR0ZXJuQ29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybkNvbnRlbnQucGF0dGVybklkID4gTWF4SWRcclxuICAgICAgICAgICAgICAgICAgICA/IChNYXhJZCA9IHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZClcclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBhZGRQYXR0ZXJuID0ge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiBNYXhJZCArIDEsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuLnB1c2goYWRkUGF0dGVybik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjg5Hjgr/jg7zjg7PjgpLliYrpmaTjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/jg5Hjgr/jg7zjg7NJROOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHBhdHRlcm5EZWxldGUoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVQYXR0ZXJuTGlzdCA9IHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChwYXR0ZXJuQ29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQgIT0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVQYXR0ZXJuTGlzdCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuID0gdXBkYXRlUGF0dGVybkxpc3Q7XHJcblxyXG4gICAgICAgICAgICAvLyDjgr/jgrnjgq/jgajjgqvjg6zjg7Pjg4Djg7zjgavkv53nrqHjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7PjgpLlhajjgabliYrpmaTjgZnjgovlv4XopoHjgYzjgYLjgotcclxuICAgICAgICAgICAgLy8g44Kr44Os44Oz44OA44O844Gv5pyq5p2l5YiG44Gg44GRXHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZS51c2VyVGFza0luZm8udGFza3Pjgavkv53nrqHjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7Pmg4XloLHjgpLliYrpmaTjgZnjgovjgIJcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZVRhc2tMaXN0ID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlUGF0dGVybkluZm8gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAodGFza1BhdHRlcm5JbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrUGF0dGVybkluZm8ucGF0dGVybklEICE9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVUYXNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICB9W107XHJcbiAgICAgICAgICAgICAgICB9ID0geyBkZXRhaWw6IHRhc2suZGV0YWlsLCBwYXR0ZXJuSW5mbzogdXBkYXRlUGF0dGVybkluZm8gfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVUYXNrO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlcjp1cGRhdGVUYXNrTGlzdFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlVGFza0xpc3QpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3MgPSB1cGRhdGVUYXNrTGlzdDtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcuOBruacquadpeWIhuOBq+S/neeuoeOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs+aDheWgseOCkuWJiumZpOOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vd1llYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBjb25zdCBub3dNb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgICAgICBjb25zdCBub3dEYXRlID0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlZZWFycyA9IE9iamVjdC5rZXlzKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNhbGVuZGFyRGF0ZSA9IChcclxuICAgICAgICAgICAgICAgIHllYXI6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIG1vbnRoOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBzdHJpbmdcclxuICAgICAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQobW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChkYXRlKV0uUGF0dGVybklkID09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQobW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChkYXRlKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGtleVllYXJzLm1hcCgoeWVhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5TW9udGggPSBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHllYXIpID4gbm93WWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWvvuixoeOBjOadpeW5tOS7pemZjeOBp+OBguOCi+WgtOWQiOOAgeWJiumZpOOBmeOCi+OAgmRlbGV0ZeOBruOBu+OBhuOBjOOBhOOBhFxyXG4gICAgICAgICAgICAgICAgICAgIGtleU1vbnRoLm1hcCgobW9udGgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZSA9IE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5RGF0ZS5tYXAoKGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNhbGVuZGFyRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludCh5ZWFyKSA9PSBub3dZZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5a++6LGh44GM5LuK5bm044Gn44GC44KL5aC05ZCIXHJcbiAgICAgICAgICAgICAgICAgICAga2V5TW9udGgubWFwKChtb250aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlID0gT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KG1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQobW9udGgpID4gbm93TW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadpeaciOS7pemZjeOBruWgtOWQiOOAgeWJiumZpOOBmeOCi+OAgmRlbGV0ZeOBruOBu+OBhuOBjOOBhOOBhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlEYXRlLm1hcCgoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNhbGVuZGFyRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChtb250aCkgPT0gbm93TW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS7iuaciOOBruWgtOWQiFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5RGF0ZS5tYXAoKGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGF0ZSkgPiBub3dEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaYjuaXpeS7pemZjeOBruWgtOWQiOOAgeWJiumZpOOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDYWxlbmRhckRhdGUoeWVhciwgbW9udGgsIGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44OR44K/44O844Oz5ZCN56ew44KS57eo6ZuG44GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gv44OR44K/44O844OzSUTjgajjg5Hjgr/jg7zjg7PlkI3np7DjgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICBwYXR0ZXJuTmFtZUVkaXQoXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VyVGFzayxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICAgICAgICAgIGVkaXRQYXR0ZXJuSWQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH0+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIElE44Gr5ZCI6Ie044GZ44KL6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+344KS5Y+W5b6XXHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRQYXR0ZXJuSW5kZXggPSBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybi5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAocGF0dGVybkNvbnRlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybkNvbnRlbnQucGF0dGVybklkID09IGFjdGlvbi5wYXlsb2FkLmVkaXRQYXR0ZXJuSWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8g5Y+W5b6X44GX44Gf44Kk44Oz44OH44OD44Kv44K555Wq5Y+344KS55uu5Y2w44Gr44CB5byV5pWw44Gu5paw44GX44GE5ZCN56ew44Gn5pu05paw44GZ44KL44CCXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuW2VkaXRQYXR0ZXJuSW5kZXhdLnBhdHRlcm5OYW1lID1cclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLnBhdHRlcm5OYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgICBpbml0LFxyXG4gICAgUmVnaXN0ZXIsXHJcbiAgICBhbGxEZWxldGUsXHJcbiAgICB0YXNrQ2hlY2tDb21wbGV0ZSxcclxuICAgIGNhbGVuZGFyUGF0dGVyblJlZ2lzdGVyLFxyXG4gICAgdGFza0RldGFpbFJlZ2lzdGVyLFxyXG4gICAgdGFza1JlZ2lzdGVyLFxyXG4gICAgdGFza1BhdHRlcm5VcGRhdGUsXHJcbiAgICB0YXNrRGVsZXRlLFxyXG4gICAgdGFza1JlbW92ZVBhdHRlcm4sXHJcbiAgICBwYXR0ZXJuUmVnaXN0ZXIsXHJcbiAgICBwYXR0ZXJuRGVsZXRlLFxyXG4gICAgcGF0dGVybk5hbWVFZGl0LFxyXG59ID0gdGFza3NNb2R1bGUuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tzTW9kdWxlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuICAgIHVzZXJJZDogJydcclxufTtcclxuXHJcbmNvbnN0IHVzZXJNb2R1bGUgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInVzZXJcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgbG9naW4oc3RhdGU6IFN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4nKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudXNlcklkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlcklkID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJJZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dvdXQoc3RhdGU6IFN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlcklkID0gJydcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgbG9naW4sIGxvZ291dCB9ID0gdXNlck1vZHVsZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlck1vZHVsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL21vZHVsZXMvc3RvcmVcIjtcclxuXHJcbmNvbnN0IEhhYml0UGxhbkFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYWJpdFBsYW5BcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==