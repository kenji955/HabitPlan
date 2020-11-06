webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/components/view/TaskModal.tsx":
/*!*******************************************!*\
  !*** ./src/components/view/TaskModal.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskModal; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _InputNormal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InputNormal */ "./src/components/view/InputNormal.tsx");
/* harmony import */ var _AppVar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AppVar */ "./src/components/view/AppVar.tsx");
/* harmony import */ var _PatternSwitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PatternSwitch */ "./src/components/view/PatternSwitch.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");



var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\TaskModal.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center" // width: "80%",
      // height: "80%",

    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      width: "50%",
      height: "80%",
      overflowY: "scroll",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  });
});
var contentsList = [{
  label: "if-thenプランニング",
  value: ""
}, {
  label: "習慣の積み上げ",
  value: ""
}, {
  label: "パターン",
  value: ""
}, {
  label: "気が進まないとき",
  value: ""
}, {
  label: "長期的に見返りのある習慣の即時的な楽しみ",
  value: ""
}, {
  label: "目標",
  value: ""
}, {
  label: "守れなかった時の罰則",
  value: ""
}, {
  label: "レベル",
  value: ""
}, {
  label: "避けることで得られるメリット",
  value: ""
}, {
  label: "見返りのない習慣に対する即時的な痛み",
  value: ""
}];
function TaskModal(props) {
  _s();

  var _this = this;

  var classes = useStyles();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  var checkNew = userTaskInfo.tasks.length < parseInt(props.index);
  var stateChecked = [];

  if (!checkNew) {
    stateChecked = props.task.patternInfo.map(function (content) {
      return content.patternID;
    });
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(stateChecked),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])(); // 配列を作って項目一覧を作るなら、その配列を使って以下の変数の初期設定もやりたいところ
  // 最終的には項目一覧もReduxで管理したい。それをタスク一覧の右上に表示した設定ボタンから開くモーダルでONOFFを設定することで、タスク詳細画面で使う項目を選べる。新規登録時もONになっている項目が表示される
  // タスク詳細画面でプラスボタンを押したら項目を増やせる。それも項目一覧に保管される。
  // const defaultTask: newTasksType = { ["追加"]: "追加" };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(contentsList),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      contents = _React$useState4[0],
      setContents = _React$useState4[1];

  var handleClose = function handleClose() {
    props.setOpen(9999);
  };

  var handleRegister = function handleRegister() {
    var details;
    contents.map(function (content, index) {
      details = _objectSpread(_objectSpread({}, details), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, content.label, content.value));
    });
    var patternInfo;
    patternInfo = checked.map(function (content) {
      return {
        patternID: content,
        order: 1
      };
    });
    var newTasks = {
      detail: details,
      patternInfo: patternInfo
    }; // ここで編集

    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_11__["taskRegister"])(newTasks));
    props.setOpen(9999);
  }; // ここは配列で管理してmapで表示したいところ
  // task型の変数を用意して、それに値を格納する
  // 新規だったら登録、すでにある項目であれば更新する。


  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: classes.modal,
    open: props.index == props.open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_5__["default"],
    BackdropProps: {
      timeout: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "in": props.index == props.open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, __jsx(_AppVar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleRegister: handleRegister,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 25
    }
  }), __jsx("h2", {
    id: "transition-modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 25
    }
  }, "\u30BF\u30B9\u30AF\u8A73\u7D30\u753B\u9762", props.index + 1), __jsx("p", {
    id: "transition-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }, "react-transition-group animates me."), __jsx(_PatternSwitch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    checked: checked,
    setChecked: setChecked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 25
    }
  }), contents.map(function (content, index) {
    return __jsx("div", {
      key: content.label + "_" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 33
      }
    }, __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_7__["default"] // label="if-thenプランニング"
    , {
      label: content.label,
      required: false,
      index: props.index,
      contentIndex: index,
      contents: contents,
      setContents: setContents,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 37
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 37
      }
    }));
  })))));
}

_s(TaskModal, "BYxslkMeWpGmpshiwp2ta9mkALo=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"]];
});

_c = TaskModal;

var _c;

$RefreshReg$(_c, "TaskModal");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9UYXNrTW9kYWwudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsIm1vZGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93WSIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbnRlbnRzTGlzdCIsImxhYmVsIiwidmFsdWUiLCJUYXNrTW9kYWwiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidGFza3MiLCJ1c2VyVGFza0luZm8iLCJjaGVja05ldyIsImxlbmd0aCIsInBhcnNlSW50IiwiaW5kZXgiLCJzdGF0ZUNoZWNrZWQiLCJ0YXNrIiwicGF0dGVybkluZm8iLCJtYXAiLCJjb250ZW50IiwicGF0dGVybklEIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJoYW5kbGVDbG9zZSIsInNldE9wZW4iLCJoYW5kbGVSZWdpc3RlciIsImRldGFpbHMiLCJvcmRlciIsIm5ld1Rhc2tzIiwiZGV0YWlsIiwidGFza1JlZ2lzdGVyIiwib3BlbiIsIkJhY2tkcm9wIiwidGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUN6QkMsNkVBQVksQ0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkosQ0FESjtBQWNILEdBZkEsQ0FkTCxDQURKLENBWkosQ0FKSixDQURKO0FBcURIOztHQWxIdUJ4QixTO1VBQ0p2QixTLEVBQ1MwQix3RCxFQVdSbUIsd0Q7OztLQWJHdEIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy5iNmViZjQ1YjVjOWJhMDYzYTdjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIjtcclxuaW1wb3J0IElucHV0TiBmcm9tIFwiLi9JbnB1dE5vcm1hbFwiO1xyXG5pbXBvcnQgQXBwVmFyIGZyb20gXCIuL0FwcFZhclwiO1xyXG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGVcIjtcclxuaW1wb3J0IFBhdHRlcm5Td2l0Y2hMaXN0IGZyb20gXCIuL1BhdHRlcm5Td2l0Y2hcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHRhc2tSZWdpc3RlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgLy8gd2lkdGg6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgIzAwMFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5jb25zdCBjb250ZW50c0xpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiaWYtdGhlbuODl+ODqeODs+ODi+ODs+OCsFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLnv5LmhaPjga7nqY3jgb/kuIrjgZJcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi44OR44K/44O844OzXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuawl+OBjOmAsuOBvuOBquOBhOOBqOOBjVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLplbfmnJ/nmoTjgavopovov5Tjgorjga7jgYLjgovnv5LmhaPjga7ljbPmmYLnmoTjgarmpb3jgZfjgb9cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi55uu5qiZXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuWuiOOCjOOBquOBi+OBo+OBn+aZguOBrue9sOWJh1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLjg6zjg5njg6tcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6YG/44GR44KL44GT44Go44Gn5b6X44KJ44KM44KL44Oh44Oq44OD44OIXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuimi+i/lOOCiuOBruOBquOBhOe/kuaFo+OBq+WvvuOBmeOCi+WNs+aZgueahOOBqueXm+OBv1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2tNb2RhbChwcm9wczogYW55KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuICAgIGNvbnN0IGNoZWNrTmV3ID0gdXNlclRhc2tJbmZvLnRhc2tzLmxlbmd0aCA8IHBhcnNlSW50KHByb3BzLmluZGV4KTtcclxuICAgIGxldCBzdGF0ZUNoZWNrZWQ6IG51bWJlcltdID0gW107XHJcbiAgICBpZiAoIWNoZWNrTmV3KSB7XHJcbiAgICAgICAgc3RhdGVDaGVja2VkID0gcHJvcHMudGFzay5wYXR0ZXJuSW5mby5tYXAoXHJcbiAgICAgICAgICAgIChjb250ZW50OiB7IHBhdHRlcm5JRDogbnVtYmVyOyBvcmRlcjogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LnBhdHRlcm5JRDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oc3RhdGVDaGVja2VkKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIC8vIOmFjeWIl+OCkuS9nOOBo+OBpumgheebruS4gOimp+OCkuS9nOOCi+OBquOCieOAgeOBneOBrumFjeWIl+OCkuS9v+OBo+OBpuS7peS4i+OBruWkieaVsOOBruWIneacn+ioreWumuOCguOChOOCiuOBn+OBhOOBqOOBk+OCjVxyXG4gICAgLy8g5pyA57WC55qE44Gr44Gv6aCF55uu5LiA6Kan44KCUmVkdXjjgafnrqHnkIbjgZfjgZ/jgYTjgILjgZ3jgozjgpLjgr/jgrnjgq/kuIDopqfjga7lj7PkuIrjgavooajnpLrjgZfjgZ/oqK3lrprjg5zjgr/jg7PjgYvjgonplovjgY/jg6Ljg7zjg4Djg6vjgadPTk9GRuOCkuioreWumuOBmeOCi+OBk+OBqOOBp+OAgeOCv+OCueOCr+ips+e0sOeUu+mdouOBp+S9v+OBhumgheebruOCkumBuOOBueOCi+OAguaWsOimj+eZu+mMsuaZguOCgk9O44Gr44Gq44Gj44Gm44GE44KL6aCF55uu44GM6KGo56S644GV44KM44KLXHJcbiAgICAvLyDjgr/jgrnjgq/oqbPntLDnlLvpnaLjgafjg5fjg6njgrnjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgonpoIXnm67jgpLlopfjgoTjgZvjgovjgILjgZ3jgozjgoLpoIXnm67kuIDopqfjgavkv53nrqHjgZXjgozjgovjgIJcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRUYXNrOiBuZXdUYXNrc1R5cGUgPSB7IFtcIui/veWKoFwiXTogXCLov73liqBcIiB9O1xyXG4gICAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSBSZWFjdC51c2VTdGF0ZShjb250ZW50c0xpc3QpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnNldE9wZW4oOTk5OSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgW2NvbnRlbnQubGFiZWxdOiBjb250ZW50LnZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcGF0dGVybkluZm86IHtcclxuICAgICAgICAgICAgcGF0dGVybklEOiBudW1iZXI7XHJcbiAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgfVtdO1xyXG5cclxuICAgICAgICBwYXR0ZXJuSW5mbyA9IGNoZWNrZWQubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Rhc2tzOiB0YXNrcyA9IHtcclxuICAgICAgICAgICAgZGV0YWlsOiBkZXRhaWxzLFxyXG4gICAgICAgICAgICBwYXR0ZXJuSW5mbzogcGF0dGVybkluZm8sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g44GT44GT44Gn57eo6ZuGXHJcbiAgICAgICAgZGlzcGF0Y2godGFza1JlZ2lzdGVyKG5ld1Rhc2tzKSk7XHJcblxyXG4gICAgICAgIHByb3BzLnNldE9wZW4oOTk5OSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOOBk+OBk+OBr+mFjeWIl+OBp+euoeeQhuOBl+OBpm1hcOOBp+ihqOekuuOBl+OBn+OBhOOBqOOBk+OCjVxyXG4gICAgLy8gdGFza+Wei+OBruWkieaVsOOCkueUqOaEj+OBl+OBpuOAgeOBneOCjOOBq+WApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgLy8g5paw6KaP44Gg44Gj44Gf44KJ55m76Yyy44CB44GZ44Gn44Gr44GC44KL6aCF55uu44Gn44GC44KM44Gw5pu05paw44GZ44KL44CCXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVPcGVufT5cclxuICAgICAgICAgICAgICAgIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG4gICAgICAgICAgICAgICAgb3Blbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RmFkZSBpbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwVmFyIGhhbmRsZVJlZ2lzdGVyPXtoYW5kbGVSZWdpc3Rlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGlkPVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg44K/44K544Kv6Kmz57Sw55S76Z2ie3Byb3BzLmluZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdC10cmFuc2l0aW9uLWdyb3VwIGFuaW1hdGVzIG1lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDjgZPjgZPjgpLopoHkv67mraPjgILjg5Hjgr/jg7zjg7Pjga/pgbjmip7lvI/jgafjga/jgYTjgZHjgarjgYTjgILopIfmlbDnmbvpjLLjgZnjgovlj6/og73mgKfjgYzjgYLjgovjgZ/jgoHjgILnmbvpjLLmuIjjgb/ku6XlpJbjga7jg6rjgrnjg4jjgpJmbGl0ZXLjgafkvZzmiJDjgZfjgabooajnpLrjgIHjgajjgYvjgYvjgarjgIIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8U2ltcGxlU2VsZWN0IGNob2ljZT17Y2hvaWNlfSBzZXRDaG9pY2U9e3NldENob2ljZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXR0ZXJuU3dpdGNoTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoZWNrZWQ9e3NldENoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50LmxhYmVsICsgXCJfXCIgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsPVwiaWYtdGhlbuODl+ODqeODs+ODi+ODs+OCsFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y29udGVudC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtwcm9wcy5pbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRJbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50cz17Y29udGVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb250ZW50cz17c2V0Q29udGVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=