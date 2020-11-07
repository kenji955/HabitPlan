webpackHotUpdate_N_E("pages/tasks",{

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
      console.log('patternId');
      console.log(action.payload.patternId);
      console.log('detailTitle');
      console.log(action.payload.detailTitle);
      var index = state.userTaskInfo.tasks.findIndex(function (content) {
        return content.detail['title'] == action.payload.detailTitle;
      });
      console.log('index');
      console.log(index);
      var deletedTask = state.userTaskInfo.tasks[index].patternInfo.filter(function (content) {
        return content.patternID != action.payload.patternId;
      });
      state.userTaskInfo.tasks[index].patternInfo = deletedTask;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwidGFza3MiLCJvcmRlciIsImRldGFpbCIsImZsdWciLCJwYXR0ZXJuIiwicGF0dGVybklkIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuSW5mbyIsInBhdHRlcm5JRCIsInRhc2tzTW9kdWxlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJpbml0Iiwic3RhdGUiLCJhY3Rpb24iLCJkYXRhIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJSZWdpc3RlciIsImFsbERlbGV0ZSIsInRhc2tDaGVja0NvbXBsZXRlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjYWxlbmRhclBhdHRlcm5SZWdpc3RlciIsImNob2ljZVBhdHRlcm5UYXNrcyIsImZpbHRlciIsInRhc2siLCJzb21lIiwiVG9kYXlUYXNrcyIsIm1hcCIsInRhc2tQYXR0ZXJuIiwidGFza0RldGFpbFJlZ2lzdGVyIiwicGFyc2VJbnQiLCJ0YXNrUmVnaXN0ZXIiLCJyZWdpc3RlclRhc2siLCJjb250ZW50IiwibGVuZ3RoIiwicHVzaCIsInRhc2tQYXR0ZXJuVXBkYXRlIiwic3RhdGVQYXR0ZXJuSWRMaXN0IiwiZGlmZiIsIm9sZHMiLCJuZXh0cyIsImFkZHMiLCJlIiwiaW5jbHVkZXMiLCJzdWJzIiwicmVzdWx0IiwibmV3Q2hlY2tlZCIsInVwZGF0ZUFycmF5Iiwic3ViIiwiYWRkIiwiTWF4IiwiZmluZCIsImluZm8iLCJwdXNoQ29udGVudCIsInRhc2tEZWxldGUiLCJkZWxldGVUYXNrIiwic3BsaWNlIiwidGFza1JlbW92ZVBhdHRlcm4iLCJkZXRhaWxUaXRsZSIsImRlbGV0ZWRUYXNrIiwiYWN0aW9ucyJdLCJtYXBw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TyxDQUFDQyxHQUFSLENBQVlJLEtBQVo7QUFDQSxVQUFNd0MsV0FBVyxHQUFHakQsS0FBSyxDQUFDckIsWUFBTixDQUFtQk8sS0FBbkIsQ0FBeUJ1QixLQUF6QixFQUFnQ2hCLFdBQWhDLENBQTRDb0IsTUFBNUMsQ0FBbUQsVUFBVVUsT0FBVixFQUFtQjtBQUN0RixlQUFPQSxPQUFPLENBQUM3QixTQUFSLElBQXFCTyxNQUFNLENBQUNFLE9BQVAsQ0FBZVosU0FBM0M7QUFDRCxPQUZpQixDQUFwQjtBQUdFUyxXQUFLLENBQUNyQixZQUFOLENBQW1CTyxLQUFuQixDQUF5QnVCLEtBQXpCLEVBQWdDaEIsV0FBaEMsR0FBOEN3RCxXQUE5QztBQUNGN0MsYUFBTyxDQUFDQyxHQUFSLENBQVk0QyxXQUFaO0FBQ0g7QUEzTEs7QUFIa0IsQ0FBRCxDQUEvQjsyQkE2TUl0RCxXQUFXLENBQUN1RCxPO0lBVlpuRCxJLHdCQUFBQSxJO0lBQ0FPLFEsd0JBQUFBLFE7SUFDQUMsUyx3QkFBQUEsUztJQUNBQyxpQix3QkFBQUEsaUI7SUFDQUcsdUIsd0JBQUFBLHVCO0lBQ0FRLGtCLHdCQUFBQSxrQjtJQUNBRSxZLHdCQUFBQSxZO0lBQ0FLLGlCLHdCQUFBQSxpQjtJQUNBa0IsVSx3QkFBQUEsVTtJQUNBRyxpQix3QkFBQUEsaUI7O0FBR1dwRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy5jZGI4Yjk0NTEzN2E1NzQyN2MwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgY2FsZW5kYXIsXHJcbiAgICBwYXR0ZXJuLFxyXG4gICAgdGFza3MsXHJcbiAgICB1c2VyVGFzayxcclxuICAgIHVzZXJUYXNrSW5mbyxcclxufSBmcm9tIFwiLi91c2VyVGFza3NUeXBlXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiB1c2VyVGFzayA9IHtcclxuICAgIHVzZXJUYXNrSW5mbzoge1xyXG4gICAgICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKV06IHtcclxuICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDFdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBPY3QgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGl0bGVcIl06IFwidGl0bGUgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGl0bGVcIl06IFwidGl0bGUgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjMgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRpdGxlXCJdOiBcInRpdGxlIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRpdGxlXCJdOiBcInRpdGxlIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0dGVybjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogXCJ0ZXN0UGF0dGVybjFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiAyLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4yXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0aXRsZVwiXTogXCJ0aXRsZSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCJkZWZhbHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1widGl0bGVcIl06IFwidGl0bGUgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcInRpdGxlXCJdOiBcInRpdGxlIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0aXRsZVwiXTogXCJ0aXRsZSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCJkZWZhbHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IHRhc2tzTW9kdWxlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ0YXNrc1wiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBpbml0KHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJUYXNrSW5mbz4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgZGF0YVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHN0YXRlID0gey4uLmRhdGF9O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluaXQgc3RhdGUudXNlclRhc2tJbmZvIOWJjVwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvID0gZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0IHN0YXRlLnVzZXJUYXNrSW5mbyDlvoxcIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZWdpc3RlcihzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx1c2VyVGFzaz4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCAuLi5kYXRhIH07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGF0ZScpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbGxEZWxldGUoc3RhdGU6IHVzZXJUYXNrKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIGFsbERlbGV0ZVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIERheVBsYW7jgavjgabjgr/jgrnjgq/jgpLjgq/jg6rjg4Pjgq/jgZfjgZ/pmpvjgavlrozkuobjg5Xjg6njgrDjgpJ0cnVl44Gr5aSJ5pu044GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gm5bm044CB5pyI44CB5pel44CB44K/44K544Kv44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+344KS5Y+X44GR5Y+W44Gj44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza0NoZWNrQ29tcGxldGUoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyW10+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgIF1bYWN0aW9uLnBheWxvYWRbMl1dLnRhc2tzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICh0YXNrcykgPT4gdGFza3Mub3JkZXIgPT0gYWN0aW9uLnBheWxvYWRbM11cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW2FjdGlvbi5wYXlsb2FkWzFdXVtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzJdXHJcbiAgICAgICAgICAgIF0udGFza3NbaW5kZXhdLmZsdWcgPSAhc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMF1cclxuICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsxXV1bYWN0aW9uLnBheWxvYWRbMl1dLnRhc2tzW2luZGV4XS5mbHVnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5byV5pWw44Gvc3RhdGXjgajlubTjgIHmnIjjgIHml6XjgIHpgbjmip7jgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7NJROOBrjTjgaTjga7mlbDlgKTjgYzmoLzntI3jgZXjgozjgZ/phY3liJdcclxuICAgICAgICBjYWxlbmRhclBhdHRlcm5SZWdpc3RlcihcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJUYXNrLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyW10+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIHN0YXRl44GL44KJ6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgYzoqK3lrprjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IGFjdGlvbi5wYXlsb2FkWzNdXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOODkeOCv+ODvOODs0lE44Gr57SQ5LuY44GP44K/44K544Kv5LiA6Kan44GL44KJ44Kr44Os44Oz44OA44O844G444Gu55m76Yyy5oOF5aCx44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IFRvZGF5VGFza3MgPSBjaG9pY2VQYXR0ZXJuVGFza3MubWFwKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7PjgYzopIfmlbDnmbvpjLLjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgbjjga7lr77lv5zjgajjgZfjgabjgIHpgbjmip7jgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7NJROOBq+ipsuW9k+OBmeOCi+imgee0oOOBoOOBkeOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1BhdHRlcm4gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybkluZm9cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuSW5mby5wYXR0ZXJuSUQgPT0gYWN0aW9uLnBheWxvYWRbM107XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDphY3liJfjga7jgr/jgrnjgq/jgajmir3lh7rjgZfjgZ/jg5Hjgr/jg7zjg7Pmg4XloLHjgpLmlbTlvaLjgZfjgabov5TjgZnjgIJcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHRhc2tQYXR0ZXJuWzBdLm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogdGFzay5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGV0YWlsMjogdGFzay5kZXRhaWwyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZeOBrk1vbnRo44Gu6YCj5oOz6YWN5YiX44Gr5paw44GX44GE5pel5LuY44Gu6YCj5oOz6YWN5YiX44KS6L+95Yqg44GZ44KL44CCXHJcbiAgICAgICAgICAgIC8vIOi/veWKoOaDheWgseOBr+W8leaVsOOBruaXpeOBqOOBk+OCjOOBvuOBp+OBruWHpueQhuOBp+S9nOaIkOOBl+OBn+OCq+ODrOODs+ODgOODvOeZu+mMsueUqOaDheWgsVxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgXSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMl1dOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiBhY3Rpb24ucGF5bG9hZFszXSxcclxuICAgICAgICAgICAgICAgICAgICB0YXNrczogVG9kYXlUYXNrcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgICAgICBdW2FjdGlvbi5wYXlsb2FkWzJdXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44Gu6Kmz57Sw44KS6Kit5a6a44GZ44KL5Yem55CG44CC5byV5pWw44Gu44OG44Kt44K544OI6YWN5YiX44Gr44GvW+WFpeWKm+WGheWuueOAgemAo+aDs+mFjeWIl+OBruOCreODvOOAgeOCv+OCueOCr+OBrumFjeWIl+OCkuaMh+WumuOBmeOCi+aVsOWtl13jgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrRGV0YWlsUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nW10+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1twYXJzZUludChhY3Rpb24ucGF5bG9hZFsyXSldLmRldGFpbCA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1twYXJzZUludChhY3Rpb24ucGF5bG9hZFsyXSldLmRldGFpbCxcclxuICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZFsxXV06IGFjdGlvbi5wYXlsb2FkWzBdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44KS6L+95Yqg44GZ44KL5Yem55CG44CC5byV5pWw44Gu44OG44Kt44K544OI6YWN5YiX44Gr44GvW+WFpeWKm+WGheWuueOAgemAo+aDs+mFjeWIl+OBruOCreODvOOAgeOCv+OCueOCr+OBrumFjeWIl+OCkuaMh+WumuOBmeOCi+aVsOWtl13jgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dGFza3M+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2lzdGVyVGFzayA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZWdpc3RlclRhc2sucGF0dGVybkluZm8ubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaG9pY2VQYXR0ZXJuVGFza3MgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGFzaykgPT4gdGFzay5wYXR0ZXJuSUQgPT0gY29udGVudC5wYXR0ZXJuSURcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5vcmRlciA9IGNob2ljZVBhdHRlcm5UYXNrcy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVnaXN0ZXJUYXNrKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLnB1c2gocmVnaXN0ZXJUYXNrKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhc2tQYXR0ZXJuVXBkYXRlKFxyXG4gICAgICAgICAgICBzdGF0ZTogdXNlclRhc2ssXHJcbiAgICAgICAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgICAgICAgICBuZXdDaGVja2VkOiBudW1iZXJbXTtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgICAgIH0+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIOOBk+OBk+OBp+OChOOCi+OBk+OBqOOBr++8n1xyXG4gICAgICAgICAgICAvLyDjgb7jgZrlvJXmlbDjgavjgr/jgrnjgq/jga7phY3liJfjgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgYzlv4XopoFcclxuICAgICAgICAgICAgLy8g44OR44K/44O844OzSUTjga7phY3liJfjgpLlj5fjgZHlj5bjgovjgIJcclxuICAgICAgICAgICAgLy8g6YWN5YiX44Goc3RhdGXjgpLmr5TovIPjgZfjgabjgIHjgarjgZHjgozjgbDnmbvpjLLjgIJPcmRlcuOBr+acgOWkp+WApCsx44CC6YCG44Gr5YmK6Zmk44GV44KM44Gm44GE44KL44KC44Gu44Gv6Zmk5aSW44CCXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZVBhdHRlcm5JZExpc3QgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbYWN0aW9uLnBheWxvYWQuaW5kZXhdLnBhdHRlcm5JbmZvLm1hcChcclxuICAgICAgICAgICAgICAgIChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQucGF0dGVybklEO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gKG9sZHM6IG51bWJlcltdLCBuZXh0czogbnVtYmVyW10pID0+ICh7XHJcbiAgICAgICAgICAgICAgICBhZGRzOiBuZXh0cy5maWx0ZXIoKGUpID0+ICFvbGRzLmluY2x1ZGVzKGUpKSxcclxuICAgICAgICAgICAgICAgIHN1YnM6IG9sZHMuZmlsdGVyKChlKSA9PiAhbmV4dHMuaW5jbHVkZXMoZSkpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGlmZihzdGF0ZVBhdHRlcm5JZExpc3QsIGFjdGlvbi5wYXlsb2FkLm5ld0NoZWNrZWQpO1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlQXJyYXk6IHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgb3JkZXI6IG51bWJlcjtcclxuICAgICAgICAgICAgfVtdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnN1YnNbMF0gPT0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW2FjdGlvbi5wYXlsb2FkLmluZGV4XS5wYXR0ZXJuSW5mb1swXS5wYXR0ZXJuSUQpO1xyXG4gICAgICAgICAgICB1cGRhdGVBcnJheSA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1thY3Rpb24ucGF5bG9hZC5pbmRleF0ucGF0dGVybkluZm8uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnN1YnMuc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHN1YikgPT4gIHN1YiAhPSBjb250ZW50LnBhdHRlcm5JRFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZXN1bHQuYWRkcy5tYXAoKGFkZCkgPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgTWF4Om51bWJlciA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaG9pY2VQYXR0ZXJuVGFza3MgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZSgodGFzaykgPT4gdGFzay5wYXR0ZXJuSUQgPT0gYWRkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzayk9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHRhc2sucGF0dGVybkluZm8uZmluZChpbmZvID0+IGluZm8ucGF0dGVybklEID0gYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICBNYXggPCBjb250ZW50LnBhdHRlcm5JRCA/IE1heCA9IGNvbnRlbnQucGF0dGVybklEIDogJyc7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHB1c2hDb250ZW50PXtwYXR0ZXJuSUQ6IGFkZCxcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogTWF4fVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkucHVzaChwdXNoQ29udGVudCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbYWN0aW9uLnBheWxvYWQuaW5kZXhdLnBhdHRlcm5JbmZvID0gdXBkYXRlQXJyYXk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jgpLov73liqDjgZnjgovlh6bnkIbjgILlvJXmlbDjga7jg4bjgq3jgrnjg4jphY3liJfjgavjga9b5YWl5Yqb5YaF5a6544CB6YCj5oOz6YWN5YiX44Gu44Kt44O844CB44K/44K544Kv44Gu6YWN5YiX44KS5oyH5a6a44GZ44KL5pWw5a2XXeOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tEZWxldGUoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLnNwbGljZShhY3Rpb24ucGF5bG9hZCwxKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGVsZXRlVGFzayk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jgpLov73liqDjgZnjgovlh6bnkIbjgILlvJXmlbDjga7jg4bjgq3jgrnjg4jphY3liJfjgavjga9b5YWl5Yqb5YaF5a6544CB6YCj5oOz6YWN5YiX44Gu44Kt44O844CB44K/44K544Kv44Gu6YWN5YiX44KS5oyH5a6a44GZ44KL5pWw5a2XXeOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tSZW1vdmVQYXR0ZXJuKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgcGF0dGVybklkOiBudW1iZXI7IGRldGFpbFRpdGxlOiBzdHJpbmc7IH0+KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXR0ZXJuSWQnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQucGF0dGVybklkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RldGFpbFRpdGxlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkLmRldGFpbFRpdGxlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmluZEluZGV4KChjb250ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZGV0YWlsWyd0aXRsZSddID09IGFjdGlvbi5wYXlsb2FkLmRldGFpbFRpdGxlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luZGV4Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlZFRhc2sgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbaW5kZXhdLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQucGF0dGVybklEICE9IGFjdGlvbi5wYXlsb2FkLnBhdHRlcm5JZDtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbaW5kZXhdLnBhdHRlcm5JbmZvID0gZGVsZXRlZFRhc2s7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZWRUYXNrKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gICAgaW5pdCxcclxuICAgIFJlZ2lzdGVyLFxyXG4gICAgYWxsRGVsZXRlLFxyXG4gICAgdGFza0NoZWNrQ29tcGxldGUsXHJcbiAgICBjYWxlbmRhclBhdHRlcm5SZWdpc3RlcixcclxuICAgIHRhc2tEZXRhaWxSZWdpc3RlcixcclxuICAgIHRhc2tSZWdpc3RlcixcclxuICAgIHRhc2tQYXR0ZXJuVXBkYXRlLFxyXG4gICAgdGFza0RlbGV0ZSxcclxuICAgIHRhc2tSZW1vdmVQYXR0ZXJuLFxyXG59ID0gdGFza3NNb2R1bGUuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tzTW9kdWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9