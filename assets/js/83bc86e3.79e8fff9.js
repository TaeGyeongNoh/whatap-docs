"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["34679"], {
"70874": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_azure_flexboard_mdx_83b_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-azure-flexboard-mdx-83b.json
var site_docs_azure_flexboard_mdx_83b_namespaceObject = JSON.parse('{"id":"azure/flexboard","title":"Flex 보드","description":"사용자 정의형 통합 대시보드를 안내합니다. 사용자는 애플리케이션, 서버, 데이터베이스, 컨테이너 등의 데이터로 실시간 대시보드를 만들 수 있습니다. 사전 구성된 템플릿을 제공하며, 다양한 데이터 위젯 추가, 데이터 필터링, 시간 범위 설정 등의 기능을 통해 사용자가 원하는 모니터링 대상을 쉽게 간추리고 중요 데이터를 확인할 수 있습니다.","source":"@site/docs/azure/flexboard.mdx","sourceDirName":"azure","slug":"/azure/flexboard","permalink":"/azure/flexboard","draft":false,"unlisted":false,"editUrl":"undefined/docs/azure/flexboard.mdx","tags":[],"version":"current","frontMatter":{"id":"flexboard","title":"Flex 보드","description":"사용자 정의형 통합 대시보드를 안내합니다. 사용자는 애플리케이션, 서버, 데이터베이스, 컨테이너 등의 데이터로 실시간 대시보드를 만들 수 있습니다. 사전 구성된 템플릿을 제공하며, 다양한 데이터 위젯 추가, 데이터 필터링, 시간 범위 설정 등의 기능을 통해 사용자가 원하는 모니터링 대상을 쉽게 간추리고 중요 데이터를 확인할 수 있습니다.","keywords":["대시보드","Flex 보드","위젯","메트릭스","Azure Monitor","클라우드"],"isTranslationMissing":false},"sidebar":"azuremonitorSidebar","previous":{"title":"설치하기","permalink":"/azure/install-agent"},"next":{"title":"사전 템플릿 적용","permalink":"/azure/flexboard-template"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_flexboard-intro-def.mdx
var _flexboard_intro_def = __webpack_require__("86844");
;// CONCATENATED MODULE: ./docs/azure/flexboard.mdx


const frontMatter = {
	id: 'flexboard',
	title: 'Flex 보드',
	description: '사용자 정의형 통합 대시보드를 안내합니다. 사용자는 애플리케이션, 서버, 데이터베이스, 컨테이너 등의 데이터로 실시간 대시보드를 만들 수 있습니다. 사전 구성된 템플릿을 제공하며, 다양한 데이터 위젯 추가, 데이터 필터링, 시간 범위 설정 등의 기능을 통해 사용자가 원하는 모니터링 대상을 쉽게 간추리고 중요 데이터를 확인할 수 있습니다.',
	keywords: [
		'대시보드',
		'Flex 보드',
		'위젯',
		'메트릭스',
		'Azure Monitor',
		'클라우드'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._flexboard_intro_def/* toc */.d$];
function _createMdxContent(props) {
  return (0,jsx_runtime.jsx)(_flexboard_intro_def/* default */.ZP, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
"86844": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Flex 보드"
        })
      }), "는 사용자 정의형 통합 대시보드입니다. 애플리케이션, 서버, 데이터베이스, 컨테이너 등 프로젝트의 데이터로 실시간 대시보드를 만들 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "flex-board-mod.png",
      desc: "Flex 보드 수정 모드"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "사전 구성된 템플릿을 제공해 초기 설정을 손쉽게 진행할 수 있습니다. 이를 통해 사용자가 원하는 다양한 대시보드를 구성할 수 있습니다."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "다양한 형태의 데이터 위젯을 추가할 수 있고, 개별 위젯의 속성을 수정해 사용자가 원하는 데이터 형식을 표시할 수 있습니다."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "데이터 필터링을 통해 사용자가 원하는 모니터링 대상을 간추릴 수 있습니다."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "시간 범위를 설정해 중요 시간의 데이터를 확인할 수 있습니다."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "보조 차트를 활용해 다양한 방법으로 데이터를 확인할 수 있습니다."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "대시보드를 즐겨 찾는 메뉴로 등록할 수 있습니다."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "개인화된 대시보드를 타 계정에 복사해 활용할 수 있습니다."
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
"50065": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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


}),

}]);