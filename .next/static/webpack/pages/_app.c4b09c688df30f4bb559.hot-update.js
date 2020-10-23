webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/modules/tasksModule.tsx":
/*!*************************************!*\
  !*** ./src/modules/tasksModule.tsx ***!
  \*************************************/
/*! exports provided: init, Register, allDelete, taskCheckComplete, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDelete", function() { return allDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskCheckComplete", function() { return taskCheckComplete; });
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
        detail1: "testDetail1 22 1",
        detail2: "testDetail2 22 1",
        flug: false
      }, {
        detail1: "testDetail1 22 2",
        detail2: "testDetail2 22 2",
        flug: false
      }]
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, new Date("Thu, 23 May 2020 02:00:00").getDate(), {
      PatternId: 1,
      tasks: [{
        detail1: "testDetail1 23 1",
        detail2: "testDetail2 23 1",
        flug: false
      }, {
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
      detail1: "testDetail1A",
      detail2: "testDetail2A",
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
    taskCheckComplete: function taskCheckComplete(state, action) {
      console.log('state.userTaskInfo.calendar ' + state.userTaskInfo.calendar[action.payload[0]]);
      console.log('action.payload[0] ' + action.payload[0]);
      console.log(state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[action.payload[4]]);
      state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[action.payload[4]].flug != state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[action.payload[4]].flug;
    }
  }
});
var _tasksModule$actions = tasksModule.actions,
    init = _tasksModule$actions.init,
    Register = _tasksModule$actions.Register,
    allDelete = _tasksModule$actions.allDelete,
    taskCheckComplete = _tasksModule$actions.taskCheckComplete;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwidGFza3MiLCJkZXRhaWwxIiwiZGV0YWlsMiIsImZsdWciLCJwYXR0ZXJuIiwicGF0dGVybklkIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuSW5mbyIsInBhdHRlcm5JRCIsIm9yZGVyIiwidGFza3NNb2R1bGUiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluaXQiLCJzdGF0ZSIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsIlJlZ2lzdGVyIiwiYWxsRGVsZXRlIiwidGFza0NoZWNrQ29tcGxldGUiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQSxJQUFNQSxZQUFzQixHQUFHO0FBQzNCQyxjQUFZLEVBQUU7QUFDVkMsWUFBUSxFQUFFLDhGQUVELElBQUlDLElBQUosQ0FBUywyQkFBVCxFQUFzQ0MsV0FBdEMsRUFGRCxnR0FHSyxJQUFJRCxJQUFKLENBQVMsMkJBQVQsRUFBc0NFLFFBQXRDLEtBQW1ELENBSHhELDhHQUlTLElBQUlGLElBQUosQ0FBUywyQkFBVCxFQUFzQ0csT0FBdEMsRUFKVCxFQUkyRDtBQUMvQ0MsZUFBUyxFQUFFLENBRG9DO0FBRS9DQyxXQUFLLEVBQUUsQ0FDSDtBQUNJQyxlQUFPLEVBQUUsa0JBRGI7QUFFSUMsZUFBTyxFQUFFLGtCQUZiO0FBR0lDLFlBQUksRUFBRTtBQUhWLE9BREcsRUFNSDtBQUNJRixlQUFPLEVBQUUsa0JBRGI7QUFFSUMsZUFBTyxFQUFFLGtCQUZiO0FBR0lDLFlBQUksRUFBRTtBQUhWLE9BTkc7QUFGd0MsS0FKM0QsbUdBbUJTLElBQUlS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Q0FBZixDQUEvQyxFQUFrRUYsTUFBTSxDQUFDRSxPQUFQLENBQWUsQ0FBZixDQUFsRSxFQUFxRmxCLEtBQXJGLENBQTJGZ0IsTUFBTSxDQUFDRSxPQUFQLENBQWUsQ0FBZixDQUEzRixFQUE4R2YsSUFBcE87QUFDSDtBQTdCSztBQUhrQixDQUFELENBQS9COzJCQXlDSU8sV0FBVyxDQUFDYyxPO0lBSlpWLEksd0JBQUFBLEk7SUFDQU8sUSx3QkFBQUEsUTtJQUNBQyxTLHdCQUFBQSxTO0lBQ0FDLGlCLHdCQUFBQSxpQjs7QUFHV2IsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNGIwOWM2ODhkZjMwZjRiYjU1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgY2FsZW5kYXIsXHJcbiAgICBwYXR0ZXJuLFxyXG4gICAgdGFza3MsXHJcbiAgICB1c2VyVGFzayxcclxuICAgIHVzZXJUYXNrSW5mbyxcclxufSBmcm9tIFwiLi91c2VyVGFza3NUeXBlXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiB1c2VyVGFzayA9IHtcclxuICAgIHVzZXJUYXNrSW5mbzoge1xyXG4gICAgICAgIGNhbGVuZGFyOiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXRGdWxsWWVhcigpXToge1xyXG4gICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDFdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjMgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIFtkYXRlOiBudW1iZXJdOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IG51bWJlcjtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRhc2tzOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogc3RyaW5nO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRldGFpbDI6IHN0cmluZztcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmbHVnOiBib29sZWFuO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVtdO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9W107XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVtdO1xyXG4gICAgICAgICAgICAvLyAgICAgfVtdO1xyXG5cclxuICAgICAgICAgICAgLy8gXVxyXG4gICAgICAgICAgICAvLyB5ZWFyOiBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKSxbe1xyXG4gICAgICAgICAgICAvLyAgICAgbW9udGg6IG5ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXRNb250aCgpICsgMSxbe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGRhdGU6IG5ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCksW3tcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDIgMjIgMVwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIyIDJcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1dXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgfV1cclxuXHJcbiAgICAgICAgICAgIC8vIH1dXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIHllYXI6IG5ldyBEYXRlKFwiVGh1LCAyMyBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICAvLyAgICAgbW9udGg6IG5ldyBEYXRlKFwiVGh1LCAyMyBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXRNb250aCgpICsgMSxcclxuICAgICAgICAgICAgLy8gICAgIGRhdGU6IG5ldyBEYXRlKFwiVGh1LCAyMyBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCksXHJcbiAgICAgICAgICAgIC8vICAgICBQYXR0ZXJuSWQ6IDIsXHJcbiAgICAgICAgICAgIC8vICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDIgMjMgMVwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDIgMjMgMlwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgXSxcclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICBcclxuICAgICAgICBwYXR0ZXJuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBcInRlc3RQYXR0ZXJuMVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IDIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogXCJ0ZXN0UGF0dGVybjJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDFBXCIsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyQVwiLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDFBXCIsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyQVwiLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDFDXCIsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyQ1wiLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDFEXCIsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyRFwiLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCB0YXNrc01vZHVsZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidGFza3NcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgaW5pdChzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx1c2VyVGFza0luZm8+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbml0IGRhdGFcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyBzdGF0ZSA9IHsuLi5kYXRhfTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbml0IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhciDliY1cIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclswXS5QYXR0ZXJuSWQpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8gPSBkYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyIOW+jFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbMF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dXNlclRhc2s+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgLi4uZGF0YSB9O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RhdGUnKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWxsRGVsZXRlKHN0YXRlOiB1c2VyVGFzaykge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBhbGxEZWxldGVcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXNrQ2hlY2tDb21wbGV0ZShzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXJbXT4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhciAnICsgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3Rpb24ucGF5bG9hZFswXSAnICsgYWN0aW9uLnBheWxvYWRbMF0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW2FjdGlvbi5wYXlsb2FkWzFdXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3NbYWN0aW9uLnBheWxvYWRbNF1dKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVthY3Rpb24ucGF5bG9hZFsxXV1bYWN0aW9uLnBheWxvYWRbMl1dLnRhc2tzW2FjdGlvbi5wYXlsb2FkWzRdXS5mbHVnICE9IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bYWN0aW9uLnBheWxvYWRbMV1dW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrc1thY3Rpb24ucGF5bG9hZFs0XV0uZmx1ZztcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gICAgaW5pdCxcclxuICAgIFJlZ2lzdGVyLFxyXG4gICAgYWxsRGVsZXRlLFxyXG4gICAgdGFza0NoZWNrQ29tcGxldGUsXHJcbn0gPSB0YXNrc01vZHVsZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza3NNb2R1bGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=