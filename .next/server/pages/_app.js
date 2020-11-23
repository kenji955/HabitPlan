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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "B4sE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* unused harmony export database */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Mn+7");
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

/***/ "Byyh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return init; });
/* unused harmony export Register */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return taskCheckComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return calendarPatternRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return taskDetailRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return taskRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return taskPatternUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return taskDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return taskRemovePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return patternRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return patternDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return patternNameEdit; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pNaP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("B4sE");
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
  const userId = _components_test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_2__[/* auth */ "a"].currentUser.uid;
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
/* harmony default export */ __webpack_exports__["c"] = (tasksModule);

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "Mn+7":
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "XnaX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ Stores; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ StoreProvider; });

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/modules/reducer.ts
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
// EXTERNAL MODULE: ./src/modules/rootReducer.ts
var rootReducer = __webpack_require__("b4T5");

// CONCATENATED MODULE: ./src/modules/store.tsx
var __jsx = external_react_default.a.createElement;




const store = Object(toolkit_["configureStore"])({
  reducer: rootReducer["a" /* default */]
});
const initialState = 0;
const Stores = /*#__PURE__*/external_react_default.a.createContext(initialState);
const StoreProvider = ({
  children
}) => {
  const [state, dispatch] = external_react_default.a.useReducer(reducer, initialState);
  return __jsx(Stores.Provider, {
    value: {
      state,
      dispatch
    }
  }, " ", children, " ");
};
/* harmony default export */ var modules_store = __webpack_exports__["c"] = (store);

/***/ }),

/***/ "b4T5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tasksModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Byyh");
/* harmony import */ var _userModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("v9FH");



const rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  tasks: _tasksModule__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"].reducer,
  user: _userModule__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].reducer
});
/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XnaX");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])('');

const HabitPlanApp = ({
  Component,
  pageProps
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _modules_store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"]
  }, __jsx(_modules_store__WEBPACK_IMPORTED_MODULE_2__[/* StoreProvider */ "a"], null, __jsx(Component, pageProps)));
};

/* harmony default export */ __webpack_exports__["default"] = (HabitPlanApp);

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "v9FH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logout; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
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
/* harmony default export */ __webpack_exports__["a"] = (userModule);

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ })

/******/ });