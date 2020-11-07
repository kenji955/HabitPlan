webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/components/view/PatternList.tsx":
/*!*********************************************!*\
  !*** ./src/components/view/PatternList.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Comment */ "./node_modules/@material-ui/icons/Comment.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/RemoveCircle */ "./node_modules/@material-ui/icons/RemoveCircle.js");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\PatternList.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    roots: {
      width: "100%",
      maxWidth: 720,
      margin: "auto",
      backgroundColor: theme.palette.background.paper
    }
  });
});
function PatternList(props) {
  _s();

  var _this = this;

  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo; // マイナスボタンがクリックされたらパターンから対象のタスクを除外する。


  var patternRemoveHandler = function patternRemoveHandler(detailTitle) {
    return function () {
      var patternId = props.choice;
      dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_12__["taskRemovePattern"])({
        patternId: patternId,
        detailTitle: detailTitle
      }));
    };
  }; // 選択したパターンIDが設定されているタスクを抽出する。


  var choicePatternTasks = userTaskInfo.tasks.filter(function (task) {
    return task.patternInfo.some(function (task) {
      return task.patternID == props.choice;
    });
  });
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, choicePatternTasks.map(function (task, index) {
    var taskPattern = task.patternInfo.filter(function (patternInfo) {
      return patternInfo.patternID == props.choice;
    });
    var labelId = "checkbox-list-label-".concat(taskPattern[0].patternID + taskPattern[0].order);
    return __jsx("div", {
      key: taskPattern[0].patternID + '_' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: taskPattern[0].patternID + taskPattern[0].order,
      role: undefined,
      dense: true,
      button: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      edge: "end",
      "aria-label": "comments",
      onClick: patternRemoveHandler(task.detail['title']),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9___default.a, {
      color: "secondary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: labelId,
      primary: "Line item ".concat(taskPattern[0].patternID + "_" + taskPattern[0].order, " ").concat(task.detail["testDetail1"], " ").concat(task.detail["testDetail2"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 37
      }
    })))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 25
      }
    }));
  }));
}

_s(PatternList, "D0QvzFYO60X7H5R5opj3sOfH4UU=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"]];
});

_c = PatternList;

var _c;

$RefreshReg$(_c, "PatternList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9QYXR0ZXJuTGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdHMiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIlBhdHRlcm5MaXN0IiwicHJvcHMiLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsInBhdHRlcm5SZW1vdmVIYW5kbGVyIiwiZGV0YWlsVGl0bGUiLCJwYXR0ZXJuSWQiLCJjaG9pY2UiLCJ0YXNrUmVtb3ZlUGF0dGVybiIsImNob2ljZVBhdHRlcm5UYXNrcyIsImZpbHRlciIsInRhc2siLCJwYXR0ZXJuSW5mbyIsInNvbWUiLCJwYXR0ZXJuSUQiLCJtYXAiLCJpbmRleCIsInRhc2tQYXR0ZXJuIiwibGFiZWxJZCIsIm9yZGVyIiwidW5kZWZpbmVkIiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUN6QkMsNkVBQVksQ0FBQztBQUNUQyxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFFLE1BREo7QUFFSEMsY0FBUSxFQUFFLEdBRlA7QUFJSEMsWUFBTSxFQUFFLE1BSkw7QUFLSEMscUJBQWUsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBTHZDO0FBREUsR0FBRCxDQURhO0FBQUEsQ0FBRCxDQUE1QjtBQVllLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQWdEO0FBQUE7O0FBQUE7O0FBQzNELE1BQU1DLE9BQU8sR0FBR2QsU0FBUyxFQUF6QjtBQUNBLE1BQU1lLFFBQVEsR0FBR0MsZ0VBQVcsRUFBNUI7O0FBRjJELHFCQUdsQ0MsZ0VBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBc0JBLEtBQUssQ0FBQ0MsS0FBNUI7QUFBQSxHQUFELENBSHVCO0FBQUEsTUFHbkRDLFlBSG1ELGdCQUduREEsWUFIbUQsRUFLM0Q7OztBQUNBLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsV0FBRDtBQUFBLFdBQXNCLFlBQUk7QUFDbkQsVUFBTUMsU0FBUyxHQUFFVixLQUFLLENBQUNXLE1BQXZCO0FBQ0FULGNBQVEsQ0FBQ1UsK0VBQWlCLENBQUM7QUFBQ0YsaUJBQVMsRUFBVEEsU0FBRDtBQUFXRCxtQkFBVyxFQUFYQTtBQUFYLE9BQUQsQ0FBbEIsQ0FBUjtBQUNILEtBSDRCO0FBQUEsR0FBN0IsQ0FOMkQsQ0FXM0Q7OztBQUNBLE1BQU1JLGtCQUFrQixHQUFHTixZQUFZLENBQUNELEtBQWIsQ0FBbUJRLE1BQW5CLENBQTBCLFVBQVVDLElBQVYsRUFBZ0I7QUFDakUsV0FBT0EsSUFBSSxDQUFDQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixVQUFDRixJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDRyxTQUFMLElBQWtCbEIsS0FBSyxDQUFDVyxNQUFsQztBQUFBLEtBQXRCLENBQVA7QUFDSCxHQUYwQixDQUEzQjtBQUlBLFNBQ0ksTUFBQyw4REFBRDtBQUFNLGFBQVMsRUFBRVYsT0FBTyxDQUFDVixLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tzQixrQkFBa0IsQ0FBQ00sR0FBbkIsQ0FBdUIsVUFBQ0osSUFBRCxFQUFNSyxLQUFOLEVBQWdCO0FBQ3BDLFFBQU1DLFdBQVcsR0FBR04sSUFBSSxDQUFDQyxXQUFMLENBQWlCRixNQUFqQixDQUF3QixVQUN4Q0UsV0FEd0MsRUFFMUM7QUFDRSxhQUFPQSxXQUFXLENBQUNFLFNBQVosSUFBeUJsQixLQUFLLENBQUNXLE1BQXRDO0FBQ0gsS0FKbUIsQ0FBcEI7QUFLQSxRQUFNVyxPQUFPLGlDQUNURCxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVILFNBQWYsR0FBMkJHLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUUsS0FEakMsQ0FBYjtBQUlBLFdBQ0k7QUFBSyxTQUFHLEVBQ0pGLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUgsU0FBZixHQUEyQixHQUEzQixHQUFpQ0UsS0FEckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdJLE1BQUMsa0VBQUQ7QUFDSSxTQUFHLEVBQ0NDLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUgsU0FBZixHQUEyQkcsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlRSxLQUZsRDtBQUlJLFVBQUksRUFBRUMsU0FKVjtBQUtJLFdBQUssTUFMVDtBQU1JLFlBQU0sTUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUUksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxvRUFBRDtBQUFZLFVBQUksRUFBQyxLQUFqQjtBQUF1QixvQkFBVyxVQUFsQztBQUE2QyxhQUFPLEVBQUVoQixvQkFBb0IsQ0FBQ08sSUFBSSxDQUFDVSxNQUFMLENBQVksT0FBWixDQUFELENBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHNFQUFEO0FBQWtCLFdBQUssRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQVJKLEVBYUksTUFBQyxzRUFBRDtBQUNJLFFBQUUsRUFBRUgsT0FEUjtBQUVJLGFBQU8sc0JBQ0hELFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUgsU0FBZixHQUNBLEdBREEsR0FFQUcsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlRSxLQUhaLGNBSUhSLElBQUksQ0FBQ1UsTUFBTCxDQUFZLGFBQVosQ0FKRyxjQUtIVixJQUFJLENBQUNVLE1BQUwsQ0FBWSxhQUFaLENBTEcsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYkosRUF1QkksTUFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxvRUFBRDtBQUFZLFVBQUksRUFBQyxLQUFqQjtBQUF1QixvQkFBVyxVQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FESixDQXZCSixDQUhKLEVBaUNJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWpDSixDQURKO0FBcUNILEdBL0NBLENBREwsQ0FESjtBQW9ESDs7R0FwRXVCMUIsVztVQUNKWixTLEVBQ0NnQix3RCxFQUNRQyx3RDs7O0tBSExMLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MuZDdkN2Q1NzdjNjFkNzRlYTgwYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIjtcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgQ29tbWVudEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Db21tZW50XCI7XHJcbmltcG9ydCBSZW1vdmVDaXJjbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlQ2lyY2xlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgeyB0YXNrUmVtb3ZlUGF0dGVybiB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHJvb3RzOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IDcyMCxcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF0dGVybkxpc3QocHJvcHM6IHsgY2hvaWNlOiBudW1iZXIgfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcblxyXG4gICAgLy8g44Oe44Kk44OK44K544Oc44K/44Oz44GM44Kv44Oq44OD44Kv44GV44KM44Gf44KJ44OR44K/44O844Oz44GL44KJ5a++6LGh44Gu44K/44K544Kv44KS6Zmk5aSW44GZ44KL44CCXHJcbiAgICBjb25zdCBwYXR0ZXJuUmVtb3ZlSGFuZGxlciA9IChkZXRhaWxUaXRsZTpzdHJpbmcpPT4oKT0+e1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm5JZCA9cHJvcHMuY2hvaWNlO1xyXG4gICAgICAgIGRpc3BhdGNoKHRhc2tSZW1vdmVQYXR0ZXJuKHtwYXR0ZXJuSWQsZGV0YWlsVGl0bGV9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6YG45oqe44GX44Gf44OR44K/44O844OzSUTjgYzoqK3lrprjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLmir3lh7rjgZnjgovjgIJcclxuICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKCh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSBwcm9wcy5jaG9pY2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdHN9PlxyXG4gICAgICAgICAgICB7Y2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzayxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1BhdHRlcm4gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybkluZm9cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuSW5mby5wYXR0ZXJuSUQgPT0gcHJvcHMuY2hvaWNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3QtbGFiZWwtJHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrUGF0dGVyblswXS5wYXR0ZXJuSUQgKyB0YXNrUGF0dGVyblswXS5vcmRlclxyXG4gICAgICAgICAgICAgICAgfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuWzBdLnBhdHRlcm5JRCArICdfJyArIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuWzBdLnBhdHRlcm5JRCArIHRhc2tQYXR0ZXJuWzBdLm9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiIG9uQ2xpY2s9e3BhdHRlcm5SZW1vdmVIYW5kbGVyKHRhc2suZGV0YWlsWyd0aXRsZSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bGFiZWxJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgTGluZSBpdGVtICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuWzBdLnBhdHRlcm5JRCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ub3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICR7dGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMVwiXX0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMlwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=