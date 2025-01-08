"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["76300"],{84707:function(e,s,i){i.d(s,{ZP:function(){return l},d$:function(){return a}});var t=i(85893),n=i(50065);let a=[{value:"Before use",id:"before-use",level:2},{value:"DB roles configuration",id:"db-roles-configuration",level:3},{value:"Agent CONFIG.",id:"agent-config",level:3},{value:"Basic screen guide",id:"basic-screen-guide",level:2},{value:"Checking the changes in tablespace size",id:"table_space",level:2},{value:"Tablespace size details",id:"table_space_detail",level:2},{value:" TABLESPACE TYPE",id:"-tablespace-type",level:3},{value:" TABLESPACE",id:"-tablespace",level:3},{value:" DATAFILE",id:"-datafile",level:3},{value:"Checking the segment size",id:"TTL08164",level:2},{value:"Checking the segment size",id:"checkSegmentSize",level:2}];function c(e){let s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{Cmdname:a,ImgLang:c,InDoc:l,ProdImg:o,UI:r,Xclude:h}=s;return!a&&d("Cmdname",!0),!c&&d("ImgLang",!0),!l&&d("InDoc",!0),!o&&d("ProdImg",!0),!r&&d("UI",!0),!h&&d("Xclude",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Home > Select Project > ",(0,t.jsx)(a,{sid:"side_reportStat",className:"uitext"})," > ",(0,t.jsx)(a,{sid:"side_tableSpace",className:"uitext"})]}),"\n",(0,t.jsx)(s.p,{children:"This menu allows you to monitor and manage the usage status of the database tablespace. This menu provides a visual overview of the total size and usage of the tablespace, and allows you to check the detailed usage history."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"You can visually check the changes in tablespace size and usage over time."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"It provides the details on the total size, used amount, and used percentage for each tablespace."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(h,{product:"altibase,tibero",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"You can check the sizes of the top 50 segments."}),"\n"]})}),"\n",(0,t.jsx)(s.p,{children:"By monitoring the usage of tablespaces in real time, you can check the used amount and manage its appropriate capacity. Trace the tablespaces and segments with high usage and then take measures for capacity management and performance optimization. You can also detect and respond to excessive tablespace usage in advance."}),"\n",(0,t.jsxs)(h,{product:"altibase,tibero",children:[(0,t.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(s.h2,{id:"before-use",children:"Before use"}),(0,t.jsx)(s.p,{children:"To collect tablespace sizes, you need to set the database roles and agent options. Segment sizes are collected once a day, and the settings must be completed as follows."})]}),(0,t.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(s.h3,{id:"db-roles-configuration",children:"DB roles configuration"}),(0,t.jsx)(s.p,{children:"To collect segment sizes, assign the monitoring users appropriate database roles. Use the following SQL command to set the roles."}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",metastring:'title="SQL"',children:"grant select any dictionary to monitoring_user;\n-- or --\ngrant select on dba_segments to monitoring_user;\n"})})]}),(0,t.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(s.h3,{id:"agent-config",children:"Agent CONFIG."}),(0,t.jsx)(s.p,{children:"You can set the criteria for collecting segment sizes through the agent options. The default setting is to collect segments greater than 10 MB every day at 5:00 am."}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"segments_min_size=10\nsegments_hour=5\n"})})]})]}),"\n",(0,t.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(s.h2,{id:"basic-screen-guide",children:"Basic screen guide"}),(0,t.jsx)(h,{product:"altibase",children:(0,t.jsx)(o,{img:"db-stat-table-space.png",desc:"Tablespace size"})}),(0,t.jsxs)(l,{product:"altibase",children:[(0,t.jsxs)(s.p,{children:["Unlike other DBMS, Altibase Monitoring provides memory tablespaces. In ",(0,t.jsx)(a,{sid:"side_tableSpace",className:"uitext"}),", you can see the usage and trends of disk and memory tablespaces."]}),(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Memory tablespaces provide data access speeds that are significantly faster than disk. By monitoring the usage of memory tablespaces, you can check whether data is being loaded properly into memory and memory resources are being used efficiently."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Monitoring the usage for both disk and memory tablespaces allows you to understand how each resource is being used. This allows you to balance memory and disk resources and, if necessary, make appropriate adjustments to prevent performance degradation."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"By analyzing usage trends, you can predict when it will be required to increase memory or disk tablespaces. This helps you prevent performance issues caused by resource exhaustion in advance and establish an appropriate expansion plan."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"By comparing the usage between memory tablespaces and disk tablespaces, you can optimize load balancing to prevent specific workloads from being overly concentrated on either disk or memory."}),"\n"]}),"\n"]})}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Disk tablespace"}),"\n",(0,t.jsx)(c,{img:"db-stat-table-space-disk-altibase.png",desc:"Tablespace size"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Memory tablespace"}),"\n",(0,t.jsx)(c,{img:"db-stat-table-space-mem-altibase.png",desc:"Tablespace size"}),"\n"]}),"\n"]}),(0,t.jsx)(s.p,{children:"The basic usage is as follows:"})]}),(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(a,{sid:"time",className:"uitext"}),", set the period to be analyzed."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(a,{sid:"instance",className:"uitext"}),", select an instance of the database to be analyzed."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Select ",(0,t.jsx)(s.img,{alt:"Search icon",src:i(60396).Z+"",width:"35",height:"29"}),"."]}),"\n"]}),"\n"]}),(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The search period can be set up to 3 weeks. If you search for more than 3 days, the graph displays the daily average."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["For more information on how to use the ",(0,t.jsx)(a,{sid:"time",className:"uitext"})," option, see ",(0,t.jsx)(s.a,{href:"usage-ui#timeselector",children:"the following"}),"."]}),"\n"]}),"\n"]})})]}),"\n",(0,t.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(s.h2,{id:"table_space",children:"Checking the changes in tablespace size"}),(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(a,{sid:"table_space",className:"uitext"})," section, you can visually see the overall size and usage of the tablespaces over time."]}),(0,t.jsx)(l,{product:"oracle,oracle-pro",children:(0,t.jsx)(c,{img:"db-stat-table-space-check-trend-oracle-pro.png",desc:"Tablespace size"})}),(0,t.jsx)(l,{product:"tibero",children:(0,t.jsx)(c,{img:"db-stat-table-space-check-trend-tibero.png",desc:"Tablespace size"})}),(0,t.jsx)(l,{product:"altibase",children:(0,t.jsx)(c,{img:"db-stat-table-space-check-trend-altibase.png",desc:"Tablespace size"})}),(0,t.jsx)(s.p,{children:"Each color represents an individual tablespace. To see data for a specific period on the chart, hover your mouse over the chart and move it. A pop-up appears with detailed information for the period."})]}),"\n",(0,t.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(s.h2,{id:"table_space_detail",children:"Tablespace size details"}),(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(a,{sid:"table_space_detail",className:"uitext"})," section provides information details for each tablespace."]}),(0,t.jsx)(l,{product:"oracle,oracle-pro",children:(0,t.jsx)(c,{img:"db-stat-table-space-size-details-oracle-pro.png",desc:"Tablespace size"})}),(0,t.jsx)(l,{product:"tibero",children:(0,t.jsx)(c,{img:"db-stat-table-space-size-details-tibero.png",desc:"Tablespace size"})}),(0,t.jsxs)(l,{product:"oracle,oracle-pro,tibero",children:[(0,t.jsxs)(s.p,{children:["You can check the changes in usage for each tablespace by comparing the time of the first query with the current time. To check the details of a tablespace, select the ",(0,t.jsx)(s.img,{alt:"Arrow icon",src:i(74570).Z+"",width:"24",height:"24"})," button next to the tablespace name."]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{sid:"table_space_total",className:"uitext"}),": It is the total size of tablespace."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{sid:"table_space_used",className:"uitext"}),": It is the size currently in use."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{sid:"table_space_usage",className:"uitext"}),": It is the usage ratio compared to the total size."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{sid:"table_space_changed_amount",className:"uitext"}),": It is the change in usage at the current time compared to the first viewed time."]}),"\n"]}),"\n"]})]}),(0,t.jsxs)(l,{product:"altibase",children:[(0,t.jsx)(c,{img:"db-stat-table-space-size-details-altibase.png",desc:"Tablespace size"}),(0,t.jsxs)(s.p,{children:["You can check the usage change of each tablespace by comparing the initial query time with the current time. To view the details of a tablespace, select the ",(0,t.jsx)(s.img,{alt:"Arrow icon",src:i(74570).Z+"",width:"24",height:"24"})," button next to the tablespace name. The tablespace and data file size provided by Altibase includes various values \u200B\u200Bsuch as ",(0,t.jsx)(s.code,{children:"MAX"}),", ",(0,t.jsx)(s.code,{children:"ALLOC"}),", ",(0,t.jsx)(s.code,{children:"CURR"}),", and ",(0,t.jsx)(s.code,{children:"USED"}),". The values \u200B\u200Bdisplayed on the screen are composed based on these items."]}),(0,t.jsxs)(s.h3,{id:"-tablespace-type",children:[(0,t.jsx)(s.img,{src:i(12979).Z+"",width:"35",height:"35"})," TABLESPACE TYPE"]}),(0,t.jsxs)(s.p,{children:["You can check the size of tablespaces by ",(0,t.jsx)(s.code,{children:"V$TABLESPACES.TYPE"})," such as DISK, MEMORY, TEMP, and UNDO."]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(r,{children:"TOTAL"}),": Sum of the ",(0,t.jsx)(s.code,{children:"TOTAL"})," sizes of the tablespaces."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(r,{children:"USED"}),": Sum of the ",(0,t.jsx)(s.code,{children:"USED"})," sizes of the tablespaces."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(r,{children:"USAGE"}),": Usage percentage calculated as (",(0,t.jsx)(s.code,{children:"USED"})," / ",(0,t.jsx)(s.code,{children:"TOTAL"}),") \uD83D\uDFA8 100."]}),"\n"]}),"\n"]}),(0,t.jsxs)(s.h3,{id:"-tablespace",children:[(0,t.jsx)(s.img,{src:i(39701).Z+"",width:"35",height:"35"})," TABLESPACE"]}),(0,t.jsx)(s.p,{children:"A tablespace consists of multiple data files."}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(r,{children:"TOTAL"}),": Sum of the ",(0,t.jsx)(s.code,{children:"TOTAL"})," sizes of the data files (",(0,t.jsx)(s.code,{children:"V$DATAFILES.CURRSIZE"})," \uD83D\uDFA8 ",(0,t.jsx)(s.code,{children:"PAGESIZE"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(r,{children:"USED"}),": Used size calculated based on ",(0,t.jsx)(s.code,{children:"X$SEGMENT.TOTAL_USED_SIZE"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(r,{children:"USAGE"}),": Usage percentage calculated as (",(0,t.jsx)(s.code,{children:"USED"})," / ",(0,t.jsx)(s.code,{children:"TOTAL"}),") \uD83D\uDFA8 100."]}),"\n"]}),"\n"]}),(0,t.jsxs)(s.h3,{id:"-datafile",children:[(0,t.jsx)(s.img,{src:i(90604).Z+"",width:"35",height:"35"})," DATAFILE"]}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(r,{children:"TOTAL"}),": Sum of the ",(0,t.jsx)(s.code,{children:"TOTAL"})," sizes of the data files (",(0,t.jsx)(s.code,{children:"V$DATAFILES.CURRSIZE"})," \uD83D\uDFA8 ",(0,t.jsx)(s.code,{children:"PAGESIZE"}),")."]}),(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["Altibase does not provide ",(0,t.jsx)(s.code,{children:"USED"})," and ",(0,t.jsx)(s.code,{children:"USAGE"})," at the data file level."]})})]}),(0,t.jsxs)(h,{product:"altibase,tibero",children:[(0,t.jsx)(s.h2,{id:"TTL08164",children:"Checking the segment size"}),(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(a,{sid:"TTL08164",className:"uitext"})," section provides the detailed usage history by listing top 50 segment sizes."]}),(0,t.jsx)(c,{img:"db-stat-table-space-size-top50-oracle-pro.png",desc:"Tablespace size"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{sid:"TTL08165",className:"uitext"}),": It is the name of the container to which the segment belongs."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{sid:"TTL08166",className:"uitext"}),": It is the name of the tablespace to which the segment belongs."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{sid:"TTL08167",className:"uitext"}),": It is the user or schema that the segment owns."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{sid:"TTL08168",className:"uitext"}),": It is the segment name."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{sid:"TTL08169",className:"uitext"}),": It is the segment type (e.g. TABLE, INDEX)."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{sid:"TTL08177",className:"uitext"}),": It is the partition name of the segment, if applicable."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{sid:"table_space_size",className:"uitext"}),": It is the segment size."]}),"\n"]}),"\n"]})]}),(0,t.jsxs)(l,{product:"altibase",children:[(0,t.jsx)(s.h2,{id:"checkSegmentSize",children:"Checking the segment size"}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{sid:"TTL08164",className:"uitext"})," provides information on the top 50 segments that occupy the most space within the section tablespace. This information allows users to see how much space a specific segment is using. Each segment is detailed based on various properties. This information can be used to find abnormally large segments and perform space optimization if necessary."]}),(0,t.jsx)(c,{img:"db-stat-table-space-size-top50-altibase.png",desc:"Segment size"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"Tablespace Type"})}),": Type of tablespace."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"Tablespace"})}),": Name of the tablespace to which the segment belongs. A tablespace is a logical space in the database where data is stored."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"Table"})}),": Name of the table to which the segment belongs. This helps you identify which table is occupying the space."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"User"})}),": Name of the database user account that owns the segment. This allows you to find which user manages the data."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"Segment Type"})}),": Type of segment."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"Partition"})}),": For partitioned tables or indexes, this indicates which partition the segment belongs to. Partitioning is a method to manage large tables by dividing them into smaller units."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"mbytes"})}),": Amount of space in megabytes (MB) that the segment occupies. This allows you to see how much physical storage space each segment is using."]}),"\n"]}),"\n"]})]})]})]})}function l(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function d(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},16829:function(e,s,i){i.r(s),i.d(s,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>o,toc:()=>r,frontMatter:()=>l});var t=JSON.parse('{"id":"oracle-pro/table-space-size","title":"Tablespace Size","description":"You can view the maximum capacity and usage for each tablespace over time.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/oracle-pro/table-space-size.mdx","sourceDirName":"oracle-pro","slug":"/oracle-pro/table-space-size","permalink":"/en/oracle-pro/table-space-size","draft":false,"unlisted":false,"editUrl":"undefined/docs/oracle-pro/table-space-size.mdx","tags":[],"version":"current","frontMatter":{"id":"table-space-size","title":"Tablespace Size","description":"You can view the maximum capacity and usage for each tablespace over time.","keywords":["Oracle Pro","DATABASE","Statistic"],"isTranslationMissing":false},"sidebar":"dboracledmaSidebar","previous":{"title":"SQL Statistics","permalink":"/en/oracle-pro/stat"},"next":{"title":"SGA size","permalink":"/en/oracle-pro/sga-size"}}'),n=i("85893"),a=i("50065"),c=i("84707");let l={id:"table-space-size",title:"Tablespace Size",description:"You can view the maximum capacity and usage for each tablespace over time.",keywords:["Oracle Pro","DATABASE","Statistic"],isTranslationMissing:!1},d=void 0,o={},r=[...c.d$];function h(e){return(0,n.jsxs)(n.Fragment,{children:["\n","\n",(0,n.jsx)(c.ZP,{})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},74570:function(e,s,i){i.d(s,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzY1XzE5NDYpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjUgNkwxNi41IDEyTDguNSAxOEw4LjUgNloiIGZpbGw9IiM3NTc1NzUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF82NV8xOTQ2Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},60396:function(e,s,i){i.d(s,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg=="},12979:function(e,s,i){i.d(s,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII="},39701:function(e,s,i){i.d(s,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII="},90604:function(e,s,i){i.d(s,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC"},50065:function(e,s,i){i.d(s,{Z:function(){return l},a:function(){return c}});var t=i(67294);let n={},a=t.createContext(n);function c(e){let s=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);