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
        onChange: onChangeHandler,
        value: userTaskInfo.tasks[parseInt(props.index)].detail[props.label],
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
      onChange: onChangeHandler,
      value: userTaskInfo.tasks[parseInt(props.index)].detail[props.label],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9JbnB1dE5vcm1hbC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsIkZvcm1Qcm9wc1RleHRGaWVsZHMiLCJwcm9wcyIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwib25DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJ0YXNrRGV0YWlsUmVnaXN0ZXIiLCJsYWJlbCIsImluZGV4IiwiY2hlY2siLCJwYXJzZUludCIsImRldGFpbCIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVFBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDekJDLDZFQUFZLENBQUM7QUFDVEMsUUFBSSxFQUFFO0FBQ0YsOEJBQXdCO0FBQ3BCQyxjQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FEWTtBQUVwQkMsYUFBSyxFQUFFO0FBRmE7QUFEdEI7QUFERyxHQUFELENBRGE7QUFBQSxDQUFELENBQTVCO0FBV2UsU0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQTJDO0FBQUE7O0FBQ3RELE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUNBLE1BQU1XLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRnNELHFCQUc3QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBc0JBLEtBQUssQ0FBQ0MsS0FBNUI7QUFBQSxHQUFELENBSGtCO0FBQUEsTUFHOUNDLFlBSDhDLGdCQUc5Q0EsWUFIOEM7O0FBSXRELE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFnQjtBQUNwQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUF6QixFQURvQyxDQUVwQzs7QUFDQVgsWUFBUSxDQUFDWSwrRUFBa0IsQ0FBQyxDQUFDTCxLQUFLLENBQUNHLE1BQU4sQ0FBYUMsS0FBZCxFQUFvQmIsS0FBSyxDQUFDZSxLQUExQixFQUFnQ2YsS0FBSyxDQUFDZ0IsS0FBdEMsQ0FBRCxDQUFuQixDQUFSO0FBQ0gsR0FKRCxDQUpzRCxDQVV0RDs7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHVixZQUFZLENBQUNELEtBQWIsQ0FBbUJZLFFBQVEsQ0FBQ2xCLEtBQUssQ0FBQ2dCLEtBQVAsQ0FBM0IsRUFBMENHLE1BQTFDLENBQWlEbkIsS0FBSyxDQUFDZSxLQUF2RCxDQUFkO0FBQ0FMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFxQlgsS0FBSyxDQUFDZSxLQUF2QztBQUNBTCxTQUFPLENBQUNDLEdBQVIsQ0FBWU0sS0FBWjs7QUFFQSxNQUFJakIsS0FBSyxDQUFDb0IsUUFBVixFQUFvQjtBQUNoQixXQUNJO0FBQ0EsWUFBQyxtRUFBRDtBQUNJLGdCQUFRLE1BRFo7QUFFSSxVQUFFLEVBQUMsZ0JBRlA7QUFHSSxhQUFLLEVBQUVwQixLQUFLLENBQUNlLEtBSGpCO0FBSUksZ0JBQVEsRUFBRVAsZUFKZDtBQUtJLGFBQUssRUFBRUQsWUFBWSxDQUFDRCxLQUFiLENBQW1CWSxRQUFRLENBQUNsQixLQUFLLENBQUNnQixLQUFQLENBQTNCLEVBQTBDRyxNQUExQyxDQUFpRG5CLEtBQUssQ0FBQ2UsS0FBdkQsQ0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FTSTs7QUFUSjtBQVdIOztBQUNELFNBQ0k7QUFDQSxVQUFDLG1FQUFEO0FBQ0ksUUFBRSxFQUFDLGdCQURQO0FBRUksV0FBSyxFQUFFZixLQUFLLENBQUNlLEtBRmpCO0FBR0ksY0FBUSxFQUFFUCxlQUhkO0FBSUksV0FBSyxFQUFFRCxZQUFZLENBQUNELEtBQWIsQ0FBbUJZLFFBQVEsQ0FBQ2xCLEtBQUssQ0FBQ2dCLEtBQVAsQ0FBM0IsRUFBMENHLE1BQTFDLENBQWlEbkIsS0FBSyxDQUFDZSxLQUF2RCxDQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixDQVFJOztBQVJKO0FBVUg7O0dBdEN1QmhCLG1CO1VBQ0pSLFMsRUFDQ1ksdUQsRUFDUUMsdUQ7OztLQUhMTCxtQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy5kODNhZWYxOGM4MjQ1MjQ4Yjk2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHRhc2tEZXRhaWxSZWdpc3RlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcblxyXG5pbnRlcmZhY2UgcHJvcHMge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHJlcXVpcmVkOiBib29sZWFuO1xyXG4gICAgaW5kZXg6c3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICAgXCImIC5NdWlUZXh0RmllbGQtcm9vdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyNWNoXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtUHJvcHNUZXh0RmllbGRzKHByb3BzOiBwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgLy8g44GT44GT44GnZXZlbnQudGFyZ2V0LnZhbHVl44Go44Op44OZ44OrKOmAo+aDs+mFjeWIl+OBruOCreODvCnjgpLpgIHjgaPjgablh6bnkIbjgZnjgovjgILlh6bnkIbjgoLmnKrkvZzmiJBcclxuICAgICAgICBkaXNwYXRjaCh0YXNrRGV0YWlsUmVnaXN0ZXIoW2V2ZW50LnRhcmdldC52YWx1ZSxwcm9wcy5sYWJlbCxwcm9wcy5pbmRleF0pKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29uc3QgY2hlY2sgPSB1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWw7XHJcbiAgICBjb25zdCBjaGVjayA9IHVzZXJUYXNrSW5mby50YXNrc1twYXJzZUludChwcm9wcy5pbmRleCldLmRldGFpbFtwcm9wcy5sYWJlbF1cclxuICAgIGNvbnNvbGUubG9nKCdpbnB1dE5vcm1hbCBjaGVjayAnK3Byb3BzLmxhYmVsKTtcclxuICAgIGNvbnNvbGUubG9nKGNoZWNrKTtcclxuXHJcbiAgICBpZiAocHJvcHMucmVxdWlyZWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbcHJvcHMubGFiZWxdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAvLyA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KHByb3BzLmluZGV4KV0uZGV0YWlsW3Byb3BzLmxhYmVsXX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIC8vIDwvZm9ybT5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==