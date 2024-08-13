"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[41136],{

/***/ 96821:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/java/java-agent.json
const java_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/ja/release-notes/java/java-2_2_35","ver":"v2.2.35","date":"2024-06-20","Lists":[{"ver":"v2.2.35","hash":"v2235","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> spring-boot-3.0.5以降(spring-webflux-6.0.7以降) バージョンでWebClient使用時、連携追跡機能を追加</p>"},{"ver":"v2.2.35","hash":"v2235","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> spring-boot-2.5未満でspring-cloud-gatewayを通じてトランザクションを呼び出すと、接続されない問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/java/java-2_2_32","ver":"v2.2.32","date":"2024-04-16","Lists":[{"ver":"v2.2.32","hash":"v2232","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> aws.mysqlライブラリを使用する場合、<code>executeBatchInternal</code>メソッドを追跡</p>","details":"<ul>\\n<li>\\n<code>software.aws.rds.jdbc.mysql.shading.com.mysql.cj.jdbc.ClientPreparedStatement.executeBatchInternal</code>\\n</li>\\n</ul>"},{"ver":"v2.2.32","hash":"v2232","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Spring-boot-2.7.xで使用者がNettyRoutingFilterクラスを実装して使用する場合でも、連携追跡できるように修正</p>","details":"<ul>\\n<li>Class NettyRoutingFilter <code>org.springframework.cloud.gateway.filter.NettyRoutingFilter</code></li>\\n</ul>"},{"ver":"v2.2.32","hash":"v2232","product":"Java Agent","type":"Deprecate","desc":"<p><code class=\\"Deprecate\\">Deprecate</code> <span class=\\"uitext\\">インスタンス性能管理</span> &gt; <span class=\\"uitext\\">環境変数</span>メニューで<code>jvm.uptime</code>データ収集を中止</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/java/java-2_2_31","ver":"v2.2.31","date":"2024-04-03","Lists":[{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> spring-boot-2.7.xでkafka-batchを追跡</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> JDBCドライバーでSqlExceptionが発生した場合、追跡有無の設定オプションを追加</p>","details":"<p>オプション値を<code>false</code>に設定すると、ユーザー定義の例外処理により<code>biz_exceptions</code>処理できます。</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> URL + HTTP method設定オプションを追加</p>","details":"<ul>\\n<li>例、/api/user+GET、/api/user+POST</li>\\n<li><span class=\\"uitext\\">統計</span>または<span class=\\"uitext\\">TX検索</span>メニューでURL methodで確認可能</li>\\n<li>統計データでURL変更したURL methodで収集</li>\\n</ul>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> oshi-core-6.1.6にアップデート</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>Javaエージェントでnetstat指標を収集、Maximum Transmission Unit(MTU) 指標を追加</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>trace_basetime</code>または<code>profile_basetime</code>オプションと関係なくエラーのある詳細トレースを基本収集するよう修正</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> oshiの配布ディレクトリをlib4からlib5にアップデート</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> oshi、sigarライブラリ適用時のエージェントログの誤字を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/java/java-2_2_29","ver":"v2.2.29","date":"2024-03-15","Lists":[{"ver":"v2.2.29","hash":"v2229","product":"Java Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> jboss-logging-3.3ログ収集を追加</p>"},{"ver":"v2.2.29","hash":"v2229","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>com.mysql.cj.jdbc.ClientPreparedStatement.executeBatchInternal</code>メソッド使用時にSQLデータ収集を追加</p>"},{"ver":"v2.2.29","hash":"v2229","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Jboss環境でHTTPパラメータ収集時にバグが発生するとトランザクションを終了できない現象を防止</p>"},{"ver":"v2.2.29","hash":"v2229","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> <code>env</code>の<b>HOSTNAME</b>データ収集を中断</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/java/java-2_2_34","ver":"v2.2.34","date":"2024-06-14","Lists":[{"ver":"v2.2.34","hash":"v2234","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> camel-cxf-3.15プラグイン使用時、エージェントログを修正</p>"},{"ver":"v2.2.34","hash":"v2234","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>heapdump_root</code>オプションに<code>log_root</code>パスが登録される問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/java/java-2_2_30","ver":"v2.2.30","date":"2024-03-21","Lists":[{"ver":"v2.2.30","hash":"v2230","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Java 1.5 ~ 1.7環境でJavaエージェント2.2.28、2.2.29バージョンが動作しない問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/java/java-2_2_36","ver":"v2.2.36","date":"2024-07-18","Lists":[{"ver":"v2.2.36","hash":"v2236","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>ウィービングプラグインコンパイルバージョンとユーザーコードターゲットバージョンが異なる場合、原本クラスを返す設定を追加</p>"},{"ver":"v2.2.36","hash":"v2236","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Systemログを残す場合、他のトランザクションにそのログが含まれる問題を修正</p>","details":"<blockquote>\\n<p>例）System.out, System.err, hibernate Systemログ (<code>org.hibernate.engine.jdbc.spi.SqlStatementLogger.logStatement</code>)</p>\\n</blockquote>"},{"ver":"v2.2.36","hash":"v2236","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> logback、log4jの使用時にException stackを含むログが発生した場合、ユーザーのログコンテンツを収集できない問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/java/java-2_2_33","ver":"v2.2.33","date":"2024-05-28","Lists":[{"ver":"v2.2.33","hash":"v2233","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>Kubernetesエージェントで<code>continerId</code>を、Javaエージェントに渡す方式を追加</p>"},{"ver":"v2.2.33","hash":"v2233","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Spring-boot-2.5.x ~ 2.6.x環境を利用するユーザーが<code>NettyRoutingFilter</code>クラスを実装して使用する場合でも、連携追跡できるように修正</p>","details":"<ul>\\n<li>Class NettyRoutingFilter <code>org.springframework.cloud.gateway.filter.NettyRoutingFilter</code></li>\\n</ul>"},{"ver":"v2.2.33","hash":"v2233","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>db_pool_detail</code>カテゴリのメトリクスで<code>$okind</code>, <code>$onode</code>値をそれぞれ<code>okindName</code>, <code>onodeName</code>に変更</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/java/java-2_2_27","ver":"v2.2.27","date":"2024-02-06","Lists":[{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> mule-3.9.5追跡範囲の拡大</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> camel-cxf-3.15追跡</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>OracleCallableStatement</code>追跡追加</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> Lettuceドライバー使用時、Redisのキー収集の中断</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> spring-bootでnetty使用時、requestのURLからquerystringを分離</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> spring-bootでnettyの使用時、requestのHTTPパラメータを収集できない問題の修正</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>ヒットマップのトランザクション件数、エラー件数のエラーを修正</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Deprecate","desc":"<p><code class=\\"Deprecate\\">Deprecate</code> Lettuceドライバーの使用時、Redisのvalue収集中断</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/java/java-2_2_26","ver":"v2.2.26","date":"2024-01-11","Lists":[{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> spring-boot-2.5以降でreactor-kafka-1.3を追跡</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> spring-boot-2.5以降でRxJava使用時、RxJavaのscheduleを追跡</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> spring-boot-3.0以降でRxJava3使用時、RxJava3のscheduleを追跡</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>エージェントログに<code>threadName</code>、<code>className</code>, <code>methodName</code>、<code>lineNumber</code>を収集して表示</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>エージェントログの形態を修正</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Tiberoの<code>CallableStatement</code>を追跡</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>エージェントログのテキストの色を変更</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>エージェント起動時にエージェントログのファイル名を<em>whatap-<code>date</code>.log</em>から<em>whatap.log</em>に変更</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> UTC基準日付が変更されると<em>whatap.log</em>ファイル名を<em>whatap-<code>date</code>.log</em>に保存</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/java/java-2_2_28","ver":"v2.2.28","date":"2024-02-27","Lists":[{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> logback-1.2.8の追跡時にappenderを除外するオプションを追加</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> logback-1.2.8の追跡時に、指定したappenderのみ収集するオプションの使用を中止</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> log4j-2.17追跡時にappenderを除外するオプションを追加</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> log4j-2.17追跡時に、指定したappenderのみ収集するオプションの使用を中止</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>コンテナ環境でPod名を設定していない場合、環境変数(<code>env</code>)の<code>HOSTNAME</code>から抽出するように変更</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> JBoss Connection Poolの接続時にログ数を制限するように修正</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>統計データの転送時のログを修正</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>trace_sampling_enabled</code>オプションを使用する場合、TPSを過剰に収集する問題を修正</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> spring-boot-3.xのspring-security exception収集時に発生するエラーを修正</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/java/index.mdx


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
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/java/index.mdx",
  "sourceDirName": "release-notes/java",
  "slug": "/release-notes/java/",
  "permalink": "/ja/release-notes/java/",
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
    "permalink": "/ja/release-notes/mobile/mobile-app-v1_0_3"
  },
  "next": {
    "title": "Java Agent v2.2.37",
    "permalink": "/ja/release-notes/java/java-2_2_37"
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