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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/tasks.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

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

/***/ "./src/components/test/firebaseTest/DBFetch.tsx":
/*!******************************************************!*\
  !*** ./src/components/test/firebaseTest/DBFetch.tsx ***!
  \******************************************************/
/*! exports provided: useFetchAllData, useRegisterData, useUpdateData, useDelteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchAllData", function() { return useFetchAllData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterData", function() { return useRegisterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateData", function() { return useUpdateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDelteData", function() { return useDelteData; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebaseTest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");
// データベースへの接続
// import firebase from "firebase/app";
// 認証周りやDB周りで必要なためimportしておく






const useReduxFetch = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  return dispatch;
}; // カスタムフックにしておく


const useDatabase = () => {
  // const useDatabase = () => {
  const {
    userId
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user); // const dispatch = useDispatch();
  // const [check, setCheck] = useState(false);
  // const [userIdCheck, setuserIdCheck] = useState('');
  // if (userId != '' && userId != userIdCheck){
  //     console.log('userId');
  //     console.log(userId);
  //     console.log('check');
  //     console.log(check);
  //     console.log('userIdCheck');
  //     console.log(userIdCheck);
  //     setuserIdCheck(userId);
  //     setCheck(!check);
  // }
  // 同じパスでは毎回同じ結果が得られるのでmemo化しておく
  // return useMemo(() => firebase.database().ref("/sample"), []);
  // const authUser = firebase.auth().currentUser;
  // if (!!uid) {
  //     if (userId == "") {
  //         dispatch(login(uid.uid));
  //         setCheck("check");
  //         // console.log("check");
  //     }
  //     // console.log("DBF 1 userId");
  //     // console.log(userId);
  //     return useMemo(() => firebase.database().ref("/users/" + userId), [
  //         userId,
  //     ]);
  // } else {
  // ここが原因。ここでuserId取得後にrefを更新できればいい

  console.log("DBF 2 userId");
  console.log(userId);
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => _firebaseTest__WEBPACK_IMPORTED_MODULE_4__["firebase"].database().ref("/users/" + userId), [userId]); // return useMemo(() => firebase.database().ref("/users/" + authUser.uid), []);
  // }
}; //   データを取得する
// hooksを使いたいのでカスタムhooksにしておく


const useFetchData = ref => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    userId
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!!userId) {
      // イベントリスナーを追加するにはonを使う
      ref.on("value", snapshot => {
        // パスに対する全データを含むsnapshotが渡される
        // ない場合はnullが返るので存在をチェックしておく
        if (snapshot === null || snapshot === void 0 ? void 0 : snapshot.val()) {
          setData(snapshot.val());
          console.log("DBF data");
          console.log(data);
        }
      });
      console.log("DBFetch data==========");
      console.log(data);
      return () => {
        ref.off();
      }; // refの変更に応じて再取得する
      //   指定したパスのデータに対する更新をすべて検知するにはvalueを指定すれば良い。
    }
  }, [ref]); // データを返却する

  return {
    data
  };
}; // 実際に呼び出す際はこちらを使う


const useFetchAllData = () => {
  const uid = _firebaseTest__WEBPACK_IMPORTED_MODULE_4__["firebase"].auth().currentUser;
  const {
    userTaskInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.tasks); // refを取得して

  const ref = useDatabase();
  console.log('ref');
  console.log(ref); // ref渡してデータを取得する

  return useFetchData(ref);
}; // 登録処理
// この登録はsetに渡した値での登録となる。
// つまり、既存のデータも含めて渡してあげないと登録済みのデータが消える。


const useSetDocument = ref => {
  const updateDocument = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(document => {
    // refについては前回の記事参照
    // setに登録したいデータを渡してあげれば登録できる
    ref.set(document);
  }, [ref]);
  return updateDocument;
};

const useRegisterData = () => {
  // 前回作ったuseDatabase()を使いref取得
  const ref = useDatabase();
  const setDocument = useSetDocument(ref); // 登録済みのデータを全部取得する

  const {
    data: registeredData
  } = useFetchAllData();
  const {
    userTaskInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.tasks); // データを登録する関数を返却する
  // 可能であればここの処理はそのままにして、引数でsteteを更新する処理を先に行いたい

  const registerData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(registerData => {
    // () => {
    // console.log(userTaskInfo);
    // ここでReduxに保管しているstateを更新する？
    // dispatch(Register({ ...registerData }));
    // 既存のデータと登録するkey-valueを合わせて登録関数に渡す
    // setDocument({ ...registeredData, ...registerData });
    setDocument(userTaskInfo);
  }, [setDocument, registeredData]); // 返した関数を利用することで、登録済みデータ全て+登録したいデータをDBに保管できる

  return registerData;
}; // 更新処理


const useUpdateDocument = ref => {
  // ref.updateがObjectを受け取るので、Objectを引数に取る関数を定義
  const updateDocument = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(document => ref.update(document), [ref]);
  return updateDocument;
};

const useUpdateData = () => {
  // setの時と同じくrefを取得して、
  const ref = useDatabase(); // 関数呼び出して

  const updateDocument = useUpdateDocument(ref); // 更新処理を作成する

  const updateData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(registerData => {
    updateDocument(registerData);
  }, [updateDocument]);
  return updateData;
}; // 削除処理


const useRemoveDocument = ref => {
  // 特に引数が必要ないのでただ呼び出すのみ
  const deleteDocument = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(document => ref.child(document).remove(), [ref]);
  return deleteDocument;
}; // set、updateと同じなので割愛


const useDelteData = () => {
  const ref = useDatabase();
  const removeDocument = useRemoveDocument(ref);
  const deleteData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(deleteData => removeDocument(deleteData), [removeDocument]);
  return deleteData;
};



/***/ }),

/***/ "./src/components/test/firebaseTest/FirebaseAuthComponent.tsx":
/*!********************************************************************!*\
  !*** ./src/components/test/firebaseTest/FirebaseAuthComponent.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FirebaseAuthComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebaseTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");
/* harmony import */ var _modules_userModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/userModule */ "./src/modules/userModule.tsx");
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\test\\firebaseTest\\FirebaseAuthComponent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useReduxFetch = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  return dispatch;
}; // ログイン、ログアウトボタン実装


function FirebaseAuthComponent() {
  const loggedin = useFirebaseLogin();
  const dispatch = useReduxFetch();

  if (!loggedin) {
    // ログインしていなければログインボタンを表示
    return __jsx("button", {
      onClick: () => signInWithPopup(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }
    }, "\u30ED\u30B0\u30A4\u30F3");
  } // ログインしているならログアウトボタンを表示


  return __jsx("button", {
    onClick: () => useSignOut(dispatch),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }, "\u30ED\u30B0\u30A2\u30A6\u30C8");
} // ログイン処理

const signInWithPopup = () => {
  // Googleプロバイダオブジェクトのインスタンスを作成
  const googleAuthProvider = new _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth.GoogleAuthProvider(); // dispatch(login(userIdCheck));
  // 別タブでログイン画面に飛ばしたいため、signInWithPopupを使う
  // リダイレクトでログイン画面に飛ばしたい場合はsignInWithRedirectを使う

  return _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signInWithPopup(googleAuthProvider);
}; // ログアウト処理


const useSignOut = dispatch => {
  // signOutを呼び出すだけでOK
  // const dispatch = useReduxFetch();
  dispatch(Object(_modules_userModule__WEBPACK_IMPORTED_MODULE_2__["logout"])());
  dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_3__["allDelete"])());
  return _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().signOut();
}; // ログインしているかチェックするカスタムフックを作る


const useFirebaseLogin = () => {
  // stateでログイン状態を保持
  const {
    0: loggedin,
    1: setLoggedin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = useReduxFetch();
  const {
    userTaskInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.tasks);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // 現在ログインしているユーザを取得
    _firebaseTest__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().onAuthStateChanged(user => {
      // ユーザ情報が取れればログイン状態
      let userIdCheck;
      console.log('FAC !!user');
      console.log(!!user);

      if (!!user) {
        userIdCheck = user.uid; // console.log('data');
        // console.log(data);
        // dispatch(init(data));

        console.log('FAC userTaskInfo.calendar[0].PatternId'); // console.log(userTaskInfo.calendar[0].PatternId);
        // これをreduxで管理する
        // dispatch(login(userIdCheck));
      }

      setLoggedin(!!user);
    });
  }, []); // ログイン情報を返却

  return loggedin;
};

/***/ }),

/***/ "./src/components/test/firebaseTest/FormComponent.tsx":
/*!************************************************************!*\
  !*** ./src/components/test/firebaseTest/FormComponent.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DBFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DBFetch */ "./src/components/test/firebaseTest/DBFetch.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\test\\firebaseTest\\FormComponent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FormComponent() {
  const registerData = Object(_DBFetch__WEBPACK_IMPORTED_MODULE_1__["useRegisterData"])();
  const updateData = Object(_DBFetch__WEBPACK_IMPORTED_MODULE_1__["useUpdateData"])();
  const deleteData = Object(_DBFetch__WEBPACK_IMPORTED_MODULE_1__["useDelteData"])();
  const {
    0: keyData,
    1: setKeyData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: valueData,
    1: setValueData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Key:", " ", __jsx("input", {
    placeholder: "key",
    onChange: event => setKeyData(event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Value:", " ", __jsx("input", {
    placeholder: "value",
    onChange: event => setValueData(event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  })), __jsx("button", {
    onClick: () => registerData({
      [keyData]: valueData
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "\u767B\u9332"), __jsx("button", {
    onClick: () => updateData({
      [keyData]: valueData
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "\u66F4\u65B0"), __jsx("button", {
    onClick: () => deleteData(keyData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Key\u6307\u5B9A\u524A\u9664"));
}

/***/ }),

/***/ "./src/components/test/firebaseTest/firebaseTest.tsx":
/*!***********************************************************!*\
  !*** ./src/components/test/firebaseTest/firebaseTest.tsx ***!
  \***********************************************************/
/*! exports provided: firebase, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
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


/***/ }),

/***/ "./src/components/test/firebaseTest/getData.tsx":
/*!******************************************************!*\
  !*** ./src/components/test/firebaseTest/getData.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\test\\firebaseTest\\getData.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// 認証周りやDB周りで必要なためimportしておく



function ListComponent() {
  const {
    0: UT,
    1: setUT
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.tasks));
  const {
    userId
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // const { data } = useFetchAllData();

  const {
    userTaskInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.tasks); // useEffect(() => {
  // // dataを取ってくる
  // if (userId != '' && !!data) {
  //   console.log(userId);
  //   console.log("getData.tsx data");
  //   console.log(data);
  //   // setUT(useSelector((state: RootState) => state.tasks));
  //   // dispatch(init(data));
  // }
  // },[userId]);
  // ここでstateを使うならログイン時にDBから取得したデータをReduxに保管する必要がある。
  // useCallback(() => {
  //     userTask = useSelector((state: RootState) => state.tasks);
  // }, [userId]);

  console.log("getData userTaskInfo");
  console.log(userTaskInfo); // data ? console.log(data.userTaskInfo) : console.log('noo');
  // object形式なので使いやすいように{key, value}形式のリストに変換する
  // また、データが変わらない限り結果は同じなのでメモ化しておく
  // const dataList = useMemo(() => Object.entries(data || {}).map(([key, value]) => ({ key, value })), [data]);

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 12
    }
  }, "test"); // return <div>{userTaskInfo.calendar[0].PatternId}</div>;
  // <dl>{dataList.map(({ key, value }) =>
  //   <React.Fragment key={`${key}${value}`}>
  //     <dt>key: {key}</dt>
  //     <dt>value: {value}</dt>
  //   </React.Fragment>
  // )}</dl>
}

/***/ }),

/***/ "./src/components/view/AppVar.tsx":
/*!****************************************!*\
  !*** ./src/components/view/AppVar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _InputNormal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputNormal */ "./src/components/view/InputNormal.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\AppVar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '40%',
    zIndex: 5
  },
  title: {
    flexGrow: 1
  }
}));
function ButtonAppBar(props) {
  const classes = useStyles();
  const {
    userTaskInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.tasks);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  const onChangeHandler = event => {
    // console.log(event.target.value);
    // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_8__["taskDetailRegister"])([event.target.value, 'title', props.index]));
  };

  let button;

  if (props.checkNew) {
    button = __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      color: "inherit",
      onClick: props.handleRegister,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 14
      }
    }, "\u767B\u9332");
  }

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_6__["default"] // label="if-thenプランニング"
  , {
    label: 'タスク名',
    required: false,
    index: props.index,
    contentIndex: 0,
    contents: props.contents,
    setContents: props.setContents,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  })), props.checkNew ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "inherit",
    onClick: props.handleRegister,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, "\u767B\u9332") : null)));
}

/***/ }),

/***/ "./src/components/view/FloatingActionButton.tsx":
/*!******************************************************!*\
  !*** ./src/components/view/FloatingActionButton.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollableTabsButtonAuto; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PatternList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PatternList */ "./src/components/view/PatternList.tsx");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Select */ "./src/components/view/Select.tsx");
/* harmony import */ var _TaskList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TaskList */ "./src/components/view/TaskList.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\FloatingActionButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return __jsx("div", _extends({
    role: "tabpanel",
    hidden: value !== index,
    id: `scrollable-auto-tabpanel-${index}`,
    "aria-labelledby": `scrollable-auto-tab-${index}`
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, children)));
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
}));
function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [choice, setChoice] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(Number);

  const handleChange = (event, newValue) => {
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
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    color: "default",
    className: classes.barSize,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    label: "Tasks"
  }, a11yProps(0), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
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
  }, __jsx(_TaskList__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, __jsx(_Select__WEBPACK_IMPORTED_MODULE_8__["default"], {
    choice: choice,
    setChoice: setChoice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }), __jsx(_PatternList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    choice: choice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./src/components/view/InputNormal.tsx":
/*!*********************************************!*\
  !*** ./src/components/view/InputNormal.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormPropsTextFields; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\InputNormal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));
function FormPropsTextFields(props) {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    userTaskInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.tasks);

  const onChangeHandler = event => {
    // console.log(event.target.value);
    // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_4__["taskDetailRegister"])([event.target.value, props.label, props.index]));
  };

  const newTaskOnChangeHandler = event => {
    // console.log(event.target.value);
    // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成
    const contentsCopy = props.contents.slice();
    contentsCopy[props.contentIndex].value = event.target.value;
    props.setContents(contentsCopy);
  }; // const check = userTaskInfo.tasks[parseInt(props.index)].detail;
  // const check = userTaskInfo.tasks[parseInt(props.index)].detail[props.label]
  // 新規登録か更新かをチェックする。新規であればTrue


  const checkNew = userTaskInfo.tasks.length < parseInt(props.index); // console.log("inputNormal check " + props.label);
  // console.log(checkNew);

  if (checkNew) {
    return (// <form className={classes.root} noValidate autoComplete="off">
      __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
      __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
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

/***/ }),

/***/ "./src/components/view/Menu.tsx":
/*!**************************************!*\
  !*** ./src/components/view/Menu.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\Menu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function SimpleMenu(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = () => {
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_4__["taskDelete"])(props.index));
    handleClose();
    console.log('delete check click');
  };

  const handleClose = () => {
    // props.deleteTaskHandler(props.index);
    props.setOpenMune(9999);
    console.log('delete check close');
    console.log(props.index);
  };

  console.log('delete check render');
  console.log(props.index);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "simple-menu",
    anchorEl: props.anchorEl,
    keepMounted: true // open={Boolean(props.anchorEl)}
    ,
    open: props.index == props.openMenu,
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "\u30BF\u30B9\u30AF\u3092\u524A\u9664\u3059\u308B")));
}

/***/ }),

/***/ "./src/components/view/PatternAddMenu.tsx":
/*!************************************************!*\
  !*** ./src/components/view/PatternAddMenu.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Send */ "@material-ui/icons/Send");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\PatternAddMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  pattern: {
    width: 'fit-content',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    margin: theme.spacing(2)
  }
}));
function PatternMenu(props) {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const [patternName, setPatternName] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');

  const handleClick = () => {
    // dispatch(taskDelete(props.index));
    props.Handler(patternName);
    setPatternName('');
    handleClose();
  };

  const onChangeHandler = event => {
    setPatternName(event.target.value);
  };

  const handleClose = () => {
    // props.deleteTaskHandler(props.index);
    props.setOpenMune(9999);
  };

  let patternEditMenu = __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "patternAddMenu",
    label: '新規パターン名',
    onChange: onChangeHandler,
    value: patternName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    edge: "end",
    "aria-label": "patternAdd",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  })));

  return __jsx("div", {
    className: classes.pattern,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "simple-menu",
    anchorEl: props.anchorEl,
    keepMounted: true // open={Boolean(props.anchorEl)}
    ,
    open: props.index == props.openMenu,
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, patternEditMenu));
}

/***/ }),

/***/ "./src/components/view/PatternDeleteMenu.tsx":
/*!***************************************************!*\
  !*** ./src/components/view/PatternDeleteMenu.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\PatternDeleteMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  pattern: {
    width: 'fit-content',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    margin: theme.spacing(2)
  }
}));
function PatternMenu(props) {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const [patternName, setPatternName] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');

  const handleClick = () => {
    // dispatch(taskDelete(props.index));
    props.Handler(patternName);
    setPatternName('');
    handleClose();
  };

  const onChangeHandler = event => {
    setPatternName(event.target.value);
  };

  const handleClose = () => {
    // props.deleteTaskHandler(props.index);
    props.setOpenMune(9999);
  };

  let patternEditMenu = __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, "\u30D1\u30BF\u30FC\u30F3\u3092\u524A\u9664\u3059\u308B");

  return __jsx("div", {
    className: classes.pattern,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "simple-menu",
    anchorEl: props.anchorEl,
    keepMounted: true // open={Boolean(props.anchorEl)}
    ,
    open: props.index == props.openMenu,
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, patternEditMenu));
}

/***/ }),

/***/ "./src/components/view/PatternEditMenu.tsx":
/*!*************************************************!*\
  !*** ./src/components/view/PatternEditMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Send */ "@material-ui/icons/Send");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\PatternEditMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  pattern: {
    width: 'fit-content',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    margin: theme.spacing(2)
  }
}));
function PatternMenu(props) {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const [patternName, setPatternName] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');

  const handleClick = () => {
    // dispatch(taskDelete(props.index));
    props.Handler(patternName);
    setPatternName('');
    handleClose();
  };

  const onChangeHandler = event => {
    setPatternName(event.target.value);
  };

  const handleClose = () => {
    // props.deleteTaskHandler(props.index);
    props.setOpenMune(9999);
  };

  let patternEditMenu = __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "patternEditMenu",
    label: 'パターン名',
    onChange: onChangeHandler,
    value: patternName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 10
    }
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    edge: "end",
    "aria-label": "patternAdd",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })));

  return __jsx("div", {
    className: classes.pattern,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "simple-menu",
    anchorEl: props.anchorEl,
    keepMounted: true // open={Boolean(props.anchorEl)}
    ,
    open: props.index == props.openMenu,
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, patternEditMenu));
}

/***/ }),

/***/ "./src/components/view/PatternList.tsx":
/*!*********************************************!*\
  !*** ./src/components/view/PatternList.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Comment */ "@material-ui/icons/Comment");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/RemoveCircle */ "@material-ui/icons/RemoveCircle");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\PatternList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  roots: {
    width: "100%",
    maxWidth: 720,
    margin: "auto",
    backgroundColor: theme.palette.background.paper
  }
}));
function PatternList(props) {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  const {
    userTaskInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.tasks); // マイナスボタンがクリックされたらパターンから対象のタスクを除外する。

  const patternRemoveHandler = detailTitle => () => {
    const patternId = props.choice;
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_12__["taskRemovePattern"])({
      patternId,
      detailTitle
    }));
  }; // 選択したパターンIDが設定されているタスクを抽出する。


  const choicePatternTasks = userTaskInfo.tasks.filter(function (task) {
    return task.patternInfo.some(task => task.patternID == props.choice);
  });
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, choicePatternTasks.map((task, index) => {
    const taskPattern = task.patternInfo.filter(function (patternInfo) {
      return patternInfo.patternID == props.choice;
    });
    const labelId = `checkbox-list-label-${taskPattern[0].patternID + taskPattern[0].order}`;
    return __jsx("div", {
      key: taskPattern[0].patternID + '_' + index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: taskPattern[0].patternID + taskPattern[0].order,
      role: undefined,
      dense: true,
      button: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      edge: "end",
      "aria-label": "comments",
      onClick: patternRemoveHandler(task.detail['title']),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9___default.a, {
      color: "secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 37
      }
    }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: labelId,
      primary: `${task.detail["タスク名"]}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      edge: "end",
      "aria-label": "comments",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 37
      }
    })))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 25
      }
    }));
  }));
}

/***/ }),

/***/ "./src/components/view/PatternSwitch.tsx":
/*!***********************************************!*\
  !*** ./src/components/view/PatternSwitch.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternSwitchList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "@material-ui/core/ListSubheader");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\PatternSwitch.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));
function PatternSwitchList(props) {
  const classes = useStyles();
  const {
    userTaskInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.tasks);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])(); // ここでパターンの登録状況を更新する

  const handleToggle = value => () => {
    const currentIndex = props.checked.indexOf(value);
    const newChecked = [...props.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    props.setChecked(newChecked);
    console.log('newChecked');
    console.log(newChecked);
    const index = props.index;
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_9__["taskPatternUpdate"])({
      newChecked,
      index
    }));
  };

  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
  }, userTaskInfo.pattern.map(content => {
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: content.patternName + '_' + props.checked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: content.patternId + "_" + content.patternName,
      primary: content.patternName,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7___default.a, {
      edge: "end",
      onChange: handleToggle(content.patternId),
      checked: props.checked.indexOf(content.patternId) !== -1,
      inputProps: {
        "aria-labelledby": content.patternId + "_" + content.patternName
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }
    })));
  }));
}

/***/ }),

/***/ "./src/components/view/ResponsiveDrawer.tsx":
/*!**************************************************!*\
  !*** ./src/components/view/ResponsiveDrawer.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponsiveDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/DateRange */ "@material-ui/icons/DateRange");
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/List */ "@material-ui/icons/List");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_DirectionsRun__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/DirectionsRun */ "@material-ui/icons/DirectionsRun");
/* harmony import */ var _material_ui_icons_DirectionsRun__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DirectionsRun__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\ResponsiveDrawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










 // import Link from '@material-ui/core/Link';









const drawerWidth = 240;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["createStyles"])({
  rootd: {
    display: "inline-block"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
function ResponsiveDrawer(props) {
  const {
    window
  } = props;
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["useTheme"])();
  const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/DayPlan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    button: true,
    key: "Day Plan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_DirectionsRun__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Day Plan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/tasks",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    button: true,
    key: "Tasks",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Tasks",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/calendar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    button: true,
    key: "Calendar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Calendar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  })))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }));

  const container = window !== undefined ? () => window().document.body : undefined;
  return __jsx("div", {
    className: classes.rootd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    position: "fixed",
    className: classes.appBar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
    onClick: handleDrawerToggle,
    className: classes.menuButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17___default.a, {
    variant: "h6",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, "Responsive drawer"))), __jsx("nav", {
    className: classes.drawer,
    "aria-label": "mailbox folders",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
    smUp: true,
    implementation: "css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: container,
    variant: "temporary",
    anchor: theme.direction === "rtl" ? "right" : "left",
    open: mobileOpen,
    onClose: handleDrawerToggle,
    classes: {
      paper: classes.drawerPaper
    },
    ModalProps: {
      keepMounted: true // Better open performance on mobile.

    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }, drawer)), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
    xsDown: true,
    implementation: "css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4___default.a, {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 21
    }
  }, drawer))));
}

/***/ }),

/***/ "./src/components/view/Select.tsx":
/*!****************************************!*\
  !*** ./src/components/view/Select.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/RemoveCircle */ "@material-ui/icons/RemoveCircle");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "@material-ui/icons/AddCircle");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
/* harmony import */ var _PatternAddMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PatternAddMenu */ "./src/components/view/PatternAddMenu.tsx");
/* harmony import */ var _PatternDeleteMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PatternDeleteMenu */ "./src/components/view/PatternDeleteMenu.tsx");
/* harmony import */ var _PatternEditMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PatternEditMenu */ "./src/components/view/PatternEditMenu.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\Select.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  home: {
    width: 'fit-content',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icons: {
    width: 'fit-content',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    margin: theme.spacing(2)
  }
}));
function SimpleSelect(props) {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const [pattern, setPattern] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const {
    userTaskInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.tasks);
  const [openMenu, setOpenMune] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(9999);
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  if (props.choice == 0 && userTaskInfo.pattern.length > 0) {
    props.setChoice(userTaskInfo.pattern[0].patternId);
    console.log(userTaskInfo.pattern[0].patternId);
  }

  if (userTaskInfo.pattern.length == 0) {
    console.log('check length 0');
    props.setChoice(0);
  } // props.setChoice(userTaskInfo.pattern[0].patternId);


  const handleChange = event => {
    setPattern(event.target.value);
    props.setChoice(event.target.value);
  };

  const handleClick = value => event => {
    setAnchorEl(event.currentTarget);
    setOpenMune(value);
    console.log("openMenu:" + openMenu);
  };

  const patternAddHandler = patternName => {
    console.log("Patterntest patternAddHandler");
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_11__["patternRegister"])(patternName));
  };

  const patternDeleteHandler = patternName => {
    // 削除時、未来に登録されているパターンは削除する必要がある
    console.log("Patterntest patternDeleteHandler");
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_11__["patternDelete"])(props.choice));
    props.setChoice(0);
  }; // パターン名称編集用処理。選択されているパターンIDと引数で取得した新しい名称をReduxActionへ連携する。


  const patternEditHandler = patternName => {
    console.log("Patterntest patternEditHandler");
    const editPatternId = props.choice;
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_11__["patternNameEdit"])({
      editPatternId,
      patternName
    }));
  };

  return __jsx("div", {
    className: classes.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.formControl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "demo-simple-select-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, "Pattern"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: props.choice,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, userTaskInfo.pattern.map((pattern, index) => {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: index + "_" + pattern.patternName,
      value: pattern.patternId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 32
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 108
      }
    }, pattern.patternName));
  }))), __jsx("div", {
    className: classes.icons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
    edge: "end",
    size: "small",
    "aria-label": "comments",
    onClick: handleClick(1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "primary",
    className: classes.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  })), __jsx(_PatternAddMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    openMenu: openMenu,
    setOpenMune: setOpenMune,
    anchorEl: anchorEl,
    Handler: patternAddHandler,
    index: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
    edge: "end",
    size: "small",
    "aria-label": "comments",
    onClick: handleClick(2),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "secondary",
    className: classes.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  })), __jsx(_PatternDeleteMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
    openMenu: openMenu,
    setOpenMune: setOpenMune,
    anchorEl: anchorEl,
    Handler: patternDeleteHandler,
    index: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
    edge: "end",
    size: "small",
    "aria-label": "comments",
    onClick: handleClick(3),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  })), __jsx(_PatternEditMenu__WEBPACK_IMPORTED_MODULE_14__["default"], {
    openMenu: openMenu,
    setOpenMune: setOpenMune,
    anchorEl: anchorEl,
    Handler: patternEditHandler,
    index: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./src/components/view/TaskList.tsx":
/*!******************************************!*\
  !*** ./src/components/view/TaskList.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Comment */ "@material-ui/icons/Comment");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/RemoveCircle */ "@material-ui/icons/RemoveCircle");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TaskModal */ "./src/components/view/TaskModal.tsx");
/* harmony import */ var _taskPlus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./taskPlus */ "./src/components/view/taskPlus.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Menu */ "./src/components/view/Menu.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\TaskList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  roots: {
    width: "100%",
    maxWidth: 720,
    margin: "auto",
    backgroundColor: theme.palette.background.paper
  },
  icon: {
    display: "flex",
    margin: "10px auto 5px auto"
  },
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper
  }
}));
function CheckboxList() {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useDispatch"])();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(9999);
  const [openMenu, setOpenMune] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(9999);
  const {
    userTaskInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(state => state.tasks);
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleClick = value => event => {
    setAnchorEl(event.currentTarget);
    setOpenMune(value);
    console.log("openMenu:" + openMenu);
  };

  const handleToggle = value => () => {
    setOpen(value);
    console.log("open:" + open);
  };

  const deleteTaskHandler = index => () => {
    console.log("check deleteTaskHandler"); // dispatch(taskDelete(index));
  };

  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, userTaskInfo.tasks.map((task, index) => {
    const labelId = `checkbox-list-label-${task.detail["testDetail1"]}`;
    return (// <Box key={labelId + "_" + index}>
      __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
        key: task.detail["title"] + ":" + index,
        role: undefined,
        dense: true,
        button: true,
        onClick: handleToggle(index),
        divider: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }
      }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: labelId,
        primary: __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 42
          }
        }, task.detail["タスク名"]) // disableTypography={false}
        ,
        primaryTypographyProps: {
          component: 'span'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 29
        }
      }, __jsx(_TaskModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        open: open,
        setOpen: setOpen,
        task: task,
        index: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 33
        }
      }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
        edge: "end",
        "aria-label": "comments",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 33
        }
      }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 37
        }
      })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
        edge: "end",
        "aria-label": "comments",
        onClick: handleClick(index),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 33
        }
      }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: "secondary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 37
        }
      })), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
        openMenu: openMenu,
        setOpenMune: setOpenMune,
        anchorEl: anchorEl,
        deleteTaskHandler: deleteTaskHandler,
        index: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 33
        }
      }))) // <Divider />
      // </Box>

    );
  }), __jsx(_taskPlus__WEBPACK_IMPORTED_MODULE_10__["default"], {
    num: userTaskInfo.tasks.length + 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./src/components/view/TaskModal.tsx":
/*!*******************************************!*\
  !*** ./src/components/view/TaskModal.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Modal */ "@material-ui/core/Modal");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "@material-ui/core/Backdrop");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Fade */ "@material-ui/core/Fade");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _InputNormal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputNormal */ "./src/components/view/InputNormal.tsx");
/* harmony import */ var _AppVar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppVar */ "./src/components/view/AppVar.tsx");
/* harmony import */ var _PatternSwitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PatternSwitch */ "./src/components/view/PatternSwitch.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_tasksModule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/tasksModule */ "./src/modules/tasksModule.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\TaskModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
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
}));
const contentsList = [{
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
  const classes = useStyles();
  const {
    userTaskInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.tasks);
  const checkNew = userTaskInfo.tasks.length < parseInt(props.index);
  let stateChecked = [];

  if (!checkNew) {
    stateChecked = props.task.patternInfo.map(content => {
      return content.patternID;
    });
  }

  const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(stateChecked);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])(); // 配列を作って項目一覧を作るなら、その配列を使って以下の変数の初期設定もやりたいところ
  // 最終的には項目一覧もReduxで管理したい。それをタスク一覧の右上に表示した設定ボタンから開くモーダルでONOFFを設定することで、タスク詳細画面で使う項目を選べる。新規登録時もONになっている項目が表示される
  // タスク詳細画面でプラスボタンを押したら項目を増やせる。それも項目一覧に保管される。
  // const defaultTask: newTasksType = { ["追加"]: "追加" };

  const [contents, setContents] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(contentsList);

  const handleClose = () => {
    props.setOpen(9999);
  };

  const handleRegister = () => {
    let details;
    contents.map((content, index) => {
      details = _objectSpread(_objectSpread({}, details), {}, {
        [content.label]: content.value
      });
    });
    let patternInfo;
    patternInfo = checked.map(content => {
      return {
        patternID: content,
        order: 1
      };
    });
    let newTasks = {
      detail: details,
      patternInfo: patternInfo
    };
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_9__["taskRegister"])(newTasks));
    props.setOpen(9999);
  }; // ここは配列で管理してmapで表示したいところ
  // task型の変数を用意して、それに値を格納する
  // 新規だったら登録、すでにある項目であれば更新する。


  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: classes.modal,
    open: props.index == props.open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3___default.a,
    BackdropProps: {
      timeout: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    in: props.index == props.open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, __jsx(_AppVar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleRegister: handleRegister,
    checkNew: checkNew,
    index: props.index,
    contents: contents,
    setContents: setContents,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 25
    }
  }), __jsx("h2", {
    id: "transition-modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }, "\u30BF\u30B9\u30AF\u8A73\u7D30\u753B\u9762", props.index + 1), __jsx("p", {
    id: "transition-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }, "react-transition-group animates me."), __jsx(_PatternSwitch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    checked: checked,
    setChecked: setChecked,
    index: props.index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 25
    }
  }), contents.map((content, index) => {
    return __jsx("div", {
      key: content.label + "_" + index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 33
      }
    }, __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_5__["default"] // label="if-thenプランニング"
    , {
      label: content.label,
      required: false,
      index: props.index,
      contentIndex: index,
      contents: contents,
      setContents: setContents,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 37
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 37
      }
    }));
  })))));
}

/***/ }),

/***/ "./src/components/view/taskPlus.tsx":
/*!******************************************!*\
  !*** ./src/components/view/taskPlus.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskPlusIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "@material-ui/icons/AddCircle");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskModal */ "./src/components/view/TaskModal.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\taskPlus.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  icon: {
    display: "flex",
    margin: "10px auto 5px auto"
  }
}));
function TaskPlusIcon(props) {
  const classes = useStyles();
  const [newOpen, setNewOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(9999);

  const taskAddHandler = () => {
    setNewOpen(props.num);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: "primary",
    className: classes.icon,
    onClick: taskAddHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx(_TaskModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: newOpen,
    setOpen: setNewOpen,
    index: props.num,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./src/modules/tasksModule.tsx":
/*!*************************************!*\
  !*** ./src/modules/tasksModule.tsx ***!
  \*************************************/
/*! exports provided: init, Register, allDelete, taskCheckComplete, calendarPatternRegister, taskDetailRegister, taskRegister, taskPatternUpdate, taskDelete, taskRemovePattern, patternRegister, patternDelete, patternNameEdit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDelete", function() { return allDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskCheckComplete", function() { return taskCheckComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarPatternRegister", function() { return calendarPatternRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskDetailRegister", function() { return taskDetailRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskRegister", function() { return taskRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskPatternUpdate", function() { return taskPatternUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskDelete", function() { return taskDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskRemovePattern", function() { return taskRemovePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternRegister", function() { return patternRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternDelete", function() { return patternDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternNameEdit", function() { return patternNameEdit; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  userTaskInfo: {
    calendar: {
      [new Date("Thu, 22 Oct 2020 02:00:00").getFullYear()]: {
        [new Date("Thu, 22 Oct 2020 02:00:00").getMonth() + 1]: {
          [new Date("Thu, 22 Oct 2020 02:00:00").getDate()]: {
            PatternId: 1,
            tasks: [{
              order: 1,
              detail: {
                ["タスク名"]: "タスク名 22 1",
                ["testDetail1"]: "testDetail1 22 1",
                ["testDetail2"]: "testDetail1 22 1"
              },
              flug: false
            }, {
              order: 2,
              detail: {
                ["タスク名"]: "タスク名 22 2",
                ["testDetail1"]: "testDetail1 22 2",
                ["testDetail2"]: "testDetail1 22 2"
              },
              flug: false
            }]
          },
          [new Date("Thu, 23 Oct 2020 02:00:00").getDate()]: {
            PatternId: 1,
            tasks: [{
              order: 1,
              detail: {
                ["タスク名"]: "タスク名 23 1",
                ["testDetail1"]: "testDetail1 23 1",
                ["testDetail2"]: "testDetail1 23 1"
              },
              flug: false
            }, {
              order: 2,
              detail: {
                ["タスク名"]: "タスク名 23 2",
                ["testDetail1"]: "testDetail1 23 2",
                ["testDetail2"]: "testDetail1 23 2"
              },
              flug: false
            }]
          }
        }
      }
    },
    pattern: [{
      patternId: 1,
      patternName: "testPattern1"
    }, {
      patternId: 2,
      patternName: "testPattern2"
    }],
    tasks: [{
      detail: {
        ["タスク名"]: "タスク名 22 1",
        ["defalut"]: "defalut",
        ["testDetail1"]: "testDetail1 22 1",
        ["testDetail2"]: "testDetail1 22 1"
      },
      patternInfo: [{
        patternID: 1,
        order: 1
      }]
    }, {
      detail: {
        ["タスク名"]: "タスク名 22 2",
        ["defalut"]: "defalut",
        ["testDetail1"]: "testDetail1 22 2",
        ["testDetail2"]: "testDetail1 22 2"
      },
      patternInfo: [{
        patternID: 1,
        order: 2
      }]
    }, {
      detail: {
        ["タスク名"]: "タスク名 23 1",
        ["defalut"]: "defalut",
        ["testDetail1"]: "testDetail1 23 1",
        ["testDetail2"]: "testDetail1 23 1"
      },
      patternInfo: [{
        patternID: 2,
        order: 1
      }, {
        patternID: 1,
        order: 3
      }]
    }, {
      detail: {
        ["タスク名"]: "タスク名 23 2",
        ["defalut"]: "defalut",
        ["testDetail2"]: "testDetail1 23 2",
        ["testDetail1"]: "testDetail1 23 2"
      },
      patternInfo: [{
        patternID: 2,
        order: 2
      }]
    }]
  }
}; // const diff = (olds: any[], nexts: any[]) => ({
//     adds: nexts.filter((e) => !olds.includes(e)),
//     subs: olds.filter((e) => !nexts.includes(e)),
// });
// パターン更新時に未来に設定されているパターンの内容を更新する。
// 更新対象はstate.calendar.tasks
// 年月日が未来であり、かつ、パターンIDが同じものを対象に新しいパターンを登録する。

const futurePatternUpdate = (state, updatePatternId) => {
  console.log("====futurePatternUpdateここから====");
  console.log(Object.keys(state.userTaskInfo.calendar));
  const today = new Date();
  const nowYear = today.getFullYear();
  const nowMonth = today.getMonth() + 1;
  const nowDate = today.getDate();
  const choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
    return task.patternInfo.some(task => task.patternID == updatePatternId);
  }); // パターンIDに紐付くタスク一覧からカレンダーへの登録情報を抽出する。

  const updateTasks = choicePatternTasks.map(task => {
    // パターンが複数登録されているタスクへの対応として、選択されているパターンIDに該当する要素だけを抽出する。
    const taskPattern = task.patternInfo.filter(function (patternInfo) {
      return patternInfo.patternID == updatePatternId;
    }); // 配列のタスクと抽出したパターン情報を整形して返す。

    return {
      order: taskPattern[0].order,
      detail: task.detail,
      // detail2: task.detail2,
      flug: false
    };
  });

  const keyMonthList = keyYear => {
    return Object.keys(state.userTaskInfo.calendar[parseInt(keyYear)]);
  };

  const keyDateList = (keyYear, keyMonth) => {
    return Object.keys(state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)]);
  };

  const dateTaskUpdate = (keyYear, keyMonth, keyDate) => {
    if (state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].PatternId == updatePatternId) {
      state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].tasks = updateTasks;
      console.log("===dateTaskUpdate===");
      console.log(keyYear);
      console.log(keyMonth);
      console.log(keyDate);
      console.log(updateTasks);
    }
  };

  const diff = (olds, nexts) => ({
    adds: nexts.filter(e => !olds.includes(e)),
    subs: olds.filter(e => !nexts.includes(e))
  }); // 登録されている年の連想配列のキーを全て取得


  const keyYears = Object.keys(state.userTaskInfo.calendar);
  keyYears.map(keyYear => {
    if (parseInt(keyYear) == nowYear) {
      // もし今年だったら、の処理
      // 登録されている月の連想配列のキーを全て取得
      const keyMonths = keyMonthList(keyYear);
      keyMonths.map(keyMonth => {
        if (parseInt(keyMonth) == nowMonth) {
          // もし今月だったら
          // 登録されている日の連想配列のキーを全て取得
          const keyDates = keyDateList(keyYear, keyMonth);
          keyDates.map(keyDate => {
            if (parseInt(keyDate) > nowDate) {
              // もし明日以降だったら登録内容を更新する
              dateTaskUpdate(keyYear, keyMonth, keyDate);
            } else if (parseInt(keyDate) == nowDate) {
              // もし今日だったら、変更分だけ反映する。
              // 処理未作成
              if (state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].PatternId == updatePatternId) {
                const result = diff(state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].tasks, updateTasks);
                const updateArray = state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].tasks.filter(function (task) {
                  return result.subs.some(sub => sub != task);
                });
                result.adds.map(add => {
                  updateArray.push(add);
                });
                state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].tasks = updateArray;
              }
            }
          });
        } else if (parseInt(keyMonth) > nowMonth) {
          // もし来月以降だったら、すべて更新する。
          const keyDates = keyDateList(keyYear, keyMonth);
          keyDates.map(keyDate => {
            dateTaskUpdate(keyYear, keyMonth, keyDate);
          });
        }
      });
    } else if (parseInt(keyYear) > nowYear) {
      // もし来年以降だったら、の処理。全て更新する。
      const keyMonths = keyMonthList(keyYear);
      keyMonths.map(keyMonth => {
        const keyDates = keyDateList(keyYear, keyMonth);
        keyDates.map(keyDate => {
          dateTaskUpdate(keyYear, keyMonth, keyDate);
        });
      });
    }
  });
  console.log("====futurePatternUpdateここまで====");
};

const tasksModule = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "tasks",
  initialState,
  reducers: {
    init(state, action) {
      const data = action.payload;
      console.log("init data");
      console.log(data); // state = {...data};
      // console.log("init state.userTaskInfo 前");
      // console.log(state.userTaskInfo);

      state.userTaskInfo = data; // console.log("init state.userTaskInfo 後");
      // console.log(state.userTaskInfo);
    },

    Register(state, action) {
      const data = action.payload;
      state = _objectSpread(_objectSpread({}, state), data); // console.log('state');
      // console.log(state);
    },

    allDelete(state) {
      state = initialState;
      console.log("check allDelete");
    },

    // DayPlanにてタスクをクリックした際に完了フラグをtrueに変更する処理。引数にて年、月、日、タスクのインデックス番号を受け取っている。
    taskCheckComplete(state, action) {
      const index = state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks.findIndex(tasks => tasks.order == action.payload[3]);
      console.log(index);
      state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[index].flug = !state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[index].flug;
    },

    // 引数はstateと年、月、日、選択されているパターンIDの4つの数値が格納された配列
    calendarPatternRegister(state, action) {
      // stateから選択されているパターンIDが設定されているタスクを抽出する。
      const choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
        return task.patternInfo.some(task => task.patternID == action.payload[3]);
      }); // パターンIDに紐付くタスク一覧からカレンダーへの登録情報を抽出する。

      const TodayTasks = choicePatternTasks.map(task => {
        // パターンが複数登録されているタスクへの対応として、選択されているパターンIDに該当する要素だけを抽出する。
        const taskPattern = task.patternInfo.filter(function (patternInfo) {
          return patternInfo.patternID == action.payload[3];
        }); // 配列のタスクと抽出したパターン情報を整形して返す。

        return {
          order: taskPattern[0].order,
          detail: task.detail,
          // detail2: task.detail2,
          flug: false
        };
      }); // ここに年がなかった時の処理を加える

      if (action.payload[0] in state.userTaskInfo.calendar) {
        // stateのMonthの連想配列に新しい日付の連想配列を追加する。
        // 追加情報は引数の日とこれまでの処理で作成したカレンダー登録用情報
        state.userTaskInfo.calendar[action.payload[0]][action.payload[1]] = _objectSpread(_objectSpread({}, state.userTaskInfo.calendar[action.payload[0]][action.payload[1]]), {}, {
          [action.payload[2]]: {
            PatternId: action.payload[3],
            tasks: TodayTasks
          }
        });
      } else {
        // stateのMonthの連想配列に新しい日付の連想配列を追加する。
        // 追加情報は引数の日とこれまでの処理で作成したカレンダー登録用情報
        state.userTaskInfo.calendar[action.payload[0]] = _objectSpread(_objectSpread({}, state.userTaskInfo.calendar[action.payload[0]]), {}, {
          [action.payload[1]]: {
            [action.payload[2]]: {
              PatternId: action.payload[3],
              tasks: TodayTasks
            }
          }
        });
      } // action.payload[3];


      console.log(state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]]);
    },

    // タスクの詳細を設定する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
    taskDetailRegister(state, action) {
      state.userTaskInfo.tasks[parseInt(action.payload[2])].detail = _objectSpread(_objectSpread({}, state.userTaskInfo.tasks[parseInt(action.payload[2])].detail), {}, {
        [action.payload[1]]: action.payload[0]
      });
    },

    // タスクを追加する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
    taskRegister(state, action) {
      const registerTask = action.payload;
      registerTask.patternInfo.map(content => {
        const choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
          return task.patternInfo.some(task => task.patternID == content.patternID);
        });
        content.order = choicePatternTasks.length + 1;
      });
      console.log(registerTask);
      state.userTaskInfo.tasks.push(registerTask);
    },

    // タスクのパターン登録状況を更新する。
    taskPatternUpdate(state, action) {
      // ここでやることは？
      // まず引数にタスクの配列インデックス番号が必要
      // パターンIDの配列を受け取る。
      // 配列とstateを比較して、なければ登録。Orderは最大値+1。逆に削除されているものは除外。
      const statePatternIdList = state.userTaskInfo.tasks[action.payload.index].patternInfo.map(content => {
        return content.patternID;
      });
      console.log("statePatternIdList");
      console.log(statePatternIdList);

      const diff = (olds, nexts) => ({
        adds: nexts.filter(e => !olds.includes(e)),
        subs: olds.filter(e => !nexts.includes(e))
      });

      const result = diff(statePatternIdList, action.payload.newChecked);
      let updateArray;
      console.log(result); // stateから削除対象を除外した配列を抽出する。

      if (result.subs.length > 0) {
        updateArray = state.userTaskInfo.tasks[action.payload.index].patternInfo.filter(function (content) {
          // futurePatternUpdate(state,);
          return result.subs.some(sub => sub != content.patternID);
        });
      } else {
        updateArray = state.userTaskInfo.tasks[action.payload.index].patternInfo;
      }

      console.log("1:updateArray");
      console.log(updateArray); //

      result.adds.map(add => {
        let Max = 0; // 追加されたIDが設定されているタスクを抽出する。

        const choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
          return task.patternInfo.some(taskPatternInfo => taskPatternInfo.patternID == add);
        }); //

        choicePatternTasks.map(task => {
          // 抽出された各タスクのパターンIDを比較し、最大値を取得する。
          let content = task.patternInfo.find(info => info.patternID == add);
          Max < content.patternID ? Max = content.patternID : "";
        });
        const pushContent = {
          patternID: add,
          order: Max + 1
        };
        updateArray.push(pushContent);
        futurePatternUpdate(state, add);
      });
      console.log("2:updateArray");
      console.log(updateArray);
      state.userTaskInfo.tasks[action.payload.index].patternInfo = updateArray;
    },

    // タスクを削除する処理。引数には削除対象タスクのインデックス番号が格納されている。
    taskDelete(state, action) {
      // const deleteTask = state.userTaskInfo.tasks.splice(
      //     action.payload,
      //     1
      // );
      const deleteTask = state.userTaskInfo.tasks.filter(function (content, index) {
        return index != action.payload;
      });
      console.log(deleteTask);
      state.userTaskInfo.tasks = deleteTask;
    },

    // タスクをパターンから除外する処理。引数のオブジェクトにはパターンIDと削除対象タスクの名称が格納されている。
    taskRemovePattern(state, action) {
      const index = state.userTaskInfo.tasks.findIndex(content => {
        return content.detail["タスク名"] == action.payload.detailTitle;
      });
      const deletedTask = state.userTaskInfo.tasks[index].patternInfo.filter(function (content) {
        return content.patternID != action.payload.patternId;
      });
      state.userTaskInfo.tasks[index].patternInfo = deletedTask;
      console.log(deletedTask); // futurePatternUpdate(state);
    },

    // パターンを追加する処理。引数にはパターン名称が格納されている。
    patternRegister(state, action) {
      let MaxId = 0;
      state.userTaskInfo.pattern.map(patternContent => {
        patternContent.patternId > MaxId ? MaxId = patternContent.patternId : "";
      });
      const addPattern = {
        patternId: MaxId + 1,
        patternName: action.payload
      };
      state.userTaskInfo.pattern.push(addPattern);
    },

    // パターンを削除する処理。引数にはパターンIDが格納されている。
    patternDelete(state, action) {
      const updatePatternList = state.userTaskInfo.pattern.filter(patternContent => {
        // console.log(patternContent.patternId);
        // console.log(action.payload);
        return patternContent.patternId != action.payload;
      });
      console.log(updatePatternList);
      state.userTaskInfo.pattern = updatePatternList; // タスクとカレンダーに保管されているパターンを全て削除する必要がある
      // カレンダーは未来分だけ
      // state.userTaskInfo.tasksに保管されているパターン情報を削除する。

      let updateTaskList = state.userTaskInfo.tasks.map(task => {
        const updatePatternInfo = task.patternInfo.filter(taskPatternInfo => {
          return taskPatternInfo.patternID != action.payload;
        });
        const updateTask = {
          detail: task.detail,
          patternInfo: updatePatternInfo
        };
        return updateTask;
      });
      console.log("after:updateTaskList");
      console.log(updateTaskList);
      state.userTaskInfo.tasks = updateTaskList; // state.userTaskInfo.calendarの未来分に保管されているパターン情報を削除する。

      const today = new Date();
      const nowYear = today.getFullYear();
      const nowMonth = today.getMonth() + 1;
      const nowDate = today.getDate();
      const keyYears = Object.keys(state.userTaskInfo.calendar);

      const deleteCalendarDate = (year, month, date) => {
        if (state.userTaskInfo.calendar[parseInt(year)][parseInt(month)][parseInt(date)].PatternId == action.payload) {
          delete state.userTaskInfo.calendar[parseInt(year)][parseInt(month)][parseInt(date)];
        }
      };

      keyYears.map(year => {
        const keyMonth = Object.keys(state.userTaskInfo.calendar[parseInt(year)]);

        if (parseInt(year) > nowYear) {
          // 対象が来年以降である場合、削除する。deleteのほうがいい
          keyMonth.map(month => {
            const keyDate = Object.keys(state.userTaskInfo.calendar[parseInt(year)][parseInt(month)]);
            keyDate.map(date => {
              deleteCalendarDate(year, month, date);
            });
          });
        } else if (parseInt(year) == nowYear) {
          // 対象が今年である場合
          keyMonth.map(month => {
            const keyDate = Object.keys(state.userTaskInfo.calendar[parseInt(year)][parseInt(month)]);

            if (parseInt(month) > nowMonth) {
              // 来月以降の場合、削除する。deleteのほうがいい
              console.log(keyDate);
              keyDate.map(date => {
                deleteCalendarDate(year, month, date);
              });
            } else if (parseInt(month) == nowMonth) {
              // 今月の場合
              keyDate.map(date => {
                if (parseInt(date) > nowDate) {
                  // 明日以降の場合、削除する
                  deleteCalendarDate(year, month, date);
                }
              });
            }
          });
        }
      });
    },

    // パターン名称を編集する処理。引数にはパターンIDとパターン名称が格納されている。
    patternNameEdit(state, action) {
      // IDに合致する要素のインデックス番号を取得
      const editPatternIndex = state.userTaskInfo.pattern.findIndex(patternContent => patternContent.patternId == action.payload.editPatternId); // 取得したインデックス番号を目印に、引数の新しい名称で更新する。

      state.userTaskInfo.pattern[editPatternIndex].patternName = action.payload.patternName;
    }

  }
});
const {
  init,
  Register,
  allDelete,
  taskCheckComplete,
  calendarPatternRegister,
  taskDetailRegister,
  taskRegister,
  taskPatternUpdate,
  taskDelete,
  taskRemovePattern,
  patternRegister,
  patternDelete,
  patternNameEdit
} = tasksModule.actions;
/* harmony default export */ __webpack_exports__["default"] = (tasksModule);

/***/ }),

/***/ "./src/modules/userModule.tsx":
/*!************************************!*\
  !*** ./src/modules/userModule.tsx ***!
  \************************************/
/*! exports provided: login, logout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  userId: ''
};
const userModule = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      console.log('login');
      console.log(state.userId);
      console.log(action.payload);
      state.userId = action.payload;
      console.log(state.userId);
    },

    logout(state) {
      console.log('logout');
      state.userId = '';
    }

  }
});
const {
  login,
  logout
} = userModule.actions;
/* harmony default export */ __webpack_exports__["default"] = (userModule);

/***/ }),

/***/ "./src/pages/tasks.tsx":
/*!*****************************!*\
  !*** ./src/pages/tasks.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_view_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/view/ResponsiveDrawer */ "./src/components/view/ResponsiveDrawer.tsx");
/* harmony import */ var _components_view_FloatingActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/view//FloatingActionButton */ "./src/components/view/FloatingActionButton.tsx");
/* harmony import */ var _components_test_firebaseTest_getData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/test/firebaseTest/getData */ "./src/components/test/firebaseTest/getData.tsx");
/* harmony import */ var _components_test_firebaseTest_FormComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/test/firebaseTest/FormComponent */ "./src/components/test/firebaseTest/FormComponent.tsx");
/* harmony import */ var _components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/test/firebaseTest/FirebaseAuthComponent */ "./src/components/test/firebaseTest/FirebaseAuthComponent.tsx");
/* harmony import */ var _components_shared_withAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shared/withAuth */ "./src/components/shared/withAuth.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\pages\\tasks.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  button: {
    backgroundColor: "green"
  },
  taskList: {
    display: "flex",
    paddingTop: "90px",
    paddingLeft: "0px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "240px"
    }
  }
}));

const Tasks = () => {
  const classes = useStyles();
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_components_view_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.taskList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_components_view_FloatingActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.taskList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(_components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_getData__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_FormComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_shared_withAuth__WEBPACK_IMPORTED_MODULE_8__["default"])(Tasks));

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Backdrop":
/*!*********************************************!*\
  !*** external "@material-ui/core/Backdrop" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

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

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

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

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Modal":
/*!******************************************!*\
  !*** external "@material-ui/core/Modal" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Modal");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

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

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AddCircle":
/*!***********************************************!*\
  !*** external "@material-ui/icons/AddCircle" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircle");

/***/ }),

/***/ "@material-ui/icons/Comment":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Comment" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Comment");

/***/ }),

/***/ "@material-ui/icons/DateRange":
/*!***********************************************!*\
  !*** external "@material-ui/icons/DateRange" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DateRange");

/***/ }),

/***/ "@material-ui/icons/DirectionsRun":
/*!***************************************************!*\
  !*** external "@material-ui/icons/DirectionsRun" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DirectionsRun");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "@material-ui/icons/List":
/*!******************************************!*\
  !*** external "@material-ui/icons/List" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/List");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/RemoveCircle":
/*!**************************************************!*\
  !*** external "@material-ui/icons/RemoveCircle" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveCircle");

/***/ }),

/***/ "@material-ui/icons/Send":
/*!******************************************!*\
  !*** external "@material-ui/icons/Send" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Send");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvd2l0aEF1dGgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L0RCRmV0Y2gudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L0ZpcmViYXNlQXV0aENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRm9ybUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvZmlyZWJhc2VUZXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXN0L2ZpcmViYXNlVGVzdC9nZXREYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L0FwcFZhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9GbG9hdGluZ0FjdGlvbkJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9JbnB1dE5vcm1hbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9NZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L1BhdHRlcm5BZGRNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L1BhdHRlcm5EZWxldGVNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L1BhdHRlcm5FZGl0TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9QYXR0ZXJuTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9QYXR0ZXJuU3dpdGNoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L1Jlc3BvbnNpdmVEcmF3ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L1Rhc2tMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L1Rhc2tNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy90YXNrUGx1cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VzZXJNb2R1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90YXNrcy50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NvbW1lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGF0ZVJhbmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RpcmVjdGlvbnNSdW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlQ2lyY2xlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlbmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2RhdGFiYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInJlc29sdmVkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJ2YWx1ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwid2l0aEF1dGgiLCJzdGF0dXMiLCJjb21wb25lbnREaWRNb3VudCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImF1dGhVc2VyIiwic2V0U3RhdGUiLCJyZW5kZXJDb250ZW50IiwibG9nIiwicmVuZGVyIiwidXNlUmVkdXhGZXRjaCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VEYXRhYmFzZSIsInVzZXJJZCIsInVzZVNlbGVjdG9yIiwidXNlciIsInVzZU1lbW8iLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwidXNlRmV0Y2hEYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic25hcHNob3QiLCJ2YWwiLCJ1c2VGZXRjaEFsbERhdGEiLCJ1aWQiLCJjdXJyZW50VXNlciIsInVzZXJUYXNrSW5mbyIsInRhc2tzIiwidXNlU2V0RG9jdW1lbnQiLCJ1cGRhdGVEb2N1bWVudCIsInVzZUNhbGxiYWNrIiwidXNlUmVnaXN0ZXJEYXRhIiwic2V0RG9jdW1lbnQiLCJyZWdpc3RlcmVkRGF0YSIsInJlZ2lzdGVyRGF0YSIsInVzZVVwZGF0ZURvY3VtZW50IiwidXBkYXRlIiwidXNlVXBkYXRlRGF0YSIsInVwZGF0ZURhdGEiLCJ1c2VSZW1vdmVEb2N1bWVudCIsImRlbGV0ZURvY3VtZW50IiwicmVtb3ZlIiwidXNlRGVsdGVEYXRhIiwicmVtb3ZlRG9jdW1lbnQiLCJkZWxldGVEYXRhIiwiRmlyZWJhc2VBdXRoQ29tcG9uZW50IiwibG9nZ2VkaW4iLCJ1c2VGaXJlYmFzZUxvZ2luIiwic2lnbkluV2l0aFBvcHVwIiwidXNlU2lnbk91dCIsImdvb2dsZUF1dGhQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsImxvZ291dCIsImFsbERlbGV0ZSIsInNpZ25PdXQiLCJzZXRMb2dnZWRpbiIsInVzZXJJZENoZWNrIiwiRm9ybUNvbXBvbmVudCIsImtleURhdGEiLCJzZXRLZXlEYXRhIiwidmFsdWVEYXRhIiwic2V0VmFsdWVEYXRhIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsIkxpc3RDb21wb25lbnQiLCJVVCIsInNldFVUIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93IiwicG9zaXRpb24iLCJ3aWR0aCIsInpJbmRleCIsInRpdGxlIiwiQnV0dG9uQXBwQmFyIiwiY2xhc3NlcyIsIm9uQ2hhbmdlSGFuZGxlciIsInRhc2tEZXRhaWxSZWdpc3RlciIsImluZGV4IiwiYnV0dG9uIiwiY2hlY2tOZXciLCJoYW5kbGVSZWdpc3RlciIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJUYWJQYW5lbCIsIm90aGVyIiwiYTExeVByb3BzIiwiaWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiYWxpZ25JdGVtcyIsImJhclNpemUiLCJkaXNwbGF5IiwibWFyZ2luIiwiU2Nyb2xsYWJsZVRhYnNCdXR0b25BdXRvIiwic2V0VmFsdWUiLCJjaG9pY2UiLCJzZXRDaG9pY2UiLCJOdW1iZXIiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZSIsInNwYWNpbmciLCJGb3JtUHJvcHNUZXh0RmllbGRzIiwibGFiZWwiLCJuZXdUYXNrT25DaGFuZ2VIYW5kbGVyIiwiY29udGVudHNDb3B5Iiwic2xpY2UiLCJjb250ZW50SW5kZXgiLCJyZXF1aXJlZCIsImRldGFpbCIsIlNpbXBsZU1lbnUiLCJoYW5kbGVDbGljayIsInRhc2tEZWxldGUiLCJoYW5kbGVDbG9zZSIsInNldE9wZW5NdW5lIiwiYW5jaG9yRWwiLCJvcGVuTWVudSIsImZvcm1Db250cm9sIiwibWluV2lkdGgiLCJzZWxlY3RFbXB0eSIsIm1hcmdpblRvcCIsInBhdHRlcm4iLCJqdXN0aWZ5Q29udGVudCIsImljb24iLCJQYXR0ZXJuTWVudSIsInBhdHRlcm5OYW1lIiwic2V0UGF0dGVybk5hbWUiLCJIYW5kbGVyIiwicGF0dGVybkVkaXRNZW51Iiwicm9vdHMiLCJtYXhXaWR0aCIsIlBhdHRlcm5MaXN0IiwicGF0dGVyblJlbW92ZUhhbmRsZXIiLCJkZXRhaWxUaXRsZSIsInBhdHRlcm5JZCIsInRhc2tSZW1vdmVQYXR0ZXJuIiwiY2hvaWNlUGF0dGVyblRhc2tzIiwiZmlsdGVyIiwidGFzayIsInBhdHRlcm5JbmZvIiwic29tZSIsInBhdHRlcm5JRCIsIm1hcCIsInRhc2tQYXR0ZXJuIiwibGFiZWxJZCIsIm9yZGVyIiwidW5kZWZpbmVkIiwiUGF0dGVyblN3aXRjaExpc3QiLCJoYW5kbGVUb2dnbGUiLCJjdXJyZW50SW5kZXgiLCJjaGVja2VkIiwiaW5kZXhPZiIsIm5ld0NoZWNrZWQiLCJzcGxpY2UiLCJzZXRDaGVja2VkIiwidGFza1BhdHRlcm5VcGRhdGUiLCJjb250ZW50IiwiZHJhd2VyV2lkdGgiLCJyb290ZCIsImRyYXdlciIsImJyZWFrcG9pbnRzIiwidXAiLCJmbGV4U2hyaW5rIiwiYXBwQmFyIiwibWFyZ2luTGVmdCIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInRvb2xiYXIiLCJtaXhpbnMiLCJkcmF3ZXJQYXBlciIsInBhZGRpbmciLCJSZXNwb25zaXZlRHJhd2VyIiwidXNlVGhlbWUiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsImhhbmRsZURyYXdlclRvZ2dsZSIsImNvbnRhaW5lciIsImJvZHkiLCJkaXJlY3Rpb24iLCJrZWVwTW91bnRlZCIsImhvbWUiLCJpY29ucyIsIlNpbXBsZVNlbGVjdCIsInNldFBhdHRlcm4iLCJzZXRBbmNob3JFbCIsImN1cnJlbnRUYXJnZXQiLCJwYXR0ZXJuQWRkSGFuZGxlciIsInBhdHRlcm5SZWdpc3RlciIsInBhdHRlcm5EZWxldGVIYW5kbGVyIiwicGF0dGVybkRlbGV0ZSIsInBhdHRlcm5FZGl0SGFuZGxlciIsImVkaXRQYXR0ZXJuSWQiLCJwYXR0ZXJuTmFtZUVkaXQiLCJib3JkZXIiLCJDaGVja2JveExpc3QiLCJvcGVuIiwic2V0T3BlbiIsImRlbGV0ZVRhc2tIYW5kbGVyIiwiY29tcG9uZW50IiwibW9kYWwiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiY29udGVudHNMaXN0IiwiVGFza01vZGFsIiwic3RhdGVDaGVja2VkIiwiZGV0YWlscyIsIm5ld1Rhc2tzIiwidGFza1JlZ2lzdGVyIiwiQmFja2Ryb3AiLCJ0aW1lb3V0IiwiVGFza1BsdXNJY29uIiwibmV3T3BlbiIsInNldE5ld09wZW4iLCJ0YXNrQWRkSGFuZGxlciIsIm51bSIsImluaXRpYWxTdGF0ZSIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwiZmx1ZyIsImZ1dHVyZVBhdHRlcm5VcGRhdGUiLCJ1cGRhdGVQYXR0ZXJuSWQiLCJ0b2RheSIsIm5vd1llYXIiLCJub3dNb250aCIsIm5vd0RhdGUiLCJ1cGRhdGVUYXNrcyIsImtleU1vbnRoTGlzdCIsImtleVllYXIiLCJrZXlEYXRlTGlzdCIsImtleU1vbnRoIiwiZGF0ZVRhc2tVcGRhdGUiLCJrZXlEYXRlIiwiZGlmZiIsIm9sZHMiLCJuZXh0cyIsImFkZHMiLCJpbmNsdWRlcyIsInN1YnMiLCJrZXlZZWFycyIsImtleU1vbnRocyIsImtleURhdGVzIiwidXBkYXRlQXJyYXkiLCJhZGQiLCJ0YXNrc01vZHVsZSIsImNyZWF0ZVNsaWNlIiwicmVkdWNlcnMiLCJpbml0IiwiYWN0aW9uIiwicGF5bG9hZCIsIlJlZ2lzdGVyIiwidGFza0NoZWNrQ29tcGxldGUiLCJmaW5kSW5kZXgiLCJjYWxlbmRhclBhdHRlcm5SZWdpc3RlciIsIlRvZGF5VGFza3MiLCJyZWdpc3RlclRhc2siLCJzdGF0ZVBhdHRlcm5JZExpc3QiLCJNYXgiLCJ0YXNrUGF0dGVybkluZm8iLCJmaW5kIiwiaW5mbyIsInB1c2hDb250ZW50IiwiZGVsZXRlVGFzayIsImRlbGV0ZWRUYXNrIiwiTWF4SWQiLCJwYXR0ZXJuQ29udGVudCIsImFkZFBhdHRlcm4iLCJ1cGRhdGVQYXR0ZXJuTGlzdCIsInVwZGF0ZVRhc2tMaXN0IiwidXBkYXRlUGF0dGVybkluZm8iLCJ1cGRhdGVUYXNrIiwiZGVsZXRlQ2FsZW5kYXJEYXRlIiwieWVhciIsIm1vbnRoIiwiZGF0ZSIsImVkaXRQYXR0ZXJuSW5kZXgiLCJhY3Rpb25zIiwidXNlck1vZHVsZSIsImxvZ2luIiwidGFza0xpc3QiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJUYXNrcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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TEosRUFjSSxNQUFDLGtFQUFEO0FBQVcsYUFBUyxFQUFFbk4sT0FBTyxDQUFDbU4sUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQWRKLENBREo7QUFzQkgsQ0F6QkQ7O0FBMkJlN1MsMElBQVEsQ0FBQ2dULEtBQUQsQ0FBdkIsRTs7Ozs7Ozs7Ozs7QUN6REEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvdGFza3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy90YXNrcy50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFzLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gZGVub3JtYWxpemVQYWdlUGF0aChkZWxCYXNlUGF0aChwYXRobmFtZSEpKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhZ2UpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24oXG4gICAgICBtYXRjaGVyUmVnZXgsXG4gICAgICBrZXlzLFxuICAgICAgbWF0Y2hlck9wdGlvbnNcbiAgICApXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpXG4gICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICApXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZW5jb2RlVVJJKFxuICAgICAgZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3Rlc3QvZmlyZWJhc2VUZXN0L2ZpcmViYXNlVGVzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEF1dGgoQ29tcG9uZW50OiBhbnkpIHtcclxuICAgIC8vIGNvbnN0IFtzdGF0dXMsc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdMT0FESU5HJyk7XHJcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCB7c3RhdHVzOiBzdHJpbmd9PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiTE9BRElOR1wiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKChhdXRoVXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1dGhVc2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJTSUdORURfSU5cIixcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHNldFN0YXR1cygnU0lHTkVEX0lOJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlckNvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyAgPSB0aGlzLnN0YXRlLnN0YXR1cztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzKTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBcIkxPQURJTkdcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIDxoMT5Mb2FkaW5nIC4uLi4uLjwvaDE+O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSBcIlNJR05FRF9JTlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPD57dGhpcy5yZW5kZXJDb250ZW50KCl9PC8+O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGg7XHJcbiIsIi8vIOODh+ODvOOCv+ODmeODvOOCueOBuOOBruaOpee2mlxyXG5cclxuLy8gaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuLy8g6KqN6Ki85ZGo44KK44KERELlkajjgorjgaflv4XopoHjgarjgZ/jgoFpbXBvcnTjgZfjgabjgYrjgY9cclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSBcIi4vZmlyZWJhc2VUZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgY2FsZW5kYXIsXHJcbiAgICBwYXR0ZXJuLFxyXG4gICAgdGFza3MsXHJcbiAgICB1c2VyVGFzayxcclxuICAgIHVzZXJUYXNrSW5mbyxcclxufSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy91c2VyVGFza3NUeXBlXCI7XHJcbmltcG9ydCB7IHVzZVRhYkNvbnRleHQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3VzZXJNb2R1bGVcIjtcclxuXHJcbmNvbnN0IHVzZVJlZHV4RmV0Y2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2g7XHJcbn07XHJcblxyXG4vLyDjgqvjgrnjgr/jg6Djg5Xjg4Pjgq/jgavjgZfjgabjgYrjgY9cclxuY29uc3QgdXNlRGF0YWJhc2UgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCB1c2VEYXRhYmFzZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICAvLyBjb25zdCBbY2hlY2ssIHNldENoZWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIGNvbnN0IFt1c2VySWRDaGVjaywgc2V0dXNlcklkQ2hlY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgLy8gaWYgKHVzZXJJZCAhPSAnJyAmJiB1c2VySWQgIT0gdXNlcklkQ2hlY2spe1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd1c2VySWQnKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh1c2VySWQpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdjaGVjaycpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGNoZWNrKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygndXNlcklkQ2hlY2snKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh1c2VySWRDaGVjayk7XHJcbiAgICAvLyAgICAgc2V0dXNlcklkQ2hlY2sodXNlcklkKTtcclxuICAgIC8vICAgICBzZXRDaGVjayghY2hlY2spO1xyXG4gICAgLy8gfVxyXG4gICAgICAgIC8vIOWQjOOBmOODkeOCueOBp+OBr+avjuWbnuWQjOOBmOe1kOaenOOBjOW+l+OCieOCjOOCi+OBruOBp21lbW/ljJbjgZfjgabjgYrjgY9cclxuICAgICAgICAvLyByZXR1cm4gdXNlTWVtbygoKSA9PiBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcIi9zYW1wbGVcIiksIFtdKTtcclxuICAgICAgICAvLyBjb25zdCBhdXRoVXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcjtcclxuICAgICAgICAvLyBpZiAoISF1aWQpIHtcclxuICAgICAgICAvLyAgICAgaWYgKHVzZXJJZCA9PSBcIlwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBkaXNwYXRjaChsb2dpbih1aWQudWlkKSk7XHJcbiAgICAgICAgLy8gICAgICAgICBzZXRDaGVjayhcImNoZWNrXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVja1wiKTtcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJEQkYgMSB1c2VySWRcIik7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJZCk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB1c2VNZW1vKCgpID0+IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwiL3VzZXJzL1wiICsgdXNlcklkKSwgW1xyXG4gICAgICAgIC8vICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIC8vICAgICBdKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vIOOBk+OBk+OBjOWOn+WboOOAguOBk+OBk+OBp3VzZXJJZOWPluW+l+W+jOOBq3JlZuOCkuabtOaWsOOBp+OBjeOCjOOBsOOBhOOBhFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiREJGIDIgdXNlcklkXCIpO1xyXG4gICAgY29uc29sZS5sb2codXNlcklkKTtcclxuICAgIHJldHVybiB1c2VNZW1vKCgpID0+IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwiL3VzZXJzL1wiICsgdXNlcklkKSwgW1xyXG4gICAgICAgIHVzZXJJZCxcclxuICAgIF0pO1xyXG4gICAgLy8gcmV0dXJuIHVzZU1lbW8oKCkgPT4gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCIvdXNlcnMvXCIgKyBhdXRoVXNlci51aWQpLCBbXSk7XHJcbiAgICAvLyB9XHJcbn07XHJcblxyXG4vLyAgIOODh+ODvOOCv+OCkuWPluW+l+OBmeOCi1xyXG4vLyBob29rc+OCkuS9v+OBhOOBn+OBhOOBruOBp+OCq+OCueOCv+ODoGhvb2tz44Gr44GX44Gm44GK44GPXHJcbmNvbnN0IHVzZUZldGNoRGF0YSA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8dXNlclRhc2tJbmZvPigpO1xyXG4gICAgY29uc3QgeyB1c2VySWQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoISF1c2VySWQpe1xyXG4gICAgICAgICAgICAvLyDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLov73liqDjgZnjgovjgavjga9vbuOCkuS9v+OBhlxyXG4gICAgICAgICAgICByZWYub24oXCJ2YWx1ZVwiLCAoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g44OR44K544Gr5a++44GZ44KL5YWo44OH44O844K/44KS5ZCr44KAc25hcHNob3TjgYzmuKHjgZXjgozjgotcclxuICAgICAgICAgICAgICAgIC8vIOOBquOBhOWgtOWQiOOBr251bGzjgYzov5Tjgovjga7jgaflrZjlnKjjgpLjg4Hjgqfjg4Pjgq/jgZfjgabjgYrjgY9cclxuICAgICAgICAgICAgICAgIGlmIChzbmFwc2hvdD8udmFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRCRiBkYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQkZldGNoIGRhdGE9PT09PT09PT09XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZi5vZmYoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gcmVm44Gu5aSJ5pu044Gr5b+c44GY44Gm5YaN5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICAgIC8vICAg5oyH5a6a44GX44Gf44OR44K544Gu44OH44O844K/44Gr5a++44GZ44KL5pu05paw44KS44GZ44G544Gm5qSc55+l44GZ44KL44Gr44GvdmFsdWXjgpLmjIflrprjgZnjgozjgbDoia/jgYTjgIJcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVmXSk7XHJcbiAgICAvLyDjg4fjg7zjgr/jgpLov5TljbTjgZnjgotcclxuICAgIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbi8vIOWun+mam+OBq+WRvOOBs+WHuuOBmemam+OBr+OBk+OBoeOCieOCkuS9v+OBhlxyXG5jb25zdCB1c2VGZXRjaEFsbERhdGEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1aWQgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuICAgIC8vIHJlZuOCkuWPluW+l+OBl+OBplxyXG4gICAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICAgIGNvbnNvbGUubG9nKCdyZWYnKTtcclxuICAgIGNvbnNvbGUubG9nKHJlZik7XHJcbiAgICAvLyByZWbmuKHjgZfjgabjg4fjg7zjgr/jgpLlj5blvpfjgZnjgotcclxuICAgIHJldHVybiB1c2VGZXRjaERhdGEocmVmKTtcclxufTtcclxuXHJcbi8vIOeZu+mMsuWHpueQhlxyXG4vLyDjgZPjga7nmbvpjLLjga9zZXTjgavmuKHjgZfjgZ/lgKTjgafjga7nmbvpjLLjgajjgarjgovjgIJcclxuLy8g44Gk44G+44KK44CB5pei5a2Y44Gu44OH44O844K/44KC5ZCr44KB44Gm5rih44GX44Gm44GC44GS44Gq44GE44Go55m76Yyy5riI44G/44Gu44OH44O844K/44GM5raI44GI44KL44CCXHJcbmNvbnN0IHVzZVNldERvY3VtZW50ID0gKHJlZjogZmlyZWJhc2UuZGF0YWJhc2UuUmVmZXJlbmNlKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVEb2N1bWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChkb2N1bWVudDogdW5rbm93bikgPT4ge1xyXG4gICAgICAgICAgICAvLyByZWbjgavjgaTjgYTjgabjga/liY3lm57jga7oqJjkuovlj4LnhadcclxuICAgICAgICAgICAgLy8gc2V044Gr55m76Yyy44GX44Gf44GE44OH44O844K/44KS5rih44GX44Gm44GC44GS44KM44Gw55m76Yyy44Gn44GN44KLXHJcbiAgICAgICAgICAgIHJlZi5zZXQoZG9jdW1lbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3JlZl1cclxuICAgICk7XHJcbiAgICByZXR1cm4gdXBkYXRlRG9jdW1lbnQ7XHJcbn07XHJcblxyXG5jb25zdCB1c2VSZWdpc3RlckRhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyDliY3lm57kvZzjgaPjgZ91c2VEYXRhYmFzZSgp44KS5L2/44GEcmVm5Y+W5b6XXHJcbiAgICBjb25zdCByZWYgPSB1c2VEYXRhYmFzZSgpO1xyXG4gICAgY29uc3Qgc2V0RG9jdW1lbnQgPSB1c2VTZXREb2N1bWVudChyZWYpO1xyXG4gICAgLy8g55m76Yyy5riI44G/44Gu44OH44O844K/44KS5YWo6YOo5Y+W5b6X44GZ44KLXHJcbiAgICBjb25zdCB7IGRhdGE6IHJlZ2lzdGVyZWREYXRhIH0gPSB1c2VGZXRjaEFsbERhdGEoKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gICAgLy8g44OH44O844K/44KS55m76Yyy44GZ44KL6Zai5pWw44KS6L+U5Y2044GZ44KLXHJcblxyXG4gICAgLy8g5Y+v6IO944Gn44GC44KM44Gw44GT44GT44Gu5Yem55CG44Gv44Gd44Gu44G+44G+44Gr44GX44Gm44CB5byV5pWw44Gnc3RldGXjgpLmm7TmlrDjgZnjgovlh6bnkIbjgpLlhYjjgavooYzjgYTjgZ/jgYRcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChyZWdpc3RlckRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICAgICAgLy8gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyVGFza0luZm8pO1xyXG4gICAgICAgICAgICAvLyDjgZPjgZPjgadSZWR1eOOBq+S/neeuoeOBl+OBpuOBhOOCi3N0YXRl44KS5pu05paw44GZ44KL77yfXHJcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKFJlZ2lzdGVyKHsgLi4ucmVnaXN0ZXJEYXRhIH0pKTtcclxuICAgICAgICAgICAgLy8g5pei5a2Y44Gu44OH44O844K/44Go55m76Yyy44GZ44KLa2V5LXZhbHVl44KS5ZCI44KP44Gb44Gm55m76Yyy6Zai5pWw44Gr5rih44GZXHJcbiAgICAgICAgICAgIC8vIHNldERvY3VtZW50KHsgLi4ucmVnaXN0ZXJlZERhdGEsIC4uLnJlZ2lzdGVyRGF0YSB9KTtcclxuICAgICAgICAgICAgc2V0RG9jdW1lbnQodXNlclRhc2tJbmZvKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtzZXREb2N1bWVudCwgcmVnaXN0ZXJlZERhdGFdXHJcbiAgICApO1xyXG5cclxuICAgIC8vIOi/lOOBl+OBn+mWouaVsOOCkuWIqeeUqOOBmeOCi+OBk+OBqOOBp+OAgeeZu+mMsua4iOOBv+ODh+ODvOOCv+WFqOOBpivnmbvpjLLjgZfjgZ/jgYTjg4fjg7zjgr/jgpJEQuOBq+S/neeuoeOBp+OBjeOCi1xyXG4gICAgcmV0dXJuIHJlZ2lzdGVyRGF0YTtcclxufTtcclxuXHJcbi8vIOabtOaWsOWHpueQhlxyXG5jb25zdCB1c2VVcGRhdGVEb2N1bWVudCA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgLy8gcmVmLnVwZGF0ZeOBjE9iamVjdOOCkuWPl+OBkeWPluOCi+OBruOBp+OAgU9iamVjdOOCkuW8leaVsOOBq+WPluOCi+mWouaVsOOCkuWumue+qVxyXG4gICAgY29uc3QgdXBkYXRlRG9jdW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZG9jdW1lbnQ6IE9iamVjdCkgPT4gcmVmLnVwZGF0ZShkb2N1bWVudCksXHJcbiAgICAgICAgW3JlZl1cclxuICAgICk7XHJcbiAgICByZXR1cm4gdXBkYXRlRG9jdW1lbnQ7XHJcbn07XHJcblxyXG5jb25zdCB1c2VVcGRhdGVEYXRhID0gKCkgPT4ge1xyXG4gICAgLy8gc2V044Gu5pmC44Go5ZCM44GY44GPcmVm44KS5Y+W5b6X44GX44Gm44CBXHJcbiAgICBjb25zdCByZWYgPSB1c2VEYXRhYmFzZSgpO1xyXG4gICAgLy8g6Zai5pWw5ZG844Gz5Ye644GX44GmXHJcbiAgICBjb25zdCB1cGRhdGVEb2N1bWVudCA9IHVzZVVwZGF0ZURvY3VtZW50KHJlZik7XHJcbiAgICAvLyDmm7TmlrDlh6bnkIbjgpLkvZzmiJDjgZnjgotcclxuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAocmVnaXN0ZXJEYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURvY3VtZW50KHJlZ2lzdGVyRGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbdXBkYXRlRG9jdW1lbnRdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHVwZGF0ZURhdGE7XHJcbn07XHJcblxyXG4vLyDliYrpmaTlh6bnkIZcclxuY29uc3QgdXNlUmVtb3ZlRG9jdW1lbnQgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIC8vIOeJueOBq+W8leaVsOOBjOW/heimgeOBquOBhOOBruOBp+OBn+OBoOWRvOOBs+WHuuOBmeOBruOBv1xyXG4gICAgY29uc3QgZGVsZXRlRG9jdW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZG9jdW1lbnQ6IHN0cmluZykgPT4gcmVmLmNoaWxkKGRvY3VtZW50KS5yZW1vdmUoKSxcclxuICAgICAgICBbcmVmXVxyXG4gICAgKTtcclxuICAgIHJldHVybiBkZWxldGVEb2N1bWVudDtcclxufTtcclxuLy8gc2V044CBdXBkYXRl44Go5ZCM44GY44Gq44Gu44Gn5Ymy5oSbXHJcbmNvbnN0IHVzZURlbHRlRGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlZiA9IHVzZURhdGFiYXNlKCk7XHJcbiAgICBjb25zdCByZW1vdmVEb2N1bWVudCA9IHVzZVJlbW92ZURvY3VtZW50KHJlZik7XHJcbiAgICBjb25zdCBkZWxldGVEYXRhID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGRlbGV0ZURhdGE6IHN0cmluZykgPT4gcmVtb3ZlRG9jdW1lbnQoZGVsZXRlRGF0YSksXHJcbiAgICAgICAgW3JlbW92ZURvY3VtZW50XVxyXG4gICAgKTtcclxuICAgIHJldHVybiBkZWxldGVEYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdXNlRmV0Y2hBbGxEYXRhLCB1c2VSZWdpc3RlckRhdGEsIHVzZVVwZGF0ZURhdGEsIHVzZURlbHRlRGF0YSB9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gXCIuL2ZpcmViYXNlVGVzdFwiO1xyXG5pbXBvcnQgeyBsb2dpbiwgbG9nb3V0IH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdXNlck1vZHVsZVwiO1xyXG5pbXBvcnQgeyBpbml0LCBhbGxEZWxldGUgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdXNlRmV0Y2hBbGxEYXRhIH0gZnJvbSBcIi4vREJGZXRjaFwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5jb25zdCB1c2VSZWR1eEZldGNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoO1xyXG59O1xyXG5cclxuLy8g44Ot44Kw44Kk44Oz44CB44Ot44Kw44Ki44Km44OI44Oc44K/44Oz5a6f6KOFXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmViYXNlQXV0aENvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGxvZ2dlZGluID0gdXNlRmlyZWJhc2VMb2dpbigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VSZWR1eEZldGNoKCk7XHJcbiAgICBpZiAoIWxvZ2dlZGluKSB7XHJcbiAgICAgICAgLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44Gq44GR44KM44Gw44Ot44Kw44Kk44Oz44Oc44K/44Oz44KS6KGo56S6XHJcbiAgICAgICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluV2l0aFBvcHVwKCl9PuODreOCsOOCpOODszwvYnV0dG9uPjtcclxuICAgIH1cclxuICAgIC8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOCi+OBquOCieODreOCsOOCouOCpuODiOODnOOCv+ODs+OCkuihqOekulxyXG4gICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gdXNlU2lnbk91dChkaXNwYXRjaCl9PuODreOCsOOCouOCpuODiDwvYnV0dG9uPjtcclxufVxyXG5cclxuLy8g44Ot44Kw44Kk44Oz5Yem55CGXHJcbmNvbnN0IHNpZ25JbldpdGhQb3B1cCA9ICgpID0+IHtcclxuICAgIC8vIEdvb2dsZeODl+ODreODkOOCpOODgOOCquODluOCuOOCp+OCr+ODiOOBruOCpOODs+OCueOCv+ODs+OCueOCkuS9nOaIkFxyXG4gICAgY29uc3QgZ29vZ2xlQXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG4gICAgLy8gZGlzcGF0Y2gobG9naW4odXNlcklkQ2hlY2spKTtcclxuICAgIC8vIOWIpeOCv+ODluOBp+ODreOCsOOCpOODs+eUu+mdouOBq+mjm+OBsOOBl+OBn+OBhOOBn+OCgeOAgXNpZ25JbldpdGhQb3B1cOOCkuS9v+OBhlxyXG4gICAgLy8g44Oq44OA44Kk44Os44Kv44OI44Gn44Ot44Kw44Kk44Oz55S76Z2i44Gr6aOb44Gw44GX44Gf44GE5aC05ZCI44Gvc2lnbkluV2l0aFJlZGlyZWN044KS5L2/44GGXHJcbiAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChnb29nbGVBdXRoUHJvdmlkZXIpO1xyXG59O1xyXG5cclxuLy8g44Ot44Kw44Ki44Km44OI5Yem55CGXHJcbmNvbnN0IHVzZVNpZ25PdXQgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4pID0+IHtcclxuICAgIC8vIHNpZ25PdXTjgpLlkbzjgbPlh7rjgZnjgaDjgZHjgadPS1xyXG4gICAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VSZWR1eEZldGNoKCk7XHJcbiAgICBkaXNwYXRjaChsb2dvdXQoKSk7XHJcbiAgICBkaXNwYXRjaChhbGxEZWxldGUoKSk7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKTtcclxufTtcclxuXHJcbi8vIOODreOCsOOCpOODs+OBl+OBpuOBhOOCi+OBi+ODgeOCp+ODg+OCr+OBmeOCi+OCq+OCueOCv+ODoOODleODg+OCr+OCkuS9nOOCi1xyXG5jb25zdCB1c2VGaXJlYmFzZUxvZ2luID0gKCkgPT4ge1xyXG4gICAgLy8gc3RhdGXjgafjg63jgrDjgqTjg7PnirbmhYvjgpLkv53mjIFcclxuICAgIGNvbnN0IFtsb2dnZWRpbiwgc2V0TG9nZ2VkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VSZWR1eEZldGNoKCk7XHJcblxyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyDnj77lnKjjg63jgrDjgqTjg7PjgZfjgabjgYTjgovjg6bjg7zjgrbjgpLlj5blvpdcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOODpuODvOOCtuaDheWgseOBjOWPluOCjOOCjOOBsOODreOCsOOCpOODs+eKtuaFi1xyXG4gICAgICAgICAgICBsZXQgdXNlcklkQ2hlY2s6IHN0cmluZztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZBQyAhIXVzZXInKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coISF1c2VyKTtcclxuICAgICAgICAgICAgaWYgKCEhdXNlcikge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkQ2hlY2sgPSB1c2VyLnVpZDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKGluaXQoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZBQyB1c2VyVGFza0luZm8uY2FsZW5kYXJbMF0uUGF0dGVybklkJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyVGFza0luZm8uY2FsZW5kYXJbMF0uUGF0dGVybklkKTtcclxuICAgICAgICAgICAgICAgIC8vIOOBk+OCjOOCknJlZHV444Gn566h55CG44GZ44KLXHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaChsb2dpbih1c2VySWRDaGVjaykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRMb2dnZWRpbighIXVzZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy8g44Ot44Kw44Kk44Oz5oOF5aCx44KS6L+U5Y20XHJcbiAgICByZXR1cm4gbG9nZ2VkaW47XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUmVnaXN0ZXJEYXRhLCB1c2VVcGRhdGVEYXRhLCB1c2VEZWx0ZURhdGEgfSBmcm9tIFwiLi9EQkZldGNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtQ29tcG9uZW50KCkge1xyXG4gICAgXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSB1c2VSZWdpc3RlckRhdGEoKTtcclxuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSB1c2VVcGRhdGVEYXRhKCk7XHJcbiAgICBjb25zdCBkZWxldGVEYXRhID0gdXNlRGVsdGVEYXRhKCk7XHJcblxyXG4gICAgY29uc3QgW2tleURhdGEsIHNldEtleURhdGFdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICAgIGNvbnN0IFt2YWx1ZURhdGEsIHNldFZhbHVlRGF0YV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgS2V5OntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwia2V5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V5RGF0YShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgVmFsdWU6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlRGF0YShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVnaXN0ZXJEYXRhKHsgW2tleURhdGFdOiB2YWx1ZURhdGEgfSl9PiAqL31cclxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVnaXN0ZXJEYXRhKHsgW2tleURhdGFdOiB2YWx1ZURhdGEgfSl9PiAqL31cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZWdpc3RlckRhdGEoeyBba2V5RGF0YV06IHZhbHVlRGF0YSB9KX0+XHJcbiAgICAgICAgICAgICAgICDnmbvpjLJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXBkYXRlRGF0YSh7IFtrZXlEYXRhXTogdmFsdWVEYXRhIH0pfT5cclxuICAgICAgICAgICAgICAgIOabtOaWsFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVEYXRhKGtleURhdGEpfT5LZXnmjIflrprliYrpmaQ8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuLy8g6KqN6Ki85ZGo44KK44KERELlkajjgorjgaflv4XopoHjgarjgZ/jgoFpbXBvcnTjgZfjgabjgYrjgY9cclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QlVTVUFrbmhlM0lVUjB1UjBvZFd3U0M1aGZBbU1nb2trXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImhhYml0LXBsYW4uZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2hhYml0LXBsYW4uZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJoYWJpdC1wbGFuXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImhhYml0LXBsYW4uYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM4OTgxMDE2NjgwOFwiLFxyXG4gICAgYXBwSWQ6IFwiMTozODk4MTAxNjY4MDg6d2ViOjBmMjI1YmFkYjNkZWEwNjNmZWY3NmRcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy0wMFhLSEsyR1kyXCIsXHJcbn07XHJcblxyXG5pZiAoZmlyZWJhc2UuYXBwcy5sZW5ndGggPT09IDApIHtcclxuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmV4cG9ydCB7IGZpcmViYXNlLCBhdXRoIH07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaEFsbERhdGEgfSBmcm9tIFwiLi9EQkZldGNoXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbi8vIOiqjeiovOWRqOOCiuOChERC5ZGo44KK44Gn5b+F6KaB44Gq44Gf44KBaW1wb3J044GX44Gm44GK44GPXHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHVzZXJUYXNrIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdXNlclRhc2tzVHlwZVwiO1xyXG5pbXBvcnQgeyBpbml0IH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdENvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IFtVVCwgc2V0VVRdID0gdXNlU3RhdGUoXHJcbiAgICAgICAgdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICAvLyBjb25zdCB7IGRhdGEgfSA9IHVzZUZldGNoQWxsRGF0YSgpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAvLyAvLyBkYXRh44KS5Y+W44Gj44Gm44GP44KLXHJcbiAgICAgIC8vIGlmICh1c2VySWQgIT0gJycgJiYgISFkYXRhKSB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2codXNlcklkKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhcImdldERhdGEudHN4IGRhdGFcIik7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIC8vICAgLy8gc2V0VVQodXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKSk7XHJcbiAgICAgIC8vICAgLy8gZGlzcGF0Y2goaW5pdChkYXRhKSk7XHJcbiAgICAgIC8vIH1cclxuICAgIC8vIH0sW3VzZXJJZF0pO1xyXG4gICAgXHJcbiAgICAvLyDjgZPjgZPjgadzdGF0ZeOCkuS9v+OBhuOBquOCieODreOCsOOCpOODs+aZguOBq0RC44GL44KJ5Y+W5b6X44GX44Gf44OH44O844K/44KSUmVkdXjjgavkv53nrqHjgZnjgovlv4XopoHjgYzjgYLjgovjgIJcclxuICAgIC8vIHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIC8vICAgICB1c2VyVGFzayA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICAvLyB9LCBbdXNlcklkXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJnZXREYXRhIHVzZXJUYXNrSW5mb1wiKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJUYXNrSW5mbyk7XHJcbiAgICAvLyBkYXRhID8gY29uc29sZS5sb2coZGF0YS51c2VyVGFza0luZm8pIDogY29uc29sZS5sb2coJ25vbycpO1xyXG4gICAgLy8gb2JqZWN05b2i5byP44Gq44Gu44Gn5L2/44GE44KE44GZ44GE44KI44GG44Gre2tleSwgdmFsdWV95b2i5byP44Gu44Oq44K544OI44Gr5aSJ5o+b44GZ44KLXHJcbiAgICAvLyDjgb7jgZ/jgIHjg4fjg7zjgr/jgYzlpInjgo/jgonjgarjgYTpmZDjgorntZDmnpzjga/lkIzjgZjjgarjga7jgafjg6Hjg6LljJbjgZfjgabjgYrjgY9cclxuICAgIC8vIGNvbnN0IGRhdGFMaXN0ID0gdXNlTWVtbygoKSA9PiBPYmplY3QuZW50cmllcyhkYXRhIHx8IHt9KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHsga2V5LCB2YWx1ZSB9KSksIFtkYXRhXSk7XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+dGVzdDwvZGl2PjtcclxuICAgIC8vIHJldHVybiA8ZGl2Pnt1c2VyVGFza0luZm8uY2FsZW5kYXJbMF0uUGF0dGVybklkfTwvZGl2PjtcclxuICAgIC8vIDxkbD57ZGF0YUxpc3QubWFwKCh7IGtleSwgdmFsdWUgfSkgPT5cclxuICAgIC8vICAgPFJlYWN0LkZyYWdtZW50IGtleT17YCR7a2V5fSR7dmFsdWV9YH0+XHJcbiAgICAvLyAgICAgPGR0PmtleToge2tleX08L2R0PlxyXG4gICAgLy8gICAgIDxkdD52YWx1ZToge3ZhbHVlfTwvZHQ+XHJcbiAgICAvLyAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAvLyApfTwvZGw+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IElucHV0TiBmcm9tIFwiLi9JbnB1dE5vcm1hbFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXInO1xyXG5pbXBvcnQgeyB0YXNrRGV0YWlsUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgIHdpZHRoOiAnNDAlJyxcclxuICAgICAgekluZGV4OiA1LFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkFwcEJhcihwcm9wczogYW55KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyDjgZPjgZPjgadldmVudC50YXJnZXQudmFsdWXjgajjg6njg5njg6so6YCj5oOz6YWN5YiX44Gu44Kt44O8KeOCkumAgeOBo+OBpuWHpueQhuOBmeOCi+OAguWHpueQhuOCguacquS9nOaIkFxyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIHRhc2tEZXRhaWxSZWdpc3RlcihbZXZlbnQudGFyZ2V0LnZhbHVlLCAndGl0bGUnLCBwcm9wcy5pbmRleF0pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGxldCBidXR0b247XHJcbiAgaWYgKHByb3BzLmNoZWNrTmV3KSB7XHJcbiAgICBidXR0b24gPSA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVJlZ2lzdGVyfT7nmbvpjLI8L0J1dHRvbj5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgey8qIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gKi99XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICB7LyogTmV3cyAqL31cclxuICAgICAgICAgICAgey8qIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuOCv+OCueOCr+WQjVwiIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnZGVzY3JpcHRpb24nIH19IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IHZhbHVlPXt1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbJ3RpdGxlJ119IC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLjgr/jgrnjgq/lkI1cIlxyXG4gICAgICAgICAgICBsYWJlbD17cHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICB1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbJ3RpdGxlJ11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXROXHJcbiAgICAgICAgICAgICAgLy8gbGFiZWw9XCJpZi10aGVu44OX44Op44Oz44OL44Oz44KwXCJcclxuICAgICAgICAgICAgICBsYWJlbD17J+OCv+OCueOCr+WQjSd9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGluZGV4PXtwcm9wcy5pbmRleH1cclxuICAgICAgICAgICAgICBjb250ZW50SW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgY29udGVudHM9e3Byb3BzLmNvbnRlbnRzfVxyXG4gICAgICAgICAgICAgIHNldENvbnRlbnRzPXtwcm9wcy5zZXRDb250ZW50c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtwcm9wcy5jaGVja05ldyA/IDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17cHJvcHMuaGFuZGxlUmVnaXN0ZXJ9PueZu+mMsjwvQnV0dG9uPiA6IG51bGx9XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBUYWJzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCI7XHJcbmltcG9ydCBUYWIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIjtcclxuXHJcbmltcG9ydCBQYXR0ZXJuTGlzdCBmcm9tIFwiLi9QYXR0ZXJuTGlzdFwiO1xyXG5pbXBvcnQgU2ltcGxlU2VsZWN0IGZyb20gXCIuL1NlbGVjdFwiO1xyXG5pbXBvcnQgVGFza0xpc3QgZnJvbSBcIi4vVGFza0xpc3RcIjtcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuL0NhbGVuZGFyXCI7XHJcbmltcG9ydCBDYWxlbmRhcjIgZnJvbSBcIi4uL3Rlc3QvY2FsZW5kYXJcIjtcclxuaW1wb3J0IENhbGVuZGFyMyBmcm9tIFwiLi4vdGVzdC9DYWxlbmRhcjNcIjtcclxuaW1wb3J0IENhbGVuZGFyNCBmcm9tIFwiLi4vdGVzdC9jYWxlbmRhcjQuanN4XCI7XHJcblxyXG5pbnRlcmZhY2UgVGFiUGFuZWxQcm9wcyB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGluZGV4OiBhbnk7XHJcbiAgICB2YWx1ZTogYW55O1xyXG59XHJcblxyXG5mdW5jdGlvbiBUYWJQYW5lbChwcm9wczogVGFiUGFuZWxQcm9wcykge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxyXG4gICAgICAgICAgICBpZD17YHNjcm9sbGFibGUtYXV0by10YWJwYW5lbC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17YHNjcm9sbGFibGUtYXV0by10YWItJHtpbmRleH1gfVxyXG4gICAgICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsdWUgPT09IGluZGV4ICYmIChcclxuICAgICAgICAgICAgICAgIDxCb3ggcD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4OiBhbnkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGBzY3JvbGxhYmxlLWF1dG8tdGFiLSR7aW5kZXh9YCxcclxuICAgICAgICBcImFyaWEtY29udHJvbHNcIjogYHNjcm9sbGFibGUtYXV0by10YWJwYW5lbC0ke2luZGV4fWAsXHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIC8vIHBhZGRpbmdUb3A6JzcwcHgnLFxyXG4gICAgICAgIC8vIGRpc3BsYXk6J2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBiYXJTaXplOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxhYmxlVGFic0J1dHRvbkF1dG8oKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Nob2ljZSwgc2V0Q2hvaWNlXSA9IFJlYWN0LnVzZVN0YXRlKE51bWJlcik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7fT4sIG5ld1ZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxBcHBCYXJcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFyU2l6ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxCdXR0b25zPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNjcm9sbGFibGUgYXV0byB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJUYXNrc1wiIHsuLi5hMTF5UHJvcHMoMCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlBhdHRlcm5cIiB7Li4uYTExeVByb3BzKDEpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9PlxyXG4gICAgICAgICAgICAgICAgPFRhc2tMaXN0IC8+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsxfT5cclxuICAgICAgICAgICAgICAgIDxTaW1wbGVTZWxlY3QgY2hvaWNlPXtjaG9pY2V9IHNldENob2ljZT17c2V0Q2hvaWNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFBhdHRlcm5MaXN0IGNob2ljZT17Y2hvaWNlfSAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxTaW1wbGVTZWxlY3QgY2hvaWNlPXtjaG9pY2V9IHNldENob2ljZT17c2V0Q2hvaWNlfS8+XHJcbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXIzIGNob2ljZT17Y2hvaWNlfSAvPiAqL31cclxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHRhc2tEZXRhaWxSZWdpc3RlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdXNlclRhc2tzVHlwZVwiO1xyXG5cclxudHlwZSBuZXdUYXNrc1R5cGUgPSB7XHJcbiAgICBbY29udGVudDogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcclxuICAgIGluZGV4OiBzdHJpbmc7XHJcbiAgICBjb250ZW50SW5kZXg6bnVtYmVyO1xyXG4gICAgY29udGVudHM6IHtcclxuICAgICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICB9W107XHJcbiAgICBzZXRDb250ZW50czogUmVhY3QuRGlzcGF0Y2g8XHJcbiAgICAgICAgUmVhY3QuU2V0U3RhdGVBY3Rpb248XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9W11cclxuICAgICAgICA+XHJcbiAgICA+O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICAgXCImIC5NdWlUZXh0RmllbGQtcm9vdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyNWNoXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtUHJvcHNUZXh0RmllbGRzKHByb3BzOiBwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgLy8g44GT44GT44GnZXZlbnQudGFyZ2V0LnZhbHVl44Go44Op44OZ44OrKOmAo+aDs+mFjeWIl+OBruOCreODvCnjgpLpgIHjgaPjgablh6bnkIbjgZnjgovjgILlh6bnkIbjgoLmnKrkvZzmiJBcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgdGFza0RldGFpbFJlZ2lzdGVyKFtldmVudC50YXJnZXQudmFsdWUsIHByb3BzLmxhYmVsLCBwcm9wcy5pbmRleF0pXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBuZXdUYXNrT25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIC8vIOOBk+OBk+OBp2V2ZW50LnRhcmdldC52YWx1ZeOBqOODqeODmeODqyjpgKPmg7PphY3liJfjga7jgq3jg7wp44KS6YCB44Gj44Gm5Yem55CG44GZ44KL44CC5Yem55CG44KC5pyq5L2c5oiQXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29udGVudHNDb3B5ID0gcHJvcHMuY29udGVudHMuc2xpY2UoKTtcclxuICAgICAgICBjb250ZW50c0NvcHlbcHJvcHMuY29udGVudEluZGV4XS52YWx1ZT1ldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIHByb3BzLnNldENvbnRlbnRzKGNvbnRlbnRzQ29weSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IGNoZWNrID0gdXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KHByb3BzLmluZGV4KV0uZGV0YWlsO1xyXG4gICAgLy8gY29uc3QgY2hlY2sgPSB1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbcHJvcHMubGFiZWxdXHJcbiAgICAvLyDmlrDopo/nmbvpjLLjgYvmm7TmlrDjgYvjgpLjg4Hjgqfjg4Pjgq/jgZnjgovjgILmlrDopo/jgafjgYLjgozjgbBUcnVlXHJcbiAgICBjb25zdCBjaGVja05ldyA9IHVzZXJUYXNrSW5mby50YXNrcy5sZW5ndGggPCBwYXJzZUludChwcm9wcy5pbmRleCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImlucHV0Tm9ybWFsIGNoZWNrIFwiICsgcHJvcHMubGFiZWwpO1xyXG4gICAgLy8gY29uc29sZS5sb2coY2hlY2tOZXcpO1xyXG5cclxuICAgIGlmIChjaGVja05ldykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17cHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17bmV3VGFza09uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jb250ZW50c1twcm9wcy5jb250ZW50SW5kZXhdLnZhbHVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAvLyA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocHJvcHMucmVxdWlyZWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAvLyA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICB1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbcHJvcHMubGFiZWxdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIC8vIDwvZm9ybT5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHRhc2tEZWxldGUgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7IG9wZW5NZW51OiBudW1iZXIsIHNldE9wZW5NdW5lOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PiwgYW5jaG9yRWw6IEhUTUxFbGVtZW50LCBkZWxldGVUYXNrSGFuZGxlcjogKGluZGV4OiBudW1iZXIpID0+ICgpID0+IHZvaWQsIGluZGV4OiBudW1iZXIgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZU1lbnUocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIC8vIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh0YXNrRGVsZXRlKHByb3BzLmluZGV4KSk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgY29uc29sZS5sb2coJ2RlbGV0ZSBjaGVjayBjbGljaycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgLy8gcHJvcHMuZGVsZXRlVGFza0hhbmRsZXIocHJvcHMuaW5kZXgpO1xyXG4gICAgcHJvcHMuc2V0T3Blbk11bmUoOTk5OSk7XHJcbiAgICBjb25zb2xlLmxvZygnZGVsZXRlIGNoZWNrIGNsb3NlJyk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5pbmRleCk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZygnZGVsZXRlIGNoZWNrIHJlbmRlcicpO1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLmluZGV4KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiA8QnV0dG9uIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIE9wZW4gTWVudVxyXG4gICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXHJcbiAgICAgICAgYW5jaG9yRWw9e3Byb3BzLmFuY2hvckVsfVxyXG4gICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgLy8gb3Blbj17Qm9vbGVhbihwcm9wcy5hbmNob3JFbCl9XHJcbiAgICAgICAgb3Blbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbk1lbnV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgID5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xpY2t9PuOCv+OCueOCr+OCkuWJiumZpOOBmeOCizwvTWVudUl0ZW0+XHJcbiAgICAgICAgey8qIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TXkgYWNjb3VudDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Mb2dvdXQ8L01lbnVJdGVtPiAqL31cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHRhc2tEZWxldGUgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7IG9wZW5NZW51OiBudW1iZXIsIHNldE9wZW5NdW5lOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PiwgYW5jaG9yRWw6IEhUTUxFbGVtZW50LCBIYW5kbGVyOiBhbnksIGluZGV4OiBudW1iZXIgfTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgZm9ybUNvbnRyb2w6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICBtaW5XaWR0aDogMTIwLFxyXG4gICAgfSxcclxuICAgIHNlbGVjdEVtcHR5OiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICBwYXR0ZXJuOiB7XHJcbiAgICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGljb246IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfVxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXR0ZXJuTWVudShwcm9wczogUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtwYXR0ZXJuTmFtZSwgc2V0UGF0dGVybk5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgLy8gZGlzcGF0Y2godGFza0RlbGV0ZShwcm9wcy5pbmRleCkpO1xyXG4gICAgcHJvcHMuSGFuZGxlcihwYXR0ZXJuTmFtZSk7XHJcbiAgICBzZXRQYXR0ZXJuTmFtZSgnJyk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBzZXRQYXR0ZXJuTmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgLy8gcHJvcHMuZGVsZXRlVGFza0hhbmRsZXIocHJvcHMuaW5kZXgpO1xyXG4gICAgcHJvcHMuc2V0T3Blbk11bmUoOTk5OSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHBhdHRlcm5FZGl0TWVudSA9XHJcbiAgICA8ZGl2PjxUZXh0RmllbGRcclxuICAgICAgaWQ9XCJwYXR0ZXJuQWRkTWVudVwiXHJcbiAgICAgIGxhYmVsPXsn5paw6KaP44OR44K/44O844Oz5ZCNJ31cclxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgdmFsdWU9e3BhdHRlcm5OYW1lfVxyXG4gICAgLz5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwicGF0dGVybkFkZFwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgID5cclxuICAgICAgICA8U2VuZEljb24gLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgPC9kaXY+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGF0dGVybn0+XHJcbiAgICAgIHsvKiA8QnV0dG9uIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIE9wZW4gTWVudVxyXG4gICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXHJcbiAgICAgICAgYW5jaG9yRWw9e3Byb3BzLmFuY2hvckVsfVxyXG4gICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgLy8gb3Blbj17Qm9vbGVhbihwcm9wcy5hbmNob3JFbCl9XHJcbiAgICAgICAgb3Blbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbk1lbnV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgID5cclxuICAgICAgICB7cGF0dGVybkVkaXRNZW51fVxyXG4gICAgICAgIHsvKiA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPXsn44OR44K/44O844Oz5ZCNJ31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICB2YWx1ZT17cGF0dGVybk5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiY29tbWVudHNcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlbmRJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgey8qIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbGlja30+44K/44K544Kv44KS5YmK6Zmk44GZ44KLPC9NZW51SXRlbT4gKi99XHJcbiAgICAgICAgey8qIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TXkgYWNjb3VudDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Mb2dvdXQ8L01lbnVJdGVtPiAqL31cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHRhc2tEZWxldGUgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7IG9wZW5NZW51OiBudW1iZXIsIHNldE9wZW5NdW5lOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PiwgYW5jaG9yRWw6IEhUTUxFbGVtZW50LCBIYW5kbGVyOiBhbnksIGluZGV4OiBudW1iZXIgfTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgZm9ybUNvbnRyb2w6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICBtaW5XaWR0aDogMTIwLFxyXG4gICAgfSxcclxuICAgIHNlbGVjdEVtcHR5OiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICBwYXR0ZXJuOiB7XHJcbiAgICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGljb246IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfVxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXR0ZXJuTWVudShwcm9wczogUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtwYXR0ZXJuTmFtZSwgc2V0UGF0dGVybk5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgLy8gZGlzcGF0Y2godGFza0RlbGV0ZShwcm9wcy5pbmRleCkpO1xyXG4gICAgcHJvcHMuSGFuZGxlcihwYXR0ZXJuTmFtZSk7XHJcbiAgICBzZXRQYXR0ZXJuTmFtZSgnJyk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBzZXRQYXR0ZXJuTmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgLy8gcHJvcHMuZGVsZXRlVGFza0hhbmRsZXIocHJvcHMuaW5kZXgpO1xyXG4gICAgcHJvcHMuc2V0T3Blbk11bmUoOTk5OSk7XHJcbiAgfTtcclxuICBsZXQgcGF0dGVybkVkaXRNZW51ID1cclxuICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbGlja30+44OR44K/44O844Oz44KS5YmK6Zmk44GZ44KLPC9NZW51SXRlbT47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXR0ZXJufT5cclxuICAgICAgey8qIDxCdXR0b24gYXJpYS1jb250cm9scz1cInNpbXBsZS1tZW51XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgT3BlbiBNZW51XHJcbiAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgPE1lbnVcclxuICAgICAgICBpZD1cInNpbXBsZS1tZW51XCJcclxuICAgICAgICBhbmNob3JFbD17cHJvcHMuYW5jaG9yRWx9XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAvLyBvcGVuPXtCb29sZWFuKHByb3BzLmFuY2hvckVsKX1cclxuICAgICAgICBvcGVuPXtwcm9wcy5pbmRleCA9PSBwcm9wcy5vcGVuTWVudX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtwYXR0ZXJuRWRpdE1lbnV9XHJcbiAgICAgICAgey8qIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9eyfjg5Hjgr/jg7zjg7PlkI0nfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgIHZhbHVlPXtwYXR0ZXJuTmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VuZEljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+ICovfVxyXG5cclxuICAgICAgICB7LyogPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT7jgr/jgrnjgq/jgpLliYrpmaTjgZnjgos8L01lbnVJdGVtPiAqL31cclxuICAgICAgICB7LyogPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5NeSBhY2NvdW50PC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PkxvZ291dDwvTWVudUl0ZW0+ICovfVxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdGFza0RlbGV0ZSB9IGZyb20gJy4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxudHlwZSBQcm9wcyA9IHsgb3Blbk1lbnU6IG51bWJlciwgc2V0T3Blbk11bmU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+LCBhbmNob3JFbDogSFRNTEVsZW1lbnQsIEhhbmRsZXI6IGFueSwgaW5kZXg6IG51bWJlciB9O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICBmb3JtQ29udHJvbDoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIG1pbldpZHRoOiAxMjAsXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0RW1wdHk6IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxuICAgIHBhdHRlcm46IHtcclxuICAgICAgd2lkdGg6ICdmaXQtY29udGVudCcsXHJcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgaWNvbjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9XHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdHRlcm5NZW51KHByb3BzOiBQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3BhdHRlcm5OYW1lLCBzZXRQYXR0ZXJuTmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBkaXNwYXRjaCh0YXNrRGVsZXRlKHByb3BzLmluZGV4KSk7XHJcbiAgICBwcm9wcy5IYW5kbGVyKHBhdHRlcm5OYW1lKTtcclxuICAgIHNldFBhdHRlcm5OYW1lKCcnKTtcclxuICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIHNldFBhdHRlcm5OYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAvLyBwcm9wcy5kZWxldGVUYXNrSGFuZGxlcihwcm9wcy5pbmRleCk7XHJcbiAgICBwcm9wcy5zZXRPcGVuTXVuZSg5OTk5KTtcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIGxldCBwYXR0ZXJuRWRpdE1lbnUgPVxyXG4gICAgPGRpdj48VGV4dEZpZWxkXHJcbiAgICAgIGlkPVwicGF0dGVybkVkaXRNZW51XCJcclxuICAgICAgbGFiZWw9eyfjg5Hjgr/jg7zjg7PlkI0nfVxyXG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICB2YWx1ZT17cGF0dGVybk5hbWV9XHJcbiAgICAvPlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJwYXR0ZXJuQWRkXCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgPlxyXG4gICAgICAgIDxTZW5kSWNvbiAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICA8L2Rpdj47XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGF0dGVybn0+XHJcbiAgICAgIHsvKiA8QnV0dG9uIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIE9wZW4gTWVudVxyXG4gICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXHJcbiAgICAgICAgYW5jaG9yRWw9e3Byb3BzLmFuY2hvckVsfVxyXG4gICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgLy8gb3Blbj17Qm9vbGVhbihwcm9wcy5hbmNob3JFbCl9XHJcbiAgICAgICAgb3Blbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbk1lbnV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgID5cclxuICAgICAgICB7cGF0dGVybkVkaXRNZW51fVxyXG4gICAgICAgIHsvKiA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPXsn44OR44K/44O844Oz5ZCNJ31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICB2YWx1ZT17cGF0dGVybk5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiY29tbWVudHNcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlbmRJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgey8qIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbGlja30+44K/44K544Kv44KS5YmK6Zmk44GZ44KLPC9NZW51SXRlbT4gKi99XHJcbiAgICAgICAgey8qIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TXkgYWNjb3VudDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Mb2dvdXQ8L01lbnVJdGVtPiAqL31cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ29tbWVudFwiO1xyXG5pbXBvcnQgUmVtb3ZlQ2lyY2xlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZUNpcmNsZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IHsgdGFza1JlbW92ZVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290czoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA3MjAsXHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdHRlcm5MaXN0KHByb3BzOiB7IGNob2ljZTogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG5cclxuICAgIC8vIOODnuOCpOODiuOCueODnOOCv+ODs+OBjOOCr+ODquODg+OCr+OBleOCjOOBn+OCieODkeOCv+ODvOODs+OBi+OCieWvvuixoeOBruOCv+OCueOCr+OCkumZpOWkluOBmeOCi+OAglxyXG4gICAgY29uc3QgcGF0dGVyblJlbW92ZUhhbmRsZXIgPSAoZGV0YWlsVGl0bGU6c3RyaW5nKT0+KCk9PntcclxuICAgICAgICBjb25zdCBwYXR0ZXJuSWQgPXByb3BzLmNob2ljZTtcclxuICAgICAgICBkaXNwYXRjaCh0YXNrUmVtb3ZlUGF0dGVybih7cGF0dGVybklkLGRldGFpbFRpdGxlfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOmBuOaKnuOBl+OBn+ODkeOCv+ODvOODs0lE44GM6Kit5a6a44GV44KM44Gm44GE44KL44K/44K544Kv44KS5oq95Ye644GZ44KL44CCXHJcbiAgICBjb25zdCBjaG9pY2VQYXR0ZXJuVGFza3MgPSB1c2VyVGFza0luZm8udGFza3MuZmlsdGVyKGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZSgodGFzaykgPT4gdGFzay5wYXR0ZXJuSUQgPT0gcHJvcHMuY2hvaWNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3RzfT5cclxuICAgICAgICAgICAge2Nob2ljZVBhdHRlcm5UYXNrcy5tYXAoKHRhc2ssaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQYXR0ZXJuID0gdGFzay5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybkluZm8ucGF0dGVybklEID09IHByb3BzLmNob2ljZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LWxhYmVsLSR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ucGF0dGVybklEICsgdGFza1BhdHRlcm5bMF0ub3JkZXJcclxuICAgICAgICAgICAgICAgIH1gO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrUGF0dGVyblswXS5wYXR0ZXJuSUQgKyAnXycgKyBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrUGF0dGVyblswXS5wYXR0ZXJuSUQgKyB0YXNrUGF0dGVyblswXS5vcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJlbmRcIiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIiBvbkNsaWNrPXtwYXR0ZXJuUmVtb3ZlSGFuZGxlcih0YXNrLmRldGFpbFsndGl0bGUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2xhYmVsSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17YCR7dGFzay5kZXRhaWxbXCLjgr/jgrnjgq/lkI1cIl19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCI7XHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaFwiO1xyXG5pbXBvcnQgV2lmaUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9XaWZpXCI7XHJcbmltcG9ydCBCbHVldG9vdGhJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmx1ZXRvb3RoXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgeyB0YXNrUGF0dGVyblVwZGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogMzYwLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdHRlcm5Td2l0Y2hMaXN0KHByb3BzOiB7Y2hlY2tlZDogbnVtYmVyW10sc2V0Q2hlY2tlZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyW10+PixpbmRleDpudW1iZXJ9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICAvLyDjgZPjgZPjgafjg5Hjgr/jg7zjg7Pjga7nmbvpjLLnirbms4HjgpLmm7TmlrDjgZnjgotcclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcHJvcHMuY2hlY2tlZC5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICBjb25zdCBuZXdDaGVja2VkID0gWy4uLnByb3BzLmNoZWNrZWRdO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICBuZXdDaGVja2VkLnB1c2godmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0NoZWNrZWQuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9wcy5zZXRDaGVja2VkKG5ld0NoZWNrZWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXdDaGVja2VkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3Q2hlY2tlZCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9wcy5pbmRleDtcclxuICAgICAgICBkaXNwYXRjaCh0YXNrUGF0dGVyblVwZGF0ZSh7bmV3Q2hlY2tlZCxpbmRleH0pKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBzdWJoZWFkZXI9ezxMaXN0U3ViaGVhZGVyPlBhdHRlcm5MaXN0PC9MaXN0U3ViaGVhZGVyPn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7dXNlclRhc2tJbmZvLnBhdHRlcm4ubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2NvbnRlbnQucGF0dGVybk5hbWUrJ18nK3Byb3BzLmNoZWNrZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaWZpSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjb250ZW50LnBhdHRlcm5JZCArIFwiX1wiICsgY29udGVudC5wYXR0ZXJuTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2NvbnRlbnQucGF0dGVybk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKGNvbnRlbnQucGF0dGVybklkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwcm9wcy5jaGVja2VkLmluZGV4T2YoY29udGVudC5wYXR0ZXJuSWQpICE9PSAtMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGNvbnRlbnQucGF0dGVybklkICsgXCJfXCIgKyBjb250ZW50LnBhdHRlcm5OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcclxuaW1wb3J0IERhdGVSYW5nZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EYXRlUmFuZ2VcIjtcclxuaW1wb3J0IExpc3RJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdFwiO1xyXG5pbXBvcnQgVHVuZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9UdW5lXCI7XHJcbmltcG9ydCBEaXJlY3Rpb25zUnVuSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RpcmVjdGlvbnNSdW5cIjtcclxuXHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7XHJcbiAgICBtYWtlU3R5bGVzLFxyXG4gICAgdXNlVGhlbWUsXHJcbiAgICBUaGVtZSxcclxuICAgIGNyZWF0ZVN0eWxlcyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgcm9vdGQ6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRyYXdlcjoge1xyXG4gICAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcHBCYXI6IHtcclxuICAgICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudUJ1dHRvbjoge1xyXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXHJcbiAgICAgICAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICAgICAgZHJhd2VyUGFwZXI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIEluamVjdGVkIGJ5IHRoZSBkb2N1bWVudGF0aW9uIHRvIHdvcmsgaW4gYW4gaWZyYW1lLlxyXG4gICAgICogWW91IHdvbid0IG5lZWQgaXQgb24geW91ciBwcm9qZWN0LlxyXG4gICAgICovXHJcbiAgICB3aW5kb3c/OiAoKSA9PiBXaW5kb3c7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3BvbnNpdmVEcmF3ZXIocHJvcHM6IFByb3BzKSB7XHJcbiAgICBjb25zdCB7IHdpbmRvdyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vYmlsZU9wZW4oIW1vYmlsZU9wZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkcmF3ZXIgPSAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0gLz5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0RheVBsYW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT1cIkRheSBQbGFuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlyZWN0aW9uc1J1bkljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRheSBQbGFuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90YXNrc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PVwiVGFza3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVGFza3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9QYXR0ZXJuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9XCJQYXR0ZXJuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8VHVuZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXR0ZXJuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT1cIkNhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVJhbmdlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ2FsZW5kYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID1cclxuICAgICAgICB3aW5kb3cgIT09IHVuZGVmaW5lZCA/ICgpID0+IHdpbmRvdygpLmRvY3VtZW50LmJvZHkgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290ZH0+XHJcbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlclRvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgbm9XcmFwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXNwb25zaXZlIGRyYXdlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn0gYXJpYS1sYWJlbD1cIm1haWxib3ggZm9sZGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgey8qIFRoZSBpbXBsZW1lbnRhdGlvbiBjYW4gYmUgc3dhcHBlZCB3aXRoIGpzIHRvIGF2b2lkIFNFTyBkdXBsaWNhdGlvbiBvZiBsaW5rcy4gKi99XHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIHNtVXAgaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcj17Y29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yPXt0aGVtZS5kaXJlY3Rpb24gPT09IFwicnRsXCIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17bW9iaWxlT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlRHJhd2VyVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgTW9kYWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2VlcE1vdW50ZWQ6IHRydWUsIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDxIaWRkZW4geHNEb3duIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0XCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgUmVtb3ZlQ2lyY2xlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZUNpcmNsZVwiO1xyXG5pbXBvcnQgQWRkQ2lyY2xlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZVwiO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdCc7XHJcbmltcG9ydCB7IHBhdHRlcm5EZWxldGUsIHBhdHRlcm5OYW1lRWRpdCwgcGF0dGVyblJlZ2lzdGVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuaW1wb3J0IFBhdHRlcm5BZGRNZW51IGZyb20gJy4vUGF0dGVybkFkZE1lbnUnO1xyXG5pbXBvcnQgUGF0dGVybkRlbGV0ZU1lbnUgZnJvbSAnLi9QYXR0ZXJuRGVsZXRlTWVudSc7XHJcbmltcG9ydCBQYXR0ZXJuRWRpdE1lbnUgZnJvbSAnLi9QYXR0ZXJuRWRpdE1lbnUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICBmb3JtQ29udHJvbDoge1xyXG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiAxMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RFbXB0eToge1xyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBob21lOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvbnM6IHtcclxuICAgICAgICAgICAgd2lkdGg6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZVNlbGVjdChwcm9wczogeyBjaG9pY2U6IG51bWJlciwgc2V0Q2hvaWNlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PiB9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbcGF0dGVybiwgc2V0UGF0dGVybl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG5cclxuICAgIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk11bmVdID0gUmVhY3QudXNlU3RhdGUoOTk5OSk7XHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgaWYgKHByb3BzLmNob2ljZSA9PSAwICYmIHVzZXJUYXNrSW5mby5wYXR0ZXJuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBwcm9wcy5zZXRDaG9pY2UodXNlclRhc2tJbmZvLnBhdHRlcm5bMF0ucGF0dGVybklkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyVGFza0luZm8ucGF0dGVyblswXS5wYXR0ZXJuSWQpO1xyXG4gICAgfVxyXG4gICAgaWYodXNlclRhc2tJbmZvLnBhdHRlcm4ubGVuZ3RoID09IDApe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVjayBsZW5ndGggMCcpO1xyXG4gICAgICAgIHByb3BzLnNldENob2ljZSgwKTtcclxuICAgIH1cclxuICAgIC8vIHByb3BzLnNldENob2ljZSh1c2VyVGFza0luZm8ucGF0dGVyblswXS5wYXR0ZXJuSWQpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogdW5rbm93biB9PikgPT4ge1xyXG4gICAgICAgIHNldFBhdHRlcm4oZXZlbnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZyk7XHJcbiAgICAgICAgcHJvcHMuc2V0Q2hvaWNlKGV2ZW50LnRhcmdldC52YWx1ZSBhcyBudW1iZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICh2YWx1ZTogbnVtYmVyKSA9PiAoZXZlbnQ6IHsgY3VycmVudFRhcmdldDogUmVhY3QuU2V0U3RhdGVBY3Rpb248SFRNTEVsZW1lbnQ+OyB9KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgc2V0T3Blbk11bmUodmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib3Blbk1lbnU6XCIgKyBvcGVuTWVudSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBhdHRlcm5BZGRIYW5kbGVyID0gKHBhdHRlcm5OYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdHRlcm50ZXN0IHBhdHRlcm5BZGRIYW5kbGVyXCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHBhdHRlcm5SZWdpc3RlcihwYXR0ZXJuTmFtZSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHBhdHRlcm5EZWxldGVIYW5kbGVyID0gKHBhdHRlcm5OYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAvLyDliYrpmaTmmYLjgIHmnKrmnaXjgavnmbvpjLLjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7Pjga/liYrpmaTjgZnjgovlv4XopoHjgYzjgYLjgotcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdHRlcm50ZXN0IHBhdHRlcm5EZWxldGVIYW5kbGVyXCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHBhdHRlcm5EZWxldGUocHJvcHMuY2hvaWNlKSk7XHJcbiAgICAgICAgcHJvcHMuc2V0Q2hvaWNlKDApO1xyXG4gICAgfTtcclxuICAgIC8vIOODkeOCv+ODvOODs+WQjeensOe3qOmbhueUqOWHpueQhuOAgumBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44Go5byV5pWw44Gn5Y+W5b6X44GX44Gf5paw44GX44GE5ZCN56ew44KSUmVkdXhBY3Rpb27jgbjpgKPmkLrjgZnjgovjgIJcclxuICAgIGNvbnN0IHBhdHRlcm5FZGl0SGFuZGxlciA9IChwYXR0ZXJuTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXR0ZXJudGVzdCBwYXR0ZXJuRWRpdEhhbmRsZXJcIik7XHJcbiAgICAgICAgY29uc3QgZWRpdFBhdHRlcm5JZCA9IHByb3BzLmNob2ljZTtcclxuICAgICAgICBkaXNwYXRjaChwYXR0ZXJuTmFtZUVkaXQoe2VkaXRQYXR0ZXJuSWQscGF0dGVybk5hbWV9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZX0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5QYXR0ZXJuPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgey8qIHZhbHVl44Gr44Gv6YG45oqe44GX44Gm44GE44KL6aCF55uu44GudmFsdWXjgYzoqK3lrprjgZXjgozjgosgKi99XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jaG9pY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlclRhc2tJbmZvLnBhdHRlcm4ubWFwKChwYXR0ZXJuLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIGtleT17aW5kZXggKyBcIl9cIiArIHBhdHRlcm4ucGF0dGVybk5hbWV9IHZhbHVlPXtwYXR0ZXJuLnBhdHRlcm5JZH0+PHNwYW4+e3BhdHRlcm4ucGF0dGVybk5hbWV9PC9zcGFuPjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbnN9PlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soMSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZENpcmNsZUljb24gY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UGF0dGVybkFkZE1lbnUgb3Blbk1lbnU9e29wZW5NZW51fSBzZXRPcGVuTXVuZT17c2V0T3Blbk11bmV9IGFuY2hvckVsPXthbmNob3JFbH0gSGFuZGxlcj17cGF0dGVybkFkZEhhbmRsZXJ9IGluZGV4PXsxfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrKDIpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZUljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxQYXR0ZXJuRGVsZXRlTWVudSBvcGVuTWVudT17b3Blbk1lbnV9IHNldE9wZW5NdW5lPXtzZXRPcGVuTXVuZX0gYW5jaG9yRWw9e2FuY2hvckVsfSBIYW5kbGVyPXtwYXR0ZXJuRGVsZXRlSGFuZGxlcn0gaW5kZXg9ezJ9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soMyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RWRpdEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UGF0dGVybkVkaXRNZW51IG9wZW5NZW51PXtvcGVuTWVudX0gc2V0T3Blbk11bmU9e3NldE9wZW5NdW5lfSBhbmNob3JFbD17YW5jaG9yRWx9IEhhbmRsZXI9e3BhdHRlcm5FZGl0SGFuZGxlcn0gaW5kZXg9ezN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBGYWRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlXCI7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NvbW1lbnRcIjtcclxuaW1wb3J0IEFkZENpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGVcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCI7XHJcbmltcG9ydCBSZW1vdmVDaXJjbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlQ2lyY2xlXCI7XHJcblxyXG5pbXBvcnQgVGFza01vZGFsIGZyb20gXCIuL1Rhc2tNb2RhbFwiO1xyXG5pbXBvcnQgVGFza1BsdXMgZnJvbSBcIi4vdGFza1BsdXNcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdGFza0RlbGV0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHJvb3RzOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IDcyMCxcclxuICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMTBweCBhdXRvIDVweCBhdXRvXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXBlcjoge1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hMaXN0KCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoOTk5OSk7XHJcbiAgICBjb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NdW5lXSA9IFJlYWN0LnVzZVN0YXRlKDk5OTkpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcblxyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKHZhbHVlOiBudW1iZXIpID0+IChldmVudDoge1xyXG4gICAgICAgIGN1cnJlbnRUYXJnZXQ6IFJlYWN0LlNldFN0YXRlQWN0aW9uPEhUTUxFbGVtZW50PjtcclxuICAgIH0pID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBzZXRPcGVuTXVuZSh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvcGVuTWVudTpcIiArIG9wZW5NZW51KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKHZhbHVlOiBudW1iZXIpID0+ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW46XCIgKyBvcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVGFza0hhbmRsZXIgPSAoaW5kZXg6IG51bWJlcikgPT4gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgZGVsZXRlVGFza0hhbmRsZXJcIik7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2godGFza0RlbGV0ZShpbmRleCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290c30+XHJcbiAgICAgICAgICAgIHt1c2VyVGFza0luZm8udGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxJZCA9IGBjaGVja2JveC1saXN0LWxhYmVsLSR7dGFzay5kZXRhaWxbXCJ0ZXN0RGV0YWlsMVwiXX1gO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gPEJveCBrZXk9e2xhYmVsSWQgKyBcIl9cIiArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Rhc2suZGV0YWlsW1widGl0bGVcIl0gKyBcIjpcIiArIGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdmlkZXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bGFiZWxJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXs8c3Bhbj57dGFzay5kZXRhaWxbXCLjgr/jgrnjgq/lkI1cIl19PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNhYmxlVHlwb2dyYXBoeT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17e2NvbXBvbmVudDonc3Bhbid9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFza01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW49e3NldE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2s9e3Rhc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJlbmRcIiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGljayhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5NZW51PXtvcGVuTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3Blbk11bmU9e3NldE9wZW5NdW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2tIYW5kbGVyPXtkZWxldGVUYXNrSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxUYXNrUGx1cyBudW09e3VzZXJUYXNrSW5mby50YXNrcy5sZW5ndGggKyAxfSAvPlxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIjtcclxuaW1wb3J0IElucHV0TiBmcm9tIFwiLi9JbnB1dE5vcm1hbFwiO1xyXG5pbXBvcnQgQXBwVmFyIGZyb20gXCIuL0FwcFZhclwiO1xyXG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGVcIjtcclxuaW1wb3J0IFBhdHRlcm5Td2l0Y2hMaXN0IGZyb20gXCIuL1BhdHRlcm5Td2l0Y2hcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHRhc2tSZWdpc3RlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgLy8gd2lkdGg6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgIzAwMFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5jb25zdCBjb250ZW50c0xpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiaWYtdGhlbuODl+ODqeODs+ODi+ODs+OCsFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLnv5LmhaPjga7nqY3jgb/kuIrjgZJcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi44OR44K/44O844OzXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuawl+OBjOmAsuOBvuOBquOBhOOBqOOBjVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLplbfmnJ/nmoTjgavopovov5Tjgorjga7jgYLjgovnv5LmhaPjga7ljbPmmYLnmoTjgarmpb3jgZfjgb9cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi55uu5qiZXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuWuiOOCjOOBquOBi+OBo+OBn+aZguOBrue9sOWJh1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLjg6zjg5njg6tcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6YG/44GR44KL44GT44Go44Gn5b6X44KJ44KM44KL44Oh44Oq44OD44OIXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuimi+i/lOOCiuOBruOBquOBhOe/kuaFo+OBq+WvvuOBmeOCi+WNs+aZgueahOOBqueXm+OBv1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2tNb2RhbChwcm9wczogYW55KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuICAgIGNvbnN0IGNoZWNrTmV3ID0gdXNlclRhc2tJbmZvLnRhc2tzLmxlbmd0aCA8IHBhcnNlSW50KHByb3BzLmluZGV4KTtcclxuICAgIGxldCBzdGF0ZUNoZWNrZWQ6IG51bWJlcltdID0gW107XHJcbiAgICBpZiAoIWNoZWNrTmV3KSB7XHJcbiAgICAgICAgc3RhdGVDaGVja2VkID0gcHJvcHMudGFzay5wYXR0ZXJuSW5mby5tYXAoXHJcbiAgICAgICAgICAgIChjb250ZW50OiB7IHBhdHRlcm5JRDogbnVtYmVyOyBvcmRlcjogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LnBhdHRlcm5JRDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oc3RhdGVDaGVja2VkKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIC8vIOmFjeWIl+OCkuS9nOOBo+OBpumgheebruS4gOimp+OCkuS9nOOCi+OBquOCieOAgeOBneOBrumFjeWIl+OCkuS9v+OBo+OBpuS7peS4i+OBruWkieaVsOOBruWIneacn+ioreWumuOCguOChOOCiuOBn+OBhOOBqOOBk+OCjVxyXG4gICAgLy8g5pyA57WC55qE44Gr44Gv6aCF55uu5LiA6Kan44KCUmVkdXjjgafnrqHnkIbjgZfjgZ/jgYTjgILjgZ3jgozjgpLjgr/jgrnjgq/kuIDopqfjga7lj7PkuIrjgavooajnpLrjgZfjgZ/oqK3lrprjg5zjgr/jg7PjgYvjgonplovjgY/jg6Ljg7zjg4Djg6vjgadPTk9GRuOCkuioreWumuOBmeOCi+OBk+OBqOOBp+OAgeOCv+OCueOCr+ips+e0sOeUu+mdouOBp+S9v+OBhumgheebruOCkumBuOOBueOCi+OAguaWsOimj+eZu+mMsuaZguOCgk9O44Gr44Gq44Gj44Gm44GE44KL6aCF55uu44GM6KGo56S644GV44KM44KLXHJcbiAgICAvLyDjgr/jgrnjgq/oqbPntLDnlLvpnaLjgafjg5fjg6njgrnjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgonpoIXnm67jgpLlopfjgoTjgZvjgovjgILjgZ3jgozjgoLpoIXnm67kuIDopqfjgavkv53nrqHjgZXjgozjgovjgIJcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRUYXNrOiBuZXdUYXNrc1R5cGUgPSB7IFtcIui/veWKoFwiXTogXCLov73liqBcIiB9O1xyXG4gICAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSBSZWFjdC51c2VTdGF0ZShjb250ZW50c0xpc3QpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnNldE9wZW4oOTk5OSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgW2NvbnRlbnQubGFiZWxdOiBjb250ZW50LnZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcGF0dGVybkluZm86IHtcclxuICAgICAgICAgICAgcGF0dGVybklEOiBudW1iZXI7XHJcbiAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgfVtdO1xyXG5cclxuICAgICAgICBwYXR0ZXJuSW5mbyA9IGNoZWNrZWQubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Rhc2tzOiB0YXNrcyA9IHtcclxuICAgICAgICAgICAgZGV0YWlsOiBkZXRhaWxzLFxyXG4gICAgICAgICAgICBwYXR0ZXJuSW5mbzogcGF0dGVybkluZm8sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2godGFza1JlZ2lzdGVyKG5ld1Rhc2tzKSk7XHJcblxyXG4gICAgICAgIHByb3BzLnNldE9wZW4oOTk5OSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgLy8g44GT44GT44Gv6YWN5YiX44Gn566h55CG44GX44GmbWFw44Gn6KGo56S644GX44Gf44GE44Go44GT44KNXHJcbiAgICAvLyB0YXNr5Z6L44Gu5aSJ5pWw44KS55So5oSP44GX44Gm44CB44Gd44KM44Gr5YCk44KS5qC857SN44GZ44KLXHJcbiAgICAvLyDmlrDopo/jgaDjgaPjgZ/jgonnmbvpjLLjgIHjgZnjgafjgavjgYLjgovpoIXnm67jgafjgYLjgozjgbDmm7TmlrDjgZnjgovjgIJcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PlxyXG4gICAgICAgICAgICAgICAgcmVhY3QtdHJhbnNpdGlvbi1ncm91cFxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvcGVuPXtwcm9wcy5pbmRleCA9PSBwcm9wcy5vcGVufVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGYWRlIGluPXtwcm9wcy5pbmRleCA9PSBwcm9wcy5vcGVufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBWYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVJlZ2lzdGVyPXtoYW5kbGVSZWdpc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTmV3PXtjaGVja05ld31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtwcm9wcy5pbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzPXtjb250ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnRzPXtzZXRDb250ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGlkPVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg44K/44K544Kv6Kmz57Sw55S76Z2ie3Byb3BzLmluZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdC10cmFuc2l0aW9uLWdyb3VwIGFuaW1hdGVzIG1lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDjgZPjgZPjgpLopoHkv67mraPjgILjg5Hjgr/jg7zjg7Pjga/pgbjmip7lvI/jgafjga/jgYTjgZHjgarjgYTjgILopIfmlbDnmbvpjLLjgZnjgovlj6/og73mgKfjgYzjgYLjgovjgZ/jgoHjgILnmbvpjLLmuIjjgb/ku6XlpJbjga7jg6rjgrnjg4jjgpJmbGl0ZXLjgafkvZzmiJDjgZfjgabooajnpLrjgIHjgajjgYvjgYvjgarjgIIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8U2ltcGxlU2VsZWN0IGNob2ljZT17Y2hvaWNlfSBzZXRDaG9pY2U9e3NldENob2ljZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXR0ZXJuU3dpdGNoTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoZWNrZWQ9e3NldENoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJvcHMuaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50LmxhYmVsICsgXCJfXCIgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dE5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsPVwiaWYtdGhlbuODl+ODqeODs+ODi+ODs+OCsFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y29udGVudC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtwcm9wcy5pbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRJbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50cz17Y29udGVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb250ZW50cz17c2V0Q29udGVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgZ3JlZW4gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcbmltcG9ydCBTdmdJY29uLCB7IFN2Z0ljb25Qcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uXCI7XHJcbmltcG9ydCBBZGRDaXJjbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlXCI7XHJcbmltcG9ydCBUYXNrTW9kYWwgZnJvbSBcIi4vVGFza01vZGFsXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IGF1dG8gNXB4IGF1dG9cIixcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2tQbHVzSWNvbihwcm9wczogeyBudW06IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbbmV3T3Blbiwgc2V0TmV3T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSg5OTk5KTtcclxuICAgIGNvbnN0IHRhc2tBZGRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE5ld09wZW4ocHJvcHMubnVtKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QWRkQ2lyY2xlSWNvbiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gb25DbGljaz17dGFza0FkZEhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgIDxUYXNrTW9kYWwgb3Blbj17bmV3T3Blbn0gc2V0T3Blbj17c2V0TmV3T3Blbn0gaW5kZXg9e3Byb3BzLm51bX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBzdWJTZWNvbmRzIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjYWxlbmRhcixcclxuICAgIHBhdHRlcm4sXHJcbiAgICB0YXNrcyxcclxuICAgIHVzZXJUYXNrLFxyXG4gICAgdXNlclRhc2tJbmZvLFxyXG59IGZyb20gXCIuL3VzZXJUYXNrc1R5cGVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IHVzZXJUYXNrID0ge1xyXG4gICAgdXNlclRhc2tJbmZvOiB7XHJcbiAgICAgICAgY2FsZW5kYXI6IHtcclxuICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBPY3QgMjAyMCAwMjowMDowMFwiKS5nZXRGdWxsWWVhcigpXToge1xyXG4gICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBPY3QgMjAyMCAwMjowMDowMFwiKS5nZXRNb250aCgpICsgMV06IHtcclxuICAgICAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjMgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBhdHRlcm46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4xXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogMixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBcInRlc3RQYXR0ZXJuMlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCJkZWZhbHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCJkZWZhbHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCJkZWZhbHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCJkZWZhbHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuXHJcbi8vIGNvbnN0IGRpZmYgPSAob2xkczogYW55W10sIG5leHRzOiBhbnlbXSkgPT4gKHtcclxuLy8gICAgIGFkZHM6IG5leHRzLmZpbHRlcigoZSkgPT4gIW9sZHMuaW5jbHVkZXMoZSkpLFxyXG4vLyAgICAgc3Viczogb2xkcy5maWx0ZXIoKGUpID0+ICFuZXh0cy5pbmNsdWRlcyhlKSksXHJcbi8vIH0pO1xyXG5cclxuLy8g44OR44K/44O844Oz5pu05paw5pmC44Gr5pyq5p2l44Gr6Kit5a6a44GV44KM44Gm44GE44KL44OR44K/44O844Oz44Gu5YaF5a6544KS5pu05paw44GZ44KL44CCXHJcbi8vIOabtOaWsOWvvuixoeOBr3N0YXRlLmNhbGVuZGFyLnRhc2tzXHJcbi8vIOW5tOaciOaXpeOBjOacquadpeOBp+OBguOCiuOAgeOBi+OBpOOAgeODkeOCv+ODvOODs0lE44GM5ZCM44GY44KC44Gu44KS5a++6LGh44Gr5paw44GX44GE44OR44K/44O844Oz44KS55m76Yyy44GZ44KL44CCXHJcbmNvbnN0IGZ1dHVyZVBhdHRlcm5VcGRhdGUgPSAoc3RhdGU6IHVzZXJUYXNrLCB1cGRhdGVQYXR0ZXJuSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCI9PT09ZnV0dXJlUGF0dGVyblVwZGF0ZeOBk+OBk+OBi+OCiT09PT1cIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coT2JqZWN0LmtleXMoc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyKSk7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBub3dZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG5vd01vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBjb25zdCBub3dEYXRlID0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKFxyXG4gICAgICAgICAgICAodGFzaykgPT4gdGFzay5wYXR0ZXJuSUQgPT0gdXBkYXRlUGF0dGVybklkXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOODkeOCv+ODvOODs0lE44Gr57SQ5LuY44GP44K/44K544Kv5LiA6Kan44GL44KJ44Kr44Os44Oz44OA44O844G444Gu55m76Yyy5oOF5aCx44KS5oq95Ye644GZ44KL44CCXHJcbiAgICBjb25zdCB1cGRhdGVUYXNrcyA9IGNob2ljZVBhdHRlcm5UYXNrcy5tYXAoKHRhc2spID0+IHtcclxuICAgICAgICAvLyDjg5Hjgr/jg7zjg7PjgYzopIfmlbDnmbvpjLLjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgbjjga7lr77lv5zjgajjgZfjgabjgIHpgbjmip7jgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7NJROOBq+ipsuW9k+OBmeOCi+imgee0oOOBoOOBkeOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgIGNvbnN0IHRhc2tQYXR0ZXJuID0gdGFzay5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKHBhdHRlcm5JbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuSW5mby5wYXR0ZXJuSUQgPT0gdXBkYXRlUGF0dGVybklkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDphY3liJfjga7jgr/jgrnjgq/jgajmir3lh7rjgZfjgZ/jg5Hjgr/jg7zjg7Pmg4XloLHjgpLmlbTlvaLjgZfjgabov5TjgZnjgIJcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvcmRlcjogdGFza1BhdHRlcm5bMF0ub3JkZXIsXHJcbiAgICAgICAgICAgIGRldGFpbDogdGFzay5kZXRhaWwsXHJcbiAgICAgICAgICAgIC8vIGRldGFpbDI6IHRhc2suZGV0YWlsMixcclxuICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGtleU1vbnRoTGlzdCA9IChrZXlZZWFyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qga2V5RGF0ZUxpc3QgPSAoa2V5WWVhcjogc3RyaW5nLCBrZXlNb250aDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildW3BhcnNlSW50KGtleU1vbnRoKV1cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkYXRlVGFza1VwZGF0ZSA9IChcclxuICAgICAgICBrZXlZZWFyOiBzdHJpbmcsXHJcbiAgICAgICAga2V5TW9udGg6IHN0cmluZyxcclxuICAgICAgICBrZXlEYXRlOiBzdHJpbmdcclxuICAgICkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtwYXJzZUludChrZXlNb250aCldW1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5RGF0ZSlcclxuICAgICAgICAgICAgXS5QYXR0ZXJuSWQgPT0gdXBkYXRlUGF0dGVybklkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bcGFyc2VJbnQoa2V5TW9udGgpXVtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleURhdGUpXHJcbiAgICAgICAgICAgIF0udGFza3MgPSB1cGRhdGVUYXNrcztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT1kYXRlVGFza1VwZGF0ZT09PVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5WWVhcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleU1vbnRoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5RGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZVRhc2tzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHR5cGUgY2FsZW5kYXJQYXR0ZXJuID0ge1xyXG4gICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmbHVnOiBib29sZWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkaWZmID0gKG9sZHM6IGNhbGVuZGFyUGF0dGVybltdLCBuZXh0czogY2FsZW5kYXJQYXR0ZXJuW10pID0+ICh7XHJcbiAgICAgICAgYWRkczogbmV4dHMuZmlsdGVyKChlKSA9PiAhb2xkcy5pbmNsdWRlcyhlKSksXHJcbiAgICAgICAgc3Viczogb2xkcy5maWx0ZXIoKGUpID0+ICFuZXh0cy5pbmNsdWRlcyhlKSksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDnmbvpjLLjgZXjgozjgabjgYTjgovlubTjga7pgKPmg7PphY3liJfjga7jgq3jg7zjgpLlhajjgablj5blvpdcclxuICAgIGNvbnN0IGtleVllYXJzID0gT2JqZWN0LmtleXMoc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyKTtcclxuICAgIGtleVllYXJzLm1hcCgoa2V5WWVhcikgPT4ge1xyXG4gICAgICAgIGlmIChwYXJzZUludChrZXlZZWFyKSA9PSBub3dZZWFyKSB7XHJcbiAgICAgICAgICAgIC8vIOOCguOBl+S7iuW5tOOBoOOBo+OBn+OCieOAgeOBruWHpueQhlxyXG4gICAgICAgICAgICAvLyDnmbvpjLLjgZXjgozjgabjgYTjgovmnIjjga7pgKPmg7PphY3liJfjga7jgq3jg7zjgpLlhajjgablj5blvpdcclxuICAgICAgICAgICAgY29uc3Qga2V5TW9udGhzID0ga2V5TW9udGhMaXN0KGtleVllYXIpO1xyXG5cclxuICAgICAgICAgICAga2V5TW9udGhzLm1hcCgoa2V5TW9udGgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChrZXlNb250aCkgPT0gbm93TW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDjgoLjgZfku4rmnIjjgaDjgaPjgZ/jgolcclxuICAgICAgICAgICAgICAgICAgICAvLyDnmbvpjLLjgZXjgozjgabjgYTjgovml6Xjga7pgKPmg7PphY3liJfjga7jgq3jg7zjgpLlhajjgablj5blvpdcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlcyA9IGtleURhdGVMaXN0KGtleVllYXIsIGtleU1vbnRoKTtcclxuICAgICAgICAgICAgICAgICAgICBrZXlEYXRlcy5tYXAoKGtleURhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGtleURhdGUpID4gbm93RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44KC44GX5piO5pel5Lul6ZmN44Gg44Gj44Gf44KJ55m76Yyy5YaF5a6544KS5pu05paw44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGFza1VwZGF0ZShrZXlZZWFyLCBrZXlNb250aCwga2V5RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoa2V5RGF0ZSkgPT0gbm93RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44KC44GX5LuK5pel44Gg44Gj44Gf44KJ44CB5aSJ5pu05YiG44Gg44GR5Y+N5pig44GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlh6bnkIbmnKrkvZzmiJBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChrZXlNb250aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGtleURhdGUpXS5QYXR0ZXJuSWQgPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXR0ZXJuSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRpZmYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleVllYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoa2V5TW9udGgpXVtwYXJzZUludChrZXlEYXRlKV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50YXNrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGFza3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUFycmF5ID0gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChrZXlZZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoa2V5TW9udGgpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5RGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnN1YnMuc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdWIpID0+IHN1YiAhPSB0YXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGRzLm1hcCgoYWRkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5LnB1c2goYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChrZXlNb250aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGtleURhdGUpXS50YXNrcyA9IHVwZGF0ZUFycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGtleU1vbnRoKSA+IG5vd01vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g44KC44GX5p2l5pyI5Lul6ZmN44Gg44Gj44Gf44KJ44CB44GZ44G544Gm5pu05paw44GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZXMgPSBrZXlEYXRlTGlzdChrZXlZZWFyLCBrZXlNb250aCk7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5RGF0ZXMubWFwKChrZXlEYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUYXNrVXBkYXRlKGtleVllYXIsIGtleU1vbnRoLCBrZXlEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChrZXlZZWFyKSA+IG5vd1llYXIpIHtcclxuICAgICAgICAgICAgLy8g44KC44GX5p2l5bm05Lul6ZmN44Gg44Gj44Gf44KJ44CB44Gu5Yem55CG44CC5YWo44Gm5pu05paw44GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IGtleU1vbnRocyA9IGtleU1vbnRoTGlzdChrZXlZZWFyKTtcclxuICAgICAgICAgICAga2V5TW9udGhzLm1hcCgoa2V5TW9udGgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGVzID0ga2V5RGF0ZUxpc3Qoa2V5WWVhciwga2V5TW9udGgpO1xyXG4gICAgICAgICAgICAgICAga2V5RGF0ZXMubWFwKChrZXlEYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVRhc2tVcGRhdGUoa2V5WWVhciwga2V5TW9udGgsIGtleURhdGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiPT09PWZ1dHVyZVBhdHRlcm5VcGRhdGXjgZPjgZPjgb7jgac9PT09XCIpO1xyXG59O1xyXG5cclxuY29uc3QgdGFza3NNb2R1bGUgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInRhc2tzXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGluaXQoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dXNlclRhc2tJbmZvPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBkYXRhXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgLy8gc3RhdGUgPSB7Li4uZGF0YX07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pdCBzdGF0ZS51c2VyVGFza0luZm8g5YmNXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8pO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8gPSBkYXRhO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluaXQgc3RhdGUudXNlclRhc2tJbmZvIOW+jFwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJUYXNrPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIC4uLmRhdGEgfTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXRlJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFsbERlbGV0ZShzdGF0ZTogdXNlclRhc2spIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgYWxsRGVsZXRlXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gRGF5UGxhbuOBq+OBpuOCv+OCueOCr+OCkuOCr+ODquODg+OCr+OBl+OBn+mam+OBq+WujOS6huODleODqeOCsOOCknRydWXjgavlpInmm7TjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjgablubTjgIHmnIjjgIHml6XjgIHjgr/jgrnjgq/jga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLlj5fjgZHlj5bjgaPjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrQ2hlY2tDb21wbGV0ZShzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXJbXT4pIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3MuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgKHRhc2tzKSA9PiB0YXNrcy5vcmRlciA9PSBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bYWN0aW9uLnBheWxvYWRbMV1dW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMl1cclxuICAgICAgICAgICAgXS50YXNrc1tpbmRleF0uZmx1ZyA9ICFzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgICAgICBdW2FjdGlvbi5wYXlsb2FkWzFdXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3NbaW5kZXhdLmZsdWc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlvJXmlbDjga9zdGF0ZeOBqOW5tOOAgeaciOOAgeaXpeOAgemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44GuNOOBpOOBruaVsOWApOOBjOagvOe0jeOBleOCjOOBn+mFjeWIl1xyXG4gICAgICAgIGNhbGVuZGFyUGF0dGVyblJlZ2lzdGVyKFxyXG4gICAgICAgICAgICBzdGF0ZTogdXNlclRhc2ssXHJcbiAgICAgICAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXJbXT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gc3RhdGXjgYvjgonpgbjmip7jgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7NJROOBjOioreWumuOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCBjaG9pY2VQYXR0ZXJuVGFza3MgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGFzaykgPT4gdGFzay5wYXR0ZXJuSUQgPT0gYWN0aW9uLnBheWxvYWRbM11cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8g44OR44K/44O844OzSUTjgavntJDku5jjgY/jgr/jgrnjgq/kuIDopqfjgYvjgonjgqvjg6zjg7Pjg4Djg7zjgbjjga7nmbvpjLLmg4XloLHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgY29uc3QgVG9kYXlUYXNrcyA9IGNob2ljZVBhdHRlcm5UYXNrcy5tYXAoKHRhc2spID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOODkeOCv+ODvOODs+OBjOikh+aVsOeZu+mMsuOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OBuOOBruWvvuW/nOOBqOOBl+OBpuOAgemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44Gr6Kmy5b2T44GZ44KL6KaB57Sg44Gg44GR44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrUGF0dGVybiA9IHRhc2sucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mb1xyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5JbmZvLnBhdHRlcm5JRCA9PSBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOmFjeWIl+OBruOCv+OCueOCr+OBqOaKveWHuuOBl+OBn+ODkeOCv+ODvOODs+aDheWgseOCkuaVtOW9ouOBl+OBpui/lOOBmeOAglxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogdGFza1BhdHRlcm5bMF0ub3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB0YXNrLmRldGFpbCxcclxuICAgICAgICAgICAgICAgICAgICAvLyBkZXRhaWwyOiB0YXNrLmRldGFpbDIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOOBk+OBk+OBq+W5tOOBjOOBquOBi+OBo+OBn+aZguOBruWHpueQhuOCkuWKoOOBiOOCi1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMF0gaW4gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdGF0ZeOBrk1vbnRo44Gu6YCj5oOz6YWN5YiX44Gr5paw44GX44GE5pel5LuY44Gu6YCj5oOz6YWN5YiX44KS6L+95Yqg44GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICAvLyDov73liqDmg4XloLHjga/lvJXmlbDjga7ml6XjgajjgZPjgozjgb7jgafjga7lh6bnkIbjgafkvZzmiJDjgZfjgZ/jgqvjg6zjg7Pjg4Djg7znmbvpjLLnlKjmg4XloLFcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgICAgIF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZFsyXV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiBhY3Rpb24ucGF5bG9hZFszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFRvZGF5VGFza3MsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdGF0ZeOBrk1vbnRo44Gu6YCj5oOz6YWN5YiX44Gr5paw44GX44GE5pel5LuY44Gu6YCj5oOz6YWN5YiX44KS6L+95Yqg44GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICAvLyDov73liqDmg4XloLHjga/lvJXmlbDjga7ml6XjgajjgZPjgozjgb7jgafjga7lh6bnkIbjgafkvZzmiJDjgZfjgZ/jgqvjg6zjg7Pjg4Djg7znmbvpjLLnlKjmg4XloLFcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXSxcclxuICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMV1dOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZFsyXV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogYWN0aW9uLnBheWxvYWRbM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogVG9kYXlUYXNrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYWN0aW9uLnBheWxvYWRbM107XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsyXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OBruips+e0sOOCkuioreWumuOBmeOCi+WHpueQhuOAguW8leaVsOOBruODhuOCreOCueODiOmFjeWIl+OBq+OBr1vlhaXlipvlhoXlrrnjgIHpgKPmg7PphY3liJfjga7jgq3jg7zjgIHjgr/jgrnjgq/jga7phY3liJfjgpLmjIflrprjgZnjgovmlbDlrZdd44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza0RldGFpbFJlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQoYWN0aW9uLnBheWxvYWRbMl0pXS5kZXRhaWwgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQoYWN0aW9uLnBheWxvYWRbMl0pXS5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMV1dOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OCkui/veWKoOOBmeOCi+WHpueQhuOAguW8leaVsOOBruODhuOCreOCueODiOmFjeWIl+OBq+OBr1vlhaXlipvlhoXlrrnjgIHpgKPmg7PphY3liJfjga7jgq3jg7zjgIHjgr/jgrnjgq/jga7phY3liJfjgpLmjIflrprjgZnjgovmlbDlrZdd44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza1JlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHRhc2tzPikge1xyXG4gICAgICAgICAgICBjb25zdCByZWdpc3RlclRhc2sgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmVnaXN0ZXJUYXNrLnBhdHRlcm5JbmZvLm1hcCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IGNvbnRlbnQucGF0dGVybklEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQub3JkZXIgPSBjaG9pY2VQYXR0ZXJuVGFza3MubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlZ2lzdGVyVGFzayk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5wdXNoKHJlZ2lzdGVyVGFzayk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jga7jg5Hjgr/jg7zjg7PnmbvpjLLnirbms4HjgpLmm7TmlrDjgZnjgovjgIJcclxuICAgICAgICB0YXNrUGF0dGVyblVwZGF0ZShcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJUYXNrLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgICAgICAgICAgbmV3Q2hlY2tlZDogbnVtYmVyW107XHJcbiAgICAgICAgICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgICAgICAgICB9PlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyDjgZPjgZPjgafjgoTjgovjgZPjgajjga/vvJ9cclxuICAgICAgICAgICAgLy8g44G+44Ga5byV5pWw44Gr44K/44K544Kv44Gu6YWN5YiX44Kk44Oz44OH44OD44Kv44K555Wq5Y+344GM5b+F6KaBXHJcbiAgICAgICAgICAgIC8vIOODkeOCv+ODvOODs0lE44Gu6YWN5YiX44KS5Y+X44GR5Y+W44KL44CCXHJcbiAgICAgICAgICAgIC8vIOmFjeWIl+OBqHN0YXRl44KS5q+U6LyD44GX44Gm44CB44Gq44GR44KM44Gw55m76Yyy44CCT3JkZXLjga/mnIDlpKflgKQrMeOAgumAhuOBq+WJiumZpOOBleOCjOOBpuOBhOOCi+OCguOBruOBr+mZpOWkluOAglxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhdGVQYXR0ZXJuSWRMaXN0ID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgXS5wYXR0ZXJuSW5mby5tYXAoKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LnBhdHRlcm5JRDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGVQYXR0ZXJuSWRMaXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZVBhdHRlcm5JZExpc3QpO1xyXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gKG9sZHM6IG51bWJlcltdLCBuZXh0czogbnVtYmVyW10pID0+ICh7XHJcbiAgICAgICAgICAgICAgICBhZGRzOiBuZXh0cy5maWx0ZXIoKGUpID0+ICFvbGRzLmluY2x1ZGVzKGUpKSxcclxuICAgICAgICAgICAgICAgIHN1YnM6IG9sZHMuZmlsdGVyKChlKSA9PiAhbmV4dHMuaW5jbHVkZXMoZSkpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGlmZihzdGF0ZVBhdHRlcm5JZExpc3QsIGFjdGlvbi5wYXlsb2FkLm5ld0NoZWNrZWQpO1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlQXJyYXk6IHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgb3JkZXI6IG51bWJlcjtcclxuICAgICAgICAgICAgfVtdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGXjgYvjgonliYrpmaTlr77osaHjgpLpmaTlpJbjgZfjgZ/phY3liJfjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5ID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgICAgICBdLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZ1dHVyZVBhdHRlcm5VcGRhdGUoc3RhdGUsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnN1YnMuc29tZSgoc3ViKSA9PiBzdWIgIT0gY29udGVudC5wYXR0ZXJuSUQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVBcnJheSA9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW2FjdGlvbi5wYXlsb2FkLmluZGV4XS5wYXR0ZXJuSW5mbztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIxOnVwZGF0ZUFycmF5XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVBcnJheSk7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICByZXN1bHQuYWRkcy5tYXAoKGFkZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IE1heDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIOi/veWKoOOBleOCjOOBn0lE44GM6Kit5a6a44GV44KM44Gm44GE44KL44K/44K544Kv44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaG9pY2VQYXR0ZXJuVGFza3MgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGFza1BhdHRlcm5JbmZvKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuSW5mby5wYXR0ZXJuSUQgPT0gYWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBjaG9pY2VQYXR0ZXJuVGFza3MubWFwKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oq95Ye644GV44KM44Gf5ZCE44K/44K544Kv44Gu44OR44K/44O844OzSUTjgpLmr5TovIPjgZfjgIHmnIDlpKflgKTjgpLlj5blvpfjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHRhc2sucGF0dGVybkluZm8uZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGluZm8pID0+IGluZm8ucGF0dGVybklEID09IGFkZFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgTWF4IDwgY29udGVudC5wYXR0ZXJuSUQgPyAoTWF4ID0gY29udGVudC5wYXR0ZXJuSUQpIDogXCJcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHB1c2hDb250ZW50ID0geyBwYXR0ZXJuSUQ6IGFkZCwgb3JkZXI6IE1heCArIDEgfTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5LnB1c2gocHVzaENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgZnV0dXJlUGF0dGVyblVwZGF0ZShzdGF0ZSwgYWRkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjp1cGRhdGVBcnJheVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlQXJyYXkpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgXS5wYXR0ZXJuSW5mbyA9IHVwZGF0ZUFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44KS5YmK6Zmk44GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gv5YmK6Zmk5a++6LGh44K/44K544Kv44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+344GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza0RlbGV0ZShzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGRlbGV0ZVRhc2sgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3Muc3BsaWNlKFxyXG4gICAgICAgICAgICAvLyAgICAgYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIC8vICAgICAxXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCAhPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZVRhc2spO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3MgPSBkZWxldGVUYXNrO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44KS44OR44K/44O844Oz44GL44KJ6Zmk5aSW44GZ44KL5Yem55CG44CC5byV5pWw44Gu44Kq44OW44K444Kn44Kv44OI44Gr44Gv44OR44K/44O844OzSUTjgajliYrpmaTlr77osaHjgr/jgrnjgq/jga7lkI3np7DjgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrUmVtb3ZlUGF0dGVybihcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJUYXNrLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBwYXR0ZXJuSWQ6IG51bWJlcjsgZGV0YWlsVGl0bGU6IHN0cmluZyB9PlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maW5kSW5kZXgoKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmRldGFpbFtcIuOCv+OCueOCr+WQjVwiXSA9PSBhY3Rpb24ucGF5bG9hZC5kZXRhaWxUaXRsZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRUYXNrID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW1xyXG4gICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgXS5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LnBhdHRlcm5JRCAhPSBhY3Rpb24ucGF5bG9hZC5wYXR0ZXJuSWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbaW5kZXhdLnBhdHRlcm5JbmZvID0gZGVsZXRlZFRhc2s7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZWRUYXNrKTtcclxuICAgICAgICAgICAgLy8gZnV0dXJlUGF0dGVyblVwZGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjg5Hjgr/jg7zjg7PjgpLov73liqDjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/jg5Hjgr/jg7zjg7PlkI3np7DjgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICBwYXR0ZXJuUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBsZXQgTWF4SWQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuLm1hcCgocGF0dGVybkNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZCA+IE1heElkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoTWF4SWQgPSBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgYWRkUGF0dGVybiA9IHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogTWF4SWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybi5wdXNoKGFkZFBhdHRlcm4pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44OR44K/44O844Oz44KS5YmK6Zmk44GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gv44OR44K/44O844OzSUTjgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICBwYXR0ZXJuRGVsZXRlKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlUGF0dGVybkxpc3QgPSBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybi5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocGF0dGVybkNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybkNvbnRlbnQucGF0dGVybklkICE9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlUGF0dGVybkxpc3QpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybiA9IHVwZGF0ZVBhdHRlcm5MaXN0O1xyXG5cclxuICAgICAgICAgICAgLy8g44K/44K544Kv44Go44Kr44Os44Oz44OA44O844Gr5L+d566h44GV44KM44Gm44GE44KL44OR44K/44O844Oz44KS5YWo44Gm5YmK6Zmk44GZ44KL5b+F6KaB44GM44GC44KLXHJcbiAgICAgICAgICAgIC8vIOOCq+ODrOODs+ODgOODvOOBr+acquadpeWIhuOBoOOBkVxyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tz44Gr5L+d566h44GV44KM44Gm44GE44KL44OR44K/44O844Oz5oOF5aCx44KS5YmK6Zmk44GZ44KL44CCXHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVUYXNrTGlzdCA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5tYXAoKHRhc2spID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVBhdHRlcm5JbmZvID0gdGFzay5wYXR0ZXJuSW5mby5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKHRhc2tQYXR0ZXJuSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFza1BhdHRlcm5JbmZvLnBhdHRlcm5JRCAhPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlVGFzazoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29udGVudDogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybkluZm86IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVtdO1xyXG4gICAgICAgICAgICAgICAgfSA9IHsgZGV0YWlsOiB0YXNrLmRldGFpbCwgcGF0dGVybkluZm86IHVwZGF0ZVBhdHRlcm5JbmZvIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlVGFzaztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXI6dXBkYXRlVGFza0xpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZVRhc2tMaXN0KTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzID0gdXBkYXRlVGFza0xpc3Q7XHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXLjga7mnKrmnaXliIbjgavkv53nrqHjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7Pmg4XloLHjgpLliYrpmaTjgZnjgovjgIJcclxuICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBub3dZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm93TW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICAgICAgY29uc3Qgbm93RGF0ZSA9IHRvZGF5LmdldERhdGUoKTtcclxuICAgICAgICAgICAgY29uc3Qga2V5WWVhcnMgPSBPYmplY3Qua2V5cyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVDYWxlbmRhckRhdGUgPSAoXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBtb250aDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogc3RyaW5nXHJcbiAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KG1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoZGF0ZSldLlBhdHRlcm5JZCA9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KG1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoZGF0ZSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBrZXlZZWFycy5tYXAoKHllYXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleU1vbnRoID0gT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh5ZWFyKSA+IG5vd1llYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlr77osaHjgYzmnaXlubTku6XpmY3jgafjgYLjgovloLTlkIjjgIHliYrpmaTjgZnjgovjgIJkZWxldGXjga7jgbvjgYbjgYzjgYTjgYRcclxuICAgICAgICAgICAgICAgICAgICBrZXlNb250aC5tYXAoKG1vbnRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGUgPSBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQobW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleURhdGUubWFwKChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDYWxlbmRhckRhdGUoeWVhciwgbW9udGgsIGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoeWVhcikgPT0gbm93WWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWvvuixoeOBjOS7iuW5tOOBp+OBguOCi+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgICAgIGtleU1vbnRoLm1hcCgobW9udGgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZSA9IE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KG1vbnRoKSA+IG5vd01vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmnaXmnIjku6XpmY3jga7loLTlkIjjgIHliYrpmaTjgZnjgovjgIJkZWxldGXjga7jgbvjgYbjgYzjgYTjgYRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5RGF0ZS5tYXAoKGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDYWxlbmRhckRhdGUoeWVhciwgbW9udGgsIGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQobW9udGgpID09IG5vd01vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDku4rmnIjjga7loLTlkIhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleURhdGUubWFwKChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRhdGUpID4gbm93RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmmI7ml6Xku6XpmY3jga7loLTlkIjjgIHliYrpmaTjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FsZW5kYXJEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOODkeOCv+ODvOODs+WQjeensOOCkue3qOmbhuOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBr+ODkeOCv+ODvOODs0lE44Go44OR44K/44O844Oz5ZCN56ew44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgcGF0dGVybk5hbWVFZGl0KFxyXG4gICAgICAgICAgICBzdGF0ZTogdXNlclRhc2ssXHJcbiAgICAgICAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgICAgICAgICBlZGl0UGF0dGVybklkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9PlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBJROOBq+WQiOiHtOOBmeOCi+imgee0oOOBruOCpOODs+ODh+ODg+OCr+OCueeVquWPt+OCkuWPluW+l1xyXG4gICAgICAgICAgICBjb25zdCBlZGl0UGF0dGVybkluZGV4ID0gc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4uZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgKHBhdHRlcm5Db250ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZCA9PSBhY3Rpb24ucGF5bG9hZC5lZGl0UGF0dGVybklkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vIOWPluW+l+OBl+OBn+OCpOODs+ODh+ODg+OCr+OCueeVquWPt+OCkuebruWNsOOBq+OAgeW8leaVsOOBruaWsOOBl+OBhOWQjeensOOBp+abtOaWsOOBmeOCi+OAglxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybltlZGl0UGF0dGVybkluZGV4XS5wYXR0ZXJuTmFtZSA9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5wYXR0ZXJuTmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gICAgaW5pdCxcclxuICAgIFJlZ2lzdGVyLFxyXG4gICAgYWxsRGVsZXRlLFxyXG4gICAgdGFza0NoZWNrQ29tcGxldGUsXHJcbiAgICBjYWxlbmRhclBhdHRlcm5SZWdpc3RlcixcclxuICAgIHRhc2tEZXRhaWxSZWdpc3RlcixcclxuICAgIHRhc2tSZWdpc3RlcixcclxuICAgIHRhc2tQYXR0ZXJuVXBkYXRlLFxyXG4gICAgdGFza0RlbGV0ZSxcclxuICAgIHRhc2tSZW1vdmVQYXR0ZXJuLFxyXG4gICAgcGF0dGVyblJlZ2lzdGVyLFxyXG4gICAgcGF0dGVybkRlbGV0ZSxcclxuICAgIHBhdHRlcm5OYW1lRWRpdCxcclxufSA9IHRhc2tzTW9kdWxlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrc01vZHVsZTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgICB1c2VySWQ6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcbiAgICB1c2VySWQ6ICcnXHJcbn07XHJcblxyXG5jb25zdCB1c2VyTW9kdWxlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGxvZ2luKHN0YXRlOiBTdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJJZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJJZCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS51c2VySWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9nb3V0KHN0YXRlOiBTdGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nb3V0Jyk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJJZCA9ICcnXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGxvZ2luLCBsb2dvdXQgfSA9IHVzZXJNb2R1bGUuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJNb2R1bGU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5cclxuaW1wb3J0IFRhc2tMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZXcvVGFza0xpc3RcIjtcclxuaW1wb3J0IFJlc3BvbnNpdmVEcmF3ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlldy9SZXNwb25zaXZlRHJhd2VyXCI7XHJcbmltcG9ydCBGbG9hdGluZ0FjdGlvbkJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy92aWV3Ly9GbG9hdGluZ0FjdGlvbkJ1dHRvblwiO1xyXG5cclxuaW1wb3J0IExpc3RDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvZ2V0RGF0YVwiO1xyXG5pbXBvcnQgRm9ybUNvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy90ZXN0L2ZpcmViYXNlVGVzdC9Gb3JtQ29tcG9uZW50XCI7XHJcbmltcG9ydCBGaXJlYmFzZUF1dGhDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRmlyZWJhc2VBdXRoQ29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvd2l0aEF1dGgnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhc2tMaXN0OiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjkwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjQwcHhcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcblxyXG5jb25zdCBUYXNrcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIHsvKiAvLyA8Qm94PiAqL31cclxuICAgICAgICAgICAgey8qIDxCb3ggY29tcG9uZW50PVwic3BhblwiIG09ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PiAqL31cclxuICAgICAgICAgICAgPFJlc3BvbnNpdmVEcmF3ZXIgLz5cclxuICAgICAgICAgICAgey8qIDxEZW5zZUFwcEJhciAvPiAqL31cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMudGFza0xpc3R9PlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nQWN0aW9uQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPFRhc2tMaXN0IC8+ICovfVxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgey8qIDxUb29sdGlwIC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPFRvb2x0aXBzIG9uQ2xpY2s9e30vPiAqL31cclxuICAgICAgICAgICAgey8qIDxCb3R0b21OYXZpZ2F0aW9uIC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPC9Cb3g+ICovfVxyXG4gICAgICAgICAgICB7LyogPC9Cb3g+ICovfVxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy50YXNrTGlzdH0+XHJcbiAgICAgICAgICAgICAgICA8RmlyZWJhc2VBdXRoQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdENvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoVGFza3MpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Db21tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EYXRlUmFuZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0RpcmVjdGlvbnNSdW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZUNpcmNsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2RhdGFiYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=