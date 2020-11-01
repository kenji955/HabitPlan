webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/test/firebaseTest/DBFetch.tsx":
false,

/***/ "./src/components/test/firebaseTest/FirebaseAuthComponent.tsx":
/*!********************************************************************!*\
  !*** ./src/components/test/firebaseTest/FirebaseAuthComponent.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FirebaseAuthComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebaseTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");
/* harmony import */ var _modules_userModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/userModule */ "./src/modules/userModule.tsx");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _s = $RefreshSig$(),
    _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\test\\firebaseTest\\FirebaseAuthComponent.tsx",
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var useReduxFetch = function useReduxFetch() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  return dispatch;
}; // ログイン、ログアウトボタン実装


_s(useReduxFetch, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

function FirebaseAuthComponent() {
  _s3();

  var _s2 = $RefreshSig$();

  var loggedin = useFirebaseLogin();
  var dispatch = useReduxFetch();

  if (!loggedin) {
    // ログインしていなければログインボタンを表示
    return __jsx("button", {
      onClick: function onClick() {
        return signInWithPopup();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }
    }, "\u30ED\u30B0\u30A4\u30F3");
  } // ログインしているならログアウトボタンを表示


  return __jsx("button", {
    onClick: _s2(function () {
      _s2();

      return useSignOut(dispatch);
    }, "MQUksEowtasaxLG86MevrzD8jjg=", false, function () {
      return [useSignOut];
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }, "\u30ED\u30B0\u30A2\u30A6\u30C8");
} // ログイン処理

_s3(FirebaseAuthComponent, "ULNQM9Iu5BrL29nS1HfjJ1UL3qM=", false, function () {
  return [useFirebaseLogin, useReduxFetch];
});

_c = FirebaseAuthComponent;

var signInWithPopup = function signInWithPopup() {
  // Googleプロバイダオブジェクトのインスタンスを作成
  var googleAuthProvider = new _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth.GoogleAuthProvider(); // 別タブでログイン画面に飛ばしたいため、signInWithPopupを使う
  // リダイレクトでログイン画面に飛ばしたい場合はsignInWithRedirectを使う

  return _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signInWithPopup(googleAuthProvider);
}; // ログアウト処理


var useSignOut = function useSignOut(dispatch) {
  // signOutを呼び出すだけでOK
  // const dispatch = useReduxFetch();
  dispatch(Object(_modules_userModule__WEBPACK_IMPORTED_MODULE_2__["logout"])());
  dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_3__["allDelete"])());
  return _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signOut();
}; // ログインしているかチェックするカスタムフックを作る


var useFirebaseLogin = function useFirebaseLogin() {
  _s4();

  // stateでログイン状態を保持
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loggedin = _useState[0],
      setLoggedin = _useState[1];

  var dispatch = useReduxFetch();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // 現在ログインしているユーザを取得
    _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().onAuthStateChanged(function (user) {
      // ユーザ情報が取れればログイン状態
      var userIdCheck;
      console.log('FAC !!user');
      console.log(!!user);

      if (!!user) {
        userIdCheck = user.uid; // console.log('data');
        // console.log(data);
        // dispatch(init(data));

        console.log('FAC userTaskInfo.calendar[0].PatternId'); // console.log(userTaskInfo.calendar[0].PatternId);
        // これをreduxで管理する
        // dispatch(login(userIdCheck));
      }

      setLoggedin(!!user);
    });
  }, []); // ログイン情報を返却

  return loggedin;
};

_s4(useFirebaseLogin, "/Yur4+pNau2tN5kBRRt+lQGds3I=", false, function () {
  return [useReduxFetch, react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

var _c;

$RefreshReg$(_c, "FirebaseAuthComponent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/test/firebaseTest/FormComponent.tsx":
false,

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
      lineNumber: 27,
      columnNumber: 40
    }
  });

  if (userId == "") {
    RenderComponent = __jsx(_components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 27
      }
    });
  } else {
    RenderComponent = __jsx(_DayPlan__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 27
      }
    });
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRmlyZWJhc2VBdXRoQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VSZWR1eEZldGNoIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZpcmViYXNlQXV0aENvbXBvbmVudCIsImxvZ2dlZGluIiwidXNlRmlyZWJhc2VMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInVzZVNpZ25PdXQiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJsb2dvdXQiLCJhbGxEZWxldGUiLCJzaWduT3V0IiwidXNlU3RhdGUiLCJzZXRMb2dnZWRpbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsInVzZUVmZmVjdCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJ1c2VySWRDaGVjayIsImNvbnNvbGUiLCJsb2ciLCJ1aWQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiQXBwIiwidXNlcklkIiwiUmVuZGVyQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsU0FBT0QsUUFBUDtBQUNILENBSEQsQyxDQUtBOzs7R0FMTUQsYTtVQUNlRSx1RDs7O0FBS04sU0FBU0MscUJBQVQsR0FBaUM7QUFBQTs7QUFBQTs7QUFDNUMsTUFBTUMsUUFBUSxHQUFHQyxnQkFBZ0IsRUFBakM7QUFDQSxNQUFNSixRQUFRLEdBQUdELGFBQWEsRUFB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QUFDSyxJQUE1QjtBQUFBLEdBQUQsQ0FEaEI7QUFBQSxNQUNOVSxNQURNLGdCQUNOQSxNQURNOztBQUdkLE1BQUlDLGVBQTRCLEdBQUcsTUFBQywyRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQW5DOztBQUNBLE1BQUlELE1BQU0sSUFBSSxFQUFkLEVBQWtCO0FBQ2RDLG1CQUFlLEdBQUcsTUFBQywyRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWxCO0FBQ0gsR0FGRCxNQUVPO0FBQ0hBLG1CQUFlLEdBQUcsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWxCO0FBQ0g7O0FBRUQsU0FBT0EsZUFBUCxDQVZjLENBV2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0ExQkQ7O0dBQU1GLEc7VUFDaUJmLHVEOzs7S0FEakJlLEc7QUE0QlNBLGtFQUFmLEUsQ0FDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNDA3ZDk0OGI2MTgxMTM3NWJhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tIFwiLi9maXJlYmFzZVRlc3RcIjtcclxuaW1wb3J0IHsgbG9naW4sIGxvZ291dCB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3VzZXJNb2R1bGVcIjtcclxuaW1wb3J0IHsgaW5pdCwgYWxsRGVsZXRlIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHVzZUZldGNoQWxsRGF0YSB9IGZyb20gXCIuL0RCRmV0Y2hcIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgdXNlUmVkdXhGZXRjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIHJldHVybiBkaXNwYXRjaDtcclxufTtcclxuXHJcbi8vIOODreOCsOOCpOODs+OAgeODreOCsOOCouOCpuODiOODnOOCv+ODs+Wun+ijhVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlYmFzZUF1dGhDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBsb2dnZWRpbiA9IHVzZUZpcmViYXNlTG9naW4oKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlUmVkdXhGZXRjaCgpO1xyXG4gICAgaWYgKCFsb2dnZWRpbikge1xyXG4gICAgICAgIC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOBquOBkeOCjOOBsOODreOCsOOCpOODs+ODnOOCv+ODs+OCkuihqOekulxyXG4gICAgICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbldpdGhQb3B1cCgpfT7jg63jgrDjgqTjg7M8L2J1dHRvbj47XHJcbiAgICB9XHJcbiAgICAvLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgovjgarjgonjg63jgrDjgqLjgqbjg4jjg5zjgr/jg7PjgpLooajnpLpcclxuICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVzZVNpZ25PdXQoZGlzcGF0Y2gpfT7jg63jgrDjgqLjgqbjg4g8L2J1dHRvbj47XHJcbn1cclxuXHJcbi8vIOODreOCsOOCpOODs+WHpueQhlxyXG5jb25zdCBzaWduSW5XaXRoUG9wdXAgPSAoKSA9PiB7XHJcbiAgICAvLyBHb29nbGXjg5fjg63jg5DjgqTjg4Djgqrjg5bjgrjjgqfjgq/jg4jjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLkvZzmiJBcclxuICAgIGNvbnN0IGdvb2dsZUF1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gICAgLy8g5Yil44K/44OW44Gn44Ot44Kw44Kk44Oz55S76Z2i44Gr6aOb44Gw44GX44Gf44GE44Gf44KB44CBc2lnbkluV2l0aFBvcHVw44KS5L2/44GGXHJcbiAgICAvLyDjg6rjg4DjgqTjg6zjgq/jg4jjgafjg63jgrDjgqTjg7PnlLvpnaLjgavpo5vjgbDjgZfjgZ/jgYTloLTlkIjjga9zaWduSW5XaXRoUmVkaXJlY3TjgpLkvb/jgYZcclxuICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKGdvb2dsZUF1dGhQcm92aWRlcik7XHJcbn07XHJcblxyXG4vLyDjg63jgrDjgqLjgqbjg4jlh6bnkIZcclxuY29uc3QgdXNlU2lnbk91dCA9IChkaXNwYXRjaDogRGlzcGF0Y2g8YW55PikgPT4ge1xyXG4gICAgLy8gc2lnbk91dOOCkuWRvOOBs+WHuuOBmeOBoOOBkeOBp09LXHJcbiAgICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZVJlZHV4RmV0Y2goKTtcclxuICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcclxuICAgIGRpc3BhdGNoKGFsbERlbGV0ZSgpKTtcclxuICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpO1xyXG59O1xyXG5cclxuLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44KL44GL44OB44Kn44OD44Kv44GZ44KL44Kr44K544K/44Og44OV44OD44Kv44KS5L2c44KLXHJcbmNvbnN0IHVzZUZpcmViYXNlTG9naW4gPSAoKSA9PiB7XHJcbiAgICAvLyBzdGF0ZeOBp+ODreOCsOOCpOODs+eKtuaFi+OCkuS/neaMgVxyXG4gICAgY29uc3QgW2xvZ2dlZGluLCBzZXRMb2dnZWRpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZVJlZHV4RmV0Y2goKTtcclxuXHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIOePvuWcqOODreOCsOOCpOODs+OBl+OBpuOBhOOCi+ODpuODvOOCtuOCkuWPluW+l1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgLy8g44Om44O844K25oOF5aCx44GM5Y+W44KM44KM44Gw44Ot44Kw44Kk44Oz54q25oWLXHJcbiAgICAgICAgICAgIGxldCB1c2VySWRDaGVjazogc3RyaW5nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRkFDICEhdXNlcicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyghIXVzZXIpO1xyXG4gICAgICAgICAgICBpZiAoISF1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWRDaGVjayA9IHVzZXIudWlkO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGEnKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2goaW5pdChkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRkFDIHVzZXJUYXNrSW5mby5jYWxlbmRhclswXS5QYXR0ZXJuSWQnKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJUYXNrSW5mby5jYWxlbmRhclswXS5QYXR0ZXJuSWQpO1xyXG4gICAgICAgICAgICAgICAgLy8g44GT44KM44KScmVkdXjjgafnrqHnkIbjgZnjgotcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKGxvZ2luKHVzZXJJZENoZWNrKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldExvZ2dlZGluKCEhdXNlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyDjg63jgrDjgqTjg7Pmg4XloLHjgpLov5TljbRcclxuICAgIHJldHVybiBsb2dnZWRpbjtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbi8vIGltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIHdpdGhSb3V0ZXIsIFJlZGlyZWN0LEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuXHJcbmltcG9ydCBGbG9hdGluZ0FjdGlvbkJ1dHRvblpvb20gZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlldy9GbG9hdGluZ0FjdGlvbkJ1dHRvblwiO1xyXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy92aWV3L0JvdHRvbU5hdmlnYXRpb25cIjtcclxuaW1wb3J0IERheVBsYW5QQyBmcm9tIFwiLi9EYXlQbGFuXCI7XHJcbmltcG9ydCBUYXNrcyBmcm9tIFwiLi90YXNrc1wiO1xyXG5pbXBvcnQgRmlyZWJhc2VBdXRoQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L0ZpcmViYXNlQXV0aENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBidXR0b246IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VySWQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICBsZXQgUmVuZGVyQ29tcG9uZW50OiBKU1guRWxlbWVudCA9IDxGaXJlYmFzZUF1dGhDb21wb25lbnQgLz47XHJcbiAgICBpZiAodXNlcklkID09IFwiXCIpIHtcclxuICAgICAgICBSZW5kZXJDb21wb25lbnQgPSA8RmlyZWJhc2VBdXRoQ29tcG9uZW50IC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBSZW5kZXJDb21wb25lbnQgPSA8RGF5UGxhblBDIC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBSZW5kZXJDb21wb25lbnQ7XHJcbiAgICAvLyA8RGF5UGxhblBDIC8+XHJcbiAgICAvLyA8VGFza3MgLz5cclxuICAgIC8vIDxCcm93c2VyUm91dGVyPntyb3V0ZXN9PC9Ccm93c2VyUm91dGVyPlxyXG4gICAgLy8gPENvbnRhaW5lciBmaXhlZD5cclxuICAgIC8vICAgICA8aDE+VG9kbyBBcHA8L2gxPlxyXG4gICAgLy8gICAgIDxCb3ggY29tcG9uZW50PVwic3BhblwiIG09ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgLy8gICAgICAgICB7LyogPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgVGVzdFxyXG4gICAgLy8gICAgICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgLy8gICAgICAgICA8RmxvYXRpbmdBY3Rpb25CdXR0b25ab29tIC8+XHJcbiAgICAvLyAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uIC8+XHJcbiAgICAvLyAgICAgPC9Cb3g+XHJcbiAgICAvLyAgICAgey8qIDxCb3g+XHJcbiAgICAvLyAgICAgPC9Cb3g+ICovfVxyXG4gICAgLy8gPC9Db250YWluZXI+XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbi8vIFJlYWN0RE9NLnJlbmRlciggQXBwICk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=