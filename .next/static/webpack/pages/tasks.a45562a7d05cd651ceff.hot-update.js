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
    return ref.child('key1').remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvREJGZXRjaC50c3giXSwibmFtZXMiOlsidXNlRGF0YWJhc2UiLCJ1c2VNZW1vIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsInVzZUZldGNoRGF0YSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJvbiIsInNuYXBzaG90IiwidmFsIiwib2ZmIiwidXNlRmV0Y2hBbGxEYXRhIiwidXNlU2V0RG9jdW1lbnQiLCJ1cGRhdGVEb2N1bWVudCIsInVzZUNhbGxiYWNrIiwiZG9jdW1lbnQiLCJzZXQiLCJ1c2VSZWdpc3RlckRhdGEiLCJzZXREb2N1bWVudCIsInJlZ2lzdGVyZWREYXRhIiwicmVnaXN0ZXJEYXRhIiwidXNlVXBkYXRlRG9jdW1lbnQiLCJ1cGRhdGUiLCJ1c2VVcGRhdGVEYXRhIiwidXBkYXRlRGF0YSIsInVzZVJlbW92ZURvY3VtZW50IiwiZGVsZXRlRG9jdW1lbnQiLCJjaGlsZCIsInJlbW92ZSIsInVzZURlbHRlRGF0YSIsInJlbW92ZURvY3VtZW50IiwiZGVsZXRlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUtBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEI7QUFDQSxTQUFPQyxxREFBTyxDQUFDO0FBQUEsV0FBTUMsc0RBQVEsQ0FBQ0MsUUFBVCxHQUFvQkMsR0FBcEIsQ0FBd0IsU0FBeEIsQ0FBTjtBQUFBLEdBQUQsRUFBMkMsRUFBM0MsQ0FBZDtBQUNILENBSEQsQyxDQUtBO0FBQ0E7OztHQU5NSixXOztBQU9OLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNELEdBQUQsRUFBc0M7QUFBQTs7QUFBQSxrQkFDL0JFLHNEQUFRLEVBRHVCO0FBQUEsTUFD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QUFQO0FBQ0QsQ0FWTSxDLENBY1A7O0lBZGFELGE7VUFFRzFCLFcsRUFFU3dCLGlCOzs7QUFXekIsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDeEIsR0FBRCxFQUFzQztBQUFBOztBQUM1RDtBQUNGLE1BQU15QixjQUFjLEdBQUdaLHlEQUFXLENBQUMsVUFBQ0MsUUFBRDtBQUFBLFdBQXNCZCxHQUFHLENBQUMwQixLQUFKLENBQVUsTUFBVixFQUFrQkMsTUFBbEIsRUFBdEI7QUFBQSxHQUFELEVBQW1ELENBQUMzQixHQUFELENBQW5ELENBQWxDO0FBQ0EsU0FBT3lCLGNBQVA7QUFDRCxDQUpELEMsQ0FLQTs7O0lBTE1ELGlCOztBQU1DLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDaEMsTUFBTTVCLEdBQUcsR0FBR0osV0FBVyxFQUF2QjtBQUNBLE1BQU1pQyxjQUFjLEdBQUdMLGlCQUFpQixDQUFDeEIsR0FBRCxDQUF4QztBQUNBLE1BQU04QixVQUFVLEdBQUdqQix5REFBVyxDQUFDLFVBQUNpQixVQUFEO0FBQUEsV0FBeUNELGNBQWMsQ0FBQ0MsVUFBRCxDQUF2RDtBQUFBLEdBQUQsRUFBc0UsQ0FBQ0QsY0FBRCxDQUF0RSxDQUE5QjtBQUNBLFNBQU9DLFVBQVA7QUFDRCxDQUxNOztJQUFNRixZO1VBQ0NoQyxXLEVBQ1c0QixpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy5hNDU1NjJhN2QwNWNkNjUxY2VmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g44OH44O844K/44OZ44O844K544G444Gu5o6l57aaXHJcblxyXG4vLyBpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG4vLyDoqo3oqLzlkajjgorjgoREQuWRqOOCiuOBp+W/heimgeOBquOBn+OCgWltcG9ydOOBl+OBpuOBiuOBj1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge2ZpcmViYXNlfSBmcm9tICcuL2ZpcmViYXNlVGVzdCc7XHJcblxyXG5cclxuLy8g44Kr44K544K/44Og44OV44OD44Kv44Gr44GX44Gm44GK44GPXHJcbmNvbnN0IHVzZURhdGFiYXNlID0gKCkgPT4ge1xyXG4gICAgLy8g5ZCM44GY44OR44K544Gn44Gv5q+O5Zue5ZCM44GY57WQ5p6c44GM5b6X44KJ44KM44KL44Gu44GnbWVtb+WMluOBl+OBpuOBiuOBj1xyXG4gICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCIvc2FtcGxlXCIpLCBbXSk7XHJcbn07XHJcblxyXG4vLyAgIOODh+ODvOOCv+OCkuWPluW+l+OBmeOCi1xyXG4vLyBob29rc+OCkuS9v+OBhOOBn+OBhOOBruOBp+OCq+OCueOCv+ODoGhvb2tz44Gr44GX44Gm44GK44GPXHJcbmNvbnN0IHVzZUZldGNoRGF0YSA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfT4oKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6L+95Yqg44GZ44KL44Gr44Gvb27jgpLkvb/jgYZcclxuICAgICAgICByZWYub24oXCJ2YWx1ZVwiLCAoc25hcHNob3Q6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOODkeOCueOBq+WvvuOBmeOCi+WFqOODh+ODvOOCv+OCkuWQq+OCgHNuYXBzaG9044GM5rih44GV44KM44KLXHJcbiAgICAgICAgICAgIC8vIOOBquOBhOWgtOWQiOOBr251bGzjgYzlpInjgYjjgovjga7jgaflrZjlnKjjgpLjg4Hjgqfjg4Pjgq/jgZfjgabjgYrjgY9cclxuICAgICAgICAgICAgaWYgKHNuYXBzaG90Py52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICByZWYub2ZmKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyByZWbjga7lpInmm7Tjgavlv5zjgZjjgablho3lj5blvpfjgZnjgotcclxuICAgICAgICAvLyAgIOaMh+WumuOBl+OBn+ODkeOCueOBruODh+ODvOOCv+OBq+WvvuOBmeOCi+abtOaWsOOCkuOBmeOBueOBpuaknOefpeOBmeOCi+OBq+OBr3ZhbHVl44KS5oyH5a6a44GZ44KM44Gw6Imv44GE44CCXHJcbiAgICB9LCBbcmVmXSk7XHJcbiAgICAvLyDjg4fjg7zjgr/jgpLov5TljbTjgZnjgotcclxuICAgIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbi8vIOWun+mam+OBq+WRvOOBs+WHuuOBmemam+OBr+OBk+OBoeOCieOCkuS9v+OBhlxyXG5leHBvcnQgY29uc3QgdXNlRmV0Y2hBbGxEYXRhID0gKCkgPT4ge1xyXG4gICAgLy8gcmVm44KS5Y+W5b6X44GX44GmXHJcbiAgICBjb25zdCByZWYgPSB1c2VEYXRhYmFzZSgpO1xyXG4gICAgLy8gcmVm5rih44GX44Gm44OH44O844K/44KS5Y+W5b6X44GZ44KLXHJcbiAgICByZXR1cm4gdXNlRmV0Y2hEYXRhKHJlZik7XHJcbn07XHJcblxyXG4vLyDnmbvpjLLlh6bnkIZcclxuLy8g44GT44Gu55m76Yyy44Gvc2V044Gr5rih44GX44Gf5YCk44Gn44Gu55m76Yyy44Go44Gq44KL44CCXHJcbi8vIOOBpOOBvuOCiuOAgeaXouWtmOOBruODh+ODvOOCv+OCguWQq+OCgeOBpua4oeOBl+OBpuOBguOBkuOBquOBhOOBqOeZu+mMsua4iOOBv+OBruODh+ODvOOCv+OBjOa2iOOBiOOCi+OAglxyXG5jb25zdCB1c2VTZXREb2N1bWVudCA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlRG9jdW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgKGRvY3VtZW50OiB1bmtub3duKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gcmVm44Gr44Gk44GE44Gm44Gv5YmN5Zue44Gu6KiY5LqL5Y+C54WnXHJcbiAgICAgICAgICAgICAgLy8gc2V044Gr55m76Yyy44GX44Gf44GE44OH44O844K/44KS5rih44GX44Gm44GC44GS44KM44Gw55m76Yyy44Gn44GN44KLXHJcbiAgICAgICAgcmVmLnNldChkb2N1bWVudCk7XHJcbiAgICAgIH0sIFtyZWZdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHVwZGF0ZURvY3VtZW50O1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IHVzZVJlZ2lzdGVyRGF0YSA9ICgpID0+IHtcclxuICAgICAgLy8g5YmN5Zue5L2c44Gj44GfdXNlRGF0YWJhc2UoKeOCkuS9v+OBhHJlZuWPluW+l1xyXG4gICAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICAgIGNvbnN0IHNldERvY3VtZW50ID0gdXNlU2V0RG9jdW1lbnQocmVmKTtcclxuICAgICAgLy8g55m76Yyy5riI44G/44Gu44OH44O844K/44KS5YWo6YOo5Y+W5b6X44GZ44KLXHJcbiAgICBjb25zdCB7ZGF0YTogcmVnaXN0ZXJlZERhdGF9ID0gdXNlRmV0Y2hBbGxEYXRhKCk7XHJcbiAgXHJcbiAgICAgIC8vIOODh+ODvOOCv+OCkueZu+mMsuOBmeOCi+mWouaVsOOCkui/lOWNtOOBmeOCi1xyXG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gdXNlQ2FsbGJhY2soKHJlZ2lzdGVyRGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgLy8g5pei5a2Y44Gu44OH44O844K/44Go55m76Yyy44GZ44KLa2V5LXZhbHVl44KS5ZCI44KP44Gb44Gm55m76Yyy6Zai5pWw44Gr5rih44GZXHJcbiAgICAgIHNldERvY3VtZW50KHsuLi5yZWdpc3RlcmVkRGF0YSwgLi4ucmVnaXN0ZXJEYXRhfSk7XHJcbiAgICB9LCBbc2V0RG9jdW1lbnQsIHJlZ2lzdGVyZWREYXRhXSk7XHJcbiAgXHJcbiAgICAvLyDov5TjgZfjgZ/plqLmlbDjgpLliKnnlKjjgZnjgovjgZPjgajjgafjgIHnmbvpjLLmuIjjgb/jg4fjg7zjgr/lhajjgaYr55m76Yyy44GX44Gf44GE44OH44O844K/44KSRELjgavkv53nrqHjgafjgY3jgotcclxuICAgIHJldHVybiByZWdpc3RlckRhdGE7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuLy8g5pu05paw5Yem55CGXHJcbiAgY29uc3QgdXNlVXBkYXRlRG9jdW1lbnQgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIC8vIHJlZi51cGRhdGXjgYxPYmplY3TjgpLlj5fjgZHlj5bjgovjga7jgafjgIFPYmplY3TjgpLlvJXmlbDjgavlj5bjgovplqLmlbDjgpLlrprnvqlcclxuICBjb25zdCB1cGRhdGVEb2N1bWVudCA9IHVzZUNhbGxiYWNrKChkb2N1bWVudDogT2JqZWN0KSA9PiByZWYudXBkYXRlKGRvY3VtZW50KSwgW3JlZl0pO1xyXG4gIHJldHVybiB1cGRhdGVEb2N1bWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVVwZGF0ZURhdGEgPSAoKSA9PiB7XHJcbiAgLy8gc2V044Gu5pmC44Go5ZCM44GY44GPcmVm44KS5Y+W5b6X44GX44Gm44CBXHJcbiAgICBjb25zdCByZWYgPSB1c2VEYXRhYmFzZSgpO1xyXG4gICAgLy8g6Zai5pWw5ZG844Gz5Ye644GX44GmXHJcbiAgY29uc3QgdXBkYXRlRG9jdW1lbnQgPSB1c2VVcGRhdGVEb2N1bWVudChyZWYpO1xyXG4gICAgLy8g5pu05paw5Yem55CG44KS5L2c5oiQ44GZ44KLXHJcbiAgY29uc3QgdXBkYXRlRGF0YSA9IHVzZUNhbGxiYWNrKChyZWdpc3RlckRhdGE6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KSA9PiB7XHJcbiAgICB1cGRhdGVEb2N1bWVudChyZWdpc3RlckRhdGEpO1xyXG4gIH0sIFt1cGRhdGVEb2N1bWVudF0pO1xyXG4gIHJldHVybiB1cGRhdGVEYXRhO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIOWJiumZpOWHpueQhlxyXG5jb25zdCB1c2VSZW1vdmVEb2N1bWVudCA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgLy8g54m544Gr5byV5pWw44GM5b+F6KaB44Gq44GE44Gu44Gn44Gf44Gg5ZG844Gz5Ye644GZ44Gu44G/XHJcbiAgY29uc3QgZGVsZXRlRG9jdW1lbnQgPSB1c2VDYWxsYmFjaygoZG9jdW1lbnQ6IE9iamVjdCkgPT4gcmVmLmNoaWxkKCdrZXkxJykucmVtb3ZlKCksIFtyZWZdKTtcclxuICByZXR1cm4gZGVsZXRlRG9jdW1lbnQ7XHJcbn1cclxuLy8gc2V044CBdXBkYXRl44Go5ZCM44GY44Gq44Gu44Gn5Ymy5oSbXHJcbmV4cG9ydCBjb25zdCB1c2VEZWx0ZURhdGEgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICBjb25zdCByZW1vdmVEb2N1bWVudCA9IHVzZVJlbW92ZURvY3VtZW50KHJlZik7XHJcbiAgY29uc3QgZGVsZXRlRGF0YSA9IHVzZUNhbGxiYWNrKChkZWxldGVEYXRhOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkgPT4gcmVtb3ZlRG9jdW1lbnQoZGVsZXRlRGF0YSksIFtyZW1vdmVEb2N1bWVudF0pXHJcbiAgcmV0dXJuIGRlbGV0ZURhdGE7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9