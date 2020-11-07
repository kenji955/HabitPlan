webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/components/view/TaskList.tsx":
/*!******************************************!*\
  !*** ./src/components/view/TaskList.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxList; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Comment */ "./node_modules/@material-ui/icons/Comment.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/RemoveCircle */ "./node_modules/@material-ui/icons/RemoveCircle.js");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TaskModal */ "./src/components/view/TaskModal.tsx");
/* harmony import */ var _taskPlus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./taskPlus */ "./src/components/view/taskPlus.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\TaskList.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












 // import Popper from "./Popper";


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    roots: {
      width: "100%",
      maxWidth: 720,
      margin: "auto",
      backgroundColor: theme.palette.background.paper
    },
    icon: {
      display: "flex",
      margin: "10px auto 5px auto"
    },
    paper: {
      border: "1px solid",
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper
    }
  });
});
function CheckboxList() {
  _s();

  var _this = this;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(9999),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      anchorEl = _React$useState4[0],
      setAnchorEl = _React$useState4[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  var openPopper = Boolean(anchorEl);
  var id = open ? "simple-popper" : undefined;

  var handleToggle = function handleToggle(value) {
    return function () {
      setOpen(value);
      console.log("open:" + openPopper);
    };
  };

  var deleteTaskHandler = function deleteTaskHandler(index) {
    return function () {};
  };

  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, userTaskInfo.tasks.map(function (task, index) {
    var labelId = "checkbox-list-label-".concat(task.detail["testDetail1"]);
    return __jsx("div", {
      key: labelId + "_" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: task.detail["title"] + ":" + index,
      role: undefined,
      dense: true,
      button: true,
      onClick: handleToggle(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(task.detail["testDetail1"], " ").concat(task.detail["testDetail2"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 29
      }
    }, __jsx(_TaskModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      open: open,
      setOpen: setOpen,
      task: task,
      index: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 33
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 37
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      edge: "end",
      "aria-label": "comments",
      onClick: handleClick // onClick={deleteTaskHandler(index)}
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_11___default.a, {
      color: "secondary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 37
      }
    })), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: id,
      open: openPopper,
      anchorEl: anchorEl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: classes.paper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 37
      }
    }, "The content of the Popper.")))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 25
      }
    }));
  }), __jsx(_taskPlus__WEBPACK_IMPORTED_MODULE_13__["default"], {
    num: userTaskInfo.tasks.length + 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }));
}

_s(CheckboxList, "3X2BEIjJRIm/7IfXvxb6j87EslI=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_14__["useSelector"]];
});

_c = CheckboxList;

var _c;

$RefreshReg$(_c, "CheckboxList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9UYXNrTGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdHMiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsImljb24iLCJkaXNwbGF5IiwiYm9yZGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJDaGVja2JveExpc3QiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0Iiwib3BlblBvcHBlciIsIkJvb2xlYW4iLCJpZCIsInVuZGVmaW5lZCIsImhhbmRsZVRvZ2dsZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZVRhc2tIYW5kbGVyIiwiaW5kZXgiLCJtYXAiLCJ0YXNrIiwibGFiZWxJZCIsImRldGFpbCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0NBRUE7O0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQ3pCQyw2RUFBWSxDQUFDO0FBQ1RDLFNBQUssRUFBRTtBQUNIQyxXQUFLLEVBQUUsTUFESjtBQUVIQyxjQUFRLEVBQUUsR0FGUDtBQUdIQyxZQUFNLEVBQUUsTUFITDtBQUlIQyxxQkFBZSxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkM7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QTtBQUFBO0FBQUEsSUFyREosQ0FESjtBQXlESDs7R0E5RXVCN0IsWTtVQUNKakIsUyxFQUVTdUIsd0Q7OztLQUhMTixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLjE1OTljMWViMzU3MjEwNWI5Njc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIjtcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ29tbWVudFwiO1xyXG5pbXBvcnQgQWRkQ2lyY2xlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZVwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgUG9wcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIjtcclxuaW1wb3J0IFJlbW92ZUNpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9SZW1vdmVDaXJjbGVcIjtcclxuXHJcbmltcG9ydCBUYXNrTW9kYWwgZnJvbSBcIi4vVGFza01vZGFsXCI7XHJcbmltcG9ydCBUYXNrUGx1cyBmcm9tIFwiLi90YXNrUGx1c1wiO1xyXG4vLyBpbXBvcnQgUG9wcGVyIGZyb20gXCIuL1BvcHBlclwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290czoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA3MjAsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggYXV0byA1cHggYXV0b1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFwZXI6IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrYm94TGlzdCgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKDk5OTkpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcblxyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKGFuY2hvckVsID8gbnVsbCA6IGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvcGVuUG9wcGVyID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgICBjb25zdCBpZCA9IG9wZW4gPyBcInNpbXBsZS1wb3BwZXJcIiA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAodmFsdWU6IG51bWJlcikgPT4gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4odmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib3BlbjpcIiArIG9wZW5Qb3BwZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrSGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiAoKSA9PiB7fTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290c30+XHJcbiAgICAgICAgICAgIHt1c2VyVGFza0luZm8udGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LWxhYmVsLSR7dGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMVwiXX1gO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xhYmVsSWQgKyBcIl9cIiArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Rhc2suZGV0YWlsW1widGl0bGVcIl0gKyBcIjpcIiArIGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtsYWJlbElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2BMaW5lIGl0ZW0gJHtpbmRleCArIDF9ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGV0YWlsW1widGVzdERldGFpbDFcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICR7dGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMlwiXX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFza01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW49e3NldE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2s9e3Rhc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJlbmRcIiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17ZGVsZXRlVGFza0hhbmRsZXIoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZUljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyogey8qIDxQb3BwZXIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVuUG9wcGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgY29udGVudCBvZiB0aGUgUG9wcGVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPFRhc2tQbHVzIG51bT17dXNlclRhc2tJbmZvLnRhc2tzLmxlbmd0aCArIDF9IC8+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9