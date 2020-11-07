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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Comment */ "./node_modules/@material-ui/icons/Comment.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/RemoveCircle */ "./node_modules/@material-ui/icons/RemoveCircle.js");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\PatternList.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([0]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  var handleToggle = function handleToggle(value) {
    return function () {
      var currentIndex = checked.indexOf(value);

      var newChecked = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(checked);

      console.log('check');

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };
  };

  var choicePatternTasks = userTaskInfo.tasks.filter(function (task) {
    return task.patternInfo.some(function (task) {
      return task.patternID == props.choice;
    });
  });
  console.log("choicePatternTasks:" + choicePatternTasks);
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_11___default.a, {
      color: "secondary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 33
      }
    }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: labelId,
      primary: "Line item ".concat(taskPattern[0].patternID + '_' + taskPattern[0].order, " ").concat(task.detail["testDetail1"], " ").concat(task.detail["testDetail2"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default.a, {
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
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9QYXR0ZXJuTGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdHMiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIlBhdHRlcm5MaXN0IiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwiaGFuZGxlVG9nZ2xlIiwidmFsdWUiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwibmV3Q2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwic3BsaWNlIiwiY2hvaWNlUGF0dGVyblRhc2tzIiwiZmlsdGVyIiwidGFzayIsInBhdHRlcm5JbmZvIiwic29tZSIsInBhdHRlcm5JRCIsImNob2ljZSIsIm1hcCIsInRhc2tQYXR0ZXJuIiwibGFiZWxJZCIsIm9yZGVyIiwidW5kZWZpbmVkIiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQ3pCQyw2RUFBWSxDQUFDO0FBQ1RDLFNBQUssRUFBRTtBQUNIQyxXQUFLLEVBQUUsTUFESjtBQUVIQyxjQUFRLEVBQUUsR0FGUDtBQUlIQyxZQUFNLEVBQUUsTUFKTDtBQUtIQyxxQkFBZSxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkM7QUFMdkM7QUFERSxHQUFELENBRGE7QUFBQSxD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QUssRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQVRKLEVBY0ksTUFBQyxzRUFBRDtBQUNJLFFBQUUsRUFBRUQsT0FEUjtBQUVJLGFBQU8sc0JBQ0hELFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUgsU0FBZixHQUEyQixHQUEzQixHQUFpQ0csV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlRSxLQUQ3QyxjQUVIUixJQUFJLENBQUNVLE1BQUwsQ0FBWSxhQUFaLENBRkcsY0FHSFYsSUFBSSxDQUFDVSxNQUFMLENBQVksYUFBWixDQUhHLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWRKLEVBc0JJLE1BQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsb0VBQUQ7QUFBWSxVQUFJLEVBQUMsS0FBakI7QUFBdUIsb0JBQVcsVUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBREosQ0F0QkosQ0FESjtBQStCSCxHQXpDQSxDQURMLENBREo7QUE4Q0g7O0dBdkV1QmhDLFc7VUFDSlosUyxFQUVTbUIsd0Q7OztLQUhMUCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLjg5YjVkYWE0ZGU1YjQyMTRhZTMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ29tbWVudFwiO1xyXG5pbXBvcnQgUmVtb3ZlQ2lyY2xlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZUNpcmNsZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290czoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA3MjAsXHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdHRlcm5MaXN0KHByb3BzOiB7IGNob2ljZTogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKFswXSk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAodmFsdWU6IG51bWJlcikgPT4gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNoZWNrZWQuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgbmV3Q2hlY2tlZCA9IFsuLi5jaGVja2VkXTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2snKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgbmV3Q2hlY2tlZC5wdXNoKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdDaGVja2VkLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gdXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IHByb3BzLmNob2ljZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImNob2ljZVBhdHRlcm5UYXNrczpcIiArIGNob2ljZVBhdHRlcm5UYXNrcyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdHN9PlxyXG4gICAgICAgICAgICB7Y2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1BhdHRlcm4gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybkluZm9cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuSW5mby5wYXR0ZXJuSUQgPT0gcHJvcHMuY2hvaWNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3QtbGFiZWwtJHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrUGF0dGVyblswXS5wYXR0ZXJuSUQgKyB0YXNrUGF0dGVyblswXS5vcmRlclxyXG4gICAgICAgICAgICAgICAgfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0YXNrUGF0dGVyblswXS5wYXR0ZXJuSUQgKyB0YXNrUGF0dGVyblswXS5vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ucGF0dGVybklEICsgdGFza1BhdHRlcm5bMF0ub3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZUljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2xhYmVsSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgTGluZSBpdGVtICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ucGF0dGVybklEICsgJ18nICsgdGFza1BhdHRlcm5bMF0ub3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gJHt0YXNrLmRldGFpbFtcInRlc3REZXRhaWwxXCJdfSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGV0YWlsW1widGVzdERldGFpbDJcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9