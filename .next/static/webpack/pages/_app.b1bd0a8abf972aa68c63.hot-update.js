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
      console.log(state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[action.payload[3]].flug);
      var booleanCheck = state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[action.payload[3]].flug; // state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[action.payload[3]].flug = true;

      state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[action.payload[3]].flug != booleanCheck;
      console.log(state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[action.payload[3]].flug);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwidGFza3MiLCJkZXRhaWwxIiwiZGV0YWlsMiIsImZsdWciLCJwYXR0ZXJuIiwicGF0dGVybklkIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuSW5mbyIsInBhdHRlcm5JRCIsIm9yZGVyIiwidGFza3NNb2R1bGUiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluaXQiLCJzdGF0ZSIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsIlJlZ2lzdGVyIiwiYWxsRGVsZXRlIiwidGFza0NoZWNrQ29tcGxldGUiLCJib29sZWFuQ2hlY2siLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQSxJQUFNQSxZQUFzQixHQUFHO0FBQzNCQyxjQUFZLEVBQUU7QUFDVkMsWUFBUSxFQUFFLDhGQUVELElBQUlDLElBQUosQ0FBUywyQkFBVCxFQUFzQ0MsV0FBdEMsRUFGRCxnR0FHSyxJQUFJRCxJQUFKLENBQVMsMkJBQVQsRUFBc0NFLFFBQXRDLEtBQW1ELENBSHhELDhHQUlTLElBQUlGLElBQUosQ0FBUywyQkFBVCxFQUFzQ0csT0FBdEMsRUFKVCxFQUkyRDtBQUMvQ0MsZUFBUyxFQUFFLENBRG9DO0FBRS9DQyxXQUFLLEVBQUUsQ0FDSDtBQUNJQyxlQUFPLEVBQUUsa0JBRGI7QUFFSUMsZUFBTyxFQUFFLGtCQUZiO0FBR0lDLFlBQUksRUFBRTtBQUhWLE9BREcsRUFNSDtBQUNJRixlQUFPLEVBQUUsa0JBRGI7QUFFSUMsZUFBTyxFQUFFLGtCQUZiO0FBR0lDLFlBQUksRUFBRTtBQUhWLE9BTkc7QUFGd0MsS0FK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QUF0SDtBQUNBTCxhQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBSyxDQUFDdEIsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJzQixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBQTVCLEVBQStDRixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBQS9DLEVBQWtFRixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBQWxFLEVBQXFGbEIsS0FBckYsQ0FBMkZnQixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBQTNGLEVBQThHZixJQUExSDtBQUNIO0FBOUJLO0FBSGtCLENBQUQsQ0FBL0I7MkJBMENJTyxXQUFXLENBQUNlLE87SUFKWlgsSSx3QkFBQUEsSTtJQUNBTyxRLHdCQUFBQSxRO0lBQ0FDLFMsd0JBQUFBLFM7SUFDQUMsaUIsd0JBQUFBLGlCOztBQUdXYiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmIxYmQwYThhYmY5NzJhYTY4YzYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBjYWxlbmRhcixcclxuICAgIHBhdHRlcm4sXHJcbiAgICB0YXNrcyxcclxuICAgIHVzZXJUYXNrLFxyXG4gICAgdXNlclRhc2tJbmZvLFxyXG59IGZyb20gXCIuL3VzZXJUYXNrc1R5cGVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IHVzZXJUYXNrID0ge1xyXG4gICAgdXNlclRhc2tJbmZvOiB7XHJcbiAgICAgICAgY2FsZW5kYXI6IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXRNb250aCgpICsgMV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDIgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDIgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMyBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDIgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDIgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgW2RhdGU6IG51bWJlcl06IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGFza3M6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogc3RyaW5nO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGJvb2xlYW47XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9W107XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9W107XHJcbiAgICAgICAgICAgIC8vICAgICB9W107XHJcblxyXG4gICAgICAgICAgICAvLyBdXHJcbiAgICAgICAgICAgIC8vIHllYXI6IG5ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXRGdWxsWWVhcigpLFt7XHJcbiAgICAgICAgICAgIC8vICAgICBtb250aDogbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldE1vbnRoKCkgKyAxLFt7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZGF0ZTogbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKSxbe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMiAyMiAxXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDIgMjIgMlwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfV1cclxuXHJcbiAgICAgICAgICAgIC8vICAgICB9XVxyXG5cclxuICAgICAgICAgICAgLy8gfV1cclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAvLyAgICAgeWVhcjogbmV3IERhdGUoXCJUaHUsIDIzIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICAgIC8vICAgICBtb250aDogbmV3IERhdGUoXCJUaHUsIDIzIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldE1vbnRoKCkgKyAxLFxyXG4gICAgICAgICAgICAvLyAgICAgZGF0ZTogbmV3IERhdGUoXCJUaHUsIDIzIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKSxcclxuICAgICAgICAgICAgLy8gICAgIFBhdHRlcm5JZDogMixcclxuICAgICAgICAgICAgLy8gICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMiAyMyAxXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMiAyMyAyXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICBdLFxyXG4gICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBhdHRlcm46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4xXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogMixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBcInRlc3RQYXR0ZXJuMlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMUFcIixcclxuICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDJBXCIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMUFcIixcclxuICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDJBXCIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMUNcIixcclxuICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDJDXCIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMURcIixcclxuICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDJEXCIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IHRhc2tzTW9kdWxlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ0YXNrc1wiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBpbml0KHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJUYXNrSW5mbz4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgZGF0YVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHN0YXRlID0gey4uLmRhdGF9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyIOWJjVwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyWzBdLlBhdHRlcm5JZCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mbyA9IGRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIg5b6MXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclswXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZWdpc3RlcihzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx1c2VyVGFzaz4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCAuLi5kYXRhIH07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGF0ZScpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbGxEZWxldGUoc3RhdGU6IHVzZXJUYXNrKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIGFsbERlbGV0ZVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhc2tDaGVja0NvbXBsZXRlKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcltdPikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW2FjdGlvbi5wYXlsb2FkWzFdXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3NbYWN0aW9uLnBheWxvYWRbM11dLmZsdWcpO1xyXG4gICAgICAgICAgICBjb25zdCBib29sZWFuQ2hlY2sgPSBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW2FjdGlvbi5wYXlsb2FkWzFdXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3NbYWN0aW9uLnBheWxvYWRbM11dLmZsdWc7XHJcbiAgICAgICAgICAgIC8vIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bYWN0aW9uLnBheWxvYWRbMV1dW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrc1thY3Rpb24ucGF5bG9hZFszXV0uZmx1ZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bYWN0aW9uLnBheWxvYWRbMV1dW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrc1thY3Rpb24ucGF5bG9hZFszXV0uZmx1ZyAhPSBib29sZWFuQ2hlY2s7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bYWN0aW9uLnBheWxvYWRbMV1dW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrc1thY3Rpb24ucGF5bG9hZFszXV0uZmx1Zyk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIGluaXQsXHJcbiAgICBSZWdpc3RlcixcclxuICAgIGFsbERlbGV0ZSxcclxuICAgIHRhc2tDaGVja0NvbXBsZXRlLFxyXG59ID0gdGFza3NNb2R1bGUuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tzTW9kdWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9