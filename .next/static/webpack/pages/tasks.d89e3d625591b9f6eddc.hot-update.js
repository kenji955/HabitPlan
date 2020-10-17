webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/components/test/firebaseTest/getData.tsx":
/*!******************************************************!*\
  !*** ./src/components/test/firebaseTest/getData.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DBFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DBFetch */ "./src/components/test/firebaseTest/DBFetch.tsx");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\test\\firebaseTest\\getData.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


// 認証周りやDB周りで必要なためimportしておく




function ListComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.tasks;
  })),
      UT = _useState[0],
      setUT = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      userId = _useSelector.userId;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useFetchAllData = Object(_DBFetch__WEBPACK_IMPORTED_MODULE_1__["useFetchAllData"])(),
      data = _useFetchAllData.data;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector2.userTaskInfo;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // dataを取ってくる
    if (userId != '' && !!data) {
      console.log(userId);
      console.log("getData.tsx data");
      console.log(data);
      dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_5__["init"])(data)); // setUT(useSelector((state: RootState) => state.tasks));
    }
  }, [userId]); // ここでstateを使うならログイン時にDBから取得したデータをReduxに保管する必要がある。
  // useCallback(() => {
  //     userTask = useSelector((state: RootState) => state.tasks);
  // }, [userId]);

  console.log("getData userTaskInfo");
  console.log(userTaskInfo); // data ? console.log(data.userTaskInfo) : console.log('noo');
  // object形式なので使いやすいように{key, value}形式のリストに変換する
  // また、データが変わらない限り結果は同じなのでメモ化しておく
  // const dataList = useMemo(() => Object.entries(data || {}).map(([key, value]) => ({ key, value })), [data]);
  // return <div>test</div>;

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 12
    }
  }, userTaskInfo.calendar[0].PatternId); // <dl>{dataList.map(({ key, value }) =>
  //   <React.Fragment key={`${key}${value}`}>
  //     <dt>key: {key}</dt>
  //     <dt>value: {value}</dt>
  //   </React.Fragment>
  // )}</dl>
}

_s(ListComponent, "uPNK2yR4e0xwFHWyqNWigf0DT4k=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], _DBFetch__WEBPACK_IMPORTED_MODULE_1__["useFetchAllData"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = ListComponent;

var _c;

$RefreshReg$(_c, "ListComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvZ2V0RGF0YS50c3giXSwibmFtZXMiOlsiTGlzdENvbXBvbmVudCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwiVVQiLCJzZXRVVCIsInVzZXIiLCJ1c2VySWQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRmV0Y2hBbGxEYXRhIiwiZGF0YSIsInVzZXJUYXNrSW5mbyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJpbml0IiwiY2FsZW5kYXIiLCJQYXR0ZXJuSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUEsa0JBQ2hCQyxzREFBUSxDQUN4QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBc0JBLEtBQUssQ0FBQ0MsS0FBNUI7QUFBQSxHQUFELENBRGEsQ0FEUTtBQUFBLE1BQzdCQyxFQUQ2QjtBQUFBLE1BQ3pCQyxLQUR5Qjs7QUFBQSxxQkFJakJKLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQXNCQSxLQUFLLENBQUNJLElBQTVCO0FBQUEsR0FBRCxDQUpNO0FBQUEsTUFJNUJDLE1BSjRCLGdCQUk1QkEsTUFKNEI7O0FBS3BDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBTG9DLHlCQU1uQkMsZ0VBQWUsRUFOSTtBQUFBLE1BTTVCQyxJQU40QixvQkFNNUJBLElBTjRCOztBQUFBLHNCQU9YViwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFzQkEsS0FBSyxDQUFDQyxLQUE1QjtBQUFBLEdBQUQsQ0FQQTtBQUFBLE1BTzVCUyxZQVA0QixpQkFPNUJBLFlBUDRCOztBQVFwQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQSxRQUFJTixNQUFNLElBQUksRUFBVixJQUFnQixDQUFDLENBQUNJLElBQXRCLEVBQTRCO0FBQzFCRyxhQUFPLENBQUNDLEdBQVIsQ0FBWVIsTUFBWjtBQUNBTyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNBSCxjQUFRLENBQUNRLGlFQUFJLENBQUNMLElBQUQsQ0FBTCxDQUFSLENBSjBCLENBSzFCO0FBQ0Q7QUFDRixHQVRRLEVBU1AsQ0FBQ0osTUFBRCxDQVRPLENBQVQsQ0FSb0MsQ0FtQnBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBTyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsWUFBWixFQXpCb0MsQ0EwQnBDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1BLFlBQVksQ0FBQ0ssUUFBYixDQUFzQixDQUF0QixFQUF5QkMsU0FBL0IsQ0FBUCxDQWhDb0MsQ0FpQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztHQXZDdUJuQixhO1VBRWhCRSx1RCxFQUVlQSx1RCxFQUNGUSx1RCxFQUNBQyx3RCxFQUNRVCx1RDs7O0tBUExGLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MuZDg5ZTNkNjI1NTkxYjlmNmVkZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaEFsbERhdGEgfSBmcm9tIFwiLi9EQkZldGNoXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbi8vIOiqjeiovOWRqOOCiuOChERC5ZGo44KK44Gn5b+F6KaB44Gq44Gf44KBaW1wb3J044GX44Gm44GK44GPXHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHVzZXJUYXNrIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdXNlclRhc2tzVHlwZVwiO1xyXG5pbXBvcnQgeyBpbml0IH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdENvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IFtVVCwgc2V0VVRdID0gdXNlU3RhdGUoXHJcbiAgICAgICAgdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUZldGNoQWxsRGF0YSgpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAvLyBkYXRh44KS5Y+W44Gj44Gm44GP44KLXHJcbiAgICAgIGlmICh1c2VySWQgIT0gJycgJiYgISFkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldERhdGEudHN4IGRhdGFcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgZGlzcGF0Y2goaW5pdChkYXRhKSk7XHJcbiAgICAgICAgLy8gc2V0VVQodXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKSk7XHJcbiAgICAgIH1cclxuICAgIH0sW3VzZXJJZF0pO1xyXG4gICAgXHJcbiAgICAvLyDjgZPjgZPjgadzdGF0ZeOCkuS9v+OBhuOBquOCieODreOCsOOCpOODs+aZguOBq0RC44GL44KJ5Y+W5b6X44GX44Gf44OH44O844K/44KSUmVkdXjjgavkv53nrqHjgZnjgovlv4XopoHjgYzjgYLjgovjgIJcclxuICAgIC8vIHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIC8vICAgICB1c2VyVGFzayA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICAvLyB9LCBbdXNlcklkXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJnZXREYXRhIHVzZXJUYXNrSW5mb1wiKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJUYXNrSW5mbyk7XHJcbiAgICAvLyBkYXRhID8gY29uc29sZS5sb2coZGF0YS51c2VyVGFza0luZm8pIDogY29uc29sZS5sb2coJ25vbycpO1xyXG4gICAgLy8gb2JqZWN05b2i5byP44Gq44Gu44Gn5L2/44GE44KE44GZ44GE44KI44GG44Gre2tleSwgdmFsdWV95b2i5byP44Gu44Oq44K544OI44Gr5aSJ5o+b44GZ44KLXHJcbiAgICAvLyDjgb7jgZ/jgIHjg4fjg7zjgr/jgYzlpInjgo/jgonjgarjgYTpmZDjgorntZDmnpzjga/lkIzjgZjjgarjga7jgafjg6Hjg6LljJbjgZfjgabjgYrjgY9cclxuICAgIC8vIGNvbnN0IGRhdGFMaXN0ID0gdXNlTWVtbygoKSA9PiBPYmplY3QuZW50cmllcyhkYXRhIHx8IHt9KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHsga2V5LCB2YWx1ZSB9KSksIFtkYXRhXSk7XHJcblxyXG4gICAgLy8gcmV0dXJuIDxkaXY+dGVzdDwvZGl2PjtcclxuICAgIHJldHVybiA8ZGl2Pnt1c2VyVGFza0luZm8uY2FsZW5kYXJbMF0uUGF0dGVybklkfTwvZGl2PjtcclxuICAgIC8vIDxkbD57ZGF0YUxpc3QubWFwKCh7IGtleSwgdmFsdWUgfSkgPT5cclxuICAgIC8vICAgPFJlYWN0LkZyYWdtZW50IGtleT17YCR7a2V5fSR7dmFsdWV9YH0+XHJcbiAgICAvLyAgICAgPGR0PmtleToge2tleX08L2R0PlxyXG4gICAgLy8gICAgIDxkdD52YWx1ZToge3ZhbHVlfTwvZHQ+XHJcbiAgICAvLyAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAvLyApfTwvZGw+XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==