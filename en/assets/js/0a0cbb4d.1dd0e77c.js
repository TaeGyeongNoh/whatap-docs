"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["42493"],{76002:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>i});var a=JSON.parse('{"id":"java/agent-httpcapicall","title":"HTTPC, API Call","description":"The following explains how to set options for the Java agent to collect and analyze the data related to HTTP outbound calls and API calls. It provides various options for detailed monitoring, such as SLOW_HTTPC error handling, CPU and memory usage tracing, stack trace records upon calls, and URL normalization. This allows developers to efficiently manage external dependencies for applications and identify performance issues.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/java/agent-httpcapicall.mdx","sourceDirName":"java","slug":"/java/agent-httpcapicall","permalink":"/en/java/agent-httpcapicall","draft":false,"unlisted":false,"editUrl":"undefined/docs/java/agent-httpcapicall.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-httpcapicall","title":"HTTPC, API Call","description":"The following explains how to set options for the Java agent to collect and analyze the data related to HTTP outbound calls and API calls. It provides various options for detailed monitoring, such as SLOW_HTTPC error handling, CPU and memory usage tracing, stack trace records upon calls, and URL normalization. This allows developers to efficiently manage external dependencies for applications and identify performance issues.","keywords":["Java","Application","HTTPC","API","Agent"],"isTranslationMissing":false},"sidebar":"javaSidebar","previous":{"title":"DB, SQL","permalink":"/en/java/agent-dbsql"},"next":{"title":"Script plug-in","permalink":"/en/java/script-plugin"}}'),s=t("85893"),r=t("50065");let i={id:"agent-httpcapicall",title:"HTTPC, API Call",description:"The following explains how to set options for the Java agent to collect and analyze the data related to HTTP outbound calls and API calls. It provides various options for detailed monitoring, such as SLOW_HTTPC error handling, CPU and memory usage tracing, stack trace records upon calls, and URL normalization. This allows developers to efficiently manage external dependencies for applications and identify performance issues.",keywords:["Java","Application","HTTPC","API","Agent"],isTranslationMissing:!1},o=void 0,l={},c=[];function d(e){let n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ScrollToLink:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ScrollToLink",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The following explains how to set options for the Java agent to collect and analyze the data related to HTTP outbound calls and API calls. It provides various options for detailed monitoring, such as ",(0,s.jsx)(n.strong,{children:"SLOW_HTTPC"})," error handling, CPU and memory usage tracing, stack trace records upon calls, and URL normalization. This allows developers to efficiently manage external dependencies for applications and identify performance issues."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"profile_error_httpc_time_max"})," ",(0,s.jsx)("span",{class:"type",children:"Int"})," ",(0,s.jsx)(t,{anchor:"profile_error_httpc_time_max"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default ",(0,s.jsx)(n.code,{children:"10000"})]}),"\n",(0,s.jsxs)(n.p,{children:["If the HTTPC execution time exceeds the specified value, it is handled as the ",(0,s.jsx)(n.strong,{children:"SLOW_HTTPC"})," error. If set to ",(0,s.jsx)(n.code,{children:"0"}),", it is not treated as an error."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"profile_httpc_resource_enabled"})," ",(0,s.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.p,{children:"When collecting HTTP call steps from the transaction trace, the CPU and memory usages in the step is traced."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"profile_position_httpc"})," ",(0,s.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.p,{children:"It records the stack traces at the execution time of HTTPC."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"trace_httpc_normalize_enabled"})," ",(0,s.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.p,{children:"It enables the function to parse and normalize HTTPC URLs for transactions."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"trace_httpc_normalize_urls"})," ",(0,s.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,s.jsx)(n.p,{children:"Set the HTTPC URL patterns to normalize. It deletes the path parameter after parsing the call URL patterns."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For example, if declared as ",(0,s.jsx)(n.code,{children:"/a/{v}/b"}),", ",(0,s.jsx)(n.code,{children:"a/123/b"})," is replaced by ",(0,s.jsx)(n.code,{children:"a/{v}/b"}),". For multiple values, use comma (,) as the delimiter. A complement is required after arranging substitution patterns."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"hook_httpc_patterns"})," ",(0,s.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,s.jsxs)(n.p,{children:["Set the ",(0,s.jsx)(n.code,{children:"full package class name"}),".",(0,s.jsx)(n.code,{children:"method"})," for HTTP outbound calls. Register and use the full path of the method that performs HTTP calls. After registration, you need to redefine the class or restart the agent."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"hook_httpc_patterns=io.home.test.baseapp.app.post.service.HookHttpcService.*\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To register multiple classes, use comma (,) as the delimiter."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Only asterisk (*) can be used as the wildcard, regular expressions cannot be used."}),"\n"]}),"\n"]})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var a=t(67294);let s={},r=a.createContext(s);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);