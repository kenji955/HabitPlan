webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/components/test/firebaseTest/FormComponent.tsx":
/*!************************************************************!*\
  !*** ./src/components/test/firebaseTest/FormComponent.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormComponent; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DBFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DBFetch */ "./src/components/test/firebaseTest/DBFetch.tsx");


var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\test\\firebaseTest\\FormComponent.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function FormComponent() {
  _s();

  var registerData = Object(_DBFetch__WEBPACK_IMPORTED_MODULE_2__["useRegisterData"])();
  var updateData = Object(_DBFetch__WEBPACK_IMPORTED_MODULE_2__["useUpdateData"])();
  var deleteData = Object(_DBFetch__WEBPACK_IMPORTED_MODULE_2__["useDelteData"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      keyData = _useState[0],
      setKeyData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      valueData = _useState2[0],
      setValueData = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Key:", " ", __jsx("input", {
    placeholder: "key",
    onChange: function onChange(event) {
      return setKeyData(event.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Value:", " ", __jsx("input", {
    placeholder: "value",
    onChange: function onChange(event) {
      return setValueData(event.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  })), __jsx("button", {
    onClick: function onClick() {
      return registerData(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyData, valueData));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "\u767B\u9332"), __jsx("button", {
    onClick: function onClick() {
      return updateData(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyData, valueData));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "\u66F4\u65B0"), __jsx("button", {
    onClick: function onClick() {
      return deleteData(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyData, valueData));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "\u5168\u6D88\u3057"));
}

_s(FormComponent, "qS2CaRCitVtXxBFKGPxfFjFJ5Fc=", false, function () {
  return [_DBFetch__WEBPACK_IMPORTED_MODULE_2__["useRegisterData"], _DBFetch__WEBPACK_IMPORTED_MODULE_2__["useUpdateData"], _DBFetch__WEBPACK_IMPORTED_MODULE_2__["useDelteData"]];
});

_c = FormComponent;

var _c;

$RefreshReg$(_c, "FormComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRm9ybUNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiRm9ybUNvbXBvbmVudCIsInJlZ2lzdGVyRGF0YSIsInVzZVJlZ2lzdGVyRGF0YSIsInVwZGF0ZURhdGEiLCJ1c2VVcGRhdGVEYXRhIiwiZGVsZXRlRGF0YSIsInVzZURlbHRlRGF0YSIsInVzZVN0YXRlIiwia2V5RGF0YSIsInNldEtleURhdGEiLCJ2YWx1ZURhdGEiLCJzZXRWYWx1ZURhdGEiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFDcEMsTUFBTUMsWUFBWSxHQUFHQyxnRUFBZSxFQUFwQztBQUNBLE1BQU1DLFVBQVUsR0FBR0MsOERBQWEsRUFBaEM7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLDZEQUFZLEVBQS9COztBQUhvQyxrQkFLTkMsc0RBQVEsQ0FBUyxFQUFULENBTEY7QUFBQSxNQUs3QkMsT0FMNkI7QUFBQSxNQUtwQkMsVUFMb0I7O0FBQUEsbUJBTUZGLHNEQUFRLENBQVMsRUFBVCxDQU5OO0FBQUEsTUFNN0JHLFNBTjZCO0FBQUEsTUFNbEJDLFlBTmtCOztBQVFwQyxTQUNJLG1FQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDUyxHQURULEVBRUk7QUFDSSxlQUFXLEVBQUMsS0FEaEI7QUFFSSxZQUFRLEVBQUUsa0JBQUNDLEtBQUQ7QUFBQSxhQUNOSCxVQUFVLENBQUNHLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBREo7QUFBQSxLQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNXLEdBRFgsRUFFSTtBQUNJLGVBQVcsRUFBQyxPQURoQjtBQUVJLFlBQVEsRUFBRSxrQkFBQ0YsS0FBRDtBQUFBLGFBQ05ELFlBQVksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FETjtBQUFBLEtBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBVkosRUFtQkk7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNYixZQUFZLENBQUMsOEZBQUdPLE9BQUosRUFBY0UsU0FBZCxFQUFsQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkJKLEVBc0JJO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVAsVUFBVSxDQUFDLDhGQUFHSyxPQUFKLEVBQWNFLFNBQWQsRUFBaEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXRCSixFQXlCSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1MLFVBQVUsQ0FBQyw4RkFBR0csT0FBSixFQUFjRSxTQUFkLEVBQWhCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkF6QkosQ0FESjtBQTZCSDs7R0FyQ3VCVixhO1VBQ0NFLHdELEVBQ0ZFLHNELEVBQ0FFLHFEOzs7S0FIQ04sYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy4xYmYzNDkxZTNkNDkxMGYwODZmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWdpc3RlckRhdGEsIHVzZVVwZGF0ZURhdGEsIHVzZURlbHRlRGF0YSB9IGZyb20gXCIuL0RCRmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1Db21wb25lbnQoKSB7XHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSB1c2VSZWdpc3RlckRhdGEoKTtcclxuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSB1c2VVcGRhdGVEYXRhKCk7XHJcbiAgICBjb25zdCBkZWxldGVEYXRhID0gdXNlRGVsdGVEYXRhKCk7XHJcblxyXG4gICAgY29uc3QgW2tleURhdGEsIHNldEtleURhdGFdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICAgIGNvbnN0IFt2YWx1ZURhdGEsIHNldFZhbHVlRGF0YV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgS2V5OntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwia2V5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V5RGF0YShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgVmFsdWU6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlRGF0YShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZWdpc3RlckRhdGEoeyBba2V5RGF0YV06IHZhbHVlRGF0YSB9KX0+XHJcbiAgICAgICAgICAgICAgICDnmbvpjLJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXBkYXRlRGF0YSh7IFtrZXlEYXRhXTogdmFsdWVEYXRhIH0pfT5cclxuICAgICAgICAgICAgICAgIOabtOaWsFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVEYXRhKHsgW2tleURhdGFdOiB2YWx1ZURhdGEgfSl9PuWFqOa2iOOBlzwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9