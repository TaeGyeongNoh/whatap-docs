"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["38037"],{44778:function(e,r,s){s.r(r),s.d(r,{metadata:()=>n,contentTitle:()=>a,default:()=>l,assets:()=>h,toc:()=>c,frontMatter:()=>t});var n=JSON.parse('{"id":"browser/before-starting","title":"Before starting","description":"Before using the browser monitoring dashboard, be familiar with the terms defined by WhaTap.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/browser/before-starting.mdx","sourceDirName":"browser","slug":"/browser/before-starting","permalink":"/en/browser/before-starting","draft":false,"unlisted":false,"editUrl":"undefined/docs/browser/before-starting.mdx","tags":[],"version":"current","frontMatter":{"id":"before-starting","title":"Before starting","description":"Before using the browser monitoring dashboard, be familiar with the terms defined by WhaTap.","keywords":["Browser Monitoring"],"isTranslationMissing":false},"sidebar":"rumsSidebar","previous":{"title":"Setting the actual user ID","permalink":"/en/browser/set-real-user-id"},"next":{"title":"UI usage guide","permalink":"/en/browser/usage-ui"}}'),i=s("85893"),o=s("50065");let t={id:"before-starting",title:"Before starting",description:"Before using the browser monitoring dashboard, be familiar with the terms defined by WhaTap.",keywords:["Browser Monitoring"],isTranslationMissing:!1},a=void 0,h={},c=[{value:"Page Load",id:"load-page",level:2},{value:"Changing the router",id:"changing-the-router",level:2},{value:"User Session",id:"user-session",level:2},{value:"Page group",id:"page-group",level:2},{value:"Browser Error",id:"browser-error",level:2}];function d(e){let r={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",section:"section",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"Before using the browser monitoring dashboard, be familiar with the terms defined by WhaTap."}),"\n",(0,i.jsxs)(r.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(r.h2,{id:"load-page",children:"Page Load"}),(0,i.jsx)(r.p,{children:"This process loads the content and resources of the page when accessing the web application. The browser monitoring service defines the page load time as follows."}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"When there is no DOM interaction, AJAX request, or resource response within 100 ms"}),"\n",(0,i.jsxs)(r.li,{children:["When the ",(0,i.jsx)(r.code,{children:"window onload"})," event occurs"]}),"\n"]}),(0,i.jsx)(r.p,{children:"The combination of the above conditions determines the final load time."})]}),"\n",(0,i.jsxs)(r.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(r.h2,{id:"changing-the-router",children:"Changing the router"}),(0,i.jsx)(r.p,{children:"If you configure your web application as a Single Page Application (SPA), the page load event does not occur whenever you navigate to any page. We use the browser's history API to collect the data related to the page switching."}),(0,i.jsxs)(r.p,{children:["The router change time is defined as the page ",(0,i.jsx)(r.a,{href:"#load-page",children:"First definition to the load"}),"."]}),(0,i.jsx)(r.p,{children:"The event ends when there is no DOM interaction, AJAX request, or resource response within 100 ms after page switching."})]}),"\n",(0,i.jsxs)(r.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(r.h2,{id:"user-session",children:"User Session"}),(0,i.jsxs)(r.p,{children:["In the browser monitoring service, the ",(0,i.jsx)(r.strong,{children:"user session"})," is a unit of behavior by which a user continues to interact with the web application."]}),(0,i.jsxs)(r.p,{children:["It defines the session between user's page entry to exit as one ",(0,i.jsx)(r.strong,{children:"user session"}),". The session has a maximum duration of 4 hours and it is reset if there is no interaction with the web application for 15 minutes."]})]}),"\n",(0,i.jsxs)(r.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(r.h2,{id:"page-group",children:"Page group"}),(0,i.jsxs)(r.p,{children:["To have a meaningful statistical group in the browser monitoring service, the URL path is normalized and provided under the name of ",(0,i.jsx)(r.strong,{children:"page group"}),". Numbers and dates that are judged to be meaningless in the URL path unit analysis are replaced with question marks (?) for provision."]}),(0,i.jsxs)(r.p,{children:["For example, the URL path such as ",(0,i.jsx)(r.em,{children:"/v2/project/sms/"}),(0,i.jsx)(r.code,{children:"12"}),(0,i.jsx)(r.em,{children:"/dashboard/resource_board"})," is provided in the form of ",(0,i.jsx)(r.em,{children:"/v2/project/sms/"}),(0,i.jsx)(r.code,{children:"?"}),(0,i.jsx)(r.em,{children:"/dashboard/resource_board"}),"."]})]}),"\n",(0,i.jsxs)(r.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(r.h2,{id:"browser-error",children:"Browser Error"}),(0,i.jsx)(r.p,{children:"The browser monitoring service classifies errors that occur in the browser as follows:"}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"console"}),": This developer-defined error appears on the browser console."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"onError"}),": This error occurs when a specific resource cannot be loaded or there is a problem in the script."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"fetch error"}),": This error occurs when there is an HTTP request through a fetch."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"xhr error"}),": This error occurs when there is an HTTP request through XHR."]}),"\n"]}),"\n"]})]})]})}function l(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,r,s){s.d(r,{Z:function(){return a},a:function(){return t}});var n=s(67294);let i={},o=n.createContext(i);function t(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);