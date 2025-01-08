"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["2396"],{71266:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return i}});var r=n(85893),s=n(50065);let i=[];function o(e){let t={admonition:"admonition",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Title:n}=t;return!n&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Title",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{level:e.level,hashid:"dbagentspec",children:"Agent minimum installation specifications"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"CPU"}),": Approximately 20 agents can be installed per core (may differ depending on the DB server load)."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Memory"}),": 200 MB"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Disk"}),": 100 MB (Agent space of 50 MB + Log file generation space of 50 MB)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"Minimum installation requirements based on the number of agents"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Number of installed agents"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"CPU"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Memory"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Disk"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1-core"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2 GB"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1 GB"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1-core"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4 GB"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2 GB"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"40"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2-core"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"8 GB"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4 GB"})]})]})]})]}),"\n",(0,r.jsx)(n,{level:e.level,hashid:"dbagentrunning",children:"Agent operation method"}),"\n",(0,r.jsx)(t.p,{children:"The DB agent basically operates in the following way:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Execution cycle"}),": 5 secs (default)"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Number of queries performed"}),": 5 to 6"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Speed"}),": It terminates within 1 second when the server load is normal."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Up to 2 sessions (5-second collection session, other information collection session)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"When a timeout occurs during collection query, the DB agent operates in the following way to minimize the load."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Do not run a new collection query until the previous collection query has finished."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"If the timeout exceeds 12 seconds (exceeds 2 refresh cycles), the session is reconnected after termination."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"If timeout occurs 3 times or more, wait 10 seconds and try again."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Depending on the load status of the DB server, it may take a long time or a timeout may occur until the result of a collection query appears on the WhaTap monitoring service screen."})})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},66569:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return i}});var r=n(85893),s=n(50065);let i=[];function o(e){let t={admonition:"admonition",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{ImgLang:n,InDoc:i,Xclude:o}=t;return!n&&d("ImgLang",!0),!i&&d("InDoc",!0),!o&&d("Xclude",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o,{product:"oracle-pro,mssql",children:[(0,r.jsx)(t.p,{children:"The WhaTap database monitoring service consists of an agent and a collection server, and the data is encrypted for security between the agent and the collection server. It is made without an external library so there is no need to restart the system for installation and update."}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"WhaTap database monitoring service can perform monitoring on a separate agent server without installing an agent on the database server. Monitoring can be applied flexibly according to the user environment."}),"\n",(0,r.jsx)(o,{product:"cubrid,cubrid-v1",children:(0,r.jsx)("div",{class:"db-agent",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Possible to install a separate agent server"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Possible to install on the DB server"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Possible to perform DB resource monitoring (XOS)"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{img:"dbx-install-agent-on-agent-server.png",desc:""})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{img:"dbx-install-agent-on-db-server.png",desc:""})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{img:"xos-agent.png",desc:""})})]})})]})})}),"\n",(0,r.jsx)(i,{product:"cubrid,cubrid-v1",children:(0,r.jsx)("div",{class:"db-agent",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Possible to install a separate agent server"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Possible to install on the DB server"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Possible to perform DB resource monitoring (XOS)"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{img:"dbx-install-agent-on-agent-server-cubrid.png",desc:""})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{img:"dbx-install-agent-on-db-server-cubrid.png",desc:""})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{img:"xos-agent-cubrid.png",desc:""})})]})})]})})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The XOS agent is an optional add-on agent that can monitor the process usage of the database server. To monitor the process usage of the database server, run a separate agent on the database server to collect data."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The agent and server use the binary communication protocol. In addition, data is selectively encrypted to ensure data security while reducing the burden of encryption."}),"\n"]}),"\n"]}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The WhaTap agent must be installed on a server that can communicate over the network with the database server to be monitored."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"JDK"})," of ",(0,r.jsx)(t.strong,{children:"Java 8"})," or later must be installed on the WhaTap DBX agent server."]}),"\n"]}),"\n"]})})]}),"\n",(0,r.jsxs)(i,{product:"mssql,mssql-v1",children:[(0,r.jsx)(t.p,{children:"The WhaTap database monitoring service consists of an agent and a collection server, and the data is encrypted for security between the agent and the collection server. It is made without an external library so there is no need to restart the system for installation and update."}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"WhaTap database monitoring service can perform monitoring on a separate agent server without installing an agent on the database server. Monitoring can be applied flexibly according to the user environment."}),"\n",(0,r.jsx)("div",{class:"db-agent",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Possible to install a separate agent server"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Possible to install on the DB server"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{img:"dbx-install-agent-on-agent-server.png",desc:""})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{img:"dbx-install-agent-on-db-server.png",desc:""})})]})})]})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The agent and server use the binary communication protocol. In addition, data is selectively encrypted to ensure data security while reducing the burden of encryption."}),"\n"]}),"\n"]}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The WhaTap agent must be installed on a server that can communicate over the network with the database server to be monitored."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"JDK"})," of ",(0,r.jsx)(t.strong,{children:"Java 8"})," or later must be installed on the WhaTap DBX agent server."]}),"\n"]}),"\n"]})})]}),"\n",(0,r.jsxs)(i,{product:"oracle-pro",children:[(0,r.jsx)(t.p,{children:"Oracle Pro Monitoring monitors by installing an agent directly on the database server. Unlike WhaTap's other database products, you can collect XOS metrics without installing the XOS agent."}),(0,r.jsx)(n,{img:"dbx-install-agent-on-db-server-dma.png",desc:"Agent structure map"})]})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function d(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},14735:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return i}});var r=n(85893),s=n(50065);let i=[];function o(e){let t={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{InDoc:n,Xclude:i}=t;return!n&&d("InDoc",!0),!i&&d("Xclude",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{product:"oracle-pro",children:(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"It is required to open the outbound on the port 6600 so that the DBX agent can send data to the WhaTap server."})})}),"\n",(0,r.jsx)(i,{product:"oracle-pro",children:(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The server to install the agent on must have Java 8 or later installed."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The database server must allow inbound connections so that the DBX agent can access the DB port."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"It is required to open the outbound on the port 6600 so that the DBX agent can send data to the WhaTap server."}),"\n"]}),"\n"]})})})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function d(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87567:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return i}});var r=n(85893),s=n(50065);let i=[];function o(e){return(0,r.jsxs)("p",{children:["Before starting the ",e.name," monitoring, check the following support environment."]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1746:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return i}});var r=n(85893),s=n(50065);let i=[];function o(e){let t={admonition:"admonition",p:"p",...(0,s.a)(),...e.components},{ReturnLink:n}=t;return!n&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ReturnLink",!0),(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["This document has been created based on the ",e.product," Monitoring V2. For the ",e.product," monitoring V1 document, see ",(0,r.jsx)(n,{children:"the following"}),"."]})})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},43615:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>j,default:()=>f,assets:()=>g,toc:()=>m,frontMatter:()=>u});var r=JSON.parse('{"id":"cubrid/monitoring-support","title":"Support Environment","description":"Before monitoring the database, learn about the supported database types.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/cubrid/monitoring-support.mdx","sourceDirName":"cubrid","slug":"/cubrid/monitoring-support","permalink":"/en/cubrid/monitoring-support","draft":false,"unlisted":false,"editUrl":"undefined/docs/cubrid/monitoring-support.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-support","title":"Support Environment","description":"Before monitoring the database, learn about the supported database types.","keywords":["CUBRID","DATABASE","Database Monitoring"],"isTranslationMissing":false},"sidebar":"cubridSidebar","previous":{"title":"CUBRID V2 Monitoring","permalink":"/en/cubrid/monitoring-intro"},"next":{"title":"Agent Installation","permalink":"/en/cubrid/install-agent"}}'),s=n("85893"),i=n("50065"),o=n("1746"),l=n("87567"),d=n("14735"),a=n("71266"),c=n("66569"),h=n("59375"),p=n("95957"),x=n("70817");let u={id:"monitoring-support",title:"Support Environment",description:"Before monitoring the database, learn about the supported database types.",keywords:["CUBRID","DATABASE","Database Monitoring"],isTranslationMissing:!1},j=void 0,g={},m=[...o.d$,...l.d$,{value:"Supported versions for the database",id:"supported-versions-for-the-database",level:2},...d.d$,...a.d$,{value:"Agent structure",id:"agent-structure",level:2},...c.d$,{value:"Firewall",id:"firewall",level:2},...h.d$,{value:"Supporting the browser",id:"supporting-the-browser",level:2},...p.d$,{value:"Mobile app",id:"mobile-app",level:2},...x.d$];function b(e){let t={h2:"h2",p:"p",section:"section",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.ZP,{product:"CUBRID"}),"\n","\n",(0,s.jsx)(l.ZP,{name:"CUBRID"}),"\n",(0,s.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(t.h2,{id:"supported-versions-for-the-database",children:"Supported versions for the database"}),(0,s.jsx)(t.p,{children:"It supports CUBRID 9 or later."}),(0,s.jsx)(d.ZP,{}),(0,s.jsx)(a.ZP,{level:2})]}),"\n",(0,s.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(t.h2,{id:"agent-structure",children:"Agent structure"}),(0,s.jsx)(c.ZP,{})]}),"\n",(0,s.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(t.h2,{id:"firewall",children:"Firewall"}),(0,s.jsx)(h.ZP,{})]}),"\n",(0,s.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(t.h2,{id:"supporting-the-browser",children:"Supporting the browser"}),(0,s.jsx)(p.ZP,{})]}),"\n",(0,s.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(t.h2,{id:"mobile-app",children:"Mobile app"}),(0,s.jsx)(x.ZP,{})]})]})}function f(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},70817:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return i}});var r=n(85893),s=n(50065);let i=[];function o(e){let t={a:"a",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The WhaTap mobile app supports both Android and iOS environments. You can install the app by moving to the following link or scanning the QR code. For more information about the mobile app, see ",(0,r.jsx)(t.a,{href:"https://docs.whatap.io/mobile-app",children:"the following"}),"."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:(0,r.jsx)(t.a,{href:"https://apps.apple.com/us/app/whatap-mobile/id6450067434",children:"iOS"})}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:(0,r.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=io.whatap.lion",children:"Android"})})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.img,{alt:"QR",src:n(93001).Z+"",width:"600",height:"600"}),(0,r.jsx)("br",{}),"iOS 12 or later"]}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.img,{alt:"QR",src:n(54594).Z+"",width:"600",height:"600"}),(0,r.jsx)("br",{}),"Android 5.0 or later"]})]})})]})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},59375:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return i}});var r=n(85893),s=n(50065);let i=[];function o(e){let t={p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{ImgLang:n}=t;return!n&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImgLang",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The WhaTap agent must access the collection server's ",(0,r.jsx)(t.strong,{children:"TCP 6600"})," port. Allow the collection server address near what you are monitoring."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Source: WhaTap agent"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Destination"}),(0,r.jsx)(t.th,{children:"Destination IP"}),(0,r.jsx)(t.th,{children:"Port"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"WhaTap collection server (Seoul)"}),(0,r.jsx)(t.td,{children:"13.124.11.223 / 13.209.172.35"}),(0,r.jsx)(t.td,{children:"TCP 6600"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"WhaTap collection server (Tokyo)"}),(0,r.jsx)(t.td,{children:"52.68.36.166 / 52.193.60.176"}),(0,r.jsx)(t.td,{children:"TCP 6600"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"WhaTap collection server (Singapore)"}),(0,r.jsx)(t.td,{children:"18.138.0.93 / 18.139.67.236"}),(0,r.jsx)(t.td,{children:"TCP 6600"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"WhaTap collection server (Mumbai)"}),(0,r.jsx)(t.td,{children:"13.127.125.69 / 13.235.15.118"}),(0,r.jsx)(t.td,{children:"TCP 6600"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"WhaTap collection server (California)"}),(0,r.jsx)(t.td,{children:"52.8.223.130 / 52.8.239.99"}),(0,r.jsx)(t.td,{children:"TCP 6600"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"WhaTap collection server (Frankfurt)"}),(0,r.jsx)(t.td,{children:"3.125.142.162 / 3.127.76.140"}),(0,r.jsx)(t.td,{children:"TCP 6600"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"If the agent cannot directly access the collection server, use the provided proxy module to access it."}),"\n",(0,r.jsx)(n,{img:"proxy.png",desc:"Proxy"})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},95957:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return i}});var r=n(85893),s=n(50065);let i=[];function o(e){let t={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{InDoc:n,Xclude:i}=t;return!n&&d("InDoc",!0),!i&&d("Xclude",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"WhaTap Monitoring is available in web browsers and mobile Apps."}),"\n",(0,r.jsx)("div",{class:"c3-3",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Browser"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Recommended?"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Supported version"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Google Chrome"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("span",{class:"emoji-ok",children:"\u2705"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"84 or later"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Mozilla FireFox"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("span",{class:"emoji-no",children:"\u274C"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Latest version"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Edge"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("span",{class:"emoji-no",children:"\u274C"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Latest version"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Safari"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("span",{class:"emoji-no",children:"\u274C"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Latest version"})]})]})]})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Due to browser compatibility and performance issues, it is recommended to use the latest version of Chrome."}),"\n",(0,r.jsx)(t.li,{children:"The user interface (UI) is implemented with HTML5 technology and is not supported by Internet Explorer."}),"\n"]})}),"\n",(0,r.jsx)(i,{product:"support-env",children:(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Constraints"})}),(0,r.jsxs)(t.p,{children:["WhaTap's web interface does not support mobile browsers. To access WhaTap on a mobile device, install the Android app or iOS app. The WhaTap mobile app is designed to perform optimally on mobile devices. For more information about the WhaTap mobile app, see ",(0,r.jsx)(t.a,{href:"../mobile-app",children:"the following"}),"."]})]})}),"\n",(0,r.jsx)(n,{product:"support-env",children:(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Constraints"})}),(0,r.jsxs)(t.p,{children:["WhaTap's web interface does not support mobile browsers. To access WhaTap on a mobile device, install the Android app or iOS app. The WhaTap mobile app is designed to perform optimally on mobile devices. For more information about the WhaTap mobile app, see ",(0,r.jsx)(t.a,{href:"mobile-app",children:"the following"}),"."]})]})})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function d(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},54594:function(e,t,n){n.d(t,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYAQMAAACEqAqfAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADEUlEQVR4nO3bQW7jMAyFYQFZZDlH8FFyNPtoPoqPkGUXBTiRKFGk3RYoMIth8L/NjGzpc1eEKDulEEIIeWWVkO11aZGn3hvDU+rdW7z0iYWFhZXc2oulLn602fe4+F5nK615WXPZHQsLC+sNrKWtsNk21Cy+kO5zOGryEwsLC+v9rEe43fJHPtTSu6JDLCwsrDe2Tou1rrYt55j8mxqNhYWFlcayaOU8mtWG0meXOTzGk+YyLCwsLCxvhUzr5ouynWO6uz5YWFhYua1vc5t0mftVacPfBgsLC+s/t2Zd/ZybSndSuZfayofOvlzLLBYWFlZ+y42V7g22Zhn0PNZ03/os4+/AwsLCSmyVXhtD7CVO6XtMyxdbzllXsbCwsPJaI+6wsaaVyrXTLfF54XU3FhYWVn7LvuYZ+fq7x/rfUVetOT9OfxEWFhYWVpnduc4WsWZdrGTLHIbe3U45sbCwsBJba5tidTW8ptFLR3GFdG+L7mM3u5dyeT+EhYWFlc/SQup+PSPdOr3EuT5YL8XeHQsLCyunpbdlFNKtXQzfgJ/6bY0rs9fvhrCwsLCyWj/9puX09js058el38bCwsLKaO19Rd9UPnqDLX62td86+T5Zu4uFhYWV2NL0yjn7bfetzzGnzQfbMPbuWFhYWFhzth1c1ti3Pg99yhfD+s9ezr07FhYWVk6r1kaZe846+zlo6XdDniVsbmPvjoWFhZXZ6hm3rVnX9CeNPaaruudzACwsLKzM1ukXL5djTdtULvKcwxrfb2NhYWHltnoLvb0uLWMXOY8ie5ndrN+22JOwsLCwEluX1NnhNY3RY7FtKldfZrGwsLASW6uEhMqpdKirxW9Iz+eWWFhYWFjzaLLE2e5bHyvZ8yEf/u+IvTsWFhZWVssWnw4uax5+scb91Gbvw2/OAbCwsLDyWuKb9XG3ZSujle9rtZXHwsLCektLRoOtcaeeo/3uL8MDjYWFhZXaslzqathyKqxDGSeTP/buWFhYWGmskC1WzlVE/FfeVnX7k2ri7wyxsLCwMlqEEEL+Yf4Ckl7rw+cbI+wAAAAASUVORK5CYII="},93001:function(e,t,n){n.d(t,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYAQMAAACEqAqfAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC60lEQVR4nO3dQXLjIBCFYVSz8DJH8FF0NOloOoqPkKUXLjHTTQMN0aQqKZyRa/63wgI+ZQWIIDsEQgghJ841dtlKVXvhLX16SPnSd3rHwsLCwnqK9Qg1k3T9FeOaut7k2iwlubDLJ638Y7lOYcHCwsLCeg1rzjPAZFOF1dbKNfer1jV1umNhYWFh/aCVx/t+8b+X2QELCwsL619ZOt7H0rydAOI35g4sLCwsrJNYJXnuiMnSlBtpvr6fg4WFhYX1fatLu77XycCG9Ek2zrPVBgsLCwvrGdZxFlc7S+M11Duvn3TEwsLCwjqpdY01Oj2UclNpZ1d0MllkMpF5RJ8GLhXHwsLCwhpt5SW8ZU5d6402KS09LuXdujT7OVhYWFhYA63cXKLjvW6cv8Um5VB43YO5hT5YWFhYWCe3NHZhTl1DesfTH2wJZX0f3cGWw2cFLCwsLKwRluWSmufxfonHuZUOtgcT3ZMBFhYWFtZg6yqft1Qb3evxoYz3mkP873swWFhYWFjns7T5pW21Bn+jS9/1Xiq7uQMLCwsLa6yVm5dL+s7Pe3sjj5fy3lZiYWFhYZ3fstT9nHfnav96VlHz+X4OFhYWFtYYq/7rsy7hg/tuLL3R4jbky9PA7l4AxcLCwsJ6mmWjdn3nJ5b38Muye5IxXicA24PZXU8sLCwsrBewbDbo1vTWYpbymtt3VrcHg4WFhYU13NJRO7q03ymuXetv85Ts7WFzLCwsLKzB1kHq+UJdgm9S9hvna7C/ogYLCwsL6+yWv6LZXHPNnJvnDZpV1vTtxPJRx8LCwsIaYT1cv8mdY2kql8ayyrwH0zwrYGFhYWGNtebUyH4/ra7J2xzvwdyPz8FgYWFhYb2QdQs5ZQ8mRyrrSRcsLCwsrJ+zNNbLV2rWtKavWa0lFhYWFtYTrJI63tvXfge37J7sn5vRnXTZxMXCwsLCegWrS507ygWN/RDEQ9x76vnxnR8sLCwsrJEWIYSQ/yC/Ad628qx4qX+OAAAAAElFTkSuQmCC"},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var r=n(67294);let s={},i=r.createContext(s);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);