webpackHotUpdate_N_E("pages/DayPlan",{

/***/ "./src/modules/tasksModule.tsx":
/*!*************************************!*\
  !*** ./src/modules/tasksModule.tsx ***!
  \*************************************/
/*! exports provided: init, Register, allDelete, taskCheckComplete, calendarPatternRegister, taskDetailRegister, taskRegister, taskPatternUpdate, taskDelete, default */
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
    taskDelete = _tasksModule$actions.taskDelete;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwidGFza3MiLCJvcmRlciIsImRldGFpbCIsImZsdWciLCJwYXR0ZXJuIiwicGF0dGVybklkIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuSW5mbyIsInBhdHRlcm5JRCIsInRhc2tzTW9kdWxlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJpbml0Iiwic3RhdGUiLCJhY3Rpb24iLCJkYXRhIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJSZWdpc3RlciIsImFsbERlbGV0ZSIsInRhc2tDaGVja0NvbXBsZXRlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjYWxlbmRhclBhdHRlcm5SZWdpc3RlciIsImNob2ljZVBhdHRlcm5UYXNrcyIsImZpbHRlciIsInRhc2siLCJzb21lIiwiVG9kYXlUYXNrcyIsIm1hcCIsInRhc2tQYXR0ZXJuIiwidGFza0RldGFpbFJlZ2lzdGVyIiwicGFyc2VJbnQiLCJ0YXNrUmVnaXN0ZXIiLCJyZWdpc3RlclRhc2siLCJjb250ZW50IiwibGVuZ3RoIiwicHVzaCIsInRhc2tQYXR0ZXJuVXBkYXRlIiwic3RhdGVQYXR0ZXJuSWRMaXN0IiwiZGlmZiIsIm9sZHMiLCJuZXh0cyIsImFkZHMiLCJlIiwiaW5jbHVkZXMiLCJzdWJzIiwicmVzdWx0IiwibmV3Q2hlY2tlZCIsInVwZGF0ZUFycmF5Iiwic3ViIiwiYWRkIiwiTWF4IiwiZmluZCIsImluZm8iLCJwdXNoQ29udGVudCIsInRhc2tEZWxldGUiLCJkZWxldGVUYXNrIiwic3BsaWNlIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQSxJ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cEQsZUFBSyxFQUFFcUQ7QUFETyxTQUFsQjtBQUVBSCxtQkFBVyxDQUFDWixJQUFaLENBQWlCa0IsV0FBakI7QUFDSCxPQWJEO0FBZUEzQyxXQUFLLENBQUNyQixZQUFOLENBQW1CTyxLQUFuQixDQUF5QmUsTUFBTSxDQUFDRSxPQUFQLENBQWVNLEtBQXhDLEVBQStDaEIsV0FBL0MsR0FBNkQ0QyxXQUE3RDtBQUNILEtBcktLO0FBc0tOO0FBQ0FPLGNBdktNLHNCQXVLSzVDLEtBdktMLEVBdUtzQkMsTUF2S3RCLEVBdUtxRDtBQUN2RCxVQUFNNEMsVUFBVSxHQUFHN0MsS0FBSyxDQUFDckIsWUFBTixDQUFtQk8sS0FBbkIsQ0FBeUI0RCxNQUF6QixDQUFnQzdDLE1BQU0sQ0FBQ0UsT0FBdkMsRUFBK0MsQ0FBL0MsQ0FBbkI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVl3QyxVQUFaO0FBQ0g7QUExS0s7QUFIa0IsQ0FBRCxDQUEvQjsyQkEyTElsRCxXQUFXLENBQUNvRCxPO0lBVFpoRCxJLHdCQUFBQSxJO0lBQ0FPLFEsd0JBQUFBLFE7SUFDQUMsUyx3QkFBQUEsUztJQUNBQyxpQix3QkFBQUEsaUI7SUFDQUcsdUIsd0JBQUFBLHVCO0lBQ0FRLGtCLHdCQUFBQSxrQjtJQUNBRSxZLHdCQUFBQSxZO0lBQ0FLLGlCLHdCQUFBQSxpQjtJQUNBa0IsVSx3QkFBQUEsVTs7QUFHV2pELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0RheVBsYW4uZDYzMjhmMzcwYTVlYTU2N2I5NWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHtcclxuICAgIGNhbGVuZGFyLFxyXG4gICAgcGF0dGVybixcclxuICAgIHRhc2tzLFxyXG4gICAgdXNlclRhc2ssXHJcbiAgICB1c2VyVGFza0luZm8sXHJcbn0gZnJvbSBcIi4vdXNlclRhc2tzVHlwZVwiO1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogdXNlclRhc2sgPSB7XHJcbiAgICB1c2VyVGFza0luZm86IHtcclxuICAgICAgICBjYWxlbmRhcjoge1xyXG4gICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCldOiB7XHJcbiAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldE1vbnRoKCkgKyAxXToge1xyXG4gICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRpdGxlXCJdOiBcInRpdGxlIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRpdGxlXCJdOiBcInRpdGxlIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIzIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0aXRsZVwiXTogXCJ0aXRsZSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0aXRsZVwiXTogXCJ0aXRsZSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBhdHRlcm46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4xXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogMixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBcInRlc3RQYXR0ZXJuMlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1widGl0bGVcIl06IFwidGl0bGUgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcInRpdGxlXCJdOiBcInRpdGxlIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0aXRsZVwiXTogXCJ0aXRsZSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCJkZWZhbHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1widGl0bGVcIl06IFwidGl0bGUgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCB0YXNrc01vZHVsZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidGFza3NcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgaW5pdChzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx1c2VyVGFza0luZm8+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbml0IGRhdGFcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyBzdGF0ZSA9IHsuLi5kYXRhfTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0IHN0YXRlLnVzZXJUYXNrSW5mbyDliY1cIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mbyA9IGRhdGE7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pdCBzdGF0ZS51c2VyVGFza0luZm8g5b6MXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dXNlclRhc2s+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgLi4uZGF0YSB9O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RhdGUnKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWxsRGVsZXRlKHN0YXRlOiB1c2VyVGFzaykge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBhbGxEZWxldGVcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBEYXlQbGFu44Gr44Gm44K/44K544Kv44KS44Kv44Oq44OD44Kv44GX44Gf6Zqb44Gr5a6M5LqG44OV44Op44Kw44KSdHJ1ZeOBq+WkieabtOOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBpuW5tOOAgeaciOOAgeaXpeOAgeOCv+OCueOCr+OBruOCpOODs+ODh+ODg+OCr+OCueeVquWPt+OCkuWPl+OBkeWPluOBo+OBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tDaGVja0NvbXBsZXRlKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcltdPikge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICBdW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrcy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAodGFza3MpID0+IHRhc2tzLm9yZGVyID09IGFjdGlvbi5wYXlsb2FkWzNdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVthY3Rpb24ucGF5bG9hZFsxXV1bXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsyXVxyXG4gICAgICAgICAgICBdLnRhc2tzW2luZGV4XS5mbHVnID0gIXN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzBdXHJcbiAgICAgICAgICAgIF1bYWN0aW9uLnBheWxvYWRbMV1dW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrc1tpbmRleF0uZmx1ZztcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOW8leaVsOOBr3N0YXRl44Go5bm044CB5pyI44CB5pel44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjga4044Gk44Gu5pWw5YCk44GM5qC857SN44GV44KM44Gf6YWN5YiXXHJcbiAgICAgICAgY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIoXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VyVGFzayxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcltdPlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBzdGF0ZeOBi+OCiemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44GM6Kit5a6a44GV44KM44Gm44GE44KL44K/44K544Kv44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7NJROOBq+e0kOS7mOOBj+OCv+OCueOCr+S4gOimp+OBi+OCieOCq+ODrOODs+ODgOODvOOBuOOBrueZu+mMsuaDheWgseOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCBUb2RheVRhc2tzID0gY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g44OR44K/44O844Oz44GM6KSH5pWw55m76Yyy44GV44KM44Gm44GE44KL44K/44K544Kv44G444Gu5a++5b+c44Go44GX44Gm44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgavoqbLlvZPjgZnjgovopoHntKDjgaDjgZHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQYXR0ZXJuID0gdGFzay5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybkluZm8ucGF0dGVybklEID09IGFjdGlvbi5wYXlsb2FkWzNdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6YWN5YiX44Gu44K/44K544Kv44Go5oq95Ye644GX44Gf44OR44K/44O844Oz5oOF5aCx44KS5pW05b2i44GX44Gm6L+U44GZ44CCXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiB0YXNrUGF0dGVyblswXS5vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHRhc2suZGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRldGFpbDI6IHRhc2suZGV0YWlsMixcclxuICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGXjga5Nb250aOOBrumAo+aDs+mFjeWIl+OBq+aWsOOBl+OBhOaXpeS7mOOBrumAo+aDs+mFjeWIl+OCkui/veWKoOOBmeOCi+OAglxyXG4gICAgICAgICAgICAvLyDov73liqDmg4XloLHjga/lvJXmlbDjga7ml6XjgajjgZPjgozjgb7jgafjga7lh6bnkIbjgafkvZzmiJDjgZfjgZ/jgqvjg6zjg7Pjg4Djg7znmbvpjLLnlKjmg4XloLFcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgIF0gPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkWzJdXToge1xyXG4gICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogYWN0aW9uLnBheWxvYWRbM10sXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza3M6IFRvZGF5VGFza3MsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gYWN0aW9uLnBheWxvYWRbM107XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsyXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OBruips+e0sOOCkuioreWumuOBmeOCi+WHpueQhuOAguW8leaVsOOBruODhuOCreOCueODiOmFjeWIl+OBq+OBr1vlhaXlipvlhoXlrrnjgIHpgKPmg7PphY3liJfjga7jgq3jg7zjgIHjgr/jgrnjgq/jga7phY3liJfjgpLmjIflrprjgZnjgovmlbDlrZdd44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza0RldGFpbFJlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQoYWN0aW9uLnBheWxvYWRbMl0pXS5kZXRhaWwgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQoYWN0aW9uLnBheWxvYWRbMl0pXS5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMV1dOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OCkui/veWKoOOBmeOCi+WHpueQhuOAguW8leaVsOOBruODhuOCreOCueODiOmFjeWIl+OBq+OBr1vlhaXlipvlhoXlrrnjgIHpgKPmg7PphY3liJfjga7jgq3jg7zjgIHjgr/jgrnjgq/jga7phY3liJfjgpLmjIflrprjgZnjgovmlbDlrZdd44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza1JlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHRhc2tzPikge1xyXG4gICAgICAgICAgICBjb25zdCByZWdpc3RlclRhc2sgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmVnaXN0ZXJUYXNrLnBhdHRlcm5JbmZvLm1hcCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IGNvbnRlbnQucGF0dGVybklEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQub3JkZXIgPSBjaG9pY2VQYXR0ZXJuVGFza3MubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlZ2lzdGVyVGFzayk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5wdXNoKHJlZ2lzdGVyVGFzayk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXNrUGF0dGVyblVwZGF0ZShcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJUYXNrLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgICAgICAgICAgbmV3Q2hlY2tlZDogbnVtYmVyW107XHJcbiAgICAgICAgICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgICAgICAgICB9PlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyDjgZPjgZPjgafjgoTjgovjgZPjgajjga/vvJ9cclxuICAgICAgICAgICAgLy8g44G+44Ga5byV5pWw44Gr44K/44K544Kv44Gu6YWN5YiX44Kk44Oz44OH44OD44Kv44K555Wq5Y+344GM5b+F6KaBXHJcbiAgICAgICAgICAgIC8vIOODkeOCv+ODvOODs0lE44Gu6YWN5YiX44KS5Y+X44GR5Y+W44KL44CCXHJcbiAgICAgICAgICAgIC8vIOmFjeWIl+OBqHN0YXRl44KS5q+U6LyD44GX44Gm44CB44Gq44GR44KM44Gw55m76Yyy44CCT3JkZXLjga/mnIDlpKflgKQrMeOAgumAhuOBq+WJiumZpOOBleOCjOOBpuOBhOOCi+OCguOBruOBr+mZpOWkluOAglxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhdGVQYXR0ZXJuSWRMaXN0ID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW2FjdGlvbi5wYXlsb2FkLmluZGV4XS5wYXR0ZXJuSW5mby5tYXAoXHJcbiAgICAgICAgICAgICAgICAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LnBhdHRlcm5JRDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IChvbGRzOiBudW1iZXJbXSwgbmV4dHM6IG51bWJlcltdKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgYWRkczogbmV4dHMuZmlsdGVyKChlKSA9PiAhb2xkcy5pbmNsdWRlcyhlKSksXHJcbiAgICAgICAgICAgICAgICBzdWJzOiBvbGRzLmZpbHRlcigoZSkgPT4gIW5leHRzLmluY2x1ZGVzKGUpKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRpZmYoc3RhdGVQYXR0ZXJuSWRMaXN0LCBhY3Rpb24ucGF5bG9hZC5uZXdDaGVja2VkKTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZUFycmF5OiB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5zdWJzWzBdID09IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1thY3Rpb24ucGF5bG9hZC5pbmRleF0ucGF0dGVybkluZm9bMF0ucGF0dGVybklEKTtcclxuICAgICAgICAgICAgdXBkYXRlQXJyYXkgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbYWN0aW9uLnBheWxvYWQuaW5kZXhdLnBhdHRlcm5JbmZvLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdWIpID0+ICBzdWIgIT0gY29udGVudC5wYXR0ZXJuSURcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmVzdWx0LmFkZHMubWFwKChhZGQpID0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IE1heDpudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IGFkZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNob2ljZVBhdHRlcm5UYXNrcy5tYXAoKHRhc2spPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0YXNrLnBhdHRlcm5JbmZvLmZpbmQoaW5mbyA9PiBpbmZvLnBhdHRlcm5JRCA9IGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgTWF4IDwgY29udGVudC5wYXR0ZXJuSUQgPyBNYXggPSBjb250ZW50LnBhdHRlcm5JRCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwdXNoQ29udGVudD17cGF0dGVybklEOiBhZGQsXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IE1heH1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5LnB1c2gocHVzaENvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW2FjdGlvbi5wYXlsb2FkLmluZGV4XS5wYXR0ZXJuSW5mbyA9IHVwZGF0ZUFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44KS6L+95Yqg44GZ44KL5Yem55CG44CC5byV5pWw44Gu44OG44Kt44K544OI6YWN5YiX44Gr44GvW+WFpeWKm+WGheWuueOAgemAo+aDs+mFjeWIl+OBruOCreODvOOAgeOCv+OCueOCr+OBrumFjeWIl+OCkuaMh+WumuOBmeOCi+aVsOWtl13jgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrRGVsZXRlKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5zcGxpY2UoYWN0aW9uLnBheWxvYWQsMSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZVRhc2spO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgICBpbml0LFxyXG4gICAgUmVnaXN0ZXIsXHJcbiAgICBhbGxEZWxldGUsXHJcbiAgICB0YXNrQ2hlY2tDb21wbGV0ZSxcclxuICAgIGNhbGVuZGFyUGF0dGVyblJlZ2lzdGVyLFxyXG4gICAgdGFza0RldGFpbFJlZ2lzdGVyLFxyXG4gICAgdGFza1JlZ2lzdGVyLFxyXG4gICAgdGFza1BhdHRlcm5VcGRhdGUsXHJcbiAgICB0YXNrRGVsZXRlLFxyXG59ID0gdGFza3NNb2R1bGUuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tzTW9kdWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9