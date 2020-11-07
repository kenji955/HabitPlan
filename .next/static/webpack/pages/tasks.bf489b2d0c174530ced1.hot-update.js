webpackHotUpdate_N_E("pages/tasks",{

/***/ "./node_modules/@material-ui/core/colors/blue.js":
false,

/***/ "./node_modules/@material-ui/core/colors/pink.js":
false,

/***/ "./node_modules/@material-ui/core/colors/red.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js ***!
  \*****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      color: theme.palette.text.secondary
    }, theme.typography.caption, {
      textAlign: 'left',
      marginTop: 3,
      margin: 0,
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 4
    },

    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
      marginLeft: 14,
      marginRight: 14
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {}
  };
};
var FormHelperText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FormHelperText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'p' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      margin = props.margin,
      required = props.required,
      variant = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant', 'margin', 'disabled', 'error', 'filled', 'focused', 'required']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, (fcs.variant === 'filled' || fcs.variant === 'outlined') && classes.contained, className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, fcs.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), children === ' ' ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : children);
});
 true ? FormHelperText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense']),

  /**
   * If `true`, the helper text should use required classes key.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiFormHelperText'
})(FormHelperText));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormHelperText/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormHelperText__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grid/Grid.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Grid/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js ***!
  \***************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      boxSizing: 'border-box',
      lineHeight: '48px',
      listStyle: 'none',
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the root element if `inset={true}`. */
    inset: {
      paddingLeft: 72
    },

    /* Styles applied to the root element if `disableSticky={false}`. */
    sticky: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: 'inherit'
    }
  };
};
var ListSubheader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListSubheader(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$disableSticky = props.disableSticky,
      disableSticky = _props$disableSticky === void 0 ? false : _props$disableSticky,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "component", "disableGutters", "disableSticky", "inset"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, color !== 'default' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], inset && classes.inset, !disableSticky && classes.sticky, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 true ? ListSubheader.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'primary', 'inherit']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the List Subheader will not have gutters.
   */
  disableGutters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   */
  disableSticky: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the List Subheader will be indented.
   */
  inset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiListSubheader'
})(ListSubheader));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ListSubheader/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListSubheader/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListSubheader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ListSubheader__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Switch/Switch.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Switch/Switch.js ***!
  \*************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _internal_SwitchBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/SwitchBase */ "./node_modules/@material-ui/core/esm/internal/SwitchBase.js");


// @inheritedComponent IconButton








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      width: 34 + 12 * 2,
      height: 14 + 12 * 2,
      overflow: 'hidden',
      padding: 12,
      boxSizing: 'border-box',
      position: 'relative',
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      verticalAlign: 'middle',
      // For correct alignment with the text.
      '@media print': {
        colorAdjust: 'exact'
      }
    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -8
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -8
    },

    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      // Render above the focus ripple.
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create(['left', 'transform'], {
        duration: theme.transitions.duration.shortest
      }),
      '&$checked': {
        transform: 'translateX(20px)'
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        opacity: 0.5
      },
      '&$disabled + $track': {
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.primary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.secondary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      width: 40,
      height: 24,
      padding: 7,
      '& $thumb': {
        width: 16,
        height: 16
      },
      '& $switchBase': {
        padding: 4,
        '&$checked': {
          transform: 'translateX(16px)'
        }
      }
    },

    /* Pseudo-class applied to the internal `SwitchBase` component's `checked` class. */
    checked: {},

    /* Pseudo-class applied to the internal SwitchBase component's disabled class. */
    disabled: {},

    /* Styles applied to the internal SwitchBase component's input element. */
    input: {
      left: '-100%',
      width: '300%'
    },

    /* Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
    thumb: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },

    /* Styles applied to the track element. */
    track: {
      height: '100%',
      width: '100%',
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    }
  };
};
var Switch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Switch(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "edge", "size"]);

  var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: classes.thumb
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge], size === "small" && classes["size".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(size))])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_SwitchBase__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "checkbox",
    icon: icon,
    checkedIcon: icon,
    classes: {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.switchBase, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(color))]),
      input: classes.input,
      checked: classes.checked,
      disabled: classes.disabled
    },
    ref: ref
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: classes.track
  }));
});
 true ? Switch.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the component is checked.
   */
  checked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'primary', 'secondary']),

  /**
   * @ignore
   */
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   */
  edge: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['end', 'start', false]),

  /**
   * The icon to display when the component is unchecked.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The size of the switch.
   * `small` is equivalent to the dense switch styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['medium', 'small']),

  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiSwitch'
})(Switch));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Switch/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Switch/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch */ "./node_modules/@material-ui/core/esm/Switch/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Switch__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Table/Table.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Table/TableContext.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Table/Tablelvl2Context.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Table/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TableBody/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TableCell/TableCell.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TableCell/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TableHead/TableHead.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TableHead/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TableRow/TableRow.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TableRow/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TextField/TextField.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextField/TextField.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");














var variantComponent = {
  standard: _Input__WEBPACK_IMPORTED_MODULE_6__["default"],
  filled: _FilledInput__WEBPACK_IMPORTED_MODULE_7__["default"],
  outlined: _OutlinedInput__WEBPACK_IMPORTED_MODULE_8__["default"]
};
var styles = {
  /* Styles applied to the root element. */
  root: {}
};
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [FilledInput](/api/filled-input/)
 * - [OutlinedInput](/api/outlined-input/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

var TextField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TextField(props, ref) {
  var autoComplete = props.autoComplete,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      FormHelperTextProps = props.FormHelperTextProps,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      helperText = props.helperText,
      hiddenLabel = props.hiddenLabel,
      id = props.id,
      InputLabelProps = props.InputLabelProps,
      inputProps = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$select = props.select,
      select = _props$select === void 0 ? false : _props$select,
      SelectProps = props.SelectProps,
      type = props.type,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);

  if (true) {
    if (select && !children) {
      console.error('Material-UI: `children` must be passed when using the `TextField` component with `select`.');
    }
  }

  var InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    if (label) {
      var _InputLabelProps$requ;

      var displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, label, displayRequired && "\xA0*");
    }
  }

  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }

    InputMore['aria-describedby'] = undefined;
  }

  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
  var inputLabelId = label && id ? "".concat(id, "-label") : undefined;
  var InputComponent = variantComponent[variant];
  var InputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    rowsMax: rowsMax,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    ref: ref,
    required: required,
    color: color,
    variant: variant
  }, other), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    htmlFor: id,
    id: inputLabelId
  }, InputLabelProps), label), select ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Select__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-describedby": helperTextId,
    id: id,
    labelId: inputLabelId,
    value: value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormHelperText__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
 true ? TextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default value of the `input` element.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The helper text content.
   */
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * @ignore
   */
  hiddenLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Props applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * The label content.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none', 'normal']),

  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Props applied to the [`Select`](/api/select/) element.
   */
  SelectProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['medium', 'small']),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__["default"])(styles, {
  name: 'MuiTextField'
})(TextField));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextField/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextField/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextField__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/SwitchBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/SwitchBase.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");











var styles = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  }
};
/**
 * @ignore - internal component.
 */

var SwitchBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function SwitchBase(props, ref) {
  var autoFocus = props.autoFocus,
      checkedProp = props.checked,
      checkedIcon = props.checkedIcon,
      classes = props.classes,
      className = props.className,
      defaultChecked = props.defaultChecked,
      disabledProp = props.disabled,
      icon = props.icon,
      id = props.id,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      readOnly = props.readOnly,
      required = props.required,
      tabIndex = props.tabIndex,
      type = props.type,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);

  var _useControlled = Object(_utils_useControlled__WEBPACK_IMPORTED_MODULE_7__["default"])({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled, 2),
      checked = _useControlled2[0],
      setCheckedState = _useControlled2[1];

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_8__["default"])();

  var handleFocus = function handleFocus(event) {
    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };

  var handleInputChange = function handleInputChange(event) {
    var newChecked = event.target.checked;
    setCheckedState(newChecked);

    if (onChange) {
      // TODO v5: remove the second argument.
      onChange(event, newChecked);
    }
  };

  var disabled = disabledProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  var hasLabelFor = type === 'checkbox' || type === 'radio';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "span",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, checked && classes.checked, disabled && classes.disabled),
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    autoFocus: autoFocus,
    checked: checkedProp,
    defaultChecked: defaultChecked,
    className: classes.input,
    disabled: disabled,
    id: hasLabelFor && id,
    name: name,
    onChange: handleInputChange,
    readOnly: readOnly,
    ref: inputRef,
    required: required,
    tabIndex: tabIndex,
    type: type,
    value: value
  }, inputProps)), checked ? checkedIcon : icon);
}); // NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.

 true ? SwitchBase.propTypes = {
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the component is checked.
   */
  checked: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * @ignore
   */
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["refType"],

  /*
   * @ignore
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * The input component prop `type`.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,

  /**
   * The value of the component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__["default"])(styles, {
  name: 'PrivateSwitchBase'
})(SwitchBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js":
false,

/***/ "./node_modules/@material-ui/icons/AddCircle.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/AddCircle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
}), 'AddCircle');

exports.default = _default;

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
false,

/***/ "./node_modules/date-fns/esm/addDays/index.js":
false,

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
false,

/***/ "./node_modules/date-fns/esm/addWeeks/index.js":
false,

/***/ "./node_modules/date-fns/esm/eachDayOfInterval/index.js":
false,

/***/ "./node_modules/date-fns/esm/eachWeekOfInterval/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/format/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDate/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/isValid/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/subMonths/index.js":
false,

/***/ "./node_modules/date-fns/esm/toDate/index.js":
false,

/***/ "./src/components/test/Calendar3.jsx":
false,

/***/ "./src/components/view/AppVar.tsx":
/*!****************************************!*\
  !*** ./src/components/view/AppVar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\AppVar.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    root: {
      flexGrow: 1,
      position: 'fixed',
      width: '40%'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  });
});
function ButtonAppBar(props) {
  _s();

  var classes = useStyles();
  var button;

  if (props.checkNew) {
    button = __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "inherit",
      onClick: props.handleRegister,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 14
      }
    }, "\u767B\u9332");
  }

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "News"), props.checkNew ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit",
    onClick: props.handleRegister,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 28
    }
  }, "\u767B\u9332") : null)));
}

_s(ButtonAppBar, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ButtonAppBar;

var _c;

$RefreshReg$(_c, "ButtonAppBar");

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

/***/ }),

/***/ "./src/components/view/FloatingActionButton.tsx":
/*!******************************************************!*\
  !*** ./src/components/view/FloatingActionButton.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollableTabsButtonAuto; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _PatternList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PatternList */ "./src/components/view/PatternList.tsx");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Select */ "./src/components/view/Select.tsx");
/* harmony import */ var _TaskList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TaskList */ "./src/components/view/TaskList.tsx");




var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\FloatingActionButton.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "value", "index"]);

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    role: "tabpanel",
    hidden: value !== index,
    id: "scrollable-auto-tabpanel-".concat(index),
    "aria-labelledby": "scrollable-auto-tab-".concat(index)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, children)));
}

_c = TabPanel;

function a11yProps(index) {
  return {
    id: "scrollable-auto-tab-".concat(index),
    "aria-controls": "scrollable-auto-tabpanel-".concat(index)
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      // paddingTop:'70px',
      // display:'inline-block',
      alignItems: "center"
    },
    barSize: {
      width: "fit-content",
      display: "flex",
      margin: "0 auto"
    }
  };
});
function ScrollableTabsButtonAuto() {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(Number),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      choice = _React$useState4[0],
      setChoice = _React$useState4[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "static",
    color: "default",
    className: classes.barSize,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "scrollable",
    scrollButtons: "auto",
    "aria-label": "scrollable auto tabs example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Tasks"
  }, a11yProps(0), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Pattern"
  }, a11yProps(1), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  })))), __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx(_TaskList__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx(_Select__WEBPACK_IMPORTED_MODULE_11__["default"], {
    choice: choice,
    setChoice: setChoice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }), __jsx(_PatternList__WEBPACK_IMPORTED_MODULE_10__["default"], {
    choice: choice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  })));
}

_s(ScrollableTabsButtonAuto, "vagBw0DJT6oGOQCdxGfn43USwB8=", false, function () {
  return [useStyles];
});

_c2 = ScrollableTabsButtonAuto;

var _c, _c2;

$RefreshReg$(_c, "TabPanel");
$RefreshReg$(_c2, "ScrollableTabsButtonAuto");

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

/***/ }),

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

/***/ }),

/***/ "./src/components/view/PatternSwitch.tsx":
/*!***********************************************!*\
  !*** ./src/components/view/PatternSwitch.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternSwitchList; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");


var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\PatternSwitch.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  });
});
function PatternSwitchList(props) {
  _s();

  var _this = this;

  var classes = useStyles();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])(); // ここでパターンの登録状況を更新する

  var handleToggle = function handleToggle(value) {
    return function () {
      var currentIndex = props.checked.indexOf(value);

      var newChecked = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(props.checked);

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      props.setChecked(newChecked);
      console.log('newChecked');
      console.log(newChecked);
      var index = props.index;
      dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_10__["taskPatternUpdate"])({
        newChecked: newChecked,
        index: index
      }));
    };
  };

  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 24
      }
    }, "PatternList"),
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, userTaskInfo.pattern.map(function (content) {
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: content.patternId + "_" + content.patternName,
      primary: content.patternName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__["default"], {
      edge: "end",
      onChange: handleToggle(content.patternId),
      checked: props.checked.indexOf(content.patternId) !== -1,
      inputProps: {
        "aria-labelledby": content.patternId + "_" + content.patternName
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }
    })));
  }));
}

_s(PatternSwitchList, "COatBh4vTMzDyn2MqS5bzL5x5E8=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"]];
});

_c = PatternSwitchList;

var _c;

$RefreshReg$(_c, "PatternSwitchList");

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

/***/ }),

/***/ "./src/components/view/TaskList.tsx":
/*!******************************************!*\
  !*** ./src/components/view/TaskList.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxList; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Comment */ "./node_modules/@material-ui/icons/Comment.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TaskModal */ "./src/components/view/TaskModal.tsx");
/* harmony import */ var _taskPlus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./taskPlus */ "./src/components/view/taskPlus.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\TaskList.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    roots: {
      width: "100%",
      maxWidth: 720,
      margin: "auto",
      backgroundColor: theme.palette.background.paper
    },
    icon: {
      display: "flex",
      margin: "10px auto 5px auto"
    }
  });
});
function CheckboxList() {
  _s();

  var _this = this;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(9999),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  console.log('check tasklist');

  var handleToggle = function handleToggle(value) {
    return function () {
      setOpen(value);
      console.log("open:" + open);
    };
  };

  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, userTaskInfo.tasks.map(function (task, index) {
    var labelId = "checkbox-list-label-".concat(task.detail["testDetail1"]);
    return __jsx("div", {
      key: labelId + '_' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: task.detail['title'] + ":" + index,
      role: undefined,
      dense: true,
      button: true,
      onClick: handleToggle(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: labelId,
      primary: "Line item ".concat(index + 1, " ").concat(task.detail["testDetail1"], " ").concat(task.detail["testDetail2"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      }
    }, __jsx(_TaskModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      open: open,
      setOpen: setOpen,
      task: task,
      index: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 33
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 37
      }
    })))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 25
      }
    }));
  }), __jsx(_taskPlus__WEBPACK_IMPORTED_MODULE_11__["default"], {
    num: userTaskInfo.tasks.length + 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }));
}

_s(CheckboxList, "E/eJ56t/AylQRe7m3WKF5G5o1jg=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"]];
});

_c = CheckboxList;

var _c;

$RefreshReg$(_c, "CheckboxList");

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

/***/ }),

/***/ "./src/components/view/TaskModal.tsx":
/*!*******************************************!*\
  !*** ./src/components/view/TaskModal.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskModal; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _InputNormal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InputNormal */ "./src/components/view/InputNormal.tsx");
/* harmony import */ var _AppVar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AppVar */ "./src/components/view/AppVar.tsx");
/* harmony import */ var _PatternSwitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PatternSwitch */ "./src/components/view/PatternSwitch.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");



var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\TaskModal.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
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
var contentsList = [{
  label: "if-thenプランニング",
  value: ""
}, {
  label: "習慣の積み上げ",
  value: ""
}, {
  label: "パターン",
  value: ""
}, {
  label: "気が進まないとき",
  value: ""
}, {
  label: "長期的に見返りのある習慣の即時的な楽しみ",
  value: ""
}, {
  label: "目標",
  value: ""
}, {
  label: "守れなかった時の罰則",
  value: ""
}, {
  label: "レベル",
  value: ""
}, {
  label: "避けることで得られるメリット",
  value: ""
}, {
  label: "見返りのない習慣に対する即時的な痛み",
  value: ""
}];
function TaskModal(props) {
  _s();

  var _this = this;

  var classes = useStyles();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  var checkNew = userTaskInfo.tasks.length < parseInt(props.index);
  var stateChecked = [];

  if (!checkNew) {
    stateChecked = props.task.patternInfo.map(function (content) {
      return content.patternID;
    });
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(stateChecked),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])(); // 配列を作って項目一覧を作るなら、その配列を使って以下の変数の初期設定もやりたいところ
  // 最終的には項目一覧もReduxで管理したい。それをタスク一覧の右上に表示した設定ボタンから開くモーダルでONOFFを設定することで、タスク詳細画面で使う項目を選べる。新規登録時もONになっている項目が表示される
  // タスク詳細画面でプラスボタンを押したら項目を増やせる。それも項目一覧に保管される。
  // const defaultTask: newTasksType = { ["追加"]: "追加" };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(contentsList),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      contents = _React$useState4[0],
      setContents = _React$useState4[1];

  var handleClose = function handleClose() {
    props.setOpen(9999);
  };

  var handleRegister = function handleRegister() {
    var details;
    contents.map(function (content, index) {
      details = _objectSpread(_objectSpread({}, details), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, content.label, content.value));
    });
    var patternInfo;
    patternInfo = checked.map(function (content) {
      return {
        patternID: content,
        order: 1
      };
    });
    var newTasks = {
      detail: details,
      patternInfo: patternInfo
    };
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_11__["taskRegister"])(newTasks));
    props.setOpen(9999);
  }; // ここは配列で管理してmapで表示したいところ
  // task型の変数を用意して、それに値を格納する
  // 新規だったら登録、すでにある項目であれば更新する。


  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: classes.modal,
    open: props.index == props.open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_5__["default"],
    BackdropProps: {
      timeout: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "in": props.index == props.open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx(_AppVar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleRegister: handleRegister,
    checkNew: checkNew,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }), __jsx("h2", {
    id: "transition-modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 25
    }
  }, "\u30BF\u30B9\u30AF\u8A73\u7D30\u753B\u9762", props.index + 1), __jsx("p", {
    id: "transition-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 25
    }
  }, "react-transition-group animates me."), __jsx(_PatternSwitch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    checked: checked,
    setChecked: setChecked,
    index: props.index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }), contents.map(function (content, index) {
    return __jsx("div", {
      key: content.label + "_" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 33
      }
    }, __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_7__["default"] // label="if-thenプランニング"
    , {
      label: content.label,
      required: false,
      index: props.index,
      contentIndex: index,
      contents: contents,
      setContents: setContents,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 37
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 37
      }
    }));
  })))));
}

_s(TaskModal, "BYxslkMeWpGmpshiwp2ta9mkALo=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"]];
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

/***/ }),

/***/ "./src/components/view/taskPlus.tsx":
/*!******************************************!*\
  !*** ./src/components/view/taskPlus.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskPlusIcon; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskModal */ "./src/components/view/TaskModal.tsx");


var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\taskPlus.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    icon: {
      display: "flex",
      margin: "10px auto 5px auto"
    }
  });
});
function TaskPlusIcon(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(9999),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      newOpen = _React$useState2[0],
      setNewOpen = _React$useState2[1];

  var taskAddHandler = function taskAddHandler() {
    setNewOpen(props.num);
    console.log("tasktest");
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.icon,
    onClick: taskAddHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx(_TaskModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: newOpen,
    setOpen: setNewOpen,
    index: props.num,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }));
}

_s(TaskPlusIcon, "dgDNfL02mk+4XvG2jVsMYItDRzI=", false, function () {
  return [useStyles];
});

_c = TaskPlusIcon;

var _c;

$RefreshReg$(_c, "TaskPlusIcon");

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

/***/ }),

/***/ "./src/modules/rootReducer.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtSGVscGVyVGV4dC9Gb3JtSGVscGVyVGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtSGVscGVyVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9MaXN0U3ViaGVhZGVyL0xpc3RTdWJoZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGlzdFN1YmhlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Td2l0Y2gvU3dpdGNoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UZXh0RmllbGQvVGV4dEZpZWxkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RleHRGaWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9pbnRlcm5hbC9Td2l0Y2hCYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9BcHBWYXIudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy92aWV3L0Zsb2F0aW5nQWN0aW9uQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlldy9JbnB1dE5vcm1hbC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvUGF0dGVyblN3aXRjaC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvVGFza0xpc3QudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy92aWV3L1Rhc2tNb2RhbC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvdGFza1BsdXMudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInBvc2l0aW9uIiwid2lkdGgiLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJCdXR0b25BcHBCYXIiLCJwcm9wcyIsImNsYXNzZXMiLCJidXR0b24iLCJjaGVja05ldyIsImhhbmRsZVJlZ2lzdGVyIiwiVGFiUGFuZWwiLCJjaGlsZHJlbiIsInZhbHVlIiwiaW5kZXgiLCJvdGhlciIsImExMXlQcm9wcyIsImlkIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsImFsaWduSXRlbXMiLCJiYXJTaXplIiwiZGlzcGxheSIsIm1hcmdpbiIsIlNjcm9sbGFibGVUYWJzQnV0dG9uQXV0byIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRWYWx1ZSIsIk51bWJlciIsImNob2ljZSIsInNldENob2ljZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJGb3JtUHJvcHNUZXh0RmllbGRzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0YXNrcyIsInVzZXJUYXNrSW5mbyIsIm9uQ2hhbmdlSGFuZGxlciIsInRhc2tEZXRhaWxSZWdpc3RlciIsInRhcmdldCIsImxhYmVsIiwibmV3VGFza09uQ2hhbmdlSGFuZGxlciIsImNvbnRlbnRzQ29weSIsImNvbnRlbnRzIiwic2xpY2UiLCJjb250ZW50SW5kZXgiLCJzZXRDb250ZW50cyIsImxlbmd0aCIsInBhcnNlSW50IiwicmVxdWlyZWQiLCJkZXRhaWwiLCJtYXhXaWR0aCIsIlBhdHRlcm5Td2l0Y2hMaXN0IiwiaGFuZGxlVG9nZ2xlIiwiY3VycmVudEluZGV4IiwiY2hlY2tlZCIsImluZGV4T2YiLCJuZXdDaGVja2VkIiwicHVzaCIsInNwbGljZSIsInNldENoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwidGFza1BhdHRlcm5VcGRhdGUiLCJwYXR0ZXJuIiwibWFwIiwiY29udGVudCIsInBhdHRlcm5JZCIsInBhdHRlcm5OYW1lIiwicm9vdHMiLCJpY29uIiwiQ2hlY2tib3hMaXN0Iiwib3BlbiIsInNldE9wZW4iLCJ0YXNrIiwibGFiZWxJZCIsInVuZGVmaW5lZCIsIm1vZGFsIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwicGFkZGluZyIsImNvbnRlbnRzTGlzdCIsIlRhc2tNb2RhbCIsInN0YXRlQ2hlY2tlZCIsInBhdHRlcm5JbmZvIiwicGF0dGVybklEIiwiaGFuZGxlQ2xvc2UiLCJkZXRhaWxzIiwib3JkZXIiLCJuZXdUYXNrcyIsInRhc2tSZWdpc3RlciIsIkJhY2tkcm9wIiwidGltZW91dCIsIlRhc2tQbHVzSWNvbiIsIm5ld09wZW4iLCJzZXROZXdPcGVuIiwidGFza0FkZEhhbmRsZXIiLCJudW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDaEM7QUFDM0I7QUFDSTtBQUNYO0FBQ3VDO0FBQ0o7QUFDYjtBQUN2QztBQUNQO0FBQ0E7QUFDQSxVQUFVLGtGQUFRO0FBQ2xCO0FBQ0EsS0FBSztBQUNMO0FB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QUksRUFBRTtBQUNGcEQsYUFBTyxFQUFFLE1BRFA7QUFFRkMsWUFBTSxFQUFFO0FBRk47QUFERyxHQUFELENBRGE7QUFBQSxDQUFELENBQTVCO0FBU2UsU0FBUzhFLFlBQVQsQ0FBc0JqRyxLQUF0QixFQUE4QztBQUFBOztBQUN6RCxNQUFNQyxPQUFPLEdBQUdkLFNBQVMsRUFBekI7O0FBRHlELHdCQUUzQmtDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBRjJCO0FBQUE7QUFBQSxNQUVsRDRFLE9BRmtEO0FBQUEsTUFFekNDLFVBRnlDOztBQUd6RCxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekJELGNBQVUsQ0FBQ25HLEtBQUssQ0FBQ3FHLEdBQVAsQ0FBVjtBQUNBeEMsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNILEdBSEQ7O0FBS0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtRUFBRDtBQUFlLGFBQVMsRUFBRTdELE9BQU8sQ0FBQ3FFLElBQWxDO0FBQXdDLFdBQU8sRUFBRThCLGNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsa0RBQUQ7QUFBVyxRQUFJLEVBQUVGLE9BQWpCO0FBQTBCLFdBQU8sRUFBRUMsVUFBbkM7QUFBK0MsU0FBSyxFQUFFbkcsS0FBSyxDQUFDcUcsR0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFNSDs7R0FkdUJKLFk7VUFDSjlHLFM7OztLQURJOEcsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy5iZjQ4OWIyZDBjMTc0NTMwY2VkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IGZvcm1Db250cm9sU3RhdGUgZnJvbSAnLi4vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZSc7XG5pbXBvcnQgdXNlRm9ybUNvbnRyb2wgZnJvbSAnLi4vRm9ybUNvbnRyb2wvdXNlRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IF9leHRlbmRzKHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gICAgfSwgdGhlbWUudHlwb2dyYXBoeS5jYXB0aW9uLCB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIG1hcmdpblRvcDogMyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmRpc2FibGVkXG4gICAgICB9LFxuICAgICAgJyYkZXJyb3InOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW5cbiAgICAgIH1cbiAgICB9KSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge1xuICAgICAgbWFyZ2luVG9wOiA0XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAgb3IgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBjb250YWluZWQ6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IDE0LFxuICAgICAgbWFyZ2luUmlnaHQ6IDE0XG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZvY3VzZWQ9e3RydWV9YC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZpbGxlZD17dHJ1ZX1gLiAqL1xuICAgIGZpbGxlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGByZXF1aXJlZD17dHJ1ZX1gLiAqL1xuICAgIHJlcXVpcmVkOiB7fVxuICB9O1xufTtcbnZhciBGb3JtSGVscGVyVGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEZvcm1IZWxwZXJUZXh0KHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAncCcgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBmaWxsZWQgPSBwcm9wcy5maWxsZWQsXG4gICAgICBmb2N1c2VkID0gcHJvcHMuZm9jdXNlZCxcbiAgICAgIG1hcmdpbiA9IHByb3BzLm1hcmdpbixcbiAgICAgIHJlcXVpcmVkID0gcHJvcHMucmVxdWlyZWQsXG4gICAgICB2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlZFwiLCBcImVycm9yXCIsIFwiZmlsbGVkXCIsIFwiZm9jdXNlZFwiLCBcIm1hcmdpblwiLCBcInJlcXVpcmVkXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ3ZhcmlhbnQnLCAnbWFyZ2luJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2ZpbGxlZCcsICdmb2N1c2VkJywgJ3JlcXVpcmVkJ11cbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCAoZmNzLnZhcmlhbnQgPT09ICdmaWxsZWQnIHx8IGZjcy52YXJpYW50ID09PSAnb3V0bGluZWQnKSAmJiBjbGFzc2VzLmNvbnRhaW5lZCwgY2xhc3NOYW1lLCBmY3MuZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgZmNzLmVycm9yICYmIGNsYXNzZXMuZXJyb3IsIGZjcy5maWxsZWQgJiYgY2xhc3Nlcy5maWxsZWQsIGZjcy5mb2N1c2VkICYmIGNsYXNzZXMuZm9jdXNlZCwgZmNzLnJlcXVpcmVkICYmIGNsYXNzZXMucmVxdWlyZWQsIGZjcy5tYXJnaW4gPT09ICdkZW5zZScgJiYgY2xhc3Nlcy5tYXJnaW5EZW5zZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbiA9PT0gJyAnID9cbiAgLyojX19QVVJFX18qL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgX19odG1sOiAnJiM4MjAzOydcbiAgICB9XG4gIH0pIDogY2hpbGRyZW4pO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGb3JtSGVscGVyVGV4dC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBJZiBgJyAnYCBpcyBwcm92aWRlZCwgdGhlIGNvbXBvbmVudCByZXNlcnZlcyBvbmUgbGluZSBoZWlnaHQgZm9yIGRpc3BsYXlpbmcgYSBmdXR1cmUgbWVzc2FnZS5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBoZWxwZXIgdGV4dCBzaG91bGQgYmUgZGlzcGxheWVkIGluIGEgZGlzYWJsZWQgc3RhdGUuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgaGVscGVyIHRleHQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhbiBlcnJvciBzdGF0ZS5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaGVscGVyIHRleHQgc2hvdWxkIHVzZSBmaWxsZWQgY2xhc3NlcyBrZXkuXG4gICAqL1xuICBmaWxsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBoZWxwZXIgdGV4dCBzaG91bGQgdXNlIGZvY3VzZWQgY2xhc3NlcyBrZXkuXG4gICAqL1xuICBmb2N1c2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYGRlbnNlYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZy4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaGVscGVyIHRleHQgc2hvdWxkIHVzZSByZXF1aXJlZCBjbGFzc2VzIGtleS5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUZvcm1IZWxwZXJUZXh0J1xufSkoRm9ybUhlbHBlclRleHQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvcm1IZWxwZXJUZXh0JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4JyxcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDE0KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJpbmhlcml0XCJgLiAqL1xuICAgIGNvbG9ySW5oZXJpdDoge1xuICAgICAgY29sb3I6ICdpbmhlcml0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW5uZXIgYGNvbXBvbmVudGAgZWxlbWVudCBpZiBgZGlzYWJsZUd1dHRlcnM9e2ZhbHNlfWAuICovXG4gICAgZ3V0dGVyczoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDE2LFxuICAgICAgcGFkZGluZ1JpZ2h0OiAxNlxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBpbnNldD17dHJ1ZX1gLiAqL1xuICAgIGluc2V0OiB7XG4gICAgICBwYWRkaW5nTGVmdDogNzJcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZVN0aWNreT17ZmFsc2V9YC4gKi9cbiAgICBzdGlja3k6IHtcbiAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgIHRvcDogMCxcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnXG4gICAgfVxuICB9O1xufTtcbnZhciBMaXN0U3ViaGVhZGVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlzdFN1YmhlYWRlcihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgY29sb3IgPSBfcHJvcHMkY29sb3IgPT09IHZvaWQgMCA/ICdkZWZhdWx0JyA6IF9wcm9wcyRjb2xvcixcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnbGknIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlR3V0dGVycyA9IHByb3BzLmRpc2FibGVHdXR0ZXJzLFxuICAgICAgZGlzYWJsZUd1dHRlcnMgPSBfcHJvcHMkZGlzYWJsZUd1dHRlcnMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVHdXR0ZXJzLFxuICAgICAgX3Byb3BzJGRpc2FibGVTdGlja3kgPSBwcm9wcy5kaXNhYmxlU3RpY2t5LFxuICAgICAgZGlzYWJsZVN0aWNreSA9IF9wcm9wcyRkaXNhYmxlU3RpY2t5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlU3RpY2t5LFxuICAgICAgX3Byb3BzJGluc2V0ID0gcHJvcHMuaW5zZXQsXG4gICAgICBpbnNldCA9IF9wcm9wcyRpbnNldCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaW5zZXQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZUd1dHRlcnNcIiwgXCJkaXNhYmxlU3RpY2t5XCIsIFwiaW5zZXRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIGNvbG9yICE9PSAnZGVmYXVsdCcgJiYgY2xhc3Nlc1tcImNvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUoY29sb3IpKV0sIGluc2V0ICYmIGNsYXNzZXMuaW5zZXQsICFkaXNhYmxlU3RpY2t5ICYmIGNsYXNzZXMuc3RpY2t5LCAhZGlzYWJsZUd1dHRlcnMgJiYgY2xhc3Nlcy5ndXR0ZXJzKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBMaXN0U3ViaGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnaW5oZXJpdCddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIExpc3QgU3ViaGVhZGVyIHdpbGwgbm90IGhhdmUgZ3V0dGVycy5cbiAgICovXG4gIGRpc2FibGVHdXR0ZXJzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgTGlzdCBTdWJoZWFkZXIgd2lsbCBub3Qgc3RpY2sgdG8gdGhlIHRvcCBkdXJpbmcgc2Nyb2xsLlxuICAgKi9cbiAgZGlzYWJsZVN0aWNreTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIExpc3QgU3ViaGVhZGVyIHdpbGwgYmUgaW5kZW50ZWQuXG4gICAqL1xuICBpbnNldDogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpTGlzdFN1YmhlYWRlcidcbn0pKExpc3RTdWJoZWFkZXIpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xpc3RTdWJoZWFkZXInOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbi8vIEBpbmhlcml0ZWRDb21wb25lbnQgSWNvbkJ1dHRvblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgeyBmYWRlIH0gZnJvbSAnLi4vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgU3dpdGNoQmFzZSBmcm9tICcuLi9pbnRlcm5hbC9Td2l0Y2hCYXNlJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgd2lkdGg6IDM0ICsgMTIgKiAyLFxuICAgICAgaGVpZ2h0OiAxNCArIDEyICogMixcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHBhZGRpbmc6IDEyLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICB6SW5kZXg6IDAsXG4gICAgICAvLyBSZXNldCB0aGUgc3RhY2tpbmcgY29udGV4dC5cbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgLy8gRm9yIGNvcnJlY3QgYWxpZ25tZW50IHdpdGggdGhlIHRleHQuXG4gICAgICAnQG1lZGlhIHByaW50Jzoge1xuICAgICAgICBjb2xvckFkanVzdDogJ2V4YWN0J1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlZGdlPVwic3RhcnRcImAuICovXG4gICAgZWRnZVN0YXJ0OiB7XG4gICAgICBtYXJnaW5MZWZ0OiAtOFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlZGdlPVwiZW5kXCJgLiAqL1xuICAgIGVkZ2VFbmQ6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAtOFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgYFN3aXRjaEJhc2VgIGNvbXBvbmVudCdzIGByb290YCBjbGFzcy4gKi9cbiAgICBzd2l0Y2hCYXNlOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICAvLyBSZW5kZXIgYWJvdmUgdGhlIGZvY3VzIHJpcHBsZS5cbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbNTBdIDogdGhlbWUucGFsZXR0ZS5ncmV5WzQwMF0sXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydsZWZ0JywgJ3RyYW5zZm9ybSddLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVzdFxuICAgICAgfSksXG4gICAgICAnJiRjaGVja2VkJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDIwcHgpJ1xuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5ncmV5WzQwMF0gOiB0aGVtZS5wYWxldHRlLmdyZXlbODAwXVxuICAgICAgfSxcbiAgICAgICcmJGNoZWNrZWQgKyAkdHJhY2snOiB7XG4gICAgICAgIG9wYWNpdHk6IDAuNVxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkICsgJHRyYWNrJzoge1xuICAgICAgICBvcGFjaXR5OiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAwLjEyIDogMC4xXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBTd2l0Y2hCYXNlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIGNvbG9yUHJpbWFyeToge1xuICAgICAgJyYkY2hlY2tlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyT3BhY2l0eSksXG4gICAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbNDAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVs4MDBdXG4gICAgICB9LFxuICAgICAgJyYkY2hlY2tlZCArICR0cmFjayc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkICsgJHRyYWNrJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrIDogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIFN3aXRjaEJhc2UgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgJyYkY2hlY2tlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLCB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3Zlck9wYWNpdHkpLFxuICAgICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5ncmV5WzQwMF0gOiB0aGVtZS5wYWxldHRlLmdyZXlbODAwXVxuICAgICAgfSxcbiAgICAgICcmJGNoZWNrZWQgKyAkdHJhY2snOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkICsgJHRyYWNrJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrIDogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2l6ZT1cInNtYWxsXCJgLiAqL1xuICAgIHNpemVTbWFsbDoge1xuICAgICAgd2lkdGg6IDQwLFxuICAgICAgaGVpZ2h0OiAyNCxcbiAgICAgIHBhZGRpbmc6IDcsXG4gICAgICAnJiAkdGh1bWInOiB7XG4gICAgICAgIHdpZHRoOiAxNixcbiAgICAgICAgaGVpZ2h0OiAxNlxuICAgICAgfSxcbiAgICAgICcmICRzd2l0Y2hCYXNlJzoge1xuICAgICAgICBwYWRkaW5nOiA0LFxuICAgICAgICAnJiRjaGVja2VkJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTZweCknXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGBTd2l0Y2hCYXNlYCBjb21wb25lbnQncyBgY2hlY2tlZGAgY2xhc3MuICovXG4gICAgY2hlY2tlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgU3dpdGNoQmFzZSBjb21wb25lbnQncyBkaXNhYmxlZCBjbGFzcy4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgU3dpdGNoQmFzZSBjb21wb25lbnQncyBpbnB1dCBlbGVtZW50LiAqL1xuICAgIGlucHV0OiB7XG4gICAgICBsZWZ0OiAnLTEwMCUnLFxuICAgICAgd2lkdGg6ICczMDAlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgdXNlZCB0byBjcmVhdGUgdGhlIHRodW1iIHBhc3NlZCB0byB0aGUgaW50ZXJuYWwgYFN3aXRjaEJhc2VgIGNvbXBvbmVudCBgaWNvbmAgcHJvcC4gKi9cbiAgICB0aHVtYjoge1xuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHdpZHRoOiAyMCxcbiAgICAgIGhlaWdodDogMjAsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSB0cmFjayBlbGVtZW50LiAqL1xuICAgIHRyYWNrOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXJSYWRpdXM6IDE0IC8gMixcbiAgICAgIHpJbmRleDogLTEsXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydvcGFjaXR5JywgJ2JhY2tncm91bmQtY29sb3InXSwge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlc3RcbiAgICAgIH0pLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayA6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgb3BhY2l0eTogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gMC4zOCA6IDAuM1xuICAgIH1cbiAgfTtcbn07XG52YXIgU3dpdGNoID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gU3dpdGNoKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ3NlY29uZGFyeScgOiBfcHJvcHMkY29sb3IsXG4gICAgICBfcHJvcHMkZWRnZSA9IHByb3BzLmVkZ2UsXG4gICAgICBlZGdlID0gX3Byb3BzJGVkZ2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGVkZ2UsXG4gICAgICBfcHJvcHMkc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzaXplID0gX3Byb3BzJHNpemUgPT09IHZvaWQgMCA/ICdtZWRpdW0nIDogX3Byb3BzJHNpemUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiZWRnZVwiLCBcInNpemVcIl0pO1xuXG4gIHZhciBpY29uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMudGh1bWJcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwge1xuICAgICAgJ3N0YXJ0JzogY2xhc3Nlcy5lZGdlU3RhcnQsXG4gICAgICAnZW5kJzogY2xhc3Nlcy5lZGdlRW5kXG4gICAgfVtlZGdlXSwgc2l6ZSA9PT0gXCJzbWFsbFwiICYmIGNsYXNzZXNbXCJzaXplXCIuY29uY2F0KGNhcGl0YWxpemUoc2l6ZSkpXSlcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpdGNoQmFzZSwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICBpY29uOiBpY29uLFxuICAgIGNoZWNrZWRJY29uOiBpY29uLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgIHJvb3Q6IGNsc3goY2xhc3Nlcy5zd2l0Y2hCYXNlLCBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShjb2xvcikpXSksXG4gICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dCxcbiAgICAgIGNoZWNrZWQ6IGNsYXNzZXMuY2hlY2tlZCxcbiAgICAgIGRpc2FibGVkOiBjbGFzc2VzLmRpc2FibGVkXG4gICAgfSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50cmFja1xuICB9KSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFN3aXRjaC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgaXMgY2hlY2tlZC5cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0byBkaXNwbGF5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjaGVja2VkLlxuICAgKi9cbiAgY2hlY2tlZEljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc3dpdGNoIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBnaXZlbiwgdXNlcyBhIG5lZ2F0aXZlIG1hcmdpbiB0byBjb3VudGVyYWN0IHRoZSBwYWRkaW5nIG9uIG9uZVxuICAgKiBzaWRlICh0aGlzIGlzIG9mdGVuIGhlbHBmdWwgZm9yIGFsaWduaW5nIHRoZSBsZWZ0IG9yIHJpZ2h0XG4gICAqIHNpZGUgb2YgdGhlIGljb24gd2l0aCBjb250ZW50IGFib3ZlIG9yIGJlbG93LCB3aXRob3V0IHJ1aW5pbmcgdGhlIGJvcmRlclxuICAgKiBzaXplIGFuZCBzaGFwZSkuXG4gICAqL1xuICBlZGdlOiBQcm9wVHlwZXMub25lT2YoWydlbmQnLCAnc3RhcnQnLCBmYWxzZV0pLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0byBkaXNwbGF5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bmNoZWNrZWQuXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNBdHRyaWJ1dGVzKSBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQYXNzIGEgcmVmIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFJlZjogcmVmVHlwZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgc3RhdGUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChzdHJpbmcpLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgY2hlY2tlZCBzdGF0ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC5jaGVja2VkYCAoYm9vbGVhbikuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgc3dpdGNoLlxuICAgKiBgc21hbGxgIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGRlbnNlIHN3aXRjaCBzdHlsaW5nLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnbWVkaXVtJywgJ3NtYWxsJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGNvbXBvbmVudC4gVGhlIERPTSBBUEkgY2FzdHMgdGhpcyB0byBhIHN0cmluZy5cbiAgICogVGhlIGJyb3dzZXIgdXNlcyBcIm9uXCIgYXMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlTd2l0Y2gnXG59KShTd2l0Y2gpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1N3aXRjaCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnO1xuaW1wb3J0IEZpbGxlZElucHV0IGZyb20gJy4uL0ZpbGxlZElucHV0JztcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gJy4uL091dGxpbmVkSW5wdXQnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnLi4vSW5wdXRMYWJlbCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnLi4vRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJy4uL0Zvcm1IZWxwZXJUZXh0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vU2VsZWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbnZhciB2YXJpYW50Q29tcG9uZW50ID0ge1xuICBzdGFuZGFyZDogSW5wdXQsXG4gIGZpbGxlZDogRmlsbGVkSW5wdXQsXG4gIG91dGxpbmVkOiBPdXRsaW5lZElucHV0XG59O1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHt9XG59O1xuLyoqXG4gKiBUaGUgYFRleHRGaWVsZGAgaXMgYSBjb252ZW5pZW5jZSB3cmFwcGVyIGZvciB0aGUgbW9zdCBjb21tb24gY2FzZXMgKDgwJSkuXG4gKiBJdCBjYW5ub3QgYmUgYWxsIHRoaW5ncyB0byBhbGwgcGVvcGxlLCBvdGhlcndpc2UgdGhlIEFQSSB3b3VsZCBncm93IG91dCBvZiBjb250cm9sLlxuICpcbiAqICMjIEFkdmFuY2VkIENvbmZpZ3VyYXRpb25cbiAqXG4gKiBJdCdzIGltcG9ydGFudCB0byB1bmRlcnN0YW5kIHRoYXQgdGhlIHRleHQgZmllbGQgaXMgYSBzaW1wbGUgYWJzdHJhY3Rpb25cbiAqIG9uIHRvcCBvZiB0aGUgZm9sbG93aW5nIGNvbXBvbmVudHM6XG4gKlxuICogLSBbRm9ybUNvbnRyb2xdKC9hcGkvZm9ybS1jb250cm9sLylcbiAqIC0gW0lucHV0TGFiZWxdKC9hcGkvaW5wdXQtbGFiZWwvKVxuICogLSBbRmlsbGVkSW5wdXRdKC9hcGkvZmlsbGVkLWlucHV0LylcbiAqIC0gW091dGxpbmVkSW5wdXRdKC9hcGkvb3V0bGluZWQtaW5wdXQvKVxuICogLSBbSW5wdXRdKC9hcGkvaW5wdXQvKVxuICogLSBbRm9ybUhlbHBlclRleHRdKC9hcGkvZm9ybS1oZWxwZXItdGV4dC8pXG4gKlxuICogSWYgeW91IHdpc2ggdG8gYWx0ZXIgdGhlIHByb3BzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCwgeW91IGNhbiBkbyBzbyBhcyBmb2xsb3dzOlxuICpcbiAqIGBgYGpzeFxuICogY29uc3QgaW5wdXRQcm9wcyA9IHtcbiAqICAgc3RlcDogMzAwLFxuICogfTtcbiAqXG4gKiByZXR1cm4gPFRleHRGaWVsZCBpZD1cInRpbWVcIiB0eXBlPVwidGltZVwiIGlucHV0UHJvcHM9e2lucHV0UHJvcHN9IC8+O1xuICogYGBgXG4gKlxuICogRm9yIGFkdmFuY2VkIGNhc2VzLCBwbGVhc2UgbG9vayBhdCB0aGUgc291cmNlIG9mIFRleHRGaWVsZCBieSBjbGlja2luZyBvbiB0aGVcbiAqIFwiRWRpdCB0aGlzIHBhZ2VcIiBidXR0b24gYWJvdmUuIENvbnNpZGVyIGVpdGhlcjpcbiAqXG4gKiAtIHVzaW5nIHRoZSB1cHBlciBjYXNlIHByb3BzIGZvciBwYXNzaW5nIHZhbHVlcyBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50c1xuICogLSB1c2luZyB0aGUgdW5kZXJseWluZyBjb21wb25lbnRzIGRpcmVjdGx5IGFzIHNob3duIGluIHRoZSBkZW1vc1xuICovXG5cbnZhciBUZXh0RmllbGQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUZXh0RmllbGQocHJvcHMsIHJlZikge1xuICB2YXIgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgX3Byb3BzJGF1dG9Gb2N1cyA9IHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgIGF1dG9Gb2N1cyA9IF9wcm9wcyRhdXRvRm9jdXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGF1dG9Gb2N1cyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgY29sb3IgPSBfcHJvcHMkY29sb3IgPT09IHZvaWQgMCA/ICdwcmltYXJ5JyA6IF9wcm9wcyRjb2xvcixcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wcm9wcyRlcnJvciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZXJyb3IsXG4gICAgICBGb3JtSGVscGVyVGV4dFByb3BzID0gcHJvcHMuRm9ybUhlbHBlclRleHRQcm9wcyxcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBoZWxwZXJUZXh0ID0gcHJvcHMuaGVscGVyVGV4dCxcbiAgICAgIGhpZGRlbkxhYmVsID0gcHJvcHMuaGlkZGVuTGFiZWwsXG4gICAgICBpZCA9IHByb3BzLmlkLFxuICAgICAgSW5wdXRMYWJlbFByb3BzID0gcHJvcHMuSW5wdXRMYWJlbFByb3BzLFxuICAgICAgaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICBJbnB1dFByb3BzID0gcHJvcHMuSW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgX3Byb3BzJG11bHRpbGluZSA9IHByb3BzLm11bHRpbGluZSxcbiAgICAgIG11bHRpbGluZSA9IF9wcm9wcyRtdWx0aWxpbmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpbGluZSxcbiAgICAgIG5hbWUgPSBwcm9wcy5uYW1lLFxuICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgIF9wcm9wcyRyZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkLFxuICAgICAgcmVxdWlyZWQgPSBfcHJvcHMkcmVxdWlyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHJlcXVpcmVkLFxuICAgICAgcm93cyA9IHByb3BzLnJvd3MsXG4gICAgICByb3dzTWF4ID0gcHJvcHMucm93c01heCxcbiAgICAgIF9wcm9wcyRzZWxlY3QgPSBwcm9wcy5zZWxlY3QsXG4gICAgICBzZWxlY3QgPSBfcHJvcHMkc2VsZWN0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRzZWxlY3QsXG4gICAgICBTZWxlY3RQcm9wcyA9IHByb3BzLlNlbGVjdFByb3BzLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcImVycm9yXCIsIFwiRm9ybUhlbHBlclRleHRQcm9wc1wiLCBcImZ1bGxXaWR0aFwiLCBcImhlbHBlclRleHRcIiwgXCJoaWRkZW5MYWJlbFwiLCBcImlkXCIsIFwiSW5wdXRMYWJlbFByb3BzXCIsIFwiaW5wdXRQcm9wc1wiLCBcIklucHV0UHJvcHNcIiwgXCJpbnB1dFJlZlwiLCBcImxhYmVsXCIsIFwibXVsdGlsaW5lXCIsIFwibmFtZVwiLCBcIm9uQmx1clwiLCBcIm9uQ2hhbmdlXCIsIFwib25Gb2N1c1wiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVxdWlyZWRcIiwgXCJyb3dzXCIsIFwicm93c01heFwiLCBcInNlbGVjdFwiLCBcIlNlbGVjdFByb3BzXCIsIFwidHlwZVwiLCBcInZhbHVlXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoc2VsZWN0ICYmICFjaGlsZHJlbikge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBjaGlsZHJlbmAgbXVzdCBiZSBwYXNzZWQgd2hlbiB1c2luZyB0aGUgYFRleHRGaWVsZGAgY29tcG9uZW50IHdpdGggYHNlbGVjdGAuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIElucHV0TW9yZSA9IHt9O1xuXG4gIGlmICh2YXJpYW50ID09PSAnb3V0bGluZWQnKSB7XG4gICAgaWYgKElucHV0TGFiZWxQcm9wcyAmJiB0eXBlb2YgSW5wdXRMYWJlbFByb3BzLnNocmluayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIElucHV0TW9yZS5ub3RjaGVkID0gSW5wdXRMYWJlbFByb3BzLnNocmluaztcbiAgICB9XG5cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHZhciBfSW5wdXRMYWJlbFByb3BzJHJlcXU7XG5cbiAgICAgIHZhciBkaXNwbGF5UmVxdWlyZWQgPSAoX0lucHV0TGFiZWxQcm9wcyRyZXF1ID0gSW5wdXRMYWJlbFByb3BzID09PSBudWxsIHx8IElucHV0TGFiZWxQcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogSW5wdXRMYWJlbFByb3BzLnJlcXVpcmVkKSAhPT0gbnVsbCAmJiBfSW5wdXRMYWJlbFByb3BzJHJlcXUgIT09IHZvaWQgMCA/IF9JbnB1dExhYmVsUHJvcHMkcmVxdSA6IHJlcXVpcmVkO1xuICAgICAgSW5wdXRNb3JlLmxhYmVsID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGxhYmVsLCBkaXNwbGF5UmVxdWlyZWQgJiYgXCJcXHhBMCpcIik7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlbGVjdCkge1xuICAgIC8vIHVuc2V0IGRlZmF1bHRzIGZyb20gdGV4dGJveCBpbnB1dHNcbiAgICBpZiAoIVNlbGVjdFByb3BzIHx8ICFTZWxlY3RQcm9wcy5uYXRpdmUpIHtcbiAgICAgIElucHV0TW9yZS5pZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBJbnB1dE1vcmVbJ2FyaWEtZGVzY3JpYmVkYnknXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBoZWxwZXJUZXh0SWQgPSBoZWxwZXJUZXh0ICYmIGlkID8gXCJcIi5jb25jYXQoaWQsIFwiLWhlbHBlci10ZXh0XCIpIDogdW5kZWZpbmVkO1xuICB2YXIgaW5wdXRMYWJlbElkID0gbGFiZWwgJiYgaWQgPyBcIlwiLmNvbmNhdChpZCwgXCItbGFiZWxcIikgOiB1bmRlZmluZWQ7XG4gIHZhciBJbnB1dENvbXBvbmVudCA9IHZhcmlhbnRDb21wb25lbnRbdmFyaWFudF07XG4gIHZhciBJbnB1dEVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBoZWxwZXJUZXh0SWQsXG4gICAgYXV0b0NvbXBsZXRlOiBhdXRvQ29tcGxldGUsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgbXVsdGlsaW5lOiBtdWx0aWxpbmUsXG4gICAgbmFtZTogbmFtZSxcbiAgICByb3dzOiByb3dzLFxuICAgIHJvd3NNYXg6IHJvd3NNYXgsXG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgaWQ6IGlkLFxuICAgIGlucHV0UmVmOiBpbnB1dFJlZixcbiAgICBvbkJsdXI6IG9uQmx1cixcbiAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgb25Gb2N1czogb25Gb2N1cyxcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgaW5wdXRQcm9wczogaW5wdXRQcm9wc1xuICB9LCBJbnB1dE1vcmUsIElucHV0UHJvcHMpKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgZXJyb3I6IGVycm9yLFxuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgIGhpZGRlbkxhYmVsOiBoaWRkZW5MYWJlbCxcbiAgICByZWY6IHJlZixcbiAgICByZXF1aXJlZDogcmVxdWlyZWQsXG4gICAgY29sb3I6IGNvbG9yLFxuICAgIHZhcmlhbnQ6IHZhcmlhbnRcbiAgfSwgb3RoZXIpLCBsYWJlbCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dExhYmVsLCBfZXh0ZW5kcyh7XG4gICAgaHRtbEZvcjogaWQsXG4gICAgaWQ6IGlucHV0TGFiZWxJZFxuICB9LCBJbnB1dExhYmVsUHJvcHMpLCBsYWJlbCksIHNlbGVjdCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBoZWxwZXJUZXh0SWQsXG4gICAgaWQ6IGlkLFxuICAgIGxhYmVsSWQ6IGlucHV0TGFiZWxJZCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgaW5wdXQ6IElucHV0RWxlbWVudFxuICB9LCBTZWxlY3RQcm9wcyksIGNoaWxkcmVuKSA6IElucHV0RWxlbWVudCwgaGVscGVyVGV4dCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtSGVscGVyVGV4dCwgX2V4dGVuZHMoe1xuICAgIGlkOiBoZWxwZXJUZXh0SWRcbiAgfSwgRm9ybUhlbHBlclRleHRQcm9wcyksIGhlbHBlclRleHQpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGV4dEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoaXMgcHJvcCBoZWxwcyB1c2VycyB0byBmaWxsIGZvcm1zIGZhc3RlciwgZXNwZWNpYWxseSBvbiBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhlIG5hbWUgY2FuIGJlIGNvbmZ1c2luZywgYXMgaXQncyBtb3JlIGxpa2UgYW4gYXV0b2ZpbGwuXG4gICAqIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBpdCBbZm9sbG93aW5nIHRoZSBzcGVjaWZpY2F0aW9uXShodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3JtLWNvbnRyb2wtaW5mcmFzdHJ1Y3R1cmUuaHRtbCNhdXRvZmlsbCkuXG4gICAqL1xuICBhdXRvQ29tcGxldGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGZvY3VzZWQgZHVyaW5nIHRoZSBmaXJzdCBtb3VudC5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHdpbGwgYmUgZGlzcGxheWVkIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYEZvcm1IZWxwZXJUZXh0YF0oL2FwaS9mb3JtLWhlbHBlci10ZXh0LykgZWxlbWVudC5cbiAgICovXG4gIEZvcm1IZWxwZXJUZXh0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGhlbHBlciB0ZXh0IGNvbnRlbnQuXG4gICAqL1xuICBoZWxwZXJUZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgaGlkZGVuTGFiZWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogVXNlIHRoaXMgcHJvcCB0byBtYWtlIGBsYWJlbGAgYW5kIGBoZWxwZXJUZXh0YCBhY2Nlc3NpYmxlIGZvciBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYElucHV0TGFiZWxgXSgvYXBpL2lucHV0LWxhYmVsLykgZWxlbWVudC5cbiAgICovXG4gIElucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNBdHRyaWJ1dGVzKSBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBJbnB1dCBlbGVtZW50LlxuICAgKiBJdCB3aWxsIGJlIGEgW2BGaWxsZWRJbnB1dGBdKC9hcGkvZmlsbGVkLWlucHV0LyksXG4gICAqIFtgT3V0bGluZWRJbnB1dGBdKC9hcGkvb3V0bGluZWQtaW5wdXQvKSBvciBbYElucHV0YF0oL2FwaS9pbnB1dC8pXG4gICAqIGNvbXBvbmVudCBkZXBlbmRpbmcgb24gdGhlIGB2YXJpYW50YCBwcm9wIHZhbHVlLlxuICAgKi9cbiAgSW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBjb250ZW50LlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgIG9yIGBub3JtYWxgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nIG9mIHRoaXMgYW5kIGNvbnRhaW5lZCBjb21wb25lbnRzLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZScsICdub25lJywgJ25vcm1hbCddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZCBpbnN0ZWFkIG9mIGFuIGlucHV0LlxuICAgKi9cbiAgbXVsdGlsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIGlzIGRpc3BsYXllZCBhcyByZXF1aXJlZCBhbmQgdGhlIGBpbnB1dGAgZWxlbWVudGAgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIFtgU2VsZWN0YF0oL2FwaS9zZWxlY3QvKSBlbGVtZW50IHdoaWxlIHBhc3NpbmcgdGhlIElucHV0IGVsZW1lbnQgdG8gYFNlbGVjdGAgYXMgYGlucHV0YCBwYXJhbWV0ZXIuXG4gICAqIElmIHRoaXMgb3B0aW9uIGlzIHNldCB5b3UgbXVzdCBwYXNzIHRoZSBvcHRpb25zIG9mIHRoZSBzZWxlY3QgYXMgY2hpbGRyZW4uXG4gICAqL1xuICBzZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFNlbGVjdGBdKC9hcGkvc2VsZWN0LykgZWxlbWVudC5cbiAgICovXG4gIFNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LiBJdCBzaG91bGQgYmUgW2EgdmFsaWQgSFRNTDUgaW5wdXQgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0Zvcm1fJTNDaW5wdXQlM0VfdHlwZXMpLlxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQsIHJlcXVpcmVkIGZvciBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUZXh0RmllbGQnXG59KShUZXh0RmllbGQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RleHRGaWVsZCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCB1c2VDb250cm9sbGVkIGZyb20gJy4uL3V0aWxzL3VzZUNvbnRyb2xsZWQnO1xuaW1wb3J0IHVzZUZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4uL0ljb25CdXR0b24nO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiA5XG4gIH0sXG4gIGNoZWNrZWQ6IHt9LFxuICBkaXNhYmxlZDoge30sXG4gIGlucHV0OiB7XG4gICAgY3Vyc29yOiAnaW5oZXJpdCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgb3BhY2l0eTogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIHpJbmRleDogMVxuICB9XG59O1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBTd2l0Y2hCYXNlID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gU3dpdGNoQmFzZShwcm9wcywgcmVmKSB7XG4gIHZhciBhdXRvRm9jdXMgPSBwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBjaGVja2VkUHJvcCA9IHByb3BzLmNoZWNrZWQsXG4gICAgICBjaGVja2VkSWNvbiA9IHByb3BzLmNoZWNrZWRJY29uLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBkZWZhdWx0Q2hlY2tlZCA9IHByb3BzLmRlZmF1bHRDaGVja2VkLFxuICAgICAgZGlzYWJsZWRQcm9wID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIGlkID0gcHJvcHMuaWQsXG4gICAgICBpbnB1dFByb3BzID0gcHJvcHMuaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBuYW1lID0gcHJvcHMubmFtZSxcbiAgICAgIG9uQmx1ciA9IHByb3BzLm9uQmx1cixcbiAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIHJlYWRPbmx5ID0gcHJvcHMucmVhZE9ubHksXG4gICAgICByZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkLFxuICAgICAgdGFiSW5kZXggPSBwcm9wcy50YWJJbmRleCxcbiAgICAgIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhdXRvRm9jdXNcIiwgXCJjaGVja2VkXCIsIFwiY2hlY2tlZEljb25cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGVmYXVsdENoZWNrZWRcIiwgXCJkaXNhYmxlZFwiLCBcImljb25cIiwgXCJpZFwiLCBcImlucHV0UHJvcHNcIiwgXCJpbnB1dFJlZlwiLCBcIm5hbWVcIiwgXCJvbkJsdXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9uRm9jdXNcIiwgXCJyZWFkT25seVwiLCBcInJlcXVpcmVkXCIsIFwidGFiSW5kZXhcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0pO1xuXG4gIHZhciBfdXNlQ29udHJvbGxlZCA9IHVzZUNvbnRyb2xsZWQoe1xuICAgIGNvbnRyb2xsZWQ6IGNoZWNrZWRQcm9wLFxuICAgIGRlZmF1bHQ6IEJvb2xlYW4oZGVmYXVsdENoZWNrZWQpLFxuICAgIG5hbWU6ICdTd2l0Y2hCYXNlJyxcbiAgICBzdGF0ZTogJ2NoZWNrZWQnXG4gIH0pLFxuICAgICAgX3VzZUNvbnRyb2xsZWQyID0gX3NsaWNlZFRvQXJyYXkoX3VzZUNvbnRyb2xsZWQsIDIpLFxuICAgICAgY2hlY2tlZCA9IF91c2VDb250cm9sbGVkMlswXSxcbiAgICAgIHNldENoZWNrZWRTdGF0ZSA9IF91c2VDb250cm9sbGVkMlsxXTtcblxuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuXG4gIHZhciBoYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIGhhbmRsZUZvY3VzKGV2ZW50KSB7XG4gICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgIG9uRm9jdXMoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkZvY3VzKSB7XG4gICAgICBtdWlGb3JtQ29udHJvbC5vbkZvY3VzKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUJsdXIgPSBmdW5jdGlvbiBoYW5kbGVCbHVyKGV2ZW50KSB7XG4gICAgaWYgKG9uQmx1cikge1xuICAgICAgb25CbHVyKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAobXVpRm9ybUNvbnRyb2wgJiYgbXVpRm9ybUNvbnRyb2wub25CbHVyKSB7XG4gICAgICBtdWlGb3JtQ29udHJvbC5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuICAgIHZhciBuZXdDaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgc2V0Q2hlY2tlZFN0YXRlKG5ld0NoZWNrZWQpO1xuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAvLyBUT0RPIHY1OiByZW1vdmUgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAgICAgIG9uQ2hhbmdlKGV2ZW50LCBuZXdDaGVja2VkKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGRpc2FibGVkID0gZGlzYWJsZWRQcm9wO1xuXG4gIGlmIChtdWlGb3JtQ29udHJvbCkge1xuICAgIGlmICh0eXBlb2YgZGlzYWJsZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkaXNhYmxlZCA9IG11aUZvcm1Db250cm9sLmRpc2FibGVkO1xuICAgIH1cbiAgfVxuXG4gIHZhciBoYXNMYWJlbEZvciA9IHR5cGUgPT09ICdjaGVja2JveCcgfHwgdHlwZSA9PT0gJ3JhZGlvJztcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIF9leHRlbmRzKHtcbiAgICBjb21wb25lbnQ6IFwic3BhblwiLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgY2hlY2tlZCAmJiBjbGFzc2VzLmNoZWNrZWQsIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQpLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICB0YWJJbmRleDogbnVsbCxcbiAgICByb2xlOiB1bmRlZmluZWQsXG4gICAgb25Gb2N1czogaGFuZGxlRm9jdXMsXG4gICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBfZXh0ZW5kcyh7XG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgY2hlY2tlZDogY2hlY2tlZFByb3AsXG4gICAgZGVmYXVsdENoZWNrZWQ6IGRlZmF1bHRDaGVja2VkLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5pbnB1dCxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgaWQ6IGhhc0xhYmVsRm9yICYmIGlkLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUlucHV0Q2hhbmdlLFxuICAgIHJlYWRPbmx5OiByZWFkT25seSxcbiAgICByZWY6IGlucHV0UmVmLFxuICAgIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSwgaW5wdXRQcm9wcykpLCBjaGVja2VkID8gY2hlY2tlZEljb24gOiBpY29uKTtcbn0pOyAvLyBOQjogSWYgY2hhbmdlZCwgcGxlYXNlIHVwZGF0ZSBDaGVja2JveCwgU3dpdGNoIGFuZCBSYWRpb1xuLy8gc28gdGhhdCB0aGUgQVBJIGRvY3VtZW50YXRpb24gaXMgdXBkYXRlZC5cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU3dpdGNoQmFzZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgaXMgY2hlY2tlZC5cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0byBkaXNwbGF5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjaGVja2VkLlxuICAgKi9cbiAgY2hlY2tlZEljb246IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc3dpdGNoIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRvIGRpc3BsYXkgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVuY2hlY2tlZC5cbiAgICovXG4gIGljb246IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFtBdHRyaWJ1dGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjQXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLypcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgc3RhdGUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgY2hlY2tlZCBzdGF0ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC5jaGVja2VkYCAoYm9vbGVhbikuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJdCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGRcbiAgICogKG5vdCBmcm9tIGludGVyYWN0aW5nIHdpdGggdGhlIGZpZWxkKS5cbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCBjb21wb25lbnQgcHJvcCBgdHlwZWAuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnUHJpdmF0ZVN3aXRjaEJhc2UnXG59KShTd2l0Y2hCYXNlKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KShfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTUgMTFoLTR2NGgtMnYtNEg3di0yaDRWN2gydjRoNHYyelwiXG59KSwgJ0FkZENpcmNsZScpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgIHBvc2l0aW9uOidmaXhlZCcsXHJcbiAgICAgIHdpZHRoOic0MCUnLFxyXG4gICAgfSxcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uQXBwQmFyKHByb3BzOmFueSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgbGV0IGJ1dHRvbjtcclxuICBpZihwcm9wcy5jaGVja05ldyl7XHJcbiAgICBidXR0b24gPSA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVJlZ2lzdGVyfT7nmbvpjLI8L0J1dHRvbj5cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0gY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBOZXdzXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7cHJvcHMuY2hlY2tOZXcgPzxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17cHJvcHMuaGFuZGxlUmVnaXN0ZXJ9PueZu+mMsjwvQnV0dG9uPiA6IG51bGx9XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBUYWJzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCI7XHJcbmltcG9ydCBUYWIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIjtcclxuXHJcbmltcG9ydCBQYXR0ZXJuTGlzdCBmcm9tIFwiLi9QYXR0ZXJuTGlzdFwiO1xyXG5pbXBvcnQgU2ltcGxlU2VsZWN0IGZyb20gXCIuL1NlbGVjdFwiO1xyXG5pbXBvcnQgVGFza0xpc3QgZnJvbSBcIi4vVGFza0xpc3RcIjtcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuL0NhbGVuZGFyXCI7XHJcbmltcG9ydCBDYWxlbmRhcjIgZnJvbSBcIi4uL3Rlc3QvY2FsZW5kYXJcIjtcclxuaW1wb3J0IENhbGVuZGFyMyBmcm9tIFwiLi4vdGVzdC9DYWxlbmRhcjNcIjtcclxuaW1wb3J0IENhbGVuZGFyNCBmcm9tIFwiLi4vdGVzdC9jYWxlbmRhcjQuanN4XCI7XHJcblxyXG5pbnRlcmZhY2UgVGFiUGFuZWxQcm9wcyB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGluZGV4OiBhbnk7XHJcbiAgICB2YWx1ZTogYW55O1xyXG59XHJcblxyXG5mdW5jdGlvbiBUYWJQYW5lbChwcm9wczogVGFiUGFuZWxQcm9wcykge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxyXG4gICAgICAgICAgICBpZD17YHNjcm9sbGFibGUtYXV0by10YWJwYW5lbC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17YHNjcm9sbGFibGUtYXV0by10YWItJHtpbmRleH1gfVxyXG4gICAgICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsdWUgPT09IGluZGV4ICYmIChcclxuICAgICAgICAgICAgICAgIDxCb3ggcD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4OiBhbnkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGBzY3JvbGxhYmxlLWF1dG8tdGFiLSR7aW5kZXh9YCxcclxuICAgICAgICBcImFyaWEtY29udHJvbHNcIjogYHNjcm9sbGFibGUtYXV0by10YWJwYW5lbC0ke2luZGV4fWAsXHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIC8vIHBhZGRpbmdUb3A6JzcwcHgnLFxyXG4gICAgICAgIC8vIGRpc3BsYXk6J2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBiYXJTaXplOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxhYmxlVGFic0J1dHRvbkF1dG8oKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Nob2ljZSwgc2V0Q2hvaWNlXSA9IFJlYWN0LnVzZVN0YXRlKE51bWJlcik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7fT4sIG5ld1ZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxBcHBCYXJcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFyU2l6ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxCdXR0b25zPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNjcm9sbGFibGUgYXV0byB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJUYXNrc1wiIHsuLi5hMTF5UHJvcHMoMCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlBhdHRlcm5cIiB7Li4uYTExeVByb3BzKDEpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9PlxyXG4gICAgICAgICAgICAgICAgPFRhc2tMaXN0IC8+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsxfT5cclxuICAgICAgICAgICAgICAgIDxTaW1wbGVTZWxlY3QgY2hvaWNlPXtjaG9pY2V9IHNldENob2ljZT17c2V0Q2hvaWNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFBhdHRlcm5MaXN0IGNob2ljZT17Y2hvaWNlfSAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxTaW1wbGVTZWxlY3QgY2hvaWNlPXtjaG9pY2V9IHNldENob2ljZT17c2V0Q2hvaWNlfS8+XHJcbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXIzIGNob2ljZT17Y2hvaWNlfSAvPiAqL31cclxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHRhc2tEZXRhaWxSZWdpc3RlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdXNlclRhc2tzVHlwZVwiO1xyXG5cclxudHlwZSBuZXdUYXNrc1R5cGUgPSB7XHJcbiAgICBbY29udGVudDogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcclxuICAgIGluZGV4OiBzdHJpbmc7XHJcbiAgICBjb250ZW50SW5kZXg6bnVtYmVyO1xyXG4gICAgY29udGVudHM6IHtcclxuICAgICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICB9W107XHJcbiAgICBzZXRDb250ZW50czogUmVhY3QuRGlzcGF0Y2g8XHJcbiAgICAgICAgUmVhY3QuU2V0U3RhdGVBY3Rpb248XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9W11cclxuICAgICAgICA+XHJcbiAgICA+O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICAgXCImIC5NdWlUZXh0RmllbGQtcm9vdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyNWNoXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtUHJvcHNUZXh0RmllbGRzKHByb3BzOiBwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgLy8g44GT44GT44GnZXZlbnQudGFyZ2V0LnZhbHVl44Go44Op44OZ44OrKOmAo+aDs+mFjeWIl+OBruOCreODvCnjgpLpgIHjgaPjgablh6bnkIbjgZnjgovjgILlh6bnkIbjgoLmnKrkvZzmiJBcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgdGFza0RldGFpbFJlZ2lzdGVyKFtldmVudC50YXJnZXQudmFsdWUsIHByb3BzLmxhYmVsLCBwcm9wcy5pbmRleF0pXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBuZXdUYXNrT25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIC8vIOOBk+OBk+OBp2V2ZW50LnRhcmdldC52YWx1ZeOBqOODqeODmeODqyjpgKPmg7PphY3liJfjga7jgq3jg7wp44KS6YCB44Gj44Gm5Yem55CG44GZ44KL44CC5Yem55CG44KC5pyq5L2c5oiQXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29udGVudHNDb3B5ID0gcHJvcHMuY29udGVudHMuc2xpY2UoKTtcclxuICAgICAgICBjb250ZW50c0NvcHlbcHJvcHMuY29udGVudEluZGV4XS52YWx1ZT1ldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIHByb3BzLnNldENvbnRlbnRzKGNvbnRlbnRzQ29weSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IGNoZWNrID0gdXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KHByb3BzLmluZGV4KV0uZGV0YWlsO1xyXG4gICAgLy8gY29uc3QgY2hlY2sgPSB1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbcHJvcHMubGFiZWxdXHJcbiAgICAvLyDmlrDopo/nmbvpjLLjgYvmm7TmlrDjgYvjgpLjg4Hjgqfjg4Pjgq/jgZnjgovjgILmlrDopo/jgafjgYLjgozjgbBUcnVlXHJcbiAgICBjb25zdCBjaGVja05ldyA9IHVzZXJUYXNrSW5mby50YXNrcy5sZW5ndGggPCBwYXJzZUludChwcm9wcy5pbmRleCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImlucHV0Tm9ybWFsIGNoZWNrIFwiICsgcHJvcHMubGFiZWwpO1xyXG4gICAgLy8gY29uc29sZS5sb2coY2hlY2tOZXcpO1xyXG5cclxuICAgIGlmIChjaGVja05ldykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17cHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17bmV3VGFza09uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jb250ZW50c1twcm9wcy5jb250ZW50SW5kZXhdLnZhbHVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAvLyA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocHJvcHMucmVxdWlyZWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAvLyA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICB1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbcHJvcHMubGFiZWxdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIC8vIDwvZm9ybT5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlclwiO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2hcIjtcclxuaW1wb3J0IFdpZmlJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2lmaVwiO1xyXG5pbXBvcnQgQmx1ZXRvb3RoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0JsdWV0b290aFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdGFza1BhdHRlcm5VcGRhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IDM2MCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXR0ZXJuU3dpdGNoTGlzdChwcm9wczoge2NoZWNrZWQ6IG51bWJlcltdLHNldENoZWNrZWQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcltdPj4saW5kZXg6bnVtYmVyfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8g44GT44GT44Gn44OR44K/44O844Oz44Gu55m76Yyy54q25rOB44KS5pu05paw44GZ44KLXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAodmFsdWU6IG51bWJlcikgPT4gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHByb3BzLmNoZWNrZWQuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgbmV3Q2hlY2tlZCA9IFsuLi5wcm9wcy5jaGVja2VkXTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgbmV3Q2hlY2tlZC5wdXNoKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdDaGVja2VkLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvcHMuc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmV3Q2hlY2tlZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0NoZWNrZWQpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvcHMuaW5kZXg7XHJcbiAgICAgICAgZGlzcGF0Y2godGFza1BhdHRlcm5VcGRhdGUoe25ld0NoZWNrZWQsaW5kZXh9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgc3ViaGVhZGVyPXs8TGlzdFN1YmhlYWRlcj5QYXR0ZXJuTGlzdDwvTGlzdFN1YmhlYWRlcj59XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3VzZXJUYXNrSW5mby5wYXR0ZXJuLm1hcCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpZmlJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NvbnRlbnQucGF0dGVybklkICsgXCJfXCIgKyBjb250ZW50LnBhdHRlcm5OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17Y29udGVudC5wYXR0ZXJuTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoY29udGVudC5wYXR0ZXJuSWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Byb3BzLmNoZWNrZWQuaW5kZXhPZihjb250ZW50LnBhdHRlcm5JZCkgIT09IC0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogY29udGVudC5wYXR0ZXJuSWQgKyBcIl9cIiArIGNvbnRlbnQucGF0dGVybk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBGYWRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlXCI7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NvbW1lbnRcIjtcclxuaW1wb3J0IEFkZENpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGVcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuXHJcbmltcG9ydCBUYXNrTW9kYWwgZnJvbSBcIi4vVGFza01vZGFsXCI7XHJcbmltcG9ydCBUYXNrUGx1cyBmcm9tIFwiLi90YXNrUGx1c1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290czoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA3MjAsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggYXV0byA1cHggYXV0b1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hMaXN0KCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoOTk5OSk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnY2hlY2sgdGFza2xpc3QnKTtcclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvcGVuOlwiICsgb3Blbik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdHN9PlxyXG4gICAgICAgICAgICB7dXNlclRhc2tJbmZvLnRhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsSWQgPSBgY2hlY2tib3gtbGlzdC1sYWJlbC0ke3Rhc2suZGV0YWlsW1widGVzdERldGFpbDFcIl19YDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsYWJlbElkKydfJytpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRldGFpbFsndGl0bGUnXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGUoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2xhYmVsSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17YExpbmUgaXRlbSAke2luZGV4ICsgMX0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMVwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gJHt0YXNrLmRldGFpbFtcInRlc3REZXRhaWwyXCJdfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYXNrTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzaz17dGFza31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxUYXNrUGx1cyBudW09e3VzZXJUYXNrSW5mby50YXNrcy5sZW5ndGgrMX0vPlxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIjtcclxuaW1wb3J0IElucHV0TiBmcm9tIFwiLi9JbnB1dE5vcm1hbFwiO1xyXG5pbXBvcnQgQXBwVmFyIGZyb20gXCIuL0FwcFZhclwiO1xyXG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGVcIjtcclxuaW1wb3J0IFBhdHRlcm5Td2l0Y2hMaXN0IGZyb20gXCIuL1BhdHRlcm5Td2l0Y2hcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHRhc2tSZWdpc3RlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgLy8gd2lkdGg6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgIzAwMFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5jb25zdCBjb250ZW50c0xpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiaWYtdGhlbuODl+ODqeODs+ODi+ODs+OCsFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLnv5LmhaPjga7nqY3jgb/kuIrjgZJcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi44OR44K/44O844OzXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuawl+OBjOmAsuOBvuOBquOBhOOBqOOBjVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLplbfmnJ/nmoTjgavopovov5Tjgorjga7jgYLjgovnv5LmhaPjga7ljbPmmYLnmoTjgarmpb3jgZfjgb9cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi55uu5qiZXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuWuiOOCjOOBquOBi+OBo+OBn+aZguOBrue9sOWJh1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLjg6zjg5njg6tcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6YG/44GR44KL44GT44Go44Gn5b6X44KJ44KM44KL44Oh44Oq44OD44OIXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuimi+i/lOOCiuOBruOBquOBhOe/kuaFo+OBq+WvvuOBmeOCi+WNs+aZgueahOOBqueXm+OBv1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2tNb2RhbChwcm9wczogYW55KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuICAgIGNvbnN0IGNoZWNrTmV3ID0gdXNlclRhc2tJbmZvLnRhc2tzLmxlbmd0aCA8IHBhcnNlSW50KHByb3BzLmluZGV4KTtcclxuICAgIGxldCBzdGF0ZUNoZWNrZWQ6IG51bWJlcltdID0gW107XHJcbiAgICBpZiAoIWNoZWNrTmV3KSB7XHJcbiAgICAgICAgc3RhdGVDaGVja2VkID0gcHJvcHMudGFzay5wYXR0ZXJuSW5mby5tYXAoXHJcbiAgICAgICAgICAgIChjb250ZW50OiB7IHBhdHRlcm5JRDogbnVtYmVyOyBvcmRlcjogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LnBhdHRlcm5JRDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oc3RhdGVDaGVja2VkKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIC8vIOmFjeWIl+OCkuS9nOOBo+OBpumgheebruS4gOimp+OCkuS9nOOCi+OBquOCieOAgeOBneOBrumFjeWIl+OCkuS9v+OBo+OBpuS7peS4i+OBruWkieaVsOOBruWIneacn+ioreWumuOCguOChOOCiuOBn+OBhOOBqOOBk+OCjVxyXG4gICAgLy8g5pyA57WC55qE44Gr44Gv6aCF55uu5LiA6Kan44KCUmVkdXjjgafnrqHnkIbjgZfjgZ/jgYTjgILjgZ3jgozjgpLjgr/jgrnjgq/kuIDopqfjga7lj7PkuIrjgavooajnpLrjgZfjgZ/oqK3lrprjg5zjgr/jg7PjgYvjgonplovjgY/jg6Ljg7zjg4Djg6vjgadPTk9GRuOCkuioreWumuOBmeOCi+OBk+OBqOOBp+OAgeOCv+OCueOCr+ips+e0sOeUu+mdouOBp+S9v+OBhumgheebruOCkumBuOOBueOCi+OAguaWsOimj+eZu+mMsuaZguOCgk9O44Gr44Gq44Gj44Gm44GE44KL6aCF55uu44GM6KGo56S644GV44KM44KLXHJcbiAgICAvLyDjgr/jgrnjgq/oqbPntLDnlLvpnaLjgafjg5fjg6njgrnjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgonpoIXnm67jgpLlopfjgoTjgZvjgovjgILjgZ3jgozjgoLpoIXnm67kuIDopqfjgavkv53nrqHjgZXjgozjgovjgIJcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRUYXNrOiBuZXdUYXNrc1R5cGUgPSB7IFtcIui/veWKoFwiXTogXCLov73liqBcIiB9O1xyXG4gICAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSBSZWFjdC51c2VTdGF0ZShjb250ZW50c0xpc3QpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnNldE9wZW4oOTk5OSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgW2NvbnRlbnQubGFiZWxdOiBjb250ZW50LnZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcGF0dGVybkluZm86IHtcclxuICAgICAgICAgICAgcGF0dGVybklEOiBudW1iZXI7XHJcbiAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgfVtdO1xyXG5cclxuICAgICAgICBwYXR0ZXJuSW5mbyA9IGNoZWNrZWQubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Rhc2tzOiB0YXNrcyA9IHtcclxuICAgICAgICAgICAgZGV0YWlsOiBkZXRhaWxzLFxyXG4gICAgICAgICAgICBwYXR0ZXJuSW5mbzogcGF0dGVybkluZm8sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2godGFza1JlZ2lzdGVyKG5ld1Rhc2tzKSk7XHJcblxyXG4gICAgICAgIHByb3BzLnNldE9wZW4oOTk5OSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOOBk+OBk+OBr+mFjeWIl+OBp+euoeeQhuOBl+OBpm1hcOOBp+ihqOekuuOBl+OBn+OBhOOBqOOBk+OCjVxyXG4gICAgLy8gdGFza+Wei+OBruWkieaVsOOCkueUqOaEj+OBl+OBpuOAgeOBneOCjOOBq+WApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgLy8g5paw6KaP44Gg44Gj44Gf44KJ55m76Yyy44CB44GZ44Gn44Gr44GC44KL6aCF55uu44Gn44GC44KM44Gw5pu05paw44GZ44KL44CCXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVPcGVufT5cclxuICAgICAgICAgICAgICAgIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG4gICAgICAgICAgICAgICAgb3Blbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RmFkZSBpbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwVmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZWdpc3Rlcj17aGFuZGxlUmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja05ldz17Y2hlY2tOZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOOCv+OCueOCr+ips+e0sOeUu+mdontwcm9wcy5pbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3QtdHJhbnNpdGlvbi1ncm91cCBhbmltYXRlcyBtZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog44GT44GT44KS6KaB5L+u5q2j44CC44OR44K/44O844Oz44Gv6YG45oqe5byP44Gn44Gv44GE44GR44Gq44GE44CC6KSH5pWw55m76Yyy44GZ44KL5Y+v6IO95oCn44GM44GC44KL44Gf44KB44CC55m76Yyy5riI44G/5Lul5aSW44Gu44Oq44K544OI44KSZmxpdGVy44Gn5L2c5oiQ44GX44Gm6KGo56S644CB44Go44GL44GL44Gq44CCICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFNpbXBsZVNlbGVjdCBjaG9pY2U9e2Nob2ljZX0gc2V0Q2hvaWNlPXtzZXRDaG9pY2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGF0dGVyblN3aXRjaExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGVja2VkPXtzZXRDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3Byb3BzLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudHMubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29udGVudC5sYWJlbCArIFwiX1wiICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXROXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbD1cImlmLXRoZW7jg5fjg6njg7Pjg4vjg7PjgrBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvbnRlbnQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJvcHMuaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50SW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM9e2NvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudHM9e3NldENvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IGdyZWVuIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5pbXBvcnQgU3ZnSWNvbiwgeyBTdmdJY29uUHJvcHMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvblwiO1xyXG5pbXBvcnQgQWRkQ2lyY2xlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZVwiO1xyXG5pbXBvcnQgVGFza01vZGFsIGZyb20gXCIuL1Rhc2tNb2RhbFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMTBweCBhdXRvIDVweCBhdXRvXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrUGx1c0ljb24ocHJvcHM6IHsgbnVtOiBudW1iZXIgfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW25ld09wZW4sIHNldE5ld09wZW5dID0gUmVhY3QudXNlU3RhdGUoOTk5OSk7XHJcbiAgICBjb25zdCB0YXNrQWRkSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXROZXdPcGVuKHByb3BzLm51bSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrdGVzdFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QWRkQ2lyY2xlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gb25DbGljaz17dGFza0FkZEhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgIDxUYXNrTW9kYWwgb3Blbj17bmV3T3Blbn0gc2V0T3Blbj17c2V0TmV3T3Blbn0gaW5kZXg9e3Byb3BzLm51bX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==