webpackHotUpdate_N_E("pages/SignIn",{

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

  _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signInWithPopup(googleAuthProvider); // return firebase.auth().signInWithPopup(googleAuthProvider);
};
var signInWithEmailAndPassword = function signInWithEmailAndPassword(email, password) {
  console.log(email);
  console.log(password);
  _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signInWithEmailAndPassword(email, password)["catch"](function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(error.code);
    var errorMessage = error.message;
    console.log(error.message);

    if (errorCode == 'auth/user-not-found') {
      _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().createUserWithEmailAndPassword(email, password);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRmlyZWJhc2VBdXRoQ29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJ1c2VSZWR1eEZldGNoIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZpcmViYXNlQXV0aENvbXBvbmVudCIsImxvZ2dlZGluIiwidXNlRmlyZWJhc2VMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25PdXQiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImxvZ291dCIsImFsbERlbGV0ZSIsInVzZVN0YXRlIiwic2V0TG9nZ2VkaW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidGFza3MiLCJ1c2VyVGFza0luZm8iLCJ1c2VFZmZlY3QiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidXNlcklkQ2hlY2siLCJ1aWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxTQUFPRCxRQUFQO0FBQ0gsQ0FIRCxDLENBS0E7OztHQUxNRCxhO1VBQ2VFLHVEOzs7QUFLTixTQUFTQyxxQkFBVCxHQUFpQztBQUFBOztBQUM1QyxNQUFNQyxRQUFRLEdBQUdDLGdCQUFnQixFQUFqQztBQUNBLE1BQU1KLFFBQVEsR0FBR0QsYUFBYSxFQUE5Qjs7QUFDQSxN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LENBQVksd0NBQVosRUFMUSxDQU1SO0FBQ0E7QUFDQTtBQUNIOztBQUVEVSxpQkFBVyxDQUFDLENBQUMsQ0FBQ08sSUFBSCxDQUFYO0FBQ0gsS0FqQkQ7QUFrQkgsR0FwQlEsRUFvQk4sRUFwQk0sQ0FBVCxDQVAyQixDQTRCM0I7O0FBQ0EsU0FBTzdCLFFBQVA7QUFDSCxDQTlCRDs7SUFBTUMsZ0I7VUFHZUwsYSxFQUVRMkIsdUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU2lnbkluLjdlNTJiZTdiMzMzNjU3MzJlYzM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gXCIuL2ZpcmViYXNlVGVzdFwiO1xyXG5pbXBvcnQgeyBsb2dpbiwgbG9nb3V0IH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdXNlck1vZHVsZVwiO1xyXG5pbXBvcnQgeyBpbml0LCBhbGxEZWxldGUgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdXNlRmV0Y2hBbGxEYXRhIH0gZnJvbSBcIi4vREJGZXRjaFwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5jb25zdCB1c2VSZWR1eEZldGNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoO1xyXG59O1xyXG5cclxuLy8g44Ot44Kw44Kk44Oz44CB44Ot44Kw44Ki44Km44OI44Oc44K/44Oz5a6f6KOFXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmViYXNlQXV0aENvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGxvZ2dlZGluID0gdXNlRmlyZWJhc2VMb2dpbigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VSZWR1eEZldGNoKCk7XHJcbiAgICBpZiAoIWxvZ2dlZGluKSB7XHJcbiAgICAgICAgLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44Gq44GR44KM44Gw44Ot44Kw44Kk44Oz44Oc44K/44Oz44KS6KGo56S6XHJcbiAgICAgICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluV2l0aFBvcHVwKCl9PuODreOCsOOCpOODszwvYnV0dG9uPjtcclxuICAgIH1cclxuICAgIC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOCi+OBquOCieODreOCsOOCouOCpuODiOODnOOCv+ODs+OCkuihqOekulxyXG4gICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dChkaXNwYXRjaCl9PuODreOCsOOCouOCpuODiDwvYnV0dG9uPjtcclxufVxyXG5cclxuLy8g44Ot44Kw44Kk44Oz5Yem55CGXHJcbmV4cG9ydCBjb25zdCBzaWduSW5XaXRoUG9wdXAgPSAoKSA9PiB7XHJcbiAgICAvLyBHb29nbGXjg5fjg63jg5DjgqTjg4Djgqrjg5bjgrjjgqfjgq/jg4jjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLkvZzmiJBcclxuICAgIGNvbnN0IGdvb2dsZUF1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5cclxuICAgIC8vIGRpc3BhdGNoKGxvZ2luKHVzZXJJZENoZWNrKSk7XHJcbiAgICAvLyDliKXjgr/jg5bjgafjg63jgrDjgqTjg7PnlLvpnaLjgavpo5vjgbDjgZfjgZ/jgYTjgZ/jgoHjgIFzaWduSW5XaXRoUG9wdXDjgpLkvb/jgYZcclxuICAgIC8vIOODquODgOOCpOODrOOCr+ODiOOBp+ODreOCsOOCpOODs+eUu+mdouOBq+mjm+OBsOOBl+OBn+OBhOWgtOWQiOOBr3NpZ25JbldpdGhSZWRpcmVjdOOCkuS9v+OBhlxyXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChnb29nbGVBdXRoUHJvdmlkZXIpO1xyXG4gICAgLy8gcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAoZ29vZ2xlQXV0aFByb3ZpZGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICBjb25zb2xlLmxvZyhwYXNzd29yZCk7XHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAgIC5hdXRoKClcclxuICAgICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5jb2RlKTtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGlmKGVycm9yQ29kZSA9PSAnYXV0aC91c2VyLW5vdC1mb3VuZCcpe1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn07XHJcblxyXG4vLyDjg63jgrDjgqLjgqbjg4jlh6bnkIZcclxuZXhwb3J0IGNvbnN0IHNpZ25PdXQgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4pID0+IHtcclxuICAgIC8vIHNpZ25PdXTjgpLlkbzjgbPlh7rjgZnjgaDjgZHjgadPS1xyXG4gICAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VSZWR1eEZldGNoKCk7XHJcbiAgICBkaXNwYXRjaChsb2dvdXQoKSk7XHJcbiAgICBkaXNwYXRjaChhbGxEZWxldGUoKSk7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKTtcclxufTtcclxuXHJcbi8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOCi+OBi+ODgeOCp+ODg+OCr+OBmeOCi+OCq+OCueOCv+ODoOODleODg+OCr+OCkuS9nOOCi1xyXG5jb25zdCB1c2VGaXJlYmFzZUxvZ2luID0gKCkgPT4ge1xyXG4gICAgLy8gc3RhdGXjgafjg63jgrDjgqTjg7PnirbmhYvjgpLkv53mjIFcclxuICAgIGNvbnN0IFtsb2dnZWRpbiwgc2V0TG9nZ2VkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VSZWR1eEZldGNoKCk7XHJcblxyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyDnj77lnKjjg63jgrDjgqTjg7PjgZfjgabjgYTjgovjg6bjg7zjgrbjgpLlj5blvpdcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOODpuODvOOCtuaDheWgseOBjOWPluOCjOOCjOOBsOODreOCsOOCpOODs+eKtuaFi1xyXG4gICAgICAgICAgICBsZXQgdXNlcklkQ2hlY2s6IHN0cmluZztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGQUMgISF1c2VyXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyghIXVzZXIpO1xyXG4gICAgICAgICAgICBpZiAoISF1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWRDaGVjayA9IHVzZXIudWlkO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGEnKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2goaW5pdChkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZBQyB1c2VyVGFza0luZm8uY2FsZW5kYXJbMF0uUGF0dGVybklkXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlclRhc2tJbmZvLmNhbGVuZGFyWzBdLlBhdHRlcm5JZCk7XHJcbiAgICAgICAgICAgICAgICAvLyDjgZPjgozjgpJyZWR1eOOBp+euoeeQhuOBmeOCi1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2gobG9naW4odXNlcklkQ2hlY2spKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0TG9nZ2VkaW4oISF1c2VyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIOODreOCsOOCpOODs+aDheWgseOCkui/lOWNtFxyXG4gICAgcmV0dXJuIGxvZ2dlZGluO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9