webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/components/view/PatternList.tsx":
/*!*********************************************!*\
  !*** ./src/components/view/PatternList.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Comment */ "./node_modules/@material-ui/icons/Comment.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/RemoveCircle */ "./node_modules/@material-ui/icons/RemoveCircle.js");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\PatternList.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    roots: {
      width: "100%",
      maxWidth: 720,
      margin: "auto",
      backgroundColor: theme.palette.background.paper
    }
  });
});
function PatternList(props) {
  _s();

  var _this = this;

  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo; // マイナスボタンがクリックされたらパターンから対象のタスクを除外する。


  var patternRemoveHandler = function patternRemoveHandler(index) {
    return function () {
      dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_12__["taskRemovePattern"])([index, props.choice]));
    };
  }; // 選択したパターンIDが設定されているタスクを抽出する。


  var choicePatternTasks = userTaskInfo.tasks.filter(function (task) {
    return task.patternInfo.some(function (task) {
      return task.patternID == props.choice;
    });
  });
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, choicePatternTasks.map(function (task, index) {
    var taskPattern = task.patternInfo.filter(function (patternInfo) {
      return patternInfo.patternID == props.choice;
    });
    var labelId = "checkbox-list-label-".concat(taskPattern[0].patternID + taskPattern[0].order);
    return __jsx("div", {
      key: taskPattern[0].patternID + '_' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: taskPattern[0].patternID + taskPattern[0].order,
      role: undefined,
      dense: true,
      button: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      edge: "end",
      "aria-label": "comments",
      onClick: patternRemoveHandler(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9___default.a, {
      color: "secondary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: labelId,
      primary: "Line item ".concat(taskPattern[0].patternID + "_" + taskPattern[0].order, " ").concat(task.detail["testDetail1"], " ").concat(task.detail["testDetail2"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 37
      }
    })))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }
    }));
  }));
}

_s(PatternList, "D0QvzFYO60X7H5R5opj3sOfH4UU=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"]];
});

_c = PatternList;

var _c;

$RefreshReg$(_c, "PatternList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/tasksModule.tsx":
/*!*************************************!*\
  !*** ./src/modules/tasksModule.tsx ***!
  \*************************************/
/*! exports provided: init, Register, allDelete, taskCheckComplete, calendarPatternRegister, taskDetailRegister, taskRegister, taskPatternUpdate, taskDelete, taskRemovePattern, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDelete", function() { return allDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskCheckComplete", function() { return taskCheckComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarPatternRegister", function() { return calendarPatternRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskDetailRegister", function() { return taskDetailRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskRegister", function() { return taskRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskPatternUpdate", function() { return taskPatternUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskDelete", function() { return taskDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskRemovePattern", function() { return taskRemovePattern; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


var _detail, _detail2, _detail3, _detail4, _ref, _detail5, _detail6, _detail7, _detail8;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  userTaskInfo: {
    calendar: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, new Date("Thu, 22 Oct 2020 02:00:00").getFullYear(), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, new Date("Thu, 22 Oct 2020 02:00:00").getMonth() + 1, (_ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, new Date("Thu, 22 Oct 2020 02:00:00").getDate(), {
      PatternId: 1,
      tasks: [{
        order: 1,
        detail: (_detail = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail, "title", "title 22 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail, "testDetail1", "testDetail1 22 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail, "testDetail2", "testDetail1 22 1"), _detail),
        flug: false
      }, {
        order: 2,
        detail: (_detail2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail2, "title", "title 22 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail2, "testDetail1", "testDetail1 22 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail2, "testDetail2", "testDetail1 22 2"), _detail2),
        flug: false
      }]
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, new Date("Thu, 23 Oct 2020 02:00:00").getDate(), {
      PatternId: 1,
      tasks: [{
        order: 1,
        detail: (_detail3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail3, "title", "title 23 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail3, "testDetail1", "testDetail1 23 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail3, "testDetail2", "testDetail1 23 1"), _detail3),
        flug: false
      }, {
        order: 2,
        detail: (_detail4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail4, "title", "title 23 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail4, "testDetail1", "testDetail1 23 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail4, "testDetail2", "testDetail1 23 2"), _detail4),
        flug: false
      }]
    }), _ref))),
    pattern: [{
      patternId: 1,
      patternName: "testPattern1"
    }, {
      patternId: 2,
      patternName: "testPattern2"
    }],
    tasks: [{
      detail: (_detail5 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail5, "title", "title 22 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail5, "defalut", "defalut"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail5, "testDetail1", "testDetail1 22 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail5, "testDetail2", "testDetail1 22 1"), _detail5),
      patternInfo: [{
        patternID: 1,
        order: 1
      }]
    }, {
      detail: (_detail6 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail6, "title", "title 22 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail6, "defalut", "defalut"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail6, "testDetail1", "testDetail1 22 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail6, "testDetail2", "testDetail1 22 2"), _detail6),
      patternInfo: [{
        patternID: 1,
        order: 2
      }]
    }, {
      detail: (_detail7 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail7, "title", "title 23 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail7, "defalut", "defalut"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail7, "testDetail1", "testDetail1 23 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail7, "testDetail2", "testDetail1 23 1"), _detail7),
      patternInfo: [{
        patternID: 2,
        order: 1
      }, {
        patternID: 1,
        order: 3
      }]
    }, {
      detail: (_detail8 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail8, "title", "title 23 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail8, "defalut", "defalut"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail8, "testDetail2", "testDetail1 23 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail8, "testDetail1", "testDetail1 23 2"), _detail8),
      patternInfo: [{
        patternID: 2,
        order: 2
      }]
    }]
  }
};
var tasksModule = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSlice"])({
  name: "tasks",
  initialState: initialState,
  reducers: {
    init: function init(state, action) {
      var data = action.payload;
      console.log("init data");
      console.log(data); // state = {...data};
      // console.log("init state.userTaskInfo 前");
      // console.log(state.userTaskInfo);

      state.userTaskInfo = data; // console.log("init state.userTaskInfo 後");
      // console.log(state.userTaskInfo);
    },
    Register: function Register(state, action) {
      var data = action.payload;
      state = _objectSpread(_objectSpread({}, state), data); // console.log('state');
      // console.log(state);
    },
    allDelete: function allDelete(state) {
      state = initialState;
      console.log("check allDelete");
    },
    // DayPlanにてタスクをクリックした際に完了フラグをtrueに変更する処理。引数にて年、月、日、タスクのインデックス番号を受け取っている。
    taskCheckComplete: function taskCheckComplete(state, action) {
      var index = state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks.findIndex(function (tasks) {
        return tasks.order == action.payload[3];
      });
      console.log(index);
      state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[index].flug = !state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[index].flug;
    },
    // 引数はstateと年、月、日、選択されているパターンIDの4つの数値が格納された配列
    calendarPatternRegister: function calendarPatternRegister(state, action) {
      // stateから選択されているパターンIDが設定されているタスクを抽出する。
      var choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
        return task.patternInfo.some(function (task) {
          return task.patternID == action.payload[3];
        });
      }); // パターンIDに紐付くタスク一覧からカレンダーへの登録情報を抽出する。

      var TodayTasks = choicePatternTasks.map(function (task) {
        // パターンが複数登録されているタスクへの対応として、選択されているパターンIDに該当する要素だけを抽出する。
        var taskPattern = task.patternInfo.filter(function (patternInfo) {
          return patternInfo.patternID == action.payload[3];
        }); // 配列のタスクと抽出したパターン情報を整形して返す。

        return {
          order: taskPattern[0].order,
          detail: task.detail,
          // detail2: task.detail2,
          flug: false
        };
      }); // stateのMonthの連想配列に新しい日付の連想配列を追加する。
      // 追加情報は引数の日とこれまでの処理で作成したカレンダー登録用情報

      state.userTaskInfo.calendar[action.payload[0]][action.payload[1]] = _objectSpread(_objectSpread({}, state.userTaskInfo.calendar[action.payload[0]][action.payload[1]]), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload[2], {
        PatternId: action.payload[3],
        tasks: TodayTasks
      })); // action.payload[3];

      console.log(state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]]);
    },
    // タスクの詳細を設定する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
    taskDetailRegister: function taskDetailRegister(state, action) {
      state.userTaskInfo.tasks[parseInt(action.payload[2])].detail = _objectSpread(_objectSpread({}, state.userTaskInfo.tasks[parseInt(action.payload[2])].detail), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload[1], action.payload[0]));
    },
    // タスクを追加する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
    taskRegister: function taskRegister(state, action) {
      var registerTask = action.payload;
      registerTask.patternInfo.map(function (content) {
        var choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
          return task.patternInfo.some(function (task) {
            return task.patternID == content.patternID;
          });
        });
        content.order = choicePatternTasks.length + 1;
      });
      console.log(registerTask);
      state.userTaskInfo.tasks.push(registerTask);
    },
    taskPatternUpdate: function taskPatternUpdate(state, action) {
      // ここでやることは？
      // まず引数にタスクの配列インデックス番号が必要
      // パターンIDの配列を受け取る。
      // 配列とstateを比較して、なければ登録。Orderは最大値+1。逆に削除されているものは除外。
      var statePatternIdList = state.userTaskInfo.tasks[action.payload.index].patternInfo.map(function (content) {
        return content.patternID;
      });

      var diff = function diff(olds, nexts) {
        return {
          adds: nexts.filter(function (e) {
            return !olds.includes(e);
          }),
          subs: olds.filter(function (e) {
            return !nexts.includes(e);
          })
        };
      };

      var result = diff(statePatternIdList, action.payload.newChecked);
      var updateArray;
      console.log(result.subs[0] == state.userTaskInfo.tasks[action.payload.index].patternInfo[0].patternID);
      updateArray = state.userTaskInfo.tasks[action.payload.index].patternInfo.filter(function (content) {
        return result.subs.some(function (sub) {
          return sub != content.patternID;
        });
      });
      result.adds.map(function (add) {
        var Max = 0;
        var choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
          return task.patternInfo.some(function (task) {
            return task.patternID == add;
          });
        });
        choicePatternTasks.map(function (task) {
          var content = task.patternInfo.find(function (info) {
            return info.patternID = add;
          });
          Max < content.patternID ? Max = content.patternID : '';
        });
        var pushContent = {
          patternID: add,
          order: Max
        };
        updateArray.push(pushContent);
      });
      state.userTaskInfo.tasks[action.payload.index].patternInfo = updateArray;
    },
    // タスクを追加する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
    taskDelete: function taskDelete(state, action) {
      var deleteTask = state.userTaskInfo.tasks.splice(action.payload, 1);
      console.log(deleteTask);
    },
    // タスクを追加する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
    taskRemovePattern: function taskRemovePattern(state, action) {
      var deletedTask = state.userTaskInfo.tasks[action.payload[0]].patternInfo.filter(function (content) {
        return content.patternID != action.payload[1];
      });
      state.userTaskInfo.tasks[action.payload[0]].patternInfo = deletedTask;
      console.log(deletedTask);
    }
  }
});
var _tasksModule$actions = tasksModule.actions,
    init = _tasksModule$actions.init,
    Register = _tasksModule$actions.Register,
    allDelete = _tasksModule$actions.allDelete,
    taskCheckComplete = _tasksModule$actions.taskCheckComplete,
    calendarPatternRegister = _tasksModule$actions.calendarPatternRegister,
    taskDetailRegister = _tasksModule$actions.taskDetailRegister,
    taskRegister = _tasksModule$actions.taskRegister,
    taskPatternUpdate = _tasksModule$actions.taskPatternUpdate,
    taskDelete = _tasksModule$actions.taskDelete,
    taskRemovePattern = _tasksModule$actions.taskRemovePattern;

/* harmony default export */ __webpack_exports__["default"] = (tasksModule);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9QYXR0ZXJuTGlzdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2R1bGVzL3Rhc2tzTW9kdWxlLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290cyIsIndpZHRoIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiUGF0dGVybkxpc3QiLCJwcm9wcyIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwicGF0dGVyblJlbW92ZUhhbmRsZXIiLCJpbmRleCIsInRhc2tSZW1vdmVQYXR0ZXJuIiwiY2hvaWNlIiwiY2hvaWNlUGF0dGVyblRhc2tzIiwiZmlsdGVyIiwidGFzayIsInBhdHRlcm5JbmZvIiwic29tZSIsInBhdHRlcm5JRCIsIm1hcCIsInRhc2tQYXR0ZXJuIiwibGFiZWxJZCIsIm9yZGVyIiwidW5kZWZpbmVkIiwiZGV0YWlsIiwiaW5pdGlhbFN0YXRlIiwiY2FsZW5kYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJQYXR0ZXJuSWQiLCJmbHVnIiwicGF0dGVybiIsInBhdHRlcm5JZCIsInBhdHRlcm5OYW1lIiwidGFza3NNb2R1bGUiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluaXQiLCJhY3Rpb24iLCJkYXRhIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJSZWdpc3RlciIsImFsbERlbGV0ZSIsInRhc2tDaGVja0NvbXBsZXRlIiwiZmluZEluZGV4IiwiY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIiLCJUb2RheVRhc2tzIiwidGFza0RldGFpbFJlZ2lzdGVyIiwicGFyc2VJbnQiLCJ0YXNrUmVnaXN0ZXIiLCJyZWdpc3RlclRhc2siLCJjb250ZW50IiwibGVuZ3RoIiwicHVzaCIsInRhc2tQYXR0ZXJuVXBkYXRlIiwic3RhdGVQYXR0ZXJuSWRMaXN0IiwiZGlmZiIsIm9sZHMiLCJuZXh0cyIsImFkZHMiLCJlIiwiaW5jbHVkZXMiLCJzdWJzIiwicmVzdWx0IiwibmV3Q2hlY2tlZCIsInVwZGF0ZUFycmF5Iiwic3ViIiwiYWRkIiwiTWF4IiwiZmluZCIsImluZm8iLCJwdXNoQ29udGVudCIsInRhc2tEZWxldGUiLCJkZWxldGVUYXNrIiwic3BsaWNlIiwiZGVsZXRlZFRhc2siLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUN6QkMsNkVBQVksQ0FBQztBQUNUQyxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFFLE1BREo7QUFFSEMsY0FBUSxFQUFFLEdBRlA7QUFJSEMsWUFBTSxFQUFFLE1BSkw7QUFLSEMscUJBQWUsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBTHZDO0FBREUsR0FBRCxDQURhO0FBQUEsQ0FBRCxDQUE1QjtBQVllLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQWdEO0FBQUE7O0FBQUE7O0FBQzNELE1BQU1DLE9BQU8sR0FBR2QsU0FBUyxFQUF6QjtBQUNBLE1BQU1lLFFBQVEsR0FBR0MsZ0VBQVcsRUFBNUI7O0FBRjJELHFCQUdsQ0MsZ0VBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBc0JBLEtBQUssQ0FBQ0MsS0FBNUI7QUFBQSxHQUFELENBSHVCO0FBQUEsTUFHbkRDLFlBSG1ELGdCQUduREEsWUFIbUQsRUFLM0Q7OztBQUNBLE1BQU1DLG9CQUFvQixHQUFHLFNB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ZSxDQUFmLENBQTVCO0FBQ0QsT0FGaUIsQ0FBcEI7QUFHRXJDLFdBQUssQ0FBQ0UsWUFBTixDQUFtQkQsS0FBbkIsQ0FBeUJrQyxNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBQXpCLEVBQTRDM0IsV0FBNUMsR0FBMERnRSxXQUExRDtBQUNGcEMsYUFBTyxDQUFDQyxHQUFSLENBQVltQyxXQUFaO0FBQ0g7QUFsTEs7QUFIa0IsQ0FBRCxDQUEvQjsyQkFvTUk1QyxXQUFXLENBQUM2QyxPO0lBVlp6QyxJLHdCQUFBQSxJO0lBQ0FNLFEsd0JBQUFBLFE7SUFDQUMsUyx3QkFBQUEsUztJQUNBQyxpQix3QkFBQUEsaUI7SUFDQUUsdUIsd0JBQUFBLHVCO0lBQ0FFLGtCLHdCQUFBQSxrQjtJQUNBRSxZLHdCQUFBQSxZO0lBQ0FLLGlCLHdCQUFBQSxpQjtJQUNBa0IsVSx3QkFBQUEsVTtJQUNBbEUsaUIsd0JBQUFBLGlCOztBQUdXeUIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MuY2NiYjhhMTFkYTRhYWUxMDZmZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIjtcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgQ29tbWVudEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Db21tZW50XCI7XHJcbmltcG9ydCBSZW1vdmVDaXJjbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlQ2lyY2xlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgeyB0YXNrUmVtb3ZlUGF0dGVybiB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHJvb3RzOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IDcyMCxcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF0dGVybkxpc3QocHJvcHM6IHsgY2hvaWNlOiBudW1iZXIgfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcblxyXG4gICAgLy8g44Oe44Kk44OK44K544Oc44K/44Oz44GM44Kv44Oq44OD44Kv44GV44KM44Gf44KJ44OR44K/44O844Oz44GL44KJ5a++6LGh44Gu44K/44K544Kv44KS6Zmk5aSW44GZ44KL44CCXHJcbiAgICBjb25zdCBwYXR0ZXJuUmVtb3ZlSGFuZGxlciA9IChpbmRleDpudW1iZXIpPT4oKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHRhc2tSZW1vdmVQYXR0ZXJuKFtpbmRleCxwcm9wcy5jaG9pY2VdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6YG45oqe44GX44Gf44OR44K/44O844OzSUTjgYzoqK3lrprjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLmir3lh7rjgZnjgovjgIJcclxuICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKCh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSBwcm9wcy5jaG9pY2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdHN9PlxyXG4gICAgICAgICAgICB7Y2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzayxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1BhdHRlcm4gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybkluZm9cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuSW5mby5wYXR0ZXJuSUQgPT0gcHJvcHMuY2hvaWNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3QtbGFiZWwtJHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrUGF0dGVyblswXS5wYXR0ZXJuSUQgKyB0YXNrUGF0dGVyblswXS5vcmRlclxyXG4gICAgICAgICAgICAgICAgfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuWzBdLnBhdHRlcm5JRCArICdfJyArIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuWzBdLnBhdHRlcm5JRCArIHRhc2tQYXR0ZXJuWzBdLm9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiIG9uQ2xpY2s9e3BhdHRlcm5SZW1vdmVIYW5kbGVyKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bGFiZWxJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgTGluZSBpdGVtICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuWzBdLnBhdHRlcm5JRCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ub3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICR7dGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMVwiXX0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMlwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHtcclxuICAgIGNhbGVuZGFyLFxyXG4gICAgcGF0dGVybixcclxuICAgIHRhc2tzLFxyXG4gICAgdXNlclRhc2ssXHJcbiAgICB1c2VyVGFza0luZm8sXHJcbn0gZnJvbSBcIi4vdXNlclRhc2tzVHlwZVwiO1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogdXNlclRhc2sgPSB7XHJcbiAgICB1c2VyVGFza0luZm86IHtcclxuICAgICAgICBjYWxlbmRhcjoge1xyXG4gICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCldOiB7XHJcbiAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldE1vbnRoKCkgKyAxXToge1xyXG4gICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRpdGxlXCJdOiBcInRpdGxlIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRpdGxlXCJdOiBcInRpdGxlIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIzIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0aXRsZVwiXTogXCJ0aXRsZSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0aXRsZVwiXTogXCJ0aXRsZSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBhdHRlcm46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4xXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogMixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBcInRlc3RQYXR0ZXJuMlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1widGl0bGVcIl06IFwidGl0bGUgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcInRpdGxlXCJdOiBcInRpdGxlIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0aXRsZVwiXTogXCJ0aXRsZSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCJkZWZhbHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1widGl0bGVcIl06IFwidGl0bGUgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCB0YXNrc01vZHVsZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidGFza3NcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgaW5pdChzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx1c2VyVGFza0luZm8+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbml0IGRhdGFcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyBzdGF0ZSA9IHsuLi5kYXRhfTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0IHN0YXRlLnVzZXJUYXNrSW5mbyDliY1cIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mbyA9IGRhdGE7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pdCBzdGF0ZS51c2VyVGFza0luZm8g5b6MXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dXNlclRhc2s+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgLi4uZGF0YSB9O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RhdGUnKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWxsRGVsZXRlKHN0YXRlOiB1c2VyVGFzaykge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBhbGxEZWxldGVcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBEYXlQbGFu44Gr44Gm44K/44K544Kv44KS44Kv44Oq44OD44Kv44GX44Gf6Zqb44Gr5a6M5LqG44OV44Op44Kw44KSdHJ1ZeOBq+WkieabtOOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBpuW5tOOAgeaciOOAgeaXpeOAgeOCv+OCueOCr+OBruOCpOODs+ODh+ODg+OCr+OCueeVquWPt+OCkuWPl+OBkeWPluOBo+OBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tDaGVja0NvbXBsZXRlKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcltdPikge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICBdW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrcy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAodGFza3MpID0+IHRhc2tzLm9yZGVyID09IGFjdGlvbi5wYXlsb2FkWzNdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVthY3Rpb24ucGF5bG9hZFsxXV1bXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsyXVxyXG4gICAgICAgICAgICBdLnRhc2tzW2luZGV4XS5mbHVnID0gIXN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzBdXHJcbiAgICAgICAgICAgIF1bYWN0aW9uLnBheWxvYWRbMV1dW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrc1tpbmRleF0uZmx1ZztcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOW8leaVsOOBr3N0YXRl44Go5bm044CB5pyI44CB5pel44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjga4044Gk44Gu5pWw5YCk44GM5qC857SN44GV44KM44Gf6YWN5YiXXHJcbiAgICAgICAgY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIoXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VyVGFzayxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcltdPlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBzdGF0ZeOBi+OCiemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44GM6Kit5a6a44GV44KM44Gm44GE44KL44K/44K544Kv44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7NJROOBq+e0kOS7mOOBj+OCv+OCueOCr+S4gOimp+OBi+OCieOCq+ODrOODs+ODgOODvOOBuOOBrueZu+mMsuaDheWgseOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCBUb2RheVRhc2tzID0gY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g44OR44K/44O844Oz44GM6KSH5pWw55m76Yyy44GV44KM44Gm44GE44KL44K/44K544Kv44G444Gu5a++5b+c44Go44GX44Gm44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgavoqbLlvZPjgZnjgovopoHntKDjgaDjgZHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQYXR0ZXJuID0gdGFzay5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybkluZm8ucGF0dGVybklEID09IGFjdGlvbi5wYXlsb2FkWzNdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6YWN5YiX44Gu44K/44K544Kv44Go5oq95Ye644GX44Gf44OR44K/44O844Oz5oOF5aCx44KS5pW05b2i44GX44Gm6L+U44GZ44CCXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiB0YXNrUGF0dGVyblswXS5vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHRhc2suZGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRldGFpbDI6IHRhc2suZGV0YWlsMixcclxuICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGXjga5Nb250aOOBrumAo+aDs+mFjeWIl+OBq+aWsOOBl+OBhOaXpeS7mOOBrumAo+aDs+mFjeWIl+OCkui/veWKoOOBmeOCi+OAglxyXG4gICAgICAgICAgICAvLyDov73liqDmg4XloLHjga/lvJXmlbDjga7ml6XjgajjgZPjgozjgb7jgafjga7lh6bnkIbjgafkvZzmiJDjgZfjgZ/jgqvjg6zjg7Pjg4Djg7znmbvpjLLnlKjmg4XloLFcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgIF0gPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkWzJdXToge1xyXG4gICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogYWN0aW9uLnBheWxvYWRbM10sXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza3M6IFRvZGF5VGFza3MsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gYWN0aW9uLnBheWxvYWRbM107XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsyXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OBruips+e0sOOCkuioreWumuOBmeOCi+WHpueQhuOAguW8leaVsOOBruODhuOCreOCueODiOmFjeWIl+OBq+OBr1vlhaXlipvlhoXlrrnjgIHpgKPmg7PphY3liJfjga7jgq3jg7zjgIHjgr/jgrnjgq/jga7phY3liJfjgpLmjIflrprjgZnjgovmlbDlrZdd44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza0RldGFpbFJlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQoYWN0aW9uLnBheWxvYWRbMl0pXS5kZXRhaWwgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQoYWN0aW9uLnBheWxvYWRbMl0pXS5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMV1dOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OCkui/veWKoOOBmeOCi+WHpueQhuOAguW8leaVsOOBruODhuOCreOCueODiOmFjeWIl+OBq+OBr1vlhaXlipvlhoXlrrnjgIHpgKPmg7PphY3liJfjga7jgq3jg7zjgIHjgr/jgrnjgq/jga7phY3liJfjgpLmjIflrprjgZnjgovmlbDlrZdd44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza1JlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHRhc2tzPikge1xyXG4gICAgICAgICAgICBjb25zdCByZWdpc3RlclRhc2sgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmVnaXN0ZXJUYXNrLnBhdHRlcm5JbmZvLm1hcCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IGNvbnRlbnQucGF0dGVybklEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQub3JkZXIgPSBjaG9pY2VQYXR0ZXJuVGFza3MubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlZ2lzdGVyVGFzayk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5wdXNoKHJlZ2lzdGVyVGFzayk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXNrUGF0dGVyblVwZGF0ZShcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJUYXNrLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgICAgICAgICAgbmV3Q2hlY2tlZDogbnVtYmVyW107XHJcbiAgICAgICAgICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgICAgICAgICB9PlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyDjgZPjgZPjgafjgoTjgovjgZPjgajjga/vvJ9cclxuICAgICAgICAgICAgLy8g44G+44Ga5byV5pWw44Gr44K/44K544Kv44Gu6YWN5YiX44Kk44Oz44OH44OD44Kv44K555Wq5Y+344GM5b+F6KaBXHJcbiAgICAgICAgICAgIC8vIOODkeOCv+ODvOODs0lE44Gu6YWN5YiX44KS5Y+X44GR5Y+W44KL44CCXHJcbiAgICAgICAgICAgIC8vIOmFjeWIl+OBqHN0YXRl44KS5q+U6LyD44GX44Gm44CB44Gq44GR44KM44Gw55m76Yyy44CCT3JkZXLjga/mnIDlpKflgKQrMeOAgumAhuOBq+WJiumZpOOBleOCjOOBpuOBhOOCi+OCguOBruOBr+mZpOWkluOAglxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhdGVQYXR0ZXJuSWRMaXN0ID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW2FjdGlvbi5wYXlsb2FkLmluZGV4XS5wYXR0ZXJuSW5mby5tYXAoXHJcbiAgICAgICAgICAgICAgICAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LnBhdHRlcm5JRDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IChvbGRzOiBudW1iZXJbXSwgbmV4dHM6IG51bWJlcltdKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgYWRkczogbmV4dHMuZmlsdGVyKChlKSA9PiAhb2xkcy5pbmNsdWRlcyhlKSksXHJcbiAgICAgICAgICAgICAgICBzdWJzOiBvbGRzLmZpbHRlcigoZSkgPT4gIW5leHRzLmluY2x1ZGVzKGUpKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRpZmYoc3RhdGVQYXR0ZXJuSWRMaXN0LCBhY3Rpb24ucGF5bG9hZC5uZXdDaGVja2VkKTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZUFycmF5OiB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5zdWJzWzBdID09IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1thY3Rpb24ucGF5bG9hZC5pbmRleF0ucGF0dGVybkluZm9bMF0ucGF0dGVybklEKTtcclxuICAgICAgICAgICAgdXBkYXRlQXJyYXkgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbYWN0aW9uLnBheWxvYWQuaW5kZXhdLnBhdHRlcm5JbmZvLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdWIpID0+ICBzdWIgIT0gY29udGVudC5wYXR0ZXJuSURcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmVzdWx0LmFkZHMubWFwKChhZGQpID0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IE1heDpudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IGFkZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNob2ljZVBhdHRlcm5UYXNrcy5tYXAoKHRhc2spPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0YXNrLnBhdHRlcm5JbmZvLmZpbmQoaW5mbyA9PiBpbmZvLnBhdHRlcm5JRCA9IGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgTWF4IDwgY29udGVudC5wYXR0ZXJuSUQgPyBNYXggPSBjb250ZW50LnBhdHRlcm5JRCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwdXNoQ29udGVudD17cGF0dGVybklEOiBhZGQsXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IE1heH1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5LnB1c2gocHVzaENvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW2FjdGlvbi5wYXlsb2FkLmluZGV4XS5wYXR0ZXJuSW5mbyA9IHVwZGF0ZUFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44KS6L+95Yqg44GZ44KL5Yem55CG44CC5byV5pWw44Gu44OG44Kt44K544OI6YWN5YiX44Gr44GvW+WFpeWKm+WGheWuueOAgemAo+aDs+mFjeWIl+OBruOCreODvOOAgeOCv+OCueOCr+OBrumFjeWIl+OCkuaMh+WumuOBmeOCi+aVsOWtl13jgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrRGVsZXRlKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5zcGxpY2UoYWN0aW9uLnBheWxvYWQsMSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZVRhc2spO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44KS6L+95Yqg44GZ44KL5Yem55CG44CC5byV5pWw44Gu44OG44Kt44K544OI6YWN5YiX44Gr44GvW+WFpeWKm+WGheWuueOAgemAo+aDs+mFjeWIl+OBruOCreODvOOAgeOCv+OCueOCr+OBrumFjeWIl+OCkuaMh+WumuOBmeOCi+aVsOWtl13jgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrUmVtb3ZlUGF0dGVybihzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXJbXT4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlZFRhc2sgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbYWN0aW9uLnBheWxvYWRbMF1dLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQucGF0dGVybklEICE9IGFjdGlvbi5wYXlsb2FkWzFdO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1thY3Rpb24ucGF5bG9hZFswXV0ucGF0dGVybkluZm8gPSBkZWxldGVkVGFzaztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGVsZXRlZFRhc2spO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgICBpbml0LFxyXG4gICAgUmVnaXN0ZXIsXHJcbiAgICBhbGxEZWxldGUsXHJcbiAgICB0YXNrQ2hlY2tDb21wbGV0ZSxcclxuICAgIGNhbGVuZGFyUGF0dGVyblJlZ2lzdGVyLFxyXG4gICAgdGFza0RldGFpbFJlZ2lzdGVyLFxyXG4gICAgdGFza1JlZ2lzdGVyLFxyXG4gICAgdGFza1BhdHRlcm5VcGRhdGUsXHJcbiAgICB0YXNrRGVsZXRlLFxyXG4gICAgdGFza1JlbW92ZVBhdHRlcm4sXHJcbn0gPSB0YXNrc01vZHVsZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza3NNb2R1bGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=