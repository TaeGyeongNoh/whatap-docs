"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[33388],{

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zo: () => (/* binding */ MDXProvider),
/* harmony export */   kt: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 16674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


const frontMatter = {
    id: 'preview-1_105_x',
    title: 'Preview 1.105.X',
    toc_max_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "release-notes/preview/preview-1_105_x",
    "id": "release-notes/preview/preview-1_105_x",
    "title": "Preview 1.105.X",
    "description": "In https://preview.whatap.io, the following new features and enhancements can be experienced in advance.",
    "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/preview/preview-1.105.x.mdx",
    "sourceDirName": "release-notes/preview",
    "slug": "/release-notes/preview/preview-1_105_x",
    "permalink": "/en/release-notes/preview/preview-1_105_x",
    "draft": false,
    "editUrl": "undefined/docs/release-notes/preview/preview-1.105.x.mdx",
    "tags": [],
    "version": "current",
    "frontMatter": {
        "id": "preview-1_105_x",
        "title": "Preview 1.105.X",
        "toc_max_heading_level": 2
    },
    "sidebar": "previewSidebar",
    "previous": {
        "title": "Preview 1.107.X",
        "permalink": "/en/release-notes/preview/preview-1_107_x"
    },
    "next": {
        "title": "Preview 1.103.X",
        "permalink": "/en/release-notes/preview/preview-1_103_x"
    }
};
const assets = {};
const toc = [
    {
        value: 'Preview 1.105.21',
        id: 'preview-110521',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common',
        level: 3
    },
    {
        value: 'Alert',
        id: 'alert',
        level: 4
    },
    {
        value: '<code>Application</code>',
        id: 'application',
        level: 3
    },
    {
        value: '.NET',
        id: 'net',
        level: 4
    },
    {
        value: '<code>Container</code>',
        id: 'container',
        level: 3
    },
    {
        value: 'Preview 1.105.20',
        id: 'preview-110520',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common-1',
        level: 3
    },
    {
        value: 'Report',
        id: 'report',
        level: 4
    },
    {
        value: 'My Usage',
        id: 'my-usage',
        level: 4
    },
    {
        value: '<code>Server</code>',
        id: 'server',
        level: 3
    },
    {
        value: 'Preview 1.105.19',
        id: 'preview-110519',
        level: 2
    },
    {
        value: '<code>Database</code>',
        id: 'database',
        level: 3
    },
    {
        value: 'V2 commons',
        id: 'v2-commons',
        level: 4
    },
    {
        value: 'PostgreSQL',
        id: 'postgresql',
        level: 4
    },
    {
        value: 'MySQL',
        id: 'mysql',
        level: 4
    },
    {
        value: 'Preview 1.105.18',
        id: 'preview-110518',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common-2',
        level: 3
    },
    {
        value: 'Preview 1.105.17',
        id: 'preview-110517',
        level: 2
    },
    {
        value: '<code>Application</code>',
        id: 'application-1',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-1',
        level: 3
    },
    {
        value: 'Preview 1.105.16',
        id: 'preview-110516',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common-3',
        level: 3
    },
    {
        value: 'Flex Board',
        id: 'flex-board',
        level: 4
    },
    {
        value: 'My Usage',
        id: 'my-usage-1',
        level: 4
    },
    {
        value: 'Report',
        id: 'report-1',
        level: 4
    },
    {
        value: '<code>Application</code>',
        id: 'application-2',
        level: 3
    },
    {
        value: 'GO, PHP',
        id: 'go-php',
        level: 4
    },
    {
        value: 'Dashboard',
        id: 'dashboard',
        level: 4
    },
    {
        value: 'Analytics',
        id: 'analytics',
        level: 4
    },
    {
        value: '<code>Browser</code>',
        id: 'browser',
        level: 3
    },
    {
        value: 'Preview 1.105.15',
        id: 'preview-110515',
        level: 2
    },
    {
        value: '<code>Container</code>',
        id: 'container-2',
        level: 3
    },
    {
        value: 'Preview 1.105.14',
        id: 'preview-110514',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common-4',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application-3',
        level: 3
    },
    {
        value: 'Dashboard',
        id: 'dashboard-1',
        level: 4
    },
    {
        value: 'Analytics',
        id: 'analytics-1',
        level: 4
    },
    {
        value: '<code>Database</code>',
        id: 'database-1',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-3',
        level: 3
    },
    {
        value: 'Dashboard',
        id: 'dashboard-2',
        level: 4
    },
    {
        value: 'Preview 1.105.13',
        id: 'preview-110513',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common-5',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application-4',
        level: 3
    },
    {
        value: '<code>Browser</code>',
        id: 'browser-1',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-4',
        level: 3
    },
    {
        value: '<code>Laboratory</code>',
        id: 'laboratory',
        level: 3
    },
    {
        value: 'Preview 1.105.12',
        id: 'preview-110512',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common-6',
        level: 3
    },
    {
        value: 'Alert',
        id: 'alert-1',
        level: 4
    },
    {
        value: 'Dashboard',
        id: 'dashboard-3',
        level: 4
    },
    {
        value: 'Flex Board',
        id: 'flex-board-1',
        level: 4
    },
    {
        value: 'Preview 1.105.11',
        id: 'preview-110511',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common-7',
        level: 3
    },
    {
        value: '<code>Server</code>',
        id: 'server-1',
        level: 3
    },
    {
        value: '<code>Log</code>',
        id: 'log',
        level: 3
    },
    {
        value: '<code>Laboratory</code>',
        id: 'laboratory-1',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-5',
        level: 3
    },
    {
        value: 'Preview 1.105.10',
        id: 'preview-110510',
        level: 2
    },
    {
        value: '<code>Server</code>',
        id: 'server-2',
        level: 3
    },
    {
        value: 'Preview 1.105.09',
        id: 'preview-110509',
        level: 2
    },
    {
        value: '<code>Container</code>',
        id: 'container-6',
        level: 3
    },
    {
        value: '<code>Log</code>',
        id: 'log-1',
        level: 3
    },
    {
        value: 'Log Search',
        id: 'log-search',
        level: 4
    },
    {
        value: 'Preview 1.105.08',
        id: 'preview-110508',
        level: 2
    },
    {
        value: '<code>Container</code>',
        id: 'container-7',
        level: 3
    },
    {
        value: 'Preview 1.105.07',
        id: 'preview-110507',
        level: 2
    },
    {
        value: '<code>Server</code>',
        id: 'server-3',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-8',
        level: 3
    },
    {
        value: 'Preview 1.105.06',
        id: 'preview-110506',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common-8',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application-5',
        level: 3
    },
    {
        value: 'Preview 1.105.05',
        id: 'preview-110505',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common-9',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-9',
        level: 3
    },
    {
        value: '<code>URL</code>',
        id: 'url',
        level: 3
    },
    {
        value: 'Preview 1.105.04',
        id: 'preview-110504',
        level: 2
    },
    {
        value: 'Preview 1.105.03',
        id: 'preview-110503',
        level: 2
    },
    {
        value: '<code>Container</code>',
        id: 'container-10',
        level: 3
    },
    {
        value: 'Preview 1.105.02',
        id: 'preview-110502',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common-10',
        level: 3
    },
    {
        value: 'Dashboard',
        id: 'dashboard-4',
        level: 4
    },
    {
        value: 'Management',
        id: 'management',
        level: 4
    },
    {
        value: '<code>Log</code>',
        id: 'log-2',
        level: 3
    },
    {
        value: 'Preview 1.105.01',
        id: 'preview-110501',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common-11',
        level: 3
    },
    {
        value: 'Dashboard',
        id: 'dashboard-5',
        level: 4
    },
    {
        value: 'Flex Board',
        id: 'flex-board-2',
        level: 4
    },
    {
        value: '<code>Application</code>',
        id: 'application-6',
        level: 3
    },
    {
        value: '<code>Server</code>',
        id: 'server-4',
        level: 3
    },
    {
        value: 'Preview 1.105.00',
        id: 'preview-110500',
        level: 2
    },
    {
        value: '<code>Common</code>',
        id: 'common-12',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application-7',
        level: 3
    },
    {
        value: '<code>Server</code>',
        id: 'server-5',
        level: 3
    },
    {
        value: 'Alert',
        id: 'alert-2',
        level: 4
    },
    {
        value: '<code>Database</code>',
        id: 'database-2',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-11',
        level: 3
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", props);
    };
const Status = makeShortcode("Status");
const UI = makeShortcode("UI");
const Link = makeShortcode("Link");
const LinkImage = makeShortcode("LinkImage");
const layoutProps = {
    toc
};
const MDXLayout = "wrapper";
function MDXContent(_param) {
    var { components } = _param, props = _object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("head", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("meta", {
        name: "robots",
        content: "noindex, nofollow"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://preview.whatap.io"
    }, `In https://preview.whatap.io`), `, the following new features and enhancements can be experienced in advance. `)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110521"
    }, `Preview 1.105.21`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 24, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "alert"
    }, `Alert`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Notification setting"), ", added the fold/unfold function in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Event notification settings per-user"), " section."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Alert"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Event setting"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Metrics event"), " tab, the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Related category"), " item has been deleted upon addition of any event.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "net"
    }, `.NET`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "New"), " Added the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Analysis"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Stack"), " menu. See ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Link, {
        to: "../../dotnet/analysis-apm",
        mdxType: "Link"
    }, "the following"), "."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Resource"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Node list"), ", fixed the bug where a loading event appears even when there is no container data to display."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Deprecate"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Alert"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Event setting"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Metrics event"), " tab, the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Related project"), " function has been discarded upon addition of any event."))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110520"
    }, `Preview 1.105.20`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 21, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "report"
    }, `Report`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Report"), ", fixed the bug where report creation is not made when timeout occurs."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Report"), ", modified the UI loading display format when creating reports.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "my-usage"
    }, `My Usage`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " If the language is set to English, modified to search countries with lowercase characters in ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Payment information"), "."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "server"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Alert"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Event setting"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Metrics"), " event tab, modified to display the name-related data instead of ID on the Testing event rules chart."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Server list"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Server detail"), ", fixed the time reset bug upon refreshing after the time range has been changed."))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110519"
    }, `Preview 1.105.19`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 21, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "database"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "v2-commons"
    }, `V2 commons`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Instance monitoring"), ", the sorting changes in the Active Session table can be saved in presets."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Instance monitoring"), ", fixed the bug where sorting is canceled after refreshing data."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Instance monitoring"), ", added the view for the Active Session table on a new window."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Flex Board"), ", the sorting changes in the Active Session table can be saved."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " Changed the deadline date of the project version selection.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "PostgreSQL"), ": September 30, 2023 → October 31, 2023"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "MySQL"), ": October 30, 2023 → November 30, 2023"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Analysis"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Counts trend comparison"), ", improved the issue where charts appear unnaturally due to differences in data calling and loading speed.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "postgresql"
    }, `PostgreSQL`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Instance monitoring"), " for V2 products, added the plan lookup to the session details in the active session table."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "mysql"
    }, `MySQL`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Instance monitoring"), " for V2 products, the initial sorting in the Active Session table can be set.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110518"
    }, `Preview 1.105.18`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 20, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " Added the guidance message when throttle has been set for the agent to limit API requests."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " When inviting members for the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "project"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "group"), ", and ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "organization"), ", the guidance message has been changed for non-existent accounts."))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110517"
    }, `Preview 1.105.17`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 20, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In the list under ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "STAT/REPORT"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Statistics"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction"), " tab, fixed the bug where operation is not made after clicking the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "T"), " or ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "U"), " button."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Active transaction"), ", changed the display colors for slow transactions and very slow transactions in the table.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Container map"), ", fixed the bug that causes intermittent whiteouts.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110516"
    }, `Preview 1.105.16`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 18, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "flex-board"
    }, `Flex Board`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the issue where the button layout goes out of the menu when the width of the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Hitmap"), " widget becomes narrower as the screen width decreases."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "my-usage-1"
    }, `My Usage`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Payment information"), ", added `Overseas bank transfer customer registration` when registering the payment data."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Payment information"), ", modified the payment process based on the country selection when registering the payment data."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Payment information"), ", modified not to display `Register reverse issuance account transfer` in Korea when registering the payment data."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Payment information"), ", changed the promotion banner."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Payment information"), ", modified the placeholder of `Register overseas card` to be displayed according to the locale language."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the page number count setting bug in ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Billing and payment history"), ".")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "report-1"
    }, `Report`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Deleted the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Visitor"), " column from the Daily applications custom report."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "go-php"
    }, `GO, PHP`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Application dashboard"), " > Memory detail window, modified the following.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Text change: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Heap total`), ` → `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `System memory`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Heap use`), ` → `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Process memory`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Deleting the system GC button`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "dashboard"
    }, `Dashboard`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Application dashboard"), " > Memory detail window, modified the following.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `When the size of the name column decreases, modified so that the tooltip is enabled by hovering the mouse over the ellipsis.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Fixed the bug where the tooltip of the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, `Detail`), ` button does not disappear after the button is clicked.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Application dashboard"), " > dragging ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "HITMAP"), " widget > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "HITMAP transaction"), " > selecting TX trace > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Statistics"), " window, in case the transaction log is not set under the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction log"), " tab:", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Language setting is Japanese: Fixed the line break bug in the displayed guidance message.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Language setting is Korean: Modified to apply the style in the displayed guidance message.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Modified to go to the Docs page for the set language when clicking the link in the displayed guide message.`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "analytics"
    }, `Analytics`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " If there is no result when searching for data in the MSA analysis menu, modified to display the `No data` guidance message.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "browser"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Browser`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Management"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Agent Installation"), ", added ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "proxyBaseUrl"), " as the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "config"), " option of the browser agent script.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110515"
    }, `Preview 1.105.15`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 18, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " Added the group title notations for each metric in ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Performance summary"), " in case of a cluster project."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "sample",
        src: (__webpack_require__(71649)/* ["default"] */ .Z),
        width: "1074",
        height: "429"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110514"
    }, `Preview 1.105.14`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 17, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common-4"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Flex Board"), ", added exception handling in the MXQL creation logic when using the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "logbits"), " field in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "app_user"), " category for application monitoring products."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "dashboard-1"
    }, `Dashboard`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Modified the notation of ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "onode"), " to ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Agent node"), " in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Record summary"), " tab on the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction analysis"), " window in the Kubernetes application project."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the bug where the statistics modal chart does not appear on the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction analysis"), " window."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction analysis"), " window, added the guidance message when any data is not viewed in ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "SQL summary"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Method summary"), ", and ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "HTTP Call summary"), " tabs.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "analytics-1"
    }, `Analytics`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Multi transaction trace"), ", fixed the bug where characters other than number cannot be entered in ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Search by MTID / CUSTID"), "."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "database-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "PostgreSQL V2"), " and ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Mysql V2"), " projects, English and Japanese guidance messages are supported in ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Slow query"), " and ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Database size"), "."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "dashboard-2"
    }, `Dashboard`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Multi container map"), ", fixed not to move to the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Namespace"), " menu.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "sample",
        src: (__webpack_require__(87627)/* ["default"] */ .Z),
        width: "381",
        height: "157"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In the Display detail panel under ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Container map"), ", changed the notation method when the block count is very large.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "sample",
        src: (__webpack_require__(22274)/* ["default"] */ .Z),
        width: "479",
        height: "362"
    }))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110513"
    }, `Preview 1.105.13`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 13, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common-5"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In the project creation menu, modified the product names (", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Node.js"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Altibase"), ")."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In the Japanese version, modified the sidebar texts for ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Create group"), " and ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Create project"), " buttons to be displayed in English.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application-4"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction map"), ", modified the chart design.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `Before modification`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `After modification`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "before",
        src: (__webpack_require__(79375)/* ["default"] */ .Z),
        width: "180",
        height: "158"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "after",
        src: (__webpack_require__(25098)/* ["default"] */ .Z),
        width: "186",
        height: "154"
    })))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction map"), ", improved to first display the error when a normal transaction and an error transaction overlap.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "browser-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Browser`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Analysis"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Page load hitmap"), ", added the page group filter and search filter."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Browser Error"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Error Detail"), ", modified the background style.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container-4"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Management"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Agent Installation"), ", modified as follows."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Application Agent Installation`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Docker PHP`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Deleted the subtitle at the top of the access key copying area in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Verify Access Key`)), ` section.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Deleted the subtitle from the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Kubernetes environment variables and volumes`)), ` section.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Application agent installation`)), ` > all installation types: Unified wording in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Verify Access Key`)), ` section and added an icon to the left of the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Chat contact`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `In the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Install guide`)), ` section, unified the icon on the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Chat contact`)), ` button with the channel talk icon.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `In `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Kubernetes agent installation`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `KUBERNETES`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Kubernetes agent creation`)), ` section, added notices related to OOM issues.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "laboratory"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Laboratory`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " (Only for ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Container"), " and ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Java"), " products) In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Remote Access Status"), ", modified to use the function even by the members without the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "View log"), " role.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110512"
    }, `Preview 1.105.12`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 12, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common-6"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "alert-1"
    }, `Alert`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Notification setting"), ", added the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "User-Header"), " function in the Webhook JSON addition form for the 3rd party plugin.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `User Header`), `: The key and value pair can be checked in the header when receiving a webhook. The following is an example of the received webhook when the user header key and value are entered as `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `User-Header-Key`), ` and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `TestValue`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-http",
        "metastring": "{8} title='example'",
        "{8}": true,
        "title": "'example'"
    }, `POST /test HTTP/1.1
Host: whatap.requestcatcher.com
Accept: text/plain, application/json, application/*+json, */*
Connection: keep-alive
Content-Length: 234
Content-Type: application/json
User-Agent: Java/17.0.7
User-Header-Key: Test-Value
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the issue where the window closes after adding a 3rd party plugin.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "dashboard-3"
    }, `Dashboard`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction analysis"), " window, modified to display as normal when the transaction name under the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Record summary"), " tab is longer than the screen."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction analysis"), " window, modified the layout width of the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Tree view"), " tab.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "flex-board-1"
    }, `Flex Board`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the issue where the menu does not appear upon clicking the dashboard copy button."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Added missing multilingual (English) texts in the dashboard copy window."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " When using the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Copy to others"), " function on a dashboard, added the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "_copied"), " suffix in the dashboard title."))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110511"
    }, `Preview 1.105.11`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 11, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common-7"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Modified the problem where the error message appears when the organization creation works normally."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Project list"), ", fixed the bug where the size cannot be adjusted.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "server-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Server list"), ", fixed the string by truncating the column header text that appears when clicking the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(LinkImage, {
        img: "ico-compare.svg",
        desc: "비교하기 아이콘",
        mdxType: "LinkImage"
    }), " (", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Compare"), ") option.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Korean: 비교하기 → 비교`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Japanese: ステータス → 状態`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Server list"), ", modified not to simultaneously enable the option buttons at the top.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "log"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Log`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Log"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Live Tail"), ", fixed the problem where the table row unfolding does not return to the original row height."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Log"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Log search"), ", modified the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Time selector"), " option when searching the tag's ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "adjacent logs"), ".")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "laboratory-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Laboratory`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "New"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Laboratory"), ", added ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Integrated log search"), "."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container-5"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Management"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Agent installation"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Application agent installation"), ", modified the issue where a Korean dashboard image is output for the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Start monitoring"), " image in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Docker PHP"), " tab without following the multilingual setting.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110510"
    }, `Preview 1.105.10`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 11, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "server-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the bug where the screen does not appear when entering the server project.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110509"
    }, `Preview 1.105.09`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 10, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container-6"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " Added the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Multi container map"), " menu.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "log-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Log`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "log-search"
    }, `Log Search`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the issue where ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "category==+none"), " is entered when you enter a ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "category"), " in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Filter"), " field or select a value in the side menu on the left."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the issue where a ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "category"), " cannot be entered additionally while a ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "category"), " is entered in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Filter"), " field."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed to prevent duplicate values from being entered in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Filter"), " field."))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110508"
    }, `Preview 1.105.08`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 10, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container-7"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Container map"), ", deleted the log role checking logic."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Dashboard"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Container map"), ", added the option to hide the tags in the event log."))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110507"
    }, `Preview 1.105.07`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 7, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "server-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Alert"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Event setting"), ", modified to display data from multiple charts at the same time when hovering your mouse on the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Testing event rules"), " chart."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container-8"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Application Agent Installation"), ", added the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Docker PHP"), " item.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110506"
    }, `Preview 1.105.06`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 6, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common-8"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the infinite loading problem when refreshing in the project menu within the organization."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Flex Board"), ", fixed the issue where it is not added to the sidebar menu when using the Dashboard Favorite function."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Flex Board"), ", set the timeout of 60 seconds for API update requests except for the initial call during real-time query."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the issue where invalid multi-transaction IDs are exposed in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction Analysis"), " window.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application-5"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Statistics"), " and ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "HITMAP"), ", if you use the search function (", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        src: "/img/ico-btn-search.png",
        alt: "검색 아이콘"
    }), "), modified to add the recent search time in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Last Time Searched"), " list of the time selector.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110505"
    }, `Preview 1.105.05`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 5, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common-9"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " Modified the password validation logic."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Use at least 9 characters with 3 combinations among English lowercase and uppercase letters, numbers, and special characters.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `The same password as your email cannot be used.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `The same password as the one you used cannot be used.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `A password containing consecutive keyboard arrangements is not allowed.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `A password containing consecutive alphabets is not allowed.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `A password containing consecutive numbers is not allowed.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `The same password as the current one cannot be used.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container-9"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Log"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Log setting"), ", modified the node agent log setting so that it can be applied with a click instead of directly entering options for user convenience."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "url"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `URL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " When using the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Add URL"), " function in ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "URL list"), ", deleted the duplicates in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Check location"), " section.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110504"
    }, `Preview 1.105.04`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 5, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In the following menu path, fixed the problem where the focus goes out of the search box if you enter a single character in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Key"), " search box."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Application"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Instance performance analysis"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Agent CONFIG."), " (Old versions)"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Management"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Agent CONFIG."), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Previous version"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Agent CONFIG."), " (Old versions)"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110503"
    }, `Preview 1.105.03`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 4, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container-10"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Resource"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Container volume"), ", fixed the bug where no data is output and only loading is displayed if you click the Show button.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110502"
    }, `Preview 1.105.02`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 4, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common-10"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " Modified the error message text style in the time selector.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "dashboard-4"
    }, `Dashboard`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction Analysis"), " window, fixed the bug where the bind text is partially displayed after decrypting the SQL bind."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the bug where a whiteout occurs in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Record"), " tab when re-entering the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction Analysis"), " window for multiple transactions.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "management"
    }, `Management`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Create organization"), ", modified the Japanese texts."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "log-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Log`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Log setting"), ", modified the log messages and Japanese texts."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Alert"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Event setting"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Log"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Add Alert Policy"), ", fixed the UI bug that appears when the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Filtering event targets"), " item is selected with ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Selector"), "."))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110501"
    }, `Preview 1.105.01`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `July 3, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common-11"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the bug where automatic refreshing is not performed after creation of a project."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "dashboard-5"
    }, `Dashboard`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction Analysis"), " window, fixed the bug where the agent filter is not applied when the transaction list is searched."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Transaction Analysis"), " window, fixed the bug where the transaction log tab is exposed for non-log projects.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "flex-board-2"
    }, `Flex Board`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In Integrated Flex Board, modified to expose the Share button even if you have no Edit role for all projects in the dashboard."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application-6"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In Python Project > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Management"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Agent installation"), ", fixed the download command in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Download agent"), " section."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In Java Project > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Management"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Agent installation"), ", fixed the JVM option code in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Add JVM options"), " section."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In Node.js Project > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Management"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Agent installation"), ", fixed the Node.js support version message.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "server-4"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the bug where the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Check period"), " button is not activated if you select a server to compare in the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Server list"), " menu."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Alert"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Event history"), ", fixed the bug where the event ID is not stored in the database once ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Acknowledge"), " has been added."))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-110500"
    }, `Preview 1.105.00`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `June 30, 2023`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "common-12"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Common`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the error message displayed when 10 or more free projects are generated."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the bug where any organization is not changed in a project."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Organization Management"), ", modified to go to the guide document in the selected language, if ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Go to guide document"), " is clicked."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In the dashboard under ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Flex Board"), ", modified to check the boolean value in case of the table widget.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application-7"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Modified the ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Log"), " tab style in the transaction modal."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "server-5"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "alert-2"
    }, `Alert`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Event setting"), ", fixed the bug where the alert settings for inactive servers are not displayed."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Fixed the bug where an error message appears even though the result is a success when copying an event from ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Log File / Window Event"), " to the current project in ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Event setting"), ".")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "database-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "New"), " Opened the MySQL Monitoring V2 service. To check the features changed compared to the previous, see ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        href: "../../mysql/monitoring-intro#new-feature"
    }, "the following"), "."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container-11"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " In ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Project list"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Namespace status"), ", and ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Namespace management"), ", modified the Kubernetes summary metric."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary", null, "Note image"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        src: (__webpack_require__(12145)/* ["default"] */ .Z),
        width: "356",
        height: "277"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        src: (__webpack_require__(51587)/* ["default"] */ .Z),
        width: "1318",
        height: "246"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        src: (__webpack_require__(79632)/* ["default"] */ .Z),
        width: "1086",
        height: "502"
    })))));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 25098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 79375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 12145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-metric-summary-01-2937a8a5142e670015e58dd112a78bf7.png");

/***/ }),

/***/ 51587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-metric-summary-02-ecf1ce1327b80f839447793c07dc2103.png");

/***/ }),

/***/ 79632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-metric-summary-03-87069c4ef0b6f3b9aeab7f5218a2f43e.png");

/***/ }),

/***/ 22274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/r-1_105_14-k8s-container-map-details-6febeda2a821e1afb98c83a5368fd17e.png");

/***/ }),

/***/ 87627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/r-1_105_14-k8s-multi-container-map-21862b0588f290d0b1ad481dd3c8cacd.png");

/***/ }),

/***/ 71649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/r-1_105_14-k8s-summary-cluster-75b16667f8e694323c568ccaf434ff82.png");

/***/ })

}]);