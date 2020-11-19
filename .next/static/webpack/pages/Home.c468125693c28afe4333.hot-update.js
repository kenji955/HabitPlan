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
      alignItems: "center"
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
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, children, __jsx("div", {
    className: classes.backdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.background, backgroundClassName),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  })), __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL29uZXBpcmF0ZS9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RIZXJvTGF5b3V0LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicm9vdCIsImNvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImJyZWFrcG9pbnRzIiwidXAiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJjb250YWluZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZmxleERpcmVjdGlvbiIsImJhY2tkcm9wIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiYmxhY2siLCJvcGFjaXR5IiwiekluZGV4IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImFycm93RG93biIsIlByb2R1Y3RIZXJvTGF5b3V0IiwicHJvcHMiLCJiYWNrZ3JvdW5kQ2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiY2xzeCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJub2RlIiwib2JqZWN0Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZCQyxRQUFJLEVBQUU7QUFDRkMsV0FBSyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FENUI7QUFFQUMsY0FBUSxFQUFFLFVBRlY7QUFHQUMsYUFBTyxFQUFFLE1BSFQ7QUFJQUMsZ0JBQVUsRUFBRTtBQUpaLE9BS0NSLEtBQUssQ0FBQ1MsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FMRCxFQUs4QjtBQUMxQkMsWUFBTSxFQUFFLE1BRGtCO0FBRTFCQyxlQUFTLEVBQUUsR0FGZTtBQUcxQkMsZUFBUyxFQUFFO0FBSGUsS0FMOUIsQ0FEbUI7QUFZdkJDLGFBQVMsRUFBRTtBQUNQQyxlQUFTLEVBQUVmLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFUEMsa0JBQVksRUFBRWpCLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxFQUFkLENBRlA7QUFHUFQsYUFBTyxFQUFFLE1BSEY7QUFJUFcsbUJBQWEsRUFBRSxRQUpSO0FBS1BWLGdCQUFVLEVBQUU7QUFMTCxLQVpZO0FBbUJ2QlcsWUFBUSxFQUFFO0FBQ05iLGNBQVEsRUFBRSxVQURKO0FBRU5jLFVBQUksRUFBRSxDQUZBO0FBR05DLFdBQUssRUFBRSxDQUhEO0FBSU5DLFNBQUcsRUFBRSxDQUpDO0FBS05DLFlBQU0sRUFBRSxDQUxGO0FBTU5DLHFCQUFlLEVBQUV4QixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQnFCLEtBTmhDO0FBT05DLGFBQU8sRUFBRSxHQVBIO0FBUU5DLFlBQU0sRUFBRSxDQUFDO0FBUkgsS0FuQmE7QUE2QnZCQyxjQUFVLEVBQUU7QUFDUnRCLGNBQVEsRUFBRSxVQURGO0FBRVJjLFVBQUksRUFBRSxDQUZFO0FBR1JDLFdBQUssRUFBRSxDQUhDO0FBSVJDLFNBQUcsRUFBRSxDQUpHO0FBS1JDLFlBQU0sRUFBRSxDQUxBO0FBTVJNLG9CQUFjLEVBQUUsT0FOUjtBQU9SQyxzQkFBZ0IsRUFBRSxXQVBWO0FBUVJILFlBQU0sRUFBRSxDQUFDO0FBUkQsS0E3Qlc7QUF1Q3ZCSSxhQUFTLEVBQUU7QUFDUHpCLGNBQVEsRUFBRSxVQURIO0FBRVBpQixZQUFNLEVBQUV2QixLQUFLLENBQUNnQixPQUFOLENBQWMsQ0FBZDtBQUZEO0FBdkNZLEdBQVo7QUFBQSxDQUFmOztBQTZDQSxTQUFTZ0IsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQUEsTUFDdEJDLG1CQURzQixHQUNxQkQsS0FEckIsQ0FDdEJDLG1CQURzQjtBQUFBLE1BQ0RDLFFBREMsR0FDcUJGLEtBRHJCLENBQ0RFLFFBREM7QUFBQSxNQUNTQyxPQURULEdBQ3FCSCxLQURyQixDQUNTRyxPQURUO0FBRzlCLFNBQ0k7QUFBUyxhQUFTLEVBQUVBLE9BQU8sQ0FBQ25DLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1FQUFEO0FBQVcsYUFBUyxFQUFFbUMsT0FBTyxDQUFDdEIsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLcUIsUUFETCxFQUVJO0FBQUssYUFBUyxFQUFFQyxPQUFPLENBQUNqQixRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUNJLGFBQVMsRUFBRWtCLG9EQUFJLENBQUNELE9BQU8sQ0FBQ1IsVUFBVCxFQUFxQk0sbUJBQXJCLENBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKLEVBZUksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkosQ0FESjtBQW1CSDs7S0F0QlFGLGlCO0FBd0JUQSxpQkFBaUIsQ0FBQ00sU0FBbEIsR0FBOEI7QUFDMUJKLHFCQUFtQixFQUFFSyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURaO0FBRTFCTixVQUFRLEVBQUVJLGlEQUFTLENBQUNHLElBQVYsQ0FBZUQsVUFGQztBQUcxQkwsU0FBTyxFQUFFRyxpREFBUyxDQUFDSSxNQUFWLENBQWlCRjtBQUhBLENBQTlCO0FBTWVHLDBJQUFVLENBQUM3QyxNQUFELENBQVYsQ0FBbUJpQyxpQkFBbkIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Ib21lLmM0NjgxMjU2OTNjMjhhZmU0MzMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xuaW1wb3J0IEFycm93RG93bndhcmRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEb3dud2FyZFwiO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcbiAgICAgICAgICAgIGhlaWdodDogXCI4MHZoXCIsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgIG1heEhlaWdodDogMTMwMCxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxNCksXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgYmFja2Ryb3A6IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxuICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgIHpJbmRleDogLTEsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgekluZGV4OiAtMixcbiAgICB9LFxuICAgIGFycm93RG93bjoge1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbn0pO1xuXG5mdW5jdGlvbiBQcm9kdWN0SGVyb0xheW91dChwcm9wcykge1xuICAgIGNvbnN0IHsgYmFja2dyb3VuZENsYXNzTmFtZSwgY2hpbGRyZW4sIGNsYXNzZXMgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2Ryb3B9IC8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5iYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kQ2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93RG93bn1cbiAgICAgICAgICBzcmM9XCIvc3RhdGljL3RoZW1lcy9vbmVwaXJhdGUvcHJvZHVjdEhlcm9BcnJvd0Rvd24ucG5nXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgYWx0PVwiYXJyb3cgZG93blwiXG4gICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8QXJyb3dEb3dud2FyZEljb24gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5cblByb2R1Y3RIZXJvTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgICBiYWNrZ3JvdW5kQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFByb2R1Y3RIZXJvTGF5b3V0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=