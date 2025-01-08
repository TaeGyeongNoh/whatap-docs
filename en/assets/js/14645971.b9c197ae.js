"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["34675"],{80703:function(e,i,s){s.d(i,{ZP:function(){return r},d$:function(){return a}});var t=s(85893),n=s(50065);let a=[{value:"Checking the multi-transaction ID",id:"checking-the-multi-transaction-id",level:2},{value:"Using the multi-transaction tracing feature",id:"using-the-multi-transaction-tracing-feature",level:2}];function c(e){let i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{Cmdname:a,ImgLang:c,InDoc:r,LinkImage:o}=i;return!a&&l("Cmdname",!0),!c&&l("ImgLang",!0),!r&&l("InDoc",!0),!o&&l("LinkImage",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Multi-transaction"})," means the transaction involving a different agent or project. ",(0,t.jsx)(i.strong,{children:"Multiple Transaction Trace"})," is to trace calls between the application services registered in the WhaTap project."]}),"\n",(0,t.jsx)(r,{product:"java",children:(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["The Java agent traces multi-transactions with three HTTP header keys (",(0,t.jsx)(i.code,{children:"x-wtap-po"}),", ",(0,t.jsx)(i.code,{children:"x-wtap-mst"}),", and ",(0,t.jsx)(i.code,{children:"x-wtap-sp1"}),"). If HTTP transactions passing through the gateway cannot be traced, check the HTTP header conditions."]})})}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Enabling the multi-transaction"})}),(0,t.jsxs)(i.p,{children:["To trace multi-transactions, set the ",(0,t.jsx)(i.code,{children:"mtrace_enabled"})," option to ",(0,t.jsx)(i.code,{children:"true"})," in ",(0,t.jsx)(a,{sid:"management",className:"uitext"})," > ",(0,t.jsx)(a,{sid:"agent_configuration",className:"uitext"}),". For more information about the agent configuration, see ",(0,t.jsx)(i.a,{href:"set-agent#set-agent-service",children:"the following"}),"."]})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(i.h2,{id:"checking-the-multi-transaction-id",children:"Checking the multi-transaction ID"}),(0,t.jsxs)(i.p,{children:["To use the ",(0,t.jsx)(a,{sid:"multi_server_transaction_trace",className:"uitext"})," menu, ",(0,t.jsx)("b",{children:"MTID"})," (Multi Transaction ID) is required. Through the following procedure, you can find the ",(0,t.jsx)("b",{children:"MTID"})," value."]}),(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In ",(0,t.jsx)(a,{sid:"analysis",className:"uitext"})," > ",(0,t.jsx)(a,{sid:"AA005",className:"uitext"}),", drag the chart area."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The transaction information in the dragged chart area is displayed in the ",(0,t.jsx)(a,{sid:"trace_list",className:"uitext"})," list below as follows."]}),"\n",(0,t.jsx)(c,{img:"tx-trace-table.png",desc:"mtrace_M"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["If you select the trace with the ",(0,t.jsx)(i.img,{alt:"Icon",src:s(50625).Z+"",width:"20",height:"20"})," icon displayed, the ",(0,t.jsx)(a,{sid:"TTL06527",className:"uitext"})," window appears."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In the ",(0,t.jsx)(a,{sid:"TTL06125",className:"uitext"})," tab, you can see the ",(0,t.jsx)(a,{sid:"TTL06107",className:"uitext"})," value."]}),"\n",(0,t.jsx)(c,{img:"tx-trace-dt-up.png",desc:"Record summary"}),"\n"]}),"\n"]}),(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The same ",(0,t.jsx)(a,{sid:"TTL06107",className:"uitext"})," is generated even if the transaction makes an external call. Even if projects are separated by service, all transactions between applications can be found through the initially issued ",(0,t.jsx)(a,{sid:"TTL06107",className:"uitext"}),". For more information about the detailed analysis of transaction trace through the ",(0,t.jsx)(a,{sid:"TTL06527",className:"uitext"})," window, see ",(0,t.jsx)(i.a,{href:"trs-profile#transaction-info",children:"the following"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["If you select ",(0,t.jsx)(a,{sid:"TTL06107",className:"uitext"})," in the ",(0,t.jsx)(a,{sid:"TTL06527",className:"uitext"})," window, the ",(0,t.jsx)(a,{sid:"TTL06377",className:"uitext"})," tab appears. The transactions and trace data are provided so that you can see various call relationships at a glance within or between systems, and identify where problems occurred for improvement."]}),"\n"]}),"\n"]})})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(i.h2,{id:"using-the-multi-transaction-tracing-feature",children:"Using the multi-transaction tracing feature"}),(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Go to ",(0,t.jsx)(a,{sid:"analysis",className:"uitext"})," > ",(0,t.jsx)(a,{sid:"multi_server_transaction_trace",className:"uitext"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Enter the ",(0,t.jsx)("b",{children:"MTID"})," value seen in ",(0,t.jsx)(a,{sid:"TTL06527",className:"uitext"})," window in ",(0,t.jsx)(a,{sid:"search_mtid_or_custid",className:"uitext"}),"."]}),"\n",(0,t.jsx)(c,{img:"trace-mtx-mtid.png",desc:"MTID"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Select the date and project to view."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["At the bottom of the screen, select ",(0,t.jsx)(a,{sid:"apply",className:"uitext"}),"."]}),"\n"]}),"\n"]}),(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(a,{sid:"BTN07120",className:"uitext"})," tab on the right displays a diagram that helps you find the call relationships for each transaction."]}),(0,t.jsx)(c,{img:"trace-mtx-mtid-chart.png",desc:"Multiple Transaction Trace"}),(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(a,{sid:"apply",className:"uitext"})," button at the bottom of the screen is disabled in the following situations:"]}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In case you set the same filter values \u200B\u200B(MTID/CUSTID, date, selected project) as in the previous search"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In case any of the filter values \u200B\u200B(MTID/CUSTID, date, selected project) is not entered"}),"\n"]}),"\n"]})]})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(i.h3,{id:"",children:(0,t.jsx)(a,{sid:"BTN07120"})}),(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(a,{sid:"BTN07120",className:"uitext"})," quickly and clearly provides users with the call relationship between transactions. The execution times for each individual transaction service with the same ",(0,t.jsx)(a,{sid:"TTL06107",className:"uitext"})," can be viewed. You can see the call relationship between transactions through the elapsed time (",(0,t.jsx)(o,{img:"number-01.png",desc:"number 1"})," ",(0,t.jsx)(a,{sid:"time_bar",className:"uitext"}),") represented with the background color of the transaction node. In ",(0,t.jsx)(a,{sid:"BTN07120",className:"uitext"}),", you can use the mouse to go to a desired position or zoom in or out by scrolling."]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Chart",src:s(91895).Z+"",width:"800",height:"623"})}),(0,t.jsxs)(i.p,{children:["If you select a transaction node, an additional ",(0,t.jsx)(a,{sid:"TTL06527",className:"uitext"})," window appears as follows. The transaction trace allows you to see the transaction details. For more information about the detailed analysis of transaction trace through the ",(0,t.jsx)(a,{sid:"TTL06527",className:"uitext"})," window, see ",(0,t.jsx)(i.a,{href:"trs-profile#transaction-info",children:"the following"}),"."]}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.em,{children:"A"})}),(0,t.jsx)(a,{sid:"small",className:"uitext"})," / ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.em,{children:"A"})}),(0,t.jsx)(a,{sid:"big",className:"uitext"}),": The size of the font displayed on the node can be adjusted."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(a,{sid:"time_bar",className:"uitext"}),": You can display or hide the step times (",(0,t.jsx)(a,{sid:"time_bar",className:"uitext"}),") for each node."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(a,{sid:"application_name",className:"uitext"}),": You can display or hide the agent names (oname) for each node."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(a,{sid:"project",className:"uitext"}),": You can display or hide the project names for each node."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(a,{sid:"database",className:"uitext"})," / ",(0,t.jsx)(a,{sid:"apply_external_remote",className:"uitext"})," / ",(0,t.jsx)(a,{sid:"apply_internal_remote",className:"uitext"}),": Connection requests for other databases or HTTP calls that occurred in the transaction can also be viewed through the nodes of the chart."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(i.h3,{id:"-1",children:(0,t.jsx)(a,{sid:"BTN07121"})}),(0,t.jsxs)(i.p,{children:["In the ",(0,t.jsx)(a,{sid:"BTN07121",className:"uitext"})," tab, you can see information for each transaction included in a multi-transaction in the table format."]}),(0,t.jsx)(c,{img:"trace-mtx-table.png",desc:"Table"}),(0,t.jsxs)(i.p,{children:["If you select each transaction, the ",(0,t.jsx)(a,{sid:"TTL06527",className:"uitext"})," window for the selected transaction appears, similar to selecting a node on the ",(0,t.jsx)(a,{sid:"BTN07120",className:"uitext"})," tab. The transaction trace allows you to see the transaction details. For more information about the detailed analysis of transaction trace through the ",(0,t.jsx)(a,{sid:"TTL06527",className:"uitext"})," window, see ",(0,t.jsx)(i.a,{href:"trs-profile#transaction-info",children:"the following"}),"."]}),(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Column icon",src:s(43178).Z+"",width:"24",height:"24"})," ",(0,t.jsx)(a,{sid:"BTN06441",className:"uitext"}),": You can edit the columns in the table."]})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(i.h3,{id:"-2",children:(0,t.jsx)(a,{sid:"BTN06296"})}),(0,t.jsxs)(i.p,{children:["In the ",(0,t.jsx)(a,{sid:"BTN06296",className:"uitext"})," tab, you can see each transaction and its trace details. The transactions within the overall transaction time or start times and step times of each trace to provide transaction call relationships in a tree format."]}),(0,t.jsx)(c,{img:"trace-mtx-tree.png",desc:"Tree"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"View one line icon",src:s(9415).Z+"",width:"24",height:"24"})," ",(0,t.jsx)(a,{sid:"BTN06368",className:"uitext"}),": You can arrange the tree format at intervals by displaying the texts displayed in the execution data for each section in a single line."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"View multiple lines icon",src:s(19911).Z+"",width:"24",height:"24"})," ",(0,t.jsx)(a,{sid:"BTN06369",className:"uitext"}),": All the texts displayed in the execution data for each section, appear by wrapping words."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(a,{sid:"BTN06327",className:"uitext"}),": The longest route can appear."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Chart icon",src:s(80617).Z+"",width:"48",height:"48"})," ",(0,t.jsx)(a,{sid:"BTN06743",className:"uitext"}),": The elapsed times are displayed in a bar chart."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Time icon",src:s(11076).Z+"",width:"24",height:"24"})," ",(0,t.jsx)(a,{sid:"BTN06744",className:"uitext"}),": The timestamps, gaps, and elapsed times for each segment are displayed in text."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["8 seconds or more: ",(0,t.jsx)("span",{class:"etrs",children:"Excessive delay"})," state is distinguished in ",(0,t.jsx)("span",{class:"etrs",children:"red"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Between 3 and 8 seconds: ",(0,t.jsx)("span",{class:"ov5ud10",children:"Delay"})," state is distinguished in ",(0,t.jsx)("span",{class:"ov5ud10",children:"orange"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Less than 3 seconds: ",(0,t.jsx)("span",{class:"woer",children:"Normal"})," state is distinguished in ",(0,t.jsx)("span",{class:"woer",children:"blue"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"In case of start and step times, the time differences caused by the transaction call environment are corrected on the screen through traces and mappings in the parent transactions. Accordingly, there may be differences from the actual time data."})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Hide icon",src:s(67806).Z+"",width:"24",height:"24"})," ",(0,t.jsx)(a,{sid:"BTN06745",className:"uitext"}),": The time is hidden."]}),"\n"]}),"\n"]}),(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["If you select ",(0,t.jsx)(i.img,{alt:"Statistics icon",src:s(45814).Z+"",width:"24",height:"24"})," button or ",(0,t.jsx)(i.img,{alt:"Pop-up icon",src:s(46316).Z+"",width:"24",height:"24"})," button, you can see the summary window such as ",(0,t.jsx)(a,{sid:"remote_http_call_statistics",className:"uitext"})," and ",(0,t.jsx)(a,{sid:"activestack",className:"uitext"}),"."]})}),(0,t.jsxs)(i.admonition,{type:"tip",children:[(0,t.jsx)(i.p,{children:"To search SQL variables and HTTP queries, add the following options to the agent settings."}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["For agent settings related to recording SQL parameters, see ",(0,t.jsx)(i.a,{href:"agent-dbsql#profile-sql-param",children:"the following"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["For agent settings related to recording the HTTP parameters, see ",(0,t.jsx)(i.a,{href:"agent-transaction#profile_http_parameter",children:"the following"}),"."]}),"\n"]}),"\n"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# SQL parameter lookup option: If the option is applied, SQL parameters are collected after being encrypted.\nprofile_sql_param_enabled=true \n\n// HTTP parameter lookup option: If the option is applied, HTTP query parameters are collected after being encrypted.\nprofile_http_parameter_enabled=true \n"})})]})]})]})}function r(e={}){let{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function l(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},91361:function(e,i,s){s.r(i),s.d(i,{metadata:()=>t,contentTitle:()=>l,default:()=>x,assets:()=>o,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"python/analysis-trace-mtx","title":"Multiple transaction trace","description":"The transactions and trace data are provided so that you can see various call relationships at a glance within or between systems, and identify where problems occurred for improvement.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/python/analysis-trace-mtx.mdx","sourceDirName":"python","slug":"/python/analysis-trace-mtx","permalink":"/en/python/analysis-trace-mtx","draft":false,"unlisted":false,"editUrl":"undefined/docs/python/analysis-trace-mtx.mdx","tags":[],"version":"current","frontMatter":{"id":"analysis-trace-mtx","title":"Multiple transaction trace","description":"The transactions and trace data are provided so that you can see various call relationships at a glance within or between systems, and identify where problems occurred for improvement.","keywords":["Python","Application","Multi-transaction"],"isTranslationMissing":false},"sidebar":"pySidebar","previous":{"title":"HITMAP","permalink":"/en/python/analysis-hitmap"},"next":{"title":"Transaction search","permalink":"/en/python/tx-profile"}}'),n=s("85893"),a=s("50065"),c=s("80703");let r={id:"analysis-trace-mtx",title:"Multiple transaction trace",description:"The transactions and trace data are provided so that you can see various call relationships at a glance within or between systems, and identify where problems occurred for improvement.",keywords:["Python","Application","Multi-transaction"],isTranslationMissing:!1},l=void 0,o={},d=[...c.d$];function h(e){return(0,n.jsx)(c.ZP,{})}function x(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},80617:function(e,i,s){s.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDRWMTFINDRWNEg0Wk00IDIyVjE1TDMzIDE1VjIyTDQgMjJaTTQgMjZWMzNIMjNWMjZMNCAyNlpNNCAzN1Y0NEgxMlYzN0g0WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K"},43178:function(e,i,s){s.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDRWMjBIMjJWNEgyWk0xNCA2VjE4SDEwVjZIMTRaTTQgNkg4VjE4SDRWNlpNMjAgMThIMTZWNkgyMFYxOFoiIGZpbGw9IiM3NTc1NzUiLz4KPC9zdmc+Cg=="},11076:function(e,i,s){s.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDEyQzIgNi40OCA2LjQ3IDIgMTEuOTkgMkMxNy41MiAyIDIyIDYuNDggMjIgMTJDMjIgMTcuNTIgMTcuNTIgMjIgMTEuOTkgMjJDNi40NyAyMiAyIDE3LjUyIDIgMTJaTTEyIDRDNy41OCA0IDQgNy41OCA0IDEyQzQgMTYuNDIgNy41OCAyMCAxMiAyMEMxNi40MiAyMCAyMCAxNi40MiAyMCAxMkMyMCA3LjU4IDE2LjQyIDQgMTIgNFpNMTEgN0gxMi44NTgxVjEyLjA3MjlMMTcgMTQuNTMxOEwxNi4wNzA5IDE2TDExIDEyLjk2ODJWN1oiIGZpbGw9IiM3NTc1NzUiLz4KPC9zdmc+Cg=="},67806:function(e,i,s){s.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC44NzYxIDQuMzY4OUMxMy45OSA0LjExOTY2IDEzLjAzMTggMy45ODY5OSAxMiAzLjk4Njk5QzcgMy45ODY5OSAzLjczIDcuMTAyMzkgMiAxMS41QzIuNTQwMDQgMTIuODcyOCAzLjIzMDEzIDE0LjEyMDYgNC4wNzYwNyAxNS4xODc3TDcuMDQ5NzYgMTIuMjA4OEM3LjAxNjk2IDExLjk3NzMgNyAxMS43NDA2IDcgMTEuNUM3IDguNzM1MjEgOS4yNCA2LjQ5MTMzIDEyIDYuNDkxMzNDMTIuMjQwMiA2LjQ5MTMzIDEyLjQ3NjQgNi41MDgzMiAxMi43MDc2IDYuNTQxMTdMMTQuODc2MSA0LjM2ODlaTTE4LjU0NDggNi4zNjA1NkwxNi4xNzExIDguNzM4M0MxNi42OTQ5IDkuNTMwMTcgMTcgMTAuNDc5NiAxNyAxMS41QzE3IDE0LjI2NDggMTQuNzYgMTYuNTA4NyAxMiAxNi41MDg3QzEwLjk4MTQgMTYuNTA4NyAxMC4wMzM2IDE2LjIwMyA5LjI0MzA4IDE1LjY3ODRMNy4xMTcyOCAxNy44MDc5QzguNTEwNzQgMTguNTc5NiAxMC4xMzUgMTkuMDEzIDEyIDE5LjAxM0MxNyAxOS4wMTMgMjAuMjcgMTUuODk3NiAyMiAxMS41QzIxLjE5MTMgOS40NDQyMiAyMC4wNDYgNy42Njg2NCAxOC41NDQ4IDYuMzYwNTZaTTEwLjcwNTggMTQuMjEzMUMxMS4wOTc0IDE0LjQwMDQgMTEuNTM2MiAxNC41MDUyIDEyIDE0LjUwNTJDMTMuNjYgMTQuNTA1MiAxNSAxMy4xNjI5IDE1IDExLjVDMTUgMTEuMDM1NCAxNC44OTU0IDEwLjU5NTggMTQuNzA4NCAxMC4yMDM1TDEwLjcwNTggMTQuMjEzMVpNOS45NDk1MiA5LjMwNDAzQzkuOTAwNzQgOS4zNDk3NSA5Ljg1MzQ4IDkuMzk3MDkgOS44MDc4NCA5LjQ0NTk3TDkuOTQ5NTIgOS4zMDQwM1pNMTkuMDcxMSAzTDIwLjQ4NTMgNC40MTY2N0w0LjkyODkzIDIwTDMuNTE0NzIgMTguNTgzM0wxOS4wNzExIDNaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo="},19911:function(e,i,s){s.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDNIMlY3SDRWNUg4VjE5SDVWMjFIMTNWMTlIMTBWNUgxNFY3SDE2VjNaIiBmaWxsPSIjNzU3NTc1Ii8+CjxwYXRoIGQ9Ik0yMCAxMEgxMlYxMkgyMFYxMFoiIGZpbGw9IiM3NTc1NzUiLz4KPHBhdGggZD0iTTIwIDE2VjE0SDEyVjE2SDIwWiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K"},46316:function(e,i,s){s.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMiAyVjE3SDdWMkgyMlpNMjAgNEg5VjZIMjBWNFpNMjAgOFYxNUg5VjhIMjBaTTIgOVYyMkgxNUgxN1YyMFYxOEgxNVYyMEg0VjlINlY3SDRIMlY5WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K"},50625:function(e,i,s){s.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iOSIgZmlsbD0iIzQ0ODVGRiIvPgo8cGF0aCBkPSJNOC4xMDU0NyA2LjE3OTY5TDEwLjExNDMgMTEuODUxNkwxMi4xMTIzIDYuMTc5NjlIMTQuMjI4NVYxNEgxMi42MTE4VjExLjg2MjNMMTIuNzcyOSA4LjE3MjM2TDEwLjY2MjEgMTRIOS41NTU2Nkw3LjQ1MDIgOC4xNzc3M0w3LjYxMTMzIDExLjg2MjNWMTRINlY2LjE3OTY5SDguMTA1NDdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOC4xMDU0NyA2LjE3OTY5TDEwLjExNDMgMTEuODUxNkwxMi4xMTIzIDYuMTc5NjlIMTQuMjI4NVYxNEgxMi42MTE4VjExLjg2MjNMMTIuNzcyOSA4LjE3MjM2TDEwLjY2MjEgMTRIOS41NTU2Nkw3LjQ1MDIgOC4xNzc3M0w3LjYxMTMzIDExLjg2MjNWMTRINlY2LjE3OTY5SDguMTA1NDdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},9415:function(e,i,s){s.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDNIMlY3SDRWNUg4VjE5SDVWMjFIMTNWMTlIMTBWNUgxNFY3SDE2VjNaIiBmaWxsPSIjNzU3NTc1Ii8+CjxwYXRoIGQ9Ik0xMy4yNSAxMy41QzEzLjk0MDQgMTMuNSAxNC41IDEyLjk0MDQgMTQuNSAxMi4yNUMxNC41IDExLjU1OTYgMTMuOTQwNCAxMSAxMy4yNSAxMUMxMi41NTk2IDExIDEyIDExLjU1OTYgMTIgMTIuMjVDMTIgMTIuOTQwNCAxMi41NTk2IDEzLjUgMTMuMjUgMTMuNVoiIGZpbGw9IiM3NTc1NzUiLz4KPHBhdGggZD0iTTE3LjI1IDEzLjVDMTcuOTQwNCAxMy41IDE4LjUgMTIuOTQwNCAxOC41IDEyLjI1QzE4LjUgMTEuNTU5NiAxNy45NDA0IDExIDE3LjI1IDExQzE2LjU1OTYgMTEgMTYgMTEuNTU5NiAxNiAxMi4yNUMxNiAxMi45NDA0IDE2LjU1OTYgMTMuNSAxNy4yNSAxMy41WiIgZmlsbD0iIzc1NzU3NSIvPgo8cGF0aCBkPSJNMjIuNSAxMi4yNUMyMi41IDEyLjk0MDQgMjEuOTQwNCAxMy41IDIxLjI1IDEzLjVDMjAuNTU5NiAxMy41IDIwIDEyLjk0MDQgMjAgMTIuMjVDMjAgMTEuNTU5NiAyMC41NTk2IDExIDIxLjI1IDExQzIxLjk0MDQgMTEgMjIuNSAxMS41NTk2IDIyLjUgMTIuMjVaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo="},45814:function(e,i,s){s.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDJWMjJINEgyMlYyMEg0VjJIMlpNMTYgMTcuOTk5OEgxNFYyLjk5OThIMTZWMTcuOTk5OFpNMTggMTcuOTk5OEgyMFY2Ljk5OThIMThWMTcuOTk5OFpNMTAgMTcuOTk5OEgxMlY4Ljk5OThIMTBWMTcuOTk5OFpNOCAxNy45OTk4SDZWMTIuOTk5OEg4VjE3Ljk5OThaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo="},91895:function(e,i,s){s.d(i,{Z:function(){return t}});let t=s.p+"assets/images/trace-mtx-chart-timebar-5aa9bc221958b2d236a1d1a071dc639a.png"},50065:function(e,i,s){s.d(i,{Z:function(){return r},a:function(){return c}});var t=s(67294);let n={},a=t.createContext(n);function c(e){let i=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);