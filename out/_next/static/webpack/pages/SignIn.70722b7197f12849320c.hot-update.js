webpackHotUpdate_N_E("pages/SignIn",{

/***/ "./src/components/test/firebaseTest/FirebaseAuthComponent.tsx":
/*!********************************************************************!*\
  !*** ./src/components/test/firebaseTest/FirebaseAuthComponent.tsx ***!
  \********************************************************************/
/*! exports provided: default, signInWithPopup, signOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FirebaseAuthComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithPopup", function() { return signInWithPopup; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRmlyZWJhc2VBdXRoQ29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJ1c2VSZWR1eEZldGNoIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZpcmViYXNlQXV0aENvbXBvbmVudCIsImxvZ2dlZGluIiwidXNlRmlyZWJhc2VMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25PdXQiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJsb2dvdXQiLCJhbGxEZWxldGUiLCJ1c2VTdGF0ZSIsInNldExvZ2dlZGluIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwidXNlRWZmZWN0Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInVzZXJJZENoZWNrIiwiY29uc29sZSIsImxvZyIsInVpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsU0FBT0QsUUFBUDtBQUNILENBSEQsQyxDQUtBOzs7R0FMTUQsYTtVQUNlRSx1RDs7O0FBS04sU0FBU0MscUJBQVQsR0FBaUM7QUFBQTs7QUFDNUMsTUFBTUMsUUFBUSxHQUFHQyxnQkFBZ0IsRUFBakM7QUFDQSxNQUFNSixRQUFRLEdBQUdELGFBQWEsRUFBOUI7O0FBQ0EsTUFBSSxDQUFDSSxRQUFMLEVBQWU7QUFDWDtBQUNBLFdBQU87QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNRSxlQUFlLEVBQXJCO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUDtBQUNILEdBTjJDLENBTzVDOzs7QUFDQSxTQUFPO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUMsT0FBTyxDQUFDTixRQUFELENBQWI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUFQO0FBQ0gsQyxDQUVEOztJQVh3QkUscUI7VUFDSEUsZ0IsRUFDQUwsYTs7O0tBRkdHLHFCO0FBWWpCLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUNqQztBQUNBLE1BQU1FLGtCQUFrQixHQUFHLElBQUlDLHNEQUFRLENBQUNDLElBQVQsQ0FBY0Msa0JBQWxCLEVBQTNCLENBRmlDLENBSWpDO0FBQ0E7QUFDQTs7QUFDQSxTQUFPRixzREFBUSxDQUFDQyxJQUFULEdBQWdCSixlQUFoQixDQUFnQ0Usa0JBQWhDLENBQVA7QUFDSCxDQVJNLEMsQ0FVUDs7QUFDTyxJQUFNRCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDTixRQUFELEVBQTZCO0FBQ2hEO0FBQ0E7QUFDQUEsVUFBUSxDQUFDVyxrRUFBTSxFQUFQLENBQVI7QUFDQVgsVUFBUSxDQUFDWSxzRUFBUyxFQUFWLENBQVI7QUFDQSxTQUFPSixzREFBUSxDQUFDQyxJQUFULEdBQWdCSCxPQUFoQixFQUFQO0FBQ0gsQ0FOTSxDLENBUVA7O0FBQ0EsSUFBTUYsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQzNCO0FBRDJCLGtCQUVLUyxzREFBUSxDQUFDLEtBQUQsQ0FGYjtBQUFBLE1BRXBCVixRQUZvQjtBQUFBLE1BRVZXLFdBRlU7O0FBRzNCLE1BQU1kLFFBQVEsR0FBR0QsYUFBYSxFQUE5Qjs7QUFIMkIscUJBS0ZnQiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFzQkEsS0FBSyxDQUFDQyxLQUE1QjtBQUFBLEdBQUQsQ0FMVDtBQUFBLE1BS25CQyxZQUxtQixnQkFLbkJBLFlBTG1COztBQU8zQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1o7QUFDQVgsMERBQVEsQ0FBQ0MsSUFBVCxHQUFnQlcsa0JBQWhCLENBQW1DLFVBQUNDLElBQUQsRUFBVTtBQUN6QztBQUNBLFVBQUlDLFdBQUo7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDLENBQUNILElBQWQ7O0FBQ0EsVUFBSSxDQUFDLENBQUNBLElBQU4sRUFBWTtBQUNSQyxtQkFBVyxHQUFHRCxJQUFJLENBQUNJLEdBQW5CLENBRFEsQ0FFUjtBQUNBO0FBQ0E7O0FBQ0FGLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHdDQUFaLEVBTFEsQ0FNUjtBQUNBO0FBQ0E7QUFDSDs7QUFFRFYsaUJBQVcsQ0FBQyxDQUFDLENBQUNPLElBQUgsQ0FBWDtBQUNILEtBakJEO0FBa0JILEdBcEJRLEVBb0JOLEVBcEJNLENBQVQsQ0FQMkIsQ0E0QjNCOztBQUNBLFNBQU9sQixRQUFQO0FBQ0gsQ0E5QkQ7O0lBQU1DLGdCO1VBR2VMLGEsRUFFUWdCLHVEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1NpZ25Jbi43MDcyMmI3MTk3ZjEyODQ5MzIwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tIFwiLi9maXJlYmFzZVRlc3RcIjtcclxuaW1wb3J0IHsgbG9naW4sIGxvZ291dCB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3VzZXJNb2R1bGVcIjtcclxuaW1wb3J0IHsgaW5pdCwgYWxsRGVsZXRlIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHVzZUZldGNoQWxsRGF0YSB9IGZyb20gXCIuL0RCRmV0Y2hcIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgdXNlUmVkdXhGZXRjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIHJldHVybiBkaXNwYXRjaDtcclxufTtcclxuXHJcbi8vIOODreOCsOOCpOODs+OAgeODreOCsOOCouOCpuODiOODnOOCv+ODs+Wun+ijhVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlYmFzZUF1dGhDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBsb2dnZWRpbiA9IHVzZUZpcmViYXNlTG9naW4oKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlUmVkdXhGZXRjaCgpO1xyXG4gICAgaWYgKCFsb2dnZWRpbikge1xyXG4gICAgICAgIC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOBquOBkeOCjOOBsOODreOCsOOCpOODs+ODnOOCv+ODs+OCkuihqOekulxyXG4gICAgICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbldpdGhQb3B1cCgpfT7jg63jgrDjgqTjg7M8L2J1dHRvbj47XHJcbiAgICB9XHJcbiAgICAvLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgovjgarjgonjg63jgrDjgqLjgqbjg4jjg5zjgr/jg7PjgpLooajnpLpcclxuICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoZGlzcGF0Y2gpfT7jg63jgrDjgqLjgqbjg4g8L2J1dHRvbj47XHJcbn1cclxuXHJcbi8vIOODreOCsOOCpOODs+WHpueQhlxyXG5leHBvcnQgY29uc3Qgc2lnbkluV2l0aFBvcHVwID0gKCkgPT4ge1xyXG4gICAgLy8gR29vZ2xl44OX44Ot44OQ44Kk44OA44Kq44OW44K444Kn44Kv44OI44Gu44Kk44Oz44K544K/44Oz44K544KS5L2c5oiQXHJcbiAgICBjb25zdCBnb29nbGVBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuXHJcbiAgICAvLyBkaXNwYXRjaChsb2dpbih1c2VySWRDaGVjaykpO1xyXG4gICAgLy8g5Yil44K/44OW44Gn44Ot44Kw44Kk44Oz55S76Z2i44Gr6aOb44Gw44GX44Gf44GE44Gf44KB44CBc2lnbkluV2l0aFBvcHVw44KS5L2/44GGXHJcbiAgICAvLyDjg6rjg4DjgqTjg6zjgq/jg4jjgafjg63jgrDjgqTjg7PnlLvpnaLjgavpo5vjgbDjgZfjgZ/jgYTloLTlkIjjga9zaWduSW5XaXRoUmVkaXJlY3TjgpLkvb/jgYZcclxuICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKGdvb2dsZUF1dGhQcm92aWRlcik7XHJcbn07XHJcblxyXG4vLyDjg63jgrDjgqLjgqbjg4jlh6bnkIZcclxuZXhwb3J0IGNvbnN0IHNpZ25PdXQgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4pID0+IHtcclxuICAgIC8vIHNpZ25PdXTjgpLlkbzjgbPlh7rjgZnjgaDjgZHjgadPS1xyXG4gICAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VSZWR1eEZldGNoKCk7XHJcbiAgICBkaXNwYXRjaChsb2dvdXQoKSk7XHJcbiAgICBkaXNwYXRjaChhbGxEZWxldGUoKSk7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKTtcclxufTtcclxuXHJcbi8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOCi+OBi+ODgeOCp+ODg+OCr+OBmeOCi+OCq+OCueOCv+ODoOODleODg+OCr+OCkuS9nOOCi1xyXG5jb25zdCB1c2VGaXJlYmFzZUxvZ2luID0gKCkgPT4ge1xyXG4gICAgLy8gc3RhdGXjgafjg63jgrDjgqTjg7PnirbmhYvjgpLkv53mjIFcclxuICAgIGNvbnN0IFtsb2dnZWRpbiwgc2V0TG9nZ2VkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VSZWR1eEZldGNoKCk7XHJcblxyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyDnj77lnKjjg63jgrDjgqTjg7PjgZfjgabjgYTjgovjg6bjg7zjgrbjgpLlj5blvpdcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOODpuODvOOCtuaDheWgseOBjOWPluOCjOOCjOOBsOODreOCsOOCpOODs+eKtuaFi1xyXG4gICAgICAgICAgICBsZXQgdXNlcklkQ2hlY2s6IHN0cmluZztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZBQyAhIXVzZXInKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coISF1c2VyKTtcclxuICAgICAgICAgICAgaWYgKCEhdXNlcikge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkQ2hlY2sgPSB1c2VyLnVpZDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKGluaXQoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZBQyB1c2VyVGFza0luZm8uY2FsZW5kYXJbMF0uUGF0dGVybklkJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyVGFza0luZm8uY2FsZW5kYXJbMF0uUGF0dGVybklkKTtcclxuICAgICAgICAgICAgICAgIC8vIOOBk+OCjOOCknJlZHV444Gn566h55CG44GZ44KLXHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaChsb2dpbih1c2VySWRDaGVjaykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRMb2dnZWRpbighIXVzZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy8g44Ot44Kw44Kk44Oz5oOF5aCx44KS6L+U5Y20XHJcbiAgICByZXR1cm4gbG9nZ2VkaW47XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=