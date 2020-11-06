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
      lineNumber: 158,
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
      lineNumber: 162,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "in": props.index == props.open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }, __jsx(_AppVar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleRegister: handleRegister,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 25
    }
  }), __jsx("h2", {
    id: "transition-modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 25
    }
  }, "\u30BF\u30B9\u30AF\u8A73\u7D30\u753B\u9762", props.index + 1), __jsx("p", {
    id: "transition-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 25
    }
  }, "react-transition-group animates me."), __jsx(_PatternSwitch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    checked: checked,
    setChecked: setChecked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  }), contents.map(function (content, index) {
    return __jsx("div", {
      key: content.label + "_" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
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
        lineNumber: 192,
        columnNumber: 37
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9UYXNrTW9kYWwudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsIm1vZGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93WSIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbnRlbnRzTGlzdCIsImxhYmVsIiwidmFsdWUiLCJUYXNrTW9kYWwiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidGFza3MiLCJ1c2VyVGFza0luZm8iLCJjaGVja05ldyIsImxlbmd0aCIsInBhcnNlSW50IiwiaW5kZXgiLCJzdGF0ZUNoZWNrZWQiLCJ0YXNrIiwicGF0dGVybkluZm8iLCJtYXAiLCJjb250ZW50IiwicGF0dGVybklEIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJoYW5kbGVDbG9zZSIsInNldE9wZW4iLCJoYW5kbGVSZWdpc3RlciIsImRldGFpbHMiLCJyZWdpdGVyUGF0dGVybmluZm8iLCJvcmRlciIsInB1c2giLCJuZXdUYXNrcyIsImRldGFpbCIsInRhc2tSZWdpc3RlciIsIm9wZW4iLCJCYWNrZHJvcCIsInRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFD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RUFBRSxLQUhkO0FBSUksV0FBSyxFQUFFRyxLQUFLLENBQUNTLEtBSmpCO0FBS0ksa0JBQVksRUFBRUEsS0FMbEI7QUFNSSxjQUFRLEVBQUVhLFFBTmQ7QUFPSSxpQkFBVyxFQUFFQyxXQVBqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkosQ0FESjtBQWNILEdBZkEsQ0FkTCxDQURKLENBWkosQ0FKSixDQURKO0FBcURIOztHQWpJdUJ4QixTO1VBQ0p2QixTLEVBRVMwQix3RCxFQW9CUm1CLHdEOzs7S0F2Qkd0QixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLmMyNmJiYzE2ODJkZjg4ZWM4OTE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgRmFkZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFkZVwiO1xyXG5pbXBvcnQgSW5wdXROIGZyb20gXCIuL0lucHV0Tm9ybWFsXCI7XHJcbmltcG9ydCBBcHBWYXIgZnJvbSBcIi4vQXBwVmFyXCI7XHJcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdXNlclRhc2tzVHlwZVwiO1xyXG5pbXBvcnQgUGF0dGVyblN3aXRjaExpc3QgZnJvbSBcIi4vUGF0dGVyblN3aXRjaFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdGFza1JlZ2lzdGVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFwZXI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbnR5cGUgbmV3VGFza3NUeXBlID0ge1xyXG4gICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuY29uc3QgY29udGVudHNMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcImlmLXRoZW7jg5fjg6njg7Pjg4vjg7PjgrBcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi57+S5oWj44Gu56mN44G/5LiK44GSXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuODkeOCv+ODvOODs1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLmsJfjgYzpgLLjgb7jgarjgYTjgajjgY1cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6ZW35pyf55qE44Gr6KaL6L+U44KK44Gu44GC44KL57+S5oWj44Gu5Y2z5pmC55qE44Gq5qW944GX44G/XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuebruaomVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLlrojjgozjgarjgYvjgaPjgZ/mmYLjga7nvbDliYdcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi44Os44OZ44OrXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIumBv+OBkeOCi+OBk+OBqOOBp+W+l+OCieOCjOOCi+ODoeODquODg+ODiFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLopovov5Tjgorjga7jgarjgYTnv5LmhaPjgavlr77jgZnjgovljbPmmYLnmoTjgarnl5vjgb9cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrTW9kYWwocHJvcHM6IGFueSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgLy8gY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICBjb25zdCBjaGVja05ldyA9IHVzZXJUYXNrSW5mby50YXNrcy5sZW5ndGggPCBwYXJzZUludChwcm9wcy5pbmRleCk7XHJcbiAgICBsZXQgc3RhdGVDaGVja2VkOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgaWYgKCFjaGVja05ldykge1xyXG4gICAgICAgIHN0YXRlQ2hlY2tlZCA9IHByb3BzLnRhc2sucGF0dGVybkluZm8ubWFwKFxyXG4gICAgICAgICAgICAoY29udGVudDogeyBwYXR0ZXJuSUQ6IG51bWJlcjsgb3JkZXI6IG51bWJlciB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5wYXR0ZXJuSUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyW10+KHN0YXRlQ2hlY2tlZCk7XHJcbiAgICAvLyBpZiAocHJvcHMudGFzaykge1xyXG4gICAgLy8gICAgIGNvbnN0IG5ld0NoZWNrZWQgPSBbLi4uY2hlY2tlZF07XHJcbiAgICAvLyAgICAgcHJvcHMudGFzay5wYXR0ZXJuSW5mby5tYXAoXHJcbiAgICAvLyAgICAgICAgIChjb250ZW50OiB7IHBhdHRlcm5JRDogbnVtYmVyOyBvcmRlcjogbnVtYmVyIH0pID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIG5ld0NoZWNrZWQucHVzaChjb250ZW50LnBhdHRlcm5JRCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICAgIHNldENoZWNrZWQobmV3Q2hlY2tlZCk7XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICAvLyDphY3liJfjgpLkvZzjgaPjgabpoIXnm67kuIDopqfjgpLkvZzjgovjgarjgonjgIHjgZ3jga7phY3liJfjgpLkvb/jgaPjgabku6XkuIvjga7lpInmlbDjga7liJ3mnJ/oqK3lrprjgoLjgoTjgorjgZ/jgYTjgajjgZPjgo1cclxuICAgIC8vIOacgOe1gueahOOBq+OBr+mgheebruS4gOimp+OCglJlZHV444Gn566h55CG44GX44Gf44GE44CC44Gd44KM44KS44K/44K544Kv5LiA6Kan44Gu5Y+z5LiK44Gr6KGo56S644GX44Gf6Kit5a6a44Oc44K/44Oz44GL44KJ6ZaL44GP44Oi44O844OA44Or44GnT05PRkbjgpLoqK3lrprjgZnjgovjgZPjgajjgafjgIHjgr/jgrnjgq/oqbPntLDnlLvpnaLjgafkvb/jgYbpoIXnm67jgpLpgbjjgbnjgovjgILmlrDopo/nmbvpjLLmmYLjgoJPTuOBq+OBquOBo+OBpuOBhOOCi+mgheebruOBjOihqOekuuOBleOCjOOCi1xyXG4gICAgLy8g44K/44K544Kv6Kmz57Sw55S76Z2i44Gn44OX44Op44K544Oc44K/44Oz44KS5oq844GX44Gf44KJ6aCF55uu44KS5aKX44KE44Gb44KL44CC44Gd44KM44KC6aCF55uu5LiA6Kan44Gr5L+d566h44GV44KM44KL44CCXHJcbiAgICAvLyBjb25zdCBkZWZhdWx0VGFzazogbmV3VGFza3NUeXBlID0geyBbXCLov73liqBcIl06IFwi6L+95YqgXCIgfTtcclxuICAgIGNvbnN0IFtjb250ZW50cywgc2V0Q29udGVudHNdID0gUmVhY3QudXNlU3RhdGUoY29udGVudHNMaXN0KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5zZXRPcGVuKDk5OTkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWdpc3RlciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZGV0YWlsczoge1xyXG4gICAgICAgICAgICBbY29udGVudDogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29udGVudHMubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBkZXRhaWxzID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uZGV0YWlscyxcclxuICAgICAgICAgICAgICAgIFtjb250ZW50LmxhYmVsXTogY29udGVudC52YWx1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHBhdHRlcm5JbmZvOiB7XHJcbiAgICAgICAgICAgIHBhdHRlcm5JRDogbnVtYmVyO1xyXG4gICAgICAgICAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgICAgIH1bXTtcclxuXHJcbiAgICAgICAgY2hlY2tlZC5tYXAoKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVnaXRlclBhdHRlcm5pbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklEOiBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHBhdHRlcm5JbmZvLnB1c2gocmVnaXRlclBhdHRlcm5pbmZvKTtcclxuICAgICAgICAgICAgLy8gID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgLi4ucGF0dGVybkluZm8sXHJcbiAgICAgICAgICAgIC8vICAgICByZWdpdGVyUGF0dGVybmluZm8sXHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdUYXNrczogdGFza3MgPSB7XHJcbiAgICAgICAgICAgIGRldGFpbDogZGV0YWlscyxcclxuICAgICAgICAgICAgcGF0dGVybkluZm86IHBhdHRlcm5JbmZvLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIOOBk+OBk+OBp+e3qOmbhlxyXG4gICAgICAgIGRpc3BhdGNoKHRhc2tSZWdpc3RlcihuZXdUYXNrcykpO1xyXG5cclxuICAgICAgICBwcm9wcy5zZXRPcGVuKDk5OTkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDjgZPjgZPjga/phY3liJfjgafnrqHnkIbjgZfjgaZtYXDjgafooajnpLrjgZfjgZ/jgYTjgajjgZPjgo1cclxuICAgIC8vIHRhc2vlnovjga7lpInmlbDjgpLnlKjmhI/jgZfjgabjgIHjgZ3jgozjgavlgKTjgpLmoLzntI3jgZnjgotcclxuICAgIC8vIOaWsOimj+OBoOOBo+OBn+OCieeZu+mMsuOAgeOBmeOBp+OBq+OBguOCi+mgheebruOBp+OBguOCjOOBsOabtOaWsOOBmeOCi+OAglxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlT3Blbn0+XHJcbiAgICAgICAgICAgICAgICByZWFjdC10cmFuc2l0aW9uLWdyb3VwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuICAgICAgICAgICAgICAgIG9wZW49e3Byb3BzLmluZGV4ID09IHByb3BzLm9wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZhZGUgaW49e3Byb3BzLmluZGV4ID09IHByb3BzLm9wZW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwcFZhciBoYW5kbGVSZWdpc3Rlcj17aGFuZGxlUmVnaXN0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOOCv+OCueOCr+ips+e0sOeUu+mdontwcm9wcy5pbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3QtdHJhbnNpdGlvbi1ncm91cCBhbmltYXRlcyBtZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog44GT44GT44KS6KaB5L+u5q2j44CC44OR44K/44O844Oz44Gv6YG45oqe5byP44Gn44Gv44GE44GR44Gq44GE44CC6KSH5pWw55m76Yyy44GZ44KL5Y+v6IO95oCn44GM44GC44KL44Gf44KB44CC55m76Yyy5riI44G/5Lul5aSW44Gu44Oq44K544OI44KSZmxpdGVy44Gn5L2c5oiQ44GX44Gm6KGo56S644CB44Go44GL44GL44Gq44CCICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFNpbXBsZVNlbGVjdCBjaG9pY2U9e2Nob2ljZX0gc2V0Q2hvaWNlPXtzZXRDaG9pY2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGF0dGVyblN3aXRjaExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGVja2VkPXtzZXRDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudHMubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29udGVudC5sYWJlbCArIFwiX1wiICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXROXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbD1cImlmLXRoZW7jg5fjg6njg7Pjg4vjg7PjgrBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvbnRlbnQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJvcHMuaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50SW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM9e2NvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudHM9e3NldENvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9