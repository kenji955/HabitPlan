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
      lineNumber: 53,
      columnNumber: 9
    }
  }, choicePatternTasks.map(function (task) {
    var taskPattern = task.patternInfo.filter(function (patternInfo) {
      return patternInfo.patternID == props.choice;
    });
    var labelId = "checkbox-list-label-".concat(taskPattern[0].patternID + taskPattern[0].order);
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: taskPattern[0].patternID + taskPattern[0].order,
      role: undefined,
      dense: true,
      button: true,
      onClick: handleToggle(taskPattern[0].patternID + taskPattern[0].order),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_10___default.a, {
      color: "secondary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 33
      }
    }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: labelId,
      primary: "Line item ".concat(taskPattern[0].patternID + '_' + taskPattern[0].order, " ").concat(task.detail["testDetail1"], " ").concat(task.detail["testDetail2"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 33
      }
    }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9QYXR0ZXJuTGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdHMiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIlBhdHRlcm5MaXN0IiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwiaGFuZGxlVG9nZ2xlIiwidmFsdWUiLCJjaG9pY2VQYXR0ZXJuVGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwicGF0dGVybkluZm8iLCJzb21lIiwicGF0dGVybklEIiwiY2hvaWNlIiwibWFwIiwidGFza1BhdHRlcm4iLCJsYWJlbElkIiwib3JkZXIiLCJ1bmRlZmluZWQiLCJkZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQ3pCQyw2RUFBWSxDQUFDO0FBQ1RDLFNBQUssRUFBRTtBQUNIQyxXQUFLLEVBQUUsTUFESjtBQUVIQyxjQUFRLEVBQUUsR0FGUDtBQUlIQyxZQUFNLEVBQUUsTUFKTDtBQUtIQyxxQkFBZSxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkM7QUFMdkM7QUFERSxHQUFELENBRGE7QUFBQSxDQUFELENBQTVCO0FBWWUsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBZ0Q7QUFBQTs7QUFBQTs7QUFDM0QsTUFBTUMsT0FBTyxHQUFHZCxTQUFTLEVBQXpCOztBQUQyRCx3QkFFN0JlLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFDLENBQUQsQ0FBZixDQUY2QjtBQUFBO0FBQUEsTUFFcERDLE9BRm9EO0FBQUEsTUFFM0NDLFVBRjJDOztBQUFBLHFCQUdsQ0MsZ0VBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBc0JBLEtBQUssQ0FBQ0MsS0FBNUI7QUFBQSxHQUFELENBSHVCO0FBQUEsTUFHbkRDLFlBSG1ELGdCQUduREEsWUFIbUQ7O0FBSzNELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxXQUFtQixZQUFNLENBQzFDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNILEtBWm9CO0FBQUEsR0FBckIsQ0FMMkQsQ0FtQjNEOzs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0gsWUFBWSxDQUFDRCxLQUFiLENBQW1CSyxNQUFuQixDQUEwQixVQUFVQyxJQUFWLEVBQWdCO0FBQ2pFLFdBQU9BLElBQUksQ0FBQ0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsVUFBQ0YsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ0csU0FBTCxJQUFrQmpCLEtBQUssQ0FBQ2tCLE1BQWxDO0FBQUEsS0FBdEIsQ0FBUDtBQUNILEdBRjBCLENBQTNCO0FBS0EsU0FDSSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxFQUFFakIsT0FBTyxDQUFDVixLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0txQixrQkFBa0IsQ0FBQ08sR0FBbkIsQ0FBdUIsVUFBQ0wsSUFBRCxFQUFVO0FBQzlCLFFBQU1NLFdBQVcsR0FBR04sSUFBSSxDQUFDQyxXQUFMLENBQWlCRixNQUFqQixDQUF3QixVQUN4Q0UsV0FEd0MsRUFFMUM7QUFDRSxhQUFPQSxXQUFXLENBQUNFLFNBQVosSUFBeUJqQixLQUFLLENBQUNrQixNQUF0QztBQUNILEtBSm1CLENBQXBCO0FBS0EsUUFBTUcsT0FBTyxpQ0FDVEQsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlSCxTQUFmLEdBQTJCRyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVFLEtBRGpDLENBQWI7QUFJQSxXQUNJLE1BQUMsa0VBQUQ7QUFDSSxTQUFHLEVBQUVGLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUgsU0FBZixHQUEyQkcsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlRSxLQURuRDtBQUVJLFVBQUksRUFBRUMsU0FGVjtBQUdJLFdBQUssTUFIVDtBQUlJLFlBQU0sTUFKVjtBQUtJLGFBQU8sRUFBRWIsWUFBWSxDQUNqQlUsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlSCxTQUFmLEdBQTJCRyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVFLEtBRHpCLENBTHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTSSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG9FQUFEO0FBQVksVUFBSSxFQUFDLEtBQWpCO0FBQXVCLG9CQUFXLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVFQUFEO0FBQWtCLFdBQUssRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQVRKLEVBY0ksTUFBQyxzRUFBRDtBQUNJLFFBQUUsRUFBRUQsT0FEUjtBQUVJLGFBQU8sc0JBQ0hELFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUgsU0FBZixHQUEyQixHQUEzQixHQUFpQ0csV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlRSxLQUQ3QyxjQUVIUixJQUFJLENBQUNVLE1BQUwsQ0FBWSxhQUFaLENBRkcsY0FHSFYsSUFBSSxDQUFDVSxNQUFMLENBQVksYUFBWixDQUhHLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWRKLEVBc0JJLE1BQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsb0VBQUQ7QUFBWSxVQUFJLEVBQUMsS0FBakI7QUFBdUIsb0JBQVcsVUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBREosQ0F0QkosQ0FESjtBQStCSCxHQXpDQSxDQURMLENBREo7QUE4Q0g7O0dBdkV1QnpCLFc7VUFDSlosUyxFQUVTbUIsd0Q7OztLQUhMUCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLmEyN2M3MGM1MmIxMzg2YjEwYjFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ29tbWVudFwiO1xyXG5pbXBvcnQgUmVtb3ZlQ2lyY2xlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZUNpcmNsZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290czoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA3MjAsXHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdHRlcm5MaXN0KHByb3BzOiB7IGNob2ljZTogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKFswXSk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAodmFsdWU6IG51bWJlcikgPT4gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNoZWNrZWQuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgLy8gY29uc3QgbmV3Q2hlY2tlZCA9IFsuLi5jaGVja2VkXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hlY2snKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAvLyAgICAgbmV3Q2hlY2tlZC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBuZXdDaGVja2VkLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g6YG45oqe44GX44Gf44OR44K/44O844OzSUTjgYzoqK3lrprjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLmir3lh7rjgZnjgovjgIJcclxuICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKCh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSBwcm9wcy5jaG9pY2UpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3RzfT5cclxuICAgICAgICAgICAge2Nob2ljZVBhdHRlcm5UYXNrcy5tYXAoKHRhc2spID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQYXR0ZXJuID0gdGFzay5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybkluZm8ucGF0dGVybklEID09IHByb3BzLmNob2ljZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LWxhYmVsLSR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ucGF0dGVybklEICsgdGFza1BhdHRlcm5bMF0ub3JkZXJcclxuICAgICAgICAgICAgICAgIH1gO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFza1BhdHRlcm5bMF0ucGF0dGVybklEICsgdGFza1BhdHRlcm5bMF0ub3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuWzBdLnBhdHRlcm5JRCArIHRhc2tQYXR0ZXJuWzBdLm9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtsYWJlbElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17YExpbmUgaXRlbSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuWzBdLnBhdHRlcm5JRCArICdfJyArIHRhc2tQYXR0ZXJuWzBdLm9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICR7dGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMVwiXX0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRldGFpbFtcInRlc3REZXRhaWwyXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==