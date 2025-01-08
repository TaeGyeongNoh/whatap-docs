"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["38358"],{83519:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"release-notes/otel/otel-v0_2_0","title":"OTEL Agent v0.2.0","description":"June 19, 2024","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/otel/otel-v0.2.0.mdx","sourceDirName":"release-notes/otel","slug":"/release-notes/otel/otel-v0_2_0","permalink":"/en/release-notes/otel/otel-v0_2_0","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/otel/otel-v0.2.0.mdx","tags":[],"version":"current","frontMatter":{"id":"otel-v0_2_0","title":"OTEL Agent v0.2.0","toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"otelSidebar","previous":{"title":"OTEL Agent v0.2.1","permalink":"/en/release-notes/otel/otel-v0_2_1"}}'),i=n("85893"),s=n("50065");let l={id:"otel-v0_2_0",title:"OTEL Agent v0.2.0",toc_max_heading_level:2,isTranslationMissing:!1},a=void 0,o={},d=[];function c(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Status:n}=t;return!n&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"June 19, 2024"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(n,{children:"New"})," Supported linux aarch64."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(n,{children:"New"})," Added the feature to collect additional error information from span events."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Collection is made in case the error is received as an ",(0,i.jsx)(t.code,{children:"event"})," rather than an ",(0,i.jsx)(t.code,{children:"attribute"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add the agent configuration option to find errors in ",(0,i.jsx)(t.code,{children:"event"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"otel_events_exception_keys=exception.type\notel_events_error_message_keys=exception.message\notel_events_error_stack_keys=exception.stacktrace\notel_events_error_esc_keys=exception.escaped\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(n,{children:"Changed"})," Used the ",(0,i.jsx)(t.em,{children:"security.conf"})," file instead of ",(0,i.jsx)(t.em,{children:"paramkey.txt"})]}),"\n",(0,i.jsxs)(t.p,{children:["It uses the value of the ",(0,i.jsx)(t.code,{children:"paramkey"})," key in the previous ",(0,i.jsx)(t.em,{children:"security.conf"})," file. The default value has been changed to ",(0,i.jsx)(t.code,{children:"WHATAP"}),' instead of a random value. If "WHATAP" is specified, decryption is enabled without entering a key.']}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(n,{children:"Changed"})," Changed the normalization option setting for SQL statements."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Always enable normalization by separating parameters in SQL statements. Always set the ",(0,i.jsx)(t.code,{children:"trace_sql_normalize_enabled"})," option to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If you have already disabled the normalization option (disable normalization), activate the setting to normalize and display parameters separately."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Set the ",(0,i.jsx)(t.code,{children:"profile_sql_param_enabled"})," option to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Normalized parameters are separately encrypted and collected."}),"\n",(0,i.jsxs)(t.li,{children:["You can check the data by decrypting it with ",(0,i.jsx)(t.code,{children:"paramkey"})," in ",(0,i.jsx)(t.em,{children:"security.conf"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Download"})}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"OS Name"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"File format"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Architecture"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Download"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{rowSpan:"2",children:"Red Hat / CentOS / Amazon linux"}),(0,i.jsx)(t.td,{rowSpan:"2",style:{textAlign:"center"},children:"RPM"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/centos/6/x86_64/whatap-otel-0.2-0.x86_64.rpm",children:"Download"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"aarch64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/centos/7/aarch64/whatap-otel-0.2-0.aarch64.rpm",children:"Download"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{rowSpan:"2",children:"Ubuntu 12 and above / Debian"}),(0,i.jsx)(t.td,{rowSpan:"2",style:{textAlign:"center"},children:"DEB"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"amd64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/debian/unstable/whatap-otel_0.2.0_amd64.deb",children:"Download"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"arm64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/debian/unstable/whatap-otel_0.2.0_arm64.deb",children:"Download"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{rowSpan:"2",children:"Alpine linux"}),(0,i.jsx)(t.td,{rowSpan:"2",style:{textAlign:"center"},children:"tar gzip"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/alpine/x86_64/whatap-otel-0.2.0.tar.gz",children:"Download"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"aarch64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/alpine/aarch64/whatap-otel-0.2.0.tar.gz",children:"Download"})})]})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["For more information about how to view the data collected by ",(0,i.jsx)(t.strong,{children:"OpenTelemetry"})," in the WhaTap monitoring service, see ",(0,i.jsx)(t.a,{href:"../../opentelemetry/introduction",children:"the following"}),"."]})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var r=n(67294);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);