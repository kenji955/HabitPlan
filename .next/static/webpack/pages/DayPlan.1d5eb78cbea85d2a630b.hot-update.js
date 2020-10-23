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

  var handleToggle = function handleToggle(value) {
    return function () {
      // const handleToggle = (value: number,calendar:calendar) => () => {
      var currentIndex = checked.indexOf(value);

      var newChecked = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(checked);

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked); // dispatch(taskCheckComplete(calendar));
    };
  }; // ここで作成する機能はたくさんある。
  // 日付とパターンIDを読み取ること
  // いや、ここじゃないか？ここではカレンダーに格納されたタスクを読み取るだけで良いのでは？
  // カレンダー画面でパターンを登録し、その時にタスクリストからパターンIDが合致するものだけ抽出して、該当する日付のカレンダー配列に格納する
  // 一度シンプルに、カレンダー配列に格納されているタスクを読み取る機能を実装しよう


  var year = new Date("Thu, 22 May 2020 02:00:00").getFullYear();
  var month = new Date("Thu, 22 May 2020 02:00:00").getMonth() + 1;
  var date = new Date("Thu, 22 May 2020 02:00:00").getDate(); // const test = userTaskInfo.calendar.filter(function(value){
  //   return value.year == year && value.month == month && value.date == date
  // });
  // const test = userTaskInfo.calendar[year][month][date]

  var test = userTaskInfo.calendar;
  console.log(test[year][month][22]);
  return (// <List className={classes.roots}>
    //   {test[0].tasks.map((value,index) => {
    //     const labelId = `checkbox-list-label-${value}`;
    //     return (
    //       <ListItem key={test[0].year&test[0].month&test[0].date&index} role={undefined} dense button onClick={handleToggle(index,test[0])}>
    //         <ListItemIcon>
    //           <Checkbox
    //             edge="start"
    //             checked={checked.indexOf(index) !== -1}
    //             tabIndex={-1}
    //             disableRipple
    //             inputProps={{ 'aria-labelledby': labelId }}
    //           />
    //         </ListItemIcon>
    //         <ListItemText id={labelId} primary={`Line item ${index + 1} ${value.detail1} & ${value.detail2} & ${value.flug}`} />
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
    __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.roots,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 5
      }
    }, [0, 1, 2, 3].map(function (value) {
      var labelId = "checkbox-list-label-".concat(value);
      return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: value,
        role: undefined,
        dense: true,
        button: true,
        onClick: handleToggle(value),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
        edge: "start",
        checked: checked.indexOf(value) !== -1,
        tabIndex: -1,
        disableRipple: true,
        inputProps: {
          'aria-labelledby': labelId
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }
      })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: labelId,
        primary: "Line item ".concat(value + 1),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }
      }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        edge: "end",
        "aria-label": "comments",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 15
        }
      }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }
      }))));
    }))
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9DaGVja0JveExpc3QudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3RzIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJDaGVja2JveExpc3QiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVUb2dnbGUiLCJ2YWx1ZSIsImN1cnJlbnRJbmRleCIsImluZGV4T2YiLCJuZXdDaGVja2VkIiwicHVzaCIsInNwbGljZSIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF0ZSIsImdldERhdGUiLCJ0ZXN0IiwiY2FsZW5kYXIiLCJjb25zb2xlIiwibG9nIiwibWFwIiwibGFiZWxJZCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFLE1BREY7QUFFTEMsY0FBUSxFQUFFLEdBRkw7QUFHTEMsWUFBTSxFQUFDLE1BSEY7QUFJTEMscUJBQWUsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBSnJDO0FBREksR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQVdlLFNBQVND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QURGLEVBVUUsTUFBQyxzRUFBRDtBQUFjLFVBQUUsRUFBRUEsT0FBbEI7QUFBMkIsZUFBTyxzQkFBZWxCLEtBQUssR0FBRyxDQUF2QixDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVkYsRUFXRSxNQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLG9FQUFEO0FBQVksWUFBSSxFQUFDLEtBQWpCO0FBQXVCLHNCQUFXLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQURGLENBWEYsQ0FERjtBQW9CRCxLQXZCQSxDQURIO0FBM0JGO0FBc0REOztHQS9GdUJaLFk7VUFDTlosUyxFQUVTaUIsd0QsRUFDUkssd0Q7OztLQUpLVixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0RheVBsYW4uMWQ1ZWI3OGNiZWE4NWQyYTYzMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ29tbWVudCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdGFza0NoZWNrQ29tcGxldGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5pbXBvcnQgeyBjYWxlbmRhciB9IGZyb20gJy4uLy4uL21vZHVsZXMvdXNlclRhc2tzVHlwZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3RzOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiA3MjAsXHJcbiAgICAgIG1hcmdpbjonYXV0bycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrYm94TGlzdCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKHZhbHVlOiBudW1iZXIpID0+ICgpID0+IHtcclxuICAvLyBjb25zdCBoYW5kbGVUb2dnbGUgPSAodmFsdWU6IG51bWJlcixjYWxlbmRhcjpjYWxlbmRhcikgPT4gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gY2hlY2tlZC5pbmRleE9mKHZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0NoZWNrZWQgPSBbLi4uY2hlY2tlZF07XHJcblxyXG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgbmV3Q2hlY2tlZC5wdXNoKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0NoZWNrZWQuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuXHJcbiAgICAvLyBkaXNwYXRjaCh0YXNrQ2hlY2tDb21wbGV0ZShjYWxlbmRhcikpO1xyXG4gIH07XHJcblxyXG4gIC8vIOOBk+OBk+OBp+S9nOaIkOOBmeOCi+apn+iDveOBr+OBn+OBj+OBleOCk+OBguOCi+OAglxyXG4gIC8vIOaXpeS7mOOBqOODkeOCv+ODvOODs0lE44KS6Kqt44G/5Y+W44KL44GT44GoXHJcbiAgLy8g44GE44KE44CB44GT44GT44GY44KD44Gq44GE44GL77yf44GT44GT44Gn44Gv44Kr44Os44Oz44OA44O844Gr5qC857SN44GV44KM44Gf44K/44K544Kv44KS6Kqt44G/5Y+W44KL44Gg44GR44Gn6Imv44GE44Gu44Gn44Gv77yfXHJcbiAgLy8g44Kr44Os44Oz44OA44O855S76Z2i44Gn44OR44K/44O844Oz44KS55m76Yyy44GX44CB44Gd44Gu5pmC44Gr44K/44K544Kv44Oq44K544OI44GL44KJ44OR44K/44O844OzSUTjgYzlkIjoh7TjgZnjgovjgoLjga7jgaDjgZHmir3lh7rjgZfjgabjgIHoqbLlvZPjgZnjgovml6Xku5jjga7jgqvjg6zjg7Pjg4Djg7zphY3liJfjgavmoLzntI3jgZnjgotcclxuICAvLyDkuIDluqbjgrfjg7Pjg5fjg6vjgavjgIHjgqvjg6zjg7Pjg4Djg7zphY3liJfjgavmoLzntI3jgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLoqq3jgb/lj5bjgovmqZ/og73jgpLlrp/oo4XjgZfjgojjgYZcclxuICBcclxuICBjb25zdCB5ZWFyPSBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBtb250aD0gbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldE1vbnRoKCkgKyAxO1xyXG4gIGNvbnN0IGRhdGU9IG5ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCk7XHJcblxyXG4gIC8vIGNvbnN0IHRlc3QgPSB1c2VyVGFza0luZm8uY2FsZW5kYXIuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKXtcclxuICAvLyAgIHJldHVybiB2YWx1ZS55ZWFyID09IHllYXIgJiYgdmFsdWUubW9udGggPT0gbW9udGggJiYgdmFsdWUuZGF0ZSA9PSBkYXRlXHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIGNvbnN0IHRlc3QgPSB1c2VyVGFza0luZm8uY2FsZW5kYXJbeWVhcl1bbW9udGhdW2RhdGVdXHJcbiAgY29uc3QgdGVzdCA9IHVzZXJUYXNrSW5mby5jYWxlbmRhcjtcclxuXHJcbiAgY29uc29sZS5sb2codGVzdFt5ZWFyXVttb250aF1bMjJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290c30+XHJcbiAgICAvLyAgIHt0ZXN0WzBdLnRhc2tzLm1hcCgodmFsdWUsaW5kZXgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3QtbGFiZWwtJHt2YWx1ZX1gO1xyXG5cclxuICAgIC8vICAgICByZXR1cm4gKFxyXG4gICAgLy8gICAgICAgPExpc3RJdGVtIGtleT17dGVzdFswXS55ZWFyJnRlc3RbMF0ubW9udGgmdGVzdFswXS5kYXRlJmluZGV4fSByb2xlPXt1bmRlZmluZWR9IGRlbnNlIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVUb2dnbGUoaW5kZXgsdGVzdFswXSl9PlxyXG4gICAgLy8gICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgLy8gICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgLy8gICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgIC8vICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWQuaW5kZXhPZihpbmRleCkgIT09IC0xfVxyXG4gICAgLy8gICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgLy8gICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgLy8gICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxJZCB9fVxyXG4gICAgLy8gICAgICAgICAgIC8+XHJcbiAgICAvLyAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgLy8gICAgICAgICA8TGlzdEl0ZW1UZXh0IGlkPXtsYWJlbElkfSBwcmltYXJ5PXtgTGluZSBpdGVtICR7aW5kZXggKyAxfSAke3ZhbHVlLmRldGFpbDF9ICYgJHt2YWx1ZS5kZXRhaWwyfSAmICR7dmFsdWUuZmx1Z31gfSAvPlxyXG4gICAgLy8gICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAvLyAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPlxyXG4gICAgLy8gICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj4gKi99XHJcbiAgICAvLyAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgIC8vICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAvLyAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAvLyAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgIH0pfVxyXG4gICAgLy8gPC9MaXN0PlxyXG4gICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3RzfT5cclxuICAgICAge1swLCAxLCAyLCAzXS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LWxhYmVsLSR7dmFsdWV9YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e3ZhbHVlfSByb2xlPXt1bmRlZmluZWR9IGRlbnNlIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVUb2dnbGUodmFsdWUpfT5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkLmluZGV4T2YodmFsdWUpICE9PSAtMX1cclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsSWQgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpZD17bGFiZWxJZH0gcHJpbWFyeT17YExpbmUgaXRlbSAke3ZhbHVlICsgMX1gfSAvPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==