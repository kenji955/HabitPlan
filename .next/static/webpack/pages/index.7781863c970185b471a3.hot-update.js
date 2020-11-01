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
    } else {
      RenderComponent = __jsx(_components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 31
        }
      });
      console.log('check 2'); // router.push("/");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiQXBwIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2VySWQiLCJSZW5kZXJDb21wb25lbnQiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aFVzZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxRQUFNLEVBQUU7QUFDSkMsbUJBQWUsRUFBRTtBQURiO0FBRGlCLENBQUQsQ0FBNUI7O0FBTUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLHFCQUNLQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFzQkEsS0FBSyxDQUFDQyxJQUE1QjtBQUFBLEdBQUQsQ0FEaEI7QUFBQSxNQUNOQyxNQURNLGdCQUNOQSxNQURNOztBQUdkLE1BQUlDLGVBQTRCLEdBQUcsTUFBQywyRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQW5DOztBQUVBQyxpRkFBSSxDQUFDQyxrQkFBTCxDQUF3QixVQUFDQyxRQUFELEVBQWM7QUFDbEMsUUFBSUEsUUFBSixFQUFjO0FBQ1Y7QUFDQTtBQUNBO0FBQ0FILHFCQUFlLEdBQUcsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQWxCO0FBQ0FJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDSCxLQU5ELE1BTU87QUFDSEwscUJBQWUsR0FBRyxNQUFDLDJGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBbEI7QUFDQUksYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUZHLENBR0g7QUFDSDtBQUNKLEdBWkQsRUFMYyxDQW1CZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFPTCxlQUFQLENBM0JjLENBNEJkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILENBM0NEOztHQUFNTCxHO1VBQ2lCQyx1RDs7O0tBRGpCRCxHO0FBNkNTQSxrRUFBZixFLENBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzc4MTg2M2M5NzAxODViNDcxYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBpbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCB3aXRoUm91dGVyLCBSZWRpcmVjdCxCcm93c2VyUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcblxyXG5pbXBvcnQgRmxvYXRpbmdBY3Rpb25CdXR0b25ab29tIGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZXcvRmxvYXRpbmdBY3Rpb25CdXR0b25cIjtcclxuaW1wb3J0IEJvdHRvbU5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlldy9Cb3R0b21OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBEYXlQbGFuUEMgZnJvbSBcIi4vRGF5UGxhblwiO1xyXG5pbXBvcnQgVGFza3MgZnJvbSBcIi4vdGFza3NcIjtcclxuaW1wb3J0IEZpcmViYXNlQXV0aENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy90ZXN0L2ZpcmViYXNlVGVzdC9GaXJlYmFzZUF1dGhDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L2ZpcmViYXNlVGVzdFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBidXR0b246IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VySWQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICBsZXQgUmVuZGVyQ29tcG9uZW50OiBKU1guRWxlbWVudCA9IDxGaXJlYmFzZUF1dGhDb21wb25lbnQgLz47XHJcblxyXG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKGF1dGhVc2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dGhVc2VyKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAvLyAgIHN0YXR1czogXCJTSUdORURfSU5cIlxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgUmVuZGVyQ29tcG9uZW50ID0gPERheVBsYW5QQyAvPjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrIDEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBSZW5kZXJDb21wb25lbnQgPSA8RmlyZWJhc2VBdXRoQ29tcG9uZW50IC8+O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2sgMicpO1xyXG4gICAgICAgICAgICAvLyByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHVzZXJJZCA9PSBcIlwiKSB7XHJcbiAgICAvLyAgICAgICAgIFJlbmRlckNvbXBvbmVudCA9IDxGaXJlYmFzZUF1dGhDb21wb25lbnQgLz47XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgUmVuZGVyQ29tcG9uZW50ID0gPERheVBsYW5QQyAvPjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LCBbdXNlcklkXSk7XHJcblxyXG4gICAgcmV0dXJuIFJlbmRlckNvbXBvbmVudDtcclxuICAgIC8vIDxEYXlQbGFuUEMgLz5cclxuICAgIC8vIDxUYXNrcyAvPlxyXG4gICAgLy8gPEJyb3dzZXJSb3V0ZXI+e3JvdXRlc308L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAvLyA8Q29udGFpbmVyIGZpeGVkPlxyXG4gICAgLy8gICAgIDxoMT5Ub2RvIEFwcDwvaDE+XHJcbiAgICAvLyAgICAgPEJveCBjb21wb25lbnQ9XCJzcGFuXCIgbT17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcbiAgICAvLyAgICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICBUZXN0XHJcbiAgICAvLyAgICAgICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAvLyAgICAgICAgIDxGbG9hdGluZ0FjdGlvbkJ1dHRvblpvb20gLz5cclxuICAgIC8vICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb24gLz5cclxuICAgIC8vICAgICA8L0JveD5cclxuICAgIC8vICAgICB7LyogPEJveD5cclxuICAgIC8vICAgICA8L0JveD4gKi99XHJcbiAgICAvLyA8L0NvbnRhaW5lcj5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuLy8gUmVhY3RET00ucmVuZGVyKCBBcHAgKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==