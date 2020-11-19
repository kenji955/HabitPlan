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
      backgroundImage: {
        backgroundImage: backgroundImage
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL29uZXBpcmF0ZS9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RIZXJvLmpzIl0sIm5hbWVzIjpbImJhY2tncm91bmRJbWFnZSIsInN0eWxlcyIsInRoZW1lIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJ1dHRvbiIsIm1pbldpZHRoIiwiaDUiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1vcmUiLCJQcm9kdWN0SGVybyIsInByb3BzIiwiY2xhc3NlcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcseUJBQXhCLEMsQ0FDQTs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsY0FBVSxFQUFFO0FBQ1ZILHFCQUFlLEVBQUU7QUFBQ0EsdUJBQWUsRUFBZkE7QUFBRCxPQURQO0FBRVY7QUFDQUksd0JBQWtCLEVBQUU7QUFIVixLQURhO0FBTXpCQyxVQUFNLEVBQUU7QUFDTkMsY0FBUSxFQUFFO0FBREosS0FOaUI7QUFTekJDLE1BQUUsRUFBRTtBQUNGQyxrQkFBWSxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkLENBRGQ7QUFFQUMsZUFBUyxFQUFFUixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBRlgsT0FHQ1AsS0FBSyxDQUFDUyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUhELEVBRzhCO0FBQzVCRixlQUFTLEVBQUVSLEtBQUssQ0FBQ08sT0FBTixDQUFjLEVBQWQ7QUFEaUIsS0FIOUIsQ0FUdUI7QUFnQnpCSSxRQUFJLEVBQUU7QUFDSkgsZUFBUyxFQUFFUixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBRFA7QUFoQm1CLEdBQVo7QUFBQSxDQUFmOztBQXFCQSxTQUFTSyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUFBLE1BQ2xCQyxPQURrQixHQUNORCxLQURNLENBQ2xCQyxPQURrQjtBQUcxQixTQUNFLE1BQUMsMERBQUQ7QUFBbUIsdUJBQW1CLEVBQUVBLE9BQU8sQ0FBQ2IsVUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsOERBQUQ7QUFBWSxTQUFLLEVBQUMsU0FBbEI7QUFBNEIsU0FBSyxFQUFDLFFBQWxDO0FBQTJDLFdBQU8sRUFBQyxJQUFuRDtBQUF3RCxVQUFNLEVBQUMsUUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFKRixFQU9FLE1BQUMsOERBQUQ7QUFBWSxTQUFLLEVBQUMsU0FBbEI7QUFBNEIsU0FBSyxFQUFDLFFBQWxDO0FBQTJDLFdBQU8sRUFBQyxJQUFuRDtBQUF3RCxhQUFTLEVBQUVhLE9BQU8sQ0FBQ1QsRUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRUFQRixFQVVFLE1BQUMsMERBQUQ7QUFDRSxTQUFLLEVBQUMsV0FEUjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxhQUFTLEVBQUVTLE9BQU8sQ0FBQ1gsTUFKckI7QUFLRSxhQUFTLEVBQUMsR0FMWjtBQU1FLFFBQUksRUFBQyxvQ0FOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLEVBb0JFLE1BQUMsOERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBSyxFQUFDLFNBQWxDO0FBQTRDLGFBQVMsRUFBRVcsT0FBTyxDQUFDSCxJQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXBCRixDQURGO0FBMEJEOztLQTdCUUMsVztBQStCVEEsV0FBVyxDQUFDRyxTQUFaLEdBQXdCO0FBQ3RCRCxTQUFPLEVBQUVFLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREosQ0FBeEI7QUFJZUMsMElBQVUsQ0FBQ3BCLE1BQUQsQ0FBVixDQUFtQmEsV0FBbkIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Ib21lLjBiZTg1OWEwMTFjNTU1ZGYyNTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknO1xuaW1wb3J0IFByb2R1Y3RIZXJvTGF5b3V0IGZyb20gJy4vUHJvZHVjdEhlcm9MYXlvdXQnO1xuLy8gaW1wb3J0IGJhY2tncm91bmRJbWFnZSBmcm9tICcuLi8uLi8uLi9pbWFnZS9iZy1jYWxlbmRhci5zdmcnO1xuXG5jb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSAnL3N0YXRpYy9iZy1jYWxlbmRhci5zdmcnO1xuLy8gY29uc3QgYmFja2dyb3VuZEltYWdlID0gJy4uLy4uLy4uL2ltYWdlL2JnLWNhbGVuZGFyLnN2Zyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgYmFja2dyb3VuZDoge1xuICAgIGJhY2tncm91bmRJbWFnZToge2JhY2tncm91bmRJbWFnZX0sXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiAnIzdmYzdkOScsIC8vIEF2ZXJhZ2UgY29sb3Igb2YgdGhlIGJhY2tncm91bmQgaW1hZ2UuXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWluV2lkdGg6IDIwMCxcbiAgfSxcbiAgaDU6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxMCksXG4gICAgfSxcbiAgfSxcbiAgbW9yZToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBQcm9kdWN0SGVybyhwcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RIZXJvTGF5b3V0IGJhY2tncm91bmRDbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH0+XG4gICAgICB7LyogSW5jcmVhc2UgdGhlIG5ldHdvcmsgbG9hZGluZyBwcmlvcml0eSBvZiB0aGUgYmFja2dyb3VuZCBpbWFnZS4gKi99XG4gICAgICB7LyogPGltZyBzcmM9e2JhY2tncm91bmRJbWFnZX0gYWx0PVwiaW5jcmVhc2UgcHJpb3JpdHlcIiAvPiAqL31cbiAgICAgIHsvKiA8aW1nIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBzcmM9e2JhY2tncm91bmRJbWFnZX0gYWx0PVwiaW5jcmVhc2UgcHJpb3JpdHlcIiAvPiAqL31cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiaW5oZXJpdFwiIGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImgyXCIgbWFya2VkPVwiY2VudGVyXCI+XG4gICAgICAgIFVwZ3JhZGUgeW91ciBTdW5kYXlzXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImluaGVyaXRcIiBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJoNVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oNX0+XG4gICAgICAgIEVuam95IHNlY3JldCBvZmZlcnMgdXAgdG8gLTcwJSBvZmYgdGhlIGJlc3QgbHV4dXJ5IGhvdGVscyBldmVyeSBTdW5kYXkuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICBocmVmPVwiL3ByZW1pdW0tdGhlbWVzL29uZXBpcmF0ZS9zaWduLXVwL1wiXG4gICAgICA+XG4gICAgICAgIFJlZ2lzdGVyXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3JlfT5cbiAgICAgICAgRGlzY292ZXIgdGhlIGV4cGVyaWVuY2VcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L1Byb2R1Y3RIZXJvTGF5b3V0PlxuICApO1xufVxuXG5Qcm9kdWN0SGVyby5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9kdWN0SGVybyk7XG4iXSwic291cmNlUm9vdCI6IiJ9