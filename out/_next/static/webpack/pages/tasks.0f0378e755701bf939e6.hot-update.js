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
      return deleteData();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRm9ybUNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiRm9ybUNvbXBvbmVudCIsInJlZ2lzdGVyRGF0YSIsInVzZVJlZ2lzdGVyRGF0YSIsInVwZGF0ZURhdGEiLCJ1c2VVcGRhdGVEYXRhIiwiZGVsZXRlRGF0YSIsInVzZURlbHRlRGF0YSIsInVzZVN0YXRlIiwia2V5RGF0YSIsInNldEtleURhdGEiLCJ2YWx1ZURhdGEiLCJzZXRWYWx1ZURhdGEiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFDcEMsTUFBTUMsWUFBWSxHQUFHQyxnRUFBZSxFQUFwQztBQUNBLE1BQU1DLFVBQVUsR0FBR0MsOERBQWEsRUFBaEM7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLDZEQUFZLEVBQS9COztBQUhvQyxrQkFLTkMsc0RBQVEsQ0FBUyxFQUFULENBTEY7QUFBQSxNQUs3QkMsT0FMNkI7QUFBQSxNQUtwQkMsVUFMb0I7O0FBQUEsbUJBTUZGLHNEQUFRLENBQVMsRUFBVCxDQU5OO0FBQUEsTUFNN0JHLFNBTjZCO0FBQUEsTUFNbEJDLFlBTmtCOztBQVFwQyxTQUNJLG1FQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDUyxHQURULEVBRUk7QUFDSSxlQUFXLEVBQUMsS0FEaEI7QUFFSSxZQUFRLEVBQUUsa0JBQUNDLEtBQUQ7QUFBQSxhQUNOSCxVQUFVLENBQUNHLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBREo7QUFBQSxLQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNXLEdBRFgsRUFFSTtBQUNJLGVBQVcsRUFBQyxPQURoQjtBQUVJLFlBQVEsRUFBRSxrQkFBQ0YsS0FBRDtBQUFBLGFBQ05ELFlBQVksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FETjtBQUFBLEtBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBVkosRUFtQkk7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNYixZQUFZLENBQUMsOEZBQUdPLE9BQUosRUFBY0UsU0FBZCxFQUFsQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkJKLEVBc0JJO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVAsVUFBVSxDQUFDLDhGQUFHSyxPQUFKLEVBQWNFLFNBQWQsRUFBaEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXRCSixFQXlCSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1MLFVBQVUsRUFBaEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQXpCSixDQURKO0FBNkJIOztHQXJDdUJMLGE7VUFDQ0Usd0QsRUFDRkUsc0QsRUFDQUUscUQ7OztLQUhDTixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhc2tzLjBmMDM3OGU3NTU3MDFiZjkzOWU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlZ2lzdGVyRGF0YSwgdXNlVXBkYXRlRGF0YSwgdXNlRGVsdGVEYXRhIH0gZnJvbSBcIi4vREJGZXRjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IHVzZVJlZ2lzdGVyRGF0YSgpO1xyXG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IHVzZVVwZGF0ZURhdGEoKTtcclxuICAgIGNvbnN0IGRlbGV0ZURhdGEgPSB1c2VEZWx0ZURhdGEoKTtcclxuXHJcbiAgICBjb25zdCBba2V5RGF0YSwgc2V0S2V5RGF0YV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gICAgY29uc3QgW3ZhbHVlRGF0YSwgc2V0VmFsdWVEYXRhXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICBLZXk6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXlEYXRhKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICBWYWx1ZTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVEYXRhKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlZ2lzdGVyRGF0YSh7IFtrZXlEYXRhXTogdmFsdWVEYXRhIH0pfT5cclxuICAgICAgICAgICAgICAgIOeZu+mMslxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cGRhdGVEYXRhKHsgW2tleURhdGFdOiB2YWx1ZURhdGEgfSl9PlxyXG4gICAgICAgICAgICAgICAg5pu05pawXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZURhdGEoKX0+5YWo5raI44GXPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=