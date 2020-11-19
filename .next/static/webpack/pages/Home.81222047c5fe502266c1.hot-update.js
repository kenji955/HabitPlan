webpackHotUpdate_N_E("pages/Home",{

/***/ "./src/onepirate/modules/views/ProductHeroLayout.js":
/*!**********************************************************!*\
  !*** ./src/onepirate/modules/views/ProductHeroLayout.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");

var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\views\\ProductHeroLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var styles = function styles(theme) {
  return {
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: theme.palette.common.white,
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }, theme.breakpoints.up('sm'), {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300
    }),
    container: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(14),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    backdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.5,
      zIndex: -1
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: -2
    },
    arrowDown: {
      position: 'absolute',
      bottom: theme.spacing(4)
    }
  };
};

function ProductHeroLayout(props) {
  var backgroundClassName = props.backgroundClassName,
      children = props.children,
      classes = props.classes;
  return __jsx("section", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, children, __jsx("div", {
    className: classes.backdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.background, backgroundClassName),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx("img", {
    className: classes.arrowDown,
    src: "/static/themes/onepirate/productHeroArrowDown.png",
    height: "16",
    width: "12",
    alt: "arrow down",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  })));
}

_c = ProductHeroLayout;
ProductHeroLayout.propTypes = {
  backgroundClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(ProductHeroLayout));

var _c;

$RefreshReg$(_c, "ProductHeroLayout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL29uZXBpcmF0ZS9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RIZXJvTGF5b3V0LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicm9vdCIsImNvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImJyZWFrcG9pbnRzIiwidXAiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJjb250YWluZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZmxleERpcmVjdGlvbiIsImJhY2tkcm9wIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiYmxhY2siLCJvcGFjaXR5IiwiekluZGV4IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImFycm93RG93biIsIlByb2R1Y3RIZXJvTGF5b3V0IiwicHJvcHMiLCJiYWNrZ3JvdW5kQ2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiY2xzeCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJub2RlIiwib2JqZWN0Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUQxQjtBQUVGQyxjQUFRLEVBQUUsVUFGUjtBQUdGQyxhQUFPLEVBQUUsTUFIUDtBQUlGQyxnQkFBVSxFQUFFO0FBSlYsT0FLRFIsS0FBSyxDQUFDUyxXQUFOLENBQWtCQyxFQUFsQixD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Yy93ZWJwYWNrL3BhZ2VzL0hvbWUuODEyMjIwNDdjNWZlNTAyMjY2YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBoZWlnaHQ6ICc4MHZoJyxcbiAgICAgIG1pbkhlaWdodDogNTAwLFxuICAgICAgbWF4SGVpZ2h0OiAxMzAwLFxuICAgIH0sXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMTQpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcbiAgYmFja2Ryb3A6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcbiAgICBvcGFjaXR5OiAwLjUsXG4gICAgekluZGV4OiAtMSxcbiAgfSxcbiAgYmFja2dyb3VuZDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICB6SW5kZXg6IC0yLFxuICB9LFxuICBhcnJvd0Rvd246IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gUHJvZHVjdEhlcm9MYXlvdXQocHJvcHMpIHtcbiAgY29uc3QgeyBiYWNrZ3JvdW5kQ2xhc3NOYW1lLCBjaGlsZHJlbiwgY2xhc3NlcyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmJhY2tncm91bmQsIGJhY2tncm91bmRDbGFzc05hbWUpfSAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93RG93bn1cbiAgICAgICAgICBzcmM9XCIvc3RhdGljL3RoZW1lcy9vbmVwaXJhdGUvcHJvZHVjdEhlcm9BcnJvd0Rvd24ucG5nXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgYWx0PVwiYXJyb3cgZG93blwiXG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cblByb2R1Y3RIZXJvTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgYmFja2dyb3VuZENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFByb2R1Y3RIZXJvTGF5b3V0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=