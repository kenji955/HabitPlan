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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_shared_withAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/shared/withAuth */ "./src/components/shared/withAuth.tsx");


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

  var classes = useStyles(); // Firebase接続テストここから＝＝＝＝＝＝＝

  console.log("Firebase接続テストここから＝＝＝＝＝＝＝");

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.user;
  }),
      userId = _useSelector.userId;

  console.log("users/" + userId);
  Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["useFirebaseConnect"])([{
    path: "users/".concat(userId)
  } //"users/" + userId { path: '/todos' } // object notation
  ]);
  console.log("state.firebase.data.users[userId]");
  var todos = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.firebase.data.users[userId].calendar;
  });
  console.log(todos);
  var testContent;

  if (!Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["isLoaded"])(todos)) {
    testContent = __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 23
      }
    }, "Loading...");
  }

  if (Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["isEmpty"])(todos)) {
    testContent = __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 23
      }
    }, "Todos List Is Empty");
  }

  var firebase = Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["getFirebase"])();
  console.log('====test====');
  console.log(firebase.database.Database); // Firebase接続テストここまで＝＝＝＝＝＝＝

  console.log("Firebase接続テストここまで＝＝＝＝＝＝＝");
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(_components_view_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.taskList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_components_view_FloatingActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.taskList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, testContent, __jsx(_components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_getData__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_FormComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  })));
};

_s(Tasks, "KWZR/jNw7AamrIvnxpqLQ1gVaiA=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["useFirebaseConnect"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"]];
});

_c = Tasks;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_shared_withAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(Tasks));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rhc2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0YXNrTGlzdCIsImRpc3BsYXkiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJicmVha3BvaW50cyIsInVwIiwiVGFza3MiLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlcklkIiwidXNlRmlyZWJhc2VDb25uZWN0IiwicGF0aCIsInRvZG9zIiwiZmlyZWJhc2UiLCJkYXRhIiwidXNlcnMiLCJjYWxlbmRhciIsInRlc3RDb250ZW50IiwiaXNMb2FkZWQiLCJpc0VtcHR5IiwiZ2V0RmlyZWJhc2UiLCJkYXRhYmFzZSIsIkRhdGFiYXNlIiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUN6QkMsNkVBQVksQ0FBQztBQUNUQyxVQUFNLEVBQUU7QUFDSkMscUJBQWUsRUFBRTtBQURiLEtBREM7QUFJVEMsWUFBUSxFQUFFO0FBQ05DLGFBQU8sRUFBRSxNQURMO0FBRUpDLGdCQUFVLEVBQUUsTUFGUjtBQUdKQyxpQkFBVyxFQUFFO0FBSFQsT0FJSFAsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUpHLEVBSTBCO0FBQzFCRixpQkFBVyxFQUFFO0FBRGEsS0FKMUI7QUFKQyxHQUFELENBRGE7QUFBQSxDQUFELENBQTVCOztBQWdCQSxJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2hCLE1BQU1DLE9BQU8sR0FBR2IsU0FBUyxFQUF6QixDQURnQixDQUdoQjs7QUFDQWMsU0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7O0FBSmdCLHFCQUtHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFzQkEsS0FBSyxDQUFDQyxJQUE1QjtBQUFBLEdBQUQsQ0FMZDtBQUFBLE1BS1JDLE1BTFEsZ0JBS1JBLE1BTFE7O0FBT2hCTCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFXSSxNQUF2QjtBQUNBQyxrRkFBa0IsQ0FBQyxDQUNmO0FBQUVDLFFBQUksa0JBQVdGLE1BQVg7QUFBTixHQURlLENBRWY7QUFGZSxHQUFELENBQWxCO0FBS0FMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFaO0FBQ0EsTUFBTU8sS0FBSyxHQUFHTiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFzQkEsS0FBSyxDQUFDTSxRQUFOLENBQWVDLElBQWYsQ0FBb0JDLEtBQXBCLENBQTBCTixNQUExQixFQUFrQ08sUUFBeEQ7QUFBQSxHQUFELENBQXpCO0FBQ0FaLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTyxLQUFaO0FBQ0EsTUFBSUssV0FBSjs7QUFDQSxNQUFJLENBQUNDLHNFQUFRLENBQUNOLEtBQUQsQ0FBYixFQUFzQjtBQUNsQkssZUFBVyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWQ7QUFDSDs7QUFFRCxNQUFJRSxxRUFBTyxDQUFDUCxLQUFELENBQVgsRUFBb0I7QUFDaEJLLGVBQVcsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFkO0FBQ0g7O0FBRUQsTUFBTUosUUFBUSxHQUFHTyx5RUFBVyxFQUE1QjtBQUNBaEIsU0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWVEsUUFBUSxDQUFDUSxRQUFULENBQWtCQyxRQUE5QixFQTNCZ0IsQ0E2QmhCOztBQUNBbEIsU0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFFQSxTQUNJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBS0ksTUFBQyxtRUFBRDtBQUFXLGFBQVMsRUFBRUYsT0FBTyxDQUFDUCxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FMSixFQWNJLE1BQUMsbUVBQUQ7QUFBVyxhQUFTLEVBQUVPLE9BQU8sQ0FBQ1AsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLcUIsV0FETCxFQUVJLE1BQUMsMkZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSSxNQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQWRKLENBREo7QUF1QkgsQ0F2REQ7O0dBQU1mLEs7VUFDY1osUyxFQUlHZ0IsdUQsRUFHbkJJLHdFLEVBTWNKLHVEOzs7S0FkWkosSztBQXlEUyxxRUFBQXFCLDRFQUFRLENBQUNyQixLQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLjMyNDBhNjRkOTMzNGZjZjg4ZjU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuXHJcbmltcG9ydCBUYXNrTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy92aWV3L1Rhc2tMaXN0XCI7XHJcbmltcG9ydCBSZXNwb25zaXZlRHJhd2VyIGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZXcvUmVzcG9uc2l2ZURyYXdlclwiO1xyXG5pbXBvcnQgRmxvYXRpbmdBY3Rpb25CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlldy8vRmxvYXRpbmdBY3Rpb25CdXR0b25cIjtcclxuXHJcbmltcG9ydCBMaXN0Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L2dldERhdGFcIjtcclxuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRm9ybUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRmlyZWJhc2VBdXRoQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L0ZpcmViYXNlQXV0aENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VGaXJlYmFzZUNvbm5lY3QsIGlzTG9hZGVkLCBpc0VtcHR5LCBnZXRGaXJlYmFzZSB9IGZyb20gXCJyZWFjdC1yZWR1eC1maXJlYmFzZVwiO1xyXG5cclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC93aXRoQXV0aFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXNrTGlzdDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI5MHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjI0MHB4XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5jb25zdCBUYXNrcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICAvLyBGaXJlYmFzZeaOpee2muODhuOCueODiOOBk+OBk+OBi+OCie+8ne+8ne+8ne+8ne+8ne+8ne+8nVxyXG4gICAgY29uc29sZS5sb2coXCJGaXJlYmFzZeaOpee2muODhuOCueODiOOBk+OBk+OBi+OCie+8ne+8ne+8ne+8ne+8ne+8ne+8nVwiKTtcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ1c2Vycy9cIiArIHVzZXJJZCk7XHJcbiAgICB1c2VGaXJlYmFzZUNvbm5lY3QoW1xyXG4gICAgICAgIHsgcGF0aDogYHVzZXJzLyR7dXNlcklkfWAgfSxcclxuICAgICAgICAvL1widXNlcnMvXCIgKyB1c2VySWQgeyBwYXRoOiAnL3RvZG9zJyB9IC8vIG9iamVjdCBub3RhdGlvblxyXG4gICAgXSk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKFwic3RhdGUuZmlyZWJhc2UuZGF0YS51c2Vyc1t1c2VySWRdXCIpO1xyXG4gICAgY29uc3QgdG9kb3MgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZmlyZWJhc2UuZGF0YS51c2Vyc1t1c2VySWRdLmNhbGVuZGFyKTtcclxuICAgIGNvbnNvbGUubG9nKHRvZG9zKTtcclxuICAgIGxldCB0ZXN0Q29udGVudDtcclxuICAgIGlmICghaXNMb2FkZWQodG9kb3MpKSB7XHJcbiAgICAgICAgdGVzdENvbnRlbnQgPSA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRW1wdHkodG9kb3MpKSB7XHJcbiAgICAgICAgdGVzdENvbnRlbnQgPSA8ZGl2PlRvZG9zIExpc3QgSXMgRW1wdHk8L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlyZWJhc2UgPSBnZXRGaXJlYmFzZSgpO1xyXG4gICAgY29uc29sZS5sb2coJz09PT10ZXN0PT09PScpO1xyXG4gICAgY29uc29sZS5sb2coZmlyZWJhc2UuZGF0YWJhc2UuRGF0YWJhc2UpO1xyXG5cclxuICAgIC8vIEZpcmViYXNl5o6l57aa44OG44K544OI44GT44GT44G+44Gn77yd77yd77yd77yd77yd77yd77ydXHJcbiAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNl5o6l57aa44OG44K544OI44GT44GT44G+44Gn77yd77yd77yd77yd77yd77yd77ydXCIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgey8qIC8vIDxCb3g+ICovfVxyXG4gICAgICAgICAgICB7LyogPEJveCBjb21wb25lbnQ9XCJzcGFuXCIgbT17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+ICovfVxyXG4gICAgICAgICAgICA8UmVzcG9uc2l2ZURyYXdlciAvPlxyXG4gICAgICAgICAgICB7LyogPERlbnNlQXBwQmFyIC8+ICovfVxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy50YXNrTGlzdH0+XHJcbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdBY3Rpb25CdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8VGFza0xpc3QgLz4gKi99XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICB7LyogPFRvb2x0aXAgLz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8VG9vbHRpcHMgb25DbGljaz17fS8+ICovfVxyXG4gICAgICAgICAgICB7LyogPEJvdHRvbU5hdmlnYXRpb24gLz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8L0JveD4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8L0JveD4gKi99XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRhc2tMaXN0fT5cclxuICAgICAgICAgICAgICAgIHt0ZXN0Q29udGVudH1cclxuICAgICAgICAgICAgICAgIDxGaXJlYmFzZUF1dGhDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0Q29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChUYXNrcyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=