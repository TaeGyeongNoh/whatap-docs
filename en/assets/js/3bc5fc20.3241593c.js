"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["39253"],{14191:function(e,s,i){i.r(s),i.d(s,{metadata:()=>a,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>r,frontMatter:()=>c});var a=JSON.parse('{"id":"cubrid/database-size","title":"Database size","description":"You can view the maximum capacity and usage for each database over time.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/cubrid/database-size.mdx","sourceDirName":"cubrid","slug":"/cubrid/database-size","permalink":"/en/cubrid/database-size","draft":false,"unlisted":false,"editUrl":"undefined/docs/cubrid/database-size.mdx","tags":[],"version":"current","frontMatter":{"id":"database-size","title":"Database size","description":"You can view the maximum capacity and usage for each database over time.","keywords":["CUBRID","DATABASE","Statistic"],"isTranslationMissing":false},"sidebar":"cubridSidebar","previous":{"title":"Increasing or decreasing the table size","permalink":"/en/cubrid/table-size"},"next":{"title":"Report","permalink":"/en/cubrid/report-intro"}}'),t=i("85893"),n=i("50065");let c={id:"database-size",title:"Database size",description:"You can view the maximum capacity and usage for each database over time.",keywords:["CUBRID","DATABASE","Statistic"],isTranslationMissing:!1},d=void 0,l={},r=[{value:"Basic usage guide",id:"basic-usage-guide",level:2},{value:"SPACE",id:"space",level:3},{value:"FILE",id:"file",level:3},{value:"Checking the size change",id:"databasesize",level:2},{value:"Checking the size details",id:"databasesizedetail",level:2}];function o(e){let s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{Cmdname:a,ImgLang:c,UI:d}=s;return!a&&u("Cmdname",!0),!c&&u("ImgLang",!0),!d&&u("UI",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Home > Select Project > ",(0,t.jsx)(a,{sid:"side_reportStat",className:"uitext"})," > ",(0,t.jsx)(a,{sid:"side_dbSize",className:"uitext"})]}),"\n",(0,t.jsx)(s.p,{children:"This menu allows you to monitor and manage the usage status of the database. This menu provides a visual representation of the overall size and usage of the database, and allows you to see the usage details."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"You can visually check the changes in database size and usage over time."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"It provides the details on the total size, used amount, and used percentage for each database."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"By monitoring the usage of the database in real time, you can check the usage and manage the capacity appropriately. By tracing high-usage databases, take actions to manage the capacity and optimize the performance. It can also proactively detect and respond to excessive database usage."}),"\n",(0,t.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(s.h2,{id:"basic-usage-guide",children:"Basic usage guide"}),(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(a,{sid:"side_dbSize",className:"uitext"}),", you can check the space usage of the database and the size and usage of the actual files used in the file system."]}),(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(a,{sid:"time",className:"uitext"}),", set the period to be analyzed."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(a,{sid:"instance",className:"uitext"}),", select an instance of the database to be analyzed."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Select ",(0,t.jsx)(s.img,{alt:"Search icon",src:i(60396).Z+"",width:"35",height:"29"}),"."]}),"\n"]}),"\n"]}),(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The query period can be set up to 3 weeks. In case of a view for 3 days or more, the graph displays the daily average"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["For more information on how to use the ",(0,t.jsx)(a,{sid:"time",className:"uitext"})," option, see ",(0,t.jsx)(s.a,{href:"usage-ui#timeselector",children:"the following"}),"."]}),"\n"]}),"\n"]})})]}),"\n",(0,t.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(s.h3,{id:"space",children:"SPACE"}),(0,t.jsx)(s.p,{children:"It visualizes the space usage in the database over time. You can check the total space, used space, and usage rate of major databases such as PERMANENT, TEMPORARY, Active_log, and Archive_log."}),(0,t.jsx)(c,{img:"db-stat-table-space-cubrid.png",desc:"Database size"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"PERMANENT"})}),": It is the space occupied by data that is permanently stored in the database."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"TEMPORARY"})}),": It is the space to store temporary data."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Active_log"})}),": It is the space where the current transaction logs are stored."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Archive_log"})}),": It is the space where completed transaction logs are stored."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(s.h3,{id:"file",children:"FILE"}),(0,t.jsx)(s.p,{children:"You can check the size and usage of actual files used in the database file system. You can analyze database file systems subdivided into INDEX, HEAP, SYSTEM, TEMP, and such."}),(0,t.jsx)(c,{img:"db-stat-table-space-file-cubrid.png",desc:"Database size"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"INDEX"})}),": It is the file where the database index is stored."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"HEAP"})}),": It is a file that stores the actual table data of the database."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"SYSTEM"})}),": It is a file that stores system-related information of the database."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"TEMP"})}),": It is a file that stores temporary data."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(s.h2,{id:"databasesize",children:"Checking the size change"}),(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(a,{sid:"TTL06025",className:"uitext"})," section, you can visually see the overall size and usage change of the database over time."]}),(0,t.jsx)(c,{img:"db-stat-table-space-check-trend-cubrid.png",desc:"Database size"}),(0,t.jsx)(s.p,{children:"To see the data for a specific period on the chart, hover your mouse over the chart and then move it. You can check detailed information about the time zone in the tooltip."})]}),"\n",(0,t.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(s.h2,{id:"databasesizedetail",children:"Checking the size details"}),(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(a,{sid:"TTL06026",className:"uitext"})," section, it provides detailed information for each database."]}),(0,t.jsx)(c,{img:"db-stat-table-space-size-details-cubrid.png",desc:"Database size"}),(0,t.jsxs)(s.p,{children:["You can see the usage changes of each database by comparing the time of the first query with the current time. To see the details of the database, select ",(0,t.jsx)(s.img,{alt:"Arrow icon",src:i(74570).Z+"",width:"24",height:"24"})," next to the database name."]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(d,{children:"total"}),": Size sum of all databases."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(d,{children:"used"}),": Total size of the databases in use."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(d,{children:"usage"}),": Usage rate calculated by (",(0,t.jsx)(s.code,{children:"used"})," / ",(0,t.jsx)(s.code,{children:"total"}),") \uD83D\uDFA8 100."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(d,{children:"changed amount"}),": It is the change in usage as of the current time compared to the first query time."]}),"\n"]}),"\n"]})]})]})}function h(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}function u(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},74570:function(e,s,i){i.d(s,{Z:function(){return a}});let a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzY1XzE5NDYpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjUgNkwxNi41IDEyTDguNSAxOEw4LjUgNloiIGZpbGw9IiM3NTc1NzUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF82NV8xOTQ2Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},60396:function(e,s,i){i.d(s,{Z:function(){return a}});let a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg=="},50065:function(e,s,i){i.d(s,{Z:function(){return d},a:function(){return c}});var a=i(67294);let t={},n=a.createContext(t);function c(e){let s=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);