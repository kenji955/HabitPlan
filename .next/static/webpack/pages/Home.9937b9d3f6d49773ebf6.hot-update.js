webpackHotUpdate_N_E("pages/Home",{

/***/ "./src/onepirate/modules/views/ProductHero.js":
/*!****************************************************!*\
  !*** ./src/onepirate/modules/views/ProductHero.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./src/onepirate/modules/components/Button.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Typography */ "./src/onepirate/modules/components/Typography.js");
/* harmony import */ var _ProductHeroLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductHeroLayout */ "./src/onepirate/modules/views/ProductHeroLayout.js");

var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\views\\ProductHero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





 // import backgroundImage from '../../../image/bg-calendar.svg';

var backgroundImage = '/static/bg-calendar.svg'; // const backgroundImage = '../../../image/bg-calendar.svg';

var styles = function styles(theme) {
  return {
    background: {
      backgroundImage: backgroundImage,
      // backgroundColor: '#7fc7d9', // Average color of the background image.
      backgroundPosition: 'center'
    },
    button: {
      minWidth: 200
    },
    h5: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4)
    }, theme.breakpoints.up('sm'), {
      marginTop: theme.spacing(10)
    }),
    more: {
      marginTop: theme.spacing(2)
    }
  };
};

function ProductHero(props) {
  var classes = props.classes;
  return __jsx(_ProductHeroLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    backgroundClassName: classes.background,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit",
    align: "center",
    variant: "h2",
    marked: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "Upgrade your Sundays"), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit",
    align: "center",
    variant: "h5",
    className: classes.h5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Enjoy secret offers up to -70% off the best luxury hotels every Sunday."), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "secondary",
    variant: "contained",
    size: "large",
    className: classes.button,
    component: "a",
    href: "/premium-themes/onepirate/sign-up/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Register"), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body2",
    color: "inherit",
    className: classes.more,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Discover the experience"));
}

_c = ProductHero;
ProductHero.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(ProductHero));

var _c;

$RefreshReg$(_c, "ProductHero");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL29uZXBpcmF0ZS9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RIZXJvLmpzIl0sIm5hbWVzIjpbImJhY2tncm91bmRJbWFnZSIsInN0eWxlcyIsInRoZW1lIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJ1dHRvbiIsIm1pbldpZHRoIiwiaDUiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1vcmUiLCJQcm9kdWN0SGVybyIsInByb3BzIiwiY2xhc3NlcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcseUJBQXhCLEMsQ0FDQTs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsY0FBVSxFQUFFO0FBQ1ZILHFCQUFlLEVBQUVBLGVBRFA7QUFFVjtBQUNBSSx3QkFBa0IsRUFBRTtBQUhWLEtBRGE7QUFNekJDLFVBQU0sRUFBRTtBQUNOQyxjQUFRLEVBQUU7QUFESixLQU5pQjtBQVN6QkMsTUFBRSxFQUFFO0FBQ0ZDLGtCQUFZLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FEZDtBQUVBQyxlQUFTLEVBQUVSLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQ7QUFGWCxPQUdDUCxLQUFLLENBQUNTLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSEQsRUFHOEI7QUFDNUJGLGVBQVMsRUFBRVIsS0FBSyxDQUFDTyxPQUFOLENBQWMsRUFBZDtBQURpQixLQUg5QixDQVR1QjtBQWdCekJJLFFBQUksRUFBRTtBQUNKSCxlQUFTLEVBQUVSLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQ7QUFEUDtBQWhCbUIsR0FBWjtBQUFBLENBQWY7O0FBcUJBLFNBQVNLLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUEsTUFDbEJDLE9BRGtCLEdBQ05ELEtBRE0sQ0FDbEJDLE9BRGtCO0FBRzFCLFNBQ0UsTUFBQywwREFBRDtBQUFtQix1QkFBbUIsRUFBRUEsT0FBTyxDQUFDYixVQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyw4REFBRDtBQUFZLFNBQUssRUFBQyxTQUFsQjtBQUE0QixTQUFLLEVBQUMsUUFBbEM7QUFBMkMsV0FBTyxFQUFDLElBQW5EO0FBQXdELFVBQU0sRUFBQyxRQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpGLEVBT0UsTUFBQyw4REFBRDtBQUFZLFNBQUssRUFBQyxTQUFsQjtBQUE0QixTQUFLLEVBQUMsUUFBbEM7QUFBMkMsV0FBTyxFQUFDLElBQW5EO0FBQXdELGFBQVMsRUFBRWEsT0FBTyxDQUFDVCxFQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtFQVBGLEVBVUUsTUFBQywwREFBRDtBQUNFLFNBQUssRUFBQyxXQURSO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLGFBQVMsRUFBRVMsT0FBTyxDQUFDWCxNQUpyQjtBQUtFLGFBQVMsRUFBQyxHQUxaO0FBTUUsUUFBSSxFQUFDLG9DQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsRUFvQkUsTUFBQyw4REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixTQUFLLEVBQUMsU0FBbEM7QUFBNEMsYUFBUyxFQUFFVyxPQUFPLENBQUNILElBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBcEJGLENBREY7QUEwQkQ7O0tBN0JRQyxXO0FBK0JUQSxXQUFXLENBQUNHLFNBQVosR0FBd0I7QUFDdEJELFNBQU8sRUFBRUUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFESixDQUF4QjtBQUllQywwSUFBVSxDQUFDcEIsTUFBRCxDQUFWLENBQW1CYSxXQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0hvbWUuOTkzN2I5ZDNmNmQ0OTc3M2ViZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvVHlwb2dyYXBoeSc7XG5pbXBvcnQgUHJvZHVjdEhlcm9MYXlvdXQgZnJvbSAnLi9Qcm9kdWN0SGVyb0xheW91dCc7XG4vLyBpbXBvcnQgYmFja2dyb3VuZEltYWdlIGZyb20gJy4uLy4uLy4uL2ltYWdlL2JnLWNhbGVuZGFyLnN2Zyc7XG5cbmNvbnN0IGJhY2tncm91bmRJbWFnZSA9ICcvc3RhdGljL2JnLWNhbGVuZGFyLnN2Zyc7XG4vLyBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSAnLi4vLi4vLi4vaW1hZ2UvYmctY2FsZW5kYXIuc3ZnJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBiYWNrZ3JvdW5kOiB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBiYWNrZ3JvdW5kSW1hZ2UsXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiAnIzdmYzdkOScsIC8vIEF2ZXJhZ2UgY29sb3Igb2YgdGhlIGJhY2tncm91bmQgaW1hZ2UuXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWluV2lkdGg6IDIwMCxcbiAgfSxcbiAgaDU6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxMCksXG4gICAgfSxcbiAgfSxcbiAgbW9yZToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBQcm9kdWN0SGVybyhwcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RIZXJvTGF5b3V0IGJhY2tncm91bmRDbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH0+XG4gICAgICB7LyogSW5jcmVhc2UgdGhlIG5ldHdvcmsgbG9hZGluZyBwcmlvcml0eSBvZiB0aGUgYmFja2dyb3VuZCBpbWFnZS4gKi99XG4gICAgICB7LyogPGltZyBzcmM9e2JhY2tncm91bmRJbWFnZX0gYWx0PVwiaW5jcmVhc2UgcHJpb3JpdHlcIiAvPiAqL31cbiAgICAgIHsvKiA8aW1nIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBzcmM9e2JhY2tncm91bmRJbWFnZX0gYWx0PVwiaW5jcmVhc2UgcHJpb3JpdHlcIiAvPiAqL31cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiaW5oZXJpdFwiIGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImgyXCIgbWFya2VkPVwiY2VudGVyXCI+XG4gICAgICAgIFVwZ3JhZGUgeW91ciBTdW5kYXlzXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImluaGVyaXRcIiBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJoNVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oNX0+XG4gICAgICAgIEVuam95IHNlY3JldCBvZmZlcnMgdXAgdG8gLTcwJSBvZmYgdGhlIGJlc3QgbHV4dXJ5IGhvdGVscyBldmVyeSBTdW5kYXkuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICBocmVmPVwiL3ByZW1pdW0tdGhlbWVzL29uZXBpcmF0ZS9zaWduLXVwL1wiXG4gICAgICA+XG4gICAgICAgIFJlZ2lzdGVyXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3JlfT5cbiAgICAgICAgRGlzY292ZXIgdGhlIGV4cGVyaWVuY2VcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L1Byb2R1Y3RIZXJvTGF5b3V0PlxuICApO1xufVxuXG5Qcm9kdWN0SGVyby5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9kdWN0SGVybyk7XG4iXSwic291cmNlUm9vdCI6IiJ9