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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _firebaseTest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");
/* harmony import */ var _modules_userModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/userModule */ "./src/modules/userModule.tsx");


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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// データベースへの接続
// import firebase from "firebase/app";
// 認証周りやDB周りで必要なためimportしておく







var useReduxFetch = function useReduxFetch() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  return dispatch;
}; // カスタムフックにしておく


_s(useReduxFetch, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

var useDatabase = function useDatabase() {
  _s2();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      userId = _useSelector.userId;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      check = _useState[0],
      setCheck = _useState[1]; // 同じパスでは毎回同じ結果が得られるのでmemo化しておく
  // return useMemo(() => firebase.database().ref("/sample"), []);


  var uid = _firebaseTest__WEBPACK_IMPORTED_MODULE_5__["firebase"].auth().currentUser;

  if (!!uid) {
    if (userId == '') {
      dispatch(Object(_modules_userModule__WEBPACK_IMPORTED_MODULE_6__["login"])(uid.uid));
      setCheck('check');
      console.log('DBF 1 userId');
      console.log('check');
    }

    console.log('DBF 2 userId');
    console.log(userId);
    return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
      return _firebaseTest__WEBPACK_IMPORTED_MODULE_5__["firebase"].database().ref("/users/" + userId);
    }, []);
  } // ここが原因。ここでuserId取得後にrefを更新できればいい


  console.log(userId);
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return _firebaseTest__WEBPACK_IMPORTED_MODULE_5__["firebase"].database().ref("/users/" + userId);
  }, []); // return useMemo(() => firebase.database().ref("/users/" + uid.uid), []);
}; //   データを取得する
// hooksを使いたいのでカスタムhooksにしておく


_s2(useDatabase, "JOtEWc7By/6vaX/rnNdyFTiytes=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

var useFetchData = function useFetchData(ref) {
  _s3();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      data = _useState2[0],
      setData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // イベントリスナーを追加するにはonを使う
    ref.on("value", function (snapshot) {
      // パスに対する全データを含むsnapshotが渡される
      // ない場合はnullが返るので存在をチェックしておく
      if (snapshot === null || snapshot === void 0 ? void 0 : snapshot.val()) {
        setData(snapshot.val());
        console.log('DBF data');
        console.log(data);
      }
    });
    return function () {
      ref.off();
    }; // refの変更に応じて再取得する
    //   指定したパスのデータに対する更新をすべて検知するにはvalueを指定すれば良い。
  }, [ref]); // データを返却する
  // console.log("data");
  // console.log(data);

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

  var updateDocument = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (document) {
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

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector2.userTaskInfo; // データを登録する関数を返却する
  // 可能であればここの処理はそのままにして、引数でsteteを更新する処理を先に行いたい


  var registerData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (registerData) {
    // () => {
    console.log(userTaskInfo); // ここでReduxに保管しているstateを更新する？
    // dispatch(Register({ ...registerData }));
    // 既存のデータと登録するkey-valueを合わせて登録関数に渡す

    setDocument(_objectSpread(_objectSpread({}, registeredData), registerData)); // setDocument(userTaskInfo);
  }, [setDocument, registeredData]); // 返した関数を利用することで、登録済みデータ全て+登録したいデータをDBに保管できる

  return registerData;
}; // 更新処理


_s6(useRegisterData, "WvCRZb+/E+CWLP1m2TnnE7UM4GA=", false, function () {
  return [useDatabase, useSetDocument, useFetchAllData, react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

var useUpdateDocument = function useUpdateDocument(ref) {
  _s7();

  // ref.updateがObjectを受け取るので、Objectを引数に取る関数を定義
  var updateDocument = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (document) {
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

  var updateData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (registerData) {
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
  var deleteDocument = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (document) {
    return ref.child(document).remove();
  }, [ref]);
  return deleteDocument;
}; // set、updateと同じなので割愛


_s9(useRemoveDocument, "W4gOmK1JX32OHf5MbRd+Y53zEjs=");

var useDelteData = function useDelteData() {
  _s10();

  var ref = useDatabase();
  var removeDocument = useRemoveDocument(ref);
  var deleteData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (deleteData) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvREJGZXRjaC50c3giXSwibmFtZXMiOlsidXNlUmVkdXhGZXRjaCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VEYXRhYmFzZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlcklkIiwidXNlU3RhdGUiLCJjaGVjayIsInNldENoZWNrIiwidWlkIiwiZmlyZWJhc2UiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VNZW1vIiwiZGF0YWJhc2UiLCJyZWYiLCJ1c2VGZXRjaERhdGEiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsIm9uIiwic25hcHNob3QiLCJ2YWwiLCJvZmYiLCJ1c2VGZXRjaEFsbERhdGEiLCJ1c2VTZXREb2N1bWVudCIsInVwZGF0ZURvY3VtZW50IiwidXNlQ2FsbGJhY2siLCJkb2N1bWVudCIsInNldCIsInVzZVJlZ2lzdGVyRGF0YSIsInNldERvY3VtZW50IiwicmVnaXN0ZXJlZERhdGEiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsInJlZ2lzdGVyRGF0YSIsInVzZVVwZGF0ZURvY3VtZW50IiwidXBkYXRlIiwidXNlVXBkYXRlRGF0YSIsInVwZGF0ZURhdGEiLCJ1c2VSZW1vdmVEb2N1bWVudCIsImRlbGV0ZURvY3VtZW50IiwiY2hpbGQiLCJyZW1vdmUiLCJ1c2VEZWx0ZURhdGEiLCJyZW1vdmVEb2N1bWVudCIsImRlbGV0ZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBVUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxTQUFPRCxR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R0FBRCxDQUF4QztBQUNBLE1BQU0rQixVQUFVLEdBQUduQix5REFBVyxDQUMxQixVQUFDbUIsVUFBRDtBQUFBLFdBQXdCRCxjQUFjLENBQUNDLFVBQUQsQ0FBdEM7QUFBQSxHQUQwQixFQUUxQixDQUFDRCxjQUFELENBRjBCLENBQTlCO0FBSUEsU0FBT0MsVUFBUDtBQUNILENBUkQ7O0tBQU1GLFk7VUFDVTlDLFcsRUFDVzBDLGlCOzs7QUFRM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MuNTRiZWE0MjBlNWUyZmUwYjdiNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOODh+ODvOOCv+ODmeODvOOCueOBuOOBruaOpee2mlxyXG5cclxuLy8gaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuLy8g6KqN6Ki85ZGo44KK44KERELlkajjgorjgaflv4XopoHjgarjgZ/jgoFpbXBvcnTjgZfjgabjgYrjgY9cclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSBcIi4vZmlyZWJhc2VUZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgY2FsZW5kYXIsXHJcbiAgICBwYXR0ZXJuLFxyXG4gICAgdGFza3MsXHJcbiAgICB1c2VyVGFzayxcclxuICAgIHVzZXJUYXNrSW5mbyxcclxufSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy91c2VyVGFza3NUeXBlXCI7XHJcbmltcG9ydCB7IHVzZVRhYkNvbnRleHQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3VzZXJNb2R1bGVcIjtcclxuXHJcbmNvbnN0IHVzZVJlZHV4RmV0Y2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2g7XHJcbn07XHJcblxyXG4vLyDjgqvjgrnjgr/jg6Djg5Xjg4Pjgq/jgavjgZfjgabjgYrjgY9cclxuY29uc3QgdXNlRGF0YWJhc2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2NoZWNrLHNldENoZWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIC8vIOWQjOOBmOODkeOCueOBp+OBr+avjuWbnuWQjOOBmOe1kOaenOOBjOW+l+OCieOCjOOCi+OBruOBp21lbW/ljJbjgZfjgabjgYrjgY9cclxuICAgIC8vIHJldHVybiB1c2VNZW1vKCgpID0+IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwiL3NhbXBsZVwiKSwgW10pO1xyXG4gICAgY29uc3QgdWlkID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyO1xyXG4gICAgaWYoISF1aWQpe1xyXG4gICAgICAgIGlmKHVzZXJJZD09Jycpe1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dpbih1aWQudWlkKSk7XHJcbiAgICAgICAgICAgIHNldENoZWNrKCdjaGVjaycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnREJGIDEgdXNlcklkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVjaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnREJGIDIgdXNlcklkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKTtcclxuICAgICAgICByZXR1cm4gdXNlTWVtbygoKSA9PiBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcIi91c2Vycy9cIiArIHVzZXJJZCksIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjgZPjgZPjgYzljp/lm6DjgILjgZPjgZPjgad1c2VySWTlj5blvpflvozjgatyZWbjgpLmm7TmlrDjgafjgY3jgozjgbDjgYTjgYRcclxuICAgIGNvbnNvbGUubG9nKHVzZXJJZCk7XHJcbiAgICByZXR1cm4gdXNlTWVtbygoKSA9PiBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcIi91c2Vycy9cIiArIHVzZXJJZCksIFtdKTtcclxuICAgIC8vIHJldHVybiB1c2VNZW1vKCgpID0+IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwiL3VzZXJzL1wiICsgdWlkLnVpZCksIFtdKTtcclxufTtcclxuXHJcbi8vICAg44OH44O844K/44KS5Y+W5b6X44GZ44KLXHJcbi8vIGhvb2tz44KS5L2/44GE44Gf44GE44Gu44Gn44Kr44K544K/44OgaG9va3PjgavjgZfjgabjgYrjgY9cclxuY29uc3QgdXNlRmV0Y2hEYXRhID0gKHJlZjogZmlyZWJhc2UuZGF0YWJhc2UuUmVmZXJlbmNlKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTx1c2VyVGFza0luZm8+KCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIOOCpOODmeODs+ODiOODquOCueODiuODvOOCkui/veWKoOOBmeOCi+OBq+OBr29u44KS5L2/44GGXHJcbiAgICAgICAgcmVmLm9uKFwidmFsdWVcIiwgKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy8g44OR44K544Gr5a++44GZ44KL5YWo44OH44O844K/44KS5ZCr44KAc25hcHNob3TjgYzmuKHjgZXjgozjgotcclxuICAgICAgICAgICAgLy8g44Gq44GE5aC05ZCI44GvbnVsbOOBjOi/lOOCi+OBruOBp+WtmOWcqOOCkuODgeOCp+ODg+OCr+OBl+OBpuOBiuOBj1xyXG4gICAgICAgICAgICBpZiAoc25hcHNob3Q/LnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEQkYgZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICByZWYub2ZmKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyByZWbjga7lpInmm7Tjgavlv5zjgZjjgablho3lj5blvpfjgZnjgotcclxuICAgICAgICAvLyAgIOaMh+WumuOBl+OBn+ODkeOCueOBruODh+ODvOOCv+OBq+WvvuOBmeOCi+abtOaWsOOCkuOBmeOBueOBpuaknOefpeOBmeOCi+OBq+OBr3ZhbHVl44KS5oyH5a6a44GZ44KM44Gw6Imv44GE44CCXHJcbiAgICB9LCBbcmVmXSk7XHJcbiAgICAvLyDjg4fjg7zjgr/jgpLov5TljbTjgZnjgotcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIHsgZGF0YSB9O1xyXG59O1xyXG5cclxuLy8g5a6f6Zqb44Gr5ZG844Gz5Ye644GZ6Zqb44Gv44GT44Gh44KJ44KS5L2/44GGXHJcbmNvbnN0IHVzZUZldGNoQWxsRGF0YSA9ICgpID0+IHtcclxuICAgIC8vIHJlZuOCkuWPluW+l+OBl+OBplxyXG4gICAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICAgIC8vIHJlZua4oeOBl+OBpuODh+ODvOOCv+OCkuWPluW+l+OBmeOCi1xyXG4gICAgcmV0dXJuIHVzZUZldGNoRGF0YShyZWYpO1xyXG59O1xyXG5cclxuLy8g55m76Yyy5Yem55CGXHJcbi8vIOOBk+OBrueZu+mMsuOBr3NldOOBq+a4oeOBl+OBn+WApOOBp+OBrueZu+mMsuOBqOOBquOCi+OAglxyXG4vLyDjgaTjgb7jgorjgIHml6LlrZjjga7jg4fjg7zjgr/jgoLlkKvjgoHjgabmuKHjgZfjgabjgYLjgZLjgarjgYTjgajnmbvpjLLmuIjjgb/jga7jg4fjg7zjgr/jgYzmtojjgYjjgovjgIJcclxuY29uc3QgdXNlU2V0RG9jdW1lbnQgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZURvY3VtZW50ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGRvY3VtZW50OiB1bmtub3duKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJlZuOBq+OBpOOBhOOBpuOBr+WJjeWbnuOBruiomOS6i+WPgueFp1xyXG4gICAgICAgICAgICAvLyBzZXTjgavnmbvpjLLjgZfjgZ/jgYTjg4fjg7zjgr/jgpLmuKHjgZfjgabjgYLjgZLjgozjgbDnmbvpjLLjgafjgY3jgotcclxuICAgICAgICAgICAgcmVmLnNldChkb2N1bWVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbcmVmXVxyXG4gICAgKTtcclxuICAgIHJldHVybiB1cGRhdGVEb2N1bWVudDtcclxufTtcclxuXHJcbmNvbnN0IHVzZVJlZ2lzdGVyRGF0YSA9ICgpID0+IHtcclxuICAgIC8vIOWJjeWbnuS9nOOBo+OBn3VzZURhdGFiYXNlKCnjgpLkvb/jgYRyZWblj5blvpdcclxuICAgIGNvbnN0IHJlZiA9IHVzZURhdGFiYXNlKCk7XHJcbiAgICBjb25zdCBzZXREb2N1bWVudCA9IHVzZVNldERvY3VtZW50KHJlZik7XHJcbiAgICAvLyDnmbvpjLLmuIjjgb/jga7jg4fjg7zjgr/jgpLlhajpg6jlj5blvpfjgZnjgotcclxuICAgIGNvbnN0IHsgZGF0YTogcmVnaXN0ZXJlZERhdGEgfSA9IHVzZUZldGNoQWxsRGF0YSgpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICAvLyDjg4fjg7zjgr/jgpLnmbvpjLLjgZnjgovplqLmlbDjgpLov5TljbTjgZnjgotcclxuICAgIFxyXG4gICAgLy8g5Y+v6IO944Gn44GC44KM44Gw44GT44GT44Gu5Yem55CG44Gv44Gd44Gu44G+44G+44Gr44GX44Gm44CB5byV5pWw44Gnc3RldGXjgpLmm7TmlrDjgZnjgovlh6bnkIbjgpLlhYjjgavooYzjgYTjgZ/jgYRcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChyZWdpc3RlckRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICAgICAgLy8gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlclRhc2tJbmZvKTtcclxuICAgICAgICAgICAgLy8g44GT44GT44GnUmVkdXjjgavkv53nrqHjgZfjgabjgYTjgotzdGF0ZeOCkuabtOaWsOOBmeOCi++8n1xyXG4gICAgICAgICAgICAvLyBkaXNwYXRjaChSZWdpc3Rlcih7IC4uLnJlZ2lzdGVyRGF0YSB9KSk7XHJcbiAgICAgICAgICAgIC8vIOaXouWtmOOBruODh+ODvOOCv+OBqOeZu+mMsuOBmeOCi2tleS12YWx1ZeOCkuWQiOOCj+OBm+OBpueZu+mMsumWouaVsOOBq+a4oeOBmVxyXG4gICAgICAgICAgICBzZXREb2N1bWVudCh7IC4uLnJlZ2lzdGVyZWREYXRhLCAuLi5yZWdpc3RlckRhdGEgfSk7XHJcbiAgICAgICAgICAgIC8vIHNldERvY3VtZW50KHVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbc2V0RG9jdW1lbnQsIHJlZ2lzdGVyZWREYXRhXVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyDov5TjgZfjgZ/plqLmlbDjgpLliKnnlKjjgZnjgovjgZPjgajjgafjgIHnmbvpjLLmuIjjgb/jg4fjg7zjgr/lhajjgaYr55m76Yyy44GX44Gf44GE44OH44O844K/44KSRELjgavkv53nrqHjgafjgY3jgotcclxuICAgIHJldHVybiByZWdpc3RlckRhdGE7XHJcbn07XHJcblxyXG4vLyDmm7TmlrDlh6bnkIZcclxuY29uc3QgdXNlVXBkYXRlRG9jdW1lbnQgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIC8vIHJlZi51cGRhdGXjgYxPYmplY3TjgpLlj5fjgZHlj5bjgovjga7jgafjgIFPYmplY3TjgpLlvJXmlbDjgavlj5bjgovplqLmlbDjgpLlrprnvqlcclxuICAgIGNvbnN0IHVwZGF0ZURvY3VtZW50ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGRvY3VtZW50OiBPYmplY3QpID0+IHJlZi51cGRhdGUoZG9jdW1lbnQpLFxyXG4gICAgICAgIFtyZWZdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHVwZGF0ZURvY3VtZW50O1xyXG59O1xyXG5cclxuY29uc3QgdXNlVXBkYXRlRGF0YSA9ICgpID0+IHtcclxuICAgIC8vIHNldOOBruaZguOBqOWQjOOBmOOBj3JlZuOCkuWPluW+l+OBl+OBpuOAgVxyXG4gICAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICAgIC8vIOmWouaVsOWRvOOBs+WHuuOBl+OBplxyXG4gICAgY29uc3QgdXBkYXRlRG9jdW1lbnQgPSB1c2VVcGRhdGVEb2N1bWVudChyZWYpO1xyXG4gICAgLy8g5pu05paw5Yem55CG44KS5L2c5oiQ44GZ44KLXHJcbiAgICBjb25zdCB1cGRhdGVEYXRhID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKHJlZ2lzdGVyRGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgICB1cGRhdGVEb2N1bWVudChyZWdpc3RlckRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3VwZGF0ZURvY3VtZW50XVxyXG4gICAgKTtcclxuICAgIHJldHVybiB1cGRhdGVEYXRhO1xyXG59O1xyXG5cclxuLy8g5YmK6Zmk5Yem55CGXHJcbmNvbnN0IHVzZVJlbW92ZURvY3VtZW50ID0gKHJlZjogZmlyZWJhc2UuZGF0YWJhc2UuUmVmZXJlbmNlKSA9PiB7XHJcbiAgICAvLyDnibnjgavlvJXmlbDjgYzlv4XopoHjgarjgYTjga7jgafjgZ/jgaDlkbzjgbPlh7rjgZnjga7jgb9cclxuICAgIGNvbnN0IGRlbGV0ZURvY3VtZW50ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGRvY3VtZW50OiBzdHJpbmcpID0+IHJlZi5jaGlsZChkb2N1bWVudCkucmVtb3ZlKCksXHJcbiAgICAgICAgW3JlZl1cclxuICAgICk7XHJcbiAgICByZXR1cm4gZGVsZXRlRG9jdW1lbnQ7XHJcbn07XHJcbi8vIHNldOOAgXVwZGF0ZeOBqOWQjOOBmOOBquOBruOBp+WJsuaEm1xyXG5jb25zdCB1c2VEZWx0ZURhdGEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWYgPSB1c2VEYXRhYmFzZSgpO1xyXG4gICAgY29uc3QgcmVtb3ZlRG9jdW1lbnQgPSB1c2VSZW1vdmVEb2N1bWVudChyZWYpO1xyXG4gICAgY29uc3QgZGVsZXRlRGF0YSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChkZWxldGVEYXRhOiBzdHJpbmcpID0+IHJlbW92ZURvY3VtZW50KGRlbGV0ZURhdGEpLFxyXG4gICAgICAgIFtyZW1vdmVEb2N1bWVudF1cclxuICAgICk7XHJcbiAgICByZXR1cm4gZGVsZXRlRGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHVzZUZldGNoQWxsRGF0YSwgdXNlUmVnaXN0ZXJEYXRhLCB1c2VVcGRhdGVEYXRhLCB1c2VEZWx0ZURhdGEgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==