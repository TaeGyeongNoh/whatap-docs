"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["52823"],{92757:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return o}});var s=n(85893),i=n(50065);let o=[{value:"Checking the agent installation",id:"checking-the-agent-installation",level:2}];function a(e){let t={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",section:"section",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(t.h2,{id:"checking-the-agent-installation",children:"Checking the agent installation"}),(0,s.jsxs)(t.p,{children:["Run the ",(0,s.jsx)(t.em,{children:"start.sh"})," shell script file or the ",(0,s.jsx)(t.em,{children:"start.bat"})," batch file from the installation path of the database agent. When you run the agent, it starts collecting monitoring data from the database. If the WhaTap logo is displayed in the terminal after executing the shell script, it is normally executed."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:"title='start.sh'",children:"$ ./start.sh\n\n _      ____       ______\n| | /| / / /  ___ /_  __/__ ____\n| |/ |/ / _ \\/ _ `// / / _ `/ _ \\\n|__/|__/_//_/\\_,_//_/  \\_,_/ .__/\n                          /_/\nJust Tap, Always Monitoring\nWhaTap DBX version X.Y.Z YYYYMMDD\n"})}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["To use it like a daemon, execute the ",(0,s.jsx)(t.code,{children:"startd.sh"})," command. However, it works only in the environment where ",(0,s.jsx)(t.strong,{children:"nohup"})," has been installed."]})})]})}function l(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},72751:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return o}});var s=n(85893),i=n(50065);let o=[{value:"Checking the agent processes",id:"checking-the-agent-processes",level:2}];function a(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",section:"section",...(0,i.a)(),...e.components};return(0,s.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(t.h2,{id:"checking-the-agent-processes",children:"Checking the agent processes"}),(0,s.jsx)(t.p,{children:"You can check the status of the active WhaTap DBX agent process with the following command."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ ps -ef | grep dbx\n"})})]})}function l(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},63900:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return o}});var s=n(85893),i=n(50065);let o=[{value:"Checking the logs",id:"checking-the-logs",level:2}];function a(e){let t={code:"code",em:"em",h2:"h2",li:"li",p:"p",section:"section",ul:"ul",...(0,i.a)(),...e.components},{InDoc:n,Xclude:o}=t;return!n&&r("InDoc",!0),!o&&r("Xclude",!0),(0,s.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(t.h2,{id:"checking-the-logs",children:"Checking the logs"}),(0,s.jsx)(o,{product:"mssql,oracle-pro,mssql-v1",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"dbx.log"})}),"\n",(0,s.jsxs)(t.p,{children:["All logs related to the agent startup and collection can be found in ",(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.code,{children:"$WHATAP_HOME"}),"/logs/dbx.log"]})," path. If the size of the ",(0,s.jsx)(t.em,{children:"dbx.log"})," file exceeds 25 MB, it is backed up with the file name of ",(0,s.jsx)(t.em,{children:"dbx.log.[n]"}),". To clean up files, delete the files starting from the greatest (old) number."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"xos.log"})}),"\n",(0,s.jsxs)(t.p,{children:["The logs related to the startup of XOS are recorded in ",(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.code,{children:"$XOS installation path"}),"/xos",(0,s.jsx)(t.code,{children:"yymmdd"}),".log"]})," file. The logs are created by date."]}),"\n"]}),"\n"]})}),(0,s.jsx)(n,{product:"oracle-pro",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"whatap.log"})}),"\n",(0,s.jsxs)(t.p,{children:["All logs related to the agent startup and collection can be found in ",(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.code,{children:"$WHATAP_HOME"}),"/logs/whatap.log"]})," path. If the size of the ",(0,s.jsx)(t.em,{children:"whatap.log"})," file exceeds 25 MB, it is backed up with the file name of ",(0,s.jsx)(t.em,{children:"whatap.log.[n]"}),". To clean up files, delete the files starting from the greatest (old) number."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"prx.log"})}),"\n",(0,s.jsxs)(t.p,{children:["This log file records major activities and events that occur during DMA (Direct Memory Access)-based data collection. Logs are recorded when the DMX agent is restarted. You only need to run the ",(0,s.jsx)(t.code,{children:"start.sh"})," or ",(0,s.jsx)(t.code,{children:"startd.sh"})," (execution of daemon) file once in the agent installation path."]}),"\n"]}),"\n"]})}),(0,s.jsx)(n,{product:"mssql,mssql-v1",children:(0,s.jsxs)(t.p,{children:["All logs related to the agent startup and collection can be found in ",(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.code,{children:"$WHATAP_HOME"}),"/logs/dbx.log"]})," path. If the size of the ",(0,s.jsx)(t.em,{children:"dbx.log"})," file exceeds 25 MB, it is backed up with the file name of ",(0,s.jsx)(t.em,{children:"dbx.log.[n]"}),". To clean up files, delete the files starting from the greatest (old) number."]})})]})}function l(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function r(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1222:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return o}});var s=n(85893),i=n(50065);let o=[{value:"Checking the monitoring",id:"checking-the-monitoring",level:2}];function a(e){let t={a:"a",h2:"h2",p:"p",section:"section",...(0,i.a)(),...e.components},{Cmdname:n,ImgLang:o,InDoc:a,Xclude:l}=t;return!n&&r("Cmdname",!0),!o&&r("ImgLang",!0),!a&&r("InDoc",!0),!l&&r("Xclude",!0),(0,s.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(t.h2,{id:"checking-the-monitoring",children:"Checking the monitoring"}),(0,s.jsx)(l,{product:"oracle-pro",children:(0,s.jsxs)(t.p,{children:["To check that the log has been normally uploaded from the server and the console has been registered normally, go to the initial screen of ",(0,s.jsx)(t.a,{href:"https://service.whatap.io",children:"Whatap Monitoring Service"}),". Select the project to check and then select ",(0,s.jsx)(n,{sid:"side_management",className:"uitext"})," > ",(0,s.jsx)(n,{sid:"side_dbAgents",className:"uitext"})," on the left. From ",(0,s.jsx)(n,{sid:"side_dbAgents",className:"uitext"}),", you can check the name of the database server. To set the names of database servers separately, see ",(0,s.jsx)(t.a,{href:"agent-dbx-settings#naming",children:"the following"}),"."]})}),(0,s.jsx)(a,{product:"oracle-pro",children:(0,s.jsxs)(t.p,{children:["To check that the log has been normally uploaded from the server and the console has been registered normally, go to the initial screen of ",(0,s.jsx)(t.a,{href:"https://service.whatap.io",children:"Whatap Monitoring Service"}),". Select the project to check and then select ",(0,s.jsx)(n,{sid:"side_management",className:"uitext"})," > ",(0,s.jsx)(n,{sid:"side_dbAgents",className:"uitext"})," on the left. From ",(0,s.jsx)(n,{sid:"side_dbAgents",className:"uitext"}),", you can check the name of the database server. To set the names of database servers separately, see ",(0,s.jsx)(t.a,{href:"agent-settings#naming",children:"the following"}),"."]})}),(0,s.jsx)(o,{img:"db-check-monitoring-agent-lists.png",desc:""})]})}function l(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function r(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},30001:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>g,toc:()=>p,frontMatter:()=>h});var s=JSON.parse('{"id":"oracle-v1/after-install-agent","title":"Installation checking items","description":"The database monitoring has been installed completely. Check the checklist after installation.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/oracle-v1/after-install-agent.mdx","sourceDirName":"oracle-v1","slug":"/oracle-v1/after-install-agent","permalink":"/en/oracle-v1/after-install-agent","draft":false,"unlisted":false,"editUrl":"undefined/docs/oracle-v1/after-install-agent.mdx","tags":[],"version":"current","frontMatter":{"id":"after-install-agent","title":"Installation checking items","description":"The database monitoring has been installed completely. Check the checklist after installation.","keywords":["Oracle","Database Monitoring","Agent"],"isTranslationMissing":false},"sidebar":"dboracleSidebar","previous":{"title":"Agent Installation","permalink":"/en/oracle-v1/install-agent"},"next":{"title":"Troubleshooting","permalink":"/en/oracle-v1/troubleshooting"}}'),i=n("85893"),o=n("50065"),a=n("92757"),l=n("63900"),r=n("72751"),c=n("1222");let h={id:"after-install-agent",title:"Installation checking items",description:"The database monitoring has been installed completely. Check the checklist after installation.",keywords:["Oracle","Database Monitoring","Agent"],isTranslationMissing:!1},d=void 0,g={},p=[...a.d$,...l.d$,...r.d$,...c.d$];function u(e){let t={p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The database monitoring has been installed completely. After installation, check if the installation was successful by doing the following:"}),"\n","\n","\n",(0,i.jsx)(a.ZP,{}),"\n","\n","\n",(0,i.jsx)(l.ZP,{}),"\n","\n","\n",(0,i.jsx)(r.ZP,{}),"\n","\n","\n",(0,i.jsx)(c.ZP,{})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var s=n(67294);let i={},o=s.createContext(i);function a(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);