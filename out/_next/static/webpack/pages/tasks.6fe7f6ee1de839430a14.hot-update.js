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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _InputNormal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InputNormal */ "./src/components/view/InputNormal.tsx");
/* harmony import */ var _AppVar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AppVar */ "./src/components/view/AppVar.tsx");
/* harmony import */ var _PatternSwitch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PatternSwitch */ "./src/components/view/PatternSwitch.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");




var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\TaskModal.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  if (props.task) {
    var newChecked = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(checked);

    props.task.patternInfo.map(function (content) {
      newChecked.push(content.patternID);
    });
    setChecked(newChecked);
  }

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])(); // 配列を作って項目一覧を作るなら、その配列を使って以下の変数の初期設定もやりたいところ
  // 最終的には項目一覧もReduxで管理したい。それをタスク一覧の右上に表示した設定ボタンから開くモーダルでONOFFを設定することで、タスク詳細画面で使う項目を選べる。新規登録時もONになっている項目が表示される
  // タスク詳細画面でプラスボタンを押したら項目を増やせる。それも項目一覧に保管される。
  // const defaultTask: newTasksType = { ["追加"]: "追加" };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(contentsList),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      contents = _React$useState4[0],
      setContents = _React$useState4[1]; // let newTasks:{[content: string]: string};
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

    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_12__["taskRegister"])(newTasks));
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
  }, __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: classes.modal,
    open: props.index == props.open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_6__["default"],
    BackdropProps: {
      timeout: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, __jsx(_AppVar__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, "react-transition-group animates me."), __jsx(_PatternSwitch__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      key: content.label + '_' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 33
      }
    }, __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_8__["default"] // label="if-thenプランニング"
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

_s(TaskModal, "LjFBNSzbFv1qCwxiDxqvmyTL8Xo=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9UYXNrTW9kYWwudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsIm1vZGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93WSIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbnRlbnRzTGlzdCIsImxhYmVsIiwidmFsdWUiLCJUYXNrTW9kYWwiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJ0YXNrIiwibmV3Q2hlY2tlZCIsInBhdHRlcm5JbmZvIiwibWFwIiwiY29udGVudCIsInB1c2giLCJwYXR0ZXJuSUQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY29udGVudHMiLCJzZXRDb250ZW50cyIsImhhbmRsZUNsb3NlIiwic2V0T3BlbiIsImhhbmRsZVJlZ2lzdGVyIiwiZGV0YWlscyIsImluZGV4IiwicmVnaXRlclBhdHRlcm5pbmZvIiwib3JkZXIiLCJuZXdUYXNrcyIsImRldGFpbCIsInRhc2tSZWdpc3RlciIsIm9wZW4iLCJCYWNrZHJvcCIsInRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUN6QkMsNkVBQVksQ0FBQztBQUNUQyxTQUFLLEVBQUU7QUFDSEMsYUFBTyxFQUFFLE1BRE47QUFFSEMsZ0JB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QUNKdkIsUyxFQVlDc0Msd0Q7OztLQWJHZixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLjZmZTdmNmVlMWRlODM5NDMwYTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgRmFkZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFkZVwiO1xyXG5pbXBvcnQgSW5wdXROIGZyb20gXCIuL0lucHV0Tm9ybWFsXCI7XHJcbmltcG9ydCBBcHBWYXIgZnJvbSBcIi4vQXBwVmFyXCI7XHJcbmltcG9ydCB7XHJcbiAgICB0YXNrcyxcclxufSBmcm9tIFwiLi4vLi4vbW9kdWxlcy91c2VyVGFza3NUeXBlXCI7XHJcbmltcG9ydCBQYXR0ZXJuU3dpdGNoTGlzdCBmcm9tIFwiLi9QYXR0ZXJuU3dpdGNoXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHRhc2tSZWdpc3RlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgLy8gd2lkdGg6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgIzAwMFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG50eXBlIG5ld1Rhc2tzVHlwZSA9IHtcclxuICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbn07XHJcbmNvbnN0IGNvbnRlbnRzTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCJpZi10aGVu44OX44Op44Oz44OL44Oz44KwXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIue/kuaFo+OBruepjeOBv+S4iuOBklwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLjg5Hjgr/jg7zjg7NcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi5rCX44GM6YCy44G+44Gq44GE44Go44GNXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIumVt+acn+eahOOBq+imi+i/lOOCiuOBruOBguOCi+e/kuaFo+OBruWNs+aZgueahOOBqualveOBl+OBv1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLnm67mqJlcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi5a6I44KM44Gq44GL44Gj44Gf5pmC44Gu572w5YmHXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuODrOODmeODq1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLpgb/jgZHjgovjgZPjgajjgaflvpfjgonjgozjgovjg6Hjg6rjg4Pjg4hcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6KaL6L+U44KK44Gu44Gq44GE57+S5oWj44Gr5a++44GZ44KL5Y2z5pmC55qE44Gq55eb44G/XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFza01vZGFsKHByb3BzOiBhbnkpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIC8vIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSk7XHJcbiAgICBpZiAocHJvcHMudGFzaykge1xyXG4gICAgICAgIGNvbnN0IG5ld0NoZWNrZWQgPSBbLi4uY2hlY2tlZF07XHJcbiAgICAgICAgcHJvcHMudGFzay5wYXR0ZXJuSW5mby5tYXAoXHJcbiAgICAgICAgICAgIChjb250ZW50OiB7IHBhdHRlcm5JRDogbnVtYmVyOyBvcmRlcjogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIG5ld0NoZWNrZWQucHVzaChjb250ZW50LnBhdHRlcm5JRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHNldENoZWNrZWQobmV3Q2hlY2tlZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICAvLyDphY3liJfjgpLkvZzjgaPjgabpoIXnm67kuIDopqfjgpLkvZzjgovjgarjgonjgIHjgZ3jga7phY3liJfjgpLkvb/jgaPjgabku6XkuIvjga7lpInmlbDjga7liJ3mnJ/oqK3lrprjgoLjgoTjgorjgZ/jgYTjgajjgZPjgo1cclxuICAgIC8vIOacgOe1gueahOOBq+OBr+mgheebruS4gOimp+OCglJlZHV444Gn566h55CG44GX44Gf44GE44CC44Gd44KM44KS44K/44K544Kv5LiA6Kan44Gu5Y+z5LiK44Gr6KGo56S644GX44Gf6Kit5a6a44Oc44K/44Oz44GL44KJ6ZaL44GP44Oi44O844OA44Or44GnT05PRkbjgpLoqK3lrprjgZnjgovjgZPjgajjgafjgIHjgr/jgrnjgq/oqbPntLDnlLvpnaLjgafkvb/jgYbpoIXnm67jgpLpgbjjgbnjgovjgILmlrDopo/nmbvpjLLmmYLjgoJPTuOBq+OBquOBo+OBpuOBhOOCi+mgheebruOBjOihqOekuuOBleOCjOOCi1xyXG4gICAgLy8g44K/44K544Kv6Kmz57Sw55S76Z2i44Gn44OX44Op44K544Oc44K/44Oz44KS5oq844GX44Gf44KJ6aCF55uu44KS5aKX44KE44Gb44KL44CC44Gd44KM44KC6aCF55uu5LiA6Kan44Gr5L+d566h44GV44KM44KL44CCXHJcbiAgICAvLyBjb25zdCBkZWZhdWx0VGFzazogbmV3VGFza3NUeXBlID0geyBbXCLov73liqBcIl06IFwi6L+95YqgXCIgfTtcclxuICAgIGNvbnN0IFtjb250ZW50cywgc2V0Q29udGVudHNdID0gUmVhY3QudXNlU3RhdGUoY29udGVudHNMaXN0KTtcclxuXHJcbiAgICAvLyBsZXQgbmV3VGFza3M6e1tjb250ZW50OiBzdHJpbmddOiBzdHJpbmd9O1xyXG5cclxuICAgIC8vIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgcHJvcHMuc2V0T3Blbihwcm9wcy5pbmRleCk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJwcm9wcy5pbmRleFwiICsgcHJvcHMuaW5kZXgpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicHJvcHMub3BlblwiICsgcHJvcHMub3Blbik7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnNldE9wZW4oOTk5OSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgW2NvbnRlbnQubGFiZWxdOiBjb250ZW50LnZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcGF0dGVybkluZm86IHtcclxuICAgICAgICAgICAgcGF0dGVybklEOiBudW1iZXI7XHJcbiAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgfVtdO1xyXG5cclxuICAgICAgICBjaGVja2VkLm1hcCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWdpdGVyUGF0dGVybmluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcGF0dGVybkluZm8ucHVzaChyZWdpdGVyUGF0dGVybmluZm8pO1xyXG4gICAgICAgICAgICAvLyAgPSB7XHJcbiAgICAgICAgICAgIC8vICAgICAuLi5wYXR0ZXJuSW5mbyxcclxuICAgICAgICAgICAgLy8gICAgIHJlZ2l0ZXJQYXR0ZXJuaW5mbyxcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Rhc2tzOiB0YXNrcyA9IHtcclxuICAgICAgICAgICAgZGV0YWlsOiBkZXRhaWxzLFxyXG4gICAgICAgICAgICBwYXR0ZXJuSW5mbzogcGF0dGVybkluZm8sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g44GT44GT44Gn57eo6ZuGXHJcbiAgICAgICAgZGlzcGF0Y2godGFza1JlZ2lzdGVyKG5ld1Rhc2tzKSk7XHJcblxyXG4gICAgICAgIHByb3BzLnNldE9wZW4oOTk5OSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOOBk+OBk+OBr+mFjeWIl+OBp+euoeeQhuOBl+OBpm1hcOOBp+ihqOekuuOBl+OBn+OBhOOBqOOBk+OCjVxyXG4gICAgLy8gdGFza+Wei+OBruWkieaVsOOCkueUqOaEj+OBl+OBpuOAgeOBneOCjOOBq+WApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgLy8g5paw6KaP44Gg44Gj44Gf44KJ55m76Yyy44CB44GZ44Gn44Gr44GC44KL6aCF55uu44Gn44GC44KM44Gw5pu05paw44GZ44KL44CCXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVPcGVufT5cclxuICAgICAgICAgICAgICAgIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG4gICAgICAgICAgICAgICAgb3Blbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RmFkZSBpbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwVmFyIGhhbmRsZVJlZ2lzdGVyPXtoYW5kbGVSZWdpc3Rlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGlkPVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg44K/44K544Kv6Kmz57Sw55S76Z2ie3Byb3BzLmluZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdC10cmFuc2l0aW9uLWdyb3VwIGFuaW1hdGVzIG1lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDjgZPjgZPjgpLopoHkv67mraPjgILjg5Hjgr/jg7zjg7Pjga/pgbjmip7lvI/jgafjga/jgYTjgZHjgarjgYTjgILopIfmlbDnmbvpjLLjgZnjgovlj6/og73mgKfjgYzjgYLjgovjgZ/jgoHjgILnmbvpjLLmuIjjgb/ku6XlpJbjga7jg6rjgrnjg4jjgpJmbGl0ZXLjgafkvZzmiJDjgZfjgabooajnpLrjgIHjgajjgYvjgYvjgarjgIIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8U2ltcGxlU2VsZWN0IGNob2ljZT17Y2hvaWNlfSBzZXRDaG9pY2U9e3NldENob2ljZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXR0ZXJuU3dpdGNoTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoZWNrZWQ9e3NldENoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50LmxhYmVsKydfJytpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsPVwiaWYtdGhlbuODl+ODqeODs+ODi+ODs+OCsFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y29udGVudC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtwcm9wcy5pbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRJbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50cz17Y29udGVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb250ZW50cz17c2V0Q29udGVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=