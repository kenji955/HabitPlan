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
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _firebaseTest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");
var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$(),
    _s7 = $RefreshSig$(),
    _s8 = $RefreshSig$(),
    _s9 = $RefreshSig$(),
    _s10 = $RefreshSig$();

// データベースへの接続
// import firebase from "firebase/app";
// 認証周りやDB周りで必要なためimportしておく






var useReduxFetch = function useReduxFetch() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  return dispatch;
}; // カスタムフックにしておく


_s(useReduxFetch, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

var useDatabase = function useDatabase() {
  _s2();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      userId = _useSelector.userId; // 同じパスでは毎回同じ結果が得られるのでmemo化しておく
  // return useMemo(() => firebase.database().ref("/sample"), []);


  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return _firebaseTest__WEBPACK_IMPORTED_MODULE_4__["firebase"].database().ref("/users/" + userId);
  }, []);
}; //   データを取得する
// hooksを使いたいのでカスタムhooksにしておく


_s2(useDatabase, "nsE9a7rMM9nU/sPNgSjVmudEVRI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

var useFetchData = function useFetchData(ref) {
  _s3();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // イベントリスナーを追加するにはonを使う
    ref.on("value", function (snapshot) {
      // パスに対する全データを含むsnapshotが渡される
      // ない場合はnullが返るので存在をチェックしておく
      if (snapshot === null || snapshot === void 0 ? void 0 : snapshot.val()) {
        setData(snapshot.val());
      }
    });
    return function () {
      ref.off();
    }; // refの変更に応じて再取得する
    //   指定したパスのデータに対する更新をすべて検知するにはvalueを指定すれば良い。
  }, ["value"]); // データを返却する

  console.log("data");
  console.log(data);
  return {
    data: data
  };
}; // 実際に呼び出す際はこちらを使う


_s3(useFetchData, "WZ2PO9A64oHRexE1CE+yX3ebuoA=");

var useFetchAllData = function useFetchAllData() {
  _s4();

  // refを取得して
  var ref = useDatabase(); // ref渡してデータを取得する

  return useFetchData(ref);
}; // 登録処理
// この登録はsetに渡した値での登録となる。
// つまり、既存のデータも含めて渡してあげないと登録済みのデータが消える。


_s4(useFetchAllData, "MTgaLcAFZwYAI7SeegXrbygttSE=", false, function () {
  return [useDatabase, useFetchData];
});

var useSetDocument = function useSetDocument(ref) {
  _s5();

  var updateDocument = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (document) {
    // refについては前回の記事参照
    // setに登録したいデータを渡してあげれば登録できる
    ref.set(document);
  }, [ref]);
  return updateDocument;
};

_s5(useSetDocument, "qaGV0QmFp1ymR0Bb3SGaH/D9rrQ=");

var useRegisterData = function useRegisterData() {
  _s6();

  // 前回作ったuseDatabase()を使いref取得
  var ref = useDatabase();
  var setDocument = useSetDocument(ref); // 登録済みのデータを全部取得する

  var _useFetchAllData = useFetchAllData(),
      registeredData = _useFetchAllData.data;

  var dispatch = useReduxFetch();

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector2.userTaskInfo;

  console.log(userTaskInfo); // データを登録する関数を返却する
  // 可能であればここの処理はそのままにして、引数でsteteを更新する処理を先に行いたい

  var registerData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])( // (registerData: userTask) => {
  function () {
    // ここでReduxに保管しているstateを更新する？
    // dispatch(Register({ ...registerData }));
    // 既存のデータと登録するkey-valueを合わせて登録関数に渡す
    // setDocument({ ...registeredData, ...registerData });
    setDocument(userTaskInfo);
  }, [setDocument, registeredData]); // 返した関数を利用することで、登録済みデータ全て+登録したいデータをDBに保管できる

  return registerData;
}; // 更新処理


_s6(useRegisterData, "aj9Tj242KO6zMHHJGzOzzPjWOkw=", false, function () {
  return [useDatabase, useSetDocument, useFetchAllData, useReduxFetch, react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

var useUpdateDocument = function useUpdateDocument(ref) {
  _s7();

  // ref.updateがObjectを受け取るので、Objectを引数に取る関数を定義
  var updateDocument = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (document) {
    return ref.update(document);
  }, [ref]);
  return updateDocument;
};

_s7(useUpdateDocument, "qaGV0QmFp1ymR0Bb3SGaH/D9rrQ=");

var useUpdateData = function useUpdateData() {
  _s8();

  // setの時と同じくrefを取得して、
  var ref = useDatabase(); // 関数呼び出して

  var updateDocument = useUpdateDocument(ref); // 更新処理を作成する

  var updateData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (registerData) {
    updateDocument(registerData);
  }, [updateDocument]);
  return updateData;
}; // 削除処理


_s8(useUpdateData, "E7cH9nA53VFPMj6IFYEiaC0AwAg=", false, function () {
  return [useDatabase, useUpdateDocument];
});

var useRemoveDocument = function useRemoveDocument(ref) {
  _s9();

  // 特に引数が必要ないのでただ呼び出すのみ
  var deleteDocument = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (document) {
    return ref.child(document).remove();
  }, [ref]);
  return deleteDocument;
}; // set、updateと同じなので割愛


_s9(useRemoveDocument, "W4gOmK1JX32OHf5MbRd+Y53zEjs=");

var useDelteData = function useDelteData() {
  _s10();

  var ref = useDatabase();
  var removeDocument = useRemoveDocument(ref);
  var deleteData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (deleteData) {
    return removeDocument(deleteData);
  }, [removeDocument]);
  return deleteData;
};

_s10(useDelteData, "gVsZ210xyBvGL4VGv9rznJUaaCc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvREJGZXRjaC50c3giXSwibmFtZXMiOlsidXNlUmVkdXhGZXRjaCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VEYXRhYmFzZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlcklkIiwidXNlTWVtbyIsImZpcmViYXNlIiwiZGF0YWJhc2UiLCJyZWYiLCJ1c2VGZXRjaERhdGEiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0Iiwib24iLCJzbmFwc2hvdCIsInZhbCIsIm9mZiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VGZXRjaEFsbERhdGEiLCJ1c2VTZXREb2N1bWVudCIsInVwZGF0ZURvY3VtZW50IiwidXNlQ2FsbGJhY2siLCJkb2N1bWVudCIsInNldCIsInVzZVJlZ2lzdGVyRGF0YSIsInNldERvY3VtZW50IiwicmVnaXN0ZXJlZERhdGEiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsInJlZ2lzdGVyRGF0YSIsInVzZVVwZGF0ZURvY3VtZW50IiwidXBkYXRlIiwidXNlVXBkYXRlRGF0YSIsInVwZGF0ZURhdGEiLCJ1c2VSZW1vdmVEb2N1bWVudCIsImRlbGV0ZURvY3VtZW50IiwiY2hpbGQiLCJyZW1vdmUiLCJ1c2VEZWx0ZURhdGEiLCJyZW1vdmVEb2N1bWVudCIsImRlbGV0ZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7QUFVQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFNBQU9ELFFBQVA7QUFDSCxDQUhELEMsQ0FLQTs7O0dBTE1ELGE7VUFDZUUsdUQ7OztBQUtyQixJQUFNQyxXQUFXLEdBQUcsU0FB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LEdBRDhCLEVBRTlCLENBQUMvQixHQUFELENBRjhCLENBQWxDO0FBSUEsU0FBTzZCLGNBQVA7QUFDSCxDQVBELEMsQ0FRQTs7O0lBUk1ELGlCOztBQVNOLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDdkIsTUFBTWhDLEdBQUcsR0FBR1IsV0FBVyxFQUF2QjtBQUNBLE1BQU15QyxjQUFjLEdBQUdMLGlCQUFpQixDQUFDNUIsR0FBRCxDQUF4QztBQUNBLE1BQU1rQyxVQUFVLEdBQUduQix5REFBVyxDQUMxQixVQUFDbUIsVUFBRDtBQUFBLFdBQXdCRCxjQUFjLENBQUNDLFVBQUQsQ0FBdEM7QUFBQSxHQUQwQixFQUUxQixDQUFDRCxjQUFELENBRjBCLENBQTlCO0FBSUEsU0FBT0MsVUFBUDtBQUNILENBUkQ7O0tBQU1GLFk7VUFDVXhDLFcsRUFDV29DLGlCOzs7QUFRM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MuOWM3ZmQwNzE0MzQyMTcwMTA2MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOODh+ODvOOCv+ODmeODvOOCueOBuOOBruaOpee2mlxyXG5cclxuLy8gaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuLy8g6KqN6Ki85ZGo44KK44KERELlkajjgorjgaflv4XopoHjgarjgZ/jgoFpbXBvcnTjgZfjgabjgYrjgY9cclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSBcIi4vZmlyZWJhc2VUZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgY2FsZW5kYXIsXHJcbiAgICBwYXR0ZXJuLFxyXG4gICAgdGFza3MsXHJcbiAgICB1c2VyVGFzayxcclxufSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy91c2VyVGFza3NUeXBlXCI7XHJcbmltcG9ydCB7IHVzZVRhYkNvbnRleHQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5cclxuY29uc3QgdXNlUmVkdXhGZXRjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIHJldHVybiBkaXNwYXRjaDtcclxufTtcclxuXHJcbi8vIOOCq+OCueOCv+ODoOODleODg+OCr+OBq+OBl+OBpuOBiuOBj1xyXG5jb25zdCB1c2VEYXRhYmFzZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICAvLyDlkIzjgZjjg5Hjgrnjgafjga/mr47lm57lkIzjgZjntZDmnpzjgYzlvpfjgonjgozjgovjga7jgadtZW1v5YyW44GX44Gm44GK44GPXHJcbiAgICAvLyByZXR1cm4gdXNlTWVtbygoKSA9PiBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcIi9zYW1wbGVcIiksIFtdKTtcclxuICAgIHJldHVybiB1c2VNZW1vKCgpID0+IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwiL3VzZXJzL1wiICsgdXNlcklkKSwgW10pO1xyXG59O1xyXG5cclxuLy8gICDjg4fjg7zjgr/jgpLlj5blvpfjgZnjgotcclxuLy8gaG9va3PjgpLkvb/jgYTjgZ/jgYTjga7jgafjgqvjgrnjgr/jg6Bob29rc+OBq+OBl+OBpuOBiuOBj1xyXG5jb25zdCB1c2VGZXRjaERhdGEgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6L+95Yqg44GZ44KL44Gr44Gvb27jgpLkvb/jgYZcclxuICAgICAgICByZWYub24oXCJ2YWx1ZVwiLCAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyDjg5Hjgrnjgavlr77jgZnjgovlhajjg4fjg7zjgr/jgpLlkKvjgoBzbmFwc2hvdOOBjOa4oeOBleOCjOOCi1xyXG4gICAgICAgICAgICAvLyDjgarjgYTloLTlkIjjga9udWxs44GM6L+U44KL44Gu44Gn5a2Y5Zyo44KS44OB44Kn44OD44Kv44GX44Gm44GK44GPXHJcbiAgICAgICAgICAgIGlmIChzbmFwc2hvdD8udmFsKCkpIHtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcmVmLm9mZigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gcmVm44Gu5aSJ5pu044Gr5b+c44GY44Gm5YaN5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgLy8gICDmjIflrprjgZfjgZ/jg5Hjgrnjga7jg4fjg7zjgr/jgavlr77jgZnjgovmm7TmlrDjgpLjgZnjgbnjgabmpJznn6XjgZnjgovjgavjga92YWx1ZeOCkuaMh+WumuOBmeOCjOOBsOiJr+OBhOOAglxyXG4gICAgfSwgW1widmFsdWVcIl0pO1xyXG4gICAgLy8g44OH44O844K/44KS6L+U5Y2044GZ44KLXHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGFcIik7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbi8vIOWun+mam+OBq+WRvOOBs+WHuuOBmemam+OBr+OBk+OBoeOCieOCkuS9v+OBhlxyXG5jb25zdCB1c2VGZXRjaEFsbERhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyByZWbjgpLlj5blvpfjgZfjgaZcclxuICAgIGNvbnN0IHJlZiA9IHVzZURhdGFiYXNlKCk7XHJcbiAgICAvLyByZWbmuKHjgZfjgabjg4fjg7zjgr/jgpLlj5blvpfjgZnjgotcclxuICAgIHJldHVybiB1c2VGZXRjaERhdGEocmVmKTtcclxufTtcclxuXHJcbi8vIOeZu+mMsuWHpueQhlxyXG4vLyDjgZPjga7nmbvpjLLjga9zZXTjgavmuKHjgZfjgZ/lgKTjgafjga7nmbvpjLLjgajjgarjgovjgIJcclxuLy8g44Gk44G+44KK44CB5pei5a2Y44Gu44OH44O844K/44KC5ZCr44KB44Gm5rih44GX44Gm44GC44GS44Gq44GE44Go55m76Yyy5riI44G/44Gu44OH44O844K/44GM5raI44GI44KL44CCXHJcbmNvbnN0IHVzZVNldERvY3VtZW50ID0gKHJlZjogZmlyZWJhc2UuZGF0YWJhc2UuUmVmZXJlbmNlKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVEb2N1bWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChkb2N1bWVudDogdW5rbm93bikgPT4ge1xyXG4gICAgICAgICAgICAvLyByZWbjgavjgaTjgYTjgabjga/liY3lm57jga7oqJjkuovlj4LnhadcclxuICAgICAgICAgICAgLy8gc2V044Gr55m76Yyy44GX44Gf44GE44OH44O844K/44KS5rih44GX44Gm44GC44GS44KM44Gw55m76Yyy44Gn44GN44KLXHJcbiAgICAgICAgICAgIHJlZi5zZXQoZG9jdW1lbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3JlZl1cclxuICAgICk7XHJcbiAgICByZXR1cm4gdXBkYXRlRG9jdW1lbnQ7XHJcbn07XHJcblxyXG5jb25zdCB1c2VSZWdpc3RlckRhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyDliY3lm57kvZzjgaPjgZ91c2VEYXRhYmFzZSgp44KS5L2/44GEcmVm5Y+W5b6XXHJcbiAgICBjb25zdCByZWYgPSB1c2VEYXRhYmFzZSgpO1xyXG4gICAgY29uc3Qgc2V0RG9jdW1lbnQgPSB1c2VTZXREb2N1bWVudChyZWYpO1xyXG4gICAgLy8g55m76Yyy5riI44G/44Gu44OH44O844K/44KS5YWo6YOo5Y+W5b6X44GZ44KLXHJcbiAgICBjb25zdCB7IGRhdGE6IHJlZ2lzdGVyZWREYXRhIH0gPSB1c2VGZXRjaEFsbERhdGEoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlUmVkdXhGZXRjaCgpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyVGFza0luZm8pO1xyXG4gICAgLy8g44OH44O844K/44KS55m76Yyy44GZ44KL6Zai5pWw44KS6L+U5Y2044GZ44KLXHJcblxyXG4gICAgLy8g5Y+v6IO944Gn44GC44KM44Gw44GT44GT44Gu5Yem55CG44Gv44Gd44Gu44G+44G+44Gr44GX44Gm44CB5byV5pWw44Gnc3RldGXjgpLmm7TmlrDjgZnjgovlh6bnkIbjgpLlhYjjgavooYzjgYTjgZ/jgYRcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIC8vIChyZWdpc3RlckRhdGE6IHVzZXJUYXNrKSA9PiB7XHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDjgZPjgZPjgadSZWR1eOOBq+S/neeuoeOBl+OBpuOBhOOCi3N0YXRl44KS5pu05paw44GZ44KL77yfXHJcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKFJlZ2lzdGVyKHsgLi4ucmVnaXN0ZXJEYXRhIH0pKTtcclxuICAgICAgICAgICAgLy8g5pei5a2Y44Gu44OH44O844K/44Go55m76Yyy44GZ44KLa2V5LXZhbHVl44KS5ZCI44KP44Gb44Gm55m76Yyy6Zai5pWw44Gr5rih44GZXHJcbiAgICAgICAgICAgIC8vIHNldERvY3VtZW50KHsgLi4ucmVnaXN0ZXJlZERhdGEsIC4uLnJlZ2lzdGVyRGF0YSB9KTtcclxuICAgICAgICAgICAgc2V0RG9jdW1lbnQodXNlclRhc2tJbmZvKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtzZXREb2N1bWVudCwgcmVnaXN0ZXJlZERhdGFdXHJcbiAgICApO1xyXG5cclxuICAgIC8vIOi/lOOBl+OBn+mWouaVsOOCkuWIqeeUqOOBmeOCi+OBk+OBqOOBp+OAgeeZu+mMsua4iOOBv+ODh+ODvOOCv+WFqOOBpivnmbvpjLLjgZfjgZ/jgYTjg4fjg7zjgr/jgpJEQuOBq+S/neeuoeOBp+OBjeOCi1xyXG4gICAgcmV0dXJuIHJlZ2lzdGVyRGF0YTtcclxufTtcclxuXHJcbi8vIOabtOaWsOWHpueQhlxyXG5jb25zdCB1c2VVcGRhdGVEb2N1bWVudCA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgLy8gcmVmLnVwZGF0ZeOBjE9iamVjdOOCkuWPl+OBkeWPluOCi+OBruOBp+OAgU9iamVjdOOCkuW8leaVsOOBq+WPluOCi+mWouaVsOOCkuWumue+qVxyXG4gICAgY29uc3QgdXBkYXRlRG9jdW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZG9jdW1lbnQ6IE9iamVjdCkgPT4gcmVmLnVwZGF0ZShkb2N1bWVudCksXHJcbiAgICAgICAgW3JlZl1cclxuICAgICk7XHJcbiAgICByZXR1cm4gdXBkYXRlRG9jdW1lbnQ7XHJcbn07XHJcblxyXG5jb25zdCB1c2VVcGRhdGVEYXRhID0gKCkgPT4ge1xyXG4gICAgLy8gc2V044Gu5pmC44Go5ZCM44GY44GPcmVm44KS5Y+W5b6X44GX44Gm44CBXHJcbiAgICBjb25zdCByZWYgPSB1c2VEYXRhYmFzZSgpO1xyXG4gICAgLy8g6Zai5pWw5ZG844Gz5Ye644GX44GmXHJcbiAgICBjb25zdCB1cGRhdGVEb2N1bWVudCA9IHVzZVVwZGF0ZURvY3VtZW50KHJlZik7XHJcbiAgICAvLyDmm7TmlrDlh6bnkIbjgpLkvZzmiJDjgZnjgotcclxuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAocmVnaXN0ZXJEYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURvY3VtZW50KHJlZ2lzdGVyRGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbdXBkYXRlRG9jdW1lbnRdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHVwZGF0ZURhdGE7XHJcbn07XHJcblxyXG4vLyDliYrpmaTlh6bnkIZcclxuY29uc3QgdXNlUmVtb3ZlRG9jdW1lbnQgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIC8vIOeJueOBq+W8leaVsOOBjOW/heimgeOBquOBhOOBruOBp+OBn+OBoOWRvOOBs+WHuuOBmeOBruOBv1xyXG4gICAgY29uc3QgZGVsZXRlRG9jdW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZG9jdW1lbnQ6IHN0cmluZykgPT4gcmVmLmNoaWxkKGRvY3VtZW50KS5yZW1vdmUoKSxcclxuICAgICAgICBbcmVmXVxyXG4gICAgKTtcclxuICAgIHJldHVybiBkZWxldGVEb2N1bWVudDtcclxufTtcclxuLy8gc2V044CBdXBkYXRl44Go5ZCM44GY44Gq44Gu44Gn5Ymy5oSbXHJcbmNvbnN0IHVzZURlbHRlRGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlZiA9IHVzZURhdGFiYXNlKCk7XHJcbiAgICBjb25zdCByZW1vdmVEb2N1bWVudCA9IHVzZVJlbW92ZURvY3VtZW50KHJlZik7XHJcbiAgICBjb25zdCBkZWxldGVEYXRhID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGRlbGV0ZURhdGE6IHN0cmluZykgPT4gcmVtb3ZlRG9jdW1lbnQoZGVsZXRlRGF0YSksXHJcbiAgICAgICAgW3JlbW92ZURvY3VtZW50XVxyXG4gICAgKTtcclxuICAgIHJldHVybiBkZWxldGVEYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdXNlRmV0Y2hBbGxEYXRhLCB1c2VSZWdpc3RlckRhdGEsIHVzZVVwZGF0ZURhdGEsIHVzZURlbHRlRGF0YSB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9