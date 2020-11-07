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
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/RemoveCircle */ "./node_modules/@material-ui/icons/RemoveCircle.js");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TaskModal */ "./src/components/view/TaskModal.tsx");
/* harmony import */ var _taskPlus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./taskPlus */ "./src/components/view/taskPlus.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Menu */ "./src/components/view/Menu.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");


var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\TaskList.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















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
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["useDispatch"])();

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
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  var handleToggle = function handleToggle(value) {
    return function () {
      setOpen(value);
      console.log("open:" + open);
    };
  };

  var deleteTaskHandler = function deleteTaskHandler(index) {
    return function () {
      dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_15__["taskDelete"])(index));
    };
  };

  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, userTaskInfo.tasks.map(function (task, index) {
    var labelId = "checkbox-list-label-".concat(task.detail["testDetail1"]);
    return __jsx("div", {
      key: labelId + "_" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
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
        lineNumber: 73,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(task.detail["testDetail1"], " ").concat(task.detail["testDetail2"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    }, __jsx(_TaskModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      open: open,
      setOpen: setOpen,
      task: task,
      index: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 33
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
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
        lineNumber: 96,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_10___default.a, {
      color: "secondary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 37
      }
    })), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_13__["default"], {
      anchorEl: anchorEl,
      setAnchorEl: setAnchorEl,
      deleteTaskHandler: deleteTaskHandler,
      index: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 33
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 25
      }
    }));
  }), __jsx(_taskPlus__WEBPACK_IMPORTED_MODULE_12__["default"], {
    num: userTaskInfo.tasks.length + 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }));
}

_s(CheckboxList, "TOP9iquMmE+SQW9AAivl8xmnoj4=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_14__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_14__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9UYXNrTGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdHMiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsImljb24iLCJkaXNwbGF5IiwiYm9yZGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJDaGVja2JveExpc3QiLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVUb2dnbGUiLCJ2YWx1ZSIsImRlbGV0ZVRhc2tIYW5kbGVyIiwiaW5kZXgiLCJ0YXNrRGVsZXRlIiwibWFwIiwidGFzayIsImxhYmVsSWQiLCJkZXRhaWwiLCJ1bmRlZmluZWQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQ3pCQyw2RUFBWSxDQUFDO0FBQ1RDLFNBQUssRUFBRTtBQUNIQyxXQUFLLEVBQUUsTUFESjtBQUVIQyxjQUFRLEVBQUUsR0FGUDtBQUdIQyxZQUFNLEVBQUUsTUFITDtBQUlIQyxxQkFBZSxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FB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QWdESDs7R0F0RXVCN0IsWTtVQUNKakIsUyxFQUNDb0Isd0QsRUFFUUssd0Q7OztLQUpMUixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLmVhZjU5MmE5MzA4YTVlMzFiOWM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIjtcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ29tbWVudFwiO1xyXG5pbXBvcnQgQWRkQ2lyY2xlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZVwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgUG9wcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIjtcclxuaW1wb3J0IFJlbW92ZUNpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9SZW1vdmVDaXJjbGVcIjtcclxuXHJcbmltcG9ydCBUYXNrTW9kYWwgZnJvbSBcIi4vVGFza01vZGFsXCI7XHJcbmltcG9ydCBUYXNrUGx1cyBmcm9tIFwiLi90YXNrUGx1c1wiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB0YXNrRGVsZXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgcm9vdHM6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogNzIwLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IGF1dG8gNXB4IGF1dG9cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveExpc3QoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSg5OTk5KTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG5cclxuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAodmFsdWU6IG51bWJlcikgPT4gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4odmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib3BlbjpcIiArIG9wZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrSGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2godGFza0RlbGV0ZShpbmRleCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290c30+XHJcbiAgICAgICAgICAgIHt1c2VyVGFza0luZm8udGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LWxhYmVsLSR7dGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMVwiXX1gO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xhYmVsSWQgKyBcIl9cIiArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Rhc2suZGV0YWlsW1widGl0bGVcIl0gKyBcIjpcIiArIGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtsYWJlbElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2BMaW5lIGl0ZW0gJHtpbmRleCArIDF9ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGV0YWlsW1widGVzdERldGFpbDFcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICR7dGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMlwiXX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFza01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW49e3NldE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2s9e3Rhc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJlbmRcIiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17ZGVsZXRlVGFza0hhbmRsZXIoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZUljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBhbmNob3JFbD17YW5jaG9yRWx9IHNldEFuY2hvckVsPXtzZXRBbmNob3JFbH3jgIBkZWxldGVUYXNrSGFuZGxlcj17ZGVsZXRlVGFza0hhbmRsZXJ9IGluZGV4PXtpbmRleH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8VGFza1BsdXMgbnVtPXt1c2VyVGFza0luZm8udGFza3MubGVuZ3RoICsgMX0gLz5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=