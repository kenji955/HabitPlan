webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/components/test/firebaseTest/FirebaseAuthComponent.tsx":
/*!********************************************************************!*\
  !*** ./src/components/test/firebaseTest/FirebaseAuthComponent.tsx ***!
  \********************************************************************/
/*! exports provided: default, signInWithPopup, signInWithEmailAndPassword, signOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FirebaseAuthComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithPopup", function() { return signInWithPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithEmailAndPassword", function() { return signInWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebaseTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");
/* harmony import */ var _modules_userModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/userModule */ "./src/modules/userModule.tsx");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _s = $RefreshSig$(),
    _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\test\\firebaseTest\\FirebaseAuthComponent.tsx",
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

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
  _s2();

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
    onClick: function onClick() {
      return signOut(dispatch);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }, "\u30ED\u30B0\u30A2\u30A6\u30C8");
} // ログイン処理

_s2(FirebaseAuthComponent, "ULNQM9Iu5BrL29nS1HfjJ1UL3qM=", false, function () {
  return [useFirebaseLogin, useReduxFetch];
});

_c = FirebaseAuthComponent;
var signInWithPopup = function signInWithPopup() {
  // Googleプロバイダオブジェクトのインスタンスを作成
  var googleAuthProvider = new _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth.GoogleAuthProvider(); // dispatch(login(userIdCheck));
  // 別タブでログイン画面に飛ばしたいため、signInWithPopupを使う
  // リダイレクトでログイン画面に飛ばしたい場合はsignInWithRedirectを使う

  return _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signInWithPopup(googleAuthProvider);
};
var signInWithEmailAndPassword = function signInWithEmailAndPassword(email, password) {
  console.log(email);
  console.log(password);
  return _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signInWithEmailAndPassword(email, password)["catch"](function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(error.code);
    var errorMessage = error.message;
    console.log(error.message);
  });
}; // ログアウト処理

var signOut = function signOut(dispatch) {
  // signOutを呼び出すだけでOK
  // const dispatch = useReduxFetch();
  dispatch(Object(_modules_userModule__WEBPACK_IMPORTED_MODULE_2__["logout"])());
  dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_3__["allDelete"])());
  return _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signOut();
}; // ログインしているかチェックするカスタムフックを作る

var useFirebaseLogin = function useFirebaseLogin() {
  _s3();

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
      console.log("FAC !!user");
      console.log(!!user);

      if (!!user) {
        userIdCheck = user.uid; // console.log('data');
        // console.log(data);
        // dispatch(init(data));

        console.log("FAC userTaskInfo.calendar[0].PatternId"); // console.log(userTaskInfo.calendar[0].PatternId);
        // これをreduxで管理する
        // dispatch(login(userIdCheck));
      }

      setLoggedin(!!user);
    });
  }, []); // ログイン情報を返却

  return loggedin;
};

_s3(useFirebaseLogin, "/Yur4+pNau2tN5kBRRt+lQGds3I=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRmlyZWJhc2VBdXRoQ29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJ1c2VSZWR1eEZldGNoIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZpcmViYXNlQXV0aENvbXBvbmVudCIsImxvZ2dlZGluIiwidXNlRmlyZWJhc2VMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25PdXQiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImxvZ291dCIsImFsbERlbGV0ZSIsInVzZVN0YXRlIiwic2V0TG9nZ2VkaW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidGFza3MiLCJ1c2VyVGFza0luZm8iLCJ1c2VFZmZlY3QiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidXNlcklkQ2hlY2siLCJ1aWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxTQUFPRCxRQUFQO0FBQ0gsQ0FIRCxDLENBS0E7OztHQUxNRCxhO1VBQ2VFLHVEOzs7QUFLTixTQUFTQyxxQkFBVCxHQUFpQztBQUFBOztBQUM1QyxNQUFNQyxRQUFRLEdBQUdDLGdCQUFnQixFQUFqQztBQUNBLE1BQU1KLFFBQVEsR0FBR0QsYUFBYSxFQUE5Qjs7QUFDQSxNQUFJLENBQUNJLFFBQUwsRUFBZTtBQUNYO0FBQ0EsV0FB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QUNBLFNBQU81QixRQUFQO0FBQ0gsQ0E5QkQ7O0lBQU1DLGdCO1VBR2VMLGEsRUFFUTBCLHVEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLjFkZTY4NGQ0OTVlMzg4YjAwM2E5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gXCIuL2ZpcmViYXNlVGVzdFwiO1xyXG5pbXBvcnQgeyBsb2dpbiwgbG9nb3V0IH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdXNlck1vZHVsZVwiO1xyXG5pbXBvcnQgeyBpbml0LCBhbGxEZWxldGUgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdXNlRmV0Y2hBbGxEYXRhIH0gZnJvbSBcIi4vREJGZXRjaFwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5jb25zdCB1c2VSZWR1eEZldGNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoO1xyXG59O1xyXG5cclxuLy8g44Ot44Kw44Kk44Oz44CB44Ot44Kw44Ki44Km44OI44Oc44K/44Oz5a6f6KOFXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmViYXNlQXV0aENvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGxvZ2dlZGluID0gdXNlRmlyZWJhc2VMb2dpbigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VSZWR1eEZldGNoKCk7XHJcbiAgICBpZiAoIWxvZ2dlZGluKSB7XHJcbiAgICAgICAgLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44Gq44GR44KM44Gw44Ot44Kw44Kk44Oz44Oc44K/44Oz44KS6KGo56S6XHJcbiAgICAgICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluV2l0aFBvcHVwKCl9PuODreOCsOOCpOODszwvYnV0dG9uPjtcclxuICAgIH1cclxuICAgIC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOCi+OBquOCieODreOCsOOCouOCpuODiOODnOOCv+ODs+OCkuihqOekulxyXG4gICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dChkaXNwYXRjaCl9PuODreOCsOOCouOCpuODiDwvYnV0dG9uPjtcclxufVxyXG5cclxuLy8g44Ot44Kw44Kk44Oz5Yem55CGXHJcbmV4cG9ydCBjb25zdCBzaWduSW5XaXRoUG9wdXAgPSAoKSA9PiB7XHJcbiAgICAvLyBHb29nbGXjg5fjg63jg5DjgqTjg4Djgqrjg5bjgrjjgqfjgq/jg4jjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLkvZzmiJBcclxuICAgIGNvbnN0IGdvb2dsZUF1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5cclxuICAgIC8vIGRpc3BhdGNoKGxvZ2luKHVzZXJJZENoZWNrKSk7XHJcbiAgICAvLyDliKXjgr/jg5bjgafjg63jgrDjgqTjg7PnlLvpnaLjgavpo5vjgbDjgZfjgZ/jgYTjgZ/jgoHjgIFzaWduSW5XaXRoUG9wdXDjgpLkvb/jgYZcclxuICAgIC8vIOODquODgOOCpOODrOOCr+ODiOOBp+ODreOCsOOCpOODs+eUu+mdouOBq+mjm+OBsOOBl+OBn+OBhOWgtOWQiOOBr3NpZ25JbldpdGhSZWRpcmVjdOOCkuS9v+OBhlxyXG4gICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAoZ29vZ2xlQXV0aFByb3ZpZGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICBjb25zb2xlLmxvZyhwYXNzd29yZCk7XHJcbiAgICByZXR1cm4gZmlyZWJhc2VcclxuICAgICAgICAuYXV0aCgpXHJcbiAgICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICAgICAgICAgICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmNvZGUpXHJcbiAgICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pO1xyXG59O1xyXG5cclxuLy8g44Ot44Kw44Ki44Km44OI5Yem55CGXHJcbmV4cG9ydCBjb25zdCBzaWduT3V0ID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+KSA9PiB7XHJcbiAgICAvLyBzaWduT3V044KS5ZG844Gz5Ye644GZ44Gg44GR44GnT0tcclxuICAgIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlUmVkdXhGZXRjaCgpO1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0KCkpO1xyXG4gICAgZGlzcGF0Y2goYWxsRGVsZXRlKCkpO1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XHJcbn07XHJcblxyXG4vLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgovjgYvjg4Hjgqfjg4Pjgq/jgZnjgovjgqvjgrnjgr/jg6Djg5Xjg4Pjgq/jgpLkvZzjgotcclxuY29uc3QgdXNlRmlyZWJhc2VMb2dpbiA9ICgpID0+IHtcclxuICAgIC8vIHN0YXRl44Gn44Ot44Kw44Kk44Oz54q25oWL44KS5L+d5oyBXHJcbiAgICBjb25zdCBbbG9nZ2VkaW4sIHNldExvZ2dlZGluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlUmVkdXhGZXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g54++5Zyo44Ot44Kw44Kk44Oz44GX44Gm44GE44KL44Om44O844K244KS5Y+W5b6XXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAvLyDjg6bjg7zjgrbmg4XloLHjgYzlj5bjgozjgozjgbDjg63jgrDjgqTjg7PnirbmhYtcclxuICAgICAgICAgICAgbGV0IHVzZXJJZENoZWNrOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRkFDICEhdXNlclwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coISF1c2VyKTtcclxuICAgICAgICAgICAgaWYgKCEhdXNlcikge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkQ2hlY2sgPSB1c2VyLnVpZDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKGluaXQoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGQUMgdXNlclRhc2tJbmZvLmNhbGVuZGFyWzBdLlBhdHRlcm5JZFwiKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJUYXNrSW5mby5jYWxlbmRhclswXS5QYXR0ZXJuSWQpO1xyXG4gICAgICAgICAgICAgICAgLy8g44GT44KM44KScmVkdXjjgafnrqHnkIbjgZnjgotcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKGxvZ2luKHVzZXJJZENoZWNrKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldExvZ2dlZGluKCEhdXNlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyDjg63jgrDjgqTjg7Pmg4XloLHjgpLov5TljbRcclxuICAgIHJldHVybiBsb2dnZWRpbjtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==