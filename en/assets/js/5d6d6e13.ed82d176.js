"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["87021"],{24477:function(e,s,t){t.d(s,{ZP:function(){return c},d$:function(){return i}});var n=t(85893),r=t(50065);let i=[];function d(e){let s={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{Title:t}=s;return!t&&function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Title",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{level:e.level,hashid:"column-info",children:"Column information guide"}),"\n",(0,n.jsxs)(s.p,{children:["For more information about columns, see ",(0,n.jsx)(s.a,{href:"https://docs.oracle.com/",children:"the link"}),"."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Item"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"sid"})}),(0,n.jsx)(s.td,{children:"Session ID"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"cpu(xos)"})}),(0,n.jsx)(s.td,{children:"CPU utilization collected by the installed XOS"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"serial#"})}),(0,n.jsx)(s.td,{children:"Value to increment to determine if the same session ID has been used."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"username"})}),(0,n.jsx)(s.td,{children:"DB user name."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"command"})}),(0,n.jsxs)(s.td,{children:["Same as ",(0,n.jsx)(s.code,{children:"COMMAND_TYPE"}),"; SQL command number"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"status"})}),(0,n.jsx)(s.td,{children:"Session status"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"schemaname"})}),(0,n.jsx)(s.td,{children:"Schema. Same as the username."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"osuser"})}),(0,n.jsx)(s.td,{children:"Username of the OS that accessed the session."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"spid"})}),(0,n.jsx)(s.td,{children:"OS process ID."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"process"})}),(0,n.jsx)(s.td,{children:"ID of the client process that accessed the session."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"logon_time"})}),(0,n.jsx)(s.td,{children:"Session created time point."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"last_call_et"})}),(0,n.jsx)(s.td,{children:"If the session is active, it is the elapsed time (sec) since activation."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"sql_text"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"query"}),", running statement, SQL statement that separates literal strings"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"sql_param"})}),(0,n.jsxs)(s.td,{children:["Literal value separated from ",(0,n.jsx)(s.code,{children:"query"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"prev_sql_text"})}),(0,n.jsx)(s.td,{children:"Previously executed query"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"prev_sql_param"})}),(0,n.jsx)(s.td,{children:"Previously executed query param"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"program"})}),(0,n.jsx)(s.td,{children:"Program information executed by client"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"type"})}),(0,n.jsxs)(s.td,{children:["session type - can be adjusted in user background recursive (",(0,n.jsx)(s.em,{children:"whatap.conf"}),")."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"seq#"})}),(0,n.jsx)(s.td,{children:"Number that uniquely identifies the current or last wait (incremented with each wait)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"event"})}),(0,n.jsx)(s.td,{children:"Number of the resource or event if the session is waiting."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"p1"})}),(0,n.jsx)(s.td,{children:"First waiting event parameter (decimal point)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"p2"})}),(0,n.jsx)(s.td,{children:"Second waiting event parameter (decimal point)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"p3"})}),(0,n.jsx)(s.td,{children:"Third waiting event parameter (decimal point)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"wait_class"})}),(0,n.jsx)(s.td,{children:"Class name of the waiting event"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"wait_time"})}),(0,n.jsxs)(s.td,{children:["The value is ",(0,n.jsx)(s.code,{children:"0"})," if the session is waiting. It is the last waiting time (milliseconds) if the value is greater than ",(0,n.jsx)(s.code,{children:"0"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"seconds_in_wait"})}),(0,n.jsx)(s.td,{children:"Time spent waiting for the wait if the session is waiting. Otherwise, it is the time elapsed since the last waiting."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"state"})}),(0,n.jsxs)(s.td,{children:["Waiting state: ",(0,n.jsx)(s.code,{children:"WAITING"}),", ",(0,n.jsx)(s.code,{children:"WAITED UNKNOWN TIME"}),", ",(0,n.jsx)(s.code,{children:"WAITED SHORT TIME"}),", ",(0,n.jsx)(s.code,{children:"WAITED KNOWN TIME"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"machine"})}),(0,n.jsx)(s.td,{children:"Name of the client server that accessed the session (hostname)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"port"})}),(0,n.jsx)(s.td,{children:"Clinet port number"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"terminal"})}),(0,n.jsx)(s.td,{children:"Client terminal name"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"module"})}),(0,n.jsx)(s.td,{children:"Name of the module set by the user of the program executed on the client."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"action"})}),(0,n.jsx)(s.td,{children:"Action name set by the user of the running module."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"client_info"})}),(0,n.jsx)(s.td,{children:"Client information set by user"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"client_identifier"})}),(0,n.jsx)(s.td,{children:"Client ID set by user"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"session logical reads"}),(0,n.jsx)(s.td,{children:"Number of times data was read into the buffer cache"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"physical reads"}),(0,n.jsx)(s.td,{children:"Number of data reads from the physical disk"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"execute count"}),(0,n.jsx)(s.td,{children:"SQL execution count"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"parse count (hard)"}),(0,n.jsx)(s.td,{children:"Total number of syntax analysis calls (actual syntax analysis)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"parse count (total)"}),(0,n.jsx)(s.td,{children:"Total number of syntax analysis calls (hard, soft, describe)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"opened cursors current"}),(0,n.jsx)(s.td,{children:"Number of open cursors"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"db block changes"}),(0,n.jsx)(s.td,{children:"Change count of all blocks in the database"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"session pga memory"}),(0,n.jsx)(s.td,{children:"Session's current PGA size"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"undo_segid"})}),(0,n.jsx)(s.td,{children:"Undo information ID"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"undo_blk"})}),(0,n.jsx)(s.td,{children:"Undo block count"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"undo_rec"})}),(0,n.jsx)(s.td,{children:"Undo record count"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"sql_address"})}),(0,n.jsx)(s.td,{children:"SQL statement identification data"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"sql_hash_value"})}),(0,n.jsx)(s.td,{children:"SQL statement identification data"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"sql_id"})}),(0,n.jsx)(s.td,{children:"SQL ID of the running SQL statement"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"sql_child_number"})}),(0,n.jsx)(s.td,{children:"Sub number of the running SQL statement"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"sql_exec_start"})}),(0,n.jsx)(s.td,{children:"Start time point of SQL running in the session"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"sql_exec_id"})}),(0,n.jsx)(s.td,{children:"SQL running ID"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"prev_sql_addr"})}),(0,n.jsx)(s.td,{children:"Information that identifies the last run SQL statement"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"prev_child_number"})}),(0,n.jsx)(s.td,{children:"Sub number of the last SQL statement executed"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"prev_exec_start"})}),(0,n.jsx)(s.td,{children:"Start time point of the last SQL statement executed"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"prev_exec_id"})}),(0,n.jsx)(s.td,{children:"Start ID of the last SQL statement executed"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"plsql_entry_object_id"})}),(0,n.jsx)(s.td,{children:"Object ID of the top PL/SQL subprogram on the stack."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"plsql_entry_subprogram_id"})}),(0,n.jsx)(s.td,{children:"ID of the top PL/SQL subprogram on the stack."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"plsql_object_id"})}),(0,n.jsx)(s.td,{children:"Subprogram ID of the running PL/SQL object"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"taddr"})}),(0,n.jsx)(s.td,{children:"Transaction address"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"lockwait"})}),(0,n.jsx)(s.td,{children:"lock wait address (lock address where the session is waiting)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"row_wait_obj"})}),(0,n.jsxs)(s.td,{children:["Object ID of the table containing the row specified in ",(0,n.jsx)(s.code,{children:"ROW_WAIT_ROW#"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"row_wait_file"})}),(0,n.jsxs)(s.td,{children:["ID of the data file containing the row specified in ",(0,n.jsx)(s.code,{children:"ROW_WAIT_ROW#"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"row_wait_block"})}),(0,n.jsxs)(s.td,{children:["ID of the block containing the row specified in ",(0,n.jsx)(s.code,{children:"ROW_WAIT_ROW#"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"row_wait_row"})}),(0,n.jsx)(s.td,{children:"Currently locked row"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"pdml_status"})}),(0,n.jsxs)(s.td,{children:["If the value is ",(0,n.jsx)(s.code,{children:"ENABLED"}),", the session is in ",(0,n.jsx)(s.code,{children:"PARALLEL DML"})," activation mode. If the value is ",(0,n.jsx)(s.code,{children:"DISABLED"}),", the session does not support the ",(0,n.jsx)(s.code,{children:"PARALLEL DML"})," activation mode. If the value is ",(0,n.jsx)(s.code,{children:"DISABLED"}),", the session does not support the ",(0,n.jsx)(s.code,{children:"PARALLEL DML"})," activation mode."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"pq_status"})}),(0,n.jsxs)(s.td,{children:["If the value is ",(0,n.jsx)(s.code,{children:"ENABLED"}),", the session is in ",(0,n.jsx)(s.code,{children:"PARALLEL QUERY"})," activation mode. If the value is ",(0,n.jsx)(s.code,{children:"DISABLE"}),", the session does not support the ",(0,n.jsx)(s.code,{children:"PARALLEL QUERY"})," activation mode. If the value is ",(0,n.jsx)(s.code,{children:"FORCED"}),", it indicates the session was changed to force the use of ",(0,n.jsx)(s.code,{children:"PARALLEL QUERY"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"blocking_session_status"})}),(0,n.jsx)(s.td,{children:"It provides details about whether there is a blocking session."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"blocking_instance"})}),(0,n.jsx)(s.td,{children:"Instance ID for the blocking session"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"blocking_session"})}),(0,n.jsx)(s.td,{children:"Session ID for the blocking session"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"final_blocking_session_status"})}),(0,n.jsx)(s.td,{children:"It provides details about whether there is a last block session."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"final_blocking_instance"})}),(0,n.jsx)(s.td,{children:"Instance ID for the last blocking session"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"final_blocking_session"})}),(0,n.jsx)(s.td,{children:"Session ID for the last blocking session"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"service_name"})}),(0,n.jsx)(s.td,{children:"Service name of the session. It is similar to the DB name."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"saddr"})}),(0,n.jsx)(s.td,{children:"Session address"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"con_id"})}),(0,n.jsx)(s.td,{children:"ID of the container associated with the data (only for multi-database support)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"rss(xos)"})}),(0,n.jsx)(s.td,{children:"OS metrics collected by the XOS agent"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"pss(xos)"})}),(0,n.jsx)(s.td,{children:"OS metrics collected by the XOS agent"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"ioread(xos)"})}),(0,n.jsx)(s.td,{children:"OS metrics collected by the XOS agent"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"iowrite(xos)"})}),(0,n.jsx)(s.td,{children:"OS metrics collected by the XOS agent"})]})]})]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"WhaTap basically stores the client-related information."})})]})}function c(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1746:function(e,s,t){t.d(s,{ZP:function(){return c},d$:function(){return i}});var n=t(85893),r=t(50065);let i=[];function d(e){let s={admonition:"admonition",p:"p",...(0,r.a)(),...e.components},{ReturnLink:t}=s;return!t&&function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ReturnLink",!0),(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["This document has been created based on the ",e.product," Monitoring V2. For the ",e.product," monitoring V1 document, see ",(0,n.jsx)(t,{children:"the following"}),"."]})})}function c(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},10567:function(e,s,t){t.r(s),t.d(s,{metadata:()=>n,contentTitle:()=>o,default:()=>j,assets:()=>h,toc:()=>a,frontMatter:()=>l});var n=JSON.parse('{"id":"oracle/analysis-pq-tree","title":"Parallel query tree","description":"It provides the feature to analyze the trend of parallel queries occurred during the day.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/oracle/analysis-pq-tree.mdx","sourceDirName":"oracle","slug":"/oracle/analysis-pq-tree","permalink":"/en/oracle/analysis-pq-tree","draft":false,"unlisted":false,"editUrl":"undefined/docs/oracle/analysis-pq-tree.mdx","tags":[],"version":"current","frontMatter":{"id":"analysis-pq-tree","title":"Parallel query tree","description":"It provides the feature to analyze the trend of parallel queries occurred during the day.","keywords":["Oracle","DATABASE","Parallel query tree"],"isTranslationMissing":false},"sidebar":"dboracleV2Sidebar","previous":{"title":"Top SQL Comparison","permalink":"/en/oracle/analysis-compare-top-sql"},"next":{"title":"Database Parameter","permalink":"/en/oracle/analysis-databaseparameter"}}'),r=t("85893"),i=t("50065"),d=t("1746"),c=t("24477");let l={id:"analysis-pq-tree",title:"Parallel query tree",description:"It provides the feature to analyze the trend of parallel queries occurred during the day.",keywords:["Oracle","DATABASE","Parallel query tree"],isTranslationMissing:!1},o=void 0,h={},a=[...d.d$,{value:"Basic screen guide",id:"basic-screen-guide",level:2},...c.d$];function x(e){let s={a:"a",admonition:"admonition",h2:"h2",p:"p",section:"section",...(0,i.a)(),...e.components},{Cmdname:t,ImgLang:n}=s;return!t&&u("Cmdname",!0),!n&&u("ImgLang",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.ZP,{product:"Oracle"}),"\n",(0,r.jsxs)(s.p,{children:["Home > Select Project > ",(0,r.jsx)(t,{sid:"side_analysis",className:"uitext"})," > ",(0,r.jsx)(t,{sid:"side_dbPqTree",className:"uitext"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(t,{sid:"side_dbPqTree",className:"uitext"})," provides the function to analyze the trend of parallel queries per day. The slave processes that perform actual tasks and the coordinator processes that assign tasks to them are distinguished, and overall executions are displayed in an easy-to-understand manner. It can help determine what purpose it was used for by providing information about parallel queries performed at a specific time point."]}),"\n",(0,r.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(s.h2,{id:"basic-screen-guide",children:"Basic screen guide"}),(0,r.jsx)(n,{img:"db-pq-tree-oracle-pro.png",desc:"Parallel query tree"}),(0,r.jsxs)(s.p,{children:["Set the query time in the ",(0,r.jsx)(t,{sid:"time",className:"uitext"})," option, and then select an instance for which you want to view the parallel query information in the ",(0,r.jsx)(t,{sid:"instance",className:"uitext"})," option."]}),(0,r.jsx)(s.p,{children:"You can check the trend of parallel queries that meet the set conditions through a graph chart, and the structure of coordinators and slaves is represented in the form of tree."}),(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["For more information on how to use the ",(0,r.jsx)(t,{sid:"time",className:"uitext"})," option, see ",(0,r.jsx)(s.a,{href:"usage-ui#timeselector",children:"the following"}),"."]})}),(0,r.jsx)(c.ZP,{level:2})]})]})}function j(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}function u(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,s,t){t.d(s,{Z:function(){return c},a:function(){return d}});var n=t(67294);let r={},i=n.createContext(r);function d(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);