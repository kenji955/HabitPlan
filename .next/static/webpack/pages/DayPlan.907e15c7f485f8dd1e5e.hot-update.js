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
  test[year][month][22].tasks.map(function (value, index) {
    var labelId = "checkbox-list-label-".concat(value);

    var content = __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: year & month & date & index,
      role: undefined,
      dense: true,
      button: true,
      onClick: handleToggle(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
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
        lineNumber: 86,
        columnNumber: 11
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(value.detail1, " & ").concat(value.detail2, " & ").concat(value.flug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }))));
  });
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, test[year][month][22].tasks.map(function (value, index) {
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
        lineNumber: 114,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
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
        lineNumber: 116,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(value.detail1, " & ").concat(value.detail2, " & ").concat(value.flug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9DaGVja0JveExpc3QudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3RzIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJDaGVja2JveExpc3QiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRhdGUiLCJnZXREYXRlIiwiaGFuZGxlVG9nZ2xlIiwidmFsdWUiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwibmV3Q2hlY2tlZCIsInB1c2giLCJzcGxpY2UiLCJ0YXNrQ2hlY2tDb21wbGV0ZSIsInRlc3QiLCJjYWxlbmRhciIsImNvbnNvbGUiLCJsb2ciLCJBY2hpZXZlbWVudCIsImZpbHRlciIsImZsdWciLCJOb3RBY2hpZXZlZCIsIm1hcCIsImluZGV4IiwibGFiZWxJZCIsImNvbnRlbnQiLCJ1bmRlZmluZWQiLCJkZXRhaWwxIiwiZGV0YWlsMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFLE1BREY7QUFFTEMsY0FBUSxFQUFFLEdBRkw7QUFHTEMsWUFBTSxF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Q0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVhGLEVBWUUsTUFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvRUFBRDtBQUFZLFVBQUksRUFBQyxLQUFqQjtBQUF1QixvQkFBVyxVQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUUsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FERixDQVpGLENBREY7QUFxQkQsR0F4QkEsQ0FESCxDQURGLENBNEJFO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckRGO0FBdUREOztHQXhJdUJoQyxZO1VBQ05aLFMsRUFFU2lCLHdELEVBQ1JLLHdEOzs7S0FKS1YsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9EYXlQbGFuLjkwN2UxNWM3ZjQ4NWY4ZGQxZTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xyXG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ29tbWVudEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NvbW1lbnQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHRhc2tDaGVja0NvbXBsZXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuaW1wb3J0IHsgY2FsZW5kYXIgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290czoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXhXaWR0aDogNzIwLFxyXG4gICAgICBtYXJnaW46J2F1dG8nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveExpc3QoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeWVhcj0gbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgbW9udGg9IG5ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXRNb250aCgpICsgMTtcclxuICBjb25zdCBkYXRlPSBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAodmFsdWU6IG51bWJlcikgPT4gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gY2hlY2tlZC5pbmRleE9mKHZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0NoZWNrZWQgPSBbLi4uY2hlY2tlZF07XHJcblxyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgbmV3Q2hlY2tlZC5wdXNoKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0NoZWNrZWQuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuXHJcbiAgICBkaXNwYXRjaCh0YXNrQ2hlY2tDb21wbGV0ZShbeWVhcixtb250aCxkYXRlLHZhbHVlXSkpO1xyXG4gIH07XHJcblxyXG4gIC8vIOOBk+OBk+OBp+S9nOaIkOOBmeOCi+apn+iDveOBr+OBn+OBj+OBleOCk+OBguOCi+OAglxyXG4gIC8vIOaXpeS7mOOBqOODkeOCv+ODvOODs0lE44KS6Kqt44G/5Y+W44KL44GT44GoXHJcbiAgLy8g44GE44KE44CB44GT44GT44GY44KD44Gq44GE44GL77yf44GT44GT44Gn44Gv44Kr44Os44Oz44OA44O844Gr5qC857SN44GV44KM44Gf44K/44K544Kv44KS6Kqt44G/5Y+W44KL44Gg44GR44Gn6Imv44GE44Gu44Gn44Gv77yfXHJcbiAgLy8g44Kr44Os44Oz44OA44O855S76Z2i44Gn44OR44K/44O844Oz44KS55m76Yyy44GX44CB44Gd44Gu5pmC44Gr44K/44K544Kv44Oq44K544OI44GL44KJ44OR44K/44O844OzSUTjgYzlkIjoh7TjgZnjgovjgoLjga7jgaDjgZHmir3lh7rjgZfjgabjgIHoqbLlvZPjgZnjgovml6Xku5jjga7jgqvjg6zjg7Pjg4Djg7zphY3liJfjgavmoLzntI3jgZnjgotcclxuICAvLyDkuIDluqbjgrfjg7Pjg5fjg6vjgavjgIHjgqvjg6zjg7Pjg4Djg7zphY3liJfjgavmoLzntI3jgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLoqq3jgb/lj5bjgovmqZ/og73jgpLlrp/oo4XjgZfjgojjgYZcclxuICBcclxuXHJcbiAgLy8gY29uc3QgdGVzdCA9IHVzZXJUYXNrSW5mby5jYWxlbmRhci5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xyXG4gIC8vICAgcmV0dXJuIHZhbHVlLnllYXIgPT0geWVhciAmJiB2YWx1ZS5tb250aCA9PSBtb250aCAmJiB2YWx1ZS5kYXRlID09IGRhdGVcclxuICAvLyB9KTtcclxuICBcclxuICAvLyBjb25zdCB0ZXN0ID0gdXNlclRhc2tJbmZvLmNhbGVuZGFyW3llYXJdW21vbnRoXVtkYXRlXVxyXG4gIGNvbnN0IHRlc3QgPSB1c2VyVGFza0luZm8uY2FsZW5kYXI7XHJcbiAgXHJcbiAgY29uc29sZS5sb2codGVzdFt5ZWFyXVttb250aF1bMjJdKTtcclxuICBcclxuICAvLyBsZXQgQWNoaWV2ZW1lbnQ6W0pTWC5FbGVtZW50XSxOb3RBY2hpZXZlZDpbSlNYLkVsZW1lbnRdO1xyXG4gICAgY29uc3QgQWNoaWV2ZW1lbnQgPSB0ZXN0W3llYXJdW21vbnRoXVsyMl0udGFza3MuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgcmV0dXJuIHZhbHVlLmZsdWcgPT0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ0FjaGlldmVtZW50Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhBY2hpZXZlbWVudCk7XHJcblxyXG4gICAgY29uc3QgTm90QWNoaWV2ZWQgPSB0ZXN0W3llYXJdW21vbnRoXVsyMl0udGFza3MuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgcmV0dXJuIHZhbHVlLmZsdWcgPT0gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdOb3RBY2hpZXZlZCcpO1xyXG4gICAgY29uc29sZS5sb2coTm90QWNoaWV2ZWQpO1xyXG5cclxuICB0ZXN0W3llYXJdW21vbnRoXVsyMl0udGFza3MubWFwKCh2YWx1ZSxpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LWxhYmVsLSR7dmFsdWV9YDtcclxuXHJcbiAgICBsZXQgY29udGVudDpKU1guRWxlbWVudCA9IChcclxuICAgICAgPExpc3RJdGVtIGtleT17eWVhciZtb250aCZkYXRlJmluZGV4fSByb2xlPXt1bmRlZmluZWR9IGRlbnNlIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVUb2dnbGUoaW5kZXgpfT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlLmZsdWd9XHJcbiAgICAgICAgICAgIC8vIGNoZWNrZWQ9e2NoZWNrZWQuaW5kZXhPZihpbmRleCkgIT09IC0xfVxyXG4gICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxJZCB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IGlkPXtsYWJlbElkfSBwcmltYXJ5PXtgTGluZSBpdGVtICR7aW5kZXggKyAxfSAke3ZhbHVlLmRldGFpbDF9ICYgJHt2YWx1ZS5kZXRhaWwyfSAmICR7dmFsdWUuZmx1Z31gfSAvPlxyXG4gICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJlbmRcIiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj5cclxuICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj4gKi99XHJcbiAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICApO1xyXG5cclxuXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdHN9PlxyXG4gICAgICB7dGVzdFt5ZWFyXVttb250aF1bMjJdLnRhc2tzLm1hcCgodmFsdWUsaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3QtbGFiZWwtJHt2YWx1ZX1gO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGtleT17eWVhciZtb250aCZkYXRlJmluZGV4fSByb2xlPXt1bmRlZmluZWR9IGRlbnNlIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVUb2dnbGUoaW5kZXgpfT5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZS5mbHVnfVxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2tlZD17Y2hlY2tlZC5pbmRleE9mKGluZGV4KSAhPT0gLTF9XHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbElkIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgaWQ9e2xhYmVsSWR9IHByaW1hcnk9e2BMaW5lIGl0ZW0gJHtpbmRleCArIDF9ICR7dmFsdWUuZGV0YWlsMX0gJiAke3ZhbHVlLmRldGFpbDJ9ICYgJHt2YWx1ZS5mbHVnfWB9IC8+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgey8qIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPiAqL31cclxuICAgICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0xpc3Q+XHJcbiAgICAvLyA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdHN9PlxyXG4gICAgLy8gICB7WzAsIDEsIDIsIDNdLm1hcCgodmFsdWUpID0+IHtcclxuICAgIC8vICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3QtbGFiZWwtJHt2YWx1ZX1gO1xyXG5cclxuICAgIC8vICAgICByZXR1cm4gKFxyXG4gICAgLy8gICAgICAgPExpc3RJdGVtIGtleT17dmFsdWV9IHJvbGU9e3VuZGVmaW5lZH0gZGVuc2UgYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZSh2YWx1ZSl9PlxyXG4gICAgLy8gICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgLy8gICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgLy8gICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgIC8vICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWQuaW5kZXhPZih2YWx1ZSkgIT09IC0xfVxyXG4gICAgLy8gICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgLy8gICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgLy8gICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxJZCB9fVxyXG4gICAgLy8gICAgICAgICAgIC8+XHJcbiAgICAvLyAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgLy8gICAgICAgICA8TGlzdEl0ZW1UZXh0IGlkPXtsYWJlbElkfSBwcmltYXJ5PXtgTGluZSBpdGVtICR7dmFsdWUgKyAxfWB9IC8+XHJcbiAgICAvLyAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgIC8vICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAvLyAgICAgICAgICAgey8qIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPiAqL31cclxuICAgIC8vICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgLy8gICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIC8vICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgIC8vICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgfSl9XHJcbiAgICAvLyA8L0xpc3Q+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9