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
      console.log(state.userTaskInfo.calendar[0].PatternId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsIlBhdHRlcm5JZCIsInRhc2tzIiwiZGV0YWlsMSIsImRldGFpbDIiLCJmbHVnIiwicGF0dGVybiIsInBhdHRlcm5JZCIsInBhdHRlcm5OYW1lIiwicGF0dGVybkluZm8iLCJwYXR0ZXJuSUQiLCJvcmRlciIsInRhc2tzTW9kdWxlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJpbml0Iiwic3RhdGUiLCJhY3Rpb24iLCJkYXRhIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJSZWdpc3RlciIsImFsbERlbGV0ZSIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BLElBQU1BLFlBQXNCLEdBQUc7QUFDM0JDLGNBQVksRUFBRTtBQUNWQyxZQUFRLEVBQUUsQ0FDTjtBQUNJQyxVQUFJLEVBQUUsSUFBSUMsSUFBSixDQUFTLDJCQUFULEVBQXNDQyxXQUF0QyxFQURWO0FBRUlDLFdBQUssRUFBRSxJQUFJRixJQUFKLENBQVMsMkJBQVQsRUFBc0NHLFFBQXRDLEtBQW1ELENBRjlEO0FBR0lDLFVBQUksRUFBRSxJQUFJSixJQUFKLENBQVMsMkJBQVQsRUFBc0NLLE9BQXRDLEVBSFY7QUFJSUMsZUFBUyxFQUFFLEdBSmY7QUFLSUMsV0FBSyxFQUFFLENBQ0g7QUFDSUMsZUFBTyxFQUFFLGFBRGI7QUFFSUMsZUFBTyxFQUFFLGFBRmI7QUFHSUMsWUFBSSxFQUFFO0FBSFYsT0FERztBQUxYLEtBRE0sQ0FEQTtBQWdCVkMsV0FBTyxFQUFFLENBQ0w7QUFDSUMsZUFBUyxFQUFFLEdBRGY7QUFFSUMsaUJBQVcsRUFBRTtBQUZqQixLQURLLENBaEJDO0FBc0JWTixTQUFLLEVBQUUsQ0FDSDtBQUNJQyxhQUFPLEVBQUUsYUFEYjtBQUVJQyxhQUFPLEVBQUUsYUFGYjtBQUdJSyxpQkFBVyxFQUFFLENBQ1Q7QUFDSUMsaUJBQVMsRUFBRSxHQURmO0FBRUlDLGFBQUssRUFBRTtBQUZYLE9BRFM7QUFIakIsS0FERztBQXRCRztBQURhLENBQS9CO0FBc0NBLElBQU1DLFdBQVcsR0FBR0Msb0VBQVcsQ0FBQztBQUM1QkMsTUFBSSxFQUFFLE9BRHNCO0FBRTVCdkIsY0FBWSxFQUFaQSxZQUY0QjtBQUc1QndCLFVBQVEsRUFBRTtBQUNOQyxRQURNLGdCQUNEQyxLQURDLEVBQ2dCQyxNQURoQixFQUNxRDtBQUN2RCxVQUFNQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsT0FBcEI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWixFQUh1RCxDQUl2RDs7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVksb0NBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlMLEtBQUssQ0FBQ3pCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCLENBQTVCLEVBQStCUSxTQUEzQztBQUNBZ0IsV0FBSyxDQUFDekIsWUFBTixHQUFxQjJCLElBQXJCO0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG9DQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaLEVBVHVELENBVXZEO0FBQ0gsS0FaSztBQWFOTSxZQWJNLG9CQWFHTixLQWJILEVBYW9CQyxNQWJwQixFQWFxRDtBQUN2RCxVQUFNQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsT0FBcEI7QUFFQUgsV0FBSyxtQ0FBUUEsS0FBUixHQUFrQkUsSUFBbEIsQ0FBTCxDQUh1RCxDQUl2RDtBQUNBO0FBQ0gsS0FuQks7QUFvQk5LLGFBcEJNLHFCQW9CSVAsS0FwQkosRUFvQnNCO0FBQ3hCQSxXQUFLLEdBQUcxQixZQUFSO0FBQ0E4QixhQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNIO0FBdkJLO0FBSGtCLENBQUQsQ0FBL0I7MkJBOEI2Q1YsV0FBVyxDQUFDYSxPO0lBQTFDVCxJLHdCQUFBQSxJO0lBQU1PLFEsd0JBQUFBLFE7SUFBVUMsUyx3QkFBQUEsUzs7QUFFaEJaLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzY5YmRlZjM1NWM0NGI2OWE0OGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgY2FsZW5kYXIsIHBhdHRlcm4sIHRhc2tzLCB1c2VyVGFzayx1c2VyVGFza0luZm8gfSBmcm9tIFwiLi91c2VyVGFza3NUeXBlXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiB1c2VyVGFzayA9IHtcclxuICAgIHVzZXJUYXNrSW5mbzoge1xyXG4gICAgICAgIGNhbGVuZGFyOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXI6IG5ldyBEYXRlKFwiVGh1LCAwMSBNYXkgMTk1MCAwMjowMDowMFwiKS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6IG5ldyBEYXRlKFwiVGh1LCAwMSBNYXkgMTk1MCAwMjowMDowMFwiKS5nZXRNb250aCgpICsgMSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKFwiVGh1LCAwMSBNYXkgMTk1MCAwMjowMDowMFwiKS5nZXREYXRlKCksXHJcbiAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDk5OSxcclxuICAgICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDI6IFwidGVzdERldGFpbDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwYXR0ZXJuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogOTk5LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4xXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWwxOiBcInRlc3REZXRhaWwxXCIsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWwyOiBcInRlc3REZXRhaWwyXCIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiA5OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiA5OTksXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCB0YXNrc01vZHVsZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidGFza3NcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgaW5pdChzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx1c2VyVGFza0luZm8+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luaXQgZGF0YScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgLy8gc3RhdGUgPSB7Li4uZGF0YX07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbml0IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhciDliY0nKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyWzBdLlBhdHRlcm5JZCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mbyA9IGRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbml0IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhciDlvownKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbMF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dXNlclRhc2s+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgLi4uZGF0YSB9O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RhdGUnKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWxsRGVsZXRlKHN0YXRlOiB1c2VyVGFzaywpIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVjayBhbGxEZWxldGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGluaXQsIFJlZ2lzdGVyLCBhbGxEZWxldGUgfSA9IHRhc2tzTW9kdWxlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrc01vZHVsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==