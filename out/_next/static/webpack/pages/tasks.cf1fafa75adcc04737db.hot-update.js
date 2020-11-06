webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/components/view/PatternSwitch.tsx":
/*!***********************************************!*\
  !*** ./src/components/view/PatternSwitch.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternSwitchList; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\PatternSwitch.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  });
});
function PatternSwitchList(props) {
  _s();

  var _this = this;

  var classes = useStyles();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  var handleToggle = function handleToggle(value) {
    return function () {
      var currentIndex = props.checked.indexOf(value);

      var newChecked = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(props.checked);

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      props.setChecked(newChecked);
      console.log('newChecked');
      console.log(newChecked);
    };
  };

  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 24
      }
    }, "PatternList"),
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, userTaskInfo.pattern.map(function (content) {
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: content.patternId + "_" + content.patternName,
      primary: content.patternName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__["default"], {
      edge: "end",
      onChange: handleToggle(content.patternId),
      checked: props.checked.indexOf(content.patternId) !== -1,
      inputProps: {
        "aria-labelledby": content.patternId + "_" + content.patternName
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }
    })));
  }));
}

_s(PatternSwitchList, "sHx2OwGJCw7RzX+GpCViCD7pTa4=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"]];
});

_c = PatternSwitchList;

var _c;

$RefreshReg$(_c, "PatternSwitchList");

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

/***/ }),

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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
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


  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo; // 配列を作って項目一覧を作るなら、その配列を使って以下の変数の初期設定もやりたいところ
  // 最終的には項目一覧もReduxで管理したい。それをタスク一覧の右上に表示した設定ボタンから開くモーダルでONOFFを設定することで、タスク詳細画面で使う項目を選べる。新規登録時もONになっている項目が表示される
  // タスク詳細画面でプラスボタンを押したら項目を増やせる。それも項目一覧に保管される。
  // const defaultTask: newTasksType = { ["追加"]: "追加" };


  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(contentsList),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      contents = _React$useState4[0],
      setContents = _React$useState4[1];

  var checkNew = userTaskInfo.tasks.length < parseInt(props.index); // let newTasks:{[content: string]: string};
  // const handleOpen = () => {
  //     props.setOpen(props.index);
  //     console.log("props.index" + props.index);
  //     console.log("props.open" + props.open);
  // };

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
      patternInfo.push(regiterPatterninfo); //  = {
      //     ...patternInfo,
      //     regiterPatterninfo,
      // };
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
      lineNumber: 160,
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
      lineNumber: 164,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "in": props.index == props.open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }, __jsx(_AppVar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleRegister: handleRegister,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  }), __jsx("h2", {
    id: "transition-modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 25
    }
  }, "\u30BF\u30B9\u30AF\u8A73\u7D30\u753B\u9762", props.index + 1), __jsx("p", {
    id: "transition-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  }, "react-transition-group animates me."), __jsx(_PatternSwitch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    checked: checked,
    setChecked: setChecked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 25
    }
  }), contents.map(function (content, index) {
    return __jsx("div", {
      key: content.label + '_' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
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
        lineNumber: 194,
        columnNumber: 37
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 37
      }
    }));
  })))));
}

_s(TaskModal, "mlrXfRKVKICJE60zEkdAQuL7hv4=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9QYXR0ZXJuU3dpdGNoLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9UYXNrTW9kYWwudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsIm1heFdpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIlBhdHRlcm5Td2l0Y2hMaXN0IiwicHJvcHMiLCJjbGFzc2VzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwiaGFuZGxlVG9nZ2xlIiwidmFsdWUiLCJjdXJyZW50SW5kZXgiLCJjaGVja2VkIiwiaW5kZXhPZiIsIm5ld0NoZWNrZWQiLCJwdXNoIiwic3BsaWNlIiwic2V0Q2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJwYXR0ZXJuIiwibWFwIiwiY29udGVudCIsInBhdHRlcm5JZCIsInBhdHRlcm5OYW1lIiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0Iiwib3ZlcmZsb3dZIiwiYm9yZGVyIiwiYm94U2hhZG93Iiwic2hhZG93cyIsInBhZGRpbmciLCJzcGFjaW5nIiwiY29udGVudHNMaXN0IiwibGFiZWwiLCJUYXNrTW9kYWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJjaGVja05ldyIsImxlbmd0aCIsInBhcnNlSW50IiwiaW5kZXgiLCJoYW5kbGVDbG9zZSIsInNldE9wZW4iLCJoYW5kbGVSZWdpc3RlciIsImRldGFpbHMiLCJwYXR0ZXJuSW5mbyIsInJlZ2l0ZXJQYXR0ZXJuaW5mbyIsInBhdHRlcm5JRCIsIm9yZGVyIiwibmV3VGFza3MiLCJk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QUFjLEdBQWQsR0FBa0JXLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG9EQUFELENBQ0k7QUFESjtBQUVJLFdBQUssRUFBRTFCLE9BQU8sQ0FBQ2UsS0FGbkI7QUFHSSxjQUFRLEVBQUUsS0FIZDtBQUlJLFdBQUssRUFBRWxDLEtBQUssQ0FBQzZDLEtBSmpCO0FBS0ksa0JBQVksRUFBRUEsS0FMbEI7QUFNSSxjQUFRLEVBQUVMLFFBTmQ7QUFPSSxpQkFBVyxFQUFFQyxXQVBqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkosQ0FESjtBQWNILEdBZkEsQ0FkTCxDQURKLENBWkosQ0FKSixDQURKO0FBcURIOztHQWpJdUJOLFM7VUFDSi9DLFMsRUFZQ21ELHdELEVBQ1FyQyx3RDs7O0tBZExpQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLmNmMWZhZmE3NWFkY2MwNDczN2RiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCI7XHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaFwiO1xyXG5pbXBvcnQgV2lmaUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9XaWZpXCI7XHJcbmltcG9ydCBCbHVldG9vdGhJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmx1ZXRvb3RoXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogMzYwLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdHRlcm5Td2l0Y2hMaXN0KHByb3BzOiB7Y2hlY2tlZDogbnVtYmVyW10sc2V0Q2hlY2tlZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyW10+Pn0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcHJvcHMuY2hlY2tlZC5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICBjb25zdCBuZXdDaGVja2VkID0gWy4uLnByb3BzLmNoZWNrZWRdO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICBuZXdDaGVja2VkLnB1c2godmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0NoZWNrZWQuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9wcy5zZXRDaGVja2VkKG5ld0NoZWNrZWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXdDaGVja2VkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3Q2hlY2tlZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgc3ViaGVhZGVyPXs8TGlzdFN1YmhlYWRlcj5QYXR0ZXJuTGlzdDwvTGlzdFN1YmhlYWRlcj59XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3VzZXJUYXNrSW5mby5wYXR0ZXJuLm1hcCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpZmlJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NvbnRlbnQucGF0dGVybklkICsgXCJfXCIgKyBjb250ZW50LnBhdHRlcm5OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17Y29udGVudC5wYXR0ZXJuTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoY29udGVudC5wYXR0ZXJuSWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Byb3BzLmNoZWNrZWQuaW5kZXhPZihjb250ZW50LnBhdHRlcm5JZCkgIT09IC0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogY29udGVudC5wYXR0ZXJuSWQgKyBcIl9cIiArIGNvbnRlbnQucGF0dGVybk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIjtcclxuaW1wb3J0IElucHV0TiBmcm9tIFwiLi9JbnB1dE5vcm1hbFwiO1xyXG5pbXBvcnQgQXBwVmFyIGZyb20gXCIuL0FwcFZhclwiO1xyXG5pbXBvcnQge1xyXG4gICAgdGFza3MsXHJcbn0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdXNlclRhc2tzVHlwZVwiO1xyXG5pbXBvcnQgUGF0dGVyblN3aXRjaExpc3QgZnJvbSBcIi4vUGF0dGVyblN3aXRjaFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdGFza1JlZ2lzdGVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFwZXI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbnR5cGUgbmV3VGFza3NUeXBlID0ge1xyXG4gICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuY29uc3QgY29udGVudHNMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcImlmLXRoZW7jg5fjg6njg7Pjg4vjg7PjgrBcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi57+S5oWj44Gu56mN44G/5LiK44GSXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuODkeOCv+ODvOODs1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLmsJfjgYzpgLLjgb7jgarjgYTjgajjgY1cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6ZW35pyf55qE44Gr6KaL6L+U44KK44Gu44GC44KL57+S5oWj44Gu5Y2z5pmC55qE44Gq5qW944GX44G/XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuebruaomVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLlrojjgozjgarjgYvjgaPjgZ/mmYLjga7nvbDliYdcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi44Os44OZ44OrXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIumBv+OBkeOCi+OBk+OBqOOBp+W+l+OCieOCjOOCi+ODoeODquODg+ODiFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLopovov5Tjgorjga7jgarjgYTnv5LmhaPjgavlr77jgZnjgovljbPmmYLnmoTjgarnl5vjgb9cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrTW9kYWwocHJvcHM6IGFueSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgLy8gY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcclxuICAgIC8vIGlmIChwcm9wcy50YXNrKSB7XHJcbiAgICAvLyAgICAgY29uc3QgbmV3Q2hlY2tlZCA9IFsuLi5jaGVja2VkXTtcclxuICAgIC8vICAgICBwcm9wcy50YXNrLnBhdHRlcm5JbmZvLm1hcChcclxuICAgIC8vICAgICAgICAgKGNvbnRlbnQ6IHsgcGF0dGVybklEOiBudW1iZXI7IG9yZGVyOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgbmV3Q2hlY2tlZC5wdXNoKGNvbnRlbnQucGF0dGVybklEKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgICAgc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuICAgIC8vIH1cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gICAgLy8g6YWN5YiX44KS5L2c44Gj44Gm6aCF55uu5LiA6Kan44KS5L2c44KL44Gq44KJ44CB44Gd44Gu6YWN5YiX44KS5L2/44Gj44Gm5Lul5LiL44Gu5aSJ5pWw44Gu5Yid5pyf6Kit5a6a44KC44KE44KK44Gf44GE44Go44GT44KNXHJcbiAgICAvLyDmnIDntYLnmoTjgavjga/poIXnm67kuIDopqfjgoJSZWR1eOOBp+euoeeQhuOBl+OBn+OBhOOAguOBneOCjOOCkuOCv+OCueOCr+S4gOimp+OBruWPs+S4iuOBq+ihqOekuuOBl+OBn+ioreWumuODnOOCv+ODs+OBi+OCiemWi+OBj+ODouODvOODgOODq+OBp09OT0ZG44KS6Kit5a6a44GZ44KL44GT44Go44Gn44CB44K/44K544Kv6Kmz57Sw55S76Z2i44Gn5L2/44GG6aCF55uu44KS6YG444G544KL44CC5paw6KaP55m76Yyy5pmC44KCT07jgavjgarjgaPjgabjgYTjgovpoIXnm67jgYzooajnpLrjgZXjgozjgotcclxuICAgIC8vIOOCv+OCueOCr+ips+e0sOeUu+mdouOBp+ODl+ODqeOCueODnOOCv+ODs+OCkuaKvOOBl+OBn+OCiemgheebruOCkuWil+OChOOBm+OCi+OAguOBneOCjOOCgumgheebruS4gOimp+OBq+S/neeuoeOBleOCjOOCi+OAglxyXG4gICAgLy8gY29uc3QgZGVmYXVsdFRhc2s6IG5ld1Rhc2tzVHlwZSA9IHsgW1wi6L+95YqgXCJdOiBcIui/veWKoFwiIH07XHJcbiAgICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IFJlYWN0LnVzZVN0YXRlKGNvbnRlbnRzTGlzdCk7XHJcbiAgICBjb25zdCBjaGVja05ldyA9IHVzZXJUYXNrSW5mby50YXNrcy5sZW5ndGggPCBwYXJzZUludChwcm9wcy5pbmRleCk7XHJcblxyXG4gICAgLy8gbGV0IG5ld1Rhc2tzOntbY29udGVudDogc3RyaW5nXTogc3RyaW5nfTtcclxuXHJcbiAgICAvLyBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHByb3BzLnNldE9wZW4ocHJvcHMuaW5kZXgpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicHJvcHMuaW5kZXhcIiArIHByb3BzLmluZGV4KTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInByb3BzLm9wZW5cIiArIHByb3BzLm9wZW4pO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5zZXRPcGVuKDk5OTkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWdpc3RlciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZGV0YWlsczoge1xyXG4gICAgICAgICAgICBbY29udGVudDogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29udGVudHMubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBkZXRhaWxzID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uZGV0YWlscyxcclxuICAgICAgICAgICAgICAgIFtjb250ZW50LmxhYmVsXTogY29udGVudC52YWx1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHBhdHRlcm5JbmZvOiB7XHJcbiAgICAgICAgICAgIHBhdHRlcm5JRDogbnVtYmVyO1xyXG4gICAgICAgICAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgICAgIH1bXTtcclxuXHJcbiAgICAgICAgY2hlY2tlZC5tYXAoKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVnaXRlclBhdHRlcm5pbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklEOiBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHBhdHRlcm5JbmZvLnB1c2gocmVnaXRlclBhdHRlcm5pbmZvKTtcclxuICAgICAgICAgICAgLy8gID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgLi4ucGF0dGVybkluZm8sXHJcbiAgICAgICAgICAgIC8vICAgICByZWdpdGVyUGF0dGVybmluZm8sXHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdUYXNrczogdGFza3MgPSB7XHJcbiAgICAgICAgICAgIGRldGFpbDogZGV0YWlscyxcclxuICAgICAgICAgICAgcGF0dGVybkluZm86IHBhdHRlcm5JbmZvLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIOOBk+OBk+OBp+e3qOmbhlxyXG4gICAgICAgIGRpc3BhdGNoKHRhc2tSZWdpc3RlcihuZXdUYXNrcykpO1xyXG5cclxuICAgICAgICBwcm9wcy5zZXRPcGVuKDk5OTkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDjgZPjgZPjga/phY3liJfjgafnrqHnkIbjgZfjgaZtYXDjgafooajnpLrjgZfjgZ/jgYTjgajjgZPjgo1cclxuICAgIC8vIHRhc2vlnovjga7lpInmlbDjgpLnlKjmhI/jgZfjgabjgIHjgZ3jgozjgavlgKTjgpLmoLzntI3jgZnjgotcclxuICAgIC8vIOaWsOimj+OBoOOBo+OBn+OCieeZu+mMsuOAgeOBmeOBp+OBq+OBguOCi+mgheebruOBp+OBguOCjOOBsOabtOaWsOOBmeOCi+OAglxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlT3Blbn0+XHJcbiAgICAgICAgICAgICAgICByZWFjdC10cmFuc2l0aW9uLWdyb3VwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuICAgICAgICAgICAgICAgIG9wZW49e3Byb3BzLmluZGV4ID09IHByb3BzLm9wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZhZGUgaW49e3Byb3BzLmluZGV4ID09IHByb3BzLm9wZW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwcFZhciBoYW5kbGVSZWdpc3Rlcj17aGFuZGxlUmVnaXN0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOOCv+OCueOCr+ips+e0sOeUu+mdontwcm9wcy5pbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3QtdHJhbnNpdGlvbi1ncm91cCBhbmltYXRlcyBtZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog44GT44GT44KS6KaB5L+u5q2j44CC44OR44K/44O844Oz44Gv6YG45oqe5byP44Gn44Gv44GE44GR44Gq44GE44CC6KSH5pWw55m76Yyy44GZ44KL5Y+v6IO95oCn44GM44GC44KL44Gf44KB44CC55m76Yyy5riI44G/5Lul5aSW44Gu44Oq44K544OI44KSZmxpdGVy44Gn5L2c5oiQ44GX44Gm6KGo56S644CB44Go44GL44GL44Gq44CCICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFNpbXBsZVNlbGVjdCBjaG9pY2U9e2Nob2ljZX0gc2V0Q2hvaWNlPXtzZXRDaG9pY2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGF0dGVyblN3aXRjaExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGVja2VkPXtzZXRDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudHMubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29udGVudC5sYWJlbCsnXycraW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXROXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbD1cImlmLXRoZW7jg5fjg6njg7Pjg4vjg7PjgrBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvbnRlbnQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJvcHMuaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50SW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM9e2NvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudHM9e3NldENvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9