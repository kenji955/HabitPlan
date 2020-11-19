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

  var _detail;

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
  var testTasks = {
    detail: (_detail = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail, "タスク名", "======タスク名 22 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail, "defalut", "======defalut testtest"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail, "testDetail1", "======testDetail1 22 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail, "testDetail2", "======testDetail1 22 1"), _detail),
    patternInfo: [{
      patternID: 1,
      order: 1
    }]
  };
  console.log('====test====');
  console.log(firebase.push("users/".concat(userId, "/tasks"), testTasks)); // Firebase接続テストここまで＝＝＝＝＝＝＝

  console.log("Firebase接続テストここまで＝＝＝＝＝＝＝");
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(_components_view_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.taskList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(_components_view_FloatingActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.taskList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, testContent, __jsx(_components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_getData__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_FormComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rhc2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0YXNrTGlzdCIsImRpc3BsYXkiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJicmVha3BvaW50cyIsInVwIiwiVGFza3MiLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlcklkIiwidXNlRmlyZWJhc2VDb25uZWN0IiwicGF0aCIsInRvZG9zIiwiZmlyZWJhc2UiLCJkYXRhIiwidXNlcnMiLCJjYWxlbmRhciIsInRlc3RDb250ZW50IiwiaXNMb2FkZWQiLCJpc0VtcHR5IiwiZ2V0RmlyZWJhc2UiLCJ0ZXN0VGFza3MiLCJkZXRhaWwiLCJwYXR0ZXJuSW5mbyIsInBhdHRlcm5JRCIsIm9yZGVyIiwicHVzaCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDekJDLDZFQUFZLENBQUM7QUFDVEMsVUFBTSxFQUFFO0FBQ0pDLHFCQUFlLEVBQUU7QUFEYixLQURDO0FBSVRDLFlBQVEsRUFBRTtBQUNOQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxnQkFBVSxFQUFFLE1BRlI7QUFHSkMsaUJBQVcsRUFBRTtBQUhULE9BSUhQLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FKRyxFQUkwQjtBQUMxQkYsaUJBQVcsRUFBRTtBQURhLEtBSjFCO0FBSkMsR0FBRCxDQURhO0FBQUEsQ0FBRCxDQUE1Qjs7QUFnQkEsSUFBTUcs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QUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLjgzMWIwY2IyYjdmNjdlMzZlMWI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuXHJcbmltcG9ydCBUYXNrTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy92aWV3L1Rhc2tMaXN0XCI7XHJcbmltcG9ydCBSZXNwb25zaXZlRHJhd2VyIGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZXcvUmVzcG9uc2l2ZURyYXdlclwiO1xyXG5pbXBvcnQgRmxvYXRpbmdBY3Rpb25CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlldy8vRmxvYXRpbmdBY3Rpb25CdXR0b25cIjtcclxuXHJcbmltcG9ydCBMaXN0Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L2dldERhdGFcIjtcclxuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRm9ybUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRmlyZWJhc2VBdXRoQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L0ZpcmViYXNlQXV0aENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VGaXJlYmFzZUNvbm5lY3QsIGlzTG9hZGVkLCBpc0VtcHR5LCBnZXRGaXJlYmFzZSB9IGZyb20gXCJyZWFjdC1yZWR1eC1maXJlYmFzZVwiO1xyXG5cclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC93aXRoQXV0aFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXNrTGlzdDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI5MHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjI0MHB4XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5jb25zdCBUYXNrcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICAvLyBGaXJlYmFzZeaOpee2muODhuOCueODiOOBk+OBk+OBi+OCie+8ne+8ne+8ne+8ne+8ne+8ne+8nVxyXG4gICAgY29uc29sZS5sb2coXCJGaXJlYmFzZeaOpee2muODhuOCueODiOOBk+OBk+OBi+OCie+8ne+8ne+8ne+8ne+8ne+8ne+8nVwiKTtcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ1c2Vycy9cIiArIHVzZXJJZCk7XHJcbiAgICB1c2VGaXJlYmFzZUNvbm5lY3QoW1xyXG4gICAgICAgIHsgcGF0aDogYHVzZXJzLyR7dXNlcklkfWAgfSxcclxuICAgICAgICAvL1widXNlcnMvXCIgKyB1c2VySWQgeyBwYXRoOiAnL3RvZG9zJyB9IC8vIG9iamVjdCBub3RhdGlvblxyXG4gICAgXSk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKFwic3RhdGUuZmlyZWJhc2UuZGF0YS51c2Vyc1t1c2VySWRdXCIpO1xyXG4gICAgY29uc3QgdG9kb3MgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZmlyZWJhc2UuZGF0YS51c2Vyc1t1c2VySWRdLmNhbGVuZGFyKTtcclxuICAgIGNvbnNvbGUubG9nKHRvZG9zKTtcclxuICAgIGxldCB0ZXN0Q29udGVudDtcclxuICAgIGlmICghaXNMb2FkZWQodG9kb3MpKSB7XHJcbiAgICAgICAgdGVzdENvbnRlbnQgPSA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRW1wdHkodG9kb3MpKSB7XHJcbiAgICAgICAgdGVzdENvbnRlbnQgPSA8ZGl2PlRvZG9zIExpc3QgSXMgRW1wdHk8L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlyZWJhc2UgPSBnZXRGaXJlYmFzZSgpO1xyXG4gICAgY29uc3QgdGVzdFRhc2tzID0ge1xyXG4gICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwiPT09PT0944K/44K544Kv5ZCNIDIyIDFcIixcclxuICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCI9PT09PT1kZWZhbHV0IHRlc3R0ZXN0XCIsXHJcbiAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcIj09PT09PXRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwiPT09PT09dGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCc9PT09dGVzdD09PT0nKTtcclxuICAgIGNvbnNvbGUubG9nKGZpcmViYXNlLnB1c2goYHVzZXJzLyR7dXNlcklkfS90YXNrc2AsdGVzdFRhc2tzKSk7XHJcblxyXG4gICAgLy8gRmlyZWJhc2XmjqXntprjg4bjgrnjg4jjgZPjgZPjgb7jgafvvJ3vvJ3vvJ3vvJ3vvJ3vvJ3vvJ1cclxuICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2XmjqXntprjg4bjgrnjg4jjgZPjgZPjgb7jgafvvJ3vvJ3vvJ3vvJ3vvJ3vvJ3vvJ1cIik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICB7LyogLy8gPEJveD4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8Qm94IGNvbXBvbmVudD1cInNwYW5cIiBtPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT4gKi99XHJcbiAgICAgICAgICAgIDxSZXNwb25zaXZlRHJhd2VyIC8+XHJcbiAgICAgICAgICAgIHsvKiA8RGVuc2VBcHBCYXIgLz4gKi99XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRhc2tMaXN0fT5cclxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0FjdGlvbkJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxUYXNrTGlzdCAvPiAqL31cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIHsvKiA8VG9vbHRpcCAvPiAqL31cclxuICAgICAgICAgICAgey8qIDxUb29sdGlwcyBvbkNsaWNrPXt9Lz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8Qm90dG9tTmF2aWdhdGlvbiAvPiAqL31cclxuICAgICAgICAgICAgey8qIDwvQm94PiAqL31cclxuICAgICAgICAgICAgey8qIDwvQm94PiAqL31cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMudGFza0xpc3R9PlxyXG4gICAgICAgICAgICAgICAge3Rlc3RDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPEZpcmViYXNlQXV0aENvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFRhc2tzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==