webpackHotUpdate_N_E("pages/index",{

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
  var googleAuthProvider = new _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth.GoogleAuthProvider(); // dispatch(login(userIdCheck));
  // 別タブでログイン画面に飛ばしたいため、signInWithPopupを使う
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRmlyZWJhc2VBdXRoQ29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJ1c2VSZWR1eEZldGNoIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZpcmViYXNlQXV0aENvbXBvbmVudCIsImxvZ2dlZGluIiwidXNlRmlyZWJhc2VMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInVzZVNpZ25PdXQiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJsb2dvdXQiLCJhbGxEZWxldGUiLCJzaWduT3V0IiwidXNlU3RhdGUiLCJzZXRMb2dnZWRpbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsInVzZUVmZmVjdCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJ1c2VySWRDaGVjayIsImNvbnNvbGUiLCJsb2ciLCJ1aWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxTQUFPRCxRQUFQO0FBQ0gsQ0FIRCxDLENBS0E7OztHQUxNRCxhO1VBQ2VFLHVEOzs7QUFLTixTQUFTQyxxQkFBVCxHQUFpQztBQUFBOztBQUFBOztBQUM1QyxNQUFNQyxRQUFRLEdBQUdDLGdCQUFnQixFQUFqQztBQUNBLE1BQU1KLFFBQVEsR0FBR0QsYUFBYSxFQUE5Qjs7QUFDQSxNQUFJLENBQUNJLFFBQUwsRUFBZTtBQUNYO0FBQ0EsV0FBTztBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1FLGVBQWUsRUFBckI7QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFQO0FBQ0gsR0FOMkMsQ0FPNUM7OztBQUNBLFNBQU87QUFBUSxXQUFPLE1BQUU7QUFBQTs7QUFBQSxhQUFNQyxVQUFVLENBQUNOLFFBQUQsQ0FBaEI7QUFBQSxLQUFGO0FBQUEsY0FBUU0sVUFBUjtBQUFBLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FBUDtBQUNILEMsQ0FFRDs7SUFYd0JKLHFCO1VBQ0hFLGdCLEVBQ0FMLGE7OztLQUZHRyxxQjs7QUFZeEIsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCO0FBQ0EsTUFBTUUsa0JBQWtCLEdBQUcsSUFBSUMsc0RBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxrQkFBbEIsRUFBM0IsQ0FGMEIsQ0FJMUI7QUFDQTtBQUNBOztBQUNBLFNBQU9GLHNEQUFRLENBQUNDLElBQVQsR0FBZ0JKLGVBQWhCLENBQWdDRSxrQkFBaEMsQ0FBUDtBQUNILENBUkQsQyxDQVVBOzs7QUFDQSxJQUFNRCxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDTixRQUFELEVBQTZCO0FBQzVDO0FBQ0E7QUFDQUEsVUFBUSxDQUFDVyxrRUFBTSxFQUFQLENBQVI7QUFDQVgsVUFBUSxDQUFDWSxzRUFBUyxFQUFWLENBQVI7QUFDQSxTQUFPSixzREFBUSxDQUFDQyxJQUFULEdBQWdCSSxPQUFoQixFQUFQO0FBQ0gsQ0FORCxDLENBUUE7OztBQUNBLElBQU1ULGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUMzQjtBQUQyQixrQkFFS1Usc0RBQVEsQ0FBQyxLQUFELENBRmI7QUFBQSxNQUVwQlgsUUFGb0I7QUFBQSxNQUVWWSxXQUZVOztBQUczQixNQUFNZixRQUFRLEdBQUdELGFBQWEsRUFBOUI7O0FBSDJCLHFCQUtGaUIsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBc0JBLEtBQUssQ0FBQ0MsS0FBNUI7QUFBQSxHQUFELENBTFQ7QUFBQSxNQUtuQkMsWUFMbUIsZ0JBS25CQSxZQUxtQjs7QUFPM0JDLHlEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0FaLDBEQUFRLENBQUNDLElBQVQsR0FBZ0JZLGtCQUFoQixDQUFtQyxVQUFDQyxJQUFELEVBQVU7QUFDekM7QUFDQSxVQUFJQyxXQUFKO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVksQ0FBQyxDQUFDSCxJQUFkOztBQUNBLFVBQUksQ0FBQyxDQUFDQSxJQUFOLEVBQVk7QUFDUkMsbUJBQVcsR0FBR0QsSUFBSSxDQUFDSSxHQUFuQixDQURRLENBRVI7QUFDQTtBQUNBOztBQUNBRixlQUFPLENBQUNDLEdBQVIsQ0FBWSx3Q0FBWixFQUxRLENBTVI7QUFDQTtBQUNBO0FBQ0g7O0FBRURWLGlCQUFXLENBQUMsQ0FBQyxDQUFDTyxJQUFILENBQVg7QUFDSCxLQWpCRDtBQWtCSCxHQXBCUSxFQW9CTixFQXBCTSxDQUFULENBUDJCLENBNEIzQjs7QUFDQSxTQUFPbkIsUUFBUDtBQUNILENBOUJEOztJQUFNQyxnQjtVQUdlTCxhLEVBRVFpQix1RCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZjU4YjRiYjIxMWMxNWUyMDc3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tIFwiLi9maXJlYmFzZVRlc3RcIjtcclxuaW1wb3J0IHsgbG9naW4sIGxvZ291dCB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3VzZXJNb2R1bGVcIjtcclxuaW1wb3J0IHsgaW5pdCwgYWxsRGVsZXRlIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHVzZUZldGNoQWxsRGF0YSB9IGZyb20gXCIuL0RCRmV0Y2hcIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgdXNlUmVkdXhGZXRjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIHJldHVybiBkaXNwYXRjaDtcclxufTtcclxuXHJcbi8vIOODreOCsOOCpOODs+OAgeODreOCsOOCouOCpuODiOODnOOCv+ODs+Wun+ijhVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlYmFzZUF1dGhDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBsb2dnZWRpbiA9IHVzZUZpcmViYXNlTG9naW4oKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlUmVkdXhGZXRjaCgpO1xyXG4gICAgaWYgKCFsb2dnZWRpbikge1xyXG4gICAgICAgIC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOBquOBkeOCjOOBsOODreOCsOOCpOODs+ODnOOCv+ODs+OCkuihqOekulxyXG4gICAgICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbldpdGhQb3B1cCgpfT7jg63jgrDjgqTjg7M8L2J1dHRvbj47XHJcbiAgICB9XHJcbiAgICAvLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgovjgarjgonjg63jgrDjgqLjgqbjg4jjg5zjgr/jg7PjgpLooajnpLpcclxuICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVzZVNpZ25PdXQoZGlzcGF0Y2gpfT7jg63jgrDjgqLjgqbjg4g8L2J1dHRvbj47XHJcbn1cclxuXHJcbi8vIOODreOCsOOCpOODs+WHpueQhlxyXG5jb25zdCBzaWduSW5XaXRoUG9wdXAgPSAoKSA9PiB7XHJcbiAgICAvLyBHb29nbGXjg5fjg63jg5DjgqTjg4Djgqrjg5bjgrjjgqfjgq/jg4jjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLkvZzmiJBcclxuICAgIGNvbnN0IGdvb2dsZUF1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5cclxuICAgIC8vIGRpc3BhdGNoKGxvZ2luKHVzZXJJZENoZWNrKSk7XHJcbiAgICAvLyDliKXjgr/jg5bjgafjg63jgrDjgqTjg7PnlLvpnaLjgavpo5vjgbDjgZfjgZ/jgYTjgZ/jgoHjgIFzaWduSW5XaXRoUG9wdXDjgpLkvb/jgYZcclxuICAgIC8vIOODquODgOOCpOODrOOCr+ODiOOBp+ODreOCsOOCpOODs+eUu+mdouOBq+mjm+OBsOOBl+OBn+OBhOWgtOWQiOOBr3NpZ25JbldpdGhSZWRpcmVjdOOCkuS9v+OBhlxyXG4gICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAoZ29vZ2xlQXV0aFByb3ZpZGVyKTtcclxufTtcclxuXHJcbi8vIOODreOCsOOCouOCpuODiOWHpueQhlxyXG5jb25zdCB1c2VTaWduT3V0ID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+KSA9PiB7XHJcbiAgICAvLyBzaWduT3V044KS5ZG844Gz5Ye644GZ44Gg44GR44GnT0tcclxuICAgIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlUmVkdXhGZXRjaCgpO1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0KCkpO1xyXG4gICAgZGlzcGF0Y2goYWxsRGVsZXRlKCkpO1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XHJcbn07XHJcblxyXG4vLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgovjgYvjg4Hjgqfjg4Pjgq/jgZnjgovjgqvjgrnjgr/jg6Djg5Xjg4Pjgq/jgpLkvZzjgotcclxuY29uc3QgdXNlRmlyZWJhc2VMb2dpbiA9ICgpID0+IHtcclxuICAgIC8vIHN0YXRl44Gn44Ot44Kw44Kk44Oz54q25oWL44KS5L+d5oyBXHJcbiAgICBjb25zdCBbbG9nZ2VkaW4sIHNldExvZ2dlZGluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlUmVkdXhGZXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g54++5Zyo44Ot44Kw44Kk44Oz44GX44Gm44GE44KL44Om44O844K244KS5Y+W5b6XXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAvLyDjg6bjg7zjgrbmg4XloLHjgYzlj5bjgozjgozjgbDjg63jgrDjgqTjg7PnirbmhYtcclxuICAgICAgICAgICAgbGV0IHVzZXJJZENoZWNrOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGQUMgISF1c2VyJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCEhdXNlcik7XHJcbiAgICAgICAgICAgIGlmICghIXVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZENoZWNrID0gdXNlci51aWQ7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaChpbml0KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGQUMgdXNlclRhc2tJbmZvLmNhbGVuZGFyWzBdLlBhdHRlcm5JZCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlclRhc2tJbmZvLmNhbGVuZGFyWzBdLlBhdHRlcm5JZCk7XHJcbiAgICAgICAgICAgICAgICAvLyDjgZPjgozjgpJyZWR1eOOBp+euoeeQhuOBmeOCi1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2gobG9naW4odXNlcklkQ2hlY2spKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0TG9nZ2VkaW4oISF1c2VyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIOODreOCsOOCpOODs+aDheWgseOCkui/lOWNtFxyXG4gICAgcmV0dXJuIGxvZ2dlZGluO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9