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

var calendarCellClick = function calendarCellClick(date) {
  console.log("date" + date);
};

function CalendarTableCell(props) {
  _s();

  var key = props.key,
      wday = props.wday,
      isTargetMonth = props.isTargetMonth,
      isToday = props.isToday,
      children = props.children,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["key", "wday", "isTargetMonth", "isToday", "children"]);

  var classes = useCalendarCellStyles(props);
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.calendarCell
  }, other, {
    onClick: calendarCellClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
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
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    container: true,
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(Object(date_fns_subMonths__WEBPACK_IMPORTED_MODULE_11__["default"])(targetDate, 1));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, "\u524D\u306E\u6708")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(new Date());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, "\u4ECA\u6708")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "outlined",
    onClick: function onClick() {
      return setTargetDate(Object(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_10__["default"])(targetDate, 1));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, "\u6B21\u306E\u6708"))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_25__["default"], {
    variant: "h4",
    align: "center",
    className: classes.yearmonth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, Object(date_fns_format__WEBPACK_IMPORTED_MODULE_3__["default"])(targetDate, "y年M月")), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_24__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, "\u65E5"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 29
    }
  }, "\u6708"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 29
    }
  }, "\u706B"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 29
    }
  }, "\u6C34"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 29
    }
  }, "\u6728"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
    align: "center",
    classes: {
      head: classes.tableHead
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 29
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
      lineNumber: 186,
      columnNumber: 29
    }
  }, "\u571F"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, calendar.map(function (weekRow, rowNum) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_24__["default"], {
      key: rowNum,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 29
      }
    }, weekRow.map(function (date) {
      return __jsx(CalendarTableCell, {
        key: Object(date_fns_getDay__WEBPACK_IMPORTED_MODULE_5__["default"])(date),
        wday: Object(date_fns_getDay__WEBPACK_IMPORTED_MODULE_5__["default"])(date),
        isTargetMonth: Object(date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_14__["default"])(date, targetDate),
        isToday: Object(date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_6__["default"])(date, today),
        align: "center",
        date: Object(date_fns_getDate__WEBPACK_IMPORTED_MODULE_4__["default"])(date),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 37
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9DYWxlbmRhcjMuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luIiwic3BhY2luZyIsInBhZGRpbmciLCJ5ZWFybW9udGgiLCJ0YWJsZUhlYWQiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaWdodCIsInVzZUNhbGVuZGFyQ2VsbFN0eWxlcyIsImNhbGVuZGFyQ2VsbCIsIndkYXkiLCJpc1RhcmdldE1vbnRoIiwicmVkIiwiYmx1ZSIsInRleHQiLCJwcmltYXJ5IiwiaXNUb2RheSIsInBpbmsiLCJnZXRDYWxlbmRhckFycmF5IiwiZGF0ZSIsInN1bmRheXMiLCJlYWNoV2Vla09mSW50ZXJ2YWwiLCJzdGFydCIsInN0YXJ0T2ZNb250aCIsImVuZCIsImVuZE9mTW9udGgiLCJtYXAiLCJzdW5kYXkiLCJlYWNoRGF5T2ZJbnRlcnZhbCIsImVuZE9mV2VlayIsImNhbGVuZGFyQ2VsbENsaWNrIiwiY29uc29sZSIsImxvZyIsIkNhbGVuZGFyVGFibGVDZWxsIiwicHJvcHMiLCJrZXkiLCJjaGlsZHJlbiIsIm90aGVyIiwiY2xhc3NlcyIsIkFwcCIsInVzZVN0YXRlIiwiRGF0ZSIsInRhcmdldERhdGUiLCJzZXRUYXJnZXREYXRlIiwiY2FsZW5kYXIiLCJ0b2RheSIsInN1Yk1vbnRocyIsImFkZE1vbnRocyIsImZvcm1hdCIsImhlYWQiLCJ3ZWVrUm93Iiwicm93TnVtIiwiZ2V0RGF5IiwiaXNTYW1lTW9udGgiLCJpc1NhbWVEYXkiLCJnZXREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvUGF0dGVybi45ZThkMjRjYmRmN2I5NGM1Zjg3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xyXG5pbXBvcnQgZ2V0RGF0ZSBmcm9tIFwiZGF0ZS1mbnMvZ2V0RGF0ZVwiO1xyXG5pbXBvcnQgZ2V0RGF5IGZyb20gXCJkYXRlLWZucy9nZXREYXlcIjtcclxuaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiZGF0ZS1mbnMvaXNTYW1lRGF5XCI7XHJcbmltcG9ydCBlYWNoRGF5T2ZJbnRlcnZhbCBmcm9tIFwiZGF0ZS1mbnMvZWFjaERheU9mSW50ZXJ2YWxcIjtcclxuaW1wb3J0IGVuZE9mV2VlayBmcm9tIFwiZGF0ZS1mbnMvZW5kT2ZXZWVrXCI7XHJcbmltcG9ydCBlYWNoV2Vla09mSW50ZXJ2YWwgZnJvbSBcImRhdGUtZm5zL2VhY2hXZWVrT2ZJbnRlcnZhbFwiO1xyXG5pbXBvcnQgYWRkTW9udGhzIGZyb20gXCJkYXRlLWZucy9hZGRNb250aHNcIjtcclxuaW1wb3J0IHN1Yk1vbnRocyBmcm9tIFwiZGF0ZS1mbnMvc3ViTW9udGhzXCI7XHJcbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSBcImRhdGUtZm5zL3N0YXJ0T2ZNb250aFwiO1xyXG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tIFwiZGF0ZS1mbnMvZW5kT2ZNb250aFwiO1xyXG5pbXBvcnQgaXNTYW1lTW9udGggZnJvbSBcImRhdGUtZm5zL2lzU2FtZU1vbnRoXCI7XHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIjtcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgYmx1ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWVcIjtcclxuaW1wb3J0IHBpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9waW5rXCI7XHJcbmltcG9ydCByZWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWRcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcGFwZXI6IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNSwgMTApLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNSwgNSksXHJcbiAgICB9LFxyXG4gICAgeWVhcm1vbnRoOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDAsIDEsIDApLFxyXG4gICAgfSxcclxuICAgIHRhYmxlSGVhZDoge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodCxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHVzZUNhbGVuZGFyQ2VsbFN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgY2FsZW5kYXJDZWxsOiB7XHJcbiAgICAgICAgY29sb3I6ICh7IHdkYXksIGlzVGFyZ2V0TW9udGggfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNUYXJnZXRNb250aCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh3ZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiAvLyBTdW5kYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZFs1MDBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogLy8gU2F0dXJkYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJsdWVbNTAwXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwcmV2aW91cyBvciBuZXh0IG1vbnRoXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHdkYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IC8vIFN1bmRheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVkWzIwMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiAvLyBTYXR1cmRheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmx1ZVsyMDBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh7IGlzVG9kYXkgfSkgPT4gKGlzVG9kYXkgPyBwaW5rWzUwXSA6IFwidHJhbnNwYXJlbnRcIiksXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBnZXRDYWxlbmRhckFycmF5ID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IHN1bmRheXMgPSBlYWNoV2Vla09mSW50ZXJ2YWwoe1xyXG4gICAgICAgIHN0YXJ0OiBzdGFydE9mTW9udGgoZGF0ZSksXHJcbiAgICAgICAgZW5kOiBlbmRPZk1vbnRoKGRhdGUpLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3VuZGF5cy5tYXAoKHN1bmRheSkgPT5cclxuICAgICAgICBlYWNoRGF5T2ZJbnRlcnZhbCh7IHN0YXJ0OiBzdW5kYXksIGVuZDogZW5kT2ZXZWVrKHN1bmRheSkgfSlcclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBjYWxlbmRhckNlbGxDbGljayA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGVcIiArIGRhdGUpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gQ2FsZW5kYXJUYWJsZUNlbGwocHJvcHMpIHtcclxuICAgIGNvbnN0IHsga2V5LCB3ZGF5LCBpc1RhcmdldE1vbnRoLCBpc1RvZGF5LCBjaGlsZHJlbiwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZUNhbGVuZGFyQ2VsbFN0eWxlcyhwcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhbGVuZGFyQ2VsbH1cclxuICAgICAgICAgICAgey4uLm90aGVyfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjYWxlbmRhckNlbGxDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IFt0YXJnZXREYXRlLCBzZXRUYXJnZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgY2FsZW5kYXIgPSBnZXRDYWxlbmRhckFycmF5KHRhcmdldERhdGUpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0RGF0ZShzdWJNb250aHModGFyZ2V0RGF0ZSwgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWJjeOBruaciFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldERhdGUobmV3IERhdGUoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS7iuaciFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0RGF0ZShhZGRNb250aHModGFyZ2V0RGF0ZSwgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOasoeOBruaciFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy55ZWFybW9udGh9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdCh0YXJnZXREYXRlLCBcInnlubRN5pyIXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaXpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaGVhZDogY2xhc3Nlcy50YWJsZUhlYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnIhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGhlYWQ6IGNsYXNzZXMudGFibGVIZWFkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg54GrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOawtFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaGVhZDogY2xhc3Nlcy50YWJsZUhlYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGhlYWQ6IGNsYXNzZXMudGFibGVIZWFkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6YeRXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2FsZW5kYXJDZWxsQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWcn1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhbGVuZGFyLm1hcCgod2Vla1Jvdywgcm93TnVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3dOdW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3ZWVrUm93Lm1hcCgoZGF0ZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Z2V0RGF5KGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2RheT17Z2V0RGF5KGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUYXJnZXRNb250aD17aXNTYW1lTW9udGgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RheT17aXNTYW1lRGF5KGRhdGUsIHRvZGF5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2dldERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGVuZGFyVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9