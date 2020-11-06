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
    // console.log(event.target.value);
    // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_4__["taskDetailRegister"])([event.target.value, props.label, props.index]));
  };

  var newTaskOnChangeHandler = function newTaskOnChangeHandler(event) {
    // console.log(event.target.value);
    // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成
    var contentsCopy = props.contents.slice();
    contentsCopy[props.contentIndex].value = event.target.value;
    props.setContents(contentsCopy);
  }; // const check = userTaskInfo.tasks[parseInt(props.index)].detail;
  // const check = userTaskInfo.tasks[parseInt(props.index)].detail[props.label]
  // 新規登録か更新かをチェックする。新規であればTrue


  var checkNew = userTaskInfo.tasks.length < parseInt(props.index); // console.log("inputNormal check " + props.label);
  // console.log(checkNew);

  if (checkNew) {
    return (// <form className={classes.root} noValidate autoComplete="off">
      __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
        required: true,
        id: "standard-basic",
        label: props.label,
        onChange: newTaskOnChangeHandler,
        value: props.contents[props.contentIndex].value,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }
      }) // </form>

    );
  } else if (props.required) {
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
          lineNumber: 86,
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
        lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9JbnB1dE5vcm1hbC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsIkZvcm1Qcm9wc1RleHRGaWVsZHMiLCJwcm9wcyIsImNsYXNzZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRhc2tzIiwidXNlclRhc2tJbmZvIiwib25DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJ0YXNrRGV0YWlsUmVnaXN0ZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhYmVsIiwiaW5kZXgiLCJuZXdUYXNrT25DaGFuZ2VIYW5kbGVyIiwiY29udGVudHNDb3B5IiwiY29udGVudHMiLCJzbGljZSIsImNvbnRlbnRJbmRleCIsInNldENvbnRlbnRzIiwiY2hlY2tOZXciLCJsZW5ndGgiLCJwYXJzZUludCIsInJlcXVpcmVkIiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQTBCQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQ3pCQyw2RUFBWSxDQUFDO0FBQ1RDLFFBQUksRUFBRTtBQUNGLDhCQUF3QjtBQUNwQkMsY0FBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBRFk7QUFFcEJDLGFBQUssRUFBRTtBQUZhO0FBRHRCO0FBREcsR0FBRCxDQURhO0FBQUEsQ0FBRCxDQUE1QjtBQVdlLFNBQVNDLG1CQUFULENBQTZCQyxLQUE3QixFQUEyQztBQUFBOztBQUN0RCxNQUFNQyxPQUFPLEdBQUdWLFNBQVMsRUFBekI7QUFDQSxNQUFNVyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZzRCxxQkFHN0JDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQXNCQSxLQUFLLENBQUNDLEtBQTVCO0FBQUEsR0FBRCxDQUhrQjtBQUFBLE1BRzlDQyxZQUg4QyxnQkFHOUNBLFlBSDhDOztBQUl0RCxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBZ0I7QUFDcEM7QUFDQTtBQUNBUCxZQUFRLENBQ0pRLCtFQUFrQixDQUFDLENBQUNELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFkLEVBQXFCWixLQUFLLENBQUNhLEtBQTNCLEVBQWtDYixLQUFLLENBQUNjLEtBQXhDLENBQUQsQ0FEZCxDQUFSO0FBR0gsR0FORDs7QUFPQSxNQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNOLEtBQUQsRUFBZ0I7QUFDM0M7QUFDQTtBQUVBLFFBQU1PLFlBQVksR0FBR2hCLEtBQUssQ0FBQ2lCLFFBQU4sQ0FBZUMsS0FBZixFQUFyQjtBQUNBRixnQkFBWSxDQUFDaEIsS0FBSyxDQUFDbUIsWUFBUCxDQUFaLENBQWlDUCxLQUFqQyxHQUF1Q0gsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQXBEO0FBRUFaLFNBQUssQ0FBQ29CLFdBQU4sQ0FBa0JKLFlBQWxCO0FBQ0gsR0FSRCxDQVhzRCxDQXFCdEQ7QUFDQTtBQUNBOzs7QUFDQSxNQUFNSyxRQUFRLEdBQUdkLFlBQVksQ0FBQ0QsS0FBYixDQUFtQmdCLE1BQW5CLEdBQTRCQyxRQUFRLENBQUN2QixLQUFLLENBQUNjLEtBQVAsQ0FBckQsQ0F4QnNELENBeUJ0RDtBQUNBOztBQUVBLE1BQUlPLFFBQUosRUFBYztBQUNWLFdBQ0k7QUFDQSxZQUFDLG1FQUFEO0FBQ0ksZ0JBQVEsTUFEWjtBQUVJLFVBQUUsRUFBQyxnQkFGUDtBQUdJLGFBQUssRUFBRXJCLEtBQUssQ0FBQ2EsS0FIakI7QUFJSSxnQkFBUSxFQUFFRSxzQkFKZDtBQUtJLGFBQUssRUFBRWYsS0FBSyxDQUFDaUIsUUFBTixDQUFlakIsS0FBSyxDQUFDbUIsWUFBckIsRUFBbUNQLEtBTDlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQVNJOztBQVRKO0FBV0gsR0FaRCxNQVlPLElBQUlaLEtBQUssQ0FBQ3dCLFFBQVYsRUFBb0I7QUFDdkIsV0FDSTtBQUNBLFlBQUMsbUVBQUQ7QUFDSSxnQkFBUSxNQURaO0FBRUksVUFBRSxFQUFDLGdCQUZQO0FBR0ksYUFBSyxFQUFFeEIsS0FBSyxDQUFDYSxLQUhqQjtBQUlJLGdCQUFRLEVBQUVMLGVBSmQ7QUFLSSxhQUFLLEVBQ0RELFlBQVksQ0FBQ0QsS0FBYixDQUFtQmlCLFFBQVEsQ0FBQ3ZCLEtBQUssQ0FBQ2MsS0FBUCxDQUEzQixFQUEwQ1csTUFBMUMsQ0FDSXpCLEtBQUssQ0FBQ2EsS0FEVixDQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQWFJOztBQWJKO0FBZUg7O0FBQ0QsU0FDSTtBQUNBLFVBQUMsbUVBQUQ7QUFDSSxRQUFFLEVBQUMsZ0JBRFA7QUFFSSxXQUFLLEVBQUViLEtBQUssQ0FBQ2EsS0FGakI7QUFHSSxjQUFRLEVBQUVMLGVBSGQ7QUFJSSxXQUFLLEVBQ0RELFlBQVksQ0FBQ0QsS0FBYixDQUFtQmlCLFFBQVEsQ0FBQ3ZCLEtBQUssQ0FBQ2MsS0FBUCxDQUEzQixFQUEwQ1csTUFBMUMsQ0FBaUR6QixLQUFLLENBQUNhLEtBQXZELENBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBVUk7O0FBVko7QUFZSDs7R0FyRXVCZCxtQjtVQUNKUixTLEVBQ0NZLHVELEVBQ1FDLHVEOzs7S0FITEwsbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MuZjM1NDBmM2Q4ZTg2ZTU4MDNmMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgeyB0YXNrRGV0YWlsUmVnaXN0ZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGVcIjtcclxuXHJcbnR5cGUgbmV3VGFza3NUeXBlID0ge1xyXG4gICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuXHJcbmludGVyZmFjZSBwcm9wcyB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW47XHJcbiAgICBpbmRleDogc3RyaW5nO1xyXG4gICAgY29udGVudEluZGV4Om51bWJlcjtcclxuICAgIGNvbnRlbnRzOiB7XHJcbiAgICAgICAgbGFiZWw6IHN0cmluZztcclxuICAgICAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgfVtdO1xyXG4gICAgc2V0Q29udGVudHM6IFJlYWN0LkRpc3BhdGNoPFxyXG4gICAgICAgIFJlYWN0LlNldFN0YXRlQWN0aW9uPFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVtdXHJcbiAgICAgICAgPlxyXG4gICAgPjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICAgIFwiJiAuTXVpVGV4dEZpZWxkLXJvb3RcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjVjaFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVByb3BzVGV4dEZpZWxkcyhwcm9wczogcHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIC8vIOOBk+OBk+OBp2V2ZW50LnRhcmdldC52YWx1ZeOBqOODqeODmeODqyjpgKPmg7PphY3liJfjga7jgq3jg7wp44KS6YCB44Gj44Gm5Yem55CG44GZ44KL44CC5Yem55CG44KC5pyq5L2c5oiQXHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHRhc2tEZXRhaWxSZWdpc3RlcihbZXZlbnQudGFyZ2V0LnZhbHVlLCBwcm9wcy5sYWJlbCwgcHJvcHMuaW5kZXhdKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbmV3VGFza09uQ2hhbmdlSGFuZGxlciA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAvLyDjgZPjgZPjgadldmVudC50YXJnZXQudmFsdWXjgajjg6njg5njg6so6YCj5oOz6YWN5YiX44Gu44Kt44O8KeOCkumAgeOBo+OBpuWHpueQhuOBmeOCi+OAguWHpueQhuOCguacquS9nOaIkFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRzQ29weSA9IHByb3BzLmNvbnRlbnRzLnNsaWNlKCk7XHJcbiAgICAgICAgY29udGVudHNDb3B5W3Byb3BzLmNvbnRlbnRJbmRleF0udmFsdWU9ZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBwcm9wcy5zZXRDb250ZW50cyhjb250ZW50c0NvcHkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb25zdCBjaGVjayA9IHVzZXJUYXNrSW5mby50YXNrc1twYXJzZUludChwcm9wcy5pbmRleCldLmRldGFpbDtcclxuICAgIC8vIGNvbnN0IGNoZWNrID0gdXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KHByb3BzLmluZGV4KV0uZGV0YWlsW3Byb3BzLmxhYmVsXVxyXG4gICAgLy8g5paw6KaP55m76Yyy44GL5pu05paw44GL44KS44OB44Kn44OD44Kv44GZ44KL44CC5paw6KaP44Gn44GC44KM44GwVHJ1ZVxyXG4gICAgY29uc3QgY2hlY2tOZXcgPSB1c2VyVGFza0luZm8udGFza3MubGVuZ3RoIDwgcGFyc2VJbnQocHJvcHMuaW5kZXgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJpbnB1dE5vcm1hbCBjaGVjayBcIiArIHByb3BzLmxhYmVsKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNoZWNrTmV3KTtcclxuXHJcbiAgICBpZiAoY2hlY2tOZXcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e25ld1Rhc2tPbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuY29udGVudHNbcHJvcHMuY29udGVudEluZGV4XS52YWx1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgLy8gPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8gPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KHByb3BzLmluZGV4KV0uZGV0YWlsW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgLy8gPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcbiAgICAgICAgICAgIGxhYmVsPXtwcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgdXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KHByb3BzLmluZGV4KV0uZGV0YWlsW3Byb3BzLmxhYmVsXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAvLyA8L2Zvcm0+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=