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
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_getDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/getDate */ "./node_modules/date-fns/esm/getDate/index.js");
/* harmony import */ var date_fns_getDay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/getDay */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/isSameDay */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns_eachDayOfInterval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/eachDayOfInterval */ "./node_modules/date-fns/esm/eachDayOfInterval/index.js");
/* harmony import */ var date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/endOfWeek */ "./node_modules/date-fns/esm/endOfWeek/index.js");
/* harmony import */ var date_fns_eachWeekOfInterval__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/eachWeekOfInterval */ "./node_modules/date-fns/esm/eachWeekOfInterval/index.js");
/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/addMonths */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var date_fns_subMonths__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/subMonths */ "./node_modules/date-fns/esm/subMonths/index.js");
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/startOfMonth */ "./node_modules/date-fns/esm/startOfMonth/index.js");
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/endOfMonth */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns/isSameMonth */ "./node_modules/date-fns/esm/isSameMonth/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/colors/pink */ "./node_modules/@material-ui/core/colors/pink.js");
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_28__);



var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\test\\Calendar3.jsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__["makeStyles"])(function (theme) {
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
var useCalendarCellStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__["makeStyles"])(function (theme) {
  return {
    calendarCell: {
      color: function color(_ref) {
        var wday = _ref.wday,
            isTargetMonth = _ref.isTargetMonth;

        if (isTargetMonth) {
          switch (wday) {
            case 0:
              // Sunday
              return _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_28___default.a[500];

            case 6:
              // Saturday
              return _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_26___default.a[500];

            default:
              return theme.palette.text.primary;
          }
        } else {
          // previous or next month
          switch (wday) {
            case 0:
              // Sunday
              return _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_28___default.a[200];

            case 6:
              // Saturday
              return _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_26___default.a[200];

            default:
              return theme.palette.text.secondary;
          }
        }
      },
      backgroundColor: function backgroundColor(_ref2) {
        var isToday = _ref2.isToday;
        return isToday ? _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_27___default.a[50] : "transparent";
      }
    }
  };
});

var getCalendarArray = function getCalendarArray(date) {
  var sundays = Object(date_fns_eachWeekOfInterval__WEBPACK_IMPORTED_MODULE_9__["default"])({
    start: Object(date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_12__["default"])(date),
    end: Object(date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_13__["default"])(date)
  });
  return sundays.map(function (sunday) {
    return Object(date_fns_eachDayOfInterval__WEBPACK_IMPORTED_MODULE_7__["default"])({
      start: sunday,
      end: Object(date_fns_endOfWeek__WEBPACK_IMPORTED_MODULE_8__["default"])(sunday)
    });
  });
};

var calendarCellClick = function calendarCellClick(isToday) {
  console.log('isToday' + isToday);
};

function CalendarTableCell(props) {
  _s();

  var wday = props.wday,
      isTargetMonth = props.isTargetMonth,
      isToday = props.isToday,
      children = props.children,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["wday", "isTargetMonth", "isToday", "children"]);

  var classes = useCalendarCellStyles(props);
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.calendarCell
  }, other, {
    onClick: calendarCellClick(isToday),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }), children);
}

_s(CalendarTableCell, "ukLd6tf9xGCRm8TMTZd5+yrbOjY=", false, function () {
  return [useCalendarCellStyles];
});

_c = CalendarTableCell;

function App() {
  _s2();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date()),
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
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    container: true,
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(Object(date_fns_subMonths__WEBPACK_IMPORTED_MODULE_11__["default"])(targetDate, 1));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "\u524D\u306E\u6708")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
  }, "\u4ECA\u6708")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(Object(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_10__["default"])(targetDate, 1));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "\u6B21\u306E\u6708"))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_25__["default"], {
    variant: "h4",
    align: "center",
    className: classes.yearmonth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, Object(date_fns_format__WEBPACK_IMPORTED_MODULE_3__["default"])(targetDate, 'y年M月')), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_24__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, "\u65E5"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, "\u6708"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, "\u706B"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, "\u6C34"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, "\u6728"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, "\u91D1"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, "\u571F"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, calendar.map(function (weekRow, rowNum) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_24__["default"], {
      key: rowNum,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 15
      }
    }, weekRow.map(function (date) {
      return __jsx(CalendarTableCell, {
        key: Object(date_fns_getDay__WEBPACK_IMPORTED_MODULE_5__["default"])(date),
        wday: Object(date_fns_getDay__WEBPACK_IMPORTED_MODULE_5__["default"])(date),
        isTargetMonth: Object(date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_14__["default"])(date, targetDate),
        isToday: Object(date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_6__["default"])(date, today),
        align: "center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 19
        }
      }, Object(date_fns_getDate__WEBPACK_IMPORTED_MODULE_4__["default"])(date));
    }));
  })))));
}

_s2(App, "Cn9UaDz2wuJYUbBeLSWyQehOUKg=", false, function () {
  return [useStyles];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9DYWxlbmRhcjMuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luIiwic3BhY2luZyIsInBhZGRpbmciLCJ5ZWFybW9udGgiLCJ0YWJsZUhlYWQiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaWdodCIsInVzZUNhbGVuZGFyQ2VsbFN0eWxlcyIsImNhbGVuZGFyQ2VsbCIsIndkYXkiLCJpc1RhcmdldE1vbnRoIiwicmVkIiwiYmx1ZSIsInRleHQiLCJwcmltYXJ5IiwiaXNUb2RheSIsInBpbmsiLCJnZXRDYWxlbmRhckFycmF5IiwiZGF0ZSIsInN1bmRheXMiLCJlYWNoV2Vla09mSW50ZXJ2YWwiLCJzdGFydCIsInN0YXJ0T2ZNb250aCIsImVuZCIsImVuZE9mTW9udGgiLCJtYXAiLCJzdW5kYXkiLCJlYWNoRGF5T2ZJbnRlcnZhbCIsImVuZE9mV2VlayIsImNhbGVuZGFyQ2VsbENsaWNrIiwiY29uc29sZSIsImxvZyIsIkNhbGVuZGFyVGFibGVDZWxsIiwicHJvcHMiLCJjaGlsZHJlbiIsIm90aGVyIiwiY2xhc3NlcyIsIkFwcCIsInVzZVN0YXRlIiwiRGF0ZSIsInRhcmdldERhdGUiLCJzZXRUYXJnZXREYXRlIiwiY2FsZW5kYXIiLCJ0b2RheSIsInN1Yk1vbnRocyIsImFkZE1vbnRocyIsImZvcm1hdCIsImhlYWQiLCJ3ZWVrUm93Iiwicm93TnVtIiwiZ2V0RGF5IiwiaXNTYW1lTW9udGgiLCJpc1NhbWVEYXkiLCJnZXREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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dC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSAgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xyXG5pbXBvcnQgZ2V0RGF0ZSBmcm9tICdkYXRlLWZucy9nZXREYXRlJ1xyXG5pbXBvcnQgZ2V0RGF5IGZyb20gJ2RhdGUtZm5zL2dldERheSdcclxuaW1wb3J0IGlzU2FtZURheSBmcm9tICdkYXRlLWZucy9pc1NhbWVEYXknXHJcbmltcG9ydCBlYWNoRGF5T2ZJbnRlcnZhbCBmcm9tICdkYXRlLWZucy9lYWNoRGF5T2ZJbnRlcnZhbCdcclxuaW1wb3J0IGVuZE9mV2VlayBmcm9tICdkYXRlLWZucy9lbmRPZldlZWsnXHJcbmltcG9ydCBlYWNoV2Vla09mSW50ZXJ2YWwgZnJvbSAnZGF0ZS1mbnMvZWFjaFdlZWtPZkludGVydmFsJ1xyXG5pbXBvcnQgYWRkTW9udGhzIGZyb20gJ2RhdGUtZm5zL2FkZE1vbnRocydcclxuaW1wb3J0IHN1Yk1vbnRocyBmcm9tICdkYXRlLWZucy9zdWJNb250aHMnXHJcbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3RhcnRPZk1vbnRoJ1xyXG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRPZk1vbnRoJ1xyXG5pbXBvcnQgaXNTYW1lTW9udGggZnJvbSAnZGF0ZS1mbnMvaXNTYW1lTW9udGgnXHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInXHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5J1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCdcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnXHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdydcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnXHJcbmltcG9ydCBwaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9waW5rJ1xyXG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg1LCAxMCksXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDUsIDUpLFxyXG4gIH0sXHJcbiAgeWVhcm1vbnRoOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgMCwgMSwgMCksXHJcbiAgfSxcclxuICB0YWJsZUhlYWQ6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgdXNlQ2FsZW5kYXJDZWxsU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGNhbGVuZGFyQ2VsbDoge1xyXG4gICAgY29sb3I6ICh7d2RheSwgaXNUYXJnZXRNb250aH0pID0+IHtcclxuICAgICAgaWYoaXNUYXJnZXRNb250aCkge1xyXG4gICAgICAgIHN3aXRjaCh3ZGF5KSB7XHJcbiAgICAgICAgICBjYXNlIDA6IC8vIFN1bmRheVxyXG4gICAgICAgICAgICByZXR1cm4gcmVkWzUwMF1cclxuICAgICAgICAgIGNhc2UgNjogLy8gU2F0dXJkYXlcclxuICAgICAgICAgICAgcmV0dXJuIGJsdWVbNTAwXVxyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHByZXZpb3VzIG9yIG5leHQgbW9udGhcclxuICAgICAgICBzd2l0Y2god2RheSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IC8vIFN1bmRheVxyXG4gICAgICAgICAgICByZXR1cm4gcmVkWzIwMF1cclxuICAgICAgICAgIGNhc2UgNjogLy8gU2F0dXJkYXlcclxuICAgICAgICAgICAgcmV0dXJuIGJsdWVbMjAwXVxyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICh7aXNUb2RheX0pID0+XHJcbiAgICAgIGlzVG9kYXkgPyBwaW5rWzUwXSA6IFwidHJhbnNwYXJlbnRcIlxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgZ2V0Q2FsZW5kYXJBcnJheSA9IGRhdGUgPT4ge1xyXG4gIGNvbnN0IHN1bmRheXMgPSBlYWNoV2Vla09mSW50ZXJ2YWwoe1xyXG4gICAgc3RhcnQ6IHN0YXJ0T2ZNb250aChkYXRlKSxcclxuICAgIGVuZDogZW5kT2ZNb250aChkYXRlKVxyXG4gIH0pXHJcbiAgcmV0dXJuIHN1bmRheXMubWFwKHN1bmRheSA9PlxyXG4gICAgZWFjaERheU9mSW50ZXJ2YWwoe3N0YXJ0OiBzdW5kYXksIGVuZDogZW5kT2ZXZWVrKHN1bmRheSl9KVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgY2FsZW5kYXJDZWxsQ2xpY2s9KGlzVG9kYXkpPT57XHJcbiAgY29uc29sZS5sb2coJ2lzVG9kYXknK2lzVG9kYXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDYWxlbmRhclRhYmxlQ2VsbChwcm9wcykge1xyXG4gIGNvbnN0IHt3ZGF5LCBpc1RhcmdldE1vbnRoLCBpc1RvZGF5LCBjaGlsZHJlbiwgLi4ub3RoZXJ9ID0gcHJvcHNcclxuICBjb25zdCBjbGFzc2VzID0gdXNlQ2FsZW5kYXJDZWxsU3R5bGVzKHByb3BzKVxyXG4gIHJldHVybiAoPFRhYmxlQ2VsbCBjbGFzc05hbWU9e2NsYXNzZXMuY2FsZW5kYXJDZWxsfSB7Li4ub3RoZXJ9IG9uQ2xpY2s9e2NhbGVuZGFyQ2VsbENsaWNrKGlzVG9kYXkpfT57Y2hpbGRyZW59PC9UYWJsZUNlbGw+KVxyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgW3RhcmdldERhdGUsIHNldFRhcmdldERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSlcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBjYWxlbmRhciA9IGdldENhbGVuZGFyQXJyYXkodGFyZ2V0RGF0ZSlcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4gc2V0VGFyZ2V0RGF0ZShzdWJNb250aHModGFyZ2V0RGF0ZSwgMSkpfT7liY3jga7mnIg8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4gc2V0VGFyZ2V0RGF0ZShuZXcgRGF0ZSgpKX0+5LuK5pyIPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldERhdGUoYWRkTW9udGhzKHRhcmdldERhdGUsIDEpKX0+5qyh44Gu5pyIPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnllYXJtb250aH0+e2Zvcm1hdCh0YXJnZXREYXRlLCAneeW5tE3mnIgnKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBjbGFzc2VzPXt7aGVhZDogY2xhc3Nlcy50YWJsZUhlYWQsIH19PuaXpTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBjbGFzc2VzPXt7aGVhZDogY2xhc3Nlcy50YWJsZUhlYWQsIH19PuaciDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBjbGFzc2VzPXt7aGVhZDogY2xhc3Nlcy50YWJsZUhlYWQsIH19PueBqzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBjbGFzc2VzPXt7aGVhZDogY2xhc3Nlcy50YWJsZUhlYWQsIH19PuawtDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBjbGFzc2VzPXt7aGVhZDogY2xhc3Nlcy50YWJsZUhlYWQsIH19PuacqDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBjbGFzc2VzPXt7aGVhZDogY2xhc3Nlcy50YWJsZUhlYWQsIH19PumHkTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBjbGFzc2VzPXt7aGVhZDogY2xhc3Nlcy50YWJsZUhlYWQsIH19PuWcnzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICB7Y2FsZW5kYXIubWFwKCh3ZWVrUm93LCByb3dOdW0pID0+IChcclxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3dOdW19PlxyXG4gICAgICAgICAgICAgICAge3dlZWtSb3cubWFwKGRhdGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJUYWJsZUNlbGwga2V5PXtnZXREYXkoZGF0ZSl9IHdkYXk9e2dldERheShkYXRlKX0gaXNUYXJnZXRNb250aD17aXNTYW1lTW9udGgoZGF0ZSwgdGFyZ2V0RGF0ZSl9IGlzVG9kYXk9e2lzU2FtZURheShkYXRlLCB0b2RheSl9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FsZW5kYXJUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJzb3VyY2VSb290IjoiIn0=