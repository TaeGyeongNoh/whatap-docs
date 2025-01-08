"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["43110"],{64585:function(e,n,i){i.d(n,{ZP:function(){return o},d$:function(){return r}});var s=i(85893),t=i(50065);let r=[{value:"Basic usage guide",id:"basic-usage-guide",level:2},{value:"Monitoring items",id:"monitoring-items",level:2}];function a(e){let n={a:"a",admonition:"admonition",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Cmdname:r,InDoc:a,ProdImg:o}=n;return!r&&c("Cmdname",!0),!a&&c("InDoc",!0),!o&&c("ProdImg",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Home > Select Project > ",(0,s.jsx)(r,{sid:"side_reportStat",className:"uitext"})," > ",(0,s.jsx)(r,{sid:"side_sga",className:"uitext"})]}),"\n",(0,s.jsx)(n.p,{children:"You can monitor timely changes by saving summaries of System Global Area (SGA) that is an server memory area."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Performance optimization"}),": By monitoring the sizes and usage of various memory areas within the SGA to proactively prevent performance issues and optimally manage memory resources."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Bottleneck detection"}),": By early detecting the bottlenecks occurring in each memory area, the availability and stability of the system can be improved."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resource management"}),": You can check whether memory resources are allocated appropriately to reduce unnecessary memory usage and efficiently distribute memory resources."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Troubleshooting"}),": By identifying which part of the SGA area are overused so you can quickly troubleshoot the cause of poor performance."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"basic-usage-guide",children:"Basic usage guide"}),(0,s.jsx)(o,{img:"db-stat-sga-size.png",alt:"SGA Size"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the time to search in ",(0,s.jsx)(r,{sid:"time",className:"uitext"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select an instance name to view the trend data of the instance."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.img,{alt:"Search icon",src:i(60396).Z+"",width:"35",height:"29"}),"."]}),"\n"]}),"\n"]}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The query time can be set up to 3 weeks."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For more information on how to use the ",(0,s.jsx)(r,{sid:"time",className:"uitext"})," option, see ",(0,s.jsx)(n.a,{href:"usage-ui#timeselector",children:"the following"}),"."]}),"\n"]}),"\n"]})}),(0,s.jsxs)(a,{product:"tibero",children:[(0,s.jsx)(n.h2,{id:"monitoring-items",children:"Monitoring items"}),(0,s.jsx)(n.p,{children:"By continuously monitoring the following items, improve the efficiency of the database and prevent occurrence of incidents."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"SHARED MEMORY"})})}),"\n",(0,s.jsx)(n.p,{children:"It is the memory area shared between multiple processes in the database. It stores key data and program codes and allows multiple processes to access it simultaneously. You can determine the capacity and efficiency of the memory being used by the database and prevent memory shortages or bottlenecks in advance."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"FIXED MEMORY"})})}),"\n",(0,s.jsx)(n.p,{children:"It is a fixed memory area that is initialized when the database boots, and various fixed structures required for database operation are located there. It is set to a fixed size, so it does not change but you can check how much of the total memory usage it occupies. If a memory shortage occurs, check the fixed memory area."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"SHARED POOL MEMORY"})})}),"\n",(0,s.jsx)(n.p,{children:"It is a memory area that includes SQL and PL/SQL cursors, library cache, data dictionary cache, and such. This memory plays an important role in SQL reusability. You can monitor this memory to check SQL reusability and see if SQL hard parsing increases due to memory shortage. This helps prevent performance degradation."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"SHARED POOL ALLOCATORS (LC)"})})}),"\n",(0,s.jsx)(n.p,{children:"Amount of memory allocated to the library cache, which caches execution plans and SQL statements to improve the performance. Determine whether execution plan caching works effectively or unnecessary memory usage degrades the performance."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"SHARED POOL ALLOCATORS (DD)"})})}),"\n",(0,s.jsx)(n.p,{children:"Amount of memory allocated to the data dictionary cache, which stores information about database objects. Keeping the data dictionary cache at an appropriate size can improve performance by allowing quick query about database objects."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"SHARED POOL ALLOCATORS (SLAB)"})})}),"\n",(0,s.jsx)(n.p,{children:"Memory slab is a space used to manage memory allocation more efficiently. You can monitor this memory to improve the memory management efficiency. Try reducing unnecessary memory usage or resource waste."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"SHARED POOL ALLOCATORS (MISC)"})})}),"\n",(0,s.jsx)(n.p,{children:"It is the memory area of \u200B\u200BSHARED POOL that is used for various purposes. Trace other memory usage to see if any abnormal memory usage occurs."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"SHARED POOL ALLOCATORS (Total)"})})}),"\n",(0,s.jsx)(n.p,{children:"Total memory size allocated from SHARED POOL. This is the total sum including LC, DD, SLAB, MISC, and such. It can help you understand the overall memory usage and prevent performance degradation caused by memory shortage."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Database Buffers"})})}),"\n",(0,s.jsx)(n.p,{children:"The database buffer cache stores data blocks in memory to reduce physical disk I/O. You can monitor the usage of database buffers to increase cache hit rate and optimize performance. Make sure data blocks are cached appropriately."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Redo Buffers"})})}),"\n",(0,s.jsx)(n.p,{children:"A buffer that records changes when transactions occur in the database. This information is later saved as a log. Monitoring the Redo buffer usage can help you manage it so that log writing does not become a bottleneck. This can help improve the transaction performance."}),"\n"]}),"\n"]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function c(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},54519:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>m,assets:()=>l,toc:()=>d,frontMatter:()=>o});var s=JSON.parse('{"id":"tibero/sga-size","title":"SGA size","description":"You can monitor timely changes by saving summaries of SGA that is an Tibero server memory area.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tibero/sga-size.mdx","sourceDirName":"tibero","slug":"/tibero/sga-size","permalink":"/en/tibero/sga-size","draft":false,"unlisted":false,"editUrl":"undefined/docs/tibero/sga-size.mdx","tags":[],"version":"current","frontMatter":{"id":"sga-size","title":"SGA size","description":"You can monitor timely changes by saving summaries of SGA that is an Tibero server memory area.","keywords":["Tibero","DATABASE","Statistic"],"isTranslationMissing":false},"sidebar":"tiberoSidebar","previous":{"title":"Tablespace Size","permalink":"/en/tibero/table-space-size"},"next":{"title":"Report","permalink":"/en/tibero/report-intro"}}'),t=i("85893"),r=i("50065"),a=i("64585");let o={id:"sga-size",title:"SGA size",description:"You can monitor timely changes by saving summaries of SGA that is an Tibero server memory area.",keywords:["Tibero","DATABASE","Statistic"],isTranslationMissing:!1},c=void 0,l={},d=[...a.d$];function h(e){return(0,t.jsxs)(t.Fragment,{children:["\n","\n",(0,t.jsx)(a.ZP,{})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},60396:function(e,n,i){i.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg=="},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return a}});var s=i(67294);let t={},r=s.createContext(t);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);