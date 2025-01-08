"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["2989"],{52996:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>M,assets:()=>c,toc:()=>d,frontMatter:()=>o});var n=JSON.parse('{"id":"altibase-v1/labs","title":"Laboratory","description":"The following introduces users about the Lab menu that provides new or experimental features.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/altibase-v1/labs.mdx","sourceDirName":"altibase-v1","slug":"/altibase-v1/labs","permalink":"/en/altibase-v1/labs","draft":false,"unlisted":false,"editUrl":"undefined/docs/altibase-v1/labs.mdx","tags":[],"version":"current","frontMatter":{"id":"labs","title":"Laboratory","description":"The following introduces users about the Lab menu that provides new or experimental features.","keywords":["Altibase","DATABASE","Laboratory"],"isTranslationMissing":false},"sidebar":"altibasev1Sidebar","previous":{"title":"System event guide","permalink":"/en/altibase-v1/common-alert"}}'),i=s("85893"),a=s("50065"),r=s("47832");let o={id:"labs",title:"Laboratory",description:"The following introduces users about the Lab menu that provides new or experimental features.",keywords:["Altibase","DATABASE","Laboratory"],isTranslationMissing:!1},l=void 0,c={},d=[...r.d$];function u(e){return(0,i.jsx)(r.ZP,{})}function M(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},47832:function(e,t,s){s.d(t,{ZP:function(){return o},d$:function(){return a}});var n=s(85893),i=s(50065);let a=[];function r(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Cmdname:a,ImgLang:r,InDoc:o,Xclude:c}=t;return!a&&l("Cmdname",!0),!r&&l("ImgLang",!0),!o&&l("InDoc",!0),!c&&l("Xclude",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This menu provides new or experimental features to users. Through ",(0,n.jsx)(t.img,{alt:"Lab icon",src:s(3935).Z+"",width:"24",height:"24"})," ",(0,n.jsx)(a,{sid:"side_lab",className:"uitext"})," or ",(0,n.jsx)(a,{sid:"sitemap",className:"uitext"})," in the side menu, you can access it. The provided features may differ depending on the product."]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["The functionality of the ",(0,n.jsx)(a,{sid:"side_lab",className:"uitext"})," menu is currently in Beta version and may cause unexpected errors. Be careful when using the ",(0,n.jsx)(a,{sid:"side_lab",className:"uitext"})," menu. It is not recommended to use the menu in handling important data or in the operating environment. If you have any feedback or issues, feel free to contact the support team at ",(0,n.jsx)(t.a,{href:"mailto:support@whatap.io",children:"support@whatap.io"}),"."]})}),"\n",(0,n.jsx)(c,{product:"npm",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(a,{sid:"side_tagFlex",className:"uitext"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"MXQL"})," is a query language to flexibly query WhaTap's performance data (metrics). It is used to comprehensively search and use the metrics collected from multiple agents in a project. For more information about ",(0,n.jsx)(t.strong,{children:"MXQL"}),", see ",(0,n.jsx)(t.a,{href:"../mxql/mxql-overview",children:"the following"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(o,{product:"java",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(a,{sid:"side_collectionMap",className:"uitext"}),"\n",(0,n.jsxs)(t.p,{children:["It provides information about the Collection (e.g. ",(0,n.jsx)(t.code,{children:"java.util.Map"}),") used by the class specified in the JVM. To use this feature, add the following agent option:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"collection_nonstatic_holders=io.home.test.baseapp.app.post.web.PostResource\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["This feature is supported in ",(0,n.jsx)(t.a,{href:"../release-notes/java/java-2_1_2#collectionmonitor",children:"Java agent version 2.1.2"})," or later."]})}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(o,{product:"java",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(a,{sid:"side_remoteAccessStatus",className:"uitext"}),"\n",(0,n.jsx)(t.p,{children:"Through the application agent settings, the logs in which success/failure records are written for outbound (remote) calls for each monitoring target are visualized."}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.p,{children:["To use this feature, add the following option in the agent configuration file (",(0,n.jsx)(t.em,{children:"whatap.conf"}),") or in ",(0,n.jsx)(a,{sid:"side_management",className:"uitext"})," > ",(0,n.jsx)(a,{sid:"side_agentSetting",className:"uitext"}),"."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"logsink_rt_enabled=true\nlogsink_enabled=true\n"})})]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(o,{product:"kubernetes",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(a,{sid:"side_pendingPod",className:"uitext"}),"\n",(0,n.jsx)(t.p,{children:"It provides useful features for checking the status and error messages of Pods and reviewing the cluster resource status, network policy, scheduler log, and such."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This function is supported in Kubernetes master agent 1.7.0 or later."})}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(o,{product:"java,php,python,golang,dotnet,nodejs,server,kubernetes",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(a,{sid:"side_alertTemplate",className:"uitext"}),"\n",(0,n.jsxs)(t.p,{children:["It provides a customization function to allow to modify the alert messages that are delivered to project members via email or third-party plugins. For more information, see ",(0,n.jsx)(t.a,{href:"set-notification-message",children:"the following"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(o,{product:"browser,npm",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(a,{sid:"side_metricsSearch",className:"uitext"}),"\n",(0,n.jsxs)(t.p,{children:["You can search for specific metrics according to the categories based on fields and tags. For more information, see ",(0,n.jsx)(t.a,{href:"metrics-search",children:"the following"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(o,{product:"postgresql,oracle,oracle-v1,oracle-pro,mysql,mssql,mssql-v1,cubrid,cubrid-v1,tibero,altibase,altibase-v1",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(a,{sid:"side_dbScriptManager",className:"uitext"}),"\n",(0,n.jsxs)(t.p,{children:["If you save a SQL script in the agent installation path, you can load the script from the WhaTab monitoring service screen and display the execution results in real time. For more information, see ",(0,n.jsx)(t.a,{href:"../reference/script-manager",children:"the following"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["In the side menu, if the ",(0,n.jsx)(t.img,{alt:"Lab icon",src:s(3935).Z+"",width:"24",height:"24"})," ",(0,n.jsx)(a,{sid:"side_lab",className:"uitext"})," menu does not appear, you can access it through ",(0,n.jsx)(a,{sid:"sitemap",className:"uitext"}),"."]}),(0,n.jsx)(r,{img:"main-ui-sitemap.png",desc:"Sitemap"}),(0,n.jsxs)(t.p,{children:["Under the side menu, select ",(0,n.jsx)(t.img,{alt:"Sitemap icon",src:s(71474).Z+"",width:"24",height:"24"}),". If the ",(0,n.jsx)(a,{sid:"sitemap",className:"uitext"})," window appears, select a desired menu in the ",(0,n.jsx)(a,{sid:"side_lab",className:"uitext"})," section on the lower right of the window."]})]})]})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function l(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3935:function(e,t,s){s.d(t,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNyAxSDdWM0g4LjAwNjMzTDguMDA2MjQgNUg4VjdIOC4wMDYxNkw4LjAwNjEyIDhIOFYxMEg4LjAwNjAzTDguMDA2IDEwLjc4OEwwLjk0NDM1MSAyMS41MDFMMC44ODc4OTcgMjEuNTk3NEMwLjU1MjE3OSAyMi4yNDgyIDEuMDIwODIgMjMuMDUxNCAxLjc3OTI2IDIzLjA1MTRIMTEuOTk4M0gxMkgyMi4yMTkxQzIyLjk3NyAyMy4wNTE0IDIzLjQ0NTcgMjIuMjQ5MSAyMy4xMTA5IDIxLjU5ODNMMjMuMDU0NiAyMS41MDJMMTYuMDEwMSAxMC43ODhMMTYuMDA5NyAzSDE3VjFaTTE0LjAwOTYgM0gxMC4wMDY0VjVIMTJWN0gxMC4wMDY0VjhIMTJWMTBIMTAuMDA2NFYxMS4wODg1QzEwLjAwNjQgMTEuMjQ1IDkuOTY5NjMgMTEuMzk4OCA5Ljg5OTggMTEuNTM3N0w5Ljg0MTI3IDExLjYzODlMNy42MjUzNCAxNUgxNi4zODUzTDE0LjE3NDEgMTEuNjM4TDE0LjExNTggMTEuNTM2OUMxNC4wNDYyIDExLjM5ODIgMTQuMDA5NiAxMS4yNDQ3IDE0LjAwOTYgMTEuMDg4NVYzWk0xMiAyMS4wNTE0SDExLjk5ODNMMy42MzYgMjEuMDUxTDYuMzA2NzcgMTdIMTcuNzAwN0wyMC4zNjUxIDIxLjA1MUwxMiAyMS4wNTE0WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K"},71474:function(e,t,s){s.d(t,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjkwNzM0IDJIMlYyMS42OTExSDcuOTA3MzRIOS44NzY0NUgxMS44NDU2VjE5LjcyMkg5Ljg3NjQ1VjkuODc2NDVIMTkuNzIyVjEyLjgzMDFIMjEuNjkxMVY5Ljg3NjQ1VjcuOTA3MzRWMkg5Ljg3NjQ1SDcuOTA3MzRaTTcuOTA3MzQgMy45NjkxMUgzLjk2OTExVjE5LjcyMkg3LjkwNzM0VjMuOTY5MTFaTTkuODc2NDUgMy45NjkxMVY3LjkwNzM0SDE5LjcyMlYzLjk2OTExSDkuODc2NDVaTTE5LjgyMzcgMTguNDMxM0MyMC43MTU3IDE2LjkyMTEgMjAuNTEyOCAxNC45NDMzIDE5LjIxNTMgMTMuNjQ1OEMxNy42NzczIDEyLjEwNzggMTUuMTgzNyAxMi4xMDc4IDEzLjY0NTggMTMuNjQ1OEMxMi4xMDc4IDE1LjE4MzcgMTIuMTA3OCAxNy42NzczIDEzLjY0NTggMTkuMjE1M0MxNC45NDMzIDIwLjUxMjggMTYuOTIxMSAyMC43MTU3IDE4LjQzMTMgMTkuODIzN0wyMC42MDc2IDIyTDIyIDIwLjYwNzZMMTkuODIzNyAxOC40MzEzWk0xNS4wMzgxIDE3LjgyMjlDMTUuODA3MSAxOC41OTE5IDE3LjA1MzkgMTguNTkxOSAxNy44MjI5IDE3LjgyMjlDMTguNTkxOSAxNy4wNTM5IDE4LjU5MTkgMTUuODA3MSAxNy44MjI5IDE1LjAzODFDMTcuMDUzOSAxNC4yNjkxIDE1LjgwNzEgMTQuMjY5MSAxNS4wMzgxIDE1LjAzODFDMTQuMjY5MSAxNS44MDcxIDE0LjI2OTEgMTcuMDUzOSAxNS4wMzgxIDE3LjgyMjlaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo="},50065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return r}});var n=s(67294);let i={},a=n.createContext(i);function r(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);