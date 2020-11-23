webpackHotUpdate_N_E("pages/SignIn",{

/***/ "./src/components/view/SignIn.tsx":
/*!****************************************!*\
  !*** ./src/components/view/SignIn.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-google-button */ "./node_modules/react-google-button/es/index.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_google_button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../test/firebaseTest/FirebaseAuthComponent */ "./src/components/test/firebaseTest/FirebaseAuthComponent.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\SignIn.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Copyright © ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit",
    href: "https://material-ui.com/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Your Website"), " ", new Date().getFullYear(), ".");
}

_c = Copyright;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
});
function SignIn() {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      mailAdress = _useState[0],
      setMailAdress = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var MailOnChangeHandler = function MailOnChangeHandler(event) {
    // console.log(event.target.value);
    setMailAdress(event.target.value);
  };

  var passwordOnChangeHandler = function passwordOnChangeHandler(event) {
    // console.log(event.target.value);
    setPassword(event.target.value);
  };

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: "main",
    maxWidth: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "h1",
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "Sign in"), __jsx(react_google_button__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onClick: function onClick() {
      Object(_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_12__["signInWithPopup"])();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "or login with email address"), __jsx("div", {
    className: classes.form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    autoFocus: true,
    value: mailAdress,
    onChange: MailOnChangeHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password",
    value: password,
    onChange: passwordOnChangeHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    onClick: function onClick() {
      Object(_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_12__["signInWithEmailAndPassword"])(mailAdress, password);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, "\u30ED\u30B0\u30A4\u30F3"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    onClick: function onClick() {
      // ここをテストユーザーの固定値にする
      Object(_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_12__["signInWithEmailAndPassword"])('test@gmail.com', 'testpassword');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, "\u30C6\u30B9\u30C8\u30ED\u30B0\u30A4\u30F3"))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mt: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  })));
}

_s(SignIn, "1wLQuTheTJaZVgrxWuSX/E1yMTE=", false, function () {
  return [useStyles];
});

_c2 = SignIn;

var _c, _c2;

$RefreshReg$(_c, "Copyright");
$RefreshReg$(_c2, "SignIn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9TaWduSW4udHN4Il0sIm5hbWVzIjpbIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luVG9wIiwic3BhY2luZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImF2YXRhciIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiZm9ybSIsIndpZHRoIiwic3VibWl0IiwiU2lnbkluIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwibWFpbEFkcmVzcyIsInNldE1haWxBZHJlc3MiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiTWFpbE9uQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJwYXNzd29yZE9uQ2hhbmdlSGFuZGxlciIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLFNBQVNBLFNBQVQsR0FBcUI7QUFDakIsU0FDSSxNQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBQyxlQUFsQztBQUFrRCxTQUFLLEVBQUMsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLLGNBREwsRUFFSSxNQUFDLDhEQUFEO0FBQU0sU0FBSyxFQUFDLFNBQVo7QUFBc0IsUUFBSSxFQUFDLDBCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLEVBSVksR0FKWixFQUtLLElBQUlDLElB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QUQsRUFBa0IsY0FBbEIsQ0FBMUI7QUFDSCxLQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBM0NKLENBZkosQ0FGSixFQXVGSSxNQUFDLDZEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0F2RkosQ0FESjtBQTZGSDs7R0EzR3VCYixNO1VBQ0psQixTOzs7TUFESWtCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU2lnbkluLmQyZjdlNzgyYWZiOTYxZDE1NGYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZFwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuXHJcbmltcG9ydCBHb29nbGVCdXR0b24gZnJvbSBcInJlYWN0LWdvb2dsZS1idXR0b25cIjtcclxuaW1wb3J0IEZpcmViYXNlQXV0aENvbXBvbmVudCwge1xyXG4gICAgc2lnbkluV2l0aFBvcHVwLHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkXHJcbn0gZnJvbSBcIi4uL3Rlc3QvZmlyZWJhc2VUZXN0L0ZpcmViYXNlQXV0aENvbXBvbmVudFwiO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICB7XCJDb3B5cmlnaHQgwqkgXCJ9XHJcbiAgICAgICAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCJodHRwczovL21hdGVyaWFsLXVpLmNvbS9cIj5cclxuICAgICAgICAgICAgICAgIFlvdXIgV2Vic2l0ZVxyXG4gICAgICAgICAgICA8L0xpbms+e1wiIFwifVxyXG4gICAgICAgICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICAgICAgICB7XCIuXCJ9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBwYXBlcjoge1xyXG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIH0sXHJcbiAgICBmb3JtOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLCAvLyBGaXggSUUgMTEgaXNzdWUuXHJcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdDoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW21haWxBZHJlc3Msc2V0TWFpbEFkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IE1haWxPbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0TWFpbEFkcmVzcyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHBhc3N3b3JkT25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8R29vZ2xlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduSW5XaXRoUG9wdXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgICAgICBvciBsb2dpbiB3aXRoIGVtYWlsIGFkZHJlc3NcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWFpbEFkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e01haWxPbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXNzd29yZE9uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXs8Q2hlY2tib3ggdmFsdWU9XCJyZW1lbWJlclwiIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlbWVtYmVyIG1lXCJcclxuICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKG1haWxBZHJlc3MscGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDjg63jgrDjgqTjg7NcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOBk+OBk+OCkuODhuOCueODiOODpuODvOOCtuODvOOBruWbuuWumuWApOOBq+OBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoJ3Rlc3RAZ21haWwuY29tJywndGVzdHBhc3N3b3JkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOODhuOCueODiOODreOCsOOCpOODs1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gVXBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgPENvcHlyaWdodCAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==