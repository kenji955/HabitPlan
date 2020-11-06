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

  var classes = useStyles(); // const [open, setOpen] = React.useState(false);

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
      setChecked = _React$useState2[1]; // if (props.task) {
  //     const newChecked = [...checked];
  //     props.task.patternInfo.map(
  //         (content: { patternID: number; order: number }) => {
  //             newChecked.push(content.patternID);
  //         }
  //     );
  //     setChecked(newChecked);
  // }


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
    checked.map(function (content) {
      var regiterPatterninfo = {
        patternID: content,
        order: 1
      };
      patternInfo = _objectSpread(_objectSpread({}, patternInfo), {}, {
        regiterPatterninfo: regiterPatterninfo
      });
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
      lineNumber: 157,
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
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "in": props.index == props.open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, __jsx(_AppVar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleRegister: handleRegister,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 25
    }
  }), __jsx("h2", {
    id: "transition-modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 25
    }
  }, "\u30BF\u30B9\u30AF\u8A73\u7D30\u753B\u9762", props.index + 1), __jsx("p", {
    id: "transition-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 25
    }
  }, "react-transition-group animates me."), __jsx(_PatternSwitch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    checked: checked,
    setChecked: setChecked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }), contents.map(function (content, index) {
    return __jsx("div", {
      key: content.label + "_" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
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
        lineNumber: 191,
        columnNumber: 37
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9UYXNrTW9kYWwudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsIm1vZGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93WSIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbnRlbnRzTGlzdCIsImxhYmVsIiwidmFsdWUiLCJUYXNrTW9kYWwiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidGFza3MiLCJ1c2VyVGFza0luZm8iLCJjaGVja05ldyIsImxlbmd0aCIsInBhcnNlSW50IiwiaW5kZXgiLCJzdGF0ZUNoZWNrZWQiLCJ0YXNrIiwicGF0dGVybkluZm8iLCJtYXAiLCJjb250ZW50IiwicGF0dGVybklEIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJoYW5kbGVDbG9zZSIsInNldE9wZW4iLCJoYW5kbGVSZWdpc3RlciIsImRldGFpbHMiLCJyZWdpdGVyUGF0dGVybmluZm8iLCJvcmRlciIsIm5ld1Rhc2tzIiwiZGV0YWlsIiwidGFza1JlZ2lzdGVyIiwib3BlbiIsIkJhY2tkcm9wIiwidGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7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QUssRUFBRUcsS0FBSyxDQUFDUyxLQUpqQjtBQUtJLGtCQUFZLEVBQUVBLEtBTGxCO0FBTUksY0FBUSxFQUFFYSxRQU5kO0FBT0ksaUJBQVcsRUFBRUMsV0FQakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZKLENBREo7QUFjSCxHQWZBLENBZEwsQ0FESixDQVpKLENBSkosQ0FESjtBQXFESDs7R0FoSXVCeEIsUztVQUNKdkIsUyxFQUVTMEIsd0QsRUFvQlJtQix3RDs7O0tBdkJHdEIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy45ZGNiODFjM2JmYzFjZjk1NDYwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIjtcclxuaW1wb3J0IElucHV0TiBmcm9tIFwiLi9JbnB1dE5vcm1hbFwiO1xyXG5pbXBvcnQgQXBwVmFyIGZyb20gXCIuL0FwcFZhclwiO1xyXG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGVcIjtcclxuaW1wb3J0IFBhdHRlcm5Td2l0Y2hMaXN0IGZyb20gXCIuL1BhdHRlcm5Td2l0Y2hcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHRhc2tSZWdpc3RlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgLy8gd2lkdGg6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgIzAwMFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG50eXBlIG5ld1Rhc2tzVHlwZSA9IHtcclxuICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbn07XHJcbmNvbnN0IGNvbnRlbnRzTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCJpZi10aGVu44OX44Op44Oz44OL44Oz44KwXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIue/kuaFo+OBruepjeOBv+S4iuOBklwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLjg5Hjgr/jg7zjg7NcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi5rCX44GM6YCy44G+44Gq44GE44Go44GNXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIumVt+acn+eahOOBq+imi+i/lOOCiuOBruOBguOCi+e/kuaFo+OBruWNs+aZgueahOOBqualveOBl+OBv1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLnm67mqJlcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi5a6I44KM44Gq44GL44Gj44Gf5pmC44Gu572w5YmHXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuODrOODmeODq1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLpgb/jgZHjgovjgZPjgajjgaflvpfjgonjgozjgovjg6Hjg6rjg4Pjg4hcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6KaL6L+U44KK44Gu44Gq44GE57+S5oWj44Gr5a++44GZ44KL5Y2z5pmC55qE44Gq55eb44G/XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFza01vZGFsKHByb3BzOiBhbnkpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIC8vIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gICAgY29uc3QgY2hlY2tOZXcgPSB1c2VyVGFza0luZm8udGFza3MubGVuZ3RoIDwgcGFyc2VJbnQocHJvcHMuaW5kZXgpO1xyXG4gICAgbGV0IHN0YXRlQ2hlY2tlZDogbnVtYmVyW10gPSBbXTtcclxuICAgIGlmICghY2hlY2tOZXcpIHtcclxuICAgICAgICBzdGF0ZUNoZWNrZWQgPSBwcm9wcy50YXNrLnBhdHRlcm5JbmZvLm1hcChcclxuICAgICAgICAgICAgKGNvbnRlbnQ6IHsgcGF0dGVybklEOiBudW1iZXI7IG9yZGVyOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQucGF0dGVybklEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihzdGF0ZUNoZWNrZWQpO1xyXG4gICAgLy8gaWYgKHByb3BzLnRhc2spIHtcclxuICAgIC8vICAgICBjb25zdCBuZXdDaGVja2VkID0gWy4uLmNoZWNrZWRdO1xyXG4gICAgLy8gICAgIHByb3BzLnRhc2sucGF0dGVybkluZm8ubWFwKFxyXG4gICAgLy8gICAgICAgICAoY29udGVudDogeyBwYXR0ZXJuSUQ6IG51bWJlcjsgb3JkZXI6IG51bWJlciB9KSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBuZXdDaGVja2VkLnB1c2goY29udGVudC5wYXR0ZXJuSUQpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICBzZXRDaGVja2VkKG5ld0NoZWNrZWQpO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgLy8g6YWN5YiX44KS5L2c44Gj44Gm6aCF55uu5LiA6Kan44KS5L2c44KL44Gq44KJ44CB44Gd44Gu6YWN5YiX44KS5L2/44Gj44Gm5Lul5LiL44Gu5aSJ5pWw44Gu5Yid5pyf6Kit5a6a44KC44KE44KK44Gf44GE44Go44GT44KNXHJcbiAgICAvLyDmnIDntYLnmoTjgavjga/poIXnm67kuIDopqfjgoJSZWR1eOOBp+euoeeQhuOBl+OBn+OBhOOAguOBneOCjOOCkuOCv+OCueOCr+S4gOimp+OBruWPs+S4iuOBq+ihqOekuuOBl+OBn+ioreWumuODnOOCv+ODs+OBi+OCiemWi+OBj+ODouODvOODgOODq+OBp09OT0ZG44KS6Kit5a6a44GZ44KL44GT44Go44Gn44CB44K/44K544Kv6Kmz57Sw55S76Z2i44Gn5L2/44GG6aCF55uu44KS6YG444G544KL44CC5paw6KaP55m76Yyy5pmC44KCT07jgavjgarjgaPjgabjgYTjgovpoIXnm67jgYzooajnpLrjgZXjgozjgotcclxuICAgIC8vIOOCv+OCueOCr+ips+e0sOeUu+mdouOBp+ODl+ODqeOCueODnOOCv+ODs+OCkuaKvOOBl+OBn+OCiemgheebruOCkuWil+OChOOBm+OCi+OAguOBneOCjOOCgumgheebruS4gOimp+OBq+S/neeuoeOBleOCjOOCi+OAglxyXG4gICAgLy8gY29uc3QgZGVmYXVsdFRhc2s6IG5ld1Rhc2tzVHlwZSA9IHsgW1wi6L+95YqgXCJdOiBcIui/veWKoFwiIH07XHJcbiAgICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IFJlYWN0LnVzZVN0YXRlKGNvbnRlbnRzTGlzdCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc2V0T3Blbig5OTk5KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRldGFpbHM6IHtcclxuICAgICAgICAgICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnRlbnRzLm1hcCgoY29udGVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgZGV0YWlscyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICBbY29udGVudC5sYWJlbF06IGNvbnRlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBwYXR0ZXJuSW5mbzoge1xyXG4gICAgICAgICAgICBwYXR0ZXJuSUQ6IG51bWJlcjtcclxuICAgICAgICAgICAgb3JkZXI6IG51bWJlcjtcclxuICAgICAgICB9W107XHJcblxyXG4gICAgICAgIGNoZWNrZWQubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2l0ZXJQYXR0ZXJuaW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogY29udGVudCxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBwYXR0ZXJuSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnBhdHRlcm5JbmZvLFxyXG4gICAgICAgICAgICAgICAgcmVnaXRlclBhdHRlcm5pbmZvLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbmV3VGFza3M6IHRhc2tzID0ge1xyXG4gICAgICAgICAgICBkZXRhaWw6IGRldGFpbHMsXHJcbiAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBwYXR0ZXJuSW5mbyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyDjgZPjgZPjgafnt6jpm4ZcclxuICAgICAgICBkaXNwYXRjaCh0YXNrUmVnaXN0ZXIobmV3VGFza3MpKTtcclxuXHJcbiAgICAgICAgcHJvcHMuc2V0T3Blbig5OTk5KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g44GT44GT44Gv6YWN5YiX44Gn566h55CG44GX44GmbWFw44Gn6KGo56S644GX44Gf44GE44Go44GT44KNXHJcbiAgICAvLyB0YXNr5Z6L44Gu5aSJ5pWw44KS55So5oSP44GX44Gm44CB44Gd44KM44Gr5YCk44KS5qC857SN44GZ44KLXHJcbiAgICAvLyDmlrDopo/jgaDjgaPjgZ/jgonnmbvpjLLjgIHjgZnjgafjgavjgYLjgovpoIXnm67jgafjgYLjgozjgbDmm7TmlrDjgZnjgovjgIJcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PlxyXG4gICAgICAgICAgICAgICAgcmVhY3QtdHJhbnNpdGlvbi1ncm91cFxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvcGVuPXtwcm9wcy5pbmRleCA9PSBwcm9wcy5vcGVufVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGYWRlIGluPXtwcm9wcy5pbmRleCA9PSBwcm9wcy5vcGVufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBWYXIgaGFuZGxlUmVnaXN0ZXI9e2hhbmRsZVJlZ2lzdGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgaWQ9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDjgr/jgrnjgq/oqbPntLDnlLvpnaJ7cHJvcHMuaW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXAgYW5pbWF0ZXMgbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOOBk+OBk+OCkuimgeS/ruato+OAguODkeOCv+ODvOODs+OBr+mBuOaKnuW8j+OBp+OBr+OBhOOBkeOBquOBhOOAguikh+aVsOeZu+mMsuOBmeOCi+WPr+iDveaAp+OBjOOBguOCi+OBn+OCgeOAgueZu+mMsua4iOOBv+S7peWkluOBruODquOCueODiOOCkmZsaXRlcuOBp+S9nOaIkOOBl+OBpuihqOekuuOAgeOBqOOBi+OBi+OBquOAgiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxTaW1wbGVTZWxlY3QgY2hvaWNlPXtjaG9pY2V9IHNldENob2ljZT17c2V0Q2hvaWNlfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhdHRlcm5Td2l0Y2hMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hlY2tlZD17c2V0Q2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnRzLm1hcCgoY29udGVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvbnRlbnQubGFiZWwgKyBcIl9cIiArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWw9XCJpZi10aGVu44OX44Op44Oz44OL44Oz44KwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb250ZW50LmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3Byb3BzLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzPXtjb250ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnRzPXtzZXRDb250ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==