"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["36830"],{37565:function(e,t,r){r.d(t,{ZP:function(){return s},d$:function(){return i}});var n=r(85893),l=r(50065);let i=[{value:"Common Alert Template",id:"common-alert-template",level:2},{value:"Event Title",id:"event-title",level:3},{value:"Event Message",id:"event-message",level:3}];function d(e){let t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",section:"section",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,n.jsx)(t.h2,{id:"common-alert-template",children:"Common Alert Template"}),(0,n.jsx)(t.p,{children:"Common templates are applicable in most cases. You can receive alerts in the same format in various environments."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Product Type: Application, Database, Kubernetes"}),"\n",(0,n.jsx)(t.li,{children:"Event Type: Application Alert, Database Alert, Metrics Alert"}),"\n",(0,n.jsx)(t.li,{children:"Event Channel: sms, mobile, 3rd party plugin , plugin"}),"\n"]})]}),"\n",(0,n.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,n.jsx)(t.h3,{id:"event-title",children:"Event Title"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-log",metastring:"title='Event title format'",children:"[Level][Platform][ProjectName][ApplicationName][EventTitle]\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-log",metastring:"title='Event title example'",children:"[Info][JAVA][Application Project][TC-0-1-8081][CRITICAL_HIGH_MEMORY]\n"})}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If the application name has not been set, omit it from the event title."}),"\n",(0,n.jsxs)(t.li,{children:["Platform is represented by one of the following:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"JAVA"}),"\n",(0,n.jsx)(t.li,{children:"NODEJS"}),"\n",(0,n.jsx)(t.li,{children:"PYTHON"}),"\n",(0,n.jsx)(t.li,{children:"PHP"}),"\n",(0,n.jsx)(t.li,{children:"DOTNET"}),"\n",(0,n.jsx)(t.li,{children:"GO"}),"\n",(0,n.jsx)(t.li,{children:"POSTGRESQL"}),"\n",(0,n.jsx)(t.li,{children:"ORACLE"}),"\n",(0,n.jsx)(t.li,{children:"MYSQL"}),"\n",(0,n.jsx)(t.li,{children:"MSSQL"}),"\n",(0,n.jsx)(t.li,{children:"BSM_JAVA"}),"\n",(0,n.jsx)(t.li,{children:"CLOUDWATCH"}),"\n",(0,n.jsx)(t.li,{children:"TIBERO"}),"\n",(0,n.jsx)(t.li,{children:"KUBERNETES"}),"\n",(0,n.jsx)(t.li,{children:"KUBE_NS"}),"\n",(0,n.jsx)(t.li,{children:"URLCHECK"}),"\n",(0,n.jsx)(t.li,{children:"URLCHECK_ADMIN"}),"\n",(0,n.jsx)(t.li,{children:"CUBRID"}),"\n",(0,n.jsx)(t.li,{children:"ALTIBASE"}),"\n",(0,n.jsx)(t.li,{children:"CLUSTER"}),"\n",(0,n.jsx)(t.li,{children:"REDIS"}),"\n",(0,n.jsx)(t.li,{children:"MONGODB"}),"\n",(0,n.jsx)(t.li,{children:"VR"}),"\n",(0,n.jsx)(t.li,{children:"RUM"}),"\n"]}),"\n"]}),"\n"]})})]}),"\n",(0,n.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,n.jsx)(t.h3,{id:"event-message",children:"Event Message"}),(0,n.jsxs)(t.p,{children:["The data can be included in the event message. Always include it in the message if ",(0,n.jsx)(t.code,{children:"optional"})," is ",(0,n.jsx)(t.code,{children:"false"}),". If ",(0,n.jsx)(t.code,{children:"optional"})," is ",(0,n.jsx)(t.code,{children:"true"}),", the corresponding data appears if available."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-log",metastring:"title='Event message example'",children:"Project Name: Application project\nProject Code: 3\nApplication Name: TC-0-1-8081\nEvent Message: RECOVERED: Memory is too high. Less than 10%\nEvent ON Time: 2022-04-12 18:53:24 +0900\nEvent OFF Time: 2022-04-12 18:53:24 +0900\nAlert Type: APPLICATION_MEMORY\nMetric Name: memory\nMetric Value: 20\nMetric Threshold: 10\nStateful: true\n"})}),(0,n.jsx)(t.p,{children:"The following lists the event message components."}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"En"}),(0,n.jsx)(t.th,{children:"Ko"}),(0,n.jsx)(t.th,{children:"Supported alert type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Project Name"}),(0,n.jsx)(t.td,{children:"\uD504\uB85C\uC81D\uD2B8 \uC774\uB984"}),(0,n.jsx)(t.td,{children:"All"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Project Code"}),(0,n.jsx)(t.td,{children:"\uD504\uB85C\uC81D\uD2B8 Code"}),(0,n.jsx)(t.td,{children:"All"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Application Name"}),(0,n.jsx)(t.td,{children:"\uC5D0\uC774\uC804\uD2B8 \uC774\uB984"}),(0,n.jsx)(t.td,{children:"All (optional)"}),(0,n.jsx)(t.td,{children:"oname"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Event Message"}),(0,n.jsx)(t.td,{children:"\uC774\uBCA4\uD2B8 \uBA54\uC2DC\uC9C0"}),(0,n.jsx)(t.td,{children:"All"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Alert Type"}),(0,n.jsx)(t.td,{children:"\uC774\uBCA4\uD2B8 \uC885\uB958"}),(0,n.jsx)(t.td,{children:"All"}),(0,n.jsx)(t.td,{children:"See the AlertType table below"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Event ON Time"}),(0,n.jsx)(t.td,{children:"\uC774\uBCA4\uD2B8 \uBC1C\uC0DD \uC2DC\uAC04"}),(0,n.jsx)(t.td,{children:"All"}),(0,n.jsx)(t.td,{children:"In 2022-04-13 10:40:49 +0900, +0900 means GMT."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Event OFF Time"}),(0,n.jsx)(t.td,{children:"\uC774\uBCA4\uD2B8 \uD574\uC81C \uC2DC\uAC04"}),(0,n.jsx)(t.td,{children:"All (optional)"}),(0,n.jsx)(t.td,{children:"In 2022-04-13 10:40:49 +0900, +0900 means GMT."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Metric Name"}),(0,n.jsx)(t.td,{children:"\uBA54\uD2B8\uB9AD\uC2A4 \uC774\uB984"}),(0,n.jsx)(t.td,{children:"All (optional)"}),(0,n.jsx)(t.td,{children:"The metrics name used to judge the event condition"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Metric Value"}),(0,n.jsx)(t.td,{children:"\uBA54\uD2B8\uB9AD\uC2A4 \uAC12"}),(0,n.jsx)(t.td,{children:"All (optional)"}),(0,n.jsx)(t.td,{children:"If the metric value exceeds the metric threshold, the event occurrence condition is met."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Metric Threshold"}),(0,n.jsx)(t.td,{children:"\uBA54\uD2B8\uB9AD\uC2A4 \uC784\uACC4\uCE58"}),(0,n.jsx)(t.td,{children:"All (optional)"}),(0,n.jsx)(t.td,{children:"If the metric value exceeds the metric threshold, the event occurrence condition is met."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Stateful"}),(0,n.jsx)(t.td,{children:"\uD574\uACB0\uB41C \uC774\uBCA4\uD2B8 \uC54C\uB9BC"}),(0,n.jsx)(t.td,{children:"All (optional)"}),(0,n.jsx)(t.td,{children:"If the resolved event alert is being used, the value is true. Otherwise, the value is false."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Event Rule"}),(0,n.jsx)(t.td,{children:"\uC774\uBCA4\uD2B8 \uADDC\uCE59"}),(0,n.jsx)(t.td,{children:"Metrics Alert"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Event Target Filter"}),(0,n.jsx)(t.td,{children:"\uC774\uBCA4\uD2B8 \uB300\uC0C1 \uC120\uD0DD"}),(0,n.jsx)(t.td,{children:"Metrics Alert"}),(0,n.jsx)(t.td,{children:"Check the event conditions only for metrics collected in specific targets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Repeat Count"}),(0,n.jsx)(t.td,{children:"\uC774\uBCA4\uD2B8 \uBC18\uBCF5 \uD69F\uC218"}),(0,n.jsx)(t.td,{children:"Metrics Alert"}),(0,n.jsx)(t.td,{children:"An event occurs only when the event condition meets the event repetitions count for the event repetition time."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Repeat Duration"}),(0,n.jsx)(t.td,{children:"\uC774\uBCA4\uD2B8 \uBC18\uBCF5 \uC2DC\uAC04"}),(0,n.jsx)(t.td,{children:"Metrics Alert"}),(0,n.jsx)(t.td,{children:"An event occurs only when the event condition meets the event repetitions count for the event repetition time."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Receiver"}),(0,n.jsx)(t.td,{children:"\uC218\uC2E0\uC790"}),(0,n.jsx)(t.td,{children:"Metrics Alert"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Query"}),(0,n.jsx)(t.td,{children:"MXQL \uCFFC\uB9AC"}),(0,n.jsx)(t.td,{children:"Composite metrics alert"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rule"}),(0,n.jsx)(t.td,{children:"Event Rule"}),(0,n.jsx)(t.td,{children:"Composite metrics alert"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Query Period"}),(0,n.jsx)(t.td,{children:"\uCFFC\uB9AC \uAE30\uAC04"}),(0,n.jsx)(t.td,{children:"Composite metrics alert"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Query Interval"}),(0,n.jsx)(t.td,{children:"\uCFFC\uB9AC \uAC04\uACA9"}),(0,n.jsx)(t.td,{children:"Composite metrics alert"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Silent Time"}),(0,n.jsx)(t.td,{children:"\uBB34\uC74C \uC2DC\uAC04"}),(0,n.jsx)(t.td,{children:"Composite metrics alert"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Query"}),(0,n.jsx)(t.td,{children:"URL"}),(0,n.jsx)(t.td,{children:"Exception Alert"}),(0,n.jsx)(t.td,{children:"URL of the request that caused the exception"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TXID"}),(0,n.jsx)(t.td,{children:"\uD2B8\uB79C\uC7AD\uC158 ID"}),(0,n.jsx)(t.td,{children:"Exception Alert"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Class"}),(0,n.jsx)(t.td,{children:"\uC5D0\uB7EC \uD074\uB798\uC2A4 \uC774\uB984"}),(0,n.jsx)(t.td,{children:"Exception Alert"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Log Message"}),(0,n.jsx)(t.td,{children:"\uB85C\uADF8 \uBA54\uC2DC\uC9C0"}),(0,n.jsx)(t.td,{children:"Server - File Log Alert"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Log File"}),(0,n.jsx)(t.td,{children:"\uB85C\uADF8 \uD30C\uC77C \uACBD\uB85C"}),(0,n.jsx)(t.td,{children:"Server - File Log Alert"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IP"}),(0,n.jsx)(t.td,{children:"IP"}),(0,n.jsx)(t.td,{children:"Server Alert All"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU"}),(0,n.jsx)(t.td,{children:"CPU"}),(0,n.jsx)(t.td,{children:"Server Alert All"}),(0,n.jsx)(t.td,{children:"Snapshot at the time of event"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU_load1"}),(0,n.jsx)(t.td,{children:"CPU_load1"}),(0,n.jsx)(t.td,{children:"Server Alert All"}),(0,n.jsx)(t.td,{children:"Snapshot at the time of event"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU_loadPerCore"}),(0,n.jsx)(t.td,{children:"CPU_loadPerCore"}),(0,n.jsx)(t.td,{children:"Server Alert All"}),(0,n.jsx)(t.td,{children:"Snapshot at the time of event"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Memory"}),(0,n.jsx)(t.td,{children:"Memory"}),(0,n.jsx)(t.td,{children:"Server Alert All"}),(0,n.jsx)(t.td,{children:"Snapshot at the time of event"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Swap"}),(0,n.jsx)(t.td,{children:"Swap"}),(0,n.jsx)(t.td,{children:"Server Alert All"}),(0,n.jsx)(t.td,{children:"Snapshot at the time of event"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Disk Name | Used Percent | Free Size | IO Percent"}),(0,n.jsx)(t.td,{children:"\uB514\uC2A4\uD06C \uD37C\uD3EC\uBA3C\uC2A4"}),(0,n.jsx)(t.td,{children:"Server Alert All"}),(0,n.jsx)(t.td,{children:"Snapshot at the time of event"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Name | Bps | Pps"}),(0,n.jsx)(t.td,{children:"\uD2B8\uB798\uD53D \uD37C\uD3EC\uBA3C\uC2A4"}),(0,n.jsx)(t.td,{children:"Server Alert All"}),(0,n.jsx)(t.td,{children:"Snapshot at the time of event"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Message | Time | Name"}),(0,n.jsx)(t.td,{children:"\uCC98\uB9AC\uB0B4\uC5ED \uBA54\uC2DC\uC9C0"}),(0,n.jsx)(t.td,{children:"Server Alert All"}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"It displays as much information as the event can provide."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"AlertType is represented by one of the following:"}),"\n"]}),"\n"]}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"AlertType"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APPLICATION_CPU"}),(0,n.jsx)(t.td,{children:"Application CPU Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APPLICATION_MEMORY"}),(0,n.jsx)(t.td,{children:"Application Memory Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APPLICATION_DISK"}),(0,n.jsx)(t.td,{children:"Application Disk Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APPLICATION_ACTIVE_TRANSACTION"}),(0,n.jsx)(t.td,{children:"Application Active Transaction Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APPLICATION_ERROR_TRANSACTION"}),(0,n.jsx)(t.td,{children:"Application Error Transaction Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APPLICATION_SLOW_TRANSACTION"}),(0,n.jsx)(t.td,{children:"Application Transaction Response Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"METRICS"}),(0,n.jsx)(t.td,{children:"Metrics Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"COMPOSITE_METRICS"}),(0,n.jsx)(t.td,{children:"Composite metrics alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ANOMALY"}),(0,n.jsx)(t.td,{children:"Anomaly Detection Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LOG_REALTIME"}),(0,n.jsx)(t.td,{children:"Log Alert Status"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"COMPOSITE_LOG"}),(0,n.jsx)(t.td,{children:"Composite Log Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_REBOOT"}),(0,n.jsx)(t.td,{children:"Server - Restart Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_NO_DATA"}),(0,n.jsx)(t.td,{children:"Server - Not received Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_PORT"}),(0,n.jsx)(t.td,{children:"Server - Port Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_NETWORK_IOPS"}),(0,n.jsx)(t.td,{children:"Server - Network IOPS Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_NETWORK_BPS"}),(0,n.jsx)(t.td,{children:"Server - Network BPS Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_DISK_IO"}),(0,n.jsx)(t.td,{children:"Server - Disk I/O Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_DISK_QUOTA"}),(0,n.jsx)(t.td,{children:"Server - Disk Quota Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_DISK_INODE"}),(0,n.jsx)(t.td,{children:"Server - inode Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_CPU"}),(0,n.jsx)(t.td,{children:"Server - CPU Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_MEMORY"}),(0,n.jsx)(t.td,{children:"Server - Memory Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_CPU_STEAL"}),(0,n.jsx)(t.td,{children:"Server - steal Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_MEMORY_SWAP"}),(0,n.jsx)(t.td,{children:"Server - Swap Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_LOG_FILE"}),(0,n.jsx)(t.td,{children:"Server - Log File Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_WINDOW_EVENT"}),(0,n.jsx)(t.td,{children:"Server - Window Event Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_OFF"}),(0,n.jsx)(t.td,{children:"Server - Alert OFF"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_ACKNOWLEDGE"}),(0,n.jsx)(t.td,{children:"Server - Acknowledge Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_PROCESS_COUNT"}),(0,n.jsx)(t.td,{children:"Server - Process Count Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_PROCESS_CPU"}),(0,n.jsx)(t.td,{children:"Server - Process CPU Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_PROCESS_MEMORY"}),(0,n.jsx)(t.td,{children:"Server - Process Memory Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SERVER_PROCESS_OFF"}),(0,n.jsx)(t.td,{children:"Server - Process Alert OFF"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AGENT_ACTIVE"}),(0,n.jsx)(t.td,{children:"Agent Enable Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AGENT_INACTIVE"}),(0,n.jsx)(t.td,{children:"Agent Disable Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AGENT_REACTIVATED"}),(0,n.jsx)(t.td,{children:"Agent Reenable Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"URL"}),(0,n.jsx)(t.td,{children:"URL Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TOO_MANY_EVENT"}),(0,n.jsx)(t.td,{children:"Too Many Event Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CLOUD_WATCH"}),(0,n.jsx)(t.td,{children:"Cloud Watch Alert"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"EXCEPTION"}),(0,n.jsx)(t.td,{children:"Exception Alert"})]})]})]})]})]})]})}function s(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6154:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>o,assets:()=>h,toc:()=>x,frontMatter:()=>s});var n=JSON.parse('{"id":"oracle-v1/set-event-format","title":"Event reception format","description":"Learn about the event reception format of alerts provided by database monitoring.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/oracle-v1/set-event-format.mdx","sourceDirName":"oracle-v1","slug":"/oracle-v1/set-event-format","permalink":"/en/oracle-v1/set-event-format","draft":false,"unlisted":false,"editUrl":"undefined/docs/oracle-v1/set-event-format.mdx","tags":[],"version":"current","frontMatter":{"id":"set-event-format","title":"Event reception format","description":"Learn about the event reception format of alerts provided by database monitoring.","keywords":["Oracle","Alert","Event","DATABASE","Database Monitoring","Event reception format"],"isTranslationMissing":false},"sidebar":"dboracleSidebar","previous":{"title":"Event History","permalink":"/en/oracle-v1/set-event-history"},"next":{"title":"Realtime Alert","permalink":"/en/oracle-v1/real-time-notification"}}'),l=r("85893"),i=r("50065"),d=r("37565");let s={id:"set-event-format",title:"Event reception format",description:"Learn about the event reception format of alerts provided by database monitoring.",keywords:["Oracle","Alert","Event","DATABASE","Database Monitoring","Event reception format"],isTranslationMissing:!1},c=void 0,h={},x=[...d.d$];function j(e){return(0,l.jsx)(d.ZP,{})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return d}});var n=r(67294);let l={},i=n.createContext(l);function d(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);