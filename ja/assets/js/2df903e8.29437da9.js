"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["98744"],{83074:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return r}});var s=t(85893),i=t(50065);let r=[];function o(e){let n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://repo.whatap.io/windows/whatap_dotnet.exe",children:".NET Agent\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://repo.whatap.io/windows/whatap_dotnet_450.exe",children:".NET runtime 4.6.1\u672A\u6E80\u307E\u305F\u306FWindows 2012\u672A\u6E80"})}),"\n",(0,s.jsx)(n.p,{children:"Windows Server 2008 R2\u4EE5\u964D\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002"}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},20988:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>x,assets:()=>a,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"release-notes/dotnet/dotnet-2_3_4","title":".NET Agent v2.3.4","description":"2024\u5E7410\u670802\u65E5","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/dotnet/dotnet-2.3.4.mdx","sourceDirName":"release-notes/dotnet","slug":"/release-notes/dotnet/dotnet-2_3_4","permalink":"/ja/release-notes/dotnet/dotnet-2_3_4","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/dotnet/dotnet-2.3.4.mdx","tags":[],"version":"current","frontMatter":{"id":"dotnet-2_3_4","title":".NET Agent v2.3.4","toc_max_heading_level":2,"pagination_next":"release-notes/dotnet/dotnet-2_3_3","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":".NET Agent v2.3.5","permalink":"/ja/release-notes/dotnet/dotnet-2_3_5"},"next":{"title":".NET Agent v2.3.3","permalink":"/ja/release-notes/dotnet/dotnet-2_3_3"}}'),i=t("85893"),r=t("50065"),o=t("83074");let l={id:"dotnet-2_3_4",title:".NET Agent v2.3.4",toc_max_heading_level:2,pagination_next:"release-notes/dotnet/dotnet-2_3_3",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},d=void 0,a={},c=[...o.d$];function p(e){let n={admonition:"admonition",code:"code",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Status:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"2024\u5E7410\u670802\u65E5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{priority:"0",children:"Fixed"}),"\u6700\u8FD1\u8FFD\u52A0\u3055\u308C\u305F\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u5BFE\u8C61\u306E\u4E2D\u3067CancellationToken\u95A2\u9023\u30E1\u30BD\u30C3\u30C9\u3092\u4E00\u6642\u524A\u9664"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{priority:"1",children:"New"})," .NET Core\u3067",(0,i.jsx)(n.code,{children:"expand_transaction_level"}),"\u8A2D\u5B9A\u30B5\u30DD\u30FC\u30C8\u306E\u8FFD\u52A0"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"expand_transaction_level"}),"\xa0",(0,i.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\xa0",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u305D\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092",(0,i.jsx)(n.code,{children:"true"}),"\u306B\u8A2D\u5B9A\u3059\u308B\u3068\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306E\u5916\u90E8\u304B\u3089\u767A\u751F\u3059\u308BSQL\u304A\u3088\u3073HTTP\u306E\u547C\u3073\u51FA\u3057\u3092\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3068\u898B\u306A\u3057\u3001\u30D2\u30C3\u30C8\u30DE\u30C3\u30D7\u306B\u8868\u793A\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"expand_transaction_basetime"}),"\xa0",(0,i.jsx)("span",{class:"type",children:"Int"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\xa0",(0,i.jsx)(n.code,{children:"1000"}),"ms (1\u79D2)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expand_transaction_level"}),"\xa0\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\xa0",(0,i.jsx)(n.code,{children:"true"}),"\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u6307\u5B9A\u3057\u305F\u6642\u9593\u3088\u308A\u3082\u5FDC\u7B54\u6642\u9593\u306E\u304B\u304B\u308B\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u307F\u304C\u30C7\u30FC\u30BF\u3092\u53CE\u96C6\u3057\u307E\u3059\u3002 \u6BCE\u79D2\u6700\u5927100\u4EF6\u306E\u30C7\u30FC\u30BF\u3092\u53CE\u96C6\u3057\u307E\u3059\u3002 \u6700\u5C0F\u5024\u306F\xa0",(0,i.jsx)(n.code,{children:"100"})," ms\u30670.1\u79D2\u3067\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{priority:"1",children:"New"}),"Desktop application\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u5BFE\u5FDC\u3092\u8FFD\u52A0"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expand_transaction_level"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5024\u3092",(0,i.jsx)(n.code,{children:"true"}),"\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u524D\u306B\u3001\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u30D7\u30ED\u30F3\u30D7\u30C8\u306B\u5165\u529B\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"SET COR_PROFILER={D76F1D76-A9E0-4C87-874F-C0AD93D4229B}\nSET COR_ENABLE_PROFILING=1\n\nSET CORECLR_PROFILER={21CAE18A-4E44-4578-83FD-0576AAA47E68}\nSET CORECLR_ENABLE_PROFILING=1\nSET DOTNET_STARTUP_HOOKS=C:\\Program Files\\WhaTap .NET\\core\\Whatap.Startup.NetCore.dll\n\nSET WHATAP_TRACE_IIS_ONLY=0\nSET EXPAND_TRANSACTION_LEVEL=1\nSET EXPAND_TRANSACTION_BASETIME=100\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u5F8C\u3001\u5BFE\u8C61\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsx)(n.p,{children:"Desktop application\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u5BFE\u5FDC\u306F\u30D9\u30FC\u30BF\u6BB5\u968E\u3067\u3001\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u7BC4\u56F2\u3068\u4F7F\u3044\u3084\u3059\u3055\u3092\u6F38\u9032\u7684\u306B\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3059\u308B\u4E88\u5B9A\u3067\u3059\u3002"})]}),"\n"]}),"\n"]}),"\n","\n",(0,i.jsx)(o.ZP,{})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var s=t(67294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);