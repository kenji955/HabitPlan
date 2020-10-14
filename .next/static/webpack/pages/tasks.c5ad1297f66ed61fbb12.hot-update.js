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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvREJGZXRjaC50c3giXSwibmFtZXMiOlsidXNlUmVkdXhGZXRjaCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VEYXRhYmFzZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlcklkIiwidXNlTWVtbyIsImZpcmViYXNlIiwiZGF0YWJhc2UiLCJyZWYiLCJ1c2VGZXRjaERhdGEiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0Iiwib24iLCJzbmFwc2hvdCIsInZhbCIsIm9mZiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VGZXRjaEFsbERhdGEiLCJ1c2VTZXREb2N1bWVudCIsInVwZGF0ZURvY3VtZW50IiwidXNlQ2FsbGJhY2siLCJkb2N1bWVudCIsInNldCIsInVzZVJlZ2lzdGVyRGF0YSIsInNldERvY3VtZW50IiwicmVnaXN0ZXJlZERhdGEiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsInJlZ2lzdGVyRGF0YSIsInVzZVVwZGF0ZURvY3VtZW50IiwidXBkYXRlIiwidXNlVXBkYXRlRGF0YSIsInVwZGF0ZURhdGEiLCJ1c2VSZW1vdmVEb2N1bWVudCIsImRlbGV0ZURvY3VtZW50IiwiY2hpbGQiLCJyZW1vdmUiLCJ1c2VEZWx0ZURhdGEiLCJyZW1vdmVEb2N1bWVudCIsImRlbGV0ZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7QUFVQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFNBQU9ELFFBQVA7QUFDSCxDQUhELEMsQ0FLQTs7O0dBTE1ELGE7VUFDZUUsdUQ7OztBQUtyQixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEscUJBQ0hDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQXNCQSxLQUFLLENBQUNDLElBQTVCO0FBQUEsR0FBRCxDQURSO0FBQUEsTUFDZEMsTUFEYyxnQkFDZEEsTUFEYyxFQUV0QjtBQUNBOzs7QUFDQSxTQUFPQyxxREFBTyxDQUFDO0FBQUEsV0FBTUMsc0RBQVEsQ0FBQ0MsUUFBVCxHQUFvQkMsR0FBcEIsQ0FBd0IsWUFBWUosTUFBcEMsQ0FBTjtBQUFBLEdBQUQsRUFBb0QsRUFBcEQsQ0FBZDtBQUNILENBTEQsQyxDQU9BO0FBQ0E7OztJQVJNSixXO1VBQ2lCQyx1RDs7O0FBUXZCLElBQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNELEdBQUQsRUFBc0M7QUFBQTs7QUFBQSxrQkFDL0JFLHNEQUFRLEVBRHVCO0FBQUEsTUFDaERDLElBRGdEO0FBQUEsTUFDMUNDLE9BRDBDOztBQUV2REMseURBQVMsQ0FBQyxZQUFNO0FBQ1o7QUFDQUwsT0FBRyxDQUFDTSxFQUFKLENBQU8sT0FBUCxFQUFnQixVQUFDQyxRQUFELEVBQW1CO0FBQy9CO0FBQ0E7QUFDQSxVQUFJQSxRQUFKLGFBQUlBLFFBQUosdUJBQUlBLFFBQVEsQ0FBRUMsR0FBVixFQUFKLEVBQXFCO0FBQ2pCSixlQUFPLENBQUNHLFFBQVEsQ0FBQ0MsR0FBVCxFQUFELENBQVA7QUFDSDtBQUNKLEtBTkQ7QUFPQSxXQUFPLFlBQU07QUFDVFIsU0FBRyxDQUFDUyxHQUFKO0FBQ0gsS0FGRCxDQVRZLENBWVo7QUFDQTtBQUNILEdBZFEsRUFjTixDQUFDLE9BQUQsQ0FkTSxDQUFULENBRnVELENBaUJ2RDs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjtBQUNBLFNBQU87QUFBRUEsUUFBSSxFQUFKQTtBQUFGLEdBQVA7QUFDSCxDQXJCRCxDLENBdUJBOzs7SUF2Qk1GLFk7O0FBd0JOLElBQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUMxQjtBQUNBLE1BQU1aLEdBQUcsR0FBR1IsV0FBVyxFQUF2QixDQUYwQixDQUcxQjs7QUFDQSxTQUFPUyxZQUFZLENBQUNELEdBQUQsQ0FBbkI7QUFDSCxDQUxELEMsQ0FPQTtBQUNBO0FBQ0E7OztJQVRNWSxlO1VBRVVwQixXLEVBRUxTLFk7OztBQU1YLElBQU1ZLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2IsR0FBRCxFQUFzQztBQUFBOztBQUN6RCxNQUFNYyxjQUFjLEdBQUdDLHlEQUFXLENBQzlCLFVBQUNDLFFBQUQsRUFBdUI7QUFDbkI7QUFDQTtBQUNBaEIsT0FBRyxDQUFDaUIsR0FBSixDQUFRRCxRQUFSO0FBQ0gsR0FMNkIsRUFNOUIsQ0FBQ2hCLEdBQUQsQ0FOOEIsQ0FBbEM7QUFRQSxTQUFPYyxjQUFQO0FBQ0gsQ0FWRDs7SUFBTUQsYzs7QUFZTixJQUFNSyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFDMUI7QUFDQSxNQUFNbEIsR0FBRyxHQUFHUixXQUFXLEVBQXZCO0FBQ0EsTUFBTTJCLFdBQVcsR0FBR04sY0FBYyxDQUFDYixHQUFELENBQWxDLENBSDBCLENBSTFCOztBQUowQix5QkFLT1ksZUFBZSxFQUx0QjtBQUFBLE1BS1pRLGNBTFksb0JBS2xCakIsSUFMa0I7O0FBTTFCLE1BQU1iLFFBQVEsR0FBR0QsYUFBYSxFQUE5Qjs7QUFOMEIsc0JBT0RJLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQXNCQSxLQUFLLENBQUMyQixLQUE1QjtBQUFBLEdBQUQsQ0FQVjtBQUFBLE1BT2xCQyxZQVBrQixpQkFPbEJBLFlBUGtCOztBQVExQlosU0FBTyxDQUFDQyxHQUFSLENBQVlXLFlBQVosRUFSMEIsQ0FTMUI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHUix5REFBVyxFQUM1QjtBQUNBLGNBQU07QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBSSxlQUFXLENBQUNHLFlBQUQsQ0FBWDtBQUNILEdBUjJCLEVBUzVCLENBQUNILFdBQUQsRUFBY0MsY0FBZCxDQVQ0QixDQUFoQyxDQVYwQixDQXNCMUI7O0FBQ0EsU0FBT0csWUFBUDtBQUNILENBeEJELEMsQ0EwQkE7OztJQTFCTUwsZTtVQUVVMUIsVyxFQUNRcUIsYyxFQUVhRCxlLEVBQ2hCdkIsYSxFQUNRSSx1RDs7O0FBb0I3QixJQUFNK0IsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDeEIsR0FBRCxFQUFzQztBQUFBOztBQUM1RDtBQUNBLE1BQU1jLGNBQWMsR0FBR0MseURBQVcsQ0FDOUIsVUFBQ0MsUUFBRDtBQUFBLFdBQXNCaEIsR0FBRyxDQUFDeUIsTUFBSixDQUFXVCxRQUFYLENBQXRCO0FBQUEsR0FEOEIsRUFFOUIsQ0FBQ2hCLEdBQUQsQ0FGOEIsQ0FBbEM7QUFJQSxTQUFPYyxjQUFQO0FBQ0gsQ0FQRDs7SUFBTVUsaUI7O0FBU04sSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQ3hCO0FBQ0EsTUFBTTFCLEdBQUcsR0FBR1IsV0FBVyxFQUF2QixDQUZ3QixDQUd4Qjs7QUFDQSxNQUFNc0IsY0FBYyxHQUFHVSxpQkFBaUIsQ0FBQ3hCLEdBQUQsQ0FBeEMsQ0FKd0IsQ0FLeEI7O0FBQ0EsTUFBTTJCLFVBQVUsR0FBR1oseURBQVcsQ0FDMUIsVUFBQ1EsWUFBRCxFQUE2QztBQUN6Q1Qsa0JBQWMsQ0FBQ1MsWUFBRCxDQUFkO0FBQ0gsR0FIeUIsRUFJMUIsQ0FBQ1QsY0FBRCxDQUowQixDQUE5QjtBQU1BLFNBQU9hLFVBQVA7QUFDSCxDQWJELEMsQ0FlQTs7O0lBZk1ELGE7VUFFVWxDLFcsRUFFV2dDLGlCOzs7QUFZM0IsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDNUIsR0FBRCxFQUFzQztBQUFBOztBQUM1RDtBQUNBLE1BQU02QixjQUFjLEdBQUdkLHlEQUFXLENBQzlCLFVBQUNDLFFBQUQ7QUFBQSxXQUFzQmhCLEdBQUcsQ0FBQzhCLEtBQUosQ0FBVWQsUUFBVixFQUFvQmUsTUFBcEIsRUFBdEI7QUFBQSxHQUQ4QixFQUU5QixDQUFDL0IsR0FBRCxDQUY4QixDQUFsQztBQUlBLFNBQU82QixjQUFQO0FBQ0gsQ0FQRCxDLENBUUE7OztJQVJNRCxpQjs7QUFTTixJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1oQyxHQUFHLEdBQUdSLFdBQVcsRUFBdkI7QUFDQSxNQUFNeUMsY0FBYyxHQUFHTCxpQkFBaUIsQ0FBQzVCLEdBQUQsQ0FBeEM7QUFDQSxNQUFNa0MsVUFBVSxHQUFHbkIseURBQVcsQ0FDMUIsVUFBQ21CLFVBQUQ7QUFBQSxXQUF3QkQsY0FBYyxDQUFDQyxVQUFELENBQXRDO0FBQUEsR0FEMEIsRUFFMUIsQ0FBQ0QsY0FBRCxDQUYwQixDQUE5QjtBQUlBLFNBQU9DLFVBQVA7QUFDSCxDQVJEOztLQUFNRixZO1VBQ1V4QyxXLEVBQ1dvQyxpQjs7O0FBUTNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLmM1YWQxMjk3ZjY2ZWQ2MWZiYjEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDjg4fjg7zjgr/jg5njg7zjgrnjgbjjga7mjqXntppcclxuXHJcbi8vIGltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbi8vIOiqjeiovOWRqOOCiuOChERC5ZGo44KK44Gn5b+F6KaB44Gq44Gf44KBaW1wb3J044GX44Gm44GK44GPXHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlciB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gXCIuL2ZpcmViYXNlVGVzdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGNhbGVuZGFyLFxyXG4gICAgcGF0dGVybixcclxuICAgIHRhc2tzLFxyXG4gICAgdXNlclRhc2ssXHJcbn0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdXNlclRhc2tzVHlwZVwiO1xyXG5pbXBvcnQgeyB1c2VUYWJDb250ZXh0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuXHJcbmNvbnN0IHVzZVJlZHV4RmV0Y2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2g7XHJcbn07XHJcblxyXG4vLyDjgqvjgrnjgr/jg6Djg5Xjg4Pjgq/jgavjgZfjgabjgYrjgY9cclxuY29uc3QgdXNlRGF0YWJhc2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgLy8g5ZCM44GY44OR44K544Gn44Gv5q+O5Zue5ZCM44GY57WQ5p6c44GM5b6X44KJ44KM44KL44Gu44GnbWVtb+WMluOBl+OBpuOBiuOBj1xyXG4gICAgLy8gcmV0dXJuIHVzZU1lbW8oKCkgPT4gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCIvc2FtcGxlXCIpLCBbXSk7XHJcbiAgICByZXR1cm4gdXNlTWVtbygoKSA9PiBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcIi91c2Vycy9cIiArIHVzZXJJZCksIFtdKTtcclxufTtcclxuXHJcbi8vICAg44OH44O844K/44KS5Y+W5b6X44GZ44KLXHJcbi8vIGhvb2tz44KS5L2/44GE44Gf44GE44Gu44Gn44Kr44K544K/44OgaG9va3PjgavjgZfjgabjgYrjgY9cclxuY29uc3QgdXNlRmV0Y2hEYXRhID0gKHJlZjogZmlyZWJhc2UuZGF0YWJhc2UuUmVmZXJlbmNlKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIOOCpOODmeODs+ODiOODquOCueODiuODvOOCkui/veWKoOOBmeOCi+OBq+OBr29u44KS5L2/44GGXHJcbiAgICAgICAgcmVmLm9uKFwidmFsdWVcIiwgKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy8g44OR44K544Gr5a++44GZ44KL5YWo44OH44O844K/44KS5ZCr44KAc25hcHNob3TjgYzmuKHjgZXjgozjgotcclxuICAgICAgICAgICAgLy8g44Gq44GE5aC05ZCI44GvbnVsbOOBjOi/lOOCi+OBruOBp+WtmOWcqOOCkuODgeOCp+ODg+OCr+OBl+OBpuOBiuOBj1xyXG4gICAgICAgICAgICBpZiAoc25hcHNob3Q/LnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlZi5vZmYoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHJlZuOBruWkieabtOOBq+W/nOOBmOOBpuWGjeWPluW+l+OBmeOCi1xyXG4gICAgICAgIC8vICAg5oyH5a6a44GX44Gf44OR44K544Gu44OH44O844K/44Gr5a++44GZ44KL5pu05paw44KS44GZ44G544Gm5qSc55+l44GZ44KL44Gr44GvdmFsdWXjgpLmjIflrprjgZnjgozjgbDoia/jgYTjgIJcclxuICAgIH0sIFtcInZhbHVlXCJdKTtcclxuICAgIC8vIOODh+ODvOOCv+OCkui/lOWNtOOBmeOCi1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm4geyBkYXRhIH07XHJcbn07XHJcblxyXG4vLyDlrp/pmpvjgavlkbzjgbPlh7rjgZnpmpvjga/jgZPjgaHjgonjgpLkvb/jgYZcclxuY29uc3QgdXNlRmV0Y2hBbGxEYXRhID0gKCkgPT4ge1xyXG4gICAgLy8gcmVm44KS5Y+W5b6X44GX44GmXHJcbiAgICBjb25zdCByZWYgPSB1c2VEYXRhYmFzZSgpO1xyXG4gICAgLy8gcmVm5rih44GX44Gm44OH44O844K/44KS5Y+W5b6X44GZ44KLXHJcbiAgICByZXR1cm4gdXNlRmV0Y2hEYXRhKHJlZik7XHJcbn07XHJcblxyXG4vLyDnmbvpjLLlh6bnkIZcclxuLy8g44GT44Gu55m76Yyy44Gvc2V044Gr5rih44GX44Gf5YCk44Gn44Gu55m76Yyy44Go44Gq44KL44CCXHJcbi8vIOOBpOOBvuOCiuOAgeaXouWtmOOBruODh+ODvOOCv+OCguWQq+OCgeOBpua4oeOBl+OBpuOBguOBkuOBquOBhOOBqOeZu+mMsua4iOOBv+OBruODh+ODvOOCv+OBjOa2iOOBiOOCi+OAglxyXG5jb25zdCB1c2VTZXREb2N1bWVudCA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlRG9jdW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZG9jdW1lbnQ6IHVua25vd24pID0+IHtcclxuICAgICAgICAgICAgLy8gcmVm44Gr44Gk44GE44Gm44Gv5YmN5Zue44Gu6KiY5LqL5Y+C54WnXHJcbiAgICAgICAgICAgIC8vIHNldOOBq+eZu+mMsuOBl+OBn+OBhOODh+ODvOOCv+OCkua4oeOBl+OBpuOBguOBkuOCjOOBsOeZu+mMsuOBp+OBjeOCi1xyXG4gICAgICAgICAgICByZWYuc2V0KGRvY3VtZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtyZWZdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHVwZGF0ZURvY3VtZW50O1xyXG59O1xyXG5cclxuY29uc3QgdXNlUmVnaXN0ZXJEYXRhID0gKCkgPT4ge1xyXG4gICAgLy8g5YmN5Zue5L2c44Gj44GfdXNlRGF0YWJhc2UoKeOCkuS9v+OBhHJlZuWPluW+l1xyXG4gICAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICAgIGNvbnN0IHNldERvY3VtZW50ID0gdXNlU2V0RG9jdW1lbnQocmVmKTtcclxuICAgIC8vIOeZu+mMsua4iOOBv+OBruODh+ODvOOCv+OCkuWFqOmDqOWPluW+l+OBmeOCi1xyXG4gICAgY29uc3QgeyBkYXRhOiByZWdpc3RlcmVkRGF0YSB9ID0gdXNlRmV0Y2hBbGxEYXRhKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZVJlZHV4RmV0Y2goKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gICAgY29uc29sZS5sb2codXNlclRhc2tJbmZvKTtcclxuICAgIC8vIOODh+ODvOOCv+OCkueZu+mMsuOBmeOCi+mWouaVsOOCkui/lOWNtOOBmeOCi1xyXG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgLy8gKHJlZ2lzdGVyRGF0YTogdXNlclRhc2spID0+IHtcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOOBk+OBk+OBp1JlZHV444Gr5L+d566h44GX44Gm44GE44KLc3RhdGXjgpLmm7TmlrDjgZnjgovvvJ9cclxuICAgICAgICAgICAgLy8gZGlzcGF0Y2goUmVnaXN0ZXIoeyAuLi5yZWdpc3RlckRhdGEgfSkpO1xyXG4gICAgICAgICAgICAvLyDml6LlrZjjga7jg4fjg7zjgr/jgajnmbvpjLLjgZnjgotrZXktdmFsdWXjgpLlkIjjgo/jgZvjgabnmbvpjLLplqLmlbDjgavmuKHjgZlcclxuICAgICAgICAgICAgLy8gc2V0RG9jdW1lbnQoeyAuLi5yZWdpc3RlcmVkRGF0YSwgLi4ucmVnaXN0ZXJEYXRhIH0pO1xyXG4gICAgICAgICAgICBzZXREb2N1bWVudCh1c2VyVGFza0luZm8pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3NldERvY3VtZW50LCByZWdpc3RlcmVkRGF0YV1cclxuICAgICk7XHJcblxyXG4gICAgLy8g6L+U44GX44Gf6Zai5pWw44KS5Yip55So44GZ44KL44GT44Go44Gn44CB55m76Yyy5riI44G/44OH44O844K/5YWo44GmK+eZu+mMsuOBl+OBn+OBhOODh+ODvOOCv+OCkkRC44Gr5L+d566h44Gn44GN44KLXHJcbiAgICByZXR1cm4gcmVnaXN0ZXJEYXRhO1xyXG59O1xyXG5cclxuLy8g5pu05paw5Yem55CGXHJcbmNvbnN0IHVzZVVwZGF0ZURvY3VtZW50ID0gKHJlZjogZmlyZWJhc2UuZGF0YWJhc2UuUmVmZXJlbmNlKSA9PiB7XHJcbiAgICAvLyByZWYudXBkYXRl44GMT2JqZWN044KS5Y+X44GR5Y+W44KL44Gu44Gn44CBT2JqZWN044KS5byV5pWw44Gr5Y+W44KL6Zai5pWw44KS5a6a576pXHJcbiAgICBjb25zdCB1cGRhdGVEb2N1bWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChkb2N1bWVudDogT2JqZWN0KSA9PiByZWYudXBkYXRlKGRvY3VtZW50KSxcclxuICAgICAgICBbcmVmXVxyXG4gICAgKTtcclxuICAgIHJldHVybiB1cGRhdGVEb2N1bWVudDtcclxufTtcclxuXHJcbmNvbnN0IHVzZVVwZGF0ZURhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXTjga7mmYLjgajlkIzjgZjjgY9yZWbjgpLlj5blvpfjgZfjgabjgIFcclxuICAgIGNvbnN0IHJlZiA9IHVzZURhdGFiYXNlKCk7XHJcbiAgICAvLyDplqLmlbDlkbzjgbPlh7rjgZfjgaZcclxuICAgIGNvbnN0IHVwZGF0ZURvY3VtZW50ID0gdXNlVXBkYXRlRG9jdW1lbnQocmVmKTtcclxuICAgIC8vIOabtOaWsOWHpueQhuOCkuS9nOaIkOOBmeOCi1xyXG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChyZWdpc3RlckRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICAgICAgdXBkYXRlRG9jdW1lbnQocmVnaXN0ZXJEYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt1cGRhdGVEb2N1bWVudF1cclxuICAgICk7XHJcbiAgICByZXR1cm4gdXBkYXRlRGF0YTtcclxufTtcclxuXHJcbi8vIOWJiumZpOWHpueQhlxyXG5jb25zdCB1c2VSZW1vdmVEb2N1bWVudCA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgLy8g54m544Gr5byV5pWw44GM5b+F6KaB44Gq44GE44Gu44Gn44Gf44Gg5ZG844Gz5Ye644GZ44Gu44G/XHJcbiAgICBjb25zdCBkZWxldGVEb2N1bWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChkb2N1bWVudDogc3RyaW5nKSA9PiByZWYuY2hpbGQoZG9jdW1lbnQpLnJlbW92ZSgpLFxyXG4gICAgICAgIFtyZWZdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRlbGV0ZURvY3VtZW50O1xyXG59O1xyXG4vLyBzZXTjgIF1cGRhdGXjgajlkIzjgZjjgarjga7jgaflibLmhJtcclxuY29uc3QgdXNlRGVsdGVEYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICAgIGNvbnN0IHJlbW92ZURvY3VtZW50ID0gdXNlUmVtb3ZlRG9jdW1lbnQocmVmKTtcclxuICAgIGNvbnN0IGRlbGV0ZURhdGEgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZGVsZXRlRGF0YTogc3RyaW5nKSA9PiByZW1vdmVEb2N1bWVudChkZWxldGVEYXRhKSxcclxuICAgICAgICBbcmVtb3ZlRG9jdW1lbnRdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRlbGV0ZURhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgeyB1c2VGZXRjaEFsbERhdGEsIHVzZVJlZ2lzdGVyRGF0YSwgdXNlVXBkYXRlRGF0YSwgdXNlRGVsdGVEYXRhIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=