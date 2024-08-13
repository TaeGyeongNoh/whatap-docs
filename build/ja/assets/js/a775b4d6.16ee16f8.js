"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[48907],{

/***/ 55088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ _topology_settings_whatap_MDXContent),
  RM: () => (/* binding */ _topology_settings_whatap_toc)
});

// UNUSED EXPORTS: contentTitle, frontMatter

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_common-whatap-topology-map.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.tx_caller_meter_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["トランザクション情報でトポロジ統計を生成します。", (0,jsx_runtime.jsx)(_components.code, {
          children: "mtrace_enabled"
        }), "オプションの値が", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "の場合、機能します。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.sql_dbc_meter_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "データベースの接続情報を使用してトポロジ統計を生成します."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.httpc_host_meter_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トポロジマップでhttpc outbound情報を表示します。"
      }), "\n"]
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_topology-settings-whatap.mdx


const _topology_settings_whatap_frontMatter = {};
const _topology_settings_whatap_contentTitle = (/* unused pure expression or super */ null && (undefined));






const _topology_settings_whatap_toc = [{
  "value": "whatap.conf設定",
  "id": "whatapconf設定",
  "level": 2
}, ...toc];
function _topology_settings_whatap_createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "whatapconf設定",
      children: "whatap.conf設定"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["次は、トポロジー表示を", (0,jsx_runtime.jsx)(_components.em, {
        children: "whatap.conf"
      }), "ファイルで設定できる情報収集オプションです。"]
    }), (0,jsx_runtime.jsx)(MDXContent, {})]
  });
}
function _topology_settings_whatap_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_topology_settings_whatap_createMdxContent, {
      ...props
    })
  }) : _topology_settings_whatap_createMdxContent(props);
}



/***/ }),

/***/ 49785:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _common_items_topology_settings_whatap_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55088);


const frontMatter = {
	id: 'topology-settings',
	title: 'エージェントのオプション設定',
	description: 'トポロジー機能を利用するためにエージェントにオプションを適用する方法を提供します。',
	tags: [
		'.NET',
		'トポロジー',
		'エージェント'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "dotnet/topology-settings",
  "title": "エージェントのオプション設定",
  "description": "トポロジー機能を利用するためにエージェントにオプションを適用する方法を提供します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/dotnet/topology-settings.mdx",
  "sourceDirName": "dotnet",
  "slug": "/dotnet/topology-settings",
  "permalink": "/ja/dotnet/topology-settings",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/dotnet/topology-settings.mdx",
  "tags": [
    {
      "inline": true,
      "label": ".NET",
      "permalink": "/ja/tags/net"
    },
    {
      "inline": true,
      "label": "トポロジー",
      "permalink": "/ja/tags/トポロジー"
    },
    {
      "inline": true,
      "label": "エージェント",
      "permalink": "/ja/tags/エージェント"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "topology-settings",
    "title": "エージェントのオプション設定",
    "description": "トポロジー機能を利用するためにエージェントにオプションを適用する方法を提供します。",
    "tags": [
      ".NET",
      "トポロジー",
      "エージェント"
    ]
  },
  "sidebar": "dotNetSidebar",
  "previous": {
    "title": "付加機能",
    "permalink": "/ja/dotnet/topology-add-function"
  },
  "next": {
    "title": "統計",
    "permalink": "/ja/dotnet/analysis-apm-trs"
  }
};
const assets = {

};

/*## 적용 가능 에이전트 및 버전*/
/*Java 에이전트 1.7.1 버전 이상*/
/*_ Node.js 에이전트 0.4.1 버전 이상*/
/*{@include: ../common-items/_java-topology-whatap-sample.mdx}

import Nodejstopologywhatapsample from "../common-items/_nodejs-topology-whatap-sample.mdx";

<Nodejstopologywhatapsample />*/



const toc = [..._common_items_topology_settings_whatap_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "トポロジー機能を利用するためにエージェントにオプションを適用する方法を提供します。"
    }), "\n", "\n", "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_topology_settings_whatap_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);