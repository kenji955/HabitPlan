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
  var todos = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.firebase.ordered.users;
  });
  console.log(todos);
  var testContent;

  if (!Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["isLoaded"])(todos)) {
    testContent = __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 23
      }
    }, "Loading...");
  }

  if (Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["isEmpty"])(todos)) {
    testContent = __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 23
      }
    }, "Todos List Is Empty");
  } // Firebase接続テストここまで＝＝＝＝＝＝＝


  console.log("Firebase接続テストここまで＝＝＝＝＝＝＝");
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_components_view_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.taskList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_components_view_FloatingActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.taskList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, testContent, __jsx(_components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_getData__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_FormComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rhc2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0YXNrTGlzdCIsImRpc3BsYXkiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJicmVha3BvaW50cyIsInVwIiwiVGFza3MiLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlcklkIiwidXNlRmlyZWJhc2VDb25uZWN0IiwicGF0aCIsInRvZG9zIiwiZmlyZWJhc2UiLCJvcmRlcmVkIiwidXNlcnMiLCJ0ZXN0Q29udGVudCIsImlzTG9hZGVkIiwiaXNFbXB0eSIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDekJDLDZFQUFZLENBQUM7QUFDVEMsVUFBTSxFQUFFO0FBQ0pDLHFCQUFlLEVBQUU7QUFEYixLQURDO0FBSVRDLFlBQVEsRUFBRTtBQUNOQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxnQkFBVSxFQUFFLE1BRlI7QUFHSkMsaUJBQVcsRUFBRTtBQUhULE9BSUhQLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FKRyxFQUkwQjtBQUMxQkYsaUJBQVcsRUFBRTtBQURhLEtBSjFCO0FBSkMsR0FBRCxDQURhO0FBQUEsQ0FBRCxDQUE1Qjs7QUFnQkEsSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNoQixNQUFNQyxPQUFPLEdBQUdiLFNBQVMsRUFBekIsQ0FEZ0IsQ0FHaEI7O0FBQ0FjLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaOztBQUpnQixxQkFLR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBc0JBLEtBQUssQ0FBQ0MsSUFBNUI7QUFBQSxHQUFELENBTGQ7QUFBQSxNQUtSQyxNQUxRLGdCQUtSQSxNQUxROztBQU9oQkwsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBV0ksTUFBdkI7QUFDQUMsa0ZBQWtCLENBQUMsQ0FDZjtBQUFFQyxRQUFJLGtCQUFXRixNQUFYO0FBQU4sR0FEZSxDQUVmO0FBRmUsR0FBRCxDQUFsQjtBQUtBLE1BQU1HLEtBQUssR0FBR04sK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBc0JBLEtBQUssQ0FBQ00sUUFBTixDQUFlQyxPQUFmLENBQXVCQyxLQUE3QztBQUFBLEdBQUQsQ0FBekI7QUFDQVgsU0FBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7QUFDQSxNQUFJSSxXQUFKOztBQUNBLE1BQUksQ0FBQ0Msc0VBQVEsQ0FBQ0wsS0FBRCxDQUFiLEVBQXNCO0FBQ2xCSSxlQUFXLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBZDtBQUNIOztBQUVELE1BQUlFLHFFQUFPLENBQUNOLEtBQUQsQ0FBWCxFQUFvQjtBQUNoQkksZUFBVyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQWQ7QUFDSCxHQXRCZSxDQXdCaEI7OztBQUNBWixTQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUVBLFNBQ0ksTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0ksTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFLSSxNQUFDLG1FQUFEO0FBQVcsYUFBUyxFQUFFRixPQUFPLENBQUNQLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxKLEVBY0ksTUFBQyxtRUFBRDtBQUFXLGFBQVMsRUFBRU8sT0FBTyxDQUFDUCxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tvQixXQURMLEVBRUksTUFBQywyRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJLE1BQUMsbUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBZEosQ0FESjtBQXVCSCxDQWxERDs7R0FBTWQsSztVQUNjWixTLEVBSUdnQix1RCxFQUduQkksd0UsRUFLY0osdUQ7OztLQWJaSixLO0FBb0RTLHFFQUFBaUIsNEVBQVEsQ0FBQ2pCLEtBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MuYjkzYjIwYTRjMDY3Mzg3OTljYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5cclxuaW1wb3J0IFRhc2tMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZXcvVGFza0xpc3RcIjtcclxuaW1wb3J0IFJlc3BvbnNpdmVEcmF3ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlldy9SZXNwb25zaXZlRHJhd2VyXCI7XHJcbmltcG9ydCBGbG9hdGluZ0FjdGlvbkJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy92aWV3Ly9GbG9hdGluZ0FjdGlvbkJ1dHRvblwiO1xyXG5cclxuaW1wb3J0IExpc3RDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvZ2V0RGF0YVwiO1xyXG5pbXBvcnQgRm9ybUNvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy90ZXN0L2ZpcmViYXNlVGVzdC9Gb3JtQ29tcG9uZW50XCI7XHJcbmltcG9ydCBGaXJlYmFzZUF1dGhDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRmlyZWJhc2VBdXRoQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUZpcmViYXNlQ29ubmVjdCwgaXNMb2FkZWQsIGlzRW1wdHkgfSBmcm9tIFwicmVhY3QtcmVkdXgtZmlyZWJhc2VcIjtcclxuXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvd2l0aEF1dGhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFza0xpc3Q6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiOTBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIwcHhcIixcclxuICAgICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIyNDBweFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuY29uc3QgVGFza3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgLy8gRmlyZWJhc2XmjqXntprjg4bjgrnjg4jjgZPjgZPjgYvjgonvvJ3vvJ3vvJ3vvJ3vvJ3vvJ3vvJ1cclxuICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2XmjqXntprjg4bjgrnjg4jjgZPjgZPjgYvjgonvvJ3vvJ3vvJ3vvJ3vvJ3vvJ3vvJ1cIik7XHJcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwidXNlcnMvXCIgKyB1c2VySWQpO1xyXG4gICAgdXNlRmlyZWJhc2VDb25uZWN0KFtcclxuICAgICAgICB7IHBhdGg6IGB1c2Vycy8ke3VzZXJJZH1gIH0sXHJcbiAgICAgICAgLy9cInVzZXJzL1wiICsgdXNlcklkIHsgcGF0aDogJy90b2RvcycgfSAvLyBvYmplY3Qgbm90YXRpb25cclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IHRvZG9zID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmZpcmViYXNlLm9yZGVyZWQudXNlcnMpO1xyXG4gICAgY29uc29sZS5sb2codG9kb3MpO1xyXG4gICAgbGV0IHRlc3RDb250ZW50O1xyXG4gICAgaWYgKCFpc0xvYWRlZCh0b2RvcykpIHtcclxuICAgICAgICB0ZXN0Q29udGVudCA9IDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNFbXB0eSh0b2RvcykpIHtcclxuICAgICAgICB0ZXN0Q29udGVudCA9IDxkaXY+VG9kb3MgTGlzdCBJcyBFbXB0eTwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaXJlYmFzZeaOpee2muODhuOCueODiOOBk+OBk+OBvuOBp++8ne+8ne+8ne+8ne+8ne+8ne+8nVxyXG4gICAgY29uc29sZS5sb2coXCJGaXJlYmFzZeaOpee2muODhuOCueODiOOBk+OBk+OBvuOBp++8ne+8ne+8ne+8ne+8ne+8ne+8nVwiKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIHsvKiAvLyA8Qm94PiAqL31cclxuICAgICAgICAgICAgey8qIDxCb3ggY29tcG9uZW50PVwic3BhblwiIG09ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PiAqL31cclxuICAgICAgICAgICAgPFJlc3BvbnNpdmVEcmF3ZXIgLz5cclxuICAgICAgICAgICAgey8qIDxEZW5zZUFwcEJhciAvPiAqL31cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMudGFza0xpc3R9PlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nQWN0aW9uQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPFRhc2tMaXN0IC8+ICovfVxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgey8qIDxUb29sdGlwIC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPFRvb2x0aXBzIG9uQ2xpY2s9e30vPiAqL31cclxuICAgICAgICAgICAgey8qIDxCb3R0b21OYXZpZ2F0aW9uIC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPC9Cb3g+ICovfVxyXG4gICAgICAgICAgICB7LyogPC9Cb3g+ICovfVxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy50YXNrTGlzdH0+XHJcbiAgICAgICAgICAgICAgICB7dGVzdENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8RmlyZWJhc2VBdXRoQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdENvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoVGFza3MpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9