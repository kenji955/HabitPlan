webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/modules/tasksModule.tsx":
/*!*************************************!*\
  !*** ./src/modules/tasksModule.tsx ***!
  \*************************************/
/*! exports provided: init, Register, allDelete, taskCheckComplete, calendarPatternRegster, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDelete", function() { return allDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskCheckComplete", function() { return taskCheckComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarPatternRegster", function() { return calendarPatternRegster; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


var _ref;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  userTaskInfo: {
    calendar: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, new Date("Thu, 22 May 2020 02:00:00").getFullYear(), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, new Date("Thu, 22 May 2020 02:00:00").getMonth() + 1, (_ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, new Date("Thu, 22 May 2020 02:00:00").getDate(), {
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
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, new Date("Thu, 23 May 2020 02:00:00").getDate(), {
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
    }), _ref))),
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
var tasksModule = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSlice"])({
  name: "tasks",
  initialState: initialState,
  reducers: {
    init: function init(state, action) {
      var data = action.payload;
      console.log("init data");
      console.log(data); // state = {...data};

      console.log("init state.userTaskInfo.calendar 前"); // console.log(state.userTaskInfo.calendar[0].PatternId);

      state.userTaskInfo = data;
      console.log("init state.userTaskInfo.calendar 後");
      console.log(state); // console.log(state.userTaskInfo.calendar[0]);
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
    calendarPatternRegster: function calendarPatternRegster(state, action) {
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
          detail1: task.detail1,
          detail2: task.detail2,
          flug: false
        };
      }); // stateのMonthの連想配列に新しい日付の連想配列を追加する。
      // 追加情報は引数の日とこれまでの処理で作成したカレンダー登録用情報

      state.userTaskInfo.calendar[action.payload[0]][action.payload[1]] = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload[2], {
        PatternId: action.payload[3],
        tasks: TodayTasks
      }); // action.payload[3];

      console.log(state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]]);
    }
  }
});
var _tasksModule$actions = tasksModule.actions,
    init = _tasksModule$actions.init,
    Register = _tasksModule$actions.Register,
    allDelete = _tasksModule$actions.allDelete,
    taskCheckComplete = _tasksModule$actions.taskCheckComplete,
    calendarPatternRegster = _tasksModule$actions.calendarPatternRegster;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwidGFza3MiLCJvcmRlciIsImRldGFpbDEiLCJkZXRhaWwyIiwiZmx1ZyIsInBhdHRlcm4iLCJwYXR0ZXJuSWQiLCJwYXR0ZXJuTmFtZSIsInBhdHRlcm5JbmZvIiwicGF0dGVybklEIiwidGFza3NNb2R1bGUiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluaXQiLCJzdGF0ZSIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsIlJlZ2lzdGVyIiwiYWxsRGVsZXRlIiwidGFza0NoZWNrQ29tcGxldGUiLCJpbmRleCIsImZpbmRJbmRleCIsImNhbGVuZGFyUGF0dGVyblJlZ3N0ZXIiLCJjaG9pY2VQYXR0ZXJuVGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwic29tZSIsIlRvZGF5VGFza3MiLCJtYXAiLCJ0YXNrUGF0dGVybiIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQSxJQUFNQSxZQUFzQixHQUFHO0FBQzNCQyxjQUFZLEVBQUU7QUFDVkMsWUFBUSxFQUFFLDhGQUNMLElBQUlDLElBQUosQ0FBUywyQkFBVCxFQUFzQ0MsV0FBdEMsRUFERyxnR0FFQyxJQUFJRCxJQUFKLENBQVMsMkJBQVQsRUFBc0NFLFFBQXRDLEtBQW1ELENBRnBELDhHQUdLLElBQUlGLElBQUosQ0FBUywyQkFBVCxFQUFzQ0csT0FBdEMsRUFITCxFQUd1RDtBQUMvQ0MsZUFBUyxFQUFFLENBRG9DO0FBRS9DQyxXQUFLLEVBQUUsQ0FDSDtBQUNJQyxhQUFLLEVBQUUsQ0FEWDtBQUVJQyxlQUFPLEVBQUUsa0JBRmI7QUFH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RUFBRTtBQUpILFNBQVA7QUFNSCxPQWZrQixDQUFuQixDQVhGLENBNEJFO0FBQ0E7O0FBQ0FXLFdBQUssQ0FBQ3RCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCc0IsTUFBTSxDQUFDRSxPQUFQLENBQWUsQ0FBZixDQUE1QixFQUNJRixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBREosa0dBR0tGLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FITCxFQUd5QjtBQUNqQm5CLGlCQUFTLEVBQUVpQixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBRE07QUFFakJsQixhQUFLLEVBQUUrQjtBQUZVLE9BSHpCLEVBOUJGLENBdUNFOztBQUNBWixhQUFPLENBQUNDLEdBQVIsQ0FDSUwsS0FBSyxDQUFDdEIsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJzQixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBQTVCLEVBQ0lGLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FESixFQUVFRixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBRkYsQ0FESjtBQUtIO0FBdkZLO0FBSGtCLENBQUQsQ0FBL0I7MkJBb0dJUixXQUFXLENBQUN3QixPO0lBTFpwQixJLHdCQUFBQSxJO0lBQ0FPLFEsd0JBQUFBLFE7SUFDQUMsUyx3QkFBQUEsUztJQUNBQyxpQix3QkFBQUEsaUI7SUFDQUcsc0Isd0JBQUFBLHNCOztBQUdXaEIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kYzdlZDJlOWY0YTc5ZjEzMTNiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgY2FsZW5kYXIsXHJcbiAgICBwYXR0ZXJuLFxyXG4gICAgdGFza3MsXHJcbiAgICB1c2VyVGFzayxcclxuICAgIHVzZXJUYXNrSW5mbyxcclxufSBmcm9tIFwiLi91c2VyVGFza3NUeXBlXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiB1c2VyVGFzayA9IHtcclxuICAgIHVzZXJUYXNrSW5mbzoge1xyXG4gICAgICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKV06IHtcclxuICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDFdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMiAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMyBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMiAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgW2RhdGU6IG51bWJlcl06IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgUGF0dGVybklkOiBudW1iZXI7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRhc2tzOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiBzdHJpbmc7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBzdHJpbmc7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmbHVnOiBib29sZWFuO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9W107XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVtdO1xyXG4gICAgICAgIC8vICAgICAgICAgfVtdO1xyXG4gICAgICAgIC8vICAgICB9W107XHJcblxyXG4gICAgICAgIC8vIF1cclxuICAgICAgICAvLyB5ZWFyOiBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKSxbe1xyXG4gICAgICAgIC8vICAgICBtb250aDogbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldE1vbnRoKCkgKyAxLFt7XHJcbiAgICAgICAgLy8gICAgICAgICBkYXRlOiBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpLFt7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMiAyMiAxXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIyIDJcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgfV1cclxuXHJcbiAgICAgICAgLy8gICAgIH1dXHJcblxyXG4gICAgICAgIC8vIH1dXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICB5ZWFyOiBuZXcgRGF0ZShcIlRodSwgMjMgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAvLyAgICAgbW9udGg6IG5ldyBEYXRlKFwiVGh1LCAyMyBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXRNb250aCgpICsgMSxcclxuICAgICAgICAvLyAgICAgZGF0ZTogbmV3IERhdGUoXCJUaHUsIDIzIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKSxcclxuICAgICAgICAvLyAgICAgUGF0dGVybklkOiAyLFxyXG4gICAgICAgIC8vICAgICB0YXNrczogW1xyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDIgMjMgMVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIzIDJcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgcGF0dGVybjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogXCJ0ZXN0UGF0dGVybjFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiAyLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4yXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxQVwiLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMkFcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxQlwiLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMkJcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxQ1wiLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMkNcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxRFwiLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMkRcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgdGFza3NNb2R1bGUgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInRhc2tzXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGluaXQoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dXNlclRhc2tJbmZvPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBkYXRhXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgLy8gc3RhdGUgPSB7Li4uZGF0YX07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIg5YmNXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbMF0uUGF0dGVybklkKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvID0gZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbml0IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhciDlvoxcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyWzBdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJUYXNrPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIC4uLmRhdGEgfTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXRlJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFsbERlbGV0ZShzdGF0ZTogdXNlclRhc2spIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgYWxsRGVsZXRlXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gRGF5UGxhbuOBq+OBpuOCv+OCueOCr+OCkuOCr+ODquODg+OCr+OBl+OBn+mam+OBq+WujOS6huODleODqeOCsOOCknRydWXjgavlpInmm7TjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjgablubTjgIHmnIjjgIHml6XjgIHjgr/jgrnjgq/jga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLlj5fjgZHlj5bjgaPjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrQ2hlY2tDb21wbGV0ZShzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXJbXT4pIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3MuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgKHRhc2tzKSA9PiB0YXNrcy5vcmRlciA9PSBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bYWN0aW9uLnBheWxvYWRbMV1dW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMl1cclxuICAgICAgICAgICAgXS50YXNrc1tpbmRleF0uZmx1ZyA9ICFzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgICAgICBdW2FjdGlvbi5wYXlsb2FkWzFdXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3NbaW5kZXhdLmZsdWc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlvJXmlbDjga9zdGF0ZeOBqOW5tOOAgeaciOOAgeaXpeOAgemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44GuNOOBpOOBruaVsOWApOOBjOagvOe0jeOBleOCjOOBn+mFjeWIl1xyXG4gICAgICAgIGNhbGVuZGFyUGF0dGVyblJlZ3N0ZXIoXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VyVGFzayxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcltdPlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBzdGF0ZeOBi+OCiemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44GM6Kit5a6a44GV44KM44Gm44GE44KL44K/44K544Kv44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7NJROOBq+e0kOS7mOOBj+OCv+OCueOCr+S4gOimp+OBi+OCieOCq+ODrOODs+ODgOODvOOBuOOBrueZu+mMsuaDheWgseOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCBUb2RheVRhc2tzID0gY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g44OR44K/44O844Oz44GM6KSH5pWw55m76Yyy44GV44KM44Gm44GE44KL44K/44K544Kv44G444Gu5a++5b+c44Go44GX44Gm44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgavoqbLlvZPjgZnjgovopoHntKDjgaDjgZHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQYXR0ZXJuID0gdGFzay5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybkluZm8ucGF0dGVybklEID09IGFjdGlvbi5wYXlsb2FkWzNdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6YWN5YiX44Gu44K/44K544Kv44Go5oq95Ye644GX44Gf44OR44K/44O844Oz5oOF5aCx44KS5pW05b2i44GX44Gm6L+U44GZ44CCXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiB0YXNrUGF0dGVyblswXS5vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiB0YXNrLmRldGFpbDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogdGFzay5kZXRhaWwyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZeOBrk1vbnRo44Gu6YCj5oOz6YWN5YiX44Gr5paw44GX44GE5pel5LuY44Gu6YCj5oOz6YWN5YiX44KS6L+95Yqg44GZ44KL44CCXHJcbiAgICAgICAgICAgIC8vIOi/veWKoOaDheWgseOBr+W8leaVsOOBruaXpeOBqOOBk+OCjOOBvuOBp+OBruWHpueQhuOBp+S9nOaIkOOBl+OBn+OCq+ODrOODs+ODgOODvOeZu+mMsueUqOaDheWgsVxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgXSA9IHtcclxuICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZFsyXV06IHtcclxuICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IGFjdGlvbi5wYXlsb2FkWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tzOiBUb2RheVRhc2tzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFjdGlvbi5wYXlsb2FkWzNdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgICAgIF1bYWN0aW9uLnBheWxvYWRbMl1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIGluaXQsXHJcbiAgICBSZWdpc3RlcixcclxuICAgIGFsbERlbGV0ZSxcclxuICAgIHRhc2tDaGVja0NvbXBsZXRlLFxyXG4gICAgY2FsZW5kYXJQYXR0ZXJuUmVnc3RlcixcclxufSA9IHRhc2tzTW9kdWxlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrc01vZHVsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==