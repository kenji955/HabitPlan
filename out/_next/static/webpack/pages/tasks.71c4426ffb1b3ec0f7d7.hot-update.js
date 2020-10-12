webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/components/test/firebaseTest/DBFetch.tsx":
/*!******************************************************!*\
  !*** ./src/components/test/firebaseTest/DBFetch.tsx ***!
  \******************************************************/
/*! exports provided: useFetchAllData, useRegisterData, useUpdateData, useDelteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchAllData", function() { return useFetchAllData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterData", function() { return useRegisterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateData", function() { return useUpdateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDelteData", function() { return useDelteData; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebaseTest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");


var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$(),
    _s7 = $RefreshSig$(),
    _s8 = $RefreshSig$(),
    _s9 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// データベースへの接続
// import firebase from "firebase/app";
// 認証周りやDB周りで必要なためimportしておく



 // カスタムフックにしておく

var useDatabase = function useDatabase() {
  _s();

  // 同じパスでは毎回同じ結果が得られるのでmemo化しておく
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return _firebaseTest__WEBPACK_IMPORTED_MODULE_4__["firebase"].database().ref("/sample");
  }, []);
}; //   データを取得する
// hooksを使いたいのでカスタムhooksにしておく


_s(useDatabase, "nwk+m61qLgjDVUp4IGV/072DDN4=");

var useFetchData = function useFetchData(ref) {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // イベントリスナーを追加するにはonを使う
    ref.on("value", function (snapshot) {
      // パスに対する全データを含むsnapshotが渡される
      // ない場合はnullが変えるので存在をチェックしておく
      if (snapshot === null || snapshot === void 0 ? void 0 : snapshot.val()) {
        setData(snapshot.val());
      }
    });
    return function () {
      ref.off();
    }; // refの変更に応じて再取得する
    //   指定したパスのデータに対する更新をすべて検知するにはvalueを指定すれば良い。
  }, [ref]); // データを返却する

  return {
    data: data
  };
}; // 実際に呼び出す際はこちらを使う


_s2(useFetchData, "WZ2PO9A64oHRexE1CE+yX3ebuoA=");

var useFetchAllData = function useFetchAllData() {
  _s3();

  // refを取得して
  var ref = useDatabase(); // ref渡してデータを取得する

  return useFetchData(ref);
}; // 登録処理
// この登録はsetに渡した値での登録となる。
// つまり、既存のデータも含めて渡してあげないと登録済みのデータが消える。

_s3(useFetchAllData, "MTgaLcAFZwYAI7SeegXrbygttSE=", false, function () {
  return [useDatabase, useFetchData];
});

var useSetDocument = function useSetDocument(ref) {
  _s4();

  var updateDocument = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (document) {
    // refについては前回の記事参照
    // setに登録したいデータを渡してあげれば登録できる
    ref.set(document);
  }, [ref]);
  return updateDocument;
};

_s4(useSetDocument, "qaGV0QmFp1ymR0Bb3SGaH/D9rrQ=");

var useRegisterData = function useRegisterData() {
  _s5();

  // 前回作ったuseDatabase()を使いref取得
  var ref = useDatabase();
  var setDocument = useSetDocument(ref); // 登録済みのデータを全部取得する

  var _useFetchAllData = useFetchAllData(),
      registeredData = _useFetchAllData.data; // データを登録する関数を返却する


  var registerData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (registerData) {
    // 既存のデータと登録するkey-valueを合わせて登録関数に渡す
    setDocument(_objectSpread(_objectSpread({}, registeredData), registerData));
  }, [setDocument, registeredData]); // 返した関数を利用することで、登録済みデータ全て+登録したいデータをDBに保管できる

  return registerData;
}; // 更新処理

_s5(useRegisterData, "N8gQpl+T+6MHF8HSskGGuA7k+P4=", false, function () {
  return [useDatabase, useSetDocument, useFetchAllData];
});

var useUpdateDocument = function useUpdateDocument(ref) {
  _s6();

  // ref.updateがObjectを受け取るので、Objectを引数に取る関数を定義
  var updateDocument = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (document) {
    return ref.update(document);
  }, [ref]);
  return updateDocument;
};

_s6(useUpdateDocument, "qaGV0QmFp1ymR0Bb3SGaH/D9rrQ=");

var useUpdateData = function useUpdateData() {
  _s7();

  // setの時と同じくrefを取得して、
  var ref = useDatabase(); // 関数呼び出して

  var updateDocument = useUpdateDocument(ref); // 更新処理を作成する

  var updateData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (registerData) {
    updateDocument(registerData);
  }, [updateDocument]);
  return updateData;
}; // 削除処理

_s7(useUpdateData, "E7cH9nA53VFPMj6IFYEiaC0AwAg=", false, function () {
  return [useDatabase, useUpdateDocument];
});

var useRemoveDocument = function useRemoveDocument(ref) {
  _s8();

  // 特に引数が必要ないのでただ呼び出すのみ
  var deleteDocument = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (document) {
    return ref.child(document).remove();
  }, [ref]);
  return deleteDocument;
}; // set、updateと同じなので割愛


_s8(useRemoveDocument, "W4gOmK1JX32OHf5MbRd+Y53zEjs=");

var useDelteData = function useDelteData() {
  _s9();

  var ref = useDatabase();
  var removeDocument = useRemoveDocument(ref);
  var deleteData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (deleteData) {
    return removeDocument(deleteData);
  }, [removeDocument]);
  return deleteData;
};

_s9(useDelteData, "gVsZ210xyBvGL4VGv9rznJUaaCc=", false, function () {
  return [useDatabase, useRemoveDocument];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvREJGZXRjaC50c3giXSwibmFtZXMiOlsidXNlRGF0YWJhc2UiLCJ1c2VNZW1vIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsInVzZUZldGNoRGF0YSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJvbiIsInNuYXBzaG90IiwidmFsIiwib2ZmIiwidXNlRmV0Y2hBbGxEYXRhIiwidXNlU2V0RG9jdW1lbnQiLCJ1cGRhdGVEb2N1bWVudCIsInVzZUNhbGxiYWNrIiwiZG9jdW1lbnQiLCJzZXQiLCJ1c2VSZWdpc3RlckRhdGEiLCJzZXREb2N1bWVudCIsInJlZ2lzdGVyZWREYXRhIiwicmVnaXN0ZXJEYXRhIiwidXNlVXBkYXRlRG9jdW1lbnQiLCJ1cGRhdGUiLCJ1c2VVcGRhdGVEYXRhIiwidXBkYXRlRGF0YSIsInVzZVJlbW92ZURvY3VtZW50IiwiZGVsZXRlRG9jdW1lbnQiLCJjaGlsZCIsInJlbW92ZSIsInVzZURlbHRlRGF0YSIsInJlbW92ZURvY3VtZW50IiwiZGVsZXRlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUtBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEI7QUFDQSxTQUFPQyxxREFBTyxDQUFDO0FBQUEsV0FBTUMsc0RBQVEsQ0FBQ0MsUUFBVCxHQUFvQkMsR0FBcEIsQ0FBd0IsU0FBeEIsQ0FBTjtBQUFBLEdBQUQsRUFBMkMsRUFBM0MsQ0FBZDtBQUNILENBSEQsQyxDQUtBO0FBQ0E7OztHQU5NSixXOztBQU9OLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNELEdBQUQsRUFBc0M7QUFBQTs7QUFBQSxrQkFDL0JFLHNEQUFRLEVBRHVCO0FBQUEsTUFD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QUFQO0FBQ0QsQ0FWTSxDLENBY1A7O0lBZGFELGE7VUFFRzFCLFcsRUFFU3dCLGlCOzs7QUFXekIsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDeEIsR0FBRCxFQUFzQztBQUFBOztBQUM1RDtBQUNGLE1BQU15QixjQUFjLEdBQUdaLHlEQUFXLENBQUMsVUFBQ0MsUUFBRDtBQUFBLFdBQXNCZCxHQUFHLENBQUMwQixLQUFKLENBQVVaLFFBQVYsRUFBb0JhLE1BQXBCLEVBQXRCO0FBQUEsR0FBRCxFQUFxRCxDQUFDM0IsR0FBRCxDQUFyRCxDQUFsQztBQUNBLFNBQU95QixjQUFQO0FBQ0QsQ0FKRCxDLENBS0E7OztJQUxNRCxpQjs7QUFNQyxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ2hDLE1BQU01QixHQUFHLEdBQUdKLFdBQVcsRUFBdkI7QUFDQSxNQUFNaUMsY0FBYyxHQUFHTCxpQkFBaUIsQ0FBQ3hCLEdBQUQsQ0FBeEM7QUFDQSxNQUFNOEIsVUFBVSxHQUFHakIseURBQVcsQ0FBQyxVQUFDaUIsVUFBRDtBQUFBLFdBQXdCRCxjQUFjLENBQUNDLFVBQUQsQ0FBdEM7QUFBQSxHQUFELEVBQXFELENBQUNELGNBQUQsQ0FBckQsQ0FBOUI7QUFDQSxTQUFPQyxVQUFQO0FBQ0QsQ0FMTTs7SUFBTUYsWTtVQUNDaEMsVyxFQUNXNEIsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MuNzFjNDQyNmZmYjFiM2VjMGY3ZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOODh+ODvOOCv+ODmeODvOOCueOBuOOBruaOpee2mlxyXG5cclxuLy8gaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuLy8g6KqN6Ki85ZGo44KK44KERELlkajjgorjgaflv4XopoHjgarjgZ/jgoFpbXBvcnTjgZfjgabjgYrjgY9cclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtmaXJlYmFzZX0gZnJvbSAnLi9maXJlYmFzZVRlc3QnO1xyXG5cclxuXHJcbi8vIOOCq+OCueOCv+ODoOODleODg+OCr+OBq+OBl+OBpuOBiuOBj1xyXG5jb25zdCB1c2VEYXRhYmFzZSA9ICgpID0+IHtcclxuICAgIC8vIOWQjOOBmOODkeOCueOBp+OBr+avjuWbnuWQjOOBmOe1kOaenOOBjOW+l+OCieOCjOOCi+OBruOBp21lbW/ljJbjgZfjgabjgYrjgY9cclxuICAgIHJldHVybiB1c2VNZW1vKCgpID0+IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwiL3NhbXBsZVwiKSwgW10pO1xyXG59O1xyXG5cclxuLy8gICDjg4fjg7zjgr/jgpLlj5blvpfjgZnjgotcclxuLy8gaG9va3PjgpLkvb/jgYTjgZ/jgYTjga7jgafjgqvjgrnjgr/jg6Bob29rc+OBq+OBl+OBpuOBiuOBj1xyXG5jb25zdCB1c2VGZXRjaERhdGEgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0+KCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIOOCpOODmeODs+ODiOODquOCueODiuODvOOCkui/veWKoOOBmeOCi+OBq+OBr29u44KS5L2/44GGXHJcbiAgICAgICAgcmVmLm9uKFwidmFsdWVcIiwgKHNuYXBzaG90OmFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyDjg5Hjgrnjgavlr77jgZnjgovlhajjg4fjg7zjgr/jgpLlkKvjgoBzbmFwc2hvdOOBjOa4oeOBleOCjOOCi1xyXG4gICAgICAgICAgICAvLyDjgarjgYTloLTlkIjjga9udWxs44GM5aSJ44GI44KL44Gu44Gn5a2Y5Zyo44KS44OB44Kn44OD44Kv44GX44Gm44GK44GPXHJcbiAgICAgICAgICAgIGlmIChzbmFwc2hvdD8udmFsKCkpIHtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcmVmLm9mZigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gcmVm44Gu5aSJ5pu044Gr5b+c44GY44Gm5YaN5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgLy8gICDmjIflrprjgZfjgZ/jg5Hjgrnjga7jg4fjg7zjgr/jgavlr77jgZnjgovmm7TmlrDjgpLjgZnjgbnjgabmpJznn6XjgZnjgovjgavjga92YWx1ZeOCkuaMh+WumuOBmeOCjOOBsOiJr+OBhOOAglxyXG4gICAgfSwgW3JlZl0pO1xyXG4gICAgLy8g44OH44O844K/44KS6L+U5Y2044GZ44KLXHJcbiAgICByZXR1cm4geyBkYXRhIH07XHJcbn07XHJcblxyXG4vLyDlrp/pmpvjgavlkbzjgbPlh7rjgZnpmpvjga/jgZPjgaHjgonjgpLkvb/jgYZcclxuZXhwb3J0IGNvbnN0IHVzZUZldGNoQWxsRGF0YSA9ICgpID0+IHtcclxuICAgIC8vIHJlZuOCkuWPluW+l+OBl+OBplxyXG4gICAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICAgIC8vIHJlZua4oeOBl+OBpuODh+ODvOOCv+OCkuWPluW+l+OBmeOCi1xyXG4gICAgcmV0dXJuIHVzZUZldGNoRGF0YShyZWYpO1xyXG59O1xyXG5cclxuLy8g55m76Yyy5Yem55CGXHJcbi8vIOOBk+OBrueZu+mMsuOBr3NldOOBq+a4oeOBl+OBn+WApOOBp+OBrueZu+mMsuOBqOOBquOCi+OAglxyXG4vLyDjgaTjgb7jgorjgIHml6LlrZjjga7jg4fjg7zjgr/jgoLlkKvjgoHjgabmuKHjgZfjgabjgYLjgZLjgarjgYTjgajnmbvpjLLmuIjjgb/jga7jg4fjg7zjgr/jgYzmtojjgYjjgovjgIJcclxuY29uc3QgdXNlU2V0RG9jdW1lbnQgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZURvY3VtZW50ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgIChkb2N1bWVudDogdW5rbm93bikgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIHJlZuOBq+OBpOOBhOOBpuOBr+WJjeWbnuOBruiomOS6i+WPgueFp1xyXG4gICAgICAgICAgICAgIC8vIHNldOOBq+eZu+mMsuOBl+OBn+OBhOODh+ODvOOCv+OCkua4oeOBl+OBpuOBguOBkuOCjOOBsOeZu+mMsuOBp+OBjeOCi1xyXG4gICAgICAgIHJlZi5zZXQoZG9jdW1lbnQpO1xyXG4gICAgICB9LCBbcmVmXVxyXG4gICAgKTtcclxuICAgIHJldHVybiB1cGRhdGVEb2N1bWVudDtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCB1c2VSZWdpc3RlckRhdGEgPSAoKSA9PiB7XHJcbiAgICAgIC8vIOWJjeWbnuS9nOOBo+OBn3VzZURhdGFiYXNlKCnjgpLkvb/jgYRyZWblj5blvpdcclxuICAgIGNvbnN0IHJlZiA9IHVzZURhdGFiYXNlKCk7XHJcbiAgICBjb25zdCBzZXREb2N1bWVudCA9IHVzZVNldERvY3VtZW50KHJlZik7XHJcbiAgICAgIC8vIOeZu+mMsua4iOOBv+OBruODh+ODvOOCv+OCkuWFqOmDqOWPluW+l+OBmeOCi1xyXG4gICAgY29uc3Qge2RhdGE6IHJlZ2lzdGVyZWREYXRhfSA9IHVzZUZldGNoQWxsRGF0YSgpO1xyXG4gIFxyXG4gICAgICAvLyDjg4fjg7zjgr/jgpLnmbvpjLLjgZnjgovplqLmlbDjgpLov5TljbTjgZnjgotcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IHVzZUNhbGxiYWNrKChyZWdpc3RlckRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICAgIC8vIOaXouWtmOOBruODh+ODvOOCv+OBqOeZu+mMsuOBmeOCi2tleS12YWx1ZeOCkuWQiOOCj+OBm+OBpueZu+mMsumWouaVsOOBq+a4oeOBmVxyXG4gICAgICBzZXREb2N1bWVudCh7Li4ucmVnaXN0ZXJlZERhdGEsIC4uLnJlZ2lzdGVyRGF0YX0pO1xyXG4gICAgfSwgW3NldERvY3VtZW50LCByZWdpc3RlcmVkRGF0YV0pO1xyXG4gIFxyXG4gICAgLy8g6L+U44GX44Gf6Zai5pWw44KS5Yip55So44GZ44KL44GT44Go44Gn44CB55m76Yyy5riI44G/44OH44O844K/5YWo44GmK+eZu+mMsuOBl+OBn+OBhOODh+ODvOOCv+OCkkRC44Gr5L+d566h44Gn44GN44KLXHJcbiAgICByZXR1cm4gcmVnaXN0ZXJEYXRhO1xyXG4gIH07XHJcblxyXG5cclxuXHJcbi8vIOabtOaWsOWHpueQhlxyXG4gIGNvbnN0IHVzZVVwZGF0ZURvY3VtZW50ID0gKHJlZjogZmlyZWJhc2UuZGF0YWJhc2UuUmVmZXJlbmNlKSA9PiB7XHJcbiAgICAvLyByZWYudXBkYXRl44GMT2JqZWN044KS5Y+X44GR5Y+W44KL44Gu44Gn44CBT2JqZWN044KS5byV5pWw44Gr5Y+W44KL6Zai5pWw44KS5a6a576pXHJcbiAgY29uc3QgdXBkYXRlRG9jdW1lbnQgPSB1c2VDYWxsYmFjaygoZG9jdW1lbnQ6IE9iamVjdCkgPT4gcmVmLnVwZGF0ZShkb2N1bWVudCksIFtyZWZdKTtcclxuICByZXR1cm4gdXBkYXRlRG9jdW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VVcGRhdGVEYXRhID0gKCkgPT4ge1xyXG4gIC8vIHNldOOBruaZguOBqOWQjOOBmOOBj3JlZuOCkuWPluW+l+OBl+OBpuOAgVxyXG4gICAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICAgIC8vIOmWouaVsOWRvOOBs+WHuuOBl+OBplxyXG4gIGNvbnN0IHVwZGF0ZURvY3VtZW50ID0gdXNlVXBkYXRlRG9jdW1lbnQocmVmKTtcclxuICAgIC8vIOabtOaWsOWHpueQhuOCkuS9nOaIkOOBmeOCi1xyXG4gIGNvbnN0IHVwZGF0ZURhdGEgPSB1c2VDYWxsYmFjaygocmVnaXN0ZXJEYXRhOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkgPT4ge1xyXG4gICAgdXBkYXRlRG9jdW1lbnQocmVnaXN0ZXJEYXRhKTtcclxuICB9LCBbdXBkYXRlRG9jdW1lbnRdKTtcclxuICByZXR1cm4gdXBkYXRlRGF0YTtcclxufVxyXG5cclxuXHJcblxyXG4vLyDliYrpmaTlh6bnkIZcclxuY29uc3QgdXNlUmVtb3ZlRG9jdW1lbnQgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIC8vIOeJueOBq+W8leaVsOOBjOW/heimgeOBquOBhOOBruOBp+OBn+OBoOWRvOOBs+WHuuOBmeOBruOBv1xyXG4gIGNvbnN0IGRlbGV0ZURvY3VtZW50ID0gdXNlQ2FsbGJhY2soKGRvY3VtZW50OiBzdHJpbmcpID0+IHJlZi5jaGlsZChkb2N1bWVudCkucmVtb3ZlKCksIFtyZWZdKTtcclxuICByZXR1cm4gZGVsZXRlRG9jdW1lbnQ7XHJcbn1cclxuLy8gc2V044CBdXBkYXRl44Go5ZCM44GY44Gq44Gu44Gn5Ymy5oSbXHJcbmV4cG9ydCBjb25zdCB1c2VEZWx0ZURhdGEgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICBjb25zdCByZW1vdmVEb2N1bWVudCA9IHVzZVJlbW92ZURvY3VtZW50KHJlZik7XHJcbiAgY29uc3QgZGVsZXRlRGF0YSA9IHVzZUNhbGxiYWNrKChkZWxldGVEYXRhOiBzdHJpbmcpID0+IHJlbW92ZURvY3VtZW50KGRlbGV0ZURhdGEpLCBbcmVtb3ZlRG9jdW1lbnRdKVxyXG4gIHJldHVybiBkZWxldGVEYXRhO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==