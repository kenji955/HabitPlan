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

        if (status == "LOADING") {
          return __jsx("h1", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 16
            }
          }, "Loading ......");
        } else if (status == "SIGNED_IN") {
          return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL3dpdGhBdXRoLnRzeCJdLCJuYW1lcyI6WyJ3aXRoQXV0aCIsIkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJzdGF0dXMiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aFVzZXIiLCJzZXRTdGF0ZSIsInJvdXRlciIsInB1c2giLCJyZW5kZXJDb250ZW50IiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLFNBQWxCLEVBQWlDO0FBQzVDO0FBQ0Y7QUFBQTs7QUFBQTs7QUFDRSxvQkFBWUMsS0FBWixFQUF1QjtBQUFBOztBQUFBOztBQUNyQixnQ0FBTUEsS0FBTjtBQUNBLFlBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFNLEVBQUU7QUFERyxPQUFiO0FBRnFCO0FBS3RCOztBQU5IO0FBQUE7QUFBQSwwQ0FRc0I7QUFBQTs7QUFDbEJDLDRFQUFJLENBQUNDLGtCQUFMLENBQXdCLFVBQUFDLFFBQVEsRUFBSTtBQUNsQyxjQUFJQSxRQUFKLEVBQWM7QUFDWixrQkFBSSxDQUFDQyxRQUFMLENBQWM7QUFDWkosb0JBQU0sRUFBRTtBQURJLGFBQWQsRUFEWSxDQUlkOztBQUNDLFdBTEQsTUFLTztBQUNMSyw4REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsU0FURDtBQVVEO0FBbkJIO0FBQUE7QUFBQSxzQ0FvQmtCO0FBQ2QsWUFBTU4sTUFBTSxHQUFHLEtBQUtELEtBQXBCOztBQUNBLFlBQUlDLE1BQU0sSUFBSSxTQUFkLEVBQXlCO0FBQ3ZCLGlCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQVA7QUFDRCxTQUZELE1BRU8sSUFBSUEsTUFBTSxJQUFJLFdBQWQsRUFBMkI7QUFDaEMsaUJBQU8sTUFBQyxTQUFELHlGQUFlLEtBQUtGLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEO0FBQ0Y7QUEzQkg7QUFBQTtBQUFBLCtCQTRCVztBQUNQLGVBQU8sbUVBQUcsS0FBS1MsYUFBTCxFQUFILENBQVA7QUFDRDtBQTlCSDs7QUFBQTtBQUFBLElBQXFCQyw0Q0FBSyxDQUFDWCxTQUEzQjtBQWdDRDtBQUFBLEMsQ0FDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9EYXlQbGFuLjUxNTk0Mjc1YTk5ZmZjMjU1MjllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi90ZXN0L2ZpcmViYXNlVGVzdC9maXJlYmFzZVRlc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhBdXRoKENvbXBvbmVudDphbnkpIHtcclxuICAgIC8vIGNvbnN0IFtzdGF0dXMsc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdMT0FESU5HJyk7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOmFueSkge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgc3RhdHVzOiBcIkxPQURJTkdcIlxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoVXNlciA9PiB7XHJcbiAgICAgICAgaWYgKGF1dGhVc2VyKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3RhdHVzOiBcIlNJR05FRF9JTlwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgIHNldFN0YXR1cygnU0lHTkVEX0lOJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSB0aGlzLnN0YXRlO1xyXG4gICAgICBpZiAoc3RhdHVzID09IFwiTE9BRElOR1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT5Mb2FkaW5nIC4uLi4uLjwvaDE+O1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSBcIlNJR05FRF9JTlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiA8Pnt0aGlzLnJlbmRlckNvbnRlbnQoKX08Lz47XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGg7Il0sInNvdXJjZVJvb3QiOiIifQ==