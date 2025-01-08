"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["521"],{83074:function(e,n,t){t.d(n,{ZP:function(){return d},d$:function(){return i}});var r=t(85893),o=t(50065);let i=[];function s(e){let n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://repo.whatap.io/windows/whatap_dotnet.exe",children:".NET Agent\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://repo.whatap.io/windows/whatap_dotnet_450.exe",children:".NET runtime 4.6.1\u672A\u6E80\u307E\u305F\u306FWindows 2012\u672A\u6E80"})}),"\n",(0,r.jsx)(n.p,{children:"Windows Server 2008 R2\u4EE5\u964D\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002"}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},13575:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"release-notes/dotnet/dotnet-2_3_3","title":".NET Agent v2.3.3","description":"2024\u5E7409\u670825\u65E5","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/dotnet/dotnet-2.3.3.mdx","sourceDirName":"release-notes/dotnet","slug":"/release-notes/dotnet/dotnet-2_3_3","permalink":"/ja/release-notes/dotnet/dotnet-2_3_3","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/dotnet/dotnet-2.3.3.mdx","tags":[],"version":"current","frontMatter":{"id":"dotnet-2_3_3","title":".NET Agent v2.3.3","toc_max_heading_level":2,"pagination_next":"release-notes/dotnet/dotnet-2_3_2","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":".NET Agent v2.3.4","permalink":"/ja/release-notes/dotnet/dotnet-2_3_4"},"next":{"title":".NET Agent v2.3.2","permalink":"/ja/release-notes/dotnet/dotnet-2_3_2"}}'),o=t("85893"),i=t("50065"),s=t("83074");let d={id:"dotnet-2_3_3",title:".NET Agent v2.3.3",toc_max_heading_level:2,pagination_next:"release-notes/dotnet/dotnet-2_3_2",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},l=void 0,a={},c=[...s.d$];function p(e){let n={code:"code",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components},{Status:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"2024\u5E7409\u670825\u65E5"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(t,{priority:"1",children:"New"})," .NET Core\u304B\u3089SQL\u30D1\u30E9\u30E1\u30FC\u30BF\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u5BFE\u5FDC\u3092\u8FFD\u52A0"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(t,{priority:"1",children:"New"})," .NET Core\u304B\u3089Stored Procedure\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u5BFE\u5FDC\u3092\u8FFD\u52A0"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(t,{priority:"1",children:"New"})," ",(0,o.jsx)(n.code,{children:"System.Net.Http.HttpClient.SendAsync"}),"\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u5BFE\u5FDC\u3092\u8FFD\u52A0"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(t,{priority:"0",children:"Fixed"})," .NET Core\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u305F\u5F8C\u3001\u524A\u9664\u3057\u306A\u3044\u72B6\u614B\u3067\u3001.NET Framework\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u8FFD\u52A0\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3068\u30A2\u30AF\u30C6\u30A3\u30D6\u30B9\u30BF\u30C3\u30AF\u304C\u53CE\u96C6\u3055\u308C\u306A\u3044\u30D0\u30B0\u3092\u4FEE\u6B63"]}),"\n"]}),"\n"]}),"\n","\n",(0,o.jsx)(s.ZP,{})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var r=t(67294);let o={},i=r.createContext(o);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);