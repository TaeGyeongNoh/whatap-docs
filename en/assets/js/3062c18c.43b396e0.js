"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["82253"],{61505:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"release-notes/java/java-2_2_5","title":"Java Agent v2.2.5","description":"May 30, 2023","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/java/java-2.2.5.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_5","permalink":"/en/release-notes/java/java-2_2_5","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.5.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_5","title":"Java Agent v2.2.5","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}'),i=t("85893"),r=t("50065");let a={id:"java-2_2_5",title:"Java Agent v2.2.5",toc_max_heading_level:2,displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},o=void 0,l={},d=[{value:"New Feature <sup><Status>New</Status></sup>",id:"new-feature-new",level:2},{value:"Update <sup><Status>Change</Status></sup>",id:"update-change",level:2},{value:"Bug Fixing <sup><Status>Fixed</Status></sup>",id:"bug-fixing-fixed",level:2}];function c(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Status:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"May 30, 2023"}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Starting with Java Agent 2.2.5, the previous ",(0,i.jsx)(n.em,{children:"instrument"})," folder cannot be used."]})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"instrument"})," folder is available up to the version 2.2.4."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"instrument"})," folder is scheduled to be replaced with the ",(0,i.jsx)(n.em,{children:"weaving"})," folder."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The open source tracing plugin used in ",(0,i.jsx)(n.em,{children:"instrument"})," does not guarantee normal operation in the new ",(0,i.jsx)(n.em,{children:"weaving"})," folder."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsxs)(n.h2,{id:"new-feature-new",children:["New Feature ",(0,i.jsx)("sup",{children:(0,i.jsx)(t,{children:"New"})})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added the feature to perform the latest spring-boot synchronous tracking."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Added the function to trace webflux + "tomcat9, tomcat10, undertow, netty."'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Added the function to trace the r2dbc-mysql + "jasync, dev.miku" driver.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# In case of spring-boot-2.7 or later\nweaving=tomcat9,spring-boot-2.7.x\n\n# In case of spring-boot-3.0 or later\nweaving=tomcat10,spring-boot-3.x\nspringboot_tomcat10_enabled=true\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsxs)(n.h2,{id:"update-change",children:["Update ",(0,i.jsx)("sup",{children:(0,i.jsx)(t,{children:"Change"})})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Converted the ",(0,i.jsx)(n.strong,{children:"webflux"})," and ",(0,i.jsx)(n.strong,{children:"r2dbc"})," open source plugins to embedded plugins."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsxs)(n.h2,{id:"bug-fixing-fixed",children:["Bug Fixing ",(0,i.jsx)("sup",{children:(0,i.jsx)(t,{children:"Fixed"})})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed the bug where the same service is called twice upon using the asynchronous tomcat (e.g. ",(0,i.jsx)(n.strong,{children:"webflux"})," + ",(0,i.jsx)(n.strong,{children:"tomcat"}),")."]}),"\n"]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var s=t(67294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);