webpackHotUpdate_N_E("pages/Pattern",{

/***/ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js ***!
  \***********************************************************************/
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
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  var backgroundColor = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      backgroundColor: backgroundColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      '&:hover': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.13)' : 'rgba(255, 255, 255, 0.13)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: backgroundColor
        }
      },
      '&$focused': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)'
      },
      '&$disabled': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
      }
    },

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:before': {
        borderBottom: "1px solid ".concat(theme.palette.text.primary)
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if the component is focused. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 12
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 12
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '27px 12px 10px',
      '&$marginDense': {
        paddingTop: 23,
        paddingBottom: 6
      }
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '27px 12px 10px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
        caretColor: theme.palette.type === 'light' ? null : '#fff',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 23,
      paddingBottom: 6
    },

    /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
    inputHiddenLabel: {
      paddingTop: 18,
      paddingBottom: 19,
      '&$inputMarginDense': {
        paddingTop: 10,
        paddingBottom: 11
      }
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var FilledInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FilledInput(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes, {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? FilledInput.propTypes = {
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
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
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
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
FilledInput.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiFilledInput'
})(FilledInput));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FilledInput/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FilledInput/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FilledInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/FormControl.js ***!
  \***********************************************************************/
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
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/isMuiElement */ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js");
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");










var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top' // Fix alignment issue on Safari.

  },

  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  }
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️Only one input can be used within a FormControl.
 */

var FormControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FormControl(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      visuallyFocused = props.focused,
      _props$hiddenLabel = props.hiddenLabel,
      hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel,
      _props$margin = props.margin,
      margin = _props$margin === void 0 ? 'none' : _props$margin,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      size = props.size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "error", "fullWidth", "focused", "hiddenLabel", "margin", "required", "size", "variant"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialAdornedStart = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child) {
        if (!Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Input', 'Select'])) {
          return;
        }

        var input = Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Select']) ? child.props.input : child;

        if (input && Object(_InputBase_utils__WEBPACK_IMPORTED_MODULE_5__["isAdornedStart"])(input.props)) {
          initialAdornedStart = true;
        }
      });
    }

    return initialAdornedStart;
  }),
      adornedStart = _React$useState[0],
      setAdornedStart = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialFilled = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child) {
        if (!Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Input', 'Select'])) {
          return;
        }

        if (Object(_InputBase_utils__WEBPACK_IMPORTED_MODULE_5__["isFilled"])(child.props, true)) {
          initialFilled = true;
        }
      });
    }

    return initialFilled;
  }),
      filled = _React$useState2[0],
      setFilled = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _focused = _React$useState3[0],
      setFocused = _React$useState3[1];

  var focused = visuallyFocused !== undefined ? visuallyFocused : _focused;

  if (disabled && focused) {
    setFocused(false);
  }

  var registerEffect;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var registeredInput = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](false);

    registerEffect = function registerEffect() {
      if (registeredInput.current) {
        console.error(['Material-UI: There are multiple InputBase components inside a FormControl.', 'This is not supported. It might cause infinite rendering loops.', 'Only use one InputBase.'].join('\n'));
      }

      registeredInput.current = true;
      return function () {
        registeredInput.current = false;
      };
    };
  }

  var onFilled = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    setFilled(true);
  }, []);
  var onEmpty = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    setFilled(false);
  }, []);
  var childContext = {
    adornedStart: adornedStart,
    setAdornedStart: setAdornedStart,
    color: color,
    disabled: disabled,
    error: error,
    filled: filled,
    focused: focused,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    margin: (size === 'small' ? 'dense' : undefined) || margin,
    onBlur: function onBlur() {
      setFocused(false);
    },
    onEmpty: onEmpty,
    onFilled: onFilled,
    onFocus: function onFocus() {
      setFocused(true);
    },
    registerEffect: registerEffect,
    required: required,
    variant: variant
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormControlContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, margin !== 'none' && classes["margin".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(margin))], fullWidth && classes.fullWidth),
    ref: ref
  }, other), children));
});
 true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the form control.
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component will be displayed in focused state.
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will be hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   */
  hiddenLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none', 'normal']),

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['medium', 'small']),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiFormControl'
})(FormControl));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/formControlState.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formControlState; });
function formControlState(_ref) {
  var props = _ref.props,
      states = _ref.states,
      muiFormControl = _ref.muiFormControl;
  return states.reduce(function (acc, state) {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/index.js ***!
  \*****************************************************************/
/*! exports provided: default, useFormControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormControl__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFormControl", function() { return _useFormControl__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js ***!
  \*******************************************************************/
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
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      color: theme.palette.text.secondary
    }, theme.typography.body1, {
      lineHeight: 1,
      padding: 0,
      '&$focused': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused': {
        color: theme.palette.secondary.main
      }
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Styles applied to the asterisk element. */
    asterisk: {
      '&$error': {
        color: theme.palette.error.main
      }
    }
  };
};
var FormLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FormLabel(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'label' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      required = props.required,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required),
    ref: ref
  }, other), children, fcs.required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    "aria-hidden": true,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.asterisk, fcs.error && classes.error)
  }, "\u2009", '*'));
});
 true ? FormLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label should use filled classes key.
   */
  filled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiFormLabel'
})(FormLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormLabel/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormLabel/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormLabel__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grow/Grow.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grow/Grow.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/esm/transitions/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");










function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}

var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};
/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Grow(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_5__["Transition"] : _props$TransitionComp,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var timer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var autoTimeout = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var foreignRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__["default"])(children.ref, ref);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__["default"])(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__["reflow"])(node); // So the animation always start from the start.

    var _getTransitionProps = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__["getTransitionProps"])({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration,
        delay = _getTransitionProps.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay
    })].join(',');

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var _getTransitionProps2 = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__["getTransitionProps"])({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration,
        delay = _getTransitionProps2.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay || duration * 0.333
    })].join(',');
    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);

  var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;

    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 true ? Grow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element,

  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  })])
} : undefined;
Grow.muiSupportAuto = true;
/* harmony default export */ __webpack_exports__["default"] = (Grow);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grow/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grow */ "./node_modules/@material-ui/core/esm/Grow/Grow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Grow__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Input/Input.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Input/Input.js ***!
  \***********************************************************/
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
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative'
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      'label + &': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):before': {
        borderBottom: "2px solid ".concat(theme.palette.text.primary),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderBottom: "1px solid ".concat(bottomLineColor)
        }
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},

    /* Styles applied to the `input` element. */
    input: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};
var Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Input(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes, {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? Input.propTypes = {
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
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
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
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
Input.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiInput'
})(Input));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Input/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Input/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Input__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/InputBase.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");




/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */











var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: '0 !important'
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    '@global': {
      '@keyframes mui-auto-fill': {},
      '@keyframes mui-auto-fill-cancel': {}
    },

    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: '1.1876em',
      // Reset (19px), match the native input line-height
      boxSizing: 'border-box',
      // Prevent padding issue with fullWidth.
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    }),

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      '&$marginDense': {
        paddingTop: 4 - 1
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      letterSpacing: 'inherit',
      color: 'currentColor',
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.1876em',
      // Reset (19px), match the native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      animationName: 'mui-auto-fill-cancel',
      animationDuration: '10ms',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      },
      '&:-webkit-autofill': {
        animationDuration: '5000s',
        animationName: 'mui-auto-fill'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: 'auto',
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},

    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_3__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"];
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

var InputBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function InputBase(props, ref) {
  var ariaDescribedby = props['aria-describedby'],
      autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      classes = props.classes,
      className = props.className,
      color = props.color,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      endAdornment = props.endAdornment,
      error = props.error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      id = props.id,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$inputProps = props.inputProps,
      inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps,
      inputRefProp = props.inputRef,
      margin = props.margin,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      placeholder = props.placeholder,
      readOnly = props.readOnly,
      renderSuffix = props.renderSuffix,
      rows = props.rows,
      rowsMax = props.rowsMax,
      rowsMin = props.rowsMin,
      startAdornment = props.startAdornment,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      valueProp = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "startAdornment", "type", "value"]);

  var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var handleInputRefWarning = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (instance) {
    if (true) {
      if (instance && instance.nodeName !== 'INPUT' && !instance.focus) {
        console.error(['Material-UI: You have provided a `inputComponent` to the input component', 'that does not correctly handle the `inputRef` prop.', 'Make sure the `inputRef` prop is called with a HTMLInputElement.'].join('\n'));
      }
    }
  }, []);
  var handleInputPropsRefProp = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(inputPropsProp.ref, handleInputRefWarning);
  var handleInputRefProp = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(inputRefProp, handleInputPropsRefProp);
  var handleInputRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(inputRef, handleInputRefProp);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
      focused = _React$useState[0],
      setFocused = _React$useState[1];

  var muiFormControl = Object(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__["useFormControl"])();

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }

      return undefined;
    }, [muiFormControl]);
  }

  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);

      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  var onFilled = muiFormControl && muiFormControl.onFilled;
  var onEmpty = muiFormControl && muiFormControl.onEmpty;
  var checkDirty = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (obj) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isFilled"])(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect(function () {
    if (isControlled) {
      checkDirty({
        value: value
      });
    }
  }, [value, checkDirty, isControlled]);

  var handleFocus = function handleFocus(event) {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      var element = event.target || inputRef.current;

      if (element == null) {
        throw new Error( true ? "Material-UI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://material-ui.com/r/input-component-ref-interface for more info." : undefined);
      }

      checkDirty({
        value: element.value
      });
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
    } // Perform in the willUpdate


    if (onChange) {
      onChange.apply(void 0, [event].concat(args));
    }
  }; // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).


  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    checkDirty(inputRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var handleClick = function handleClick(event) {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  var InputComponent = inputComponent;

  var inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, inputPropsProp, {
    ref: handleInputRef
  });

  if (typeof InputComponent !== 'string') {
    inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type: type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !rowsMax && !rowsMin) {
      InputComponent = 'textarea';
    } else {
      inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        rows: rows,
        rowsMax: rowsMax
      }, inputProps);
      InputComponent = _TextareaAutosize__WEBPACK_IMPORTED_MODULE_11__["default"];
    }
  } else {
    inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: type
    }, inputProps);
  }

  var handleAutoFill = function handleAutoFill(event) {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
      value: 'x'
    });
  };

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__["default"])(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.margin === 'dense' && classes.marginDense),
    onClick: handleClick,
    ref: ref
  }, other), startAdornment, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: fcs.disabled,
    id: id,
    onAnimationStart: handleAutoFill,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    required: fcs.required,
    rows: rows,
    value: value,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  }, inputProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === 'search' && classes.inputTypeSearch, fcs.margin === 'dense' && classes.inputMarginDense),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, fcs, {
    startAdornment: startAdornment
  })) : null);
});
 true ? InputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  'aria-describedby': prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["refType"],

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Callback fired when the input is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  renderSuffix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  rowsMin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiInputBase'
})(InputBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InputBase__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/utils.js ***!
  \***************************************************************/
/*! exports provided: hasValue, isFilled, isAdornedStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return hasValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilled", function() { return isFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdornedStart", function() { return isAdornedStart; });
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js ***!
  \*********************************************************************/
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
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      transformOrigin: 'top left'
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Pseudo-class applied to the asterisk element. */
    asterisk: {},

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: 'translate(0, 24px) scale(1)'
    },

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      // Compensation for the `Input.inputDense` style.
      transform: 'translate(0, 21px) scale(1)'
    },

    /* Styles applied to the `input` element if `shrink={true}`. */
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    },

    /* Styles applied to the `input` element if `disableAnimation={false}`. */
    animated: {
      transition: theme.transitions.create(['color', 'transform'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(12px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(12px, 17px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(12px, 10px) scale(0.75)',
        '&$marginDense': {
          transform: 'translate(12px, 7px) scale(0.75)'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(14px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(14px, 12px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(14px, -6px) scale(0.75)'
      }
    }
  };
};
var InputLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function InputLabel(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disableAnimati = props.disableAnimation,
      disableAnimation = _props$disableAnimati === void 0 ? false : _props$disableAnimati,
      margin = props.margin,
      shrinkProp = props.shrink,
      variant = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "disableAnimation", "margin", "shrink", "variant"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }

  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['margin', 'variant']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormLabel__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-shrink": shrink,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, muiFormControl && classes.formControl, !disableAnimation && classes.animated, shrink && classes.shrink, fcs.margin === 'dense' && classes.marginDense, {
      'filled': classes.filled,
      'outlined': classes.outlined
    }[fcs.variant]),
    classes: {
      focused: classes.focused,
      disabled: classes.disabled,
      error: classes.error,
      required: classes.required,
      asterisk: classes.asterisk
    },
    ref: ref
  }, other));
});
 true ? InputLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the `InputLabel`.
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
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, apply disabled class.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input of this label is focused.
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense']),

  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label is shrunk.
   */
  shrink: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiInputLabel'
})(InputLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputLabel/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputLabel/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InputLabel__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Menu/Menu.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Menu/Menu.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");













var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  },

  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Menu(props, ref) {
  var _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      _props$disableAutoFoc = props.disableAutoFocusItem,
      disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$MenuListProps = props.MenuListProps,
      MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
      onClose = props.onClose,
      onEntering = props.onEntering,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      PopoverClasses = props.PopoverClasses,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "variant"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  var menuListActionsRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var contentAnchorRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  var getContentAnchorEl = function getContentAnchorEl() {
    return contentAnchorRef.current;
  };

  var handleEntering = function handleEntering(element, isAppearing) {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }

    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };

  var handleListKeyDown = function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();

      if (onClose) {
        onClose(event, 'tabKeyDown');
      }
    }
  };
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */


  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child, index) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child)) {
      return;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isFragment"])(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    if (!child.props.disabled) {
      if (variant !== "menu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child, index) {
    if (index === activeItemIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, {
        ref: function ref(instance) {
          // #StrictMode ready
          contentAnchorRef.current = react_dom__WEBPACK_IMPORTED_MODULE_10__["findDOMNode"](instance);
          Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_11__["default"])(child.ref, instance);
        }
      });
    }

    return child;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Popover__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    getContentAnchorEl: getContentAnchorEl,
    classes: PopoverClasses,
    onClose: onClose,
    onEntering: handleEntering,
    anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, PaperProps, {
      classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    open: open,
    ref: ref,
    transitionDuration: transitionDuration
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_MenuList__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onKeyDown: handleListKeyDown,
    actions: menuListActionsRef,
    autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
    autoFocusItem: autoFocusItem,
    variant: variant
  }, MenuListProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.list, MenuListProps.className)
  }), items));
});
 true ? Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the menu.
   */
  anchorEl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),

  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   */
  disableAutoFocusItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Props applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired before the Menu exits.
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the menu is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * @ignore
   */
  PaperProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * `classes` prop applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  })]),

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['menu', 'selectedMenu'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiMenu'
})(Menu));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js ***!
  \*****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.typography.body1, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: 'border-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    })),
    // TODO v5: remove

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},

    /* Styles applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the root element if dense. */
    dense: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.typography.body2, {
      minHeight: 'auto'
    })
  };
};
var MenuItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function MenuItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      ListItemClasses = props.ListItemClasses,
      _props$role = props.role,
      role = _props$role === void 0 ? 'menuitem' : _props$role,
      selected = props.selected,
      tabIndexProp = props.tabIndex,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);

  var tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    button: true,
    role: role,
    tabIndex: tabIndex,
    component: component,
    selected: selected,
    disableGutters: disableGutters,
    classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      dense: classes.dense
    }, ListItemClasses),
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 true ? MenuItem.propTypes = {
  /**
   * Menu item contents.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * `classes` prop applied to the [`ListItem`](/api/list-item/) element.
   */
  ListItemClasses: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * @ignore
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiMenuItem'
})(MenuItem));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/MenuItem/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/MenuItem/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/MenuList/MenuList.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getScrollbarSize */ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");











function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return disableListWrap ? null : list.firstChild;
}

function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return disableListWrap ? null : list.lastChild;
}

function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === undefined) {
    return true;
  }

  var text = nextFocus.innerText;

  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent;
  }

  text = text.trim().toLowerCase();

  if (text.length === 0) {
    return false;
  }

  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }

  return text.indexOf(textCriteria.keys.join('')) === 0;
}

function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  var wrappedOnce = false;
  var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }

      wrappedOnce = true;
    } // Same logic as useAutocomplete.js


    var nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return;
    }
  }
}

var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"];
/**
 * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
 * It's exposed to help customization of the [`Menu`](/api/menu/) component. If you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 */

var MenuList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function MenuList(props, ref) {
  var actions = props.actions,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$autoFocusItem = props.autoFocusItem,
      autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem,
      children = props.children,
      className = props.className,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      onKeyDown = props.onKeyDown,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]);

  var listRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var textCriteriaRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(function () {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](actions, function () {
    return {
      adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
        // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.
        var noExplicitWidth = !listRef.current.style.width;

        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          var scrollbarSize = "".concat(Object(_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_8__["default"])(true), "px");
          listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
          listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
        }

        return listRef.current;
      }
    };
  }, []);

  var handleKeyDown = function handleKeyDown(event) {
    var list = listRef.current;
    var key = event.key;
    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */

    var currentFocus = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_6__["default"])(list).activeElement;

    if (key === 'ArrowDown') {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      var criteria = textCriteriaRef.current;
      var lowerKey = key.toLowerCase();
      var currTime = performance.now();

      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }

      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (instance) {
    // #StrictMode ready
    listRef.current = react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"](instance);
  }, []);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__["default"])(handleOwnRef, ref);
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */

  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child, index) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child)) {
      return;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isFragment"])(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child, index) {
    if (index === activeItemIndex) {
      var newChildProps = {};

      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }

      if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
        newChildProps.tabIndex = 0;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, newChildProps);
    }

    return child;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_List__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "menu",
    ref: handleRef,
    className: className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other), items);
});
 true ? MenuList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   */
  autoFocusItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the menu items will not wrap focus.
   */
  disableListWrap: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['menu', 'selectedMenu'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (MenuList);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/MenuList/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/MenuList/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuList */ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuList__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js ***!
  \*************************************************************************/
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
/* harmony import */ var _NativeSelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NativeSelectInput */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");










var styles = function styles(theme) {
  return {
    /* Styles applied to the select component `root` class. */
    root: {},

    /* Styles applied to the select component `select` class. */
    select: {
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: 'none',
      borderRadius: 0,
      // Reset
      minWidth: 16,
      // So it doesn't collapse.
      cursor: 'pointer',
      '&:focus': {
        // Show that it's not an text input
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderRadius: 0 // Reset Chrome style

      },
      // Remove IE 11 arrow
      '&::-ms-expand': {
        display: 'none'
      },
      '&$disabled': {
        cursor: 'default'
      },
      '&[multiple]': {
        height: 'auto'
      },
      '&:not([multiple]) option, &:not([multiple]) optgroup': {
        backgroundColor: theme.palette.background.paper
      },
      '&&': {
        paddingRight: 24
      }
    },

    /* Styles applied to the select component if `variant="filled"`. */
    filled: {
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component if `variant="outlined"`. */
    outlined: {
      borderRadius: theme.shape.borderRadius,
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component `selectMenu` class. */
    selectMenu: {
      height: 'auto',
      // Resets for multpile select with chips
      minHeight: '1.1876em',
      // Required for select\text-field height consistency
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },

    /* Pseudo-class applied to the select component `disabled` class. */
    disabled: {},

    /* Styles applied to the icon component. */
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input and to support wrapping tags..
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 12px)',
      // Center vertically
      pointerEvents: 'none',
      // Don't block pointer events on the select under the icon.
      color: theme.palette.action.active,
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the icon component if the popup is open. */
    iconOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the icon component if `variant="filled"`. */
    iconFilled: {
      right: 7
    },

    /* Styles applied to the icon component if `variant="outlined"`. */
    iconOutlined: {
      right: 7
    },

    /* Styles applied to the underlying native input component. */
    nativeInput: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      opacity: 0,
      pointerEvents: 'none',
      width: '100%'
    }
  };
};
var defaultInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Input__WEBPACK_IMPORTED_MODULE_9__["default"], null);
/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 */

var NativeSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function NativeSelect(props, ref) {
  var children = props.children,
      classes = props.classes,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__["default"] : _props$IconComponent,
      _props$input = props.input,
      input = _props$input === void 0 ? defaultInput : _props$input,
      inputProps = props.inputProps,
      variant = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](input, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: _NativeSelectInput__WEBPACK_IMPORTED_MODULE_4__["default"],
    inputProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      children: children,
      classes: classes,
      IconComponent: IconComponent,
      variant: fcs.variant,
      type: undefined
    }, inputProps, input ? input.props.inputProps : {}),
    ref: ref
  }, other));
});
 true ? NativeSelect.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * Attributes applied to the `select` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The input value. The DOM API casts this to a string.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
NativeSelect.muiName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiNativeSelect'
})(NativeSelect));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







/**
 * @ignore - internal component.
 */

var NativeSelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function NativeSelectInput(props, ref) {
  var classes = props.classes,
      className = props.className,
      disabled = props.disabled,
      IconComponent = props.IconComponent,
      inputRef = props.inputRef,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("select", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, // TODO v5: merge root and select
    classes.select, classes[variant], className, disabled && classes.disabled),
    disabled: disabled,
    ref: inputRef || ref
  }, other)), props.multiple ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](IconComponent, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.icon, classes["icon".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(variant))], disabled && classes.disabled)
  }));
});
 true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,

  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * @ignore
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The input value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (NativeSelectInput);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js ***!
  \****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: '0 8px',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      borderStyle: 'solid',
      borderWidth: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the legend element when `labelWidth` is provided. */
    legend: {
      textAlign: 'left',
      padding: 0,
      lineHeight: '11px',
      // sync with `height` in `legend` styles
      transition: theme.transitions.create('width', {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the legend element. */
    legendLabelled: {
      display: 'block',
      width: 'auto',
      textAlign: 'left',
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: '0.75em',
      visibility: 'hidden',
      maxWidth: 0.01,
      transition: theme.transitions.create('max-width', {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      '& > span': {
        paddingLeft: 5,
        paddingRight: 5,
        display: 'inline-block'
      }
    },

    /* Styles applied to the legend element is notched. */
    legendNotched: {
      maxWidth: 1000,
      transition: theme.transitions.create('max-width', {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  };
};
/**
 * @ignore - internal component.
 */

var NotchedOutline = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function NotchedOutline(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      label = props.label,
      labelWidthProp = props.labelWidth,
      notched = props.notched,
      style = props.style,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "classes", "className", "label", "labelWidth", "notched", "style"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var align = theme.direction === 'rtl' ? 'right' : 'left';

  if (label !== undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("fieldset", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      "aria-hidden": true,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
      ref: ref,
      style: style
    }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("legend", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.legendLabelled, notched && classes.legendNotched)
    }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", null, label) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
      dangerouslySetInnerHTML: {
        __html: '&#8203;'
      }
    })));
  }

  var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("fieldset", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "aria-hidden": true,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "padding".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(align)), 8), style),
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("legend", {
    className: classes.legend,
    style: {
      // IE 11: fieldset with legend does not render
      // a border radius. This maintains consistency
      // by always having a legend rendered
      width: notched ? labelWidth : 0.01
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  })));
});
 true ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The label.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The width of the label.
   */
  labelWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'PrivateNotchedOutline'
})(NotchedOutline));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js ***!
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
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _NotchedOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotchedOutline */ "./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");









var styles = function styles(theme) {
  var borderColor = theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      '&:hover $notchedOutline': {
        borderColor: theme.palette.text.primary
      },
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        '&:hover $notchedOutline': {
          borderColor: borderColor
        }
      },
      '&$focused $notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },
      '&$error $notchedOutline': {
        borderColor: theme.palette.error.main
      },
      '&$disabled $notchedOutline': {
        borderColor: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused $notchedOutline': {
        borderColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 14
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 14
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '18.5px 14px',
      '&$marginDense': {
        paddingTop: 10.5,
        paddingBottom: 10.5
      }
    },

    /* Styles applied to the `NotchedOutline` element. */
    notchedOutline: {
      borderColor: borderColor
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '18.5px 14px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
        caretColor: theme.palette.type === 'light' ? null : '#fff',
        borderRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 10.5,
      paddingBottom: 10.5
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var OutlinedInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function OutlinedInput(props, ref) {
  var classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      label = props.label,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      notched = props.notched,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "fullWidth", "inputComponent", "label", "labelWidth", "multiline", "notched", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    renderSuffix: function renderSuffix(state) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_NotchedOutline__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: classes.notchedOutline,
        label: label,
        labelWidth: labelWidth,
        notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      });
    },
    classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes, {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes.underline),
      notchedOutline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? OutlinedInput.propTypes = {
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
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * The label of the input. It is only used for layout. The actual labelling
   * is handled by `InputLabel`. If specified `labelWidth` is ignored.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The width of the label. Is ignored if `label` is provided. Prefer `label`
   * if the input label appears with a strike through.
   */
  labelWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
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
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
OutlinedInput.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiOutlinedInput'
})(OutlinedInput));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _OutlinedInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popover/Popover.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popover/Popover.js ***!
  \***************************************************************/
/*! exports provided: getOffsetTop, getOffsetLeft, styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetTop", function() { return getOffsetTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetLeft", function() { return getOffsetLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");















function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}
function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? "".concat(n, "px") : n;
  }).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentElement;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the `Paper` component. */
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Popover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Popover(props, ref) {
  var action = props.action,
      anchorEl = props.anchorEl,
      _props$anchorOrigin = props.anchorOrigin,
      anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$anchorOrigin,
      anchorPosition = props.anchorPosition,
      _props$anchorReferenc = props.anchorReference,
      anchorReference = _props$anchorReferenc === void 0 ? 'anchorEl' : _props$anchorReferenc,
      children = props.children,
      classes = props.classes,
      className = props.className,
      containerProp = props.container,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 8 : _props$elevation,
      getContentAnchorEl = props.getContentAnchorEl,
      _props$marginThreshol = props.marginThreshold,
      marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$transformOrigi = props.transformOrigin,
      transformOrigin = _props$transformOrigi === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$transformOrigi,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Grow__WEBPACK_IMPORTED_MODULE_13__["default"] : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$TransitionProp = props.TransitionProps,
      TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  var paperRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](); // Returns the top/left offset of the position
  // to attach to on the anchor element (or body if none is provided)

  var getAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (contentAnchorOffset) {
    if (anchorReference === 'anchorPosition') {
      if (true) {
        if (!anchorPosition) {
          console.error('Material-UI: You need to provide a `anchorPosition` prop when using ' + '<Popover anchorReference="anchorPosition" />.');
        }
      }

      return anchorPosition;
    }

    var resolvedAnchorEl = getAnchorEl(anchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

    var anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__["default"])(paperRef.current).body;
    var anchorRect = anchorElement.getBoundingClientRect();

    if (true) {
      var box = anchorElement.getBoundingClientRect();

      if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
      }
    }

    var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the vertical offset of inner content to anchor the transform on if provided

  var getContentAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (element) {
    var contentAnchorOffset = 0;

    if (getContentAnchorEl && anchorReference === 'anchorEl') {
      var contentAnchorEl = getContentAnchorEl(element);

      if (contentAnchorEl && element.contains(contentAnchorEl)) {
        var scrollTop = getScrollParent(element, contentAnchorEl);
        contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
      } // != the default value


      if (true) {
        if (anchorOrigin.vertical !== 'top') {
          console.error(['Material-UI: You can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` prop to the popover component.', 'Only use one of the two props.', 'Set `getContentAnchorEl` to `null | undefined`' + ' or leave `anchorOrigin.vertical` unchanged.'].join('\n'));
        }
      }
    }

    return contentAnchorOffset;
  }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]); // Return the base transform origin using the element
  // and taking the content anchor offset into account if in use

  var getTransformOrigin = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (elemRect) {
    var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  var getPositioningStyle = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (element) {
    // Check if the parent has requested anchoring on an inner content node
    var contentAnchorOffset = getContentAnchorOffset(element);
    var elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    }; // Get the transform origin point on the element itself

    var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);

    if (anchorReference === 'none') {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    } // Get the offset of of the anchoring element


    var anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

    var top = anchorOffset.top - elemTransformOrigin.vertical;
    var left = anchorOffset.left - elemTransformOrigin.horizontal;
    var bottom = top + elemRect.height;
    var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

    var containerWindow = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__["default"])(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

    var heightThreshold = containerWindow.innerHeight - marginThreshold;
    var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

    if (top < marginThreshold) {
      var diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      var _diff = bottom - heightThreshold;

      top -= _diff;
      elemTransformOrigin.vertical += _diff;
    }

    if (true) {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error(['Material-UI: The popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n'));
      }
    } // Check if the horizontal axis needs shifting


    if (left < marginThreshold) {
      var _diff2 = left - marginThreshold;

      left -= _diff2;
      elemTransformOrigin.horizontal += _diff2;
    } else if (right > widthThreshold) {
      var _diff3 = right - widthThreshold;

      left -= _diff3;
      elemTransformOrigin.horizontal += _diff3;
    }

    return {
      top: "".concat(Math.round(top), "px"),
      left: "".concat(Math.round(left), "px"),
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
  var setPositioningStyles = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    var element = paperRef.current;

    if (!element) {
      return;
    }

    var positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }

    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }

    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);

  var handleEntering = function handleEntering(element, isAppearing) {
    if (onEntering) {
      onEntering(element, isAppearing);
    }

    setPositioningStyles();
  };

  var handlePaperRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (instance) {
    // #StrictMode ready
    paperRef.current = react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"](instance);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (open) {
      setPositioningStyles();
    }
  });
  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](action, function () {
    return open ? {
      updatePosition: function updatePosition() {
        setPositioningStyles();
      }
    } : null;
  }, [open, setPositioningStyles]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (!open) {
      return undefined;
    }

    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
      setPositioningStyles();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [open, setPositioningStyles]);
  var transitionDuration = transitionDurationProp;

  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  } // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container


  var container = containerProp || (anchorEl ? Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__["default"])(getAnchorEl(anchorEl)).body : undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    container: container,
    open: open,
    ref: ref,
    BackdropProps: {
      invisible: true
    },
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.root, className)
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appear: true,
    in: open,
    onEnter: onEnter,
    onEntered: onEntered,
    onExit: onExit,
    onExited: onExited,
    onExiting: onExiting,
    timeout: transitionDuration
  }, TransitionProps, {
    onEntering: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_10__["default"])(handleEntering, TransitionProps.onEntering)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Paper__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    elevation: elevation,
    ref: handlePaperRef
  }, PaperProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.paper, PaperProps.className)
  }), children)));
});
 true ? Popover.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the popover.
   */
  anchorEl: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]), function (props) {
    if (props.open && (!props.anchorReference || props.anchorReference === 'anchorEl')) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);

      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else {
        return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', "It should be an Element instance but it's `".concat(resolvedAnchorEl, "` instead.")].join('\n'));
      }
    }

    return null;
  }),

  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['center', 'left', 'right']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['bottom', 'center', 'top']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired
  }),

  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    left: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
    top: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
  }),

  /**
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['anchorEl', 'anchorPosition', 'none']),

  /**
   * The content of the component.
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
   * A HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(react__WEBPACK_IMPORTED_MODULE_2__["Component"]), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),

  /**
   * The elevation of the popover.
   */
  elevation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` prop.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired before the component is entering.
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component has entered.
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component is entering.
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired before the component is exiting.
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component has exited.
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component is exiting.
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the popover is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .shape({
    component: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["elementTypeAcceptingRef"]
  }),

  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['center', 'left', 'right']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['bottom', 'center', 'top']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired
  }),

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  })]),

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__["default"])(styles, {
  name: 'MuiPopover'
})(Popover));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popover/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popover/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popover */ "./node_modules/@material-ui/core/esm/Popover/Popover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Popover__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/Select.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/Select.js ***!
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
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectInput */ "./node_modules/@material-ui/core/esm/Select/SelectInput.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../NativeSelect/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js");
/* harmony import */ var _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../NativeSelect/NativeSelectInput */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");















var styles = _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_11__["styles"];

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Input__WEBPACK_IMPORTED_MODULE_10__["default"], null);

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FilledInput__WEBPACK_IMPORTED_MODULE_13__["default"], null);

var Select = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Select(props, ref) {
  var _props$autoWidth = props.autoWidth,
      autoWidth = _props$autoWidth === void 0 ? false : _props$autoWidth,
      children = props.children,
      classes = props.classes,
      _props$displayEmpty = props.displayEmpty,
      displayEmpty = _props$displayEmpty === void 0 ? false : _props$displayEmpty,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__["default"] : _props$IconComponent,
      id = props.id,
      input = props.input,
      inputProps = props.inputProps,
      label = props.label,
      labelId = props.labelId,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      MenuProps = props.MenuProps,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$native = props.native,
      native = _props$native === void 0 ? false : _props$native,
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      renderValue = props.renderValue,
      SelectDisplayProps = props.SelectDisplayProps,
      _props$variant = props.variant,
      variantProps = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "labelWidth", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);

  var inputComponent = native ? _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_12__["default"] : _SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"];
  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  var variant = fcs.variant || variantProps;
  var InputComponent = input || {
    standard: _ref,
    outlined: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
      label: label,
      labelWidth: labelWidth
    }),
    filled: _ref2
  }[variant];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: inputComponent,
    inputProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      children: children,
      IconComponent: IconComponent,
      variant: variant,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      multiple: multiple
    }, native ? {
      id: id
    } : {
      autoWidth: autoWidth,
      displayEmpty: displayEmpty,
      labelId: labelId,
      MenuProps: MenuProps,
      onClose: onClose,
      onOpen: onOpen,
      open: open,
      renderValue: renderValue,
      SelectDisplayProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        id: id
      }, SelectDisplayProps)
    }, inputProps, {
      classes: inputProps ? Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["mergeClasses"])({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select
      }) : classes
    }, input ? input.props.inputProps : {}),
    ref: ref
  }, other));
});
 true ? Select.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function should be passed to the `renderValue` prop which returns the value to be displayed when no items are selected.
   * You can only use it when the `native` prop is `false` (default).
   */
  displayEmpty: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  labelWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Control `select` open state.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The input value. Providing an empty string will select no options.
   * This prop is required when the `native` prop is `false` (default).
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
Select.muiName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiSelect'
})(Select));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/SelectInput.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/SelectInput.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Menu/Menu */ "./node_modules/@material-ui/core/esm/Menu/Menu.js");
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");

















function areEqualValues(a, b) {
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(b) === 'object' && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
}

function isEmpty(display) {
  return display == null || typeof display === 'string' && !display.trim();
}
/**
 * @ignore - internal component.
 */


var SelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"](function SelectInput(props, ref) {
  var ariaLabel = props['aria-label'],
      autoFocus = props.autoFocus,
      autoWidth = props.autoWidth,
      children = props.children,
      classes = props.classes,
      className = props.className,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      displayEmpty = props.displayEmpty,
      IconComponent = props.IconComponent,
      inputRefProp = props.inputRef,
      labelId = props.labelId,
      _props$MenuProps = props.MenuProps,
      MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps,
      multiple = props.multiple,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClose = props.onClose,
      onFocus = props.onFocus,
      onOpen = props.onOpen,
      openProp = props.open,
      readOnly = props.readOnly,
      renderValue = props.renderValue,
      _props$SelectDisplayP = props.SelectDisplayProps,
      SelectDisplayProps = _props$SelectDisplayP === void 0 ? {} : _props$SelectDisplayP,
      tabIndexProp = props.tabIndex,
      type = props.type,
      valueProp = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["aria-label", "autoFocus", "autoWidth", "children", "classes", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);

  var _useControlled = Object(_utils_useControlled__WEBPACK_IMPORTED_MODULE_14__["default"])({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select'
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  var inputRef = react__WEBPACK_IMPORTED_MODULE_5__["useRef"](null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__["useState"](null),
      displayNode = _React$useState[0],
      setDisplayNode = _React$useState[1];

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_5__["useRef"](openProp != null),
      isOpenControlled = _React$useRef.current;

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_5__["useState"](),
      menuMinWidthState = _React$useState2[0],
      setMenuMinWidthState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5__["useState"](false),
      openState = _React$useState3[0],
      setOpenState = _React$useState3[1];

  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__["default"])(ref, inputRefProp);
  react__WEBPACK_IMPORTED_MODULE_5__["useImperativeHandle"](handleRef, function () {
    return {
      focus: function focus() {
        displayNode.focus();
      },
      node: inputRef.current,
      value: value
    };
  }, [displayNode, value]);
  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
    if (autoFocus && displayNode) {
      displayNode.focus();
    }
  }, [autoFocus, displayNode]);
  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
    if (displayNode) {
      var label = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__["default"])(displayNode).getElementById(labelId);

      if (label) {
        var handler = function handler() {
          if (getSelection().isCollapsed) {
            displayNode.focus();
          }
        };

        label.addEventListener('click', handler);
        return function () {
          label.removeEventListener('click', handler);
        };
      }
    }

    return undefined;
  }, [labelId, displayNode]);

  var update = function update(open, event) {
    if (open) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }

    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      setOpenState(open);
    }
  };

  var handleMouseDown = function handleMouseDown(event) {
    // Ignore everything but left-click
    if (event.button !== 0) {
      return;
    } // Hijack the default focus behavior.


    event.preventDefault();
    displayNode.focus();
    update(true, event);
  };

  var handleClose = function handleClose(event) {
    update(false, event);
  };

  var childrenArray = react__WEBPACK_IMPORTED_MODULE_5__["Children"].toArray(children); // Support autofill.

  var handleChange = function handleChange(event) {
    var index = childrenArray.map(function (child) {
      return child.props.value;
    }).indexOf(event.target.value);

    if (index === -1) {
      return;
    }

    var child = childrenArray[index];
    setValue(child.props.value);

    if (onChange) {
      onChange(event, child);
    }
  };

  var handleItemClick = function handleItemClick(child) {
    return function (event) {
      if (!multiple) {
        update(false, event);
      }

      var newValue;

      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        var itemIndex = value.indexOf(child.props.value);

        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }

      if (child.props.onClick) {
        child.props.onClick(event);
      }

      if (value === newValue) {
        return;
      }

      setValue(newValue);

      if (onChange) {
        event.persist(); // Preact support, target is read only property on a native event.

        Object.defineProperty(event, 'target', {
          writable: true,
          value: {
            value: newValue,
            name: name
          }
        });
        onChange(event, child);
      }
    };
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (!readOnly) {
      var validKeys = [' ', 'ArrowUp', 'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      'Enter'];

      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };

  var open = displayNode !== null && (isOpenControlled ? openProp : openState);

  var handleBlur = function handleBlur(event) {
    // if open event.stopImmediatePropagation
    if (!open && onBlur) {
      event.persist(); // Preact support, target is read only property on a native event.

      Object.defineProperty(event, 'target', {
        writable: true,
        value: {
          value: value,
          name: name
        }
      });
      onBlur(event);
    }
  };

  delete other['aria-invalid'];
  var display;
  var displaySingle;
  var displayMultiple = [];
  var computeDisplay = false;
  var foundMatch = false; // No need to display any value if the field is empty.

  if (Object(_InputBase_utils__WEBPACK_IMPORTED_MODULE_12__["isFilled"])({
    value: value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }

  var items = childrenArray.map(function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["isValidElement"](child)) {
      return null;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_6__["isFragment"])(child)) {
        console.error(["Material-UI: The Select component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    var selected;

    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error( true ? "Material-UI: The `value` prop must be an array when using the `Select` component with `multiple`." : undefined);
      }

      selected = value.some(function (v) {
        return areEqualValues(v, child.props.value);
      });

      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);

      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }

    if (selected) {
      foundMatch = true;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"](child, {
      'aria-selected': selected ? 'true' : undefined,
      onClick: handleItemClick(child),
      onKeyUp: function onKeyUp(event) {
        if (event.key === ' ') {
          // otherwise our MenuItems dispatches a click event
          // it's not behavior of the native <option> and causes
          // the select to close immediately since we open on space keydown
          event.preventDefault();
        }

        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: 'option',
      selected: selected,
      value: undefined,
      // The value is most likely not a valid HTML attribute.
      'data-value': child.props.value // Instead, we provide it as a data attribute.

    });
  });

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
      if (!foundMatch && !multiple && value !== '') {
        var values = childrenArray.map(function (child) {
          return child.props.value;
        });
        console.warn(["Material-UI: You have provided an out-of-range value `".concat(value, "` for the select ").concat(name ? "(name=\"".concat(name, "\") ") : '', "component."), "Consider providing a value that matches one of the available options or ''.", "The available values are ".concat(values.filter(function (x) {
          return x != null;
        }).map(function (x) {
          return "`".concat(x, "`");
        }).join(', ') || '""', ".")].join('\n'));
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }

  if (computeDisplay) {
    display = multiple ? displayMultiple.join(', ') : displaySingle;
  } // Avoid performing a layout computation in the render method.


  var menuMinWidth = menuMinWidthState;

  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }

  var tabIndex;

  if (typeof tabIndexProp !== 'undefined') {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }

  var buttonId = SelectDisplayProps.id || (name ? "mui-component-select-".concat(name) : undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, // TODO v5: merge root and select
    classes.select, classes.selectMenu, classes[variant], className, disabled && classes.disabled),
    ref: setDisplayNode,
    tabIndex: tabIndex,
    role: "button",
    "aria-disabled": disabled ? 'true' : undefined,
    "aria-expanded": open ? 'true' : undefined,
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
    onKeyDown: handleKeyDown,
    onMouseDown: disabled || readOnly ? null : handleMouseDown,
    onBlur: handleBlur,
    onFocus: onFocus
  }, SelectDisplayProps, {
    // The id is required for proper a11y
    id: buttonId
  }), isEmpty(display) ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : display), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: Array.isArray(value) ? value.join(',') : value,
    name: name,
    ref: inputRef,
    "aria-hidden": true,
    onChange: handleChange,
    tabIndex: -1,
    className: classes.nativeInput,
    autoFocus: autoFocus
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](IconComponent, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.icon, classes["icon".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__["default"])(variant))], open && classes.iconOpen, disabled && classes.disabled)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Menu_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "menu-".concat(name || ''),
    anchorEl: displayNode,
    open: open,
    onClose: handleClose
  }, MenuProps, {
    MenuListProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      'aria-labelledby': labelId,
      role: 'listbox',
      disableListWrap: true
    }, MenuProps.MenuListProps),
    PaperProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, MenuProps.PaperProps, {
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        minWidth: menuMinWidth
      }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
    })
  }), items));
});
 true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * @ignore
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.elementType.isRequired,

  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__["refType"],

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Control `select` open state.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * @ignore
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,

  /**
   * The input value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (SelectInput);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Select__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");







function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_2__["useEffect"];
var styles = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
var TextareaAutosize = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TextareaAutosize(props, ref) {
  var onChange = props.onChange,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$rowsMin = props.rowsMin,
      rowsMinProp = _props$rowsMin === void 0 ? 1 : _props$rowsMin,
      style = props.style,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["onChange", "rows", "rowsMax", "rowsMin", "style", "value"]);

  var rowsMin = rows || rowsMinProp;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__["default"])(ref, inputRef);
  var shadowRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var renders = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](0);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({}),
      state = _React$useState[0],
      setState = _React$useState[1];

  var syncHeight = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    var input = inputRef.current;
    var computedStyle = window.getComputedStyle(input);
    var inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';

    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }

    var boxSizing = computedStyle['box-sizing'];
    var padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    var border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    var innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    var singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

    var outerHeight = innerHeight;

    if (rowsMin) {
      outerHeight = Math.max(Number(rowsMin) * singleRowHeight, outerHeight);
    }

    if (rowsMax) {
      outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    var overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(function (prevState) {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow: overflow,
          outerHeightStyle: outerHeightStyle
        };
      }

      if (true) {
        if (renders.current === 20) {
          console.error(['Material-UI: Too many re-renders. The layout is unstable.', 'TextareaAutosize limits the number of renders to prevent an infinite loop.'].join('\n'));
        }
      }

      return prevState;
    });
  }, [rowsMax, rowsMin, props.placeholder]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      renders.current = 0;
      syncHeight();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);
  useEnhancedEffect(function () {
    syncHeight();
  });
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    renders.current = 0;
  }, [value]);

  var handleChange = function handleChange(event) {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: value,
    onChange: handleChange,
    ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
    ,
    rows: rowsMin,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      height: state.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: state.overflow ? 'hidden' : null
    }, style)
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.shadow, style)
  }));
});
 true ? TextareaAutosize.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Use `rowsMin` instead. The prop will be removed in v5.
   *
   * @deprecated
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Minimum number of rows to display.
   */
  rowsMin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (TextareaAutosize);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextareaAutosize/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown'));

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
/* harmony import */ var _test_Calendar3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../test/Calendar3 */ "./src/components/test/Calendar3.jsx");




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
      lineNumber: 26,
      columnNumber: 9
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      alignItems: 'center'
    },
    barSize: {
      width: 'fit-content',
      display: 'flex',
      margin: '0 auto'
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
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Pattern"
  }, a11yProps(0), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Calendar"
  }, a11yProps(1), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  })))), __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(_PatternList__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(_Select__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), __jsx(_test_Calendar3__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  })));
}

_s(ScrollableTabsButtonAuto, "BDkWVlEh8+DaKPHysXJ2gpEmtFI=", false, function () {
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

/***/ "./src/components/view/Select.tsx":
/*!****************************************!*\
  !*** ./src/components/view/Select.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleSelect; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");


var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\Select.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  });
});
function SimpleSelect() {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      age = _React$useState2[0],
      setAge = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setAge(event.target.value);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.formControl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "demo-simple-select-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Age"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: age,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Ten"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "Twenty"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "Thirty"))));
}

_s(SimpleSelect, "t19zc5WGT5ND1NL1efGpfH26Uhw=", false, function () {
  return [useStyles];
});

_c = SimpleSelect;

var _c;

$RefreshReg$(_c, "SimpleSelect");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9GaWxsZWRJbnB1dC9GaWxsZWRJbnB1dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9GaWxsZWRJbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC9mb3JtQ29udHJvbFN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0Zvcm1Db250cm9sL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0Zvcm1MYWJlbC9Gb3JtTGFiZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRm9ybUxhYmVsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0dyb3cvR3Jvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Hcm93L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0lucHV0L0lucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0lucHV0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0lucHV0QmFzZS9JbnB1dEJhc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vSW5wdXRCYXNlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0lucHV0QmFzZS91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dExhYmVsL0lucHV0TGFiZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vSW5wdXRMYWJlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9NZW51L01lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTWVudUl0ZW0vTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTWVudUl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTWVudUxpc3QvTWVudUxpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTWVudUxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTmF0aXZlU2VsZWN0L05hdGl2ZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9OYXRpdmVTZWxlY3QvTmF0aXZlU2VsZWN0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vT3V0bGluZWRJbnB1dC9Ob3RjaGVkT3V0bGluZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9PdXRsaW5lZElucHV0L091dGxpbmVkSW5wdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vT3V0bGluZWRJbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Qb3BvdmVyL1BvcG92ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vUG9wb3Zlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9TZWxlY3QvU2VsZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1NlbGVjdC9TZWxlY3RJbnB1dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9TZWxlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGV4dGFyZWFBdXRvc2l6ZS9UZXh0YXJlYUF1dG9zaXplLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RleHRhcmVhQXV0b3NpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vaW50ZXJuYWwvc3ZnLWljb25zL0Fycm93RHJvcERvd24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvRmxvYXRpbmdBY3Rpb25CdXR0b24udHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy92aWV3L1NlbGVjdC50c3giXSwibmFtZXMiOlsiVGFiUGFuZWwiLCJwcm9wcyIsImNoaWxkcmVuIiwidmFsdWUiLCJpbmRleCIsIm90aGVyIiwiYTExeVByb3BzIiwiaWQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJhbGlnbkl0ZW1zIiwiYmFyU2l6ZSIsImRpc3BsYXkiLCJtYXJnaW4iLCJTY3JvbGxhYmxlVGFic0J1dHRvbkF1dG8iLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsImNyZWF0ZVN0eWxlcyIsImZvcm1Db250cm9sIiwic3BhY2luZyIsIm1pbldpZHRoIiwic2VsZWN0RW1wdHkiLCJtYXJnaW5Ub3AiLCJTaW1wbGVTZWxlY3QiLCJhZ2UiLCJzZXRBZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDZ0M7QUFDM0Q7QUFDSTtBQUNYO0FBQ3FCO0FBQ1I7QUFDUztBQUN2QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsZ0VBQWdFLE1BQU07QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LFdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9FQUFEO0FBQVksTUFBRSxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESixFQUVJLE1BQUMsZ0VBQUQ7QUFDSSxXQUFPLEVBQUMsMEJBRFo7QUFFSSxNQUFFLEVBQUMsb0JBRlA7QUFHSSxTQUFLLEVBQUVNLEdBSFg7QUFJSSxZQUFRLEVBQUVWLFlBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JLE1BQUMsa0VBQUQ7QUFBVSxTQUFLLEVBQUUsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU5KLEVBT0ksTUFBQyxrRUFBRDtBQUFVLFNBQUssRUFBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEosRUFRSSxNQUFDLGtFQUFEO0FBQVUsU0FBSyxFQUFFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixDQUZKLENBREosQ0FESjtBQWlCSDs7R0F6QnVCUyxZO1VBQ0o1QixTOzs7S0FESTRCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvUGF0dGVybi42MmQ4Y2IxZmNkZjJhZjM0ZmMzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJy4uL0lucHV0QmFzZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgbGlnaHQgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCc7XG4gIHZhciBib3R0b21MaW5lQ29sb3IgPSBsaWdodCA/ICdyZ2JhKDAsIDAsIDAsIDAuNDIpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknO1xuICB2YXIgYmFja2dyb3VuZENvbG9yID0gbGlnaHQgPyAncmdiYSgwLCAwLCAwLCAwLjA5KScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5KSc7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnYmFja2dyb3VuZC1jb2xvcicsIHtcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXRcbiAgICAgIH0pLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHQgPyAncmdiYSgwLCAwLCAwLCAwLjEzKScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKScsXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYkZm9jdXNlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBsaWdodCA/ICdyZ2JhKDAsIDAsIDAsIDAuMDkpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDkpJ1xuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0ID8gJ3JnYmEoMCwgMCwgMCwgMC4xMiknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgY29sb3Igc2Vjb25kYXJ5LiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICAnJiR1bmRlcmxpbmU6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVVbmRlcmxpbmU9e2ZhbHNlfWAuICovXG4gICAgdW5kZXJsaW5lOiB7XG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4pLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIC8vIERvaW5nIHRoZSBvdGhlciB3YXkgYXJvdW5kIGNyYXNoIG9uIElFIDExIFwiJydcIiBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3MvaXNzdWVzLzI0MlxuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJyxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgICAgICB9KSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnIC8vIFRyYW5zcGFyZW50IHRvIHRoZSBob3ZlciBzdHlsZS5cblxuICAgICAgfSxcbiAgICAgICcmJGZvY3VzZWQ6YWZ0ZXInOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKSdcbiAgICAgIH0sXG4gICAgICAnJiRlcnJvcjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyAvLyBlcnJvciBpcyBhbHdheXMgdW5kZXJsaW5lZCBpbiByZWRcblxuICAgICAgfSxcbiAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIi5jb25jYXQoYm90dG9tTGluZUNvbG9yKSxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAvLyBEb2luZyB0aGUgb3RoZXIgd2F5IGFyb3VuZCBjcmFzaCBvbiBJRSAxMSBcIicnXCIgaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8yNDJcbiAgICAgICAgY29udGVudDogJ1wiXFxcXDAwYTBcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdib3JkZXItYm90dG9tLWNvbG9yJywge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgICAgIH0pLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScgLy8gVHJhbnNwYXJlbnQgdG8gdGhlIGhvdmVyIHN0eWxlLlxuXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXI6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSlcbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZDpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnZG90dGVkJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgZm9jdXNlZC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRTdGFydDoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDEyXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVuZEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgYWRvcm5lZEVuZDoge1xuICAgICAgcGFkZGluZ1JpZ2h0OiAxMlxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIG1hcmdpbkRlbnNlOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIG11bHRpbGluZToge1xuICAgICAgcGFkZGluZzogJzI3cHggMTJweCAxMHB4JyxcbiAgICAgICcmJG1hcmdpbkRlbnNlJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiAyMyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogNlxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LiAqL1xuICAgIGlucHV0OiB7XG4gICAgICBwYWRkaW5nOiAnMjdweCAxMnB4IDEwcHgnLFxuICAgICAgJyY6LXdlYmtpdC1hdXRvZmlsbCc6IHtcbiAgICAgICAgV2Via2l0Qm94U2hhZG93OiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBudWxsIDogJzAgMCAwIDEwMHB4ICMyNjY3OTggaW5zZXQnLFxuICAgICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBudWxsIDogJyNmZmYnLFxuICAgICAgICBjYXJldENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBudWxsIDogJyNmZmYnLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnaW5oZXJpdCcsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnaW5oZXJpdCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgaW5wdXRNYXJnaW5EZW5zZToge1xuICAgICAgcGFkZGluZ1RvcDogMjMsXG4gICAgICBwYWRkaW5nQm90dG9tOiA2XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGlmIGluIGA8Rm9ybUNvbnRyb2wgaGlkZGVuTGFiZWwgLz5gLiAqL1xuICAgIGlucHV0SGlkZGVuTGFiZWw6IHtcbiAgICAgIHBhZGRpbmdUb3A6IDE4LFxuICAgICAgcGFkZGluZ0JvdHRvbTogMTksXG4gICAgICAnJiRpbnB1dE1hcmdpbkRlbnNlJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiAxMCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMTFcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgaW5wdXRNdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZFN0YXJ0OiB7XG4gICAgICBwYWRkaW5nTGVmdDogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZEVuZDoge1xuICAgICAgcGFkZGluZ1JpZ2h0OiAwXG4gICAgfVxuICB9O1xufTtcbnZhciBGaWxsZWRJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEZpbGxlZElucHV0KHByb3BzLCByZWYpIHtcbiAgdmFyIGRpc2FibGVVbmRlcmxpbmUgPSBwcm9wcy5kaXNhYmxlVW5kZXJsaW5lLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgX3Byb3BzJGlucHV0Q29tcG9uZW50ID0gcHJvcHMuaW5wdXRDb21wb25lbnQsXG4gICAgICBpbnB1dENvbXBvbmVudCA9IF9wcm9wcyRpbnB1dENvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9wcm9wcyRpbnB1dENvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRtdWx0aWxpbmUgPSBwcm9wcy5tdWx0aWxpbmUsXG4gICAgICBtdWx0aWxpbmUgPSBfcHJvcHMkbXVsdGlsaW5lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtdWx0aWxpbmUsXG4gICAgICBfcHJvcHMkdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHZvaWQgMCA/ICd0ZXh0JyA6IF9wcm9wcyR0eXBlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImRpc2FibGVVbmRlcmxpbmVcIiwgXCJjbGFzc2VzXCIsIFwiZnVsbFdpZHRoXCIsIFwiaW5wdXRDb21wb25lbnRcIiwgXCJtdWx0aWxpbmVcIiwgXCJ0eXBlXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRCYXNlLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NlczogX2V4dGVuZHMoe30sIGNsYXNzZXMsIHtcbiAgICAgIHJvb3Q6IGNsc3goY2xhc3Nlcy5yb290LCAhZGlzYWJsZVVuZGVybGluZSAmJiBjbGFzc2VzLnVuZGVybGluZSksXG4gICAgICB1bmRlcmxpbmU6IG51bGxcbiAgICB9KSxcbiAgICBmdWxsV2lkdGg6IGZ1bGxXaWR0aCxcbiAgICBpbnB1dENvbXBvbmVudDogaW5wdXRDb21wb25lbnQsXG4gICAgbXVsdGlsaW5lOiBtdWx0aWxpbmUsXG4gICAgcmVmOiByZWYsXG4gICAgdHlwZTogdHlwZVxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGaWxsZWRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgYGlucHV0YCBlbGVtZW50IHZhbHVlLiBVc2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBub3QgaGF2ZSBhbiB1bmRlcmxpbmUuXG4gICAqL1xuICBkaXNhYmxlVW5kZXJsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5kIGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgZW5kQWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBpbmRpY2F0ZSBhbiBlcnJvci4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGlucHV0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFtBdHRyaWJ1dGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjQXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIG11bHRpbGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEl0IHByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZFxuICAgKiAobm90IGZyb20gaW50ZXJhY3Rpbmcgd2l0aCB0aGUgZmllbGQpLlxuICAgKi9cbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgc3RhcnRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuIEl0IHNob3VsZCBiZSBbYSB2YWxpZCBIVE1MNSBpbnB1dCB0eXBlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV8lM0NpbnB1dCUzRV90eXBlcykuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudCwgcmVxdWlyZWQgZm9yIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueVxufSA6IHZvaWQgMDtcbkZpbGxlZElucHV0Lm11aU5hbWUgPSAnSW5wdXQnO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUZpbGxlZElucHV0J1xufSkoRmlsbGVkSW5wdXQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ZpbGxlZElucHV0JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBpc0ZpbGxlZCwgaXNBZG9ybmVkU3RhcnQgfSBmcm9tICcuLi9JbnB1dEJhc2UvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgaXNNdWlFbGVtZW50IGZyb20gJy4uL3V0aWxzL2lzTXVpRWxlbWVudCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xDb250ZXh0IGZyb20gJy4vRm9ybUNvbnRyb2xDb250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyBSZXNldCBmaWVsZHNldCBkZWZhdWx0IHN0eWxlLlxuICAgIG1pbldpZHRoOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyAvLyBGaXggYWxpZ25tZW50IGlzc3VlIG9uIFNhZmFyaS5cblxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG1hcmdpbj1cIm5vcm1hbFwiYC4gKi9cbiAgbWFyZ2luTm9ybWFsOiB7XG4gICAgbWFyZ2luVG9wOiAxNixcbiAgICBtYXJnaW5Cb3R0b206IDhcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgbWFyZ2luRGVuc2U6IHtcbiAgICBtYXJnaW5Ub3A6IDgsXG4gICAgbWFyZ2luQm90dG9tOiA0XG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gIGZ1bGxXaWR0aDoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfVxufTtcbi8qKlxuICogUHJvdmlkZXMgY29udGV4dCBzdWNoIGFzIGZpbGxlZC9mb2N1c2VkL2Vycm9yL3JlcXVpcmVkIGZvciBmb3JtIGlucHV0cy5cbiAqIFJlbHlpbmcgb24gdGhlIGNvbnRleHQgcHJvdmlkZXMgaGlnaCBmbGV4aWJpbGl0eSBhbmQgZW5zdXJlcyB0aGF0IHRoZSBzdGF0ZSBhbHdheXMgc3RheXNcbiAqIGNvbnNpc3RlbnQgYWNyb3NzIHRoZSBjaGlsZHJlbiBvZiB0aGUgYEZvcm1Db250cm9sYC5cbiAqIFRoaXMgY29udGV4dCBpcyB1c2VkIGJ5IHRoZSBmb2xsb3dpbmcgY29tcG9uZW50czpcbiAqXG4gKiAgLSBGb3JtTGFiZWxcbiAqICAtIEZvcm1IZWxwZXJUZXh0XG4gKiAgLSBJbnB1dFxuICogIC0gSW5wdXRMYWJlbFxuICpcbiAqIFlvdSBjYW4gZmluZCBvbmUgY29tcG9zaXRpb24gZXhhbXBsZSBiZWxvdyBhbmQgbW9yZSBnb2luZyB0byBbdGhlIGRlbW9zXSgvY29tcG9uZW50cy90ZXh0LWZpZWxkcy8jY29tcG9uZW50cykuXG4gKlxuICogYGBganN4XG4gKiA8Rm9ybUNvbnRyb2w+XG4gKiAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJteS1pbnB1dFwiPkVtYWlsIGFkZHJlc3M8L0lucHV0TGFiZWw+XG4gKiAgIDxJbnB1dCBpZD1cIm15LWlucHV0XCIgYXJpYS1kZXNjcmliZWRieT1cIm15LWhlbHBlci10ZXh0XCIgLz5cbiAqICAgPEZvcm1IZWxwZXJUZXh0IGlkPVwibXktaGVscGVyLXRleHRcIj5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLjwvRm9ybUhlbHBlclRleHQ+XG4gKiA8L0Zvcm1Db250cm9sPlxuICogYGBgXG4gKlxuICog4pqg77iPT25seSBvbmUgaW5wdXQgY2FuIGJlIHVzZWQgd2l0aGluIGEgRm9ybUNvbnRyb2wuXG4gKi9cblxudmFyIEZvcm1Db250cm9sID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRm9ybUNvbnRyb2wocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ3ByaW1hcnknIDogX3Byb3BzJGNvbG9yLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wcm9wcyRlcnJvciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZXJyb3IsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgdmlzdWFsbHlGb2N1c2VkID0gcHJvcHMuZm9jdXNlZCxcbiAgICAgIF9wcm9wcyRoaWRkZW5MYWJlbCA9IHByb3BzLmhpZGRlbkxhYmVsLFxuICAgICAgaGlkZGVuTGFiZWwgPSBfcHJvcHMkaGlkZGVuTGFiZWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGhpZGRlbkxhYmVsLFxuICAgICAgX3Byb3BzJG1hcmdpbiA9IHByb3BzLm1hcmdpbixcbiAgICAgIG1hcmdpbiA9IF9wcm9wcyRtYXJnaW4gPT09IHZvaWQgMCA/ICdub25lJyA6IF9wcm9wcyRtYXJnaW4sXG4gICAgICBfcHJvcHMkcmVxdWlyZWQgPSBwcm9wcy5yZXF1aXJlZCxcbiAgICAgIHJlcXVpcmVkID0gX3Byb3BzJHJlcXVpcmVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRyZXF1aXJlZCxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlZFwiLCBcImVycm9yXCIsIFwiZnVsbFdpZHRoXCIsIFwiZm9jdXNlZFwiLCBcImhpZGRlbkxhYmVsXCIsIFwibWFyZ2luXCIsIFwicmVxdWlyZWRcIiwgXCJzaXplXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBXZSBuZWVkIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgY2hpbGRyZW4gYW5kIGZpbmQgdGhlIElucHV0IGluIG9yZGVyXG4gICAgLy8gdG8gZnVsbHkgc3VwcG9ydCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAgdmFyIGluaXRpYWxBZG9ybmVkU3RhcnQgPSBmYWxzZTtcblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmICghaXNNdWlFbGVtZW50KGNoaWxkLCBbJ0lucHV0JywgJ1NlbGVjdCddKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbnB1dCA9IGlzTXVpRWxlbWVudChjaGlsZCwgWydTZWxlY3QnXSkgPyBjaGlsZC5wcm9wcy5pbnB1dCA6IGNoaWxkO1xuXG4gICAgICAgIGlmIChpbnB1dCAmJiBpc0Fkb3JuZWRTdGFydChpbnB1dC5wcm9wcykpIHtcbiAgICAgICAgICBpbml0aWFsQWRvcm5lZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxBZG9ybmVkU3RhcnQ7XG4gIH0pLFxuICAgICAgYWRvcm5lZFN0YXJ0ID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0QWRvcm5lZFN0YXJ0ID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIC8vIFdlIG5lZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBjaGlsZHJlbiBhbmQgZmluZCB0aGUgSW5wdXQgaW4gb3JkZXJcbiAgICAvLyB0byBmdWxseSBzdXBwb3J0IHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgICB2YXIgaW5pdGlhbEZpbGxlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFpc011aUVsZW1lbnQoY2hpbGQsIFsnSW5wdXQnLCAnU2VsZWN0J10pKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRmlsbGVkKGNoaWxkLnByb3BzLCB0cnVlKSkge1xuICAgICAgICAgIGluaXRpYWxGaWxsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdGlhbEZpbGxlZDtcbiAgfSksXG4gICAgICBmaWxsZWQgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RmlsbGVkID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMyA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF9mb2N1c2VkID0gX1JlYWN0JHVzZVN0YXRlM1swXSxcbiAgICAgIHNldEZvY3VzZWQgPSBfUmVhY3QkdXNlU3RhdGUzWzFdO1xuXG4gIHZhciBmb2N1c2VkID0gdmlzdWFsbHlGb2N1c2VkICE9PSB1bmRlZmluZWQgPyB2aXN1YWxseUZvY3VzZWQgOiBfZm9jdXNlZDtcblxuICBpZiAoZGlzYWJsZWQgJiYgZm9jdXNlZCkge1xuICAgIHNldEZvY3VzZWQoZmFsc2UpO1xuICB9XG5cbiAgdmFyIHJlZ2lzdGVyRWZmZWN0O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdmFyIHJlZ2lzdGVyZWRJbnB1dCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgICByZWdpc3RlckVmZmVjdCA9IGZ1bmN0aW9uIHJlZ2lzdGVyRWZmZWN0KCkge1xuICAgICAgaWYgKHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlcmUgYXJlIG11bHRpcGxlIElucHV0QmFzZSBjb21wb25lbnRzIGluc2lkZSBhIEZvcm1Db250cm9sLicsICdUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEl0IG1pZ2h0IGNhdXNlIGluZmluaXRlIHJlbmRlcmluZyBsb29wcy4nLCAnT25seSB1c2Ugb25lIElucHV0QmFzZS4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICB2YXIgb25GaWxsZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgc2V0RmlsbGVkKHRydWUpO1xuICB9LCBbXSk7XG4gIHZhciBvbkVtcHR5ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHNldEZpbGxlZChmYWxzZSk7XG4gIH0sIFtdKTtcbiAgdmFyIGNoaWxkQ29udGV4dCA9IHtcbiAgICBhZG9ybmVkU3RhcnQ6IGFkb3JuZWRTdGFydCxcbiAgICBzZXRBZG9ybmVkU3RhcnQ6IHNldEFkb3JuZWRTdGFydCxcbiAgICBjb2xvcjogY29sb3IsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGVycm9yOiBlcnJvcixcbiAgICBmaWxsZWQ6IGZpbGxlZCxcbiAgICBmb2N1c2VkOiBmb2N1c2VkLFxuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgIGhpZGRlbkxhYmVsOiBoaWRkZW5MYWJlbCxcbiAgICBtYXJnaW46IChzaXplID09PSAnc21hbGwnID8gJ2RlbnNlJyA6IHVuZGVmaW5lZCkgfHwgbWFyZ2luLFxuICAgIG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgfSxcbiAgICBvbkVtcHR5OiBvbkVtcHR5LFxuICAgIG9uRmlsbGVkOiBvbkZpbGxlZCxcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICB9LFxuICAgIHJlZ2lzdGVyRWZmZWN0OiByZWdpc3RlckVmZmVjdCxcbiAgICByZXF1aXJlZDogcmVxdWlyZWQsXG4gICAgdmFyaWFudDogdmFyaWFudFxuICB9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNoaWxkQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIG1hcmdpbiAhPT0gJ25vbmUnICYmIGNsYXNzZXNbXCJtYXJnaW5cIi5jb25jYXQoY2FwaXRhbGl6ZShtYXJnaW4pKV0sIGZ1bGxXaWR0aCAmJiBjbGFzc2VzLmZ1bGxXaWR0aCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGb3JtQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGZvcm0gY29udHJvbC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsLCBpbnB1dCBhbmQgaGVscGVyIHRleHQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhIGRpc2FibGVkIHN0YXRlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCBzaG91bGQgYmUgZGlzcGxheWVkIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gZm9jdXNlZCBzdGF0ZS5cbiAgICovXG4gIGZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGJlIGhpZGRlbi5cbiAgICogVGhpcyBpcyB1c2VkIHRvIGluY3JlYXNlIGRlbnNpdHkgZm9yIGEgYEZpbGxlZElucHV0YC5cbiAgICogQmUgc3VyZSB0byBhZGQgYGFyaWEtbGFiZWxgIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBoaWRkZW5MYWJlbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAgb3IgYG5vcm1hbGAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcgb2YgdGhpcyBhbmQgY29udGFpbmVkIGNvbXBvbmVudHMuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnLCAnbm9ybWFsJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGluZGljYXRlIHRoYXQgdGhlIGlucHV0IGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUZvcm1Db250cm9sJ1xufSkoRm9ybUNvbnRyb2wpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1Db250cm9sU3RhdGUoX3JlZikge1xuICB2YXIgcHJvcHMgPSBfcmVmLnByb3BzLFxuICAgICAgc3RhdGVzID0gX3JlZi5zdGF0ZXMsXG4gICAgICBtdWlGb3JtQ29udHJvbCA9IF9yZWYubXVpRm9ybUNvbnRyb2w7XG4gIHJldHVybiBzdGF0ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0YXRlKSB7XG4gICAgYWNjW3N0YXRlXSA9IHByb3BzW3N0YXRlXTtcblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wc1tzdGF0ZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGFjY1tzdGF0ZV0gPSBtdWlGb3JtQ29udHJvbFtzdGF0ZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvcm1Db250cm9sJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRm9ybUNvbnRyb2wgfSBmcm9tICcuL3VzZUZvcm1Db250cm9sJzsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgZm9ybUNvbnRyb2xTdGF0ZSBmcm9tICcuLi9Gb3JtQ29udHJvbC9mb3JtQ29udHJvbFN0YXRlJztcbmltcG9ydCB1c2VGb3JtQ29udHJvbCBmcm9tICcuLi9Gb3JtQ29udHJvbC91c2VGb3JtQ29udHJvbCc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiBfZXh0ZW5kcyh7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICAgIH0sIHRoZW1lLnR5cG9ncmFwaHkuYm9keTEsIHtcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgJyYkZm9jdXNlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuZGlzYWJsZWRcbiAgICAgIH0sXG4gICAgICAnJiRlcnJvcic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgICAgfVxuICAgIH0pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29sb3IgaXMgc2Vjb25kYXJ5LiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICAnJiRmb2N1c2VkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmb2N1c2VkPXt0cnVlfWAuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZmlsbGVkPXt0cnVlfWAuICovXG4gICAgZmlsbGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHJlcXVpcmVkPXt0cnVlfWAuICovXG4gICAgcmVxdWlyZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGFzdGVyaXNrIGVsZW1lbnQuICovXG4gICAgYXN0ZXJpc2s6IHtcbiAgICAgICcmJGVycm9yJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbnZhciBGb3JtTGFiZWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBGb3JtTGFiZWwocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnbGFiZWwnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZmlsbGVkID0gcHJvcHMuZmlsbGVkLFxuICAgICAgZm9jdXNlZCA9IHByb3BzLmZvY3VzZWQsXG4gICAgICByZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZWRcIiwgXCJlcnJvclwiLCBcImZpbGxlZFwiLCBcImZvY3VzZWRcIiwgXCJyZXF1aXJlZFwiXSk7XG5cbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ2NvbG9yJywgJ3JlcXVpcmVkJywgJ2ZvY3VzZWQnLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnZmlsbGVkJ11cbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShmY3MuY29sb3IgfHwgJ3ByaW1hcnknKSldLCBjbGFzc05hbWUsIGZjcy5kaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBmY3MuZXJyb3IgJiYgY2xhc3Nlcy5lcnJvciwgZmNzLmZpbGxlZCAmJiBjbGFzc2VzLmZpbGxlZCwgZmNzLmZvY3VzZWQgJiYgY2xhc3Nlcy5mb2N1c2VkLCBmY3MucmVxdWlyZWQgJiYgY2xhc3Nlcy5yZXF1aXJlZCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbiwgZmNzLnJlcXVpcmVkICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmFzdGVyaXNrLCBmY3MuZXJyb3IgJiYgY2xhc3Nlcy5lcnJvcilcbiAgfSwgXCJcXHUyMDA5XCIsICcqJykpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGb3JtTGFiZWwucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYSBkaXNhYmxlZCBzdGF0ZS5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhbiBlcnJvciBzdGF0ZS5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgc2hvdWxkIHVzZSBmaWxsZWQgY2xhc3NlcyBrZXkuXG4gICAqL1xuICBmaWxsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCBvZiB0aGlzIGxhYmVsIGlzIGZvY3VzZWQgKHVzZWQgYnkgYEZvcm1Hcm91cGAgY29tcG9uZW50cykuXG4gICAqL1xuICBmb2N1c2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgd2lsbCBpbmRpY2F0ZSB0aGF0IHRoZSBpbnB1dCBpcyByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlGb3JtTGFiZWwnXG59KShGb3JtTGFiZWwpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvcm1MYWJlbCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZSc7XG5pbXBvcnQgeyByZWZsb3csIGdldFRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4uL3RyYW5zaXRpb25zL3V0aWxzJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuXG5mdW5jdGlvbiBnZXRTY2FsZSh2YWx1ZSkge1xuICByZXR1cm4gXCJzY2FsZShcIi5jb25jYXQodmFsdWUsIFwiLCBcIikuY29uY2F0KE1hdGgucG93KHZhbHVlLCAyKSwgXCIpXCIpO1xufVxuXG52YXIgc3R5bGVzID0ge1xuICBlbnRlcmluZzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiBnZXRTY2FsZSgxKVxuICB9LFxuICBlbnRlcmVkOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06ICdub25lJ1xuICB9XG59O1xuLyoqXG4gKiBUaGUgR3JvdyB0cmFuc2l0aW9uIGlzIHVzZWQgYnkgdGhlIFtUb29sdGlwXSgvY29tcG9uZW50cy90b29sdGlwcy8pIGFuZFxuICogW1BvcG92ZXJdKC9jb21wb25lbnRzL3BvcG92ZXIvKSBjb21wb25lbnRzLlxuICogSXQgdXNlcyBbcmVhY3QtdHJhbnNpdGlvbi1ncm91cF0oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cCkgaW50ZXJuYWxseS5cbiAqL1xuXG52YXIgR3JvdyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEdyb3cocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIF9wcm9wcyRkaXNhYmxlU3RyaWN0TSA9IHByb3BzLmRpc2FibGVTdHJpY3RNb2RlQ29tcGF0LFxuICAgICAgZGlzYWJsZVN0cmljdE1vZGVDb21wYXQgPSBfcHJvcHMkZGlzYWJsZVN0cmljdE0gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVTdHJpY3RNLFxuICAgICAgaW5Qcm9wID0gcHJvcHMuaW4sXG4gICAgICBvbkVudGVyID0gcHJvcHMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZCA9IHByb3BzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmcgPSBwcm9wcy5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0ID0gcHJvcHMub25FeGl0LFxuICAgICAgb25FeGl0ZWQgPSBwcm9wcy5vbkV4aXRlZCxcbiAgICAgIG9uRXhpdGluZyA9IHByb3BzLm9uRXhpdGluZyxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBfcHJvcHMkdGltZW91dCA9IHByb3BzLnRpbWVvdXQsXG4gICAgICB0aW1lb3V0ID0gX3Byb3BzJHRpbWVvdXQgPT09IHZvaWQgMCA/ICdhdXRvJyA6IF9wcm9wcyR0aW1lb3V0LFxuICAgICAgX3Byb3BzJFRyYW5zaXRpb25Db21wID0gcHJvcHMuVHJhbnNpdGlvbkNvbXBvbmVudCxcbiAgICAgIFRyYW5zaXRpb25Db21wb25lbnQgPSBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPT09IHZvaWQgMCA/IFRyYW5zaXRpb24gOiBfcHJvcHMkVHJhbnNpdGlvbkNvbXAsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdFwiLCBcImluXCIsIFwib25FbnRlclwiLCBcIm9uRW50ZXJlZFwiLCBcIm9uRW50ZXJpbmdcIiwgXCJvbkV4aXRcIiwgXCJvbkV4aXRlZFwiLCBcIm9uRXhpdGluZ1wiLCBcInN0eWxlXCIsIFwidGltZW91dFwiLCBcIlRyYW5zaXRpb25Db21wb25lbnRcIl0pO1xuXG4gIHZhciB0aW1lciA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgYXV0b1RpbWVvdXQgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPSB0aGVtZS51bnN0YWJsZV9zdHJpY3RNb2RlICYmICFkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdDtcbiAgdmFyIG5vZGVSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBmb3JlaWduUmVmID0gdXNlRm9ya1JlZihjaGlsZHJlbi5yZWYsIHJlZik7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBub2RlUmVmIDogdW5kZWZpbmVkLCBmb3JlaWduUmVmKTtcblxuICB2YXIgbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayA9IGZ1bmN0aW9uIG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGVPckFwcGVhcmluZywgbWF5YmVBcHBlYXJpbmcpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3JlZiA9IGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBbbm9kZVJlZi5jdXJyZW50LCBub2RlT3JBcHBlYXJpbmddIDogW25vZGVPckFwcGVhcmluZywgbWF5YmVBcHBlYXJpbmddLFxuICAgICAgICAgICAgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgIG5vZGUgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGlzQXBwZWFyaW5nID0gX3JlZjJbMV07IC8vIG9uRW50ZXJYeHggYW5kIG9uRXhpdFh4eCBjYWxsYmFja3MgaGF2ZSBhIGRpZmZlcmVudCBhcmd1bWVudHMubGVuZ3RoIHZhbHVlLlxuXG5cbiAgICAgICAgaWYgKGlzQXBwZWFyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhub2RlLCBpc0FwcGVhcmluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBoYW5kbGVFbnRlcmluZyA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sob25FbnRlcmluZyk7XG4gIHZhciBoYW5kbGVFbnRlciA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgcmVmbG93KG5vZGUpOyAvLyBTbyB0aGUgYW5pbWF0aW9uIGFsd2F5cyBzdGFydCBmcm9tIHRoZSBzdGFydC5cblxuICAgIHZhciBfZ2V0VHJhbnNpdGlvblByb3BzID0gZ2V0VHJhbnNpdGlvblByb3BzKHtcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIHRpbWVvdXQ6IHRpbWVvdXRcbiAgICB9LCB7XG4gICAgICBtb2RlOiAnZW50ZXInXG4gICAgfSksXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IF9nZXRUcmFuc2l0aW9uUHJvcHMuZHVyYXRpb24sXG4gICAgICAgIGRlbGF5ID0gX2dldFRyYW5zaXRpb25Qcm9wcy5kZWxheTtcblxuICAgIHZhciBkdXJhdGlvbjtcblxuICAgIGlmICh0aW1lb3V0ID09PSAnYXV0bycpIHtcbiAgICAgIGR1cmF0aW9uID0gdGhlbWUudHJhbnNpdGlvbnMuZ2V0QXV0b0hlaWdodER1cmF0aW9uKG5vZGUuY2xpZW50SGVpZ2h0KTtcbiAgICAgIGF1dG9UaW1lb3V0LmN1cnJlbnQgPSBkdXJhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb247XG4gICAgfVxuXG4gICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uID0gW3RoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGRlbGF5OiBkZWxheVxuICAgIH0pLCB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAqIDAuNjY2LFxuICAgICAgZGVsYXk6IGRlbGF5XG4gICAgfSldLmpvaW4oJywnKTtcblxuICAgIGlmIChvbkVudGVyKSB7XG4gICAgICBvbkVudGVyKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlRW50ZXJlZCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sob25FbnRlcmVkKTtcbiAgdmFyIGhhbmRsZUV4aXRpbmcgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRXhpdGluZyk7XG4gIHZhciBoYW5kbGVFeGl0ID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBfZ2V0VHJhbnNpdGlvblByb3BzMiA9IGdldFRyYW5zaXRpb25Qcm9wcyh7XG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICB0aW1lb3V0OiB0aW1lb3V0XG4gICAgfSwge1xuICAgICAgbW9kZTogJ2V4aXQnXG4gICAgfSksXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IF9nZXRUcmFuc2l0aW9uUHJvcHMyLmR1cmF0aW9uLFxuICAgICAgICBkZWxheSA9IF9nZXRUcmFuc2l0aW9uUHJvcHMyLmRlbGF5O1xuXG4gICAgdmFyIGR1cmF0aW9uO1xuXG4gICAgaWYgKHRpbWVvdXQgPT09ICdhdXRvJykge1xuICAgICAgZHVyYXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5nZXRBdXRvSGVpZ2h0RHVyYXRpb24obm9kZS5jbGllbnRIZWlnaHQpO1xuICAgICAgYXV0b1RpbWVvdXQuY3VycmVudCA9IGR1cmF0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBkdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICB9XG5cbiAgICBub2RlLnN0eWxlLnRyYW5zaXRpb24gPSBbdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5Jywge1xuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZGVsYXk6IGRlbGF5XG4gICAgfSksIHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgICAgZHVyYXRpb246IGR1cmF0aW9uICogMC42NjYsXG4gICAgICBkZWxheTogZGVsYXkgfHwgZHVyYXRpb24gKiAwLjMzM1xuICAgIH0pXS5qb2luKCcsJyk7XG4gICAgbm9kZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gZ2V0U2NhbGUoMC43NSk7XG5cbiAgICBpZiAob25FeGl0KSB7XG4gICAgICBvbkV4aXQobm9kZSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUV4aXRlZCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sob25FeGl0ZWQpO1xuXG4gIHZhciBhZGRFbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZEVuZExpc3RlbmVyKG5vZGVPck5leHQsIG1heWJlTmV4dCkge1xuICAgIHZhciBuZXh0ID0gZW5hYmxlU3RyaWN0TW9kZUNvbXBhdCA/IG5vZGVPck5leHQgOiBtYXliZU5leHQ7XG5cbiAgICBpZiAodGltZW91dCA9PT0gJ2F1dG8nKSB7XG4gICAgICB0aW1lci5jdXJyZW50ID0gc2V0VGltZW91dChuZXh0LCBhdXRvVGltZW91dC5jdXJyZW50IHx8IDApO1xuICAgIH1cbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIuY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGFwcGVhcjogdHJ1ZSxcbiAgICBpbjogaW5Qcm9wLFxuICAgIG5vZGVSZWY6IGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBub2RlUmVmIDogdW5kZWZpbmVkLFxuICAgIG9uRW50ZXI6IGhhbmRsZUVudGVyLFxuICAgIG9uRW50ZXJlZDogaGFuZGxlRW50ZXJlZCxcbiAgICBvbkVudGVyaW5nOiBoYW5kbGVFbnRlcmluZyxcbiAgICBvbkV4aXQ6IGhhbmRsZUV4aXQsXG4gICAgb25FeGl0ZWQ6IGhhbmRsZUV4aXRlZCxcbiAgICBvbkV4aXRpbmc6IGhhbmRsZUV4aXRpbmcsXG4gICAgYWRkRW5kTGlzdGVuZXI6IGFkZEVuZExpc3RlbmVyLFxuICAgIHRpbWVvdXQ6IHRpbWVvdXQgPT09ICdhdXRvJyA/IG51bGwgOiB0aW1lb3V0XG4gIH0sIG90aGVyKSwgZnVuY3Rpb24gKHN0YXRlLCBjaGlsZFByb3BzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIF9leHRlbmRzKHtcbiAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogZ2V0U2NhbGUoMC43NSksXG4gICAgICAgIHZpc2liaWxpdHk6IHN0YXRlID09PSAnZXhpdGVkJyAmJiAhaW5Qcm9wID8gJ2hpZGRlbicgOiB1bmRlZmluZWRcbiAgICAgIH0sIHN0eWxlc1tzdGF0ZV0sIHN0eWxlLCBjaGlsZHJlbi5wcm9wcy5zdHlsZSksXG4gICAgICByZWY6IGhhbmRsZVJlZlxuICAgIH0sIGNoaWxkUHJvcHMpKTtcbiAgfSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEdyb3cucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSBzaW5nbGUgY2hpbGQgY29udGVudCBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC8qKlxuICAgKiBFbmFibGUgdGhpcyBwcm9wIGlmIHlvdSBlbmNvdW50ZXIgJ0Z1bmN0aW9uIGNvbXBvbmVudHMgY2Fubm90IGJlIGdpdmVuIHJlZnMnLFxuICAgKiB1c2UgYHVuc3RhYmxlX2NyZWF0ZVN0cmljdE1vZGVUaGVtZWAsXG4gICAqIGFuZCBjYW4ndCBmb3J3YXJkIHRoZSByZWYgaW4gdGhlIGNoaWxkIGNvbXBvbmVudC5cbiAgICovXG4gIGRpc2FibGVTdHJpY3RNb2RlQ29tcGF0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBzaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IGFuaW1hdGlvbi5cbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gZm9yIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMsIG9yIGluZGl2aWR1YWxseSB3aXRoIGFuIG9iamVjdC5cbiAgICpcbiAgICogU2V0IHRvICdhdXRvJyB0byBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZSB0cmFuc2l0aW9uIHRpbWUgYmFzZWQgb24gaGVpZ2h0LlxuICAgKi9cbiAgdGltZW91dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSwgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZXhpdDogUHJvcFR5cGVzLm51bWJlclxuICB9KV0pXG59IDogdm9pZCAwO1xuR3Jvdy5tdWlTdXBwb3J0QXV0byA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCBHcm93OyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0dyb3cnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IElucHV0QmFzZSBmcm9tICcuLi9JbnB1dEJhc2UnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGxpZ2h0ID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnO1xuICB2YXIgYm90dG9tTGluZUNvbG9yID0gbGlnaHQgPyAncmdiYSgwLCAwLCAwLCAwLjQyKScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJztcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBhIGRlc2NlbmRhbnQgb2YgYEZvcm1Db250cm9sYC4gKi9cbiAgICBmb3JtQ29udHJvbDoge1xuICAgICAgJ2xhYmVsICsgJic6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAxNlxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgZm9jdXNlZC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBjb2xvciBzZWNvbmRhcnkuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgICcmJHVuZGVybGluZTphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZVVuZGVybGluZT17ZmFsc2V9YC4gKi9cbiAgICB1bmRlcmxpbmU6IHtcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICBib3JkZXJCb3R0b206IFwiMnB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiksXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgLy8gRG9pbmcgdGhlIG90aGVyIHdheSBhcm91bmQgY3Jhc2ggb24gSUUgMTEgXCInJ1wiIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NpbmpzL2pzcy9pc3N1ZXMvMjQyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMCknLFxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlcixcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0XG4gICAgICAgIH0pLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScgLy8gVHJhbnNwYXJlbnQgdG8gdGhlIGhvdmVyIHN0eWxlLlxuXG4gICAgICB9LFxuICAgICAgJyYkZm9jdXNlZDphZnRlcic6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJ1xuICAgICAgfSxcbiAgICAgICcmJGVycm9yOmFmdGVyJzoge1xuICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknIC8vIGVycm9yIGlzIGFsd2F5cyB1bmRlcmxpbmVkIGluIHJlZFxuXG4gICAgICB9LFxuICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiLmNvbmNhdChib3R0b21MaW5lQ29sb3IpLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIC8vIERvaW5nIHRoZSBvdGhlciB3YXkgYXJvdW5kIGNyYXNoIG9uIElFIDExIFwiJydcIiBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3MvaXNzdWVzLzI0MlxuICAgICAgICBjb250ZW50OiAnXCJcXFxcMDBhMFwiJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2JvcmRlci1ib3R0b20tY29sb3InLCB7XG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXJcbiAgICAgICAgfSksXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyAvLyBUcmFuc3BhcmVudCB0byB0aGUgaG92ZXIgc3R5bGUuXG5cbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcjpub3QoJGRpc2FibGVkKTpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbTogXCIycHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5KSxcbiAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcbiAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgXCIuY29uY2F0KGJvdHRvbUxpbmVDb2xvcilcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkOmJlZm9yZSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdkb3R0ZWQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgbWFyZ2luRGVuc2U6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgbXVsdGlsaW5lOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZ1bGxXaWR0aD17dHJ1ZX1gLiAqL1xuICAgIGZ1bGxXaWR0aDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LiAqL1xuICAgIGlucHV0OiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIGlucHV0TWFyZ2luRGVuc2U6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgaW5wdXRNdWx0aWxpbmU6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgdHlwZT1cInNlYXJjaFwiYC4gKi9cbiAgICBpbnB1dFR5cGVTZWFyY2g6IHt9XG4gIH07XG59O1xudmFyIElucHV0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gSW5wdXQocHJvcHMsIHJlZikge1xuICB2YXIgZGlzYWJsZVVuZGVybGluZSA9IHByb3BzLmRpc2FibGVVbmRlcmxpbmUsXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBfcHJvcHMkaW5wdXRDb21wb25lbnQgPSBwcm9wcy5pbnB1dENvbXBvbmVudCxcbiAgICAgIGlucHV0Q29tcG9uZW50ID0gX3Byb3BzJGlucHV0Q29tcG9uZW50ID09PSB2b2lkIDAgPyAnaW5wdXQnIDogX3Byb3BzJGlucHV0Q29tcG9uZW50LFxuICAgICAgX3Byb3BzJG11bHRpbGluZSA9IHByb3BzLm11bHRpbGluZSxcbiAgICAgIG11bHRpbGluZSA9IF9wcm9wcyRtdWx0aWxpbmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpbGluZSxcbiAgICAgIF9wcm9wcyR0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIHR5cGUgPSBfcHJvcHMkdHlwZSA9PT0gdm9pZCAwID8gJ3RleHQnIDogX3Byb3BzJHR5cGUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiZGlzYWJsZVVuZGVybGluZVwiLCBcImNsYXNzZXNcIiwgXCJmdWxsV2lkdGhcIiwgXCJpbnB1dENvbXBvbmVudFwiLCBcIm11bHRpbGluZVwiLCBcInR5cGVcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEJhc2UsIF9leHRlbmRzKHtcbiAgICBjbGFzc2VzOiBfZXh0ZW5kcyh7fSwgY2xhc3Nlcywge1xuICAgICAgcm9vdDogY2xzeChjbGFzc2VzLnJvb3QsICFkaXNhYmxlVW5kZXJsaW5lICYmIGNsYXNzZXMudW5kZXJsaW5lKSxcbiAgICAgIHVuZGVybGluZTogbnVsbFxuICAgIH0pLFxuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgIGlucHV0Q29tcG9uZW50OiBpbnB1dENvbXBvbmVudCxcbiAgICBtdWx0aWxpbmU6IG11bHRpbGluZSxcbiAgICByZWY6IHJlZixcbiAgICB0eXBlOiB0eXBlXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IElucHV0LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoaXMgcHJvcCBoZWxwcyB1c2VycyB0byBmaWxsIGZvcm1zIGZhc3RlciwgZXNwZWNpYWxseSBvbiBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhlIG5hbWUgY2FuIGJlIGNvbmZ1c2luZywgYXMgaXQncyBtb3JlIGxpa2UgYW4gYXV0b2ZpbGwuXG4gICAqIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBpdCBbZm9sbG93aW5nIHRoZSBzcGVjaWZpY2F0aW9uXShodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3JtLWNvbnRyb2wtaW5mcmFzdHJ1Y3R1cmUuaHRtbCNhdXRvZmlsbCkuXG4gICAqL1xuICBhdXRvQ29tcGxldGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGZvY3VzZWQgZHVyaW5nIHRoZSBmaXJzdCBtb3VudC5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBgaW5wdXRgIGVsZW1lbnQgdmFsdWUuIFVzZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbm90IGNvbnRyb2xsZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIG5vdCBoYXZlIGFuIHVuZGVybGluZS5cbiAgICovXG4gIGRpc2FibGVVbmRlcmxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBlbmRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIGluZGljYXRlIGFuIGVycm9yLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgaW5wdXRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNBdHRyaWJ1dGVzKSBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQYXNzIGEgcmVmIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFJlZjogcmVmVHlwZSxcblxuICAvKipcbiAgICogSWYgYGRlbnNlYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZy4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZScsICdub25lJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGEgdGV4dGFyZWEgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgbXVsdGlsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIHNob3J0IGhpbnQgZGlzcGxheWVkIGluIHRoZSBpbnB1dCBiZWZvcmUgdGhlIHVzZXIgZW50ZXJzIGEgdmFsdWUuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSXQgcHJldmVudHMgdGhlIHVzZXIgZnJvbSBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkXG4gICAqIChub3QgZnJvbSBpbnRlcmFjdGluZyB3aXRoIHRoZSBmaWVsZCkuXG4gICAqL1xuICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3NNYXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogU3RhcnQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBzdGFydEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC4gSXQgc2hvdWxkIGJlIFthIHZhbGlkIEhUTUw1IGlucHV0IHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNGb3JtXyUzQ2lucHV0JTNFX3R5cGVzKS5cbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LCByZXF1aXJlZCBmb3IgYSBjb250cm9sbGVkIGNvbXBvbmVudC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55XG59IDogdm9pZCAwO1xuSW5wdXQubXVpTmFtZSA9ICdJbnB1dCc7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpSW5wdXQnXG59KShJbnB1dCk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSW5wdXQnOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzLCBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGZvcm1Db250cm9sU3RhdGUgZnJvbSAnLi4vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZSc7XG5pbXBvcnQgRm9ybUNvbnRyb2xDb250ZXh0LCB7IHVzZUZvcm1Db250cm9sIH0gZnJvbSAnLi4vRm9ybUNvbnRyb2wvRm9ybUNvbnRyb2xDb250ZXh0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICcuLi9UZXh0YXJlYUF1dG9zaXplJztcbmltcG9ydCB7IGlzRmlsbGVkIH0gZnJvbSAnLi91dGlscyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgbGlnaHQgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCc7XG4gIHZhciBwbGFjZWhvbGRlciA9IHtcbiAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgb3BhY2l0eTogbGlnaHQgPyAwLjQyIDogMC41LFxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHtcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgfSlcbiAgfTtcbiAgdmFyIHBsYWNlaG9sZGVySGlkZGVuID0ge1xuICAgIG9wYWNpdHk6ICcwICFpbXBvcnRhbnQnXG4gIH07XG4gIHZhciBwbGFjZWhvbGRlclZpc2libGUgPSB7XG4gICAgb3BhY2l0eTogbGlnaHQgPyAwLjQyIDogMC41XG4gIH07XG4gIHJldHVybiB7XG4gICAgJ0BnbG9iYWwnOiB7XG4gICAgICAnQGtleWZyYW1lcyBtdWktYXV0by1maWxsJzoge30sXG4gICAgICAnQGtleWZyYW1lcyBtdWktYXV0by1maWxsLWNhbmNlbCc6IHt9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDogX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkuYm9keTEsIHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjE4NzZlbScsXG4gICAgICAvLyBSZXNldCAoMTlweCksIG1hdGNoIHRoZSBuYXRpdmUgaW5wdXQgbGluZS1oZWlnaHRcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgLy8gUHJldmVudCBwYWRkaW5nIGlzc3VlIHdpdGggZnVsbFdpZHRoLlxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBjdXJzb3I6ICd0ZXh0JyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmRpc2FibGVkLFxuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgICAgfVxuICAgIH0pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGEgZGVzY2VuZGFudCBvZiBgRm9ybUNvbnRyb2xgLiAqL1xuICAgIGZvcm1Db250cm9sOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBmb2N1c2VkLiAqL1xuICAgIGZvY3VzZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzdGFydEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgYWRvcm5lZFN0YXJ0OiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVuZEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgYWRvcm5lZEVuZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIG1hcmdpbkRlbnNlOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIG11bHRpbGluZToge1xuICAgICAgcGFkZGluZzogXCJcIi5jb25jYXQoOCAtIDIsIFwicHggMCBcIikuY29uY2F0KDggLSAxLCBcInB4XCIpLFxuICAgICAgJyYkbWFyZ2luRGVuc2UnOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IDQgLSAxXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbG9yIGlzIHNlY29uZGFyeS4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmdWxsV2lkdGg9e3RydWV9YC4gKi9cbiAgICBmdWxsV2lkdGg6IHtcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC4gKi9cbiAgICBpbnB1dDoge1xuICAgICAgZm9udDogJ2luaGVyaXQnLFxuICAgICAgbGV0dGVyU3BhY2luZzogJ2luaGVyaXQnLFxuICAgICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgcGFkZGluZzogXCJcIi5jb25jYXQoOCAtIDIsIFwicHggMCBcIikuY29uY2F0KDggLSAxLCBcInB4XCIpLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgaGVpZ2h0OiAnMS4xODc2ZW0nLFxuICAgICAgLy8gUmVzZXQgKDE5cHgpLCBtYXRjaCB0aGUgbmF0aXZlIGlucHV0IGxpbmUtaGVpZ2h0XG4gICAgICBtYXJnaW46IDAsXG4gICAgICAvLyBSZXNldCBmb3IgU2FmYXJpXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAvLyBNYWtlIHRoZSBmbGV4IGl0ZW0gc2hyaW5rIHdpdGggRmlyZWZveFxuICAgICAgbWluV2lkdGg6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgLy8gRml4IElFIDExIHdpZHRoIGlzc3VlXG4gICAgICBhbmltYXRpb25OYW1lOiAnbXVpLWF1dG8tZmlsbC1jYW5jZWwnLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxMG1zJyxcbiAgICAgICcmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXIsXG4gICAgICAnJjo6LW1vei1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyLFxuICAgICAgLy8gRmlyZWZveCAxOStcbiAgICAgICcmOi1tcy1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyLFxuICAgICAgLy8gSUUgMTFcbiAgICAgICcmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgIC8vIEVkZ2VcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiAwXG4gICAgICB9LFxuICAgICAgLy8gUmVzZXQgRmlyZWZveCBpbnZhbGlkIHJlcXVpcmVkIGlucHV0IHN0eWxlXG4gICAgICAnJjppbnZhbGlkJzoge1xuICAgICAgICBib3hTaGFkb3c6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcmOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uJzoge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIHBhZGRpbmcgd2hlbiB0eXBlPXNlYXJjaC5cbiAgICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJ1xuICAgICAgfSxcbiAgICAgIC8vIFNob3cgYW5kIGhpZGUgdGhlIHBsYWNlaG9sZGVyIGxvZ2ljXG4gICAgICAnbGFiZWxbZGF0YS1zaHJpbms9ZmFsc2VdICsgJGZvcm1Db250cm9sICYnOiB7XG4gICAgICAgICcmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJIaWRkZW4sXG4gICAgICAgICcmOjotbW96LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJIaWRkZW4sXG4gICAgICAgIC8vIEZpcmVmb3ggMTkrXG4gICAgICAgICcmOi1tcy1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAvLyBJRSAxMVxuICAgICAgICAnJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJIaWRkZW4sXG4gICAgICAgIC8vIEVkZ2VcbiAgICAgICAgJyY6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlclZpc2libGUsXG4gICAgICAgICcmOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlLFxuICAgICAgICAvLyBGaXJlZm94IDE5K1xuICAgICAgICAnJjpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlclZpc2libGUsXG4gICAgICAgIC8vIElFIDExXG4gICAgICAgICcmOmZvY3VzOjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlclZpc2libGUgLy8gRWRnZVxuXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIG9wYWNpdHk6IDEgLy8gUmVzZXQgaU9TIG9wYWNpdHlcblxuICAgICAgfSxcbiAgICAgICcmOi13ZWJraXQtYXV0b2ZpbGwnOiB7XG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnNTAwMHMnLFxuICAgICAgICBhbmltYXRpb25OYW1lOiAnbXVpLWF1dG8tZmlsbCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgaW5wdXRNYXJnaW5EZW5zZToge1xuICAgICAgcGFkZGluZ1RvcDogNCAtIDFcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgaW5wdXRNdWx0aWxpbmU6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICBwYWRkaW5nOiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYHR5cGU9XCJzZWFyY2hcImAuICovXG4gICAgaW5wdXRUeXBlU2VhcmNoOiB7XG4gICAgICAvLyBJbXByb3ZlIHR5cGUgc2VhcmNoIHN0eWxlLlxuICAgICAgJy1tb3otYXBwZWFyYW5jZSc6ICd0ZXh0ZmllbGQnLFxuICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICd0ZXh0ZmllbGQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYHN0YXJ0QWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRTdGFydDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZEVuZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBoaWRkZW5MYWJlbD17dHJ1ZX1gLiAqL1xuICAgIGlucHV0SGlkZGVuTGFiZWw6IHt9XG4gIH07XG59O1xudmFyIHVzZUVuaGFuY2VkRWZmZWN0ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VFZmZlY3QgOiBSZWFjdC51c2VMYXlvdXRFZmZlY3Q7XG4vKipcbiAqIGBJbnB1dEJhc2VgIGNvbnRhaW5zIGFzIGZldyBzdHlsZXMgYXMgcG9zc2libGUuXG4gKiBJdCBhaW1zIHRvIGJlIGEgc2ltcGxlIGJ1aWxkaW5nIGJsb2NrIGZvciBjcmVhdGluZyBhbiBpbnB1dC5cbiAqIEl0IGNvbnRhaW5zIGEgbG9hZCBvZiBzdHlsZSByZXNldCBhbmQgc29tZSBzdGF0ZSBsb2dpYy5cbiAqL1xuXG52YXIgSW5wdXRCYXNlID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gSW5wdXRCYXNlKHByb3BzLCByZWYpIHtcbiAgdmFyIGFyaWFEZXNjcmliZWRieSA9IHByb3BzWydhcmlhLWRlc2NyaWJlZGJ5J10sXG4gICAgICBhdXRvQ29tcGxldGUgPSBwcm9wcy5hdXRvQ29tcGxldGUsXG4gICAgICBhdXRvRm9jdXMgPSBwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZW5kQWRvcm5tZW50ID0gcHJvcHMuZW5kQWRvcm5tZW50LFxuICAgICAgZXJyb3IgPSBwcm9wcy5lcnJvcixcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBpZCA9IHByb3BzLmlkLFxuICAgICAgX3Byb3BzJGlucHV0Q29tcG9uZW50ID0gcHJvcHMuaW5wdXRDb21wb25lbnQsXG4gICAgICBpbnB1dENvbXBvbmVudCA9IF9wcm9wcyRpbnB1dENvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9wcm9wcyRpbnB1dENvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRpbnB1dFByb3BzID0gcHJvcHMuaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UHJvcHNQcm9wID0gX3Byb3BzJGlucHV0UHJvcHMgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJGlucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZlByb3AgPSBwcm9wcy5pbnB1dFJlZixcbiAgICAgIG1hcmdpbiA9IHByb3BzLm1hcmdpbixcbiAgICAgIF9wcm9wcyRtdWx0aWxpbmUgPSBwcm9wcy5tdWx0aWxpbmUsXG4gICAgICBtdWx0aWxpbmUgPSBfcHJvcHMkbXVsdGlsaW5lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtdWx0aWxpbmUsXG4gICAgICBuYW1lID0gcHJvcHMubmFtZSxcbiAgICAgIG9uQmx1ciA9IHByb3BzLm9uQmx1cixcbiAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgb25LZXlEb3duID0gcHJvcHMub25LZXlEb3duLFxuICAgICAgb25LZXlVcCA9IHByb3BzLm9uS2V5VXAsXG4gICAgICBwbGFjZWhvbGRlciA9IHByb3BzLnBsYWNlaG9sZGVyLFxuICAgICAgcmVhZE9ubHkgPSBwcm9wcy5yZWFkT25seSxcbiAgICAgIHJlbmRlclN1ZmZpeCA9IHByb3BzLnJlbmRlclN1ZmZpeCxcbiAgICAgIHJvd3MgPSBwcm9wcy5yb3dzLFxuICAgICAgcm93c01heCA9IHByb3BzLnJvd3NNYXgsXG4gICAgICByb3dzTWluID0gcHJvcHMucm93c01pbixcbiAgICAgIHN0YXJ0QWRvcm5tZW50ID0gcHJvcHMuc3RhcnRBZG9ybm1lbnQsXG4gICAgICBfcHJvcHMkdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHZvaWQgMCA/ICd0ZXh0JyA6IF9wcm9wcyR0eXBlLFxuICAgICAgdmFsdWVQcm9wID0gcHJvcHMudmFsdWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYXJpYS1kZXNjcmliZWRieVwiLCBcImF1dG9Db21wbGV0ZVwiLCBcImF1dG9Gb2N1c1wiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcImRlZmF1bHRWYWx1ZVwiLCBcImRpc2FibGVkXCIsIFwiZW5kQWRvcm5tZW50XCIsIFwiZXJyb3JcIiwgXCJmdWxsV2lkdGhcIiwgXCJpZFwiLCBcImlucHV0Q29tcG9uZW50XCIsIFwiaW5wdXRQcm9wc1wiLCBcImlucHV0UmVmXCIsIFwibWFyZ2luXCIsIFwibXVsdGlsaW5lXCIsIFwibmFtZVwiLCBcIm9uQmx1clwiLCBcIm9uQ2hhbmdlXCIsIFwib25DbGlja1wiLCBcIm9uRm9jdXNcIiwgXCJvbktleURvd25cIiwgXCJvbktleVVwXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJyZWFkT25seVwiLCBcInJlbmRlclN1ZmZpeFwiLCBcInJvd3NcIiwgXCJyb3dzTWF4XCIsIFwicm93c01pblwiLCBcInN0YXJ0QWRvcm5tZW50XCIsIFwidHlwZVwiLCBcInZhbHVlXCJdKTtcblxuICB2YXIgdmFsdWUgPSBpbnB1dFByb3BzUHJvcC52YWx1ZSAhPSBudWxsID8gaW5wdXRQcm9wc1Byb3AudmFsdWUgOiB2YWx1ZVByb3A7XG5cbiAgdmFyIF9SZWFjdCR1c2VSZWYgPSBSZWFjdC51c2VSZWYodmFsdWUgIT0gbnVsbCksXG4gICAgICBpc0NvbnRyb2xsZWQgPSBfUmVhY3QkdXNlUmVmLmN1cnJlbnQ7XG5cbiAgdmFyIGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciBoYW5kbGVJbnB1dFJlZldhcm5pbmcgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLm5vZGVOYW1lICE9PSAnSU5QVVQnICYmICFpbnN0YW5jZS5mb2N1cykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFlvdSBoYXZlIHByb3ZpZGVkIGEgYGlucHV0Q29tcG9uZW50YCB0byB0aGUgaW5wdXQgY29tcG9uZW50JywgJ3RoYXQgZG9lcyBub3QgY29ycmVjdGx5IGhhbmRsZSB0aGUgYGlucHV0UmVmYCBwcm9wLicsICdNYWtlIHN1cmUgdGhlIGBpbnB1dFJlZmAgcHJvcCBpcyBjYWxsZWQgd2l0aCBhIEhUTUxJbnB1dEVsZW1lbnQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuICB2YXIgaGFuZGxlSW5wdXRQcm9wc1JlZlByb3AgPSB1c2VGb3JrUmVmKGlucHV0UHJvcHNQcm9wLnJlZiwgaGFuZGxlSW5wdXRSZWZXYXJuaW5nKTtcbiAgdmFyIGhhbmRsZUlucHV0UmVmUHJvcCA9IHVzZUZvcmtSZWYoaW5wdXRSZWZQcm9wLCBoYW5kbGVJbnB1dFByb3BzUmVmUHJvcCk7XG4gIHZhciBoYW5kbGVJbnB1dFJlZiA9IHVzZUZvcmtSZWYoaW5wdXRSZWYsIGhhbmRsZUlucHV0UmVmUHJvcCk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIGZvY3VzZWQgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRGb2N1c2VkID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBtdWlGb3JtQ29udHJvbCA9IHVzZUZvcm1Db250cm9sKCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG11aUZvcm1Db250cm9sKSB7XG4gICAgICAgIHJldHVybiBtdWlGb3JtQ29udHJvbC5yZWdpc3RlckVmZmVjdCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sIFttdWlGb3JtQ29udHJvbF0pO1xuICB9XG5cbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2hpZGRlbkxhYmVsJywgJ21hcmdpbicsICdyZXF1aXJlZCcsICdmaWxsZWQnXVxuICB9KTtcbiAgZmNzLmZvY3VzZWQgPSBtdWlGb3JtQ29udHJvbCA/IG11aUZvcm1Db250cm9sLmZvY3VzZWQgOiBmb2N1c2VkOyAvLyBUaGUgYmx1ciB3b24ndCBmaXJlIHdoZW4gdGhlIGRpc2FibGVkIHN0YXRlIGlzIHNldCBvbiBhIGZvY3VzZWQgaW5wdXQuXG4gIC8vIFdlIG5lZWQgdG8gYm9vayBrZWVwIHRoZSBmb2N1c2VkIHN0YXRlIG1hbnVhbGx5LlxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFtdWlGb3JtQ29udHJvbCAmJiBkaXNhYmxlZCAmJiBmb2N1c2VkKSB7XG4gICAgICBzZXRGb2N1c2VkKGZhbHNlKTtcblxuICAgICAgaWYgKG9uQmx1cikge1xuICAgICAgICBvbkJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFttdWlGb3JtQ29udHJvbCwgZGlzYWJsZWQsIGZvY3VzZWQsIG9uQmx1cl0pO1xuICB2YXIgb25GaWxsZWQgPSBtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkZpbGxlZDtcbiAgdmFyIG9uRW1wdHkgPSBtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkVtcHR5O1xuICB2YXIgY2hlY2tEaXJ0eSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAoaXNGaWxsZWQob2JqKSkge1xuICAgICAgaWYgKG9uRmlsbGVkKSB7XG4gICAgICAgIG9uRmlsbGVkKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvbkVtcHR5KSB7XG4gICAgICBvbkVtcHR5KCk7XG4gICAgfVxuICB9LCBbb25GaWxsZWQsIG9uRW1wdHldKTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0NvbnRyb2xsZWQpIHtcbiAgICAgIGNoZWNrRGlydHkoe1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3ZhbHVlLCBjaGVja0RpcnR5LCBpc0NvbnRyb2xsZWRdKTtcblxuICB2YXIgaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiBoYW5kbGVGb2N1cyhldmVudCkge1xuICAgIC8vIEZpeCBhIGJ1ZyB3aXRoIElFIDExIHdoZXJlIHRoZSBmb2N1cy9ibHVyIGV2ZW50cyBhcmUgdHJpZ2dlcmVkXG4gICAgLy8gd2hpbGUgdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuICAgIGlmIChmY3MuZGlzYWJsZWQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICBvbkZvY3VzKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXRQcm9wc1Byb3Aub25Gb2N1cykge1xuICAgICAgaW5wdXRQcm9wc1Byb3Aub25Gb2N1cyhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG11aUZvcm1Db250cm9sICYmIG11aUZvcm1Db250cm9sLm9uRm9jdXMpIHtcbiAgICAgIG11aUZvcm1Db250cm9sLm9uRm9jdXMoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGb2N1c2VkKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIGhhbmRsZUJsdXIoZXZlbnQpIHtcbiAgICBpZiAob25CbHVyKSB7XG4gICAgICBvbkJsdXIoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChpbnB1dFByb3BzUHJvcC5vbkJsdXIpIHtcbiAgICAgIGlucHV0UHJvcHNQcm9wLm9uQmx1cihldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG11aUZvcm1Db250cm9sICYmIG11aUZvcm1Db250cm9sLm9uQmx1cikge1xuICAgICAgbXVpRm9ybUNvbnRyb2wub25CbHVyKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoIWlzQ29udHJvbGxlZCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBldmVudC50YXJnZXQgfHwgaW5wdXRSZWYuY3VycmVudDtcblxuICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogRXhwZWN0ZWQgdmFsaWQgaW5wdXQgdGFyZ2V0LiBEaWQgeW91IHVzZSBhIGN1c3RvbSBgaW5wdXRDb21wb25lbnRgIGFuZCBmb3JnZXQgdG8gZm9yd2FyZCByZWZzPyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vci9pbnB1dC1jb21wb25lbnQtcmVmLWludGVyZmFjZSBmb3IgbW9yZSBpbmZvLlwiIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSgxKSk7XG4gICAgICB9XG5cbiAgICAgIGNoZWNrRGlydHkoe1xuICAgICAgICB2YWx1ZTogZWxlbWVudC52YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGlucHV0UHJvcHNQcm9wLm9uQ2hhbmdlKSB7XG4gICAgICBpbnB1dFByb3BzUHJvcC5vbkNoYW5nZS5hcHBseShpbnB1dFByb3BzUHJvcCwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICAgIH0gLy8gUGVyZm9ybSBpbiB0aGUgd2lsbFVwZGF0ZVxuXG5cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlLmFwcGx5KHZvaWQgMCwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTsgLy8gQ2hlY2sgdGhlIGlucHV0IHN0YXRlIG9uIG1vdW50LCBpbiBjYXNlIGl0IHdhcyBmaWxsZWQgYnkgdGhlIHVzZXJcbiAgLy8gb3IgYXV0byBmaWxsZWQgYnkgdGhlIGJyb3dzZXIgYmVmb3JlIHRoZSBoeWRyYXRpb24gKGZvciBTU1IpLlxuXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBjaGVja0RpcnR5KGlucHV0UmVmLmN1cnJlbnQpO1xuICB9LCBbXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgdmFyIGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAoaW5wdXRSZWYuY3VycmVudCAmJiBldmVudC5jdXJyZW50VGFyZ2V0ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAob25DbGljaykge1xuICAgICAgb25DbGljayhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBJbnB1dENvbXBvbmVudCA9IGlucHV0Q29tcG9uZW50O1xuXG4gIHZhciBpbnB1dFByb3BzID0gX2V4dGVuZHMoe30sIGlucHV0UHJvcHNQcm9wLCB7XG4gICAgcmVmOiBoYW5kbGVJbnB1dFJlZlxuICB9KTtcblxuICBpZiAodHlwZW9mIElucHV0Q29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIGlucHV0UHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAvLyBSZW5hbWUgcmVmIHRvIGlucHV0UmVmIGFzIHdlIGRvbid0IGtub3cgdGhlXG4gICAgICAvLyBwcm92aWRlZCBgaW5wdXRDb21wb25lbnRgIHN0cnVjdHVyZS5cbiAgICAgIGlucHV0UmVmOiBoYW5kbGVJbnB1dFJlZixcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LCBpbnB1dFByb3BzLCB7XG4gICAgICByZWY6IG51bGxcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChtdWx0aWxpbmUpIHtcbiAgICBpZiAocm93cyAmJiAhcm93c01heCAmJiAhcm93c01pbikge1xuICAgICAgSW5wdXRDb21wb25lbnQgPSAndGV4dGFyZWEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgICByb3dzOiByb3dzLFxuICAgICAgICByb3dzTWF4OiByb3dzTWF4XG4gICAgICB9LCBpbnB1dFByb3BzKTtcbiAgICAgIElucHV0Q29tcG9uZW50ID0gVGV4dGFyZWFBdXRvc2l6ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LCBpbnB1dFByb3BzKTtcbiAgfVxuXG4gIHZhciBoYW5kbGVBdXRvRmlsbCA9IGZ1bmN0aW9uIGhhbmRsZUF1dG9GaWxsKGV2ZW50KSB7XG4gICAgLy8gUHJvdmlkZSBhIGZha2UgdmFsdWUgYXMgQ2hyb21lIG1pZ2h0IG5vdCBsZXQgeW91IGFjY2VzcyBpdCBmb3Igc2VjdXJpdHkgcmVhc29ucy5cbiAgICBjaGVja0RpcnR5KGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09ICdtdWktYXV0by1maWxsLWNhbmNlbCcgPyBpbnB1dFJlZi5jdXJyZW50IDoge1xuICAgICAgdmFsdWU6ICd4J1xuICAgIH0pO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG11aUZvcm1Db250cm9sKSB7XG4gICAgICBtdWlGb3JtQ29udHJvbC5zZXRBZG9ybmVkU3RhcnQoQm9vbGVhbihzdGFydEFkb3JubWVudCkpO1xuICAgIH1cbiAgfSwgW211aUZvcm1Db250cm9sLCBzdGFydEFkb3JubWVudF0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGZjcy5jb2xvciB8fCAncHJpbWFyeScpKV0sIGNsYXNzTmFtZSwgZmNzLmRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIGZjcy5lcnJvciAmJiBjbGFzc2VzLmVycm9yLCBmdWxsV2lkdGggJiYgY2xhc3Nlcy5mdWxsV2lkdGgsIGZjcy5mb2N1c2VkICYmIGNsYXNzZXMuZm9jdXNlZCwgbXVpRm9ybUNvbnRyb2wgJiYgY2xhc3Nlcy5mb3JtQ29udHJvbCwgbXVsdGlsaW5lICYmIGNsYXNzZXMubXVsdGlsaW5lLCBzdGFydEFkb3JubWVudCAmJiBjbGFzc2VzLmFkb3JuZWRTdGFydCwgZW5kQWRvcm5tZW50ICYmIGNsYXNzZXMuYWRvcm5lZEVuZCwgZmNzLm1hcmdpbiA9PT0gJ2RlbnNlJyAmJiBjbGFzc2VzLm1hcmdpbkRlbnNlKSxcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIHN0YXJ0QWRvcm5tZW50LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbnVsbFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1pbnZhbGlkXCI6IGZjcy5lcnJvcixcbiAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogYXJpYURlc2NyaWJlZGJ5LFxuICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIGRpc2FibGVkOiBmY3MuZGlzYWJsZWQsXG4gICAgaWQ6IGlkLFxuICAgIG9uQW5pbWF0aW9uU3RhcnQ6IGhhbmRsZUF1dG9GaWxsLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgIHJlYWRPbmx5OiByZWFkT25seSxcbiAgICByZXF1aXJlZDogZmNzLnJlcXVpcmVkLFxuICAgIHJvd3M6IHJvd3MsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG9uS2V5RG93bjogb25LZXlEb3duLFxuICAgIG9uS2V5VXA6IG9uS2V5VXBcbiAgfSwgaW5wdXRQcm9wcywge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmlucHV0LCBpbnB1dFByb3BzUHJvcC5jbGFzc05hbWUsIGZjcy5kaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBtdWx0aWxpbmUgJiYgY2xhc3Nlcy5pbnB1dE11bHRpbGluZSwgZmNzLmhpZGRlbkxhYmVsICYmIGNsYXNzZXMuaW5wdXRIaWRkZW5MYWJlbCwgc3RhcnRBZG9ybm1lbnQgJiYgY2xhc3Nlcy5pbnB1dEFkb3JuZWRTdGFydCwgZW5kQWRvcm5tZW50ICYmIGNsYXNzZXMuaW5wdXRBZG9ybmVkRW5kLCB0eXBlID09PSAnc2VhcmNoJyAmJiBjbGFzc2VzLmlucHV0VHlwZVNlYXJjaCwgZmNzLm1hcmdpbiA9PT0gJ2RlbnNlJyAmJiBjbGFzc2VzLmlucHV0TWFyZ2luRGVuc2UpLFxuICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIG9uRm9jdXM6IGhhbmRsZUZvY3VzXG4gIH0pKSksIGVuZEFkb3JubWVudCwgcmVuZGVyU3VmZml4ID8gcmVuZGVyU3VmZml4KF9leHRlbmRzKHt9LCBmY3MsIHtcbiAgICBzdGFydEFkb3JubWVudDogc3RhcnRBZG9ybm1lbnRcbiAgfSkpIDogbnVsbCk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IElucHV0QmFzZS5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICAnYXJpYS1kZXNjcmliZWRieSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoaXMgcHJvcCBoZWxwcyB1c2VycyB0byBmaWxsIGZvcm1zIGZhc3RlciwgZXNwZWNpYWxseSBvbiBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhlIG5hbWUgY2FuIGJlIGNvbmZ1c2luZywgYXMgaXQncyBtb3JlIGxpa2UgYW4gYXV0b2ZpbGwuXG4gICAqIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBpdCBbZm9sbG93aW5nIHRoZSBzcGVjaWZpY2F0aW9uXShodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3JtLWNvbnRyb2wtaW5mcmFzdHJ1Y3R1cmUuaHRtbCNhdXRvZmlsbCkuXG4gICAqL1xuICBhdXRvQ29tcGxldGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGZvY3VzZWQgZHVyaW5nIHRoZSBmaXJzdCBtb3VudC5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGBpbnB1dGAgZWxlbWVudCB2YWx1ZS4gVXNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBub3QgY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuZCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGVuZEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgaW5kaWNhdGUgYW4gZXJyb3IuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBpbnB1dENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBbQXR0cmlidXRlc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0F0dHJpYnV0ZXMpIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBhc3MgYSByZWYgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB0ZXh0YXJlYSBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBtdWx0aWxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgaW5wdXQgaXMgYmx1cnJlZC5cbiAgICpcbiAgICogTm90aWNlIHRoYXQgdGhlIGZpcnN0IGFyZ3VtZW50IChldmVudCkgbWlnaHQgYmUgdW5kZWZpbmVkLlxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChzdHJpbmcpLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uS2V5VXA6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgc2hvcnQgaGludCBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGJlZm9yZSB0aGUgdXNlciBlbnRlcnMgYSB2YWx1ZS5cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJdCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGRcbiAgICogKG5vdCBmcm9tIGludGVyYWN0aW5nIHdpdGggdGhlIGZpZWxkKS5cbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVuZGVyU3VmZml4OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93c01heDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBNaW5pbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93c01pbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBTdGFydCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIHN0YXJ0QWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LiBJdCBzaG91bGQgYmUgW2EgdmFsaWQgSFRNTDUgaW5wdXQgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0Zvcm1fJTNDaW5wdXQlM0VfdHlwZXMpLlxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQsIHJlcXVpcmVkIGZvciBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpSW5wdXRCYXNlJ1xufSkoSW5wdXRCYXNlKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JbnB1dEJhc2UnOyIsIi8vIFN1cHBvcnRzIGRldGVybWluYXRpb24gb2YgaXNDb250cm9sbGVkKCkuXG4vLyBDb250cm9sbGVkIGlucHV0IGFjY2VwdHMgaXRzIGN1cnJlbnQgdmFsdWUgYXMgYSBwcm9wLlxuLy9cbi8vIEBzZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9mb3Jtcy5odG1sI2NvbnRyb2xsZWQtY29tcG9uZW50c1xuLy8gQHBhcmFtIHZhbHVlXG4vLyBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBzdHJpbmcgKGluY2x1ZGluZyAnJykgb3IgbnVtYmVyIChpbmNsdWRpbmcgemVybylcbmV4cG9ydCBmdW5jdGlvbiBoYXNWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAhKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCk7XG59IC8vIERldGVybWluZSBpZiBmaWVsZCBpcyBlbXB0eSBvciBmaWxsZWQuXG4vLyBSZXNwb25zZSBkZXRlcm1pbmVzIGlmIGxhYmVsIGlzIHByZXNlbnRlZCBhYm92ZSBmaWVsZCBvciBhcyBwbGFjZWhvbGRlci5cbi8vXG4vLyBAcGFyYW0gb2JqXG4vLyBAcGFyYW0gU1NSXG4vLyBAcmV0dXJucyB7Ym9vbGVhbn0gRmFsc2Ugd2hlbiBub3QgcHJlc2VudCBvciBlbXB0eSBzdHJpbmcuXG4vLyAgICAgICAgICAgICAgICAgICAgVHJ1ZSB3aGVuIGFueSBudW1iZXIgb3Igc3RyaW5nIHdpdGggbGVuZ3RoLlxuXG5leHBvcnQgZnVuY3Rpb24gaXNGaWxsZWQob2JqKSB7XG4gIHZhciBTU1IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICByZXR1cm4gb2JqICYmIChoYXNWYWx1ZShvYmoudmFsdWUpICYmIG9iai52YWx1ZSAhPT0gJycgfHwgU1NSICYmIGhhc1ZhbHVlKG9iai5kZWZhdWx0VmFsdWUpICYmIG9iai5kZWZhdWx0VmFsdWUgIT09ICcnKTtcbn0gLy8gRGV0ZXJtaW5lIGlmIGFuIElucHV0IGlzIGFkb3JuZWQgb24gc3RhcnQuXG4vLyBJdCdzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGxlZnQgd2l0aCBMVFIuXG4vL1xuLy8gQHBhcmFtIG9ialxuLy8gQHJldHVybnMge2Jvb2xlYW59IEZhbHNlIHdoZW4gbm8gYWRvcm5tZW50cy5cbi8vICAgICAgICAgICAgICAgICAgICBUcnVlIHdoZW4gYWRvcm5lZCBhdCB0aGUgc3RhcnQuXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fkb3JuZWRTdGFydChvYmopIHtcbiAgcmV0dXJuIG9iai5zdGFydEFkb3JubWVudDtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgZm9ybUNvbnRyb2xTdGF0ZSBmcm9tICcuLi9Gb3JtQ29udHJvbC9mb3JtQ29udHJvbFN0YXRlJztcbmltcG9ydCB1c2VGb3JtQ29udHJvbCBmcm9tICcuLi9Gb3JtQ29udHJvbC91c2VGb3JtQ29udHJvbCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJy4uL0Zvcm1MYWJlbCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBsZWZ0J1xuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmb2N1c2VkPXt0cnVlfWAuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcmVxdWlyZWQ9e3RydWV9YC4gKi9cbiAgICByZXF1aXJlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgYXN0ZXJpc2sgZWxlbWVudC4gKi9cbiAgICBhc3Rlcmlzazoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGBGb3JtQ29udHJvbGAuICovXG4gICAgZm9ybUNvbnRyb2w6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIC8vIHNsaWdodCBhbHRlcmF0aW9uIHRvIHNwZWMgc3BhY2luZyB0byBtYXRjaCB2aXN1YWwgc3BlYyByZXN1bHRcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCAyNHB4KSBzY2FsZSgxKSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgbWFyZ2luRGVuc2U6IHtcbiAgICAgIC8vIENvbXBlbnNhdGlvbiBmb3IgdGhlIGBJbnB1dC5pbnB1dERlbnNlYCBzdHlsZS5cbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCAyMXB4KSBzY2FsZSgxKSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgc2hyaW5rPXt0cnVlfWAuICovXG4gICAgc2hyaW5rOiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwgMS41cHgpIHNjYWxlKDAuNzUpJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBsZWZ0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBkaXNhYmxlQW5pbWF0aW9uPXtmYWxzZX1gLiAqL1xuICAgIGFuaW1hdGVkOiB7XG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydjb2xvcicsICd0cmFuc2Zvcm0nXSwge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlcixcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImZpbGxlZFwiYC4gKi9cbiAgICBmaWxsZWQ6IHtcbiAgICAgIC8vIENocm9tZSdzIGF1dG9maWxsIGZlYXR1cmUgZ2l2ZXMgdGhlIGlucHV0IGZpZWxkIGEgeWVsbG93IGJhY2tncm91bmQuXG4gICAgICAvLyBTaW5jZSB0aGUgaW5wdXQgZmllbGQgaXMgYmVoaW5kIHRoZSBsYWJlbCBpbiB0aGUgSFRNTCB0cmVlLFxuICAgICAgLy8gdGhlIGlucHV0IGZpZWxkIGlzIGRyYXduIGxhc3QgYW5kIGhpZGVzIHRoZSBsYWJlbCB3aXRoIGFuIG9wYXF1ZSBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgICAgLy8gekluZGV4OiAxIHdpbGwgcmFpc2UgdGhlIGxhYmVsIGFib3ZlIG9wYXF1ZSBiYWNrZ3JvdW5kLWNvbG9ycyBvZiBpbnB1dC5cbiAgICAgIHpJbmRleDogMSxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxMnB4LCAyMHB4KSBzY2FsZSgxKScsXG4gICAgICAnJiRtYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEycHgsIDE3cHgpIHNjYWxlKDEpJ1xuICAgICAgfSxcbiAgICAgICcmJHNocmluayc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEycHgsIDEwcHgpIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgJyYkbWFyZ2luRGVuc2UnOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEycHgsIDdweCkgc2NhbGUoMC43NSknXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIG91dGxpbmVkOiB7XG4gICAgICAvLyBzZWUgY29tbWVudCBhYm92ZSBvbiBmaWxsZWQuekluZGV4XG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTRweCwgMjBweCkgc2NhbGUoMSknLFxuICAgICAgJyYkbWFyZ2luRGVuc2UnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxNHB4LCAxMnB4KSBzY2FsZSgxKSdcbiAgICAgIH0sXG4gICAgICAnJiRzaHJpbmsnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxNHB4LCAtNnB4KSBzY2FsZSgwLjc1KSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xudmFyIElucHV0TGFiZWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBJbnB1dExhYmVsKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpc2FibGVBbmltYXRpID0gcHJvcHMuZGlzYWJsZUFuaW1hdGlvbixcbiAgICAgIGRpc2FibGVBbmltYXRpb24gPSBfcHJvcHMkZGlzYWJsZUFuaW1hdGkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVBbmltYXRpLFxuICAgICAgbWFyZ2luID0gcHJvcHMubWFyZ2luLFxuICAgICAgc2hyaW5rUHJvcCA9IHByb3BzLnNocmluayxcbiAgICAgIHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlQW5pbWF0aW9uXCIsIFwibWFyZ2luXCIsIFwic2hyaW5rXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcbiAgdmFyIHNocmluayA9IHNocmlua1Byb3A7XG5cbiAgaWYgKHR5cGVvZiBzaHJpbmsgPT09ICd1bmRlZmluZWQnICYmIG11aUZvcm1Db250cm9sKSB7XG4gICAgc2hyaW5rID0gbXVpRm9ybUNvbnRyb2wuZmlsbGVkIHx8IG11aUZvcm1Db250cm9sLmZvY3VzZWQgfHwgbXVpRm9ybUNvbnRyb2wuYWRvcm5lZFN0YXJ0O1xuICB9XG5cbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ21hcmdpbicsICd2YXJpYW50J11cbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtTGFiZWwsIF9leHRlbmRzKHtcbiAgICBcImRhdGEtc2hyaW5rXCI6IHNocmluayxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIG11aUZvcm1Db250cm9sICYmIGNsYXNzZXMuZm9ybUNvbnRyb2wsICFkaXNhYmxlQW5pbWF0aW9uICYmIGNsYXNzZXMuYW5pbWF0ZWQsIHNocmluayAmJiBjbGFzc2VzLnNocmluaywgZmNzLm1hcmdpbiA9PT0gJ2RlbnNlJyAmJiBjbGFzc2VzLm1hcmdpbkRlbnNlLCB7XG4gICAgICAnZmlsbGVkJzogY2xhc3Nlcy5maWxsZWQsXG4gICAgICAnb3V0bGluZWQnOiBjbGFzc2VzLm91dGxpbmVkXG4gICAgfVtmY3MudmFyaWFudF0pLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgIGZvY3VzZWQ6IGNsYXNzZXMuZm9jdXNlZCxcbiAgICAgIGRpc2FibGVkOiBjbGFzc2VzLmRpc2FibGVkLFxuICAgICAgZXJyb3I6IGNsYXNzZXMuZXJyb3IsXG4gICAgICByZXF1aXJlZDogY2xhc3Nlcy5yZXF1aXJlZCxcbiAgICAgIGFzdGVyaXNrOiBjbGFzc2VzLmFzdGVyaXNrXG4gICAgfSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBJbnB1dExhYmVsLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50cyBvZiB0aGUgYElucHV0TGFiZWxgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0cmFuc2l0aW9uIGFuaW1hdGlvbiBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVBbmltYXRpb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGFwcGx5IGRpc2FibGVkIGNsYXNzLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGJlIGRpc3BsYXllZCBpbiBhbiBlcnJvciBzdGF0ZS5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgb2YgdGhpcyBsYWJlbCBpcyBmb2N1c2VkLlxuICAgKi9cbiAgZm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnXSksXG5cbiAgLyoqXG4gICAqIGlmIGB0cnVlYCwgdGhlIGxhYmVsIHdpbGwgaW5kaWNhdGUgdGhhdCB0aGUgaW5wdXQgaXMgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIGlzIHNocnVuay5cbiAgICovXG4gIHNocmluazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlJbnB1dExhYmVsJ1xufSkoSW5wdXRMYWJlbCk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSW5wdXRMYWJlbCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IEhUTUxFbGVtZW50VHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuLi9Qb3BvdmVyJztcbmltcG9ydCBNZW51TGlzdCBmcm9tICcuLi9NZW51TGlzdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHNldFJlZiBmcm9tICcuLi91dGlscy9zZXRSZWYnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZSc7XG52YXIgUlRMX09SSUdJTiA9IHtcbiAgdmVydGljYWw6ICd0b3AnLFxuICBob3Jpem9udGFsOiAncmlnaHQnXG59O1xudmFyIExUUl9PUklHSU4gPSB7XG4gIHZlcnRpY2FsOiAndG9wJyxcbiAgaG9yaXpvbnRhbDogJ2xlZnQnXG59O1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudC4gKi9cbiAgcGFwZXI6IHtcbiAgICAvLyBzcGVjWjogVGhlIG1heGltdW0gaGVpZ2h0IG9mIGEgc2ltcGxlIG1lbnUgc2hvdWxkIGJlIG9uZSBvciBtb3JlIHJvd3MgbGVzcyB0aGFuIHRoZSB2aWV3XG4gICAgLy8gaGVpZ2h0LiBUaGlzIGVuc3VyZXMgYSB0YXBhYmxlIGFyZWEgb3V0c2lkZSBvZiB0aGUgc2ltcGxlIG1lbnUgd2l0aCB3aGljaCB0byBkaXNtaXNzXG4gICAgLy8gdGhlIG1lbnUuXG4gICAgbWF4SGVpZ2h0OiAnY2FsYygxMDAlIC0gOTZweCknLFxuICAgIC8vIEFkZCBpT1MgbW9tZW50dW0gc2Nyb2xsaW5nLlxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBMaXN0YCBjb21wb25lbnQgdmlhIGBNZW51TGlzdGAuICovXG4gIGxpc3Q6IHtcbiAgICAvLyBXZSBkaXNhYmxlIHRoZSBmb2N1cyByaW5nIGZvciBtb3VzZSwgdG91Y2ggYW5kIGtleWJvYXJkIHVzZXJzLlxuICAgIG91dGxpbmU6IDBcbiAgfVxufTtcbnZhciBNZW51ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTWVudShwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgYXV0b0ZvY3VzID0gX3Byb3BzJGF1dG9Gb2N1cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9wcm9wcyRhdXRvRm9jdXMsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkZGlzYWJsZUF1dG9Gb2MgPSBwcm9wcy5kaXNhYmxlQXV0b0ZvY3VzSXRlbSxcbiAgICAgIGRpc2FibGVBdXRvRm9jdXNJdGVtID0gX3Byb3BzJGRpc2FibGVBdXRvRm9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyxcbiAgICAgIF9wcm9wcyRNZW51TGlzdFByb3BzID0gcHJvcHMuTWVudUxpc3RQcm9wcyxcbiAgICAgIE1lbnVMaXN0UHJvcHMgPSBfcHJvcHMkTWVudUxpc3RQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkTWVudUxpc3RQcm9wcyxcbiAgICAgIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLFxuICAgICAgb25FbnRlcmluZyA9IHByb3BzLm9uRW50ZXJpbmcsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIF9wcm9wcyRQYXBlclByb3BzID0gcHJvcHMuUGFwZXJQcm9wcyxcbiAgICAgIFBhcGVyUHJvcHMgPSBfcHJvcHMkUGFwZXJQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkUGFwZXJQcm9wcyxcbiAgICAgIFBvcG92ZXJDbGFzc2VzID0gcHJvcHMuUG9wb3ZlckNsYXNzZXMsXG4gICAgICBfcHJvcHMkdHJhbnNpdGlvbkR1cmEgPSBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBfcHJvcHMkdHJhbnNpdGlvbkR1cmEgPT09IHZvaWQgMCA/ICdhdXRvJyA6IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3NlbGVjdGVkTWVudScgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhdXRvRm9jdXNcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJkaXNhYmxlQXV0b0ZvY3VzSXRlbVwiLCBcIk1lbnVMaXN0UHJvcHNcIiwgXCJvbkNsb3NlXCIsIFwib25FbnRlcmluZ1wiLCBcIm9wZW5cIiwgXCJQYXBlclByb3BzXCIsIFwiUG9wb3ZlckNsYXNzZXNcIiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgYXV0b0ZvY3VzSXRlbSA9IGF1dG9Gb2N1cyAmJiAhZGlzYWJsZUF1dG9Gb2N1c0l0ZW0gJiYgb3BlbjtcbiAgdmFyIG1lbnVMaXN0QWN0aW9uc1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGNvbnRlbnRBbmNob3JSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgdmFyIGdldENvbnRlbnRBbmNob3JFbCA9IGZ1bmN0aW9uIGdldENvbnRlbnRBbmNob3JFbCgpIHtcbiAgICByZXR1cm4gY29udGVudEFuY2hvclJlZi5jdXJyZW50O1xuICB9O1xuXG4gIHZhciBoYW5kbGVFbnRlcmluZyA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyaW5nKGVsZW1lbnQsIGlzQXBwZWFyaW5nKSB7XG4gICAgaWYgKG1lbnVMaXN0QWN0aW9uc1JlZi5jdXJyZW50KSB7XG4gICAgICBtZW51TGlzdEFjdGlvbnNSZWYuY3VycmVudC5hZGp1c3RTdHlsZUZvclNjcm9sbGJhcihlbGVtZW50LCB0aGVtZSk7XG4gICAgfVxuXG4gICAgaWYgKG9uRW50ZXJpbmcpIHtcbiAgICAgIG9uRW50ZXJpbmcoZWxlbWVudCwgaXNBcHBlYXJpbmcpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlTGlzdEtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVMaXN0S2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICBvbkNsb3NlKGV2ZW50LCAndGFiS2V5RG93bicpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBzaG91bGQgcmVjZWl2ZSBmb2N1c1xuICAgKiBpbiBhIGB2YXJpYW50PVwic2VsZWN0ZWRNZW51XCJgIGl0J3MgdGhlIGZpcnN0IGBzZWxlY3RlZGAgaXRlbVxuICAgKiBvdGhlcndpc2UgaXQncyB0aGUgdmVyeSBmaXJzdCBpdGVtLlxuICAgKi9cblxuXG4gIHZhciBhY3RpdmVJdGVtSW5kZXggPSAtMTsgLy8gc2luY2Ugd2UgaW5qZWN0IGZvY3VzIHJlbGF0ZWQgcHJvcHMgaW50byBjaGlsZHJlbiB3ZSBoYXZlIHRvIGRvIGEgbG9va2FoZWFkXG4gIC8vIHRvIGNoZWNrIGlmIHRoZXJlIGlzIGEgYHNlbGVjdGVkYCBpdGVtLiBXZSdyZSBsb29raW5nIGZvciB0aGUgbGFzdCBgc2VsZWN0ZWRgXG4gIC8vIGl0ZW0gYW5kIHVzZSB0aGUgZmlyc3QgdmFsaWQgaXRlbSBhcyBhIGZhbGxiYWNrXG5cbiAgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIE1lbnUgY29tcG9uZW50IGRvZXNuJ3QgYWNjZXB0IGEgRnJhZ21lbnQgYXMgYSBjaGlsZC5cIiwgJ0NvbnNpZGVyIHByb3ZpZGluZyBhbiBhcnJheSBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNoaWxkLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICBpZiAodmFyaWFudCAhPT0gXCJtZW51XCIgJiYgY2hpbGQucHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZUl0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdmFyIGl0ZW1zID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSBhY3RpdmVJdGVtSW5kZXgpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGluc3RhbmNlKSB7XG4gICAgICAgICAgLy8gI1N0cmljdE1vZGUgcmVhZHlcbiAgICAgICAgICBjb250ZW50QW5jaG9yUmVmLmN1cnJlbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZShpbnN0YW5jZSk7XG4gICAgICAgICAgc2V0UmVmKGNoaWxkLnJlZiwgaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wb3ZlciwgX2V4dGVuZHMoe1xuICAgIGdldENvbnRlbnRBbmNob3JFbDogZ2V0Q29udGVudEFuY2hvckVsLFxuICAgIGNsYXNzZXM6IFBvcG92ZXJDbGFzc2VzLFxuICAgIG9uQ2xvc2U6IG9uQ2xvc2UsXG4gICAgb25FbnRlcmluZzogaGFuZGxlRW50ZXJpbmcsXG4gICAgYW5jaG9yT3JpZ2luOiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gUlRMX09SSUdJTiA6IExUUl9PUklHSU4sXG4gICAgdHJhbnNmb3JtT3JpZ2luOiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gUlRMX09SSUdJTiA6IExUUl9PUklHSU4sXG4gICAgUGFwZXJQcm9wczogX2V4dGVuZHMoe30sIFBhcGVyUHJvcHMsIHtcbiAgICAgIGNsYXNzZXM6IF9leHRlbmRzKHt9LCBQYXBlclByb3BzLmNsYXNzZXMsIHtcbiAgICAgICAgcm9vdDogY2xhc3Nlcy5wYXBlclxuICAgICAgfSlcbiAgICB9KSxcbiAgICBvcGVuOiBvcGVuLFxuICAgIHJlZjogcmVmLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUxpc3QsIF9leHRlbmRzKHtcbiAgICBvbktleURvd246IGhhbmRsZUxpc3RLZXlEb3duLFxuICAgIGFjdGlvbnM6IG1lbnVMaXN0QWN0aW9uc1JlZixcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyAmJiAoYWN0aXZlSXRlbUluZGV4ID09PSAtMSB8fCBkaXNhYmxlQXV0b0ZvY3VzSXRlbSksXG4gICAgYXV0b0ZvY3VzSXRlbTogYXV0b0ZvY3VzSXRlbSxcbiAgICB2YXJpYW50OiB2YXJpYW50XG4gIH0sIE1lbnVMaXN0UHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5saXN0LCBNZW51TGlzdFByb3BzLmNsYXNzTmFtZSlcbiAgfSksIGl0ZW1zKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE1lbnUucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSBIVE1MIGVsZW1lbnQsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGl0LlxuICAgKiBJdCdzIHVzZWQgdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgbWVudS5cbiAgICovXG4gIGFuY2hvckVsOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAub25lT2ZUeXBlKFtIVE1MRWxlbWVudFR5cGUsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCAoRGVmYXVsdCkgd2lsbCBmb2N1cyB0aGUgYFtyb2xlPVwibWVudVwiXWAgaWYgbm8gZm9jdXNhYmxlIGNoaWxkIGlzIGZvdW5kLiBEaXNhYmxlZFxuICAgKiBjaGlsZHJlbiBhcmUgbm90IGZvY3VzYWJsZS4gSWYgeW91IHNldCB0aGlzIHByb3AgdG8gYGZhbHNlYCBmb2N1cyB3aWxsIGJlIHBsYWNlZFxuICAgKiBvbiB0aGUgcGFyZW50IG1vZGFsIGNvbnRhaW5lci4gVGhpcyBoYXMgc2V2ZXJlIGFjY2Vzc2liaWxpdHkgaW1wbGljYXRpb25zXG4gICAqIGFuZCBzaG91bGQgb25seSBiZSBjb25zaWRlcmVkIGlmIHlvdSBtYW5hZ2UgZm9jdXMgb3RoZXJ3aXNlLlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTWVudSBjb250ZW50cywgbm9ybWFsbHkgYE1lbnVJdGVtYHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogV2hlbiBvcGVuaW5nIHRoZSBtZW51IHdpbGwgbm90IGZvY3VzIHRoZSBhY3RpdmUgaXRlbSBidXQgdGhlIGBbcm9sZT1cIm1lbnVcIl1gXG4gICAqIHVubGVzcyBgYXV0b0ZvY3VzYCBpcyBhbHNvIHNldCB0byBgZmFsc2VgLiBOb3QgdXNpbmcgdGhlIGRlZmF1bHQgbWVhbnMgbm90XG4gICAqIGZvbGxvd2luZyBXQUktQVJJQSBhdXRob3JpbmcgcHJhY3RpY2VzLiBQbGVhc2UgYmUgY29uc2lkZXJhdGUgYWJvdXQgcG9zc2libGVcbiAgICogYWNjZXNzaWJpbGl0eSBpbXBsaWNhdGlvbnMuXG4gICAqL1xuICBkaXNhYmxlQXV0b0ZvY3VzSXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgTWVudUxpc3RgXSgvYXBpL21lbnUtbGlzdC8pIGVsZW1lbnQuXG4gICAqL1xuICBNZW51TGlzdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gQ2FuIGJlOiBgXCJlc2NhcGVLZXlEb3duXCJgLCBgXCJiYWNrZHJvcENsaWNrXCJgLCBgXCJ0YWJLZXlEb3duXCJgLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgTWVudSBlbnRlcnMuXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgTWVudSBoYXMgZW50ZXJlZC5cbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1lbnUgaXMgZW50ZXJpbmcuXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBNZW51IGV4aXRzLlxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgTWVudSBoYXMgZXhpdGVkLlxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBNZW51IGlzIGV4aXRpbmcuXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtZW51IGlzIHZpc2libGUuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBQYXBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBgY2xhc3Nlc2AgcHJvcCBhcHBsaWVkIHRvIHRoZSBbYFBvcG92ZXJgXSgvYXBpL3BvcG92ZXIvKSBlbGVtZW50LlxuICAgKi9cbiAgUG9wb3ZlckNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIHRyYW5zaXRpb24gaW4gYG1zYCwgb3IgJ2F1dG8nXG4gICAqL1xuICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLiBVc2UgYG1lbnVgIHRvIHByZXZlbnQgc2VsZWN0ZWQgaXRlbXMgZnJvbSBpbXBhY3RpbmcgdGhlIGluaXRpYWwgZm9jdXNcbiAgICogYW5kIHRoZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgcmVsYXRpdmUgdG8gdGhlIGFuY2hvciBlbGVtZW50LlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnbWVudScsICdzZWxlY3RlZE1lbnUnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpTWVudSdcbn0pKE1lbnUpOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi4vTGlzdEl0ZW0nO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5LmJvZHkxLCBfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgbWluSGVpZ2h0OiA0OCxcbiAgICAgIHBhZGRpbmdUb3A6IDYsXG4gICAgICBwYWRkaW5nQm90dG9tOiA2LFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICB9LCB0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSwge1xuICAgICAgbWluSGVpZ2h0OiAnYXV0bydcbiAgICB9KSksXG4gICAgLy8gVE9ETyB2NTogcmVtb3ZlXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlR3V0dGVycz17ZmFsc2V9YC4gKi9cbiAgICBndXR0ZXJzOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNlbGVjdGVkPXt0cnVlfWAuICovXG4gICAgc2VsZWN0ZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBkZW5zZS4gKi9cbiAgICBkZW5zZTogX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkuYm9keTIsIHtcbiAgICAgIG1pbkhlaWdodDogJ2F1dG8nXG4gICAgfSlcbiAgfTtcbn07XG52YXIgTWVudUl0ZW0gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBNZW51SXRlbShwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBjb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnbGknIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlR3V0dGVycyA9IHByb3BzLmRpc2FibGVHdXR0ZXJzLFxuICAgICAgZGlzYWJsZUd1dHRlcnMgPSBfcHJvcHMkZGlzYWJsZUd1dHRlcnMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVHdXR0ZXJzLFxuICAgICAgTGlzdEl0ZW1DbGFzc2VzID0gcHJvcHMuTGlzdEl0ZW1DbGFzc2VzLFxuICAgICAgX3Byb3BzJHJvbGUgPSBwcm9wcy5yb2xlLFxuICAgICAgcm9sZSA9IF9wcm9wcyRyb2xlID09PSB2b2lkIDAgPyAnbWVudWl0ZW0nIDogX3Byb3BzJHJvbGUsXG4gICAgICBzZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkLFxuICAgICAgdGFiSW5kZXhQcm9wID0gcHJvcHMudGFiSW5kZXgsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImRpc2FibGVHdXR0ZXJzXCIsIFwiTGlzdEl0ZW1DbGFzc2VzXCIsIFwicm9sZVwiLCBcInNlbGVjdGVkXCIsIFwidGFiSW5kZXhcIl0pO1xuXG4gIHZhciB0YWJJbmRleDtcblxuICBpZiAoIXByb3BzLmRpc2FibGVkKSB7XG4gICAgdGFiSW5kZXggPSB0YWJJbmRleFByb3AgIT09IHVuZGVmaW5lZCA/IHRhYkluZGV4UHJvcCA6IC0xO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtLCBfZXh0ZW5kcyh7XG4gICAgYnV0dG9uOiB0cnVlLFxuICAgIHJvbGU6IHJvbGUsXG4gICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIHNlbGVjdGVkOiBzZWxlY3RlZCxcbiAgICBkaXNhYmxlR3V0dGVyczogZGlzYWJsZUd1dHRlcnMsXG4gICAgY2xhc3NlczogX2V4dGVuZHMoe1xuICAgICAgZGVuc2U6IGNsYXNzZXMuZGVuc2VcbiAgICB9LCBMaXN0SXRlbUNsYXNzZXMpLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgc2VsZWN0ZWQgJiYgY2xhc3Nlcy5zZWxlY3RlZCwgIWRpc2FibGVHdXR0ZXJzICYmIGNsYXNzZXMuZ3V0dGVycyksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTWVudUl0ZW0ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogTWVudSBpdGVtIGNvbnRlbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBjb21wYWN0IHZlcnRpY2FsIHBhZGRpbmcgZGVzaWduZWQgZm9yIGtleWJvYXJkIGFuZCBtb3VzZSBpbnB1dCB3aWxsIGJlIHVzZWQuXG4gICAqL1xuICBkZW5zZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGVmdCBhbmQgcmlnaHQgcGFkZGluZyBpcyByZW1vdmVkLlxuICAgKi9cbiAgZGlzYWJsZUd1dHRlcnM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBgY2xhc3Nlc2AgcHJvcCBhcHBsaWVkIHRvIHRoZSBbYExpc3RJdGVtYF0oL2FwaS9saXN0LWl0ZW0vKSBlbGVtZW50LlxuICAgKi9cbiAgTGlzdEl0ZW1DbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aU1lbnVJdGVtJ1xufSkoTWVudUl0ZW0pOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL01lbnVJdGVtJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0ZyYWdtZW50IH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuLi91dGlscy9vd25lckRvY3VtZW50JztcbmltcG9ydCBMaXN0IGZyb20gJy4uL0xpc3QnO1xuaW1wb3J0IGdldFNjcm9sbGJhclNpemUgZnJvbSAnLi4vdXRpbHMvZ2V0U2Nyb2xsYmFyU2l6ZSc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcblxuZnVuY3Rpb24gbmV4dEl0ZW0obGlzdCwgaXRlbSwgZGlzYWJsZUxpc3RXcmFwKSB7XG4gIGlmIChsaXN0ID09PSBpdGVtKSB7XG4gICAgcmV0dXJuIGxpc3QuZmlyc3RDaGlsZDtcbiAgfVxuXG4gIGlmIChpdGVtICYmIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgcmV0dXJuIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIGRpc2FibGVMaXN0V3JhcCA/IG51bGwgOiBsaXN0LmZpcnN0Q2hpbGQ7XG59XG5cbmZ1bmN0aW9uIHByZXZpb3VzSXRlbShsaXN0LCBpdGVtLCBkaXNhYmxlTGlzdFdyYXApIHtcbiAgaWYgKGxpc3QgPT09IGl0ZW0pIHtcbiAgICByZXR1cm4gZGlzYWJsZUxpc3RXcmFwID8gbGlzdC5maXJzdENoaWxkIDogbGlzdC5sYXN0Q2hpbGQ7XG4gIH1cblxuICBpZiAoaXRlbSAmJiBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICByZXR1cm4gaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIGRpc2FibGVMaXN0V3JhcCA/IG51bGwgOiBsaXN0Lmxhc3RDaGlsZDtcbn1cblxuZnVuY3Rpb24gdGV4dENyaXRlcmlhTWF0Y2hlcyhuZXh0Rm9jdXMsIHRleHRDcml0ZXJpYSkge1xuICBpZiAodGV4dENyaXRlcmlhID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciB0ZXh0ID0gbmV4dEZvY3VzLmlubmVyVGV4dDtcblxuICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8ganNkb20gZG9lc24ndCBzdXBwb3J0IGlubmVyVGV4dFxuICAgIHRleHQgPSBuZXh0Rm9jdXMudGV4dENvbnRlbnQ7XG4gIH1cblxuICB0ZXh0ID0gdGV4dC50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICBpZiAodGV4dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGV4dENyaXRlcmlhLnJlcGVhdGluZykge1xuICAgIHJldHVybiB0ZXh0WzBdID09PSB0ZXh0Q3JpdGVyaWEua2V5c1swXTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0LmluZGV4T2YodGV4dENyaXRlcmlhLmtleXMuam9pbignJykpID09PSAwO1xufVxuXG5mdW5jdGlvbiBtb3ZlRm9jdXMobGlzdCwgY3VycmVudEZvY3VzLCBkaXNhYmxlTGlzdFdyYXAsIGRpc2FibGVkSXRlbXNGb2N1c2FibGUsIHRyYXZlcnNhbEZ1bmN0aW9uLCB0ZXh0Q3JpdGVyaWEpIHtcbiAgdmFyIHdyYXBwZWRPbmNlID0gZmFsc2U7XG4gIHZhciBuZXh0Rm9jdXMgPSB0cmF2ZXJzYWxGdW5jdGlvbihsaXN0LCBjdXJyZW50Rm9jdXMsIGN1cnJlbnRGb2N1cyA/IGRpc2FibGVMaXN0V3JhcCA6IGZhbHNlKTtcblxuICB3aGlsZSAobmV4dEZvY3VzKSB7XG4gICAgLy8gUHJldmVudCBpbmZpbml0ZSBsb29wLlxuICAgIGlmIChuZXh0Rm9jdXMgPT09IGxpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgaWYgKHdyYXBwZWRPbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd3JhcHBlZE9uY2UgPSB0cnVlO1xuICAgIH0gLy8gU2FtZSBsb2dpYyBhcyB1c2VBdXRvY29tcGxldGUuanNcblxuXG4gICAgdmFyIG5leHRGb2N1c0Rpc2FibGVkID0gZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSA/IGZhbHNlIDogbmV4dEZvY3VzLmRpc2FibGVkIHx8IG5leHRGb2N1cy5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnO1xuXG4gICAgaWYgKCFuZXh0Rm9jdXMuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpIHx8ICF0ZXh0Q3JpdGVyaWFNYXRjaGVzKG5leHRGb2N1cywgdGV4dENyaXRlcmlhKSB8fCBuZXh0Rm9jdXNEaXNhYmxlZCkge1xuICAgICAgLy8gTW92ZSB0byB0aGUgbmV4dCBlbGVtZW50LlxuICAgICAgbmV4dEZvY3VzID0gdHJhdmVyc2FsRnVuY3Rpb24obGlzdCwgbmV4dEZvY3VzLCBkaXNhYmxlTGlzdFdyYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0Rm9jdXMuZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxudmFyIHVzZUVuaGFuY2VkRWZmZWN0ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VFZmZlY3QgOiBSZWFjdC51c2VMYXlvdXRFZmZlY3Q7XG4vKipcbiAqIEEgcGVybWFuZW50bHkgZGlzcGxheWVkIG1lbnUgZm9sbG93aW5nIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMvI21lbnVidXR0b24uXG4gKiBJdCdzIGV4cG9zZWQgdG8gaGVscCBjdXN0b21pemF0aW9uIG9mIHRoZSBbYE1lbnVgXSgvYXBpL21lbnUvKSBjb21wb25lbnQuIElmIHlvdVxuICogdXNlIGl0IHNlcGFyYXRlbHkgeW91IG5lZWQgdG8gbW92ZSBmb2N1cyBpbnRvIHRoZSBjb21wb25lbnQgbWFudWFsbHkuIE9uY2VcbiAqIHRoZSBmb2N1cyBpcyBwbGFjZWQgaW5zaWRlIHRoZSBjb21wb25lbnQgaXQgaXMgZnVsbHkga2V5Ym9hcmQgYWNjZXNzaWJsZS5cbiAqL1xuXG52YXIgTWVudUxpc3QgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBNZW51TGlzdChwcm9wcywgcmVmKSB7XG4gIHZhciBhY3Rpb25zID0gcHJvcHMuYWN0aW9ucyxcbiAgICAgIF9wcm9wcyRhdXRvRm9jdXMgPSBwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBhdXRvRm9jdXMgPSBfcHJvcHMkYXV0b0ZvY3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvRm9jdXMsXG4gICAgICBfcHJvcHMkYXV0b0ZvY3VzSXRlbSA9IHByb3BzLmF1dG9Gb2N1c0l0ZW0sXG4gICAgICBhdXRvRm9jdXNJdGVtID0gX3Byb3BzJGF1dG9Gb2N1c0l0ZW0gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGF1dG9Gb2N1c0l0ZW0sXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpc2FibGVkSXRlbXNGID0gcHJvcHMuZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSxcbiAgICAgIGRpc2FibGVkSXRlbXNGb2N1c2FibGUgPSBfcHJvcHMkZGlzYWJsZWRJdGVtc0YgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkSXRlbXNGLFxuICAgICAgX3Byb3BzJGRpc2FibGVMaXN0V3JhID0gcHJvcHMuZGlzYWJsZUxpc3RXcmFwLFxuICAgICAgZGlzYWJsZUxpc3RXcmFwID0gX3Byb3BzJGRpc2FibGVMaXN0V3JhID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlTGlzdFdyYSxcbiAgICAgIG9uS2V5RG93biA9IHByb3BzLm9uS2V5RG93bixcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3NlbGVjdGVkTWVudScgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhY3Rpb25zXCIsIFwiYXV0b0ZvY3VzXCIsIFwiYXV0b0ZvY3VzSXRlbVwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZVwiLCBcImRpc2FibGVMaXN0V3JhcFwiLCBcIm9uS2V5RG93blwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBsaXN0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgdGV4dENyaXRlcmlhUmVmID0gUmVhY3QudXNlUmVmKHtcbiAgICBrZXlzOiBbXSxcbiAgICByZXBlYXRpbmc6IHRydWUsXG4gICAgcHJldmlvdXNLZXlNYXRjaGVkOiB0cnVlLFxuICAgIGxhc3RUaW1lOiBudWxsXG4gIH0pO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgbGlzdFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbYXV0b0ZvY3VzXSk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoYWN0aW9ucywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZGp1c3RTdHlsZUZvclNjcm9sbGJhcjogZnVuY3Rpb24gYWRqdXN0U3R5bGVGb3JTY3JvbGxiYXIoY29udGFpbmVyRWxlbWVudCwgdGhlbWUpIHtcbiAgICAgICAgLy8gTGV0J3MgaWdub3JlIHRoYXQgcGllY2Ugb2YgbG9naWMgaWYgdXNlcnMgYXJlIGFscmVhZHkgb3ZlcnJpZGluZyB0aGUgd2lkdGhcbiAgICAgICAgLy8gb2YgdGhlIG1lbnUuXG4gICAgICAgIHZhciBub0V4cGxpY2l0V2lkdGggPSAhbGlzdFJlZi5jdXJyZW50LnN0eWxlLndpZHRoO1xuXG4gICAgICAgIGlmIChjb250YWluZXJFbGVtZW50LmNsaWVudEhlaWdodCA8IGxpc3RSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgJiYgbm9FeHBsaWNpdFdpZHRoKSB7XG4gICAgICAgICAgdmFyIHNjcm9sbGJhclNpemUgPSBcIlwiLmNvbmNhdChnZXRTY3JvbGxiYXJTaXplKHRydWUpLCBcInB4XCIpO1xuICAgICAgICAgIGxpc3RSZWYuY3VycmVudC5zdHlsZVt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnXSA9IHNjcm9sbGJhclNpemU7XG4gICAgICAgICAgbGlzdFJlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gXCJjYWxjKDEwMCUgKyBcIi5jb25jYXQoc2Nyb2xsYmFyU2l6ZSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RSZWYuY3VycmVudDtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgdmFyIGxpc3QgPSBsaXN0UmVmLmN1cnJlbnQ7XG4gICAgdmFyIGtleSA9IGV2ZW50LmtleTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH0gLSB3aWxsIGFsd2F5cyBiZSBkZWZpbmVkIHNpbmNlIHdlIGFyZSBpbiBhIGtleWRvd24gaGFuZGxlclxuICAgICAqIGF0dGFjaGVkIHRvIGFuIGVsZW1lbnQuIEEga2V5ZG93biBldmVudCBpcyBlaXRoZXIgZGlzcGF0Y2hlZCB0byB0aGUgYWN0aXZlRWxlbWVudFxuICAgICAqIG9yIGRvY3VtZW50LmJvZHkgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LiBPbmx5IHRoZSBmaXJzdCBjYXNlIHdpbGxcbiAgICAgKiB0cmlnZ2VyIHRoaXMgc3BlY2lmaWMgaGFuZGxlci5cbiAgICAgKi9cblxuICAgIHZhciBjdXJyZW50Rm9jdXMgPSBvd25lckRvY3VtZW50KGxpc3QpLmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgLy8gUHJldmVudCBzY3JvbGwgb2YgdGhlIHBhZ2VcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb3ZlRm9jdXMobGlzdCwgY3VycmVudEZvY3VzLCBkaXNhYmxlTGlzdFdyYXAsIGRpc2FibGVkSXRlbXNGb2N1c2FibGUsIG5leHRJdGVtKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZUZvY3VzKGxpc3QsIGN1cnJlbnRGb2N1cywgZGlzYWJsZUxpc3RXcmFwLCBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlLCBwcmV2aW91c0l0ZW0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnSG9tZScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb3ZlRm9jdXMobGlzdCwgbnVsbCwgZGlzYWJsZUxpc3RXcmFwLCBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlLCBuZXh0SXRlbSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdFbmQnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZUZvY3VzKGxpc3QsIG51bGwsIGRpc2FibGVMaXN0V3JhcCwgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSwgcHJldmlvdXNJdGVtKTtcbiAgICB9IGVsc2UgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjcml0ZXJpYSA9IHRleHRDcml0ZXJpYVJlZi5jdXJyZW50O1xuICAgICAgdmFyIGxvd2VyS2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YXIgY3VyclRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgICAgaWYgKGNyaXRlcmlhLmtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBSZXNldFxuICAgICAgICBpZiAoY3VyclRpbWUgLSBjcml0ZXJpYS5sYXN0VGltZSA+IDUwMCkge1xuICAgICAgICAgIGNyaXRlcmlhLmtleXMgPSBbXTtcbiAgICAgICAgICBjcml0ZXJpYS5yZXBlYXRpbmcgPSB0cnVlO1xuICAgICAgICAgIGNyaXRlcmlhLnByZXZpb3VzS2V5TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY3JpdGVyaWEucmVwZWF0aW5nICYmIGxvd2VyS2V5ICE9PSBjcml0ZXJpYS5rZXlzWzBdKSB7XG4gICAgICAgICAgY3JpdGVyaWEucmVwZWF0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3JpdGVyaWEubGFzdFRpbWUgPSBjdXJyVGltZTtcbiAgICAgIGNyaXRlcmlhLmtleXMucHVzaChsb3dlcktleSk7XG4gICAgICB2YXIga2VlcEZvY3VzT25DdXJyZW50ID0gY3VycmVudEZvY3VzICYmICFjcml0ZXJpYS5yZXBlYXRpbmcgJiYgdGV4dENyaXRlcmlhTWF0Y2hlcyhjdXJyZW50Rm9jdXMsIGNyaXRlcmlhKTtcblxuICAgICAgaWYgKGNyaXRlcmlhLnByZXZpb3VzS2V5TWF0Y2hlZCAmJiAoa2VlcEZvY3VzT25DdXJyZW50IHx8IG1vdmVGb2N1cyhsaXN0LCBjdXJyZW50Rm9jdXMsIGZhbHNlLCBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlLCBuZXh0SXRlbSwgY3JpdGVyaWEpKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3JpdGVyaWEucHJldmlvdXNLZXlNYXRjaGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgb25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZU93blJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIC8vICNTdHJpY3RNb2RlIHJlYWR5XG4gICAgbGlzdFJlZi5jdXJyZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUoaW5zdGFuY2UpO1xuICB9LCBbXSk7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKGhhbmRsZU93blJlZiwgcmVmKTtcbiAgLyoqXG4gICAqIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBzaG91bGQgcmVjZWl2ZSBmb2N1c1xuICAgKiBpbiBhIGB2YXJpYW50PVwic2VsZWN0ZWRNZW51XCJgIGl0J3MgdGhlIGZpcnN0IGBzZWxlY3RlZGAgaXRlbVxuICAgKiBvdGhlcndpc2UgaXQncyB0aGUgdmVyeSBmaXJzdCBpdGVtLlxuICAgKi9cblxuICB2YXIgYWN0aXZlSXRlbUluZGV4ID0gLTE7IC8vIHNpbmNlIHdlIGluamVjdCBmb2N1cyByZWxhdGVkIHByb3BzIGludG8gY2hpbGRyZW4gd2UgaGF2ZSB0byBkbyBhIGxvb2thaGVhZFxuICAvLyB0byBjaGVjayBpZiB0aGVyZSBpcyBhIGBzZWxlY3RlZGAgaXRlbS4gV2UncmUgbG9va2luZyBmb3IgdGhlIGxhc3QgYHNlbGVjdGVkYFxuICAvLyBpdGVtIGFuZCB1c2UgdGhlIGZpcnN0IHZhbGlkIGl0ZW0gYXMgYSBmYWxsYmFja1xuXG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgTWVudSBjb21wb25lbnQgZG9lc24ndCBhY2NlcHQgYSBGcmFnbWVudCBhcyBhIGNoaWxkLlwiLCAnQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFycmF5IGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY2hpbGQucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh2YXJpYW50ID09PSAnc2VsZWN0ZWRNZW51JyAmJiBjaGlsZC5wcm9wcy5zZWxlY3RlZCkge1xuICAgICAgICBhY3RpdmVJdGVtSW5kZXggPSBpbmRleDtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlSXRlbUluZGV4ID09PSAtMSkge1xuICAgICAgICBhY3RpdmVJdGVtSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICB2YXIgaXRlbXMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IGFjdGl2ZUl0ZW1JbmRleCkge1xuICAgICAgdmFyIG5ld0NoaWxkUHJvcHMgPSB7fTtcblxuICAgICAgaWYgKGF1dG9Gb2N1c0l0ZW0pIHtcbiAgICAgICAgbmV3Q2hpbGRQcm9wcy5hdXRvRm9jdXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQucHJvcHMudGFiSW5kZXggPT09IHVuZGVmaW5lZCAmJiB2YXJpYW50ID09PSAnc2VsZWN0ZWRNZW51Jykge1xuICAgICAgICBuZXdDaGlsZFByb3BzLnRhYkluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0NoaWxkUHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJtZW51XCIsXG4gICAgcmVmOiBoYW5kbGVSZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgIHRhYkluZGV4OiBhdXRvRm9jdXMgPyAwIDogLTFcbiAgfSwgb3RoZXIpLCBpdGVtcyk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE1lbnVMaXN0LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2lsbCBmb2N1cyB0aGUgYFtyb2xlPVwibWVudVwiXWAgY29udGFpbmVyIGFuZCBtb3ZlIGludG8gdGFiIG9yZGVyLlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB3aWxsIGZvY3VzIHRoZSBmaXJzdCBtZW51aXRlbSBpZiBgdmFyaWFudD1cIm1lbnVcImAgb3Igc2VsZWN0ZWQgaXRlbVxuICAgKiBpZiBgdmFyaWFudD1cInNlbGVjdGVkTWVudVwiYC5cbiAgICovXG4gIGF1dG9Gb2N1c0l0ZW06IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBNZW51TGlzdCBjb250ZW50cywgbm9ybWFsbHkgYE1lbnVJdGVtYHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB3aWxsIGFsbG93IGZvY3VzIG9uIGRpc2FibGVkIGl0ZW1zLlxuICAgKi9cbiAgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1lbnUgaXRlbXMgd2lsbCBub3Qgd3JhcCBmb2N1cy5cbiAgICovXG4gIGRpc2FibGVMaXN0V3JhcDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS4gVXNlIGBtZW51YCB0byBwcmV2ZW50IHNlbGVjdGVkIGl0ZW1zIGZyb20gaW1wYWN0aW5nIHRoZSBpbml0aWFsIGZvY3VzXG4gICAqIGFuZCB0aGUgdmVydGljYWwgYWxpZ25tZW50IHJlbGF0aXZlIHRvIHRoZSBhbmNob3IgZWxlbWVudC5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ21lbnUnLCAnc2VsZWN0ZWRNZW51J10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgTWVudUxpc3Q7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTWVudUxpc3QnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTmF0aXZlU2VsZWN0SW5wdXQgZnJvbSAnLi9OYXRpdmVTZWxlY3RJbnB1dCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgZm9ybUNvbnRyb2xTdGF0ZSBmcm9tICcuLi9Gb3JtQ29udHJvbC9mb3JtQ29udHJvbFN0YXRlJztcbmltcG9ydCB1c2VGb3JtQ29udHJvbCBmcm9tICcuLi9Gb3JtQ29udHJvbC91c2VGb3JtQ29udHJvbCc7XG5pbXBvcnQgQXJyb3dEcm9wRG93bkljb24gZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL0Fycm93RHJvcERvd24nO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL0lucHV0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNlbGVjdCBjb21wb25lbnQgYHJvb3RgIGNsYXNzLiAqL1xuICAgIHJvb3Q6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNlbGVjdCBjb21wb25lbnQgYHNlbGVjdGAgY2xhc3MuICovXG4gICAgc2VsZWN0OiB7XG4gICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgLy8gUmVzZXRcbiAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgICAvLyBSZXNldFxuICAgICAgLy8gV2hlbiBpbnRlcmFjdGluZyBxdWlja2x5LCB0aGUgdGV4dCBjYW4gZW5kIHVwIHNlbGVjdGVkLlxuICAgICAgLy8gTmF0aXZlIHNlbGVjdCBjYW4ndCBiZSBzZWxlY3RlZCBlaXRoZXIuXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAvLyBSZXNldFxuICAgICAgbWluV2lkdGg6IDE2LFxuICAgICAgLy8gU28gaXQgZG9lc24ndCBjb2xsYXBzZS5cbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIC8vIFNob3cgdGhhdCBpdCdzIG5vdCBhbiB0ZXh0IGlucHV0XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gJ3JnYmEoMCwgMCwgMCwgMC4wNSknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDAgLy8gUmVzZXQgQ2hyb21lIHN0eWxlXG5cbiAgICAgIH0sXG4gICAgICAvLyBSZW1vdmUgSUUgMTEgYXJyb3dcbiAgICAgICcmOjotbXMtZXhwYW5kJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICAgIH0sXG4gICAgICAnJlttdWx0aXBsZV0nOiB7XG4gICAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgICB9LFxuICAgICAgJyY6bm90KFttdWx0aXBsZV0pIG9wdGlvbiwgJjpub3QoW211bHRpcGxlXSkgb3B0Z3JvdXAnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyXG4gICAgICB9LFxuICAgICAgJyYmJzoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IDI0XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzZWxlY3QgY29tcG9uZW50IGlmIGB2YXJpYW50PVwiZmlsbGVkXCJgLiAqL1xuICAgIGZpbGxlZDoge1xuICAgICAgJyYmJzoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IDMyXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzZWxlY3QgY29tcG9uZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgb3V0bGluZWQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgJyYmJzoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IDMyXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzZWxlY3QgY29tcG9uZW50IGBzZWxlY3RNZW51YCBjbGFzcy4gKi9cbiAgICBzZWxlY3RNZW51OiB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIC8vIFJlc2V0cyBmb3IgbXVsdHBpbGUgc2VsZWN0IHdpdGggY2hpcHNcbiAgICAgIG1pbkhlaWdodDogJzEuMTg3NmVtJyxcbiAgICAgIC8vIFJlcXVpcmVkIGZvciBzZWxlY3RcXHRleHQtZmllbGQgaGVpZ2h0IGNvbnNpc3RlbmN5XG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgc2VsZWN0IGNvbXBvbmVudCBgZGlzYWJsZWRgIGNsYXNzLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpY29uIGNvbXBvbmVudC4gKi9cbiAgICBpY29uOiB7XG4gICAgICAvLyBXZSB1c2UgYSBwb3NpdGlvbiBhYnNvbHV0ZSBvdmVyIGEgZmxleGJveCBpbiBvcmRlciB0byBmb3J3YXJkIHRoZSBwb2ludGVyIGV2ZW50c1xuICAgICAgLy8gdG8gdGhlIGlucHV0IGFuZCB0byBzdXBwb3J0IHdyYXBwaW5nIHRhZ3MuLlxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogJ2NhbGMoNTAlIC0gMTJweCknLFxuICAgICAgLy8gQ2VudGVyIHZlcnRpY2FsbHlcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIC8vIERvbid0IGJsb2NrIHBvaW50ZXIgZXZlbnRzIG9uIHRoZSBzZWxlY3QgdW5kZXIgdGhlIGljb24uXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uYWN0aXZlLFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiBjb21wb25lbnQgaWYgdGhlIHBvcHVwIGlzIG9wZW4uICovXG4gICAgaWNvbk9wZW46IHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiBjb21wb25lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAuICovXG4gICAgaWNvbkZpbGxlZDoge1xuICAgICAgcmlnaHQ6IDdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gY29tcG9uZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgaWNvbk91dGxpbmVkOiB7XG4gICAgICByaWdodDogN1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgdW5kZXJseWluZyBuYXRpdmUgaW5wdXQgY29tcG9uZW50LiAqL1xuICAgIG5hdGl2ZUlucHV0OiB7XG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfTtcbn07XG52YXIgZGVmYXVsdElucHV0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIG51bGwpO1xuLyoqXG4gKiBBbiBhbHRlcm5hdGl2ZSB0byBgPFNlbGVjdCBuYXRpdmUgLz5gIHdpdGggYSBtdWNoIHNtYWxsZXIgYnVuZGxlIHNpemUgZm9vdHByaW50LlxuICovXG5cbnZhciBOYXRpdmVTZWxlY3QgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXRpdmVTZWxlY3QocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgX3Byb3BzJEljb25Db21wb25lbnQgPSBwcm9wcy5JY29uQ29tcG9uZW50LFxuICAgICAgSWNvbkNvbXBvbmVudCA9IF9wcm9wcyRJY29uQ29tcG9uZW50ID09PSB2b2lkIDAgPyBBcnJvd0Ryb3BEb3duSWNvbiA6IF9wcm9wcyRJY29uQ29tcG9uZW50LFxuICAgICAgX3Byb3BzJGlucHV0ID0gcHJvcHMuaW5wdXQsXG4gICAgICBpbnB1dCA9IF9wcm9wcyRpbnB1dCA9PT0gdm9pZCAwID8gZGVmYXVsdElucHV0IDogX3Byb3BzJGlucHV0LFxuICAgICAgaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICB2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJJY29uQ29tcG9uZW50XCIsIFwiaW5wdXRcIiwgXCJpbnB1dFByb3BzXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ3ZhcmlhbnQnXVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoaW5wdXQsIF9leHRlbmRzKHtcbiAgICAvLyBNb3N0IG9mIHRoZSBsb2dpYyBpcyBpbXBsZW1lbnRlZCBpbiBgTmF0aXZlU2VsZWN0SW5wdXRgLlxuICAgIC8vIFRoZSBgU2VsZWN0YCBjb21wb25lbnQgaXMgYSBzaW1wbGUgQVBJIHdyYXBwZXIgdG8gZXhwb3NlIHNvbWV0aGluZyBiZXR0ZXIgdG8gcGxheSB3aXRoLlxuICAgIGlucHV0Q29tcG9uZW50OiBOYXRpdmVTZWxlY3RJbnB1dCxcbiAgICBpbnB1dFByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzOiBjbGFzc2VzLFxuICAgICAgSWNvbkNvbXBvbmVudDogSWNvbkNvbXBvbmVudCxcbiAgICAgIHZhcmlhbnQ6IGZjcy52YXJpYW50LFxuICAgICAgdHlwZTogdW5kZWZpbmVkXG4gICAgfSwgaW5wdXRQcm9wcywgaW5wdXQgPyBpbnB1dC5wcm9wcy5pbnB1dFByb3BzIDoge30pLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE5hdGl2ZVNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uIGVsZW1lbnRzIHRvIHBvcHVsYXRlIHRoZSBzZWxlY3Qgd2l0aC5cbiAgICogQ2FuIGJlIHNvbWUgYDxvcHRpb24+YCBlbGVtZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0aGF0IGRpc3BsYXlzIHRoZSBhcnJvdy5cbiAgICovXG4gIEljb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogQW4gYElucHV0YCBlbGVtZW50OyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgbWF0ZXJpYWwtdWkgc3BlY2lmaWMgYElucHV0YC5cbiAgICovXG4gIGlucHV0OiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKipcbiAgICogQXR0cmlidXRlcyBhcHBsaWVkIHRvIHRoZSBgc2VsZWN0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChzdHJpbmcpLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgdmFsdWUuIFRoZSBET00gQVBJIGNhc3RzIHRoaXMgdG8gYSBzdHJpbmcuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuTmF0aXZlU2VsZWN0Lm11aU5hbWUgPSAnU2VsZWN0JztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlOYXRpdmVTZWxlY3QnXG59KShOYXRpdmVTZWxlY3QpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxudmFyIE5hdGl2ZVNlbGVjdElucHV0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTmF0aXZlU2VsZWN0SW5wdXQocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgSWNvbkNvbXBvbmVudCA9IHByb3BzLkljb25Db21wb25lbnQsXG4gICAgICBpbnB1dFJlZiA9IHByb3BzLmlucHV0UmVmLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVkXCIsIFwiSWNvbkNvbXBvbmVudFwiLCBcImlucHV0UmVmXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgLy8gVE9ETyB2NTogbWVyZ2Ugcm9vdCBhbmQgc2VsZWN0XG4gICAgY2xhc3Nlcy5zZWxlY3QsIGNsYXNzZXNbdmFyaWFudF0sIGNsYXNzTmFtZSwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCksXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIHJlZjogaW5wdXRSZWYgfHwgcmVmXG4gIH0sIG90aGVyKSksIHByb3BzLm11bHRpcGxlID8gbnVsbCA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25Db21wb25lbnQsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5pY29uLCBjbGFzc2VzW1wiaWNvblwiLmNvbmNhdChjYXBpdGFsaXplKHZhcmlhbnQpKV0sIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQpXG4gIH0pKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTmF0aXZlU2VsZWN0SW5wdXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIG9wdGlvbiBlbGVtZW50cyB0byBwb3B1bGF0ZSB0aGUgc2VsZWN0IHdpdGguXG4gICAqIENhbiBiZSBzb21lIGA8b3B0aW9uPmAgZWxlbWVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBzZWxlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGljb24gdGhhdCBkaXNwbGF5cyB0aGUgYXJyb3cuXG4gICAqL1xuICBJY29uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVXNlIHRoYXQgcHJvcCB0byBwYXNzIGEgcmVmIHRvIHRoZSBuYXRpdmUgc2VsZWN0IGVsZW1lbnQuXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBpbnB1dFJlZjogcmVmVHlwZSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgYHNlbGVjdGAgb3IgaGlkZGVuIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIGlucHV0IHZhbHVlLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3N0YW5kYXJkJywgJ291dGxpbmVkJywgJ2ZpbGxlZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IE5hdGl2ZVNlbGVjdElucHV0OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6IC01LFxuICAgICAgbGVmdDogMCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0JyxcbiAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGxlZ2VuZCBlbGVtZW50IHdoZW4gYGxhYmVsV2lkdGhgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGxlZ2VuZDoge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgbGluZUhlaWdodDogJzExcHgnLFxuICAgICAgLy8gc3luYyB3aXRoIGBoZWlnaHRgIGluIGBsZWdlbmRgIHN0eWxlc1xuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcbiAgICAgICAgZHVyYXRpb246IDE1MCxcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGxlZ2VuZCBlbGVtZW50LiAqL1xuICAgIGxlZ2VuZExhYmVsbGVkOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGhlaWdodDogMTEsXG4gICAgICAvLyBzeW5jIHdpdGggYGxpbmVIZWlnaHRgIGluIGBsZWdlbmRgIHN0eWxlc1xuICAgICAgZm9udFNpemU6ICcwLjc1ZW0nLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBtYXhXaWR0aDogMC4wMSxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWF4LXdpZHRoJywge1xuICAgICAgICBkdXJhdGlvbjogNTAsXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXRcbiAgICAgIH0pLFxuICAgICAgJyYgPiBzcGFuJzoge1xuICAgICAgICBwYWRkaW5nTGVmdDogNSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiA1LFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgbGVnZW5kIGVsZW1lbnQgaXMgbm90Y2hlZC4gKi9cbiAgICBsZWdlbmROb3RjaGVkOiB7XG4gICAgICBtYXhXaWR0aDogMTAwMCxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWF4LXdpZHRoJywge1xuICAgICAgICBkdXJhdGlvbjogMTAwLFxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0LFxuICAgICAgICBkZWxheTogNTBcbiAgICAgIH0pXG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgTm90Y2hlZE91dGxpbmUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOb3RjaGVkT3V0bGluZShwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgbGFiZWxXaWR0aFByb3AgPSBwcm9wcy5sYWJlbFdpZHRoLFxuICAgICAgbm90Y2hlZCA9IHByb3BzLm5vdGNoZWQsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImxhYmVsXCIsIFwibGFiZWxXaWR0aFwiLCBcIm5vdGNoZWRcIiwgXCJzdHlsZVwiXSk7XG5cbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIGFsaWduID0gdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCc7XG5cbiAgaWYgKGxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiLCBfZXh0ZW5kcyh7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgICAgcmVmOiByZWYsXG4gICAgICBzdHlsZTogc3R5bGVcbiAgICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmxlZ2VuZExhYmVsbGVkLCBub3RjaGVkICYmIGNsYXNzZXMubGVnZW5kTm90Y2hlZClcbiAgICB9LCBsYWJlbCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBsYWJlbCkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgX19odG1sOiAnJiM4MjAzOydcbiAgICAgIH1cbiAgICB9KSkpO1xuICB9XG5cbiAgdmFyIGxhYmVsV2lkdGggPSBsYWJlbFdpZHRoUHJvcCA+IDAgPyBsYWJlbFdpZHRoUHJvcCAqIDAuNzUgKyA4IDogMC4wMTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIiwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICBzdHlsZTogX2V4dGVuZHMoX2RlZmluZVByb3BlcnR5KHt9LCBcInBhZGRpbmdcIi5jb25jYXQoY2FwaXRhbGl6ZShhbGlnbikpLCA4KSwgc3R5bGUpLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmxlZ2VuZCxcbiAgICBzdHlsZToge1xuICAgICAgLy8gSUUgMTE6IGZpZWxkc2V0IHdpdGggbGVnZW5kIGRvZXMgbm90IHJlbmRlclxuICAgICAgLy8gYSBib3JkZXIgcmFkaXVzLiBUaGlzIG1haW50YWlucyBjb25zaXN0ZW5jeVxuICAgICAgLy8gYnkgYWx3YXlzIGhhdmluZyBhIGxlZ2VuZCByZW5kZXJlZFxuICAgICAgd2lkdGg6IG5vdGNoZWQgPyBsYWJlbFdpZHRoIDogMC4wMVxuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgX19odG1sOiAnJiM4MjAzOydcbiAgICB9XG4gIH0pKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE5vdGNoZWRPdXRsaW5lLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgbGFiZWwuXG4gICAqL1xuICBsYWJlbFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG91dGxpbmUgaXMgbm90Y2hlZCB0byBhY2NvbW1vZGF0ZSB0aGUgbGFiZWwuXG4gICAqL1xuICBub3RjaGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdQcml2YXRlTm90Y2hlZE91dGxpbmUnXG59KShOb3RjaGVkT3V0bGluZSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJy4uL0lucHV0QmFzZSc7XG5pbXBvcnQgTm90Y2hlZE91dGxpbmUgZnJvbSAnLi9Ob3RjaGVkT3V0bGluZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgYm9yZGVyQ29sb3IgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAncmdiYSgwLCAwLCAwLCAwLjIzKScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIzKSc7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgJyY6aG92ZXIgJG5vdGNoZWRPdXRsaW5lJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcbiAgICAgIH0sXG4gICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAnJjpob3ZlciAkbm90Y2hlZE91dGxpbmUnOiB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJiRmb2N1c2VkICRub3RjaGVkT3V0bGluZSc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICBib3JkZXJXaWR0aDogMlxuICAgICAgfSxcbiAgICAgICcmJGVycm9yICRub3RjaGVkT3V0bGluZSc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkICRub3RjaGVkT3V0bGluZSc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbG9yIGlzIHNlY29uZGFyeS4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgJyYkZm9jdXNlZCAkbm90Y2hlZE91dGxpbmUnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBmb2N1c2VkLiAqL1xuICAgIGZvY3VzZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzdGFydEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgYWRvcm5lZFN0YXJ0OiB7XG4gICAgICBwYWRkaW5nTGVmdDogMTRcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZW5kQWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBhZG9ybmVkRW5kOiB7XG4gICAgICBwYWRkaW5nUmlnaHQ6IDE0XG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgbWFyZ2luRGVuc2U6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgbXVsdGlsaW5lOiB7XG4gICAgICBwYWRkaW5nOiAnMTguNXB4IDE0cHgnLFxuICAgICAgJyYkbWFyZ2luRGVuc2UnOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IDEwLjUsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDEwLjVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBOb3RjaGVkT3V0bGluZWAgZWxlbWVudC4gKi9cbiAgICBub3RjaGVkT3V0bGluZToge1xuICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuICovXG4gICAgaW5wdXQ6IHtcbiAgICAgIHBhZGRpbmc6ICcxOC41cHggMTRweCcsXG4gICAgICAnJjotd2Via2l0LWF1dG9maWxsJzoge1xuICAgICAgICBXZWJraXRCb3hTaGFkb3c6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IG51bGwgOiAnMCAwIDAgMTAwcHggIzI2Njc5OCBpbnNldCcsXG4gICAgICAgIFdlYmtpdFRleHRGaWxsQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IG51bGwgOiAnI2ZmZicsXG4gICAgICAgIGNhcmV0Q29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IG51bGwgOiAnI2ZmZicsXG4gICAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIGlucHV0TWFyZ2luRGVuc2U6IHtcbiAgICAgIHBhZGRpbmdUb3A6IDEwLjUsXG4gICAgICBwYWRkaW5nQm90dG9tOiAxMC41XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIGlucHV0TXVsdGlsaW5lOiB7XG4gICAgICBwYWRkaW5nOiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYHN0YXJ0QWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRTdGFydDoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgZW5kQWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRFbmQ6IHtcbiAgICAgIHBhZGRpbmdSaWdodDogMFxuICAgIH1cbiAgfTtcbn07XG52YXIgT3V0bGluZWRJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE91dGxpbmVkSW5wdXQocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgX3Byb3BzJGlucHV0Q29tcG9uZW50ID0gcHJvcHMuaW5wdXRDb21wb25lbnQsXG4gICAgICBpbnB1dENvbXBvbmVudCA9IF9wcm9wcyRpbnB1dENvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9wcm9wcyRpbnB1dENvbXBvbmVudCxcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBfcHJvcHMkbGFiZWxXaWR0aCA9IHByb3BzLmxhYmVsV2lkdGgsXG4gICAgICBsYWJlbFdpZHRoID0gX3Byb3BzJGxhYmVsV2lkdGggPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkbGFiZWxXaWR0aCxcbiAgICAgIF9wcm9wcyRtdWx0aWxpbmUgPSBwcm9wcy5tdWx0aWxpbmUsXG4gICAgICBtdWx0aWxpbmUgPSBfcHJvcHMkbXVsdGlsaW5lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtdWx0aWxpbmUsXG4gICAgICBub3RjaGVkID0gcHJvcHMubm90Y2hlZCxcbiAgICAgIF9wcm9wcyR0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIHR5cGUgPSBfcHJvcHMkdHlwZSA9PT0gdm9pZCAwID8gJ3RleHQnIDogX3Byb3BzJHR5cGUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImZ1bGxXaWR0aFwiLCBcImlucHV0Q29tcG9uZW50XCIsIFwibGFiZWxcIiwgXCJsYWJlbFdpZHRoXCIsIFwibXVsdGlsaW5lXCIsIFwibm90Y2hlZFwiLCBcInR5cGVcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEJhc2UsIF9leHRlbmRzKHtcbiAgICByZW5kZXJTdWZmaXg6IGZ1bmN0aW9uIHJlbmRlclN1ZmZpeChzdGF0ZSkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5vdGNoZWRPdXRsaW5lLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5ub3RjaGVkT3V0bGluZSxcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICBsYWJlbFdpZHRoOiBsYWJlbFdpZHRoLFxuICAgICAgICBub3RjaGVkOiB0eXBlb2Ygbm90Y2hlZCAhPT0gJ3VuZGVmaW5lZCcgPyBub3RjaGVkIDogQm9vbGVhbihzdGF0ZS5zdGFydEFkb3JubWVudCB8fCBzdGF0ZS5maWxsZWQgfHwgc3RhdGUuZm9jdXNlZClcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2xhc3NlczogX2V4dGVuZHMoe30sIGNsYXNzZXMsIHtcbiAgICAgIHJvb3Q6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzLnVuZGVybGluZSksXG4gICAgICBub3RjaGVkT3V0bGluZTogbnVsbFxuICAgIH0pLFxuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgIGlucHV0Q29tcG9uZW50OiBpbnB1dENvbXBvbmVudCxcbiAgICBtdWx0aWxpbmU6IG11bHRpbGluZSxcbiAgICByZWY6IHJlZixcbiAgICB0eXBlOiB0eXBlXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE91dGxpbmVkSW5wdXQucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhpcyBwcm9wIGhlbHBzIHVzZXJzIHRvIGZpbGwgZm9ybXMgZmFzdGVyLCBlc3BlY2lhbGx5IG9uIG1vYmlsZSBkZXZpY2VzLlxuICAgKiBUaGUgbmFtZSBjYW4gYmUgY29uZnVzaW5nLCBhcyBpdCdzIG1vcmUgbGlrZSBhbiBhdXRvZmlsbC5cbiAgICogWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGl0IFtmb2xsb3dpbmcgdGhlIHNwZWNpZmljYXRpb25dKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm0tY29udHJvbC1pbmZyYXN0cnVjdHVyZS5odG1sI2F1dG9maWxsKS5cbiAgICovXG4gIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZm9jdXNlZCBkdXJpbmcgdGhlIGZpcnN0IG1vdW50LlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGBpbnB1dGAgZWxlbWVudCB2YWx1ZS4gVXNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBub3QgY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuZCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGVuZEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgaW5kaWNhdGUgYW4gZXJyb3IuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBpbnB1dENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBbQXR0cmlidXRlc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0F0dHJpYnV0ZXMpIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBhc3MgYSByZWYgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgb2YgdGhlIGlucHV0LiBJdCBpcyBvbmx5IHVzZWQgZm9yIGxheW91dC4gVGhlIGFjdHVhbCBsYWJlbGxpbmdcbiAgICogaXMgaGFuZGxlZCBieSBgSW5wdXRMYWJlbGAuIElmIHNwZWNpZmllZCBgbGFiZWxXaWR0aGAgaXMgaWdub3JlZC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBsYWJlbC4gSXMgaWdub3JlZCBpZiBgbGFiZWxgIGlzIHByb3ZpZGVkLiBQcmVmZXIgYGxhYmVsYFxuICAgKiBpZiB0aGUgaW5wdXQgbGFiZWwgYXBwZWFycyB3aXRoIGEgc3RyaWtlIHRocm91Z2guXG4gICAqL1xuICBsYWJlbFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB0ZXh0YXJlYSBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBtdWx0aWxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgb3V0bGluZSBpcyBub3RjaGVkIHRvIGFjY29tbW9kYXRlIHRoZSBsYWJlbC5cbiAgICovXG4gIG5vdGNoZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEl0IHByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZFxuICAgKiAobm90IGZyb20gaW50ZXJhY3Rpbmcgd2l0aCB0aGUgZmllbGQpLlxuICAgKi9cbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgc3RhcnRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuIEl0IHNob3VsZCBiZSBbYSB2YWxpZCBIVE1MNSBpbnB1dCB0eXBlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV8lM0NpbnB1dCUzRV90eXBlcykuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudCwgcmVxdWlyZWQgZm9yIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueVxufSA6IHZvaWQgMDtcbk91dGxpbmVkSW5wdXQubXVpTmFtZSA9ICdJbnB1dCc7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpT3V0bGluZWRJbnB1dCdcbn0pKE91dGxpbmVkSW5wdXQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL091dGxpbmVkSW5wdXQnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMsIGVsZW1lbnRUeXBlQWNjZXB0aW5nUmVmLCByZWZUeXBlLCBIVE1MRWxlbWVudFR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgb3duZXJXaW5kb3cgZnJvbSAnLi4vdXRpbHMvb3duZXJXaW5kb3cnO1xuaW1wb3J0IGNyZWF0ZUNoYWluZWRGdW5jdGlvbiBmcm9tICcuLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsJztcbmltcG9ydCBHcm93IGZyb20gJy4uL0dyb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4uL1BhcGVyJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRUb3AocmVjdCwgdmVydGljYWwpIHtcbiAgdmFyIG9mZnNldCA9IDA7XG5cbiAgaWYgKHR5cGVvZiB2ZXJ0aWNhbCA9PT0gJ251bWJlcicpIHtcbiAgICBvZmZzZXQgPSB2ZXJ0aWNhbDtcbiAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICBvZmZzZXQgPSByZWN0LmhlaWdodCAvIDI7XG4gIH0gZWxzZSBpZiAodmVydGljYWwgPT09ICdib3R0b20nKSB7XG4gICAgb2Zmc2V0ID0gcmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldExlZnQocmVjdCwgaG9yaXpvbnRhbCkge1xuICB2YXIgb2Zmc2V0ID0gMDtcblxuICBpZiAodHlwZW9mIGhvcml6b250YWwgPT09ICdudW1iZXInKSB7XG4gICAgb2Zmc2V0ID0gaG9yaXpvbnRhbDtcbiAgfSBlbHNlIGlmIChob3Jpem9udGFsID09PSAnY2VudGVyJykge1xuICAgIG9mZnNldCA9IHJlY3Qud2lkdGggLyAyO1xuICB9IGVsc2UgaWYgKGhvcml6b250YWwgPT09ICdyaWdodCcpIHtcbiAgICBvZmZzZXQgPSByZWN0LndpZHRoO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtT3JpZ2luVmFsdWUodHJhbnNmb3JtT3JpZ2luKSB7XG4gIHJldHVybiBbdHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWwsIHRyYW5zZm9ybU9yaWdpbi52ZXJ0aWNhbF0ubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IFwiXCIuY29uY2F0KG4sIFwicHhcIikgOiBuO1xuICB9KS5qb2luKCcgJyk7XG59IC8vIFN1bSB0aGUgc2Nyb2xsVG9wIGJldHdlZW4gdHdvIGVsZW1lbnRzLlxuXG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciBlbGVtZW50ID0gY2hpbGQ7XG4gIHZhciBzY3JvbGxUb3AgPSAwO1xuXG4gIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQgIT09IHBhcmVudCkge1xuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgc2Nyb2xsVG9wICs9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICB9XG5cbiAgcmV0dXJuIHNjcm9sbFRvcDtcbn1cblxuZnVuY3Rpb24gZ2V0QW5jaG9yRWwoYW5jaG9yRWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBhbmNob3JFbCA9PT0gJ2Z1bmN0aW9uJyA/IGFuY2hvckVsKCkgOiBhbmNob3JFbDtcbn1cblxuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHt9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudC4gKi9cbiAgcGFwZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgIC8vIFNvIHdlIHNlZSB0aGUgcG9wb3ZlciB3aGVuIGl0J3MgZW1wdHkuXG4gICAgLy8gSXQncyBtb3N0IGxpa2VseSBvbiBpc3N1ZSBvbiB1c2VybGFuZC5cbiAgICBtaW5XaWR0aDogMTYsXG4gICAgbWluSGVpZ2h0OiAxNixcbiAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDMycHgpJyxcbiAgICBtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSAzMnB4KScsXG4gICAgLy8gV2UgZGlzYWJsZSB0aGUgZm9jdXMgcmluZyBmb3IgbW91c2UsIHRvdWNoIGFuZCBrZXlib2FyZCB1c2Vycy5cbiAgICBvdXRsaW5lOiAwXG4gIH1cbn07XG52YXIgUG9wb3ZlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFBvcG92ZXIocHJvcHMsIHJlZikge1xuICB2YXIgYWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgYW5jaG9yRWwgPSBwcm9wcy5hbmNob3JFbCxcbiAgICAgIF9wcm9wcyRhbmNob3JPcmlnaW4gPSBwcm9wcy5hbmNob3JPcmlnaW4sXG4gICAgICBhbmNob3JPcmlnaW4gPSBfcHJvcHMkYW5jaG9yT3JpZ2luID09PSB2b2lkIDAgPyB7XG4gICAgdmVydGljYWw6ICd0b3AnLFxuICAgIGhvcml6b250YWw6ICdsZWZ0J1xuICB9IDogX3Byb3BzJGFuY2hvck9yaWdpbixcbiAgICAgIGFuY2hvclBvc2l0aW9uID0gcHJvcHMuYW5jaG9yUG9zaXRpb24sXG4gICAgICBfcHJvcHMkYW5jaG9yUmVmZXJlbmMgPSBwcm9wcy5hbmNob3JSZWZlcmVuY2UsXG4gICAgICBhbmNob3JSZWZlcmVuY2UgPSBfcHJvcHMkYW5jaG9yUmVmZXJlbmMgPT09IHZvaWQgMCA/ICdhbmNob3JFbCcgOiBfcHJvcHMkYW5jaG9yUmVmZXJlbmMsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb250YWluZXJQcm9wID0gcHJvcHMuY29udGFpbmVyLFxuICAgICAgX3Byb3BzJGVsZXZhdGlvbiA9IHByb3BzLmVsZXZhdGlvbixcbiAgICAgIGVsZXZhdGlvbiA9IF9wcm9wcyRlbGV2YXRpb24gPT09IHZvaWQgMCA/IDggOiBfcHJvcHMkZWxldmF0aW9uLFxuICAgICAgZ2V0Q29udGVudEFuY2hvckVsID0gcHJvcHMuZ2V0Q29udGVudEFuY2hvckVsLFxuICAgICAgX3Byb3BzJG1hcmdpblRocmVzaG9sID0gcHJvcHMubWFyZ2luVGhyZXNob2xkLFxuICAgICAgbWFyZ2luVGhyZXNob2xkID0gX3Byb3BzJG1hcmdpblRocmVzaG9sID09PSB2b2lkIDAgPyAxNiA6IF9wcm9wcyRtYXJnaW5UaHJlc2hvbCxcbiAgICAgIG9uRW50ZXIgPSBwcm9wcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkID0gcHJvcHMub25FbnRlcmVkLFxuICAgICAgb25FbnRlcmluZyA9IHByb3BzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQgPSBwcm9wcy5vbkV4aXQsXG4gICAgICBvbkV4aXRlZCA9IHByb3BzLm9uRXhpdGVkLFxuICAgICAgb25FeGl0aW5nID0gcHJvcHMub25FeGl0aW5nLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICBfcHJvcHMkUGFwZXJQcm9wcyA9IHByb3BzLlBhcGVyUHJvcHMsXG4gICAgICBQYXBlclByb3BzID0gX3Byb3BzJFBhcGVyUHJvcHMgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJFBhcGVyUHJvcHMsXG4gICAgICBfcHJvcHMkdHJhbnNmb3JtT3JpZ2kgPSBwcm9wcy50cmFuc2Zvcm1PcmlnaW4sXG4gICAgICB0cmFuc2Zvcm1PcmlnaW4gPSBfcHJvcHMkdHJhbnNmb3JtT3JpZ2kgPT09IHZvaWQgMCA/IHtcbiAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgaG9yaXpvbnRhbDogJ2xlZnQnXG4gIH0gOiBfcHJvcHMkdHJhbnNmb3JtT3JpZ2ksXG4gICAgICBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPSBwcm9wcy5UcmFuc2l0aW9uQ29tcG9uZW50LFxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudCA9IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9PT0gdm9pZCAwID8gR3JvdyA6IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCxcbiAgICAgIF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvblByb3AgPSBfcHJvcHMkdHJhbnNpdGlvbkR1cmEgPT09IHZvaWQgMCA/ICdhdXRvJyA6IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSxcbiAgICAgIF9wcm9wcyRUcmFuc2l0aW9uUHJvcCA9IHByb3BzLlRyYW5zaXRpb25Qcm9wcyxcbiAgICAgIFRyYW5zaXRpb25Qcm9wcyA9IF9wcm9wcyRUcmFuc2l0aW9uUHJvcCA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkVHJhbnNpdGlvblByb3AsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWN0aW9uXCIsIFwiYW5jaG9yRWxcIiwgXCJhbmNob3JPcmlnaW5cIiwgXCJhbmNob3JQb3NpdGlvblwiLCBcImFuY2hvclJlZmVyZW5jZVwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbnRhaW5lclwiLCBcImVsZXZhdGlvblwiLCBcImdldENvbnRlbnRBbmNob3JFbFwiLCBcIm1hcmdpblRocmVzaG9sZFwiLCBcIm9uRW50ZXJcIiwgXCJvbkVudGVyZWRcIiwgXCJvbkVudGVyaW5nXCIsIFwib25FeGl0XCIsIFwib25FeGl0ZWRcIiwgXCJvbkV4aXRpbmdcIiwgXCJvcGVuXCIsIFwiUGFwZXJQcm9wc1wiLCBcInRyYW5zZm9ybU9yaWdpblwiLCBcIlRyYW5zaXRpb25Db21wb25lbnRcIiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiwgXCJUcmFuc2l0aW9uUHJvcHNcIl0pO1xuXG4gIHZhciBwYXBlclJlZiA9IFJlYWN0LnVzZVJlZigpOyAvLyBSZXR1cm5zIHRoZSB0b3AvbGVmdCBvZmZzZXQgb2YgdGhlIHBvc2l0aW9uXG4gIC8vIHRvIGF0dGFjaCB0byBvbiB0aGUgYW5jaG9yIGVsZW1lbnQgKG9yIGJvZHkgaWYgbm9uZSBpcyBwcm92aWRlZClcblxuICB2YXIgZ2V0QW5jaG9yT2Zmc2V0ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNvbnRlbnRBbmNob3JPZmZzZXQpIHtcbiAgICBpZiAoYW5jaG9yUmVmZXJlbmNlID09PSAnYW5jaG9yUG9zaXRpb24nKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIWFuY2hvclBvc2l0aW9uKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IFlvdSBuZWVkIHRvIHByb3ZpZGUgYSBgYW5jaG9yUG9zaXRpb25gIHByb3Agd2hlbiB1c2luZyAnICsgJzxQb3BvdmVyIGFuY2hvclJlZmVyZW5jZT1cImFuY2hvclBvc2l0aW9uXCIgLz4uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFuY2hvclBvc2l0aW9uO1xuICAgIH1cblxuICAgIHZhciByZXNvbHZlZEFuY2hvckVsID0gZ2V0QW5jaG9yRWwoYW5jaG9yRWwpOyAvLyBJZiBhbiBhbmNob3IgZWxlbWVudCB3YXNuJ3QgcHJvdmlkZWQsIGp1c3QgdXNlIHRoZSBwYXJlbnQgYm9keSBlbGVtZW50IG9mIHRoaXMgUG9wb3ZlclxuXG4gICAgdmFyIGFuY2hvckVsZW1lbnQgPSByZXNvbHZlZEFuY2hvckVsICYmIHJlc29sdmVkQW5jaG9yRWwubm9kZVR5cGUgPT09IDEgPyByZXNvbHZlZEFuY2hvckVsIDogb3duZXJEb2N1bWVudChwYXBlclJlZi5jdXJyZW50KS5ib2R5O1xuICAgIHZhciBhbmNob3JSZWN0ID0gYW5jaG9yRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgYm94ID0gYW5jaG9yRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgYm94LnRvcCA9PT0gMCAmJiBib3gubGVmdCA9PT0gMCAmJiBib3gucmlnaHQgPT09IDAgJiYgYm94LmJvdHRvbSA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLndhcm4oWydNYXRlcmlhbC1VSTogVGhlIGBhbmNob3JFbGAgcHJvcCBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50IGlzIGludmFsaWQuJywgJ1RoZSBhbmNob3IgZWxlbWVudCBzaG91bGQgYmUgcGFydCBvZiB0aGUgZG9jdW1lbnQgbGF5b3V0LicsIFwiTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIHByZXNlbnQgaW4gdGhlIGRvY3VtZW50IG9yIHRoYXQgaXQncyBub3QgZGlzcGxheSBub25lLlwiXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFuY2hvclZlcnRpY2FsID0gY29udGVudEFuY2hvck9mZnNldCA9PT0gMCA/IGFuY2hvck9yaWdpbi52ZXJ0aWNhbCA6ICdjZW50ZXInO1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGFuY2hvclJlY3QudG9wICsgZ2V0T2Zmc2V0VG9wKGFuY2hvclJlY3QsIGFuY2hvclZlcnRpY2FsKSxcbiAgICAgIGxlZnQ6IGFuY2hvclJlY3QubGVmdCArIGdldE9mZnNldExlZnQoYW5jaG9yUmVjdCwgYW5jaG9yT3JpZ2luLmhvcml6b250YWwpXG4gICAgfTtcbiAgfSwgW2FuY2hvckVsLCBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCwgYW5jaG9yT3JpZ2luLnZlcnRpY2FsLCBhbmNob3JQb3NpdGlvbiwgYW5jaG9yUmVmZXJlbmNlXSk7IC8vIFJldHVybnMgdGhlIHZlcnRpY2FsIG9mZnNldCBvZiBpbm5lciBjb250ZW50IHRvIGFuY2hvciB0aGUgdHJhbnNmb3JtIG9uIGlmIHByb3ZpZGVkXG5cbiAgdmFyIGdldENvbnRlbnRBbmNob3JPZmZzZXQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBjb250ZW50QW5jaG9yT2Zmc2V0ID0gMDtcblxuICAgIGlmIChnZXRDb250ZW50QW5jaG9yRWwgJiYgYW5jaG9yUmVmZXJlbmNlID09PSAnYW5jaG9yRWwnKSB7XG4gICAgICB2YXIgY29udGVudEFuY2hvckVsID0gZ2V0Q29udGVudEFuY2hvckVsKGVsZW1lbnQpO1xuXG4gICAgICBpZiAoY29udGVudEFuY2hvckVsICYmIGVsZW1lbnQuY29udGFpbnMoY29udGVudEFuY2hvckVsKSkge1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQsIGNvbnRlbnRBbmNob3JFbCk7XG4gICAgICAgIGNvbnRlbnRBbmNob3JPZmZzZXQgPSBjb250ZW50QW5jaG9yRWwub2Zmc2V0VG9wICsgY29udGVudEFuY2hvckVsLmNsaWVudEhlaWdodCAvIDIgLSBzY3JvbGxUb3AgfHwgMDtcbiAgICAgIH0gLy8gIT0gdGhlIGRlZmF1bHQgdmFsdWVcblxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYW5jaG9yT3JpZ2luLnZlcnRpY2FsICE9PSAndG9wJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogWW91IGNhbiBub3QgY2hhbmdlIHRoZSBkZWZhdWx0IGBhbmNob3JPcmlnaW4udmVydGljYWxgIHZhbHVlICcsICd3aGVuIGFsc28gcHJvdmlkaW5nIHRoZSBgZ2V0Q29udGVudEFuY2hvckVsYCBwcm9wIHRvIHRoZSBwb3BvdmVyIGNvbXBvbmVudC4nLCAnT25seSB1c2Ugb25lIG9mIHRoZSB0d28gcHJvcHMuJywgJ1NldCBgZ2V0Q29udGVudEFuY2hvckVsYCB0byBgbnVsbCB8IHVuZGVmaW5lZGAnICsgJyBvciBsZWF2ZSBgYW5jaG9yT3JpZ2luLnZlcnRpY2FsYCB1bmNoYW5nZWQuJ10uam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRBbmNob3JPZmZzZXQ7XG4gIH0sIFthbmNob3JPcmlnaW4udmVydGljYWwsIGFuY2hvclJlZmVyZW5jZSwgZ2V0Q29udGVudEFuY2hvckVsXSk7IC8vIFJldHVybiB0aGUgYmFzZSB0cmFuc2Zvcm0gb3JpZ2luIHVzaW5nIHRoZSBlbGVtZW50XG4gIC8vIGFuZCB0YWtpbmcgdGhlIGNvbnRlbnQgYW5jaG9yIG9mZnNldCBpbnRvIGFjY291bnQgaWYgaW4gdXNlXG5cbiAgdmFyIGdldFRyYW5zZm9ybU9yaWdpbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlbGVtUmVjdCkge1xuICAgIHZhciBjb250ZW50QW5jaG9yT2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJ0aWNhbDogZ2V0T2Zmc2V0VG9wKGVsZW1SZWN0LCB0cmFuc2Zvcm1PcmlnaW4udmVydGljYWwpICsgY29udGVudEFuY2hvck9mZnNldCxcbiAgICAgIGhvcml6b250YWw6IGdldE9mZnNldExlZnQoZWxlbVJlY3QsIHRyYW5zZm9ybU9yaWdpbi5ob3Jpem9udGFsKVxuICAgIH07XG4gIH0sIFt0cmFuc2Zvcm1PcmlnaW4uaG9yaXpvbnRhbCwgdHJhbnNmb3JtT3JpZ2luLnZlcnRpY2FsXSk7XG4gIHZhciBnZXRQb3NpdGlvbmluZ1N0eWxlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgcGFyZW50IGhhcyByZXF1ZXN0ZWQgYW5jaG9yaW5nIG9uIGFuIGlubmVyIGNvbnRlbnQgbm9kZVxuICAgIHZhciBjb250ZW50QW5jaG9yT2Zmc2V0ID0gZ2V0Q29udGVudEFuY2hvck9mZnNldChlbGVtZW50KTtcbiAgICB2YXIgZWxlbVJlY3QgPSB7XG4gICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB9OyAvLyBHZXQgdGhlIHRyYW5zZm9ybSBvcmlnaW4gcG9pbnQgb24gdGhlIGVsZW1lbnQgaXRzZWxmXG5cbiAgICB2YXIgZWxlbVRyYW5zZm9ybU9yaWdpbiA9IGdldFRyYW5zZm9ybU9yaWdpbihlbGVtUmVjdCwgY29udGVudEFuY2hvck9mZnNldCk7XG5cbiAgICBpZiAoYW5jaG9yUmVmZXJlbmNlID09PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogbnVsbCxcbiAgICAgICAgbGVmdDogbnVsbCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBnZXRUcmFuc2Zvcm1PcmlnaW5WYWx1ZShlbGVtVHJhbnNmb3JtT3JpZ2luKVxuICAgICAgfTtcbiAgICB9IC8vIEdldCB0aGUgb2Zmc2V0IG9mIG9mIHRoZSBhbmNob3JpbmcgZWxlbWVudFxuXG5cbiAgICB2YXIgYW5jaG9yT2Zmc2V0ID0gZ2V0QW5jaG9yT2Zmc2V0KGNvbnRlbnRBbmNob3JPZmZzZXQpOyAvLyBDYWxjdWxhdGUgZWxlbWVudCBwb3NpdGlvbmluZ1xuXG4gICAgdmFyIHRvcCA9IGFuY2hvck9mZnNldC50b3AgLSBlbGVtVHJhbnNmb3JtT3JpZ2luLnZlcnRpY2FsO1xuICAgIHZhciBsZWZ0ID0gYW5jaG9yT2Zmc2V0LmxlZnQgLSBlbGVtVHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWw7XG4gICAgdmFyIGJvdHRvbSA9IHRvcCArIGVsZW1SZWN0LmhlaWdodDtcbiAgICB2YXIgcmlnaHQgPSBsZWZ0ICsgZWxlbVJlY3Qud2lkdGg7IC8vIFVzZSB0aGUgcGFyZW50IHdpbmRvdyBvZiB0aGUgYW5jaG9yRWwgaWYgcHJvdmlkZWRcblxuICAgIHZhciBjb250YWluZXJXaW5kb3cgPSBvd25lcldpbmRvdyhnZXRBbmNob3JFbChhbmNob3JFbCkpOyAvLyBXaW5kb3cgdGhyZXNob2xkcyB0YWtpbmcgcmVxdWlyZWQgbWFyZ2luIGludG8gYWNjb3VudFxuXG4gICAgdmFyIGhlaWdodFRocmVzaG9sZCA9IGNvbnRhaW5lcldpbmRvdy5pbm5lckhlaWdodCAtIG1hcmdpblRocmVzaG9sZDtcbiAgICB2YXIgd2lkdGhUaHJlc2hvbGQgPSBjb250YWluZXJXaW5kb3cuaW5uZXJXaWR0aCAtIG1hcmdpblRocmVzaG9sZDsgLy8gQ2hlY2sgaWYgdGhlIHZlcnRpY2FsIGF4aXMgbmVlZHMgc2hpZnRpbmdcblxuICAgIGlmICh0b3AgPCBtYXJnaW5UaHJlc2hvbGQpIHtcbiAgICAgIHZhciBkaWZmID0gdG9wIC0gbWFyZ2luVGhyZXNob2xkO1xuICAgICAgdG9wIC09IGRpZmY7XG4gICAgICBlbGVtVHJhbnNmb3JtT3JpZ2luLnZlcnRpY2FsICs9IGRpZmY7XG4gICAgfSBlbHNlIGlmIChib3R0b20gPiBoZWlnaHRUaHJlc2hvbGQpIHtcbiAgICAgIHZhciBfZGlmZiA9IGJvdHRvbSAtIGhlaWdodFRocmVzaG9sZDtcblxuICAgICAgdG9wIC09IF9kaWZmO1xuICAgICAgZWxlbVRyYW5zZm9ybU9yaWdpbi52ZXJ0aWNhbCArPSBfZGlmZjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGVsZW1SZWN0LmhlaWdodCA+IGhlaWdodFRocmVzaG9sZCAmJiBlbGVtUmVjdC5oZWlnaHQgJiYgaGVpZ2h0VGhyZXNob2xkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIHBvcG92ZXIgY29tcG9uZW50IGlzIHRvbyB0YWxsLicsIFwiU29tZSBwYXJ0IG9mIGl0IGNhbiBub3QgYmUgc2VlbiBvbiB0aGUgc2NyZWVuIChcIi5jb25jYXQoZWxlbVJlY3QuaGVpZ2h0IC0gaGVpZ2h0VGhyZXNob2xkLCBcInB4KS5cIiksICdQbGVhc2UgY29uc2lkZXIgYWRkaW5nIGEgYG1heC1oZWlnaHRgIHRvIGltcHJvdmUgdGhlIHVzZXItZXhwZXJpZW5jZS4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfSAvLyBDaGVjayBpZiB0aGUgaG9yaXpvbnRhbCBheGlzIG5lZWRzIHNoaWZ0aW5nXG5cblxuICAgIGlmIChsZWZ0IDwgbWFyZ2luVGhyZXNob2xkKSB7XG4gICAgICB2YXIgX2RpZmYyID0gbGVmdCAtIG1hcmdpblRocmVzaG9sZDtcblxuICAgICAgbGVmdCAtPSBfZGlmZjI7XG4gICAgICBlbGVtVHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWwgKz0gX2RpZmYyO1xuICAgIH0gZWxzZSBpZiAocmlnaHQgPiB3aWR0aFRocmVzaG9sZCkge1xuICAgICAgdmFyIF9kaWZmMyA9IHJpZ2h0IC0gd2lkdGhUaHJlc2hvbGQ7XG5cbiAgICAgIGxlZnQgLT0gX2RpZmYzO1xuICAgICAgZWxlbVRyYW5zZm9ybU9yaWdpbi5ob3Jpem9udGFsICs9IF9kaWZmMztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKHRvcCksIFwicHhcIiksXG4gICAgICBsZWZ0OiBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKGxlZnQpLCBcInB4XCIpLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBnZXRUcmFuc2Zvcm1PcmlnaW5WYWx1ZShlbGVtVHJhbnNmb3JtT3JpZ2luKVxuICAgIH07XG4gIH0sIFthbmNob3JFbCwgYW5jaG9yUmVmZXJlbmNlLCBnZXRBbmNob3JPZmZzZXQsIGdldENvbnRlbnRBbmNob3JPZmZzZXQsIGdldFRyYW5zZm9ybU9yaWdpbiwgbWFyZ2luVGhyZXNob2xkXSk7XG4gIHZhciBzZXRQb3NpdGlvbmluZ1N0eWxlcyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudCA9IHBhcGVyUmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcG9zaXRpb25pbmcgPSBnZXRQb3NpdGlvbmluZ1N0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKHBvc2l0aW9uaW5nLnRvcCAhPT0gbnVsbCkge1xuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBwb3NpdGlvbmluZy50b3A7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uaW5nLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHBvc2l0aW9uaW5nLmxlZnQ7XG4gICAgfVxuXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBwb3NpdGlvbmluZy50cmFuc2Zvcm1PcmlnaW47XG4gIH0sIFtnZXRQb3NpdGlvbmluZ1N0eWxlXSk7XG5cbiAgdmFyIGhhbmRsZUVudGVyaW5nID0gZnVuY3Rpb24gaGFuZGxlRW50ZXJpbmcoZWxlbWVudCwgaXNBcHBlYXJpbmcpIHtcbiAgICBpZiAob25FbnRlcmluZykge1xuICAgICAgb25FbnRlcmluZyhlbGVtZW50LCBpc0FwcGVhcmluZyk7XG4gICAgfVxuXG4gICAgc2V0UG9zaXRpb25pbmdTdHlsZXMoKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlUGFwZXJSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAvLyAjU3RyaWN0TW9kZSByZWFkeVxuICAgIHBhcGVyUmVmLmN1cnJlbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZShpbnN0YW5jZSk7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgc2V0UG9zaXRpb25pbmdTdHlsZXMoKTtcbiAgICB9XG4gIH0pO1xuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKGFjdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBvcGVuID8ge1xuICAgICAgdXBkYXRlUG9zaXRpb246IGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICBzZXRQb3NpdGlvbmluZ1N0eWxlcygpO1xuICAgICAgfVxuICAgIH0gOiBudWxsO1xuICB9LCBbb3Blbiwgc2V0UG9zaXRpb25pbmdTdHlsZXNdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZVJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFBvc2l0aW9uaW5nU3R5bGVzKCk7XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVJlc2l6ZS5jbGVhcigpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW29wZW4sIHNldFBvc2l0aW9uaW5nU3R5bGVzXSk7XG4gIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb25Qcm9wO1xuXG4gIGlmICh0cmFuc2l0aW9uRHVyYXRpb25Qcm9wID09PSAnYXV0bycgJiYgIVRyYW5zaXRpb25Db21wb25lbnQubXVpU3VwcG9ydEF1dG8pIHtcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH0gLy8gSWYgdGhlIGNvbnRhaW5lciBwcm9wIGlzIHByb3ZpZGVkLCB1c2UgdGhhdFxuICAvLyBJZiB0aGUgYW5jaG9yRWwgcHJvcCBpcyBwcm92aWRlZCwgdXNlIGl0cyBwYXJlbnQgYm9keSBlbGVtZW50IGFzIHRoZSBjb250YWluZXJcbiAgLy8gSWYgbmVpdGhlciBhcmUgcHJvdmlkZWQgbGV0IHRoZSBNb2RhbCB0YWtlIGNhcmUgb2YgY2hvb3NpbmcgdGhlIGNvbnRhaW5lclxuXG5cbiAgdmFyIGNvbnRhaW5lciA9IGNvbnRhaW5lclByb3AgfHwgKGFuY2hvckVsID8gb3duZXJEb2N1bWVudChnZXRBbmNob3JFbChhbmNob3JFbCkpLmJvZHkgOiB1bmRlZmluZWQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIF9leHRlbmRzKHtcbiAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICBvcGVuOiBvcGVuLFxuICAgIHJlZjogcmVmLFxuICAgIEJhY2tkcm9wUHJvcHM6IHtcbiAgICAgIGludmlzaWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKVxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBhcHBlYXI6IHRydWUsXG4gICAgaW46IG9wZW4sXG4gICAgb25FbnRlcjogb25FbnRlcixcbiAgICBvbkVudGVyZWQ6IG9uRW50ZXJlZCxcbiAgICBvbkV4aXQ6IG9uRXhpdCxcbiAgICBvbkV4aXRlZDogb25FeGl0ZWQsXG4gICAgb25FeGl0aW5nOiBvbkV4aXRpbmcsXG4gICAgdGltZW91dDogdHJhbnNpdGlvbkR1cmF0aW9uXG4gIH0sIFRyYW5zaXRpb25Qcm9wcywge1xuICAgIG9uRW50ZXJpbmc6IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihoYW5kbGVFbnRlcmluZywgVHJhbnNpdGlvblByb3BzLm9uRW50ZXJpbmcpXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQYXBlciwgX2V4dGVuZHMoe1xuICAgIGVsZXZhdGlvbjogZWxldmF0aW9uLFxuICAgIHJlZjogaGFuZGxlUGFwZXJSZWZcbiAgfSwgUGFwZXJQcm9wcywge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnBhcGVyLCBQYXBlclByb3BzLmNsYXNzTmFtZSlcbiAgfSksIGNoaWxkcmVuKSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBQb3BvdmVyLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEEgcmVmIGZvciBpbXBlcmF0aXZlIGFjdGlvbnMuXG4gICAqIEl0IGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIHVwZGF0ZVBvc2l0aW9uKCkgYWN0aW9uLlxuICAgKi9cbiAgYWN0aW9uOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBBIEhUTUwgZWxlbWVudCwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgaXQuXG4gICAqIEl0J3MgdXNlZCB0byBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgYW5jaG9yRWw6IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5vbmVPZlR5cGUoW0hUTUxFbGVtZW50VHlwZSwgUHJvcFR5cGVzLmZ1bmNdKSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLm9wZW4gJiYgKCFwcm9wcy5hbmNob3JSZWZlcmVuY2UgfHwgcHJvcHMuYW5jaG9yUmVmZXJlbmNlID09PSAnYW5jaG9yRWwnKSkge1xuICAgICAgdmFyIHJlc29sdmVkQW5jaG9yRWwgPSBnZXRBbmNob3JFbChwcm9wcy5hbmNob3JFbCk7XG5cbiAgICAgIGlmIChyZXNvbHZlZEFuY2hvckVsICYmIHJlc29sdmVkQW5jaG9yRWwubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgdmFyIGJveCA9IHJlc29sdmVkQW5jaG9yRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgYm94LnRvcCA9PT0gMCAmJiBib3gubGVmdCA9PT0gMCAmJiBib3gucmlnaHQgPT09IDAgJiYgYm94LmJvdHRvbSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIGBhbmNob3JFbGAgcHJvcCBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50IGlzIGludmFsaWQuJywgJ1RoZSBhbmNob3IgZWxlbWVudCBzaG91bGQgYmUgcGFydCBvZiB0aGUgZG9jdW1lbnQgbGF5b3V0LicsIFwiTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIHByZXNlbnQgaW4gdGhlIGRvY3VtZW50IG9yIHRoYXQgaXQncyBub3QgZGlzcGxheSBub25lLlwiXS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIGBhbmNob3JFbGAgcHJvcCBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50IGlzIGludmFsaWQuJywgXCJJdCBzaG91bGQgYmUgYW4gRWxlbWVudCBpbnN0YW5jZSBidXQgaXQncyBgXCIuY29uY2F0KHJlc29sdmVkQW5jaG9yRWwsIFwiYCBpbnN0ZWFkLlwiKV0uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9KSxcblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcG9pbnQgb24gdGhlIGFuY2hvciB3aGVyZSB0aGUgcG9wb3ZlcidzXG4gICAqIGBhbmNob3JFbGAgd2lsbCBhdHRhY2ggdG8uIFRoaXMgaXMgbm90IHVzZWQgd2hlbiB0aGVcbiAgICogYW5jaG9yUmVmZXJlbmNlIGlzICdhbmNob3JQb3NpdGlvbicuXG4gICAqXG4gICAqIE9wdGlvbnM6XG4gICAqIHZlcnRpY2FsOiBbdG9wLCBjZW50ZXIsIGJvdHRvbV07XG4gICAqIGhvcml6b250YWw6IFtsZWZ0LCBjZW50ZXIsIHJpZ2h0XS5cbiAgICovXG4gIGFuY2hvck9yaWdpbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBob3Jpem9udGFsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydjZW50ZXInLCAnbGVmdCcsICdyaWdodCddKSwgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2JvdHRvbScsICdjZW50ZXInLCAndG9wJ10pLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZFxuICB9KSxcblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcG9zaXRpb24gdGhhdCBtYXkgYmUgdXNlZFxuICAgKiB0byBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyLlxuICAgKiBUaGUgY29vcmRpbmF0ZXMgYXJlIHJlbGF0aXZlIHRvXG4gICAqIHRoZSBhcHBsaWNhdGlvbidzIGNsaWVudCBhcmVhLlxuICAgKi9cbiAgYW5jaG9yUG9zaXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbGVmdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRvcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBUaGlzIGRldGVybWluZXMgd2hpY2ggYW5jaG9yIHByb3AgdG8gcmVmZXIgdG8gdG8gc2V0XG4gICAqIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGFuY2hvclJlZmVyZW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnYW5jaG9yRWwnLCAnYW5jaG9yUG9zaXRpb24nLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEEgSFRNTCBlbGVtZW50LCBjb21wb25lbnQgaW5zdGFuY2UsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuXG4gICAqIFRoZSBgY29udGFpbmVyYCB3aWxsIHBhc3NlZCB0byB0aGUgTW9kYWwgY29tcG9uZW50LlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBpdCB1c2VzIHRoZSBib2R5IG9mIHRoZSBhbmNob3JFbCdzIHRvcC1sZXZlbCBkb2N1bWVudCBvYmplY3QsXG4gICAqIHNvIGl0J3Mgc2ltcGx5IGBkb2N1bWVudC5ib2R5YCBtb3N0IG9mIHRoZSB0aW1lLlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAub25lT2ZUeXBlKFtIVE1MRWxlbWVudFR5cGUsIFByb3BUeXBlcy5pbnN0YW5jZU9mKFJlYWN0LkNvbXBvbmVudCksIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIFRoZSBlbGV2YXRpb24gb2YgdGhlIHBvcG92ZXIuXG4gICAqL1xuICBlbGV2YXRpb246IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGluIG9yZGVyIHRvIHJldHJpZXZlIHRoZSBjb250ZW50IGFuY2hvciBlbGVtZW50LlxuICAgKiBJdCdzIHRoZSBvcHBvc2l0ZSBvZiB0aGUgYGFuY2hvckVsYCBwcm9wLlxuICAgKiBUaGUgY29udGVudCBhbmNob3IgZWxlbWVudCBzaG91bGQgYmUgYW4gZWxlbWVudCBpbnNpZGUgdGhlIHBvcG92ZXIuXG4gICAqIEl0J3MgdXNlZCB0byBjb3JyZWN0bHkgc2Nyb2xsIGFuZCBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyLlxuICAgKiBUaGUgcG9zaXRpb25pbmcgc3RyYXRlZ3kgdHJpZXMgdG8gbWFrZSB0aGUgY29udGVudCBhbmNob3IgZWxlbWVudCBqdXN0IGFib3ZlIHRoZVxuICAgKiBhbmNob3IgZWxlbWVudC5cbiAgICovXG4gIGdldENvbnRlbnRBbmNob3JFbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyBob3cgY2xvc2UgdG8gdGhlIGVkZ2Ugb2YgdGhlIHdpbmRvdyB0aGUgcG9wb3ZlciBjYW4gYXBwZWFyLlxuICAgKi9cbiAgbWFyZ2luVGhyZXNob2xkOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGVudGVyaW5nLlxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgZW50ZXJlZC5cbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBlbnRlcmluZy5cbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBleGl0aW5nLlxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBleGl0ZWQuXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBleGl0aW5nLlxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgcG9wb3ZlciBpcyB2aXNpYmxlLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BQYXBlcmBdKC9hcGkvcGFwZXIvKSBlbGVtZW50LlxuICAgKi9cbiAgUGFwZXJQcm9wczogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLnNoYXBlKHtcbiAgICBjb21wb25lbnQ6IGVsZW1lbnRUeXBlQWNjZXB0aW5nUmVmXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwb2ludCBvbiB0aGUgcG9wb3ZlciB3aGljaFxuICAgKiB3aWxsIGF0dGFjaCB0byB0aGUgYW5jaG9yJ3Mgb3JpZ2luLlxuICAgKlxuICAgKiBPcHRpb25zOlxuICAgKiB2ZXJ0aWNhbDogW3RvcCwgY2VudGVyLCBib3R0b20sIHgocHgpXTtcbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIGNlbnRlciwgcmlnaHQsIHgocHgpXS5cbiAgICovXG4gIHRyYW5zZm9ybU9yaWdpbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBob3Jpem9udGFsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydjZW50ZXInLCAnbGVmdCcsICdyaWdodCddKSwgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2JvdHRvbScsICdjZW50ZXInLCAndG9wJ10pLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZFxuICB9KSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgdHJhbnNpdGlvbi5cbiAgICogW0ZvbGxvdyB0aGlzIGd1aWRlXSgvY29tcG9uZW50cy90cmFuc2l0aW9ucy8jdHJhbnNpdGlvbmNvbXBvbmVudC1wcm9wKSB0byBsZWFybiBtb3JlIGFib3V0IHRoZSByZXF1aXJlbWVudHMgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgVHJhbnNpdGlvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gJ2F1dG8nIHRvIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlIHRyYW5zaXRpb24gdGltZSBiYXNlZCBvbiBoZWlnaHQuXG4gICAqL1xuICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKSxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BUcmFuc2l0aW9uYF0oaHR0cDovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24jVHJhbnNpdGlvbi1wcm9wcykgZWxlbWVudC5cbiAgICovXG4gIFRyYW5zaXRpb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlQb3BvdmVyJ1xufSkoUG9wb3Zlcik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUG9wb3Zlcic7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1lcmdlQ2xhc3NlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IFNlbGVjdElucHV0IGZyb20gJy4vU2VsZWN0SW5wdXQnO1xuaW1wb3J0IGZvcm1Db250cm9sU3RhdGUgZnJvbSAnLi4vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZSc7XG5pbXBvcnQgdXNlRm9ybUNvbnRyb2wgZnJvbSAnLi4vRm9ybUNvbnRyb2wvdXNlRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEFycm93RHJvcERvd25JY29uIGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9BcnJvd0Ryb3BEb3duJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9JbnB1dCc7XG5pbXBvcnQgeyBzdHlsZXMgYXMgbmF0aXZlU2VsZWN0U3R5bGVzIH0gZnJvbSAnLi4vTmF0aXZlU2VsZWN0L05hdGl2ZVNlbGVjdCc7XG5pbXBvcnQgTmF0aXZlU2VsZWN0SW5wdXQgZnJvbSAnLi4vTmF0aXZlU2VsZWN0L05hdGl2ZVNlbGVjdElucHV0JztcbmltcG9ydCBGaWxsZWRJbnB1dCBmcm9tICcuLi9GaWxsZWRJbnB1dCc7XG5pbXBvcnQgT3V0bGluZWRJbnB1dCBmcm9tICcuLi9PdXRsaW5lZElucHV0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0gbmF0aXZlU2VsZWN0U3R5bGVzO1xuXG52YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBudWxsKTtcblxudmFyIF9yZWYyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsbGVkSW5wdXQsIG51bGwpO1xuXG52YXIgU2VsZWN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gU2VsZWN0KHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRhdXRvV2lkdGggPSBwcm9wcy5hdXRvV2lkdGgsXG4gICAgICBhdXRvV2lkdGggPSBfcHJvcHMkYXV0b1dpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvV2lkdGgsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkZGlzcGxheUVtcHR5ID0gcHJvcHMuZGlzcGxheUVtcHR5LFxuICAgICAgZGlzcGxheUVtcHR5ID0gX3Byb3BzJGRpc3BsYXlFbXB0eSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzcGxheUVtcHR5LFxuICAgICAgX3Byb3BzJEljb25Db21wb25lbnQgPSBwcm9wcy5JY29uQ29tcG9uZW50LFxuICAgICAgSWNvbkNvbXBvbmVudCA9IF9wcm9wcyRJY29uQ29tcG9uZW50ID09PSB2b2lkIDAgPyBBcnJvd0Ryb3BEb3duSWNvbiA6IF9wcm9wcyRJY29uQ29tcG9uZW50LFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIGlucHV0ID0gcHJvcHMuaW5wdXQsXG4gICAgICBpbnB1dFByb3BzID0gcHJvcHMuaW5wdXRQcm9wcyxcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbElkID0gcHJvcHMubGFiZWxJZCxcbiAgICAgIF9wcm9wcyRsYWJlbFdpZHRoID0gcHJvcHMubGFiZWxXaWR0aCxcbiAgICAgIGxhYmVsV2lkdGggPSBfcHJvcHMkbGFiZWxXaWR0aCA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRsYWJlbFdpZHRoLFxuICAgICAgTWVudVByb3BzID0gcHJvcHMuTWVudVByb3BzLFxuICAgICAgX3Byb3BzJG11bHRpcGxlID0gcHJvcHMubXVsdGlwbGUsXG4gICAgICBtdWx0aXBsZSA9IF9wcm9wcyRtdWx0aXBsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbXVsdGlwbGUsXG4gICAgICBfcHJvcHMkbmF0aXZlID0gcHJvcHMubmF0aXZlLFxuICAgICAgbmF0aXZlID0gX3Byb3BzJG5hdGl2ZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbmF0aXZlLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbk9wZW4gPSBwcm9wcy5vbk9wZW4sXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIHJlbmRlclZhbHVlID0gcHJvcHMucmVuZGVyVmFsdWUsXG4gICAgICBTZWxlY3REaXNwbGF5UHJvcHMgPSBwcm9wcy5TZWxlY3REaXNwbGF5UHJvcHMsXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50UHJvcHMgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3N0YW5kYXJkJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImF1dG9XaWR0aFwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImRpc3BsYXlFbXB0eVwiLCBcIkljb25Db21wb25lbnRcIiwgXCJpZFwiLCBcImlucHV0XCIsIFwiaW5wdXRQcm9wc1wiLCBcImxhYmVsXCIsIFwibGFiZWxJZFwiLCBcImxhYmVsV2lkdGhcIiwgXCJNZW51UHJvcHNcIiwgXCJtdWx0aXBsZVwiLCBcIm5hdGl2ZVwiLCBcIm9uQ2xvc2VcIiwgXCJvbk9wZW5cIiwgXCJvcGVuXCIsIFwicmVuZGVyVmFsdWVcIiwgXCJTZWxlY3REaXNwbGF5UHJvcHNcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgaW5wdXRDb21wb25lbnQgPSBuYXRpdmUgPyBOYXRpdmVTZWxlY3RJbnB1dCA6IFNlbGVjdElucHV0O1xuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuICB2YXIgZmNzID0gZm9ybUNvbnRyb2xTdGF0ZSh7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIG11aUZvcm1Db250cm9sOiBtdWlGb3JtQ29udHJvbCxcbiAgICBzdGF0ZXM6IFsndmFyaWFudCddXG4gIH0pO1xuICB2YXIgdmFyaWFudCA9IGZjcy52YXJpYW50IHx8IHZhcmlhbnRQcm9wcztcbiAgdmFyIElucHV0Q29tcG9uZW50ID0gaW5wdXQgfHwge1xuICAgIHN0YW5kYXJkOiBfcmVmLFxuICAgIG91dGxpbmVkOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChPdXRsaW5lZElucHV0LCB7XG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICBsYWJlbFdpZHRoOiBsYWJlbFdpZHRoXG4gICAgfSksXG4gICAgZmlsbGVkOiBfcmVmMlxuICB9W3ZhcmlhbnRdO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChJbnB1dENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIC8vIE1vc3Qgb2YgdGhlIGxvZ2ljIGlzIGltcGxlbWVudGVkIGluIGBTZWxlY3RJbnB1dGAuXG4gICAgLy8gVGhlIGBTZWxlY3RgIGNvbXBvbmVudCBpcyBhIHNpbXBsZSBBUEkgd3JhcHBlciB0byBleHBvc2Ugc29tZXRoaW5nIGJldHRlciB0byBwbGF5IHdpdGguXG4gICAgaW5wdXRDb21wb25lbnQ6IGlucHV0Q29tcG9uZW50LFxuICAgIGlucHV0UHJvcHM6IF9leHRlbmRzKHtcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgIEljb25Db21wb25lbnQ6IEljb25Db21wb25lbnQsXG4gICAgICB2YXJpYW50OiB2YXJpYW50LFxuICAgICAgdHlwZTogdW5kZWZpbmVkLFxuICAgICAgLy8gV2UgcmVuZGVyIGEgc2VsZWN0LiBXZSBjYW4gaWdub3JlIHRoZSB0eXBlIHByb3ZpZGVkIGJ5IHRoZSBgSW5wdXRgLlxuICAgICAgbXVsdGlwbGU6IG11bHRpcGxlXG4gICAgfSwgbmF0aXZlID8ge1xuICAgICAgaWQ6IGlkXG4gICAgfSA6IHtcbiAgICAgIGF1dG9XaWR0aDogYXV0b1dpZHRoLFxuICAgICAgZGlzcGxheUVtcHR5OiBkaXNwbGF5RW1wdHksXG4gICAgICBsYWJlbElkOiBsYWJlbElkLFxuICAgICAgTWVudVByb3BzOiBNZW51UHJvcHMsXG4gICAgICBvbkNsb3NlOiBvbkNsb3NlLFxuICAgICAgb25PcGVuOiBvbk9wZW4sXG4gICAgICBvcGVuOiBvcGVuLFxuICAgICAgcmVuZGVyVmFsdWU6IHJlbmRlclZhbHVlLFxuICAgICAgU2VsZWN0RGlzcGxheVByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICAgIGlkOiBpZFxuICAgICAgfSwgU2VsZWN0RGlzcGxheVByb3BzKVxuICAgIH0sIGlucHV0UHJvcHMsIHtcbiAgICAgIGNsYXNzZXM6IGlucHV0UHJvcHMgPyBtZXJnZUNsYXNzZXMoe1xuICAgICAgICBiYXNlQ2xhc3NlczogY2xhc3NlcyxcbiAgICAgICAgbmV3Q2xhc3NlczogaW5wdXRQcm9wcy5jbGFzc2VzLFxuICAgICAgICBDb21wb25lbnQ6IFNlbGVjdFxuICAgICAgfSkgOiBjbGFzc2VzXG4gICAgfSwgaW5wdXQgPyBpbnB1dC5wcm9wcy5pbnB1dFByb3BzIDoge30pLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB3aWR0aCBvZiB0aGUgcG9wb3ZlciB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgc2V0IGFjY29yZGluZyB0byB0aGUgaXRlbXMgaW5zaWRlIHRoZVxuICAgKiBtZW51LCBvdGhlcndpc2UgaXQgd2lsbCBiZSBhdCBsZWFzdCB0aGUgd2lkdGggb2YgdGhlIHNlbGVjdCBpbnB1dC5cbiAgICovXG4gIGF1dG9XaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb24gZWxlbWVudHMgdG8gcG9wdWxhdGUgdGhlIHNlbGVjdCB3aXRoLlxuICAgKiBDYW4gYmUgc29tZSBgTWVudUl0ZW1gIHdoZW4gYG5hdGl2ZWAgaXMgZmFsc2UgYW5kIGBvcHRpb25gIHdoZW4gYG5hdGl2ZWAgaXMgdHJ1ZS5cbiAgICpcbiAgICog4pqg77iPVGhlIGBNZW51SXRlbWAgZWxlbWVudHMgKiptdXN0KiogYmUgZGlyZWN0IGRlc2NlbmRhbnRzIHdoZW4gYG5hdGl2ZWAgaXMgZmFsc2UuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgZWxlbWVudCB2YWx1ZS4gVXNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBub3QgY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHZhbHVlIGlzIGRpc3BsYXllZCBldmVuIGlmIG5vIGl0ZW1zIGFyZSBzZWxlY3RlZC5cbiAgICpcbiAgICogSW4gb3JkZXIgdG8gZGlzcGxheSBhIG1lYW5pbmdmdWwgdmFsdWUsIGEgZnVuY3Rpb24gc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgYHJlbmRlclZhbHVlYCBwcm9wIHdoaWNoIHJldHVybnMgdGhlIHZhbHVlIHRvIGJlIGRpc3BsYXllZCB3aGVuIG5vIGl0ZW1zIGFyZSBzZWxlY3RlZC5cbiAgICogWW91IGNhbiBvbmx5IHVzZSBpdCB3aGVuIHRoZSBgbmF0aXZlYCBwcm9wIGlzIGBmYWxzZWAgKGRlZmF1bHQpLlxuICAgKi9cbiAgZGlzcGxheUVtcHR5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGljb24gdGhhdCBkaXNwbGF5cyB0aGUgYXJyb3cuXG4gICAqL1xuICBJY29uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBgaWRgIG9mIHRoZSB3cmFwcGVyIGVsZW1lbnQgb3IgdGhlIGBzZWxlY3RgIGVsZW1lbnQgd2hlbiBgbmF0aXZlYC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBbiBgSW5wdXRgIGVsZW1lbnQ7IGRvZXMgbm90IGhhdmUgdG8gYmUgYSBtYXRlcmlhbC11aSBzcGVjaWZpYyBgSW5wdXRgLlxuICAgKi9cbiAgaW5wdXQ6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC8qKlxuICAgKiBbQXR0cmlidXRlc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0F0dHJpYnV0ZXMpIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogV2hlbiBgbmF0aXZlYCBpcyBgdHJ1ZWAsIHRoZSBhdHRyaWJ1dGVzIGFyZSBhcHBsaWVkIG9uIHRoZSBgc2VsZWN0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogU2VlIFtPdXRsaW5lZElucHV0I2xhYmVsXSgvYXBpL291dGxpbmVkLWlucHV0LyNwcm9wcylcbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIElEIG9mIGFuIGVsZW1lbnQgdGhhdCBhY3RzIGFzIGFuIGFkZGl0aW9uYWwgbGFiZWwuIFRoZSBTZWxlY3Qgd2lsbFxuICAgKiBiZSBsYWJlbGxlZCBieSB0aGUgYWRkaXRpb25hbCBsYWJlbCBhbmQgdGhlIHNlbGVjdGVkIHZhbHVlLlxuICAgKi9cbiAgbGFiZWxJZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogU2VlIFtPdXRsaW5lZElucHV0I2xhYmVsXSgvYXBpL291dGxpbmVkLWlucHV0LyNwcm9wcylcbiAgICovXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgTWVudWBdKC9hcGkvbWVudS8pIGVsZW1lbnQuXG4gICAqL1xuICBNZW51UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYHZhbHVlYCBtdXN0IGJlIGFuIGFycmF5IGFuZCB0aGUgbWVudSB3aWxsIHN1cHBvcnQgbXVsdGlwbGUgc2VsZWN0aW9ucy5cbiAgICovXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IHdpbGwgYmUgdXNpbmcgYSBuYXRpdmUgYHNlbGVjdGAgZWxlbWVudC5cbiAgICovXG4gIG5hdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoYW55KS5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtjaGlsZF0gVGhlIHJlYWN0IGVsZW1lbnQgdGhhdCB3YXMgc2VsZWN0ZWQgd2hlbiBgbmF0aXZlYCBpcyBgZmFsc2VgIChkZWZhdWx0KS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIG9wZW5lZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqL1xuICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDb250cm9sIGBzZWxlY3RgIG9wZW4gc3RhdGUuXG4gICAqIFlvdSBjYW4gb25seSB1c2UgaXQgd2hlbiB0aGUgYG5hdGl2ZWAgcHJvcCBpcyBgZmFsc2VgIChkZWZhdWx0KS5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIHNlbGVjdGVkIHZhbHVlLlxuICAgKiBZb3UgY2FuIG9ubHkgdXNlIGl0IHdoZW4gdGhlIGBuYXRpdmVgIHByb3AgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgYHZhbHVlYCBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBAcmV0dXJucyB7UmVhY3ROb2RlfVxuICAgKi9cbiAgcmVuZGVyVmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBjbGlja2FibGUgZGl2IGVsZW1lbnQuXG4gICAqL1xuICBTZWxlY3REaXNwbGF5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCB2YWx1ZS4gUHJvdmlkaW5nIGFuIGVtcHR5IHN0cmluZyB3aWxsIHNlbGVjdCBubyBvcHRpb25zLlxuICAgKiBUaGlzIHByb3AgaXMgcmVxdWlyZWQgd2hlbiB0aGUgYG5hdGl2ZWAgcHJvcCBpcyBgZmFsc2VgIChkZWZhdWx0KS5cbiAgICogU2V0IHRvIGFuIGVtcHR5IHN0cmluZyBgJydgIGlmIHlvdSBkb24ndCB3YW50IGFueSBvZiB0aGUgYXZhaWxhYmxlIG9wdGlvbnMgdG8gYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIElmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QgaXQgbXVzdCBoYXZlIHJlZmVyZW5jZSBlcXVhbGl0eSB3aXRoIHRoZSBvcHRpb24gaW4gb3JkZXIgdG8gYmUgc2VsZWN0ZWQuXG4gICAqIElmIHRoZSB2YWx1ZSBpcyBub3QgYW4gb2JqZWN0LCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG11c3QgbWF0Y2ggd2l0aCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvcHRpb24gaW4gb3JkZXIgdG8gYmUgc2VsZWN0ZWQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuU2VsZWN0Lm11aU5hbWUgPSAnU2VsZWN0JztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlTZWxlY3QnXG59KShTZWxlY3QpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0ZyYWdtZW50IH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCB7IHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudS9NZW51JztcbmltcG9ydCB7IGlzRmlsbGVkIH0gZnJvbSAnLi4vSW5wdXRCYXNlL3V0aWxzJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuaW1wb3J0IHVzZUNvbnRyb2xsZWQgZnJvbSAnLi4vdXRpbHMvdXNlQ29udHJvbGxlZCc7XG5cbmZ1bmN0aW9uIGFyZUVxdWFsVmFsdWVzKGEsIGIpIHtcbiAgaWYgKF90eXBlb2YoYikgPT09ICdvYmplY3QnICYmIGIgIT09IG51bGwpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eShkaXNwbGF5KSB7XG4gIHJldHVybiBkaXNwbGF5ID09IG51bGwgfHwgdHlwZW9mIGRpc3BsYXkgPT09ICdzdHJpbmcnICYmICFkaXNwbGF5LnRyaW0oKTtcbn1cbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG5cbnZhciBTZWxlY3RJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFNlbGVjdElucHV0KHByb3BzLCByZWYpIHtcbiAgdmFyIGFyaWFMYWJlbCA9IHByb3BzWydhcmlhLWxhYmVsJ10sXG4gICAgICBhdXRvRm9jdXMgPSBwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBhdXRvV2lkdGggPSBwcm9wcy5hdXRvV2lkdGgsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzcGxheUVtcHR5ID0gcHJvcHMuZGlzcGxheUVtcHR5LFxuICAgICAgSWNvbkNvbXBvbmVudCA9IHByb3BzLkljb25Db21wb25lbnQsXG4gICAgICBpbnB1dFJlZlByb3AgPSBwcm9wcy5pbnB1dFJlZixcbiAgICAgIGxhYmVsSWQgPSBwcm9wcy5sYWJlbElkLFxuICAgICAgX3Byb3BzJE1lbnVQcm9wcyA9IHByb3BzLk1lbnVQcm9wcyxcbiAgICAgIE1lbnVQcm9wcyA9IF9wcm9wcyRNZW51UHJvcHMgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJE1lbnVQcm9wcyxcbiAgICAgIG11bHRpcGxlID0gcHJvcHMubXVsdGlwbGUsXG4gICAgICBuYW1lID0gcHJvcHMubmFtZSxcbiAgICAgIG9uQmx1ciA9IHByb3BzLm9uQmx1cixcbiAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbkNsb3NlID0gcHJvcHMub25DbG9zZSxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgb25PcGVuID0gcHJvcHMub25PcGVuLFxuICAgICAgb3BlblByb3AgPSBwcm9wcy5vcGVuLFxuICAgICAgcmVhZE9ubHkgPSBwcm9wcy5yZWFkT25seSxcbiAgICAgIHJlbmRlclZhbHVlID0gcHJvcHMucmVuZGVyVmFsdWUsXG4gICAgICBfcHJvcHMkU2VsZWN0RGlzcGxheVAgPSBwcm9wcy5TZWxlY3REaXNwbGF5UHJvcHMsXG4gICAgICBTZWxlY3REaXNwbGF5UHJvcHMgPSBfcHJvcHMkU2VsZWN0RGlzcGxheVAgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJFNlbGVjdERpc3BsYXlQLFxuICAgICAgdGFiSW5kZXhQcm9wID0gcHJvcHMudGFiSW5kZXgsXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIHZhbHVlUHJvcCA9IHByb3BzLnZhbHVlLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYXJpYS1sYWJlbFwiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9XaWR0aFwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRlZmF1bHRWYWx1ZVwiLCBcImRpc2FibGVkXCIsIFwiZGlzcGxheUVtcHR5XCIsIFwiSWNvbkNvbXBvbmVudFwiLCBcImlucHV0UmVmXCIsIFwibGFiZWxJZFwiLCBcIk1lbnVQcm9wc1wiLCBcIm11bHRpcGxlXCIsIFwibmFtZVwiLCBcIm9uQmx1clwiLCBcIm9uQ2hhbmdlXCIsIFwib25DbG9zZVwiLCBcIm9uRm9jdXNcIiwgXCJvbk9wZW5cIiwgXCJvcGVuXCIsIFwicmVhZE9ubHlcIiwgXCJyZW5kZXJWYWx1ZVwiLCBcIlNlbGVjdERpc3BsYXlQcm9wc1wiLCBcInRhYkluZGV4XCIsIFwidHlwZVwiLCBcInZhbHVlXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIF91c2VDb250cm9sbGVkID0gdXNlQ29udHJvbGxlZCh7XG4gICAgY29udHJvbGxlZDogdmFsdWVQcm9wLFxuICAgIGRlZmF1bHQ6IGRlZmF1bHRWYWx1ZSxcbiAgICBuYW1lOiAnU2VsZWN0J1xuICB9KSxcbiAgICAgIF91c2VDb250cm9sbGVkMiA9IF9zbGljZWRUb0FycmF5KF91c2VDb250cm9sbGVkLCAyKSxcbiAgICAgIHZhbHVlID0gX3VzZUNvbnRyb2xsZWQyWzBdLFxuICAgICAgc2V0VmFsdWUgPSBfdXNlQ29udHJvbGxlZDJbMV07XG5cbiAgdmFyIGlucHV0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShudWxsKSxcbiAgICAgIGRpc3BsYXlOb2RlID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0RGlzcGxheU5vZGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VSZWYgPSBSZWFjdC51c2VSZWYob3BlblByb3AgIT0gbnVsbCksXG4gICAgICBpc09wZW5Db250cm9sbGVkID0gX1JlYWN0JHVzZVJlZi5jdXJyZW50O1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoKSxcbiAgICAgIG1lbnVNaW5XaWR0aFN0YXRlID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldE1lbnVNaW5XaWR0aFN0YXRlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMyA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIG9wZW5TdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTNbMF0sXG4gICAgICBzZXRPcGVuU3RhdGUgPSBfUmVhY3QkdXNlU3RhdGUzWzFdO1xuXG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKHJlZiwgaW5wdXRSZWZQcm9wKTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShoYW5kbGVSZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9jdXM6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgICBkaXNwbGF5Tm9kZS5mb2N1cygpO1xuICAgICAgfSxcbiAgICAgIG5vZGU6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICB9LCBbZGlzcGxheU5vZGUsIHZhbHVlXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGF1dG9Gb2N1cyAmJiBkaXNwbGF5Tm9kZSkge1xuICAgICAgZGlzcGxheU5vZGUuZm9jdXMoKTtcbiAgICB9XG4gIH0sIFthdXRvRm9jdXMsIGRpc3BsYXlOb2RlXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRpc3BsYXlOb2RlKSB7XG4gICAgICB2YXIgbGFiZWwgPSBvd25lckRvY3VtZW50KGRpc3BsYXlOb2RlKS5nZXRFbGVtZW50QnlJZChsYWJlbElkKTtcblxuICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICBpZiAoZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlOb2RlLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGFiZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LCBbbGFiZWxJZCwgZGlzcGxheU5vZGVdKTtcblxuICB2YXIgdXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKG9wZW4sIGV2ZW50KSB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIGlmIChvbk9wZW4pIHtcbiAgICAgICAgb25PcGVuKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9uQ2xvc2UpIHtcbiAgICAgIG9uQ2xvc2UoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmICghaXNPcGVuQ29udHJvbGxlZCkge1xuICAgICAgc2V0TWVudU1pbldpZHRoU3RhdGUoYXV0b1dpZHRoID8gbnVsbCA6IGRpc3BsYXlOb2RlLmNsaWVudFdpZHRoKTtcbiAgICAgIHNldE9wZW5TdGF0ZShvcGVuKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgIC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0LWNsaWNrXG4gICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSGlqYWNrIHRoZSBkZWZhdWx0IGZvY3VzIGJlaGF2aW9yLlxuXG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpc3BsYXlOb2RlLmZvY3VzKCk7XG4gICAgdXBkYXRlKHRydWUsIGV2ZW50KTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiBoYW5kbGVDbG9zZShldmVudCkge1xuICAgIHVwZGF0ZShmYWxzZSwgZXZlbnQpO1xuICB9O1xuXG4gIHZhciBjaGlsZHJlbkFycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7IC8vIFN1cHBvcnQgYXV0b2ZpbGwuXG5cbiAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHZhciBpbmRleCA9IGNoaWxkcmVuQXJyYXkubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnByb3BzLnZhbHVlO1xuICAgIH0pLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbkFycmF5W2luZGV4XTtcbiAgICBzZXRWYWx1ZShjaGlsZC5wcm9wcy52YWx1ZSk7XG5cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKGV2ZW50LCBjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVJdGVtQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVJdGVtQ2xpY2soY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICAgIHVwZGF0ZShmYWxzZSwgZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3VmFsdWU7XG5cbiAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICBuZXdWYWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuc2xpY2UoKSA6IFtdO1xuICAgICAgICB2YXIgaXRlbUluZGV4ID0gdmFsdWUuaW5kZXhPZihjaGlsZC5wcm9wcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGl0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBuZXdWYWx1ZS5wdXNoKGNoaWxkLnByb3BzLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZS5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjaGlsZC5wcm9wcy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG5cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBldmVudC5wZXJzaXN0KCk7IC8vIFByZWFjdCBzdXBwb3J0LCB0YXJnZXQgaXMgcmVhZCBvbmx5IHByb3BlcnR5IG9uIGEgbmF0aXZlIGV2ZW50LlxuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ3RhcmdldCcsIHtcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoIXJlYWRPbmx5KSB7XG4gICAgICB2YXIgdmFsaWRLZXlzID0gWycgJywgJ0Fycm93VXAnLCAnQXJyb3dEb3duJywgLy8gVGhlIG5hdGl2ZSBzZWxlY3QgZG9lc24ndCByZXNwb25kIHRvIGVudGVyIG9uIE1hY09TLCBidXQgaXQncyByZWNvbW1lbmRlZCBieVxuICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy9leGFtcGxlcy9saXN0Ym94L2xpc3Rib3gtY29sbGFwc2libGUuaHRtbFxuICAgICAgJ0VudGVyJ107XG5cbiAgICAgIGlmICh2YWxpZEtleXMuaW5kZXhPZihldmVudC5rZXkpICE9PSAtMSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB1cGRhdGUodHJ1ZSwgZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgb3BlbiA9IGRpc3BsYXlOb2RlICE9PSBudWxsICYmIChpc09wZW5Db250cm9sbGVkID8gb3BlblByb3AgOiBvcGVuU3RhdGUpO1xuXG4gIHZhciBoYW5kbGVCbHVyID0gZnVuY3Rpb24gaGFuZGxlQmx1cihldmVudCkge1xuICAgIC8vIGlmIG9wZW4gZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXG4gICAgaWYgKCFvcGVuICYmIG9uQmx1cikge1xuICAgICAgZXZlbnQucGVyc2lzdCgpOyAvLyBQcmVhY3Qgc3VwcG9ydCwgdGFyZ2V0IGlzIHJlYWQgb25seSBwcm9wZXJ0eSBvbiBhIG5hdGl2ZSBldmVudC5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAndGFyZ2V0Jywge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG9uQmx1cihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZSBvdGhlclsnYXJpYS1pbnZhbGlkJ107XG4gIHZhciBkaXNwbGF5O1xuICB2YXIgZGlzcGxheVNpbmdsZTtcbiAgdmFyIGRpc3BsYXlNdWx0aXBsZSA9IFtdO1xuICB2YXIgY29tcHV0ZURpc3BsYXkgPSBmYWxzZTtcbiAgdmFyIGZvdW5kTWF0Y2ggPSBmYWxzZTsgLy8gTm8gbmVlZCB0byBkaXNwbGF5IGFueSB2YWx1ZSBpZiB0aGUgZmllbGQgaXMgZW1wdHkuXG5cbiAgaWYgKGlzRmlsbGVkKHtcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSkgfHwgZGlzcGxheUVtcHR5KSB7XG4gICAgaWYgKHJlbmRlclZhbHVlKSB7XG4gICAgICBkaXNwbGF5ID0gcmVuZGVyVmFsdWUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wdXRlRGlzcGxheSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGl0ZW1zID0gY2hpbGRyZW5BcnJheS5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgU2VsZWN0IGNvbXBvbmVudCBkb2Vzbid0IGFjY2VwdCBhIEZyYWdtZW50IGFzIGEgY2hpbGQuXCIsICdDb25zaWRlciBwcm92aWRpbmcgYW4gYXJyYXkgaW5zdGVhZC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNlbGVjdGVkO1xuXG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBUaGUgYHZhbHVlYCBwcm9wIG11c3QgYmUgYW4gYXJyYXkgd2hlbiB1c2luZyB0aGUgYFNlbGVjdGAgY29tcG9uZW50IHdpdGggYG11bHRpcGxlYC5cIiA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMikpO1xuICAgICAgfVxuXG4gICAgICBzZWxlY3RlZCA9IHZhbHVlLnNvbWUoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIGFyZUVxdWFsVmFsdWVzKHYsIGNoaWxkLnByb3BzLnZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgY29tcHV0ZURpc3BsYXkpIHtcbiAgICAgICAgZGlzcGxheU11bHRpcGxlLnB1c2goY2hpbGQucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZCA9IGFyZUVxdWFsVmFsdWVzKHZhbHVlLCBjaGlsZC5wcm9wcy52YWx1ZSk7XG5cbiAgICAgIGlmIChzZWxlY3RlZCAmJiBjb21wdXRlRGlzcGxheSkge1xuICAgICAgICBkaXNwbGF5U2luZ2xlID0gY2hpbGQucHJvcHMuY2hpbGRyZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBmb3VuZE1hdGNoID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBzZWxlY3RlZCA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUl0ZW1DbGljayhjaGlsZCksXG4gICAgICBvbktleVVwOiBmdW5jdGlvbiBvbktleVVwKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICcgJykge1xuICAgICAgICAgIC8vIG90aGVyd2lzZSBvdXIgTWVudUl0ZW1zIGRpc3BhdGNoZXMgYSBjbGljayBldmVudFxuICAgICAgICAgIC8vIGl0J3Mgbm90IGJlaGF2aW9yIG9mIHRoZSBuYXRpdmUgPG9wdGlvbj4gYW5kIGNhdXNlc1xuICAgICAgICAgIC8vIHRoZSBzZWxlY3QgdG8gY2xvc2UgaW1tZWRpYXRlbHkgc2luY2Ugd2Ugb3BlbiBvbiBzcGFjZSBrZXlkb3duXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5wcm9wcy5vbktleVVwKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25LZXlVcChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZCxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAvLyBUaGUgdmFsdWUgaXMgbW9zdCBsaWtlbHkgbm90IGEgdmFsaWQgSFRNTCBhdHRyaWJ1dGUuXG4gICAgICAnZGF0YS12YWx1ZSc6IGNoaWxkLnByb3BzLnZhbHVlIC8vIEluc3RlYWQsIHdlIHByb3ZpZGUgaXQgYXMgYSBkYXRhIGF0dHJpYnV0ZS5cblxuICAgIH0pO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWZvdW5kTWF0Y2ggJiYgIW11bHRpcGxlICYmIHZhbHVlICE9PSAnJykge1xuICAgICAgICB2YXIgdmFsdWVzID0gY2hpbGRyZW5BcnJheS5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkLnByb3BzLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS53YXJuKFtcIk1hdGVyaWFsLVVJOiBZb3UgaGF2ZSBwcm92aWRlZCBhbiBvdXQtb2YtcmFuZ2UgdmFsdWUgYFwiLmNvbmNhdCh2YWx1ZSwgXCJgIGZvciB0aGUgc2VsZWN0IFwiKS5jb25jYXQobmFtZSA/IFwiKG5hbWU9XFxcIlwiLmNvbmNhdChuYW1lLCBcIlxcXCIpIFwiKSA6ICcnLCBcImNvbXBvbmVudC5cIiksIFwiQ29uc2lkZXIgcHJvdmlkaW5nIGEgdmFsdWUgdGhhdCBtYXRjaGVzIG9uZSBvZiB0aGUgYXZhaWxhYmxlIG9wdGlvbnMgb3IgJycuXCIsIFwiVGhlIGF2YWlsYWJsZSB2YWx1ZXMgYXJlIFwiLmNvbmNhdCh2YWx1ZXMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIHggIT0gbnVsbDtcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIFwiYFwiLmNvbmNhdCh4LCBcImBcIik7XG4gICAgICAgIH0pLmpvaW4oJywgJykgfHwgJ1wiXCInLCBcIi5cIildLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9LCBbZm91bmRNYXRjaCwgY2hpbGRyZW5BcnJheSwgbXVsdGlwbGUsIG5hbWUsIHZhbHVlXSk7XG4gIH1cblxuICBpZiAoY29tcHV0ZURpc3BsYXkpIHtcbiAgICBkaXNwbGF5ID0gbXVsdGlwbGUgPyBkaXNwbGF5TXVsdGlwbGUuam9pbignLCAnKSA6IGRpc3BsYXlTaW5nbGU7XG4gIH0gLy8gQXZvaWQgcGVyZm9ybWluZyBhIGxheW91dCBjb21wdXRhdGlvbiBpbiB0aGUgcmVuZGVyIG1ldGhvZC5cblxuXG4gIHZhciBtZW51TWluV2lkdGggPSBtZW51TWluV2lkdGhTdGF0ZTtcblxuICBpZiAoIWF1dG9XaWR0aCAmJiBpc09wZW5Db250cm9sbGVkICYmIGRpc3BsYXlOb2RlKSB7XG4gICAgbWVudU1pbldpZHRoID0gZGlzcGxheU5vZGUuY2xpZW50V2lkdGg7XG4gIH1cblxuICB2YXIgdGFiSW5kZXg7XG5cbiAgaWYgKHR5cGVvZiB0YWJJbmRleFByb3AgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGFiSW5kZXggPSB0YWJJbmRleFByb3A7XG4gIH0gZWxzZSB7XG4gICAgdGFiSW5kZXggPSBkaXNhYmxlZCA/IG51bGwgOiAwO1xuICB9XG5cbiAgdmFyIGJ1dHRvbklkID0gU2VsZWN0RGlzcGxheVByb3BzLmlkIHx8IChuYW1lID8gXCJtdWktY29tcG9uZW50LXNlbGVjdC1cIi5jb25jYXQobmFtZSkgOiB1bmRlZmluZWQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCAvLyBUT0RPIHY1OiBtZXJnZSByb290IGFuZCBzZWxlY3RcbiAgICBjbGFzc2VzLnNlbGVjdCwgY2xhc3Nlcy5zZWxlY3RNZW51LCBjbGFzc2VzW3ZhcmlhbnRdLCBjbGFzc05hbWUsIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQpLFxuICAgIHJlZjogc2V0RGlzcGxheU5vZGUsXG4gICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogdW5kZWZpbmVkLFxuICAgIFwiYXJpYS1leHBhbmRlZFwiOiBvcGVuID8gJ3RydWUnIDogdW5kZWZpbmVkLFxuICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcImxpc3Rib3hcIixcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLFxuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFtsYWJlbElkLCBidXR0b25JZF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKSB8fCB1bmRlZmluZWQsXG4gICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgIG9uTW91c2VEb3duOiBkaXNhYmxlZCB8fCByZWFkT25seSA/IG51bGwgOiBoYW5kbGVNb3VzZURvd24sXG4gICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgIG9uRm9jdXM6IG9uRm9jdXNcbiAgfSwgU2VsZWN0RGlzcGxheVByb3BzLCB7XG4gICAgLy8gVGhlIGlkIGlzIHJlcXVpcmVkIGZvciBwcm9wZXIgYTExeVxuICAgIGlkOiBidXR0b25JZFxuICB9KSwgaXNFbXB0eShkaXNwbGF5KSA/XG4gIC8qI19fUFVSRV9fKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogJyYjODIwMzsnXG4gICAgfVxuICB9KSA6IGRpc3BsYXkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIF9leHRlbmRzKHtcbiAgICB2YWx1ZTogQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsJykgOiB2YWx1ZSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHJlZjogaW5wdXRSZWYsXG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgdGFiSW5kZXg6IC0xLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5uYXRpdmVJbnB1dCxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1c1xuICB9LCBvdGhlcikpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQ29tcG9uZW50LCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuaWNvbiwgY2xhc3Nlc1tcImljb25cIi5jb25jYXQoY2FwaXRhbGl6ZSh2YXJpYW50KSldLCBvcGVuICYmIGNsYXNzZXMuaWNvbk9wZW4sIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQpXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCBfZXh0ZW5kcyh7XG4gICAgaWQ6IFwibWVudS1cIi5jb25jYXQobmFtZSB8fCAnJyksXG4gICAgYW5jaG9yRWw6IGRpc3BsYXlOb2RlLFxuICAgIG9wZW46IG9wZW4sXG4gICAgb25DbG9zZTogaGFuZGxlQ2xvc2VcbiAgfSwgTWVudVByb3BzLCB7XG4gICAgTWVudUxpc3RQcm9wczogX2V4dGVuZHMoe1xuICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsSWQsXG4gICAgICByb2xlOiAnbGlzdGJveCcsXG4gICAgICBkaXNhYmxlTGlzdFdyYXA6IHRydWVcbiAgICB9LCBNZW51UHJvcHMuTWVudUxpc3RQcm9wcyksXG4gICAgUGFwZXJQcm9wczogX2V4dGVuZHMoe30sIE1lbnVQcm9wcy5QYXBlclByb3BzLCB7XG4gICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICBtaW5XaWR0aDogbWVudU1pbldpZHRoXG4gICAgICB9LCBNZW51UHJvcHMuUGFwZXJQcm9wcyAhPSBudWxsID8gTWVudVByb3BzLlBhcGVyUHJvcHMuc3R5bGUgOiBudWxsKVxuICAgIH0pXG4gIH0pLCBpdGVtcykpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTZWxlY3RJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHdpZHRoIG9mIHRoZSBwb3BvdmVyIHdpbGwgYXV0b21hdGljYWxseSBiZSBzZXQgYWNjb3JkaW5nIHRvIHRoZSBpdGVtcyBpbnNpZGUgdGhlXG4gICAqIG1lbnUsIG90aGVyd2lzZSBpdCB3aWxsIGJlIGF0IGxlYXN0IHRoZSB3aWR0aCBvZiB0aGUgc2VsZWN0IGlucHV0LlxuICAgKi9cbiAgYXV0b1dpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIG9wdGlvbiBlbGVtZW50cyB0byBwb3B1bGF0ZSB0aGUgc2VsZWN0IHdpdGguXG4gICAqIENhbiBiZSBzb21lIGA8TWVudUl0ZW0+YCBlbGVtZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGVsZW1lbnQgdmFsdWUuIFVzZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbm90IGNvbnRyb2xsZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHNlbGVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBzZWxlY3RlZCBpdGVtIGlzIGRpc3BsYXllZCBldmVuIGlmIGl0cyB2YWx1ZSBpcyBlbXB0eS5cbiAgICovXG4gIGRpc3BsYXlFbXB0eTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRoYXQgZGlzcGxheXMgdGhlIGFycm93LlxuICAgKi9cbiAgSWNvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEltcGVyYXRpdmUgaGFuZGxlIGltcGxlbWVudGluZyBgeyB2YWx1ZTogVCwgbm9kZTogSFRNTEVsZW1lbnQsIGZvY3VzKCk6IHZvaWQgfWBcbiAgICogRXF1aXZhbGVudCB0byBgcmVmYFxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBJRCBvZiBhbiBlbGVtZW50IHRoYXQgYWN0cyBhcyBhbiBhZGRpdGlvbmFsIGxhYmVsLiBUaGUgU2VsZWN0IHdpbGxcbiAgICogYmUgbGFiZWxsZWQgYnkgdGhlIGFkZGl0aW9uYWwgbGFiZWwgYW5kIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICovXG4gIGxhYmVsSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgTWVudWBdKC9hcGkvbWVudS8pIGVsZW1lbnQuXG4gICAqL1xuICBNZW51UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYHZhbHVlYCBtdXN0IGJlIGFuIGFycmF5IGFuZCB0aGUgbWVudSB3aWxsIHN1cHBvcnQgbXVsdGlwbGUgc2VsZWN0aW9ucy5cbiAgICovXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBzZWxlY3RgIG9yIGhpZGRlbiBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKGFueSkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbY2hpbGRdIFRoZSByZWFjdCBlbGVtZW50IHRoYXQgd2FzIHNlbGVjdGVkLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKiBVc2UgaW4gY29udHJvbGxlZCBtb2RlIChzZWUgb3BlbikuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIG9wZW5lZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqL1xuICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDb250cm9sIGBzZWxlY3RgIG9wZW4gc3RhdGUuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIHNlbGVjdGVkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGB2YWx1ZWAgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogQHJldHVybnMge1JlYWN0Tm9kZX1cbiAgICovXG4gIHJlbmRlclZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgY2xpY2thYmxlIGRpdiBlbGVtZW50LlxuICAgKi9cbiAgU2VsZWN0RGlzcGxheVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB0YWJJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgdmFsdWUuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnc3RhbmRhcmQnLCAnb3V0bGluZWQnLCAnZmlsbGVkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0SW5wdXQ7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2VsZWN0JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsIHByb3BlcnR5KSB7XG4gIHJldHVybiBwYXJzZUludChjb21wdXRlZFN0eWxlW3Byb3BlcnR5XSwgMTApIHx8IDA7XG59XG5cbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xudmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNoYWRvdyB0ZXh0YXJlYSBlbGVtZW50LiAqL1xuICBzaGFkb3c6IHtcbiAgICAvLyBWaXNpYmlsaXR5IG5lZWRlZCB0byBoaWRlIHRoZSBleHRyYSB0ZXh0IGFyZWEgb24gaVBhZHNcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAvLyBSZW1vdmUgZnJvbSB0aGUgY29udGVudCBmbG93XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgLy8gSWdub3JlIHRoZSBzY3JvbGxiYXIgd2lkdGhcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIC8vIENyZWF0ZSBhIG5ldyBsYXllciwgaW5jcmVhc2UgdGhlIGlzb2xhdGlvbiBvZiB0aGUgY29tcHV0ZWQgdmFsdWVzXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWigwKSdcbiAgfVxufTtcbnZhciBUZXh0YXJlYUF1dG9zaXplID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGV4dGFyZWFBdXRvc2l6ZShwcm9wcywgcmVmKSB7XG4gIHZhciBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgcm93cyA9IHByb3BzLnJvd3MsXG4gICAgICByb3dzTWF4ID0gcHJvcHMucm93c01heCxcbiAgICAgIF9wcm9wcyRyb3dzTWluID0gcHJvcHMucm93c01pbixcbiAgICAgIHJvd3NNaW5Qcm9wID0gX3Byb3BzJHJvd3NNaW4gPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkcm93c01pbixcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcIm9uQ2hhbmdlXCIsIFwicm93c1wiLCBcInJvd3NNYXhcIiwgXCJyb3dzTWluXCIsIFwic3R5bGVcIiwgXCJ2YWx1ZVwiXSk7XG5cbiAgdmFyIHJvd3NNaW4gPSByb3dzIHx8IHJvd3NNaW5Qcm9wO1xuXG4gIHZhciBfUmVhY3QkdXNlUmVmID0gUmVhY3QudXNlUmVmKHZhbHVlICE9IG51bGwpLFxuICAgICAgaXNDb250cm9sbGVkID0gX1JlYWN0JHVzZVJlZi5jdXJyZW50O1xuXG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYocmVmLCBpbnB1dFJlZik7XG4gIHZhciBzaGFkb3dSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciByZW5kZXJzID0gUmVhY3QudXNlUmVmKDApO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSh7fSksXG4gICAgICBzdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBzeW5jSGVpZ2h0ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IGlucHV0UmVmLmN1cnJlbnQ7XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpbnB1dCk7XG4gICAgdmFyIGlucHV0U2hhbGxvdyA9IHNoYWRvd1JlZi5jdXJyZW50O1xuICAgIGlucHV0U2hhbGxvdy5zdHlsZS53aWR0aCA9IGNvbXB1dGVkU3R5bGUud2lkdGg7XG4gICAgaW5wdXRTaGFsbG93LnZhbHVlID0gaW5wdXQudmFsdWUgfHwgcHJvcHMucGxhY2Vob2xkZXIgfHwgJ3gnO1xuXG4gICAgaWYgKGlucHV0U2hhbGxvdy52YWx1ZS5zbGljZSgtMSkgPT09ICdcXG4nKSB7XG4gICAgICAvLyBDZXJ0YWluIGZvbnRzIHdoaWNoIG92ZXJmbG93IHRoZSBsaW5lIGhlaWdodCB3aWxsIGNhdXNlIHRoZSB0ZXh0YXJlYVxuICAgICAgLy8gdG8gcmVwb3J0IGEgZGlmZmVyZW50IHNjcm9sbEhlaWdodCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgbGFzdCBsaW5lXG4gICAgICAvLyBpcyBlbXB0eS4gTWFrZSBpdCBub24tZW1wdHkgdG8gYXZvaWQgdGhpcyBpc3N1ZS5cbiAgICAgIGlucHV0U2hhbGxvdy52YWx1ZSArPSAnICc7XG4gICAgfVxuXG4gICAgdmFyIGJveFNpemluZyA9IGNvbXB1dGVkU3R5bGVbJ2JveC1zaXppbmcnXTtcbiAgICB2YXIgcGFkZGluZyA9IGdldFN0eWxlVmFsdWUoY29tcHV0ZWRTdHlsZSwgJ3BhZGRpbmctYm90dG9tJykgKyBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsICdwYWRkaW5nLXRvcCcpO1xuICAgIHZhciBib3JkZXIgPSBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsICdib3JkZXItYm90dG9tLXdpZHRoJykgKyBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsICdib3JkZXItdG9wLXdpZHRoJyk7IC8vIFRoZSBoZWlnaHQgb2YgdGhlIGlubmVyIGNvbnRlbnRcblxuICAgIHZhciBpbm5lckhlaWdodCA9IGlucHV0U2hhbGxvdy5zY3JvbGxIZWlnaHQgLSBwYWRkaW5nOyAvLyBNZWFzdXJlIGhlaWdodCBvZiBhIHRleHRhcmVhIHdpdGggYSBzaW5nbGUgcm93XG5cbiAgICBpbnB1dFNoYWxsb3cudmFsdWUgPSAneCc7XG4gICAgdmFyIHNpbmdsZVJvd0hlaWdodCA9IGlucHV0U2hhbGxvdy5zY3JvbGxIZWlnaHQgLSBwYWRkaW5nOyAvLyBUaGUgaGVpZ2h0IG9mIHRoZSBvdXRlciBjb250ZW50XG5cbiAgICB2YXIgb3V0ZXJIZWlnaHQgPSBpbm5lckhlaWdodDtcblxuICAgIGlmIChyb3dzTWluKSB7XG4gICAgICBvdXRlckhlaWdodCA9IE1hdGgubWF4KE51bWJlcihyb3dzTWluKSAqIHNpbmdsZVJvd0hlaWdodCwgb3V0ZXJIZWlnaHQpO1xuICAgIH1cblxuICAgIGlmIChyb3dzTWF4KSB7XG4gICAgICBvdXRlckhlaWdodCA9IE1hdGgubWluKE51bWJlcihyb3dzTWF4KSAqIHNpbmdsZVJvd0hlaWdodCwgb3V0ZXJIZWlnaHQpO1xuICAgIH1cblxuICAgIG91dGVySGVpZ2h0ID0gTWF0aC5tYXgob3V0ZXJIZWlnaHQsIHNpbmdsZVJvd0hlaWdodCk7IC8vIFRha2UgdGhlIGJveCBzaXppbmcgaW50byBhY2NvdW50IGZvciBhcHBseWluZyB0aGlzIHZhbHVlIGFzIGEgc3R5bGUuXG5cbiAgICB2YXIgb3V0ZXJIZWlnaHRTdHlsZSA9IG91dGVySGVpZ2h0ICsgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnID8gcGFkZGluZyArIGJvcmRlciA6IDApO1xuICAgIHZhciBvdmVyZmxvdyA9IE1hdGguYWJzKG91dGVySGVpZ2h0IC0gaW5uZXJIZWlnaHQpIDw9IDE7XG4gICAgc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgLy8gTmVlZCBhIGxhcmdlIGVub3VnaCBkaWZmZXJlbmNlIHRvIHVwZGF0ZSB0aGUgaGVpZ2h0LlxuICAgICAgLy8gVGhpcyBwcmV2ZW50cyBpbmZpbml0ZSByZW5kZXJpbmcgbG9vcC5cbiAgICAgIGlmIChyZW5kZXJzLmN1cnJlbnQgPCAyMCAmJiAob3V0ZXJIZWlnaHRTdHlsZSA+IDAgJiYgTWF0aC5hYnMoKHByZXZTdGF0ZS5vdXRlckhlaWdodFN0eWxlIHx8IDApIC0gb3V0ZXJIZWlnaHRTdHlsZSkgPiAxIHx8IHByZXZTdGF0ZS5vdmVyZmxvdyAhPT0gb3ZlcmZsb3cpKSB7XG4gICAgICAgIHJlbmRlcnMuY3VycmVudCArPSAxO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG92ZXJmbG93OiBvdmVyZmxvdyxcbiAgICAgICAgICBvdXRlckhlaWdodFN0eWxlOiBvdXRlckhlaWdodFN0eWxlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChyZW5kZXJzLmN1cnJlbnQgPT09IDIwKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUb28gbWFueSByZS1yZW5kZXJzLiBUaGUgbGF5b3V0IGlzIHVuc3RhYmxlLicsICdUZXh0YXJlYUF1dG9zaXplIGxpbWl0cyB0aGUgbnVtYmVyIG9mIHJlbmRlcnMgdG8gcHJldmVudCBhbiBpbmZpbml0ZSBsb29wLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgIH0pO1xuICB9LCBbcm93c01heCwgcm93c01pbiwgcHJvcHMucGxhY2Vob2xkZXJdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgcmVuZGVycy5jdXJyZW50ID0gMDtcbiAgICAgIHN5bmNIZWlnaHQoKTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlUmVzaXplLmNsZWFyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbc3luY0hlaWdodF0pO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc3luY0hlaWdodCgpO1xuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZW5kZXJzLmN1cnJlbnQgPSAwO1xuICB9LCBbdmFsdWVdKTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgcmVuZGVycy5jdXJyZW50ID0gMDtcblxuICAgIGlmICghaXNDb250cm9sbGVkKSB7XG4gICAgICBzeW5jSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBfZXh0ZW5kcyh7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgcmVmOiBoYW5kbGVSZWYgLy8gQXBwbHkgdGhlIHJvd3MgcHJvcCB0byBnZXQgYSBcImNvcnJlY3RcIiBmaXJzdCBTU1IgcGFpbnRcbiAgICAsXG4gICAgcm93czogcm93c01pbixcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgaGVpZ2h0OiBzdGF0ZS5vdXRlckhlaWdodFN0eWxlLFxuICAgICAgLy8gTmVlZCBhIGxhcmdlIGVub3VnaCBkaWZmZXJlbmNlIHRvIGFsbG93IHNjcm9sbGluZy5cbiAgICAgIC8vIFRoaXMgcHJldmVudHMgaW5maW5pdGUgcmVuZGVyaW5nIGxvb3AuXG4gICAgICBvdmVyZmxvdzogc3RhdGUub3ZlcmZsb3cgPyAnaGlkZGVuJyA6IG51bGxcbiAgICB9LCBzdHlsZSlcbiAgfSwgb3RoZXIpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLFxuICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgIHJlZjogc2hhZG93UmVmLFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlcy5zaGFkb3csIHN0eWxlKVxuICB9KSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRleHRhcmVhQXV0b3NpemUucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBVc2UgYHJvd3NNaW5gIGluc3RlYWQuIFRoZSBwcm9wIHdpbGwgYmUgcmVtb3ZlZCBpbiB2NS5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIHJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5LlxuICAgKi9cbiAgcm93c01heDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBNaW5pbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkuXG4gICAqL1xuICByb3dzTWluOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhQXV0b3NpemU7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGV4dGFyZWFBdXRvc2l6ZSc7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNyAxMGw1IDUgNS01elwiXG59KSwgJ0Fycm93RHJvcERvd24nKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIjtcclxuaW1wb3J0IFRhYiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5cclxuaW1wb3J0IFBhdHRlcm5MaXN0IGZyb20gXCIuL1BhdHRlcm5MaXN0XCI7XHJcbmltcG9ydCBTaW1wbGVTZWxlY3QgZnJvbSAnLi9TZWxlY3QnO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9DYWxlbmRhcic7XHJcbmltcG9ydCBDYWxlbmRhcjIgZnJvbSAnLi4vdGVzdC9jYWxlbmRhcic7XHJcbmltcG9ydCBDYWxlbmRhcjMgZnJvbSAnLi4vdGVzdC9DYWxlbmRhcjMnO1xyXG5cclxuXHJcbmludGVyZmFjZSBUYWJQYW5lbFByb3BzIHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgaW5kZXg6IGFueTtcclxuICAgIHZhbHVlOiBhbnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzOiBUYWJQYW5lbFByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcbiAgICAgICAgICAgIGlkPXtgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgc2Nyb2xsYWJsZS1hdXRvLXRhYi0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxyXG4gICAgICAgICAgICAgICAgPEJveCBwPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXg6IGFueSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogYHNjcm9sbGFibGUtYXV0by10YWItJHtpbmRleH1gLFxyXG4gICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YCxcclxuICAgIH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgLy8gcGFkZGluZ1RvcDonNzBweCcsXHJcbiAgICAgICAgLy8gZGlzcGxheTonaW5saW5lLWJsb2NrJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIGJhclNpemU6e1xyXG4gICAgICAgIHdpZHRoOidmaXQtY29udGVudCcsXHJcbiAgICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgICAgbWFyZ2luOicwIGF1dG8nLFxyXG5cclxuICAgIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsYWJsZVRhYnNCdXR0b25BdXRvKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHt9PiwgbmV3VmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYXJTaXplfT5cclxuICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Nyb2xsYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsQnV0dG9ucz1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzY3JvbGxhYmxlIGF1dG8gdGFicyBleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiUGF0dGVyblwiIHsuLi5hMTF5UHJvcHMoMCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkNhbGVuZGFyXCIgey4uLmExMXlQcm9wcygxKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfT5cclxuICAgICAgICAgICAgICAgIDxQYXR0ZXJuTGlzdCAvPlxyXG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MX0+XHJcbiAgICAgICAgICAgICAgICA8U2ltcGxlU2VsZWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXIzIC8+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0XCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIGZvcm1Db250cm9sOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICAgICAgbWluV2lkdGg6IDEyMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdEVtcHR5OiB7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZVNlbGVjdCgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFthZ2UsIHNldEFnZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHsgdmFsdWU6IHVua25vd24gfT4pID0+IHtcclxuICAgICAgICBzZXRBZ2UoZXZlbnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPkFnZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MTB9PlRlbjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyMH0+VHdlbnR5PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezMwfT5UaGlydHk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=