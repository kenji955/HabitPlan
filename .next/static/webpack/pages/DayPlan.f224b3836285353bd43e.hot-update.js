webpackHotUpdate_N_E("pages/DayPlan",{

/***/ "./src/components/shared/withAuth.tsx":
/*!********************************************!*\
  !*** ./src/components/shared/withAuth.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withAuth; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../test/firebaseTest/firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");






var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\shared\\withAuth.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




function withAuth(Component) {
  // const [status,setStatus] = useState('LOADING');
  return /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(_class, _React$Component);

    var _super = _createSuper(_class);

    function _class(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class);

      _this = _super.call(this, props);
      _this.state = {
        status: "LOADING"
      };
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        _test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_8__["auth"].onAuthStateChanged(function (authUser) {
          if (authUser) {
            _this2.setState({
              status: "SIGNED_IN"
            }); //   setStatus('SIGNED_IN')

          } else {
            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");
          }
        });
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        var status = this.state;
        console.log(status);

        if (status == "LOADING") {
          return __jsx("h1", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 16
            }
          }, "Loading ......");
        } else if (status == "SIGNED_IN") {
          return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 16
            }
          }));
        }
      }
    }, {
      key: "render",
      value: function render() {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, this.renderContent());
      }
    }]);

    return _class;
  }(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
}
; // export default withAuth;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL3dpdGhBdXRoLnRzeCJdLCJuYW1lcyI6WyJ3aXRoQXV0aCIsIkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJzdGF0dXMiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aFVzZXIiLCJzZXRTdGF0ZSIsInJvdXRlciIsInB1c2giLCJjb25zb2xlIiwibG9nIiwicmVuZGVyQ29udGVudCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxTQUFsQixFQUFpQztBQUM1QztBQUNGO0FBQUE7O0FBQUE7O0FBQ0Usb0JBQVlDLEtBQVosRUFBdUI7QUFBQTs7QUFBQTs7QUFDckIsZ0NBQU1BLEtBQU47QUFDQSxZQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBTSxFQUFFO0FBREcsT0FBYjtBQUZxQjtBQUt0Qjs7QUFOSDtBQUFBO0FBQUEsMENBUXNCO0FBQUE7O0FBQ2xCQyw0RUFBSSxDQUFDQyxrQkFBTCxDQUF3QixVQUFBQyxRQUFRLEVBQUk7QUFDbEMsY0FBSUEsUUFBSixFQUFjO0FBQ1osa0JBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1pKLG9CQUFNLEVBQUU7QUFESSxhQUFkLEVBRFksQ0FJZDs7QUFDQyxXQUxELE1BS087QUFDTEssOERBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLFNBVEQ7QUFVRDtBQW5CSDtBQUFBO0FBQUEsc0NBcUJrQjtBQUNkLFlBQU1OLE1BQU0sR0FBRyxLQUFLRCxLQUFwQjtBQUNBUSxlQUFPLENBQUNDLEdBQVIsQ0FBWVIsTUFBWjs7QUFDQSxZQUFJQSxNQUFNLElBQUksU0FBZCxFQUF5QjtBQUN2QixpQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFQO0FBQ0QsU0FGRCxNQUVPLElBQUlBLE1BQU0sSUFBSSxXQUFkLEVBQTJCO0FBQ2hDLGlCQUFPLE1BQUMsU0FBRCx5RkFBZSxLQUFLRixLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDtBQUNGO0FBN0JIO0FBQUE7QUFBQSwrQkE4Qlc7QUFDUCxlQUFPLG1FQUFHLEtBQUtXLGFBQUwsRUFBSCxDQUFQO0FBQ0Q7QUFoQ0g7O0FBQUE7QUFBQSxJQUFxQkMsNENBQUssQ0FBQ2IsU0FBM0I7QUFrQ0Q7QUFBQSxDLENBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGF5UGxhbi5mMjI0YjM4MzYyODUzNTNiZDQzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vdGVzdC9maXJlYmFzZVRlc3QvZmlyZWJhc2VUZXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoQXV0aChDb21wb25lbnQ6YW55KSB7XHJcbiAgICAvLyBjb25zdCBbc3RhdHVzLHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnTE9BRElORycpO1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczphbnkpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIHN0YXR1czogXCJMT0FESU5HXCJcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aFVzZXIgPT4ge1xyXG4gICAgICAgIGlmIChhdXRoVXNlcikge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0YXR1czogXCJTSUdORURfSU5cIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICBzZXRTdGF0dXMoJ1NJR05FRF9JTicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSB0aGlzLnN0YXRlO1xyXG4gICAgICBjb25zb2xlLmxvZyhzdGF0dXMpO1xyXG4gICAgICBpZiAoc3RhdHVzID09IFwiTE9BRElOR1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT5Mb2FkaW5nIC4uLi4uLjwvaDE+O1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSBcIlNJR05FRF9JTlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiA8Pnt0aGlzLnJlbmRlckNvbnRlbnQoKX08Lz47XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGg7Il0sInNvdXJjZVJvb3QiOiIifQ==