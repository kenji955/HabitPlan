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

var calendarCellClick = function calendarCellClick() {
  console.log('isToday');
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
    onClick: calendarCellClick,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9DYWxlbmRhcjMuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luIiwic3BhY2luZyIsInBhZGRpbmciLCJ5ZWFybW9udGgiLCJ0YWJsZUhlYWQiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaWdodCIsInVzZUNhbGVuZGFyQ2VsbFN0eWxlcyIsImNhbGVuZGFyQ2VsbCIsIndkYXkiLCJpc1RhcmdldE1vbnRoIiwicmVkIiwiYmx1ZSIsInRleHQiLCJwcmltYXJ5IiwiaXNUb2RheSIsInBpbmsiLCJnZXRDYWxlbmRhckFycmF5IiwiZGF0ZSIsInN1bmRheXMiLCJlYWNoV2Vla09mSW50ZXJ2YWwiLCJzdGFydCIsInN0YXJ0T2ZNb250aCIsImVuZCIsImVuZE9mTW9udGgiLCJtYXAiLCJzdW5kYXkiLCJlYWNoRGF5T2ZJbnRlcnZhbCIsImVuZE9mV2VlayIsImNhbGVuZGFyQ2VsbENsaWNrIiwiY29uc29sZSIsImxvZyIsIkNhbGVuZGFyVGFibGVDZWxsIiwicHJvcHMiLCJjaGlsZHJlbiIsIm90aGVyIiwiY2xhc3NlcyIsIkFwcCIsInVzZVN0YXRlIiwiRGF0ZSIsInRhcmdldERhdGUiLCJzZXRUYXJnZXREYXRlIiwiY2FsZW5kYXIiLCJ0b2RheSIsInN1Yk1vbnRocyIsImFkZE1vbnRocyIsImZvcm1hdCIsImhlYWQiLCJ3ZWVrUm93Iiwicm93TnVtIiwiZ2V0RGF5IiwiaXNTYW1lTW9udGgiLCJpc1NhbWVEYXkiLCJnZXREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9ICBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnXHJcbmltcG9ydCBnZXREYXRlIGZyb20gJ2RhdGUtZm5zL2dldERhdGUnXHJcbmltcG9ydCBnZXREYXkgZnJvbSAnZGF0ZS1mbnMvZ2V0RGF5J1xyXG5pbXBvcnQgaXNTYW1lRGF5IGZyb20gJ2RhdGUtZm5zL2lzU2FtZURheSdcclxuaW1wb3J0IGVhY2hEYXlPZkludGVydmFsIGZyb20gJ2RhdGUtZm5zL2VhY2hEYXlPZkludGVydmFsJ1xyXG5pbXBvcnQgZW5kT2ZXZWVrIGZyb20gJ2RhdGUtZm5zL2VuZE9mV2VlaydcclxuaW1wb3J0IGVhY2hXZWVrT2ZJbnRlcnZhbCBmcm9tICdkYXRlLWZucy9lYWNoV2Vla09mSW50ZXJ2YWwnXHJcbmltcG9ydCBhZGRNb250aHMgZnJvbSAnZGF0ZS1mbnMvYWRkTW9udGhzJ1xyXG5pbXBvcnQgc3ViTW9udGhzIGZyb20gJ2RhdGUtZm5zL3N1Yk1vbnRocydcclxuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zdGFydE9mTW9udGgnXHJcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL2VuZE9mTW9udGgnXHJcbmltcG9ydCBpc1NhbWVNb250aCBmcm9tICdkYXRlLWZucy9pc1NhbWVNb250aCdcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcidcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknXHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJ1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCdcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93J1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSdcclxuaW1wb3J0IHBpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3BpbmsnXHJcbmltcG9ydCByZWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDUsIDEwKSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNSwgNSksXHJcbiAgfSxcclxuICB5ZWFybW9udGg6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwLCAxLCAwKSxcclxuICB9LFxyXG4gIHRhYmxlSGVhZDoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCB1c2VDYWxlbmRhckNlbGxTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgY2FsZW5kYXJDZWxsOiB7XHJcbiAgICBjb2xvcjogKHt3ZGF5LCBpc1RhcmdldE1vbnRofSkgPT4ge1xyXG4gICAgICBpZihpc1RhcmdldE1vbnRoKSB7XHJcbiAgICAgICAgc3dpdGNoKHdkYXkpIHtcclxuICAgICAgICAgIGNhc2UgMDogLy8gU3VuZGF5XHJcbiAgICAgICAgICAgIHJldHVybiByZWRbNTAwXVxyXG4gICAgICAgICAgY2FzZSA2OiAvLyBTYXR1cmRheVxyXG4gICAgICAgICAgICByZXR1cm4gYmx1ZVs1MDBdXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcHJldmlvdXMgb3IgbmV4dCBtb250aFxyXG4gICAgICAgIHN3aXRjaCh3ZGF5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy8gU3VuZGF5XHJcbiAgICAgICAgICAgIHJldHVybiByZWRbMjAwXVxyXG4gICAgICAgICAgY2FzZSA2OiAvLyBTYXR1cmRheVxyXG4gICAgICAgICAgICByZXR1cm4gYmx1ZVsyMDBdXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogKHtpc1RvZGF5fSkgPT5cclxuICAgICAgaXNUb2RheSA/IHBpbmtbNTBdIDogXCJ0cmFuc3BhcmVudFwiXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBnZXRDYWxlbmRhckFycmF5ID0gZGF0ZSA9PiB7XHJcbiAgY29uc3Qgc3VuZGF5cyA9IGVhY2hXZWVrT2ZJbnRlcnZhbCh7XHJcbiAgICBzdGFydDogc3RhcnRPZk1vbnRoKGRhdGUpLFxyXG4gICAgZW5kOiBlbmRPZk1vbnRoKGRhdGUpXHJcbiAgfSlcclxuICByZXR1cm4gc3VuZGF5cy5tYXAoc3VuZGF5ID0+XHJcbiAgICBlYWNoRGF5T2ZJbnRlcnZhbCh7c3RhcnQ6IHN1bmRheSwgZW5kOiBlbmRPZldlZWsoc3VuZGF5KX0pXHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBjYWxlbmRhckNlbGxDbGljaz0oKT0+e1xyXG4gIGNvbnNvbGUubG9nKCdpc1RvZGF5Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENhbGVuZGFyVGFibGVDZWxsKHByb3BzKSB7XHJcbiAgY29uc3Qge3dkYXksIGlzVGFyZ2V0TW9udGgsIGlzVG9kYXksIGNoaWxkcmVuLCAuLi5vdGhlcn0gPSBwcm9wc1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VDYWxlbmRhckNlbGxTdHlsZXMocHJvcHMpXHJcbiAgcmV0dXJuICg8VGFibGVDZWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYWxlbmRhckNlbGx9IHsuLi5vdGhlcn0gb25DbGljaz17Y2FsZW5kYXJDZWxsQ2xpY2soaXNUb2RheSl9PntjaGlsZHJlbn08L1RhYmxlQ2VsbD4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBbdGFyZ2V0RGF0ZSwgc2V0VGFyZ2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKVxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IGNhbGVuZGFyID0gZ2V0Q2FsZW5kYXJBcnJheSh0YXJnZXREYXRlKVxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXREYXRlKHN1Yk1vbnRocyh0YXJnZXREYXRlLCAxKSl9PuWJjeOBruaciDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXREYXRlKG5ldyBEYXRlKCkpfT7ku4rmnIg8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4gc2V0VGFyZ2V0RGF0ZShhZGRNb250aHModGFyZ2V0RGF0ZSwgMSkpfT7mrKHjga7mnIg8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMueWVhcm1vbnRofT57Zm9ybWF0KHRhcmdldERhdGUsICd55bm0TeaciCcpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+5pelPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+5pyIPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+54GrPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+5rC0PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+5pyoPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIGNsYXNzZXM9e3toZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCwgfX0+6YeRPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIG9uQ2xpY2s9e2NhbGVuZGFyQ2VsbENsaWNrfSBjbGFzc2VzPXt7aGVhZDogY2xhc3Nlcy50YWJsZUhlYWQsIH19PuWcnzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICB7Y2FsZW5kYXIubWFwKCh3ZWVrUm93LCByb3dOdW0pID0+IChcclxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3dOdW19PlxyXG4gICAgICAgICAgICAgICAge3dlZWtSb3cubWFwKGRhdGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJUYWJsZUNlbGwga2V5PXtnZXREYXkoZGF0ZSl9IHdkYXk9e2dldERheShkYXRlKX0gaXNUYXJnZXRNb250aD17aXNTYW1lTW9udGgoZGF0ZSwgdGFyZ2V0RGF0ZSl9IGlzVG9kYXk9e2lzU2FtZURheShkYXRlLCB0b2RheSl9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FsZW5kYXJUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJzb3VyY2VSb290IjoiIn0=