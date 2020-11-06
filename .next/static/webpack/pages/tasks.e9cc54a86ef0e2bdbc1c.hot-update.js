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

  var checkNew = userTaskInfo.tasks.length < parseInt(props.index); // すでにある項目のパターンIDをセットする。

  if (!checkNew) {
    var patternIdList = props.task.patternInfo.map(function (content) {
      return content.patternID;
    });
    setChecked(patternIdList);
  } // let newTasks:{[content: string]: string};
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
      lineNumber: 171,
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
      lineNumber: 175,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "in": props.index == props.open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }, __jsx(_AppVar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleRegister: handleRegister,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }), __jsx("h2", {
    id: "transition-modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 25
    }
  }, "\u30BF\u30B9\u30AF\u8A73\u7D30\u753B\u9762", props.index + 1), __jsx("p", {
    id: "transition-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 25
    }
  }, "react-transition-group animates me."), __jsx(_PatternSwitch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    checked: checked,
    setChecked: setChecked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 25
    }
  }), contents.map(function (content, index) {
    return __jsx("div", {
      key: content.label + '_' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
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
        lineNumber: 205,
        columnNumber: 37
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9UYXNrTW9kYWwudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsIm1vZGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93WSIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbnRlbnRzTGlzdCIsImxhYmVsIiwidmFsdWUiLCJUYXNrTW9kYWwiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwiY29udGVudHMiLCJzZXRDb250ZW50cyIsImNoZWNrTmV3IiwibGVuZ3RoIiwicGFyc2VJbnQiLCJpbmRleCIsInBhdHRlcm5JZExpc3QiLCJ0YXNrIiwicGF0dGVybkluZm8iLCJtYXAiLCJjb250ZW50IiwicGF0dGVybklEIiwiaGFuZGxlQ2xvc2UiLCJzZXRPcGVuIiwiaGFuZGxlUmVnaXN0ZXIiLCJkZXRhaWxzIiwicmVnaXRlclBhdHRlcm5pbmZvIiwib3JkZXIiLCJwdXNoIiwibmV3VGFza3MiLCJkZXRhaWwiLCJ0YXNrUmVnaXN0ZXIiLCJvcGVuIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFB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LG9EQUFELENBQ0k7QUFESjtBQUVJLFdBQUssRUFBRUssT0FBTyxDQUFDekIsS0FGbkI7QUFHSSxjQUFRLEVBQUUsS0FIZDtBQUlJLFdBQUssRUFBRUcsS0FBSyxDQUFDaUIsS0FKakI7QUFLSSxrQkFBWSxFQUFFQSxLQUxsQjtBQU1JLGNBQVEsRUFBRUwsUUFOZDtBQU9JLGlCQUFXLEVBQUVDLFdBUGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWSixDQURKO0FBY0gsR0FmQSxDQWRMLENBREosQ0FaSixDQUpKLENBREo7QUFxREg7O0dBNUl1QmQsUztVQUNKdkIsUyxFQVlDK0Isd0QsRUFDUUMsd0Q7OztLQWRMVCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLmU5Y2M1NGE4NmVmMGUyYmRiYzFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgRmFkZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFkZVwiO1xyXG5pbXBvcnQgSW5wdXROIGZyb20gXCIuL0lucHV0Tm9ybWFsXCI7XHJcbmltcG9ydCBBcHBWYXIgZnJvbSBcIi4vQXBwVmFyXCI7XHJcbmltcG9ydCB7XHJcbiAgICB0YXNrcyxcclxufSBmcm9tIFwiLi4vLi4vbW9kdWxlcy91c2VyVGFza3NUeXBlXCI7XHJcbmltcG9ydCBQYXR0ZXJuU3dpdGNoTGlzdCBmcm9tIFwiLi9QYXR0ZXJuU3dpdGNoXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB0YXNrUmVnaXN0ZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICBtb2RhbDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiBcIjgwJVwiLFxyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXBlcjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICMwMDBcIixcclxuICAgICAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxudHlwZSBuZXdUYXNrc1R5cGUgPSB7XHJcbiAgICBbY29udGVudDogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5jb25zdCBjb250ZW50c0xpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiaWYtdGhlbuODl+ODqeODs+ODi+ODs+OCsFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLnv5LmhaPjga7nqY3jgb/kuIrjgZJcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi44OR44K/44O844OzXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuawl+OBjOmAsuOBvuOBquOBhOOBqOOBjVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLplbfmnJ/nmoTjgavopovov5Tjgorjga7jgYLjgovnv5LmhaPjga7ljbPmmYLnmoTjgarmpb3jgZfjgb9cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi55uu5qiZXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuWuiOOCjOOBquOBi+OBo+OBn+aZguOBrue9sOWJh1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLjg6zjg5njg6tcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6YG/44GR44KL44GT44Go44Gn5b6X44KJ44KM44KL44Oh44Oq44OD44OIXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuimi+i/lOOCiuOBruOBquOBhOe/kuaFo+OBq+WvvuOBmeOCi+WNs+aZgueahOOBqueXm+OBv1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2tNb2RhbChwcm9wczogYW55KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICAvLyBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xyXG4gICAgLy8gaWYgKHByb3BzLnRhc2spIHtcclxuICAgIC8vICAgICBjb25zdCBuZXdDaGVja2VkID0gWy4uLmNoZWNrZWRdO1xyXG4gICAgLy8gICAgIHByb3BzLnRhc2sucGF0dGVybkluZm8ubWFwKFxyXG4gICAgLy8gICAgICAgICAoY29udGVudDogeyBwYXR0ZXJuSUQ6IG51bWJlcjsgb3JkZXI6IG51bWJlciB9KSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBuZXdDaGVja2VkLnB1c2goY29udGVudC5wYXR0ZXJuSUQpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICBzZXRDaGVja2VkKG5ld0NoZWNrZWQpO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICAvLyDphY3liJfjgpLkvZzjgaPjgabpoIXnm67kuIDopqfjgpLkvZzjgovjgarjgonjgIHjgZ3jga7phY3liJfjgpLkvb/jgaPjgabku6XkuIvjga7lpInmlbDjga7liJ3mnJ/oqK3lrprjgoLjgoTjgorjgZ/jgYTjgajjgZPjgo1cclxuICAgIC8vIOacgOe1gueahOOBq+OBr+mgheebruS4gOimp+OCglJlZHV444Gn566h55CG44GX44Gf44GE44CC44Gd44KM44KS44K/44K544Kv5LiA6Kan44Gu5Y+z5LiK44Gr6KGo56S644GX44Gf6Kit5a6a44Oc44K/44Oz44GL44KJ6ZaL44GP44Oi44O844OA44Or44GnT05PRkbjgpLoqK3lrprjgZnjgovjgZPjgajjgafjgIHjgr/jgrnjgq/oqbPntLDnlLvpnaLjgafkvb/jgYbpoIXnm67jgpLpgbjjgbnjgovjgILmlrDopo/nmbvpjLLmmYLjgoJPTuOBq+OBquOBo+OBpuOBhOOCi+mgheebruOBjOihqOekuuOBleOCjOOCi1xyXG4gICAgLy8g44K/44K544Kv6Kmz57Sw55S76Z2i44Gn44OX44Op44K544Oc44K/44Oz44KS5oq844GX44Gf44KJ6aCF55uu44KS5aKX44KE44Gb44KL44CC44Gd44KM44KC6aCF55uu5LiA6Kan44Gr5L+d566h44GV44KM44KL44CCXHJcbiAgICAvLyBjb25zdCBkZWZhdWx0VGFzazogbmV3VGFza3NUeXBlID0geyBbXCLov73liqBcIl06IFwi6L+95YqgXCIgfTtcclxuICAgIGNvbnN0IFtjb250ZW50cywgc2V0Q29udGVudHNdID0gUmVhY3QudXNlU3RhdGUoY29udGVudHNMaXN0KTtcclxuICAgIGNvbnN0IGNoZWNrTmV3ID0gdXNlclRhc2tJbmZvLnRhc2tzLmxlbmd0aCA8IHBhcnNlSW50KHByb3BzLmluZGV4KTtcclxuXHJcbiAgICAvLyDjgZnjgafjgavjgYLjgovpoIXnm67jga7jg5Hjgr/jg7zjg7NJROOCkuOCu+ODg+ODiOOBmeOCi+OAglxyXG4gICAgaWYoIWNoZWNrTmV3KXtcclxuICAgICAgICBjb25zdCBwYXR0ZXJuSWRMaXN0Om51bWJlcltdID0gcHJvcHMudGFzay5wYXR0ZXJuSW5mby5tYXAoKGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgcGF0dGVybklEOiBudW1iZXI7XHJcbiAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgfSk9PntcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQucGF0dGVybklEO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldENoZWNrZWQocGF0dGVybklkTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGV0IG5ld1Rhc2tzOntbY29udGVudDogc3RyaW5nXTogc3RyaW5nfTtcclxuXHJcbiAgICAvLyBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHByb3BzLnNldE9wZW4ocHJvcHMuaW5kZXgpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicHJvcHMuaW5kZXhcIiArIHByb3BzLmluZGV4KTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInByb3BzLm9wZW5cIiArIHByb3BzLm9wZW4pO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5zZXRPcGVuKDk5OTkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWdpc3RlciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZGV0YWlsczoge1xyXG4gICAgICAgICAgICBbY29udGVudDogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29udGVudHMubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBkZXRhaWxzID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uZGV0YWlscyxcclxuICAgICAgICAgICAgICAgIFtjb250ZW50LmxhYmVsXTogY29udGVudC52YWx1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHBhdHRlcm5JbmZvOiB7XHJcbiAgICAgICAgICAgIHBhdHRlcm5JRDogbnVtYmVyO1xyXG4gICAgICAgICAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgICAgIH1bXTtcclxuXHJcbiAgICAgICAgY2hlY2tlZC5tYXAoKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVnaXRlclBhdHRlcm5pbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklEOiBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHBhdHRlcm5JbmZvLnB1c2gocmVnaXRlclBhdHRlcm5pbmZvKTtcclxuICAgICAgICAgICAgLy8gID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgLi4ucGF0dGVybkluZm8sXHJcbiAgICAgICAgICAgIC8vICAgICByZWdpdGVyUGF0dGVybmluZm8sXHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdUYXNrczogdGFza3MgPSB7XHJcbiAgICAgICAgICAgIGRldGFpbDogZGV0YWlscyxcclxuICAgICAgICAgICAgcGF0dGVybkluZm86IHBhdHRlcm5JbmZvLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIOOBk+OBk+OBp+e3qOmbhlxyXG4gICAgICAgIGRpc3BhdGNoKHRhc2tSZWdpc3RlcihuZXdUYXNrcykpO1xyXG5cclxuICAgICAgICBwcm9wcy5zZXRPcGVuKDk5OTkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDjgZPjgZPjga/phY3liJfjgafnrqHnkIbjgZfjgaZtYXDjgafooajnpLrjgZfjgZ/jgYTjgajjgZPjgo1cclxuICAgIC8vIHRhc2vlnovjga7lpInmlbDjgpLnlKjmhI/jgZfjgabjgIHjgZ3jgozjgavlgKTjgpLmoLzntI3jgZnjgotcclxuICAgIC8vIOaWsOimj+OBoOOBo+OBn+OCieeZu+mMsuOAgeOBmeOBp+OBq+OBguOCi+mgheebruOBp+OBguOCjOOBsOabtOaWsOOBmeOCi+OAglxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlT3Blbn0+XHJcbiAgICAgICAgICAgICAgICByZWFjdC10cmFuc2l0aW9uLWdyb3VwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuICAgICAgICAgICAgICAgIG9wZW49e3Byb3BzLmluZGV4ID09IHByb3BzLm9wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZhZGUgaW49e3Byb3BzLmluZGV4ID09IHByb3BzLm9wZW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwcFZhciBoYW5kbGVSZWdpc3Rlcj17aGFuZGxlUmVnaXN0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOOCv+OCueOCr+ips+e0sOeUu+mdontwcm9wcy5pbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3QtdHJhbnNpdGlvbi1ncm91cCBhbmltYXRlcyBtZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog44GT44GT44KS6KaB5L+u5q2j44CC44OR44K/44O844Oz44Gv6YG45oqe5byP44Gn44Gv44GE44GR44Gq44GE44CC6KSH5pWw55m76Yyy44GZ44KL5Y+v6IO95oCn44GM44GC44KL44Gf44KB44CC55m76Yyy5riI44G/5Lul5aSW44Gu44Oq44K544OI44KSZmxpdGVy44Gn5L2c5oiQ44GX44Gm6KGo56S644CB44Go44GL44GL44Gq44CCICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFNpbXBsZVNlbGVjdCBjaG9pY2U9e2Nob2ljZX0gc2V0Q2hvaWNlPXtzZXRDaG9pY2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGF0dGVyblN3aXRjaExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGVja2VkPXtzZXRDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudHMubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29udGVudC5sYWJlbCsnXycraW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXROXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbD1cImlmLXRoZW7jg5fjg6njg7Pjg4vjg7PjgrBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvbnRlbnQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJvcHMuaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50SW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM9e2NvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudHM9e3NldENvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9