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


var _Date$getFullYear;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  userTaskInfo: {
    calendar: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, new Date("Thu, 22 May 2020 02:00:00").getFullYear(), (_Date$getFullYear = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Date$getFullYear, new Date("Thu, 22 May 2020 02:00:00").getMonth() + 1, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, new Date("Thu, 22 May 2020 02:00:00").getDate(), {
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
    })), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Date$getFullYear, new Date("Thu, 23 May 2020 02:00:00").getMonth() + 1, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, new Date("Thu, 23 May 2020 02:00:00").getDate(), {
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
    })), _Date$getFullYear)),
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
      action.payload;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwidGFza3MiLCJkZXRhaWwxIiwiZGV0YWlsMiIsImZsdWciLCJwYXR0ZXJuIiwicGF0dGVybklkIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuSW5mbyIsInBhdHRlcm5JRCIsIm9yZGVyIiwidGFza3NNb2R1bGUiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluaXQiLCJzdGF0ZSIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsIlJlZ2lzdGVyIiwiYWxsRGVsZXRlIiwidGFza0NoZWNrQ29tcGxldGUiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQSxJQUFNQSxZQUFzQixHQUFHO0FBQzNCQyxjQUFZLEVBQUU7QUFDVkMsWUFBUSxFQUFFLDhGQUVELElBQUlDLElBQUosQ0FBUywyQkFBVCxFQUFzQ0MsV0FBdEMsRUFGRCx3SUFHSyxJQUFJRCxJQUFKLENBQVMsMkJBQVQsRUFBc0NFLFFBQXRDLEtBQW1ELENBSHhELGdHQUlTLElBQUlGLElBQUosQ0FBUywyQkFBVCxFQUFzQ0csT0FBdEMsRUFKVCxFQUkyRDtBQUMvQ0MsZUFBUyxFQUFFLENBRG9DO0FBRS9DQyxXQUFLLEVBQUUsQ0FDSDtBQUNJQyxlQUFPLEVBQUUsa0JBRGI7QUFFSUMsZUFBTyxFQUFFLGtCQUZiO0FBR0lDLFlBQUksRUFBRTtBQUhWLE9BREcsRUFNSDtBQUNJRixlQUFPLEVBQUUsa0JBRGI7QUFFSUMsZUFBTyxFQUFFLGtCQUZiO0FBR0lDLFlBQUksRUFBRTtBQUhWLE9BTkc7QUFGd0MsS0FKM0QsaUhBb0JLLElBQUlS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V0FBSyxtQ0FBUUEsS0FBUixHQUFrQkUsSUFBbEIsQ0FBTCxDQUh1RCxDQUl2RDtBQUNBO0FBQ0gsS0FuQks7QUFvQk5LLGFBcEJNLHFCQW9CSVAsS0FwQkosRUFvQnFCO0FBQ3ZCQSxXQUFLLEdBQUd2QixZQUFSO0FBQ0EyQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNILEtBdkJLO0FBd0JORyxxQkF4Qk0sNkJBd0JZUixLQXhCWixFQXdCNkJDLE1BeEI3QixFQXdCOEQ7QUFDaEVBLFlBQU0sQ0FBQ0UsT0FBUDtBQUNIO0FBMUJLO0FBSGtCLENBQUQsQ0FBL0I7MkJBc0NJUixXQUFXLENBQUNjLE87SUFKWlYsSSx3QkFBQUEsSTtJQUNBTyxRLHdCQUFBQSxRO0lBQ0FDLFMsd0JBQUFBLFM7SUFDQUMsaUIsd0JBQUFBLGlCOztBQUdXYiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjYxMjdiODNmNjg5MjY4MjJjM2FmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBjYWxlbmRhcixcclxuICAgIHBhdHRlcm4sXHJcbiAgICB0YXNrcyxcclxuICAgIHVzZXJUYXNrLFxyXG4gICAgdXNlclRhc2tJbmZvLFxyXG59IGZyb20gXCIuL3VzZXJUYXNrc1R5cGVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IHVzZXJUYXNrID0ge1xyXG4gICAgdXNlclRhc2tJbmZvOiB7XHJcbiAgICAgICAgY2FsZW5kYXI6IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXRNb250aCgpICsgMV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDIgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDIgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjMgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDFdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjMgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBbZGF0ZTogbnVtYmVyXToge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgUGF0dGVybklkOiBudW1iZXI7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0YXNrczoge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRldGFpbDE6IHN0cmluZztcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZmx1ZzogYm9vbGVhbjtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVtdO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgLy8gICAgIH1bXTtcclxuXHJcbiAgICAgICAgICAgIC8vIF1cclxuICAgICAgICAgICAgLy8geWVhcjogbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCksW3tcclxuICAgICAgICAgICAgLy8gICAgIG1vbnRoOiBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDEsW3tcclxuICAgICAgICAgICAgLy8gICAgICAgICBkYXRlOiBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpLFt7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIyIDFcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMiAyMiAyXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICB9XVxyXG5cclxuICAgICAgICAgICAgLy8gICAgIH1dXHJcblxyXG4gICAgICAgICAgICAvLyB9XVxyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgICB5ZWFyOiBuZXcgRGF0ZShcIlRodSwgMjMgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgLy8gICAgIG1vbnRoOiBuZXcgRGF0ZShcIlRodSwgMjMgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDEsXHJcbiAgICAgICAgICAgIC8vICAgICBkYXRlOiBuZXcgRGF0ZShcIlRodSwgMjMgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgICAvLyAgICAgUGF0dGVybklkOiAyLFxyXG4gICAgICAgICAgICAvLyAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIzIDFcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyIDIzIDJcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGF0dGVybjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogXCJ0ZXN0UGF0dGVybjFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiAyLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4yXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxQVwiLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMkFcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxQVwiLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMkFcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxQ1wiLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMkNcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxRFwiLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMkRcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgdGFza3NNb2R1bGUgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInRhc2tzXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGluaXQoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dXNlclRhc2tJbmZvPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBkYXRhXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgLy8gc3RhdGUgPSB7Li4uZGF0YX07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIg5YmNXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbMF0uUGF0dGVybklkKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvID0gZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbml0IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhciDlvoxcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyWzBdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJUYXNrPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIC4uLmRhdGEgfTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXRlJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFsbERlbGV0ZShzdGF0ZTogdXNlclRhc2spIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgYWxsRGVsZXRlXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFza0NoZWNrQ29tcGxldGUoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Y2FsZW5kYXI+KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgICBpbml0LFxyXG4gICAgUmVnaXN0ZXIsXHJcbiAgICBhbGxEZWxldGUsXHJcbiAgICB0YXNrQ2hlY2tDb21wbGV0ZSxcclxufSA9IHRhc2tzTW9kdWxlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrc01vZHVsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==