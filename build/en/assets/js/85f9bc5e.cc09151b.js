"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[10258],{

/***/ 81112:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/db/dbx-agent.json
const dbx_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_7_8","ver":"v1.7.8","date":"2024-06-21","Lists":[{"ver":"v1.7.8","hash":"v178","product":"DBX","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> Removed the DB connection notification restoration feature.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_8_0","ver":"v1.8.0","date":"2024-06-26","Lists":[{"ver":"v1.8.0","hash":"v180","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added <em>setup.sh</em> for quick agent configuration.</p>","category":"MySQL"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_9_0","ver":"v1.9.0","date":"2024-07-04","Lists":[{"ver":"v1.9.0","hash":"v190","product":"DBX","type":"New","desc":"<p><code class=\\"New\\">New</code> Added new features following the Oracle V2 release.</p>","category":"Oracle","details":"<ul>\\n<li>\\n<p>If the <code>ora_hidden_param=true</code> option is set, the hidden parameter feature is added.</p>\\n</li>\\n<li>\\n<p>If the <code>ora_invalid_object=true</code> option is set, invalid objects are collected.</p>\\n</li>\\n<li>\\n<p>If the <code>ora_unusable_index=true</code> option is set, unsable indexes are collected.</p>\\n</li>\\n<li>\\n<p>Added the plan change checking and saving features.</p>\\n</li>\\n<li>\\n<p>Added the bind parameter saving feature.</p>\\n</li>\\n<li>\\n<p>Segments sizes are collected.</p>\\n</li>\\n<li>\\n<p>Added <code>sorts (disk)</code> and <code>user rollbacks</code> metrics.</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_8_2","ver":"v1.8.2","date":"2024-06-28","Lists":[{"ver":"v1.8.2","hash":"v182","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Added the communication fail error message.</p>","category":"MySQL"},{"ver":"v1.8.2","hash":"v182","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Added the backup file (.bak) for <em>setup.bat</em>.</p>","category":"MySQL"},{"ver":"v1.8.2","hash":"v182","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Changed <code>default yes</code> to <code>no</code> when running the <em>setup.sh</em> as a daemon.</p>","category":"MySQL"},{"ver":"v1.8.2","hash":"v182","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the database name bug.</p>","category":"MySQL"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_7_6","ver":"v1.7.6","date":"2024-05-20","Lists":[{"ver":"v1.7.6","hash":"v176","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Fixed Status On in Autoscale EventPack.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_8_1","ver":"v1.8.1","date":"2024-06-27","Lists":[{"ver":"v1.8.1","hash":"v181","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Updated the XOS agent v1.1.8f.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_7_5","ver":"v1.7.5","date":"2024-05-17","Lists":[{"ver":"v1.7.5","hash":"v175","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified to send <code>fatal count</code> upon DB Connection Failed.</p>","category":"MongoDB, Redis"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_7_2","ver":"v1.7.2","date":"2024-03-29","Lists":[{"ver":"v1.7.2","hash":"v172","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the <code>db_loc</code> information error (AWS RDS) in Agent info.</p>","category":"MySQL"},{"ver":"v1.7.2","hash":"v172","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the <code>type</code> error in MongoDbSize.</p>","category":"MongoDB"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_7_3","ver":"v1.7.3","date":"2024-04-23","Lists":[{"ver":"v1.7.3","hash":"v173","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Improved the feature to turn off alerts.</p>","category":"Common"},{"ver":"v1.7.3","hash":"v173","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the slave broken checking bug.</p>","category":"MySQL"},{"ver":"v1.7.3","hash":"v173","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the <code>delta</code> 1 second option: option to convert and report the data collected every 5 seconds from the agent into seconds.</p>","category":"Oracle"},{"ver":"v1.7.3","hash":"v173","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the <code>sqlstat</code> metric.</p>","category":"Oracle"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_7_1","ver":"v1.7.1","date":"2024-03-28","Lists":[{"ver":"v1.7.1","hash":"v171","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Added a comment to the queries performed by Whatap to indicate that they are collection queries.</p>","category":"Postgresql, Oracle"},{"ver":"v1.7.1","hash":"v171","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the <strong>process</strong> and <strong>replication delay</strong> processing bugs in <strong>DocumentDB</strong>.</p>","category":"MongoDB"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_7_0","ver":"v1.7.0","date":"2024-03-25","Lists":[{"ver":"v1.7.0","hash":"v170","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Deleted the <code>xos2</code> metric from the <code>cpu</code> metrics and changed the <code>xos</code> metric to percentage.</p>","category":"Common"},{"ver":"v1.7.0","hash":"v170","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added MongoDB <code class=\\"my\\">V2</code></p>","category":"MongoDB","details":"<ul>\\n<li>\\n<p>Category name unification</p>\\n<ul>\\n<li><code>agentinfo</code> → <code>db_agentinfo</code></li>\\n<li><code>session</code> → <code>db_mongo_active_session</code></li>\\n<li><code>stat</code> → <code>db_mongodb_counter</code></li>\\n<li><code>dbsize</code> → <code>db_dbsize</code></li>\\n</ul>\\n</li>\\n<li>\\n<p>Basic metrics simplification</p>\\n<p>If <code>v2=true</code> is set, the system collects and saves <code>opcounters</code>, <code>globalLock</code>, <code>extra_info</code>, <code>connections</code>, <code>network</code>, <code>mem</code>, <code>opLatencies</code>, and <code>asserts</code> metrics among <code>serverStatus</code> values.</p>\\n<div class=\\"theme-admonition theme-admonition-note admonition_xJq3 alert alert--secondary\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 14 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\\"></path></svg></span>Note</div><div class=\\"admonitionContent_BuS1\\"><p><code>v2=false</code> is the default value. As in v1, the <code>serverStatus</code> results are all collected.</p></div></div>\\n</li>\\n<li>\\n<p>Additional metric options: If any outputs (<code>category=network, repl, indexStats</code>, etc.) of serverStatus are additionally set, additional collection is possible.</p>\\n</li>\\n<li>\\n<p>Addition of database size collection: Collects <code>index size</code>, <code>storage size</code>, and <code>total size</code>.</p>\\n</li>\\n<li>\\n<p>Collection size collection (new): Collects <code>storage size</code>, <code>index size</code>, and <code>total size</code>.</p>\\n</li>\\n<li>\\n<p>The xos metrics (<code>xos_cpu</code>, <code>xos_mem</code>, etc.) that were previously indicated with underscores, are also sent along with values including parentheses for product uniformity.</p>\\n</li>\\n</ul>"},{"ver":"v1.7.0","hash":"v170","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added Redis <code class=\\"my\\">V2</code></p>","category":"Redis","details":"<ul>\\n<li>\\n<p>Category name unification</p>\\n<ul>\\n<li><code>agentinfo</code> → <code>db_agentinfo</code></li>\\n<li><code>session</code> → <code>db_redis_active_session</code></li>\\n<li><code>stat</code> → <code>db_redis_couter</code></li>\\n</ul>\\n</li>\\n<li>\\n<p>Added the <code>db_redis_clusterinfo</code>, <code>db_redis_clusternodes</code>, <code>db_redis_master</code>, and <code>db_redis_slave</code> categories.</p>\\n</li>\\n<li>\\n<p>The xos metrics (<code>xos_cpu</code>, <code>xos_mem</code>, etc.) that were previously indicated with underscores, are also sent along with values including parentheses for product uniformity.</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_7_4","ver":"v1.7.4","date":"2024-05-16","Lists":[{"ver":"v1.7.4","hash":"v174","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> In <span class=\\"uitext\\">Management</span> &gt; <span class=\\"uitext\\">Agent List</span>, added <strong>Agent IP</strong> (agent IP address).</p>","category":"Common"},{"ver":"v1.7.4","hash":"v174","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified the <strong>DB connection failed</strong> text.</p>","category":"Common"},{"ver":"v1.7.4","hash":"v174","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified not to create HeapDumpFile upon occurrence of OOM.</p>","category":"Common"},{"ver":"v1.7.4","hash":"v174","product":"DBX","type":"Feature","desc":"<li><code class=\\"Feature\\">Feature</code> Added the alerts: <strong>connection fail</strong> / <strong>success</strong>.</li>","category":"MongoDB, Redis"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_7_7","ver":"v1.7.7","date":"2024-06-18","Lists":[{"ver":"v1.7.7","hash":"v177","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the replication delay bug in PostgreSQL 9.6.</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_35","ver":"v1.6.35","date":"2024-03-15","Lists":[{"ver":"v1.6.35","hash":"v1635","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>db_agentinfo</code> modification: Unified the <code>dbInstNo</code> and <code>db_inst no</code> metrics into the <code>db_inst_id</code> metric.</p>","category":"Postgresql/Oracle/MySQL"},{"ver":"v1.6.35","hash":"v1635","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added <em>setup.bat</em> in the agent configuration file.</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_26","ver":"v1.6.26","date":"2024-02-28","Lists":[{"ver":"v1.6.26","hash":"v1626","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the wait event collection query bug and multi configuration bug related to the <code class=\\"my\\">V2</code> upgrade.</p>","category":"Oracle"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_31","ver":"v1.6.31","date":"2024-03-04","Lists":[{"ver":"v1.6.31","hash":"v1631","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Modified to receive a resolution notification by default when the agent restarts after termination.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_24","ver":"v1.6.24","date":"2024-02-21","Lists":[{"ver":"v1.6.24","hash":"v1624","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Added <code>query_id</code> when collecting <code>active_session</code> in PostgreSQL 14 or later.</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_25","ver":"v1.6.25","date":"2024-02-26","Lists":[{"ver":"v1.6.25","hash":"v1625","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Added optional processing for the <code>state</code> condition when collecting the <code>active_session</code> metric.</p>","category":"PostgreSQL","details":"<ul>\\n<li>In case the <code>state</code> value is not <code>idle</code>: <code>pg_opt=0</code> (default)</li>\\n<li>In case the <code>state</code> value is <code>active</code>: <code>pg_opt=1</code></li>\\n<li>In case the <code>state</code> value is <code>active</code> or <code>idle in transaction</code>: <code>pg_opt=2</code></li>\\n</ul>"},{"ver":"v1.6.25","hash":"v1625","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Changed the default values of the collection options for object and table to <code>true</code>.</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_30","ver":"v1.6.30","date":"2024-02-29","Lists":[{"ver":"v1.6.30","hash":"v1630","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the event resolution notification feature.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_33","ver":"v1.6.33","date":"2024-03-13","Lists":[{"ver":"v1.6.33","hash":"v1633","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added <em>setup.sh</em> in the agent configuration file.</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_32","ver":"v1.6.32","date":"2024-03-11","Lists":[{"ver":"v1.6.32","hash":"v1632","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified the database parameter\'s real-time inquiry logic and added the data for <code>unit</code>, <code>start_time</code>, and <code>uptime</code>.</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_23","ver":"v1.6.23","date":"2024-02-20","Lists":[{"ver":"v1.6.23","hash":"v1623","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the real-time search for the table layout.</p>","category":"MySQL"},{"ver":"v1.6.23","hash":"v1623","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Added the Redis cluster and replica.</p>","category":"Redis"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_22","ver":"v1.6.22","date":"2024-02-15","Lists":[{"ver":"v1.6.22","hash":"v1622","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> If the type of agent setting is boolean, the value is unified as <code>true</code>/<code>false</code>.</p>","category":"Common"},{"ver":"v1.6.22","hash":"v1622","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Added the <code>redo entries</code> metric.</p>","category":"Oracle"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_20","ver":"v1.6.20","date":"2024-02-02","Lists":[{"ver":"v1.6.20","hash":"v1620","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added stateful to restore the database alarms.</p>","category":"Common"},{"ver":"v1.6.20","hash":"v1620","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the Redis autoscale function.</p>","category":"Redis"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_21","ver":"v1.6.21","date":"2024-02-07","Lists":[{"ver":"v1.6.21","hash":"v1621","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the bug where the PG SQL statistical data is not collected.</p>","category":"PostgreSQL"},{"ver":"v1.6.21","hash":"v1621","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Added the <code>rep_gap_max</code> metric.</p>","category":"Altibase"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_18","ver":"v1.6.18","date":"2024-01-25","Lists":[{"ver":"v1.6.18","hash":"v1618","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added <code>uuid</code> and <code>statefulset</code> to allow to receive a recovery message for database notification.</p>","category":"Common"},{"ver":"v1.6.18","hash":"v1618","product":"DBX","type":"Changed","desc":"<li><code class=\\"Changed\\">Changed</code> Modified not to retry when timeout occurs 3 times to prevent connection full when using the <code>show slave status</code> command.</li>","category":"MySQL"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_19","ver":"v1.6.19","date":"2024-02-01","Lists":[{"ver":"v1.6.19","hash":"v1619","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified the logfile name of the DBX agent from <em>dbx.log</em> to <em>whatap.log</em>.</p>","details":"<ul>\\n<li>Before: Based on 25 MB, the past logs have been separated into <em>dbx.log.n</em> files.</li>\\n<li>After: The startup log of the current date is recorded into <em>whatap.log</em>. If the date is changed, the logs are separated into <em>whatap-yyyymmdd.log</em>. The logs are stored for up to 60 days with no size limit.</li>\\n</ul>"},{"ver":"v1.6.19","hash":"v1619","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the NullPointerExeception bug caused by the AgentInfo bootParam init order when starting the agent.</p>"},{"ver":"v1.6.19","hash":"v1619","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified to collect the <code>disk_usage_interval=60</code> option by default.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/db/dbx-1_6_17","ver":"v1.6.17","date":"2024-01-16","Lists":[{"ver":"v1.6.17","hash":"v1617","product":"DBX","type":"Fixed","desc":"<li><code class=\\"Fixed\\">Fixed</code> Fixed the slave data collection bug in MariaDB 10.2 or earlier.</li>","category":"MySQL"}]}]');
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/db/dbx-agent.mdx


const frontMatter = {
	id: 'dbx-agent',
	title: 'DBX Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/db/dbx-agent",
  "title": "DBX Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/db/dbx-agent.mdx",
  "sourceDirName": "release-notes/db",
  "slug": "/release-notes/db/dbx-agent",
  "permalink": "/en/release-notes/db/dbx-agent",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/db/dbx-agent.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "dbx-agent",
    "title": "DBX Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Previous Kubernetes agent versions",
    "permalink": "/en/release-notes/k8s/k8s-previous"
  },
  "next": {
    "title": "DBX v1.9.0",
    "permalink": "/en/release-notes/db/dbx-1_9_0"
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
        filePath: dbx_agent_namespaceObject,
        sort: "date",
        category: "agent",
        platform: "db"
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