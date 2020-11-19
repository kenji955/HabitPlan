webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/pages/tasks.tsx":
/*!*****************************!*\
  !*** ./src/pages/tasks.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_view_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/view/ResponsiveDrawer */ "./src/components/view/ResponsiveDrawer.tsx");
/* harmony import */ var _components_view_FloatingActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/view//FloatingActionButton */ "./src/components/view/FloatingActionButton.tsx");
/* harmony import */ var _components_test_firebaseTest_getData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/test/firebaseTest/getData */ "./src/components/test/firebaseTest/getData.tsx");
/* harmony import */ var _components_test_firebaseTest_FormComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/test/firebaseTest/FormComponent */ "./src/components/test/firebaseTest/FormComponent.tsx");
/* harmony import */ var _components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/test/firebaseTest/FirebaseAuthComponent */ "./src/components/test/firebaseTest/FirebaseAuthComponent.tsx");
/* harmony import */ var _components_shared_withAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/shared/withAuth */ "./src/components/shared/withAuth.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\pages\\tasks.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    button: {
      backgroundColor: "green"
    },
    taskList: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: "flex",
      paddingTop: "90px",
      paddingLeft: "0px"
    }, theme.breakpoints.up("sm"), {
      paddingLeft: "240px"
    })
  });
});

var Tasks = function Tasks() {
  _s();

  var classes = useStyles(); // // Firebase接続テストここから＝＝＝＝＝＝＝
  // console.log('Firebase接続テストここから＝＝＝＝＝＝＝')
  // const { userId } = useSelector((state: RootState) => state.user);
  // useFirebaseConnect([
  //     "/users/" + userId // { path: '/todos' } // object notation
  // ])
  // const todos = useSelector((state: RootState) => state.firebase.ordered);
  // console.log(todos);
  // let testContent;
  // if (!isLoaded(todos)) {
  //     testContent = <div>Loading...</div>
  // }
  // if (isEmpty(todos)) {
  //     testContent = <div>Todos List Is Empty</div>
  // }
  // // Firebase接続テストここまで＝＝＝＝＝＝＝
  // console.log('Firebase接続テストここまで＝＝＝＝＝＝＝')

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(_components_view_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.taskList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(_components_view_FloatingActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.taskList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(_components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_getData__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_FormComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  })));
};

_s(Tasks, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Tasks;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_shared_withAuth__WEBPACK_IMPORTED_MODULE_9__["default"])(Tasks));

var _c, _c2;

$RefreshReg$(_c, "Tasks");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rhc2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0YXNrTGlzdCIsImRpc3BsYXkiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJicmVha3BvaW50cyIsInVwIiwiVGFza3MiLCJjbGFzc2VzIiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQ3pCQyw2RUFBWSxDQUFDO0FBQ1RDLFVBQU0sRUFBRTtBQUNKQyxxQkFBZSxFQUFFO0FBRGIsS0FEQztBQUlUQyxZQUFRLEVBQUU7QUFDTkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsZ0JBQVUsRUFBRSxNQUZSO0FBR0pDLGlCQUFXLEVBQUU7QUFIVCxPQUlIUCxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSkcsRUFJMEI7QUFDMUJGLGlCQUFXLEVBQUU7QUFEYSxLQUoxQjtBQUpDLEdBQUQsQ0FEYTtBQUFBLENBQUQsQ0FBNUI7O0FBaUJBLElBQU1HLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDaEIsTUFBTUMsT0FBTyxHQUFHYixTQUFTLEVBQXpCLENBRGdCLENBR2hCO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBSUEsU0FDSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUtJLE1BQUMsbUVBQUQ7QUFBVyxhQUFTLEVBQUVhLE9BQU8sQ0FBQ1AsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTEosRUFjSSxNQUFDLG1FQUFEO0FBQVcsYUFBUyxFQUFFTyxPQUFPLENBQUNQLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLDJGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUksTUFBQyxtRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FkSixDQURKO0FBdUJILENBbEREOztHQUFNTSxLO1VBQ2NaLFM7OztLQURkWSxLO0FBb0RTLHFFQUFBRSwyRUFBUSxDQUFDRixLQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLjNjYzI4M2M4NGEyMmRjNTFlNmY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuXHJcbmltcG9ydCBUYXNrTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy92aWV3L1Rhc2tMaXN0XCI7XHJcbmltcG9ydCBSZXNwb25zaXZlRHJhd2VyIGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZXcvUmVzcG9uc2l2ZURyYXdlclwiO1xyXG5pbXBvcnQgRmxvYXRpbmdBY3Rpb25CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlldy8vRmxvYXRpbmdBY3Rpb25CdXR0b25cIjtcclxuXHJcbmltcG9ydCBMaXN0Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L2dldERhdGFcIjtcclxuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRm9ybUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRmlyZWJhc2VBdXRoQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L0ZpcmViYXNlQXV0aENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VGaXJlYmFzZUNvbm5lY3QsIGlzTG9hZGVkLCBpc0VtcHR5IH0gZnJvbSAncmVhY3QtcmVkdXgtZmlyZWJhc2UnXHJcblxyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvd2l0aEF1dGgnXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhc2tMaXN0OiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjkwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjQwcHhcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcblxyXG5jb25zdCBUYXNrcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICAvLyAvLyBGaXJlYmFzZeaOpee2muODhuOCueODiOOBk+OBk+OBi+OCie+8ne+8ne+8ne+8ne+8ne+8ne+8nVxyXG4gICAgLy8gY29uc29sZS5sb2coJ0ZpcmViYXNl5o6l57aa44OG44K544OI44GT44GT44GL44KJ77yd77yd77yd77yd77yd77yd77ydJylcclxuICAgIC8vIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBcclxuICAgIC8vIHVzZUZpcmViYXNlQ29ubmVjdChbXHJcbiAgICAvLyAgICAgXCIvdXNlcnMvXCIgKyB1c2VySWQgLy8geyBwYXRoOiAnL3RvZG9zJyB9IC8vIG9iamVjdCBub3RhdGlvblxyXG4gICAgLy8gXSlcclxuICAgIFxyXG4gICAgLy8gY29uc3QgdG9kb3MgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZmlyZWJhc2Uub3JkZXJlZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0b2Rvcyk7XHJcbiAgICAvLyBsZXQgdGVzdENvbnRlbnQ7XHJcbiAgICAvLyBpZiAoIWlzTG9hZGVkKHRvZG9zKSkge1xyXG4gICAgLy8gICAgIHRlc3RDb250ZW50ID0gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIGlmIChpc0VtcHR5KHRvZG9zKSkge1xyXG4gICAgLy8gICAgIHRlc3RDb250ZW50ID0gPGRpdj5Ub2RvcyBMaXN0IElzIEVtcHR5PC9kaXY+XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIC8vIEZpcmViYXNl5o6l57aa44OG44K544OI44GT44GT44G+44Gn77yd77yd77yd77yd77yd77yd77ydXHJcbiAgICAvLyBjb25zb2xlLmxvZygnRmlyZWJhc2XmjqXntprjg4bjgrnjg4jjgZPjgZPjgb7jgafvvJ3vvJ3vvJ3vvJ3vvJ3vvJ3vvJ0nKVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICB7LyogLy8gPEJveD4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8Qm94IGNvbXBvbmVudD1cInNwYW5cIiBtPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT4gKi99XHJcbiAgICAgICAgICAgIDxSZXNwb25zaXZlRHJhd2VyIC8+XHJcbiAgICAgICAgICAgIHsvKiA8RGVuc2VBcHBCYXIgLz4gKi99XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRhc2tMaXN0fT5cclxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0FjdGlvbkJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxUYXNrTGlzdCAvPiAqL31cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIHsvKiA8VG9vbHRpcCAvPiAqL31cclxuICAgICAgICAgICAgey8qIDxUb29sdGlwcyBvbkNsaWNrPXt9Lz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8Qm90dG9tTmF2aWdhdGlvbiAvPiAqL31cclxuICAgICAgICAgICAgey8qIDwvQm94PiAqL31cclxuICAgICAgICAgICAgey8qIDwvQm94PiAqL31cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMudGFza0xpc3R9PlxyXG4gICAgICAgICAgICAgICAgey8qIHt0ZXN0Q29udGVudH0gKi99XHJcbiAgICAgICAgICAgICAgICA8RmlyZWJhc2VBdXRoQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdENvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoVGFza3MpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9