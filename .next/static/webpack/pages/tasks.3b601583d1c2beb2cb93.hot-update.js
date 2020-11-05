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
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Select */ "./src/components/view/Select.tsx");
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(Number),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      choice = _React$useState2[0],
      setChoice = _React$useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])(); // 配列を作って項目一覧を作るなら、その配列を使って以下の変数の初期設定もやりたいところ
  // 最終的には項目一覧もReduxで管理したい。それをタスク一覧の右上に表示した設定ボタンから開くモーダルでONOFFを設定することで、タスク詳細画面で使う項目を選べる。新規登録時もONになっている項目が表示される
  // タスク詳細画面でプラスボタンを押したら項目を増やせる。それも項目一覧に保管される。
  // const defaultTask: newTasksType = { ["追加"]: "追加" };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(contentsList),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      contents = _React$useState4[0],
      setContents = _React$useState4[1]; // let newTasks:{[content: string]: string};


  var handleOpen = function handleOpen() {
    props.setOpen(props.index);
    console.log("props.index" + props.index);
    console.log("props.open" + props.open);
  };

  var handleClose = function handleClose() {
    props.setOpen(9999);
  };

  var handleRegister = function handleRegister() {
    var details;
    contents.map(function (content, index) {
      details = _objectSpread(_objectSpread({}, details), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, content.label, content.value));
    });
    var newTasks = {
      detail: details,
      patternInfo: [{
        patternID: choice,
        order: 1
      }]
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
      lineNumber: 141,
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
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "in": props.index == props.open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, __jsx(_AppVar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleRegister: handleRegister,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 25
    }
  }), __jsx("h2", {
    id: "transition-modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 25
    }
  }, "\u30BF\u30B9\u30AF\u8A73\u7D30\u753B\u9762", props.index + 1), __jsx("p", {
    id: "transition-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }, "react-transition-group animates me."), __jsx(_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    choice: choice,
    setChoice: setChoice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }), contents.map(function (content, index) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
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
        lineNumber: 170,
        columnNumber: 37
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 37
      }
    }));
  })))));
}

_s(TaskModal, "ntDaaHLcv5uDeOpRAAEEYOVIpRo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9UYXNrTW9kYWwudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsIm1vZGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93WSIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbnRlbnRzTGlzdCIsImxhYmVsIiwidmFsdWUiLCJUYXNrTW9kYWwiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiTnVtYmVyIiwiY2hvaWNlIiwic2V0Q2hvaWNlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJoYW5kbGVPcGVuIiwic2V0T3BlbiIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsImhhbmRsZVJlZ2lzdGVyIiwiZGV0YWlscyIsIm1hcCIsImNvbnRlbnQiLCJuZXdUYXNrcyIsImRldGFpbCIsInBhdHRlcm5JbmZvIiwicGF0dGVybklEIiwib3JkZXIiLCJ0YXNrUmVnaXN0ZXIiLCJCYWNrZHJvcCIsInRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDekJDLDZFQUFZLENBQUM7QUFDVEMsU0FBSyxFQUFFO0FBQ0hDLGFBQU8sRUFBRSxNQUROO0FBRUhDLGdCQUFVLEVBQUUsUUFGVDtB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RDFCLENBRkosRUFLSTtBQUFHLE1BQUUsRUFBQyw4QkFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUxKLEVBUUksTUFBQywrQ0FBRDtBQUFjLFVBQU0sRUFBRVIsTUFBdEI7QUFBOEIsYUFBUyxFQUFFQyxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFTS0csUUFBUSxDQUFDVyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVUixLQUFWLEVBQW9CO0FBQzlCLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsb0RBQUQsQ0FDSTtBQURKO0FBRUksV0FBSyxFQUFFUSxPQUFPLENBQUN4QixLQUZuQjtBQUdJLGNBQVEsRUFBRSxLQUhkO0FBSUksV0FBSyxFQUFFRyxLQUFLLENBQUNhLEtBSmpCO0FBS0ksa0JBQVksRUFBRUEsS0FMbEI7QUFNSSxjQUFRLEVBQUVKLFFBTmQ7QUFPSSxpQkFBVyxFQUFFQyxXQVBqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkosQ0FESjtBQWNILEdBZkEsQ0FUTCxDQURKLENBWkosQ0FKSixDQURKO0FBaUlIOztHQXJMdUJYLFM7VUFDSnZCLFMsRUFHQ2dDLHdEOzs7S0FKR1QsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy4zYjYwMTU4M2QxYzJiZWIyY2I5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIjtcclxuaW1wb3J0IElucHV0TiBmcm9tIFwiLi9JbnB1dE5vcm1hbFwiO1xyXG5pbXBvcnQgSW5wdXRSIGZyb20gXCIuL2lucHV0UmVxdWlyZWRcIjtcclxuaW1wb3J0IEFwcFZhciBmcm9tIFwiLi9BcHBWYXJcIjtcclxuaW1wb3J0IHsgQXBwQmFyLCBUb29sYmFyLCBJY29uQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjYWxlbmRhcixcclxuICAgIHBhdHRlcm4sXHJcbiAgICB0YXNrcyxcclxuICAgIHVzZXJUYXNrLFxyXG4gICAgdXNlclRhc2tJbmZvLFxyXG59IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGVcIjtcclxuaW1wb3J0IFNpbXBsZVNlbGVjdCBmcm9tIFwiLi9TZWxlY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdGFza1JlZ2lzdGVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFwZXI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbnR5cGUgbmV3VGFza3NUeXBlID0ge1xyXG4gICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuY29uc3QgY29udGVudHNMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcImlmLXRoZW7jg5fjg6njg7Pjg4vjg7PjgrBcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi57+S5oWj44Gu56mN44G/5LiK44GSXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuODkeOCv+ODvOODs1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLmsJfjgYzpgLLjgb7jgarjgYTjgajjgY1cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6ZW35pyf55qE44Gr6KaL6L+U44KK44Gu44GC44KL57+S5oWj44Gu5Y2z5pmC55qE44Gq5qW944GX44G/XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuebruaomVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLlrojjgozjgarjgYvjgaPjgZ/mmYLjga7nvbDliYdcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi44Os44OZ44OrXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIumBv+OBkeOCi+OBk+OBqOOBp+W+l+OCieOCjOOCi+ODoeODquODg+ODiFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLopovov5Tjgorjga7jgarjgYTnv5LmhaPjgavlr77jgZnjgovljbPmmYLnmoTjgarnl5vjgb9cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrTW9kYWwocHJvcHM6IGFueSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgLy8gY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Nob2ljZSwgc2V0Q2hvaWNlXSA9IFJlYWN0LnVzZVN0YXRlKE51bWJlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICAvLyDphY3liJfjgpLkvZzjgaPjgabpoIXnm67kuIDopqfjgpLkvZzjgovjgarjgonjgIHjgZ3jga7phY3liJfjgpLkvb/jgaPjgabku6XkuIvjga7lpInmlbDjga7liJ3mnJ/oqK3lrprjgoLjgoTjgorjgZ/jgYTjgajjgZPjgo1cclxuICAgIC8vIOacgOe1gueahOOBq+OBr+mgheebruS4gOimp+OCglJlZHV444Gn566h55CG44GX44Gf44GE44CC44Gd44KM44KS44K/44K544Kv5LiA6Kan44Gu5Y+z5LiK44Gr6KGo56S644GX44Gf6Kit5a6a44Oc44K/44Oz44GL44KJ6ZaL44GP44Oi44O844OA44Or44GnT05PRkbjgpLoqK3lrprjgZnjgovjgZPjgajjgafjgIHjgr/jgrnjgq/oqbPntLDnlLvpnaLjgafkvb/jgYbpoIXnm67jgpLpgbjjgbnjgovjgILmlrDopo/nmbvpjLLmmYLjgoJPTuOBq+OBquOBo+OBpuOBhOOCi+mgheebruOBjOihqOekuuOBleOCjOOCi1xyXG4gICAgLy8g44K/44K544Kv6Kmz57Sw55S76Z2i44Gn44OX44Op44K544Oc44K/44Oz44KS5oq844GX44Gf44KJ6aCF55uu44KS5aKX44KE44Gb44KL44CC44Gd44KM44KC6aCF55uu5LiA6Kan44Gr5L+d566h44GV44KM44KL44CCXHJcbiAgICAvLyBjb25zdCBkZWZhdWx0VGFzazogbmV3VGFza3NUeXBlID0geyBbXCLov73liqBcIl06IFwi6L+95YqgXCIgfTtcclxuICAgIGNvbnN0IFtjb250ZW50cywgc2V0Q29udGVudHNdID0gUmVhY3QudXNlU3RhdGUoY29udGVudHNMaXN0KTtcclxuXHJcbiAgICAvLyBsZXQgbmV3VGFza3M6e1tjb250ZW50OiBzdHJpbmddOiBzdHJpbmd9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc2V0T3Blbihwcm9wcy5pbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9wcy5pbmRleFwiICsgcHJvcHMuaW5kZXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvcHMub3BlblwiICsgcHJvcHMub3Blbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnNldE9wZW4oOTk5OSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgW2NvbnRlbnQubGFiZWxdOiBjb250ZW50LnZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBuZXdUYXNrczogdGFza3MgPSB7XHJcbiAgICAgICAgICAgIGRldGFpbDogZGV0YWlscyxcclxuICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IGNob2ljZSxcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g44GT44GT44Gn57eo6ZuGXHJcbiAgICAgICAgZGlzcGF0Y2godGFza1JlZ2lzdGVyKG5ld1Rhc2tzKSk7XHJcblxyXG4gICAgICAgIHByb3BzLnNldE9wZW4oOTk5OSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOOBk+OBk+OBr+mFjeWIl+OBp+euoeeQhuOBl+OBpm1hcOOBp+ihqOekuuOBl+OBn+OBhOOBqOOBk+OCjVxyXG4gICAgLy8gdGFza+Wei+OBruWkieaVsOOCkueUqOaEj+OBl+OBpuOAgeOBneOCjOOBq+WApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgLy8g5paw6KaP44Gg44Gj44Gf44KJ55m76Yyy44CB44GZ44Gn44Gr44GC44KL6aCF55uu44Gn44GC44KM44Gw5pu05paw44GZ44KL44CCXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVPcGVufT5cclxuICAgICAgICAgICAgICAgIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG4gICAgICAgICAgICAgICAgb3Blbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RmFkZSBpbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwVmFyIGhhbmRsZVJlZ2lzdGVyPXtoYW5kbGVSZWdpc3Rlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGlkPVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg44K/44K544Kv6Kmz57Sw55S76Z2ie3Byb3BzLmluZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdC10cmFuc2l0aW9uLWdyb3VwIGFuaW1hdGVzIG1lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaW1wbGVTZWxlY3QgY2hvaWNlPXtjaG9pY2V9IHNldENob2ljZT17c2V0Q2hvaWNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudHMubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXROXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbD1cImlmLXRoZW7jg5fjg6njg7Pjg4vjg7PjgrBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvbnRlbnQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJvcHMuaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50SW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM9e2NvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudHM9e3NldENvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPElucHV0TlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJpZi10aGVu44OX44Op44Oz44OL44Oz44KwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtwcm9wcy5pbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tzPXtuZXdUYXNrc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5ld1Rhc2tzPXtzZXROZXdUYXNrc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi57+S5oWj44Gu56mN44G/5LiK44GSXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtwcm9wcy5pbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tzPXtuZXdUYXNrc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5ld1Rhc2tzPXtzZXROZXdUYXNrc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi44OR44K/44O844OzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3Byb3BzLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFza3M9e25ld1Rhc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV3VGFza3M9e3NldE5ld1Rhc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLmsJfjgYzpgLLjgb7jgarjgYTjgajjgY1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3Byb3BzLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFza3M9e25ld1Rhc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV3VGFza3M9e3NldE5ld1Rhc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLplbfmnJ/nmoTjgavopovov5Tjgorjga7jgYLjgovnv5LmhaPjga7ljbPmmYLnmoTjgarmpb3jgZfjgb9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3Byb3BzLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFza3M9e25ld1Rhc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV3VGFza3M9e3NldE5ld1Rhc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLnm67mqJlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3Byb3BzLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFza3M9e25ld1Rhc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV3VGFza3M9e3NldE5ld1Rhc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLlrojjgozjgarjgYvjgaPjgZ/mmYLjga7nvbDliYdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3Byb3BzLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFza3M9e25ld1Rhc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV3VGFza3M9e3NldE5ld1Rhc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLjg6zjg5njg6tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3Byb3BzLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFza3M9e25ld1Rhc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV3VGFza3M9e3NldE5ld1Rhc2tzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5oKq44GE57+S5oWj44G444Gu5YKZ44GIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXROXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIumBv+OBkeOCi+OBk+OBqOOBp+W+l+OCieOCjOOCi+ODoeODquODg+ODiFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJvcHMuaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrcz17bmV3VGFza3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROZXdUYXNrcz17c2V0TmV3VGFza3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXROXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuimi+i/lOOCiuOBruOBquOBhOe/kuaFo+OBq+WvvuOBmeOCi+WNs+aZgueahOOBqueXm+OBv1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJvcHMuaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrcz17bmV3VGFza3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROZXdUYXNrcz17c2V0TmV3VGFza3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==