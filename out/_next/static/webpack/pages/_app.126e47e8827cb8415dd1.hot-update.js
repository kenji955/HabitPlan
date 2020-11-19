webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/store */ "./src/modules/store.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var fbConfig = {}; // react-redux-firebase config

var rrfConfig = {
  userProfile: "users" // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB

}; // Initialize firebase instance
// firebase.initializeApp(fbConfig);
// Initialize other services on firebase instance
// firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
// Add firebase to reducers

var rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__["combineReducers"])({
  firebase: react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__["firebaseReducer"] // firestore: firestoreReducer // <- needed if using firestore

}); // Create store with reducers and initial state

var initialState = {}; // const store = createStore(rootReducer, initialState)

var rrfProps = {
  firebase: firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a,
  config: rrfConfig,
  dispatch: _modules_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch // createFirestoreInstance // <- needed if using firestore

};

var HabitPlanApp = function HabitPlanApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _modules_store__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__["ReactReduxFirebaseProvider"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rrfProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }))));
};

_c = HabitPlanApp;
/* harmony default export */ __webpack_exports__["default"] = (HabitPlanApp);

var _c;

$RefreshReg$(_c, "HabitPlanApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbImZiQ29uZmlnIiwicnJmQ29uZmlnIiwidXNlclByb2ZpbGUiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImZpcmViYXNlIiwiZmlyZWJhc2VSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwicnJmUHJvcHMiLCJjb25maWciLCJkaXNwYXRjaCIsInN0b3JlIiwiSGFiaXRQbGFuQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQSxJQUFNQSxRQUFRLEdBQUcsRUFBakIsQyxDQUVBOztBQUNBLElBQU1DLFNBQVMsR0FBRztBQUNkQyxhQUFXLEVBQUUsT0FEQyxDQUVkOztBQUZjLENBQWxCLEMsQ0FLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHQyx3RUFBZSxDQUFDO0FBQ2hDQyxVQUFRLEVBQUVDLG9FQURzQixDQUVoQzs7QUFGZ0MsQ0FBRCxDQUFuQyxDLENBS0E7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHLEVBQXJCLEMsQ0FDQTs7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDYkgsVUFBUSxFQUFSQSxtREFEYTtBQUViSSxRQUFNLEVBQUVSLFNBRks7QUFHYlMsVUFBUSxFQUFFQyxzREFBSyxDQUFDRCxRQUhILENBSWI7O0FBSmEsQ0FBakI7O0FBT0EsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBd0M7QUFBQSxNQUFyQ0MsU0FBcUMsUUFBckNBLFNBQXFDO0FBQUEsTUFBMUJDLFNBQTBCLFFBQTFCQSxTQUEwQjtBQUN6RCxTQUNJLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVILHNEQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrRUFBRCx5RkFBZ0NILFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDSSxNQUFDLFNBQUQseUZBQWVNLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLENBREosQ0FESjtBQU9ILENBUkQ7O0tBQU1GLFk7QUFVU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMjZlNDdlODgyN2NiODQxNWRkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9tb2R1bGVzL3N0b3JlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IHVzZXJUYXNrIH0gZnJvbSBcIi4uL21vZHVsZXMvdXNlclRhc2tzVHlwZVwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgUmVhY3RSZWR1eEZpcmViYXNlUHJvdmlkZXIsXHJcbiAgICBmaXJlYmFzZVJlZHVjZXIsXHJcbn0gZnJvbSBcInJlYWN0LXJlZHV4LWZpcmViYXNlXCI7XHJcblxyXG5jb25zdCBmYkNvbmZpZyA9IHt9O1xyXG5cclxuLy8gcmVhY3QtcmVkdXgtZmlyZWJhc2UgY29uZmlnXHJcbmNvbnN0IHJyZkNvbmZpZyA9IHtcclxuICAgIHVzZXJQcm9maWxlOiBcInVzZXJzXCIsXHJcbiAgICAvLyB1c2VGaXJlc3RvcmVGb3JQcm9maWxlOiB0cnVlIC8vIEZpcmVzdG9yZSBmb3IgUHJvZmlsZSBpbnN0ZWFkIG9mIFJlYWx0aW1lIERCXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIGZpcmViYXNlIGluc3RhbmNlXHJcbi8vIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmJDb25maWcpO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBvdGhlciBzZXJ2aWNlcyBvbiBmaXJlYmFzZSBpbnN0YW5jZVxyXG4vLyBmaXJlYmFzZS5maXJlc3RvcmUoKSAvLyA8LSBuZWVkZWQgaWYgdXNpbmcgZmlyZXN0b3JlXHJcbi8vIGZpcmViYXNlLmZ1bmN0aW9ucygpIC8vIDwtIG5lZWRlZCBpZiB1c2luZyBodHRwc0NhbGxhYmxlXHJcblxyXG4vLyBBZGQgZmlyZWJhc2UgdG8gcmVkdWNlcnNcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgZmlyZWJhc2U6IGZpcmViYXNlUmVkdWNlcixcclxuICAgIC8vIGZpcmVzdG9yZTogZmlyZXN0b3JlUmVkdWNlciAvLyA8LSBuZWVkZWQgaWYgdXNpbmcgZmlyZXN0b3JlXHJcbn0pO1xyXG5cclxuLy8gQ3JlYXRlIHN0b3JlIHdpdGggcmVkdWNlcnMgYW5kIGluaXRpYWwgc3RhdGVcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcbi8vIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuXHJcbmNvbnN0IHJyZlByb3BzID0ge1xyXG4gICAgZmlyZWJhc2UsXHJcbiAgICBjb25maWc6IHJyZkNvbmZpZyxcclxuICAgIGRpc3BhdGNoOiBzdG9yZS5kaXNwYXRjaCxcclxuICAgIC8vIGNyZWF0ZUZpcmVzdG9yZUluc3RhbmNlIC8vIDwtIG5lZWRlZCBpZiB1c2luZyBmaXJlc3RvcmVcclxufTtcclxuXHJcbmNvbnN0IEhhYml0UGxhbkFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8UmVhY3RSZWR1eEZpcmViYXNlUHJvdmlkZXIgey4uLnJyZlByb3BzfT5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9SZWFjdFJlZHV4RmlyZWJhc2VQcm92aWRlcj5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhYml0UGxhbkFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==