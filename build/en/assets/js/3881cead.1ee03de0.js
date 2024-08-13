"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[27380],{

/***/ 78827:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/java/java-agent.json
const java_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/en/release-notes/java/java-2_2_33","ver":"v2.2.33","date":"2024-05-28","Lists":[{"ver":"v2.2.33","hash":"v2233","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the method to pass <code>continerId</code> from the Kubernetes agent to a Java agent.</p>"},{"ver":"v2.2.33","hash":"v2233","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified to enable integrated tracing even when users who are using Spring-boot-2.5.x to 2.6.x implement the <code>NettyRoutingFilter</code> class for use.</p>","details":"<ul>\\n<li>Class NettyRoutingFilter <code>org.springframework.cloud.gateway.filter.NettyRoutingFilter</code></li>\\n</ul>"},{"ver":"v2.2.33","hash":"v2233","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Changed the <code>$okind</code> and <code>$onode</code> values to <code>okindName</code> and <code>onodeName</code> in the metrics in the <code>db_pool_detail</code> category.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/java/java-2_2_30","ver":"v2.2.30","date":"2024-03-21","Lists":[{"ver":"v2.2.30","hash":"v2230","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where Java agent 2.2.28 and 2.2.29 do not work in Java 1.5 to 1.7.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/java/java-2_2_32","ver":"v2.2.32","date":"2024-04-16","Lists":[{"ver":"v2.2.32","hash":"v2232","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> When using the aws.mysql library, tracing the <code>executeBatchInternal</code> method has been added.</p>","details":"<ul>\\n<li>\\n<code>software.aws.rds.jdbc.mysql.shading.com.mysql.cj.jdbc.ClientPreparedStatement.executeBatchInternal</code>\\n</li>\\n</ul>"},{"ver":"v2.2.32","hash":"v2232","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified to trace in Spring-boot-2.7.x to enable linked tracing even when you implemented the NettyRoutingFilter class.</p>","details":"<ul>\\n<li>Class NettyRoutingFilter <code>org.springframework.cloud.gateway.filter.NettyRoutingFilter</code></li>\\n</ul>"},{"ver":"v2.2.32","hash":"v2232","product":"Java Agent","type":"Deprecate","desc":"<p><code class=\\"Deprecate\\">Deprecate</code> In <span class=\\"uitext\\">Instance Performance Management</span> &gt; <span class=\\"uitext\\">System ENV. Variable</span>, stopped collecting the <code>jvm.uptime</code> data.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/java/java-2_2_29","ver":"v2.2.29","date":"2024-03-15","Lists":[{"ver":"v2.2.29","hash":"v2229","product":"Java Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> Added the jboss-logging-3.3 log collection.</p>"},{"ver":"v2.2.29","hash":"v2229","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the SQL data collection when using the <code>com.mysql.cj.jdbc.ClientPreparedStatement.executeBatchInternal</code> method.</p>"},{"ver":"v2.2.29","hash":"v2229","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Prevented the issue where a transaction is not completed after a bug occurs when collecting HTTP parameters in the Jboss environment.</p>"},{"ver":"v2.2.29","hash":"v2229","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> Stopped collecting the <b>HOSTNAME</b> for <code>env</code>.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/java/java-2_2_34","ver":"v2.2.34","date":"2024-06-14","Lists":[{"ver":"v2.2.34","hash":"v2234","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Changed the agent log when using the camel-cxf-3.15 plugin.</p>"},{"ver":"v2.2.34","hash":"v2234","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where the <code>log_root</code> path is registered in the <code>heapdump_root</code> option.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/java/java-2_2_36","ver":"v2.2.36","date":"2024-07-18","Lists":[{"ver":"v2.2.36","hash":"v2236","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the setting to return the original class if the weaving plugin compile version is different from the user code target version.</p>"},{"ver":"v2.2.36","hash":"v2236","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where logs are included in other transactions when leaving system logs.</p>","details":"<blockquote>\\n<p>e.g. System.out, System.err, hibernate System log (<code>org.hibernate.engine.jdbc.spi.SqlStatementLogger.logStatement</code>)</p>\\n</blockquote>"},{"ver":"v2.2.36","hash":"v2236","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where the user\'s log content cannot be collected when the logs including the exception stack are generated when using the logback and log4j.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/java/java-2_2_35","ver":"v2.2.35","date":"2024-06-20","Lists":[{"ver":"v2.2.35","hash":"v2235","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the linked trace feature upon used of the WebClient in spring-boot-3.0.5 or later (spring-webflux-6.0.7 or later).</p>"},{"ver":"v2.2.35","hash":"v2235","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where calling a transaction through spring-cloud-gateway does not make access in spring-boot-2.5 or earlier.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/java/java-2_2_31","ver":"v2.2.31","date":"2024-04-03","Lists":[{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Traced kafka-batch in spring-boot-2.7.x.</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the option to set whether or not to trace when SqlException occurs in the JDBC driver.</p>","details":"<p>By setting the option value to <code>false</code>, you can perform <code>biz_exceptions</code> as custom exception handling.</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the URL + HTTP method setting option.</p>","details":"<ul>\\n<li>e.g. /api/user+GET, /api/user+POST</li>\\n<li>In <span class=\\"uitext\\">Statistics</span> or <span class=\\"uitext\\">Transaction Search</span>, you can check with URL+method.</li>\\n<li>It collects data with URL+method with URL changed in the statistical data.</li>\\n</ul>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Update is performed with oshi-core-6.1.6.</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the feature to collect the netstat metric in the Java agent and added the Maximum Transmission Unit (MTU) metric.</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified to collect detailed traces with errors by default regardless of the <code>trace_basetime</code> or <code>profile_basetime</code> option.</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Updated the oshi release directory from lib4 to lib5.</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the agent log typo when applying the oshi and sigar libraries.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/java/java-2_2_27","ver":"v2.2.27","date":"2024-02-06","Lists":[{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Expanded the mule-3.9.5 tracing range.</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> camel-cxf-3.15 tracing</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the <code>OracleCallableStatement</code> tracing.</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> Redis key collection is stopped when using the Lettuce driver.</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Separated querystring from the request URL when using netty in spring-boot.</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where the request HTTP parameters cannot be collected when using netty in spring-boot.</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the display error in the transaction count and error count.</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Deprecate","desc":"<p><code class=\\"Deprecate\\">Deprecate</code> Redis value collection is stopped when using the Lettuce driver.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/java/java-2_2_26","ver":"v2.2.26","date":"2024-01-11","Lists":[{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Traces the reactor-kafka-1.3 in spring-boot-2.5 or later.</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Traces the RxJava schedules when using RxJava in spring-boot-2.5 or later.</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Traces RxJava3 schedules when using RxJava3 in spring-boot-3.0 or later.</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Collects and displays <code>threadName</code>, <code>className</code>, <code>methodName</code>, and <code>lineNumber</code> in the agent log.</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Modified the agent log format.</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Traces <code>CallableStatement</code> of Tibero.</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified the text color of the agent log.</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified the agent logfile name when starting the agent from <em>whatap-<code>date</code>.log</em> to <em>whatap.log</em>.</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> When the UTC reference date is changed, modified to save the <em>whatap.log</em> file name to <em>whatap-<code>date</code>.log</em>.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/java/java-2_2_28","ver":"v2.2.28","date":"2024-02-27","Lists":[{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> When tracing the logback-1.2.8, added the appender exclusion option.</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> Stopped using the option to collect only the specified appenders while tracing the logback-1.2.8.</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> When tracing the log4j-2.17, added the appender exclusion option.</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> Stopped using the option to collect only the specified appenders while tracing the log4j-2.17..</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> If the Pod name has not been specified in the container environment, modified to change it to be extracted from <code>HOSTNAME</code> in the environment variable (<code>env</code>).</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified to limit the number of logs when connected to JBoss Connection Pool.</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified the logs when sending the statistical data.</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the excessive TPS collection issue when using the <code>trace_sampling_enabled</code> option.</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the error that occurs when collecting the spring-security exception for spring-boot-3.x.</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/java/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Java Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/java/index",
  "title": "Java Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/java/index.mdx",
  "sourceDirName": "release-notes/java",
  "slug": "/release-notes/java/",
  "permalink": "/en/release-notes/java/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/java/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Java Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "v1.0.3",
    "permalink": "/en/release-notes/mobile/mobile-app-v1_0_3"
  },
  "next": {
    "title": "Java Agent v2.2.37",
    "permalink": "/en/release-notes/java/java-2_2_37"
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
        filePath: java_agent_namespaceObject,
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