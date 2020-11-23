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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRmlyZWJhc2VBdXRoQ29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJ1c2VSZWR1eEZldGNoIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZpcmViYXNlQXV0aENvbXBvbmVudCIsImxvZ2dlZGluIiwidXNlRmlyZWJhc2VMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25PdXQiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImxvZ291dCIsImFsbERlbGV0ZSIsInVzZVN0YXRlIiwic2V0TG9nZ2VkaW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidGFza3MiLCJ1c2VyVGFza0luZm8iLCJ1c2VFZmZlY3QiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidXNlcklkQ2hlY2siLCJ1aWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxTQUFPRCxRQUFQO0FBQ0gsQ0FIRCxDLENBS0E7OztHQUxNRCxhO1VBQ2VFLHVEOzs7QUFLTixTQUFTQyxxQkFBVCxHQUFpQztBQUFBOztBQUM1QyxNQUFNQyxRQUFRLEdBQUdDLGdCQUFnQixFQUFqQztBQUNBLE1BQU1KLFFBQVEsR0FBR0QsYUFBYSxFQUE5Qjs7QUFDQSxN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LENBQVksd0NBQVosRUFMUSxDQU1SO0FBQ0E7QUFDQTtBQUNIOztBQUVEVSxpQkFBVyxDQUFDLENBQUMsQ0FBQ08sSUFBSCxDQUFYO0FBQ0gsS0FqQkQ7QUFrQkgsR0FwQlEsRUFvQk4sRUFwQk0sQ0FBVCxDQVAyQixDQTRCM0I7O0FBQ0EsU0FBTzdCLFFBQVA7QUFDSCxDQTlCRDs7SUFBTUMsZ0I7VUFHZUwsYSxFQUVRMkIsdUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MuN2U1MmJlN2IzMzM2NTczMmVjMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSBcIi4vZmlyZWJhc2VUZXN0XCI7XHJcbmltcG9ydCB7IGxvZ2luLCBsb2dvdXQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy91c2VyTW9kdWxlXCI7XHJcbmltcG9ydCB7IGluaXQsIGFsbERlbGV0ZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaEFsbERhdGEgfSBmcm9tIFwiLi9EQkZldGNoXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IHVzZVJlZHV4RmV0Y2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2g7XHJcbn07XHJcblxyXG4vLyDjg63jgrDjgqTjg7PjgIHjg63jgrDjgqLjgqbjg4jjg5zjgr/jg7Plrp/oo4VcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlyZWJhc2VBdXRoQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgbG9nZ2VkaW4gPSB1c2VGaXJlYmFzZUxvZ2luKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZVJlZHV4RmV0Y2goKTtcclxuICAgIGlmICghbG9nZ2VkaW4pIHtcclxuICAgICAgICAvLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgarjgZHjgozjgbDjg63jgrDjgqTjg7Pjg5zjgr/jg7PjgpLooajnpLpcclxuICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW5XaXRoUG9wdXAoKX0+44Ot44Kw44Kk44OzPC9idXR0b24+O1xyXG4gICAgfVxyXG4gICAgLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44KL44Gq44KJ44Ot44Kw44Ki44Km44OI44Oc44K/44Oz44KS6KGo56S6XHJcbiAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KGRpc3BhdGNoKX0+44Ot44Kw44Ki44Km44OIPC9idXR0b24+O1xyXG59XHJcblxyXG4vLyDjg63jgrDjgqTjg7Plh6bnkIZcclxuZXhwb3J0IGNvbnN0IHNpZ25JbldpdGhQb3B1cCA9ICgpID0+IHtcclxuICAgIC8vIEdvb2dsZeODl+ODreODkOOCpOODgOOCquODluOCuOOCp+OCr+ODiOOBruOCpOODs+OCueOCv+ODs+OCueOCkuS9nOaIkFxyXG4gICAgY29uc3QgZ29vZ2xlQXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG4gICAgLy8gZGlzcGF0Y2gobG9naW4odXNlcklkQ2hlY2spKTtcclxuICAgIC8vIOWIpeOCv+ODluOBp+ODreOCsOOCpOODs+eUu+mdouOBq+mjm+OBsOOBl+OBn+OBhOOBn+OCgeOAgXNpZ25JbldpdGhQb3B1cOOCkuS9v+OBhlxyXG4gICAgLy8g44Oq44OA44Kk44Os44Kv44OI44Gn44Ot44Kw44Kk44Oz55S76Z2i44Gr6aOb44Gw44GX44Gf44GE5aC05ZCI44Gvc2lnbkluV2l0aFJlZGlyZWN044KS5L2/44GGXHJcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKGdvb2dsZUF1dGhQcm92aWRlcik7XHJcbiAgICAvLyByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChnb29nbGVBdXRoUHJvdmlkZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkKTtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgICAgLmF1dGgoKVxyXG4gICAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmNvZGUpO1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYoZXJyb3JDb2RlID09ICdhdXRoL3VzZXItbm90LWZvdW5kJyl7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufTtcclxuXHJcbi8vIOODreOCsOOCouOCpuODiOWHpueQhlxyXG5leHBvcnQgY29uc3Qgc2lnbk91dCA9IChkaXNwYXRjaDogRGlzcGF0Y2g8YW55PikgPT4ge1xyXG4gICAgLy8gc2lnbk91dOOCkuWRvOOBs+WHuuOBmeOBoOOBkeOBp09LXHJcbiAgICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZVJlZHV4RmV0Y2goKTtcclxuICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcclxuICAgIGRpc3BhdGNoKGFsbERlbGV0ZSgpKTtcclxuICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpO1xyXG59O1xyXG5cclxuLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44KL44GL44OB44Kn44OD44Kv44GZ44KL44Kr44K544K/44Og44OV44OD44Kv44KS5L2c44KLXHJcbmNvbnN0IHVzZUZpcmViYXNlTG9naW4gPSAoKSA9PiB7XHJcbiAgICAvLyBzdGF0ZeOBp+ODreOCsOOCpOODs+eKtuaFi+OCkuS/neaMgVxyXG4gICAgY29uc3QgW2xvZ2dlZGluLCBzZXRMb2dnZWRpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZVJlZHV4RmV0Y2goKTtcclxuXHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIOePvuWcqOODreOCsOOCpOODs+OBl+OBpuOBhOOCi+ODpuODvOOCtuOCkuWPluW+l1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgLy8g44Om44O844K25oOF5aCx44GM5Y+W44KM44KM44Gw44Ot44Kw44Kk44Oz54q25oWLXHJcbiAgICAgICAgICAgIGxldCB1c2VySWRDaGVjazogc3RyaW5nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZBQyAhIXVzZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCEhdXNlcik7XHJcbiAgICAgICAgICAgIGlmICghIXVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZENoZWNrID0gdXNlci51aWQ7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaChpbml0KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRkFDIHVzZXJUYXNrSW5mby5jYWxlbmRhclswXS5QYXR0ZXJuSWRcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyVGFza0luZm8uY2FsZW5kYXJbMF0uUGF0dGVybklkKTtcclxuICAgICAgICAgICAgICAgIC8vIOOBk+OCjOOCknJlZHV444Gn566h55CG44GZ44KLXHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaChsb2dpbih1c2VySWRDaGVjaykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRMb2dnZWRpbighIXVzZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy8g44Ot44Kw44Kk44Oz5oOF5aCx44KS6L+U5Y20XHJcbiAgICByZXR1cm4gbG9nZ2VkaW47XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=