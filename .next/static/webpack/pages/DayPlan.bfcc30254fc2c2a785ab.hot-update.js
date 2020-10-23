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
  console.log(test[year][month][22]);
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
        lineNumber: 73,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
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
        lineNumber: 75,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(value.detail1, " & ").concat(value.detail2, " & ").concat(value.flug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9DaGVja0JveExpc3QudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3RzIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJDaGVja2JveExpc3QiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRhdGUiLCJnZXREYXRlIiwiaGFuZGxlVG9nZ2xlIiwidmFsdWUiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwibmV3Q2hlY2tlZCIsInB1c2giLCJzcGxpY2UiLCJ0YXNrQ2hlY2tDb21wbGV0ZSIsInRlc3QiLCJjYWxlbmRhciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpbmRleCIsImxhYmVsSWQiLCJ1bmRlZmluZWQiLCJmbHVnIiwiZGV0YWlsMSIsImRldGFpbDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxNQURGO0FBRUxDLGNBQVEsRUFBRSxHQUZMO0FBR0xDLFlBQU0sRUFBQyxNQUhGO0FBSUxDLHFCQUFlLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFj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QixPQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBV0UsTUFBQyxzRUFBRDtBQUFjLFFBQUUsRUFBRUEsT0FBbEI7QUFBMkIsYUFBTyxzQkFBZUQsS0FBSyxHQUFHLENBQXZCLGNBQTRCWixLQUFLLENBQUNnQixPQUFsQyxnQkFBK0NoQixLQUFLLENBQUNpQixPQUFyRCxnQkFBa0VqQixLQUFLLENBQUNlLElBQXhFLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYRixFQVlFLE1BQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0VBQUQ7QUFBWSxVQUFJLEVBQUMsS0FBakI7QUFBdUIsb0JBQVcsVUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBREYsQ0FaRixDQURGO0FBcUJELEdBeEJBLENBREgsQ0FERixDQTRCRTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJERjtBQXVERDs7R0EvRnVCbEMsWTtVQUNOWixTLEVBRVNpQix3RCxFQUNSSyx3RDs7O0tBSktWLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGF5UGxhbi5iZmNjMzAyNTRmYzJjMmE3ODVhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Db21tZW50JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgeyB0YXNrQ2hlY2tDb21wbGV0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IGNhbGVuZGFyIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy91c2VyVGFza3NUeXBlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcm9vdHM6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWF4V2lkdGg6IDcyMCxcclxuICAgICAgbWFyZ2luOidhdXRvJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hMaXN0KCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHllYXI9IG5ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IG1vbnRoPSBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDE7XHJcbiAgY29uc3QgZGF0ZT0gbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKHZhbHVlOiBudW1iZXIpID0+ICgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNoZWNrZWQuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICBjb25zdCBuZXdDaGVja2VkID0gWy4uLmNoZWNrZWRdO1xyXG5cclxuICAgIGlmIChjdXJyZW50SW5kZXggPT09IC0xKSB7XHJcbiAgICAgIG5ld0NoZWNrZWQucHVzaCh2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdDaGVja2VkLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoZWNrZWQobmV3Q2hlY2tlZCk7XHJcblxyXG4gICAgZGlzcGF0Y2godGFza0NoZWNrQ29tcGxldGUoW3llYXIsbW9udGgsZGF0ZSx2YWx1ZV0pKTtcclxuICB9O1xyXG5cclxuICAvLyDjgZPjgZPjgafkvZzmiJDjgZnjgovmqZ/og73jga/jgZ/jgY/jgZXjgpPjgYLjgovjgIJcclxuICAvLyDml6Xku5jjgajjg5Hjgr/jg7zjg7NJROOCkuiqreOBv+WPluOCi+OBk+OBqFxyXG4gIC8vIOOBhOOChOOAgeOBk+OBk+OBmOOCg+OBquOBhOOBi++8n+OBk+OBk+OBp+OBr+OCq+ODrOODs+ODgOODvOOBq+agvOe0jeOBleOCjOOBn+OCv+OCueOCr+OCkuiqreOBv+WPluOCi+OBoOOBkeOBp+iJr+OBhOOBruOBp+OBr++8n1xyXG4gIC8vIOOCq+ODrOODs+ODgOODvOeUu+mdouOBp+ODkeOCv+ODvOODs+OCkueZu+mMsuOBl+OAgeOBneOBruaZguOBq+OCv+OCueOCr+ODquOCueODiOOBi+OCieODkeOCv+ODvOODs0lE44GM5ZCI6Ie044GZ44KL44KC44Gu44Gg44GR5oq95Ye644GX44Gm44CB6Kmy5b2T44GZ44KL5pel5LuY44Gu44Kr44Os44Oz44OA44O86YWN5YiX44Gr5qC857SN44GZ44KLXHJcbiAgLy8g5LiA5bqm44K344Oz44OX44Or44Gr44CB44Kr44Os44Oz44OA44O86YWN5YiX44Gr5qC857SN44GV44KM44Gm44GE44KL44K/44K544Kv44KS6Kqt44G/5Y+W44KL5qmf6IO944KS5a6f6KOF44GX44KI44GGXHJcbiAgXHJcblxyXG4gIC8vIGNvbnN0IHRlc3QgPSB1c2VyVGFza0luZm8uY2FsZW5kYXIuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKXtcclxuICAvLyAgIHJldHVybiB2YWx1ZS55ZWFyID09IHllYXIgJiYgdmFsdWUubW9udGggPT0gbW9udGggJiYgdmFsdWUuZGF0ZSA9PSBkYXRlXHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIGNvbnN0IHRlc3QgPSB1c2VyVGFza0luZm8uY2FsZW5kYXJbeWVhcl1bbW9udGhdW2RhdGVdXHJcbiAgY29uc3QgdGVzdCA9IHVzZXJUYXNrSW5mby5jYWxlbmRhcjtcclxuXHJcbiAgY29uc29sZS5sb2codGVzdFt5ZWFyXVttb250aF1bMjJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290c30+XHJcbiAgICAgIHt0ZXN0W3llYXJdW21vbnRoXVsyMl0udGFza3MubWFwKCh2YWx1ZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsSWQgPSBgY2hlY2tib3gtbGlzdC1sYWJlbC0ke3ZhbHVlfWA7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXt5ZWFyJm1vbnRoJmRhdGUmaW5kZXh9IHJvbGU9e3VuZGVmaW5lZH0gZGVuc2UgYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZShpbmRleCl9PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlLmZsdWd9XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVja2VkPXtjaGVja2VkLmluZGV4T2YoaW5kZXgpICE9PSAtMX1cclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsSWQgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpZD17bGFiZWxJZH0gcHJpbWFyeT17YExpbmUgaXRlbSAke2luZGV4ICsgMX0gJHt2YWx1ZS5kZXRhaWwxfSAmICR7dmFsdWUuZGV0YWlsMn0gJiAke3ZhbHVlLmZsdWd9YH0gLz5cclxuICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJlbmRcIiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICB7LyogPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvTGlzdD5cclxuICAgIC8vIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290c30+XHJcbiAgICAvLyAgIHtbMCwgMSwgMiwgM10ubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IGxhYmVsSWQgPSBgY2hlY2tib3gtbGlzdC1sYWJlbC0ke3ZhbHVlfWA7XHJcblxyXG4gICAgLy8gICAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgICA8TGlzdEl0ZW0ga2V5PXt2YWx1ZX0gcm9sZT17dW5kZWZpbmVkfSBkZW5zZSBidXR0b24gb25DbGljaz17aGFuZGxlVG9nZ2xlKHZhbHVlKX0+XHJcbiAgICAvLyAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAvLyAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAvLyAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgLy8gICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZC5pbmRleE9mKHZhbHVlKSAhPT0gLTF9XHJcbiAgICAvLyAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAvLyAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAvLyAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbElkIH19XHJcbiAgICAvLyAgICAgICAgICAgLz5cclxuICAgIC8vICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAvLyAgICAgICAgIDxMaXN0SXRlbVRleHQgaWQ9e2xhYmVsSWR9IHByaW1hcnk9e2BMaW5lIGl0ZW0gJHt2YWx1ZSArIDF9YH0gLz5cclxuICAgIC8vICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgLy8gICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJlbmRcIiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj5cclxuICAgIC8vICAgICAgICAgICB7LyogPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+ICovfVxyXG4gICAgLy8gICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAvLyAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgLy8gICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgLy8gICAgICAgPC9MaXN0SXRlbT5cclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICB9KX1cclxuICAgIC8vIDwvTGlzdD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=