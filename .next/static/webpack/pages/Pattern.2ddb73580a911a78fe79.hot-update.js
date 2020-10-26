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

var calendarCellClick = function calendarCellClick(key) {
  console.log("key" + key[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9DYWxlbmRhcjMuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luIiwic3BhY2luZyIsInBhZGRpbmciLCJ5ZWFybW9udGgiLCJ0YWJsZUhlYWQiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaWdodCIsInVzZUNhbGVuZGFyQ2VsbFN0eWxlcyIsImNhbGVuZGFyQ2VsbCIsIndkYXkiLCJpc1RhcmdldE1vbnRoIiwicmVkIiwiYmx1ZSIsInRleHQiLCJwcmltYXJ5IiwiaXNUb2RheSIsInBpbmsiLCJnZXRDYWxlbmRhckFycmF5IiwiZGF0ZSIsInN1bmRheXMiLCJlYWNoV2Vla09mSW50ZXJ2YWwiLCJzdGFydCIsInN0YXJ0T2ZNb250aCIsImVuZCIsImVuZE9mTW9udGgiLCJtYXAiLCJzdW5kYXkiLCJlYWNoRGF5T2ZJbnRlcnZhbCIsImVuZE9mV2VlayIsImNhbGVuZGFyQ2VsbENsaWNrIiwia2V5IiwiY29uc29sZSIsImxvZyIsIkNhbGVuZGFyVGFibGVDZWxsIiwicHJvcHMiLCJjaGlsZHJlbiIsIm90aGVyIiwiY2xhc3NlcyIsIkFwcCIsInVzZVN0YXRlIiwiRGF0ZSIsInRhcmdldERhdGUiLCJzZXRUYXJnZXREYXRlIiwiY2FsZW5kYXIiLCJ0b2RheSIsInN1Yk1vbnRocyIsImFkZE1vbnRocyIsImZvcm1hdCIsImhlYWQiLCJ3ZWVrUm93Iiwicm93TnVtIiwiZ2V0RGF5IiwiaXNTYW1lTW9udGgiLCJpc1NhbWVEYXkiLCJnZXREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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L3BhZ2VzL1BhdHRlcm4uMmRkYjczNTgwYTkxMWE3OGZlNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcclxuaW1wb3J0IGdldERhdGUgZnJvbSBcImRhdGUtZm5zL2dldERhdGVcIjtcclxuaW1wb3J0IGdldERheSBmcm9tIFwiZGF0ZS1mbnMvZ2V0RGF5XCI7XHJcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSBcImRhdGUtZm5zL2lzU2FtZURheVwiO1xyXG5pbXBvcnQgZWFjaERheU9mSW50ZXJ2YWwgZnJvbSBcImRhdGUtZm5zL2VhY2hEYXlPZkludGVydmFsXCI7XHJcbmltcG9ydCBlbmRPZldlZWsgZnJvbSBcImRhdGUtZm5zL2VuZE9mV2Vla1wiO1xyXG5pbXBvcnQgZWFjaFdlZWtPZkludGVydmFsIGZyb20gXCJkYXRlLWZucy9lYWNoV2Vla09mSW50ZXJ2YWxcIjtcclxuaW1wb3J0IGFkZE1vbnRocyBmcm9tIFwiZGF0ZS1mbnMvYWRkTW9udGhzXCI7XHJcbmltcG9ydCBzdWJNb250aHMgZnJvbSBcImRhdGUtZm5zL3N1Yk1vbnRoc1wiO1xyXG5pbXBvcnQgc3RhcnRPZk1vbnRoIGZyb20gXCJkYXRlLWZucy9zdGFydE9mTW9udGhcIjtcclxuaW1wb3J0IGVuZE9mTW9udGggZnJvbSBcImRhdGUtZm5zL2VuZE9mTW9udGhcIjtcclxuaW1wb3J0IGlzU2FtZU1vbnRoIGZyb20gXCJkYXRlLWZucy9pc1NhbWVNb250aFwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IGJsdWUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlXCI7XHJcbmltcG9ydCBwaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcGlua1wiO1xyXG5pbXBvcnQgcmVkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDUsIDEwKSxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDUsIDUpLFxyXG4gICAgfSxcclxuICAgIHllYXJtb250aDoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwLCAxLCAwKSxcclxuICAgIH0sXHJcbiAgICB0YWJsZUhlYWQ6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCB1c2VDYWxlbmRhckNlbGxTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGNhbGVuZGFyQ2VsbDoge1xyXG4gICAgICAgIGNvbG9yOiAoeyB3ZGF5LCBpc1RhcmdldE1vbnRoIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzVGFyZ2V0TW9udGgpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAod2RheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogLy8gU3VuZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWRbNTAwXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IC8vIFNhdHVyZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBibHVlWzUwMF07XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gcHJldmlvdXMgb3IgbmV4dCBtb250aFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh3ZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiAvLyBTdW5kYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZFsyMDBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogLy8gU2F0dXJkYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJsdWVbMjAwXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAoeyBpc1RvZGF5IH0pID0+IChpc1RvZGF5ID8gcGlua1s1MF0gOiBcInRyYW5zcGFyZW50XCIpLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgZ2V0Q2FsZW5kYXJBcnJheSA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCBzdW5kYXlzID0gZWFjaFdlZWtPZkludGVydmFsKHtcclxuICAgICAgICBzdGFydDogc3RhcnRPZk1vbnRoKGRhdGUpLFxyXG4gICAgICAgIGVuZDogZW5kT2ZNb250aChkYXRlKSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHN1bmRheXMubWFwKChzdW5kYXkpID0+XHJcbiAgICAgICAgZWFjaERheU9mSW50ZXJ2YWwoeyBzdGFydDogc3VuZGF5LCBlbmQ6IGVuZE9mV2VlayhzdW5kYXkpIH0pXHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgY2FsZW5kYXJDZWxsQ2xpY2sgPSAoa2V5KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImtleVwiICsga2V5WzBdKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIENhbGVuZGFyVGFibGVDZWxsKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGtleSwgd2RheSwgaXNUYXJnZXRNb250aCwgaXNUb2RheSwgY2hpbGRyZW4sIC4uLm90aGVyIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VDYWxlbmRhckNlbGxTdHlsZXMocHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYWxlbmRhckNlbGx9XHJcbiAgICAgICAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgICAgICAgb25DbGljaz17Y2FsZW5kYXJDZWxsQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCBbdGFyZ2V0RGF0ZSwgc2V0VGFyZ2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGNhbGVuZGFyID0gZ2V0Q2FsZW5kYXJBcnJheSh0YXJnZXREYXRlKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhcmdldERhdGUoc3ViTW9udGhzKHRhcmdldERhdGUsIDEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDliY3jga7mnIhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXREYXRlKG5ldyBEYXRlKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDku4rmnIhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhcmdldERhdGUoYWRkTW9udGhzKHRhcmdldERhdGUsIDEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmrKHjga7mnIhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMueWVhcm1vbnRofVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXQodGFyZ2V0RGF0ZSwgXCJ55bm0TeaciFwiKX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaGVhZDogY2xhc3Nlcy50YWJsZUhlYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDml6VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGhlYWQ6IGNsYXNzZXMudGFibGVIZWFkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5pyIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOeBq1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaGVhZDogY2xhc3Nlcy50YWJsZUhlYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmsLRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGhlYWQ6IGNsYXNzZXMudGFibGVIZWFkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5pyoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOmHkVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbGVuZGFyQ2VsbENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaGVhZDogY2xhc3Nlcy50YWJsZUhlYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlnJ9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxlbmRhci5tYXAoKHdlZWtSb3csIHJvd051bSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93TnVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2Vla1Jvdy5tYXAoKGRhdGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFyVGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2dldERheShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdkYXk9e2dldERheShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVGFyZ2V0TW9udGg9e2lzU2FtZU1vbnRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kYXk9e2lzU2FtZURheShkYXRlLCB0b2RheSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGVuZGFyVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9