webpackHotUpdate_N_E("pages/Pattern",{

/***/ "./src/components/test/Calendar3.jsx":
/*!*******************************************!*\
  !*** ./src/components/test/Calendar3.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_getDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/getDate */ "./node_modules/date-fns/esm/getDate/index.js");
/* harmony import */ var date_fns_getDay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/getDay */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/isSameDay */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns_eachDayOfInterval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/eachDayOfInterval */ "./node_modules/date-fns/esm/eachDayOfInterval/index.js");
/* harmony import */ var date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/endOfWeek */ "./node_modules/date-fns/esm/endOfWeek/index.js");
/* harmony import */ var date_fns_eachWeekOfInterval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/eachWeekOfInterval */ "./node_modules/date-fns/esm/eachWeekOfInterval/index.js");
/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/addMonths */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var date_fns_subMonths__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/subMonths */ "./node_modules/date-fns/esm/subMonths/index.js");
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/startOfMonth */ "./node_modules/date-fns/esm/startOfMonth/index.js");
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/endOfMonth */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/isSameMonth */ "./node_modules/date-fns/esm/isSameMonth/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/colors/pink */ "./node_modules/@material-ui/core/colors/pink.js");
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_26__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\test\\Calendar3.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["makeStyles"])(function (theme) {
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
var useCalendarCellStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["makeStyles"])(function (theme) {
  return {
    calendarCell: {
      color: function color(_ref) {
        var wday = _ref.wday,
            isTargetMonth = _ref.isTargetMonth;

        if (isTargetMonth) {
          switch (wday) {
            case 0:
              // Sunday
              return _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_26___default.a[500];

            case 6:
              // Saturday
              return _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_24___default.a[500];

            default:
              return theme.palette.text.primary;
          }
        } else {
          // previous or next month
          switch (wday) {
            case 0:
              // Sunday
              return _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_26___default.a[200];

            case 6:
              // Saturday
              return _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_24___default.a[200];

            default:
              return theme.palette.text.secondary;
          }
        }
      },
      backgroundColor: function backgroundColor(_ref2) {
        var isToday = _ref2.isToday;
        return isToday ? _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_25___default.a[50] : "transparent";
      }
    }
  };
});

var getCalendarArray = function getCalendarArray(date) {
  var sundays = Object(date_fns_eachWeekOfInterval__WEBPACK_IMPORTED_MODULE_7__["default"])({
    start: Object(date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_10__["default"])(date),
    end: Object(date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_11__["default"])(date)
  });
  return sundays.map(function (sunday) {
    return Object(date_fns_eachDayOfInterval__WEBPACK_IMPORTED_MODULE_5__["default"])({
      start: sunday,
      end: Object(date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_6__["default"])(sunday)
    });
  });
};

var calendarCellClick = function calendarCellClick(isToday) {
  console.log('isToday' + isToday);
}; // function CalendarTableCell(props) {
//   const {wday, isTargetMonth, isToday, children, ...other} = props
//   const classes = useCalendarCellStyles(props)
//   return (<TableCell className={classes.calendarCell} {...other} onClick={calendarCellClick(isToday)}>{children}</TableCell>)
// }


function App() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date()),
      targetDate = _useState[0],
      setTargetDate = _useState[1];

  var classes = useStyles();
  var calendar = getCalendarArray(targetDate);
  var today = new Date();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
    container: true,
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(Object(date_fns_subMonths__WEBPACK_IMPORTED_MODULE_9__["default"])(targetDate, 1));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "\u524D\u306E\u6708")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(new Date());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "\u4ECA\u6708")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(Object(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8__["default"])(targetDate, 1));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "\u6B21\u306E\u6708"))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], {
    variant: "h4",
    align: "center",
    className: classes.yearmonth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, Object(date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(targetDate, 'y年M月')), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_22__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "\u65E5"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, "\u6708"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, "\u706B"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, "\u6C34"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, "\u6728"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, "\u91D1"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, "\u571F"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, calendar.map(function (weekRow, rowNum) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_22__["default"], {
      key: rowNum,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 15
      }
    }, weekRow.map(function (date) {
      return __jsx(CalendarTableCell, {
        key: Object(date_fns_getDay__WEBPACK_IMPORTED_MODULE_3__["default"])(date),
        wday: Object(date_fns_getDay__WEBPACK_IMPORTED_MODULE_3__["default"])(date),
        isTargetMonth: Object(date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_12__["default"])(date, targetDate),
        isToday: Object(date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_4__["default"])(date, today),
        align: "center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 19
        }
      }, Object(date_fns_getDate__WEBPACK_IMPORTED_MODULE_2__["default"])(date));
    }));
  })))));
}

_s(App, "Cn9UaDz2wuJYUbBeLSWyQehOUKg=", false, function () {
  return [useStyles];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9DYWxlbmRhcjMuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luIiwic3BhY2luZyIsInBhZGRpbmciLCJ5ZWFybW9udGgiLCJ0YWJsZUhlYWQiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaWdodCIsInVzZUNhbGVuZGFyQ2VsbFN0eWxlcyIsImNhbGVuZGFyQ2VsbCIsIndkYXkiLCJpc1RhcmdldE1vbnRoIiwicmVkIiwiYmx1ZSIsInRleHQiLCJwcmltYXJ5IiwiaXNUb2RheSIsInBpbmsiLCJnZXRDYWxlbmRhckFycmF5IiwiZGF0ZSIsInN1bmRheXMiLCJlYWNoV2Vla09mSW50ZXJ2YWwiLCJzdGFydCIsInN0YXJ0T2ZNb250aCIsImVuZCIsImVuZE9mTW9udGgiLCJtYXAiLCJzdW5kYXkiLCJlYWNoRGF5T2ZJbnRlcnZhbCIsImVuZE9mV2VlayIsImNhbGVuZGFyQ2VsbENsaWNrIiwiY29uc29sZSIsImxvZyIsIkFwcCIsInVzZVN0YXRlIiwiRGF0ZSIsInRhcmdldERhdGUiLCJzZXRUYXJnZXREYXRlIiwiY2xhc3NlcyIsImNhbGVuZGFyIiwidG9kYXkiLCJzdWJNb250aHMiLCJhZGRNb250aHMiLCJmb3JtYXQiLCJoZWFkIiwid2Vla1JvdyIsInJvd051bSIsImdldERheSIsImlzU2FtZU1vbnRoIiwiaXNTYW1lRGF5IiwiZ2V0RGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FBbEQ7QUFBMEQscUJBQWEsRUFBRTZCLHFFQUFXLENBQUM3QixJQUFELEVBQU9pQixVQUFQLENBQXBGO0FBQXdHLGVBQU8sRUFBRWEsa0VBQVMsQ0FBQzlCLElBQUQsRUFBT3FCLEtBQVAsQ0FBMUg7QUFBeUksYUFBSyxFQUFDLFFBQS9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR1UsZ0VBQU8sQ0FBQy9CLElBQUQsQ0FEVixDQURlO0FBQUEsS0FBaEIsQ0FESCxDQURZO0FBQUEsR0FBYixDQURILENBWkYsQ0FiRixDQUZGLENBREY7QUEyQ0Q7O0dBakRRYyxHO1VBRVN4QyxTOzs7S0FGVHdDLEc7QUFtRE1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1BhdHRlcm4uYTYwMzc0NWNiZmM0OWUyYzkwMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9ICBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnXHJcbmltcG9ydCBnZXREYXRlIGZyb20gJ2RhdGUtZm5zL2dldERhdGUnXHJcbmltcG9ydCBnZXREYXkgZnJvbSAnZGF0ZS1mbnMvZ2V0RGF5J1xyXG5pbXBvcnQgaXNTYW1lRGF5IGZyb20gJ2RhdGUtZm5zL2lzU2FtZURheSdcclxuaW1wb3J0IGVhY2hEYXlPZkludGVydmFsIGZyb20gJ2RhdGUtZm5zL2VhY2hEYXlPZkludGVydmFsJ1xyXG5pbXBvcnQgZW5kT2ZXZWVrIGZyb20gJ2RhdGUtZm5zL2VuZE9mV2VlaydcclxuaW1wb3J0IGVhY2hXZWVrT2ZJbnRlcnZhbCBmcm9tICdkYXRlLWZucy9lYWNoV2Vla09mSW50ZXJ2YWwnXHJcbmltcG9ydCBhZGRNb250aHMgZnJvbSAnZGF0ZS1mbnMvYWRkTW9udGhzJ1xyXG5pbXBvcnQgc3ViTW9udGhzIGZyb20gJ2RhdGUtZm5zL3N1Yk1vbnRocydcclxuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zdGFydE9mTW9udGgnXHJcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL2VuZE9mTW9udGgnXHJcbmltcG9ydCBpc1NhbWVNb250aCBmcm9tICdkYXRlLWZucy9pc1NhbWVNb250aCdcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcidcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknXHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJ1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCdcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93J1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSdcclxuaW1wb3J0IHBpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3BpbmsnXHJcbmltcG9ydCByZWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDUsIDEwKSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNSwgNSksXHJcbiAgfSxcclxuICB5ZWFybW9udGg6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwLCAxLCAwKSxcclxuICB9LFxyXG4gIHRhYmxlSGVhZDoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCB1c2VDYWxlbmRhckNlbGxTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgY2FsZW5kYXJDZWxsOiB7XHJcbiAgICBjb2xvcjogKHt3ZGF5LCBpc1RhcmdldE1vbnRofSkgPT4ge1xyXG4gICAgICBpZihpc1RhcmdldE1vbnRoKSB7XHJcbiAgICAgICAgc3dpdGNoKHdkYXkpIHtcclxuICAgICAgICAgIGNhc2UgMDogLy8gU3VuZGF5XHJcbiAgICAgICAgICAgIHJldHVybiByZWRbNTAwXVxyXG4gICAgICAgICAgY2FzZSA2OiAvLyBTYXR1cmRheVxyXG4gICAgICAgICAgICByZXR1cm4gYmx1ZVs1MDBdXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcHJldmlvdXMgb3IgbmV4dCBtb250aFxyXG4gICAgICAgIHN3aXRjaCh3ZGF5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy8gU3VuZGF5XHJcbiAgICAgICAgICAgIHJldHVybiByZWRbMjAwXVxyXG4gICAgICAgICAgY2FzZSA2OiAvLyBTYXR1cmRheVxyXG4gICAgICAgICAgICByZXR1cm4gYmx1ZVsyMDBdXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogKHtpc1RvZGF5fSkgPT5cclxuICAgICAgaXNUb2RheSA/IHBpbmtbNTBdIDogXCJ0cmFuc3BhcmVudFwiXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBnZXRDYWxlbmRhckFycmF5ID0gZGF0ZSA9PiB7XHJcbiAgY29uc3Qgc3VuZGF5cyA9IGVhY2hXZWVrT2ZJbnRlcnZhbCh7XHJcbiAgICBzdGFydDogc3RhcnRPZk1vbnRoKGRhdGUpLFxyXG4gICAgZW5kOiBlbmRPZk1vbnRoKGRhdGUpXHJcbiAgfSlcclxuICByZXR1cm4gc3VuZGF5cy5tYXAoc3VuZGF5ID0+XHJcbiAgICBlYWNoRGF5T2ZJbnRlcnZhbCh7c3RhcnQ6IHN1bmRheSwgZW5kOiBlbmRPZldlZWsoc3VuZGF5KX0pXHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBjYWxlbmRhckNlbGxDbGljaz0oaXNUb2RheSk9PntcclxuICBjb25zb2xlLmxvZygnaXNUb2RheScraXNUb2RheSk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIENhbGVuZGFyVGFibGVDZWxsKHByb3BzKSB7XHJcbi8vICAgY29uc3Qge3dkYXksIGlzVGFyZ2V0TW9udGgsIGlzVG9kYXksIGNoaWxkcmVuLCAuLi5vdGhlcn0gPSBwcm9wc1xyXG4vLyAgIGNvbnN0IGNsYXNzZXMgPSB1c2VDYWxlbmRhckNlbGxTdHlsZXMocHJvcHMpXHJcbi8vICAgcmV0dXJuICg8VGFibGVDZWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYWxlbmRhckNlbGx9IHsuLi5vdGhlcn0gb25DbGljaz17Y2FsZW5kYXJDZWxsQ2xpY2soaXNUb2RheSl9PntjaGlsZHJlbn08L1RhYmxlQ2VsbD4pXHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBbdGFyZ2V0RGF0ZSwgc2V0VGFyZ2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKVxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IGNhbGVuZGFyID0gZ2V0Q2FsZW5kYXJBcnJheSh0YXJnZXREYXRlKVxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXREYXRlKHN1Yk1vbnRocyh0YXJnZXREYXRlLCAxKSl9PuWJjeOBruaciDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXREYXRlKG5ldyBEYXRlKCkpfT7ku4rmnIg8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4gc2V0VGFyZ2V0RGF0ZShhZGRNb250aHModGFyZ2V0RGF0ZSwgMSkpfT7mrKHjga7mnIg8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMueWVhcm1vbnRofT57Zm9ybWF0KHRhcmdldERhdGUsICd55bm0TeaciCcpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+5pelPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+5pyIPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+54GrPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+5rC0PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+5pyoPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+6YeRPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+5ZyfPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgIHtjYWxlbmRhci5tYXAoKHdlZWtSb3csIHJvd051bSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvd051bX0+XHJcbiAgICAgICAgICAgICAgICB7d2Vla1Jvdy5tYXAoZGF0ZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDYWxlbmRhclRhYmxlQ2VsbCBrZXk9e2dldERheShkYXRlKX0gd2RheT17Z2V0RGF5KGRhdGUpfSBpc1RhcmdldE1vbnRoPXtpc1NhbWVNb250aChkYXRlLCB0YXJnZXREYXRlKX0gaXNUb2RheT17aXNTYW1lRGF5KGRhdGUsIHRvZGF5KX0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0RGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgPC9DYWxlbmRhclRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwIl0sInNvdXJjZVJvb3QiOiIifQ==