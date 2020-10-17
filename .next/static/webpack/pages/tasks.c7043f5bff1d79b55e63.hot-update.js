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
      console.log('check');
    }

    console.log('DBF 1 userId');
    console.log(userId);
    return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
      return _firebaseTest__WEBPACK_IMPORTED_MODULE_5__["firebase"].database().ref("/users/" + userId);
    }, [userId]);
  } // ここが原因。ここでuserId取得後にrefを更新できればいい


  console.log('DBF 2 userId');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvREJGZXRjaC50c3giXSwibmFtZXMiOlsidXNlUmVkdXhGZXRjaCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VEYXRhYmFzZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlcklkIiwidXNlU3RhdGUiLCJjaGVjayIsInNldENoZWNrIiwidWlkIiwiZmlyZWJhc2UiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VNZW1vIiwiZGF0YWJhc2UiLCJyZWYiLCJ1c2VGZXRjaERhdGEiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsIm9uIiwic25hcHNob3QiLCJ2YWwiLCJvZmYiLCJ1c2VGZXRjaEFsbERhdGEiLCJ1c2VTZXREb2N1bWVudCIsInVwZGF0ZURvY3VtZW50IiwidXNlQ2FsbGJhY2siLCJkb2N1bWVudCIsInNldCIsInVzZVJlZ2lzdGVyRGF0YSIsInNldERvY3VtZW50IiwicmVnaXN0ZXJlZERhdGEiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsInJlZ2lzdGVyRGF0YSIsInVzZVVwZGF0ZURvY3VtZW50IiwidXBkYXRlIiwidXNlVXBkYXRlRGF0YSIsInVwZGF0ZURhdGEiLCJ1c2VSZW1vdmVEb2N1bWVudCIsImRlbGV0ZURvY3VtZW50IiwiY2hpbGQiLCJyZW1vdmUiLCJ1c2VEZWx0ZURhdGEiLCJyZW1vdmVEb2N1bWVudCIsImRlbGV0ZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBVUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxTQUFPRCxR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QWlCLENBQUN6QixHQUFELENBQXhDO0FBQ0EsTUFBTStCLFVBQVUsR0FBR25CLHlEQUFXLENBQzFCLFVBQUNtQixVQUFEO0FBQUEsV0FBd0JELGNBQWMsQ0FBQ0MsVUFBRCxDQUF0QztBQUFBLEdBRDBCLEVBRTFCLENBQUNELGNBQUQsQ0FGMEIsQ0FBOUI7QUFJQSxTQUFPQyxVQUFQO0FBQ0gsQ0FSRDs7S0FBTUYsWTtVQUNVOUMsVyxFQUNXMEMsaUI7OztBQVEzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy5jNzA0M2Y1YmZmMWQ3OWI1NWU2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g44OH44O844K/44OZ44O844K544G444Gu5o6l57aaXHJcblxyXG4vLyBpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG4vLyDoqo3oqLzlkajjgorjgoREQuWRqOOCiuOBp+W/heimgeOBquOBn+OCgWltcG9ydOOBl+OBpuOBiuOBj1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tIFwiLi9maXJlYmFzZVRlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBjYWxlbmRhcixcclxuICAgIHBhdHRlcm4sXHJcbiAgICB0YXNrcyxcclxuICAgIHVzZXJUYXNrLFxyXG4gICAgdXNlclRhc2tJbmZvLFxyXG59IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGVcIjtcclxuaW1wb3J0IHsgdXNlVGFiQ29udGV4dCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdXNlck1vZHVsZVwiO1xyXG5cclxuY29uc3QgdXNlUmVkdXhGZXRjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIHJldHVybiBkaXNwYXRjaDtcclxufTtcclxuXHJcbi8vIOOCq+OCueOCv+ODoOODleODg+OCr+OBq+OBl+OBpuOBiuOBj1xyXG5jb25zdCB1c2VEYXRhYmFzZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbY2hlY2ssc2V0Q2hlY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgLy8g5ZCM44GY44OR44K544Gn44Gv5q+O5Zue5ZCM44GY57WQ5p6c44GM5b6X44KJ44KM44KL44Gu44GnbWVtb+WMluOBl+OBpuOBiuOBj1xyXG4gICAgLy8gcmV0dXJuIHVzZU1lbW8oKCkgPT4gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCIvc2FtcGxlXCIpLCBbXSk7XHJcbiAgICBjb25zdCB1aWQgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XHJcbiAgICBpZighIXVpZCl7XHJcbiAgICAgICAgaWYodXNlcklkPT0nJyl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luKHVpZC51aWQpKTtcclxuICAgICAgICAgICAgc2V0Q2hlY2soJ2NoZWNrJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVjaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnREJGIDEgdXNlcklkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKTtcclxuICAgICAgICByZXR1cm4gdXNlTWVtbygoKSA9PiBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcIi91c2Vycy9cIiArIHVzZXJJZCksIFt1c2VySWRdKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g44GT44GT44GM5Y6f5Zug44CC44GT44GT44GndXNlcklk5Y+W5b6X5b6M44GrcmVm44KS5pu05paw44Gn44GN44KM44Gw44GE44GEXHJcbiAgICBjb25zb2xlLmxvZygnREJGIDIgdXNlcklkJyk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VySWQpO1xyXG4gICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCIvdXNlcnMvXCIgKyB1c2VySWQpLCBbXSk7XHJcbiAgICAvLyByZXR1cm4gdXNlTWVtbygoKSA9PiBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcIi91c2Vycy9cIiArIHVpZC51aWQpLCBbXSk7XHJcbn07XHJcblxyXG4vLyAgIOODh+ODvOOCv+OCkuWPluW+l+OBmeOCi1xyXG4vLyBob29rc+OCkuS9v+OBhOOBn+OBhOOBruOBp+OCq+OCueOCv+ODoGhvb2tz44Gr44GX44Gm44GK44GPXHJcbmNvbnN0IHVzZUZldGNoRGF0YSA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8dXNlclRhc2tJbmZvPigpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLov73liqDjgZnjgovjgavjga9vbuOCkuS9v+OBhlxyXG4gICAgICAgIHJlZi5vbihcInZhbHVlXCIsIChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOODkeOCueOBq+WvvuOBmeOCi+WFqOODh+ODvOOCv+OCkuWQq+OCgHNuYXBzaG9044GM5rih44GV44KM44KLXHJcbiAgICAgICAgICAgIC8vIOOBquOBhOWgtOWQiOOBr251bGzjgYzov5Tjgovjga7jgaflrZjlnKjjgpLjg4Hjgqfjg4Pjgq/jgZfjgabjgYrjgY9cclxuICAgICAgICAgICAgaWYgKHNuYXBzaG90Py52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREJGIGRhdGEnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcmVmLm9mZigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gcmVm44Gu5aSJ5pu044Gr5b+c44GY44Gm5YaN5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgLy8gICDmjIflrprjgZfjgZ/jg5Hjgrnjga7jg4fjg7zjgr/jgavlr77jgZnjgovmm7TmlrDjgpLjgZnjgbnjgabmpJznn6XjgZnjgovjgavjga92YWx1ZeOCkuaMh+WumuOBmeOCjOOBsOiJr+OBhOOAglxyXG4gICAgfSwgW3JlZl0pO1xyXG4gICAgLy8g44OH44O844K/44KS6L+U5Y2044GZ44KLXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbi8vIOWun+mam+OBq+WRvOOBs+WHuuOBmemam+OBr+OBk+OBoeOCieOCkuS9v+OBhlxyXG5jb25zdCB1c2VGZXRjaEFsbERhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyByZWbjgpLlj5blvpfjgZfjgaZcclxuICAgIGNvbnN0IHJlZiA9IHVzZURhdGFiYXNlKCk7XHJcbiAgICAvLyByZWbmuKHjgZfjgabjg4fjg7zjgr/jgpLlj5blvpfjgZnjgotcclxuICAgIHJldHVybiB1c2VGZXRjaERhdGEocmVmKTtcclxufTtcclxuXHJcbi8vIOeZu+mMsuWHpueQhlxyXG4vLyDjgZPjga7nmbvpjLLjga9zZXTjgavmuKHjgZfjgZ/lgKTjgafjga7nmbvpjLLjgajjgarjgovjgIJcclxuLy8g44Gk44G+44KK44CB5pei5a2Y44Gu44OH44O844K/44KC5ZCr44KB44Gm5rih44GX44Gm44GC44GS44Gq44GE44Go55m76Yyy5riI44G/44Gu44OH44O844K/44GM5raI44GI44KL44CCXHJcbmNvbnN0IHVzZVNldERvY3VtZW50ID0gKHJlZjogZmlyZWJhc2UuZGF0YWJhc2UuUmVmZXJlbmNlKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVEb2N1bWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChkb2N1bWVudDogdW5rbm93bikgPT4ge1xyXG4gICAgICAgICAgICAvLyByZWbjgavjgaTjgYTjgabjga/liY3lm57jga7oqJjkuovlj4LnhadcclxuICAgICAgICAgICAgLy8gc2V044Gr55m76Yyy44GX44Gf44GE44OH44O844K/44KS5rih44GX44Gm44GC44GS44KM44Gw55m76Yyy44Gn44GN44KLXHJcbiAgICAgICAgICAgIHJlZi5zZXQoZG9jdW1lbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3JlZl1cclxuICAgICk7XHJcbiAgICByZXR1cm4gdXBkYXRlRG9jdW1lbnQ7XHJcbn07XHJcblxyXG5jb25zdCB1c2VSZWdpc3RlckRhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyDliY3lm57kvZzjgaPjgZ91c2VEYXRhYmFzZSgp44KS5L2/44GEcmVm5Y+W5b6XXHJcbiAgICBjb25zdCByZWYgPSB1c2VEYXRhYmFzZSgpO1xyXG4gICAgY29uc3Qgc2V0RG9jdW1lbnQgPSB1c2VTZXREb2N1bWVudChyZWYpO1xyXG4gICAgLy8g55m76Yyy5riI44G/44Gu44OH44O844K/44KS5YWo6YOo5Y+W5b6X44GZ44KLXHJcbiAgICBjb25zdCB7IGRhdGE6IHJlZ2lzdGVyZWREYXRhIH0gPSB1c2VGZXRjaEFsbERhdGEoKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gICAgLy8g44OH44O844K/44KS55m76Yyy44GZ44KL6Zai5pWw44KS6L+U5Y2044GZ44KLXHJcbiAgICBcclxuICAgIC8vIOWPr+iDveOBp+OBguOCjOOBsOOBk+OBk+OBruWHpueQhuOBr+OBneOBruOBvuOBvuOBq+OBl+OBpuOAgeW8leaVsOOBp3N0ZXRl44KS5pu05paw44GZ44KL5Yem55CG44KS5YWI44Gr6KGM44GE44Gf44GEXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAocmVnaXN0ZXJEYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgICAgIC8vICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgICAgIC8vIOOBk+OBk+OBp1JlZHV444Gr5L+d566h44GX44Gm44GE44KLc3RhdGXjgpLmm7TmlrDjgZnjgovvvJ9cclxuICAgICAgICAgICAgLy8gZGlzcGF0Y2goUmVnaXN0ZXIoeyAuLi5yZWdpc3RlckRhdGEgfSkpO1xyXG4gICAgICAgICAgICAvLyDml6LlrZjjga7jg4fjg7zjgr/jgajnmbvpjLLjgZnjgotrZXktdmFsdWXjgpLlkIjjgo/jgZvjgabnmbvpjLLplqLmlbDjgavmuKHjgZlcclxuICAgICAgICAgICAgc2V0RG9jdW1lbnQoeyAuLi5yZWdpc3RlcmVkRGF0YSwgLi4ucmVnaXN0ZXJEYXRhIH0pO1xyXG4gICAgICAgICAgICAvLyBzZXREb2N1bWVudCh1c2VyVGFza0luZm8pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3NldERvY3VtZW50LCByZWdpc3RlcmVkRGF0YV1cclxuICAgICk7XHJcblxyXG4gICAgLy8g6L+U44GX44Gf6Zai5pWw44KS5Yip55So44GZ44KL44GT44Go44Gn44CB55m76Yyy5riI44G/44OH44O844K/5YWo44GmK+eZu+mMsuOBl+OBn+OBhOODh+ODvOOCv+OCkkRC44Gr5L+d566h44Gn44GN44KLXHJcbiAgICByZXR1cm4gcmVnaXN0ZXJEYXRhO1xyXG59O1xyXG5cclxuLy8g5pu05paw5Yem55CGXHJcbmNvbnN0IHVzZVVwZGF0ZURvY3VtZW50ID0gKHJlZjogZmlyZWJhc2UuZGF0YWJhc2UuUmVmZXJlbmNlKSA9PiB7XHJcbiAgICAvLyByZWYudXBkYXRl44GMT2JqZWN044KS5Y+X44GR5Y+W44KL44Gu44Gn44CBT2JqZWN044KS5byV5pWw44Gr5Y+W44KL6Zai5pWw44KS5a6a576pXHJcbiAgICBjb25zdCB1cGRhdGVEb2N1bWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChkb2N1bWVudDogT2JqZWN0KSA9PiByZWYudXBkYXRlKGRvY3VtZW50KSxcclxuICAgICAgICBbcmVmXVxyXG4gICAgKTtcclxuICAgIHJldHVybiB1cGRhdGVEb2N1bWVudDtcclxufTtcclxuXHJcbmNvbnN0IHVzZVVwZGF0ZURhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXTjga7mmYLjgajlkIzjgZjjgY9yZWbjgpLlj5blvpfjgZfjgabjgIFcclxuICAgIGNvbnN0IHJlZiA9IHVzZURhdGFiYXNlKCk7XHJcbiAgICAvLyDplqLmlbDlkbzjgbPlh7rjgZfjgaZcclxuICAgIGNvbnN0IHVwZGF0ZURvY3VtZW50ID0gdXNlVXBkYXRlRG9jdW1lbnQocmVmKTtcclxuICAgIC8vIOabtOaWsOWHpueQhuOCkuS9nOaIkOOBmeOCi1xyXG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChyZWdpc3RlckRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICAgICAgdXBkYXRlRG9jdW1lbnQocmVnaXN0ZXJEYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt1cGRhdGVEb2N1bWVudF1cclxuICAgICk7XHJcbiAgICByZXR1cm4gdXBkYXRlRGF0YTtcclxufTtcclxuXHJcbi8vIOWJiumZpOWHpueQhlxyXG5jb25zdCB1c2VSZW1vdmVEb2N1bWVudCA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgLy8g54m544Gr5byV5pWw44GM5b+F6KaB44Gq44GE44Gu44Gn44Gf44Gg5ZG844Gz5Ye644GZ44Gu44G/XHJcbiAgICBjb25zdCBkZWxldGVEb2N1bWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChkb2N1bWVudDogc3RyaW5nKSA9PiByZWYuY2hpbGQoZG9jdW1lbnQpLnJlbW92ZSgpLFxyXG4gICAgICAgIFtyZWZdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRlbGV0ZURvY3VtZW50O1xyXG59O1xyXG4vLyBzZXTjgIF1cGRhdGXjgajlkIzjgZjjgarjga7jgaflibLmhJtcclxuY29uc3QgdXNlRGVsdGVEYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICAgIGNvbnN0IHJlbW92ZURvY3VtZW50ID0gdXNlUmVtb3ZlRG9jdW1lbnQocmVmKTtcclxuICAgIGNvbnN0IGRlbGV0ZURhdGEgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZGVsZXRlRGF0YTogc3RyaW5nKSA9PiByZW1vdmVEb2N1bWVudChkZWxldGVEYXRhKSxcclxuICAgICAgICBbcmVtb3ZlRG9jdW1lbnRdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRlbGV0ZURhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgeyB1c2VGZXRjaEFsbERhdGEsIHVzZVJlZ2lzdGVyRGF0YSwgdXNlVXBkYXRlRGF0YSwgdXNlRGVsdGVEYXRhIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=