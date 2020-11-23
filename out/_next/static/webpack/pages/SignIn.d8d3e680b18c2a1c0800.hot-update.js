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

  return _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signInWithPopup(googleAuthProvider);
};
var signInWithEmailAndPassword = function signInWithEmailAndPassword(email, password) {
  return _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signInWithEmailAndPassword(email, password);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRmlyZWJhc2VBdXRoQ29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJ1c2VSZWR1eEZldGNoIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZpcmViYXNlQXV0aENvbXBvbmVudCIsImxvZ2dlZGluIiwidXNlRmlyZWJhc2VMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25PdXQiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dvdXQiLCJhbGxEZWxldGUiLCJ1c2VTdGF0ZSIsInNldExvZ2dlZGluIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwidXNlRWZmZWN0Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInVzZXJJZENoZWNrIiwiY29uc29sZSIsImxvZyIsInVpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFNBQU9ELFFBQVA7QUFDSCxDQUhELEMsQ0FLQTs7O0dBTE1ELGE7VUFDZUUsdUQ7OztBQUtOLFNBQVNDLHFCQUFULEdBQWlDO0FBQUE7O0FBQzVDLE1BQU1DLFFBQVEsR0FBR0MsZ0JBQWdCLEVBQWpDO0FBQ0EsTUFBTUosUUFBUSxHQUFHRCxhQUFhLEVBQTlCOztBQUNBLE1BQUksQ0FBQ0ksUUFBTCxFQUFlO0FBQ1g7QUFDQSxXQUFPO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUUsZUFBZSxFQUFyQjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVA7QUFDSCxHQU4yQyxDQU81Qzs7O0FBQ0EsU0FBTztBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1DLE9BQU8sQ0FBQ04sUUFBRCxDQUFiO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FBUDtBQUNILEMsQ0FFRDs7SUFYd0JFLHFCO1VBQ0hFLGdCLEVBQ0FMLGE7OztLQUZHRyxxQjtBQVlqQixJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDakM7QUFDQSxNQUFNRSxrQkFBa0IsR0FBRyxJQUFJQyxzREFBUSxDQUFDQyxJQUFULENBQWNDLGtCQUFsQixFQUEzQixDQUZpQyxDQUlqQztBQUNBO0FBQ0E7O0FBQ0EsU0FBT0Ysc0RBQVEsQ0FBQ0MsSUFBVCxHQUFnQkosZUFBaEIsQ0FBZ0NFLGtCQUFoQyxDQUFQO0FBQ0gsQ0FSTTtBQVVBLElBQU1JLDBCQUEwQixHQUFDLFNBQTNCQSwwQkFBMkIsQ0FBQ0MsS0FBRCxFQUFlQyxRQUFmLEVBQWlDO0FBQ3JFLFNBQU9MLHNEQUFRLENBQUNDLElBQVQsR0FBZ0JFLDBCQUFoQixDQUEyQ0MsS0FBM0MsRUFBa0RDLFFBQWxELENBQVA7QUFDSCxDQUZNLEMsQ0FJUDs7QUFDTyxJQUFNUCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDTixRQUFELEVBQTZCO0FBQ2hEO0FBQ0E7QUFDQUEsVUFBUSxDQUFDYyxrRUFBTSxFQUFQLENBQVI7QUFDQWQsVUFBUSxDQUFDZSxzRUFBUyxFQUFWLENBQVI7QUFDQSxTQUFPUCxzREFBUSxDQUFDQyxJQUFULEdBQWdCSCxPQUFoQixFQUFQO0FBQ0gsQ0FOTSxDLENBUVA7O0FBQ0EsSUFBTUYsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQzNCO0FBRDJCLGtCQUVLWSxzREFBUSxDQUFDLEtBQUQsQ0FGYjtBQUFBLE1BRXBCYixRQUZvQjtBQUFBLE1BRVZjLFdBRlU7O0FBRzNCLE1BQU1qQixRQUFRLEdBQUdELGFBQWEsRUFBOUI7O0FBSDJCLHFCQUtGbUIsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBc0JBLEtBQUssQ0FBQ0MsS0FBNUI7QUFBQSxHQUFELENBTFQ7QUFBQSxNQUtuQkMsWUFMbUIsZ0JBS25CQSxZQUxtQjs7QUFPM0JDLHlEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0FkLDBEQUFRLENBQUNDLElBQVQsR0FBZ0JjLGtCQUFoQixDQUFtQyxVQUFDQyxJQUFELEVBQVU7QUFDekM7QUFDQSxVQUFJQyxXQUFKO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVksQ0FBQyxDQUFDSCxJQUFkOztBQUNBLFVBQUksQ0FBQyxDQUFDQSxJQUFOLEVBQVk7QUFDUkMsbUJBQVcsR0FBR0QsSUFBSSxDQUFDSSxHQUFuQixDQURRLENBRVI7QUFDQTtBQUNBOztBQUNBRixlQUFPLENBQUNDLEdBQVIsQ0FBWSx3Q0FBWixFQUxRLENBTVI7QUFDQTtBQUNBO0FBQ0g7O0FBRURWLGlCQUFXLENBQUMsQ0FBQyxDQUFDTyxJQUFILENBQVg7QUFDSCxLQWpCRDtBQWtCSCxHQXBCUSxFQW9CTixFQXBCTSxDQUFULENBUDJCLENBNEIzQjs7QUFDQSxTQUFPckIsUUFBUDtBQUNILENBOUJEOztJQUFNQyxnQjtVQUdlTCxhLEVBRVFtQix1RCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9TaWduSW4uZDhkM2U2ODBiMThjMmExYzA4MDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSBcIi4vZmlyZWJhc2VUZXN0XCI7XHJcbmltcG9ydCB7IGxvZ2luLCBsb2dvdXQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy91c2VyTW9kdWxlXCI7XHJcbmltcG9ydCB7IGluaXQsIGFsbERlbGV0ZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaEFsbERhdGEgfSBmcm9tIFwiLi9EQkZldGNoXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IHVzZVJlZHV4RmV0Y2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2g7XHJcbn07XHJcblxyXG4vLyDjg63jgrDjgqTjg7PjgIHjg63jgrDjgqLjgqbjg4jjg5zjgr/jg7Plrp/oo4VcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlyZWJhc2VBdXRoQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgbG9nZ2VkaW4gPSB1c2VGaXJlYmFzZUxvZ2luKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZVJlZHV4RmV0Y2goKTtcclxuICAgIGlmICghbG9nZ2VkaW4pIHtcclxuICAgICAgICAvLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgarjgZHjgozjgbDjg63jgrDjgqTjg7Pjg5zjgr/jg7PjgpLooajnpLpcclxuICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW5XaXRoUG9wdXAoKX0+44Ot44Kw44Kk44OzPC9idXR0b24+O1xyXG4gICAgfVxyXG4gICAgLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44KL44Gq44KJ44Ot44Kw44Ki44Km44OI44Oc44K/44Oz44KS6KGo56S6XHJcbiAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KGRpc3BhdGNoKX0+44Ot44Kw44Ki44Km44OIPC9idXR0b24+O1xyXG59XHJcblxyXG4vLyDjg63jgrDjgqTjg7Plh6bnkIZcclxuZXhwb3J0IGNvbnN0IHNpZ25JbldpdGhQb3B1cCA9ICgpID0+IHtcclxuICAgIC8vIEdvb2dsZeODl+ODreODkOOCpOODgOOCquODluOCuOOCp+OCr+ODiOOBruOCpOODs+OCueOCv+ODs+OCueOCkuS9nOaIkFxyXG4gICAgY29uc3QgZ29vZ2xlQXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG4gICAgLy8gZGlzcGF0Y2gobG9naW4odXNlcklkQ2hlY2spKTtcclxuICAgIC8vIOWIpeOCv+ODluOBp+ODreOCsOOCpOODs+eUu+mdouOBq+mjm+OBsOOBl+OBn+OBhOOBn+OCgeOAgXNpZ25JbldpdGhQb3B1cOOCkuS9v+OBhlxyXG4gICAgLy8g44Oq44OA44Kk44Os44Kv44OI44Gn44Ot44Kw44Kk44Oz55S76Z2i44Gr6aOb44Gw44GX44Gf44GE5aC05ZCI44Gvc2lnbkluV2l0aFJlZGlyZWN044KS5L2/44GGXHJcbiAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChnb29nbGVBdXRoUHJvdmlkZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkPShlbWFpbDpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZyk9PntcclxuICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxufVxyXG5cclxuLy8g44Ot44Kw44Ki44Km44OI5Yem55CGXHJcbmV4cG9ydCBjb25zdCBzaWduT3V0ID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxhbnk+KSA9PiB7XHJcbiAgICAvLyBzaWduT3V044KS5ZG844Gz5Ye644GZ44Gg44GR44GnT0tcclxuICAgIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlUmVkdXhGZXRjaCgpO1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0KCkpO1xyXG4gICAgZGlzcGF0Y2goYWxsRGVsZXRlKCkpO1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XHJcbn07XHJcblxyXG4vLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgovjgYvjg4Hjgqfjg4Pjgq/jgZnjgovjgqvjgrnjgr/jg6Djg5Xjg4Pjgq/jgpLkvZzjgotcclxuY29uc3QgdXNlRmlyZWJhc2VMb2dpbiA9ICgpID0+IHtcclxuICAgIC8vIHN0YXRl44Gn44Ot44Kw44Kk44Oz54q25oWL44KS5L+d5oyBXHJcbiAgICBjb25zdCBbbG9nZ2VkaW4sIHNldExvZ2dlZGluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlUmVkdXhGZXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g54++5Zyo44Ot44Kw44Kk44Oz44GX44Gm44GE44KL44Om44O844K244KS5Y+W5b6XXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAvLyDjg6bjg7zjgrbmg4XloLHjgYzlj5bjgozjgozjgbDjg63jgrDjgqTjg7PnirbmhYtcclxuICAgICAgICAgICAgbGV0IHVzZXJJZENoZWNrOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGQUMgISF1c2VyJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCEhdXNlcik7XHJcbiAgICAgICAgICAgIGlmICghIXVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZENoZWNrID0gdXNlci51aWQ7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaChpbml0KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGQUMgdXNlclRhc2tJbmZvLmNhbGVuZGFyWzBdLlBhdHRlcm5JZCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlclRhc2tJbmZvLmNhbGVuZGFyWzBdLlBhdHRlcm5JZCk7XHJcbiAgICAgICAgICAgICAgICAvLyDjgZPjgozjgpJyZWR1eOOBp+euoeeQhuOBmeOCi1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2gobG9naW4odXNlcklkQ2hlY2spKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0TG9nZ2VkaW4oISF1c2VyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIOODreOCsOOCpOODs+aDheWgseOCkui/lOWNtFxyXG4gICAgcmV0dXJuIGxvZ2dlZGluO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9