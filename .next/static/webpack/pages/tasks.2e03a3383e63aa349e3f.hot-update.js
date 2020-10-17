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
    if (!!userId && !!data) {
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
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvZ2V0RGF0YS50c3giXSwibmFtZXMiOlsiTGlzdENvbXBvbmVudCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwiVVQiLCJzZXRVVCIsInVzZXIiLCJ1c2VySWQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRmV0Y2hBbGxEYXRhIiwiZGF0YSIsInVzZXJUYXNrSW5mbyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJpbml0IiwiY2FsZW5kYXIiLCJQYXR0ZXJuSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUEsa0JBQ2hCQyxzREFBUSxDQUN4QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBc0JBLEtBQUssQ0FBQ0MsS0FBNUI7QUFBQSxHQUFELENBRGEsQ0FEUTtBQUFBLE1BQzdCQyxFQUQ2QjtBQUFBLE1BQ3pCQyxLQUR5Qjs7QUFBQSxxQkFJakJKLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQXNCQSxLQUFLLENBQUNJLElBQTVCO0FBQUEsR0FBRCxDQUpNO0FBQUEsTUFJNUJDLE1BSjRCLGdCQUk1QkEsTUFKNEI7O0FBS3BDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBTG9DLHlCQU1uQkMsZ0VBQWUsRUFOSTtBQUFBLE1BTTVCQyxJQU40QixvQkFNNUJBLElBTjRCOztBQUFBLHNCQU9YViwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFzQkEsS0FBSyxDQUFDQyxLQUE1QjtBQUFBLEdBQUQsQ0FQQTtBQUFBLE1BTzVCUyxZQVA0QixpQkFPNUJBLFlBUDRCOztBQVFwQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQSxRQUFJLENBQUMsQ0FBQ04sTUFBRixJQUFZLENBQUMsQ0FBQ0ksSUFBbEIsRUFBd0I7QUFDdEJHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0FILGNBQVEsQ0FBQ1EsaUVBQUksQ0FBQ0wsSUFBRCxDQUFMLENBQVIsQ0FIc0IsQ0FJdEI7QUFDRDtBQUNGLEdBUlEsRUFRUCxDQUFDSixNQUFELENBUk8sQ0FBVCxDQVJvQyxDQWtCcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUFPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxZQUFaLEVBeEJvQyxDQXlCcEM7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUEsWUFBWSxDQUFDSyxRQUFiLENBQXNCLENBQXRCLEVBQXlCQyxTQUEvQixDQUFQLENBL0JvQyxDQWdDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0dBdEN1Qm5CLGE7VUFFaEJFLHVELEVBRWVBLHVELEVBQ0ZRLHVELEVBQ0FDLHdELEVBQ1FULHVEOzs7S0FQTEYsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy4yZTAzYTMzODNlNjNhYTM0OWUzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUZldGNoQWxsRGF0YSB9IGZyb20gXCIuL0RCRmV0Y2hcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuLy8g6KqN6Ki85ZGo44KK44KERELlkajjgorjgaflv4XopoHjgarjgZ/jgoFpbXBvcnTjgZfjgabjgYrjgY9cclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdXNlclRhc2sgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy91c2VyVGFza3NUeXBlXCI7XHJcbmltcG9ydCB7IGluaXQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0Q29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgW1VULCBzZXRVVF0gPSB1c2VTdGF0ZShcclxuICAgICAgICB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyB1c2VySWQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlRmV0Y2hBbGxEYXRhKCk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIC8vIGRhdGHjgpLlj5bjgaPjgabjgY/jgotcclxuICAgICAgaWYgKCEhdXNlcklkICYmICEhZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RGF0YS50c3ggZGF0YVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBkaXNwYXRjaChpbml0KGRhdGEpKTtcclxuICAgICAgICAvLyBzZXRVVCh1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpKTtcclxuICAgICAgfVxyXG4gICAgfSxbdXNlcklkXSk7XHJcbiAgICBcclxuICAgIC8vIOOBk+OBk+OBp3N0YXRl44KS5L2/44GG44Gq44KJ44Ot44Kw44Kk44Oz5pmC44GrRELjgYvjgonlj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpJSZWR1eOOBq+S/neeuoeOBmeOCi+W/heimgeOBjOOBguOCi+OAglxyXG4gICAgLy8gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgLy8gICAgIHVzZXJUYXNrID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuICAgIC8vIH0sIFt1c2VySWRdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImdldERhdGEgdXNlclRhc2tJbmZvXCIpO1xyXG4gICAgY29uc29sZS5sb2codXNlclRhc2tJbmZvKTtcclxuICAgIC8vIGRhdGEgPyBjb25zb2xlLmxvZyhkYXRhLnVzZXJUYXNrSW5mbykgOiBjb25zb2xlLmxvZygnbm9vJyk7XHJcbiAgICAvLyBvYmplY3TlvaLlvI/jgarjga7jgafkvb/jgYTjgoTjgZnjgYTjgojjgYbjgat7a2V5LCB2YWx1ZX3lvaLlvI/jga7jg6rjgrnjg4jjgavlpInmj5vjgZnjgotcclxuICAgIC8vIOOBvuOBn+OAgeODh+ODvOOCv+OBjOWkieOCj+OCieOBquOBhOmZkOOCiue1kOaenOOBr+WQjOOBmOOBquOBruOBp+ODoeODouWMluOBl+OBpuOBiuOBj1xyXG4gICAgLy8gY29uc3QgZGF0YUxpc3QgPSB1c2VNZW1vKCgpID0+IE9iamVjdC5lbnRyaWVzKGRhdGEgfHwge30pLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoeyBrZXksIHZhbHVlIH0pKSwgW2RhdGFdKTtcclxuXHJcbiAgICAvLyByZXR1cm4gPGRpdj50ZXN0PC9kaXY+O1xyXG4gICAgcmV0dXJuIDxkaXY+e3VzZXJUYXNrSW5mby5jYWxlbmRhclswXS5QYXR0ZXJuSWR9PC9kaXY+O1xyXG4gICAgLy8gPGRsPntkYXRhTGlzdC5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PlxyXG4gICAgLy8gICA8UmVhY3QuRnJhZ21lbnQga2V5PXtgJHtrZXl9JHt2YWx1ZX1gfT5cclxuICAgIC8vICAgICA8ZHQ+a2V5OiB7a2V5fTwvZHQ+XHJcbiAgICAvLyAgICAgPGR0PnZhbHVlOiB7dmFsdWV9PC9kdD5cclxuICAgIC8vICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIC8vICl9PC9kbD5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9