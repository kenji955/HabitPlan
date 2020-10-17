webpackHotUpdate_N_E("pages/tasks",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

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
      console.log('check');
    }

    console.log('DBF 1 userId');
    console.log(userId);
    return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
      return _firebaseTest__WEBPACK_IMPORTED_MODULE_5__["firebase"].database().ref("/users/" + userId);
    }, []);
  } // ここが原因。ここでuserId取得後にrefを更新できればいい


  console.log('DBF 2 userId');
  console.log(userId); // return useMemo(() => firebase.database().ref("/users/" + userId), []);
  // return useMemo(() => firebase.database().ref("/users/" + uid.uid), []);
}; //   データを取得する
// hooksを使いたいのでカスタムhooksにしておく


_s2(useDatabase, "qV9+fsuyPb+dXIm2V9Nf5SI99LE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvREJGZXRjaC50c3giXSwibmFtZXMiOlsidXNlUmVkdXhGZXRjaCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VEYXRhYmFzZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlcklkIiwidXNlU3RhdGUiLCJjaGVjayIsInNldENoZWNrIiwidWlkIiwiZmlyZWJhc2UiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VNZW1vIiwiZGF0YWJhc2UiLCJyZWYiLCJ1c2VGZXRjaERhdGEiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsIm9uIiwic25hcHNob3QiLCJ2YWwiLCJvZmYiLCJ1c2VGZXRjaEFsbERhdGEiLCJ1c2VTZXREb2N1bWVudCIsInVwZGF0ZURvY3VtZW50IiwidXNlQ2FsbGJhY2siLCJkb2N1bWVudCIsInNldCIsInVzZVJlZ2lzdGVyRGF0YSIsInNldERvY3VtZW50IiwicmVnaXN0ZXJlZERhdGEiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsInJlZ2lzdGVyRGF0YSIsInVzZVVwZGF0ZURvY3VtZW50IiwidXBkYXRlIiwidXNlVXBkYXRlRGF0YSIsInVwZGF0ZURhdGEiLCJ1c2VSZW1vdmVEb2N1bWVudCIsImRlbGV0ZURvY3VtZW50IiwiY2hpbGQiLCJyZW1vdmUiLCJ1c2VEZWx0ZURhdGEiLCJyZW1vdmVEb2N1bWVudCIsImRlbGV0ZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBVUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxTQUFP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LEVBRTFCLENBQUNELGNBQUQsQ0FGMEIsQ0FBOUI7QUFJQSxTQUFPQyxVQUFQO0FBQ0gsQ0FSRDs7S0FBTUYsWTtVQUNVOUMsVyxFQUNXMEMsaUI7OztBQVEzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy5lYjU4MzhmZWRiY2ZmNDQ4NDVlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g44OH44O844K/44OZ44O844K544G444Gu5o6l57aaXHJcblxyXG4vLyBpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG4vLyDoqo3oqLzlkajjgorjgoREQuWRqOOCiuOBp+W/heimgeOBquOBn+OCgWltcG9ydOOBl+OBpuOBiuOBj1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tIFwiLi9maXJlYmFzZVRlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBjYWxlbmRhcixcclxuICAgIHBhdHRlcm4sXHJcbiAgICB0YXNrcyxcclxuICAgIHVzZXJUYXNrLFxyXG4gICAgdXNlclRhc2tJbmZvLFxyXG59IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGVcIjtcclxuaW1wb3J0IHsgdXNlVGFiQ29udGV4dCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdXNlck1vZHVsZVwiO1xyXG5cclxuY29uc3QgdXNlUmVkdXhGZXRjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIHJldHVybiBkaXNwYXRjaDtcclxufTtcclxuXHJcbi8vIOOCq+OCueOCv+ODoOODleODg+OCr+OBq+OBl+OBpuOBiuOBj1xyXG5jb25zdCAgdXNlRGF0YWJhc2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2NoZWNrLHNldENoZWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIC8vIOWQjOOBmOODkeOCueOBp+OBr+avjuWbnuWQjOOBmOe1kOaenOOBjOW+l+OCieOCjOOCi+OBruOBp21lbW/ljJbjgZfjgabjgYrjgY9cclxuICAgIC8vIHJldHVybiB1c2VNZW1vKCgpID0+IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwiL3NhbXBsZVwiKSwgW10pO1xyXG4gICAgY29uc3QgdWlkID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyO1xyXG4gICAgaWYoISF1aWQpe1xyXG4gICAgICAgIGlmKHVzZXJJZD09Jycpe1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dpbih1aWQudWlkKSk7XHJcbiAgICAgICAgICAgIHNldENoZWNrKCdjaGVjaycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RCRiAxIHVzZXJJZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZCk7XHJcbiAgICAgICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCIvdXNlcnMvXCIgKyB1c2VySWQpLCBbXSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOOBk+OBk+OBjOWOn+WboOOAguOBk+OBk+OBp3VzZXJJZOWPluW+l+W+jOOBq3JlZuOCkuabtOaWsOOBp+OBjeOCjOOBsOOBhOOBhFxyXG4gICAgY29uc29sZS5sb2coJ0RCRiAyIHVzZXJJZCcpO1xyXG4gICAgY29uc29sZS5sb2codXNlcklkKTtcclxuICAgIC8vIHJldHVybiB1c2VNZW1vKCgpID0+IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwiL3VzZXJzL1wiICsgdXNlcklkKSwgW10pO1xyXG4gICAgLy8gcmV0dXJuIHVzZU1lbW8oKCkgPT4gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCIvdXNlcnMvXCIgKyB1aWQudWlkKSwgW10pO1xyXG59O1xyXG5cclxuLy8gICDjg4fjg7zjgr/jgpLlj5blvpfjgZnjgotcclxuLy8gaG9va3PjgpLkvb/jgYTjgZ/jgYTjga7jgafjgqvjgrnjgr/jg6Bob29rc+OBq+OBl+OBpuOBiuOBj1xyXG5jb25zdCB1c2VGZXRjaERhdGEgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPHVzZXJUYXNrSW5mbz4oKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6L+95Yqg44GZ44KL44Gr44Gvb27jgpLkvb/jgYZcclxuICAgICAgICByZWYub24oXCJ2YWx1ZVwiLCAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyDjg5Hjgrnjgavlr77jgZnjgovlhajjg4fjg7zjgr/jgpLlkKvjgoBzbmFwc2hvdOOBjOa4oeOBleOCjOOCi1xyXG4gICAgICAgICAgICAvLyDjgarjgYTloLTlkIjjga9udWxs44GM6L+U44KL44Gu44Gn5a2Y5Zyo44KS44OB44Kn44OD44Kv44GX44Gm44GK44GPXHJcbiAgICAgICAgICAgIGlmIChzbmFwc2hvdD8udmFsKCkpIHtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RCRiBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlZi5vZmYoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHJlZuOBruWkieabtOOBq+W/nOOBmOOBpuWGjeWPluW+l+OBmeOCi1xyXG4gICAgICAgIC8vICAg5oyH5a6a44GX44Gf44OR44K544Gu44OH44O844K/44Gr5a++44GZ44KL5pu05paw44KS44GZ44G544Gm5qSc55+l44GZ44KL44Gr44GvdmFsdWXjgpLmjIflrprjgZnjgozjgbDoia/jgYTjgIJcclxuICAgIH0sIFtyZWZdKTtcclxuICAgIC8vIOODh+ODvOOCv+OCkui/lOWNtOOBmeOCi1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJkYXRhXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm4geyBkYXRhIH07XHJcbn07XHJcblxyXG4vLyDlrp/pmpvjgavlkbzjgbPlh7rjgZnpmpvjga/jgZPjgaHjgonjgpLkvb/jgYZcclxuY29uc3QgdXNlRmV0Y2hBbGxEYXRhID0gKCkgPT4ge1xyXG4gICAgLy8gcmVm44KS5Y+W5b6X44GX44GmXHJcbiAgICBjb25zdCByZWYgPSB1c2VEYXRhYmFzZSgpO1xyXG4gICAgLy8gcmVm5rih44GX44Gm44OH44O844K/44KS5Y+W5b6X44GZ44KLXHJcbiAgICByZXR1cm4gdXNlRmV0Y2hEYXRhKHJlZik7XHJcbn07XHJcblxyXG4vLyDnmbvpjLLlh6bnkIZcclxuLy8g44GT44Gu55m76Yyy44Gvc2V044Gr5rih44GX44Gf5YCk44Gn44Gu55m76Yyy44Go44Gq44KL44CCXHJcbi8vIOOBpOOBvuOCiuOAgeaXouWtmOOBruODh+ODvOOCv+OCguWQq+OCgeOBpua4oeOBl+OBpuOBguOBkuOBquOBhOOBqOeZu+mMsua4iOOBv+OBruODh+ODvOOCv+OBjOa2iOOBiOOCi+OAglxyXG5jb25zdCB1c2VTZXREb2N1bWVudCA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlRG9jdW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZG9jdW1lbnQ6IHVua25vd24pID0+IHtcclxuICAgICAgICAgICAgLy8gcmVm44Gr44Gk44GE44Gm44Gv5YmN5Zue44Gu6KiY5LqL5Y+C54WnXHJcbiAgICAgICAgICAgIC8vIHNldOOBq+eZu+mMsuOBl+OBn+OBhOODh+ODvOOCv+OCkua4oeOBl+OBpuOBguOBkuOCjOOBsOeZu+mMsuOBp+OBjeOCi1xyXG4gICAgICAgICAgICByZWYuc2V0KGRvY3VtZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtyZWZdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHVwZGF0ZURvY3VtZW50O1xyXG59O1xyXG5cclxuY29uc3QgdXNlUmVnaXN0ZXJEYXRhID0gKCkgPT4ge1xyXG4gICAgLy8g5YmN5Zue5L2c44Gj44GfdXNlRGF0YWJhc2UoKeOCkuS9v+OBhHJlZuWPluW+l1xyXG4gICAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICAgIGNvbnN0IHNldERvY3VtZW50ID0gdXNlU2V0RG9jdW1lbnQocmVmKTtcclxuICAgIC8vIOeZu+mMsua4iOOBv+OBruODh+ODvOOCv+OCkuWFqOmDqOWPluW+l+OBmeOCi1xyXG4gICAgY29uc3QgeyBkYXRhOiByZWdpc3RlcmVkRGF0YSB9ID0gdXNlRmV0Y2hBbGxEYXRhKCk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuICAgIC8vIOODh+ODvOOCv+OCkueZu+mMsuOBmeOCi+mWouaVsOOCkui/lOWNtOOBmeOCi1xyXG4gICAgXHJcbiAgICAvLyDlj6/og73jgafjgYLjgozjgbDjgZPjgZPjga7lh6bnkIbjga/jgZ3jga7jgb7jgb7jgavjgZfjgabjgIHlvJXmlbDjgadzdGV0ZeOCkuabtOaWsOOBmeOCi+WHpueQhuOCkuWFiOOBq+ihjOOBhOOBn+OBhFxyXG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKHJlZ2lzdGVyRGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyVGFza0luZm8pO1xyXG4gICAgICAgICAgICAvLyDjgZPjgZPjgadSZWR1eOOBq+S/neeuoeOBl+OBpuOBhOOCi3N0YXRl44KS5pu05paw44GZ44KL77yfXHJcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKFJlZ2lzdGVyKHsgLi4ucmVnaXN0ZXJEYXRhIH0pKTtcclxuICAgICAgICAgICAgLy8g5pei5a2Y44Gu44OH44O844K/44Go55m76Yyy44GZ44KLa2V5LXZhbHVl44KS5ZCI44KP44Gb44Gm55m76Yyy6Zai5pWw44Gr5rih44GZXHJcbiAgICAgICAgICAgIHNldERvY3VtZW50KHsgLi4ucmVnaXN0ZXJlZERhdGEsIC4uLnJlZ2lzdGVyRGF0YSB9KTtcclxuICAgICAgICAgICAgLy8gc2V0RG9jdW1lbnQodXNlclRhc2tJbmZvKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtzZXREb2N1bWVudCwgcmVnaXN0ZXJlZERhdGFdXHJcbiAgICApO1xyXG5cclxuICAgIC8vIOi/lOOBl+OBn+mWouaVsOOCkuWIqeeUqOOBmeOCi+OBk+OBqOOBp+OAgeeZu+mMsua4iOOBv+ODh+ODvOOCv+WFqOOBpivnmbvpjLLjgZfjgZ/jgYTjg4fjg7zjgr/jgpJEQuOBq+S/neeuoeOBp+OBjeOCi1xyXG4gICAgcmV0dXJuIHJlZ2lzdGVyRGF0YTtcclxufTtcclxuXHJcbi8vIOabtOaWsOWHpueQhlxyXG5jb25zdCB1c2VVcGRhdGVEb2N1bWVudCA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgLy8gcmVmLnVwZGF0ZeOBjE9iamVjdOOCkuWPl+OBkeWPluOCi+OBruOBp+OAgU9iamVjdOOCkuW8leaVsOOBq+WPluOCi+mWouaVsOOCkuWumue+qVxyXG4gICAgY29uc3QgdXBkYXRlRG9jdW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZG9jdW1lbnQ6IE9iamVjdCkgPT4gcmVmLnVwZGF0ZShkb2N1bWVudCksXHJcbiAgICAgICAgW3JlZl1cclxuICAgICk7XHJcbiAgICByZXR1cm4gdXBkYXRlRG9jdW1lbnQ7XHJcbn07XHJcblxyXG5jb25zdCB1c2VVcGRhdGVEYXRhID0gKCkgPT4ge1xyXG4gICAgLy8gc2V044Gu5pmC44Go5ZCM44GY44GPcmVm44KS5Y+W5b6X44GX44Gm44CBXHJcbiAgICBjb25zdCByZWYgPSB1c2VEYXRhYmFzZSgpO1xyXG4gICAgLy8g6Zai5pWw5ZG844Gz5Ye644GX44GmXHJcbiAgICBjb25zdCB1cGRhdGVEb2N1bWVudCA9IHVzZVVwZGF0ZURvY3VtZW50KHJlZik7XHJcbiAgICAvLyDmm7TmlrDlh6bnkIbjgpLkvZzmiJDjgZnjgotcclxuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAocmVnaXN0ZXJEYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURvY3VtZW50KHJlZ2lzdGVyRGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbdXBkYXRlRG9jdW1lbnRdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHVwZGF0ZURhdGE7XHJcbn07XHJcblxyXG4vLyDliYrpmaTlh6bnkIZcclxuY29uc3QgdXNlUmVtb3ZlRG9jdW1lbnQgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIC8vIOeJueOBq+W8leaVsOOBjOW/heimgeOBquOBhOOBruOBp+OBn+OBoOWRvOOBs+WHuuOBmeOBruOBv1xyXG4gICAgY29uc3QgZGVsZXRlRG9jdW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZG9jdW1lbnQ6IHN0cmluZykgPT4gcmVmLmNoaWxkKGRvY3VtZW50KS5yZW1vdmUoKSxcclxuICAgICAgICBbcmVmXVxyXG4gICAgKTtcclxuICAgIHJldHVybiBkZWxldGVEb2N1bWVudDtcclxufTtcclxuLy8gc2V044CBdXBkYXRl44Go5ZCM44GY44Gq44Gu44Gn5Ymy5oSbXHJcbmNvbnN0IHVzZURlbHRlRGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlZiA9IHVzZURhdGFiYXNlKCk7XHJcbiAgICBjb25zdCByZW1vdmVEb2N1bWVudCA9IHVzZVJlbW92ZURvY3VtZW50KHJlZik7XHJcbiAgICBjb25zdCBkZWxldGVEYXRhID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGRlbGV0ZURhdGE6IHN0cmluZykgPT4gcmVtb3ZlRG9jdW1lbnQoZGVsZXRlRGF0YSksXHJcbiAgICAgICAgW3JlbW92ZURvY3VtZW50XVxyXG4gICAgKTtcclxuICAgIHJldHVybiBkZWxldGVEYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdXNlRmV0Y2hBbGxEYXRhLCB1c2VSZWdpc3RlckRhdGEsIHVzZVVwZGF0ZURhdGEsIHVzZURlbHRlRGF0YSB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9