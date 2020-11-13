webpackHotUpdate_N_E("pages/calendar",{

/***/ "./src/components/test/Calendar3.jsx":
/*!*******************************************!*\
  !*** ./src/components/test/Calendar3.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
/* harmony import */ var _modules_rootReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/rootReducer */ "./src/modules/rootReducer.ts");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_getDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/getDate */ "./node_modules/date-fns/esm/getDate/index.js");
/* harmony import */ var date_fns_getDay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/getDay */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/isSameDay */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns_eachDayOfInterval__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/eachDayOfInterval */ "./node_modules/date-fns/esm/eachDayOfInterval/index.js");
/* harmony import */ var date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/endOfWeek */ "./node_modules/date-fns/esm/endOfWeek/index.js");
/* harmony import */ var date_fns_eachWeekOfInterval__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/eachWeekOfInterval */ "./node_modules/date-fns/esm/eachWeekOfInterval/index.js");
/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/addMonths */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var date_fns_subMonths__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns/subMonths */ "./node_modules/date-fns/esm/subMonths/index.js");
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns/startOfMonth */ "./node_modules/date-fns/esm/startOfMonth/index.js");
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns/endOfMonth */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns/isSameMonth */ "./node_modules/date-fns/esm/isSameMonth/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/colors/pink */ "./node_modules/@material-ui/core/colors/pink.js");
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_31__);



var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\test\\Calendar3.jsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["makeStyles"])(function (theme) {
  return {
    paper: {
      margin: theme.spacing(5, 10),
      padding: theme.spacing(5, 5)
    },
    yearmonth: {
      margin: theme.spacing(2, 0, 1, 0)
    },
    tableHead: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.light
    }
  };
});
var useCalendarCellStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["makeStyles"])(function (theme) {
  return {
    calendarCell: {
      color: function color(_ref) {
        var wday = _ref.wday,
            isTargetMonth = _ref.isTargetMonth;

        if (isTargetMonth) {
          switch (wday) {
            case 0:
              // Sunday
              return _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_31___default.a[500];

            case 6:
              // Saturday
              return _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_29___default.a[500];

            default:
              return theme.palette.text.primary;
          }
        } else {
          // previous or next month
          switch (wday) {
            case 0:
              // Sunday
              return _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_31___default.a[200];

            case 6:
              // Saturday
              return _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_29___default.a[200];

            default:
              return theme.palette.text.secondary;
          }
        }
      },
      backgroundColor: function backgroundColor(_ref2) {
        var isToday = _ref2.isToday;
        return isToday ? _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_30___default.a[50] : "transparent";
      }
    }
  };
});

var getCalendarArray = function getCalendarArray(date) {
  var sundays = Object(date_fns_eachWeekOfInterval__WEBPACK_IMPORTED_MODULE_12__["default"])({
    start: Object(date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_15__["default"])(date),
    end: Object(date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_16__["default"])(date)
  });
  return sundays.map(function (sunday) {
    return Object(date_fns_eachDayOfInterval__WEBPACK_IMPORTED_MODULE_10__["default"])({
      start: sunday,
      end: Object(date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_11__["default"])(sunday)
    });
  });
};

var calendarCellClick = function calendarCellClick(dateData, dispatch, choice) {
  return function () {
    var year = dateData.getFullYear();
    var month = dateData.getMonth() + 1;
    var date = dateData.getDate();
    console.log('year');
    console.log(year);
    console.log('month');
    console.log(month);
    console.log('date');
    console.log(date);
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_4__["calendarPatternRegister"])([year, month, date, choice]));
  };
}; // カレンダー欄に設定されているパターンIDを表示させるための関数


function PatternRegistrationStatus(dateData, userTaskInfo) {
  var year = dateData.getFullYear();
  var month = dateData.getMonth() + 1;
  var date = dateData.getDate(); // console.log("チェック：" + date + ":" + month + ":" + year);
  // console.log("チェック2");
  // console.log(userTaskInfo.calendar[year]);

  if ([year] in userTaskInfo.calendar) {
    if ([month] in userTaskInfo.calendar[year]) {
      if ([date] in userTaskInfo.calendar[year][month]) {
        console.log('day');
        console.log(year + "/" + month + "/" + date);
        console.log("PatternId：" + userTaskInfo.calendar[year][month][date].PatternId);
        return userTaskInfo.calendar[year][month][date].PatternId;
      }
    }
  } // console.log("なし：" + date);


  return "×";
}

_c = PatternRegistrationStatus;

function CalendarTableCell(props) {
  _s();

  var key = props.key,
      wday = props.wday,
      isTargetMonth = props.isTargetMonth,
      isToday = props.isToday,
      children = props.children,
      dateData = props.dateData,
      dispatch = props.dispatch,
      choice = props.choice,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["key", "wday", "isTargetMonth", "isToday", "children", "dateData", "dispatch", "choice"]);

  var classes = useCalendarCellStyles(props);
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_25__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.calendarCell
  }, other, {
    onClick: calendarCellClick(dateData, dispatch, choice),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }), children);
}

_s(CalendarTableCell, "ukLd6tf9xGCRm8TMTZd5+yrbOjY=", false, function () {
  return [useCalendarCellStyles];
});

_c2 = CalendarTableCell;

function App(props) {
  _s2();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date()),
      targetDate = _useState[0],
      setTargetDate = _useState[1];

  var classes = useStyles();
  var calendar = getCalendarArray(targetDate);
  var today = new Date();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
    container: true,
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(Object(date_fns_subMonths__WEBPACK_IMPORTED_MODULE_14__["default"])(targetDate, 1));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 25
    }
  }, "\u524D\u306E\u6708")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(new Date());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 25
    }
  }, "\u4ECA\u6708")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(Object(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_13__["default"])(targetDate, 1));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 25
    }
  }, "\u6B21\u306E\u6708"))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_28__["default"], {
    variant: "h4",
    align: "center",
    className: classes.yearmonth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, Object(date_fns_format__WEBPACK_IMPORTED_MODULE_6__["default"])(targetDate, "y年M月")), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_26__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_27__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_25__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 29
    }
  }, "\u65E5"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_25__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 29
    }
  }, "\u6708"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_25__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 29
    }
  }, "\u706B"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_25__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 29
    }
  }, "\u6C34"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_25__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 29
    }
  }, "\u6728"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_25__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 29
    }
  }, "\u91D1"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_25__["default"], {
    align: "center",
    onClick: calendarCellClick,
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 29
    }
  }, "\u571F"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_24__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 21
    }
  }, calendar.map(function (weekRow, rowNum) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_27__["default"], {
      key: rowNum,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 29
      }
    }, weekRow.map(function (date, index) {
      return __jsx(CalendarTableCell, {
        key: Object(date_fns_getDay__WEBPACK_IMPORTED_MODULE_8__["default"])(date + "_" + index),
        wday: Object(date_fns_getDay__WEBPACK_IMPORTED_MODULE_8__["default"])(date),
        isTargetMonth: Object(date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_17__["default"])(date, targetDate),
        isToday: Object(date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_9__["default"])(date, today),
        dateData: date,
        dispatch: dispatch,
        choice: props.choice,
        align: "center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 37
        }
      }, Object(date_fns_getDate__WEBPACK_IMPORTED_MODULE_7__["default"])(date), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 41
        }
      }), PatternRegistrationStatus(date, userTaskInfo));
    }));
  })))));
}

_s2(App, "LKa2GoQPnhe2gLZt0KYyKyX5FwI=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c3 = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2, _c3;

$RefreshReg$(_c, "PatternRegistrationStatus");
$RefreshReg$(_c2, "CalendarTableCell");
$RefreshReg$(_c3, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9DYWxlbmRhcjMuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luIiwic3BhY2luZyIsInBhZGRpbmciLCJ5ZWFybW9udGgiLCJ0YWJsZUhlYWQiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaWdodCIsInVzZUNhbGVuZGFyQ2VsbFN0eWxlcyIsImNhbGVuZGFyQ2VsbCIsIndkYXkiLCJpc1RhcmdldE1vbnRoIiwicmVkIiwiYmx1ZSIsInRleHQiLCJwcmltYXJ5IiwiaXNUb2RheSIsInBpbmsiLCJnZXRDYWxlbmRhckFycmF5IiwiZGF0ZSIsInN1bmRheXMiLCJlYWNoV2Vla09mSW50ZXJ2YWwiLCJzdGFydCIsInN0YXJ0T2ZNb250aCIsImVuZCIsImVuZE9mTW9udGgiLCJtYXAiLCJzdW5kYXkiLCJlYWNoRGF5T2ZJbnRlcnZhbCIsImVuZE9mV2VlayIsImNhbGVuZGFyQ2VsbENsaWNrIiwiZGF0ZURhdGEiLCJkaXNwYXRjaCIsImNob2ljZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiY29uc29sZSIsImxvZyIsImNhbGVuZGFyUGF0dGVyblJlZ2lzdGVyIiwiUGF0dGVyblJlZ2lzdHJhdGlvblN0YXR1cyIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwiUGF0dGVybklkIiwiQ2FsZW5kYXJUYWJsZUNlbGwiLCJwcm9wcyIsImtleSIsImNoaWxkcmVuIiwib3RoZXIiLCJjbGFzc2VzIiwiQXBwIiwidXNlU3RhdGUiLCJEYXRlIiwidGFyZ2V0RGF0ZSIsInNldFRhcmdldERhdGUiLCJ0b2RheSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwic3ViTW9udGhzIiwiYWRkTW9udGhzIiwiZm9ybWF0IiwiaGVhZCIsIndlZWtSb3ciLCJyb3dOdW0iLCJpbmRleCIsImdldERheSIsImlzU2FtZU1vbnRoIiwiaXNTYW1lRGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxTQUFLLEVBQUU7QUFDSEMsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLEVBQWpCLENBREw7QUFFSEMsYUFBTyxFQUFFSixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBRk4sS0FEOEI7QUFLckNFLGFBQVMsRUFBRTtBQUNQSCxZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkI7QUFERCxLQUwwQjtBQVFyQ0csYUFBUyxFQUFFO0FBQ1BDLFdBQUssRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDLFlBRHhCO0FBRVBDLHFCQUFlLEVBQUVYLEtBQUssQ0FBQ1EsT0FBTixDQUFjQyxTQUFkLENBQXdCRztBQUZsQztBQVIwQixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQWNBLElBQU1DLHFCQUFxQixHQUFHZCw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2pEYyxnQkFBWSxFQUFFO0FBQ1ZQLFdBQUssRUFBRSxxQkFBNkI7QUFBQSxZQUExQlEsSUFBMEIsUUFBMUJBLElBQTBCO0FBQUEs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Qix5QkFBeUIsQ0FDdEJ2QixJQURzQixFQUV0QndCLFlBRnNCLENBZjlCLENBRFM7QUFBQSxLQUFaLENBREwsQ0FEVTtBQUFBLEdBQWIsQ0FETCxDQWhESixDQXRDSixDQUZKLENBREo7QUF5SEg7O0lBaklRUyxHO1VBRVczRCxTLEVBR0NpRSx1RCxFQUNRQyx1RDs7O01BTnBCUCxHO0FBbUlNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWxlbmRhci4wZGRlMGYxMzhkZDgwOWM2ODVjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBjYWxlbmRhclBhdHRlcm5SZWdpc3RlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcclxuaW1wb3J0IGdldERhdGUgZnJvbSBcImRhdGUtZm5zL2dldERhdGVcIjtcclxuaW1wb3J0IGdldERheSBmcm9tIFwiZGF0ZS1mbnMvZ2V0RGF5XCI7XHJcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSBcImRhdGUtZm5zL2lzU2FtZURheVwiO1xyXG5pbXBvcnQgZWFjaERheU9mSW50ZXJ2YWwgZnJvbSBcImRhdGUtZm5zL2VhY2hEYXlPZkludGVydmFsXCI7XHJcbmltcG9ydCBlbmRPZldlZWsgZnJvbSBcImRhdGUtZm5zL2VuZE9mV2Vla1wiO1xyXG5pbXBvcnQgZWFjaFdlZWtPZkludGVydmFsIGZyb20gXCJkYXRlLWZucy9lYWNoV2Vla09mSW50ZXJ2YWxcIjtcclxuaW1wb3J0IGFkZE1vbnRocyBmcm9tIFwiZGF0ZS1mbnMvYWRkTW9udGhzXCI7XHJcbmltcG9ydCBzdWJNb250aHMgZnJvbSBcImRhdGUtZm5zL3N1Yk1vbnRoc1wiO1xyXG5pbXBvcnQgc3RhcnRPZk1vbnRoIGZyb20gXCJkYXRlLWZucy9zdGFydE9mTW9udGhcIjtcclxuaW1wb3J0IGVuZE9mTW9udGggZnJvbSBcImRhdGUtZm5zL2VuZE9mTW9udGhcIjtcclxuaW1wb3J0IGlzU2FtZU1vbnRoIGZyb20gXCJkYXRlLWZucy9pc1NhbWVNb250aFwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IGJsdWUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlXCI7XHJcbmltcG9ydCBwaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcGlua1wiO1xyXG5pbXBvcnQgcmVkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDUsIDEwKSxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDUsIDUpLFxyXG4gICAgfSxcclxuICAgIHllYXJtb250aDoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwLCAxLCAwKSxcclxuICAgIH0sXHJcbiAgICB0YWJsZUhlYWQ6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCB1c2VDYWxlbmRhckNlbGxTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGNhbGVuZGFyQ2VsbDoge1xyXG4gICAgICAgIGNvbG9yOiAoeyB3ZGF5LCBpc1RhcmdldE1vbnRoIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzVGFyZ2V0TW9udGgpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAod2RheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogLy8gU3VuZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWRbNTAwXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IC8vIFNhdHVyZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBibHVlWzUwMF07XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gcHJldmlvdXMgb3IgbmV4dCBtb250aFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh3ZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiAvLyBTdW5kYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZFsyMDBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogLy8gU2F0dXJkYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJsdWVbMjAwXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAoeyBpc1RvZGF5IH0pID0+IChpc1RvZGF5ID8gcGlua1s1MF0gOiBcInRyYW5zcGFyZW50XCIpLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgZ2V0Q2FsZW5kYXJBcnJheSA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCBzdW5kYXlzID0gZWFjaFdlZWtPZkludGVydmFsKHtcclxuICAgICAgICBzdGFydDogc3RhcnRPZk1vbnRoKGRhdGUpLFxyXG4gICAgICAgIGVuZDogZW5kT2ZNb250aChkYXRlKSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHN1bmRheXMubWFwKChzdW5kYXkpID0+XHJcbiAgICAgICAgZWFjaERheU9mSW50ZXJ2YWwoeyBzdGFydDogc3VuZGF5LCBlbmQ6IGVuZE9mV2VlayhzdW5kYXkpIH0pXHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgY2FsZW5kYXJDZWxsQ2xpY2sgPSAoZGF0ZURhdGEsIGRpc3BhdGNoLCBjaG9pY2UpID0+ICgpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBkYXRlRGF0YS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBkYXRlRGF0YS5nZXRNb250aCgpICsgMTtcclxuICAgIGNvbnN0IGRhdGUgPSBkYXRlRGF0YS5nZXREYXRlKCk7XHJcbiAgICBjb25zb2xlLmxvZygneWVhcicpO1xyXG4gICAgY29uc29sZS5sb2coeWVhcik7XHJcbiAgICBjb25zb2xlLmxvZygnbW9udGgnKTtcclxuICAgIGNvbnNvbGUubG9nKG1vbnRoKTtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRlJyk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRlKTtcclxuICAgIGRpc3BhdGNoKGNhbGVuZGFyUGF0dGVyblJlZ2lzdGVyKFt5ZWFyLCBtb250aCwgZGF0ZSwgY2hvaWNlXSkpO1xyXG59O1xyXG5cclxuLy8g44Kr44Os44Oz44OA44O85qyE44Gr6Kit5a6a44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgpLooajnpLrjgZXjgZvjgovjgZ/jgoHjga7plqLmlbBcclxuZnVuY3Rpb24gUGF0dGVyblJlZ2lzdHJhdGlvblN0YXR1cyhkYXRlRGF0YSwgdXNlclRhc2tJbmZvKSB7XHJcbiAgICBjb25zdCB5ZWFyID0gZGF0ZURhdGEuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gZGF0ZURhdGEuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBjb25zdCBkYXRlID0gZGF0ZURhdGEuZ2V0RGF0ZSgpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwi44OB44Kn44OD44Kv77yaXCIgKyBkYXRlICsgXCI6XCIgKyBtb250aCArIFwiOlwiICsgeWVhcik7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCLjg4Hjgqfjg4Pjgq8yXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlclRhc2tJbmZvLmNhbGVuZGFyW3llYXJdKTtcclxuICAgIGlmIChbeWVhcl0gaW4gdXNlclRhc2tJbmZvLmNhbGVuZGFyKSB7XHJcbiAgICAgICAgaWYgKFttb250aF0gaW4gdXNlclRhc2tJbmZvLmNhbGVuZGFyW3llYXJdKSB7XHJcbiAgICAgICAgICAgIGlmIChbZGF0ZV0gaW4gdXNlclRhc2tJbmZvLmNhbGVuZGFyW3llYXJdW21vbnRoXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RheScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeWVhciArIFwiL1wiICsgbW9udGggKyBcIi9cIiArIGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXR0ZXJuSWTvvJpcIiArIHVzZXJUYXNrSW5mby5jYWxlbmRhclt5ZWFyXVttb250aF1bZGF0ZV0uUGF0dGVybklkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyVGFza0luZm8uY2FsZW5kYXJbeWVhcl1bbW9udGhdW2RhdGVdLlBhdHRlcm5JZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKFwi44Gq44GX77yaXCIgKyBkYXRlKTtcclxuICAgIHJldHVybiBcIsOXXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENhbGVuZGFyVGFibGVDZWxsKHByb3BzKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIHdkYXksXHJcbiAgICAgICAgaXNUYXJnZXRNb250aCxcclxuICAgICAgICBpc1RvZGF5LFxyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgIGRhdGVEYXRhLFxyXG4gICAgICAgIGRpc3BhdGNoLFxyXG4gICAgICAgIGNob2ljZSxcclxuICAgICAgICAuLi5vdGhlclxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZUNhbGVuZGFyQ2VsbFN0eWxlcyhwcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhbGVuZGFyQ2VsbH1cclxuICAgICAgICAgICAgey4uLm90aGVyfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjYWxlbmRhckNlbGxDbGljayhkYXRlRGF0YSwgZGlzcGF0Y2gsIGNob2ljZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcclxuICAgIGNvbnN0IFt0YXJnZXREYXRlLCBzZXRUYXJnZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgY2FsZW5kYXIgPSBnZXRDYWxlbmRhckFycmF5KHRhcmdldERhdGUpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0RGF0ZShzdWJNb250aHModGFyZ2V0RGF0ZSwgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWJjeOBruaciFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldERhdGUobmV3IERhdGUoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS7iuaciFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0RGF0ZShhZGRNb250aHModGFyZ2V0RGF0ZSwgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOasoeOBruaciFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy55ZWFybW9udGh9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdCh0YXJnZXREYXRlLCBcInnlubRN5pyIXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaXpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaGVhZDogY2xhc3Nlcy50YWJsZUhlYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnIhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGhlYWQ6IGNsYXNzZXMudGFibGVIZWFkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg54GrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOawtFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaGVhZDogY2xhc3Nlcy50YWJsZUhlYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGhlYWQ6IGNsYXNzZXMudGFibGVIZWFkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6YeRXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2FsZW5kYXJDZWxsQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWcn1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhbGVuZGFyLm1hcCgod2Vla1Jvdywgcm93TnVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3dOdW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3ZWVrUm93Lm1hcCgoZGF0ZSxpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Z2V0RGF5KGRhdGUrXCJfXCIraW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2RheT17Z2V0RGF5KGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUYXJnZXRNb250aD17aXNTYW1lTW9udGgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RheT17aXNTYW1lRGF5KGRhdGUsIHRvZGF5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVEYXRhPXtkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlPXtwcm9wcy5jaG9pY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UGF0dGVyblJlZ2lzdHJhdGlvblN0YXR1cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJUYXNrSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxlbmRhclRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==