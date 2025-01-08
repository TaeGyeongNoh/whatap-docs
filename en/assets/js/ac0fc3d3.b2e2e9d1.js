"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["4509"],{31063:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>r});var i=JSON.parse('{"id":"dotnet/agent-webservice","title":"WCF and Web Service monitoring configuration","description":"You can trace WCF or web services in the .NET application servers.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/dotnet/agent-webservice.mdx","sourceDirName":"dotnet","slug":"/dotnet/agent-webservice","permalink":"/en/dotnet/agent-webservice","draft":false,"unlisted":false,"editUrl":"undefined/docs/dotnet/agent-webservice.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-webservice","title":"WCF and Web Service monitoring configuration","description":"You can trace WCF or web services in the .NET application servers.","keywords":[".NET"],"isTranslationMissing":false},"sidebar":"dotNetSidebar","previous":{"title":"Topology map","permalink":"/en/dotnet/agent-topology"},"next":{"title":"\uBD80\uAC00 \uAE30\uB2A5","permalink":"/en/dotnet/additional-function"}}'),s=t("85893"),o=t("50065");let r={id:"agent-webservice",title:"WCF and Web Service monitoring configuration",description:"You can trace WCF or web services in the .NET application servers.",keywords:[".NET"],isTranslationMissing:!1},a=void 0,c={},l=[{value:"Configuration guide",id:"configuration-guide",level:2},{value:"Usage examples",id:"usage-examples",level:2},{value:"Modifying the agent configuration file",id:"modifying-the-agent-configuration-file",level:3},{value:"Example of WCF source code to be monitored",id:"example-of-wcf-source-code-to-be-monitored",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Cmdname:t,ImgLang:i}=n;return!t&&p("Cmdname",!0),!i&&p("ImgLang",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can trace ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/framework/wcf/whats-wcf",children:"Windows Communication Foundation (WCF)"})," or Web services for the .NET application server."]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"configuration-guide",children:"Configuration guide"}),(0,s.jsx)(n.p,{children:"The following are agent configuration options for tracing WCF and Web services."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"webservice_method_enabled"})," ",(0,s.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.p,{children:["If the value has been set to ",(0,s.jsx)(n.code,{children:"true"}),", web services can be traced."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"To apply the set values, restart IIS."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"webservice_method_prefix"})," ",(0,s.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,s.jsx)(n.p,{children:"Enter the name of the method to be traced along with the namespace. Because web services cannot be directly traced, directly enter the method that has used the web services as a trace target."}),"\n",(0,s.jsx)(n.p,{children:"See the following example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"webservice_method_prefix=Test.Demo, WebServiceDemo.WebService.\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The methods that meet the conditions are traced even if they do not use web services. This feature was intended for WCF and Web services, but can also be used for other purposes."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you enter just the class to which the method belongs, all public methods within that class are to be traced."}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"To apply the set values, restart IIS."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"webservice_method_prefix_realtime"})," ",(0,s.jsx)("span",{class:"type",children:"Boolean"})," ",(0,s.jsx)(n.a,{href:"../release-notes/dotnet/dotnet-2_3_6",children:(0,s.jsx)("code",{className:"my",children:".NET Agent v2.3.6 or later"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Default ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you set the value to ",(0,s.jsx)(n.code,{children:"true"}),", the target of ",(0,s.jsx)(n.code,{children:"webservice_method_prefix"})," is processed in real time as the previous."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"webservice_method_timeout"})," ",(0,s.jsx)("span",{class:"type",children:"Integer"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default ",(0,s.jsx)(n.code,{children:"5000"})," (Millisecond, ms)"]}),"\n",(0,s.jsx)(n.p,{children:"If exception handling is not performed in the method to be monitored, it is impossible to know the time when the transaction will end. For such cases, the timeout of web service monitoring occurs by default after 5 seconds. You can adjust the timeout by changing this option value."}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(n.section,{className:"remark-sectionize-h2",children:(0,s.jsx)(n.h2,{id:"usage-examples",children:"Usage examples"})}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"modifying-the-agent-configuration-file",children:"Modifying the agent configuration file"}),(0,s.jsxs)(n.p,{children:["See the example for the agent configuration file (",(0,s.jsx)(n.em,{children:"whatap.conf"}),") for the WCF and Web service tracing."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:'title="whatap.conf" showLineNumbers {10-12}',children:"license=...\nwhatap.server.host=15.165.146.117\nwhatap.server.port=6600\napp_process_name=w3wp.exe\ntag_counter_enabled=true\nperfcounter.enabled=true\napp_name=...\nOID=...\n\nwebservice_method_enabled=true\nwebservice_method_prefix=Whatap.Service.Controller, Whatap.DotNet.Examples.Service1\nwebservice_method_timeout=10000\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The start and end of a function can be handled as a transaction, if the call path of the method containing the namespace is one of the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"Whatap.Service.Controller, Whatap.DotNet.Examples.Service1\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Because the ",(0,s.jsx)(n.code,{children:"webservice_method_timeout"})," option has been set to 10,000 (ms), transactions that take more than 10 seconds are automatically terminated."]}),"\n"]}),"\n"]}),(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(t,{sid:"side_management",className:"uitext"})," > ",(0,s.jsx)(t,{sid:"side_agentSetting",className:"uitext"}),", some options can be added."]}),(0,s.jsx)(i,{img:"dotnet-wcf-example-pic.png",desc:"Trace analysis"}),(0,s.jsxs)(n.p,{children:["For more information about ",(0,s.jsx)(t,{sid:"side_agentSetting",className:"uitext"}),", see ",(0,s.jsx)(n.a,{href:"set-agent#set-agent-service",children:"the following"}),"."]})]})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"example-of-wcf-source-code-to-be-monitored",children:"Example of WCF source code to be monitored"}),(0,s.jsx)(n.p,{children:"The following WCF source code example guides you to a case to be monitored."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",metastring:"{5,10,15,20} showLineNumbers",children:"namespace Whatap.DotNet.Examples\n{\n    public class Service1 : IService1\n    {\n        public string GetData(int value)\n        {\n            ...\n        }\n\n        public CompositeType GetDataUsingDataContract(CompositeType composite)\n        {\n            ...\n        }\n\n        private string getFromDB()\n        {\n            ...\n        }\n\n        private string getFromHttp()\n        {\n            ...\n        }\n    }\n\n    public class Service2 : IService1\n    {\n        ...\n    }\n\n    public class Service3 : IService1\n    {\n        public string IwantToSeeOnlyThis(int value)\n        {\n            ...\n        }\n    }\n}\n"})}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"GetData()"})," method to be monitored belongs to the ",(0,s.jsx)(n.code,{children:"Service1"})," class of the ",(0,s.jsx)(n.code,{children:"Whatap.DotNet.Examples"})," namespace. Therefore, the call path for the method is:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"Whatap.DotNet.Examples.Service1.GetData\n"})}),(0,s.jsxs)(n.p,{children:["This is treated as a transaction because it starts from the value (",(0,s.jsx)(n.code,{children:"Whatap.DotNet.Examples.Service1"}),") of the ",(0,s.jsx)(n.code,{children:"webservice_method_prefix"})," specified in the agent configuration file (",(0,s.jsx)(n.em,{children:"whatap.conf"}),")."]}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"GetDataUsingDataContract()"})," method is to be monitored because it is a public method."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"getFromDB()"})," and ",(0,s.jsx)(n.code,{children:"getFromHttp()"})," methods are excluded from monitoring because they are private methods."]}),"\n"]}),"\n"]})})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(67294);let s={},o=i.createContext(s);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);