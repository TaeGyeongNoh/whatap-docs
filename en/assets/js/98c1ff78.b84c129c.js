"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["39566"],{12165:function(e,a,t){t.r(a),t.d(a,{metadata:()=>n,contentTitle:()=>u,default:()=>g,assets:()=>c,toc:()=>d,frontMatter:()=>o});var n=JSON.parse('{"id":"golang/agent-manage","title":"Agent Management","description":"You can pause or delete the Go agent service.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/golang/agent-manage.mdx","sourceDirName":"golang","slug":"/golang/agent-manage","permalink":"/en/golang/agent-manage","draft":false,"unlisted":false,"editUrl":"undefined/docs/golang/agent-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-manage","title":"Agent Management","description":"You can pause or delete the Go agent service.","keywords":["Go"],"isTranslationMissing":false},"sidebar":"goSidebar","previous":{"title":"Configuration for each library","permalink":"/en/golang/agent-library"},"next":{"title":"UI usage guide","permalink":"/en/golang/usage-ui"}}'),r=t("85893"),l=t("50065"),s=t("47902"),i=t("5525");let o={id:"agent-manage",title:"Agent Management",description:"You can pause or delete the Go agent service.",keywords:["Go"],isTranslationMissing:!1},u=void 0,c={},d=[{value:"Restarting the agent service",id:"restarting-the-agent-service",level:2},{value:"Stopping the whatap-agent service",id:"stopping-the-whatap-agent-service",level:2},{value:"Agent deletion",id:"agent-deletion",level:2}];function h(e){let a={code:"code",h2:"h2",p:"p",pre:"pre",section:"section",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"The following explains how to restart, pause, or delete the Go agent service."}),"\n",(0,r.jsxs)(a.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(a.h2,{id:"restarting-the-agent-service",children:"Restarting the agent service"}),(0,r.jsx)(a.p,{children:"If the WhaTap agent service is running or erroneous, restart it."}),(0,r.jsxs)(s.Z,{groupId:"golang",children:[(0,r.jsx)(i.Z,{value:"rc",label:"Red Hat/CentOS",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:"title='SH'",children:"$ service whatap-agent restart\n"})})}),(0,r.jsx)(i.Z,{value:"du",label:"Debian/Ubuntu",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:"title='SH'",children:"$ sudo service whatap-agent restart\n"})})}),(0,r.jsx)(i.Z,{value:"al",label:"Amazon Linux",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:"title='SH'",children:"$ sudo service whatap-agent restart\n"})})}),(0,r.jsx)(i.Z,{value:"apl",label:"Alpine Linux",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:"title='SH'",children:"$ /usr/whatap/agent/whatap-agent stop\n$ /usr/whatap/agent/whatap-agent start\n"})})})]})]}),"\n",(0,r.jsxs)(a.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(a.h2,{id:"stopping-the-whatap-agent-service",children:"Stopping the whatap-agent service"}),(0,r.jsxs)(s.Z,{groupId:"golang",children:[(0,r.jsx)(i.Z,{value:"rc",label:"Red Hat/CentOS",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:"title='SH'",children:"$ sudo service whatap-agent stop\n"})})}),(0,r.jsx)(i.Z,{value:"du",label:"Debian/Ubuntu",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:"title='SH'",children:"$ sudo service whatap-agent stop\n"})})}),(0,r.jsx)(i.Z,{value:"al",label:"Amazon Linux",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:"title='SH'",children:"$ sudo service whatap-agent stop\n"})})}),(0,r.jsx)(i.Z,{value:"apl",label:"Alpine Linux",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:"title='SH'",children:"$ /usr/whatap/agent/whatap-agent stop\n"})})})]})]}),"\n",(0,r.jsxs)(a.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(a.h2,{id:"agent-deletion",children:"Agent deletion"}),(0,r.jsx)(a.p,{children:"Delete the WhaTap library from the Go application's source code."}),(0,r.jsxs)(s.Z,{groupId:"golang",children:[(0,r.jsx)(i.Z,{value:"rc",label:"Red Hat/CentOS",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:"title='SH'",children:"$ sudo yum remove whatap-agent\n"})})}),(0,r.jsx)(i.Z,{value:"du",label:"Debian/Ubuntu",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:"title='SH'",children:"$ sudo apt-get purge whatap-agent\n"})})}),(0,r.jsx)(i.Z,{value:"al",label:"Amazon Linux",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:"title='SH'",children:"$ sudo yum remove whatap-agent\n"})})}),(0,r.jsx)(i.Z,{value:"apl",label:"Alpine Linux",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:"title='SH'",children:"$ /usr/whatap/agent/whatap-agent stop\n\n# /usr/whatap/agent Deleting the directory\n$ sudo rm -r /usr/whatap/agent\n"})})})]})]})]})}function g(e={}){let{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5525:function(e,a,t){t.d(a,{Z:()=>s});var n=t("85893");t("67294");var r=t("67026");let l="tabItem_Ymn6";function s(e){let{children:a,hidden:t,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:t,children:a})}},47902:function(e,a,t){t.d(a,{Z:()=>j});var n=t("85893"),r=t("67294"),l=t("67026"),s=t("69599"),i=t("16550"),o=t("32000"),u=t("4520"),c=t("38341"),d=t("76009");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function g(e){let{value:a,tabValues:t}=e;return t.some(e=>e.value===a)}var p=t("7227");let m="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:a,block:t,selectedValue:r,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let a=e.currentTarget,t=o[u.indexOf(a)].value;t!==r&&(c(a),i(t))},h=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1]}}a?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a),children:o.map(e=>{let{value:a,label:t,attributes:s}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>u.push(e),onKeyDown:h,onClick:d,...s,className:(0,l.Z)("tabs__item",f,s?.className,{"tabs__item--active":r===a}),children:t??a},a)})})}function x(e){let{lazy:a,children:t,selectedValue:s}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){let e=i.find(e=>e.props.value===s);return e?(0,r.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==s}))})}function b(e){let a=function(e){let{defaultValue:a,queryString:t=!1,groupId:n}=e,l=function(e){let{values:a,children:t}=e;return(0,r.useMemo)(()=>{let e=a??h(t).map(e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}});return!function(e){let a=(0,c.lx)(e,(e,a)=>e.value===a.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,t])}(e),[s,p]=(0,r.useState)(()=>(function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let n=t.find(e=>e.default)??t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:a,tabValues:l})),[m,f]=function(e){let{queryString:a=!1,groupId:t}=e,n=(0,i.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t}),s=(0,u._X)(l);return[s,(0,r.useCallback)(e=>{if(!l)return;let a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})},[l,n])]}({queryString:t,groupId:n}),[v,x]=function(e){var a;let{groupId:t}=e;let n=(a=t)?`docusaurus.tab.${a}`:null,[l,s]=(0,d.Nk)(n);return[l,(0,r.useCallback)(e=>{if(!!n)s.set(e)},[n,s])]}({groupId:n}),b=(()=>{let e=m??v;return g({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{b&&p(b)},[b]),{selectedValue:s,selectValue:(0,r.useCallback)(e=>{if(!g({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),x(e)},[f,x,l]),tabValues:l}}(e);return(0,n.jsxs)("div",{className:(0,l.Z)("tabs-container",m),children:[(0,n.jsx)(v,{...a,...e}),(0,n.jsx)(x,{...a,...e})]})}function j(e){let a=(0,p.Z)();return(0,n.jsx)(b,{...e,children:h(e.children)},String(a))}},50065:function(e,a,t){t.d(a,{Z:function(){return i},a:function(){return s}});var n=t(67294);let r={},l=n.createContext(r);function s(e){let a=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);