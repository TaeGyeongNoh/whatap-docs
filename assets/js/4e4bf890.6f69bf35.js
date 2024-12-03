"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["4918"], {
"44186": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_db_xos_agent_mdx_4e4_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-db-xos-agent-mdx-4e4.json
var site_docs_release_notes_db_xos_agent_mdx_4e4_namespaceObject = JSON.parse('{"id":"release-notes/db/xos-agent","title":"XOS Agent Release Notes","description":"Release history for 2024","source":"@site/docs/release-notes/db/xos-agent.mdx","sourceDirName":"release-notes/db","slug":"/release-notes/db/xos-agent","permalink":"/release-notes/db/xos-agent","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/db/xos-agent.mdx","tags":[],"version":"current","frontMatter":{"id":"xos-agent","title":"XOS Agent Release Notes","displayed_sidebar":"releaseSidebar","hide_table_of_contents":true,"toc_min_heading_level":2,"isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"DBX 지난 버전","permalink":"/release-notes/db/dbx-previous"},"next":{"title":"xos v1.1.8f","permalink":"/release-notes/db/xos-1_1_8f"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/db/xos-agent.json
var xos_agent_namespaceObject = JSON.parse('[{"url":"https://docs.whatap.io/release-notes/db/xos-1_1_8f","ver":"v1.1.8f","date":"2024-06-27","Lists":[{"ver":"v1.1.8f","hash":"v118f","product":"xos","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> XOS 에러 메시지 번호를 내용까지 표시하도록 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/db/xos-1_1_8a","ver":"v1.1.8a","date":"2024-01-25","Lists":[{"ver":"v1.1.8a","hash":"v118a","product":"xos","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> PostgreSQL에서 log 파일 이름 설정 시 <code>%H%M%S</code>의 시분초까지 사용할 수 있도록 함</p>"},{"ver":"v1.1.8a","hash":"v118a","product":"xos","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> CPU 사용률이 음수로 나오는 버그 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/db/xos-1_1_8b","ver":"v1.1.8b","date":"2024-03-15","Lists":[{"ver":"v1.1.8b","hash":"v118b","product":"xos","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 프로세스 값이 음수로 출력될 경우 로그 수정</p>"}]}]')
;// CONCATENATED MODULE: ./docs/release-notes/db/xos-agent.mdx


const frontMatter = {
	id: 'xos-agent',
	title: 'XOS Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Release history for 2024",
  "id": "release-history-for-2024",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    section: "section",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Head, ImportJson} = _components;
  if (!Head) _missingMdxReference("Head", true);
  if (!ImportJson) _missingMdxReference("ImportJson", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "release-history-for-2024",
        children: "Release history for 2024"
      }), (0,jsx_runtime.jsx)(ImportJson, {
        filePath: xos_agent_namespaceObject,
        sort: "date",
        category: "agent",
        platform: "db"
      })]
    })]
  });
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