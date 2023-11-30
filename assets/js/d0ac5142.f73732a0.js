"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[95376],{

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

/***/ 78098:
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
    id: 'preview-2_0_0x',
    title: 'Preview 2.0.0.a',
    toc_max_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "release-notes/preview/preview-2_0_0x",
    "id": "release-notes/preview/preview-2_0_0x",
    "title": "Preview 2.0.0.a",
    "description": "https://preview.whatap.io에서 다음 추가한 신기능과 수정한 내용을 미리 경험할 수 있습니다.",
    "source": "@site/docs/release-notes/preview/preview-2.0.0.a.mdx",
    "sourceDirName": "release-notes/preview",
    "slug": "/release-notes/preview/preview-2_0_0x",
    "permalink": "/release-notes/preview/preview-2_0_0x",
    "draft": false,
    "editUrl": "undefined/docs/release-notes/preview/preview-2.0.0.a.mdx",
    "tags": [],
    "version": "current",
    "frontMatter": {
        "id": "preview-2_0_0x",
        "title": "Preview 2.0.0.a",
        "toc_max_heading_level": 2
    },
    "sidebar": "previewSidebar",
    "previous": {
        "title": "Preview Release Notes",
        "permalink": "/release-notes/preview/"
    },
    "next": {
        "title": "Preview 1.113.X",
        "permalink": "/release-notes/preview/preview-1_113_x"
    }
};
const assets = {};
const toc = [
    {
        value: 'Preview 2.0.0.a0',
        id: 'preview-200a0',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통',
        level: 3
    },
    {
        value: '<Cmdname sid="my_usage" />',
        id: 'cmdname-sidmy_usage-',
        level: 4
    },
    {
        value: '<Cmdname sid="dashboard" />',
        id: 'cmdname-siddashboard-',
        level: 4
    },
    {
        value: '<Cmdname sid="analysis" />',
        id: 'cmdname-sidanalysis-',
        level: 4
    },
    {
        value: '<Cmdname sid="reportStat" />',
        id: 'cmdname-sidreportstat-',
        level: 4
    },
    {
        value: 'User Interface',
        id: 'user-interface',
        level: 4
    },
    {
        value: '<code>Application</code>',
        id: 'application',
        level: 3
    },
    {
        value: '<code>Server</code>',
        id: 'server',
        level: 3
    },
    {
        value: '<code>Database</code>',
        id: 'database',
        level: 3
    },
    {
        value: '공통',
        id: '공통-1',
        level: 4
    },
    {
        value: 'PosgreSQL <span class="my">V2</span>',
        id: 'posgresql-v2',
        level: 4
    },
    {
        value: 'MySQL <span class="my">V2</span>',
        id: 'mysql-v2',
        level: 4
    },
    {
        value: '<code>Kubernetes</code>',
        id: 'kubernetes',
        level: 3
    },
    {
        value: '<code>Log</code>',
        id: 'log',
        level: 3
    },
    {
        value: '<code>Cloud</code>',
        id: 'cloud',
        level: 3
    },
    {
        value: '<code>Network</code>',
        id: 'network',
        level: 3
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", props);
    };
const Cmdname = makeShortcode("Cmdname");
const Status = makeShortcode("Status");
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
    }, `https://preview.whatap.io`), `에서 다음 추가한 신기능과 수정한 내용을 미리 경험할 수 있습니다. `)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "preview-200a0"
    }, `Preview 2.0.0.a0`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023년 11월 29일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "공통"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "cmdname-sidmy_usage-"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "my_usage",
        mdxType: "Cmdname"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Changed"), " 결제 정보를 등록하지 않더라도 프로모션 배너를 노출하고, 결제 정보를 등록하지 않은 상태에서 프로모션 코드를 입력할 수 없도록 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "billingPreview",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 사용량 수치를 클릭하면 사용량 상세 정보를 표시하는 기능 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "quota",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 다국어가 적용되지 않은 용어 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "cmdname-siddashboard-"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "dashboard",
        mdxType: "Cmdname"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "integrated_dashboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 위젯의 툴팁이 사라지지 않는 현상 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "cmdname-sidanalysis-"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "analysis",
        mdxType: "Cmdname"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "tag_count_chart",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴의 차트 위젯 상세 보기에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "BTN06884",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 버튼이 동작하지 않는 문제 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "tag_count_anomaly_detection",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "BTN06884",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 버튼이 동작하지 않는 문제 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "cmdname-sidreportstat-"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "reportStat",
        mdxType: "Cmdname"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "report",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "guide",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 버튼 클릭 시, 설정된 언어에 맞춰 가이드(Docs) 링크로 이동하도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "user-interface"
    }, `User Interface`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 서비스 화면에서 다크 테마가 적용되지 않은 요소를 모두 적용 완료했습니다. 다크 테마는 서비스 화면의 오른쪽 위에 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(LinkImage, {
        img: "ico-theme.svg",
        desc: "테마 아이콘",
        mdxType: "LinkImage"
    }), " 버튼을 선택한 다음 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "uitext"
    }, "Dark"), "를 클릭하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Changed"), " 채팅 문의 화면에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "one_on_one_user_training",
        className: "b500",
        mdxType: "Cmdname"
    }), " 텍스트를 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "DSC07202",
        className: "uitext",
        mdxType: "Cmdname"
    }), "으로 변경")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 구버전의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "app_dashboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 위젯 정보 툴팁의 콘텐츠가 출력되지 않는 문제 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06209",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 창의 테이블에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06086",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 컬럼 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Changed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "app_dashboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "dashboard_hitmap",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 위젯에 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "hitmap_transaction",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴로 이동하는 버튼 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "app_dashboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴의 각 위젯에 툴팁 및 관련 정보, 다국어 지원 추가")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "server"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "log",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "log_setting",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 에이전트 설정 및 실행 스크립트 내용을 정상 작동하도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Changed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "log",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "log_setting",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 에이전트 설정 및 실행 스크립트의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "encoding"), " 항목을 설정된 언어에 따라 다르게 표시하도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Changed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "event_statistic",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "event_setting",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 메트릭스 이벤트 추가 및 수정 시 이벤트 발생 조건 및 대상 설정 관련 주의 문구 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "sms_server_list",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "serverDetail",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴의 상세 보기 화면에서 이름이 길어 생략(...) 처리된 경우 마우스 오버 시 툴팁이 표시되도록 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "database"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "공통-1"
    }, `공통`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "reportStat",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "statistics_sql",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 쿼리(query)에 마우스 오버 시 쿼리 미리보기 기능 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "posgresql-v2"
    }, `PosgreSQL `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "my"
    }, `V2`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "analysis",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06993",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 에이전트 설정 방법 안내 모달 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "analysis",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06993",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 기능 소개 모달 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "analysis",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06993",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 데이터가 출력되지 않는 문제 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "reportStat",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "pg_stat",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 쿼리(query)에 마우스 오버 시 쿼리 미리보기 기능 추가")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "mysql-v2"
    }, `MySQL `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "my"
    }, `V2`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "reportStat",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06865",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 쿼리(query)에 마우스 오버 시 쿼리 미리보기 기능 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "kubernetes"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Kubernetes`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06987",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴 하위로 다음의 메뉴 추가", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "podList",
        className: "uitext",
        mdxType: "Cmdname"
    }), ": Pod 목록 및 상세 정보 제공"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "containerizedAppList",
        className: "uitext",
        mdxType: "Cmdname"
    }), ": 컨테이너화된 애플리케이션 목록 및 상세 정보 제공"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "containerImages",
        className: "uitext",
        mdxType: "Cmdname"
    }), ": 사용중인 이미지 목록 제공"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "management",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴 하위로 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "correlatedProjectManagement",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴 추가: 연계 프로젝트 등록, 조회, 삭제 기능"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " 연계 등록된 프로젝트가 있을 경우 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06209",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "table_view",
        className: "uitext",
        mdxType: "Cmdname"
    }), "에서 SQL 대상 서버 정보 및 HTTPURLConnection 정보에 대해 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL07046",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 뷰 제공"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Deprecated"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "tag_count_chart",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 메트릭스 차트 '컨테이너' 카테고리 삭제"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Changed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "dashboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "containerMap",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴의 요약 보기 화면에서 현재 로그(Stdout) 조회 시 컨테이너 id를 컨테이너 이름으로 표시하도록 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "dashboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "containerMap",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 요약 보기 창의 타이틀 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06987",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "performance_summary",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 사용자의 기기에 따라 위젯 안의 콘텐츠가 제대로 표시되지 않는 문제 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "event_statistic",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "event_setting",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 메트릭스 이벤트 추가 창의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "BTN07231",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 버튼에 설정된 링크 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Changed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06987",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "node_list",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 컬럼 분류 및 위치 변경", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `CapacityCpu`)), ` 컬럼을 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06705",
        className: "uitext",
        mdxType: "Cmdname"
    }), `에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06701",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 하위로 이동`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `CapacityMemory`)), ` 컬럼을 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06705",
        className: "uitext",
        mdxType: "Cmdname"
    }), `에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "TTL06702",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 하위로 이동`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "log"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Log`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "log_search",
        className: "uitext",
        mdxType: "Cmdname"
    }), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "logTail",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 로그 검색 필터 기능 개편", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `검색값 입력 시 지원하는 검색 문법 안내 가이드 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `추가된 태그 수정 시 키보드 입력으로 수정할 수 있는 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `태그를 키보드 입력으로 생성 및 수정 가능하고, 연산자는 클릭하여 수정할 수 있는 기능 추가`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "cloud"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Cloud`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "management",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "agent_installation",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "pricing",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 탭의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "price_policy",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 버튼의 링크를 설정된 언어에 맞게 이동하도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Amazon CloudWatch, Azure Monitor, Oracle Cloud Monitor 대상`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "network"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Network`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "",
        className: "uitext",
        mdxType: "Cmdname"
    }), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "analysis",
        className: "uitext",
        mdxType: "Cmdname"
    }), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "MNU06850",
        className: "uitext",
        mdxType: "Cmdname"
    }), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Cmdname, {
        sid: "MNU06851",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 필터 검색이 실패되는 문제 수정")));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);