"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["77217"],{56445:function(e,n,t){t.d(n,{ZP:function(){return o},d$:function(){return i}});var s=t(85893),r=t(50065);let i=[];function l(e){let n={a:"a",admonition:"admonition",p:"p",...(0,r.a)(),...e.components};return(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["OpenTelemetry monitoring is a Beta version so unexpected errors may occur. It is not recommended for using it for sensitive data or in the operation environment. If you have any feedback or issues, feel free to contact the support team at ",(0,s.jsx)(n.a,{href:"mailto:support@whatap.io",children:"support@whatap.io"}),"."]})})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},73065:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>p,assets:()=>a,toc:()=>h,frontMatter:()=>o});var s=JSON.parse('{"id":"opentelemetry/set-agent","title":"Configuration","description":"You can collect various metrics from OpenTelemetry through the agent settings.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/opentelemetry/set-agent.mdx","sourceDirName":"opentelemetry","slug":"/opentelemetry/set-agent","permalink":"/en/opentelemetry/set-agent","draft":false,"unlisted":false,"editUrl":"undefined/docs/opentelemetry/set-agent.mdx","tags":[],"version":"current","frontMatter":{"id":"set-agent","title":"Configuration","description":"You can collect various metrics from OpenTelemetry through the agent settings.","isTranslationMissing":false},"sidebar":"otelSidebar","previous":{"title":"Agent Installation","permalink":"/en/opentelemetry/install-agent"},"next":{"title":"OTEL Agent v0.2.2","permalink":"/en/release-notes/otel/otel-v0_2_2"}}'),r=t("85893"),i=t("50065"),l=t("56445");let o={id:"set-agent",title:"Configuration",description:"You can collect various metrics from OpenTelemetry through the agent settings.",isTranslationMissing:!1},c=void 0,a={},h=[...l.d$,{value:"Agent",id:"agent",level:2},{value:"Trace",id:"trace",level:2},{value:"Metric",id:"metric",level:2},{value:"Log",id:"log",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Head:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})}),"\n","\n",(0,r.jsx)(l.ZP,{}),"\n",(0,r.jsx)(n.p,{children:"You can configure the agent to collect and process various metrics from OpenTelemetry."}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"agent",children:"Agent"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_grpc_server_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsx)(n.p,{children:"Enable the Grpc server to receive the data delivered via the OpenTelemetry protocol (OTLP)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_grpc_server_port"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"6600"})]}),"\n",(0,r.jsx)(n.p,{children:"Listening port of the Grpc server."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"After changing the port number, be sure to restart the whatap-otel service."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_grpc_server_gzip_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.p,{children:["It enables ",(0,r.jsx)(n.code,{children:"gzip"})," by encrypting the data from the Grpc server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"debug_otel_grpc_server_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.p,{children:"It enables the output of debugging logs for processing the OpenTelemetry Trace data."}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"trace",children:"Trace"}),(0,r.jsxs)(n.p,{children:["Agent setting option for processing the OpenTelemetry Trace data. WhaTap gets values from the ",(0,r.jsx)(n.code,{children:"attributes"})," object of ",(0,r.jsx)(n.strong,{children:"Span"}),", an OpenTelemetry Trace element, and uses them as monitoring information."]}),(0,r.jsxs)(n.p,{children:["See the following code to see how the ",(0,r.jsx)(n.code,{children:"attributes"})," object of ",(0,r.jsx)(n.strong,{children:"Span"})," relates to the WhaTap's agent configuration."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"title='OpenTelemetry - Span example' showLineNumbers {18,22,24}",children:'{\n    "name": "/v1/sys/health",\n    "context": {\n        "trace_id": "7bba9f33312b3dbb8b2c2c62bb7abe2d",\n        "span_id": "086e83747d0e381e"\n    },\n    "parent_id": "",\n    "start_time": "2021-10-22 16:04:01.209458162 +0000 UTC",\n    "end_time": "2021-10-22 16:04:01.209514132 +0000 UTC",\n    "status_code": "STATUS_CODE_OK",\n    "status_message": "",\n    "attributes": {\n        "net.transport": "IP.TCP",\n        "net.peer.ip": "172.17.0.1",\n        "net.peer.port": "51820",\n        "net.host.ip": "10.177.2.152",\n        "net.host.port": "26040",\n        "http.method": "GET",\n        "http.target": "/v1/sys/health",\n        "http.server_name": "mortar-gateway",\n        "http.route": "/v1/sys/health",\n        "http.user_agent": "Consul Health Check",\n        "http.scheme": "http",\n        "http.host": "10.177.2.152:26040",\n        "http.flavor": "1.1"\n    },\n    "events": [\n        {\n            "name": "",\n            "message": "OK",\n            "timestamp": "2021-10-22 16:04:01.209512872 +0000 UTC"\n        }\n    ]\n}\n'})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"otel_attr_tx_host_keys=http.host\notel_attr_tx_method_keys=http.method\notel_attr_tx_useragent_keys=http.user_agent\n"})}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For more information about the WhaTap trace analysis, see ",(0,r.jsx)(n.a,{href:"../java/dashboard-hitmap-trace#anlaysis-trace",children:"the following"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For more information about the trace data processing for OpenTelemetry, see ",(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/concepts/signals/traces/",children:"the following link"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For more information about the attributes provided by OpenTelemetry, see the following links:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/database/database-spans/",children:"Database"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/attributes-registry/error/",children:"Error"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/attributes-registry/host/",children:"Host"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/attributes-registry/http/",children:"HTTP"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/attributes-registry/network/",children:"Network"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/attributes-registry/url/",children:"URL"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/attributes-registry/user-agent/",children:"User agent"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_trace_server_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsx)(n.p,{children:"It enables to process the OpenTelemetry Trace data."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_trace_queue_size"})," ",(0,r.jsx)("span",{class:"type",children:"Int"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"5000"})]}),"\n",(0,r.jsx)(n.p,{children:"It sets the queue size for processing the OpenTelemetry Trace data."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_span_collector_max"})," ",(0,r.jsx)("span",{class:"type",children:"Int"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"100000"})]}),"\n",(0,r.jsx)(n.p,{children:"Set the maximum size (number) of the Span data buffers for the OpenTelemetry Trace data."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_dbcon_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"sql.system,db.connection_string,db.system"})]}),"\n",(0,r.jsxs)(n.p,{children:["Enter the attribute name to be used as DB Connection information. Using this information, WhaTap displays it as the ",(0,r.jsx)(n.strong,{children:"DB Connection"})," step."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_sql_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"db.statement,sql.query"})]}),"\n",(0,r.jsxs)(n.p,{children:["Enter the attribute name to use as SQL query information. Using this information, WhaTap displays it as the ",(0,r.jsx)(n.strong,{children:"SQL"})," step."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_httpc_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"url.full,http.url,http.target"})]}),"\n",(0,r.jsxs)(n.p,{children:["Enter the attribute name to use as the HTTP call. Using this information, WhaTap displays it as the ",(0,r.jsx)(n.strong,{children:"HTTP Call"})," step."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_url_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"http.url,http.route,http.target,tyk.api.path,http.url"})]}),"\n",(0,r.jsx)(n.p,{children:"Enter the attribute name to use as the service URL for transactions."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_host_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"http.host"})]}),"\n",(0,r.jsx)(n.p,{children:"Enter the attribute name to use as the host name for transactions."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_method_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"http.method,http.request.method"})]}),"\n",(0,r.jsx)(n.p,{children:"Enter the attribute name to use as the HTTP method."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_status_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"http.status_code"})]}),"\n",(0,r.jsx)(n.p,{children:"Enter the attribute name to use as the HTTP status code for transactions."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_useragent_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"http.user_agent"})]}),"\n",(0,r.jsx)(n.p,{children:"Enter the attribute name to use as the User-Agent for transactions."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_clientip_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"net.peer.ip,net.socket.peer.addr"})]}),"\n",(0,r.jsx)(n.p,{children:"Enter the attribute name to use as the client IP for transactions."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_referer_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsx)(n.p,{children:"Enter the attribute name to use as the HTTP Referer for transactions."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_error_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"error.type"})]}),"\n",(0,r.jsx)(n.p,{children:"Enter the attribute name to use as the error information for transactions."}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"metric",children:"Metric"}),(0,r.jsx)(n.p,{children:"Agent setting option for processing the OpenTelemetry Metric data."}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["For more information about the metric data processing for OpenTelemetry, see ",(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/concepts/signals/metrics/",children:"the following link"}),"."]})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_metric_server_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.p,{children:"It enables to process the OpenTelemetry Metric data."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_metric_queue_size"})," ",(0,r.jsx)("span",{class:"type",children:"Int"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"5000"})]}),"\n",(0,r.jsx)(n.p,{children:"It sets the queue size for processing the OpenTelemetry Metric data."}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"log",children:"Log"}),(0,r.jsx)(n.p,{children:"Agent setting option for processing the OpenTelemetry Log data."}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["For more information about the log data processing for OpenTelemetry, see ",(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/concepts/signals/logs/",children:"the following link"}),"."]})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_log_server_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.p,{children:"It enables to process the OpenTelemetry Log data."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_log_queue_size"})," ",(0,r.jsx)("span",{class:"type",children:"Int"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"5000"})]}),"\n",(0,r.jsx)(n.p,{children:"It sets the queue size for processing the OpenTelemetry Log data."}),"\n"]}),"\n"]})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(67294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);