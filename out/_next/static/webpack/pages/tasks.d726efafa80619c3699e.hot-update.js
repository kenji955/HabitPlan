webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/components/view/Popper.tsx":
/*!****************************************!*\
  !*** ./src/components/view/Popper.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimplePopper; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/RemoveCircle */ "./node_modules/@material-ui/icons/RemoveCircle.js");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");


var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\Popper.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    paper: {
      border: "1px solid",
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper
    }
  });
});
function SimplePopper() {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  var open = Boolean(anchorEl);
  var id = open ? "simple-popper" : undefined;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    edge: "end",
    "aria-label": "comments" // onClick={deleteTaskHandler(index)}
    ,
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: id,
    open: open,
    anchorEl: anchorEl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "The content of the Popper.")));
}

_s(SimplePopper, "vXA32r6EXukv831dcFOknrOnVCE=", false, function () {
  return [useStyles];
});

_c = SimplePopper;

var _c;

$RefreshReg$(_c, "SimplePopper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9Qb3BwZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInBhcGVyIiwiYm9yZGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsIlNpbXBsZVBvcHBlciIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0Iiwib3BlbiIsIkJvb2xlYW4iLCJpZCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUN6QkMsNkVBQVksQ0FBQztBQUNUQyxTQUFLLEVBQUU7QUFDSEMsWUFBTSxFQUFFLFdBREw7QUFFSEMsYUFBTyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBRk47QUFHSEMscUJBQWUsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJOO0FBSHZDO0FBREUsR0FBRCxDQURhO0FBQUEsQ0FBRCxDQUE1QjtBQVVlLFNBQVNPLFlBQVQsR0FBd0I7QUFBQTs7QUFDbkMsTUFBTUMsT0FBTyxHQUFHWixTQUFTLEVBQXpCOztBQURtQyx3QkFFSGEsNENBQUssQ0FBQ0MsUUFBTixDQUFtQyxJQUFuQyxDQUZHO0FBQUE7QUFBQSxNQUU1QkMsUUFGNEI7QUFBQSxNQUVsQkMsV0FGa0I7O0FBSW5DLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBMEM7QUFDMURGLGVBQVcsQ0FBQ0QsUUFBUSxHQUFHLElBQUgsR0FBVUcsS0FBSyxDQUFDQyxhQUF6QixDQUFYO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ04sUUFBRCxDQUFwQjtBQUNBLE1BQU1PLEVBQUUsR0FBR0YsSUFBSSxHQUFHLGVBQUgsR0FBcUJHLFNBQXBDO0FBRUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUksTUFBQyxvRUFBRDtBQUNJLFFBQUksRUFBQyxLQURUO0FBRUksa0JBQVcsVUFGZixDQUdJO0FBSEo7QUFJSSxXQUFPLEVBQUVOLFdBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JLE1BQUMsc0VBQUQ7QUFBa0IsU0FBSyxFQUFDLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQUpKLEVBWUksTUFBQyxnRUFBRDtBQUFRLE1BQUUsRUFBRUssRUFBWjtBQUFnQixRQUFJLEVBQUVGLElBQXRCO0FBQTRCLFlBQVEsRUFBRUwsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFSCxPQUFPLENBQUNSLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREosQ0FaSixDQURKO0FBa0JIOztHQTdCdUJPLFk7VUFDSlgsUzs7O0tBRElXLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MuZDcyNmVmYWZhODA2MTljMzY5OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFBvcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCI7XHJcbmltcG9ydCBSZW1vdmVDaXJjbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlQ2lyY2xlXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVQb3BwZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoYW5jaG9yRWwgPyBudWxsIDogZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICAgIGNvbnN0IGlkID0gb3BlbiA/IFwic2ltcGxlLXBvcHBlclwiIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gYXJpYS1kZXNjcmliZWRieT17aWR9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgVG9nZ2xlIFBvcHBlclxyXG4gICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXtkZWxldGVUYXNrSGFuZGxlcihpbmRleCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZUljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxQb3BwZXIgaWQ9e2lkfSBvcGVuPXtvcGVufSBhbmNob3JFbD17YW5jaG9yRWx9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlRoZSBjb250ZW50IG9mIHRoZSBQb3BwZXIuPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUG9wcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9