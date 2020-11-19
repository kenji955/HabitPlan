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
/*! exports provided: useDatabase, useFetchAllData, useRegisterData, useUpdateData, useDelteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDatabase", function() { return useDatabase; });
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






// const useReduxFetch = () => {
//     const dispatch = useDispatch();
//     return dispatch;
// };
// カスタムフックにしておく
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
  // refを取得して
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
  const {
    userId
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const ref = _firebaseTest__WEBPACK_IMPORTED_MODULE_4__["firebase"].database().ref("/users/" + userId + "/tasks");
  const setDocument = useSetDocument(ref); // 登録済みのデータを全部取得する

  const {
    data: registeredData
  } = useFetchAllData(); // データを登録する関数を返却する
  // 可能であればここの処理はそのままにして、引数でsteteを更新する処理を先に行いたい

  const registerData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(registerData => {
    // () => {
    // console.log(userTaskInfo);
    // ここでReduxに保管しているstateを更新する？
    // dispatch(Register({ ...registerData }));
    // 既存のデータと登録するkey-valueを合わせて登録関数に渡す
    setDocument([...registeredData.tasks, registerData]); // setDocument(userTaskInfo.tasks);
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
  const {} = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.tasks)); // const { data } = useFetchAllData();

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
      lineNumber: 39,
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
    dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_8__["taskDetailRegister"])([event.target.value, 'タスク名', props.index]));
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
  }, __jsx(_InputNormal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: 'タスク名',
    required: false,
    index: props.index,
    contentIndex: props.contents.length - 1,
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
      lineNumber: 76,
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
    component: 'div',
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
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.tasks); // const onChangeHandler = (event: any) => {
  //     // console.log(event.target.value);
  //     // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成
  //     dispatch(
  //         taskDetailRegister([event.target.value, props.label, props.index])
  //     );
  // };
  // 新規登録か更新かをチェックする。新規であればTrue

  const checkNew = userTaskInfo.tasks.length < parseInt(props.index);

  const onBlurHandler = event => {
    console.log(props.label + '離れたぞ！！！');

    if (checkNew) {
      console.log(event.target.value);
      const contentsCopy = props.contents.slice();
      contentsCopy[props.contentIndex].value = event.target.value;
      props.setContents(contentsCopy);
    } else {
      console.log(event.target.value);
      dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_4__["taskDetailRegister"])([event.target.value, props.label, props.index]));
    }
  };

  const newTaskOnChangeHandler = event => {
    // console.log(event.target.value);
    // ここでevent.target.valueとラベル(連想配列のキー)を送って処理する。処理も未作成
    const contentsCopy = props.contents.slice();
    contentsCopy[props.contentIndex].value = event.target.value;
    props.setContents(contentsCopy);
  };

  let valueContent;

  if (checkNew) {
    return (// <form className={classes.root} noValidate autoComplete="off">
      __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
        required: true,
        id: "standard-basic",
        label: props.label // onChange={newTaskOnChangeHandler}
        ,
        onBlur: onBlurHandler,
        defaultValue: props.contents[props.contentIndex].value,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }) // </form>

    );
  } else if (props.required) {
    return (// <form className={classes.root} noValidate autoComplete="off">
      __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
        required: true,
        id: "standard-basic",
        label: props.label // onChange={onChangeHandler}
        ,
        onBlur: onBlurHandler,
        defaultValue: userTaskInfo.tasks[parseInt(props.index)].detail[props.label],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
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
    __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
        lineNumber: 118,
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
      onClick: patternRemoveHandler(task.detail['タスク名']),
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

    if (!props.checkNew) {
      dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_9__["taskPatternUpdate"])({
        newChecked,
        index
      }));
    }
  };

  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 24
      }
    }, "PatternList"),
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, userTaskInfo.pattern.map(content => {
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: content.patternName + '_' + props.checked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: content.patternId + "_" + content.patternName,
      primary: content.patternName,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
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
        lineNumber: 67,
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
/* harmony import */ var _settingMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settingMenu */ "./src/components/view/settingMenu.tsx");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/DateRange */ "@material-ui/icons/DateRange");
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/List */ "@material-ui/icons/List");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_DirectionsRun__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/DirectionsRun */ "@material-ui/icons/DirectionsRun");
/* harmony import */ var _material_ui_icons_DirectionsRun__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DirectionsRun__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\ResponsiveDrawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










 // import Link from '@material-ui/core/Link';











const drawerWidth = 240;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__["createStyles"])({
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
  settingButton: {
    margin: ' 0 0 0 auto'
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
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__["useTheme"])();
  const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const drawer = __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/DayPlan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    button: true,
    key: "Day Plan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_DirectionsRun__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Day Plan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/tasks",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    button: true,
    key: "Tasks",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Tasks",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/calendar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    button: true,
    key: "Calendar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Calendar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 25
    }
  })))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }));

  const container = window !== undefined ? () => window().document.body : undefined;
  return __jsx("div", {
    className: classes.rootd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    position: "fixed",
    className: classes.appBar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
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
      lineNumber: 147,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
    variant: "h6",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, "Habit Plan"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "end",
    onClick: handleClick,
    className: classes.settingButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  })), __jsx(_settingMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }))), __jsx("nav", {
    className: classes.drawer,
    "aria-label": "mailbox folders",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
    smUp: true,
    implementation: "css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
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
      lineNumber: 174,
      columnNumber: 21
    }
  }, drawer)), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
    xsDown: true,
    implementation: "css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
      lineNumber: 191,
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.choice == 0 && userTaskInfo.pattern.length > 0) {
      props.setChoice(userTaskInfo.pattern[0].patternId);
      console.log(userTaskInfo.pattern[0].patternId);
    }

    if (userTaskInfo.pattern.length == 0) {
      console.log('check length 0');
      props.setChoice(0);
    }
  }, []); // props.setChoice(userTaskInfo.pattern[0].patternId);

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
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.formControl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "demo-simple-select-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 106,
      columnNumber: 17
    }
  }, userTaskInfo.pattern.map((pattern, index) => {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: index + "_" + pattern.patternName,
      value: pattern.patternId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 32
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 108
      }
    }, pattern.patternName));
  }))), __jsx("div", {
    className: classes.icons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "primary",
    className: classes.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 126,
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
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "secondary",
    className: classes.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
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
      lineNumber: 136,
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
      lineNumber: 138,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
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
      lineNumber: 146,
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

  const deleteTaskHandler = () => () => {
    console.log("check deleteTaskHandler"); // dispatch(taskDelete(index));
  };

  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.roots,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, userTaskInfo.tasks.map((task, index) => {
    const labelId = `checkbox-list-label-${task.detail["testDetail1"]}`;
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: task.detail["title"] + ":" + index,
      role: undefined,
      dense: true,
      button: true,
      onClick: handleToggle(index),
      divider: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: labelId,
      primary: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
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
        lineNumber: 77,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
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
        lineNumber: 84,
        columnNumber: 33
      }
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
      edge: "end",
      "aria-label": "comments",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 37
      }
    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
      edge: "end",
      "aria-label": "RemoveCircle",
      onClick: handleClick(index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 33
      }
    }, __jsx(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {
      color: "secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
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
        lineNumber: 100,
        columnNumber: 33
      }
    })));
  }), __jsx(_taskPlus__WEBPACK_IMPORTED_MODULE_10__["default"], {
    num: userTaskInfo.tasks.length + 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
/* harmony import */ var _test_firebaseTest_DBFetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../test/firebaseTest/DBFetch */ "./src/components/test/firebaseTest/DBFetch.tsx");
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
}, {
  label: "タスク名",
  value: ""
}];
function TaskModal(props) {
  const classes = useStyles();
  const {
    userTaskInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.tasks);
  const updateData = Object(_test_firebaseTest_DBFetch__WEBPACK_IMPORTED_MODULE_10__["useUpdateData"])();
  const registerData = Object(_test_firebaseTest_DBFetch__WEBPACK_IMPORTED_MODULE_10__["useRegisterData"])();
  const checkNew = userTaskInfo.tasks.length < parseInt(props.index);
  let stateChecked = [];
  const renderContentsList = contentsList.filter(content => {
    return content.label != 'タスク名';
  });
  let setContentsList = contentsList;

  if (!checkNew) {
    stateChecked = props.task.patternInfo.map(content => {
      return content.patternID;
    });
    setContentsList = contentsList.filter(content => {
      return content.label != 'タスク名';
    });
  }

  const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(stateChecked);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])(); // 配列を作って項目一覧を作るなら、その配列を使って以下の変数の初期設定もやりたいところ
  // 最終的には項目一覧もReduxで管理したい。それをタスク一覧の右上に表示した設定ボタンから開くモーダルでONOFFを設定することで、タスク詳細画面で使う項目を選べる。新規登録時もONになっている項目が表示される
  // タスク詳細画面でプラスボタンを押したら項目を増やせる。それも項目一覧に保管される。
  // const defaultTask: newTasksType = { ["追加"]: "追加" };

  const [contents, setContents] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(setContentsList);

  const handleClose = () => {
    props.setOpen(9999);
  };

  async function HandleRegister() {
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
    await dispatch(Object(_modules_tasksModule__WEBPACK_IMPORTED_MODULE_9__["taskRegister"])(newTasks));
    console.log('==============check register=============='); // console.log(userTaskInfo);
    // const _sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    // await _sleep(5000);
    // console.log(userTaskInfo);
    // console.log(componentWillReceiveProps(nextProps));
    // registerData(newTasks);

    props.setOpen(9999);
  }

  ; // ここは配列で管理してmapで表示したいところ
  // task型の変数を用意して、それに値を格納する
  // 新規だったら登録、すでにある項目であれば更新する。

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    in: props.index == props.open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 21
    }
  }, __jsx(_AppVar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleRegister: HandleRegister,
    checkNew: checkNew,
    index: props.index,
    contents: contents,
    setContents: setContents,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  }), __jsx("h2", {
    id: "transition-modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }, "\u30BF\u30B9\u30AF\u8A73\u7D30\u753B\u9762", props.index + 1), __jsx("p", {
    id: "transition-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 25
    }
  }, "react-transition-group animates me."), __jsx(_PatternSwitch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    checked: checked,
    setChecked: setChecked,
    index: props.index,
    checkNew: checkNew,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 25
    }
  }), renderContentsList.map((content, index) => {
    return __jsx("div", {
      key: content.label + "_" + index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
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
        lineNumber: 206,
        columnNumber: 37
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 37
      }
    }));
  })))));
}

/***/ }),

/***/ "./src/components/view/settingMenu.tsx":
/*!*********************************************!*\
  !*** ./src/components/view/settingMenu.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return settingMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "@material-ui/icons/ExitToApp");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\components\\view\\settingMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const StyledMenu = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(props => __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
  elevation: 0,
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center'
  }
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
})));
const StyledMenuItem = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(theme => ({
  root: {//   color: theme.palette.common.white,
    // '&:focus': {
    // //   backgroundColor: theme.palette.primary.main,
    //   '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //     color: theme.palette.common.white,
    //   },
    // },
  }
}))(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a);
function settingMenu(props) {
  //   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  //   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorEl(event.currentTarget);
  //   };
  const handleClose = () => {
    console.log('check');
    props.setAnchorEl(null);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(StyledMenu, {
    id: "customized-menu",
    anchorEl: props.anchorEl // keepMounted
    ,
    open: Boolean(props.anchorEl),
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default.a, {
    primary: "\u30ED\u30B0\u30A2\u30A6\u30C8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }))));
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

/***/ "./src/modules/reducer.ts":
/*!********************************!*\
  !*** ./src/modules/reducer.ts ***!
  \********************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log('reducer ADD_TODO');
      return state + 1;

    case "TOGGLE_TODO":
      console.log('reducer ADD_TODO');

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/modules/rootReducer.ts":
/*!************************************!*\
  !*** ./src/modules/rootReducer.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tasksModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksModule */ "./src/modules/tasksModule.tsx");
/* harmony import */ var _userModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userModule */ "./src/modules/userModule.tsx");



const rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  tasks: _tasksModule__WEBPACK_IMPORTED_MODULE_1__["default"].reducer,
  user: _userModule__WEBPACK_IMPORTED_MODULE_2__["default"].reducer
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/modules/store.tsx":
/*!*******************************!*\
  !*** ./src/modules/store.tsx ***!
  \*******************************/
/*! exports provided: Stores, StoreProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stores", function() { return Stores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProvider", function() { return StoreProvider; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/modules/reducer.ts");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ "./src/modules/rootReducer.ts");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\modules\\store.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
const initialState = 0;
const Stores = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(initialState);
const StoreProvider = ({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useReducer(_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"], initialState);
  return __jsx(Stores.Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, " ", children, " ");
};
/* harmony default export */ __webpack_exports__["default"] = (store);

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
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/test/firebaseTest/firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  userId: '',
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

const DBCRUD = (pass, crud, updateDocument) => {
  const userId = _components_test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid;
  let refPass = '/' + pass;

  if (pass == '') {
    refPass = '';
  }

  const ref = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.database().ref("/users/" + userId + refPass);

  switch (crud) {
    case 'register':
      ref.set(updateDocument);
      break;

    case 'update':
      ref.update(updateDocument);
      break;

    case 'delete':
      ref.remove();
      break;
  }
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
      DBCRUD(`calendar/${action.payload[0]}/${action.payload[1]}/${action.payload[2]}/tasks/${index}`, 'update', state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[index]);
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
      }

      DBCRUD(`calendar/${action.payload[0]}/${action.payload[1]}/${action.payload[2]}`, 'update', state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]]);
      console.log(state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]]);
    },

    // タスクの詳細を設定する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
    taskDetailRegister(state, action) {
      state.userTaskInfo.tasks[parseInt(action.payload[2])].detail = _objectSpread(_objectSpread({}, state.userTaskInfo.tasks[parseInt(action.payload[2])].detail), {}, {
        [action.payload[1]]: action.payload[0]
      });
      DBCRUD(`tasks/${[parseInt(action.payload[2])]}/detail`, 'update', state.userTaskInfo.tasks[parseInt(action.payload[2])].detail);
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
      state.userTaskInfo.tasks = [...state.userTaskInfo.tasks, registerTask];
      DBCRUD('tasks', 'register', state.userTaskInfo.tasks);
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
          Max < content.order ? Max = content.order : "";
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
      DBCRUD(`tasks/${action.payload.index}/patternInfo`, 'register', updateArray);
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
      DBCRUD(`tasks`, 'register', deleteTask);
    },

    // タスクをパターンから除外する処理。引数のオブジェクトにはパターンIDと削除対象タスクの名称が格納されている。
    taskRemovePattern(state, action) {
      console.log(action.payload.detailTitle);
      const index = state.userTaskInfo.tasks.findIndex(content => {
        return content.detail["タスク名"] == action.payload.detailTitle;
      });
      console.log(index);
      const deletedTask = state.userTaskInfo.tasks[index].patternInfo.filter(function (content) {
        return content.patternID != action.payload.patternId;
      });
      state.userTaskInfo.tasks[index].patternInfo = deletedTask;
      console.log(deletedTask);
      DBCRUD(`tasks/${index}/patternInfo`, 'register', deletedTask); // futurePatternUpdate(state);
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
      state.userTaskInfo.pattern = [...state.userTaskInfo.pattern, addPattern];
      DBCRUD('pattern', 'register', state.userTaskInfo.pattern);
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
      DBCRUD('', 'register', state.userTaskInfo);
    },

    // パターン名称を編集する処理。引数にはパターンIDとパターン名称が格納されている。
    patternNameEdit(state, action) {
      // IDに合致する要素のインデックス番号を取得
      const editPatternIndex = state.userTaskInfo.pattern.findIndex(patternContent => patternContent.patternId == action.payload.editPatternId); // 取得したインデックス番号を目印に、引数の新しい名称で更新する。

      state.userTaskInfo.pattern[editPatternIndex].patternName = action.payload.patternName;
      DBCRUD(`pattern/${editPatternIndex}`, 'update', state.userTaskInfo.pattern[editPatternIndex]);
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_view_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/view/ResponsiveDrawer */ "./src/components/view/ResponsiveDrawer.tsx");
/* harmony import */ var _components_view_FloatingActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/view//FloatingActionButton */ "./src/components/view/FloatingActionButton.tsx");
/* harmony import */ var _components_test_firebaseTest_getData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/test/firebaseTest/getData */ "./src/components/test/firebaseTest/getData.tsx");
/* harmony import */ var _components_test_firebaseTest_FormComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/test/firebaseTest/FormComponent */ "./src/components/test/firebaseTest/FormComponent.tsx");
/* harmony import */ var _components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/test/firebaseTest/FirebaseAuthComponent */ "./src/components/test/firebaseTest/FirebaseAuthComponent.tsx");
/* harmony import */ var _components_shared_withAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/withAuth */ "./src/components/shared/withAuth.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/store */ "./src/modules/store.tsx");
/* harmony import */ var _components_test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/test/firebaseTest/firebaseTest */ "./src/components/test/firebaseTest/firebaseTest.tsx");
var _jsxFileName = "C:\\Users\\blelm\\Desktop\\AppCreate\\habitPlan\\src\\pages\\tasks.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
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
  const {
    state,
    dispatch
  } = react__WEBPACK_IMPORTED_MODULE_8___default.a.useContext(_modules_store__WEBPACK_IMPORTED_MODULE_9__["Stores"]);
  console.log(state);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useMemo"])(() => dispatch({
    type: "ADD_TODO"
  }), []);
  console.log(state);
  console.log('auth.currentUser.uid');
  console.log(_components_test_firebaseTest_firebaseTest__WEBPACK_IMPORTED_MODULE_10__["auth"].currentUser.uid);
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_components_view_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.taskList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(_components_view_FloatingActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.taskList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_components_test_firebaseTest_FirebaseAuthComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_getData__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx(_components_test_firebaseTest_FormComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_shared_withAuth__WEBPACK_IMPORTED_MODULE_7__["default"])(Tasks));

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

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

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

/***/ "@material-ui/icons/Settings":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvd2l0aEF1dGgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L0RCRmV0Y2gudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L0ZpcmViYXNlQXV0aENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvRm9ybUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC9maXJlYmFzZVRlc3QvZmlyZWJhc2VUZXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXN0L2ZpcmViYXNlVGVzdC9nZXREYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L0FwcFZhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9GbG9hdGluZ0FjdGlvbkJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9JbnB1dE5vcm1hbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9NZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L1BhdHRlcm5BZGRNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L1BhdHRlcm5EZWxldGVNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L1BhdHRlcm5FZGl0TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9QYXR0ZXJuTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9QYXR0ZXJuU3dpdGNoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L1Jlc3BvbnNpdmVEcmF3ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L1Rhc2tMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L1Rhc2tNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zZXR0aW5nTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy90YXNrUGx1cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yb290UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zdG9yZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VzZXJNb2R1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90YXNrcy50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NvbW1lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGF0ZVJhbmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RpcmVjdGlvbnNSdW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZUNpcmNsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZW5kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2RhdGFiYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInJlc29sdmVkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJ2YWx1ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwid2l0aEF1dGgiLCJzdGF0dXMiLCJjb21wb25lbnREaWRNb3VudCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImF1dGhVc2VyIiwic2V0U3RhdGUiLCJyZW5kZXJDb250ZW50IiwibG9nIiwicmVuZGVyIiwidXNlRGF0YWJhc2UiLCJ1c2VySWQiLCJ1c2VTZWxlY3RvciIsInVzZXIiLCJ1c2VNZW1vIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInVzZUZldGNoRGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNuYXBzaG90IiwidmFsIiwidXNlRmV0Y2hBbGxEYXRhIiwidXNlU2V0RG9jdW1lbnQiLCJ1cGRhdGVEb2N1bWVudCIsInVzZUNhbGxiYWNrIiwidXNlUmVnaXN0ZXJEYXRhIiwic2V0RG9jdW1lbnQiLCJyZWdpc3RlcmVkRGF0YSIsInJlZ2lzdGVyRGF0YSIsInRhc2tzIiwidXNlVXBkYXRlRG9jdW1lbnQiLCJ1cGRhdGUiLCJ1c2VVcGRhdGVEYXRhIiwidXBkYXRlRGF0YSIsInVzZVJlbW92ZURvY3VtZW50IiwiZGVsZXRlRG9jdW1lbnQiLCJyZW1vdmUiLCJ1c2VEZWx0ZURhdGEiLCJyZW1vdmVEb2N1bWVudCIsImRlbGV0ZURhdGEiLCJ1c2VSZWR1eEZldGNoIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZpcmViYXNlQXV0aENvbXBvbmVudCIsImxvZ2dlZGluIiwidXNlRmlyZWJhc2VMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInVzZVNpZ25PdXQiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJsb2dvdXQiLCJhbGxEZWxldGUiLCJzaWduT3V0Iiwic2V0TG9nZ2VkaW4iLCJ1c2VyVGFza0luZm8iLCJ1c2VySWRDaGVjayIsInVpZCIsIkZvcm1Db21wb25lbnQiLCJrZXlEYXRhIiwic2V0S2V5RGF0YSIsInZhbHVlRGF0YSIsInNldFZhbHVlRGF0YSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJMaXN0Q29tcG9uZW50IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93IiwicG9zaXRpb24iLCJ3aWR0aCIsInpJbmRleCIsInRpdGxlIiwiQnV0dG9uQXBwQmFyIiwiY2xhc3NlcyIsIm9uQ2hhbmdlSGFuZGxlciIsInRhc2tEZXRhaWxSZWdpc3RlciIsImluZGV4IiwiYnV0dG9uIiwiY2hlY2tOZXciLCJoYW5kbGVSZWdpc3RlciIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJUYWJQYW5lbCIsIm90aGVyIiwiYTExeVByb3BzIiwiaWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiYWxpZ25JdGVtcyIsImJhclNpemUiLCJkaXNwbGF5IiwibWFyZ2luIiwiU2Nyb2xsYWJsZVRhYnNCdXR0b25BdXRvIiwic2V0VmFsdWUiLCJjaG9pY2UiLCJzZXRDaG9pY2UiLCJOdW1iZXIiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZSIsInNwYWNpbmciLCJGb3JtUHJvcHNUZXh0RmllbGRzIiwib25CbHVySGFuZGxlciIsImxhYmVsIiwiY29udGVudHNDb3B5Iiwic2xpY2UiLCJjb250ZW50SW5kZXgiLCJuZXdUYXNrT25DaGFuZ2VIYW5kbGVyIiwidmFsdWVDb250ZW50IiwicmVxdWlyZWQiLCJkZXRhaWwiLCJTaW1wbGVNZW51IiwiaGFuZGxlQ2xpY2siLCJ0YXNrRGVsZXRlIiwiaGFuZGxlQ2xvc2UiLCJzZXRPcGVuTXVuZSIsImFuY2hvckVsIiwib3Blbk1lbnUiLCJmb3JtQ29udHJvbCIsIm1pbldpZHRoIiwic2VsZWN0RW1wdHkiLCJtYXJnaW5Ub3AiLCJwYXR0ZXJuIiwianVzdGlmeUNvbnRlbnQiLCJpY29uIiwiUGF0dGVybk1lbnUiLCJwYXR0ZXJuTmFtZSIsInNldFBhdHRlcm5OYW1lIiwiSGFuZGxlciIsInBhdHRlcm5FZGl0TWVudSIsInJvb3RzIiwibWF4V2lkdGgiLCJQYXR0ZXJuTGlzdCIsInBhdHRlcm5SZW1vdmVIYW5kbGVyIiwiZGV0YWlsVGl0bGUiLCJwYXR0ZXJuSWQiLCJ0YXNrUmVtb3ZlUGF0dGVybiIsImNob2ljZVBhdHRlcm5UYXNrcyIsImZpbHRlciIsInRhc2siLCJwYXR0ZXJuSW5mbyIsInNvbWUiLCJwYXR0ZXJuSUQiLCJtYXAiLCJ0YXNrUGF0dGVybiIsImxhYmVsSWQiLCJvcmRlciIsInVuZGVmaW5lZCIsIlBhdHRlcm5Td2l0Y2hMaXN0IiwiaGFuZGxlVG9nZ2xlIiwiY3VycmVudEluZGV4IiwiY2hlY2tlZCIsImluZGV4T2YiLCJuZXdDaGVja2VkIiwic3BsaWNlIiwic2V0Q2hlY2tlZCIsInRhc2tQYXR0ZXJuVXBkYXRlIiwiY29udGVudCIsImRyYXdlcldpZHRoIiwicm9vdGQiLCJkcmF3ZXIiLCJicmVha3BvaW50cyIsInVwIiwiZmxleFNocmluayIsImFwcEJhciIsIm1hcmdpbkxlZnQiLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzZXR0aW5nQnV0dG9uIiwidG9vbGJhciIsIm1peGlucyIsImRyYXdlclBhcGVyIiwicGFkZGluZyIsIlJlc3BvbnNpdmVEcmF3ZXIiLCJ1c2VUaGVtZSIsIm1vYmlsZU9wZW4iLCJzZXRNb2JpbGVPcGVuIiwic2V0QW5jaG9yRWwiLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJjdXJyZW50VGFyZ2V0IiwiY29udGFpbmVyIiwiYm9keSIsImRpcmVjdGlvbiIsImtlZXBNb3VudGVkIiwiaG9tZSIsImljb25zIiwiU2ltcGxlU2VsZWN0Iiwic2V0UGF0dGVybiIsInBhdHRlcm5BZGRIYW5kbGVyIiwicGF0dGVyblJlZ2lzdGVyIiwicGF0dGVybkRlbGV0ZUhhbmRsZXIiLCJwYXR0ZXJuRGVsZXRlIiwicGF0dGVybkVkaXRIYW5kbGVyIiwiZWRpdFBhdHRlcm5JZCIsInBhdHRlcm5OYW1lRWRpdCIsImJvcmRlciIsIkNoZWNrYm94TGlzdCIsIm9wZW4iLCJzZXRPcGVuIiwiZGVsZXRlVGFza0hhbmRsZXIiLCJjb21wb25lbnQiLCJtb2RhbCIsImhlaWdodCIsIm92ZXJmbG93WSIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJjb250ZW50c0xpc3QiLCJUYXNrTW9kYWwiLCJzdGF0ZUNoZWNrZWQiLCJyZW5kZXJDb250ZW50c0xpc3QiLCJzZXRDb250ZW50c0xpc3QiLCJIYW5kbGVSZWdpc3RlciIsImRldGFpbHMiLCJuZXdUYXNrcyIsInRhc2tSZWdpc3RlciIsIkJhY2tkcm9wIiwidGltZW91dCIsIlN0eWxlZE1lbnUiLCJ3aXRoU3R5bGVzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiU3R5bGVkTWVudUl0ZW0iLCJNZW51SXRlbSIsInNldHRpbmdNZW51IiwiQm9vbGVhbiIsIlRhc2tQbHVzSWNvbiIsIm5ld09wZW4iLCJzZXROZXdPcGVuIiwidGFza0FkZEhhbmRsZXIiLCJudW0iLCJyZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidGFza3NNb2R1bGUiLCJ1c2VyTW9kdWxlIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsIlN0b3JlcyIsImNyZWF0ZUNvbnRleHQiLCJTdG9yZVByb3ZpZGVyIiwidXNlUmVkdWNlciIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwiZmx1ZyIsImZ1dHVyZVBhdHRlcm5VcGRhdGUiLCJ1cGRhdGVQYXR0ZXJuSWQiLCJ0b2RheSIsIm5vd1llYXIiLCJub3dNb250aCIsIm5vd0RhdGUiLCJ1cGRhdGVUYXNrcyIsImtleU1vbnRoTGlzdCIsImtleVllYXIiLCJrZXlEYXRlTGlzdCIsImtleU1vbnRoIiwiZGF0ZVRhc2tVcGRhdGUiLCJrZXlEYXRlIiwiZGlmZiIsIm9sZHMiLCJuZXh0cyIsImFkZHMiLCJpbmNsdWRlcyIsInN1YnMiLCJrZXlZZWFycyIsImtleU1vbnRocyIsImtleURhdGVzIiwidXBkYXRlQXJyYXkiLCJhZGQiLCJEQkNSVUQiLCJwYXNzIiwiY3J1ZCIsImN1cnJlbnRVc2VyIiwicmVmUGFzcyIsImNyZWF0ZVNsaWNlIiwicmVkdWNlcnMiLCJpbml0IiwicGF5bG9hZCIsIlJlZ2lzdGVyIiwidGFza0NoZWNrQ29tcGxldGUiLCJmaW5kSW5kZXgiLCJjYWxlbmRhclBhdHRlcm5SZWdpc3RlciIsIlRvZGF5VGFza3MiLCJyZWdpc3RlclRhc2siLCJzdGF0ZVBhdHRlcm5JZExpc3QiLCJNYXgiLCJ0YXNrUGF0dGVybkluZm8iLCJmaW5kIiwiaW5mbyIsInB1c2hDb250ZW50IiwiZGVsZXRlVGFzayIsImRlbGV0ZWRUYXNrIiwiTWF4SWQiLCJwYXR0ZXJuQ29udGVudCIsImFkZFBhdHRlcm4iLCJ1cGRhdGVQYXR0ZXJuTGlzdCIsInVwZGF0ZVRhc2tMaXN0IiwidXBkYXRlUGF0dGVybkluZm8iLCJ1cGRhdGVUYXNrIiwiZGVsZXRlQ2FsZW5kYXJEYXRlIiwieWVhciIsIm1vbnRoIiwiZGF0ZSIsImVkaXRQYXR0ZXJuSW5kZXgiLCJhY3Rpb25zIiwibG9naW4iLCJ0YXNrTGlzdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nTGVmdCIsIlRhc2tzIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBZEosQ0FESjtBQXNCSCxDQXJDRDs7QUF1Q2V2VSwwSUFBUSxDQUFDMFUsS0FBRCxDQUF2QixFOzs7Ozs7Ozs7OztBQ3pFQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy90YXNrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL3Rhc2tzLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vdGVzdC9maXJlYmFzZVRlc3QvZmlyZWJhc2VUZXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoQXV0aChDb21wb25lbnQ6IGFueSkge1xyXG4gICAgLy8gY29uc3QgW3N0YXR1cyxzZXRTdGF0dXNdID0gdXNlU3RhdGUoJ0xPQURJTkcnKTtcclxuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIHtzdGF0dXM6IHN0cmluZ30+IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJMT0FESU5HXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKGF1dGhVc2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0aFVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcIlNJR05FRF9JTlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgc2V0U3RhdHVzKCdTSUdORURfSU4nKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzICA9IHRoaXMuc3RhdGUuc3RhdHVzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IFwiTE9BRElOR1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gPGgxPkxvYWRpbmcgLi4uLi4uPC9oMT47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09IFwiU0lHTkVEX0lOXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Pnt0aGlzLnJlbmRlckNvbnRlbnQoKX08Lz47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoQXV0aDtcclxuIiwiLy8g44OH44O844K/44OZ44O844K544G444Gu5o6l57aaXHJcblxyXG4vLyBpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG4vLyDoqo3oqLzlkajjgorjgoREQuWRqOOCiuOBp+W/heimgeOBquOBn+OCgWltcG9ydOOBl+OBpuOBiuOBj1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5cclxuaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tIFwiLi9maXJlYmFzZVRlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICB0YXNrcyxcclxuICAgIHVzZXJUYXNrSW5mbyxcclxufSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy91c2VyVGFza3NUeXBlXCI7XHJcblxyXG4vLyBjb25zdCB1c2VSZWR1eEZldGNoID0gKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4vLyAgICAgcmV0dXJuIGRpc3BhdGNoO1xyXG4vLyB9O1xyXG5cclxuLy8g44Kr44K544K/44Og44OV44OD44Kv44Gr44GX44Gm44GK44GPXHJcbmNvbnN0IHVzZURhdGFiYXNlID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgdXNlRGF0YWJhc2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgLy8gY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBjb25zdCBbdXNlcklkQ2hlY2ssIHNldHVzZXJJZENoZWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIC8vIGlmICh1c2VySWQgIT0gJycgJiYgdXNlcklkICE9IHVzZXJJZENoZWNrKXtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygndXNlcklkJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codXNlcklkKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnY2hlY2snKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhjaGVjayk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3VzZXJJZENoZWNrJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codXNlcklkQ2hlY2spO1xyXG4gICAgLy8gICAgIHNldHVzZXJJZENoZWNrKHVzZXJJZCk7XHJcbiAgICAvLyAgICAgc2V0Q2hlY2soIWNoZWNrKTtcclxuICAgIC8vIH1cclxuICAgICAgICAvLyDlkIzjgZjjg5Hjgrnjgafjga/mr47lm57lkIzjgZjntZDmnpzjgYzlvpfjgonjgozjgovjga7jgadtZW1v5YyW44GX44Gm44GK44GPXHJcbiAgICAgICAgLy8gcmV0dXJuIHVzZU1lbW8oKCkgPT4gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCIvc2FtcGxlXCIpLCBbXSk7XHJcbiAgICAgICAgLy8gY29uc3QgYXV0aFVzZXIgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XHJcbiAgICAgICAgLy8gaWYgKCEhdWlkKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh1c2VySWQgPT0gXCJcIikge1xyXG4gICAgICAgIC8vICAgICAgICAgZGlzcGF0Y2gobG9naW4odWlkLnVpZCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgc2V0Q2hlY2soXCJjaGVja1wiKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2tcIik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiREJGIDEgdXNlcklkXCIpO1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh1c2VySWQpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdXNlTWVtbygoKSA9PiBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcIi91c2Vycy9cIiArIHVzZXJJZCksIFtcclxuICAgICAgICAvLyAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAvLyAgICAgXSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyDjgZPjgZPjgYzljp/lm6DjgILjgZPjgZPjgad1c2VySWTlj5blvpflvozjgatyZWbjgpLmm7TmlrDjgafjgY3jgozjgbDjgYTjgYRcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRCRiAyIHVzZXJJZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJJZCk7XHJcbiAgICByZXR1cm4gdXNlTWVtbygoKSA9PiBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcIi91c2Vycy9cIiArIHVzZXJJZCksIFtcclxuICAgICAgICB1c2VySWQsXHJcbiAgICBdKTtcclxuICAgIC8vIHJldHVybiB1c2VNZW1vKCgpID0+IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwiL3VzZXJzL1wiICsgYXV0aFVzZXIudWlkKSwgW10pO1xyXG4gICAgLy8gfVxyXG59O1xyXG5cclxuLy8gICDjg4fjg7zjgr/jgpLlj5blvpfjgZnjgotcclxuLy8gaG9va3PjgpLkvb/jgYTjgZ/jgYTjga7jgafjgqvjgrnjgr/jg6Bob29rc+OBq+OBl+OBpuOBiuOBj1xyXG5jb25zdCB1c2VGZXRjaERhdGEgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPHVzZXJUYXNrSW5mbz4oKTtcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKCEhdXNlcklkKXtcclxuICAgICAgICAgICAgLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6L+95Yqg44GZ44KL44Gr44Gvb27jgpLkvb/jgYZcclxuICAgICAgICAgICAgcmVmLm9uKFwidmFsdWVcIiwgKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOODkeOCueOBq+WvvuOBmeOCi+WFqOODh+ODvOOCv+OCkuWQq+OCgHNuYXBzaG9044GM5rih44GV44KM44KLXHJcbiAgICAgICAgICAgICAgICAvLyDjgarjgYTloLTlkIjjga9udWxs44GM6L+U44KL44Gu44Gn5a2Y5Zyo44KS44OB44Kn44OD44Kv44GX44Gm44GK44GPXHJcbiAgICAgICAgICAgICAgICBpZiAoc25hcHNob3Q/LnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQkYgZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiREJGZXRjaCBkYXRhPT09PT09PT09PVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWYub2ZmKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIHJlZuOBruWkieabtOOBq+W/nOOBmOOBpuWGjeWPluW+l+OBmeOCi1xyXG4gICAgICAgICAgICAvLyAgIOaMh+WumuOBl+OBn+ODkeOCueOBruODh+ODvOOCv+OBq+WvvuOBmeOCi+abtOaWsOOCkuOBmeOBueOBpuaknOefpeOBmeOCi+OBq+OBr3ZhbHVl44KS5oyH5a6a44GZ44KM44Gw6Imv44GE44CCXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JlZl0pO1xyXG4gICAgLy8g44OH44O844K/44KS6L+U5Y2044GZ44KLXHJcbiAgICByZXR1cm4geyBkYXRhIH07XHJcbn07XHJcblxyXG4vLyDlrp/pmpvjgavlkbzjgbPlh7rjgZnpmpvjga/jgZPjgaHjgonjgpLkvb/jgYZcclxuY29uc3QgdXNlRmV0Y2hBbGxEYXRhID0gKCkgPT4ge1xyXG4gICAgLy8gcmVm44KS5Y+W5b6X44GX44GmXHJcbiAgICBjb25zdCByZWYgPSB1c2VEYXRhYmFzZSgpO1xyXG4gICAgY29uc29sZS5sb2coJ3JlZicpO1xyXG4gICAgY29uc29sZS5sb2cocmVmKTtcclxuICAgIC8vIHJlZua4oeOBl+OBpuODh+ODvOOCv+OCkuWPluW+l+OBmeOCi1xyXG4gICAgcmV0dXJuIHVzZUZldGNoRGF0YShyZWYpO1xyXG59O1xyXG5cclxuLy8g55m76Yyy5Yem55CGXHJcbi8vIOOBk+OBrueZu+mMsuOBr3NldOOBq+a4oeOBl+OBn+WApOOBp+OBrueZu+mMsuOBqOOBquOCi+OAglxyXG4vLyDjgaTjgb7jgorjgIHml6LlrZjjga7jg4fjg7zjgr/jgoLlkKvjgoHjgabmuKHjgZfjgabjgYLjgZLjgarjgYTjgajnmbvpjLLmuIjjgb/jga7jg4fjg7zjgr/jgYzmtojjgYjjgovjgIJcclxuY29uc3QgdXNlU2V0RG9jdW1lbnQgPSAocmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2UpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZURvY3VtZW50ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGRvY3VtZW50OiB1bmtub3duKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJlZuOBq+OBpOOBhOOBpuOBr+WJjeWbnuOBruiomOS6i+WPgueFp1xyXG4gICAgICAgICAgICAvLyBzZXTjgavnmbvpjLLjgZfjgZ/jgYTjg4fjg7zjgr/jgpLmuKHjgZfjgabjgYLjgZLjgozjgbDnmbvpjLLjgafjgY3jgotcclxuICAgICAgICAgICAgcmVmLnNldChkb2N1bWVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbcmVmXVxyXG4gICAgKTtcclxuICAgIHJldHVybiB1cGRhdGVEb2N1bWVudDtcclxufTtcclxuXHJcbmNvbnN0IHVzZVJlZ2lzdGVyRGF0YSA9ICgpID0+IHtcclxuICAgIC8vIOWJjeWbnuS9nOOBo+OBn3VzZURhdGFiYXNlKCnjgpLkvb/jgYRyZWblj5blvpdcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCByZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcIi91c2Vycy9cIiArIHVzZXJJZCArIFwiL3Rhc2tzXCIpO1xyXG4gICAgY29uc3Qgc2V0RG9jdW1lbnQgPSB1c2VTZXREb2N1bWVudChyZWYpO1xyXG4gICAgLy8g55m76Yyy5riI44G/44Gu44OH44O844K/44KS5YWo6YOo5Y+W5b6X44GZ44KLXHJcbiAgICBjb25zdCB7IGRhdGE6IHJlZ2lzdGVyZWREYXRhIH0gPSB1c2VGZXRjaEFsbERhdGEoKTtcclxuICAgIC8vIOODh+ODvOOCv+OCkueZu+mMsuOBmeOCi+mWouaVsOOCkui/lOWNtOOBmeOCi1xyXG5cclxuICAgIC8vIOWPr+iDveOBp+OBguOCjOOBsOOBk+OBk+OBruWHpueQhuOBr+OBneOBruOBvuOBvuOBq+OBl+OBpuOAgeW8leaVsOOBp3N0ZXRl44KS5pu05paw44GZ44KL5Yem55CG44KS5YWI44Gr6KGM44GE44Gf44GEXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAocmVnaXN0ZXJEYXRhOiB0YXNrcykgPT4ge1xyXG4gICAgICAgICAgICAvLyAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgICAgIC8vIOOBk+OBk+OBp1JlZHV444Gr5L+d566h44GX44Gm44GE44KLc3RhdGXjgpLmm7TmlrDjgZnjgovvvJ9cclxuICAgICAgICAgICAgLy8gZGlzcGF0Y2goUmVnaXN0ZXIoeyAuLi5yZWdpc3RlckRhdGEgfSkpO1xyXG4gICAgICAgICAgICAvLyDml6LlrZjjga7jg4fjg7zjgr/jgajnmbvpjLLjgZnjgotrZXktdmFsdWXjgpLlkIjjgo/jgZvjgabnmbvpjLLplqLmlbDjgavmuKHjgZlcclxuICAgICAgICAgICAgc2V0RG9jdW1lbnQoWyAuLi5yZWdpc3RlcmVkRGF0YS50YXNrcywgcmVnaXN0ZXJEYXRhIF0pO1xyXG4gICAgICAgICAgICAvLyBzZXREb2N1bWVudCh1c2VyVGFza0luZm8udGFza3MpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3NldERvY3VtZW50LCByZWdpc3RlcmVkRGF0YV1cclxuICAgICk7XHJcblxyXG4gICAgLy8g6L+U44GX44Gf6Zai5pWw44KS5Yip55So44GZ44KL44GT44Go44Gn44CB55m76Yyy5riI44G/44OH44O844K/5YWo44GmK+eZu+mMsuOBl+OBn+OBhOODh+ODvOOCv+OCkkRC44Gr5L+d566h44Gn44GN44KLXHJcbiAgICByZXR1cm4gcmVnaXN0ZXJEYXRhO1xyXG59O1xyXG5cclxuLy8g5pu05paw5Yem55CGXHJcbmNvbnN0IHVzZVVwZGF0ZURvY3VtZW50ID0gKHJlZjogZmlyZWJhc2UuZGF0YWJhc2UuUmVmZXJlbmNlKSA9PiB7XHJcbiAgICAvLyByZWYudXBkYXRl44GMT2JqZWN044KS5Y+X44GR5Y+W44KL44Gu44Gn44CBT2JqZWN044KS5byV5pWw44Gr5Y+W44KL6Zai5pWw44KS5a6a576pXHJcbiAgICBjb25zdCB1cGRhdGVEb2N1bWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChkb2N1bWVudDogT2JqZWN0KSA9PiByZWYudXBkYXRlKGRvY3VtZW50KSxcclxuICAgICAgICBbcmVmXVxyXG4gICAgKTtcclxuICAgIHJldHVybiB1cGRhdGVEb2N1bWVudDtcclxufTtcclxuXHJcbmNvbnN0IHVzZVVwZGF0ZURhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXTjga7mmYLjgajlkIzjgZjjgY9yZWbjgpLlj5blvpfjgZfjgabjgIFcclxuICAgIGNvbnN0IHJlZiA9IHVzZURhdGFiYXNlKCk7XHJcbiAgICAvLyDplqLmlbDlkbzjgbPlh7rjgZfjgaZcclxuICAgIGNvbnN0IHVwZGF0ZURvY3VtZW50ID0gdXNlVXBkYXRlRG9jdW1lbnQocmVmKTtcclxuICAgIC8vIOabtOaWsOWHpueQhuOCkuS9nOaIkOOBmeOCi1xyXG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChyZWdpc3RlckRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICAgICAgdXBkYXRlRG9jdW1lbnQocmVnaXN0ZXJEYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt1cGRhdGVEb2N1bWVudF1cclxuICAgICk7XHJcbiAgICByZXR1cm4gdXBkYXRlRGF0YTtcclxufTtcclxuXHJcbi8vIOWJiumZpOWHpueQhlxyXG5jb25zdCB1c2VSZW1vdmVEb2N1bWVudCA9IChyZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZSkgPT4ge1xyXG4gICAgLy8g54m544Gr5byV5pWw44GM5b+F6KaB44Gq44GE44Gu44Gn44Gf44Gg5ZG844Gz5Ye644GZ44Gu44G/XHJcbiAgICBjb25zdCBkZWxldGVEb2N1bWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChkb2N1bWVudDogc3RyaW5nKSA9PiByZWYuY2hpbGQoZG9jdW1lbnQpLnJlbW92ZSgpLFxyXG4gICAgICAgIFtyZWZdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRlbGV0ZURvY3VtZW50O1xyXG59O1xyXG4vLyBzZXTjgIF1cGRhdGXjgajlkIzjgZjjgarjga7jgaflibLmhJtcclxuY29uc3QgdXNlRGVsdGVEYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVmID0gdXNlRGF0YWJhc2UoKTtcclxuICAgIGNvbnN0IHJlbW92ZURvY3VtZW50ID0gdXNlUmVtb3ZlRG9jdW1lbnQocmVmKTtcclxuICAgIGNvbnN0IGRlbGV0ZURhdGEgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZGVsZXRlRGF0YTogc3RyaW5nKSA9PiByZW1vdmVEb2N1bWVudChkZWxldGVEYXRhKSxcclxuICAgICAgICBbcmVtb3ZlRG9jdW1lbnRdXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRlbGV0ZURhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgeyB1c2VEYXRhYmFzZSx1c2VGZXRjaEFsbERhdGEsIHVzZVJlZ2lzdGVyRGF0YSwgdXNlVXBkYXRlRGF0YSwgdXNlRGVsdGVEYXRhIH07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSBcIi4vZmlyZWJhc2VUZXN0XCI7XHJcbmltcG9ydCB7IGxvZ2luLCBsb2dvdXQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy91c2VyTW9kdWxlXCI7XHJcbmltcG9ydCB7IGluaXQsIGFsbERlbGV0ZSB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaEFsbERhdGEgfSBmcm9tIFwiLi9EQkZldGNoXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IHVzZVJlZHV4RmV0Y2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2g7XHJcbn07XHJcblxyXG4vLyDjg63jgrDjgqTjg7PjgIHjg63jgrDjgqLjgqbjg4jjg5zjgr/jg7Plrp/oo4VcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlyZWJhc2VBdXRoQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgbG9nZ2VkaW4gPSB1c2VGaXJlYmFzZUxvZ2luKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZVJlZHV4RmV0Y2goKTtcclxuICAgIGlmICghbG9nZ2VkaW4pIHtcclxuICAgICAgICAvLyDjg63jgrDjgqTjg7PjgZfjgabjgYTjgarjgZHjgozjgbDjg63jgrDjgqTjg7Pjg5zjgr/jg7PjgpLooajnpLpcclxuICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW5XaXRoUG9wdXAoKX0+44Ot44Kw44Kk44OzPC9idXR0b24+O1xyXG4gICAgfVxyXG4gICAgLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44KL44Gq44KJ44Ot44Kw44Ki44Km44OI44Oc44K/44Oz44KS6KGo56S6XHJcbiAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1c2VTaWduT3V0KGRpc3BhdGNoKX0+44Ot44Kw44Ki44Km44OIPC9idXR0b24+O1xyXG59XHJcblxyXG4vLyDjg63jgrDjgqTjg7Plh6bnkIZcclxuY29uc3Qgc2lnbkluV2l0aFBvcHVwID0gKCkgPT4ge1xyXG4gICAgLy8gR29vZ2xl44OX44Ot44OQ44Kk44OA44Kq44OW44K444Kn44Kv44OI44Gu44Kk44Oz44K544K/44Oz44K544KS5L2c5oiQXHJcbiAgICBjb25zdCBnb29nbGVBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuXHJcbiAgICAvLyBkaXNwYXRjaChsb2dpbih1c2VySWRDaGVjaykpO1xyXG4gICAgLy8g5Yil44K/44OW44Gn44Ot44Kw44Kk44Oz55S76Z2i44Gr6aOb44Gw44GX44Gf44GE44Gf44KB44CBc2lnbkluV2l0aFBvcHVw44KS5L2/44GGXHJcbiAgICAvLyDjg6rjg4DjgqTjg6zjgq/jg4jjgafjg63jgrDjgqTjg7PnlLvpnaLjgavpo5vjgbDjgZfjgZ/jgYTloLTlkIjjga9zaWduSW5XaXRoUmVkaXJlY3TjgpLkvb/jgYZcclxuICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKGdvb2dsZUF1dGhQcm92aWRlcik7XHJcbn07XHJcblxyXG4vLyDjg63jgrDjgqLjgqbjg4jlh6bnkIZcclxuY29uc3QgdXNlU2lnbk91dCA9IChkaXNwYXRjaDogRGlzcGF0Y2g8YW55PikgPT4ge1xyXG4gICAgLy8gc2lnbk91dOOCkuWRvOOBs+WHuuOBmeOBoOOBkeOBp09LXHJcbiAgICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZVJlZHV4RmV0Y2goKTtcclxuICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcclxuICAgIGRpc3BhdGNoKGFsbERlbGV0ZSgpKTtcclxuICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpO1xyXG59O1xyXG5cclxuLy8g44Ot44Kw44Kk44Oz44GX44Gm44GE44KL44GL44OB44Kn44OD44Kv44GZ44KL44Kr44K544K/44Og44OV44OD44Kv44KS5L2c44KLXHJcbmNvbnN0IHVzZUZpcmViYXNlTG9naW4gPSAoKSA9PiB7XHJcbiAgICAvLyBzdGF0ZeOBp+ODreOCsOOCpOODs+eKtuaFi+OCkuS/neaMgVxyXG4gICAgY29uc3QgW2xvZ2dlZGluLCBzZXRMb2dnZWRpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZVJlZHV4RmV0Y2goKTtcclxuXHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIOePvuWcqOODreOCsOOCpOODs+OBl+OBpuOBhOOCi+ODpuODvOOCtuOCkuWPluW+l1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgLy8g44Om44O844K25oOF5aCx44GM5Y+W44KM44KM44Gw44Ot44Kw44Kk44Oz54q25oWLXHJcbiAgICAgICAgICAgIGxldCB1c2VySWRDaGVjazogc3RyaW5nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRkFDICEhdXNlcicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyghIXVzZXIpO1xyXG4gICAgICAgICAgICBpZiAoISF1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWRDaGVjayA9IHVzZXIudWlkO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGEnKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2goaW5pdChkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRkFDIHVzZXJUYXNrSW5mby5jYWxlbmRhclswXS5QYXR0ZXJuSWQnKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJUYXNrSW5mby5jYWxlbmRhclswXS5QYXR0ZXJuSWQpO1xyXG4gICAgICAgICAgICAgICAgLy8g44GT44KM44KScmVkdXjjgafnrqHnkIbjgZnjgotcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKGxvZ2luKHVzZXJJZENoZWNrKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldExvZ2dlZGluKCEhdXNlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyDjg63jgrDjgqTjg7Pmg4XloLHjgpLov5TljbRcclxuICAgIHJldHVybiBsb2dnZWRpbjtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWdpc3RlckRhdGEsIHVzZVVwZGF0ZURhdGEsIHVzZURlbHRlRGF0YSB9IGZyb20gXCIuL0RCRmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1Db21wb25lbnQoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IHVzZVJlZ2lzdGVyRGF0YSgpO1xyXG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IHVzZVVwZGF0ZURhdGEoKTtcclxuICAgIGNvbnN0IGRlbGV0ZURhdGEgPSB1c2VEZWx0ZURhdGEoKTtcclxuXHJcbiAgICBjb25zdCBba2V5RGF0YSwgc2V0S2V5RGF0YV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gICAgY29uc3QgW3ZhbHVlRGF0YSwgc2V0VmFsdWVEYXRhXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICBLZXk6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXlEYXRhKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICBWYWx1ZTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVEYXRhKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZWdpc3RlckRhdGEoeyBba2V5RGF0YV06IHZhbHVlRGF0YSB9KX0+ICovfVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZWdpc3RlckRhdGEoeyBba2V5RGF0YV06IHZhbHVlRGF0YSB9KX0+ICovfVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZWdpc3RlckRhdGEoeyBba2V5RGF0YV06IHZhbHVlRGF0YSB9KX0+XHJcbiAgICAgICAgICAgICAgICDnmbvpjLJcclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwZGF0ZURhdGEoeyBba2V5RGF0YV06IHZhbHVlRGF0YSB9KX0+XHJcbiAgICAgICAgICAgICAgICDmm7TmlrBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlRGF0YShrZXlEYXRhKX0+S2V55oyH5a6a5YmK6ZmkPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbi8vIOiqjeiovOWRqOOCiuOChERC5ZGo44KK44Gn5b+F6KaB44Gq44Gf44KBaW1wb3J044GX44Gm44GK44GPXHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUJVU1VBa25oZTNJVVIwdVIwb2RXd1NDNWhmQW1NZ29ra1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJoYWJpdC1wbGFuLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9oYWJpdC1wbGFuLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiaGFiaXQtcGxhblwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJoYWJpdC1wbGFuLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzODk4MTAxNjY4MDhcIixcclxuICAgIGFwcElkOiBcIjE6Mzg5ODEwMTY2ODA4OndlYjowZjIyNWJhZGIzZGVhMDYzZmVmNzZkXCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctMDBYS0hLMkdZMlwiLFxyXG59O1xyXG5cclxuaWYgKGZpcmViYXNlLmFwcHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxufVxyXG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBkYXRhYmFzZSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbmV4cG9ydCB7IGZpcmViYXNlLCBhdXRoLCBkYXRhYmFzZSB9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8g6KqN6Ki85ZGo44KK44KERELlkajjgorjgaflv4XopoHjgarjgZ/jgoFpbXBvcnTjgZfjgabjgYrjgY9cclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdENvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IFtdID0gdXNlU3RhdGUoXHJcbiAgICAgICAgdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKVxyXG4gICAgKTtcclxuICAgIC8vIGNvbnN0IHsgZGF0YSB9ID0gdXNlRmV0Y2hBbGxEYXRhKCk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIC8vIC8vIGRhdGHjgpLlj5bjgaPjgabjgY/jgotcclxuICAgICAgLy8gaWYgKHVzZXJJZCAhPSAnJyAmJiAhIWRhdGEpIHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyh1c2VySWQpO1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiZ2V0RGF0YS50c3ggZGF0YVwiKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgLy8gICAvLyBzZXRVVCh1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpKTtcclxuICAgICAgLy8gICAvLyBkaXNwYXRjaChpbml0KGRhdGEpKTtcclxuICAgICAgLy8gfVxyXG4gICAgLy8gfSxbdXNlcklkXSk7XHJcbiAgICBcclxuICAgIC8vIOOBk+OBk+OBp3N0YXRl44KS5L2/44GG44Gq44KJ44Ot44Kw44Kk44Oz5pmC44GrRELjgYvjgonlj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpJSZWR1eOOBq+S/neeuoeOBmeOCi+W/heimgeOBjOOBguOCi+OAglxyXG4gICAgLy8gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgLy8gICAgIHVzZXJUYXNrID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuICAgIC8vIH0sIFt1c2VySWRdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImdldERhdGEgdXNlclRhc2tJbmZvXCIpO1xyXG4gICAgY29uc29sZS5sb2codXNlclRhc2tJbmZvKTtcclxuICAgIC8vIGRhdGEgPyBjb25zb2xlLmxvZyhkYXRhLnVzZXJUYXNrSW5mbykgOiBjb25zb2xlLmxvZygnbm9vJyk7XHJcbiAgICAvLyBvYmplY3TlvaLlvI/jgarjga7jgafkvb/jgYTjgoTjgZnjgYTjgojjgYbjgat7a2V5LCB2YWx1ZX3lvaLlvI/jga7jg6rjgrnjg4jjgavlpInmj5vjgZnjgotcclxuICAgIC8vIOOBvuOBn+OAgeODh+ODvOOCv+OBjOWkieOCj+OCieOBquOBhOmZkOOCiue1kOaenOOBr+WQjOOBmOOBquOBruOBp+ODoeODouWMluOBl+OBpuOBiuOBj1xyXG4gICAgLy8gY29uc3QgZGF0YUxpc3QgPSB1c2VNZW1vKCgpID0+IE9iamVjdC5lbnRyaWVzKGRhdGEgfHwge30pLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoeyBrZXksIHZhbHVlIH0pKSwgW2RhdGFdKTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj50ZXN0PC9kaXY+O1xyXG4gICAgLy8gcmV0dXJuIDxkaXY+e3VzZXJUYXNrSW5mby5jYWxlbmRhclswXS5QYXR0ZXJuSWR9PC9kaXY+O1xyXG4gICAgLy8gPGRsPntkYXRhTGlzdC5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PlxyXG4gICAgLy8gICA8UmVhY3QuRnJhZ21lbnQga2V5PXtgJHtrZXl9JHt2YWx1ZX1gfT5cclxuICAgIC8vICAgICA8ZHQ+a2V5OiB7a2V5fTwvZHQ+XHJcbiAgICAvLyAgICAgPGR0PnZhbHVlOiB7dmFsdWV9PC9kdD5cclxuICAgIC8vICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIC8vICl9PC9kbD5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgSW5wdXROIGZyb20gXCIuL0lucHV0Tm9ybWFsXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9yb290UmVkdWNlcic7XHJcbmltcG9ydCB7IHRhc2tEZXRhaWxSZWdpc3RlciB9IGZyb20gJy4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICB6SW5kZXg6IDUsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uQXBwQmFyKHByb3BzOiBhbnkpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIOOBk+OBk+OBp2V2ZW50LnRhcmdldC52YWx1ZeOBqOODqeODmeODqyjpgKPmg7PphY3liJfjga7jgq3jg7wp44KS6YCB44Gj44Gm5Yem55CG44GZ44KL44CC5Yem55CG44KC5pyq5L2c5oiQXHJcbiAgICBkaXNwYXRjaChcclxuICAgICAgdGFza0RldGFpbFJlZ2lzdGVyKFtldmVudC50YXJnZXQudmFsdWUsICfjgr/jgrnjgq/lkI0nLCBwcm9wcy5pbmRleF0pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGxldCBidXR0b247XHJcbiAgaWYgKHByb3BzLmNoZWNrTmV3KSB7XHJcbiAgICBidXR0b24gPSA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVJlZ2lzdGVyfT7nmbvpjLI8L0J1dHRvbj5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgey8qIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gKi99XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICB7LyogTmV3cyAqL31cclxuICAgICAgICAgICAgey8qIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuOCv+OCueOCr+WQjVwiIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnZGVzY3JpcHRpb24nIH19IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IHZhbHVlPXt1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbJ3RpdGxlJ119IC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLjgr/jgrnjgq/lkI1cIlxyXG4gICAgICAgICAgICBsYWJlbD17cHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICB1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbJ3RpdGxlJ11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXROXHJcbiAgICAgICAgICAgICAgbGFiZWw9eyfjgr/jgrnjgq/lkI0nfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBpbmRleD17cHJvcHMuaW5kZXh9XHJcbiAgICAgICAgICAgICAgY29udGVudEluZGV4PXtwcm9wcy5jb250ZW50cy5sZW5ndGgtMX1cclxuICAgICAgICAgICAgICBjb250ZW50cz17cHJvcHMuY29udGVudHN9XHJcbiAgICAgICAgICAgICAgc2V0Q29udGVudHM9e3Byb3BzLnNldENvbnRlbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAge3Byb3BzLmNoZWNrTmV3ID8gPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVSZWdpc3Rlcn0+55m76YyyPC9CdXR0b24+IDogbnVsbH1cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIjtcclxuaW1wb3J0IFRhYiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5cclxuaW1wb3J0IFBhdHRlcm5MaXN0IGZyb20gXCIuL1BhdHRlcm5MaXN0XCI7XHJcbmltcG9ydCBTaW1wbGVTZWxlY3QgZnJvbSBcIi4vU2VsZWN0XCI7XHJcbmltcG9ydCBUYXNrTGlzdCBmcm9tIFwiLi9UYXNrTGlzdFwiO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4vQ2FsZW5kYXJcIjtcclxuaW1wb3J0IENhbGVuZGFyMiBmcm9tIFwiLi4vdGVzdC9jYWxlbmRhclwiO1xyXG5pbXBvcnQgQ2FsZW5kYXIzIGZyb20gXCIuLi90ZXN0L0NhbGVuZGFyM1wiO1xyXG5pbXBvcnQgQ2FsZW5kYXI0IGZyb20gXCIuLi90ZXN0L2NhbGVuZGFyNC5qc3hcIjtcclxuXHJcbmludGVyZmFjZSBUYWJQYW5lbFByb3BzIHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgaW5kZXg6IGFueTtcclxuICAgIHZhbHVlOiBhbnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzOiBUYWJQYW5lbFByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcbiAgICAgICAgICAgIGlkPXtgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgc2Nyb2xsYWJsZS1hdXRvLXRhYi0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxyXG4gICAgICAgICAgICAgICAgPEJveCBwPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9eydkaXYnfT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXg6IGFueSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogYHNjcm9sbGFibGUtYXV0by10YWItJHtpbmRleH1gLFxyXG4gICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YCxcclxuICAgIH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgLy8gcGFkZGluZ1RvcDonNzBweCcsXHJcbiAgICAgICAgLy8gZGlzcGxheTonaW5saW5lLWJsb2NrJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIGJhclNpemU6IHtcclxuICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbGFibGVUYWJzQnV0dG9uQXV0bygpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY2hvaWNlLCBzZXRDaG9pY2VdID0gUmVhY3QudXNlU3RhdGUoTnVtYmVyKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHt9PiwgbmV3VmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPEFwcEJhclxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYXJTaXplfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNjcm9sbGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEJ1dHRvbnM9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2Nyb2xsYWJsZSBhdXRvIHRhYnMgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlRhc2tzXCIgey4uLmExMXlQcm9wcygwKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiUGF0dGVyblwiIHsuLi5hMTF5UHJvcHMoMSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MH0+XHJcbiAgICAgICAgICAgICAgICA8VGFza0xpc3QgLz5cclxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxyXG4gICAgICAgICAgICAgICAgPFNpbXBsZVNlbGVjdCBjaG9pY2U9e2Nob2ljZX0gc2V0Q2hvaWNlPXtzZXRDaG9pY2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8UGF0dGVybkxpc3QgY2hvaWNlPXtjaG9pY2V9IC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPFNpbXBsZVNlbGVjdCBjaG9pY2U9e2Nob2ljZX0gc2V0Q2hvaWNlPXtzZXRDaG9pY2V9Lz5cclxuICAgICAgICAgICAgICAgIDxDYWxlbmRhcjMgY2hvaWNlPXtjaG9pY2V9IC8+ICovfVxyXG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdGFza0RldGFpbFJlZ2lzdGVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy91c2VyVGFza3NUeXBlXCI7XHJcblxyXG50eXBlIG5ld1Rhc2tzVHlwZSA9IHtcclxuICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgcHJvcHMge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHJlcXVpcmVkOiBib29sZWFuO1xyXG4gICAgaW5kZXg6IHN0cmluZztcclxuICAgIGNvbnRlbnRJbmRleDogbnVtYmVyO1xyXG4gICAgY29udGVudHM6IHtcclxuICAgICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICB9W107XHJcbiAgICBzZXRDb250ZW50czogUmVhY3QuRGlzcGF0Y2g8XHJcbiAgICAgICAgUmVhY3QuU2V0U3RhdGVBY3Rpb248XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9W11cclxuICAgICAgICA+XHJcbiAgICA+O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICAgXCImIC5NdWlUZXh0RmllbGQtcm9vdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyNWNoXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtUHJvcHNUZXh0RmllbGRzKHByb3BzOiBwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICAvLyBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyAgICAgLy8g44GT44GT44GnZXZlbnQudGFyZ2V0LnZhbHVl44Go44Op44OZ44OrKOmAo+aDs+mFjeWIl+OBruOCreODvCnjgpLpgIHjgaPjgablh6bnkIbjgZnjgovjgILlh6bnkIbjgoLmnKrkvZzmiJBcclxuICAgIC8vICAgICBkaXNwYXRjaChcclxuICAgIC8vICAgICAgICAgdGFza0RldGFpbFJlZ2lzdGVyKFtldmVudC50YXJnZXQudmFsdWUsIHByb3BzLmxhYmVsLCBwcm9wcy5pbmRleF0pXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vIH07XHJcbiAgICAvLyDmlrDopo/nmbvpjLLjgYvmm7TmlrDjgYvjgpLjg4Hjgqfjg4Pjgq/jgZnjgovjgILmlrDopo/jgafjgYLjgozjgbBUcnVlXHJcbiAgICBjb25zdCBjaGVja05ldyA9IHVzZXJUYXNrSW5mby50YXNrcy5sZW5ndGggPCBwYXJzZUludChwcm9wcy5pbmRleCk7XHJcbiAgICBjb25zdCBvbkJsdXJIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5sYWJlbCArICfpm6LjgozjgZ/jgZ7vvIHvvIHvvIEnKVxyXG4gICAgICAgIGlmIChjaGVja05ldykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50c0NvcHkgPSBwcm9wcy5jb250ZW50cy5zbGljZSgpO1xyXG4gICAgICAgICAgICBjb250ZW50c0NvcHlbcHJvcHMuY29udGVudEluZGV4XS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q29udGVudHMoY29udGVudHNDb3B5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxSZWdpc3RlcihbZXZlbnQudGFyZ2V0LnZhbHVlLCBwcm9wcy5sYWJlbCwgcHJvcHMuaW5kZXhdKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBuZXdUYXNrT25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIC8vIOOBk+OBk+OBp2V2ZW50LnRhcmdldC52YWx1ZeOBqOODqeODmeODqyjpgKPmg7PphY3liJfjga7jgq3jg7wp44KS6YCB44Gj44Gm5Yem55CG44GZ44KL44CC5Yem55CG44KC5pyq5L2c5oiQXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRzQ29weSA9IHByb3BzLmNvbnRlbnRzLnNsaWNlKCk7XHJcbiAgICAgICAgY29udGVudHNDb3B5W3Byb3BzLmNvbnRlbnRJbmRleF0udmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIHByb3BzLnNldENvbnRlbnRzKGNvbnRlbnRzQ29weSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB2YWx1ZUNvbnRlbnQ7XHJcblxyXG4gICAgaWYgKGNoZWNrTmV3KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8gPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtuZXdUYXNrT25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcy5jb250ZW50c1twcm9wcy5jb250ZW50SW5kZXhdLnZhbHVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAvLyA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocHJvcHMucmVxdWlyZWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17b25CbHVySGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KHByb3BzLmluZGV4KV0uZGV0YWlsW3Byb3BzLmxhYmVsXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAvLyA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh1c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQocHJvcHMuaW5kZXgpXS5kZXRhaWxbcHJvcHMubGFiZWxdKSB7XHJcbiAgICAgICAgdmFsdWVDb250ZW50ID0gdXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KHByb3BzLmluZGV4KV0uZGV0YWlsW3Byb3BzLmxhYmVsXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsdWVDb250ZW50ID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcbiAgICAgICAgICAgIGxhYmVsPXtwcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgLy8gb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJIYW5kbGVyfVxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgdmFsdWVDb250ZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvLyB2YWx1ZT17XHJcbiAgICAgICAgLy8gICAgIHVzZXJUYXNrSW5mby50YXNrc1twYXJzZUludChwcm9wcy5pbmRleCldLmRldGFpbFtwcm9wcy5sYWJlbF1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAvLyA8L2Zvcm0+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB0YXNrRGVsZXRlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZSc7XHJcblxyXG50eXBlIFByb3BzID0geyBvcGVuTWVudTogbnVtYmVyLCBzZXRPcGVuTXVuZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sIGFuY2hvckVsOiBIVE1MRWxlbWVudCwgZGVsZXRlVGFza0hhbmRsZXI6IChpbmRleDogbnVtYmVyKSA9PiAoKSA9PiB2b2lkLCBpbmRleDogbnVtYmVyIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVNZW51KHByb3BzOiBQcm9wcykge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAvLyBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2godGFza0RlbGV0ZShwcm9wcy5pbmRleCkpO1xyXG4gICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIGNvbnNvbGUubG9nKCdkZWxldGUgY2hlY2sgY2xpY2snKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIC8vIHByb3BzLmRlbGV0ZVRhc2tIYW5kbGVyKHByb3BzLmluZGV4KTtcclxuICAgIHByb3BzLnNldE9wZW5NdW5lKDk5OTkpO1xyXG4gICAgY29uc29sZS5sb2coJ2RlbGV0ZSBjaGVjayBjbG9zZScpO1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMuaW5kZXgpO1xyXG4gIH07XHJcbiAgY29uc29sZS5sb2coJ2RlbGV0ZSBjaGVjayByZW5kZXInKTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5pbmRleCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogPEJ1dHRvbiBhcmlhLWNvbnRyb2xzPVwic2ltcGxlLW1lbnVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICBPcGVuIE1lbnVcclxuICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGlkPVwic2ltcGxlLW1lbnVcIlxyXG4gICAgICAgIGFuY2hvckVsPXtwcm9wcy5hbmNob3JFbH1cclxuICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgIC8vIG9wZW49e0Jvb2xlYW4ocHJvcHMuYW5jaG9yRWwpfVxyXG4gICAgICAgIG9wZW49e3Byb3BzLmluZGV4ID09IHByb3BzLm9wZW5NZW51fVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT7jgr/jgrnjgq/jgpLliYrpmaTjgZnjgos8L01lbnVJdGVtPlxyXG4gICAgICAgIHsvKiA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TG9nb3V0PC9NZW51SXRlbT4gKi99XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB0YXNrRGVsZXRlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG50eXBlIFByb3BzID0geyBvcGVuTWVudTogbnVtYmVyLCBzZXRPcGVuTXVuZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sIGFuY2hvckVsOiBIVE1MRWxlbWVudCwgSGFuZGxlcjogYW55LCBpbmRleDogbnVtYmVyIH07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIGZvcm1Db250cm9sOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgbWluV2lkdGg6IDEyMCxcclxuICAgIH0sXHJcbiAgICBzZWxlY3RFbXB0eToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgcGF0dGVybjoge1xyXG4gICAgICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBpY29uOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH1cclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF0dGVybk1lbnUocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbcGF0dGVybk5hbWUsIHNldFBhdHRlcm5OYW1lXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIC8vIGRpc3BhdGNoKHRhc2tEZWxldGUocHJvcHMuaW5kZXgpKTtcclxuICAgIHByb3BzLkhhbmRsZXIocGF0dGVybk5hbWUpO1xyXG4gICAgc2V0UGF0dGVybk5hbWUoJycpO1xyXG4gICAgaGFuZGxlQ2xvc2UoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgc2V0UGF0dGVybk5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIC8vIHByb3BzLmRlbGV0ZVRhc2tIYW5kbGVyKHByb3BzLmluZGV4KTtcclxuICAgIHByb3BzLnNldE9wZW5NdW5lKDk5OTkpO1xyXG4gIH07XHJcblxyXG4gIGxldCBwYXR0ZXJuRWRpdE1lbnUgPVxyXG4gICAgPGRpdj48VGV4dEZpZWxkXHJcbiAgICAgIGlkPVwicGF0dGVybkFkZE1lbnVcIlxyXG4gICAgICBsYWJlbD17J+aWsOimj+ODkeOCv+ODvOODs+WQjSd9XHJcbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgIHZhbHVlPXtwYXR0ZXJuTmFtZX1cclxuICAgIC8+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cInBhdHRlcm5BZGRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNlbmRJY29uIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDwvZGl2PjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhdHRlcm59PlxyXG4gICAgICB7LyogPEJ1dHRvbiBhcmlhLWNvbnRyb2xzPVwic2ltcGxlLW1lbnVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICBPcGVuIE1lbnVcclxuICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGlkPVwic2ltcGxlLW1lbnVcIlxyXG4gICAgICAgIGFuY2hvckVsPXtwcm9wcy5hbmNob3JFbH1cclxuICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgIC8vIG9wZW49e0Jvb2xlYW4ocHJvcHMuYW5jaG9yRWwpfVxyXG4gICAgICAgIG9wZW49e3Byb3BzLmluZGV4ID09IHByb3BzLm9wZW5NZW51fVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3BhdHRlcm5FZGl0TWVudX1cclxuICAgICAgICB7LyogPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD17J+ODkeOCv+ODvOODs+WQjSd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgdmFsdWU9e3BhdHRlcm5OYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZW5kSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj4gKi99XHJcblxyXG4gICAgICAgIHsvKiA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xpY2t9PuOCv+OCueOCr+OCkuWJiumZpOOBmeOCizwvTWVudUl0ZW0+ICovfVxyXG4gICAgICAgIHsvKiA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TG9nb3V0PC9NZW51SXRlbT4gKi99XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB0YXNrRGVsZXRlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy90YXNrc01vZHVsZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG50eXBlIFByb3BzID0geyBvcGVuTWVudTogbnVtYmVyLCBzZXRPcGVuTXVuZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sIGFuY2hvckVsOiBIVE1MRWxlbWVudCwgSGFuZGxlcjogYW55LCBpbmRleDogbnVtYmVyIH07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIGZvcm1Db250cm9sOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgbWluV2lkdGg6IDEyMCxcclxuICAgIH0sXHJcbiAgICBzZWxlY3RFbXB0eToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgcGF0dGVybjoge1xyXG4gICAgICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBpY29uOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH1cclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF0dGVybk1lbnUocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbcGF0dGVybk5hbWUsIHNldFBhdHRlcm5OYW1lXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIC8vIGRpc3BhdGNoKHRhc2tEZWxldGUocHJvcHMuaW5kZXgpKTtcclxuICAgIHByb3BzLkhhbmRsZXIocGF0dGVybk5hbWUpO1xyXG4gICAgc2V0UGF0dGVybk5hbWUoJycpO1xyXG4gICAgaGFuZGxlQ2xvc2UoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgc2V0UGF0dGVybk5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIC8vIHByb3BzLmRlbGV0ZVRhc2tIYW5kbGVyKHByb3BzLmluZGV4KTtcclxuICAgIHByb3BzLnNldE9wZW5NdW5lKDk5OTkpO1xyXG4gIH07XHJcbiAgbGV0IHBhdHRlcm5FZGl0TWVudSA9XHJcbiAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xpY2t9PuODkeOCv+ODvOODs+OCkuWJiumZpOOBmeOCizwvTWVudUl0ZW0+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGF0dGVybn0+XHJcbiAgICAgIHsvKiA8QnV0dG9uIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIE9wZW4gTWVudVxyXG4gICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXHJcbiAgICAgICAgYW5jaG9yRWw9e3Byb3BzLmFuY2hvckVsfVxyXG4gICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgLy8gb3Blbj17Qm9vbGVhbihwcm9wcy5hbmNob3JFbCl9XHJcbiAgICAgICAgb3Blbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbk1lbnV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgID5cclxuICAgICAgICB7cGF0dGVybkVkaXRNZW51fVxyXG4gICAgICAgIHsvKiA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPXsn44OR44K/44O844Oz5ZCNJ31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICB2YWx1ZT17cGF0dGVybk5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiY29tbWVudHNcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlbmRJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgey8qIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbGlja30+44K/44K544Kv44KS5YmK6Zmk44GZ44KLPC9NZW51SXRlbT4gKi99XHJcbiAgICAgICAgey8qIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TXkgYWNjb3VudDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Mb2dvdXQ8L01lbnVJdGVtPiAqL31cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHRhc2tEZWxldGUgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7IG9wZW5NZW51OiBudW1iZXIsIHNldE9wZW5NdW5lOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PiwgYW5jaG9yRWw6IEhUTUxFbGVtZW50LCBIYW5kbGVyOiBhbnksIGluZGV4OiBudW1iZXIgfTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgZm9ybUNvbnRyb2w6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICBtaW5XaWR0aDogMTIwLFxyXG4gICAgfSxcclxuICAgIHNlbGVjdEVtcHR5OiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICBwYXR0ZXJuOiB7XHJcbiAgICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGljb246IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfVxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXR0ZXJuTWVudShwcm9wczogUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtwYXR0ZXJuTmFtZSwgc2V0UGF0dGVybk5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgLy8gZGlzcGF0Y2godGFza0RlbGV0ZShwcm9wcy5pbmRleCkpO1xyXG4gICAgcHJvcHMuSGFuZGxlcihwYXR0ZXJuTmFtZSk7XHJcbiAgICBzZXRQYXR0ZXJuTmFtZSgnJyk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBzZXRQYXR0ZXJuTmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgLy8gcHJvcHMuZGVsZXRlVGFza0hhbmRsZXIocHJvcHMuaW5kZXgpO1xyXG4gICAgcHJvcHMuc2V0T3Blbk11bmUoOTk5OSk7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICBsZXQgcGF0dGVybkVkaXRNZW51ID1cclxuICAgIDxkaXY+PFRleHRGaWVsZFxyXG4gICAgICBpZD1cInBhdHRlcm5FZGl0TWVudVwiXHJcbiAgICAgIGxhYmVsPXsn44OR44K/44O844Oz5ZCNJ31cclxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgdmFsdWU9e3BhdHRlcm5OYW1lfVxyXG4gICAgLz5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwicGF0dGVybkFkZFwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgID5cclxuICAgICAgICA8U2VuZEljb24gLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgPC9kaXY+O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhdHRlcm59PlxyXG4gICAgICB7LyogPEJ1dHRvbiBhcmlhLWNvbnRyb2xzPVwic2ltcGxlLW1lbnVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICBPcGVuIE1lbnVcclxuICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGlkPVwic2ltcGxlLW1lbnVcIlxyXG4gICAgICAgIGFuY2hvckVsPXtwcm9wcy5hbmNob3JFbH1cclxuICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgIC8vIG9wZW49e0Jvb2xlYW4ocHJvcHMuYW5jaG9yRWwpfVxyXG4gICAgICAgIG9wZW49e3Byb3BzLmluZGV4ID09IHByb3BzLm9wZW5NZW51fVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3BhdHRlcm5FZGl0TWVudX1cclxuICAgICAgICB7LyogPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD17J+ODkeOCv+ODvOODs+WQjSd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgdmFsdWU9e3BhdHRlcm5OYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZW5kSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj4gKi99XHJcblxyXG4gICAgICAgIHsvKiA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xpY2t9PuOCv+OCueOCr+OCkuWJiumZpOOBmeOCizwvTWVudUl0ZW0+ICovfVxyXG4gICAgICAgIHsvKiA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TG9nb3V0PC9NZW51SXRlbT4gKi99XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NvbW1lbnRcIjtcclxuaW1wb3J0IFJlbW92ZUNpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9SZW1vdmVDaXJjbGVcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCI7XHJcbmltcG9ydCB7IHRhc2tSZW1vdmVQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgcm9vdHM6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogNzIwLFxyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXR0ZXJuTGlzdChwcm9wczogeyBjaG9pY2U6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuXHJcbiAgICAvLyDjg57jgqTjg4rjgrnjg5zjgr/jg7PjgYzjgq/jg6rjg4Pjgq/jgZXjgozjgZ/jgonjg5Hjgr/jg7zjg7PjgYvjgonlr77osaHjga7jgr/jgrnjgq/jgpLpmaTlpJbjgZnjgovjgIJcclxuICAgIGNvbnN0IHBhdHRlcm5SZW1vdmVIYW5kbGVyID0gKGRldGFpbFRpdGxlOnN0cmluZyk9PigpPT57XHJcbiAgICAgICAgY29uc3QgcGF0dGVybklkID1wcm9wcy5jaG9pY2U7XHJcbiAgICAgICAgZGlzcGF0Y2godGFza1JlbW92ZVBhdHRlcm4oe3BhdHRlcm5JZCxkZXRhaWxUaXRsZX0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDpgbjmip7jgZfjgZ/jg5Hjgr/jg7zjg7NJROOBjOioreWumuOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gdXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IHByb3BzLmNob2ljZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290c30+XHJcbiAgICAgICAgICAgIHtjaG9pY2VQYXR0ZXJuVGFza3MubWFwKCh0YXNrLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrUGF0dGVybiA9IHRhc2sucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mb1xyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5JbmZvLnBhdHRlcm5JRCA9PSBwcm9wcy5jaG9pY2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsSWQgPSBgY2hlY2tib3gtbGlzdC1sYWJlbC0ke1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuWzBdLnBhdHRlcm5JRCArIHRhc2tQYXR0ZXJuWzBdLm9yZGVyXHJcbiAgICAgICAgICAgICAgICB9YDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ucGF0dGVybklEICsgJ18nICsgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5bMF0ucGF0dGVybklEICsgdGFza1BhdHRlcm5bMF0ub3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCIgb25DbGljaz17cGF0dGVyblJlbW92ZUhhbmRsZXIodGFzay5kZXRhaWxbJ+OCv+OCueOCr+WQjSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bGFiZWxJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgJHt0YXNrLmRldGFpbFtcIuOCv+OCueOCr+WQjVwiXX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY29tbWVudHNcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIjtcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXJcIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoXCI7XHJcbmltcG9ydCBXaWZpSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1dpZmlcIjtcclxuaW1wb3J0IEJsdWV0b290aEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9CbHVldG9vdGhcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHRhc2tQYXR0ZXJuVXBkYXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdGFza3NNb2R1bGVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiAzNjAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF0dGVyblN3aXRjaExpc3QocHJvcHM6IHsgY2hlY2tlZDogbnVtYmVyW10sIHNldENoZWNrZWQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcltdPj4sIGluZGV4OiBudW1iZXIsIGNoZWNrTmV3OiBib29sZWFuIH0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHsgdXNlclRhc2tJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vIOOBk+OBk+OBp+ODkeOCv+ODvOODs+OBrueZu+mMsueKtuazgeOCkuabtOaWsOOBmeOCi1xyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKHZhbHVlOiBudW1iZXIpID0+ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBwcm9wcy5jaGVja2VkLmluZGV4T2YodmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IG5ld0NoZWNrZWQgPSBbLi4ucHJvcHMuY2hlY2tlZF07XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIG5ld0NoZWNrZWQucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3Q2hlY2tlZC5zcGxpY2UoY3VycmVudEluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3BzLnNldENoZWNrZWQobmV3Q2hlY2tlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25ld0NoZWNrZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdDaGVja2VkKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHByb3BzLmluZGV4O1xyXG4gICAgICAgIGlmICghcHJvcHMuY2hlY2tOZXcpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2godGFza1BhdHRlcm5VcGRhdGUoeyBuZXdDaGVja2VkLCBpbmRleCB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIHN1YmhlYWRlcj17PExpc3RTdWJoZWFkZXI+UGF0dGVybkxpc3Q8L0xpc3RTdWJoZWFkZXI+fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHt1c2VyVGFza0luZm8ucGF0dGVybi5tYXAoKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17Y29udGVudC5wYXR0ZXJuTmFtZSArICdfJyArIHByb3BzLmNoZWNrZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaWZpSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjb250ZW50LnBhdHRlcm5JZCArIFwiX1wiICsgY29udGVudC5wYXR0ZXJuTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2NvbnRlbnQucGF0dGVybk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlKGNvbnRlbnQucGF0dGVybklkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwcm9wcy5jaGVja2VkLmluZGV4T2YoY29udGVudC5wYXR0ZXJuSWQpICE9PSAtMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGNvbnRlbnQucGF0dGVybklkICsgXCJfXCIgKyBjb250ZW50LnBhdHRlcm5OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTZXR0aW5nTWVudSBmcm9tICcuL3NldHRpbmdNZW51JztcclxuXHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiO1xyXG5pbXBvcnQgRGF0ZVJhbmdlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RhdGVSYW5nZVwiO1xyXG5pbXBvcnQgTGlzdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MaXN0XCI7XHJcbmltcG9ydCBUdW5lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R1bmVcIjtcclxuaW1wb3J0IERpcmVjdGlvbnNSdW5JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGlyZWN0aW9uc1J1blwiO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcblxyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQge1xyXG4gICAgbWFrZVN0eWxlcyxcclxuICAgIHVzZVRoZW1lLFxyXG4gICAgVGhlbWUsXHJcbiAgICBjcmVhdGVTdHlsZXMsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHJvb3RkOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkcmF3ZXI6IHtcclxuICAgICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXBwQmFyOiB7XHJcbiAgICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXR0aW5nQnV0dG9uOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJyAwIDAgMCBhdXRvJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXHJcbiAgICAgICAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICAgICAgZHJhd2VyUGFwZXI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIEluamVjdGVkIGJ5IHRoZSBkb2N1bWVudGF0aW9uIHRvIHdvcmsgaW4gYW4gaWZyYW1lLlxyXG4gICAgICogWW91IHdvbid0IG5lZWQgaXQgb24geW91ciBwcm9qZWN0LlxyXG4gICAgICovXHJcbiAgICB3aW5kb3c/OiAoKSA9PiBXaW5kb3c7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3BvbnNpdmVEcmF3ZXIocHJvcHM6IFByb3BzKSB7XHJcbiAgICBjb25zdCB7IHdpbmRvdyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vYmlsZU9wZW4oIW1vYmlsZU9wZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZHJhd2VyID0gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9IC8+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9EYXlQbGFuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9XCJEYXkgUGxhblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpcmVjdGlvbnNSdW5JY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYXkgUGxhblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGFza3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT1cIlRhc2tzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlRhc2tzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvUGF0dGVyblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PVwiUGF0dGVyblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR1bmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF0dGVyblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9XCJDYWxlbmRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVSYW5nZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNhbGVuZGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9XHJcbiAgICAgICAgd2luZG93ICE9PSB1bmRlZmluZWQgPyAoKSA9PiB3aW5kb3coKS5kb2N1bWVudC5ib2R5IDogdW5kZWZpbmVkO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdGR9PlxyXG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGFiaXQgUGxhblxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdzSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ01lbnUgYW5jaG9yRWw9e2FuY2hvckVsfSBzZXRBbmNob3JFbD17c2V0QW5jaG9yRWx9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9IGFyaWEtbGFiZWw9XCJtYWlsYm94IGZvbGRlcnNcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBUaGUgaW1wbGVtZW50YXRpb24gY2FuIGJlIHN3YXBwZWQgd2l0aCBqcyB0byBhdm9pZCBTRU8gZHVwbGljYXRpb24gb2YgbGlua3MuICovfVxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiBzbVVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI9e2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcj17dGhlbWUuZGlyZWN0aW9uID09PSBcInJ0bFwiID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e21vYmlsZU9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZURyYXdlclRvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1vZGFsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkOiB0cnVlLCAvLyBCZXR0ZXIgb3BlbiBwZXJmb3JtYW5jZSBvbiBtb2JpbGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZHJhd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIHhzRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZHJhd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IFJlbW92ZUNpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9SZW1vdmVDaXJjbGVcIjtcclxuaW1wb3J0IEFkZENpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGVcIjtcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0VkaXQnO1xyXG5pbXBvcnQgeyBwYXR0ZXJuRGVsZXRlLCBwYXR0ZXJuTmFtZUVkaXQsIHBhdHRlcm5SZWdpc3RlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCBQYXR0ZXJuQWRkTWVudSBmcm9tICcuL1BhdHRlcm5BZGRNZW51JztcclxuaW1wb3J0IFBhdHRlcm5EZWxldGVNZW51IGZyb20gJy4vUGF0dGVybkRlbGV0ZU1lbnUnO1xyXG5pbXBvcnQgUGF0dGVybkVkaXRNZW51IGZyb20gJy4vUGF0dGVybkVkaXRNZW51JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgZm9ybUNvbnRyb2w6IHtcclxuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgICAgICBtaW5XaWR0aDogMTIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0RW1wdHk6IHtcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaG9tZToge1xyXG4gICAgICAgICAgICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb25zOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVTZWxlY3QocHJvcHM6IHsgY2hvaWNlOiBudW1iZXIsIHNldENob2ljZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj4gfSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW3BhdHRlcm4sIHNldFBhdHRlcm5dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuXHJcbiAgICBjb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NdW5lXSA9IFJlYWN0LnVzZVN0YXRlKDk5OTkpO1xyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdChcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jaG9pY2UgPT0gMCAmJiB1c2VyVGFza0luZm8ucGF0dGVybi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRDaG9pY2UodXNlclRhc2tJbmZvLnBhdHRlcm5bMF0ucGF0dGVybklkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJUYXNrSW5mby5wYXR0ZXJuWzBdLnBhdHRlcm5JZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHVzZXJUYXNrSW5mby5wYXR0ZXJuLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2sgbGVuZ3RoIDAnKTtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldENob2ljZSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtdXHJcbiAgICApO1xyXG5cclxuICAgIC8vIHByb3BzLnNldENob2ljZSh1c2VyVGFza0luZm8ucGF0dGVyblswXS5wYXR0ZXJuSWQpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogdW5rbm93biB9PikgPT4ge1xyXG4gICAgICAgIHNldFBhdHRlcm4oZXZlbnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZyk7XHJcbiAgICAgICAgcHJvcHMuc2V0Q2hvaWNlKGV2ZW50LnRhcmdldC52YWx1ZSBhcyBudW1iZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICh2YWx1ZTogbnVtYmVyKSA9PiAoZXZlbnQ6IHsgY3VycmVudFRhcmdldDogUmVhY3QuU2V0U3RhdGVBY3Rpb248SFRNTEVsZW1lbnQ+OyB9KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgc2V0T3Blbk11bmUodmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib3Blbk1lbnU6XCIgKyBvcGVuTWVudSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBhdHRlcm5BZGRIYW5kbGVyID0gKHBhdHRlcm5OYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdHRlcm50ZXN0IHBhdHRlcm5BZGRIYW5kbGVyXCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHBhdHRlcm5SZWdpc3RlcihwYXR0ZXJuTmFtZSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHBhdHRlcm5EZWxldGVIYW5kbGVyID0gKHBhdHRlcm5OYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAvLyDliYrpmaTmmYLjgIHmnKrmnaXjgavnmbvpjLLjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7Pjga/liYrpmaTjgZnjgovlv4XopoHjgYzjgYLjgotcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdHRlcm50ZXN0IHBhdHRlcm5EZWxldGVIYW5kbGVyXCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHBhdHRlcm5EZWxldGUocHJvcHMuY2hvaWNlKSk7XHJcbiAgICAgICAgcHJvcHMuc2V0Q2hvaWNlKDApO1xyXG4gICAgfTtcclxuICAgIC8vIOODkeOCv+ODvOODs+WQjeensOe3qOmbhueUqOWHpueQhuOAgumBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44Go5byV5pWw44Gn5Y+W5b6X44GX44Gf5paw44GX44GE5ZCN56ew44KSUmVkdXhBY3Rpb27jgbjpgKPmkLrjgZnjgovjgIJcclxuICAgIGNvbnN0IHBhdHRlcm5FZGl0SGFuZGxlciA9IChwYXR0ZXJuTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXR0ZXJudGVzdCBwYXR0ZXJuRWRpdEhhbmRsZXJcIik7XHJcbiAgICAgICAgY29uc3QgZWRpdFBhdHRlcm5JZCA9IHByb3BzLmNob2ljZTtcclxuICAgICAgICBkaXNwYXRjaChwYXR0ZXJuTmFtZUVkaXQoeyBlZGl0UGF0dGVybklkLCBwYXR0ZXJuTmFtZSB9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZX0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5QYXR0ZXJuPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgey8qIHZhbHVl44Gr44Gv6YG45oqe44GX44Gm44GE44KL6aCF55uu44GudmFsdWXjgYzoqK3lrprjgZXjgozjgosgKi99XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jaG9pY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlclRhc2tJbmZvLnBhdHRlcm4ubWFwKChwYXR0ZXJuLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIGtleT17aW5kZXggKyBcIl9cIiArIHBhdHRlcm4ucGF0dGVybk5hbWV9IHZhbHVlPXtwYXR0ZXJuLnBhdHRlcm5JZH0+PHNwYW4+e3BhdHRlcm4ucGF0dGVybk5hbWV9PC9zcGFuPjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbnN9PlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soMSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZENpcmNsZUljb24gY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UGF0dGVybkFkZE1lbnUgb3Blbk1lbnU9e29wZW5NZW51fSBzZXRPcGVuTXVuZT17c2V0T3Blbk11bmV9IGFuY2hvckVsPXthbmNob3JFbH0gSGFuZGxlcj17cGF0dGVybkFkZEhhbmRsZXJ9IGluZGV4PXsxfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrKDIpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UGF0dGVybkRlbGV0ZU1lbnUgb3Blbk1lbnU9e29wZW5NZW51fSBzZXRPcGVuTXVuZT17c2V0T3Blbk11bmV9IGFuY2hvckVsPXthbmNob3JFbH0gSGFuZGxlcj17cGF0dGVybkRlbGV0ZUhhbmRsZXJ9IGluZGV4PXsyfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrKDMpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxQYXR0ZXJuRWRpdE1lbnUgb3Blbk1lbnU9e29wZW5NZW51fSBzZXRPcGVuTXVuZT17c2V0T3Blbk11bmV9IGFuY2hvckVsPXthbmNob3JFbH0gSGFuZGxlcj17cGF0dGVybkVkaXRIYW5kbGVyfSBpbmRleD17M30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ29tbWVudFwiO1xyXG5pbXBvcnQgUmVtb3ZlQ2lyY2xlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZUNpcmNsZVwiO1xyXG5cclxuaW1wb3J0IFRhc2tNb2RhbCBmcm9tIFwiLi9UYXNrTW9kYWxcIjtcclxuaW1wb3J0IFRhc2tQbHVzIGZyb20gXCIuL3Rhc2tQbHVzXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvcm9vdFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgcm9vdHM6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogNzIwLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IGF1dG8gNXB4IGF1dG9cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveExpc3QoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSg5OTk5KTtcclxuICAgIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk11bmVdID0gUmVhY3QudXNlU3RhdGUoOTk5OSk7XHJcbiAgICBjb25zdCB7IHVzZXJUYXNrSW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzKTtcclxuXHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAodmFsdWU6IG51bWJlcikgPT4gKGV2ZW50OiB7XHJcbiAgICAgICAgY3VycmVudFRhcmdldDogUmVhY3QuU2V0U3RhdGVBY3Rpb248SFRNTEVsZW1lbnQ+O1xyXG4gICAgfSkgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIHNldE9wZW5NdW5lKHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW5NZW51OlwiICsgb3Blbk1lbnUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAodmFsdWU6IG51bWJlcikgPT4gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4odmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib3BlbjpcIiArIG9wZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrSGFuZGxlciA9ICgpID0+ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIGRlbGV0ZVRhc2tIYW5kbGVyXCIpO1xyXG4gICAgICAgIC8vIGRpc3BhdGNoKHRhc2tEZWxldGUoaW5kZXgpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdHN9PlxyXG4gICAgICAgICAgICB7dXNlclRhc2tJbmZvLnRhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsSWQgPSBgY2hlY2tib3gtbGlzdC1sYWJlbC0ke3Rhc2suZGV0YWlsW1widGVzdERldGFpbDFcIl19YDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFzay5kZXRhaWxbXCJ0aXRsZVwiXSArIFwiOlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGUoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2aWRlcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtsYWJlbElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9ezxzcGFuPnt0YXNrLmRldGFpbFtcIuOCv+OCueOCr+WQjVwiXX08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGVUeXBvZ3JhcGh5PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXt7Y29tcG9uZW50OidzcGFuJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYXNrTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzaz17dGFza31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cImVuZFwiIGFyaWEtbGFiZWw9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZW1vdmVDaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGljayhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5NZW51PXtvcGVuTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3Blbk11bmU9e3NldE9wZW5NdW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2tIYW5kbGVyPXtkZWxldGVUYXNrSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxUYXNrUGx1cyBudW09e3VzZXJUYXNrSW5mby50YXNrcy5sZW5ndGggKyAxfSAvPlxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIjtcclxuaW1wb3J0IElucHV0TiBmcm9tIFwiLi9JbnB1dE5vcm1hbFwiO1xyXG5pbXBvcnQgQXBwVmFyIGZyb20gXCIuL0FwcFZhclwiO1xyXG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGVcIjtcclxuaW1wb3J0IFBhdHRlcm5Td2l0Y2hMaXN0IGZyb20gXCIuL1BhdHRlcm5Td2l0Y2hcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHRhc2tSZWdpc3RlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tzTW9kdWxlXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHVzZVJlZ2lzdGVyRGF0YSwgdXNlVXBkYXRlRGF0YSB9IGZyb20gXCIuLi90ZXN0L2ZpcmViYXNlVGVzdC9EQkZldGNoXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgLy8gd2lkdGg6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgIzAwMFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5jb25zdCBjb250ZW50c0xpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiaWYtdGhlbuODl+ODqeODs+ODi+ODs+OCsFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLnv5LmhaPjga7nqY3jgb/kuIrjgZJcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi44OR44K/44O844OzXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuawl+OBjOmAsuOBvuOBquOBhOOBqOOBjVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLplbfmnJ/nmoTjgavopovov5Tjgorjga7jgYLjgovnv5LmhaPjga7ljbPmmYLnmoTjgarmpb3jgZfjgb9cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi55uu5qiZXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuWuiOOCjOOBquOBi+OBo+OBn+aZguOBrue9sOWJh1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLjg6zjg5njg6tcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6YG/44GR44KL44GT44Go44Gn5b6X44KJ44KM44KL44Oh44Oq44OD44OIXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuimi+i/lOOCiuOBruOBquOBhOe/kuaFo+OBq+WvvuOBmeOCi+WNs+aZgueahOOBqueXm+OBv1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogXCLjgr/jgrnjgq/lkI1cIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrTW9kYWwocHJvcHM6IGFueSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyB1c2VyVGFza0luZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcyk7XHJcbiAgICBjb25zdCB1cGRhdGVEYXRhID0gdXNlVXBkYXRlRGF0YSgpO1xyXG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gdXNlUmVnaXN0ZXJEYXRhKCk7XHJcblxyXG4gICAgY29uc3QgY2hlY2tOZXcgPSB1c2VyVGFza0luZm8udGFza3MubGVuZ3RoIDwgcGFyc2VJbnQocHJvcHMuaW5kZXgpO1xyXG4gICAgbGV0IHN0YXRlQ2hlY2tlZDogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IHJlbmRlckNvbnRlbnRzTGlzdCA9IGNvbnRlbnRzTGlzdC5maWx0ZXIoKGNvbnRlbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gY29udGVudC5sYWJlbCAhPSAn44K/44K544Kv5ZCNJ1xyXG4gICAgfSlcclxuICAgIGxldCBzZXRDb250ZW50c0xpc3QgPSBjb250ZW50c0xpc3Q7XHJcbiAgICBpZiAoIWNoZWNrTmV3KSB7XHJcbiAgICAgICAgc3RhdGVDaGVja2VkID0gcHJvcHMudGFzay5wYXR0ZXJuSW5mby5tYXAoXHJcbiAgICAgICAgICAgIChjb250ZW50OiB7IHBhdHRlcm5JRDogbnVtYmVyOyBvcmRlcjogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LnBhdHRlcm5JRDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0Q29udGVudHNMaXN0ID0gY29udGVudHNMaXN0LmZpbHRlcigoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGVudC5sYWJlbCAhPSAn44K/44K544Kv5ZCNJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oc3RhdGVDaGVja2VkKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIC8vIOmFjeWIl+OCkuS9nOOBo+OBpumgheebruS4gOimp+OCkuS9nOOCi+OBquOCieOAgeOBneOBrumFjeWIl+OCkuS9v+OBo+OBpuS7peS4i+OBruWkieaVsOOBruWIneacn+ioreWumuOCguOChOOCiuOBn+OBhOOBqOOBk+OCjVxyXG4gICAgLy8g5pyA57WC55qE44Gr44Gv6aCF55uu5LiA6Kan44KCUmVkdXjjgafnrqHnkIbjgZfjgZ/jgYTjgILjgZ3jgozjgpLjgr/jgrnjgq/kuIDopqfjga7lj7PkuIrjgavooajnpLrjgZfjgZ/oqK3lrprjg5zjgr/jg7PjgYvjgonplovjgY/jg6Ljg7zjg4Djg6vjgadPTk9GRuOCkuioreWumuOBmeOCi+OBk+OBqOOBp+OAgeOCv+OCueOCr+ips+e0sOeUu+mdouOBp+S9v+OBhumgheebruOCkumBuOOBueOCi+OAguaWsOimj+eZu+mMsuaZguOCgk9O44Gr44Gq44Gj44Gm44GE44KL6aCF55uu44GM6KGo56S644GV44KM44KLXHJcbiAgICAvLyDjgr/jgrnjgq/oqbPntLDnlLvpnaLjgafjg5fjg6njgrnjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgonpoIXnm67jgpLlopfjgoTjgZvjgovjgILjgZ3jgozjgoLpoIXnm67kuIDopqfjgavkv53nrqHjgZXjgozjgovjgIJcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRUYXNrOiBuZXdUYXNrc1R5cGUgPSB7IFtcIui/veWKoFwiXTogXCLov73liqBcIiB9O1xyXG4gICAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSBSZWFjdC51c2VTdGF0ZShzZXRDb250ZW50c0xpc3QpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnNldE9wZW4oOTk5OSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIEhhbmRsZVJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGxldCBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgW2NvbnRlbnQubGFiZWxdOiBjb250ZW50LnZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcGF0dGVybkluZm86IHtcclxuICAgICAgICAgICAgcGF0dGVybklEOiBudW1iZXI7XHJcbiAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgfVtdO1xyXG5cclxuICAgICAgICBwYXR0ZXJuSW5mbyA9IGNoZWNrZWQubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Rhc2tzOiB0YXNrcyA9IHtcclxuICAgICAgICAgICAgZGV0YWlsOiBkZXRhaWxzLFxyXG4gICAgICAgICAgICBwYXR0ZXJuSW5mbzogcGF0dGVybkluZm8sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2godGFza1JlZ2lzdGVyKG5ld1Rhc2tzKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09Y2hlY2sgcmVnaXN0ZXI9PT09PT09PT09PT09PScpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgLy8gY29uc3QgX3NsZWVwID0gKG1zOiBudW1iZXIpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICAgICAgLy8gYXdhaXQgX3NsZWVwKDUwMDApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyByZWdpc3RlckRhdGEobmV3VGFza3MpO1xyXG5cclxuICAgICAgICBwcm9wcy5zZXRPcGVuKDk5OTkpO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIC8vIOOBk+OBk+OBr+mFjeWIl+OBp+euoeeQhuOBl+OBpm1hcOOBp+ihqOekuuOBl+OBn+OBhOOBqOOBk+OCjVxyXG4gICAgLy8gdGFza+Wei+OBruWkieaVsOOCkueUqOaEj+OBl+OBpuOAgeOBneOCjOOBq+WApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgLy8g5paw6KaP44Gg44Gj44Gf44KJ55m76Yyy44CB44GZ44Gn44Gr44GC44KL6aCF55uu44Gn44GC44KM44Gw5pu05paw44GZ44KL44CCXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVPcGVufT5cclxuICAgICAgICAgICAgICAgIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG4gICAgICAgICAgICAgICAgb3Blbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RmFkZSBpbj17cHJvcHMuaW5kZXggPT0gcHJvcHMub3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwVmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZWdpc3Rlcj17SGFuZGxlUmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja05ldz17Y2hlY2tOZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJvcHMuaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50cz17Y29udGVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb250ZW50cz17c2V0Q29udGVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOOCv+OCueOCr+ips+e0sOeUu+mdontwcm9wcy5pbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3QtdHJhbnNpdGlvbi1ncm91cCBhbmltYXRlcyBtZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog44GT44GT44KS6KaB5L+u5q2j44CC44OR44K/44O844Oz44Gv6YG45oqe5byP44Gn44Gv44GE44GR44Gq44GE44CC6KSH5pWw55m76Yyy44GZ44KL5Y+v6IO95oCn44GM44GC44KL44Gf44KB44CC55m76Yyy5riI44G/5Lul5aSW44Gu44Oq44K544OI44KSZmxpdGVy44Gn5L2c5oiQ44GX44Gm6KGo56S644CB44Go44GL44GL44Gq44CCICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFNpbXBsZVNlbGVjdCBjaG9pY2U9e2Nob2ljZX0gc2V0Q2hvaWNlPXtzZXRDaG9pY2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGF0dGVyblN3aXRjaExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGVja2VkPXtzZXRDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3Byb3BzLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tOZXc9e2NoZWNrTmV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyQ29udGVudHNMaXN0Lm1hcCgoY29udGVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvbnRlbnQubGFiZWwgKyBcIl9cIiArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWw9XCJpZi10aGVu44OX44Op44Oz44OL44Oz44KwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb250ZW50LmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3Byb3BzLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzPXtjb250ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnRzPXtzZXRDb250ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IE1lbnUsIHsgTWVudVByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveCc7XHJcbmltcG9ydCBEcmFmdHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EcmFmdHMnO1xyXG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQnO1xyXG5pbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwJztcclxuXHJcbmNvbnN0IFN0eWxlZE1lbnUgPSB3aXRoU3R5bGVzKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkM2Q0ZDUnLFxyXG4gICAgfSxcclxufSkoKHByb3BzOiBNZW51UHJvcHMpID0+IChcclxuICAgIDxNZW51XHJcbiAgICAgICAgZWxldmF0aW9uPXswfVxyXG4gICAgICAgIGdldENvbnRlbnRBbmNob3JFbD17bnVsbH1cclxuICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuKSk7XHJcblxyXG5jb25zdCBTdHlsZWRNZW51SXRlbSA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIC8vICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAgIC8vICcmOmZvY3VzJzoge1xyXG4gICAgICAgIC8vIC8vICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgICAvLyAgICcmIC5NdWlMaXN0SXRlbUljb24tcm9vdCwgJiAuTXVpTGlzdEl0ZW1UZXh0LXByaW1hcnknOiB7XHJcbiAgICAgICAgLy8gICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcbn0pKShNZW51SXRlbSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR0aW5nTWVudShwcm9wczogeyBhbmNob3JFbDogSFRNTEVsZW1lbnQsIHNldEFuY2hvckVsOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxIVE1MRWxlbWVudD4+IH0pIHtcclxuICAgIC8vICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIC8vICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAvLyAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAvLyAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrJyk7XHJcbiAgICAgICAgcHJvcHMuc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxCdXR0b25cclxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY3VzdG9taXplZC1tZW51XCJcclxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgPlxyXG4gICAgICAgIE9wZW4gTWVudVxyXG4gICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDxTdHlsZWRNZW51XHJcbiAgICAgICAgICAgICAgICBpZD1cImN1c3RvbWl6ZWQtbWVudVwiXHJcbiAgICAgICAgICAgICAgICBhbmNob3JFbD17cHJvcHMuYW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAvLyBrZWVwTW91bnRlZFxyXG4gICAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihwcm9wcy5hbmNob3JFbCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4aXRUb0FwcEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwi44Ot44Kw44Ki44Km44OIXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICB7LyogPFN0eWxlZE1lbnVJdGVtPlxyXG4gICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPERyYWZ0c0ljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRyYWZ0c1wiIC8+XHJcbiAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cclxuICAgICAgICA8U3R5bGVkTWVudUl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8SW5ib3hJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbmJveFwiIC8+XHJcbiAgICAgICAgPC9TdHlsZWRNZW51SXRlbT4gKi99XHJcbiAgICAgICAgICAgIDwvU3R5bGVkTWVudT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBncmVlbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuaW1wb3J0IFN2Z0ljb24sIHsgU3ZnSWNvblByb3BzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb25cIjtcclxuaW1wb3J0IEFkZENpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGVcIjtcclxuaW1wb3J0IFRhc2tNb2RhbCBmcm9tIFwiLi9UYXNrTW9kYWxcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggYXV0byA1cHggYXV0b1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFza1BsdXNJY29uKHByb3BzOiB7IG51bTogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtuZXdPcGVuLCBzZXROZXdPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKDk5OTkpO1xyXG4gICAgY29uc3QgdGFza0FkZEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TmV3T3Blbihwcm9wcy5udW0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxBZGRDaXJjbGVJY29uIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSBvbkNsaWNrPXt0YXNrQWRkSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgPFRhc2tNb2RhbCBvcGVuPXtuZXdPcGVufSBzZXRPcGVuPXtzZXROZXdPcGVufSBpbmRleD17cHJvcHMubnVtfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VEYXRhYmFzZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L0RCRmV0Y2hcIjtcclxuaW1wb3J0IHsgdXNlckluZm8sIEFjdGlvbnMgfSBmcm9tIFwiLi91c2VyVGFza3NUeXBlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IG51bWJlciwgYWN0aW9uOiBBY3Rpb25zKTogbnVtYmVyID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiQUREX1RPRE9cIjpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgQUREX1RPRE8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHN0YXRlICsgMVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgY2FzZSBcIlRPR0dMRV9UT0RPXCI6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIEFERF9UT0RPJyk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgdGFza3NNb2R1bGUgZnJvbSAnLi90YXNrc01vZHVsZSc7XHJcbmltcG9ydCB1c2VyTW9kdWxlIGZyb20gJy4vdXNlck1vZHVsZSc7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICB0YXNrczogdGFza3NNb2R1bGUucmVkdWNlcixcclxuICAgIHVzZXI6IHVzZXJNb2R1bGUucmVkdWNlclxyXG59KVxyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlciIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXInO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcidcclxuaW1wb3J0IHsgdXNlckluZm8gfSBmcm9tICcuL3VzZXJUYXNrc1R5cGUnO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXJcclxufSlcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogbnVtYmVyID0gMDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yZXMgPSBSZWFjdC5jcmVhdGVDb250ZXh0PG51bWJlciB8IGFueT4oaW5pdGlhbFN0YXRlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yZVByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RvcmVzLlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT4geyBjaGlsZHJlbn0gPC9TdG9yZXMuUHJvdmlkZXI+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2hcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBzdWJTZWNvbmRzIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L2ZpcmViYXNlVGVzdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgY2FsZW5kYXIsXHJcbiAgICBwYXR0ZXJuLFxyXG4gICAgdGFza3MsXHJcbiAgICB1c2VySW5mbyxcclxuICAgIHVzZXJUYXNrSW5mbyxcclxufSBmcm9tIFwiLi91c2VyVGFza3NUeXBlXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiB1c2VySW5mbyA9IHtcclxuICAgIHVzZXJJZDogJycsXHJcbiAgICB1c2VyVGFza0luZm86IHtcclxuICAgICAgICBjYWxlbmRhcjoge1xyXG4gICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCldOiB7XHJcbiAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldE1vbnRoKCkgKyAxXToge1xyXG4gICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMyBPY3QgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0dGVybjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogXCJ0ZXN0UGF0dGVybjFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiAyLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4yXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuLy8gY29uc3QgZGlmZiA9IChvbGRzOiBhbnlbXSwgbmV4dHM6IGFueVtdKSA9PiAoe1xyXG4vLyAgICAgYWRkczogbmV4dHMuZmlsdGVyKChlKSA9PiAhb2xkcy5pbmNsdWRlcyhlKSksXHJcbi8vICAgICBzdWJzOiBvbGRzLmZpbHRlcigoZSkgPT4gIW5leHRzLmluY2x1ZGVzKGUpKSxcclxuLy8gfSk7XHJcblxyXG4vLyDjg5Hjgr/jg7zjg7Pmm7TmlrDmmYLjgavmnKrmnaXjgavoqK3lrprjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7Pjga7lhoXlrrnjgpLmm7TmlrDjgZnjgovjgIJcclxuLy8g5pu05paw5a++6LGh44Gvc3RhdGUuY2FsZW5kYXIudGFza3NcclxuLy8g5bm05pyI5pel44GM5pyq5p2l44Gn44GC44KK44CB44GL44Gk44CB44OR44K/44O844OzSUTjgYzlkIzjgZjjgoLjga7jgpLlr77osaHjgavmlrDjgZfjgYTjg5Hjgr/jg7zjg7PjgpLnmbvpjLLjgZnjgovjgIJcclxuY29uc3QgZnV0dXJlUGF0dGVyblVwZGF0ZSA9IChzdGF0ZTogdXNlckluZm8sIHVwZGF0ZVBhdHRlcm5JZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIj09PT1mdXR1cmVQYXR0ZXJuVXBkYXRl44GT44GT44GL44KJPT09PVwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIpKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG5vd1llYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3Qgbm93TW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuICAgIGNvbnN0IG5vd0RhdGUgPSB0b2RheS5nZXREYXRlKCk7XHJcblxyXG4gICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSB1cGRhdGVQYXR0ZXJuSWRcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g44OR44K/44O844OzSUTjgavntJDku5jjgY/jgr/jgrnjgq/kuIDopqfjgYvjgonjgqvjg6zjg7Pjg4Djg7zjgbjjga7nmbvpjLLmg4XloLHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgIGNvbnN0IHVwZGF0ZVRhc2tzID0gY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgIC8vIOODkeOCv+ODvOODs+OBjOikh+aVsOeZu+mMsuOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OBuOOBruWvvuW/nOOBqOOBl+OBpuOAgemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44Gr6Kmy5b2T44GZ44KL6KaB57Sg44Gg44GR44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgY29uc3QgdGFza1BhdHRlcm4gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAocGF0dGVybkluZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5JbmZvLnBhdHRlcm5JRCA9PSB1cGRhdGVQYXR0ZXJuSWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOmFjeWIl+OBruOCv+OCueOCr+OBqOaKveWHuuOBl+OBn+ODkeOCv+ODvOODs+aDheWgseOCkuaVtOW9ouOBl+OBpui/lOOBmeOAglxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9yZGVyOiB0YXNrUGF0dGVyblswXS5vcmRlcixcclxuICAgICAgICAgICAgZGV0YWlsOiB0YXNrLmRldGFpbCxcclxuICAgICAgICAgICAgLy8gZGV0YWlsMjogdGFzay5kZXRhaWwyLFxyXG4gICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qga2V5TW9udGhMaXN0ID0gKGtleVllYXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBrZXlEYXRlTGlzdCA9IChrZXlZZWFyOiBzdHJpbmcsIGtleU1vbnRoOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bcGFyc2VJbnQoa2V5TW9udGgpXVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRhdGVUYXNrVXBkYXRlID0gKFxyXG4gICAgICAgIGtleVllYXI6IHN0cmluZyxcclxuICAgICAgICBrZXlNb250aDogc3RyaW5nLFxyXG4gICAgICAgIGtleURhdGU6IHN0cmluZ1xyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildW3BhcnNlSW50KGtleU1vbnRoKV1bXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludChrZXlEYXRlKVxyXG4gICAgICAgICAgICBdLlBhdHRlcm5JZCA9PSB1cGRhdGVQYXR0ZXJuSWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtwYXJzZUludChrZXlNb250aCldW1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5RGF0ZSlcclxuICAgICAgICAgICAgXS50YXNrcyA9IHVwZGF0ZVRhc2tzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PWRhdGVUYXNrVXBkYXRlPT09XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlZZWFyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5TW9udGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlEYXRlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlVGFza3MpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdHlwZSBjYWxlbmRhclBhdHRlcm4gPSB7XHJcbiAgICAgICAgb3JkZXI6IG51bWJlcjtcclxuICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZsdWc6IGJvb2xlYW47XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpZmYgPSAob2xkczogY2FsZW5kYXJQYXR0ZXJuW10sIG5leHRzOiBjYWxlbmRhclBhdHRlcm5bXSkgPT4gKHtcclxuICAgICAgICBhZGRzOiBuZXh0cy5maWx0ZXIoKGUpID0+ICFvbGRzLmluY2x1ZGVzKGUpKSxcclxuICAgICAgICBzdWJzOiBvbGRzLmZpbHRlcigoZSkgPT4gIW5leHRzLmluY2x1ZGVzKGUpKSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOeZu+mMsuOBleOCjOOBpuOBhOOCi+W5tOOBrumAo+aDs+mFjeWIl+OBruOCreODvOOCkuWFqOOBpuWPluW+l1xyXG4gICAgY29uc3Qga2V5WWVhcnMgPSBPYmplY3Qua2V5cyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIpO1xyXG4gICAga2V5WWVhcnMubWFwKChrZXlZZWFyKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGtleVllYXIpID09IG5vd1llYXIpIHtcclxuICAgICAgICAgICAgLy8g44KC44GX5LuK5bm044Gg44Gj44Gf44KJ44CB44Gu5Yem55CGXHJcbiAgICAgICAgICAgIC8vIOeZu+mMsuOBleOCjOOBpuOBhOOCi+aciOOBrumAo+aDs+mFjeWIl+OBruOCreODvOOCkuWFqOOBpuWPluW+l1xyXG4gICAgICAgICAgICBjb25zdCBrZXlNb250aHMgPSBrZXlNb250aExpc3Qoa2V5WWVhcik7XHJcblxyXG4gICAgICAgICAgICBrZXlNb250aHMubWFwKChrZXlNb250aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGtleU1vbnRoKSA9PSBub3dNb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOOCguOBl+S7iuaciOOBoOOBo+OBn+OCiVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOeZu+mMsuOBleOCjOOBpuOBhOOCi+aXpeOBrumAo+aDs+mFjeWIl+OBruOCreODvOOCkuWFqOOBpuWPluW+l1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGVzID0ga2V5RGF0ZUxpc3Qoa2V5WWVhciwga2V5TW9udGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleURhdGVzLm1hcCgoa2V5RGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoa2V5RGF0ZSkgPiBub3dEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgoLjgZfmmI7ml6Xku6XpmY3jgaDjgaPjgZ/jgonnmbvpjLLlhoXlrrnjgpLmm7TmlrDjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUYXNrVXBkYXRlKGtleVllYXIsIGtleU1vbnRoLCBrZXlEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChrZXlEYXRlKSA9PSBub3dEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgoLjgZfku4rml6XjgaDjgaPjgZ/jgonjgIHlpInmm7TliIbjgaDjgZHlj43mmKDjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWHpueQhuacquS9nOaIkFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleU1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoa2V5RGF0ZSldLlBhdHRlcm5JZCA9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhdHRlcm5JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGlmZihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5WWVhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChrZXlNb250aCldW3BhcnNlSW50KGtleURhdGUpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRhc2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUYXNrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlQXJyYXkgPSBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleVllYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChrZXlNb250aCldW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChrZXlEYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0udGFza3MuZmlsdGVyKGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc3Vicy5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN1YikgPT4gc3ViICE9IHRhc2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZHMubWFwKChhZGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkucHVzaChhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleU1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoa2V5RGF0ZSldLnRhc2tzID0gdXBkYXRlQXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoa2V5TW9udGgpID4gbm93TW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDjgoLjgZfmnaXmnIjku6XpmY3jgaDjgaPjgZ/jgonjgIHjgZnjgbnjgabmm7TmlrDjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlcyA9IGtleURhdGVMaXN0KGtleVllYXIsIGtleU1vbnRoKTtcclxuICAgICAgICAgICAgICAgICAgICBrZXlEYXRlcy5tYXAoKGtleURhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRhc2tVcGRhdGUoa2V5WWVhciwga2V5TW9udGgsIGtleURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGtleVllYXIpID4gbm93WWVhcikge1xyXG4gICAgICAgICAgICAvLyDjgoLjgZfmnaXlubTku6XpmY3jgaDjgaPjgZ/jgonjgIHjga7lh6bnkIbjgILlhajjgabmm7TmlrDjgZnjgovjgIJcclxuICAgICAgICAgICAgY29uc3Qga2V5TW9udGhzID0ga2V5TW9udGhMaXN0KGtleVllYXIpO1xyXG4gICAgICAgICAgICBrZXlNb250aHMubWFwKChrZXlNb250aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZXMgPSBrZXlEYXRlTGlzdChrZXlZZWFyLCBrZXlNb250aCk7XHJcbiAgICAgICAgICAgICAgICBrZXlEYXRlcy5tYXAoKGtleURhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlVGFza1VwZGF0ZShrZXlZZWFyLCBrZXlNb250aCwga2V5RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCI9PT09ZnV0dXJlUGF0dGVyblVwZGF0ZeOBk+OBk+OBvuOBpz09PT1cIik7XHJcbn07XHJcblxyXG5jb25zdCBEQkNSVUQgPSAocGFzczogc3RyaW5nLCBjcnVkOiBzdHJpbmcsIHVwZGF0ZURvY3VtZW50OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gICAgbGV0IHJlZlBhc3MgPSAnLycgKyBwYXNzO1xyXG4gICAgaWYgKHBhc3MgPT0gJycpIHtcclxuICAgICAgICByZWZQYXNzID0gJydcclxuICAgIH1cclxuICAgIGNvbnN0IHJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwiL3VzZXJzL1wiICsgdXNlcklkICsgcmVmUGFzcyk7XHJcblxyXG4gICAgc3dpdGNoIChjcnVkKSB7XHJcbiAgICAgICAgY2FzZSAncmVnaXN0ZXInOlxyXG4gICAgICAgICAgICByZWYuc2V0KHVwZGF0ZURvY3VtZW50KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd1cGRhdGUnOlxyXG4gICAgICAgICAgICByZWYudXBkYXRlKHVwZGF0ZURvY3VtZW50KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkZWxldGUnOlxyXG4gICAgICAgICAgICByZWYucmVtb3ZlKClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHRhc2tzTW9kdWxlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ0YXNrc1wiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBpbml0KHN0YXRlOiB1c2VySW5mbywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJUYXNrSW5mbz4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgZGF0YVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHN0YXRlID0gey4uLmRhdGF9O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluaXQgc3RhdGUudXNlclRhc2tJbmZvIOWJjVwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvID0gZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0IHN0YXRlLnVzZXJUYXNrSW5mbyDlvoxcIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZWdpc3RlcihzdGF0ZTogdXNlckluZm8sIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx1c2VySW5mbz4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCAuLi5kYXRhIH07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGF0ZScpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbGxEZWxldGUoc3RhdGU6IHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIGFsbERlbGV0ZVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIERheVBsYW7jgavjgabjgr/jgrnjgq/jgpLjgq/jg6rjg4Pjgq/jgZfjgZ/pmpvjgavlrozkuobjg5Xjg6njgrDjgpJ0cnVl44Gr5aSJ5pu044GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gm5bm044CB5pyI44CB5pel44CB44K/44K544Kv44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+344KS5Y+X44GR5Y+W44Gj44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza0NoZWNrQ29tcGxldGUoc3RhdGU6IHVzZXJJbmZvLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyW10+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgIF1bYWN0aW9uLnBheWxvYWRbMl1dLnRhc2tzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICh0YXNrcykgPT4gdGFza3Mub3JkZXIgPT0gYWN0aW9uLnBheWxvYWRbM11cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW2FjdGlvbi5wYXlsb2FkWzFdXVtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzJdXHJcbiAgICAgICAgICAgIF0udGFza3NbaW5kZXhdLmZsdWcgPSAhc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMF1cclxuICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsxXV1bYWN0aW9uLnBheWxvYWRbMl1dLnRhc2tzW2luZGV4XS5mbHVnO1xyXG5cclxuICAgICAgICAgICAgREJDUlVEKGBjYWxlbmRhci8ke2FjdGlvbi5wYXlsb2FkWzBdfS8ke2FjdGlvbi5wYXlsb2FkWzFdfS8ke2FjdGlvbi5wYXlsb2FkWzJdfS90YXNrcy8ke2luZGV4fWAsXHJcbiAgICAgICAgICAgICAgICAndXBkYXRlJyxcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bYWN0aW9uLnBheWxvYWRbMV1dW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrc1tpbmRleF1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOW8leaVsOOBr3N0YXRl44Go5bm044CB5pyI44CB5pel44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjga4044Gk44Gu5pWw5YCk44GM5qC857SN44GV44KM44Gf6YWN5YiXXHJcbiAgICAgICAgY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIoXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VySW5mbyxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcltdPlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBzdGF0ZeOBi+OCiemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44GM6Kit5a6a44GV44KM44Gm44GE44KL44K/44K544Kv44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7NJROOBq+e0kOS7mOOBj+OCv+OCueOCr+S4gOimp+OBi+OCieOCq+ODrOODs+ODgOODvOOBuOOBrueZu+mMsuaDheWgseOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCBUb2RheVRhc2tzID0gY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g44OR44K/44O844Oz44GM6KSH5pWw55m76Yyy44GV44KM44Gm44GE44KL44K/44K544Kv44G444Gu5a++5b+c44Go44GX44Gm44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgavoqbLlvZPjgZnjgovopoHntKDjgaDjgZHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQYXR0ZXJuID0gdGFzay5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybkluZm8ucGF0dGVybklEID09IGFjdGlvbi5wYXlsb2FkWzNdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6YWN5YiX44Gu44K/44K544Kv44Go5oq95Ye644GX44Gf44OR44K/44O844Oz5oOF5aCx44KS5pW05b2i44GX44Gm6L+U44GZ44CCXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiB0YXNrUGF0dGVyblswXS5vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHRhc2suZGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRldGFpbDI6IHRhc2suZGV0YWlsMixcclxuICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g44GT44GT44Gr5bm044GM44Gq44GL44Gj44Gf5pmC44Gu5Yem55CG44KS5Yqg44GI44KLXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFswXSBpbiBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0YXRl44GuTW9udGjjga7pgKPmg7PphY3liJfjgavmlrDjgZfjgYTml6Xku5jjga7pgKPmg7PphY3liJfjgpLov73liqDjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIC8vIOi/veWKoOaDheWgseOBr+W8leaVsOOBruaXpeOBqOOBk+OCjOOBvuOBp+OBruWHpueQhuOBp+S9nOaIkOOBl+OBn+OCq+ODrOODs+ODgOODvOeZu+mMsueUqOaDheWgsVxyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAgICAgXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMl1dOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogYWN0aW9uLnBheWxvYWRbM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBUb2RheVRhc2tzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gc3RhdGXjga5Nb250aOOBrumAo+aDs+mFjeWIl+OBq+aWsOOBl+OBhOaXpeS7mOOBrumAo+aDs+mFjeWIl+OCkui/veWKoOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgLy8g6L+95Yqg5oOF5aCx44Gv5byV5pWw44Gu5pel44Go44GT44KM44G+44Gn44Gu5Yem55CG44Gn5L2c5oiQ44GX44Gf44Kr44Os44Oz44OA44O855m76Yyy55So5oOF5aCxXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkWzFdXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMl1dOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IGFjdGlvbi5wYXlsb2FkWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFRvZGF5VGFza3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgREJDUlVEKGBjYWxlbmRhci8ke2FjdGlvbi5wYXlsb2FkWzBdfS8ke2FjdGlvbi5wYXlsb2FkWzFdfS8ke2FjdGlvbi5wYXlsb2FkWzJdfWAsICd1cGRhdGUnLCBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW2FjdGlvbi5wYXlsb2FkWzFdXVthY3Rpb24ucGF5bG9hZFsyXV0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgICAgIF1bYWN0aW9uLnBheWxvYWRbMl1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jga7oqbPntLDjgpLoqK3lrprjgZnjgovlh6bnkIbjgILlvJXmlbDjga7jg4bjgq3jgrnjg4jphY3liJfjgavjga9b5YWl5Yqb5YaF5a6544CB6YCj5oOz6YWN5YiX44Gu44Kt44O844CB44K/44K544Kv44Gu6YWN5YiX44KS5oyH5a6a44GZ44KL5pWw5a2XXeOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tEZXRhaWxSZWdpc3RlcihzdGF0ZTogdXNlckluZm8sIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KGFjdGlvbi5wYXlsb2FkWzJdKV0uZGV0YWlsID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KGFjdGlvbi5wYXlsb2FkWzJdKV0uZGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkWzFdXTogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIERCQ1JVRChgdGFza3MvJHtbcGFyc2VJbnQoYWN0aW9uLnBheWxvYWRbMl0pXX0vZGV0YWlsYCwgJ3VwZGF0ZScsIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1twYXJzZUludChhY3Rpb24ucGF5bG9hZFsyXSldLmRldGFpbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jgpLov73liqDjgZnjgovlh6bnkIbjgILlvJXmlbDjga7jg4bjgq3jgrnjg4jphY3liJfjgavjga9b5YWl5Yqb5YaF5a6544CB6YCj5oOz6YWN5YiX44Gu44Kt44O844CB44K/44K544Kv44Gu6YWN5YiX44KS5oyH5a6a44GZ44KL5pWw5a2XXeOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tSZWdpc3RlcihzdGF0ZTogdXNlckluZm8sIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx0YXNrcz4pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVnaXN0ZXJUYXNrID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyVGFzay5wYXR0ZXJuSW5mby5tYXAoKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSBjb250ZW50LnBhdHRlcm5JRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50Lm9yZGVyID0gY2hvaWNlUGF0dGVyblRhc2tzLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWdpc3RlclRhc2spO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3MgPSBbLi4uc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLCByZWdpc3RlclRhc2tdO1xyXG4gICAgICAgICAgICBEQkNSVUQoJ3Rhc2tzJywgJ3JlZ2lzdGVyJywgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OBruODkeOCv+ODvOODs+eZu+mMsueKtuazgeOCkuabtOaWsOOBmeOCi+OAglxyXG4gICAgICAgIHRhc2tQYXR0ZXJuVXBkYXRlKFxyXG4gICAgICAgICAgICBzdGF0ZTogdXNlckluZm8sXHJcbiAgICAgICAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgICAgICAgICBuZXdDaGVja2VkOiBudW1iZXJbXTtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgICAgIH0+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIOOBk+OBk+OBp+OChOOCi+OBk+OBqOOBr++8n1xyXG4gICAgICAgICAgICAvLyDjgb7jgZrlvJXmlbDjgavjgr/jgrnjgq/jga7phY3liJfjgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgYzlv4XopoFcclxuICAgICAgICAgICAgLy8g44OR44K/44O844OzSUTjga7phY3liJfjgpLlj5fjgZHlj5bjgovjgIJcclxuICAgICAgICAgICAgLy8g6YWN5YiX44Goc3RhdGXjgpLmr5TovIPjgZfjgabjgIHjgarjgZHjgozjgbDnmbvpjLLjgIJPcmRlcuOBr+acgOWkp+WApCsx44CC6YCG44Gr5YmK6Zmk44GV44KM44Gm44GE44KL44KC44Gu44Gv6Zmk5aSW44CCXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZVBhdHRlcm5JZExpc3QgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICBdLnBhdHRlcm5JbmZvLm1hcCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQucGF0dGVybklEO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZVBhdHRlcm5JZExpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlUGF0dGVybklkTGlzdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAob2xkczogbnVtYmVyW10sIG5leHRzOiBudW1iZXJbXSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGFkZHM6IG5leHRzLmZpbHRlcigoZSkgPT4gIW9sZHMuaW5jbHVkZXMoZSkpLFxyXG4gICAgICAgICAgICAgICAgc3Viczogb2xkcy5maWx0ZXIoKGUpID0+ICFuZXh0cy5pbmNsdWRlcyhlKSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkaWZmKHN0YXRlUGF0dGVybklkTGlzdCwgYWN0aW9uLnBheWxvYWQubmV3Q2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVBcnJheToge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklEOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgICAgICAgICB9W107XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZeOBi+OCieWJiumZpOWvvuixoeOCkumZpOWkluOBl+OBn+mFjeWIl+OCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN1YnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgICAgIF0ucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZnV0dXJlUGF0dGVyblVwZGF0ZShzdGF0ZSwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc3Vicy5zb21lKChzdWIpID0+IHN1YiAhPSBjb250ZW50LnBhdHRlcm5JRCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5ID1cclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbYWN0aW9uLnBheWxvYWQuaW5kZXhdLnBhdHRlcm5JbmZvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjE6dXBkYXRlQXJyYXlcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZUFycmF5KTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHJlc3VsdC5hZGRzLm1hcCgoYWRkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgTWF4OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8g6L+95Yqg44GV44KM44GfSUTjgYzoqK3lrprjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrUGF0dGVybkluZm8pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5JbmZvLnBhdHRlcm5JRCA9PSBhZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGNob2ljZVBhdHRlcm5UYXNrcy5tYXAoKHRhc2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmir3lh7rjgZXjgozjgZ/lkITjgr/jgrnjgq/jga7jg5Hjgr/jg7zjg7NJROOCkuavlOi8g+OBl+OAgeacgOWkp+WApOOCkuWPluW+l+OBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gdGFzay5wYXR0ZXJuSW5mby5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW5mbykgPT4gaW5mby5wYXR0ZXJuSUQgPT0gYWRkXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBNYXggPCBjb250ZW50Lm9yZGVyID8gKE1heCA9IGNvbnRlbnQub3JkZXIpIDogXCJcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHB1c2hDb250ZW50ID0geyBwYXR0ZXJuSUQ6IGFkZCwgb3JkZXI6IE1heCArIDEgfTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5LnB1c2gocHVzaENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgZnV0dXJlUGF0dGVyblVwZGF0ZShzdGF0ZSwgYWRkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjp1cGRhdGVBcnJheVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlQXJyYXkpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgXS5wYXR0ZXJuSW5mbyA9IHVwZGF0ZUFycmF5O1xyXG4gICAgICAgICAgICBEQkNSVUQoYHRhc2tzLyR7YWN0aW9uLnBheWxvYWQuaW5kZXh9L3BhdHRlcm5JbmZvYCwgJ3JlZ2lzdGVyJywgdXBkYXRlQXJyYXkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44KS5YmK6Zmk44GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gv5YmK6Zmk5a++6LGh44K/44K544Kv44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+344GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza0RlbGV0ZShzdGF0ZTogdXNlckluZm8sIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGRlbGV0ZVRhc2sgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3Muc3BsaWNlKFxyXG4gICAgICAgICAgICAvLyAgICAgYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIC8vICAgICAxXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCAhPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZVRhc2spO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3MgPSBkZWxldGVUYXNrO1xyXG4gICAgICAgICAgICBEQkNSVUQoYHRhc2tzYCwgJ3JlZ2lzdGVyJywgZGVsZXRlVGFzayk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jgpLjg5Hjgr/jg7zjg7PjgYvjgonpmaTlpJbjgZnjgovlh6bnkIbjgILlvJXmlbDjga7jgqrjg5bjgrjjgqfjgq/jg4jjgavjga/jg5Hjgr/jg7zjg7NJROOBqOWJiumZpOWvvuixoeOCv+OCueOCr+OBruWQjeensOOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tSZW1vdmVQYXR0ZXJuKFxyXG4gICAgICAgICAgICBzdGF0ZTogdXNlckluZm8sXHJcbiAgICAgICAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IHBhdHRlcm5JZDogbnVtYmVyOyBkZXRhaWxUaXRsZTogc3RyaW5nIH0+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkLmRldGFpbFRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbmRJbmRleCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZGV0YWlsW1wi44K/44K544Kv5ZCNXCJdID09IGFjdGlvbi5wYXlsb2FkLmRldGFpbFRpdGxlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVkVGFzayA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tcclxuICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgIF0ucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5wYXR0ZXJuSUQgIT0gYWN0aW9uLnBheWxvYWQucGF0dGVybklkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW2luZGV4XS5wYXR0ZXJuSW5mbyA9IGRlbGV0ZWRUYXNrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZWxldGVkVGFzayk7XHJcbiAgICAgICAgICAgIERCQ1JVRChgdGFza3MvJHtpbmRleH0vcGF0dGVybkluZm9gLCAncmVnaXN0ZXInLCBkZWxldGVkVGFzayk7XHJcbiAgICAgICAgICAgIC8vIGZ1dHVyZVBhdHRlcm5VcGRhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44OR44K/44O844Oz44KS6L+95Yqg44GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gv44OR44K/44O844Oz5ZCN56ew44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgcGF0dGVyblJlZ2lzdGVyKHN0YXRlOiB1c2VySW5mbywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgbGV0IE1heElkOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybi5tYXAoKHBhdHRlcm5Db250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQgPiBNYXhJZFxyXG4gICAgICAgICAgICAgICAgICAgID8gKE1heElkID0gcGF0dGVybkNvbnRlbnQucGF0dGVybklkKVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZFBhdHRlcm4gPSB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IE1heElkICsgMSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4gPSBbLi4uc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4sIGFkZFBhdHRlcm5dO1xyXG4gICAgICAgICAgICBEQkNSVUQoJ3BhdHRlcm4nLCAncmVnaXN0ZXInLCBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjg5Hjgr/jg7zjg7PjgpLliYrpmaTjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/jg5Hjgr/jg7zjg7NJROOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHBhdHRlcm5EZWxldGUoc3RhdGU6IHVzZXJJbmZvLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVQYXR0ZXJuTGlzdCA9IHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChwYXR0ZXJuQ29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQgIT0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVQYXR0ZXJuTGlzdCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuID0gdXBkYXRlUGF0dGVybkxpc3Q7XHJcblxyXG4gICAgICAgICAgICAvLyDjgr/jgrnjgq/jgajjgqvjg6zjg7Pjg4Djg7zjgavkv53nrqHjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7PjgpLlhajjgabliYrpmaTjgZnjgovlv4XopoHjgYzjgYLjgotcclxuICAgICAgICAgICAgLy8g44Kr44Os44Oz44OA44O844Gv5pyq5p2l5YiG44Gg44GRXHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZS51c2VyVGFza0luZm8udGFza3Pjgavkv53nrqHjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7Pmg4XloLHjgpLliYrpmaTjgZnjgovjgIJcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZVRhc2tMaXN0ID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlUGF0dGVybkluZm8gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAodGFza1BhdHRlcm5JbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrUGF0dGVybkluZm8ucGF0dGVybklEICE9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVUYXNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICB9W107XHJcbiAgICAgICAgICAgICAgICB9ID0geyBkZXRhaWw6IHRhc2suZGV0YWlsLCBwYXR0ZXJuSW5mbzogdXBkYXRlUGF0dGVybkluZm8gfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVUYXNrO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlcjp1cGRhdGVUYXNrTGlzdFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlVGFza0xpc3QpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3MgPSB1cGRhdGVUYXNrTGlzdDtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcuOBruacquadpeWIhuOBq+S/neeuoeOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs+aDheWgseOCkuWJiumZpOOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vd1llYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBjb25zdCBub3dNb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgICAgICBjb25zdCBub3dEYXRlID0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlZZWFycyA9IE9iamVjdC5rZXlzKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNhbGVuZGFyRGF0ZSA9IChcclxuICAgICAgICAgICAgICAgIHllYXI6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIG1vbnRoOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBzdHJpbmdcclxuICAgICAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQobW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChkYXRlKV0uUGF0dGVybklkID09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQobW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChkYXRlKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGtleVllYXJzLm1hcCgoeWVhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5TW9udGggPSBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHllYXIpID4gbm93WWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWvvuixoeOBjOadpeW5tOS7pemZjeOBp+OBguOCi+WgtOWQiOOAgeWJiumZpOOBmeOCi+OAgmRlbGV0ZeOBruOBu+OBhuOBjOOBhOOBhFxyXG4gICAgICAgICAgICAgICAgICAgIGtleU1vbnRoLm1hcCgobW9udGgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZSA9IE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KG1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlEYXRlLm1hcCgoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FsZW5kYXJEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KHllYXIpID09IG5vd1llYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlr77osaHjgYzku4rlubTjgafjgYLjgovloLTlkIhcclxuICAgICAgICAgICAgICAgICAgICBrZXlNb250aC5tYXAoKG1vbnRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGUgPSBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KG1vbnRoKSA+IG5vd01vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmnaXmnIjku6XpmY3jga7loLTlkIjjgIHliYrpmaTjgZnjgovjgIJkZWxldGXjga7jgbvjgYbjgYzjgYTjgYRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5RGF0ZS5tYXAoKGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDYWxlbmRhckRhdGUoeWVhciwgbW9udGgsIGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQobW9udGgpID09IG5vd01vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDku4rmnIjjga7loLTlkIhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleURhdGUubWFwKChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRhdGUpID4gbm93RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmmI7ml6Xku6XpmY3jga7loLTlkIjjgIHliYrpmaTjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FsZW5kYXJEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgREJDUlVEKCcnLCAncmVnaXN0ZXInLCBzdGF0ZS51c2VyVGFza0luZm8pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44OR44K/44O844Oz5ZCN56ew44KS57eo6ZuG44GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gv44OR44K/44O844OzSUTjgajjg5Hjgr/jg7zjg7PlkI3np7DjgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICBwYXR0ZXJuTmFtZUVkaXQoXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VySW5mbyxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICAgICAgICAgIGVkaXRQYXR0ZXJuSWQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH0+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIElE44Gr5ZCI6Ie044GZ44KL6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+344KS5Y+W5b6XXHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRQYXR0ZXJuSW5kZXggPSBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybi5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAocGF0dGVybkNvbnRlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybkNvbnRlbnQucGF0dGVybklkID09IGFjdGlvbi5wYXlsb2FkLmVkaXRQYXR0ZXJuSWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8g5Y+W5b6X44GX44Gf44Kk44Oz44OH44OD44Kv44K555Wq5Y+344KS55uu5Y2w44Gr44CB5byV5pWw44Gu5paw44GX44GE5ZCN56ew44Gn5pu05paw44GZ44KL44CCXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuW2VkaXRQYXR0ZXJuSW5kZXhdLnBhdHRlcm5OYW1lID0gYWN0aW9uLnBheWxvYWQucGF0dGVybk5hbWU7XHJcblxyXG4gICAgICAgICAgICBEQkNSVUQoYHBhdHRlcm4vJHtlZGl0UGF0dGVybkluZGV4fWAsICd1cGRhdGUnLCBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybltlZGl0UGF0dGVybkluZGV4XSk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgICBpbml0LFxyXG4gICAgUmVnaXN0ZXIsXHJcbiAgICBhbGxEZWxldGUsXHJcbiAgICB0YXNrQ2hlY2tDb21wbGV0ZSxcclxuICAgIGNhbGVuZGFyUGF0dGVyblJlZ2lzdGVyLFxyXG4gICAgdGFza0RldGFpbFJlZ2lzdGVyLFxyXG4gICAgdGFza1JlZ2lzdGVyLFxyXG4gICAgdGFza1BhdHRlcm5VcGRhdGUsXHJcbiAgICB0YXNrRGVsZXRlLFxyXG4gICAgdGFza1JlbW92ZVBhdHRlcm4sXHJcbiAgICBwYXR0ZXJuUmVnaXN0ZXIsXHJcbiAgICBwYXR0ZXJuRGVsZXRlLFxyXG4gICAgcGF0dGVybk5hbWVFZGl0LFxyXG59ID0gdGFza3NNb2R1bGUuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tzTW9kdWxlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuICAgIHVzZXJJZDogJydcclxufTtcclxuXHJcbmNvbnN0IHVzZXJNb2R1bGUgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInVzZXJcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgbG9naW4oc3RhdGU6IFN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4nKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudXNlcklkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlcklkID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJJZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dvdXQoc3RhdGU6IFN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlcklkID0gJydcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgbG9naW4sIGxvZ291dCB9ID0gdXNlck1vZHVsZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlck1vZHVsZTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcblxyXG5pbXBvcnQgVGFza0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlldy9UYXNrTGlzdFwiO1xyXG5pbXBvcnQgUmVzcG9uc2l2ZURyYXdlciBmcm9tIFwiLi4vY29tcG9uZW50cy92aWV3L1Jlc3BvbnNpdmVEcmF3ZXJcIjtcclxuaW1wb3J0IEZsb2F0aW5nQWN0aW9uQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZXcvL0Zsb2F0aW5nQWN0aW9uQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgTGlzdENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy90ZXN0L2ZpcmViYXNlVGVzdC9nZXREYXRhXCI7XHJcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L0Zvcm1Db21wb25lbnRcIjtcclxuaW1wb3J0IEZpcmViYXNlQXV0aENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy90ZXN0L2ZpcmViYXNlVGVzdC9GaXJlYmFzZUF1dGhDb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC93aXRoQXV0aCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uL21vZHVsZXMvc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVQcm92aWRlciB9IGZyb20gXCIuLi9tb2R1bGVzL3VzZXJUYXNrc1R5cGVcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Rlc3QvZmlyZWJhc2VUZXN0L2ZpcmViYXNlVGVzdFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXNrTGlzdDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI5MHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjI0MHB4XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5cclxuY29uc3QgVGFza3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9OiBTdG9yZVByb3ZpZGVyID0gUmVhY3QudXNlQ29udGV4dChTdG9yZXMpO1xyXG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgdXNlTWVtbygoKSA9PlxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFwiQUREX1RPRE9cIixcclxuICAgIH0pLCBbXVxyXG4gICAgKVxyXG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdhdXRoLmN1cnJlbnRVc2VyLnVpZCcpO1xyXG4gICAgY29uc29sZS5sb2coYXV0aC5jdXJyZW50VXNlci51aWQpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIHsvKiAvLyA8Qm94PiAqL31cclxuICAgICAgICAgICAgey8qIDxCb3ggY29tcG9uZW50PVwic3BhblwiIG09ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PiAqL31cclxuICAgICAgICAgICAgPFJlc3BvbnNpdmVEcmF3ZXIgLz5cclxuICAgICAgICAgICAgey8qIDxEZW5zZUFwcEJhciAvPiAqL31cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMudGFza0xpc3R9PlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nQWN0aW9uQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPFRhc2tMaXN0IC8+ICovfVxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgey8qIDxUb29sdGlwIC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPFRvb2x0aXBzIG9uQ2xpY2s9e30vPiAqL31cclxuICAgICAgICAgICAgey8qIDxCb3R0b21OYXZpZ2F0aW9uIC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPC9Cb3g+ICovfVxyXG4gICAgICAgICAgICB7LyogPC9Cb3g+ICovfVxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy50YXNrTGlzdH0+XHJcbiAgICAgICAgICAgICAgICA8RmlyZWJhc2VBdXRoQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdENvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoVGFza3MpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Db21tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EYXRlUmFuZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0RpcmVjdGlvbnNSdW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlQ2lyY2xlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZW5kXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5nc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2RhdGFiYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=