"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["48382"],{7919:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"release-notes/k8s/k8s-1_7_7","title":"Kubernetes Agent v1.7.7","description":"2024\u5E7407\u670811\u65E5","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/k8s/k8s-1.7.7.mdx","sourceDirName":"release-notes/k8s","slug":"/release-notes/k8s/k8s-1_7_7","permalink":"/ja/release-notes/k8s/k8s-1_7_7","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/k8s/k8s-1.7.7.mdx","tags":[],"version":"current","frontMatter":{"id":"k8s-1_7_7","title":"Kubernetes Agent v1.7.7","toc_max_heading_level":2,"pagination_next":"release-notes/k8s/k8s-1_7_6","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Kubernetes Agent v1.7.6","permalink":"/ja/release-notes/k8s/k8s-1_7_6"}}'),r=s("85893"),i=s("50065");let a={id:"k8s-1_7_7",title:"Kubernetes Agent v1.7.7",toc_max_heading_level:2,pagination_next:"release-notes/k8s/k8s-1_7_6",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},o=void 0,l={},c=[];function d(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components},{Status:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"2024\u5E7407\u670811\u65E5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{children:"Feature"})," Java\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068Kubernetes\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u9023\u52D5\u65B9\u5F0F\u3092\u8FFD\u52A0"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Java\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30B3\u30F3\u30C6\u30CA\u306E\u74B0\u5883\u5909\u6570\u306B",(0,r.jsx)(n.code,{children:"WHATAP_JAVA_AGENT_PATH"}),"\u5024\u3092\u8FFD\u52A0\u3057\u3066\u30B3\u30F3\u30C6\u30CAID\u9023\u52D5\u6A5F\u80FD\u3092\u8FFD\u52A0"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9ID\u3092\u5229\u7528\u3057\u3066proc\u306E\u60C5\u5831\u7167\u4F1A\u3001\u5F53\u8A72\u60C5\u5831\u3067\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B3\u30F3\u30C6\u30CAprocess name\u304B\u3089WhaTap Java\u30DB\u30FC\u30E0(",(0,r.jsx)(n.code,{children:"$WHATAP_HOME"}),") \u3092\u62BD\u51FA"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4E0A\u8A18\u306E\u30D7\u30ED\u30BB\u30B9\u3067WhaTap Java\u30DB\u30FC\u30E0(",(0,r.jsx)(n.code,{children:"$WHATAP_HOME"}),")\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u306F\u3001runtimeAPI\u3092\u4F7F\u7528\u3057\u3066\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30A4\u30E1\u30FC\u30B8\u304B\u3089WhaTap Java\u30DB\u30FC\u30E0\u3092\u62BD\u51FA"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3068\u5F62\u5F0F\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3001\u6B21\u3092\u57FA\u6E96\u306B\u6E80\u305F\u3057\u3066\u3053\u305Dvalid\u30D0\u30FC\u30B8\u30E7\u30F3\u3067containerID\u9023\u52D5\u6A5F\u80FD\u3092\u9042\u884C"}),"\n",(0,r.jsxs)(n.p,{children:["1. \u30D5\u30A1\u30A4\u30EB\u540D\u304C",(0,r.jsxs)(n.em,{children:["whatap.agent-",(0,r.jsx)(n.code,{children:"X.Y.Z"}),".jar"]}),"\u3067\u3001\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u60C5\u5831\u304C2.2.33\u3088\u308A\u5927\u304D\u3044\u304B\u540C\u3058\u5834\u5408(",(0,r.jsx)(n.code,{children:"X.Y.Z"})," >= 2.2.33)"]}),"\n",(0,r.jsxs)(n.p,{children:["2. \u30D5\u30A1\u30A4\u30EB\u540D\u304C",(0,r.jsx)(n.em,{children:"whatap.agent.kube.jar"}),"\u3067\u3042\u308B\u5834\u5408"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{children:"Changed"}),"\u30A4\u30D9\u30F3\u30C8\u53CE\u96C6\u65B9\u5F0F\u306E\u5909\u66F4: \u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u8D77\u52D5\u6642\u70B9\u4EE5\u964D\u306B\u751F\u6210\u3055\u308C\u305F\u30A4\u30D9\u30F3\u30C8\u306B\u5BFE\u3057\u3066\u306E\u307F\u30C7\u30FC\u30BF\u3092\u53CE\u96C6(",(0,r.jsx)(n.code,{children:"kube_event"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Agent download: ",(0,r.jsx)(n.a,{href:"https://repo.whatap.io/docker/kube_mon_1.7.7.tar",children:"kube_mon_1.7.7.tar"})]})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var t=s(67294);let r={},i=t.createContext(r);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);