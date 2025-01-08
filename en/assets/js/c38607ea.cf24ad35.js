"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["87156"],{55574:function(e,n,t){t.d(n,{ZP:function(){return c},d$:function(){return r}});var s=t(85893),i=t(50065);let r=[{value:"Sharing all event settings",id:"share-event-setting",level:2},{value:"Export",id:"export-event-setting",level:3},{value:"Load",id:"import-event-setting",level:3}];function o(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",ul:"ul",...(0,i.a)(),...e.components},{Cmdname:t,ImgLang:r,InDoc:o,Xclude:c}=n;return!t&&l("Cmdname",!0),!r&&l("ImgLang",!0),!o&&l("InDoc",!0),!c&&l("Xclude",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"share-event-setting",children:"Sharing all event settings"}),(0,s.jsx)(n.p,{children:"You can download the settings of the default event and all other events as a JSON format file, allowing you to share the settings between products of the same type. This simplifies repetitive event configurations."})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"export-event-setting",children:"Export"}),(0,s.jsxs)(n.p,{children:["On the screen, select ",(0,s.jsx)(t,{sid:"BTN07762",className:"uitext"}),". A JSON file containing all event settings are downloaded. The format of the JSON file name is ",(0,s.jsxs)(n.em,{children:["integrated-event-",(0,s.jsx)(n.code,{children:"YYYY"}),"-",(0,s.jsx)(n.code,{children:"MM"}),"-",(0,s.jsx)(n.code,{children:"DD"}),".json"]}),"."]}),(0,s.jsx)(n.p,{children:"The JSON data structure is as follows:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="integrated-event"',children:'{\n  "productType": "{productType}",\n  "platform": "{platform}",\n  "events": {\n    "HITMAP": {\n      ...\n    },\n    "LOG_REALTIME": [\n      {...}\n    ],\n    "METRICS": [\n      {...}\n    ],\n    "COMPOSITE_LOG": [\n      {...}\n    ],\n    "BASIC": [\n      {...}\n    ],\n    "COMPOSITE_METRICS": [\n      {...}\n    ],\n    "ANOMALY": [\n      {...}\n    ]\n  }\n}\n'})}),(0,s.jsxs)(n.p,{children:["The sub properties of the ",(0,s.jsx)(n.code,{children:"events"})," property correspond to the following event settings."]}),(0,s.jsx)(o,{product:"java,php,python,nodejs,golang,dotnet,kubernetes",children:(0,s.jsx)(r,{img:"event-config-v2-all-events-apm-k8s.png",desc:"Events"})}),(0,s.jsx)(o,{product:"postgresql,oracle,mysql,mssql,mssql-v1,tibero,cubrid,altibase,redis,mongodb",children:(0,s.jsx)(r,{img:"event-config-v2-all-events-apm-k8s.png",desc:"Events"})}),(0,s.jsx)(o,{product:"server",children:(0,s.jsx)(r,{img:"event-config-v2-all-events-server.png",desc:"Events"})}),(0,s.jsx)(o,{product:"browser",children:(0,s.jsx)(r,{img:"event-config-v2-all-events-browser.png",desc:"Events"})}),(0,s.jsx)(o,{product:"npm",children:(0,s.jsx)(r,{img:"event-config-v2-all-events-npm.png",desc:"Events"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"BASIC"}),": ",(0,s.jsx)(t,{sid:"default",className:"uitext"})]}),"\n"]}),(0,s.jsx)(o,{product:"server",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SERVER_LOG_FILE"}),": ",(0,s.jsx)(t,{sid:"sm_log_event_tab",className:"uitext"})]}),"\n"]})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"METRICS"}),": ",(0,s.jsx)(t,{sid:"metrics",className:"uitext"})]}),"\n"]}),(0,s.jsx)(c,{product:"npm",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"COMPOSITE_METRICS"}),": ",(0,s.jsx)(t,{sid:"composite_metrics",className:"uitext"})]}),"\n"]})}),(0,s.jsx)(o,{product:"java,php,python,nodejs,golang,dotnet,kubernetes",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"HITMAP"}),": ",(0,s.jsx)(t,{sid:"hitmap_pattern",className:"uitext"})]}),"\n"]})}),(0,s.jsx)(c,{product:"browser,npm",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ANOMALY"}),": ",(0,s.jsx)(t,{sid:"anomaly_detection",className:"uitext"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"LOG_REALTIME"}),": ",(0,s.jsx)(t,{sid:"realtime_log_event",className:"uitext"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"COMPOSITE_LOG"}),": ",(0,s.jsx)(t,{sid:"composite_log_event",className:"uitext"})]}),"\n"]}),"\n"]})}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The structure of the JSON data and sub properties of the ",(0,s.jsx)(n.code,{children:"events"})," property may differ depending on the product (",(0,s.jsx)(n.code,{children:"platform"}),") or product type (",(0,s.jsx)(n.code,{children:"productType"}),")."]})}),(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["If you arbitrarily modify the value of the ",(0,s.jsx)(n.code,{children:"productType"})," or ",(0,s.jsx)(n.code,{children:"platform"})," property among the JSON data properties, the events may not work in other projects."]})})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"import-event-setting",children:"Load"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the screen, select ",(0,s.jsx)(t,{sid:"BTN07761",className:"uitext"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the JSON editing window appears, select ",(0,s.jsx)(t,{sid:"load",className:"uitext"})," at the bottom of the screen."]}),"\n",(0,s.jsx)(r,{img:"event-config-v2-json-batch-edit.png",desc:"JSON Batch Edit"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(t,{sid:"BTN07762",className:"uitext"})," function, select a JSON file to download."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(t,{sid:"overwrite",className:"uitext"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When the confirmation message appears, select ",(0,s.jsx)(t,{sid:"overwrite",className:"uitext"}),"."]}),"\n"]}),"\n"]}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If overwritten, the previous event settings cannot be restored."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you arbitrarily modify the value of the ",(0,s.jsx)(n.code,{children:"productType"})," or ",(0,s.jsx)(n.code,{children:"platform"})," property, the events may not work in other projects."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The JSON editing window has a built-in JSON validation function. If the format or value is incorrect, an error message appears below the editing window, and the ",(0,s.jsx)(t,{sid:"overwrite",className:"uitext"})," button is disabled."]}),"\n",(0,s.jsx)(r,{img:"event-config-v2-all-events-json-validate.png"}),"\n"]}),"\n"]})})]})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}function l(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},91042:function(e,n,t){t.d(n,{ZP:function(){return c},d$:function(){return r}});var s=t(85893),i=t(50065);let r=[{value:"Configuring the event",id:"eventsettings",level:2}];function o(e){let n={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",section:"section",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Cmdname:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Cmdname",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Home > Select Project > ",(0,s.jsx)(n.img,{alt:"Icon",src:t(71474).Z+"",width:"24",height:"24"})," ",(0,s.jsx)(r,{sid:"sitemap",className:"uitext"})," > ",(0,s.jsx)(r,{sid:"side_event",className:"uitext"})," > ",(0,s.jsx)(r,{sid:"side_eventSetting",className:"uitext"})," ",(0,s.jsx)("code",{class:"newfunc",children:"New"})]}),"\n",(0,s.jsxs)(n.p,{children:["The new ",(0,s.jsx)(r,{sid:"side_eventSetting",className:"uitext"})," menu can enhance the user experience by focusing on the field (",(0,s.jsx)(n.strong,{children:"Field"}),") rather than the category (",(0,s.jsx)(n.strong,{children:"Category"}),"). By providing basic event templates for the products of the created project, you can quickly and easily configure the desired warning notification events."]}),"\n",(0,s.jsx)(n.p,{children:"By selecting fields first rather than categories, we can resolve the discrepancy between metrics perceived by the user and event settings. By combining the visual intuition of the simulation, you can complete event settings quickly and accurately."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["New projects can use this feature without extra settings. However, for the created projects, select ",(0,s.jsx)(r,{sid:"BTN07682",className:"uitext"}),". The event lists optimized for new features are automatically generated."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The provided event templates may differ depending on the product."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["This function can be used by only the members with the ",(0,s.jsx)(r,{sid:"sms_alert_settings",className:"b500"})," role. For more information about the member roles, see ",(0,s.jsx)(n.a,{href:"../project/project-structure#project-auth",children:"the following"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"eventsettings",children:"Configuring the event"}),(0,s.jsxs)(n.p,{children:["For information on how to configure events with the new ",(0,s.jsx)(r,{sid:"side_eventSetting",className:"uitext"})," feature and design, see the following:"]})]})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},40633:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>x,assets:()=>a,toc:()=>h,frontMatter:()=>l});var s=JSON.parse('{"id":"mssql-v1/warning-notice-v2","title":"Event Setting","description":"Alerts are sent through event condition settings per metric in the database.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/mssql-v1/warning-notice-v2.mdx","sourceDirName":"mssql-v1","slug":"/mssql-v1/warning-notice-v2","permalink":"/en/mssql-v1/warning-notice-v2","draft":false,"unlisted":false,"editUrl":"undefined/docs/mssql-v1/warning-notice-v2.mdx","tags":[],"version":"current","frontMatter":{"id":"warning-notice-v2","title":"Event Setting","description":"Alerts are sent through event condition settings per metric in the database.","keywords":["SQL Server","DATABASE","Alert","Event Setting"],"isTranslationMissing":false},"sidebar":"mssqlV1Sidebar","previous":{"title":"Setting the Log Alert","permalink":"/en/mssql-v1/set-event-log"},"next":{"title":"Basic events","permalink":"/en/mssql-v1/basic-event-setting"}}'),i=t("85893"),r=t("50065"),o=t("91042"),c=t("55574");let l={id:"warning-notice-v2",title:"Event Setting",description:"Alerts are sent through event condition settings per metric in the database.",keywords:["SQL Server","DATABASE","Alert","Event Setting"],isTranslationMissing:!1},d=void 0,a={},h=[...o.d$,...c.d$];function j(e){let{DocCardList:n}={...(0,r.a)(),...e.components};return!n&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("DocCardList",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(n,{}),"\n","\n","\n",(0,i.jsx)(c.ZP,{})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},71474:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjkwNzM0IDJIMlYyMS42OTExSDcuOTA3MzRIOS44NzY0NUgxMS44NDU2VjE5LjcyMkg5Ljg3NjQ1VjkuODc2NDVIMTkuNzIyVjEyLjgzMDFIMjEuNjkxMVY5Ljg3NjQ1VjcuOTA3MzRWMkg5Ljg3NjQ1SDcuOTA3MzRaTTcuOTA3MzQgMy45NjkxMUgzLjk2OTExVjE5LjcyMkg3LjkwNzM0VjMuOTY5MTFaTTkuODc2NDUgMy45NjkxMVY3LjkwNzM0SDE5LjcyMlYzLjk2OTExSDkuODc2NDVaTTE5LjgyMzcgMTguNDMxM0MyMC43MTU3IDE2LjkyMTEgMjAuNTEyOCAxNC45NDMzIDE5LjIxNTMgMTMuNjQ1OEMxNy42NzczIDEyLjEwNzggMTUuMTgzNyAxMi4xMDc4IDEzLjY0NTggMTMuNjQ1OEMxMi4xMDc4IDE1LjE4MzcgMTIuMTA3OCAxNy42NzczIDEzLjY0NTggMTkuMjE1M0MxNC45NDMzIDIwLjUxMjggMTYuOTIxMSAyMC43MTU3IDE4LjQzMTMgMTkuODIzN0wyMC42MDc2IDIyTDIyIDIwLjYwNzZMMTkuODIzNyAxOC40MzEzWk0xNS4wMzgxIDE3LjgyMjlDMTUuODA3MSAxOC41OTE5IDE3LjA1MzkgMTguNTkxOSAxNy44MjI5IDE3LjgyMjlDMTguNTkxOSAxNy4wNTM5IDE4LjU5MTkgMTUuODA3MSAxNy44MjI5IDE1LjAzODFDMTcuMDUzOSAxNC4yNjkxIDE1LjgwNzEgMTQuMjY5MSAxNS4wMzgxIDE1LjAzODFDMTQuMjY5MSAxNS44MDcxIDE0LjI2OTEgMTcuMDUzOSAxNS4wMzgxIDE3LjgyMjlaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo="},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var s=t(67294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);