webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _DayPlan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DayPlan */ "./src/pages/DayPlan.tsx");
/* harmony import */ var _components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/test/firebaseTest/FirebaseAuthComponent */ "./src/components/test/firebaseTest/FirebaseAuthComponent.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/test/firebaseTest/firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import { Route, Switch, withRouter, Redirect,BrowserRouter } from "react-router-dom";





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  button: {
    backgroundColor: "green"
  }
});

var App = function App() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      userId = _useSelector.userId;

  var RenderComponent = __jsx(_components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 40
    }
  });

  _components_test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_5__["auth"].onAuthStateChanged(function (authUser) {
    if (authUser) {
      // this.setState({
      //   status: "SIGNED_IN"
      // });
      RenderComponent = __jsx(_DayPlan__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 31
        }
      });
      console.log('check 1');
      return RenderComponent;
    } else {
      RenderComponent = __jsx(_components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 31
        }
      });
      console.log('check 2');
      return RenderComponent; // router.push("/");
    }
  }); // useMemo(() => {
  //     if (userId == "") {
  //         RenderComponent = <FirebaseAuthComponent />;
  //     } else {
  //         RenderComponent = <DayPlanPC />;
  //     }
  // }, [userId]);

  return RenderComponent; // <DayPlanPC />
  // <Tasks />
  // <BrowserRouter>{routes}</BrowserRouter>
  // <Container fixed>
  //     <h1>Todo App</h1>
  //     <Box component="span" m={1} className={classes.button}>
  //         {/* <Button variant="contained" color="primary">
  //                 Test
  //             </Button> */}
  //         <FloatingActionButtonZoom />
  //         <BottomNavigation />
  //     </Box>
  //     {/* <Box>
  //     </Box> */}
  // </Container>
};

_s(App, "XIHPHvUohkVyU+MTU6yUG2CM+9Q=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App); // ReactDOM.render( App );

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiQXBwIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2VySWQiLCJSZW5kZXJDb21wb25lbnQiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aFVzZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxRQUFNLEVBQUU7QUFDSkMsbUJBQWUsRUFBRTtBQURiO0FBRGlCLENBQUQsQ0FBNUI7O0FBTUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLHFCQUNLQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFzQkEsS0FBSyxDQUFDQyxJQUE1QjtBQUFBLEdBQUQsQ0FEaEI7QUFBQSxNQUNOQyxNQURNLGdCQUNOQSxNQURNOztBQUdkLE1BQUlDLGVBQTRCLEdBQUcsTUFBQywyRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQW5DOztBQUVBQyxpRkFBSSxDQUFDQyxrQkFBTCxDQUF3QixVQUFDQyxRQUFELEVBQWM7QUFDbEMsUUFBSUEsUUFBSixFQUFjO0FBQ1Y7QUFDQTtBQUNBO0FBQ0FILHFCQUFlLEdBQUcsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQWxCO0FBQ0FJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQSxhQUFPTCxlQUFQO0FBQ0gsS0FQRCxNQU9PO0FBQ0hBLHFCQUFlLEdBQUcsTUFBQywyRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQWxCO0FBQ0FJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQSxhQUFPTCxlQUFQLENBSEcsQ0FJSDtBQUNIO0FBQ0osR0FkRCxFQUxjLENBcUJkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQU9BLGVBQVAsQ0E3QmMsQ0E4QmQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0E3Q0Q7O0dBQU1MLEc7VUFDaUJDLHVEOzs7S0FEakJELEc7QUErQ1NBLGtFQUFmLEUsQ0FDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZGFmYjhkNjAyOWUxNWU0MGJlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIHdpdGhSb3V0ZXIsIFJlZGlyZWN0LEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuXHJcbmltcG9ydCBGbG9hdGluZ0FjdGlvbkJ1dHRvblpvb20gZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlldy9GbG9hdGluZ0FjdGlvbkJ1dHRvblwiO1xyXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy92aWV3L0JvdHRvbU5hdmlnYXRpb25cIjtcclxuaW1wb3J0IERheVBsYW5QQyBmcm9tIFwiLi9EYXlQbGFuXCI7XHJcbmltcG9ydCBUYXNrcyBmcm9tIFwiLi90YXNrc1wiO1xyXG5pbXBvcnQgRmlyZWJhc2VBdXRoQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L0ZpcmViYXNlQXV0aENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvZmlyZWJhc2VUZXN0XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIGxldCBSZW5kZXJDb21wb25lbnQ6IEpTWC5FbGVtZW50ID0gPEZpcmViYXNlQXV0aENvbXBvbmVudCAvPjtcclxuXHJcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgoYXV0aFVzZXIpID0+IHtcclxuICAgICAgICBpZiAoYXV0aFVzZXIpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC8vICAgc3RhdHVzOiBcIlNJR05FRF9JTlwiXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBSZW5kZXJDb21wb25lbnQgPSA8RGF5UGxhblBDIC8+O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2sgMScpO1xyXG4gICAgICAgICAgICByZXR1cm4gUmVuZGVyQ29tcG9uZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFJlbmRlckNvbXBvbmVudCA9IDxGaXJlYmFzZUF1dGhDb21wb25lbnQgLz47XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVjayAyJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBSZW5kZXJDb21wb25lbnQ7XHJcbiAgICAgICAgICAgIC8vIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB1c2VNZW1vKCgpID0+IHtcclxuICAgIC8vICAgICBpZiAodXNlcklkID09IFwiXCIpIHtcclxuICAgIC8vICAgICAgICAgUmVuZGVyQ29tcG9uZW50ID0gPEZpcmViYXNlQXV0aENvbXBvbmVudCAvPjtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBSZW5kZXJDb21wb25lbnQgPSA8RGF5UGxhblBDIC8+O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sIFt1c2VySWRdKTtcclxuXHJcbiAgICByZXR1cm4gUmVuZGVyQ29tcG9uZW50O1xyXG4gICAgLy8gPERheVBsYW5QQyAvPlxyXG4gICAgLy8gPFRhc2tzIC8+XHJcbiAgICAvLyA8QnJvd3NlclJvdXRlcj57cm91dGVzfTwvQnJvd3NlclJvdXRlcj5cclxuICAgIC8vIDxDb250YWluZXIgZml4ZWQ+XHJcbiAgICAvLyAgICAgPGgxPlRvZG8gQXBwPC9oMT5cclxuICAgIC8vICAgICA8Qm94IGNvbXBvbmVudD1cInNwYW5cIiBtPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgIC8vICAgICAgICAgey8qIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIFRlc3RcclxuICAgIC8vICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgIC8vICAgICAgICAgPEZsb2F0aW5nQWN0aW9uQnV0dG9uWm9vbSAvPlxyXG4gICAgLy8gICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbiAvPlxyXG4gICAgLy8gICAgIDwvQm94PlxyXG4gICAgLy8gICAgIHsvKiA8Qm94PlxyXG4gICAgLy8gICAgIDwvQm94PiAqL31cclxuICAgIC8vIDwvQ29udGFpbmVyPlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4vLyBSZWFjdERPTS5yZW5kZXIoIEFwcCApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9