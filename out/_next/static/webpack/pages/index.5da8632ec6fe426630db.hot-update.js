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
    } else {
      RenderComponent = __jsx(_components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 31
        }
      }); // router.push("/");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiQXBwIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2VySWQiLCJSZW5kZXJDb21wb25lbnQiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJDLFFBQU0sRUFBRTtBQUNKQyxtQkFBZSxFQUFFO0FBRGI7QUFEaUIsQ0FBRCxDQUE1Qjs7QUFNQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEscUJBQ0tDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQXNCQSxLQUFLLENBQUNDLElBQTVCO0FBQUEsR0FBRCxDQURoQjtBQUFBLE1BQ05DLE1BRE0sZ0JBQ05BLE1BRE07O0FBR2QsTUFBSUMsZUFBNEIsR0FBRyxNQUFDLDJGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbkM7O0FBRUFDLGlGQUFJLENBQUNDLGtCQUFMLENBQXdCLFVBQUNDLFFBQUQsRUFBYztBQUNsQyxRQUFJQSxRQUFKLEVBQWM7QUFDVjtBQUNBO0FBQ0E7QUFDQUgscUJBQWUsR0FBRyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBbEI7QUFDSCxLQUxELE1BS087QUFDSEEscUJBQWUsR0FBRyxNQUFDLDJGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBbEIsQ0FERyxDQUVIO0FBQ0g7QUFDSixHQVZELEVBTGMsQ0FpQmQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBT0EsZUFBUCxDQXpCYyxDQTBCZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQXpDRDs7R0FBTUwsRztVQUNpQkMsdUQ7OztLQURqQkQsRztBQTJDU0Esa0VBQWYsRSxDQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVkYTg2MzJlYzZmZTQyNjYzMGRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gaW1wb3J0IHsgUm91dGUsIFN3aXRjaCwgd2l0aFJvdXRlciwgUmVkaXJlY3QsQnJvd3NlclJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5cclxuaW1wb3J0IEZsb2F0aW5nQWN0aW9uQnV0dG9uWm9vbSBmcm9tIFwiLi4vY29tcG9uZW50cy92aWV3L0Zsb2F0aW5nQWN0aW9uQnV0dG9uXCI7XHJcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZXcvQm90dG9tTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgRGF5UGxhblBDIGZyb20gXCIuL0RheVBsYW5cIjtcclxuaW1wb3J0IFRhc2tzIGZyb20gXCIuL3Rhc2tzXCI7XHJcbmltcG9ydCBGaXJlYmFzZUF1dGhDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRmlyZWJhc2VBdXRoQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vY29tcG9uZW50cy90ZXN0L2ZpcmViYXNlVGVzdC9maXJlYmFzZVRlc3RcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgbGV0IFJlbmRlckNvbXBvbmVudDogSlNYLkVsZW1lbnQgPSA8RmlyZWJhc2VBdXRoQ29tcG9uZW50IC8+O1xyXG5cclxuICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKChhdXRoVXNlcikgPT4ge1xyXG4gICAgICAgIGlmIChhdXRoVXNlcikge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgLy8gICBzdGF0dXM6IFwiU0lHTkVEX0lOXCJcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIFJlbmRlckNvbXBvbmVudCA9IDxEYXlQbGFuUEMgLz47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgUmVuZGVyQ29tcG9uZW50ID0gPEZpcmViYXNlQXV0aENvbXBvbmVudCAvPjtcclxuICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmICh1c2VySWQgPT0gXCJcIikge1xyXG4gICAgLy8gICAgICAgICBSZW5kZXJDb21wb25lbnQgPSA8RmlyZWJhc2VBdXRoQ29tcG9uZW50IC8+O1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIFJlbmRlckNvbXBvbmVudCA9IDxEYXlQbGFuUEMgLz47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSwgW3VzZXJJZF0pO1xyXG5cclxuICAgIHJldHVybiBSZW5kZXJDb21wb25lbnQ7XHJcbiAgICAvLyA8RGF5UGxhblBDIC8+XHJcbiAgICAvLyA8VGFza3MgLz5cclxuICAgIC8vIDxCcm93c2VyUm91dGVyPntyb3V0ZXN9PC9Ccm93c2VyUm91dGVyPlxyXG4gICAgLy8gPENvbnRhaW5lciBmaXhlZD5cclxuICAgIC8vICAgICA8aDE+VG9kbyBBcHA8L2gxPlxyXG4gICAgLy8gICAgIDxCb3ggY29tcG9uZW50PVwic3BhblwiIG09ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgLy8gICAgICAgICB7LyogPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgVGVzdFxyXG4gICAgLy8gICAgICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgLy8gICAgICAgICA8RmxvYXRpbmdBY3Rpb25CdXR0b25ab29tIC8+XHJcbiAgICAvLyAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uIC8+XHJcbiAgICAvLyAgICAgPC9Cb3g+XHJcbiAgICAvLyAgICAgey8qIDxCb3g+XHJcbiAgICAvLyAgICAgPC9Cb3g+ICovfVxyXG4gICAgLy8gPC9Db250YWluZXI+XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbi8vIFJlYWN0RE9NLnJlbmRlciggQXBwICk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=