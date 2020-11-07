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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Comment */ "./node_modules/@material-ui/icons/Comment.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/RemoveCircle */ "./node_modules/@material-ui/icons/RemoveCircle.js");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");


var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\PatternList.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([0]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  var handleToggle = function handleToggle(value) {
    return function () {// const currentIndex = checked.indexOf(value);
      // const newChecked = [...checked];
      // console.log('check');
      // if (currentIndex === -1) {
      //     newChecked.push(value);
      // } else {
      //     newChecked.splice(currentIndex, 1);
      // }
      // setChecked(newChecked);
    };
  }; // 選択したパターンIDが設定されているタスクを抽出する。


  var choicePatternTasks = userTaskInfo.tasks.filter(function (task) {
    return task.patternInfo.some(function (task) {
      return task.patternID == props.choice;
    });
  });
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
        lineNumber: 63,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: taskPattern[0].patternID + taskPattern[0].order,
      role: undefined,
      dense: true,
      button: true,
      onClick: handleToggle(taskPattern[0].patternID + taskPattern[0].order),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_10___default.a, {
      color: "secondary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: labelId,
      primary: "Line item ".concat(taskPattern[0].patternID + "_" + taskPattern[0].order, " ").concat(task.detail["testDetail1"], " ").concat(task.detail["testDetail2"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 37
      }
    })))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 25
      }
    }));
  }));
}

_s(PatternList, "CfT5JeeJGcf5wuJxtigG2JcDEIY=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9QYXR0ZXJuTGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdHMiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIlBhdHRlcm5MaXN0IiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwiaGFuZGxlVG9nZ2xlIiwidmFsdWUiLCJjaG9pY2VQYXR0ZXJuVGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwicGF0dGVybkluZm8iLCJzb21lIiwicGF0dGVybklEIiwiY2hvaWNlIiwibWFwIiwiaW5kZXgiLCJ0YXNrUGF0dGVybiIsImxhYmVsSWQiLCJvcmRlciIsInVuZGVmaW5lZCIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDekJDLDZFQUFZLENBQUM7QUFDVEMsU0FBSyxFQUFFO0FBQ0hDLFdBQUssRUFBRSxNQURKO0FBRUhDLGNBQVEsRUFBRSxHQUZQO0FBSUhDLFlBQU0sRUFBRSxNQUpMO0FBS0hDLHFCQUFlLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjQyxVQUFkLENBQXlCQztBQUx2QztBQURFLEdBQUQsQ0FEYTtBQUFBLENBQUQsQ0FBNUI7QUFZZSxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUFnRDtBQUFBOztBQUFBOztBQUMzRCxNQUFNQyxPQUFPLEdBQUdkLFNBQVMsRUFBekI7O0FBRDJELHdCQUU3QmUsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQUMsQ0FBRCxDQUFmLENBRjZCO0FBQUE7QUFBQSxNQUVwREMsT0FGb0Q7QUFBQSxNQUUzQ0MsVUFGMkM7O0FBQUEscUJBR2xDQyxnRUFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFzQkEsS0FBSyxDQUFDQyxLQUE1QjtBQUFBLEdBQUQsQ0FIdUI7QUFBQSxNQUduREMsWUFIbUQsZ0JBR25EQSxZQUhtRDs7QUFLM0QsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRDtBQUFBLFdBQW1CLFlBQU0sQ0FDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsS0FWb0I7QUFBQSxHQUFyQixDQUwyRCxDQWlCM0Q7OztBQUNBLE1BQU1DLGtCQUFrQixHQUFHSCxZQUFZLENBQUNELEtBQWIsQ0FBbUJLLE1BQW5CLENBQTBCLFVBQVVDLElBQVYsRUFBZ0I7QUFDakUsV0FBT0EsSUFBSSxDQUFDQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixVQUFDRixJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDRyxTQUFMLElBQWtCakIsS0FBSyxDQUFDa0IsTUFBbEM7QUFBQSxLQUF0QixDQUFQO0FBQ0gsR0FGMEIsQ0FBM0I7QUFJQSxTQUNJLE1BQUMsOERBQUQ7QUFBTSxhQUFTLEVBQUVqQixPQUFPLENBQUNWLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS3FCLGtCQUFrQixDQUFDTyxHQUFuQixDQUF1QixVQUFDTCxJQUFELEVBQU1NLEtBQU4sRUFBZ0I7QUFDcEMsUUFBTUMsV0FBVyxHQUFHUCxJQUFJLENBQUNDLFdBQUwsQ0FBaUJGLE1BQWpCLENBQXdCLFVBQ3hDRSxXQUR3QyxFQUUxQztBQUNFLGFBQU9BLFdBQVcsQ0FBQ0UsU0FBWixJQUF5QmpCLEtBQUssQ0FBQ2tCLE1BQXRDO0FBQ0gsS0FKbUIsQ0FBcEI7QUFLQSxRQUFNSSxPQUFPLGlDQUNURCxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVKLFNBQWYsR0FBMkJJLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUUsS0FEakMsQ0FBYjtBQUlBLFdBQ0k7QUFBSyxTQUFHLEVBQ0pGLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUosU0FBZixHQUEyQixHQUEzQixHQUFpQ0csS0FEckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdJLE1BQUMsa0VBQUQ7QUFDSSxTQUFHLEVBQ0NDLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUosU0FBZixHQUEyQkksV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlRSxLQUZsRDtBQUlJLFVBQUksRUFBRUMsU0FKVjtBQUtJLFdBQUssTUFMVDtBQU1JLFlBQU0sTUFOVjtBQU9JLGFBQU8sRUFBRWQsWUFBWSxDQUNqQlcsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlSixTQUFmLEdBQTJCSSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVFLEtBRHpCLENBUHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FXSSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG9FQUFEO0FBQVksVUFBSSxFQUFDLEtBQWpCO0FBQXVCLG9CQUFXLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQWtCLFdBQUssRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQVhKLEVBZ0JJLE1BQUMsc0VBQUQ7QUFDSSxRQUFFLEVBQUVELE9BRFI7QUFFSSxhQUFPLHNCQUNIRCxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVKLFNBQWYsR0FDQSxHQURBLEdBRUFJLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUUsS0FIWixjQUlIVCxJQUFJLENBQUNXLE1BQUwsQ0FBWSxhQUFaLENBSkcsY0FLSFgsSUFBSSxDQUFDVyxNQUFMLENBQVksYUFBWixDQUxHLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWhCSixFQTBCSSxNQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG9FQUFEO0FBQVksVUFBSSxFQUFDLEtBQWpCO0FBQXVCLG9CQUFXLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixDQURKLENBMUJKLENBSEosRUFvQ0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BcENKLENBREo7QUF3Q0gsR0FsREEsQ0FETCxDQURKO0FBdURIOztHQTdFdUIxQixXO1VBQ0paLFMsRUFFU21CLHdEOzs7S0FITFAsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy5lMWJhMjEzMjFmMThjNmViY2JlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NvbW1lbnRcIjtcclxuaW1wb3J0IFJlbW92ZUNpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9SZW1vdmVDaXJjbGVcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgcm9vdHM6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogNzIwLFxyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXR0ZXJuTGlzdChwcm9wczogeyBjaG9pY2U6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZShbMF0pO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKHZhbHVlOiBudW1iZXIpID0+ICgpID0+IHtcclxuICAgICAgICAvLyBjb25zdCBjdXJyZW50SW5kZXggPSBjaGVja2VkLmluZGV4T2YodmFsdWUpO1xyXG4gICAgICAgIC8vIGNvbnN0IG5ld0NoZWNrZWQgPSBbLi4uY2hlY2tlZF07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoZWNrJyk7XHJcbiAgICAgICAgLy8gaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAvLyAgICAgbmV3Q2hlY2tlZC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBuZXdDaGVja2VkLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBzZXRDaGVja2VkKG5ld0NoZWNrZWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDpgbjmip7jgZfjgZ/jg5Hjgr/jg7zjg7NJROOBjOioreWumuOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gdXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IHByb3BzLmNob2ljZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290c30+XHJcbiAgICAgICAgICAgIHtjaG9pY2VQYXR0ZXJuVGFza3MubWFwKCh0YXNrLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrUGF0dGVybiA9IHRhc2sucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mb1xyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5JbmZvLnBhdHRlcm5JRCA9PSBwcm9wcy5jaG9pY2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsSWQgPSBgY2hlY2tib3gtbGlzdC1sYWJlbC0ke1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuWzBdLnBhdHRlcm5JRCArIHRhc2tQYXR0ZXJuWzBdLm9yZGVyXHJcbiAgICAgICAgICAgICAgICB9YDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ucGF0dGVybklEICsgJ18nICsgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ucGF0dGVybklEICsgdGFza1BhdHRlcm5bMF0ub3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrUGF0dGVyblswXS5wYXR0ZXJuSUQgKyB0YXNrUGF0dGVyblswXS5vcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bGFiZWxJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgTGluZSBpdGVtICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuWzBdLnBhdHRlcm5JRCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ub3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICR7dGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMVwiXX0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMlwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=