"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[81763],{

/***/ 81437:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'set-real-user-id',
	title: '実際ユーザーIDの設定',
	description: 'ブラウザーモニタリングでは、実際のユーザーIDやEメールなどでユーザーIDを設定し、データを収集できます。',
	tags: [
		'Browserモニタリング',
		'エージェント',
		'実際ユーザーIDの設定'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "browser/set-real-user-id",
  "title": "実際ユーザーIDの設定",
  "description": "ブラウザーモニタリングでは、実際のユーザーIDやEメールなどでユーザーIDを設定し、データを収集できます。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/browser/set-real-user-id.mdx",
  "sourceDirName": "browser",
  "slug": "/browser/set-real-user-id",
  "permalink": "/ja/browser/set-real-user-id",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/browser/set-real-user-id.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Browserモニタリング",
      "permalink": "/ja/tags/browserモニタリング"
    },
    {
      "inline": true,
      "label": "エージェント",
      "permalink": "/ja/tags/エージェント"
    },
    {
      "inline": true,
      "label": "実際ユーザーIDの設定",
      "permalink": "/ja/tags/実際ユーザーidの設定"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "set-real-user-id",
    "title": "実際ユーザーIDの設定",
    "description": "ブラウザーモニタリングでは、実際のユーザーIDやEメールなどでユーザーIDを設定し、データを収集できます。",
    "tags": [
      "Browserモニタリング",
      "エージェント",
      "実際ユーザーIDの設定"
    ]
  },
  "sidebar": "rumsSidebar",
  "previous": {
    "title": "ユーザー定義イベントの収集",
    "permalink": "/ja/browser/collect-custom-events"
  },
  "next": {
    "title": "始める前に",
    "permalink": "/ja/browser/before-starting"
  }
};
const assets = {

};



const toc = [{
  "value": "実際のユーザーIDを設定する",
  "id": "実際のユーザーidを設定する",
  "level": 2
}, {
  "value": "インタフェース",
  "id": "インタフェース",
  "level": 3
}, {
  "value": "適用例",
  "id": "適用例",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "ブラウザーモニタリングは、基本的にユーザーIDをランダムで発行して管理します。 ただし、追加で実際ユーザーのログインIDやEメールなどでユーザーIDを設定し、データを収集できる機能を提供します。 実際ユーザーIDを設定すると、ログインIDまたはEメールベースでユーザーセッションの性能とイベント情報やブラウザーエラー情報が確認できます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "ブラウザーモニタリングでユーザーを識別できるため、パーソナライズされた分析や正確なユーザー体験の分析、マーケティング戦略の策定、セキュリティの強化などの業務に活用できます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "実際のユーザーidを設定する",
        children: "実際のユーザーIDを設定する"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "インタフェース",
        children: "インタフェース"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["ブラウザーエージェントが提供するインターフェースは、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "window"
        }), "の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WhatapBrowserAgent"
        }), "オブジェクトに含まれています。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WhatapBrowserAgent"
        }), "で提供する", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "setUserID"
        }), "のインターフェースを参照にしてください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-tsx",
          metastring: "title='Typescript'",
          children: "setUserID: (userID: string) => void;\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "適用例",
        children: "適用例"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "ブラウザーエージェントが提供するインターフェースを例示コードのように適用できます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-tsx",
          metastring: "title='Typescript'",
          children: "const loginComplete = (data) => {\n\tif (data) {\n\t\t/*\n\t\t* @description WhaTapブラウザーエージェントユーザーIDの設定\n\t\t*/\n\t\twindow?.WhatapBrowserAgent?.setUserID?.(data?.email);\n\t}\n};\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "loginComplete"
        }), "関数が動作する時、実際ユーザーの電子メールがブラウザーモニタリングで使用するユーザーIDとして設定されます。"]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
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