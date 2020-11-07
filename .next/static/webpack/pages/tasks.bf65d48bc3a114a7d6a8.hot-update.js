webpackHotUpdate_N_E("pages/tasks",{

/***/ "./node_modules/@material-ui/core/esm/Box/Box.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Box/Box.js ***!
  \*******************************************************/
/*! exports provided: styleFunction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleFunction", function() { return styleFunction; });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "./node_modules/@material-ui/system/esm/index.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");


var styleFunction = Object(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__["css"])(Object(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__["compose"])(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__["borders"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["display"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["flexbox"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["grid"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["positions"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["palette"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["shadows"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["sizing"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["spacing"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["typography"]));
/**
 * @ignore - do not document.
 */

var Box = Object(_styles_styled__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(styleFunction, {
  name: 'MuiBox'
});
/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Box/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Box/index.js ***!
  \*********************************************************/
/*! exports provided: default, styleFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Box__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleFunction", function() { return _Box__WEBPACK_IMPORTED_MODULE_0__["styleFunction"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ListSubheader/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Switch/Switch.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Switch/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Tab/Tab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tab/Tab.js ***!
  \*******************************************************/
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
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_unsupportedProp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/unsupportedProp */ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js");










var styles = function styles(theme) {
  var _extends2;

  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.typography.button, (_extends2 = {
      maxWidth: 264,
      minWidth: 72,
      position: 'relative',
      boxSizing: 'border-box',
      minHeight: 48,
      flexShrink: 0,
      padding: '6px 12px'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, theme.breakpoints.up('sm'), {
      padding: '6px 24px'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, "overflow", 'hidden'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, "whiteSpace", 'normal'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, "textAlign", 'center'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, theme.breakpoints.up('sm'), {
      minWidth: 160
    }), _extends2)),

    /* Styles applied to the root element if both `icon` and `label` are provided. */
    labelIcon: {
      minHeight: 72,
      paddingTop: 9,
      '& $wrapper > *:first-child': {
        marginBottom: 6
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`. */
    textColorInherit: {
      color: 'inherit',
      opacity: 0.7,
      '&$selected': {
        opacity: 1
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`. */
    textColorPrimary: {
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`. */
    textColorSecondary: {
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.secondary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },

    /* Pseudo-class applied to the root element if `selected={true}` (controlled by the Tabs component). */
    selected: {},

    /* Pseudo-class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
    disabled: {},

    /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
    fullWidth: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: 'none'
    },

    /* Styles applied to the root element if `wrapped={true}`. */
    wrapped: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.5
    },

    /* Styles applied to the `icon` and `label`'s wrapper element. */
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    }
  };
};
var Tab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Tab(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      fullWidth = props.fullWidth,
      icon = props.icon,
      indicator = props.indicator,
      label = props.label,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      selected = props.selected,
      selectionFollowsFocus = props.selectionFollowsFocus,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
      value = props.value,
      _props$wrapped = props.wrapped,
      wrapped = _props$wrapped === void 0 ? false : _props$wrapped,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "className", "disabled", "disableFocusRipple", "fullWidth", "icon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"]);

  var handleClick = function handleClick(event) {
    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    focusRipple: !disableFocusRipple,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, classes["textColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(textColor))], className, disabled && classes.disabled, selected && classes.selected, label && icon && classes.labelIcon, fullWidth && classes.fullWidth, wrapped && classes.wrapped),
    ref: ref,
    role: "tab",
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
    className: classes.wrapper
  }, icon, label), indicator);
});
 true ? Tab.propTypes = {
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: _utils_unsupportedProp__WEBPACK_IMPORTED_MODULE_9__["default"],

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
   * If `true`, the tab will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The icon element.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * @ignore
   * For server-side rendering consideration, we let the selected tab
   * render the indicator.
   */
  indicator: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The label element.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * @ignore
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
  selected: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  selectionFollowsFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['secondary', 'primary', 'inherit']),

  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   */
  wrapped: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiTab'
})(Tab));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tab/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tab/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ "./node_modules/@material-ui/core/esm/Tab/Tab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Tab__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/KeyboardArrowLeft */ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js");
/* harmony import */ var _internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/svg-icons/KeyboardArrowRight */ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");



/* eslint-disable jsx-a11y/aria-role */







var styles = {
  /* Styles applied to the root element. */
  root: {
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    '&$disabled': {
      opacity: 0
    }
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    width: '100%',
    height: 40,
    '& svg': {
      transform: 'rotate(90deg)'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {}
};

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5__["default"], {
  fontSize: "small"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__["default"], {
  fontSize: "small"
});

var TabScrollButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TabScrollButton(props, ref) {
  var classes = props.classes,
      classNameProp = props.className,
      direction = props.direction,
      orientation = props.orientation,
      disabled = props.disabled,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "direction", "orientation", "disabled"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ButtonBase__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "div",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classNameProp, disabled && classes.disabled, orientation === 'vertical' && classes.vertical),
    ref: ref,
    role: null,
    tabIndex: null
  }, other), direction === 'left' ? _ref : _ref2);
});
 true ? TabScrollButton.propTypes = {
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
   * Which direction should the button indicate?
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']).isRequired,

  /**
   * If `true`, the element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['horizontal', 'vertical']).isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiTabScrollButton'
})(TabScrollButton));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TabScrollButton/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TabScrollButton/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabScrollButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabScrollButton */ "./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TabScrollButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollbarSize; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");





var styles = {
  width: 99,
  height: 99,
  position: 'absolute',
  top: -9999,
  overflow: 'scroll'
};
/**
 * @ignore - internal component.
 * The component originates from https://github.com/STORIS/react-scrollbar-size.
 * It has been moved into the core in order to minimize the bundle size.
 */

function ScrollbarSize(props) {
  var onChange = props.onChange,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["onChange"]);

  var scrollbarHeight = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]();
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  var setMeasurements = function setMeasurements() {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      var prevHeight = scrollbarHeight.current;
      setMeasurements();

      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [onChange]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: styles,
    ref: nodeRef
  }, other));
}
 true ? ScrollbarSize.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
} : undefined;

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js ***!
  \*****************************************************************/
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
    root: {
      position: 'absolute',
      height: 2,
      bottom: 0,
      width: '100%',
      transition: theme.transitions.create()
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },
    vertical: {
      height: '100%',
      width: 2,
      right: 0
    }
  };
};
/**
 * @ignore - internal component.
 */

var TabIndicator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TabIndicator(props, ref) {
  var classes = props.classes,
      className = props.className,
      color = props.color,
      orientation = props.orientation,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "orientation"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], className, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other));
});
 true ? TabIndicator.propTypes = {
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
   * @ignore
   * The color of the tab indicator.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']).isRequired,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['horizontal', 'vertical']).isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'PrivateTabIndicator'
})(TabIndicator));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/Tabs.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony import */ var _utils_scrollLeft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/scrollLeft */ "./node_modules/@material-ui/core/esm/utils/scrollLeft.js");
/* harmony import */ var _internal_animate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../internal/animate */ "./node_modules/@material-ui/core/esm/internal/animate.js");
/* harmony import */ var _ScrollbarSize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ScrollbarSize */ "./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _TabIndicator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TabIndicator */ "./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js");
/* harmony import */ var _TabScrollButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../TabScrollButton */ "./node_modules/@material-ui/core/esm/TabScrollButton/index.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");


















var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      minHeight: 48,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      display: 'flex'
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the flex container element. */
    flexContainer: {
      display: 'flex'
    },

    /* Styles applied to the flex container element if `orientation="vertical"`. */
    flexContainerVertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
    centered: {
      justifyContent: 'center'
    },

    /* Styles applied to the tablist element. */
    scroller: {
      position: 'relative',
      display: 'inline-block',
      flex: '1 1 auto',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the tablist element if `!variant="scrollable"`. */
    fixed: {
      overflowX: 'hidden',
      width: '100%'
    },

    /* Styles applied to the tablist element if `variant="scrollable"`. */
    scrollable: {
      overflowX: 'scroll',
      // Hide dimensionless scrollbar on MacOS
      scrollbarWidth: 'none',
      // Firefox
      '&::-webkit-scrollbar': {
        display: 'none' // Safari + Chrome

      }
    },

    /* Styles applied to the `ScrollButtonComponent` component. */
    scrollButtons: {},

    /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"` or scrollButtons="desktop"`. */
    scrollButtonsDesktop: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.down('xs'), {
      display: 'none'
    }),

    /* Styles applied to the `TabIndicator` component. */
    indicator: {}
  };
};
var Tabs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Tabs(props, ref) {
  var ariaLabel = props['aria-label'],
      ariaLabelledBy = props['aria-labelledby'],
      action = props.action,
      _props$centered = props.centered,
      centered = _props$centered === void 0 ? false : _props$centered,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$indicatorColor = props.indicatorColor,
      indicatorColor = _props$indicatorColor === void 0 ? 'secondary' : _props$indicatorColor,
      onChange = props.onChange,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$ScrollButtonCo = props.ScrollButtonComponent,
      ScrollButtonComponent = _props$ScrollButtonCo === void 0 ? _TabScrollButton__WEBPACK_IMPORTED_MODULE_15__["default"] : _props$ScrollButtonCo,
      _props$scrollButtons = props.scrollButtons,
      scrollButtons = _props$scrollButtons === void 0 ? 'auto' : _props$scrollButtons,
      selectionFollowsFocus = props.selectionFollowsFocus,
      _props$TabIndicatorPr = props.TabIndicatorProps,
      TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr,
      TabScrollButtonProps = props.TabScrollButtonProps,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["aria-label", "aria-labelledby", "action", "centered", "children", "classes", "className", "component", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_17__["default"])();
  var scrollable = variant === 'scrollable';
  var isRtl = theme.direction === 'rtl';
  var vertical = orientation === 'vertical';
  var scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
  var start = vertical ? 'top' : 'left';
  var end = vertical ? 'bottom' : 'right';
  var clientSize = vertical ? 'clientHeight' : 'clientWidth';
  var size = vertical ? 'height' : 'width';

  if (true) {
    if (centered && scrollable) {
      console.error('Material-UI: You can not use the `centered={true}` and `variant="scrollable"` properties ' + 'at the same time on a `Tabs` component.');
    }
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
      mounted = _React$useState[0],
      setMounted = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_3__["useState"]({}),
      indicatorStyle = _React$useState2[0],
      setIndicatorStyle = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__["useState"]({
    start: false,
    end: false
  }),
      displayScroll = _React$useState3[0],
      setDisplayScroll = _React$useState3[1];

  var _React$useState4 = react__WEBPACK_IMPORTED_MODULE_3__["useState"]({
    overflow: 'hidden',
    marginBottom: null
  }),
      scrollerStyle = _React$useState4[0],
      setScrollerStyle = _React$useState4[1];

  var valueToIndex = new Map();
  var tabsRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var tabListRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);

  var getTabsMeta = function getTabsMeta() {
    var tabsNode = tabsRef.current;
    var tabsMeta;

    if (tabsNode) {
      var rect = tabsNode.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft

      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: Object(_utils_scrollLeft__WEBPACK_IMPORTED_MODULE_10__["getNormalizedScrollLeft"])(tabsNode, theme.direction),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }

    var tabMeta;

    if (tabsNode && value !== false) {
      var _children = tabListRef.current.children;

      if (_children.length > 0) {
        var tab = _children[valueToIndex.get(value)];

        if (true) {
          if (!tab) {
            console.error(["Material-UI: The value provided to the Tabs component is invalid.", "None of the Tabs' children match with `".concat(value, "`."), valueToIndex.keys ? "You can provide one of the following values: ".concat(Array.from(valueToIndex.keys()).join(', '), ".") : null].join('\n'));
          }
        }

        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }

    return {
      tabsMeta: tabsMeta,
      tabMeta: tabMeta
    };
  };

  var updateIndicatorState = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__["default"])(function () {
    var _newIndicatorStyle;

    var _getTabsMeta = getTabsMeta(),
        tabsMeta = _getTabsMeta.tabsMeta,
        tabMeta = _getTabsMeta.tabMeta;

    var startValue = 0;

    if (tabMeta && tabsMeta) {
      if (vertical) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      } else {
        var correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        startValue = tabMeta.left - tabsMeta.left + correction;
      }
    }

    var newIndicatorStyle = (_newIndicatorStyle = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_newIndicatorStyle, start, startValue), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_newIndicatorStyle, size, tabMeta ? tabMeta[size] : 0), _newIndicatorStyle);

    if (isNaN(indicatorStyle[start]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      var dStart = Math.abs(indicatorStyle[start] - newIndicatorStyle[start]);
      var dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);

      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });

  var scroll = function scroll(scrollValue) {
    Object(_internal_animate__WEBPACK_IMPORTED_MODULE_11__["default"])(scrollStart, tabsRef.current, scrollValue);
  };

  var moveTabsScroll = function moveTabsScroll(delta) {
    var scrollValue = tabsRef.current[scrollStart];

    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1); // Fix for Edge

      scrollValue *= isRtl && Object(_utils_scrollLeft__WEBPACK_IMPORTED_MODULE_10__["detectScrollType"])() === 'reverse' ? -1 : 1;
    }

    scroll(scrollValue);
  };

  var handleStartScrollClick = function handleStartScrollClick() {
    moveTabsScroll(-tabsRef.current[clientSize]);
  };

  var handleEndScrollClick = function handleEndScrollClick() {
    moveTabsScroll(tabsRef.current[clientSize]);
  };

  var handleScrollbarSizeChange = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (scrollbarHeight) {
    setScrollerStyle({
      overflow: null,
      marginBottom: -scrollbarHeight
    });
  }, []);

  var getConditionalElements = function getConditionalElements() {
    var conditionalElements = {};
    conditionalElements.scrollbarSizeListener = scrollable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_ScrollbarSize__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.scrollable,
      onChange: handleScrollbarSizeChange
    }) : null;
    var scrollButtonsActive = displayScroll.start || displayScroll.end;
    var showScrollButtons = scrollable && (scrollButtons === 'auto' && scrollButtonsActive || scrollButtons === 'desktop' || scrollButtons === 'on');
    conditionalElements.scrollButtonStart = showScrollButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ScrollButtonComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      orientation: orientation,
      direction: isRtl ? 'right' : 'left',
      onClick: handleStartScrollClick,
      disabled: !displayScroll.start,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    conditionalElements.scrollButtonEnd = showScrollButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ScrollButtonComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      orientation: orientation,
      direction: isRtl ? 'left' : 'right',
      onClick: handleEndScrollClick,
      disabled: !displayScroll.end,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    return conditionalElements;
  };

  var scrollSelectedIntoView = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__["default"])(function () {
    var _getTabsMeta2 = getTabsMeta(),
        tabsMeta = _getTabsMeta2.tabsMeta,
        tabMeta = _getTabsMeta2.tabMeta;

    if (!tabMeta || !tabsMeta) {
      return;
    }

    if (tabMeta[start] < tabsMeta[start]) {
      // left side of button is out of view
      var nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart);
    } else if (tabMeta[end] > tabsMeta[end]) {
      // right side of button is out of view
      var _nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);

      scroll(_nextScrollStart);
    }
  });
  var updateScrollButtonState = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__["default"])(function () {
    if (scrollable && scrollButtons !== 'off') {
      var _tabsRef$current = tabsRef.current,
          scrollTop = _tabsRef$current.scrollTop,
          scrollHeight = _tabsRef$current.scrollHeight,
          clientHeight = _tabsRef$current.clientHeight,
          scrollWidth = _tabsRef$current.scrollWidth,
          clientWidth = _tabsRef$current.clientWidth;
      var showStartScroll;
      var showEndScroll;

      if (vertical) {
        showStartScroll = scrollTop > 1;
        showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
      } else {
        var scrollLeft = Object(_utils_scrollLeft__WEBPACK_IMPORTED_MODULE_10__["getNormalizedScrollLeft"])(tabsRef.current, theme.direction); // use 1 for the potential rounding error with browser zooms.

        showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
        showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
      }

      if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
        setDisplayScroll({
          start: showStartScroll,
          end: showEndScroll
        });
      }
    }
  });
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      updateIndicatorState();
      updateScrollButtonState();
    });
    var win = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__["default"])(tabsRef.current);
    win.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      win.removeEventListener('resize', handleResize);
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var handleTabsScroll = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    updateScrollButtonState();
  }));
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    return function () {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    setMounted(true);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    updateIndicatorState();
    updateScrollButtonState();
  });
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    scrollSelectedIntoView();
  }, [scrollSelectedIntoView, indicatorStyle]);
  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](action, function () {
    return {
      updateIndicator: updateIndicatorState,
      updateScrollButtons: updateScrollButtonState
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var indicator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_TabIndicator__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.indicator,
    orientation: orientation,
    color: indicatorColor
  }, TabIndicatorProps, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, indicatorStyle, TabIndicatorProps.style)
  }));
  var childIndex = 0;
  var children = react__WEBPACK_IMPORTED_MODULE_3__["Children"].map(childrenProp, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"](child)) {
      return null;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isFragment"])(child)) {
        console.error(["Material-UI: The Tabs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](child, {
      fullWidth: variant === 'fullWidth',
      indicator: selected && !mounted && indicator,
      selected: selected,
      selectionFollowsFocus: selectionFollowsFocus,
      onChange: onChange,
      textColor: textColor,
      value: childValue
    });
  });

  var handleKeyDown = function handleKeyDown(event) {
    var target = event.target; // Keyboard navigation assumes that [role="tab"] are siblings
    // though we might warn in the future about nested, interactive elements
    // as a a11y violation

    var role = target.getAttribute('role');

    if (role !== 'tab') {
      return;
    }

    var newFocusTarget = null;
    var previousItemKey = orientation !== "vertical" ? 'ArrowLeft' : 'ArrowUp';
    var nextItemKey = orientation !== "vertical" ? 'ArrowRight' : 'ArrowDown';

    if (orientation !== "vertical" && theme.direction === 'rtl') {
      // swap previousItemKey with nextItemKey
      previousItemKey = 'ArrowRight';
      nextItemKey = 'ArrowLeft';
    }

    switch (event.key) {
      case previousItemKey:
        newFocusTarget = target.previousElementSibling || tabListRef.current.lastChild;
        break;

      case nextItemKey:
        newFocusTarget = target.nextElementSibling || tabListRef.current.firstChild;
        break;

      case 'Home':
        newFocusTarget = tabListRef.current.firstChild;
        break;

      case 'End':
        newFocusTarget = tabListRef.current.lastChild;
        break;

      default:
        break;
    }

    if (newFocusTarget !== null) {
      newFocusTarget.focus();
      event.preventDefault();
    }
  };

  var conditionalElements = getConditionalElements();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, className, vertical && classes.vertical),
    ref: ref
  }, other), conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.scroller, scrollable ? classes.scrollable : classes.fixed),
    style: scrollerStyle,
    ref: tabsRef,
    onScroll: handleTabsScroll
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.flexContainer, vertical && classes.flexContainerVertical, centered && !scrollable && classes.centered),
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, children), mounted && indicator), conditionalElements.scrollButtonEnd);
});
 true ? Tabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__["refType"],

  /**
   * The label for the Tabs as a string.
   */
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  'aria-labelledby': prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Determines the color of the indicator.
   */
  indicatorColor: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['primary', 'secondary']),

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child (number)
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['horizontal', 'vertical']),

  /**
   * The component used to render the scroll buttons.
   */
  ScrollButtonComponent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType,

  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `desktop` will only present them on medium and larger viewports.
   * - `on` will always present them.
   * - `off` will never present them.
   */
  scrollButtons: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['auto', 'desktop', 'off', 'on']),

  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Props applied to the tab indicator element.
   */
  TabIndicatorProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * Props applied to the [`TabScrollButton`](/api/tab-scroll-button/) element.
   */
  TabScrollButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * Determines the color of the `Tab`.
   */
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['inherit', 'primary', 'secondary']),

  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this property to `false`.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,

  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  -`fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['fullWidth', 'scrollable', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__["default"])(styles, {
  name: 'MuiTabs'
})(Tabs));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs */ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextField/TextField.js":
false,

/***/ "./node_modules/@material-ui/core/esm/TextField/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/SwitchBase.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/animate.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/animate.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return animate; });
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}

function animate(property, element, to) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
  var _options$ease = options.ease,
      ease = _options$ease === void 0 ? easeInOutSin : _options$ease,
      _options$duration = options.duration,
      duration = _options$duration === void 0 ? 300 : _options$duration;
  var start = null;
  var from = element[property];
  var cancelled = false;

  var cancel = function cancel() {
    cancelled = true;
  };

  var step = function step(timestamp) {
    if (cancelled) {
      cb(new Error('Animation cancelled'));
      return;
    }

    if (start === null) {
      start = timestamp;
    }

    var time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;

    if (time >= 1) {
      requestAnimationFrame(function () {
        cb(null);
      });
      return;
    }

    requestAnimationFrame(step);
  };

  if (from === to) {
    cb(new Error('Element already at target position'));
    return cancel;
  }

  requestAnimationFrame(step);
  return cancel;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js ***!
  \************************************************************************************/
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
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), 'KeyboardArrowLeft'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js ***!
  \*************************************************************************************/
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
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), 'KeyboardArrowRight'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/scrollLeft.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/scrollLeft.js ***!
  \****************************************************************/
/*! exports provided: detectScrollType, getNormalizedScrollLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectScrollType", function() { return detectScrollType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedScrollLeft", function() { return getNormalizedScrollLeft; });
// Source from https://github.com/alitaheri/normalize-scroll-left
var cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assiming scrollWidth=100 and direction is rtl.
 *
 * Browser        | Type          | <- Most Left | Most Right -> | Initial
 * -------------- | ------------- | ------------ | ------------- | -------
 * WebKit         | default       | 0            | 100           | 100
 * Firefox/Opera  | negative      | -100         | 0             | 0
 * IE/Edge        | reverse       | 100          | 0             | 0
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  var dummy = document.createElement('div');
  dummy.appendChild(document.createTextNode('ABCD'));
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  var scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  var type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/unsupportedProp.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unsupportedProp; });
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (false) {}

  var propFullNameSafe = propFullName || propName;

  if (typeof props[propName] !== 'undefined') {
    return new Error("The prop `".concat(propFullNameSafe, "` is not supported. Please remove it."));
  }

  return null;
}

/***/ }),

/***/ "./node_modules/@material-ui/icons/AddCircle.js":
false,

/***/ "./node_modules/@material-ui/icons/RemoveCircle.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/RemoveCircle.js ***!
  \*********************************************************/
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"
}), 'RemoveCircle');

exports.default = _default;

/***/ }),

/***/ "./src/components/view/AppVar.tsx":
false,

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
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "static",
    color: "default",
    className: classes.barSize,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Pattern"
  }, a11yProps(0), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    label: "Calendar"
  }, a11yProps(1), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  })))), __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(_Select__WEBPACK_IMPORTED_MODULE_11__["default"], {
    choice: choice,
    setChoice: setChoice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), __jsx(_PatternList__WEBPACK_IMPORTED_MODULE_10__["default"], {
    choice: choice,
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
  }), __jsx(_test_Calendar3__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
false,

/***/ "./src/components/view/PatternList.tsx":
/*!*********************************************!*\
  !*** ./src/components/view/PatternList.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternList; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Comment */ "./node_modules/@material-ui/icons/Comment.js");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/RemoveCircle */ "./node_modules/@material-ui/icons/RemoveCircle.js");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\PatternList.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    roots: {
      width: "100%",
      maxWidth: 720,
      margin: "auto",
      backgroundColor: theme.palette.background.paper
    }
  });
});
function PatternList(props) {
  _s();

  var _this = this;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([0]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(function (state) {
    return state.tasks;
  }),
      userTaskInfo = _useSelector.userTaskInfo;

  var handleToggle = function handleToggle(value) {
    return function () {
      var currentIndex = checked.indexOf(value);

      var newChecked = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(checked);

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };
  };

  var choicePatternTasks = userTaskInfo.tasks.filter(function (task) {
    return task.patternInfo.some(function (task) {
      return task.patternID == props.choice;
    });
  });
  console.log("choicePatternTasks:" + choicePatternTasks);
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, choicePatternTasks.map(function (task) {
    var taskPattern = task.patternInfo.filter(function (patternInfo) {
      return patternInfo.patternID == props.choice;
    });
    var labelId = "checkbox-list-label-".concat(taskPattern[0].patternID + taskPattern[0].order);
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: taskPattern[0].patternID + taskPattern[0].order,
      role: undefined,
      dense: true,
      button: true,
      onClick: handleToggle(taskPattern[0].patternID + taskPattern[0].order),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 29
      }
    }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_11___default.a, {
      color: "secondary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 33
      }
    }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: labelId,
      primary: "Line item ".concat(taskPattern[0].patternID + '_' + taskPattern[0].order, " ").concat(task.detail["testDetail1"], " ").concat(task.detail["testDetail2"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      edge: "end",
      "aria-label": "comments",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 33
      }
    }))));
  }));
}

_s(PatternList, "CfT5JeeJGcf5wuJxtigG2JcDEIY=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"]];
});

_c = PatternList;

var _c;

$RefreshReg$(_c, "PatternList");

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
false,

/***/ "./src/components/view/TaskList.tsx":
false,

/***/ "./src/components/view/TaskModal.tsx":
false,

/***/ "./src/components/view/taskPlus.tsx":
false,

/***/ "./src/pages/tasks.tsx":
/*!*****************************!*\
  !*** ./src/pages/tasks.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_view_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/view/ResponsiveDrawer */ "./src/components/view/ResponsiveDrawer.tsx");
/* harmony import */ var _components_view_FloatingActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/view//FloatingActionButton */ "./src/components/view/FloatingActionButton.tsx");
/* harmony import */ var _components_test_firebaseTest_getData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/test/firebaseTest/getData */ "./src/components/test/firebaseTest/getData.tsx");
/* harmony import */ var _components_test_firebaseTest_FormComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/test/firebaseTest/FormComponent */ "./src/components/test/firebaseTest/FormComponent.tsx");
/* harmony import */ var _components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/test/firebaseTest/FirebaseAuthComponent */ "./src/components/test/firebaseTest/FirebaseAuthComponent.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\pages\\tasks.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    button: {
      backgroundColor: "green"
    },
    taskList: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: "flex",
      paddingTop: "90px",
      paddingLeft: "0px"
    }, theme.breakpoints.up("sm"), {
      paddingLeft: "240px"
    })
  });
});

var Tasks = function Tasks() {
  _s();

  var classes = useStyles();
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_components_view_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.taskList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_components_view_FloatingActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.taskList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_getData__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_FormComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  })));
};

_s(Tasks, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Tasks;
/* harmony default export */ __webpack_exports__["default"] = (Tasks);

var _c;

$RefreshReg$(_c, "Tasks");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Cb3gvQm94LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0JveC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWIvVGFiLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJTY3JvbGxCdXR0b24vVGFiU2Nyb2xsQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYlNjcm9sbEJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJzL1Njcm9sbGJhclNpemUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFicy9UYWJJbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFicy9UYWJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vaW50ZXJuYWwvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvS2V5Ym9hcmRBcnJvd0xlZnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vaW50ZXJuYWwvc3ZnLWljb25zL0tleWJvYXJkQXJyb3dSaWdodC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9zY3JvbGxMZWZ0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL3Vuc3VwcG9ydGVkUHJvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmVDaXJjbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvRmxvYXRpbmdBY3Rpb25CdXR0b24udHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy92aWV3L1BhdHRlcm5MaXN0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rhc2tzLnRzeCJdLCJuYW1lcyI6WyJUYWJQYW5lbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImluZGV4Iiwib3RoZXIiLCJhMTF5UHJvcHMiLCJpZCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsImFsaWduSXRlbXMiLCJiYXJTaXplIiwiZGlzcGxheSIsIm1hcmdpbiIsIlNjcm9sbGFibGVUYWJzQnV0dG9uQXV0byIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwic2V0VmFsdWUiLCJOdW1iZXIiLCJjaG9pY2UiLCJzZXRDaG9pY2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiY3JlYXRlU3R5bGVzIiwicm9vdHMiLCJtYXhXaWR0aCIsIlBhdHRlcm5MaXN0IiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidGFza3MiLCJ1c2VyVGFza0luZm8iLCJoYW5kbGVUb2dnbGUiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwibmV3Q2hlY2tlZCIsInB1c2giLCJzcGxpY2UiLCJjaG9pY2VQYXR0ZXJuVGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwicGF0dGVybkluZm8iLCJzb21lIiwicGF0dGVybklEIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInRhc2tQYXR0ZXJuIiwibGFiZWxJZCIsIm9yZGVyIiwidW5kZWZpbmVkIiwiZGV0YWlsIiwiYnV0dG9uIiwidGFza0xpc3QiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJicmVha3BvaW50cyIsInVwIiwiVGFza3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4STtBQUN4RztBQUMvQixvQkFBb0IsK0RBQUcsQ0FBQyxtRUFBTyxDQUFDLDJEQUFPLEVBQUUsMkRBQU8sRUFBRSwyREFBTyxFQUFFLHdEQUFJLEVBQUUsNkRBQVMsRUFBRSwyREFBTyxFQUFFLDJEQUFPLEVBQUUsMERBQU0sRUFBRSwyREFBTyxFQUFFLDhEQUFVO0FBQ2hJO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLDhEQUFNO0FBQ2hCO0FBQ0EsQ0FBQztBQUNjLGtFQUFHLEU7Ozs7Ozs7Ozs7OztBQ1ZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBGO0FBQ2xCO0FBQ2Q7QUFDM0I7QUFDSTtBQUNYO0FBQ3NCO0FBQ1A7QUFDTTtBQUNVO0FBQ2hEO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLFVBQVUsa0ZBQVEsR0FBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRSx5RkFB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QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBZEosQ0FESjtBQXNCSCxDQXpCRDs7R0FBTUssSztVQUNjN0QsUzs7O0tBRGQ2RCxLO0FBMkJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXNrcy5iZjY1ZDQ4YmMzYTExNGE3ZDZhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9yZGVycywgY29tcG9zZSwgZGlzcGxheSwgZmxleGJveCwgZ3JpZCwgcGFsZXR0ZSwgcG9zaXRpb25zLCBzaGFkb3dzLCBzaXppbmcsIHNwYWNpbmcsIHR5cG9ncmFwaHksIGNzcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zeXN0ZW0nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZXMvc3R5bGVkJztcbmV4cG9ydCB2YXIgc3R5bGVGdW5jdGlvbiA9IGNzcyhjb21wb3NlKGJvcmRlcnMsIGRpc3BsYXksIGZsZXhib3gsIGdyaWQsIHBvc2l0aW9ucywgcGFsZXR0ZSwgc2hhZG93cywgc2l6aW5nLCBzcGFjaW5nLCB0eXBvZ3JhcGh5KSk7XG4vKipcbiAqIEBpZ25vcmUgLSBkbyBub3QgZG9jdW1lbnQuXG4gKi9cblxudmFyIEJveCA9IHN0eWxlZCgnZGl2Jykoc3R5bGVGdW5jdGlvbiwge1xuICBuYW1lOiAnTXVpQm94J1xufSk7XG5leHBvcnQgZGVmYXVsdCBCb3g7IiwiZXhwb3J0IHsgZGVmYXVsdCwgc3R5bGVGdW5jdGlvbiB9IGZyb20gJy4vQm94JzsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnLi4vQnV0dG9uQmFzZSc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCB1bnN1cHBvcnRlZFByb3AgZnJvbSAnLi4vdXRpbHMvdW5zdXBwb3J0ZWRQcm9wJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBfZXh0ZW5kczI7XG5cbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbiwgKF9leHRlbmRzMiA9IHtcbiAgICAgIG1heFdpZHRoOiAyNjQsXG4gICAgICBtaW5XaWR0aDogNzIsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWluSGVpZ2h0OiA0OCxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBwYWRkaW5nOiAnNnB4IDEycHgnXG4gICAgfSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyksIHtcbiAgICAgIHBhZGRpbmc6ICc2cHggMjRweCdcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgXCJvdmVyZmxvd1wiLCAnaGlkZGVuJyksIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIFwid2hpdGVTcGFjZVwiLCAnbm9ybWFsJyksIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIFwidGV4dEFsaWduXCIsICdjZW50ZXInKSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyksIHtcbiAgICAgIG1pbldpZHRoOiAxNjBcbiAgICB9KSwgX2V4dGVuZHMyKSksXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGJvdGggYGljb25gIGFuZCBgbGFiZWxgIGFyZSBwcm92aWRlZC4gKi9cbiAgICBsYWJlbEljb246IHtcbiAgICAgIG1pbkhlaWdodDogNzIsXG4gICAgICBwYWRkaW5nVG9wOiA5LFxuICAgICAgJyYgJHdyYXBwZXIgPiAqOmZpcnN0LWNoaWxkJzoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IDZcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgcGFyZW50IFtgVGFic2BdKC9hcGkvdGFicy8pIGhhcyBgdGV4dENvbG9yPVwiaW5oZXJpdFwiYC4gKi9cbiAgICB0ZXh0Q29sb3JJbmhlcml0OiB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgb3BhY2l0eTogMC43LFxuICAgICAgJyYkc2VsZWN0ZWQnOiB7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgb3BhY2l0eTogMC41XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBbYFRhYnNgXSgvYXBpL3RhYnMvKSBoYXMgYHRleHRDb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgdGV4dENvbG9yUHJpbWFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAnJiRzZWxlY3RlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuZGlzYWJsZWRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgcGFyZW50IFtgVGFic2BdKC9hcGkvdGFicy8pIGhhcyBgdGV4dENvbG9yPVwic2Vjb25kYXJ5XCJgLiAqL1xuICAgIHRleHRDb2xvclNlY29uZGFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAnJiRzZWxlY3RlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5kaXNhYmxlZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzZWxlY3RlZD17dHJ1ZX1gIChjb250cm9sbGVkIGJ5IHRoZSBUYWJzIGNvbXBvbmVudCkuICovXG4gICAgc2VsZWN0ZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YCAoY29udHJvbGxlZCBieSB0aGUgVGFicyBjb21wb25lbnQpLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZ1bGxXaWR0aD17dHJ1ZX1gIChjb250cm9sbGVkIGJ5IHRoZSBUYWJzIGNvbXBvbmVudCkuICovXG4gICAgZnVsbFdpZHRoOiB7XG4gICAgICBmbGV4U2hyaW5rOiAxLFxuICAgICAgZmxleEdyb3c6IDEsXG4gICAgICBmbGV4QmFzaXM6IDAsXG4gICAgICBtYXhXaWR0aDogJ25vbmUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHdyYXBwZWQ9e3RydWV9YC4gKi9cbiAgICB3cmFwcGVkOiB7XG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDEyKSxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGljb25gIGFuZCBgbGFiZWxgJ3Mgd3JhcHBlciBlbGVtZW50LiAqL1xuICAgIHdyYXBwZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH1cbiAgfTtcbn07XG52YXIgVGFiID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGFiKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZCA9IF9wcm9wcyRkaXNhYmxlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZWQsXG4gICAgICBfcHJvcHMkZGlzYWJsZUZvY3VzUmkgPSBwcm9wcy5kaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgICBkaXNhYmxlRm9jdXNSaXBwbGUgPSBfcHJvcHMkZGlzYWJsZUZvY3VzUmkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVGb2N1c1JpLFxuICAgICAgZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgaWNvbiA9IHByb3BzLmljb24sXG4gICAgICBpbmRpY2F0b3IgPSBwcm9wcy5pbmRpY2F0b3IsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrLFxuICAgICAgb25Gb2N1cyA9IHByb3BzLm9uRm9jdXMsXG4gICAgICBzZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkLFxuICAgICAgc2VsZWN0aW9uRm9sbG93c0ZvY3VzID0gcHJvcHMuc2VsZWN0aW9uRm9sbG93c0ZvY3VzLFxuICAgICAgX3Byb3BzJHRleHRDb2xvciA9IHByb3BzLnRleHRDb2xvcixcbiAgICAgIHRleHRDb2xvciA9IF9wcm9wcyR0ZXh0Q29sb3IgPT09IHZvaWQgMCA/ICdpbmhlcml0JyA6IF9wcm9wcyR0ZXh0Q29sb3IsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgX3Byb3BzJHdyYXBwZWQgPSBwcm9wcy53cmFwcGVkLFxuICAgICAgd3JhcHBlZCA9IF9wcm9wcyR3cmFwcGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyR3cmFwcGVkLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlZFwiLCBcImRpc2FibGVGb2N1c1JpcHBsZVwiLCBcImZ1bGxXaWR0aFwiLCBcImljb25cIiwgXCJpbmRpY2F0b3JcIiwgXCJsYWJlbFwiLCBcIm9uQ2hhbmdlXCIsIFwib25DbGlja1wiLCBcIm9uRm9jdXNcIiwgXCJzZWxlY3RlZFwiLCBcInNlbGVjdGlvbkZvbGxvd3NGb2N1c1wiLCBcInRleHRDb2xvclwiLCBcInZhbHVlXCIsIFwid3JhcHBlZFwiXSk7XG5cbiAgdmFyIGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKGV2ZW50LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiBoYW5kbGVGb2N1cyhldmVudCkge1xuICAgIGlmIChzZWxlY3Rpb25Gb2xsb3dzRm9jdXMgJiYgIXNlbGVjdGVkICYmIG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShldmVudCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICBvbkZvY3VzKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkJhc2UsIF9leHRlbmRzKHtcbiAgICBmb2N1c1JpcHBsZTogIWRpc2FibGVGb2N1c1JpcHBsZSxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzW1widGV4dENvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUodGV4dENvbG9yKSldLCBjbGFzc05hbWUsIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIHNlbGVjdGVkICYmIGNsYXNzZXMuc2VsZWN0ZWQsIGxhYmVsICYmIGljb24gJiYgY2xhc3Nlcy5sYWJlbEljb24sIGZ1bGxXaWR0aCAmJiBjbGFzc2VzLmZ1bGxXaWR0aCwgd3JhcHBlZCAmJiBjbGFzc2VzLndyYXBwZWQpLFxuICAgIHJlZjogcmVmLFxuICAgIHJvbGU6IFwidGFiXCIsXG4gICAgXCJhcmlhLXNlbGVjdGVkXCI6IHNlbGVjdGVkLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICBvbkZvY3VzOiBoYW5kbGVGb2N1cyxcbiAgICB0YWJJbmRleDogc2VsZWN0ZWQgPyAwIDogLTFcbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy53cmFwcGVyXG4gIH0sIGljb24sIGxhYmVsKSwgaW5kaWNhdG9yKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGFiLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoaXMgcHJvcCBpc24ndCBzdXBwb3J0ZWQuXG4gICAqIFVzZSB0aGUgYGNvbXBvbmVudGAgcHJvcCBpZiB5b3UgbmVlZCB0byBjaGFuZ2UgdGhlIGNoaWxkcmVuIHN0cnVjdHVyZS5cbiAgICovXG4gIGNoaWxkcmVuOiB1bnN1cHBvcnRlZFByb3AsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRhYiB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSAga2V5Ym9hcmQgZm9jdXMgcmlwcGxlIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlRm9jdXNSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSByaXBwbGUgZWZmZWN0IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGljb24gZWxlbWVudC5cbiAgICovXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgY29uc2lkZXJhdGlvbiwgd2UgbGV0IHRoZSBzZWxlY3RlZCB0YWJcbiAgICogcmVuZGVyIHRoZSBpbmRpY2F0b3IuXG4gICAqL1xuICBpbmRpY2F0b3I6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgZWxlbWVudC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc2VsZWN0aW9uRm9sbG93c0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdGV4dENvbG9yOiBQcm9wVHlwZXMub25lT2YoWydzZWNvbmRhcnknLCAncHJpbWFyeScsICdpbmhlcml0J10pLFxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIHByb3ZpZGUgeW91ciBvd24gdmFsdWUuIE90aGVyd2lzZSwgd2UgZmFsbGJhY2sgdG8gdGhlIGNoaWxkIHBvc2l0aW9uIGluZGV4LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRhYiBsYWJlbHMgYXBwZWFyIGluIGEgc2luZ2xlIHJvdy5cbiAgICogVGhleSBjYW4gdXNlIGEgc2Vjb25kIGxpbmUgaWYgbmVlZGVkLlxuICAgKi9cbiAgd3JhcHBlZDogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGFiJ1xufSkoVGFiKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UYWInOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcblxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYXJpYS1yb2xlICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0xlZnQgZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL0tleWJvYXJkQXJyb3dMZWZ0JztcbmltcG9ydCBLZXlib2FyZEFycm93UmlnaHQgZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL0tleWJvYXJkQXJyb3dSaWdodCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICcuLi9CdXR0b25CYXNlJztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgd2lkdGg6IDQwLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgb3BhY2l0eTogMC44LFxuICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH1cbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJgLiAqL1xuICB2ZXJ0aWNhbDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiA0MCxcbiAgICAnJiBzdmcnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoOTBkZWcpJ1xuICAgIH1cbiAgfSxcblxuICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICBkaXNhYmxlZDoge31cbn07XG5cbnZhciBfcmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRBcnJvd0xlZnQsIHtcbiAgZm9udFNpemU6IFwic21hbGxcIlxufSk7XG5cbnZhciBfcmVmMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEtleWJvYXJkQXJyb3dSaWdodCwge1xuICBmb250U2l6ZTogXCJzbWFsbFwiXG59KTtcblxudmFyIFRhYlNjcm9sbEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYlNjcm9sbEJ1dHRvbihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZVByb3AgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICBvcmllbnRhdGlvbiA9IHByb3BzLm9yaWVudGF0aW9uLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlyZWN0aW9uXCIsIFwib3JpZW50YXRpb25cIiwgXCJkaXNhYmxlZFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkJhc2UsIF9leHRlbmRzKHtcbiAgICBjb21wb25lbnQ6IFwiZGl2XCIsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lUHJvcCwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgJiYgY2xhc3Nlcy52ZXJ0aWNhbCksXG4gICAgcmVmOiByZWYsXG4gICAgcm9sZTogbnVsbCxcbiAgICB0YWJJbmRleDogbnVsbFxuICB9LCBvdGhlciksIGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gX3JlZiA6IF9yZWYyKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGFiU2Nyb2xsQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBXaGljaCBkaXJlY3Rpb24gc2hvdWxkIHRoZSBidXR0b24gaW5kaWNhdGU/XG4gICAqL1xuICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgZWxlbWVudCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgdGFicyBvcmllbnRhdGlvbiAobGF5b3V0IGZsb3cgZGlyZWN0aW9uKS5cbiAgICovXG4gIG9yaWVudGF0aW9uOiBQcm9wVHlwZXMub25lT2YoWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10pLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGFiU2Nyb2xsQnV0dG9uJ1xufSkoVGFiU2Nyb2xsQnV0dG9uKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UYWJTY3JvbGxCdXR0b24nOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vdXRpbHMvZGVib3VuY2UnO1xudmFyIHN0eWxlcyA9IHtcbiAgd2lkdGg6IDk5LFxuICBoZWlnaHQ6IDk5LFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAtOTk5OSxcbiAgb3ZlcmZsb3c6ICdzY3JvbGwnXG59O1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICogVGhlIGNvbXBvbmVudCBvcmlnaW5hdGVzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL1NUT1JJUy9yZWFjdC1zY3JvbGxiYXItc2l6ZS5cbiAqIEl0IGhhcyBiZWVuIG1vdmVkIGludG8gdGhlIGNvcmUgaW4gb3JkZXIgdG8gbWluaW1pemUgdGhlIGJ1bmRsZSBzaXplLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbGJhclNpemUocHJvcHMpIHtcbiAgdmFyIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wib25DaGFuZ2VcIl0pO1xuXG4gIHZhciBzY3JvbGxiYXJIZWlnaHQgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIG5vZGVSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgdmFyIHNldE1lYXN1cmVtZW50cyA9IGZ1bmN0aW9uIHNldE1lYXN1cmVtZW50cygpIHtcbiAgICBzY3JvbGxiYXJIZWlnaHQuY3VycmVudCA9IG5vZGVSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgLSBub2RlUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZVJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcmV2SGVpZ2h0ID0gc2Nyb2xsYmFySGVpZ2h0LmN1cnJlbnQ7XG4gICAgICBzZXRNZWFzdXJlbWVudHMoKTtcblxuICAgICAgaWYgKHByZXZIZWlnaHQgIT09IHNjcm9sbGJhckhlaWdodC5jdXJyZW50KSB7XG4gICAgICAgIG9uQ2hhbmdlKHNjcm9sbGJhckhlaWdodC5jdXJyZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlUmVzaXplLmNsZWFyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbb25DaGFuZ2VdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRNZWFzdXJlbWVudHMoKTtcbiAgICBvbkNoYW5nZShzY3JvbGxiYXJIZWlnaHQuY3VycmVudCk7XG4gIH0sIFtvbkNoYW5nZV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIHN0eWxlOiBzdHlsZXMsXG4gICAgcmVmOiBub2RlUmVmXG4gIH0sIG90aGVyKSk7XG59XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTY3JvbGxiYXJTaXplLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgaGVpZ2h0OiAyLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgpXG4gICAgfSxcbiAgICBjb2xvclByaW1hcnk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICB9LFxuICAgIHZlcnRpY2FsOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAyLFxuICAgICAgcmlnaHQ6IDBcbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBUYWJJbmRpY2F0b3IgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUYWJJbmRpY2F0b3IocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgb3JpZW50YXRpb24gPSBwcm9wcy5vcmllbnRhdGlvbixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJvcmllbnRhdGlvblwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1tcImNvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUoY29sb3IpKV0sIGNsYXNzTmFtZSwgb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgJiYgY2xhc3Nlcy52ZXJ0aWNhbCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGFiSW5kaWNhdG9yLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIGNvbG9yIG9mIHRoZSB0YWIgaW5kaWNhdG9yLlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSB0YWJzIG9yaWVudGF0aW9uIChsYXlvdXQgZmxvdyBkaXJlY3Rpb24pLlxuICAgKi9cbiAgb3JpZW50YXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnXSkuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdQcml2YXRlVGFiSW5kaWNhdG9yJ1xufSkoVGFiSW5kaWNhdG9yKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCBvd25lcldpbmRvdyBmcm9tICcuLi91dGlscy9vd25lcldpbmRvdyc7XG5pbXBvcnQgeyBnZXROb3JtYWxpemVkU2Nyb2xsTGVmdCwgZGV0ZWN0U2Nyb2xsVHlwZSB9IGZyb20gJy4uL3V0aWxzL3Njcm9sbExlZnQnO1xuaW1wb3J0IGFuaW1hdGUgZnJvbSAnLi4vaW50ZXJuYWwvYW5pbWF0ZSc7XG5pbXBvcnQgU2Nyb2xsYmFyU2l6ZSBmcm9tICcuL1Njcm9sbGJhclNpemUnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFRhYkluZGljYXRvciBmcm9tICcuL1RhYkluZGljYXRvcic7XG5pbXBvcnQgVGFiU2Nyb2xsQnV0dG9uIGZyb20gJy4uL1RhYlNjcm9sbEJ1dHRvbic7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICcuLi91dGlscy91c2VFdmVudENhbGxiYWNrJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi9zdHlsZXMvdXNlVGhlbWUnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIG1pbkhlaWdodDogNDgsXG4gICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcbiAgICAgIC8vIEFkZCBpT1MgbW9tZW50dW0gc2Nyb2xsaW5nLlxuICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG9yaWVudGF0aW9uPVwidmVydGljYWxcImAuICovXG4gICAgdmVydGljYWw6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBmbGV4IGNvbnRhaW5lciBlbGVtZW50LiAqL1xuICAgIGZsZXhDb250YWluZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgZmxleCBjb250YWluZXIgZWxlbWVudCBpZiBgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiYC4gKi9cbiAgICBmbGV4Q29udGFpbmVyVmVydGljYWw6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBmbGV4IGNvbnRhaW5lciBlbGVtZW50IGlmIGBjZW50ZXJlZD17dHJ1ZX1gICYgYCF2YXJpYW50PVwic2Nyb2xsYWJsZVwiYC4gKi9cbiAgICBjZW50ZXJlZDoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSB0YWJsaXN0IGVsZW1lbnQuICovXG4gICAgc2Nyb2xsZXI6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHRhYmxpc3QgZWxlbWVudCBpZiBgIXZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJgXGJcYlxiLiAqL1xuICAgIGZpeGVkOiB7XG4gICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgdGFibGlzdCBlbGVtZW50IGlmIGB2YXJpYW50PVwic2Nyb2xsYWJsZVwiYC4gKi9cbiAgICBzY3JvbGxhYmxlOiB7XG4gICAgICBvdmVyZmxvd1g6ICdzY3JvbGwnLFxuICAgICAgLy8gSGlkZSBkaW1lbnNpb25sZXNzIHNjcm9sbGJhciBvbiBNYWNPU1xuICAgICAgc2Nyb2xsYmFyV2lkdGg6ICdub25lJyxcbiAgICAgIC8vIEZpcmVmb3hcbiAgICAgICcmOjotd2Via2l0LXNjcm9sbGJhcic6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnIC8vIFNhZmFyaSArIENocm9tZVxuXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgU2Nyb2xsQnV0dG9uQ29tcG9uZW50YCBjb21wb25lbnQuICovXG4gICAgc2Nyb2xsQnV0dG9uczoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFNjcm9sbEJ1dHRvbkNvbXBvbmVudGAgY29tcG9uZW50IGlmIGBzY3JvbGxCdXR0b25zPVwiYXV0b1wiYCBvciBzY3JvbGxCdXR0b25zPVwiZGVza3RvcFwiYC4gKi9cbiAgICBzY3JvbGxCdXR0b25zRGVza3RvcDogX2RlZmluZVByb3BlcnR5KHt9LCB0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpLCB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgVGFiSW5kaWNhdG9yYCBjb21wb25lbnQuICovXG4gICAgaW5kaWNhdG9yOiB7fVxuICB9O1xufTtcbnZhciBUYWJzID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGFicyhwcm9wcywgcmVmKSB7XG4gIHZhciBhcmlhTGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgYXJpYUxhYmVsbGVkQnkgPSBwcm9wc1snYXJpYS1sYWJlbGxlZGJ5J10sXG4gICAgICBhY3Rpb24gPSBwcm9wcy5hY3Rpb24sXG4gICAgICBfcHJvcHMkY2VudGVyZWQgPSBwcm9wcy5jZW50ZXJlZCxcbiAgICAgIGNlbnRlcmVkID0gX3Byb3BzJGNlbnRlcmVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRjZW50ZXJlZCxcbiAgICAgIGNoaWxkcmVuUHJvcCA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGluZGljYXRvckNvbG9yID0gcHJvcHMuaW5kaWNhdG9yQ29sb3IsXG4gICAgICBpbmRpY2F0b3JDb2xvciA9IF9wcm9wcyRpbmRpY2F0b3JDb2xvciA9PT0gdm9pZCAwID8gJ3NlY29uZGFyeScgOiBfcHJvcHMkaW5kaWNhdG9yQ29sb3IsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgX3Byb3BzJG9yaWVudGF0aW9uID0gcHJvcHMub3JpZW50YXRpb24sXG4gICAgICBvcmllbnRhdGlvbiA9IF9wcm9wcyRvcmllbnRhdGlvbiA9PT0gdm9pZCAwID8gJ2hvcml6b250YWwnIDogX3Byb3BzJG9yaWVudGF0aW9uLFxuICAgICAgX3Byb3BzJFNjcm9sbEJ1dHRvbkNvID0gcHJvcHMuU2Nyb2xsQnV0dG9uQ29tcG9uZW50LFxuICAgICAgU2Nyb2xsQnV0dG9uQ29tcG9uZW50ID0gX3Byb3BzJFNjcm9sbEJ1dHRvbkNvID09PSB2b2lkIDAgPyBUYWJTY3JvbGxCdXR0b24gOiBfcHJvcHMkU2Nyb2xsQnV0dG9uQ28sXG4gICAgICBfcHJvcHMkc2Nyb2xsQnV0dG9ucyA9IHByb3BzLnNjcm9sbEJ1dHRvbnMsXG4gICAgICBzY3JvbGxCdXR0b25zID0gX3Byb3BzJHNjcm9sbEJ1dHRvbnMgPT09IHZvaWQgMCA/ICdhdXRvJyA6IF9wcm9wcyRzY3JvbGxCdXR0b25zLFxuICAgICAgc2VsZWN0aW9uRm9sbG93c0ZvY3VzID0gcHJvcHMuc2VsZWN0aW9uRm9sbG93c0ZvY3VzLFxuICAgICAgX3Byb3BzJFRhYkluZGljYXRvclByID0gcHJvcHMuVGFiSW5kaWNhdG9yUHJvcHMsXG4gICAgICBUYWJJbmRpY2F0b3JQcm9wcyA9IF9wcm9wcyRUYWJJbmRpY2F0b3JQciA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkVGFiSW5kaWNhdG9yUHIsXG4gICAgICBUYWJTY3JvbGxCdXR0b25Qcm9wcyA9IHByb3BzLlRhYlNjcm9sbEJ1dHRvblByb3BzLFxuICAgICAgX3Byb3BzJHRleHRDb2xvciA9IHByb3BzLnRleHRDb2xvcixcbiAgICAgIHRleHRDb2xvciA9IF9wcm9wcyR0ZXh0Q29sb3IgPT09IHZvaWQgMCA/ICdpbmhlcml0JyA6IF9wcm9wcyR0ZXh0Q29sb3IsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYXJpYS1sYWJlbFwiLCBcImFyaWEtbGFiZWxsZWRieVwiLCBcImFjdGlvblwiLCBcImNlbnRlcmVkXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwiaW5kaWNhdG9yQ29sb3JcIiwgXCJvbkNoYW5nZVwiLCBcIm9yaWVudGF0aW9uXCIsIFwiU2Nyb2xsQnV0dG9uQ29tcG9uZW50XCIsIFwic2Nyb2xsQnV0dG9uc1wiLCBcInNlbGVjdGlvbkZvbGxvd3NGb2N1c1wiLCBcIlRhYkluZGljYXRvclByb3BzXCIsIFwiVGFiU2Nyb2xsQnV0dG9uUHJvcHNcIiwgXCJ0ZXh0Q29sb3JcIiwgXCJ2YWx1ZVwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBzY3JvbGxhYmxlID0gdmFyaWFudCA9PT0gJ3Njcm9sbGFibGUnO1xuICB2YXIgaXNSdGwgPSB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnO1xuICB2YXIgdmVydGljYWwgPSBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgdmFyIHNjcm9sbFN0YXJ0ID0gdmVydGljYWwgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgdmFyIHN0YXJ0ID0gdmVydGljYWwgPyAndG9wJyA6ICdsZWZ0JztcbiAgdmFyIGVuZCA9IHZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICB2YXIgY2xpZW50U2l6ZSA9IHZlcnRpY2FsID8gJ2NsaWVudEhlaWdodCcgOiAnY2xpZW50V2lkdGgnO1xuICB2YXIgc2l6ZSA9IHZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGNlbnRlcmVkICYmIHNjcm9sbGFibGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBZb3UgY2FuIG5vdCB1c2UgdGhlIGBjZW50ZXJlZD17dHJ1ZX1gIGFuZCBgdmFyaWFudD1cInNjcm9sbGFibGVcImAgcHJvcGVydGllcyAnICsgJ2F0IHRoZSBzYW1lIHRpbWUgb24gYSBgVGFic2AgY29tcG9uZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBtb3VudGVkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0TW91bnRlZCA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKHt9KSxcbiAgICAgIGluZGljYXRvclN0eWxlID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldEluZGljYXRvclN0eWxlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMyA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBzdGFydDogZmFsc2UsXG4gICAgZW5kOiBmYWxzZVxuICB9KSxcbiAgICAgIGRpc3BsYXlTY3JvbGwgPSBfUmVhY3QkdXNlU3RhdGUzWzBdLFxuICAgICAgc2V0RGlzcGxheVNjcm9sbCA9IF9SZWFjdCR1c2VTdGF0ZTNbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTQgPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIG1hcmdpbkJvdHRvbTogbnVsbFxuICB9KSxcbiAgICAgIHNjcm9sbGVyU3R5bGUgPSBfUmVhY3QkdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0U2Nyb2xsZXJTdHlsZSA9IF9SZWFjdCR1c2VTdGF0ZTRbMV07XG5cbiAgdmFyIHZhbHVlVG9JbmRleCA9IG5ldyBNYXAoKTtcbiAgdmFyIHRhYnNSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciB0YWJMaXN0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHZhciBnZXRUYWJzTWV0YSA9IGZ1bmN0aW9uIGdldFRhYnNNZXRhKCkge1xuICAgIHZhciB0YWJzTm9kZSA9IHRhYnNSZWYuY3VycmVudDtcbiAgICB2YXIgdGFic01ldGE7XG5cbiAgICBpZiAodGFic05vZGUpIHtcbiAgICAgIHZhciByZWN0ID0gdGFic05vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCBDbGllbnRSZWN0IGNsYXNzIHByb3BzICsgc2Nyb2xsTGVmdFxuXG4gICAgICB0YWJzTWV0YSA9IHtcbiAgICAgICAgY2xpZW50V2lkdGg6IHRhYnNOb2RlLmNsaWVudFdpZHRoLFxuICAgICAgICBzY3JvbGxMZWZ0OiB0YWJzTm9kZS5zY3JvbGxMZWZ0LFxuICAgICAgICBzY3JvbGxUb3A6IHRhYnNOb2RlLnNjcm9sbFRvcCxcbiAgICAgICAgc2Nyb2xsTGVmdE5vcm1hbGl6ZWQ6IGdldE5vcm1hbGl6ZWRTY3JvbGxMZWZ0KHRhYnNOb2RlLCB0aGVtZS5kaXJlY3Rpb24pLFxuICAgICAgICBzY3JvbGxXaWR0aDogdGFic05vZGUuc2Nyb2xsV2lkdGgsXG4gICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgcmlnaHQ6IHJlY3QucmlnaHRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHRhYk1ldGE7XG5cbiAgICBpZiAodGFic05vZGUgJiYgdmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICB2YXIgX2NoaWxkcmVuID0gdGFiTGlzdFJlZi5jdXJyZW50LmNoaWxkcmVuO1xuXG4gICAgICBpZiAoX2NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHRhYiA9IF9jaGlsZHJlblt2YWx1ZVRvSW5kZXguZ2V0KHZhbHVlKV07XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBpZiAoIXRhYikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIHZhbHVlIHByb3ZpZGVkIHRvIHRoZSBUYWJzIGNvbXBvbmVudCBpcyBpbnZhbGlkLlwiLCBcIk5vbmUgb2YgdGhlIFRhYnMnIGNoaWxkcmVuIG1hdGNoIHdpdGggYFwiLmNvbmNhdCh2YWx1ZSwgXCJgLlwiKSwgdmFsdWVUb0luZGV4LmtleXMgPyBcIllvdSBjYW4gcHJvdmlkZSBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXM6IFwiLmNvbmNhdChBcnJheS5mcm9tKHZhbHVlVG9JbmRleC5rZXlzKCkpLmpvaW4oJywgJyksIFwiLlwiKSA6IG51bGxdLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YWJNZXRhID0gdGFiID8gdGFiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGFic01ldGE6IHRhYnNNZXRhLFxuICAgICAgdGFiTWV0YTogdGFiTWV0YVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHVwZGF0ZUluZGljYXRvclN0YXRlID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9uZXdJbmRpY2F0b3JTdHlsZTtcblxuICAgIHZhciBfZ2V0VGFic01ldGEgPSBnZXRUYWJzTWV0YSgpLFxuICAgICAgICB0YWJzTWV0YSA9IF9nZXRUYWJzTWV0YS50YWJzTWV0YSxcbiAgICAgICAgdGFiTWV0YSA9IF9nZXRUYWJzTWV0YS50YWJNZXRhO1xuXG4gICAgdmFyIHN0YXJ0VmFsdWUgPSAwO1xuXG4gICAgaWYgKHRhYk1ldGEgJiYgdGFic01ldGEpIHtcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICBzdGFydFZhbHVlID0gdGFiTWV0YS50b3AgLSB0YWJzTWV0YS50b3AgKyB0YWJzTWV0YS5zY3JvbGxUb3A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29ycmVjdGlvbiA9IGlzUnRsID8gdGFic01ldGEuc2Nyb2xsTGVmdE5vcm1hbGl6ZWQgKyB0YWJzTWV0YS5jbGllbnRXaWR0aCAtIHRhYnNNZXRhLnNjcm9sbFdpZHRoIDogdGFic01ldGEuc2Nyb2xsTGVmdDtcbiAgICAgICAgc3RhcnRWYWx1ZSA9IHRhYk1ldGEubGVmdCAtIHRhYnNNZXRhLmxlZnQgKyBjb3JyZWN0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBuZXdJbmRpY2F0b3JTdHlsZSA9IChfbmV3SW5kaWNhdG9yU3R5bGUgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9uZXdJbmRpY2F0b3JTdHlsZSwgc3RhcnQsIHN0YXJ0VmFsdWUpLCBfZGVmaW5lUHJvcGVydHkoX25ld0luZGljYXRvclN0eWxlLCBzaXplLCB0YWJNZXRhID8gdGFiTWV0YVtzaXplXSA6IDApLCBfbmV3SW5kaWNhdG9yU3R5bGUpO1xuXG4gICAgaWYgKGlzTmFOKGluZGljYXRvclN0eWxlW3N0YXJ0XSkgfHwgaXNOYU4oaW5kaWNhdG9yU3R5bGVbc2l6ZV0pKSB7XG4gICAgICBzZXRJbmRpY2F0b3JTdHlsZShuZXdJbmRpY2F0b3JTdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBkU3RhcnQgPSBNYXRoLmFicyhpbmRpY2F0b3JTdHlsZVtzdGFydF0gLSBuZXdJbmRpY2F0b3JTdHlsZVtzdGFydF0pO1xuICAgICAgdmFyIGRTaXplID0gTWF0aC5hYnMoaW5kaWNhdG9yU3R5bGVbc2l6ZV0gLSBuZXdJbmRpY2F0b3JTdHlsZVtzaXplXSk7XG5cbiAgICAgIGlmIChkU3RhcnQgPj0gMSB8fCBkU2l6ZSA+PSAxKSB7XG4gICAgICAgIHNldEluZGljYXRvclN0eWxlKG5ld0luZGljYXRvclN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHZhciBzY3JvbGwgPSBmdW5jdGlvbiBzY3JvbGwoc2Nyb2xsVmFsdWUpIHtcbiAgICBhbmltYXRlKHNjcm9sbFN0YXJ0LCB0YWJzUmVmLmN1cnJlbnQsIHNjcm9sbFZhbHVlKTtcbiAgfTtcblxuICB2YXIgbW92ZVRhYnNTY3JvbGwgPSBmdW5jdGlvbiBtb3ZlVGFic1Njcm9sbChkZWx0YSkge1xuICAgIHZhciBzY3JvbGxWYWx1ZSA9IHRhYnNSZWYuY3VycmVudFtzY3JvbGxTdGFydF07XG5cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIHNjcm9sbFZhbHVlICs9IGRlbHRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxWYWx1ZSArPSBkZWx0YSAqIChpc1J0bCA/IC0xIDogMSk7IC8vIEZpeCBmb3IgRWRnZVxuXG4gICAgICBzY3JvbGxWYWx1ZSAqPSBpc1J0bCAmJiBkZXRlY3RTY3JvbGxUeXBlKCkgPT09ICdyZXZlcnNlJyA/IC0xIDogMTtcbiAgICB9XG5cbiAgICBzY3JvbGwoc2Nyb2xsVmFsdWUpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVTdGFydFNjcm9sbENsaWNrID0gZnVuY3Rpb24gaGFuZGxlU3RhcnRTY3JvbGxDbGljaygpIHtcbiAgICBtb3ZlVGFic1Njcm9sbCgtdGFic1JlZi5jdXJyZW50W2NsaWVudFNpemVdKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlRW5kU2Nyb2xsQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVFbmRTY3JvbGxDbGljaygpIHtcbiAgICBtb3ZlVGFic1Njcm9sbCh0YWJzUmVmLmN1cnJlbnRbY2xpZW50U2l6ZV0pO1xuICB9O1xuXG4gIHZhciBoYW5kbGVTY3JvbGxiYXJTaXplQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHNjcm9sbGJhckhlaWdodCkge1xuICAgIHNldFNjcm9sbGVyU3R5bGUoe1xuICAgICAgb3ZlcmZsb3c6IG51bGwsXG4gICAgICBtYXJnaW5Cb3R0b206IC1zY3JvbGxiYXJIZWlnaHRcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHZhciBnZXRDb25kaXRpb25hbEVsZW1lbnRzID0gZnVuY3Rpb24gZ2V0Q29uZGl0aW9uYWxFbGVtZW50cygpIHtcbiAgICB2YXIgY29uZGl0aW9uYWxFbGVtZW50cyA9IHt9O1xuICAgIGNvbmRpdGlvbmFsRWxlbWVudHMuc2Nyb2xsYmFyU2l6ZUxpc3RlbmVyID0gc2Nyb2xsYWJsZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNjcm9sbGJhclNpemUsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zY3JvbGxhYmxlLFxuICAgICAgb25DaGFuZ2U6IGhhbmRsZVNjcm9sbGJhclNpemVDaGFuZ2VcbiAgICB9KSA6IG51bGw7XG4gICAgdmFyIHNjcm9sbEJ1dHRvbnNBY3RpdmUgPSBkaXNwbGF5U2Nyb2xsLnN0YXJ0IHx8IGRpc3BsYXlTY3JvbGwuZW5kO1xuICAgIHZhciBzaG93U2Nyb2xsQnV0dG9ucyA9IHNjcm9sbGFibGUgJiYgKHNjcm9sbEJ1dHRvbnMgPT09ICdhdXRvJyAmJiBzY3JvbGxCdXR0b25zQWN0aXZlIHx8IHNjcm9sbEJ1dHRvbnMgPT09ICdkZXNrdG9wJyB8fCBzY3JvbGxCdXR0b25zID09PSAnb24nKTtcbiAgICBjb25kaXRpb25hbEVsZW1lbnRzLnNjcm9sbEJ1dHRvblN0YXJ0ID0gc2hvd1Njcm9sbEJ1dHRvbnMgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxCdXR0b25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbixcbiAgICAgIGRpcmVjdGlvbjogaXNSdGwgPyAncmlnaHQnIDogJ2xlZnQnLFxuICAgICAgb25DbGljazogaGFuZGxlU3RhcnRTY3JvbGxDbGljayxcbiAgICAgIGRpc2FibGVkOiAhZGlzcGxheVNjcm9sbC5zdGFydCxcbiAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnNjcm9sbEJ1dHRvbnMsIHNjcm9sbEJ1dHRvbnMgIT09ICdvbicgJiYgY2xhc3Nlcy5zY3JvbGxCdXR0b25zRGVza3RvcClcbiAgICB9LCBUYWJTY3JvbGxCdXR0b25Qcm9wcykpIDogbnVsbDtcbiAgICBjb25kaXRpb25hbEVsZW1lbnRzLnNjcm9sbEJ1dHRvbkVuZCA9IHNob3dTY3JvbGxCdXR0b25zID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsQnV0dG9uQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICBvcmllbnRhdGlvbjogb3JpZW50YXRpb24sXG4gICAgICBkaXJlY3Rpb246IGlzUnRsID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUVuZFNjcm9sbENsaWNrLFxuICAgICAgZGlzYWJsZWQ6ICFkaXNwbGF5U2Nyb2xsLmVuZCxcbiAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnNjcm9sbEJ1dHRvbnMsIHNjcm9sbEJ1dHRvbnMgIT09ICdvbicgJiYgY2xhc3Nlcy5zY3JvbGxCdXR0b25zRGVza3RvcClcbiAgICB9LCBUYWJTY3JvbGxCdXR0b25Qcm9wcykpIDogbnVsbDtcbiAgICByZXR1cm4gY29uZGl0aW9uYWxFbGVtZW50cztcbiAgfTtcblxuICB2YXIgc2Nyb2xsU2VsZWN0ZWRJbnRvVmlldyA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBfZ2V0VGFic01ldGEyID0gZ2V0VGFic01ldGEoKSxcbiAgICAgICAgdGFic01ldGEgPSBfZ2V0VGFic01ldGEyLnRhYnNNZXRhLFxuICAgICAgICB0YWJNZXRhID0gX2dldFRhYnNNZXRhMi50YWJNZXRhO1xuXG4gICAgaWYgKCF0YWJNZXRhIHx8ICF0YWJzTWV0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YWJNZXRhW3N0YXJ0XSA8IHRhYnNNZXRhW3N0YXJ0XSkge1xuICAgICAgLy8gbGVmdCBzaWRlIG9mIGJ1dHRvbiBpcyBvdXQgb2Ygdmlld1xuICAgICAgdmFyIG5leHRTY3JvbGxTdGFydCA9IHRhYnNNZXRhW3Njcm9sbFN0YXJ0XSArICh0YWJNZXRhW3N0YXJ0XSAtIHRhYnNNZXRhW3N0YXJ0XSk7XG4gICAgICBzY3JvbGwobmV4dFNjcm9sbFN0YXJ0KTtcbiAgICB9IGVsc2UgaWYgKHRhYk1ldGFbZW5kXSA+IHRhYnNNZXRhW2VuZF0pIHtcbiAgICAgIC8vIHJpZ2h0IHNpZGUgb2YgYnV0dG9uIGlzIG91dCBvZiB2aWV3XG4gICAgICB2YXIgX25leHRTY3JvbGxTdGFydCA9IHRhYnNNZXRhW3Njcm9sbFN0YXJ0XSArICh0YWJNZXRhW2VuZF0gLSB0YWJzTWV0YVtlbmRdKTtcblxuICAgICAgc2Nyb2xsKF9uZXh0U2Nyb2xsU3RhcnQpO1xuICAgIH1cbiAgfSk7XG4gIHZhciB1cGRhdGVTY3JvbGxCdXR0b25TdGF0ZSA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGxhYmxlICYmIHNjcm9sbEJ1dHRvbnMgIT09ICdvZmYnKSB7XG4gICAgICB2YXIgX3RhYnNSZWYkY3VycmVudCA9IHRhYnNSZWYuY3VycmVudCxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfdGFic1JlZiRjdXJyZW50LnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBfdGFic1JlZiRjdXJyZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSBfdGFic1JlZiRjdXJyZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICBzY3JvbGxXaWR0aCA9IF90YWJzUmVmJGN1cnJlbnQuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgY2xpZW50V2lkdGggPSBfdGFic1JlZiRjdXJyZW50LmNsaWVudFdpZHRoO1xuICAgICAgdmFyIHNob3dTdGFydFNjcm9sbDtcbiAgICAgIHZhciBzaG93RW5kU2Nyb2xsO1xuXG4gICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgc2hvd1N0YXJ0U2Nyb2xsID0gc2Nyb2xsVG9wID4gMTtcbiAgICAgICAgc2hvd0VuZFNjcm9sbCA9IHNjcm9sbFRvcCA8IHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IGdldE5vcm1hbGl6ZWRTY3JvbGxMZWZ0KHRhYnNSZWYuY3VycmVudCwgdGhlbWUuZGlyZWN0aW9uKTsgLy8gdXNlIDEgZm9yIHRoZSBwb3RlbnRpYWwgcm91bmRpbmcgZXJyb3Igd2l0aCBicm93c2VyIHpvb21zLlxuXG4gICAgICAgIHNob3dTdGFydFNjcm9sbCA9IGlzUnRsID8gc2Nyb2xsTGVmdCA8IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggLSAxIDogc2Nyb2xsTGVmdCA+IDE7XG4gICAgICAgIHNob3dFbmRTY3JvbGwgPSAhaXNSdGwgPyBzY3JvbGxMZWZ0IDwgc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCAtIDEgOiBzY3JvbGxMZWZ0ID4gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3dTdGFydFNjcm9sbCAhPT0gZGlzcGxheVNjcm9sbC5zdGFydCB8fCBzaG93RW5kU2Nyb2xsICE9PSBkaXNwbGF5U2Nyb2xsLmVuZCkge1xuICAgICAgICBzZXREaXNwbGF5U2Nyb2xsKHtcbiAgICAgICAgICBzdGFydDogc2hvd1N0YXJ0U2Nyb2xsLFxuICAgICAgICAgIGVuZDogc2hvd0VuZFNjcm9sbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVSZXNpemUgPSBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICB1cGRhdGVJbmRpY2F0b3JTdGF0ZSgpO1xuICAgICAgdXBkYXRlU2Nyb2xsQnV0dG9uU3RhdGUoKTtcbiAgICB9KTtcbiAgICB2YXIgd2luID0gb3duZXJXaW5kb3codGFic1JlZi5jdXJyZW50KTtcbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlUmVzaXplLmNsZWFyKCk7XG4gICAgICB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbdXBkYXRlSW5kaWNhdG9yU3RhdGUsIHVwZGF0ZVNjcm9sbEJ1dHRvblN0YXRlXSk7XG4gIHZhciBoYW5kbGVUYWJzU2Nyb2xsID0gUmVhY3QudXNlQ2FsbGJhY2soZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgIHVwZGF0ZVNjcm9sbEJ1dHRvblN0YXRlKCk7XG4gIH0pKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlVGFic1Njcm9sbC5jbGVhcigpO1xuICAgIH07XG4gIH0sIFtoYW5kbGVUYWJzU2Nyb2xsXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHVwZGF0ZUluZGljYXRvclN0YXRlKCk7XG4gICAgdXBkYXRlU2Nyb2xsQnV0dG9uU3RhdGUoKTtcbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2Nyb2xsU2VsZWN0ZWRJbnRvVmlldygpO1xuICB9LCBbc2Nyb2xsU2VsZWN0ZWRJbnRvVmlldywgaW5kaWNhdG9yU3R5bGVdKTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShhY3Rpb24sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlSW5kaWNhdG9yOiB1cGRhdGVJbmRpY2F0b3JTdGF0ZSxcbiAgICAgIHVwZGF0ZVNjcm9sbEJ1dHRvbnM6IHVwZGF0ZVNjcm9sbEJ1dHRvblN0YXRlXG4gICAgfTtcbiAgfSwgW3VwZGF0ZUluZGljYXRvclN0YXRlLCB1cGRhdGVTY3JvbGxCdXR0b25TdGF0ZV0pO1xuICB2YXIgaW5kaWNhdG9yID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiSW5kaWNhdG9yLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmluZGljYXRvcixcbiAgICBvcmllbnRhdGlvbjogb3JpZW50YXRpb24sXG4gICAgY29sb3I6IGluZGljYXRvckNvbG9yXG4gIH0sIFRhYkluZGljYXRvclByb3BzLCB7XG4gICAgc3R5bGU6IF9leHRlbmRzKHt9LCBpbmRpY2F0b3JTdHlsZSwgVGFiSW5kaWNhdG9yUHJvcHMuc3R5bGUpXG4gIH0pKTtcbiAgdmFyIGNoaWxkSW5kZXggPSAwO1xuICB2YXIgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW5Qcm9wLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGlzRnJhZ21lbnQoY2hpbGQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSBUYWJzIGNvbXBvbmVudCBkb2Vzbid0IGFjY2VwdCBhIEZyYWdtZW50IGFzIGEgY2hpbGQuXCIsICdDb25zaWRlciBwcm92aWRpbmcgYW4gYXJyYXkgaW5zdGVhZC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkVmFsdWUgPSBjaGlsZC5wcm9wcy52YWx1ZSA9PT0gdW5kZWZpbmVkID8gY2hpbGRJbmRleCA6IGNoaWxkLnByb3BzLnZhbHVlO1xuICAgIHZhbHVlVG9JbmRleC5zZXQoY2hpbGRWYWx1ZSwgY2hpbGRJbmRleCk7XG4gICAgdmFyIHNlbGVjdGVkID0gY2hpbGRWYWx1ZSA9PT0gdmFsdWU7XG4gICAgY2hpbGRJbmRleCArPSAxO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBmdWxsV2lkdGg6IHZhcmlhbnQgPT09ICdmdWxsV2lkdGgnLFxuICAgICAgaW5kaWNhdG9yOiBzZWxlY3RlZCAmJiAhbW91bnRlZCAmJiBpbmRpY2F0b3IsXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWQsXG4gICAgICBzZWxlY3Rpb25Gb2xsb3dzRm9jdXM6IHNlbGVjdGlvbkZvbGxvd3NGb2N1cyxcbiAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICAgIHRleHRDb2xvcjogdGV4dENvbG9yLFxuICAgICAgdmFsdWU6IGNoaWxkVmFsdWVcbiAgICB9KTtcbiAgfSk7XG5cbiAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDsgLy8gS2V5Ym9hcmQgbmF2aWdhdGlvbiBhc3N1bWVzIHRoYXQgW3JvbGU9XCJ0YWJcIl0gYXJlIHNpYmxpbmdzXG4gICAgLy8gdGhvdWdoIHdlIG1pZ2h0IHdhcm4gaW4gdGhlIGZ1dHVyZSBhYm91dCBuZXN0ZWQsIGludGVyYWN0aXZlIGVsZW1lbnRzXG4gICAgLy8gYXMgYSBhMTF5IHZpb2xhdGlvblxuXG4gICAgdmFyIHJvbGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdyb2xlJyk7XG5cbiAgICBpZiAocm9sZSAhPT0gJ3RhYicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV3Rm9jdXNUYXJnZXQgPSBudWxsO1xuICAgIHZhciBwcmV2aW91c0l0ZW1LZXkgPSBvcmllbnRhdGlvbiAhPT0gXCJ2ZXJ0aWNhbFwiID8gJ0Fycm93TGVmdCcgOiAnQXJyb3dVcCc7XG4gICAgdmFyIG5leHRJdGVtS2V5ID0gb3JpZW50YXRpb24gIT09IFwidmVydGljYWxcIiA/ICdBcnJvd1JpZ2h0JyA6ICdBcnJvd0Rvd24nO1xuXG4gICAgaWYgKG9yaWVudGF0aW9uICE9PSBcInZlcnRpY2FsXCIgJiYgdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgLy8gc3dhcCBwcmV2aW91c0l0ZW1LZXkgd2l0aCBuZXh0SXRlbUtleVxuICAgICAgcHJldmlvdXNJdGVtS2V5ID0gJ0Fycm93UmlnaHQnO1xuICAgICAgbmV4dEl0ZW1LZXkgPSAnQXJyb3dMZWZ0JztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSBwcmV2aW91c0l0ZW1LZXk6XG4gICAgICAgIG5ld0ZvY3VzVGFyZ2V0ID0gdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcgfHwgdGFiTGlzdFJlZi5jdXJyZW50Lmxhc3RDaGlsZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgbmV4dEl0ZW1LZXk6XG4gICAgICAgIG5ld0ZvY3VzVGFyZ2V0ID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyB8fCB0YWJMaXN0UmVmLmN1cnJlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICBuZXdGb2N1c1RhcmdldCA9IHRhYkxpc3RSZWYuY3VycmVudC5maXJzdENoaWxkO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgbmV3Rm9jdXNUYXJnZXQgPSB0YWJMaXN0UmVmLmN1cnJlbnQubGFzdENoaWxkO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKG5ld0ZvY3VzVGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICBuZXdGb2N1c1RhcmdldC5mb2N1cygpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNvbmRpdGlvbmFsRWxlbWVudHMgPSBnZXRDb25kaXRpb25hbEVsZW1lbnRzKCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIHZlcnRpY2FsICYmIGNsYXNzZXMudmVydGljYWwpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgY29uZGl0aW9uYWxFbGVtZW50cy5zY3JvbGxCdXR0b25TdGFydCwgY29uZGl0aW9uYWxFbGVtZW50cy5zY3JvbGxiYXJTaXplTGlzdGVuZXIsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5zY3JvbGxlciwgc2Nyb2xsYWJsZSA/IGNsYXNzZXMuc2Nyb2xsYWJsZSA6IGNsYXNzZXMuZml4ZWQpLFxuICAgIHN0eWxlOiBzY3JvbGxlclN0eWxlLFxuICAgIHJlZjogdGFic1JlZixcbiAgICBvblNjcm9sbDogaGFuZGxlVGFic1Njcm9sbFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWxsZWRCeSxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5mbGV4Q29udGFpbmVyLCB2ZXJ0aWNhbCAmJiBjbGFzc2VzLmZsZXhDb250YWluZXJWZXJ0aWNhbCwgY2VudGVyZWQgJiYgIXNjcm9sbGFibGUgJiYgY2xhc3Nlcy5jZW50ZXJlZCksXG4gICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgIHJlZjogdGFiTGlzdFJlZixcbiAgICByb2xlOiBcInRhYmxpc3RcIlxuICB9LCBjaGlsZHJlbiksIG1vdW50ZWQgJiYgaW5kaWNhdG9yKSwgY29uZGl0aW9uYWxFbGVtZW50cy5zY3JvbGxCdXR0b25FbmQpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWJzLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gICAqIFRoaXMgaXMgdXNlZnVsIHdoZW4geW91IHdhbnQgdG8gdHJpZ2dlciBhbiBhY3Rpb24gcHJvZ3JhbW1hdGljYWxseS5cbiAgICogSXQgc3VwcG9ydHMgdHdvIGFjdGlvbnM6IGB1cGRhdGVJbmRpY2F0b3IoKWAgYW5kIGB1cGRhdGVTY3JvbGxCdXR0b25zKClgXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhY3Rpb25zIFRoaXMgb2JqZWN0IGNvbnRhaW5zIGFsbCBwb3NzaWJsZSBhY3Rpb25zXG4gICAqIHRoYXQgY2FuIGJlIHRyaWdnZXJlZCBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgYWN0aW9uOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgZm9yIHRoZSBUYWJzIGFzIGEgc3RyaW5nLlxuICAgKi9cbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBbiBpZCBvciBsaXN0IG9mIGlkcyBzZXBhcmF0ZWQgYnkgYSBzcGFjZSB0aGF0IGxhYmVsIHRoZSBUYWJzLlxuICAgKi9cbiAgJ2FyaWEtbGFiZWxsZWRieSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRhYnMgd2lsbCBiZSBjZW50ZXJlZC5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBpbnRlbmRlZCBmb3IgbGFyZ2Ugdmlld3MuXG4gICAqL1xuICBjZW50ZXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgY29sb3Igb2YgdGhlIGluZGljYXRvci5cbiAgICovXG4gIGluZGljYXRvckNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBXZSBkZWZhdWx0IHRvIHRoZSBpbmRleCBvZiB0aGUgY2hpbGQgKG51bWJlcilcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIHRhYnMgb3JpZW50YXRpb24gKGxheW91dCBmbG93IGRpcmVjdGlvbikuXG4gICAqL1xuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIHRvIHJlbmRlciB0aGUgc2Nyb2xsIGJ1dHRvbnMuXG4gICAqL1xuICBTY3JvbGxCdXR0b25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGJlaGF2aW9yIG9mIHNjcm9sbCBidXR0b25zIHdoZW4gdGFicyBhcmUgc2V0IHRvIHNjcm9sbDpcbiAgICpcbiAgICogLSBgYXV0b2Agd2lsbCBvbmx5IHByZXNlbnQgdGhlbSB3aGVuIG5vdCBhbGwgdGhlIGl0ZW1zIGFyZSB2aXNpYmxlLlxuICAgKiAtIGBkZXNrdG9wYCB3aWxsIG9ubHkgcHJlc2VudCB0aGVtIG9uIG1lZGl1bSBhbmQgbGFyZ2VyIHZpZXdwb3J0cy5cbiAgICogLSBgb25gIHdpbGwgYWx3YXlzIHByZXNlbnQgdGhlbS5cbiAgICogLSBgb2ZmYCB3aWxsIG5ldmVyIHByZXNlbnQgdGhlbS5cbiAgICovXG4gIHNjcm9sbEJ1dHRvbnM6IFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nLCAnZGVza3RvcCcsICdvZmYnLCAnb24nXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCB0aGUgc2VsZWN0ZWQgdGFiIGNoYW5nZXMgb24gZm9jdXMuIE90aGVyd2lzZSBpdCBvbmx5XG4gICAqIGNoYW5nZXMgb24gYWN0aXZhdGlvbi5cbiAgICovXG4gIHNlbGVjdGlvbkZvbGxvd3NGb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIHRhYiBpbmRpY2F0b3IgZWxlbWVudC5cbiAgICovXG4gIFRhYkluZGljYXRvclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFRhYlNjcm9sbEJ1dHRvbmBdKC9hcGkvdGFiLXNjcm9sbC1idXR0b24vKSBlbGVtZW50LlxuICAgKi9cbiAgVGFiU2Nyb2xsQnV0dG9uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIGNvbG9yIG9mIHRoZSBgVGFiYC5cbiAgICovXG4gIHRleHRDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgYFRhYmAuXG4gICAqIElmIHlvdSBkb24ndCB3YW50IGFueSBzZWxlY3RlZCBgVGFiYCwgeW91IGNhbiBzZXQgdGhpcyBwcm9wZXJ0eSB0byBgZmFsc2VgLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgYWRkaXRpb25hbCBkaXNwbGF5IGJlaGF2aW9yIG9mIHRoZSB0YWJzOlxuICAgKlxuICAgKiAgLSBgc2Nyb2xsYWJsZWAgd2lsbCBpbnZva2Ugc2Nyb2xsaW5nIHByb3BlcnRpZXMgYW5kIGFsbG93IGZvciBob3Jpem9udGFsbHlcbiAgICogIHNjcm9sbGluZyAob3Igc3dpcGluZykgb2YgdGhlIHRhYiBiYXIuXG4gICAqICAtYGZ1bGxXaWR0aGAgd2lsbCBtYWtlIHRoZSB0YWJzIGdyb3cgdG8gdXNlIGFsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLFxuICAgKiAgd2hpY2ggc2hvdWxkIGJlIHVzZWQgZm9yIHNtYWxsIHZpZXdzLCBsaWtlIG9uIG1vYmlsZS5cbiAgICogIC0gYHN0YW5kYXJkYCB3aWxsIHJlbmRlciB0aGUgZGVmYXVsdCBzdGF0ZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2Z1bGxXaWR0aCcsICdzY3JvbGxhYmxlJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVRhYnMnXG59KShUYWJzKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UYWJzJzsiLCJmdW5jdGlvbiBlYXNlSW5PdXRTaW4odGltZSkge1xuICByZXR1cm4gKDEgKyBNYXRoLnNpbihNYXRoLlBJICogdGltZSAtIE1hdGguUEkgLyAyKSkgLyAyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbmltYXRlKHByb3BlcnR5LCBlbGVtZW50LCB0bykge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gIHZhciBjYiA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZnVuY3Rpb24gKCkge307XG4gIHZhciBfb3B0aW9ucyRlYXNlID0gb3B0aW9ucy5lYXNlLFxuICAgICAgZWFzZSA9IF9vcHRpb25zJGVhc2UgPT09IHZvaWQgMCA/IGVhc2VJbk91dFNpbiA6IF9vcHRpb25zJGVhc2UsXG4gICAgICBfb3B0aW9ucyRkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICBkdXJhdGlvbiA9IF9vcHRpb25zJGR1cmF0aW9uID09PSB2b2lkIDAgPyAzMDAgOiBfb3B0aW9ucyRkdXJhdGlvbjtcbiAgdmFyIHN0YXJ0ID0gbnVsbDtcbiAgdmFyIGZyb20gPSBlbGVtZW50W3Byb3BlcnR5XTtcbiAgdmFyIGNhbmNlbGxlZCA9IGZhbHNlO1xuXG4gIHZhciBjYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfTtcblxuICB2YXIgc3RlcCA9IGZ1bmN0aW9uIHN0ZXAodGltZXN0YW1wKSB7XG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY2IobmV3IEVycm9yKCdBbmltYXRpb24gY2FuY2VsbGVkJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA9PT0gbnVsbCkge1xuICAgICAgc3RhcnQgPSB0aW1lc3RhbXA7XG4gICAgfVxuXG4gICAgdmFyIHRpbWUgPSBNYXRoLm1pbigxLCAodGltZXN0YW1wIC0gc3RhcnQpIC8gZHVyYXRpb24pO1xuICAgIGVsZW1lbnRbcHJvcGVydHldID0gZWFzZSh0aW1lKSAqICh0byAtIGZyb20pICsgZnJvbTtcblxuICAgIGlmICh0aW1lID49IDEpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNiKG51bGwpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICB9O1xuXG4gIGlmIChmcm9tID09PSB0bykge1xuICAgIGNiKG5ldyBFcnJvcignRWxlbWVudCBhbHJlYWR5IGF0IHRhcmdldCBwb3NpdGlvbicpKTtcbiAgICByZXR1cm4gY2FuY2VsO1xuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICByZXR1cm4gY2FuY2VsO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE1LjQxIDE2LjA5bC00LjU4LTQuNTkgNC41OC00LjU5TDE0IDUuNWwtNiA2IDYgNnpcIlxufSksICdLZXlib2FyZEFycm93TGVmdCcpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTguNTkgMTYuMzRsNC41OC00LjU5LTQuNTgtNC41OUwxMCA1Ljc1bDYgNi02IDZ6XCJcbn0pLCAnS2V5Ym9hcmRBcnJvd1JpZ2h0Jyk7IiwiLy8gU291cmNlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FsaXRhaGVyaS9ub3JtYWxpemUtc2Nyb2xsLWxlZnRcbnZhciBjYWNoZWRUeXBlO1xuLyoqXG4gKiBCYXNlZCBvbiB0aGUganF1ZXJ5IHBsdWdpbiBodHRwczovL2dpdGh1Yi5jb20vb3RocmVlL2pxdWVyeS5ydGwtc2Nyb2xsLXR5cGVcbiAqXG4gKiBUeXBlcyBvZiBzY3JvbGxMZWZ0LCBhc3NpbWluZyBzY3JvbGxXaWR0aD0xMDAgYW5kIGRpcmVjdGlvbiBpcyBydGwuXG4gKlxuICogQnJvd3NlciAgICAgICAgfCBUeXBlICAgICAgICAgIHwgPC0gTW9zdCBMZWZ0IHwgTW9zdCBSaWdodCAtPiB8IEluaXRpYWxcbiAqIC0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tXG4gKiBXZWJLaXQgICAgICAgICB8IGRlZmF1bHQgICAgICAgfCAwICAgICAgICAgICAgfCAxMDAgICAgICAgICAgIHwgMTAwXG4gKiBGaXJlZm94L09wZXJhICB8IG5lZ2F0aXZlICAgICAgfCAtMTAwICAgICAgICAgfCAwICAgICAgICAgICAgIHwgMFxuICogSUUvRWRnZSAgICAgICAgfCByZXZlcnNlICAgICAgIHwgMTAwICAgICAgICAgIHwgMCAgICAgICAgICAgICB8IDBcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0U2Nyb2xsVHlwZSgpIHtcbiAgaWYgKGNhY2hlZFR5cGUpIHtcbiAgICByZXR1cm4gY2FjaGVkVHlwZTtcbiAgfVxuXG4gIHZhciBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdW1teS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQUJDRCcpKTtcbiAgZHVtbXkuZGlyID0gJ3J0bCc7XG4gIGR1bW15LnN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xuICBkdW1teS5zdHlsZS53aWR0aCA9ICc0cHgnO1xuICBkdW1teS5zdHlsZS5oZWlnaHQgPSAnMXB4JztcbiAgZHVtbXkuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBkdW1teS5zdHlsZS50b3AgPSAnLTEwMDBweCc7XG4gIGR1bW15LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHVtbXkpO1xuICBjYWNoZWRUeXBlID0gJ3JldmVyc2UnO1xuXG4gIGlmIChkdW1teS5zY3JvbGxMZWZ0ID4gMCkge1xuICAgIGNhY2hlZFR5cGUgPSAnZGVmYXVsdCc7XG4gIH0gZWxzZSB7XG4gICAgZHVtbXkuc2Nyb2xsTGVmdCA9IDE7XG5cbiAgICBpZiAoZHVtbXkuc2Nyb2xsTGVmdCA9PT0gMCkge1xuICAgICAgY2FjaGVkVHlwZSA9ICduZWdhdGl2ZSc7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkdW1teSk7XG4gIHJldHVybiBjYWNoZWRUeXBlO1xufSAvLyBCYXNlZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjQzOTQzNzZcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRTY3JvbGxMZWZ0KGVsZW1lbnQsIGRpcmVjdGlvbikge1xuICB2YXIgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDsgLy8gUGVyZm9ybSB0aGUgY2FsY3VsYXRpb25zIG9ubHkgd2hlbiBkaXJlY3Rpb24gaXMgcnRsIHRvIGF2b2lkIG1lc3NpbmcgdXAgdGhlIGx0ciBiYWhhdmlvclxuXG4gIGlmIChkaXJlY3Rpb24gIT09ICdydGwnKSB7XG4gICAgcmV0dXJuIHNjcm9sbExlZnQ7XG4gIH1cblxuICB2YXIgdHlwZSA9IGRldGVjdFNjcm9sbFR5cGUoKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICduZWdhdGl2ZSc6XG4gICAgICByZXR1cm4gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxMZWZ0O1xuXG4gICAgY2FzZSAncmV2ZXJzZSc6XG4gICAgICByZXR1cm4gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggLSBzY3JvbGxMZWZ0O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzY3JvbGxMZWZ0O1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5zdXBwb3J0ZWRQcm9wKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgaWYgKHR5cGVvZiBwcm9wc1twcm9wTmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIlRoZSBwcm9wIGBcIi5jb25jYXQocHJvcEZ1bGxOYW1lU2FmZSwgXCJgIGlzIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSByZW1vdmUgaXQuXCIpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptNSAxMUg3di0yaDEwdjJ6XCJcbn0pLCAnUmVtb3ZlQ2lyY2xlJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiO1xyXG5pbXBvcnQgVGFiIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCI7XHJcblxyXG5pbXBvcnQgUGF0dGVybkxpc3QgZnJvbSBcIi4vUGF0dGVybkxpc3RcIjtcclxuaW1wb3J0IFNpbXBsZVNlbGVjdCBmcm9tIFwiLi9TZWxlY3RcIjtcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuL0NhbGVuZGFyXCI7XHJcbmltcG9ydCBDYWxlbmRhcjIgZnJvbSBcIi4uL3Rlc3QvY2FsZW5kYXJcIjtcclxuaW1wb3J0IENhbGVuZGFyMyBmcm9tIFwiLi4vdGVzdC9DYWxlbmRhcjNcIjtcclxuaW1wb3J0IENhbGVuZGFyNCBmcm9tIFwiLi4vdGVzdC9jYWxlbmRhcjQuanN4XCI7XHJcblxyXG5pbnRlcmZhY2UgVGFiUGFuZWxQcm9wcyB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGluZGV4OiBhbnk7XHJcbiAgICB2YWx1ZTogYW55O1xyXG59XHJcblxyXG5mdW5jdGlvbiBUYWJQYW5lbChwcm9wczogVGFiUGFuZWxQcm9wcykge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxyXG4gICAgICAgICAgICBpZD17YHNjcm9sbGFibGUtYXV0by10YWJwYW5lbC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17YHNjcm9sbGFibGUtYXV0by10YWItJHtpbmRleH1gfVxyXG4gICAgICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsdWUgPT09IGluZGV4ICYmIChcclxuICAgICAgICAgICAgICAgIDxCb3ggcD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4OiBhbnkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGBzY3JvbGxhYmxlLWF1dG8tdGFiLSR7aW5kZXh9YCxcclxuICAgICAgICBcImFyaWEtY29udHJvbHNcIjogYHNjcm9sbGFibGUtYXV0by10YWJwYW5lbC0ke2luZGV4fWAsXHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIC8vIHBhZGRpbmdUb3A6JzcwcHgnLFxyXG4gICAgICAgIC8vIGRpc3BsYXk6J2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBiYXJTaXplOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxhYmxlVGFic0J1dHRvbkF1dG8oKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Nob2ljZSwgc2V0Q2hvaWNlXSA9IFJlYWN0LnVzZVN0YXRlKE51bWJlcik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7fT4sIG5ld1ZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxBcHBCYXJcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFyU2l6ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxCdXR0b25zPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNjcm9sbGFibGUgYXV0byB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJQYXR0ZXJuXCIgey4uLmExMXlQcm9wcygwKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiQ2FsZW5kYXJcIiB7Li4uYTExeVByb3BzKDEpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9PlxyXG4gICAgICAgICAgICAgICAgPFNpbXBsZVNlbGVjdCBjaG9pY2U9e2Nob2ljZX0gc2V0Q2hvaWNlPXtzZXRDaG9pY2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8UGF0dGVybkxpc3QgY2hvaWNlPXtjaG9pY2V9IC8+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsxfT5cclxuICAgICAgICAgICAgICAgIDxTaW1wbGVTZWxlY3QgY2hvaWNlPXtjaG9pY2V9IHNldENob2ljZT17c2V0Q2hvaWNlfS8+XHJcbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXIzIGNob2ljZT17Y2hvaWNlfSAvPlxyXG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ29tbWVudFwiO1xyXG5pbXBvcnQgUmVtb3ZlQ2lyY2xlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZUNpcmNsZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290czoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA3MjAsXHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdHRlcm5MaXN0KHByb3BzOiB7IGNob2ljZTogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKFswXSk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAodmFsdWU6IG51bWJlcikgPT4gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNoZWNrZWQuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgbmV3Q2hlY2tlZCA9IFsuLi5jaGVja2VkXTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgbmV3Q2hlY2tlZC5wdXNoKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdDaGVja2VkLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q2hlY2tlZChuZXdDaGVja2VkKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gdXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IHByb3BzLmNob2ljZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImNob2ljZVBhdHRlcm5UYXNrczpcIiArIGNob2ljZVBhdHRlcm5UYXNrcyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdHN9PlxyXG4gICAgICAgICAgICB7Y2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1BhdHRlcm4gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybkluZm9cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuSW5mby5wYXR0ZXJuSUQgPT0gcHJvcHMuY2hvaWNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbElkID0gYGNoZWNrYm94LWxpc3QtbGFiZWwtJHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrUGF0dGVyblswXS5wYXR0ZXJuSUQgKyB0YXNrUGF0dGVyblswXS5vcmRlclxyXG4gICAgICAgICAgICAgICAgfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0YXNrUGF0dGVyblswXS5wYXR0ZXJuSUQgKyB0YXNrUGF0dGVyblswXS5vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ucGF0dGVybklEICsgdGFza1BhdHRlcm5bMF0ub3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZUljb24gY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2xhYmVsSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgTGluZSBpdGVtICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ucGF0dGVybklEICsgJ18nICsgdGFza1BhdHRlcm5bMF0ub3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gJHt0YXNrLmRldGFpbFtcInRlc3REZXRhaWwxXCJdfSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGV0YWlsW1widGVzdERldGFpbDJcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuXHJcbmltcG9ydCBUYXNrTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy92aWV3L1Rhc2tMaXN0XCI7XHJcbmltcG9ydCBSZXNwb25zaXZlRHJhd2VyIGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZXcvUmVzcG9uc2l2ZURyYXdlclwiO1xyXG5pbXBvcnQgRmxvYXRpbmdBY3Rpb25CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlldy8vRmxvYXRpbmdBY3Rpb25CdXR0b25cIjtcclxuXHJcbmltcG9ydCBMaXN0Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L2dldERhdGFcIjtcclxuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRm9ybUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRmlyZWJhc2VBdXRoQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L0ZpcmViYXNlQXV0aENvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXNrTGlzdDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI5MHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjI0MHB4XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5cclxuY29uc3QgVGFza3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICB7LyogLy8gPEJveD4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8Qm94IGNvbXBvbmVudD1cInNwYW5cIiBtPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT4gKi99XHJcbiAgICAgICAgICAgIDxSZXNwb25zaXZlRHJhd2VyIC8+XHJcbiAgICAgICAgICAgIHsvKiA8RGVuc2VBcHBCYXIgLz4gKi99XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRhc2tMaXN0fT5cclxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0FjdGlvbkJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxUYXNrTGlzdCAvPiAqL31cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIHsvKiA8VG9vbHRpcCAvPiAqL31cclxuICAgICAgICAgICAgey8qIDxUb29sdGlwcyBvbkNsaWNrPXt9Lz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8Qm90dG9tTmF2aWdhdGlvbiAvPiAqL31cclxuICAgICAgICAgICAgey8qIDwvQm94PiAqL31cclxuICAgICAgICAgICAgey8qIDwvQm94PiAqL31cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMudGFza0xpc3R9PlxyXG4gICAgICAgICAgICAgICAgPEZpcmViYXNlQXV0aENvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9