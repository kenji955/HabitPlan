webpackHotUpdate_N_E("pages/tasks",{

/***/ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ListSubheader/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Switch/Switch.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Switch/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/SwitchBase.js":
false,

/***/ "./src/components/view/PatternSwitch.tsx":
false,

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");




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

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])(); // 配列を作って項目一覧を作るなら、その配列を使って以下の変数の初期設定もやりたいところ
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
  }, "react-transition-group animates me."), contents.map(function (content, index) {
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
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9UYXNrTW9kYWwudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsIm1vZGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93WSIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbnRlbnRzTGlzdCIsImxhYmVsIiwidmFsdWUiLCJUYXNrTW9kYWwiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJ0YXNrIiwibmV3Q2hlY2tlZCIsInBhdHRlcm5JbmZvIiwibWFwIiwiY29udGVudCIsInB1c2giLCJwYXR0ZXJuSUQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY29udGVudHMiLCJzZXRDb250ZW50cyIsImhhbmRsZUNsb3NlIiwic2V0T3BlbiIsImhhbmRsZVJlZ2lzdGVyIiwiZGV0YWlscyIsImluZGV4IiwicmVnaXRlclBhdHRlcm5pbmZvIiwib3JkZXIiLCJuZXdUYXNrcyIsImRldGFpbCIsInRhc2tSZWdpc3RlciIsIm9wZW4iLCJCYWNrZHJvcCIsInRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUN6QkMsNkVBQVksQ0FBQztBQUNUQyxTQUFLLEVBQUU7QUFDSEMsYUFBTyxFQUFFLE1B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LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wXCI7XHJcbmltcG9ydCBGYWRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlXCI7XHJcbmltcG9ydCBJbnB1dE4gZnJvbSBcIi4vSW5wdXROb3JtYWxcIjtcclxuaW1wb3J0IEFwcFZhciBmcm9tIFwiLi9BcHBWYXJcIjtcclxuaW1wb3J0IHtcclxuICAgIHRhc2tzLFxyXG59IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGVcIjtcclxuaW1wb3J0IFBhdHRlcm5Td2l0Y2hMaXN0IGZyb20gXCIuL1BhdHRlcm5Td2l0Y2hcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdGFza1JlZ2lzdGVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFwZXI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbnR5cGUgbmV3VGFza3NUeXBlID0ge1xyXG4gICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuY29uc3QgY29udGVudHNMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcImlmLXRoZW7jg5fjg6njg7Pjg4vjg7PjgrBcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi57+S5oWj44Gu56mN44G/5LiK44GSXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuODkeOCv+ODvOODs1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLmsJfjgYzpgLLjgb7jgarjgYTjgajjgY1cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6ZW35pyf55qE44Gr6KaL6L+U44KK44Gu44GC44KL57+S5oWj44Gu5Y2z5pmC55qE44Gq5qW944GX44G/XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuebruaomVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLlrojjgozjgarjgYvjgaPjgZ/mmYLjga7nvbDliYdcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi44Os44OZ44OrXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIumBv+OBkeOCi+OBk+OBqOOBp+W+l+OCieOCjOOCi+ODoeODquODg+ODiFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLopovov5Tjgorjga7jgarjgYTnv5LmhaPjgavlr77jgZnjgovljbPmmYLnmoTjgarnl5vjgb9cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrTW9kYWwocHJvcHM6IGFueSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgLy8gY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcclxuICAgIGlmIChwcm9wcy50YXNrKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Q2hlY2tlZCA9IFsuLi5jaGVja2VkXTtcclxuICAgICAgICBwcm9wcy50YXNrLnBhdHRlcm5JbmZvLm1hcChcclxuICAgICAgICAgICAgKGNvbnRlbnQ6IHsgcGF0dGVybklEOiBudW1iZXI7IG9yZGVyOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3Q2hlY2tlZC5wdXNoKGNvbnRlbnQucGF0dGVybklEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIC8vIOmFjeWIl+OCkuS9nOOBo+OBpumgheebruS4gOimp+OCkuS9nOOCi+OBquOCieOAgeOBneOBrumFjeWIl+OCkuS9v+OBo+OBpuS7peS4i+OBruWkieaVsOOBruWIneacn+ioreWumuOCguOChOOCiuOBn+OBhOOBqOOBk+OCjVxyXG4gICAgLy8g5pyA57WC55qE44Gr44Gv6aCF55uu5LiA6Kan44KCUmVkdXjjgafnrqHnkIbjgZfjgZ/jgYTjgILjgZ3jgozjgpLjgr/jgrnjgq/kuIDopqfjga7lj7PkuIrjgavooajnpLrjgZfjgZ/oqK3lrprjg5zjgr/jg7PjgYvjgonplovjgY/jg6Ljg7zjg4Djg6vjgadPTk9GRuOCkuioreWumuOBmeOCi+OBk+OBqOOBp+OAgeOCv+OCueOCr+ips+e0sOeUu+mdouOBp+S9v+OBhumgheebruOCkumBuOOBueOCi+OAguaWsOimj+eZu+mMsuaZguOCgk9O44Gr44Gq44Gj44Gm44GE44KL6aCF55uu44GM6KGo56S644GV44KM44KLXHJcbiAgICAvLyDjgr/jgrnjgq/oqbPntLDnlLvpnaLjgafjg5fjg6njgrnjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgonpoIXnm67jgpLlopfjgoTjgZvjgovjgILjgZ3jgozjgoLpoIXnm67kuIDopqfjgavkv53nrqHjgZXjgozjgovjgIJcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRUYXNrOiBuZXdUYXNrc1R5cGUgPSB7IFtcIui/veWKoFwiXTogXCLov73liqBcIiB9O1xyXG4gICAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSBSZWFjdC51c2VTdGF0ZShjb250ZW50c0xpc3QpO1xyXG5cclxuICAgIC8vIGxldCBuZXdUYXNrczp7W2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZ307XHJcblxyXG4gICAgLy8gY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIC8vICAgICBwcm9wcy5zZXRPcGVuKHByb3BzLmluZGV4KTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInByb3BzLmluZGV4XCIgKyBwcm9wcy5pbmRleCk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJwcm9wcy5vcGVuXCIgKyBwcm9wcy5vcGVuKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc2V0T3Blbig5OTk5KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRldGFpbHM6IHtcclxuICAgICAgICAgICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnRlbnRzLm1hcCgoY29udGVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgZGV0YWlscyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICBbY29udGVudC5sYWJlbF06IGNvbnRlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBwYXR0ZXJuSW5mbzoge1xyXG4gICAgICAgICAgICBwYXR0ZXJuSUQ6IG51bWJlcjtcclxuICAgICAgICAgICAgb3JkZXI6IG51bWJlcjtcclxuICAgICAgICB9W107XHJcblxyXG4gICAgICAgIGNoZWNrZWQubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2l0ZXJQYXR0ZXJuaW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogY29udGVudCxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBwYXR0ZXJuSW5mby5wdXNoKHJlZ2l0ZXJQYXR0ZXJuaW5mbyk7XHJcbiAgICAgICAgICAgIC8vICA9IHtcclxuICAgICAgICAgICAgLy8gICAgIC4uLnBhdHRlcm5JbmZvLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVnaXRlclBhdHRlcm5pbmZvLFxyXG4gICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbmV3VGFza3M6IHRhc2tzID0ge1xyXG4gICAgICAgICAgICBkZXRhaWw6IGRldGFpbHMsXHJcbiAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBwYXR0ZXJuSW5mbyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyDjgZPjgZPjgafnt6jpm4ZcclxuICAgICAgICBkaXNwYXRjaCh0YXNrUmVnaXN0ZXIobmV3VGFza3MpKTtcclxuXHJcbiAgICAgICAgcHJvcHMuc2V0T3Blbig5OTk5KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g44GT44GT44Gv6YWN5YiX44Gn566h55CG44GX44GmbWFw44Gn6KGo56S644GX44Gf44GE44Go44GT44KNXHJcbiAgICAvLyB0YXNr5Z6L44Gu5aSJ5pWw44KS55So5oSP44GX44Gm44CB44Gd44KM44Gr5YCk44KS5qC857SN44GZ44KLXHJcbiAgICAvLyDmlrDopo/jgaDjgaPjgZ/jgonnmbvpjLLjgIHjgZnjgafjgavjgYLjgovpoIXnm67jgafjgYLjgozjgbDmm7TmlrDjgZnjgovjgIJcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PlxyXG4gICAgICAgICAgICAgICAgcmVhY3QtdHJhbnNpdGlvbi1ncm91cFxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvcGVuPXtwcm9wcy5pbmRleCA9PSBwcm9wcy5vcGVufVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGYWRlIGluPXtwcm9wcy5pbmRleCA9PSBwcm9wcy5vcGVufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBWYXIgaGFuZGxlUmVnaXN0ZXI9e2hhbmRsZVJlZ2lzdGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgaWQ9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDjgr/jgrnjgq/oqbPntLDnlLvpnaJ7cHJvcHMuaW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXAgYW5pbWF0ZXMgbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOOBk+OBk+OCkuimgeS/ruato+OAguODkeOCv+ODvOODs+OBr+mBuOaKnuW8j+OBp+OBr+OBhOOBkeOBquOBhOOAguikh+aVsOeZu+mMsuOBmeOCi+WPr+iDveaAp+OBjOOBguOCi+OBn+OCgeOAgueZu+mMsua4iOOBv+S7peWkluOBruODquOCueODiOOCkmZsaXRlcuOBp+S9nOaIkOOBl+OBpuihqOekuuOAgeOBqOOBi+OBi+OBquOAgiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxTaW1wbGVTZWxlY3QgY2hvaWNlPXtjaG9pY2V9IHNldENob2ljZT17c2V0Q2hvaWNlfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQYXR0ZXJuU3dpdGNoTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoZWNrZWQ9e3NldENoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudHMubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29udGVudC5sYWJlbCsnXycraW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXROXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbD1cImlmLXRoZW7jg5fjg6njg7Pjg4vjg7PjgrBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvbnRlbnQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJvcHMuaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50SW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM9e2NvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudHM9e3NldENvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9