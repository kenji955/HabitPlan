webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/components/view/TaskModal.tsx":
/*!*******************************************!*\
  !*** ./src/components/view/TaskModal.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _InputNormal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputNormal */ "./src/components/view/InputNormal.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\TaskModal.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center" // width: "80%",
      // height: "80%",

    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      width: "50%",
      height: "80%",
      overflowY: "scroll",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  });
});
function TaskModal(props) {
  _s();

  var classes = useStyles(); // const [open, setOpen] = React.useState(false);

  var handleOpen = function handleOpen() {
    props.setOpen(props.index);
    console.log("props.index" + props.index);
    console.log("props.open" + props.open);
  };

  var handleClose = function handleClose() {
    props.setOpen(9999);
  }; // console.log("props.index" + props.index);
  // console.log("props.open" + props.open);


  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: classes.modal,
    open: props.index == props.open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3__["default"],
    BackdropProps: {
      timeout: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "in": props.index == props.open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("h2", {
    id: "transition-modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, "\u30BF\u30B9\u30AF\u8A73\u7D30\u753B\u9762", props.index + 1), __jsx("p", {
    id: "transition-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, "react-transition-group animates me."), __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "if-then\u30D7\u30E9\u30F3\u30CB\u30F3\u30B0",
    required: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }), __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u7FD2\u6163\u306E\u7A4D\u307F\u4E0A\u3052",
    required: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }), __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u30D1\u30BF\u30FC\u30F3",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }), __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u6C17\u304C\u9032\u307E\u306A\u3044\u3068\u304D",
    required: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }), __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u9577\u671F\u7684\u306B\u898B\u8FD4\u308A\u306E\u3042\u308B\u7FD2\u6163\u306E\u5373\u6642\u7684\u306A\u697D\u3057\u307F",
    required: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }), __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u76EE\u6A19",
    required: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }), __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u5B88\u308C\u306A\u304B\u3063\u305F\u6642\u306E\u7F70\u5247",
    required: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }), __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u30EC\u30D9\u30EB",
    required: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, "\u60AA\u3044\u7FD2\u6163\u3078\u306E\u5099\u3048"), __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u907F\u3051\u308B\u3053\u3068\u3067\u5F97\u3089\u308C\u308B\u30E1\u30EA\u30C3\u30C8",
    required: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }), __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u898B\u8FD4\u308A\u306E\u306A\u3044\u7FD2\u6163\u306B\u5BFE\u3059\u308B\u5373\u6642\u7684\u306A\u75DB\u307F",
    required: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  })))));
}

_s(TaskModal, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = TaskModal;

var _c;

$RefreshReg$(_c, "TaskModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9UYXNrTW9kYWwudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsIm1vZGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93WSIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsIlRhc2tNb2RhbCIsInByb3BzIiwiY2xhc3NlcyIsImhhbmRsZU9wZW4iLCJzZXRPcGVuIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwib3BlbiIsImhhbmRsZUNsb3NlIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDekJDLDZFQUFZLENBQUM7QUFDVEMsU0FBSyxFQUFFO0FBQ0hDLGFBQU8sRUFBRSxNQUROO0FBRUhDLGdCQUFVLEVBQUUsUUFGVDtBQUdIQyxvQkFBYyxFQUFFLFFBSGIsQ0FJSDtBQUNBOztBQUxHLEtBREU7QUFRVEMsU0FBSyxFQUFFO0FBQ0hDLHFCQUFlLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjQyxVQUFkLENBQXlCSCxLQUR2QztBQUVISSxXQUFLLEVBQUUsS0FGSjtBQUdIQyxZQUFNLEVBQUUsS0FITDtBQUlIQyxlQUFTLEVBQUUsUUFKUjtBQUtIQyxZQUFNLEVBQUUsZ0JBTEw7QUFNSEMsZUFBUyxFQUFFZCxLQUFLLENBQUNlLE9BQU4sQ0FBYyxDQUFkLENBTlI7QUFPSEMsYUFBTyxFQUFFaEIsS0FBSyxDQUFD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UyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy5mNzY0Y2UzMGMwYmRjOWViNWMwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIjtcclxuaW1wb3J0IElucHV0TiBmcm9tIFwiLi9JbnB1dE5vcm1hbFwiO1xyXG5pbXBvcnQgSW5wdXRSIGZyb20gXCIuL2lucHV0UmVxdWlyZWRcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFwZXI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2tNb2RhbChwcm9wczogYW55KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICAvLyBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5zZXRPcGVuKHByb3BzLmluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByb3BzLmluZGV4XCIgKyBwcm9wcy5pbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9wcy5vcGVuXCIgKyBwcm9wcy5vcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc2V0T3Blbig5OTk5KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJwcm9wcy5pbmRleFwiICsgcHJvcHMuaW5kZXgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJwcm9wcy5vcGVuXCIgKyBwcm9wcy5vcGVuKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PlxyXG4gICAgICAgICAgICAgICAgcmVhY3QtdHJhbnNpdGlvbi1ncm91cFxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvcGVuPXtwcm9wcy5pbmRleCA9PSBwcm9wcy5vcGVufVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGYWRlIGluPXtwcm9wcy5pbmRleCA9PSBwcm9wcy5vcGVufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOOCv+OCueOCr+ips+e0sOeUu+mdontwcm9wcy5pbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3QtdHJhbnNpdGlvbi1ncm91cCBhbmltYXRlcyBtZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXROIGxhYmVsPVwiaWYtdGhlbuODl+ODqeODs+ODi+ODs+OCsFwiIHJlcXVpcmVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE4gbGFiZWw9XCLnv5LmhaPjga7nqY3jgb/kuIrjgZJcIiByZXF1aXJlZD17ZmFsc2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE4gbGFiZWw9XCLjg5Hjgr/jg7zjg7NcIiByZXF1aXJlZD17dHJ1ZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TiBsYWJlbD1cIuawl+OBjOmAsuOBvuOBquOBhOOBqOOBjVwiIHJlcXVpcmVkPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TiBsYWJlbD1cIumVt+acn+eahOOBq+imi+i/lOOCiuOBruOBguOCi+e/kuaFo+OBruWNs+aZgueahOOBqualveOBl+OBv1wiIHJlcXVpcmVkPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TiBsYWJlbD1cIuebruaomVwiIHJlcXVpcmVkPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TiBsYWJlbD1cIuWuiOOCjOOBquOBi+OBo+OBn+aZguOBrue9sOWJh1wiIHJlcXVpcmVkPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TiBsYWJlbD1cIuODrOODmeODq1wiIHJlcXVpcmVkPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5oKq44GE57+S5oWj44G444Gu5YKZ44GIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXROIGxhYmVsPVwi6YG/44GR44KL44GT44Go44Gn5b6X44KJ44KM44KL44Oh44Oq44OD44OIXCIgcmVxdWlyZWQ9e2ZhbHNlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXROIGxhYmVsPVwi6KaL6L+U44KK44Gu44Gq44GE57+S5oWj44Gr5a++44GZ44KL5Y2z5pmC55qE44Gq55eb44G/XCIgcmVxdWlyZWQ9e2ZhbHNlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9