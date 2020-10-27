webpackHotUpdate_N_E("pages/Pattern",{

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
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_getDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/getDate */ "./node_modules/date-fns/esm/getDate/index.js");
/* harmony import */ var date_fns_getDay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/getDay */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/isSameDay */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns_eachDayOfInterval__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/eachDayOfInterval */ "./node_modules/date-fns/esm/eachDayOfInterval/index.js");
/* harmony import */ var date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/endOfWeek */ "./node_modules/date-fns/esm/endOfWeek/index.js");
/* harmony import */ var date_fns_eachWeekOfInterval__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/eachWeekOfInterval */ "./node_modules/date-fns/esm/eachWeekOfInterval/index.js");
/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/addMonths */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var date_fns_subMonths__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/subMonths */ "./node_modules/date-fns/esm/subMonths/index.js");
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/startOfMonth */ "./node_modules/date-fns/esm/startOfMonth/index.js");
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns/endOfMonth */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns/isSameMonth */ "./node_modules/date-fns/esm/isSameMonth/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/colors/pink */ "./node_modules/@material-ui/core/colors/pink.js");
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_29__);



var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\test\\Calendar3.jsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["makeStyles"])(function (theme) {
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
var useCalendarCellStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["makeStyles"])(function (theme) {
  return {
    calendarCell: {
      color: function color(_ref) {
        var wday = _ref.wday,
            isTargetMonth = _ref.isTargetMonth;

        if (isTargetMonth) {
          switch (wday) {
            case 0:
              // Sunday
              return _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_29___default.a[500];

            case 6:
              // Saturday
              return _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_27___default.a[500];

            default:
              return theme.palette.text.primary;
          }
        } else {
          // previous or next month
          switch (wday) {
            case 0:
              // Sunday
              return _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_29___default.a[200];

            case 6:
              // Saturday
              return _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_27___default.a[200];

            default:
              return theme.palette.text.secondary;
          }
        }
      },
      backgroundColor: function backgroundColor(_ref2) {
        var isToday = _ref2.isToday;
        return isToday ? _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_28___default.a[50] : "transparent";
      }
    }
  };
});

var getCalendarArray = function getCalendarArray(date) {
  var sundays = Object(date_fns_eachWeekOfInterval__WEBPACK_IMPORTED_MODULE_10__["default"])({
    start: Object(date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_13__["default"])(date),
    end: Object(date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_14__["default"])(date)
  });
  return sundays.map(function (sunday) {
    return Object(date_fns_eachDayOfInterval__WEBPACK_IMPORTED_MODULE_8__["default"])({
      start: sunday,
      end: Object(date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_9__["default"])(sunday)
    });
  });
};

function calendarCellClick(_date, dispatch, choice) {
  return function () {
    console.log("date:" + date);
    console.log("year:" + date.getFullYear());
    var year = date.getFullYear();
    console.log("month:" + (date.getMonth() + 1));
    var month = date.getMonth() + 1;
    console.log("date:" + date.getDate());
    var date = date.getDate();
    dispatch(calendarPatternRegster([year, month, date, choice]));
  };
}

function CalendarTableCell(props) {
  _s();

  var key = props.key,
      wday = props.wday,
      isTargetMonth = props.isTargetMonth,
      isToday = props.isToday,
      children = props.children,
      date = props.date,
      dispatch = props.dispatch,
      choice = props.choice,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["key", "wday", "isTargetMonth", "isToday", "children", "date", "dispatch", "choice"]);

  var classes = useCalendarCellStyles(props);
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.calendarCell
  }, other, {
    onClick: calendarCellClick(date, dispatch, choice),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }), children);
}

_s(CalendarTableCell, "ukLd6tf9xGCRm8TMTZd5+yrbOjY=", false, function () {
  return [useCalendarCellStyles];
});

_c = CalendarTableCell;

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
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
    container: true,
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(Object(date_fns_subMonths__WEBPACK_IMPORTED_MODULE_12__["default"])(targetDate, 1));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, "\u524D\u306E\u6708")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(new Date());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, "\u4ECA\u6708")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(Object(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_11__["default"])(targetDate, 1));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }, "\u6B21\u306E\u6708"))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_26__["default"], {
    variant: "h4",
    align: "center",
    className: classes.yearmonth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, Object(date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(targetDate, "y年M月")), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_24__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_25__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 29
    }
  }, "\u65E5"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 29
    }
  }, "\u6708"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 29
    }
  }, "\u706B"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 29
    }
  }, "\u6C34"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 29
    }
  }, "\u6728"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 29
    }
  }, "\u91D1"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__["default"], {
    align: "center",
    onClick: calendarCellClick,
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 29
    }
  }, "\u571F"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_22__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 21
    }
  }, calendar.map(function (weekRow, rowNum) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: rowNum,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 29
      }
    }, weekRow.map(function (date) {
      return __jsx(CalendarTableCell, {
        key: Object(date_fns_getDay__WEBPACK_IMPORTED_MODULE_6__["default"])(date),
        wday: Object(date_fns_getDay__WEBPACK_IMPORTED_MODULE_6__["default"])(date),
        isTargetMonth: Object(date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_15__["default"])(date, targetDate),
        isToday: Object(date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_7__["default"])(date, today),
        date: date,
        dispatch: dispatch,
        choice: props.choice,
        align: "center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 37
        }
      }, Object(date_fns_getDate__WEBPACK_IMPORTED_MODULE_5__["default"])(date));
    }));
  })))));
}

_s2(App, "5G3dfyTvZ8y98bCsE8fgNe9dFos=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c2 = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2;

$RefreshReg$(_c, "CalendarTableCell");
$RefreshReg$(_c2, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9DYWxlbmRhcjMuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luIiwic3BhY2luZyIsInBhZGRpbmciLCJ5ZWFybW9udGgiLCJ0YWJsZUhlYWQiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaWdodCIsInVzZUNhbGVuZGFyQ2VsbFN0eWxlcyIsImNhbGVuZGFyQ2VsbCIsIndkYXkiLCJpc1RhcmdldE1vbnRoIiwicmVkIiwiYmx1ZSIsInRleHQiLCJwcmltYXJ5IiwiaXNUb2RheSIsInBpbmsiLCJnZXRDYWxlbmRhckFycmF5IiwiZGF0ZSIsInN1bmRheXMiLCJlYWNoV2Vla09mSW50ZXJ2YWwiLCJzdGFydCIsInN0YXJ0T2ZNb250aCIsImVuZCIsImVuZE9mTW9udGgiLCJtYXAiLCJzdW5kYXkiLCJlYWNoRGF5T2ZJbnRlcnZhbCIsImVuZE9mV2VlayIsImNhbGVuZGFyQ2VsbENsaWNrIiwiX2RhdGUiLCJkaXNwYXRjaCIsImNob2ljZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRGdWxsWWVhciIsInllYXIiLCJnZXRNb250aCIsIm1vbnRoIiwiZ2V0RGF0ZSIsImNhbGVuZGFyUGF0dGVyblJlZ3N0ZXIiLCJDYWxlbmRhclRhYmxlQ2VsbCIsInByb3BzIiwia2V5IiwiY2hpbGRyZW4iLCJvdGhlciIsImNsYXNzZXMiLCJBcHAiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJ0YXJnZXREYXRlIiwic2V0VGFyZ2V0RGF0ZSIsImNhbGVuZGFyIiwidG9kYXkiLCJ1c2VEaXNwYXRjaCIsInN1Yk1vbnRocyIsImFkZE1vbnRocyIsImZvcm1hdCIsImhlYWQiLCJ3ZWVrUm93Iiwicm93TnVtIiwiZ2V0RGF5IiwiaXNTYW1lTW9udGgiLCJpc1NhbWVEYXkiXSwibWFwcGluZ3Mi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QUU2QixpQkFGYjtBQUdJLFdBQU8sRUFBRTtBQUFFNkIsVUFBSSxFQUFFWixPQUFPLENBQUM5QztBQUFoQixLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQ0osQ0FESixDQURKLEVBZ0RJLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLb0QsUUFBUSxDQUFDM0IsR0FBVCxDQUFhLFVBQUNrQyxPQUFELEVBQVVDLE1BQVY7QUFBQSxXQUNWLE1BQUMsbUVBQUQ7QUFBVSxTQUFHLEVBQUVBLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLRCxPQUFPLENBQUNsQyxHQUFSLENBQVksVUFBQ1AsSUFBRDtBQUFBLGFBQ1QsTUFBQyxpQkFBRDtBQUNJLFdBQUcsRUFBRTJDLCtEQUFNLENBQUMzQyxJQUFELENBRGY7QUFFSSxZQUFJLEVBQUUyQywrREFBTSxDQUFDM0MsSUFBRCxDQUZoQjtBQUdJLHFCQUFhLEVBQUU0QyxxRUFBVyxDQUN0QjVDLElBRHNCLEVBRXRCZ0MsVUFGc0IsQ0FIOUI7QUFPSSxlQUFPLEVBQUVhLGtFQUFTLENBQUM3QyxJQUFELEVBQU9tQyxLQUFQLENBUHRCO0FBUUksWUFBSSxFQUFFbkMsSUFSVjtBQVNJLGdCQUFRLEVBQUVhLFFBVGQ7QUFVSSxjQUFNLEVBQUVXLEtBQUssQ0FBQ1YsTUFWbEI7QUFXSSxhQUFLLEVBQUMsUUFYVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBYUtPLGdFQUFPLENBQUNyQixJQUFELENBYlosQ0FEUztBQUFBLEtBQVosQ0FETCxDQURVO0FBQUEsR0FBYixDQURMLENBaERKLENBdENKLENBRkosQ0FESjtBQW9ISDs7SUEzSFE2QixHO1VBRVd2RCxTLEVBR0M4RCx1RDs7O01BTFpQLEc7QUE2SE1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1BhdHRlcm4uM2JhNGEzMjk2MTYwMTJkZGY2M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XHJcbmltcG9ydCBnZXREYXRlIGZyb20gXCJkYXRlLWZucy9nZXREYXRlXCI7XHJcbmltcG9ydCBnZXREYXkgZnJvbSBcImRhdGUtZm5zL2dldERheVwiO1xyXG5pbXBvcnQgaXNTYW1lRGF5IGZyb20gXCJkYXRlLWZucy9pc1NhbWVEYXlcIjtcclxuaW1wb3J0IGVhY2hEYXlPZkludGVydmFsIGZyb20gXCJkYXRlLWZucy9lYWNoRGF5T2ZJbnRlcnZhbFwiO1xyXG5pbXBvcnQgZW5kT2ZXZWVrIGZyb20gXCJkYXRlLWZucy9lbmRPZldlZWtcIjtcclxuaW1wb3J0IGVhY2hXZWVrT2ZJbnRlcnZhbCBmcm9tIFwiZGF0ZS1mbnMvZWFjaFdlZWtPZkludGVydmFsXCI7XHJcbmltcG9ydCBhZGRNb250aHMgZnJvbSBcImRhdGUtZm5zL2FkZE1vbnRoc1wiO1xyXG5pbXBvcnQgc3ViTW9udGhzIGZyb20gXCJkYXRlLWZucy9zdWJNb250aHNcIjtcclxuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tIFwiZGF0ZS1mbnMvc3RhcnRPZk1vbnRoXCI7XHJcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gXCJkYXRlLWZucy9lbmRPZk1vbnRoXCI7XHJcbmltcG9ydCBpc1NhbWVNb250aCBmcm9tIFwiZGF0ZS1mbnMvaXNTYW1lTW9udGhcIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBibHVlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZVwiO1xyXG5pbXBvcnQgcGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3BpbmtcIjtcclxuaW1wb3J0IHJlZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBwYXBlcjoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg1LCAxMCksXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg1LCA1KSxcclxuICAgIH0sXHJcbiAgICB5ZWFybW9udGg6IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgMCwgMSwgMCksXHJcbiAgICB9LFxyXG4gICAgdGFibGVIZWFkOiB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0LFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgdXNlQ2FsZW5kYXJDZWxsU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBjYWxlbmRhckNlbGw6IHtcclxuICAgICAgICBjb2xvcjogKHsgd2RheSwgaXNUYXJnZXRNb250aCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1RhcmdldE1vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHdkYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IC8vIFN1bmRheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVkWzUwMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiAvLyBTYXR1cmRheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmx1ZVs1MDBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzIG9yIG5leHQgbW9udGhcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAod2RheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogLy8gU3VuZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWRbMjAwXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IC8vIFNhdHVyZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBibHVlWzIwMF07XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogKHsgaXNUb2RheSB9KSA9PiAoaXNUb2RheSA/IHBpbmtbNTBdIDogXCJ0cmFuc3BhcmVudFwiKSxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IGdldENhbGVuZGFyQXJyYXkgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3Qgc3VuZGF5cyA9IGVhY2hXZWVrT2ZJbnRlcnZhbCh7XHJcbiAgICAgICAgc3RhcnQ6IHN0YXJ0T2ZNb250aChkYXRlKSxcclxuICAgICAgICBlbmQ6IGVuZE9mTW9udGgoZGF0ZSksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzdW5kYXlzLm1hcCgoc3VuZGF5KSA9PlxyXG4gICAgICAgIGVhY2hEYXlPZkludGVydmFsKHsgc3RhcnQ6IHN1bmRheSwgZW5kOiBlbmRPZldlZWsoc3VuZGF5KSB9KVxyXG4gICAgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNhbGVuZGFyQ2VsbENsaWNrKF9kYXRlLCBkaXNwYXRjaCwgY2hvaWNlKSB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0ZTpcIiArIGRhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwieWVhcjpcIiArIGRhdGUuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vbnRoOlwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKTtcclxuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRlOlwiICsgZGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICBkaXNwYXRjaChjYWxlbmRhclBhdHRlcm5SZWdzdGVyKFt5ZWFyLCBtb250aCwgZGF0ZSwgY2hvaWNlXSkpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2FsZW5kYXJUYWJsZUNlbGwocHJvcHMpIHtcclxuICAgIGNvbnN0IHsga2V5LCB3ZGF5LCBpc1RhcmdldE1vbnRoLCBpc1RvZGF5LCBjaGlsZHJlbixkYXRlLGRpc3BhdGNoLGNob2ljZSwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZUNhbGVuZGFyQ2VsbFN0eWxlcyhwcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhbGVuZGFyQ2VsbH1cclxuICAgICAgICAgICAgey4uLm90aGVyfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjYWxlbmRhckNlbGxDbGljayhkYXRlLGRpc3BhdGNoLGNob2ljZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcclxuICAgIGNvbnN0IFt0YXJnZXREYXRlLCBzZXRUYXJnZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgY2FsZW5kYXIgPSBnZXRDYWxlbmRhckFycmF5KHRhcmdldERhdGUpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0RGF0ZShzdWJNb250aHModGFyZ2V0RGF0ZSwgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWJjeOBruaciFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldERhdGUobmV3IERhdGUoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS7iuaciFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0RGF0ZShhZGRNb250aHModGFyZ2V0RGF0ZSwgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOasoeOBruaciFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy55ZWFybW9udGh9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdCh0YXJnZXREYXRlLCBcInnlubRN5pyIXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaXpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaGVhZDogY2xhc3Nlcy50YWJsZUhlYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnIhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGhlYWQ6IGNsYXNzZXMudGFibGVIZWFkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg54GrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOawtFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaGVhZDogY2xhc3Nlcy50YWJsZUhlYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGhlYWQ6IGNsYXNzZXMudGFibGVIZWFkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6YeRXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2FsZW5kYXJDZWxsQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWcn1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhbGVuZGFyLm1hcCgod2Vla1Jvdywgcm93TnVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3dOdW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3ZWVrUm93Lm1hcCgoZGF0ZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Z2V0RGF5KGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2RheT17Z2V0RGF5KGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUYXJnZXRNb250aD17aXNTYW1lTW9udGgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RheT17aXNTYW1lRGF5KGRhdGUsIHRvZGF5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9pY2U9e3Byb3BzLmNob2ljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsZW5kYXJUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=