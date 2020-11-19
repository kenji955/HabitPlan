module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/Home.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/shared/withAuth.tsx":
/*!********************************************!*\
  !*** ./src/components/shared/withAuth.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test/firebaseTest/firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\shared\\withAuth.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function withAuth(Component) {
  // const [status,setStatus] = useState('LOADING');
  return class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: "LOADING"
      };
    }

    componentDidMount() {
      _test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_2__["auth"].onAuthStateChanged(authUser => {
        if (authUser) {
          this.setState({
            status: "SIGNED_IN"
          }); //   setStatus('SIGNED_IN')
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
        }
      });
    }

    renderContent() {
      const status = this.state.status;
      console.log(status);

      if (status == "LOADING") {// return <h1>Loading ......</h1>;
      } else if (status == "SIGNED_IN") {
        return __jsx(Component, _extends({}, this.props, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 24
          }
        }));
      }
    }

    render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.renderContent());
    }

  };
} // export default withAuth;

/***/ }),

/***/ "./src/components/test/firebaseTest/firebaseTest.tsx":
/*!***********************************************************!*\
  !*** ./src/components/test/firebaseTest/firebaseTest.tsx ***!
  \***********************************************************/
/*! exports provided: firebase, auth, database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);
 // 認証周りやDB周りで必要なためimportしておく



const firebaseConfig = {
  apiKey: "AIzaSyBUSUAknhe3IUR0uR0odWwSC5hfAmMgokk",
  authDomain: "habit-plan.firebaseapp.com",
  databaseURL: "https://habit-plan.firebaseio.com",
  projectId: "habit-plan",
  storageBucket: "habit-plan.appspot.com",
  messagingSenderId: "389810166808",
  appId: "1:389810166808:web:0f225badb3dea063fef76d",
  measurementId: "G-00XKHK2GY2"
};

if (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length === 0) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
}

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const database = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.database();


/***/ }),

/***/ "./src/onepirate/Home.js":
/*!*******************************!*\
  !*** ./src/onepirate/Home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_withRoot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/withRoot */ "./src/onepirate/modules/withRoot.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_views_ProductCategories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/views/ProductCategories */ "./src/onepirate/modules/views/ProductCategories.js");
/* harmony import */ var _modules_views_ProductSmokingHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/views/ProductSmokingHero */ "./src/onepirate/modules/views/ProductSmokingHero.js");
/* harmony import */ var _modules_views_AppFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/views/AppFooter */ "./src/onepirate/modules/views/AppFooter.js");
/* harmony import */ var _modules_views_ProductHero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/views/ProductHero */ "./src/onepirate/modules/views/ProductHero.js");
/* harmony import */ var _modules_views_ProductValues__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/views/ProductValues */ "./src/onepirate/modules/views/ProductValues.js");
/* harmony import */ var _modules_views_ProductHowItWorks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/views/ProductHowItWorks */ "./src/onepirate/modules/views/ProductHowItWorks.js");
/* harmony import */ var _modules_views_ProductCTA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/views/ProductCTA */ "./src/onepirate/modules/views/ProductCTA.js");
/* harmony import */ var _modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/views/AppAppBar */ "./src/onepirate/modules/views/AppAppBar.js");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // --- Post bootstrap -----











function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_modules_views_ProductHero__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(_modules_views_ProductValues__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_modules_views_ProductCategories__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_modules_views_ProductHowItWorks__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_modules_views_ProductCTA__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_modules_views_ProductSmokingHero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_modules_views_AppFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_modules_withRoot__WEBPACK_IMPORTED_MODULE_0__["default"])(Index));

/***/ }),

/***/ "./src/onepirate/modules/components/AppBar.js":
/*!****************************************************!*\
  !*** ./src/onepirate/modules/components/AppBar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\components\\AppBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const styles = theme => ({
  root: {
    color: theme.palette.common.white
  }
});

function AppBar(props) {
  return __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    elevation: 0,
    position: "static"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }
  }));
}

AppBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(AppBar));

/***/ }),

/***/ "./src/onepirate/modules/components/Button.js":
/*!****************************************************!*\
  !*** ./src/onepirate/modules/components/Button.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(theme => ({
  root: {
    borderRadius: 0,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamilySecondary,
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.pxToRem(14),
    boxShadow: 'none',
    '&:active, &:focus': {
      boxShadow: 'none'
    }
  },
  sizeSmall: {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13)
  },
  sizeLarge: {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16)
  }
}))(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a));

/***/ }),

/***/ "./src/onepirate/modules/components/Snackbar.js":
/*!******************************************************!*\
  !*** ./src/onepirate/modules/components/Snackbar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Info */ "@material-ui/icons/Info");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\components\\Snackbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const styles = theme => ({
  content: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
    flexWrap: 'inherit',
    [theme.breakpoints.up('md')]: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4
    }
  },
  contentMessage: {
    fontSize: 16,
    display: 'flex',
    alignItems: 'center'
  },
  contentAction: {
    paddingLeft: theme.spacing(2)
  },
  info: {
    flexShrink: 0,
    marginRight: theme.spacing(2)
  },
  close: {
    padding: theme.spacing(1)
  }
});

function Transition(props) {
  return __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, props, {
    direction: "down",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 10
    }
  }));
}

function Snackbar(props) {
  const {
    classes,
    onClose,
    message
  } = props,
        other = _objectWithoutProperties(props, ["classes", "onClose", "message"]);

  return __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    autoHideDuration: 6000,
    transition: Transition,
    ContentProps: {
      classes: {
        root: classes.content,
        message: classes.contentMessage,
        action: classes.contentAction
      }
    },
    message: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.info,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, message)),
    action: [__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      key: "close",
      "aria-label": "close",
      color: "inherit",
      className: classes.close,
      onClick: onClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }))]
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }));
}

Snackbar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  SnackbarContentProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Snackbar));

/***/ }),

/***/ "./src/onepirate/modules/components/TextField.js":
/*!*******************************************************!*\
  !*** ./src/onepirate/modules/components/TextField.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/utils */ "@material-ui/core/utils");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\components\\TextField.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const styles = theme => ({
  root: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    minWidth: theme.spacing(6),
    backgroundColor: theme.palette.common.white,
    '&$disabled': {
      backgroundColor: theme.palette.divider
    }
  },
  inputBorder: {
    border: '1px solid #e9ddd0',
    '&:focus': {
      borderColor: theme.palette.secondary.main
    }
  },
  disabled: {},
  inputSizeSmall: {
    fontSize: 14,
    padding: theme.spacing(1),
    width: `calc(100% - ${theme.spacing(2)}px)`
  },
  inputSizeMedium: {
    fontSize: 16,
    padding: theme.spacing(2),
    width: `calc(100% - ${theme.spacing(4)}px)`
  },
  inputSizeLarge: {
    fontSize: 18,
    padding: 22,
    width: `calc(100% - ${22 * 2}px)`
  },
  inputSizeXlarge: {
    fontSize: 20,
    padding: 25,
    width: `calc(100% - ${25 * 2}px)`
  },
  formLabel: {
    fontSize: 18
  },
  select: {
    height: 'auto',
    borderRadius: 0
  },
  selectIcon: {
    top: '50%',
    marginTop: -12
  }
});

function TextField(props) {
  const {
    classes,
    InputProps = {},
    InputLabelProps,
    noBorder = false,
    size = 'medium',
    SelectProps
  } = props,
        other = _objectWithoutProperties(props, ["classes", "InputProps", "InputLabelProps", "noBorder", "size", "SelectProps"]);

  const {
    classes: {
      input: InputPropsClassesInput
    } = {}
  } = InputProps,
        InputPropsClassesOther = _objectWithoutProperties(InputProps.classes, ["input"]),
        InputPropsOther = _objectWithoutProperties(InputProps, ["classes"]);

  return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    InputProps: _objectSpread({
      disableUnderline: true,
      classes: _objectSpread({
        root: classes.root,
        input: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.input, classes[`inputSize${Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(size)}`], {
          [classes.inputBorder]: !noBorder
        }, InputPropsClassesInput),
        disabled: classes.disabled
      }, InputPropsClassesOther)
    }, InputPropsOther),
    InputLabelProps: _objectSpread(_objectSpread({}, InputLabelProps), {}, {
      shrink: true,
      className: classes.formLabel
    }),
    SelectProps: _objectSpread(_objectSpread({}, SelectProps), {}, {
      classes: {
        select: classes.select,
        icon: classes.selectIcon
      }
    })
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }));
}

TextField.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  InputLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  InputProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  noBorder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  SelectProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['small', 'medium', 'large', 'xlarge'])
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(TextField));

/***/ }),

/***/ "./src/onepirate/modules/components/Toolbar.js":
/*!*****************************************************!*\
  !*** ./src/onepirate/modules/components/Toolbar.js ***!
  \*****************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1__);


const styles = theme => ({
  root: {
    height: 64,
    [theme.breakpoints.up('sm')]: {
      height: 70
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1___default.a));

/***/ }),

/***/ "./src/onepirate/modules/components/Typography.js":
/*!********************************************************!*\
  !*** ./src/onepirate/modules/components/Typography.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/utils */ "@material-ui/core/utils");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\components\\Typography.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const styles = theme => ({
  markedH2Center: {
    height: 4,
    width: 73,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main
  },
  markedH3Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main
  },
  markedH4Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main
  },
  markedH6Left: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing(0.5),
    background: 'currentColor'
  }
});

const variantMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3'
};

function Typography(props) {
  const {
    children,
    classes,
    marked = false,
    variant
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "marked", "variant"]);

  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    variantMapping: variantMapping,
    variant: variant
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }), children, marked ? __jsx("span", {
    className: classes[`marked${Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(variant) + Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(marked)}`],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }) : null);
}

Typography.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  marked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([false, 'center', 'left']),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Typography));

/***/ }),

/***/ "./src/onepirate/modules/theme.js":
/*!****************************************!*\
  !*** ./src/onepirate/modules/theme.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const rawTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f'
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#e62958'
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e'
    },
    error: {
      xLight: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"][50],
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"][500],
      dark: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"][700]
    },
    success: {
      xLight: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["green"][50],
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["green"][500],
      dark: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["green"][700]
    }
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    // Work Sans
    fontWeightRegular: 400,
    // Work Sans
    fontWeightMedium: 700,
    // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif"
  }
});
const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase'
};

const theme = _objectSpread(_objectSpread({}, rawTheme), {}, {
  palette: _objectSpread(_objectSpread({}, rawTheme.palette), {}, {
    background: _objectSpread(_objectSpread({}, rawTheme.palette.background), {}, {
      default: rawTheme.palette.common.white,
      placeholder: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["grey"][200]
    })
  }),
  typography: _objectSpread(_objectSpread({}, rawTheme.typography), {}, {
    fontHeader,
    h1: _objectSpread(_objectSpread(_objectSpread({}, rawTheme.typography.h1), fontHeader), {}, {
      letterSpacing: 0,
      fontSize: 60
    }),
    h2: _objectSpread(_objectSpread(_objectSpread({}, rawTheme.typography.h2), fontHeader), {}, {
      fontSize: 48
    }),
    h3: _objectSpread(_objectSpread(_objectSpread({}, rawTheme.typography.h3), fontHeader), {}, {
      fontSize: 42
    }),
    h4: _objectSpread(_objectSpread(_objectSpread({}, rawTheme.typography.h4), fontHeader), {}, {
      fontSize: 36
    }),
    h5: _objectSpread(_objectSpread({}, rawTheme.typography.h5), {}, {
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight
    }),
    h6: _objectSpread(_objectSpread(_objectSpread({}, rawTheme.typography.h6), fontHeader), {}, {
      fontSize: 18
    }),
    subtitle1: _objectSpread(_objectSpread({}, rawTheme.typography.subtitle1), {}, {
      fontSize: 18
    }),
    body1: _objectSpread(_objectSpread({}, rawTheme.typography.body2), {}, {
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16
    }),
    body2: _objectSpread(_objectSpread({}, rawTheme.typography.body1), {}, {
      fontSize: 14
    })
  })
});

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/onepirate/modules/views/AppAppBar.js":
/*!**************************************************!*\
  !*** ./src/onepirate/modules/views/AppAppBar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AppBar */ "./src/onepirate/modules/components/AppBar.js");
/* harmony import */ var _components_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Toolbar */ "./src/onepirate/modules/components/Toolbar.js");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\views\\AppAppBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const styles = theme => ({
  title: {
    fontSize: 24
  },
  placeholder: Object(_components_Toolbar__WEBPACK_IMPORTED_MODULE_6__["styles"])(theme).root,
  toolbar: {
    justifyContent: 'space-between'
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  }
});

function AppAppBar(props) {
  const {
    classes
  } = props;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_components_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "fixed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_components_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.left,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    underline: "none",
    color: "inherit",
    className: classes.title,
    href: "/Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, 'Habit Plan'), __jsx("div", {
    className: classes.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "inherit",
    variant: "h6",
    underline: "none",
    className: classes.rightLink,
    href: "/SignIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, 'Sign In'), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    underline: "none",
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.rightLink, classes.linkSecondary),
    href: "/premium-themes/onepirate/sign-up/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, 'Sign Up')))), __jsx("div", {
    className: classes.placeholder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }));
}

AppAppBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(AppAppBar));

/***/ }),

/***/ "./src/onepirate/modules/views/AppFooter.js":
/*!**************************************************!*\
  !*** ./src/onepirate/modules/views/AppFooter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Typography */ "./src/onepirate/modules/components/Typography.js");
/* harmony import */ var _components_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TextField */ "./src/onepirate/modules/components/TextField.js");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\views\\AppFooter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Copyright() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, '© ', __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "inherit",
    href: "https://material-ui.com/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Your Website"), ' ', new Date().getFullYear());
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex'
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: 'flex'
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark
    }
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150
  }
}));
const LANGUAGES = [{
  code: 'en-US',
  name: 'English'
}, {
  code: 'fr-FR',
  name: 'Français'
}];
function AppFooter() {
  const classes = useStyles();
  return __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "footer",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    sm: 4,
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    direction: "column",
    justify: "flex-end",
    className: classes.iconsWrapper,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    className: classes.icons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "https://material-ui.com/",
    className: classes.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/themes/onepirate/appFooterFacebook.png",
    alt: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  })), __jsx("a", {
    href: "https://twitter.com/MaterialUI",
    className: classes.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/themes/onepirate/appFooterTwitter.png",
    alt: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, __jsx(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    sm: 4,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    marked: "left",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "Legal"), __jsx("ul", {
    className: classes.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: classes.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/premium-themes/onepirate/terms/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, "Terms")), __jsx("li", {
    className: classes.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/premium-themes/onepirate/privacy/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, "Privacy")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    sm: 8,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    marked: "left",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "Language"), __jsx(_components_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    select: true,
    SelectProps: {
      native: true
    },
    className: classes.language,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, LANGUAGES.map(language => __jsx("option", {
    value: language.code,
    key: language.code,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, language.name)))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, 'Icons made by ', __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://www.freepik.com",
    rel: "sponsored",
    title: "Freepik",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, "Freepik"), ' from ', __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://www.flaticon.com",
    rel: "sponsored",
    title: "Flaticon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, "www.flaticon.com"), ' is licensed by ', __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://creativecommons.org/licenses/by/3.0/",
    title: "Creative Commons BY 3.0",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, "CC 3.0 BY"))))));
}

/***/ }),

/***/ "./src/onepirate/modules/views/ProductCTA.js":
/*!***************************************************!*\
  !*** ./src/onepirate/modules/views/ProductCTA.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Typography */ "./src/onepirate/modules/components/Typography.js");
/* harmony import */ var _components_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TextField */ "./src/onepirate/modules/components/TextField.js");
/* harmony import */ var _components_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Snackbar */ "./src/onepirate/modules/components/Snackbar.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Button */ "./src/onepirate/modules/components/Button.js");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\views\\ProductCTA.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex'
  },
  cardWrapper: {
    zIndex: 1
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(8, 3)
  },
  cardContent: {
    maxWidth: 400
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  button: {
    width: '100%'
  },
  imagesWrapper: {
    position: 'relative'
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)'
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600
  }
});

function ProductCTA(props) {
  const {
    classes
  } = props;
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.root,
    component: "section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 6,
    className: classes.cardWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: classes.cardContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h2",
    component: "h2",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, "Receive offers"), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, "Taste the holidays of the everyday close to home."), __jsx(_components_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    noBorder: true,
    className: classes.textField,
    placeholder: "Your email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "submit",
    color: "primary",
    variant: "contained",
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Keep me updated")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 6,
    className: classes.imagesWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    smDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.imageDots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80",
    alt: "call to action",
    className: classes.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  })))), __jsx(_components_Snackbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    open: open,
    onClose: handleClose,
    message: "We will send you our best offers, once a week.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }));
}

ProductCTA.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ProductCTA));

/***/ }),

/***/ "./src/onepirate/modules/views/ProductCategories.js":
/*!**********************************************************!*\
  !*** ./src/onepirate/modules/views/ProductCategories.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Typography */ "./src/onepirate/modules/components/Typography.js");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\views\\ProductCategories.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4)
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap'
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100
    },
    '&:hover': {
      zIndex: 1
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15
    },
    '&:hover $imageMarked': {
      opacity: 0
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor'
    }
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
});

function ProductCategories(props) {
  const {
    classes
  } = props;
  const images = [{
    url: 'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80',
    title: 'Snorkeling',
    width: '40%'
  }, {
    url: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80',
    title: 'Massage',
    width: '20%'
  }, {
    url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
    title: 'Hiking',
    width: '40%'
  }, {
    url: 'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80',
    title: 'Tour',
    width: '38%'
  }, {
    url: 'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80',
    title: 'Gastronomy',
    width: '38%'
  }, {
    url: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80',
    title: 'Shopping',
    width: '24%'
  }, {
    url: 'https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80',
    title: 'Walking',
    width: '40%'
  }, {
    url: 'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80',
    title: 'Fitness',
    width: '20%'
  }, {
    url: 'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80',
    title: 'Reading',
    width: '40%'
  }];
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.root,
    component: "section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h4",
    marked: "center",
    align: "center",
    component: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, "For all tastes and all desires"), __jsx("div", {
    className: classes.images,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, images.map(image => __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: image.title,
    className: classes.imageWrapper,
    style: {
      width: image.width
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.imageSrc,
    style: {
      backgroundImage: `url(${image.url})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.imageBackdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.imageButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "h3",
    variant: "h6",
    color: "inherit",
    className: classes.imageTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, image.title, __jsx("div", {
    className: classes.imageMarked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  })))))));
}

ProductCategories.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ProductCategories));

/***/ }),

/***/ "./src/onepirate/modules/views/ProductHero.js":
/*!****************************************************!*\
  !*** ./src/onepirate/modules/views/ProductHero.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./src/onepirate/modules/components/Button.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Typography */ "./src/onepirate/modules/components/Typography.js");
/* harmony import */ var _ProductHeroLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductHeroLayout */ "./src/onepirate/modules/views/ProductHeroLayout.js");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\views\\ProductHero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import backgroundImage from '../../../image/bg-calendar.svg';

const backgroundImage = '/static/bg-calendar.svg'; // const backgroundImage = '../../../image/bg-calendar.svg';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    // backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center'
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
});

function ProductHero(props) {
  const {
    classes
  } = props;
  return __jsx(_ProductHeroLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    backgroundClassName: classes.background,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "inherit",
    align: "center",
    variant: "h2",
    marked: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "Upgrade your Sundays"), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "inherit",
    align: "center",
    variant: "h5",
    className: classes.h5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Enjoy secret offers up to -70% off the best luxury hotels every Sunday."), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "secondary",
    variant: "contained",
    size: "large",
    className: classes.button,
    component: "a",
    href: "/premium-themes/onepirate/sign-up/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Register"), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body2",
    color: "inherit",
    className: classes.more,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Discover the experience"));
}

ProductHero.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ProductHero));

/***/ }),

/***/ "./src/onepirate/modules/views/ProductHeroLayout.js":
/*!**********************************************************!*\
  !*** ./src/onepirate/modules/views/ProductHeroLayout.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "@material-ui/icons/ArrowDownward");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\views\\ProductHeroLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexDirection: 'column',
    [theme.breakpoints.up("sm")]: {
      height: "80vh",
      minHeight: 500,
      maxHeight: 1300
    }
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -2
  },
  arrowDown: {
    position: "absolute",
    bottom: theme.spacing(4)
  }
});

function ProductHeroLayout(props) {
  const {
    backgroundClassName,
    children,
    classes
  } = props;
  return __jsx("section", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, children, __jsx("div", {
    className: classes.backdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.background, backgroundClassName),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }));
}

ProductHeroLayout.propTypes = {
  backgroundClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(ProductHeroLayout));

/***/ }),

/***/ "./src/onepirate/modules/views/ProductHowItWorks.js":
/*!**********************************************************!*\
  !*** ./src/onepirate/modules/views/ProductHowItWorks.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button */ "./src/onepirate/modules/components/Button.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Typography */ "./src/onepirate/modules/components/Typography.js");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\views\\ProductHowItWorks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden'
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5)
  },
  title: {
    marginBottom: theme.spacing(14)
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7
  },
  button: {
    marginTop: theme.spacing(8)
  }
});

function ProductHowItWorks(props) {
  const {
    classes
  } = props;
  return __jsx("section", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/static/themes/onepirate/productCurvyLines.png",
    className: classes.curvyLines,
    alt: "curvy lines",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h4",
    marked: "center",
    className: classes.title,
    component: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "How it works"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    spacing: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: classes.number,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "1."), __jsx("img", {
    src: "/static/themes/onepirate/productHowItWorks1.svg",
    alt: "suitcase",
    className: classes.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h5",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "Appointment every Wednesday 9am."))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: classes.number,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "2."), __jsx("img", {
    src: "/static/themes/onepirate/productHowItWorks2.svg",
    alt: "graph",
    className: classes.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h5",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "First come, first served. Our offers are in limited quantities, so be quick."))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: classes.number,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "3."), __jsx("img", {
    src: "/static/themes/onepirate/productHowItWorks3.svg",
    alt: "clock",
    className: classes.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h5",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, 'New offers every week. New experiences, new surprises. ', 'Your Sundays will no longer be alike.'))))), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "secondary",
    size: "large",
    variant: "contained",
    className: classes.button,
    component: "a",
    href: "/premium-themes/onepirate/sign-up/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, "Get started")));
}

ProductHowItWorks.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ProductHowItWorks));

/***/ }),

/***/ "./src/onepirate/modules/views/ProductSmokingHero.js":
/*!***********************************************************!*\
  !*** ./src/onepirate/modules/views/ProductSmokingHero.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Typography */ "./src/onepirate/modules/components/Typography.js");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\views\\ProductSmokingHero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9)
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5)
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  buoy: {
    width: 60
  }
});

function ProductSmokingHero(props) {
  const {
    classes
  } = props;
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.root,
    component: "section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h4",
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Got any questions? Need help?")), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "subtitle1",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "We are here to help. Get in touch!"), __jsx("img", {
    src: "/static/themes/onepirate/producBuoy.svg",
    className: classes.buoy,
    alt: "buoy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }));
}

ProductSmokingHero.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(ProductSmokingHero));

/***/ }),

/***/ "./src/onepirate/modules/views/ProductValues.js":
/*!******************************************************!*\
  !*** ./src/onepirate/modules/views/ProductValues.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Typography */ "./src/onepirate/modules/components/Typography.js");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\views\\ProductValues.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180
  }
});

function ProductValues(props) {
  const {
    classes
  } = props;
  return __jsx("section", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/static/themes/onepirate/productCurvyLines.png",
    className: classes.curvyLines,
    alt: "curvy lines",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    spacing: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: classes.image,
    src: "/static/themes/onepirate/productValues1.svg",
    alt: "suitcase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "The best luxury hotels"), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, 'From the latest trendy boutique hotel to the iconic palace with XXL pool', ', go for a mini-vacation just a few subway stops away from your home.'))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: classes.image,
    src: "/static/themes/onepirate/productValues2.svg",
    alt: "graph",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "New experiences"), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, 'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… ', 'your Sundays will not be alike.'))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: classes.image,
    src: "/static/themes/onepirate/productValues3.svg",
    alt: "clock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, "Exclusive rates"), __jsx(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, 'By registering, you will access specially negotiated rates ', 'that you will not find anywhere else.'))))));
}

ProductValues.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ProductValues));

/***/ }),

/***/ "./src/onepirate/modules/withRoot.js":
/*!*******************************************!*\
  !*** ./src/onepirate/modules/withRoot.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withRoot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ "./src/onepirate/modules/theme.js");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\onepirate\\modules\\withRoot.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function withRoot(Component) {
  function WithRoot(props) {
    return __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_3__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }), __jsx(Component, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    })));
  }

  return WithRoot;
}

/***/ }),

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shared_withAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/shared/withAuth */ "./src/components/shared/withAuth.tsx");
/* harmony import */ var _onepirate_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../onepirate/Home */ "./src/onepirate/Home.js");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\pages\\Home.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => {
  return __jsx(_onepirate_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_shared_withAuth__WEBPACK_IMPORTED_MODULE_1__["default"])(Home));

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ButtonBase":
/*!***********************************************!*\
  !*** external "@material-ui/core/ButtonBase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/Slide":
/*!******************************************!*\
  !*** external "@material-ui/core/Slide" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/utils":
/*!******************************************!*\
  !*** external "@material-ui/core/utils" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/utils");

/***/ }),

/***/ "@material-ui/icons/ArrowDownward":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ArrowDownward" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDownward");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Info":
/*!******************************************!*\
  !*** external "@material-ui/icons/Info" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL3dpdGhBdXRoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXN0L2ZpcmViYXNlVGVzdC9maXJlYmFzZVRlc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9vbmVwaXJhdGUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb25lcGlyYXRlL21vZHVsZXMvY29tcG9uZW50cy9BcHBCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29uZXBpcmF0ZS9tb2R1bGVzL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9vbmVwaXJhdGUvbW9kdWxlcy9jb21wb25lbnRzL1NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9vbmVwaXJhdGUvbW9kdWxlcy9jb21wb25lbnRzL1RleHRGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb25lcGlyYXRlL21vZHVsZXMvY29tcG9uZW50cy9Ub29sYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9vbmVwaXJhdGUvbW9kdWxlcy9jb21wb25lbnRzL1R5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29uZXBpcmF0ZS9tb2R1bGVzL3RoZW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9vbmVwaXJhdGUvbW9kdWxlcy92aWV3cy9BcHBBcHBCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29uZXBpcmF0ZS9tb2R1bGVzL3ZpZXdzL0FwcEZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb25lcGlyYXRlL21vZHVsZXMvdmlld3MvUHJvZHVjdENUQS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb25lcGlyYXRlL21vZHVsZXMvdmlld3MvUHJvZHVjdENhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29uZXBpcmF0ZS9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RIZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy9vbmVwaXJhdGUvbW9kdWxlcy92aWV3cy9Qcm9kdWN0SGVyb0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb25lcGlyYXRlL21vZHVsZXMvdmlld3MvUHJvZHVjdEhvd0l0V29ya3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29uZXBpcmF0ZS9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RTbW9raW5nSGVyby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb25lcGlyYXRlL21vZHVsZXMvdmlld3MvUHJvZHVjdFZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb25lcGlyYXRlL21vZHVsZXMvd2l0aFJvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0hvbWUudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RG93bndhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZGF0YWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIndpdGhBdXRoIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzdGF0dXMiLCJjb21wb25lbnREaWRNb3VudCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJhdXRoVXNlciIsInNldFN0YXRlIiwicm91dGVyIiwicHVzaCIsInJlbmRlckNvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZGF0YWJhc2UiLCJJbmRleCIsIndpdGhSb290Iiwic3R5bGVzIiwidGhlbWUiLCJyb290IiwiY29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJBcHBCYXIiLCJwcm9wVHlwZXMiLCJjbGFzc2VzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpdGhTdHlsZXMiLCJib3JkZXJSYWRpdXMiLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRNZWRpdW0iLCJmb250RmFtaWx5IiwiZm9udEZhbWlseVNlY29uZGFyeSIsInBhZGRpbmciLCJzcGFjaW5nIiwiZm9udFNpemUiLCJweFRvUmVtIiwiYm94U2hhZG93Iiwic2l6ZVNtYWxsIiwic2l6ZUxhcmdlIiwiQnV0dG9uIiwiY29udGVudCIsImJhY2tncm91bmRDb2xvciIsInNlY29uZGFyeSIsImxpZ2h0IiwidGV4dCIsInByaW1hcnkiLCJmbGV4V3JhcCIsImJyZWFrcG9pbnRzIiwidXAiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJjb250ZW50TWVzc2FnZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29udGVudEFjdGlvbiIsInBhZGRpbmdMZWZ0IiwiaW5mbyIsImZsZXhTaHJpbmsiLCJtYXJnaW5SaWdodCIsImNsb3NlIiwiVHJhbnNpdGlvbiIsIlNuYWNrYmFyIiwib25DbG9zZSIsIm1lc3NhZ2UiLCJvdGhlciIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImFjdGlvbiIsIlNuYWNrYmFyQ29udGVudFByb3BzIiwibWFyZ2luVG9wIiwiaW5wdXQiLCJtaW5XaWR0aCIsImRpdmlkZXIiLCJpbnB1dEJvcmRlciIsImJvcmRlciIsImJvcmRlckNvbG9yIiwibWFpbiIsImRpc2FibGVkIiwiaW5wdXRTaXplU21hbGwiLCJ3aWR0aCIsImlucHV0U2l6ZU1lZGl1bSIsImlucHV0U2l6ZUxhcmdlIiwiaW5wdXRTaXplWGxhcmdlIiwiZm9ybUxhYmVsIiwic2VsZWN0IiwiaGVpZ2h0Iiwic2VsZWN0SWNvbiIsInRvcCIsIlRleHRGaWVsZCIsIklucHV0UHJvcHMiLCJJbnB1dExhYmVsUHJvcHMiLCJub0JvcmRlciIsInNpemUiLCJTZWxlY3RQcm9wcyIsIklucHV0UHJvcHNDbGFzc2VzSW5wdXQiLCJJbnB1dFByb3BzQ2xhc3Nlc090aGVyIiwiSW5wdXRQcm9wc090aGVyIiwiZGlzYWJsZVVuZGVybGluZSIsImNsc3giLCJjYXBpdGFsaXplIiwic2hyaW5rIiwiY2xhc3NOYW1lIiwiaWNvbiIsImJvb2wiLCJvbmVPZiIsIlRvb2xiYXIiLCJtYXJrZWRIMkNlbnRlciIsIm1hcmdpbiIsIm1hcmtlZEgzQ2VudGVyIiwibWFya2VkSDRDZW50ZXIiLCJtYXJrZWRINkxlZnQiLCJiYWNrZ3JvdW5kIiwidmFyaWFudE1hcHBpbmciLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJzdWJ0aXRsZTEiLCJUeXBvZ3JhcGh5IiwiY2hpbGRyZW4iLCJtYXJrZWQiLCJ2YXJpYW50Iiwibm9kZSIsInN0cmluZyIsInJhd1RoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJkYXJrIiwid2FybmluZyIsImVycm9yIiwieExpZ2h0IiwicmVkIiwic3VjY2VzcyIsImdyZWVuIiwiZm9udFdlaWdodExpZ2h0IiwiZm9udFdlaWdodFJlZ3VsYXIiLCJmb250SGVhZGVyIiwidGV4dFRyYW5zZm9ybSIsImRlZmF1bHQiLCJwbGFjZWhvbGRlciIsImdyZXkiLCJsZXR0ZXJTcGFjaW5nIiwiYm9keTEiLCJib2R5MiIsInRpdGxlIiwidG9vbGJhclN0eWxlcyIsInRvb2xiYXIiLCJqdXN0aWZ5Q29udGVudCIsImxlZnQiLCJmbGV4IiwibGVmdExpbmtBY3RpdmUiLCJyaWdodCIsInJpZ2h0TGluayIsIm1hcmdpbkxlZnQiLCJsaW5rU2Vjb25kYXJ5IiwiQXBwQXBwQmFyIiwiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsImljb25zV3JhcHBlciIsImljb25zIiwibGlzdCIsImxpc3RTdHlsZSIsImxpc3RJdGVtIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJsYW5ndWFnZSIsIkxBTkdVQUdFUyIsImNvZGUiLCJuYW1lIiwiQXBwRm9vdGVyIiwibmF0aXZlIiwibWFwIiwiY2FyZFdyYXBwZXIiLCJ6SW5kZXgiLCJjYXJkIiwiY2FyZENvbnRlbnQiLCJtYXhXaWR0aCIsInRleHRGaWVsZCIsImJ1dHRvbiIsImltYWdlc1dyYXBwZXIiLCJwb3NpdGlvbiIsImltYWdlRG90cyIsImJvdHRvbSIsImltYWdlIiwiUHJvZHVjdENUQSIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2UiLCJpbWFnZXMiLCJpbWFnZVdyYXBwZXIiLCJkb3duIiwib3BhY2l0eSIsImltYWdlQnV0dG9uIiwiaW1hZ2VTcmMiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImltYWdlQmFja2Ryb3AiLCJibGFjayIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImltYWdlVGl0bGUiLCJpbWFnZU1hcmtlZCIsIlByb2R1Y3RDYXRlZ29yaWVzIiwidXJsIiwiYmFja2dyb3VuZEltYWdlIiwibW9yZSIsIlByb2R1Y3RIZXJvIiwiZmxleERpcmVjdGlvbiIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJhY2tkcm9wIiwiYmFja2dyb3VuZFJlcGVhdCIsImFycm93RG93biIsIlByb2R1Y3RIZXJvTGF5b3V0IiwiYmFja2dyb3VuZENsYXNzTmFtZSIsIm92ZXJmbG93IiwiaXRlbSIsIm51bWJlciIsImN1cnZ5TGluZXMiLCJwb2ludGVyRXZlbnRzIiwiUHJvZHVjdEhvd0l0V29ya3MiLCJsaW5rIiwiYnVveSIsIlByb2R1Y3RTbW9raW5nSGVybyIsIlByb2R1Y3RWYWx1ZXMiLCJXaXRoUm9vdCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsU0FBbEIsRUFBa0M7QUFDN0M7QUFDQSxT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Ozs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL0hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9Ib21lLnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3Rlc3QvZmlyZWJhc2VUZXN0L2ZpcmViYXNlVGVzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEF1dGgoQ29tcG9uZW50OiBhbnkpIHtcclxuICAgIC8vIGNvbnN0IFtzdGF0dXMsc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdMT0FESU5HJyk7XHJcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCB7c3RhdHVzOiBzdHJpbmd9PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiTE9BRElOR1wiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKChhdXRoVXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1dGhVc2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJTSUdORURfSU5cIixcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHNldFN0YXR1cygnU0lHTkVEX0lOJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlckNvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyAgPSB0aGlzLnN0YXRlLnN0YXR1cztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzKTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBcIkxPQURJTkdcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIDxoMT5Mb2FkaW5nIC4uLi4uLjwvaDE+O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSBcIlNJR05FRF9JTlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPD57dGhpcy5yZW5kZXJDb250ZW50KCl9PC8+O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGg7XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbi8vIOiqjeiovOWRqOOCiuOChERC5ZGo44KK44Gn5b+F6KaB44Gq44Gf44KBaW1wb3J044GX44Gm44GK44GPXHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUJVU1VBa25oZTNJVVIwdVIwb2RXd1NDNWhmQW1NZ29ra1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJoYWJpdC1wbGFuLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9oYWJpdC1wbGFuLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiaGFiaXQtcGxhblwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJoYWJpdC1wbGFuLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzODk4MTAxNjY4MDhcIixcclxuICAgIGFwcElkOiBcIjE6Mzg5ODEwMTY2ODA4OndlYjowZjIyNWJhZGIzZGVhMDYzZmVmNzZkXCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctMDBYS0hLMkdZMlwiLFxyXG59O1xyXG5cclxuaWYgKGZpcmViYXNlLmFwcHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxufVxyXG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBkYXRhYmFzZSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbmV4cG9ydCB7IGZpcmViYXNlLCBhdXRoLCBkYXRhYmFzZSB9O1xyXG4iLCJpbXBvcnQgd2l0aFJvb3QgZnJvbSAnLi9tb2R1bGVzL3dpdGhSb290Jztcbi8vIC0tLSBQb3N0IGJvb3RzdHJhcCAtLS0tLVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9kdWN0Q2F0ZWdvcmllcyBmcm9tICcuL21vZHVsZXMvdmlld3MvUHJvZHVjdENhdGVnb3JpZXMnO1xuaW1wb3J0IFByb2R1Y3RTbW9raW5nSGVybyBmcm9tICcuL21vZHVsZXMvdmlld3MvUHJvZHVjdFNtb2tpbmdIZXJvJztcbmltcG9ydCBBcHBGb290ZXIgZnJvbSAnLi9tb2R1bGVzL3ZpZXdzL0FwcEZvb3Rlcic7XG5pbXBvcnQgUHJvZHVjdEhlcm8gZnJvbSAnLi9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RIZXJvJztcbmltcG9ydCBQcm9kdWN0VmFsdWVzIGZyb20gJy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0VmFsdWVzJztcbmltcG9ydCBQcm9kdWN0SG93SXRXb3JrcyBmcm9tICcuL21vZHVsZXMvdmlld3MvUHJvZHVjdEhvd0l0V29ya3MnO1xuaW1wb3J0IFByb2R1Y3RDVEEgZnJvbSAnLi9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RDVEEnO1xuaW1wb3J0IEFwcEFwcEJhciBmcm9tICcuL21vZHVsZXMvdmlld3MvQXBwQXBwQmFyJztcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEFwcEFwcEJhciAvPlxuICAgICAgPFByb2R1Y3RIZXJvIC8+XG4gICAgICA8UHJvZHVjdFZhbHVlcyAvPlxuICAgICAgPFByb2R1Y3RDYXRlZ29yaWVzIC8+XG4gICAgICA8UHJvZHVjdEhvd0l0V29ya3MgLz5cbiAgICAgIDxQcm9kdWN0Q1RBIC8+XG4gICAgICA8UHJvZHVjdFNtb2tpbmdIZXJvIC8+XG4gICAgICA8QXBwRm9vdGVyIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvb3QoSW5kZXgpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIEFwcEJhcihwcm9wcykge1xuICByZXR1cm4gPE11aUFwcEJhciBlbGV2YXRpb249ezB9IHBvc2l0aW9uPVwic3RhdGljXCIgey4uLnByb3BzfSAvPjtcbn1cblxuQXBwQmFyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEFwcEJhcik7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseVNlY29uZGFyeSxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQpLFxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTQpLFxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICcmOmFjdGl2ZSwgJjpmb2N1cyc6IHtcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIHNpemVTbWFsbDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMyksXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMyksXG4gIH0sXG4gIHNpemVMYXJnZToge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNSksXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNiksXG4gIH0sXG59KSkoQnV0dG9uKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTXVpU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBjb250ZW50OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodCxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgZmxleFdyYXA6ICdpbmhlcml0JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAwLFxuICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDAsXG4gICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogNCxcbiAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDQsXG4gICAgfSxcbiAgfSxcbiAgY29udGVudE1lc3NhZ2U6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICBjb250ZW50QWN0aW9uOiB7XG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIGluZm86IHtcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBjbG9zZToge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcykge1xuICByZXR1cm4gPFNsaWRlIHsuLi5wcm9wc30gZGlyZWN0aW9uPVwiZG93blwiIC8+O1xufVxuXG5mdW5jdGlvbiBTbmFja2Jhcihwcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIG9uQ2xvc2UsIG1lc3NhZ2UsIC4uLm90aGVyIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxNdWlTbmFja2JhclxuICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2NlbnRlcicgfX1cbiAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XG4gICAgICB0cmFuc2l0aW9uPXtUcmFuc2l0aW9ufVxuICAgICAgQ29udGVudFByb3BzPXt7XG4gICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICByb290OiBjbGFzc2VzLmNvbnRlbnQsXG4gICAgICAgICAgbWVzc2FnZTogY2xhc3Nlcy5jb250ZW50TWVzc2FnZSxcbiAgICAgICAgICBhY3Rpb246IGNsYXNzZXMuY29udGVudEFjdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgICBtZXNzYWdlPXtcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxJbmZvSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30gLz5cbiAgICAgICAgICA8c3Bhbj57bWVzc2FnZX08L3NwYW4+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICB9XG4gICAgICBhY3Rpb249e1tcbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBrZXk9XCJjbG9zZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlXCJcbiAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZX1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICA+XG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+LFxuICAgICAgXX1cbiAgICAgIHsuLi5vdGhlcn1cbiAgICAvPlxuICApO1xufVxuXG5TbmFja2Jhci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgU25hY2tiYXJDb250ZW50UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU25hY2tiYXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IE11aVRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogMCxcbiAgICAnbGFiZWwgKyAmJzoge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIH0sXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgbWluV2lkdGg6IHRoZW1lLnNwYWNpbmcoNiksXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5kaXZpZGVyLFxuICAgIH0sXG4gIH0sXG4gIGlucHV0Qm9yZGVyOiB7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlOWRkZDAnLFxuICAgICcmOmZvY3VzJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgfSxcbiAgfSxcbiAgZGlzYWJsZWQ6IHt9LFxuICBpbnB1dFNpemVTbWFsbDoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHt0aGVtZS5zcGFjaW5nKDIpfXB4KWAsXG4gIH0sXG4gIGlucHV0U2l6ZU1lZGl1bToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHt0aGVtZS5zcGFjaW5nKDQpfXB4KWAsXG4gIH0sXG4gIGlucHV0U2l6ZUxhcmdlOiB7XG4gICAgZm9udFNpemU6IDE4LFxuICAgIHBhZGRpbmc6IDIyLFxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHsyMiAqIDJ9cHgpYCxcbiAgfSxcbiAgaW5wdXRTaXplWGxhcmdlOiB7XG4gICAgZm9udFNpemU6IDIwLFxuICAgIHBhZGRpbmc6IDI1LFxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHsyNSAqIDJ9cHgpYCxcbiAgfSxcbiAgZm9ybUxhYmVsOiB7XG4gICAgZm9udFNpemU6IDE4LFxuICB9LFxuICBzZWxlY3Q6IHtcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gIH0sXG4gIHNlbGVjdEljb246IHtcbiAgICB0b3A6ICc1MCUnLFxuICAgIG1hcmdpblRvcDogLTEyLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIFRleHRGaWVsZChwcm9wcykge1xuICBjb25zdCB7XG4gICAgY2xhc3NlcyxcbiAgICBJbnB1dFByb3BzID0ge30sXG4gICAgSW5wdXRMYWJlbFByb3BzLFxuICAgIG5vQm9yZGVyID0gZmFsc2UsXG4gICAgc2l6ZSA9ICdtZWRpdW0nLFxuICAgIFNlbGVjdFByb3BzLFxuICAgIC4uLm90aGVyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgY2xhc3NlczogeyBpbnB1dDogSW5wdXRQcm9wc0NsYXNzZXNJbnB1dCwgLi4uSW5wdXRQcm9wc0NsYXNzZXNPdGhlciB9ID0ge30sXG4gICAgLi4uSW5wdXRQcm9wc090aGVyXG4gIH0gPSBJbnB1dFByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPE11aVRleHRGaWVsZFxuICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICBkaXNhYmxlVW5kZXJsaW5lOiB0cnVlLFxuICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290LFxuICAgICAgICAgIGlucHV0OiBjbHN4KFxuICAgICAgICAgICAgY2xhc3Nlcy5pbnB1dCxcbiAgICAgICAgICAgIGNsYXNzZXNbYGlucHV0U2l6ZSR7Y2FwaXRhbGl6ZShzaXplKX1gXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgW2NsYXNzZXMuaW5wdXRCb3JkZXJdOiAhbm9Cb3JkZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSW5wdXRQcm9wc0NsYXNzZXNJbnB1dCxcbiAgICAgICAgICApLFxuICAgICAgICAgIGRpc2FibGVkOiBjbGFzc2VzLmRpc2FibGVkLFxuICAgICAgICAgIC4uLklucHV0UHJvcHNDbGFzc2VzT3RoZXIsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLklucHV0UHJvcHNPdGhlcixcbiAgICAgIH19XG4gICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgLi4uSW5wdXRMYWJlbFByb3BzLFxuICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5mb3JtTGFiZWwsXG4gICAgICB9fVxuICAgICAgU2VsZWN0UHJvcHM9e3tcbiAgICAgICAgLi4uU2VsZWN0UHJvcHMsXG4gICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICBzZWxlY3Q6IGNsYXNzZXMuc2VsZWN0LFxuICAgICAgICAgIGljb246IGNsYXNzZXMuc2VsZWN0SWNvbixcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgICB7Li4ub3RoZXJ9XG4gICAgLz5cbiAgKTtcbn1cblxuVGV4dEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBJbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIElucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIG5vQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgU2VsZWN0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZScsICd4bGFyZ2UnXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoVGV4dEZpZWxkKTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBoZWlnaHQ6IDY0LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIGhlaWdodDogNzAsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoVG9vbGJhcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcbmltcG9ydCBNdWlUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIG1hcmtlZEgyQ2VudGVyOiB7XG4gICAgaGVpZ2h0OiA0LFxuICAgIHdpZHRoOiA3MyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbjogYCR7dGhlbWUuc3BhY2luZygxKX1weCBhdXRvIDBgLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgfSxcbiAgbWFya2VkSDNDZW50ZXI6IHtcbiAgICBoZWlnaHQ6IDQsXG4gICAgd2lkdGg6IDU1LFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luOiBgJHt0aGVtZS5zcGFjaW5nKDEpfXB4IGF1dG8gMGAsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICB9LFxuICBtYXJrZWRINENlbnRlcjoge1xuICAgIGhlaWdodDogNCxcbiAgICB3aWR0aDogNTUsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46IGAke3RoZW1lLnNwYWNpbmcoMSl9cHggYXV0byAwYCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gIH0sXG4gIG1hcmtlZEg2TGVmdDoge1xuICAgIGhlaWdodDogMixcbiAgICB3aWR0aDogMjgsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgfSxcbn0pO1xuXG5jb25zdCB2YXJpYW50TWFwcGluZyA9IHtcbiAgaDE6ICdoMScsXG4gIGgyOiAnaDEnLFxuICBoMzogJ2gxJyxcbiAgaDQ6ICdoMScsXG4gIGg1OiAnaDMnLFxuICBoNjogJ2gyJyxcbiAgc3VidGl0bGUxOiAnaDMnLFxufTtcblxuZnVuY3Rpb24gVHlwb2dyYXBoeShwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc2VzLCBtYXJrZWQgPSBmYWxzZSwgdmFyaWFudCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPE11aVR5cG9ncmFwaHkgdmFyaWFudE1hcHBpbmc9e3ZhcmlhbnRNYXBwaW5nfSB2YXJpYW50PXt2YXJpYW50fSB7Li4ub3RoZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAge21hcmtlZCA/IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzW2BtYXJrZWQke2NhcGl0YWxpemUodmFyaWFudCkgKyBjYXBpdGFsaXplKG1hcmtlZCl9YF19IC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L011aVR5cG9ncmFwaHk+XG4gICk7XG59XG5cblR5cG9ncmFwaHkucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbWFya2VkOiBQcm9wVHlwZXMub25lT2YoW2ZhbHNlLCAnY2VudGVyJywgJ2xlZnQnXSksXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoVHlwb2dyYXBoeSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBncmVlbiwgZ3JleSwgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcblxuY29uc3QgcmF3VGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBsaWdodDogJyM2OTY5NmEnLFxuICAgICAgbWFpbjogJyMyODI4MmEnLFxuICAgICAgZGFyazogJyMxZTFlMWYnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBsaWdodDogJyNmZmY1ZjgnLFxuICAgICAgbWFpbjogJyNmZjMzNjYnLFxuICAgICAgZGFyazogJyNlNjI5NTgnLFxuICAgIH0sXG4gICAgd2FybmluZzoge1xuICAgICAgbWFpbjogJyNmZmMwNzEnLFxuICAgICAgZGFyazogJyNmZmIyNWUnLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIHhMaWdodDogcmVkWzUwXSxcbiAgICAgIG1haW46IHJlZFs1MDBdLFxuICAgICAgZGFyazogcmVkWzcwMF0sXG4gICAgfSxcbiAgICBzdWNjZXNzOiB7XG4gICAgICB4TGlnaHQ6IGdyZWVuWzUwXSxcbiAgICAgIG1haW46IGdyZWVuWzUwMF0sXG4gICAgICBkYXJrOiBncmVlbls3MDBdLFxuICAgIH0sXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiBcIidXb3JrIFNhbnMnLCBzYW5zLXNlcmlmXCIsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGZvbnRXZWlnaHRMaWdodDogMzAwLCAvLyBXb3JrIFNhbnNcbiAgICBmb250V2VpZ2h0UmVndWxhcjogNDAwLCAvLyBXb3JrIFNhbnNcbiAgICBmb250V2VpZ2h0TWVkaXVtOiA3MDAsIC8vIFJvYm90byBDb25kZW5zZWRcbiAgICBmb250RmFtaWx5U2Vjb25kYXJ5OiBcIidSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZlwiLFxuICB9LFxufSk7XG5cbmNvbnN0IGZvbnRIZWFkZXIgPSB7XG4gIGNvbG9yOiByYXdUaGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgZm9udFdlaWdodDogcmF3VGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICBmb250RmFtaWx5OiByYXdUaGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHlTZWNvbmRhcnksXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxufTtcblxuY29uc3QgdGhlbWUgPSB7XG4gIC4uLnJhd1RoZW1lLFxuICBwYWxldHRlOiB7XG4gICAgLi4ucmF3VGhlbWUucGFsZXR0ZSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAuLi5yYXdUaGVtZS5wYWxldHRlLmJhY2tncm91bmQsXG4gICAgICBkZWZhdWx0OiByYXdUaGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgIHBsYWNlaG9sZGVyOiBncmV5WzIwMF0sXG4gICAgfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIC4uLnJhd1RoZW1lLnR5cG9ncmFwaHksXG4gICAgZm9udEhlYWRlcixcbiAgICBoMToge1xuICAgICAgLi4ucmF3VGhlbWUudHlwb2dyYXBoeS5oMSxcbiAgICAgIC4uLmZvbnRIZWFkZXIsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgZm9udFNpemU6IDYwLFxuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIC4uLnJhd1RoZW1lLnR5cG9ncmFwaHkuaDIsXG4gICAgICAuLi5mb250SGVhZGVyLFxuICAgICAgZm9udFNpemU6IDQ4LFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIC4uLnJhd1RoZW1lLnR5cG9ncmFwaHkuaDMsXG4gICAgICAuLi5mb250SGVhZGVyLFxuICAgICAgZm9udFNpemU6IDQyLFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIC4uLnJhd1RoZW1lLnR5cG9ncmFwaHkuaDQsXG4gICAgICAuLi5mb250SGVhZGVyLFxuICAgICAgZm9udFNpemU6IDM2LFxuICAgIH0sXG4gICAgaDU6IHtcbiAgICAgIC4uLnJhd1RoZW1lLnR5cG9ncmFwaHkuaDUsXG4gICAgICBmb250U2l6ZTogMjAsXG4gICAgICBmb250V2VpZ2h0OiByYXdUaGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRMaWdodCxcbiAgICB9LFxuICAgIGg2OiB7XG4gICAgICAuLi5yYXdUaGVtZS50eXBvZ3JhcGh5Lmg2LFxuICAgICAgLi4uZm9udEhlYWRlcixcbiAgICAgIGZvbnRTaXplOiAxOCxcbiAgICB9LFxuICAgIHN1YnRpdGxlMToge1xuICAgICAgLi4ucmF3VGhlbWUudHlwb2dyYXBoeS5zdWJ0aXRsZTEsXG4gICAgICBmb250U2l6ZTogMTgsXG4gICAgfSxcbiAgICBib2R5MToge1xuICAgICAgLi4ucmF3VGhlbWUudHlwb2dyYXBoeS5ib2R5MixcbiAgICAgIGZvbnRXZWlnaHQ6IHJhd1RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgfSxcbiAgICBib2R5Mjoge1xuICAgICAgLi4ucmF3VGhlbWUudHlwb2dyYXBoeS5ib2R5MSxcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIsIHsgc3R5bGVzIGFzIHRvb2xiYXJTdHlsZXMgfSBmcm9tICcuLi9jb21wb25lbnRzL1Rvb2xiYXInO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDI0LFxuICB9LFxuICBwbGFjZWhvbGRlcjogdG9vbGJhclN0eWxlcyh0aGVtZSkucm9vdCxcbiAgdG9vbGJhcjoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGxlZnQ6IHtcbiAgICBmbGV4OiAxLFxuICB9LFxuICBsZWZ0TGlua0FjdGl2ZToge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBmbGV4OiAxLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgfSxcbiAgcmlnaHRMaW5rOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICB9LFxuICBsaW5rU2Vjb25kYXJ5OiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gQXBwQXBwQmFyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCI+XG4gICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fSAvPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgdW5kZXJsaW5lPVwibm9uZVwiXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgaHJlZj1cIi9Ib21lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7J0hhYml0IFBsYW4nfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodH0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgICB1bmRlcmxpbmU9XCJub25lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0TGlua31cbiAgICAgICAgICAgICAgaHJlZj1cIi9TaWduSW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7J1NpZ24gSW4nfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgICAgdW5kZXJsaW5lPVwibm9uZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJpZ2h0TGluaywgY2xhc3Nlcy5saW5rU2Vjb25kYXJ5KX1cbiAgICAgICAgICAgICAgaHJlZj1cIi9wcmVtaXVtLXRoZW1lcy9vbmVwaXJhdGUvc2lnbi11cC9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7J1NpZ24gVXAnfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBsYWNlaG9sZGVyfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5BcHBBcHBCYXIucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQXBwQXBwQmFyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL1RleHRGaWVsZCc7XG5cbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7J8KpICd9XG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XG4gICAgICAgIFlvdXIgV2Vic2l0ZVxuICAgICAgPC9MaW5rPnsnICd9XG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICB9LFxuICBpY29uc1dyYXBwZXI6IHtcbiAgICBoZWlnaHQ6IDEyMCxcbiAgfSxcbiAgaWNvbnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gIH0sXG4gIGljb246IHtcbiAgICB3aWR0aDogNDgsXG4gICAgaGVpZ2h0OiA0OCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxuICAgIH0sXG4gIH0sXG4gIGxpc3Q6IHtcbiAgICBtYXJnaW46IDAsXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgcGFkZGluZzogMCxcbiAgfSxcbiAgbGlzdEl0ZW06IHtcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygwLjUpLFxuICB9LFxuICBsYW5ndWFnZToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICB3aWR0aDogMTUwLFxuICB9LFxufSkpO1xuXG5jb25zdCBMQU5HVUFHRVMgPSBbXG4gIHtcbiAgICBjb2RlOiAnZW4tVVMnLFxuICAgIG5hbWU6ICdFbmdsaXNoJyxcbiAgfSxcbiAge1xuICAgIGNvZGU6ICdmci1GUicsXG4gICAgbmFtZTogJ0ZyYW7Dp2FpcycsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBGb290ZXIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImZvb3RlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17NH0gbWQ9ezN9PlxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LWVuZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc1dyYXBwZXJ9XG4gICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmljb25zfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL3RoZW1lcy9vbmVwaXJhdGUvYXBwRm9vdGVyRmFjZWJvb2sucG5nXCIgYWx0PVwiRmFjZWJvb2tcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9NYXRlcmlhbFVJXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL3RoZW1lcy9vbmVwaXJhdGUvYXBwRm9vdGVyVHdpdHRlci5wbmdcIiBhbHQ9XCJUd2l0dGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICA8Q29weXJpZ2h0IC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezR9IG1kPXsyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG1hcmtlZD1cImxlZnRcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIExlZ2FsXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByZW1pdW0tdGhlbWVzL29uZXBpcmF0ZS90ZXJtcy9cIj5UZXJtczwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcmVtaXVtLXRoZW1lcy9vbmVwaXJhdGUvcHJpdmFjeS9cIj5Qcml2YWN5PC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezh9IG1kPXs0fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG1hcmtlZD1cImxlZnRcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIExhbmd1YWdlXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICBTZWxlY3RQcm9wcz17e1xuICAgICAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhbmd1YWdlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7TEFOR1VBR0VTLm1hcCgobGFuZ3VhZ2UpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtsYW5ndWFnZS5jb2RlfSBrZXk9e2xhbmd1YWdlLmNvZGV9PlxuICAgICAgICAgICAgICAgICAge2xhbmd1YWdlLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICB7J0ljb25zIG1hZGUgYnkgJ31cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tXCIgcmVsPVwic3BvbnNvcmVkXCIgdGl0bGU9XCJGcmVlcGlrXCI+XG4gICAgICAgICAgICAgICAgRnJlZXBpa1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHsnIGZyb20gJ31cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbVwiIHJlbD1cInNwb25zb3JlZFwiIHRpdGxlPVwiRmxhdGljb25cIj5cbiAgICAgICAgICAgICAgICB3d3cuZmxhdGljb24uY29tXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgeycgaXMgbGljZW5zZWQgYnkgJ31cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzMuMC9cIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ3JlYXRpdmUgQ29tbW9ucyBCWSAzLjBcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDQyAzLjAgQllcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0RmllbGQnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU25hY2tiYXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbic7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxMCksXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgfSxcbiAgY2FyZFdyYXBwZXI6IHtcbiAgICB6SW5kZXg6IDEsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAzKSxcbiAgfSxcbiAgY2FyZENvbnRlbnQ6IHtcbiAgICBtYXhXaWR0aDogNDAwLFxuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGltYWdlc1dyYXBwZXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbiAgaW1hZ2VEb3RzOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAtNjcsXG4gICAgbGVmdDogLTY3LFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJhY2tncm91bmQ6ICd1cmwoL3N0YXRpYy9vbmVwaXJhdGUvcHJvZHVjdENUQUltYWdlRG90cy5wbmcpJyxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IC0yOCxcbiAgICBsZWZ0OiAtMjgsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6IDYwMCxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBQcm9kdWN0Q1RBKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBjb21wb25lbnQ9XCJzZWN0aW9uXCI+XG4gICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRXcmFwcGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQ29udGVudH0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNvbXBvbmVudD1cImgyXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgIFJlY2VpdmUgb2ZmZXJzXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgVGFzdGUgdGhlIGhvbGlkYXlzIG9mIHRoZSBldmVyeWRheSBjbG9zZSB0byBob21lLlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgbm9Cb3JkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH0gcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxuICAgICAgICAgICAgICAgIEtlZXAgbWUgdXBkYXRlZFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZXNXcmFwcGVyfT5cbiAgICAgICAgICA8SGlkZGVuIHNtRG93bj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlRG90c30gLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Mjc4NTM3ODc2OTYtZjdiZTc0ZjJlMzlhP2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NzUwJnE9ODBcIlxuICAgICAgICAgICAgICBhbHQ9XCJjYWxsIHRvIGFjdGlvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxTbmFja2JhclxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgbWVzc2FnZT1cIldlIHdpbGwgc2VuZCB5b3Ugb3VyIGJlc3Qgb2ZmZXJzLCBvbmNlIGEgd2Vlay5cIlxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuUHJvZHVjdENUQS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9kdWN0Q1RBKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvVHlwb2dyYXBoeSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gIH0sXG4gIGltYWdlczoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgfSxcbiAgaW1hZ2VXcmFwcGVyOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBoZWlnaHQ6ICc0MHZoJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIHdpZHRoOiAnMTAwJSAhaW1wb3J0YW50JyxcbiAgICAgIGhlaWdodDogMTAwLFxuICAgIH0sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICB6SW5kZXg6IDEsXG4gICAgfSxcbiAgICAnJjpob3ZlciAkaW1hZ2VCYWNrZHJvcCc6IHtcbiAgICAgIG9wYWNpdHk6IDAuMTUsXG4gICAgfSxcbiAgICAnJjpob3ZlciAkaW1hZ2VNYXJrZWQnOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgJyY6aG92ZXIgJGltYWdlVGl0bGUnOiB7XG4gICAgICBib3JkZXI6ICc0cHggc29saWQgY3VycmVudENvbG9yJyxcbiAgICB9LFxuICB9LFxuICBpbWFnZUJ1dHRvbjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgfSxcbiAgaW1hZ2VTcmM6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIDQwJScsXG4gIH0sXG4gIGltYWdlQmFja2Ryb3A6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXG4gICAgb3BhY2l0eTogMC41LFxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxuICB9LFxuICBpbWFnZVRpdGxlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggMTRweGAsXG4gIH0sXG4gIGltYWdlTWFya2VkOiB7XG4gICAgaGVpZ2h0OiAzLFxuICAgIHdpZHRoOiAxOCxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IC0yLFxuICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDlweCknLFxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIFByb2R1Y3RDYXRlZ29yaWVzKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaW1hZ2VzID0gW1xuICAgIHtcbiAgICAgIHVybDpcbiAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM0MDgxMzMzODE1LWFlNTAxOTEwNjYyMj9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTQwMCZxPTgwJyxcbiAgICAgIHRpdGxlOiAnU25vcmtlbGluZycsXG4gICAgICB3aWR0aDogJzQwJScsXG4gICAgfSxcbiAgICB7XG4gICAgICB1cmw6XG4gICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMTI5OTIwNDgxMi1lNmQ0NGQ5YTE4NWM/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz00MDAmcT04MCcsXG4gICAgICB0aXRsZTogJ01hc3NhZ2UnLFxuICAgICAgd2lkdGg6ICcyMCUnLFxuICAgIH0sXG4gICAge1xuICAgICAgdXJsOlxuICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzY0ODA4NjIxMjYtMjA5YmZhYThlZGM4P2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDAwJnE9ODAnLFxuICAgICAgdGl0bGU6ICdIaWtpbmcnLFxuICAgICAgd2lkdGg6ICc0MCUnLFxuICAgIH0sXG4gICAge1xuICAgICAgdXJsOlxuICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NTM3NDcwNjM1NTktMzY2OTVjODc3MWJkP2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDAwJnE9ODAnLFxuICAgICAgdGl0bGU6ICdUb3VyJyxcbiAgICAgIHdpZHRoOiAnMzglJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHVybDpcbiAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTIzMzA5OTk2NzQwLWQ1MzE1ZjljYzI4Yj9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTQwMCZxPTgwJyxcbiAgICAgIHRpdGxlOiAnR2FzdHJvbm9teScsXG4gICAgICB3aWR0aDogJzM4JScsXG4gICAgfSxcbiAgICB7XG4gICAgICB1cmw6XG4gICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNDQ1MjIwMzI5My00OTRkN2RkYmY3ZTA/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz00MDAmcT04MCcsXG4gICAgICB0aXRsZTogJ1Nob3BwaW5nJyxcbiAgICAgIHdpZHRoOiAnMjQlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHVybDpcbiAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2OTQxNDMzOTQ1LTk5YTJhYTRiZDUwYT9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTQwMCZxPTgwJyxcbiAgICAgIHRpdGxlOiAnV2Fsa2luZycsXG4gICAgICB3aWR0aDogJzQwJScsXG4gICAgfSxcbiAgICB7XG4gICAgICB1cmw6XG4gICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMzcyNzkzNzQ4MC1kYTNhOTc5NjdlOTU/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz00MDAmcT04MCcsXG4gICAgICB0aXRsZTogJ0ZpdG5lc3MnLFxuICAgICAgd2lkdGg6ICcyMCUnLFxuICAgIH0sXG4gICAge1xuICAgICAgdXJsOlxuICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTgxMzYyNDc0NTMtNzRlN2I1MjY1OTgwP2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDAwJnE9ODAnLFxuICAgICAgdGl0bGU6ICdSZWFkaW5nJyxcbiAgICAgIHdpZHRoOiAnNDAlJyxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gY29tcG9uZW50PVwic2VjdGlvblwiPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgbWFya2VkPVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICBGb3IgYWxsIHRhc3RlcyBhbmQgYWxsIGRlc2lyZXNcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlc30+XG4gICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgIDxCdXR0b25CYXNlXG4gICAgICAgICAgICBrZXk9e2ltYWdlLnRpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlV3JhcHBlcn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiBpbWFnZS53aWR0aCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2UudXJsfSlgLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJ1dHRvbn0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VUaXRsZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpbWFnZS50aXRsZX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hcmtlZH0gLz5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9CdXR0b25CYXNlPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5Qcm9kdWN0Q2F0ZWdvcmllcy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9kdWN0Q2F0ZWdvcmllcyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknO1xuaW1wb3J0IFByb2R1Y3RIZXJvTGF5b3V0IGZyb20gJy4vUHJvZHVjdEhlcm9MYXlvdXQnO1xuLy8gaW1wb3J0IGJhY2tncm91bmRJbWFnZSBmcm9tICcuLi8uLi8uLi9pbWFnZS9iZy1jYWxlbmRhci5zdmcnO1xuXG5jb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSAnL3N0YXRpYy9iZy1jYWxlbmRhci5zdmcnO1xuLy8gY29uc3QgYmFja2dyb3VuZEltYWdlID0gJy4uLy4uLy4uL2ltYWdlL2JnLWNhbGVuZGFyLnN2Zyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgYmFja2dyb3VuZDoge1xuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pYCxcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjN2ZjN2Q5JywgLy8gQXZlcmFnZSBjb2xvciBvZiB0aGUgYmFja2dyb3VuZCBpbWFnZS5cbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICB9LFxuICBidXR0b246IHtcbiAgICBtaW5XaWR0aDogMjAwLFxuICB9LFxuICBoNToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgICB9LFxuICB9LFxuICBtb3JlOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIFByb2R1Y3RIZXJvKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdEhlcm9MYXlvdXQgYmFja2dyb3VuZENsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZ3JvdW5kfT5cbiAgICAgIHsvKiBJbmNyZWFzZSB0aGUgbmV0d29yayBsb2FkaW5nIHByaW9yaXR5IG9mIHRoZSBiYWNrZ3JvdW5kIGltYWdlLiAqL31cbiAgICAgIHsvKiA8aW1nIHNyYz17YmFja2dyb3VuZEltYWdlfSBhbHQ9XCJpbmNyZWFzZSBwcmlvcml0eVwiIC8+ICovfVxuICAgICAgey8qIDxpbWcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IHNyYz17YmFja2dyb3VuZEltYWdlfSBhbHQ9XCJpbmNyZWFzZSBwcmlvcml0eVwiIC8+ICovfVxuICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJpbmhlcml0XCIgYWxpZ249XCJjZW50ZXJcIiB2YXJpYW50PVwiaDJcIiBtYXJrZWQ9XCJjZW50ZXJcIj5cbiAgICAgICAgVXBncmFkZSB5b3VyIFN1bmRheXNcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiaW5oZXJpdFwiIGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImg1XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmg1fT5cbiAgICAgICAgRW5qb3kgc2VjcmV0IG9mZmVycyB1cCB0byAtNzAlIG9mZiB0aGUgYmVzdCBsdXh1cnkgaG90ZWxzIGV2ZXJ5IFN1bmRheS5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgIGhyZWY9XCIvcHJlbWl1bS10aGVtZXMvb25lcGlyYXRlL3NpZ24tdXAvXCJcbiAgICAgID5cbiAgICAgICAgUmVnaXN0ZXJcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vcmV9PlxuICAgICAgICBEaXNjb3ZlciB0aGUgZXhwZXJpZW5jZVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvUHJvZHVjdEhlcm9MYXlvdXQ+XG4gICk7XG59XG5cblByb2R1Y3RIZXJvLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFByb2R1Y3RIZXJvKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XG5pbXBvcnQgQXJyb3dEb3dud2FyZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Rvd253YXJkXCI7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xuICAgICAgICAgICAgaGVpZ2h0OiBcIjgwdmhcIixcbiAgICAgICAgICAgIG1pbkhlaWdodDogNTAwLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiAxMzAwLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDE0KSxcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgfSxcbiAgICBiYWNrZHJvcDoge1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXG4gICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgekluZGV4OiAtMSxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICB6SW5kZXg6IC0yLFxuICAgIH0sXG4gICAgYXJyb3dEb3duOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcbiAgICB9LFxufSk7XG5cbmZ1bmN0aW9uIFByb2R1Y3RIZXJvTGF5b3V0KHByb3BzKSB7XG4gICAgY29uc3QgeyBiYWNrZ3JvdW5kQ2xhc3NOYW1lLCBjaGlsZHJlbiwgY2xhc3NlcyB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZHJvcH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmJhY2tncm91bmQsIGJhY2tncm91bmRDbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXJyb3dEb3dufVxuICAgICAgICAgIHNyYz1cIi9zdGF0aWMvdGhlbWVzL29uZXBpcmF0ZS9wcm9kdWN0SGVyb0Fycm93RG93bi5wbmdcIlxuICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICBhbHQ9XCJhcnJvdyBkb3duXCJcbiAgICAgICAgLz4gKi99XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxBcnJvd0Rvd253YXJkSWNvbiAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuUHJvZHVjdEhlcm9MYXlvdXQucHJvcFR5cGVzID0ge1xuICAgIGJhY2tncm91bmRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoUHJvZHVjdEhlcm9MYXlvdXQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxMCksXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDE1KSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG4gIGl0ZW06IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCA1KSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMTQpLFxuICB9LFxuICBudW1iZXI6IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBoZWlnaHQ6IDU1LFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gIH0sXG4gIGN1cnZ5TGluZXM6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAtMTgwLFxuICAgIG9wYWNpdHk6IDAuNyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIFByb2R1Y3RIb3dJdFdvcmtzKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL3N0YXRpYy90aGVtZXMvb25lcGlyYXRlL3Byb2R1Y3RDdXJ2eUxpbmVzLnBuZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1cnZ5TGluZXN9XG4gICAgICAgICAgYWx0PVwiY3VydnkgbGluZXNcIlxuICAgICAgICAvPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBtYXJrZWQ9XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IGNvbXBvbmVudD1cImgyXCI+XG4gICAgICAgICAgSG93IGl0IHdvcmtzXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5udW1iZXJ9PjEuPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy90aGVtZXMvb25lcGlyYXRlL3Byb2R1Y3RIb3dJdFdvcmtzMS5zdmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwic3VpdGNhc2VcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIEFwcG9pbnRtZW50IGV2ZXJ5IFdlZG5lc2RheSA5YW0uXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm51bWJlcn0+Mi48L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL3RoZW1lcy9vbmVwaXJhdGUvcHJvZHVjdEhvd0l0V29ya3MyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJncmFwaFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgRmlyc3QgY29tZSwgZmlyc3Qgc2VydmVkLiBPdXIgb2ZmZXJzIGFyZSBpbiBsaW1pdGVkIHF1YW50aXRpZXMsIHNvIGJlIHF1aWNrLlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5udW1iZXJ9PjMuPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy90aGVtZXMvb25lcGlyYXRlL3Byb2R1Y3RIb3dJdFdvcmtzMy5zdmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiY2xvY2tcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsnTmV3IG9mZmVycyBldmVyeSB3ZWVrLiBOZXcgZXhwZXJpZW5jZXMsIG5ldyBzdXJwcmlzZXMuICd9XG4gICAgICAgICAgICAgICAgICB7J1lvdXIgU3VuZGF5cyB3aWxsIG5vIGxvbmdlciBiZSBhbGlrZS4nfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgaHJlZj1cIi9wcmVtaXVtLXRoZW1lcy9vbmVwaXJhdGUvc2lnbi11cC9cIlxuICAgICAgICA+XG4gICAgICAgICAgR2V0IHN0YXJ0ZWRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cblByb2R1Y3RIb3dJdFdvcmtzLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFByb2R1Y3RIb3dJdFdvcmtzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDkpLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg5KSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYm9yZGVyOiAnNHB4IHNvbGlkIGN1cnJlbnRDb2xvcicsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNSksXG4gIH0sXG4gIGxpbms6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxuICB9LFxuICBidW95OiB7XG4gICAgd2lkdGg6IDYwLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIFByb2R1Y3RTbW9raW5nSGVybyhwcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gY29tcG9uZW50PVwic2VjdGlvblwiPlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwic3BhblwiPlxuICAgICAgICAgIEdvdCBhbnkgcXVlc3Rpb25zPyBOZWVkIGhlbHA/XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgV2UgYXJlIGhlcmUgdG8gaGVscC4gR2V0IGluIHRvdWNoIVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPGltZyBzcmM9XCIvc3RhdGljL3RoZW1lcy9vbmVwaXJhdGUvcHJvZHVjQnVveS5zdmdcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnVveX0gYWx0PVwiYnVveVwiIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cblByb2R1Y3RTbW9raW5nSGVyby5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9kdWN0U21va2luZ0hlcm8pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0LFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTUpLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzMCksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBpdGVtOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgNSksXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgaGVpZ2h0OiA1NSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDUpLFxuICB9LFxuICBjdXJ2eUxpbmVzOiB7XG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogLTE4MCxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBQcm9kdWN0VmFsdWVzKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL3N0YXRpYy90aGVtZXMvb25lcGlyYXRlL3Byb2R1Y3RDdXJ2eUxpbmVzLnBuZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1cnZ5TGluZXN9XG4gICAgICAgICAgYWx0PVwiY3VydnkgbGluZXNcIlxuICAgICAgICAvPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvdGhlbWVzL29uZXBpcmF0ZS9wcm9kdWN0VmFsdWVzMS5zdmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cInN1aXRjYXNlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICBUaGUgYmVzdCBsdXh1cnkgaG90ZWxzXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgeydGcm9tIHRoZSBsYXRlc3QgdHJlbmR5IGJvdXRpcXVlIGhvdGVsIHRvIHRoZSBpY29uaWMgcGFsYWNlIHdpdGggWFhMIHBvb2wnfVxuICAgICAgICAgICAgICAgIHsnLCBnbyBmb3IgYSBtaW5pLXZhY2F0aW9uIGp1c3QgYSBmZXcgc3Vid2F5IHN0b3BzIGF3YXkgZnJvbSB5b3VyIGhvbWUuJ31cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL3RoZW1lcy9vbmVwaXJhdGUvcHJvZHVjdFZhbHVlczIuc3ZnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJncmFwaFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAgTmV3IGV4cGVyaWVuY2VzXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgeydQcml2YXRpemUgYSBwb29sLCB0YWtlIGEgSmFwYW5lc2UgYmF0aCBvciB3YWtlIHVwIGluIDkwMG0yIG9mIGdhcmRlbuKApiAnfVxuICAgICAgICAgICAgICAgIHsneW91ciBTdW5kYXlzIHdpbGwgbm90IGJlIGFsaWtlLid9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy90aGVtZXMvb25lcGlyYXRlL3Byb2R1Y3RWYWx1ZXMzLnN2Z1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiY2xvY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgIEV4Y2x1c2l2ZSByYXRlc1xuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgIHsnQnkgcmVnaXN0ZXJpbmcsIHlvdSB3aWxsIGFjY2VzcyBzcGVjaWFsbHkgbmVnb3RpYXRlZCByYXRlcyAnfVxuICAgICAgICAgICAgICAgIHsndGhhdCB5b3Ugd2lsbCBub3QgZmluZCBhbnl3aGVyZSBlbHNlLid9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5Qcm9kdWN0VmFsdWVzLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFByb2R1Y3RWYWx1ZXMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB0aGVtZSBmcm9tICcuL3RoZW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvb3QoQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIFdpdGhSb290KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gV2l0aFJvb3Q7XG59XG4iLCJcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcblxyXG5pbXBvcnQgUmVzcG9uc2l2ZURyYXdlciBmcm9tICcuLi9jb21wb25lbnRzL3ZpZXcvUmVzcG9uc2l2ZURyYXdlcic7XHJcbmltcG9ydCBTaW1wbGVTZWxlY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlldy9TZWxlY3RcIjtcclxuaW1wb3J0IENhbGVuZGFyMyBmcm9tIFwiLi4vY29tcG9uZW50cy90ZXN0L0NhbGVuZGFyM1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvd2l0aEF1dGgnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCBJbmRleCBmcm9tICcuLi9vbmVwaXJhdGUvSG9tZSc7XHJcblxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEluZGV4IC8+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEhvbWUpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RG93bndhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbmZvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZGF0YWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9