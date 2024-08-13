"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[96721],{

/***/ 48370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/release-notes/golang/go-agent.json
const go_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/golang/golang-0_3_2","ver":"v0.3.2","date":"2024-03-06","Lists":[{"ver":"v0.3.2","hash":"v032","product":"Go Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 로그 모니터링 파일 이름에 날짜 형식의 변수를 사용하도록 수정</p>","details":"<blockquote>\\n<p>Python <code>strftime()</code> 사용 기준으로 수정합니다. 예, 20240101: %Y%m%d</p>\\n</blockquote>"},{"ver":"v0.3.2","hash":"v032","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> gRPC 헤더 수집 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/golang/golang-0_4_0","ver":"v0.4.0","date":"2024-06-19","Lists":[{"ver":"v0.4.0","hash":"v040","product":"Go Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> linux aarch64 지원</p>"},{"ver":"v0.4.0","hash":"v040","product":"Go Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 기존 <em>paramkey.txt</em> 대신 <em>security.conf</em> 파일 사용</p>","details":"<p>기존 <em>security.conf</em> 파일의 <code>paramkey</code> 키의 값을 사용합니다. 기본값은 무작위값이 아닌 <code>WHATAP</code>으로 지정도록 변경합니다. <code>WHATAP</code> 지정되면 키 입력없이 복호화할 수 있습니다.</p>"},{"ver":"v0.4.0","hash":"v040","product":"Go Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> SQL 문장의 정규화 옵션 설정 변경</p>","details":"<ul>\\n<li>\\n<p>SQL 문장에서 파라미터를 분리하여 정규화하는 기능을 항상 활성화하세요. <code>trace_sql_normalize_enabled</code> 옵션을 항상 <code>true</code>로 설정하세요.</p>\\n</li>\\n<li>\\n<p>이미 정규화 옵션을 비활성화(정규화 중지 설정)한 상태라면, 정규화해서 파라미터를 별도 표기하는 설정을 활성화하세요.</p>\\n<ul>\\n<li><code>profile_sql_param_enabled</code> 옵션을 <code>true</code>로 설정하세요.</li>\\n<li>정규화된 파라미터를 별도 암호화하여 수집합니다.</li>\\n<li><em>security.conf</em>의 <code>paramkey</code>로 복호화하여 데이터를 확인할 수 있습니다.</li>\\n</ul>\\n</li>\\n</ul>"},{"ver":"v0.4.0","hash":"v040","product":"Go Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 모니터링 중지 기능 변경</p>","details":"<ul>\\n<li>\\n<p><code>trace.Init()</code> 함수 호출이 없을 경우(주석 및 삭제) 모니터링 기능을 시작하지 않습니다.</p>\\n</li>\\n<li>\\n<p><code>enabled</code> 옵션 설정(<code>true</code>): 정보 수집 기능을 중지합니다. 에이전트의 내부 백그라운드 모듈은 유지됩니다.</p>\\n</li>\\n<li>\\n<p><code>shutdown</code> 옵션 설정(<code>true</code>): 모든 에이전트 기능을 중지합니다. 다시 시작하려면 <code>shutdown</code> 옵션을 <code>true</code>로 변경하고 애플리케이션을 재시작해야 합니다.</p>\\n</li>\\n</ul>"},{"ver":"v0.4.0","hash":"v040","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 에이전트가 설치된 서버의 IP를 127.0.0.1로 수집하는 문제 수정, 와탭 서버와 TCP 연결된 Local address IP 정보로 수집</p>"}]},{"url":"https://docs.whatap.io/release-notes/golang/golang-0_3_0","ver":"v0.3.0","date":"2024-01-10","Lists":[{"ver":"v0.3.0","hash":"v030","product":"Go Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 멀티 트랜잭션 추적에서 Trace context(W3C) 지원</p>","details":"<p>Trace context를 지원하는 <strong>OpenTelmetry</strong>와 멀티 트랜잭션 추적 연계를 지원합니다.</p>"},{"ver":"v0.3.0","hash":"v030","product":"Go Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> SQL, Method, HTTP call의 리소스 지표 수집 수정</p>","details":"<p>트랜잭션 시작 시점의 리소스(cpu, memory)와 각 스탭 시작 시점의 리소스 차이를 수집합니다.</p>"},{"ver":"v0.3.0","hash":"v030","product":"Go Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 설정 파일(<em>whatap.conf</em>)이 없을 경우 새로 생성하도록 수정</p>"},{"ver":"v0.3.0","hash":"v030","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 액티브 트랜잭션 목록에서 외부 호출 누적 건수가 누적 시간으로 잘못 수집되는 오류 수정</p>"},{"ver":"v0.3.0","hash":"v030","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 리눅스 환경에서 whatap-agent 서비스(<code>whatap-agent.service</code>) 실행 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/golang/golang-0_3_3","ver":"v0.3.3","date":"2024-03-14","Lists":[{"ver":"v0.3.3","hash":"v033","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>go.mod</code>의 replace 구문 삭제(github.com/whatap/golib 모듈의 replace 구문을 삭제)</p>"},{"ver":"v0.3.3","hash":"v033","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 예제 소스 빌드 오류 수정(github.com/whatap/go-api-example)</p>"}]},{"url":"https://docs.whatap.io/release-notes/golang/golang-0_3_1","ver":"v0.3.1","date":"2024-01-24","Lists":[{"ver":"v0.3.1","hash":"v031","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>whatap.onode</code> 옵션 설정 후 이름이 아닌 해쉬(숫자)값만 표기되는 오류 수정</p>"},{"ver":"v0.3.1","hash":"v031","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Ubuntu 14 버전에서 whatap-agent.service 파일이 인식 안되는 오류 수정</p>"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/golang/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Go Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/golang/index",
  "title": "Go Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/docs/release-notes/golang/index.mdx",
  "sourceDirName": "release-notes/golang",
  "slug": "/release-notes/golang/",
  "permalink": "/release-notes/golang/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/golang/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Go Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": ".NET Agent 지난 버전",
    "permalink": "/release-notes/dotnet/dotnet-previous"
  },
  "next": {
    "title": "Go Agent v0.4.0",
    "permalink": "/release-notes/golang/golang-0_4_0"
  }
};
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
    ...(0,lib/* useMDXComponents */.R)(),
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
        filePath: go_agent_namespaceObject,
        sort: "date",
        category: "agent"
      })]
    })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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