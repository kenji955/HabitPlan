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
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TaskModal */ "./src/components/view/TaskModal.tsx");
/* harmony import */ var _taskPlus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./taskPlus */ "./src/components/view/taskPlus.tsx");
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Popper */ "./src/components/view/Popper.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


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

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  var handleToggle = function handleToggle(value) {
    return function () {
      setOpen(value);
      console.log("open:" + open);
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
      lineNumber: 52,
      columnNumber: 9
    }
  }, userTaskInfo.tasks.map(function (task, index) {
    var labelId = "checkbox-list-label-".concat(task.detail["testDetail1"]);
    return __jsx("div", {
      key: labelId + "_" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
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
        lineNumber: 58,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(task.detail["testDetail1"], " ").concat(task.detail["testDetail2"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }, __jsx(_TaskModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      open: open,
      setOpen: setOpen,
      task: task,
      index: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 37
      }
    })), __jsx(_Popper__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }));
  }), __jsx(_taskPlus__WEBPACK_IMPORTED_MODULE_11__["default"], {
    num: userTaskInfo.tasks.length + 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }));
}

_s(CheckboxList, "E/eJ56t/AylQRe7m3WKF5G5o1jg=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9UYXNrTGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdHMiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsImljb24iLCJkaXNwbGF5IiwiQ2hlY2tib3hMaXN0IiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsImhhbmRsZVRvZ2dsZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZVRhc2tIYW5kbGVyIiwiaW5kZXgiLCJtYXAiLCJ0YXNrIiwibGFiZWxJZCIsImRldGFpbCIsInVuZGVmaW5lZCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUN6QkMsNkVBQVksQ0FBQztBQUNUQyxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFFLE1BREo7QUFFSEMsY0FBUSxFQUFFLEdBRlA7QUFHSEMsWUFBTSxFQUFFLE1BSEw7QUFJSEMscUJBQWUsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBSnZDLEtBREU7QUFPVEMsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRSxNQURQO0FBRUZOLFlBQU0sRUFBRTtBQUZOO0FBUEcsR0FBRCxDQURhO0FBQUEsQ0FBRCxDQUE1QjtBQWVlLFNBQVNPLFlBQVQsR0FBd0I7QUFBQTs7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QXpEdUJyQixZO1VBQ0pkLFMsRUFFU29CLHdEOzs7S0FITE4sWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy4yMzM0ZGIwNjkxMTk0MGM4MjQ3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBGYWRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlXCI7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NvbW1lbnRcIjtcclxuaW1wb3J0IEFkZENpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGVcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IFJlbW92ZUNpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9SZW1vdmVDaXJjbGVcIjtcclxuXHJcbmltcG9ydCBUYXNrTW9kYWwgZnJvbSBcIi4vVGFza01vZGFsXCI7XHJcbmltcG9ydCBUYXNrUGx1cyBmcm9tIFwiLi90YXNrUGx1c1wiO1xyXG5pbXBvcnQgUG9wcGVyIGZyb20gXCIuL1BvcHBlclwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290czoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA3MjAsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggYXV0byA1cHggYXV0b1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hMaXN0KCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoOTk5OSk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAodmFsdWU6IG51bWJlcikgPT4gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4odmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib3BlbjpcIiArIG9wZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrSGFuZGxlciA9IChpbmRleDpudW1iZXIpID0+KCk9PntcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3RzfT5cclxuICAgICAgICAgICAge3VzZXJUYXNrSW5mby50YXNrcy5tYXAoKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3QtbGFiZWwtJHt0YXNrLmRldGFpbFtcInRlc3REZXRhaWwxXCJdfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGFiZWxJZCArIFwiX1wiICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFzay5kZXRhaWxbXCJ0aXRsZVwiXSArIFwiOlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGUoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2xhYmVsSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17YExpbmUgaXRlbSAke2luZGV4ICsgMX0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMVwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gJHt0YXNrLmRldGFpbFtcInRlc3REZXRhaWwyXCJdfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYXNrTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzaz17dGFza31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJY29uQnV0dG9uIGVkZ2U9XCJlbmRcIiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIiBvbkNsaWNrPXtkZWxldGVUYXNrSGFuZGxlcihpbmRleCl9PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxSZW1vdmVDaXJjbGVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHBlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0ljb25CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8VGFza1BsdXMgbnVtPXt1c2VyVGFza0luZm8udGFza3MubGVuZ3RoICsgMX0gLz5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=