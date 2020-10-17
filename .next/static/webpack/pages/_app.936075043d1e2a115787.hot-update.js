webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/modules/tasksModule.tsx":
/*!*************************************!*\
  !*** ./src/modules/tasksModule.tsx ***!
  \*************************************/
/*! exports provided: init, Register, allDelete, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDelete", function() { return allDelete; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  userTaskInfo: {
    calendar: [{
      year: new Date("Thu, 01 May 1950 02:00:00").getFullYear(),
      month: new Date("Thu, 01 May 1950 02:00:00").getMonth() + 1,
      date: new Date("Thu, 01 May 1950 02:00:00").getDate(),
      PatternId: 999,
      tasks: [{
        detail1: "testDetail1",
        detail2: "testDetail2",
        flug: false
      }]
    }],
    pattern: [{
      patternId: 999,
      patternName: "testPattern1"
    }],
    tasks: [{
      detail1: "testDetail1",
      detail2: "testDetail2",
      patternInfo: [{
        patternID: 999,
        order: 999
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
      console.log('init data');
      console.log(data); // state = {...data};

      console.log('init state.userTaskInfo.calendar 前');
      console.log(state.userTaskInfo);
      state.userTaskInfo = data;
      console.log('init state.userTaskInfo.calendar 後');
      console.log(state); // console.log(state.userTaskInfo.calendar[0]);
    },
    Register: function Register(state, action) {
      var data = action.payload;
      state = _objectSpread(_objectSpread({}, state), data); // console.log('state');
      // console.log(state);
    },
    allDelete: function allDelete(state) {
      state = initialState;
      console.log('check allDelete');
    }
  }
});
var _tasksModule$actions = tasksModule.actions,
    init = _tasksModule$actions.init,
    Register = _tasksModule$actions.Register,
    allDelete = _tasksModule$actions.allDelete;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsIlBhdHRlcm5JZCIsInRhc2tzIiwiZGV0YWlsMSIsImRldGFpbDIiLCJmbHVnIiwicGF0dGVybiIsInBhdHRlcm5JZCIsInBhdHRlcm5OYW1lIiwicGF0dGVybkluZm8iLCJwYXR0ZXJuSUQiLCJvcmRlciIsInRhc2tzTW9kdWxlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJpbml0Iiwic3RhdGUiLCJhY3Rpb24iLCJkYXRhIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJSZWdpc3RlciIsImFsbERlbGV0ZSIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BLElBQU1BLFlBQXNCLEdBQUc7QUFDM0JDLGNBQVksRUFBRTtBQUNWQyxZQUFRLEVBQUUsQ0FDTjtBQUNJQyxVQUFJLEVBQUUsSUFBSUMsSUFBSixDQUFTLDJCQUFULEVBQXNDQyxXQUF0QyxFQURWO0FBRUlDLFdBQUssRUFBRSxJQUFJRixJQUFKLENBQVMsMkJBQVQsRUFBc0NHLFFBQXRDLEtBQW1ELENBRjlEO0FBR0lDLFVBQUksRUFBRSxJQUFJSixJQUFKLENBQVMsMkJBQVQsRUFBc0NLLE9BQXRDLEVBSFY7QUFJSUMsZUFBUyxFQUFFLEdBSmY7QUFLSUMsV0FBSyxFQUFFLENBQ0g7QUFDSUMsZUFBTyxFQUFFLGFBRGI7QUFFSUMsZUFBTyxFQUFFLGFBRmI7QUFHSUMsWUFBSSxFQUFFO0FBSFYsT0FERztBQUxYLEtBRE0sQ0FEQTtBQWdCVkMsV0FBTyxFQUFFLENBQ0w7QUFDSUMsZUFBUyxFQUFFLEdBRGY7QUFFSUMsaUJBQVcsRUFBRTtBQUZqQixLQURLLENBaEJDO0FBc0JWTixTQUFLLEVBQUUsQ0FDSDtBQUNJQyxhQUFPLEVBQUUsYUFEYjtBQUVJQyxhQUFPLEVBQUUsYUFGYjtBQUdJSyxpQkFBVyxFQUFFLENBQ1Q7QUFDSUMsaUJBQVMsRUFBRSxHQURmO0FBRUlDLGFBQUssRUFBRTtBQUZYLE9BRFM7QUFIakIsS0FERztBQXRCRztBQURhLENBQS9CO0FBc0NBLElBQU1DLFdBQVcsR0FBR0Msb0VBQVcsQ0FBQztBQUM1QkMsTUFBSSxFQUFFLE9BRHNCO0FBRTVCdkIsY0FBWSxFQUFaQSxZQUY0QjtBQUc1QndCLFVBQVEsRUFBRTtBQUNOQyxRQURNLGdCQUNEQyxLQURDLEVBQ2dCQyxNQURoQixFQUNxRDtBQUN2RCxVQUFNQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsT0FBcEI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWixFQUh1RCxDQUl2RDs7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVksb0NBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlMLEtBQUssQ0FBQ3pCLFlBQWxCO0FBQ0F5QixXQUFLLENBQUN6QixZQUFOLEdBQXFCMkIsSUFBckI7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVksb0NBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVosRUFUdUQsQ0FVdkQ7QUFDSCxLQVpLO0FBYU5NLFlBYk0sb0JBYUdOLEtBYkgsRUFhb0JDLE1BYnBCLEVBYXFEO0FBQ3ZELFVBQU1DLElBQUksR0FBR0QsTUFBTSxDQUFDRSxPQUFwQjtBQUVBSCxXQUFLLG1DQUFRQSxLQUFSLEdBQWtCRSxJQUFsQixDQUFMLENBSHVELENBSXZEO0FBQ0E7QUFDSCxLQW5CSztBQW9CTkssYUFwQk0scUJBb0JJUCxLQXBCSixFQW9Cc0I7QUFDeEJBLFdBQUssR0FBRzFCLFlBQVI7QUFDQThCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0g7QUF2Qks7QUFIa0IsQ0FBRCxDQUEvQjsyQkE4QjZDVixXQUFXLENBQUNhLE87SUFBMUNULEksd0JBQUFBLEk7SUFBTU8sUSx3QkFBQUEsUTtJQUFVQyxTLHdCQUFBQSxTOztBQUVoQlosMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45MzYwNzUwNDNkMWUyYTExNTc4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBjYWxlbmRhciwgcGF0dGVybiwgdGFza3MsIHVzZXJUYXNrLHVzZXJUYXNrSW5mbyB9IGZyb20gXCIuL3VzZXJUYXNrc1R5cGVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IHVzZXJUYXNrID0ge1xyXG4gICAgdXNlclRhc2tJbmZvOiB7XHJcbiAgICAgICAgY2FsZW5kYXI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogbmV3IERhdGUoXCJUaHUsIDAxIE1heSAxOTUwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICAgICAgICBtb250aDogbmV3IERhdGUoXCJUaHUsIDAxIE1heSAxOTUwIDAyOjAwOjAwXCIpLmdldE1vbnRoKCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoXCJUaHUsIDAxIE1heSAxOTUwIDAyOjAwOjAwXCIpLmdldERhdGUoKSxcclxuICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogOTk5LFxyXG4gICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsMjogXCJ0ZXN0RGV0YWlsMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHBhdHRlcm46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiA5OTksXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogXCJ0ZXN0UGF0dGVybjFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDE6IFwidGVzdERldGFpbDFcIixcclxuICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDJcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDk5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDk5OSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IHRhc2tzTW9kdWxlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ0YXNrc1wiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBpbml0KHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJUYXNrSW5mbz4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBkYXRhJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyBzdGF0ZSA9IHsuLi5kYXRhfTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luaXQgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyIOWJjScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8pO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8gPSBkYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIg5b6MJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyWzBdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJUYXNrPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIC4uLmRhdGEgfTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXRlJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFsbERlbGV0ZShzdGF0ZTogdXNlclRhc2ssKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2sgYWxsRGVsZXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBpbml0LCBSZWdpc3RlciwgYWxsRGVsZXRlIH0gPSB0YXNrc01vZHVsZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza3NNb2R1bGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=