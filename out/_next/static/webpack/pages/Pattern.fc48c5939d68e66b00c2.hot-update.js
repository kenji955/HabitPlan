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
  return function () {
    console.log("date:" + date);
    console.log("year:" + date.getFullYear());
    console.log("month:" + date.getMonth() + 1);
    console.log("date:" + date.getDate());
  };
};

function CalendarTableCell(props) {
  _s();

  var key = props.key,
      wday = props.wday,
      isTargetMonth = props.isTargetMonth,
      isToday = props.isToday,
      children = props.children,
      date = props.date,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["key", "wday", "isTargetMonth", "isToday", "children", "date"]);

  var classes = useCalendarCellStyles(props);
  console.log('date');
  console.log(date);
  return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_22__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.calendarCell
  }, other, {
    onClick: calendarCellClick(date),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    container: true,
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 117,
      columnNumber: 25
    }
  }, "\u524D\u306E\u6708")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
      lineNumber: 127,
      columnNumber: 25
    }
  }, "\u4ECA\u6708")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 135,
      columnNumber: 25
    }
  }, "\u6B21\u306E\u6708"))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_25__["default"], {
    variant: "h4",
    align: "center",
    className: classes.yearmonth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, Object(date_fns_format__WEBPACK_IMPORTED_MODULE_3__["default"])(targetDate, "y年M月")), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_24__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
      lineNumber: 155,
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
      lineNumber: 161,
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
      lineNumber: 167,
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
      lineNumber: 173,
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
      lineNumber: 179,
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
      lineNumber: 185,
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
      lineNumber: 191,
      columnNumber: 29
    }
  }, "\u571F"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }, calendar.map(function (weekRow, rowNum) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_24__["default"], {
      key: rowNum,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 29
      }
    }, weekRow.map(function (date) {
      return __jsx(CalendarTableCell, {
        key: Object(date_fns_getDay__WEBPACK_IMPORTED_MODULE_5__["default"])(date),
        wday: Object(date_fns_getDay__WEBPACK_IMPORTED_MODULE_5__["default"])(date),
        isTargetMonth: Object(date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_14__["default"])(date, targetDate),
        isToday: Object(date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_6__["default"])(date, today),
        date: date,
        align: "center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9DYWxlbmRhcjMuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luIiwic3BhY2luZyIsInBhZGRpbmciLCJ5ZWFybW9udGgiLCJ0YWJsZUhlYWQiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaWdodCIsInVzZUNhbGVuZGFyQ2VsbFN0eWxlcyIsImNhbGVuZGFyQ2VsbCIsIndkYXkiLCJpc1RhcmdldE1vbnRoIiwicmVkIiwiYmx1ZSIsInRleHQiLCJwcmltYXJ5IiwiaXNUb2RheSIsInBpbmsiLCJnZXRDYWxlbmRhckFycmF5IiwiZGF0ZSIsInN1bmRheXMiLCJlYWNoV2Vla09mSW50ZXJ2YWwiLCJzdGFydCIsInN0YXJ0T2ZNb250aCIsImVuZCIsImVuZE9mTW9udGgiLCJtYXAiLCJzdW5kYXkiLCJlYWNoRGF5T2ZJbnRlcnZhbCIsImVuZE9mV2VlayIsImNhbGVuZGFyQ2VsbENsaWNrIiwiY29uc29sZSIsImxvZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiQ2FsZW5kYXJUYWJsZUNlbGwiLCJwcm9wcyIsImtleSIsImNoaWxkcmVuIiwib3RoZXIiLCJjbGFzc2VzIiwiQXBwIiwidXNlU3RhdGUiLCJEYXRlIiwidGFyZ2V0RGF0ZSIsInNldFRhcmdldERhdGUiLCJjYWxlbmRhciIsInRvZGF5Iiwic3ViTW9udGhzIiwiYWRkTW9udGhzIiwiZm9ybWF0IiwiaGVhZCIsIndlZWtSb3ciLCJyb3dOdW0iLCJnZXREYXkiLCJpc1NhbWVNb250aCIsImlzU2FtZURheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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cEMsSUFBRCxDQUZoQjtBQUdJLHFCQUFhLEVBQUVxQyxxRUFBVyxDQUN0QnJDLElBRHNCLEVBRXRCMEIsVUFGc0IsQ0FIOUI7QUFPSSxlQUFPLEVBQUVZLGtFQUFTLENBQUN0QyxJQUFELEVBQU82QixLQUFQLENBUHRCO0FBUUksWUFBSSxFQUFFN0IsSUFSVjtBQVNJLGFBQUssRUFBQyxRQVRWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FXS2dCLGdFQUFPLENBQUNoQixJQUFELENBWFosQ0FEUztBQUFBLEtBQVosQ0FETCxDQURVO0FBQUEsR0FBYixDQURMLENBaERKLENBdENKLENBRkosQ0FESjtBQWtISDs7SUF4SFF1QixHO1VBRVdqRCxTOzs7TUFGWGlELEc7QUEwSE1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1BhdHRlcm4uZmM0OGM1OTM5ZDY4ZTY2YjAwYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcclxuaW1wb3J0IGdldERhdGUgZnJvbSBcImRhdGUtZm5zL2dldERhdGVcIjtcclxuaW1wb3J0IGdldERheSBmcm9tIFwiZGF0ZS1mbnMvZ2V0RGF5XCI7XHJcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSBcImRhdGUtZm5zL2lzU2FtZURheVwiO1xyXG5pbXBvcnQgZWFjaERheU9mSW50ZXJ2YWwgZnJvbSBcImRhdGUtZm5zL2VhY2hEYXlPZkludGVydmFsXCI7XHJcbmltcG9ydCBlbmRPZldlZWsgZnJvbSBcImRhdGUtZm5zL2VuZE9mV2Vla1wiO1xyXG5pbXBvcnQgZWFjaFdlZWtPZkludGVydmFsIGZyb20gXCJkYXRlLWZucy9lYWNoV2Vla09mSW50ZXJ2YWxcIjtcclxuaW1wb3J0IGFkZE1vbnRocyBmcm9tIFwiZGF0ZS1mbnMvYWRkTW9udGhzXCI7XHJcbmltcG9ydCBzdWJNb250aHMgZnJvbSBcImRhdGUtZm5zL3N1Yk1vbnRoc1wiO1xyXG5pbXBvcnQgc3RhcnRPZk1vbnRoIGZyb20gXCJkYXRlLWZucy9zdGFydE9mTW9udGhcIjtcclxuaW1wb3J0IGVuZE9mTW9udGggZnJvbSBcImRhdGUtZm5zL2VuZE9mTW9udGhcIjtcclxuaW1wb3J0IGlzU2FtZU1vbnRoIGZyb20gXCJkYXRlLWZucy9pc1NhbWVNb250aFwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IGJsdWUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlXCI7XHJcbmltcG9ydCBwaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcGlua1wiO1xyXG5pbXBvcnQgcmVkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDUsIDEwKSxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDUsIDUpLFxyXG4gICAgfSxcclxuICAgIHllYXJtb250aDoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwLCAxLCAwKSxcclxuICAgIH0sXHJcbiAgICB0YWJsZUhlYWQ6IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCB1c2VDYWxlbmRhckNlbGxTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGNhbGVuZGFyQ2VsbDoge1xyXG4gICAgICAgIGNvbG9yOiAoeyB3ZGF5LCBpc1RhcmdldE1vbnRoIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzVGFyZ2V0TW9udGgpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAod2RheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogLy8gU3VuZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWRbNTAwXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IC8vIFNhdHVyZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBibHVlWzUwMF07XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gcHJldmlvdXMgb3IgbmV4dCBtb250aFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh3ZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiAvLyBTdW5kYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZFsyMDBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogLy8gU2F0dXJkYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJsdWVbMjAwXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAoeyBpc1RvZGF5IH0pID0+IChpc1RvZGF5ID8gcGlua1s1MF0gOiBcInRyYW5zcGFyZW50XCIpLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgZ2V0Q2FsZW5kYXJBcnJheSA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCBzdW5kYXlzID0gZWFjaFdlZWtPZkludGVydmFsKHtcclxuICAgICAgICBzdGFydDogc3RhcnRPZk1vbnRoKGRhdGUpLFxyXG4gICAgICAgIGVuZDogZW5kT2ZNb250aChkYXRlKSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHN1bmRheXMubWFwKChzdW5kYXkpID0+XHJcbiAgICAgICAgZWFjaERheU9mSW50ZXJ2YWwoeyBzdGFydDogc3VuZGF5LCBlbmQ6IGVuZE9mV2VlayhzdW5kYXkpIH0pXHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgY2FsZW5kYXJDZWxsQ2xpY2sgPSAoZGF0ZSkgPT4oKT0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0ZTpcIiArIGRhdGUpO1xyXG4gICAgY29uc29sZS5sb2coXCJ5ZWFyOlwiICsgZGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICAgIGNvbnNvbGUubG9nKFwibW9udGg6XCIgKyBkYXRlLmdldE1vbnRoKCkgKyAxKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0ZTpcIiArIGRhdGUuZ2V0RGF0ZSgpKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIENhbGVuZGFyVGFibGVDZWxsKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGtleSwgd2RheSwgaXNUYXJnZXRNb250aCwgaXNUb2RheSwgY2hpbGRyZW4sZGF0ZSwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZUNhbGVuZGFyQ2VsbFN0eWxlcyhwcm9wcyk7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0ZScpO1xyXG4gICAgY29uc29sZS5sb2coZGF0ZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhbGVuZGFyQ2VsbH1cclxuICAgICAgICAgICAgey4uLm90aGVyfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjYWxlbmRhckNlbGxDbGljayhkYXRlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IFt0YXJnZXREYXRlLCBzZXRUYXJnZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgY2FsZW5kYXIgPSBnZXRDYWxlbmRhckFycmF5KHRhcmdldERhdGUpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0RGF0ZShzdWJNb250aHModGFyZ2V0RGF0ZSwgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWJjeOBruaciFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldERhdGUobmV3IERhdGUoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS7iuaciFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0RGF0ZShhZGRNb250aHModGFyZ2V0RGF0ZSwgMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOasoeOBruaciFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy55ZWFybW9udGh9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdCh0YXJnZXREYXRlLCBcInnlubRN5pyIXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaXpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaGVhZDogY2xhc3Nlcy50YWJsZUhlYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnIhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGhlYWQ6IGNsYXNzZXMudGFibGVIZWFkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg54GrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOawtFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaGVhZDogY2xhc3Nlcy50YWJsZUhlYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGhlYWQ6IGNsYXNzZXMudGFibGVIZWFkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6YeRXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2FsZW5kYXJDZWxsQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBoZWFkOiBjbGFzc2VzLnRhYmxlSGVhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWcn1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhbGVuZGFyLm1hcCgod2Vla1Jvdywgcm93TnVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3dOdW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3ZWVrUm93Lm1hcCgoZGF0ZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Z2V0RGF5KGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2RheT17Z2V0RGF5KGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUYXJnZXRNb250aD17aXNTYW1lTW9udGgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RheT17aXNTYW1lRGF5KGRhdGUsIHRvZGF5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGVuZGFyVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9