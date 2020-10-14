webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/modules/tasksModule.tsx":
/*!*************************************!*\
  !*** ./src/modules/tasksModule.tsx ***!
  \*************************************/
/*! exports provided: Register, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  calendar: [{
    date: new Date('Thu, 01 May 2008 02:00:00'),
    PatternId: 1,
    tasks: [{
      detail1: 'detail1',
      detail2: 'detail2',
      flug: false
    }]
  }],
  pattern: [{
    patternId: 1,
    patternName: 'pattern1'
  }],
  tasks: [{
    detail1: 'detail1',
    detail2: 'detail2',
    patternInfo: [{
      patternID: 1,
      order: 1
    }]
  }]
};
var tasksModule = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSlice"])({
  name: "tasks",
  initialState: initialState,
  reducers: {
    Register: function Register(state, action) {
      var data = action.payload;
      state = _objectSpread(_objectSpread({}, state), data); // console.log('state');
      // console.log(state);
    }
  }
});
var Register = tasksModule.actions.Register;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImNhbGVuZGFyIiwiZGF0ZSIsIkRhdGUiLCJQYXR0ZXJuSWQiLCJ0YXNrcyIsImRldGFpbDEiLCJkZXRhaWwyIiwiZmx1ZyIsInBhdHRlcm4iLCJwYXR0ZXJuSWQiLCJwYXR0ZXJuTmFtZSIsInBhdHRlcm5JbmZvIiwicGF0dGVybklEIiwib3JkZXIiLCJ0YXNrc01vZHVsZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiUmVnaXN0ZXIiLCJzdGF0ZSIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BLElBQU1BLFlBQXNCLEdBQUc7QUFDM0JDLFVBQVEsRUFBQyxDQUFDO0FBQ05DLFFBQUksRUFBRSxJQUFJQyxJQUFKLENBQVUsMkJBQVYsQ0FEQTtBQUVOQyxhQUFTLEVBQUUsQ0FGTDtBQUdOQyxTQUFLLEVBQUUsQ0FDSDtBQUNJQyxhQUFPLEVBQUUsU0FEYjtBQUVJQyxhQUFPLEVBQUUsU0FGYjtBQUdJQyxVQUFJLEVBQUU7QUFIVixLQURHO0FBSEQsR0FBRCxDQURrQjtBQVkzQkMsU0FBTyxFQUFDLENBQUM7QUFDTEMsYUFBUyxFQUFFLENBRE47QUFFTEMsZUFBVyxFQUFFO0FBRlIsR0FBRCxDQVptQjtBQWdCM0JOLE9BQUssRUFBQyxDQUFDO0FBQ0NDLFdBQU8sRUFBRSxTQURWO0FBRUNDLFdBQU8sRUFBRSxTQUZWO0FBR0hLLGVBQVcsRUFBRSxDQUNUO0FBQ0lDLGVBQVMsRUFBRSxDQURmO0FBRUlDLFdBQUssRUFBRTtBQUZYLEtBRFM7QUFIVixHQUFEO0FBaEJxQixDQUEvQjtBQTRCQSxJQUFNQyxXQUFXLEdBQUdDLG9FQUFXLENBQUM7QUFDNUJDLE1BQUksRUFBRSxPQURzQjtBQUU1QmpCLGNBQVksRUFBWkEsWUFGNEI7QUFHNUJrQixVQUFRLEVBQUU7QUFDTkMsWUFETSxvQkFDR0MsS0FESCxFQUNvQkMsTUFEcEIsRUFDa0Q7QUFDcEQsVUFBTUMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLE9BQXBCO0FBRUFILFdBQUssbUNBQVFBLEtBQVIsR0FBa0JFLElBQWxCLENBQUwsQ0FIb0QsQ0FJcEQ7QUFDQTtBQUNIO0FBUEs7QUFIa0IsQ0FBRCxDQUEvQjtJQWNlSCxRLEdBQWFKLFdBQVcsQ0FBQ1MsTyxDQUF6QkwsUTs7QUFFQUosMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MuNTQ2YWIyYzA5YjkxYTNhYmI3ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgY2FsZW5kYXIsIHBhdHRlcm4sIHRhc2tzLCB1c2VyVGFzayB9IGZyb20gXCIuL3VzZXJUYXNrc1R5cGVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IHVzZXJUYXNrID0ge1xyXG4gICAgY2FsZW5kYXI6W3tcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSggJ1RodSwgMDEgTWF5IDIwMDggMDI6MDA6MDAnICksXHJcbiAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDE6ICdkZXRhaWwxJyxcclxuICAgICAgICAgICAgICAgIGRldGFpbDI6ICdkZXRhaWwyJyxcclxuICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfV0sXHJcbiAgICBwYXR0ZXJuOlt7XHJcbiAgICAgICAgcGF0dGVybklkOiAxLFxyXG4gICAgICAgIHBhdHRlcm5OYW1lOiAncGF0dGVybjEnLFxyXG4gICAgfV0sXHJcbiAgICB0YXNrczpbe1xyXG4gICAgICAgICAgICBkZXRhaWwxOiAnZGV0YWlsMScsXHJcbiAgICAgICAgICAgIGRldGFpbDI6ICdkZXRhaWwyJyxcclxuICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfV1cclxufTtcclxuXHJcbmNvbnN0IHRhc2tzTW9kdWxlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ0YXNrc1wiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBSZWdpc3RlcihzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxTdGF0ZT4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCAuLi5kYXRhIH07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGF0ZScpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgUmVnaXN0ZXIgfSA9IHRhc2tzTW9kdWxlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrc01vZHVsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==