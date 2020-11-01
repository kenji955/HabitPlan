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
        var status = this.state.status;
        console.log(status);

        if (status == "LOADING") {// return <h1>Loading ......</h1>;
        } else if (status == "SIGNED_IN") {
          return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 24
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
} // export default withAuth;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL3dpdGhBdXRoLnRzeCJdLCJuYW1lcyI6WyJ3aXRoQXV0aCIsIkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJzdGF0dXMiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aFVzZXIiLCJzZXRTdGF0ZSIsInJvdXRlciIsInB1c2giLCJjb25zb2xlIiwibG9nIiwicmVuZGVyQ29udGVudCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxTQUFsQixFQUFrQztBQUM3QztBQUNBO0FBQUE7O0FBQUE7O0FBQ0ksb0JBQVlDLEtBQVosRUFBd0I7QUFBQTs7QUFBQTs7QUFDcEIsZ0NBQU1BLEtBQU47QUFDQSxZQUFLQyxLQUFMLEdBQWE7QUFDVEMsY0FBTSxFQUFFO0FBREMsT0FBYjtBQUZvQjtBQUt2Qjs7QUFOTDtBQUFBO0FBQUEsMENBUXdCO0FBQUE7O0FBQ2hCQyw0RUFBSSxDQUFDQyxrQkFBTCxDQUF3QixVQUFDQyxRQUFELEVBQWM7QUFDbEMsY0FBSUEsUUFBSixFQUFjO0FBQ1Ysa0JBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1ZKLG9CQUFNLEVBQUU7QUFERSxhQUFkLEVBRFUsQ0FJVjs7QUFDSCxXQUxELE1BS087QUFDSEssOERBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSDtBQUNKLFNBVEQ7QUFVSDtBQW5CTDtBQUFBO0FBQUEsc0NBcUJvQjtBQUNaLFlBQU1OLE1BQU0sR0FBSSxLQUFLRCxLQUFMLENBQVdDLE1BQTNCO0FBQ0FPLGVBQU8sQ0FBQ0MsR0FBUixDQUFZUixNQUFaOztBQUNBLFlBQUlBLE1BQU0sSUFBSSxTQUFkLEVBQXlCLENBQ3JCO0FBQ0gsU0FGRCxNQUVPLElBQUlBLE1BQU0sSUFBSSxXQUFkLEVBQTJCO0FBQzlCLGlCQUFPLE1BQUMsU0FBRCx5RkFBZSxLQUFLRixLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDSDtBQUNKO0FBN0JMO0FBQUE7QUFBQSwrQkE4QmE7QUFDTCxlQUFPLG1FQUFHLEtBQUtXLGFBQUwsRUFBSCxDQUFQO0FBQ0g7QUFoQ0w7O0FBQUE7QUFBQSxJQUFxQkMsNENBQUssQ0FBQ2IsU0FBM0I7QUFrQ0gsQyxDQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0RheVBsYW4uMWE5OGQ3NWVmNTlkYjVlZTQzZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3Rlc3QvZmlyZWJhc2VUZXN0L2ZpcmViYXNlVGVzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEF1dGgoQ29tcG9uZW50OiBhbnkpIHtcclxuICAgIC8vIGNvbnN0IFtzdGF0dXMsc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdMT0FESU5HJyk7XHJcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCB7c3RhdHVzOiBzdHJpbmd9PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiTE9BRElOR1wiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKChhdXRoVXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1dGhVc2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJTSUdORURfSU5cIixcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHNldFN0YXR1cygnU0lHTkVEX0lOJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlckNvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyAgPSB0aGlzLnN0YXRlLnN0YXR1cztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzKTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBcIkxPQURJTkdcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIDxoMT5Mb2FkaW5nIC4uLi4uLjwvaDE+O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSBcIlNJR05FRF9JTlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPD57dGhpcy5yZW5kZXJDb250ZW50KCl9PC8+O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=