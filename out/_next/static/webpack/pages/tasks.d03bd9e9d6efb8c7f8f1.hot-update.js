webpackHotUpdate_N_E("pages/tasks",{

/***/ "./src/components/view/InputNormal.tsx":
/*!*********************************************!*\
  !*** ./src/components/view/InputNormal.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormPropsTextFields; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\InputNormal.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch"
      }
    }
  });
});
function FormPropsTextFields(props) {
  _s();

  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  var onChangeHandler = function onChangeHandler(event) {
    console.log(event.target.value); // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成

    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_4__["taskDetailRegister"])([event.target.value, props.label, props.index]));
  }; // const check = userTaskInfo.tasks[parseInt(props.index)].detail;


  var check = userTaskInfo.tasks[parseInt(props.index)].detail[props.label];
  console.log('inputNormal check ' + props.label);
  console.log(check);

  if (props.required) {
    return (// <form className={classes.root} noValidate autoComplete="off">
      __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
        required: true,
        id: "standard-basic",
        label: props.label,
        onChange: onChangeHandler // value={userTaskInfo.tasks[parseInt(props.index)].detail[props.label]}
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }) // </form>

    );
  }

  return (// <form className={classes.root} noValidate autoComplete="off">
    __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: "standard-basic",
      label: props.label,
      onChange: onChangeHandler // value={}
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }) // </form>

  );
}

_s(FormPropsTextFields, "D0QvzFYO60X7H5R5opj3sOfH4UU=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = FormPropsTextFields;

var _c;

$RefreshReg$(_c, "FormPropsTextFields");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9JbnB1dE5vcm1hbC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsIkZvcm1Qcm9wc1RleHRGaWVsZHMiLCJwcm9wcyIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwib25DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJ0YXNrRGV0YWlsUmVnaXN0ZXIiLCJsYWJlbCIsImluZGV4IiwiY2hlY2siLCJwYXJzZUludCIsImRldGFpbCIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVFBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDekJDLDZFQUFZLENBQUM7QUFDVEMsUUFBSSxFQUFFO0FBQ0YsOEJBQXdCO0FBQ3BCQyxjQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FEWTtBQUVwQkMsYUFBSyxFQUFFO0FBRmE7QUFEdEI7QUFERyxHQUFELENBRGE7QUFBQSxDQUFELENBQTVCO0FBV2UsU0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQTJDO0FBQUE7O0FBQ3RELE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUNBLE1BQU1XLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRnNELHFCQUc3QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBc0JBLEtBQUssQ0FBQ0MsS0FBNUI7QUFBQSxHQUFELENBSGtCO0FBQUEsTUFHOUNDLFlBSDhDLGdCQUc5Q0EsWUFIOEM7O0FBSXRELE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFnQjtBQUNwQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUF6QixFQURvQyxDQUVwQzs7QUFDQVgsWUFBUSxDQUFDWSwrRUFBa0IsQ0FBQyxDQUFDTCxLQUFLLENBQUNHLE1BQU4sQ0FBYUMsS0FBZCxFQUFvQmIsS0FBSyxDQUFDZSxLQUExQixFQUFnQ2YsS0FBSyxDQUFDZ0IsS0FBdEMsQ0FBRCxDQUFuQixDQUFSO0FBQ0gsR0FKRCxDQUpzRCxDQVV0RDs7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHVixZQUFZLENBQUNELEtBQWIsQ0FBbUJZLFFBQVEsQ0FBQ2xCLEtBQUssQ0FBQ2dCLEtBQVAsQ0FBM0IsRUFBMENHLE1BQTFDLENBQWlEbkIsS0FBSyxDQUFDZSxLQUF2RCxDQUFkO0FBQ0FMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFxQlgsS0FBSyxDQUFDZSxLQUF2QztBQUNBTCxTQUFPLENBQUNDLEdBQVIsQ0FBWU0sS0FBWjs7QUFFQSxNQUFJakIsS0FBSyxDQUFDb0IsUUFBVixFQUFvQjtBQUNoQixXQUNJO0FBQ0EsWUFBQyxtRUFBRDtBQUNJLGdCQUFRLE1BRFo7QUFFSSxVQUFFLEVBQUMsZ0JBRlA7QUFHSSxhQUFLLEVBQUVwQixLQUFLLENBQUNlLEtBSGpCO0FBSUksZ0JBQVEsRUFBRVAsZUFKZCxDQUtJO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBU0k7O0FBVEo7QUFXSDs7QUFDRCxTQUNJO0FBQ0EsVUFBQyxtRUFBRDtBQUNJLFFBQUUsRUFBQyxnQkFEUDtBQUVJLFdBQUssRUFBRVIsS0FBSyxDQUFDZSxLQUZqQjtBQUdJLGNBQVEsRUFBRVAsZUFIZCxDQUlJO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBUUk7O0FBUko7QUFVSDs7R0F0Q3VCVCxtQjtVQUNKUixTLEVBQ0NZLHVELEVBQ1FDLHVEOzs7S0FITEwsbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MuZDAzYmQ5ZTlkNmVmYjhjN2Y4ZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgeyB0YXNrRGV0YWlsUmVnaXN0ZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5cclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcclxuICAgIGluZGV4OnN0cmluZztcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICAgIFwiJiAuTXVpVGV4dEZpZWxkLXJvb3RcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjVjaFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVByb3BzVGV4dEZpZWxkcyhwcm9wczogcHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIC8vIOOBk+OBk+OBp2V2ZW50LnRhcmdldC52YWx1ZeOBqOODqeODmeODqyjpgKPmg7PphY3liJfjga7jgq3jg7wp44KS6YCB44Gj44Gm5Yem55CG44GZ44KL44CC5Yem55CG44KC5pyq5L2c5oiQXHJcbiAgICAgICAgZGlzcGF0Y2godGFza0RldGFpbFJlZ2lzdGVyKFtldmVudC50YXJnZXQudmFsdWUscHJvcHMubGFiZWwscHJvcHMuaW5kZXhdKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IGNoZWNrID0gdXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KHByb3BzLmluZGV4KV0uZGV0YWlsO1xyXG4gICAgY29uc3QgY2hlY2sgPSB1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbcHJvcHMubGFiZWxdXHJcbiAgICBjb25zb2xlLmxvZygnaW5wdXROb3JtYWwgY2hlY2sgJytwcm9wcy5sYWJlbCk7XHJcbiAgICBjb25zb2xlLmxvZyhjaGVjayk7XHJcblxyXG4gICAgaWYgKHByb3BzLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8gPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZT17dXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KHByb3BzLmluZGV4KV0uZGV0YWlsW3Byb3BzLmxhYmVsXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgLy8gPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcbiAgICAgICAgICAgIGxhYmVsPXtwcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgLy8gdmFsdWU9e31cclxuICAgICAgICAvPlxyXG4gICAgICAgIC8vIDwvZm9ybT5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==