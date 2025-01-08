"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["71425"],{95230:function(e,i,n){n.d(i,{ZP:function(){return c},d$:function(){return a}});var t=n(85893),s=n(50065);let a=[{value:"Basic screen guide",id:"basic-screen-guide",level:2},{value:"Checking the changes over time",id:"checking-the-changes-over-time",level:2},{value:"Checking the sizes for each table",id:"checking-the-sizes-for-each-table",level:2},{value:"Downloading the viewed data",id:"downloading-the-viewed-data",level:2}];function M(e){let i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Cmdname:a,InDoc:M,ProdImg:c,Xclude:g}=i;return!a&&o("Cmdname",!0),!M&&o("InDoc",!0),!c&&o("ProdImg",!0),!g&&o("Xclude",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["Home > Select Project > ",(0,t.jsx)(a,{sid:"side_reportStat",className:"uitext"})," > ",(0,t.jsx)(a,{sid:"side_dbSize",className:"uitext"})]}),"\n",(0,t.jsx)(i.p,{children:"It aggregates the sizes of tables for each database and provides trend data in a chart. You can identify and manage the trend in database capacity growth. You can prepare for rapid capacity increases by identifying them in advance."}),"\n",(0,t.jsx)(i.p,{children:"Database size can affect the performance. You can prepare to troubleshoot performance issues because the increase in size can delay the query execution. It is also required to identify and prevent problems in advance that may increase the size due to incorrect queries or database structure issues."}),"\n",(0,t.jsx)(i.p,{children:"The trend in database size helps you understand usage patterns and data growth. You can predict future capacity requirements and take possible actions. Monitoring these changes helps you optimize the resources and costs."}),"\n",(0,t.jsxs)(M,{product:"mysql",children:[(0,t.jsxs)(i.p,{children:["MySQL database size can be seen in ",(0,t.jsx)(i.code,{children:"information_schema.tables"}),", and the monitoring account must have the table search role for aggregation. Role settings are required as follows."]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"grant select on {DB_NAME}.* to whatap;\n"})}),(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The sizes for ",(0,t.jsx)(i.code,{children:"information_schema"})," and ",(0,t.jsx)(i.code,{children:"performance_schema"})," are not collected."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"The collection cycle is collected once every hour."}),"\n"]}),"\n"]})})]}),"\n",(0,t.jsxs)(M,{product:"postgresql",children:[(0,t.jsxs)(i.p,{children:["The total database size is queried with the ",(0,t.jsx)(i.code,{children:"pg_database_size"})," function, and the monitoring account must have the connect or ",(0,t.jsx)(i.code,{children:"pg_read_all_stats"})," role. ",(0,t.jsx)(i.code,{children:"template database"})," is excluded from collection."]}),(0,t.jsxs)(i.p,{children:["Individual table sizes can be queried with the ",(0,t.jsx)(i.code,{children:"pg_relation_size"}),", ",(0,t.jsx)(i.code,{children:"pg_indexes_size"}),", and ",(0,t.jsx)(i.code,{children:"pg_total_relation_size"})," functions, and the query role for the corresponding schema is required."]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"grant pg_read_all_stats to whatap;\ngrant usage on schema {schema_name} to whatap;\n"})}),(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The sizes for the ",(0,t.jsx)(i.code,{children:"pg_catalog"}),", ",(0,t.jsx)(i.code,{children:"sys"}),", ",(0,t.jsx)(i.code,{children:"information_schema"}),", and ",(0,t.jsx)(i.code,{children:"pg_toast"})," schemata are not collected."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"The collection cycle is collected once every hour."}),"\n"]}),"\n"]})})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(i.h2,{id:"basic-screen-guide",children:"Basic screen guide"}),(0,t.jsx)(c,{img:"db-database-size.png",desc:"Database size"}),(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Set the time to search in ",(0,t.jsx)(a,{sid:"time",className:"uitext"}),". You can also select a lookup time by clicking the green button."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Select a target to view in ",(0,t.jsx)(a,{sid:"instance",className:"uitext"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Select ",(0,t.jsx)(i.img,{alt:"Search icon",src:n(60396).Z+"",width:"35",height:"29"}),"."]}),"\n"]}),"\n"]}),(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"The lookup time can be set up to 62 days. In case of a view for 3 days or more, the graph displays the daily average."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["For more information on how to use the ",(0,t.jsx)(a,{sid:"time",className:"uitext"})," option, see ",(0,t.jsx)(i.a,{href:"usage-ui#timeselector",children:"the following"}),"."]}),"\n"]}),"\n"]})})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(i.h2,{id:"checking-the-changes-over-time",children:"Checking the changes over time"}),(0,t.jsx)(c,{img:"db-database-size-select-db.png",desc:"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AC\uC774\uC988"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(a,{sid:"TTL06025",className:"uitext"}),"\n",(0,t.jsx)(i.p,{children:"You can visually see the changes in the total size and usage of the database over time. The chart displays the sizes for each database in different color. Hover your mouse over the chart and move it left and right to view the details. You can see information details on the sizes for each database at a specific time point through the tooltip."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(a,{sid:"TTL06026",className:"uitext"}),"\n",(0,t.jsxs)(i.p,{children:["It provides capacity details for each database in a table format. You can check the names (",(0,t.jsx)(i.strong,{children:"DB NAME"}),") for each database, total capacity (",(0,t.jsx)(i.strong,{children:"TOTAL"}),"), and changed amount (",(0,t.jsx)(i.strong,{children:"CHANGED"}),"). If you select a database, you can see information details in the ",(0,t.jsx)(a,{sid:"TTL06572",className:"uitext"})," section."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(i.h2,{id:"checking-the-sizes-for-each-table",children:"Checking the sizes for each table"}),(0,t.jsxs)(i.p,{children:["If you select a database in the ",(0,t.jsx)(a,{sid:"TTL06026",className:"uitext"})," section, you can check the list of sizes for each table corresponding to the top 50 sizes in the database."]}),(0,t.jsx)(c,{img:"db-database-size-top50.png",desc:"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AC\uC774\uC988"}),(0,t.jsxs)(M,{product:"mysql",children:[(0,t.jsxs)(i.p,{children:["It displays the data size (",(0,t.jsx)(i.strong,{children:"DATA SIZE"}),"), index size (",(0,t.jsx)(i.strong,{children:"INDEX SIZE"}),"), and number of rows (",(0,t.jsx)(i.strong,{children:"ROWS"}),") for each table in the database by default. You can check the changes in the start time and end time for the query. This allows you to easily detect large tables and supports management efforts for capacity optimization."]}),(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The information in the ",(0,t.jsx)(a,{sid:"TTL06026",className:"uitext"})," section may differ from the actual size because it is the information on ",(0,t.jsx)(i.code,{children:"information_schema.tables"}),". To check the file size (",(0,t.jsx)(i.strong,{children:"FILE SIZE"}),") of ",(0,t.jsx)(i.code,{children:"information_schema.innodb_tablespaces"}),", set the following option to the DBX agent. This size is close to the actual size."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"table_filesize=true\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["It targets the tables for which the monitoring account has the query role. For more information about the monitoring account creation, see ",(0,t.jsx)(i.a,{href:"install-agent#uid",children:"the following"}),"."]}),"\n"]}),"\n"]})})]}),(0,t.jsx)(M,{product:"postgresql",children:(0,t.jsxs)(i.p,{children:["You can query the schema name (",(0,t.jsx)(i.strong,{children:"SCHEMANAME"}),"), table name (",(0,t.jsx)(i.strong,{children:"TABLENAME"}),"), table size (",(0,t.jsx)(i.strong,{children:"TABLE SIZE"}),"), index size (",(0,t.jsx)(i.strong,{children:"INDEX SIZE"}),"), and total capacity (",(0,t.jsx)(i.strong,{children:"TOTAL SIZE"}),") for each table in the database. You can check the changes in the start time and end time for the query. This allows you to easily detect large tables and supports management efforts for capacity optimization."]})}),(0,t.jsxs)(g,{product:"mongodb",children:[(0,t.jsxs)(i.p,{children:["When you select the ",(0,t.jsx)("span",{class:"uitext",children:"TABLENAME"})," column in the table list of the ",(0,t.jsx)(a,{sid:"TTL06572",className:"uitext"})," section, the ",(0,t.jsx)(i.em,{children:(0,t.jsx)(i.strong,{children:"Object Detail"})})," window appears, where you can check the configuration of ",(0,t.jsx)(i.strong,{children:"column"})," and ",(0,t.jsx)(i.strong,{children:"index"}),"."]}),(0,t.jsx)(c,{img:"db-database-size-objectdetail.png",desc:"Object detail"})]}),(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(M,{product:"postgresql",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["This function is supported in DBX agent 1.6.15 or later. For more information about the database roles and related settings, see ",(0,t.jsx)(i.a,{href:"install-agent#uid",children:"the following"}),"."]}),"\n"]})}),(0,t.jsx)(M,{product:"mongodb",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["This function is supported in DBX agent 1.7.0 or later. For more information about the related agent configuration, see ",(0,t.jsx)(i.a,{href:"agent-dbx-settings#collectdata",children:"the following"}),"."]}),"\n"]})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["To change the order of table columns or hide specific columns in the ",(0,t.jsx)(a,{sid:"TTL06572",className:"uitext"})," section, select ",(0,t.jsx)(i.img,{alt:"Column icon",src:n(3195).Z+"",width:"24",height:"24"})," on the upper right. For more information about the column configuration, see ",(0,t.jsx)(i.a,{href:"instance-monitoring#change-column",children:"the following"}),"."]}),"\n"]})]})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(i.h2,{id:"downloading-the-viewed-data",children:"Downloading the viewed data"}),(0,t.jsxs)(i.p,{children:["You can download the searched data as a CSV format file. Select ",(0,t.jsx)(i.img,{alt:"Download icon",src:n(89544).Z+"",width:"49",height:"24"})," and then select ",(0,t.jsx)(a,{sid:"TTL06026",className:"uitext"})," or ",(0,t.jsx)(a,{sid:"TTL06572",className:"uitext"}),"."]})]})]})}function c(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(M,{...e})}):M(e)}function o(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},5451:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>o,default:()=>r,assets:()=>g,toc:()=>d,frontMatter:()=>c});var t=JSON.parse('{"id":"mongodb/database-size","title":"Database size","description":"It aggregates the sizes of tables for each MongoDB database and provides trend data in a chart.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/mongodb/database-size.mdx","sourceDirName":"mongodb","slug":"/mongodb/database-size","permalink":"/en/mongodb/database-size","draft":false,"unlisted":false,"editUrl":"undefined/docs/mongodb/database-size.mdx","tags":[],"version":"current","frontMatter":{"id":"database-size","title":"Database size","description":"It aggregates the sizes of tables for each MongoDB database and provides trend data in a chart.","keywords":["MongoDB","DATABASE","Database size"],"isTranslationMissing":false},"sidebar":"mongodbSidebar","previous":{"title":"Metric Anomaly Detection","permalink":"/en/mongodb/metrics-detect-anormal"},"next":{"title":"Log","permalink":"/en/mongodb/log-main"}}'),s=n("85893"),a=n("50065"),M=n("95230");let c={id:"database-size",title:"Database size",description:"It aggregates the sizes of tables for each MongoDB database and provides trend data in a chart.",keywords:["MongoDB","DATABASE","Database size"],isTranslationMissing:!1},o=void 0,g={},d=[...M.d$];function j(e){return(0,s.jsx)(M.ZP,{})}function r(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},89544:function(e,i,n){n.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0OSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NSAxMS4zOTM5VjYuNzVIMTEuMjVWMTEuMzkzOUg4LjkxNjY3TDEzIDE1LjQ5MTdMMTcuMDgzMyAxMS4zOTM5SDE0Ljc1Wk03Ljc1IDE2LjY2MjVWMTcuODMzM0gxOC4yNVYxNi42NjI1SDcuNzVWMTYuNjYyNVoiIGZpbGw9IiNBREFEQUQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi4zMSAxMS4wODlDMjYuMjkyOSAxMC43MzcgMjYuMjUyMyAxMC40NDc0IDI2LjE4ODEgMTAuMjJDMjYuMTIzOSA5Ljk5MjcxIDI2LjAzNjIgOS44MTMwNSAyNS45MjUgOS42ODEwNUMyNS44MTM4IDkuNTQ5MDUgMjUuNjgzMyA5LjQ1OTIyIDI1LjUzMzYgOS40MTE1NUMyNS4zODM5IDkuMzYzODggMjUuMjE0OSA5LjM0MDA1IDI1LjAyNjcgOS4zNDAwNUMyNC44MDQyIDkuMzQwMDUgMjQuNTk0NiA5LjM4NTg4IDI0LjM5NzggOS40Nzc1NUMyNC4yMDExIDkuNTY5MjIgMjQuMDMyMSA5LjcxNTg4IDIzLjg5MDkgOS45MTc1NUMyMy43NDk4IDEwLjExOTIgMjMuNjM4NSAxMC4zODUgMjMuNTU3MyAxMC43MTVDMjMuNDc2IDExLjA0NTEgMjMuNDM1MyAxMS40NDQ3IDIzLjQzNTMgMTEuOTE0QzIzLjQzNTMgMTIuMzkwNyAyMy40NzYgMTIuNzkyMiAyMy41NTczIDEzLjExODVDMjMuNjM4NSAxMy40NDQ5IDIzLjc0OTggMTMuNzA4OSAyMy44OTA5IDEzLjkxMDVDMjQuMDMyMSAxNC4xMTIyIDI0LjIwMTEgMTQuMjU4OSAyNC4zOTc4IDE0LjM1MDVDMjQuNTk0NiAxNC40NDIyIDI0LjgwNDIgMTQuNDg4IDI1LjAyNjcgMTQuNDg4QzI1LjI4MzMgMTQuNDg4IDI1LjQ5MDggMTQuNDQwNCAyNS42NDkxIDE0LjM0NUMyNS44MDc0IDE0LjI0OTcgMjUuOTMzNiAxNC4xMjMyIDI2LjAyNzcgMTMuOTY1NUMyNi4xMjE4IDEzLjgwNzkgMjYuMTg4MSAxMy42MjgyIDI2LjIyNjYgMTMuNDI2NUMyNi4yNjUxIDEzLjIyNDkgMjYuMjkyOSAxMy4wMTc3IDI2LjMxIDEyLjgwNUgyOC4zMTJDMjguMzEyIDEzLjI1OTcgMjguMjM3MSAxMy42ODE0IDI4LjA4NzQgMTQuMDdDMjcuOTM3NyAxNC40NTg3IDI3LjcxNzQgMTQuNzk5NyAyNy40MjY1IDE1LjA5M0MyNy4xMzU2IDE1LjM4NjQgMjYuNzc2MyAxNS42MTU1IDI2LjM0ODUgMTUuNzgwNUMyNS45MjA3IDE1Ljk0NTUgMjUuNDI4OCAxNi4wMjggMjQuODcyNyAxNi4wMjhDMjQuMzUwOCAxNi4wMjggMjMuODc4MSAxNS45NDM3IDIzLjQ1NDYgMTUuNzc1QzIzLjAzMTEgMTUuNjA2NCAyMi42Njk2IDE1LjM1MTYgMjIuMzcwMiAxNS4wMTA1QzIyLjA3MDcgMTQuNjY5NSAyMS44Mzk3IDE0LjI0MjQgMjEuNjc3MiAxMy43MjlDMjEuNTE0NiAxMy4yMTU3IDIxLjQzMzMgMTIuNjEwNyAyMS40MzMzIDExLjkxNEMyMS40MzMzIDExLjIyNDcgMjEuNTE0NiAxMC42MjE2IDIxLjY3NzIgMTAuMTA0NUMyMS44Mzk3IDkuNTg3NTUgMjIuMDcwNyA5LjE1ODU1IDIyLjM3MDIgOC44MTc1NUMyMi42Njk2IDguNDc2NTUgMjMuMDMxMSA4LjIyMTcyIDIzLjQ1NDYgOC4wNTMwNUMyMy44NzgxIDcuODg0MzggMjQuMzUwOCA3LjgwMDA1IDI0Ljg3MjcgNy44MDAwNUMyNS40NDU5IDcuODAwMDUgMjUuOTQ4NSA3Ljg4NDM4IDI2LjM4MDYgOC4wNTMwNUMyNi44MTI2IDguMjIxNzIgMjcuMTc0MSA4LjQ1NDU1IDI3LjQ2NSA4Ljc1MTU1QzI3Ljc1NTkgOS4wNDg1NSAyNy45NzE5IDkuMzk2ODggMjguMTEzMSA5Ljc5NjU1QzI4LjI1NDMgMTAuMTk2MiAyOC4zMjA2IDEwLjYyNyAyOC4zMTIgMTEuMDg5SDI2LjMxWk0zMC4zODI0IDEzLjM4OEMzMC4zOTk2IDEzLjc4NDEgMzAuNDk3OSAxNC4wNzc0IDMwLjY3NzYgMTQuMjY4QzMwLjg1NzMgMTQuNDU4NyAzMS4xNjEgMTQuNTU0IDMxLjU4ODggMTQuNTU0QzMxLjk0ODEgMTQuNTU0IDMyLjIyMTkgMTQuNDY3OSAzMi40MTAxIDE0LjI5NTVDMzIuNTk4MyAxNC4xMjMyIDMyLjY5MjQgMTMuODk0MSAzMi42OTI0IDEzLjYwOEMzMi42OTI0IDEzLjM4OCAzMi41OTE5IDEzLjIxMiAzMi4zOTA5IDEzLjA4QzMyLjE4OTggMTIuOTQ4IDMxLjkzNTMgMTIuODMyNSAzMS42MjczIDEyLjczMzVDMzEuMzE5MyAxMi42MzQ1IDMwLjk4OTkgMTIuNTMzNyAzMC42MzkxIDEyLjQzMUMzMC4yODgzIDEyLjMyODQgMjkuOTU4OSAxMi4xOTA5IDI5LjY1MDkgMTIuMDE4NUMyOS4zNDI5IDExLjg0NjIgMjkuMDg4NCAxMS42MjI2IDI4Ljg4NzQgMTEuMzQ3NUMyOC42ODYzIDExLjA3MjUgMjguNTg1OCAxMC43MTE0IDI4LjU4NTggMTAuMjY0QzI4LjU4NTggOS44OTAwNSAyOC42NTIxIDkuNTUwODggMjguNzg0NyA5LjI0NjU1QzI4LjkxNzMgOC45NDIyMSAyOS4xMDk4IDguNjgxODggMjkuMzYyMiA4LjQ2NTU1QzI5LjYxNDYgOC4yNDkyMSAyOS45MjA0IDguMDg0MjIgMzAuMjc5OCA3Ljk3MDU1QzMwLjYzOTEgNy44NTY4OCAzMS4wNDU1IDcuODAwMDUgMzEuNDk4OSA3LjgwMDA1QzMyLjM4MDIgNy44MDAwNSAzMy4wNjY3IDcuOTgxNTUgMzMuNTU4NyA4LjM0NDU1QzM0LjA1MDYgOC43MDc1NSAzNC4zNjkzIDkuMjgxMzggMzQuNTE0OCAxMC4wNjZIMzIuNjE1NEMzMi41OTgzIDkuNzk0NzEgMzIuNDk5OSA5LjU4MDIyIDMyLjMyMDMgOS40MjI1NUMzMi4xNDA2IDkuMjY0ODggMzEuODkyNSA5LjE4NjA1IDMxLjU3NTkgOS4xODYwNUMzMS4yNjc5IDkuMTg2MDUgMzEuMDI2MyA5LjI3MDM4IDMwLjg1MDkgOS40MzkwNUMzMC42NzU1IDkuNjA3NzIgMzAuNTg3OCA5LjgxMzA1IDMwLjU4NzggMTAuMDU1QzMwLjU4NzggMTAuMjg5NyAzMC42ODgzIDEwLjQ3MTIgMzAuODg5NCAxMC41OTk1QzMxLjA5MDQgMTAuNzI3OSAzMS4zNDQ5IDEwLjg0MTUgMzEuNjUyOSAxMC45NDA1QzMxLjk2MDkgMTEuMDM5NSAzMi4yOTAzIDExLjE0MDQgMzIuNjQxMSAxMS4yNDNDMzIuOTkxOSAxMS4zNDU3IDMzLjMyMTMgMTEuNDkwNSAzMy42MjkzIDExLjY3NzVDMzMuOTM3MyAxMS44NjQ1IDM0LjE5MTggMTIuMTEyIDM0LjM5MjkgMTIuNDJDMzQuNTkzOSAxMi43MjgxIDM0LjY5NDQgMTMuMTMxNCAzNC42OTQ0IDEzLjYzQzM0LjY5NDQgMTQuMDA0MSAzNC42MTUzIDE0LjMzNzcgMzQuNDU3IDE0LjYzMUMzNC4yOTg4IDE0LjkyNDQgMzQuMDgwNiAxNS4xNzU1IDMzLjgwMjUgMTUuMzg0NUMzMy41MjQ1IDE1LjU5MzUgMzMuMTkyOSAxNS43NTMgMzIuODA3OSAxNS44NjNDMzIuNDIyOSAxNS45NzMgMzIuMDAzNyAxNi4wMjggMzEuNTUwMyAxNi4wMjhDMzAuNDYzNyAxNi4wMjggMjkuNjcyMyAxNS43OTUyIDI5LjE3NjEgMTUuMzI5NUMyOC42Nzk5IDE0Ljg2MzkgMjguNDMxOCAxNC4yMTY3IDI4LjQzMTggMTMuMzg4SDMwLjM4MjRaTTM4LjcwMjcgMTUuODk2TDQxLjI5NTEgNy45MzIwNUgzOS40NzI3TDM3Ljg4MTQgMTMuNDFIMzcuODU1N0wzNi4yOTAxIDcuOTMyMDVIMzQuMzkwN0wzNi45ODMxIDE1Ljg5NkgzOC43MDI3WiIgZmlsbD0iI0FEQURBRCIvPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjIzIiByeD0iMy41IiBzdHJva2U9IiM5Nzk3OTciLz4KPC9zdmc+Cg=="},60396:function(e,i,n){n.d(i,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg=="},3195:function(e,i,n){n.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtY29sdW1uPC90aXRsZT4gLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Mi4wMDAwMDAsIC0zMDMxLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iYXBwbGljYXRpb24taWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMjM0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jb2x1bW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4wMDAwMDAsIDY4NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgNC4wMDAwMDApIiBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwwIEwwLDE2IEwyMCwxNiBMMjAsMCBMMCwwIFogTTEyLDIgTDEyLDE0IEw4LDE0IEw4LDIgTDEyLDIgWiBNMiwyIEw2LDIgTDYsMTQgTDIsMTQgTDIsMiBaIE0xOCwxNCBMMTQsMTQgTDE0LDIgTDE4LDIgTDE4LDE0IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},50065:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return M}});var t=n(67294);let s={},a=t.createContext(s);function M(e){let i=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:M(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);