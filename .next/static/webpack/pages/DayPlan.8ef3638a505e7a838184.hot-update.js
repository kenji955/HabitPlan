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
      width: '100%',
      maxWidth: 720,
      margin: 'auto',
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
  console.log(test[year][month][22]); // let Achievement:[JSX.Element],NotAchieved:[JSX.Element];

  var Achievement = test[year][month][22].tasks.filter(function (value) {
    return value.flug == true;
  });
  console.log('Achievement');
  console.log(Achievement);
  var NotAchieved = test[year][month][22].tasks.filter(function (value) {
    return value.flug == false;
  });
  console.log('NotAchieved');
  console.log(NotAchieved);
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, NotAchieved.map(function (value, index) {
    var labelId = "checkbox-list-label-".concat(value);
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: year & month & date & index,
      role: undefined,
      dense: true,
      button: true,
      onClick: handleToggle(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      edge: "start",
      checked: value.flug // checked={checked.indexOf(index) !== -1}
      ,
      tabIndex: -1,
      disableRipple: true,
      inputProps: {
        'aria-labelledby': labelId
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(value.detail1, " & ").concat(value.detail2, " & ").concat(value.flug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }))));
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, "\u9054\u6210\u6E08\u307F"), Achievement.map(function (value, index) {
    var labelId = "checkbox-list-label-".concat(value);
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: year & month & date & index,
      role: undefined,
      dense: true,
      button: true,
      onClick: handleToggle(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      edge: "start",
      checked: value.flug // checked={checked.indexOf(index) !== -1}
      ,
      tabIndex: -1,
      disableRipple: true,
      inputProps: {
        'aria-labelledby': labelId
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(value.detail1, " & ").concat(value.detail2, " & ").concat(value.flug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9DaGVja0JveExpc3QudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3RzIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJDaGVja2JveExpc3QiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRhdGUiLCJnZXREYXRlIiwiaGFuZGxlVG9nZ2xlIiwidmFsdWUiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwibmV3Q2hlY2tlZCIsInB1c2giLCJzcGxpY2UiLCJ0YXNrQ2hlY2tDb21wbGV0ZSIsInRlc3QiLCJjYWxlbmRhciIsImNvbnNvbGUiLCJsb2ciLCJBY2hpZXZlbWVudCIsImZpbHRlciIsImZsdWciLCJOb3RBY2hpZXZlZCIsIm1hcCIsImluZGV4IiwibGFiZWxJZCIsInVuZGVmaW5lZCIsImRldGFpbDEiLCJkZXRhaWwyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsTUFERjtBQUVMQyxjQUFRLEVBQUUsR0FGTDtBQUdMQyxZQUFNLEVBQUMsTUFIRjtB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QUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0VBQUQ7QUFBWSxVQUFJLEVBQUMsS0FBakI7QUFBdUIsb0JBQVcsVUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsQ0FaRixDQURGO0FBb0JELEdBdkJBLENBMUJILENBREYsQ0E0RUU7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyR0Y7QUF1R0Q7O0dBNUp1QmhDLFk7VUFDTlosUyxFQUVTaUIsd0QsRUFDUkssd0Q7OztLQUpLVixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0RheVBsYW4uOGVmMzYzOGE1MDVlN2E4MzgxODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ29tbWVudCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdGFza0NoZWNrQ29tcGxldGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5pbXBvcnQgeyBjYWxlbmRhciB9IGZyb20gJy4uLy4uL21vZHVsZXMvdXNlclRhc2tzVHlwZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3RzOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiA3MjAsXHJcbiAgICAgIG1hcmdpbjonYXV0bycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrYm94TGlzdCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB5ZWFyPSBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBtb250aD0gbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldE1vbnRoKCkgKyAxO1xyXG4gIGNvbnN0IGRhdGU9IG5ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjaGVja2VkLmluZGV4T2YodmFsdWUpO1xyXG4gICAgY29uc3QgbmV3Q2hlY2tlZCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xyXG4gICAgICBuZXdDaGVja2VkLnB1c2godmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3Q2hlY2tlZC5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaGVja2VkKG5ld0NoZWNrZWQpO1xyXG5cclxuICAgIGRpc3BhdGNoKHRhc2tDaGVja0NvbXBsZXRlKFt5ZWFyLG1vbnRoLGRhdGUsdmFsdWVdKSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g44GT44GT44Gn5L2c5oiQ44GZ44KL5qmf6IO944Gv44Gf44GP44GV44KT44GC44KL44CCXHJcbiAgLy8g5pel5LuY44Go44OR44K/44O844OzSUTjgpLoqq3jgb/lj5bjgovjgZPjgahcclxuICAvLyDjgYTjgoTjgIHjgZPjgZPjgZjjgoPjgarjgYTjgYvvvJ/jgZPjgZPjgafjga/jgqvjg6zjg7Pjg4Djg7zjgavmoLzntI3jgZXjgozjgZ/jgr/jgrnjgq/jgpLoqq3jgb/lj5bjgovjgaDjgZHjgafoia/jgYTjga7jgafjga/vvJ9cclxuICAvLyDjgqvjg6zjg7Pjg4Djg7znlLvpnaLjgafjg5Hjgr/jg7zjg7PjgpLnmbvpjLLjgZfjgIHjgZ3jga7mmYLjgavjgr/jgrnjgq/jg6rjgrnjg4jjgYvjgonjg5Hjgr/jg7zjg7NJROOBjOWQiOiHtOOBmeOCi+OCguOBruOBoOOBkeaKveWHuuOBl+OBpuOAgeipsuW9k+OBmeOCi+aXpeS7mOOBruOCq+ODrOODs+ODgOODvOmFjeWIl+OBq+agvOe0jeOBmeOCi1xyXG4gIC8vIOS4gOW6puOCt+ODs+ODl+ODq+OBq+OAgeOCq+ODrOODs+ODgOODvOmFjeWIl+OBq+agvOe0jeOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OCkuiqreOBv+WPluOCi+apn+iDveOCkuWun+ijheOBl+OCiOOBhlxyXG4gIFxyXG5cclxuICAvLyBjb25zdCB0ZXN0ID0gdXNlclRhc2tJbmZvLmNhbGVuZGFyLmZpbHRlcihmdW5jdGlvbih2YWx1ZSl7XHJcbiAgLy8gICByZXR1cm4gdmFsdWUueWVhciA9PSB5ZWFyICYmIHZhbHVlLm1vbnRoID09IG1vbnRoICYmIHZhbHVlLmRhdGUgPT0gZGF0ZVxyXG4gIC8vIH0pO1xyXG4gIFxyXG4gIC8vIGNvbnN0IHRlc3QgPSB1c2VyVGFza0luZm8uY2FsZW5kYXJbeWVhcl1bbW9udGhdW2RhdGVdXHJcbiAgY29uc3QgdGVzdCA9IHVzZXJUYXNrSW5mby5jYWxlbmRhcjtcclxuICBcclxuICBjb25zb2xlLmxvZyh0ZXN0W3llYXJdW21vbnRoXVsyMl0pO1xyXG4gIFxyXG4gIC8vIGxldCBBY2hpZXZlbWVudDpbSlNYLkVsZW1lbnRdLE5vdEFjaGlldmVkOltKU1guRWxlbWVudF07XHJcbiAgICBjb25zdCBBY2hpZXZlbWVudCA9IHRlc3RbeWVhcl1bbW9udGhdWzIyXS50YXNrcy5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICByZXR1cm4gdmFsdWUuZmx1ZyA9PSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnQWNoaWV2ZW1lbnQnKTtcclxuICAgIGNvbnNvbGUubG9nKEFjaGlldmVtZW50KTtcclxuXHJcbiAgICBjb25zdCBOb3RBY2hpZXZlZCA9IHRlc3RbeWVhcl1bbW9udGhdWzIyXS50YXNrcy5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICByZXR1cm4gdmFsdWUuZmx1ZyA9PSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ05vdEFjaGlldmVkJyk7XHJcbiAgICBjb25zb2xlLmxvZyhOb3RBY2hpZXZlZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdHN9PlxyXG4gICAgICB7Tm90QWNoaWV2ZWQubWFwKCh2YWx1ZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsSWQgPSBgY2hlY2tib3gtbGlzdC1sYWJlbC0ke3ZhbHVlfWA7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXt5ZWFyJm1vbnRoJmRhdGUmaW5kZXh9IHJvbGU9e3VuZGVmaW5lZH0gZGVuc2UgYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZShpbmRleCl9PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlLmZsdWd9XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVja2VkPXtjaGVja2VkLmluZGV4T2YoaW5kZXgpICE9PSAtMX1cclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsSWQgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpZD17bGFiZWxJZH0gcHJpbWFyeT17YExpbmUgaXRlbSAke2luZGV4ICsgMX0gJHt2YWx1ZS5kZXRhaWwxfSAmICR7dmFsdWUuZGV0YWlsMn0gJiAke3ZhbHVlLmZsdWd9YH0gLz5cclxuICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJlbmRcIiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIDxwPumBlOaIkOa4iOOBvzwvcD5cclxuICAgICAge0FjaGlldmVtZW50Lm1hcCgodmFsdWUsaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3QtbGFiZWwtJHt2YWx1ZX1gO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGtleT17eWVhciZtb250aCZkYXRlJmluZGV4fSByb2xlPXt1bmRlZmluZWR9IGRlbnNlIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVUb2dnbGUoaW5kZXgpfT5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZS5mbHVnfVxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2tlZD17Y2hlY2tlZC5pbmRleE9mKGluZGV4KSAhPT0gLTF9XHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbElkIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaWQ9e2xhYmVsSWR9IHByaW1hcnk9e2BMaW5lIGl0ZW0gJHtpbmRleCArIDF9ICR7dmFsdWUuZGV0YWlsMX0gJiAke3ZhbHVlLmRldGFpbDJ9ICYgJHt2YWx1ZS5mbHVnfWB9IC8+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgICB7Lyoge3Rlc3RbeWVhcl1bbW9udGhdWzIyXS50YXNrcy5tYXAoKHZhbHVlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LWxhYmVsLSR7dmFsdWV9YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e3llYXImbW9udGgmZGF0ZSZpbmRleH0gcm9sZT17dW5kZWZpbmVkfSBkZW5zZSBidXR0b24gb25DbGljaz17aGFuZGxlVG9nZ2xlKGluZGV4KX0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUuZmx1Z31cclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrZWQ9e2NoZWNrZWQuaW5kZXhPZihpbmRleCkgIT09IC0xfVxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxJZCB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGlkPXtsYWJlbElkfSBwcmltYXJ5PXtgTGluZSBpdGVtICR7aW5kZXggKyAxfSAke3ZhbHVlLmRldGFpbDF9ICYgJHt2YWx1ZS5kZXRhaWwyfSAmICR7dmFsdWUuZmx1Z31gfSAvPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9KX0gKi99XHJcbiAgICA8L0xpc3Q+XHJcbiAgICAvLyA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdHN9PlxyXG4gICAgLy8gICB7WzAsIDEsIDIsIDNdLm1hcCgodmFsdWUpID0+IHtcclxuICAgIC8vICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3QtbGFiZWwtJHt2YWx1ZX1gO1xyXG5cclxuICAgIC8vICAgICByZXR1cm4gKFxyXG4gICAgLy8gICAgICAgPExpc3RJdGVtIGtleT17dmFsdWV9IHJvbGU9e3VuZGVmaW5lZH0gZGVuc2UgYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZSh2YWx1ZSl9PlxyXG4gICAgLy8gICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgLy8gICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgLy8gICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgIC8vICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWQuaW5kZXhPZih2YWx1ZSkgIT09IC0xfVxyXG4gICAgLy8gICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgLy8gICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgLy8gICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxJZCB9fVxyXG4gICAgLy8gICAgICAgICAgIC8+XHJcbiAgICAvLyAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgLy8gICAgICAgICA8TGlzdEl0ZW1UZXh0IGlkPXtsYWJlbElkfSBwcmltYXJ5PXtgTGluZSBpdGVtICR7dmFsdWUgKyAxfWB9IC8+XHJcbiAgICAvLyAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgIC8vICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAvLyAgICAgICAgICAgey8qIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPiAqL31cclxuICAgIC8vICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgLy8gICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIC8vICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgIC8vICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgfSl9XHJcbiAgICAvLyA8L0xpc3Q+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9