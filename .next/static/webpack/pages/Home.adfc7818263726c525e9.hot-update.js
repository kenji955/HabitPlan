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
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "./node_modules/@material-ui/icons/ArrowDownward.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\views\\ProductHeroLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var styles = function styles(theme) {
  return {
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: theme.palette.common.white,
      position: "relative",
      display: "flex",
      alignItems: "center",
      flexDirection: 'column'
    }, theme.breakpoints.up("sm"), {
      height: "80vh",
      minHeight: 500,
      maxHeight: 1300
    }),
    container: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(14),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    backdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.5,
      zIndex: -1
    },
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      zIndex: -2
    },
    arrowDown: {
      position: "absolute",
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
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, children, __jsx("div", {
    className: classes.backdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.background, backgroundClassName),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL29uZXBpcmF0ZS9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RIZXJvTGF5b3V0LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicm9vdCIsImNvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJicmVha3BvaW50cyIsInVwIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiY29udGFpbmVyIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsImJhY2tkcm9wIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiYmxhY2siLCJvcGFjaXR5IiwiekluZGV4IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImFycm93RG93biIsIlByb2R1Y3RIZXJvTGF5b3V0IiwicHJvcHMiLCJiYWNrZ3JvdW5kQ2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiY2xzeCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJub2RlIiwib2JqZWN0Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZCQyxRQUFJLEVBQUU7QUFDRkMsV0FBSyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FENUI7QUFFQUMsY0FBUSxFQUFFLFVBRlY7QUFHQUMsYUFBTyxFQUFFLE1BSFQ7QUFJQUMsZ0JBQVUsRUFBRSxRQUpaO0FBS0FDLG1CQUFhLEVBQUM7QUFMZCxPQU1DVCxLQUFLLENBQUNVLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBTkQsRUFNOEI7QUFDMUJDLFlBQU0sRUFBRSxNQURrQjtBQUUxQkMsZUFBUyxFQUFFLEdBRmU7QUFHMUJDLGVBQVMsRUFBRTtBQUhlLEtBTjlCLENBRG1CO0FBYXZCQyxhQUFTLEVBQUU7QUFDUEMsZUFBUyxFQUFFaEIsS0FBSyxDQUFDaUIsT0FBTixDQUFjLENBQWQsQ0FESjtBQUVQQyxrQkFBWSxFQUFFbEIsS0FBSyxDQUFDaUIsT0FBTixDQUFjLEVBQWQsQ0FGUDtBQUdQVixhQUFPLEVBQUUsTUFIRjtBQUlQRSxtQkFBYSxFQUFFLFFBSlI7QUFLUEQsZ0JBQVUsRUFBRTtBQUxMLEtBYlk7QUFvQnZCVyxZQUFRLEVBQUU7QUFDTmIsY0FBUSxFQUFFLFVBREo7QUFFTmMsVUFBSSxFQUFFLENBRkE7QUFHTkMsV0FBSyxFQUFFLENBSEQ7QUFJTkMsU0FBRyxFQUFFLENBSkM7QUFLTkMsWUFBTSxFQUFFLENBTEY7QUFNTkMscUJBQWUsRUFBRXhCLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxNQUFkLENBQXFCcUIsS0FOaEM7QUFPTkMsYUFBTyxFQUFFLEdBUEg7QUFRTkMsWUFBTSxFQUFFLENBQUM7QUFSSCxLQXBCYTtBQThCdkJDLGNBQVUsRUFBRTtBQUNSdEIsY0FBUSxFQUFFLFVBREY7QUFFUmMsVUFBSSxFQUFFLENBRkU7QUFHUkMsV0FBSyxFQUFFLENBSEM7QUFJUkMsU0FBRyxFQUFFLENBSkc7QUFLUkMsWUFBTSxFQUFFLENBTEE7QUFNUk0sb0JBQWMsRUFBRSxPQU5SO0FBT1JDLHNCQUFnQixFQUFFLFdBUFY7QUFRUkgsWUFBTSxFQUFFLENBQUM7QUFSRCxLQTlCVztBQXdDdkJJLGFBQVMsRUFBRTtBQUNQekIsY0FBUSxFQUFFLFVBREg7QUFFUGlCLFlBQU0sRUFBRXZCLEtBQUssQ0FBQ2lCLE9BQU4sQ0FBYyxDQUFkO0FBRkQ7QUF4Q1ksR0FBWjtBQUFBLENBQWY7O0FBOENBLFNBQVNlLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUFBLE1BQ3RCQyxtQkFEc0IsR0FDcUJELEtBRHJCLENBQ3RCQyxtQkFEc0I7QUFBQSxNQUNEQyxRQURDLEdBQ3FCRixLQURyQixDQUNERSxRQURDO0FBQUEsTUFDU0MsT0FEVCxHQUNxQkgsS0FEckIsQ0FDU0csT0FEVDtBQUc5QixTQUNJO0FBQVMsYUFBUyxFQUFFQSxPQUFPLENBQUNuQyxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtRUFBRDtBQUFXLGFBQVMsRUFBRW1DLE9BQU8sQ0FBQ3JCLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS29CLFFBREwsRUFFSTtBQUFLLGFBQVMsRUFBRUMsT0FBTyxDQUFDakIsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFDSSxhQUFTLEVBQUVrQixvREFBSSxDQUFDRCxPQUFPLENBQUNSLFVBQVQsRUFBcUJNLG1CQUFyQixDQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESixFQWVJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZKLENBREo7QUFtQkg7O0tBdEJRRixpQjtBQXdCVEEsaUJBQWlCLENBQUNNLFNBQWxCLEdBQThCO0FBQzFCSixxQkFBbUIsRUFBRUssaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFEWjtBQUUxQk4sVUFBUSxFQUFFSSxpREFBUyxDQUFDRyxJQUFWLENBQWVELFVBRkM7QUFHMUJMLFNBQU8sRUFBRUcsaURBQVMsQ0FBQ0ksTUFBVixDQUFpQkY7QUFIQSxDQUE5QjtBQU1lRywwSUFBVSxDQUFDN0MsTUFBRCxDQUFWLENBQW1CaUMsaUJBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvSG9tZS5hZGZjNzgxODI2MzcyNmM1MjVlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcbmltcG9ydCBBcnJvd0Rvd253YXJkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RG93bndhcmRcIjtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IFwiODB2aFwiLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiA1MDAsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDEzMDAsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMTQpLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICB9LFxuICAgIGJhY2tkcm9wOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcbiAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICB6SW5kZXg6IC0xLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgIHpJbmRleDogLTIsXG4gICAgfSxcbiAgICBhcnJvd0Rvd246IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIH0sXG59KTtcblxuZnVuY3Rpb24gUHJvZHVjdEhlcm9MYXlvdXQocHJvcHMpIHtcbiAgICBjb25zdCB7IGJhY2tncm91bmRDbGFzc05hbWUsIGNoaWxkcmVuLCBjbGFzc2VzIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wfSAvPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYmFja2dyb3VuZCwgYmFja2dyb3VuZENsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7LyogPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd0Rvd259XG4gICAgICAgICAgc3JjPVwiL3N0YXRpYy90aGVtZXMvb25lcGlyYXRlL3Byb2R1Y3RIZXJvQXJyb3dEb3duLnBuZ1wiXG4gICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgIGFsdD1cImFycm93IGRvd25cIlxuICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPEFycm93RG93bndhcmRJY29uIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuXG5Qcm9kdWN0SGVyb0xheW91dC5wcm9wVHlwZXMgPSB7XG4gICAgYmFja2dyb3VuZENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9kdWN0SGVyb0xheW91dCk7XG4iXSwic291cmNlUm9vdCI6IiJ9