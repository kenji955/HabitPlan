webpackHotUpdate_N_E("pages/Pattern",{

/***/ "./src/components/view/FloatingActionButton.tsx":
/*!******************************************************!*\
  !*** ./src/components/view/FloatingActionButton.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollableTabsButtonAuto; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _PatternList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PatternList */ "./src/components/view/PatternList.tsx");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Select */ "./src/components/view/Select.tsx");
/* harmony import */ var _test_Calendar3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../test/Calendar3 */ "./src/components/test/Calendar3.jsx");




var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\FloatingActionButton.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "value", "index"]);

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    role: "tabpanel",
    hidden: value !== index,
    id: "scrollable-auto-tabpanel-".concat(index),
    "aria-labelledby": "scrollable-auto-tab-".concat(index)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, children)));
}

_c = TabPanel;

function a11yProps(index) {
  return {
    id: "scrollable-auto-tab-".concat(index),
    "aria-controls": "scrollable-auto-tabpanel-".concat(index)
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      // paddingTop:'70px',
      // display:'inline-block',
      alignItems: "center"
    },
    barSize: {
      width: "fit-content",
      display: "flex",
      margin: "0 auto"
    }
  };
});
function ScrollableTabsButtonAuto() {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(Number),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      choice = _React$useState4[0],
      setChoice = _React$useState4[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "static",
    color: "default",
    className: classes.barSize,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "scrollable",
    scrollButtons: "auto",
    "aria-label": "scrollable auto tabs example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Pattern"
  }, a11yProps(0), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Calendar"
  }, a11yProps(1), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  })))), __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(_Select__WEBPACK_IMPORTED_MODULE_11__["default"], {
    choice: choice,
    setChoice: setChoice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), __jsx(_PatternList__WEBPACK_IMPORTED_MODULE_10__["default"], {
    choice: choice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx(_Select__WEBPACK_IMPORTED_MODULE_11__["default"], {
    choice: choice,
    setChoice: setChoice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }), __jsx(_test_Calendar3__WEBPACK_IMPORTED_MODULE_12__["default"], {
    choice: choice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  })));
}

_s(ScrollableTabsButtonAuto, "vagBw0DJT6oGOQCdxGfn43USwB8=", false, function () {
  return [useStyles];
});

_c2 = ScrollableTabsButtonAuto;

var _c, _c2;

$RefreshReg$(_c, "TabPanel");
$RefreshReg$(_c2, "ScrollableTabsButtonAuto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9GbG9hdGluZ0FjdGlvbkJ1dHRvbi50c3giXSwibmFtZXMiOlsiVGFiUGFuZWwiLCJwcm9wcyIsImNoaWxkcmVuIiwidmFsdWUiLCJpbmRleCIsIm90aGVyIiwiYTExeVByb3BzIiwiaWQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJhbGlnbkl0ZW1zIiwiYmFyU2l6ZSIsImRpc3BsYXkiLCJtYXJnaW4iLCJTY3JvbGxhYmxlVGFic0J1dHRvbkF1dG8iLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldFZhbHVlIiwiTnVtYmVyIiwiY2hvaWNlIiwic2V0Q2hvaWNlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBOztBQVNBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXdDO0FBQUEsTUFDNUJDLFFBRDRCLEdBQ1NELEtBRFQsQ0FDNUJDLFFBRDRCO0FBQUEsTUFDbEJDLEtBRGtCLEdBQ1NGLEtBRFQsQ0FDbEJFLEtBRGtCO0FBQUEsTUFDWEMsS0FEVyxHQUNTSCxLQURULENBQ1hHLEtBRFc7QUFBQSxNQUNEQyxLQURDLHNHQUNTSixLQURUOztBQUdwQyxTQUNJO0FBQ0ksUUFBSSxFQUFDLFVBRFQ7QUFFSSxVQUFNLEVBQUVFLEtBQUssS0FBS0MsS0FGdEI7QUFHSSxNQUFFLHFDQUE4QkEsS0FBOUIsQ0FITjtBQUlJLHFEQUF3Q0EsS0FBeEM7QUFKSixLQUtRQyxLQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFP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LEVBQUVELE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQW5CSixFQXVCSSxNQUFDLFFBQUQ7QUFBVSxTQUFLLEVBQUV6QixLQUFqQjtBQUF3QixTQUFLLEVBQUUsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBYyxVQUFNLEVBQUV5QixNQUF0QjtBQUE4QixhQUFTLEVBQUVDLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsd0RBQUQ7QUFBVyxVQUFNLEVBQUVELE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQXZCSixDQURKO0FBOEJIOztHQXZDdUJOLHdCO1VBQ0pkLFM7OztNQURJYyx3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9QYXR0ZXJuLmFmNGY5YmNiZDk3ZGViMmRjZDNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIjtcclxuaW1wb3J0IFRhYiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5cclxuaW1wb3J0IFBhdHRlcm5MaXN0IGZyb20gXCIuL1BhdHRlcm5MaXN0XCI7XHJcbmltcG9ydCBTaW1wbGVTZWxlY3QgZnJvbSBcIi4vU2VsZWN0XCI7XHJcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi9DYWxlbmRhclwiO1xyXG5pbXBvcnQgQ2FsZW5kYXIyIGZyb20gXCIuLi90ZXN0L2NhbGVuZGFyXCI7XHJcbmltcG9ydCBDYWxlbmRhcjMgZnJvbSBcIi4uL3Rlc3QvQ2FsZW5kYXIzXCI7XHJcbmltcG9ydCBDYWxlbmRhcjQgZnJvbSBcIi4uL3Rlc3QvY2FsZW5kYXI0LmpzeFwiO1xyXG5cclxuaW50ZXJmYWNlIFRhYlBhbmVsUHJvcHMge1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBpbmRleDogYW55O1xyXG4gICAgdmFsdWU6IGFueTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGFiUGFuZWwocHJvcHM6IFRhYlBhbmVsUHJvcHMpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICBoaWRkZW49e3ZhbHVlICE9PSBpbmRleH1cclxuICAgICAgICAgICAgaWQ9e2BzY3JvbGxhYmxlLWF1dG8tdGFicGFuZWwtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e2BzY3JvbGxhYmxlLWF1dG8tdGFiLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgey4uLm90aGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3ZhbHVlID09PSBpbmRleCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IHA9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleDogYW55KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBgc2Nyb2xsYWJsZS1hdXRvLXRhYi0ke2luZGV4fWAsXHJcbiAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IGBzY3JvbGxhYmxlLWF1dG8tdGFicGFuZWwtJHtpbmRleH1gLFxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICAvLyBwYWRkaW5nVG9wOic3MHB4JyxcclxuICAgICAgICAvLyBkaXNwbGF5OidpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgYmFyU2l6ZToge1xyXG4gICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsYWJsZVRhYnNCdXR0b25BdXRvKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjaG9pY2UsIHNldENob2ljZV0gPSBSZWFjdC51c2VTdGF0ZShOdW1iZXIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8e30+LCBuZXdWYWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8QXBwQmFyXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInN0YXRpY1wiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJhclNpemV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Nyb2xsYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsQnV0dG9ucz1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzY3JvbGxhYmxlIGF1dG8gdGFicyBleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiUGF0dGVyblwiIHsuLi5hMTF5UHJvcHMoMCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkNhbGVuZGFyXCIgey4uLmExMXlQcm9wcygxKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfT5cclxuICAgICAgICAgICAgICAgIDxTaW1wbGVTZWxlY3QgY2hvaWNlPXtjaG9pY2V9IHNldENob2ljZT17c2V0Q2hvaWNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFBhdHRlcm5MaXN0IGNob2ljZT17Y2hvaWNlfSAvPlxyXG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MX0+XHJcbiAgICAgICAgICAgICAgICA8U2ltcGxlU2VsZWN0IGNob2ljZT17Y2hvaWNlfSBzZXRDaG9pY2U9e3NldENob2ljZX0vPlxyXG4gICAgICAgICAgICAgICAgPENhbGVuZGFyMyBjaG9pY2U9e2Nob2ljZX0gLz5cclxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==