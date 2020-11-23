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
      userTaskInfo = _useSelector.userTaskInfo; // const onChangeHandler = (event: any) => {
  //     // console.log(event.target.value);
  //     dispatch(
  //         taskDetailRegister([event.target.value, props.label, props.index])
  //     );
  // };
  // 新規登録か更新かをチェックする。新規であればTrue


  var checkNew = userTaskInfo.tasks.length < parseInt(props.index);

  var onBlurHandler = function onBlurHandler(event) {
    console.log(props.label + '離れたぞ！！！');

    if (checkNew) {
      console.log(event.target.value);
      var contentsCopy = props.contents.slice();
      contentsCopy[props.contentIndex].value = event.target.value;
      props.setContents(contentsCopy);
    } else {
      console.log(event.target.value);
      dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_4__["taskDetailRegister"])([event.target.value, props.label, props.index]));
    }
  };

  var newTaskOnChangeHandler = function newTaskOnChangeHandler(event) {
    // console.log(event.target.value);
    // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成
    var contentsCopy = props.contents.slice();
    contentsCopy[props.contentIndex].value = event.target.value;
    props.setContents(contentsCopy);
  };

  var valueContent;

  if (checkNew) {
    return (// <form className={classes.root} noValidate autoComplete="off">
      __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
        required: true,
        id: "standard-basic",
        label: props.label // onChange={newTaskOnChangeHandler}
        ,
        onBlur: onBlurHandler,
        defaultValue: props.contents[props.contentIndex].value,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }
      }) // </form>

    );
  } else if (props.required) {
    return (// <form className={classes.root} noValidate autoComplete="off">
      __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
        required: true,
        id: "standard-basic",
        label: props.label // onChange={onChangeHandler}
        ,
        onBlur: onBlurHandler,
        defaultValue: userTaskInfo.tasks[parseInt(props.index)].detail[props.label],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      }) // </form>

    );
  }

  if (userTaskInfo.tasks[parseInt(props.index)].detail[props.label]) {
    valueContent = userTaskInfo.tasks[parseInt(props.index)].detail[props.label];
  } else {
    valueContent = '';
  }

  return (// <form className={classes.root} noValidate autoComplete="off">
    __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: "standard-basic",
      label: props.label // onChange={onChangeHandler}
      ,
      onBlur: onBlurHandler,
      defaultValue: valueContent // value={
      //     userTaskInfo.tasks[parseInt(props.index)].detail[props.label]
      // }
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9JbnB1dE5vcm1hbC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsIkZvcm1Qcm9wc1RleHRGaWVsZHMiLCJwcm9wcyIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwiY2hlY2tOZXciLCJsZW5ndGgiLCJwYXJzZUludCIsImluZGV4Iiwib25CbHVySGFuZGxlciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImxhYmVsIiwidGFyZ2V0IiwidmFsdWUiLCJjb250ZW50c0NvcHkiLCJjb250ZW50cyIsInNsaWNlIiwiY29udGVudEluZGV4Iiwic2V0Q29udGVudHMiLCJ0YXNrRGV0YWlsUmVnaXN0ZXIiLCJuZXdUYXNrT25DaGFuZ2VIYW5kbGVyIiwidmFsdWVDb250ZW50IiwicmVxdWlyZWQiLCJkZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBMEJBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDekJDLDZFQUFZLENBQUM7QUFDVEMsUUFBSSxFQUFFO0FBQ0YsOEJBQXdCO0FBQ3BCQyxjQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FEWTtBQUVwQkMsYUFBSyxFQUFFO0FBRmE7QUFEdEI7QUFERyxHQUFELENBRGE7QUFBQSxDQUFELENBQTVCO0FBV2UsU0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQTJDO0FBQUE7O0FBQ3RELE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUNBLE1BQU1XLFFBQVEsR0FBR0MsK0RBQVcsRUFB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QUEwQ2lCLE1BQTFDLENBQWlENUIsS0FBSyxDQUFDZ0IsS0FBdkQsQ0FBSixFQUFtRTtBQUMvRFUsZ0JBQVksR0FBR25CLFlBQVksQ0FBQ0QsS0FBYixDQUFtQkksUUFBUSxDQUFDVixLQUFLLENBQUNXLEtBQVAsQ0FBM0IsRUFBMENpQixNQUExQyxDQUFpRDVCLEtBQUssQ0FBQ2dCLEtBQXZELENBQWY7QUFDSCxHQUZELE1BRU87QUFDSFUsZ0JBQVksR0FBRyxFQUFmO0FBQ0g7O0FBQ0QsU0FDSTtBQUNBLFVBQUMsbUVBQUQ7QUFDSSxRQUFFLEVBQUMsZ0JBRFA7QUFFSSxXQUFLLEVBQUUxQixLQUFLLENBQUNnQixLQUZqQixDQUdJO0FBSEo7QUFJSSxZQUFNLEVBQUVKLGFBSlo7QUFLSSxrQkFBWSxFQUNSYyxZQU5SLENBUUE7QUFDQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBY0k7O0FBZEo7QUFnQkg7O0dBeEZ1QjNCLG1CO1VBQ0pSLFMsRUFDQ1ksdUQsRUFDUUMsdUQ7OztLQUhMTCxtQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy5iMTg0NGExOTNhNzQzODllZmQxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHRhc2tEZXRhaWxSZWdpc3RlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdXNlclRhc2tzVHlwZVwiO1xyXG5cclxudHlwZSBuZXdUYXNrc1R5cGUgPSB7XHJcbiAgICBbY29udGVudDogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcclxuICAgIGluZGV4OiBzdHJpbmc7XHJcbiAgICBjb250ZW50SW5kZXg6IG51bWJlcjtcclxuICAgIGNvbnRlbnRzOiB7XHJcbiAgICAgICAgbGFiZWw6IHN0cmluZztcclxuICAgICAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgfVtdO1xyXG4gICAgc2V0Q29udGVudHM6IFJlYWN0LkRpc3BhdGNoPFxyXG4gICAgICAgIFJlYWN0LlNldFN0YXRlQWN0aW9uPFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVtdXHJcbiAgICAgICAgPlxyXG4gICAgPjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICAgIFwiJiAuTXVpVGV4dEZpZWxkLXJvb3RcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjVjaFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVByb3BzVGV4dEZpZWxkcyhwcm9wczogcHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gICAgLy8gY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gICAgIGRpc3BhdGNoKFxyXG4gICAgLy8gICAgICAgICB0YXNrRGV0YWlsUmVnaXN0ZXIoW2V2ZW50LnRhcmdldC52YWx1ZSwgcHJvcHMubGFiZWwsIHByb3BzLmluZGV4XSlcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gfTtcclxuICAgIC8vIOaWsOimj+eZu+mMsuOBi+abtOaWsOOBi+OCkuODgeOCp+ODg+OCr+OBmeOCi+OAguaWsOimj+OBp+OBguOCjOOBsFRydWVcclxuICAgIGNvbnN0IGNoZWNrTmV3ID0gdXNlclRhc2tJbmZvLnRhc2tzLmxlbmd0aCA8IHBhcnNlSW50KHByb3BzLmluZGV4KTtcclxuICAgIGNvbnN0IG9uQmx1ckhhbmRsZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLmxhYmVsICsgJ+mbouOCjOOBn+OBnu+8ge+8ge+8gScpXHJcbiAgICAgICAgaWYgKGNoZWNrTmV3KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzQ29weSA9IHByb3BzLmNvbnRlbnRzLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGNvbnRlbnRzQ29weVtwcm9wcy5jb250ZW50SW5kZXhdLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBwcm9wcy5zZXRDb250ZW50cyhjb250ZW50c0NvcHkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbFJlZ2lzdGVyKFtldmVudC50YXJnZXQudmFsdWUsIHByb3BzLmxhYmVsLCBwcm9wcy5pbmRleF0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG5ld1Rhc2tPbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgLy8g44GT44GT44GnZXZlbnQudGFyZ2V0LnZhbHVl44Go44Op44OZ44OrKOmAo+aDs+mFjeWIl+OBruOCreODvCnjgpLpgIHjgaPjgablh6bnkIbjgZnjgovjgILlh6bnkIbjgoLmnKrkvZzmiJBcclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudHNDb3B5ID0gcHJvcHMuY29udGVudHMuc2xpY2UoKTtcclxuICAgICAgICBjb250ZW50c0NvcHlbcHJvcHMuY29udGVudEluZGV4XS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgcHJvcHMuc2V0Q29udGVudHMoY29udGVudHNDb3B5KTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHZhbHVlQ29udGVudDtcclxuXHJcbiAgICBpZiAoY2hlY2tOZXcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e25ld1Rhc2tPbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e29uQmx1ckhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLmNvbnRlbnRzW3Byb3BzLmNvbnRlbnRJbmRleF0udmFsdWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIC8vIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy5yZXF1aXJlZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17cHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbcHJvcHMubGFiZWxdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIC8vIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHVzZXJUYXNrSW5mby50YXNrc1twYXJzZUludChwcm9wcy5pbmRleCldLmRldGFpbFtwcm9wcy5sYWJlbF0pIHtcclxuICAgICAgICB2YWx1ZUNvbnRlbnQgPSB1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbcHJvcHMubGFiZWxdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZUNvbnRlbnQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAvLyBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICBvbkJsdXI9e29uQmx1ckhhbmRsZXJ9XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUNvbnRlbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vIHZhbHVlPXtcclxuICAgICAgICAvLyAgICAgdXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KHByb3BzLmluZGV4KV0uZGV0YWlsW3Byb3BzLmxhYmVsXVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIC8vIDwvZm9ybT5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==