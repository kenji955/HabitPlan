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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__);


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
    },
    AchievementList: {
      display: 'inline-block'
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

  var handleToggle = function handleToggle(order) {
    return function () {
      var currentIndex = checked.indexOf(order);

      var newChecked = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(checked);

      if (currentIndex === -1) {
        newChecked.push(order);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
      console.log('list' + order);
      dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_12__["taskCheckComplete"])([year, month, date, order]));
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
  console.log("Achievement");
  console.log(Achievement);
  var NotAchieved = test[year][month][22].tasks.filter(function (value) {
    return value.flug == false;
  });
  console.log("NotAchieved");
  console.log(NotAchieved);
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, NotAchieved.map(function (value, index) {
    var labelId = "checkbox-list-label-".concat(value);
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: year & month & date & value.order,
      role: undefined,
      dense: true,
      button: true,
      onClick: handleToggle(value.order),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 25
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
        lineNumber: 105,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(value.detail1, " & ").concat(value.detail2, " & ").concat(value.flug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 29
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 33
      }
    }))));
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Accordion"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["AccordionSummary"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 33
      }
    }),
    "aria-controls": "panel1a-content",
    id: "panel1a-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, "\u9054\u6210\u6E08\u307F")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["AccordionDetails"], {
    className: classes.AchievementList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, Achievement.map(function (value, index) {
    var labelId = "checkbox-list-label-".concat(value);
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: year & month & date & value.order,
      role: undefined,
      dense: true,
      button: true,
      onClick: handleToggle(value.order),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 33
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
        lineNumber: 151,
        columnNumber: 37
      }
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(value.detail1, " & ").concat(value.detail2, " & ").concat(value.flug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 33
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 37
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 41
      }
    }))));
  })))) // <List className={classes.roots}>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9DaGVja0JveExpc3QudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3RzIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJBY2hpZXZlbWVudExpc3QiLCJkaXNwbGF5IiwiQ2hlY2tib3hMaXN0IiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidGFza3MiLCJ1c2VyVGFza0luZm8iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsImhhbmRsZVRvZ2dsZSIsIm9yZGVyIiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsIm5ld0NoZWNrZWQiLCJwdXNoIiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsInRhc2tDaGVja0NvbXBsZXRlIiwidGVzdCIsImNhbGVuZGFyIiwiQWNoaWV2ZW1lbnQiLCJmaWx0ZXIiLCJ2YWx1ZSIsImZsdWciLCJOb3RBY2hpZXZlZCIsIm1hcCIsImluZGV4IiwibGFiZWxJZCIsInVuZGVmaW5lZCIsImRldGFpbDEiLCJkZXRhaWwyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU1BO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUN6QkMsNkVBQVksQ0FBQztBQUNUQyxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFF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OGM4NDhkN2M5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ29tbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdGFza0NoZWNrQ29tcGxldGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5pbXBvcnQgeyBjYWxlbmRhciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGVcIjtcclxuaW1wb3J0IHtcclxuICAgIEFjY29yZGlvbixcclxuICAgIEFjY29yZGlvblN1bW1hcnksXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgQWNjb3JkaW9uRGV0YWlscyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290czoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA3MjAsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQWNoaWV2ZW1lbnRMaXN0OntcclxuICAgICAgICAgIGRpc3BsYXk6J2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrYm94TGlzdCgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKFwiVGh1LCAyMiBNYXkgMjAyMCAwMjowMDowMFwiKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShcIlRodSwgMjIgTWF5IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoXCJUaHUsIDIyIE1heSAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAob3JkZXI6IG51bWJlcikgPT4gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNoZWNrZWQuaW5kZXhPZihvcmRlcik7XHJcbiAgICAgICAgY29uc3QgbmV3Q2hlY2tlZCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgbmV3Q2hlY2tlZC5wdXNoKG9yZGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdDaGVja2VkLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xpc3QnICsgb3JkZXIpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh0YXNrQ2hlY2tDb21wbGV0ZShbeWVhciwgbW9udGgsIGRhdGUsIG9yZGVyXSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDjgZPjgZPjgafkvZzmiJDjgZnjgovmqZ/og73jga/jgZ/jgY/jgZXjgpPjgYLjgovjgIJcclxuICAgIC8vIOaXpeS7mOOBqOODkeOCv+ODvOODs0lE44KS6Kqt44G/5Y+W44KL44GT44GoXHJcbiAgICAvLyDjgYTjgoTjgIHjgZPjgZPjgZjjgoPjgarjgYTjgYvvvJ/jgZPjgZPjgafjga/jgqvjg6zjg7Pjg4Djg7zjgavmoLzntI3jgZXjgozjgZ/jgr/jgrnjgq/jgpLoqq3jgb/lj5bjgovjgaDjgZHjgafoia/jgYTjga7jgafjga/vvJ9cclxuICAgIC8vIOOCq+ODrOODs+ODgOODvOeUu+mdouOBp+ODkeOCv+ODvOODs+OCkueZu+mMsuOBl+OAgeOBneOBruaZguOBq+OCv+OCueOCr+ODquOCueODiOOBi+OCieODkeOCv+ODvOODs0lE44GM5ZCI6Ie044GZ44KL44KC44Gu44Gg44GR5oq95Ye644GX44Gm44CB6Kmy5b2T44GZ44KL5pel5LuY44Gu44Kr44Os44Oz44OA44O86YWN5YiX44Gr5qC857SN44GZ44KLXHJcbiAgICAvLyDkuIDluqbjgrfjg7Pjg5fjg6vjgavjgIHjgqvjg6zjg7Pjg4Djg7zphY3liJfjgavmoLzntI3jgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLoqq3jgb/lj5bjgovmqZ/og73jgpLlrp/oo4XjgZfjgojjgYZcclxuXHJcbiAgICAvLyBjb25zdCB0ZXN0ID0gdXNlclRhc2tJbmZvLmNhbGVuZGFyLmZpbHRlcihmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAvLyAgIHJldHVybiB2YWx1ZS55ZWFyID09IHllYXIgJiYgdmFsdWUubW9udGggPT0gbW9udGggJiYgdmFsdWUuZGF0ZSA9PSBkYXRlXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBjb25zdCB0ZXN0ID0gdXNlclRhc2tJbmZvLmNhbGVuZGFyW3llYXJdW21vbnRoXVtkYXRlXVxyXG4gICAgY29uc3QgdGVzdCA9IHVzZXJUYXNrSW5mby5jYWxlbmRhcjtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0ZXN0W3llYXJdW21vbnRoXVsyMl0pO1xyXG5cclxuICAgIC8vIGxldCBBY2hpZXZlbWVudDpbSlNYLkVsZW1lbnRdLE5vdEFjaGlldmVkOltKU1guRWxlbWVudF07XHJcbiAgICBjb25zdCBBY2hpZXZlbWVudCA9IHRlc3RbeWVhcl1bbW9udGhdWzIyXS50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLmZsdWcgPT0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJBY2hpZXZlbWVudFwiKTtcclxuICAgIGNvbnNvbGUubG9nKEFjaGlldmVtZW50KTtcclxuXHJcbiAgICBjb25zdCBOb3RBY2hpZXZlZCA9IHRlc3RbeWVhcl1bbW9udGhdWzIyXS50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLmZsdWcgPT0gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiTm90QWNoaWV2ZWRcIik7XHJcbiAgICBjb25zb2xlLmxvZyhOb3RBY2hpZXZlZCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdHN9PlxyXG4gICAgICAgICAgICB7Tm90QWNoaWV2ZWQubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsSWQgPSBgY2hlY2tib3gtbGlzdC1sYWJlbC0ke3ZhbHVlfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt5ZWFyICYgbW9udGggJiBkYXRlICYgdmFsdWUub3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZSh2YWx1ZS5vcmRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZS5mbHVnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrZWQ9e2NoZWNrZWQuaW5kZXhPZihpbmRleCkgIT09IC0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbElkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2xhYmVsSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgTGluZSBpdGVtICR7aW5kZXggKyAxfSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmRldGFpbDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gJiAke3ZhbHVlLmRldGFpbDJ9ICYgJHt2YWx1ZS5mbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJlbmRcIiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYS1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhbmVsMWEtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PkFjY29yZGlvbiAxPC9UeXBvZ3JhcGh5PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT7pgZTmiJDmuIjjgb88L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscyBjbGFzc05hbWU9e2NsYXNzZXMuQWNoaWV2ZW1lbnRMaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPFR5cG9ncmFwaHk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtBY2hpZXZlbWVudC5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3QtbGFiZWwtJHt2YWx1ZX1gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17eWVhciAmIG1vbnRoICYgZGF0ZSAmIHZhbHVlLm9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZSh2YWx1ZS5vcmRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUuZmx1Z31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrZWQ9e2NoZWNrZWQuaW5kZXhPZihpbmRleCkgIT09IC0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2xhYmVsSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2BMaW5lIGl0ZW0gJHtpbmRleCArIDF9ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kZXRhaWwxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gJiAke3ZhbHVlLmRldGFpbDJ9ICYgJHt2YWx1ZS5mbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwvVHlwb2dyYXBoeT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgey8qIHt0ZXN0W3llYXJdW21vbnRoXVsyMl0udGFza3MubWFwKCh2YWx1ZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsSWQgPSBgY2hlY2tib3gtbGlzdC1sYWJlbC0ke3ZhbHVlfWA7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXt5ZWFyJm1vbnRoJmRhdGUmaW5kZXh9IHJvbGU9e3VuZGVmaW5lZH0gZGVuc2UgYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZShpbmRleCl9PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlLmZsdWd9XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVja2VkPXtjaGVja2VkLmluZGV4T2YoaW5kZXgpICE9PSAtMX1cclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsSWQgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBpZD17bGFiZWxJZH0gcHJpbWFyeT17YExpbmUgaXRlbSAke2luZGV4ICsgMX0gJHt2YWx1ZS5kZXRhaWwxfSAmICR7dmFsdWUuZGV0YWlsMn0gJiAke3ZhbHVlLmZsdWd9YH0gLz5cclxuICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJlbmRcIiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9ICovfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgICAvLyA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdHN9PlxyXG4gICAgICAgIC8vICAge1swLCAxLCAyLCAzXS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGxhYmVsSWQgPSBgY2hlY2tib3gtbGlzdC1sYWJlbC0ke3ZhbHVlfWA7XHJcblxyXG4gICAgICAgIC8vICAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vICAgICAgIDxMaXN0SXRlbSBrZXk9e3ZhbHVlfSByb2xlPXt1bmRlZmluZWR9IGRlbnNlIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVUb2dnbGUodmFsdWUpfT5cclxuICAgICAgICAvLyAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgLy8gICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZC5pbmRleE9mKHZhbHVlKSAhPT0gLTF9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcclxuICAgICAgICAvLyAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbElkIH19XHJcbiAgICAgICAgLy8gICAgICAgICAgIC8+XHJcbiAgICAgICAgLy8gICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAvLyAgICAgICAgIDxMaXN0SXRlbVRleHQgaWQ9e2xhYmVsSWR9IHByaW1hcnk9e2BMaW5lIGl0ZW0gJHt2YWx1ZSArIDF9YH0gLz5cclxuICAgICAgICAvLyAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAvLyAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPlxyXG4gICAgICAgIC8vICAgICAgICAgICB7LyogPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+ICovfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgLy8gICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgIC8vICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgLy8gICAgICk7XHJcbiAgICAgICAgLy8gICB9KX1cclxuICAgICAgICAvLyA8L0xpc3Q+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=