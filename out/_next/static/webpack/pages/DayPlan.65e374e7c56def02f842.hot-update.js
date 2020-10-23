webpackHotUpdate_N_E("pages/DayPlan",{

/***/ "./src/components/view/CheckBoxList.tsx":
/*!**********************************************!*\
  !*** ./src/components/view/CheckBoxList.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxList; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Comment */ "./node_modules/@material-ui/icons/Comment.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");


var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\CheckBoxList.tsx",
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
function CheckboxList() {
  _s();

  var _this = this;

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      checked = _useState[0],
      setChecked = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();
  var year = new Date("Thu, 22 May 2020 02:00:00").getFullYear();
  var month = new Date("Thu, 22 May 2020 02:00:00").getMonth() + 1;
  var date = new Date("Thu, 22 May 2020 02:00:00").getDate();

  var handleToggle = function handleToggle(value) {
    return function () {
      var currentIndex = checked.indexOf(value);

      var newChecked = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(checked);

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
      dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_12__["taskCheckComplete"])([year, month, date, value]));
    };
  }; // ここで作成する機能はたくさんある。
  // 日付とパターンIDを読み取ること
  // いや、ここじゃないか？ここではカレンダーに格納されたタスクを読み取るだけで良いのでは？
  // カレンダー画面でパターンを登録し、その時にタスクリストからパターンIDが合致するものだけ抽出して、該当する日付のカレンダー配列に格納する
  // 一度シンプルに、カレンダー配列に格納されているタスクを読み取る機能を実装しよう
  // const test = userTaskInfo.calendar.filter(function(value){
  //   return value.year == year && value.month == month && value.date == date
  // });
  // const test = userTaskInfo.calendar[year][month][date]


  var test = userTaskInfo.calendar;
  console.log(test[year][month][22]);
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, test[year][month][22].tasks.map(function (value, index) {
    var labelId = "checkbox-list-label-".concat(value);
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: year & month & date & index,
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
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      edge: "start",
      checked: value.flug // checked={checked.indexOf(index) !== -1}
      ,
      tabIndex: -1,
      disableRipple: true,
      inputProps: {
        "aria-labelledby": labelId
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 33
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(value.detail1, " & ").concat(value.detail2, " & ").concat(value.flug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 37
      }
    })))), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 25
      }
    }, "\u9054\u6210\u6E08\u307F"), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: year & month & date & index,
      role: undefined,
      dense: true,
      button: true,
      onClick: handleToggle(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      edge: "start",
      checked: value.flug // checked={checked.indexOf(index) !== -1}
      ,
      tabIndex: -1,
      disableRipple: true,
      inputProps: {
        "aria-labelledby": labelId
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 33
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(value.detail1, " & ").concat(value.detail2, " & ").concat(value.flug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 37
      }
    })))));
  })) // <List className={classes.roots}>
  //   {[0, 1, 2, 3].map((value) => {
  //     const labelId = `checkbox-list-label-${value}`;
  //     return (
  //       <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
  //         <ListItemIcon>
  //           <Checkbox
  //             edge="start"
  //             checked={checked.indexOf(value) !== -1}
  //             tabIndex={-1}
  //             disableRipple
  //             inputProps={{ 'aria-labelledby': labelId }}
  //           />
  //         </ListItemIcon>
  //         <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
  //         <ListItemSecondaryAction>
  //           <IconButton edge="end" aria-label="comments">
  //           {/* <IconButton aria-label="comments"> */}
  //             <CommentIcon />
  //           </IconButton>
  //         </ListItemSecondaryAction>
  //       </ListItem>
  //     );
  //   })}
  // </List>
  ;
}

_s(CheckboxList, "jGxcTRXNqEfFn+uczUfALSv1UEg=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9DaGVja0JveExpc3QudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3RzIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJDaGVja2JveExpc3QiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRhdGUiLCJnZXREYXRlIiwiaGFuZGxlVG9nZ2xlIiwidmFsdWUiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwibmV3Q2hlY2tlZCIsInB1c2giLCJzcGxpY2UiLCJ0YXNrQ2hlY2tDb21wbGV0ZSIsInRlc3QiLCJjYWxlbmRhciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpbmRleCIsImxhYmVsSWQiLCJ1bmRlZmluZWQiLCJmbHVnIiwiZGV0YWlsMSIsImRldGFpbDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDekJDLDZFQUFZLENBQUM7QUFDVEMsU0FBSyxFQUFFO0FBQ0hDLFdBQUssRUFBRSxNQURKO0FBRUhDLGNBQVEsRUFBRSxHQUZQO0FBR0hDLFlBQU0sRUFBRSxNQUhMO0FBSUhDLHFCQUFlLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFj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QUFhLE1BTGpCO0FBTUksZ0JBQVUsRUFBRTtBQUFFLDJCQUFtQkY7QUFBckIsT0FOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBUEosRUFpQkksTUFBQyxzRUFBRDtBQUNJLFFBQUUsRUFBRUEsT0FEUjtBQUVJLGFBQU8sc0JBQWVELEtBQUssR0FBRyxDQUF2QixjQUNIWixLQUFLLENBQUNnQixPQURILGdCQUVEaEIsS0FBSyxDQUFDaUIsT0FGTCxnQkFFa0JqQixLQUFLLENBQUNlLElBRnhCLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWpCSixFQXVCSSxNQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG9FQUFEO0FBQVksVUFBSSxFQUFDLEtBQWpCO0FBQXVCLG9CQUFXLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixDQURKLENBdkJKLENBaENKLENBREo7QUFpRUgsR0FwRUEsQ0FETCxDQURKLENBd0VJO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakdKO0FBbUdIOztHQTFJdUJsQyxZO1VBQ0paLFMsRUFFU2lCLHdELEVBQ1JLLHdEOzs7S0FKR1YsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9EYXlQbGFuLjY1ZTM3NGU3YzU2ZGVmMDJmODQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIjtcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgQ29tbWVudEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Db21tZW50XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgeyB0YXNrQ2hlY2tDb21wbGV0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IGNhbGVuZGFyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdXNlclRhc2tzVHlwZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290czoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA3MjAsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hMaXN0KCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXRNb250aCgpICsgMTtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gY2hlY2tlZC5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICBjb25zdCBuZXdDaGVja2VkID0gWy4uLmNoZWNrZWRdO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICBuZXdDaGVja2VkLnB1c2godmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0NoZWNrZWQuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDaGVja2VkKG5ld0NoZWNrZWQpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh0YXNrQ2hlY2tDb21wbGV0ZShbeWVhciwgbW9udGgsIGRhdGUsIHZhbHVlXSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDjgZPjgZPjgafkvZzmiJDjgZnjgovmqZ/og73jga/jgZ/jgY/jgZXjgpPjgYLjgovjgIJcclxuICAgIC8vIOaXpeS7mOOBqOODkeOCv+ODvOODs0lE44KS6Kqt44G/5Y+W44KL44GT44GoXHJcbiAgICAvLyDjgYTjgoTjgIHjgZPjgZPjgZjjgoPjgarjgYTjgYvvvJ/jgZPjgZPjgafjga/jgqvjg6zjg7Pjg4Djg7zjgavmoLzntI3jgZXjgozjgZ/jgr/jgrnjgq/jgpLoqq3jgb/lj5bjgovjgaDjgZHjgafoia/jgYTjga7jgafjga/vvJ9cclxuICAgIC8vIOOCq+ODrOODs+ODgOODvOeUu+mdouOBp+ODkeOCv+ODvOODs+OCkueZu+mMsuOBl+OAgeOBneOBruaZguOBq+OCv+OCueOCr+ODquOCueODiOOBi+OCieODkeOCv+ODvOODs0lE44GM5ZCI6Ie044GZ44KL44KC44Gu44Gg44GR5oq95Ye644GX44Gm44CB6Kmy5b2T44GZ44KL5pel5LuY44Gu44Kr44Os44Oz44OA44O86YWN5YiX44Gr5qC857SN44GZ44KLXHJcbiAgICAvLyDkuIDluqbjgrfjg7Pjg5fjg6vjgavjgIHjgqvjg6zjg7Pjg4Djg7zphY3liJfjgavmoLzntI3jgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLoqq3jgb/lj5bjgovmqZ/og73jgpLlrp/oo4XjgZfjgojjgYZcclxuXHJcbiAgICAvLyBjb25zdCB0ZXN0ID0gdXNlclRhc2tJbmZvLmNhbGVuZGFyLmZpbHRlcihmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAvLyAgIHJldHVybiB2YWx1ZS55ZWFyID09IHllYXIgJiYgdmFsdWUubW9udGggPT0gbW9udGggJiYgdmFsdWUuZGF0ZSA9PSBkYXRlXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBjb25zdCB0ZXN0ID0gdXNlclRhc2tJbmZvLmNhbGVuZGFyW3llYXJdW21vbnRoXVtkYXRlXVxyXG4gICAgY29uc3QgdGVzdCA9IHVzZXJUYXNrSW5mby5jYWxlbmRhcjtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0ZXN0W3llYXJdW21vbnRoXVsyMl0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3RzfT5cclxuICAgICAgICAgICAge3Rlc3RbeWVhcl1bbW9udGhdWzIyXS50YXNrcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LWxhYmVsLSR7dmFsdWV9YDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt5ZWFyICYgbW9udGggJiBkYXRlICYgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGUoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZS5mbHVnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2VkPXtjaGVja2VkLmluZGV4T2YoaW5kZXgpICE9PSAtMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxJZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bGFiZWxJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgTGluZSBpdGVtICR7aW5kZXggKyAxfSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kZXRhaWwxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAmICR7dmFsdWUuZGV0YWlsMn0gJiAke3ZhbHVlLmZsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7pgZTmiJDmuIjjgb88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt5ZWFyICYgbW9udGggJiBkYXRlICYgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGUoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZS5mbHVnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2VkPXtjaGVja2VkLmluZGV4T2YoaW5kZXgpICE9PSAtMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxJZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bGFiZWxJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgTGluZSBpdGVtICR7aW5kZXggKyAxfSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kZXRhaWwxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAmICR7dmFsdWUuZGV0YWlsMn0gJiAke3ZhbHVlLmZsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIC8vIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290c30+XHJcbiAgICAgICAgLy8gICB7WzAsIDEsIDIsIDNdLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LWxhYmVsLSR7dmFsdWV9YDtcclxuXHJcbiAgICAgICAgLy8gICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgICAgPExpc3RJdGVtIGtleT17dmFsdWV9IHJvbGU9e3VuZGVmaW5lZH0gZGVuc2UgYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZSh2YWx1ZSl9PlxyXG4gICAgICAgIC8vICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAvLyAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAvLyAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkLmluZGV4T2YodmFsdWUpICE9PSAtMX1cclxuICAgICAgICAvLyAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsSWQgfX1cclxuICAgICAgICAvLyAgICAgICAgICAgLz5cclxuICAgICAgICAvLyAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIC8vICAgICAgICAgPExpc3RJdGVtVGV4dCBpZD17bGFiZWxJZH0gcHJpbWFyeT17YExpbmUgaXRlbSAke3ZhbHVlICsgMX1gfSAvPlxyXG4gICAgICAgIC8vICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgIC8vICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj4gKi99XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAvLyAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgLy8gICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAvLyAgICAgKTtcclxuICAgICAgICAvLyAgIH0pfVxyXG4gICAgICAgIC8vIDwvTGlzdD5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==