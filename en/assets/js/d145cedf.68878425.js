"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["24732"],{6605:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"npm/set-tagrule","title":"Setting the tagRule","description":"This describes the tagRule settings that can collect irregular and diverse data and express them on a topography or charts.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/npm/set-tagrule.mdx","sourceDirName":"npm","slug":"/npm/set-tagrule","permalink":"/en/npm/set-tagrule","draft":false,"unlisted":false,"editUrl":"undefined/docs/npm/set-tagrule.mdx","tags":[],"version":"current","frontMatter":{"id":"set-tagrule","title":"Setting the tagRule","description":"This describes the tagRule settings that can collect irregular and diverse data and express them on a topography or charts.","keywords":["Network performance monitoring","tagRule"],"isTranslationMissing":false},"sidebar":"npmsidebar","previous":{"title":"Options for collection of AWS resource data","permalink":"/en/npm/set-aws-resource-options"},"next":{"title":"UI usage guide","permalink":"/en/npm/usage-ui"}}'),i=n("85893"),a=n("50065");let o={id:"set-tagrule",title:"Setting the tagRule",description:"This describes the tagRule settings that can collect irregular and diverse data and express them on a topography or charts.",keywords:["Network performance monitoring","tagRule"],isTranslationMissing:!1},r=void 0,l={},c=[{value:"tagRule option",id:"tagrule-option",level:2},{value:"Simplifying the process name",id:"simplifying-the-process-name",level:3},{value:"Process white list",id:"process-white-list",level:3},{value:"Process black list",id:"process-black-list",level:3},{value:"Setting the process type",id:"setting-the-process-type",level:3},{value:"Setting the App name",id:"setting-the-app-name",level:3},{value:"Identification of unclear targets",id:"untagged",level:3}];function p(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Tag"})," is a criterion for expressing the data collected from the monitored servers in group units. The most important factor in ",(0,i.jsx)(t.strong,{children:"NPM"})," is visibility. Grouping is essential to secure visibility in an environment where irregular and diverse data is pouring into the network."]}),"\n",(0,i.jsx)(t.p,{children:"The agent collects the IP addresses, ports (Source, Target), host names, and process names in raw data with keys. Based on the collected data, you can set the group units for the nodes to be displayed in a topology or charts."}),"\n",(0,i.jsxs)(t.p,{children:["Along with the tags collected by agents, the rules have been created to be easily changed and applied. The options can be applied by modifying the ",(0,i.jsx)(t.em,{children:"tagRule.yaml"})," file in the agent installation path (",(0,i.jsx)(t.em,{children:"/usr/whatap/whatap-npmd"}),")."]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(t.h2,{id:"tagrule-option",children:"tagRule option"}),(0,i.jsxs)(t.p,{children:["The result of the ",(0,i.jsx)(t.strong,{children:"tagRule"})," option appears in ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Dashboard"})})," > ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Network Topology"})}),". Grouping simplifies the correlation between complex and irregular networks and allows you to visualize the performance of abstracted networks for monitoring."]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Topology Chart",src:n(45564).Z+"",width:"1200",height:"722"})}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["It is the ",(0,i.jsx)(t.img,{alt:"number 1",src:n(12979).Z+"",width:"35",height:"35"})," node with the ",(0,i.jsx)(t.strong,{children:"tagRule"})," option applied. It simplifies long and complex process names to display on nodes."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["It is the ",(0,i.jsx)(t.img,{alt:"number 2",src:n(39701).Z+"",width:"35",height:"35"})," node to which the ",(0,i.jsx)(t.strong,{children:"tagRule"})," option is not applied. Because it is hard to identify the process, be sure to apply the ",(0,i.jsx)(t.strong,{children:"tagRule"})," option to simplify the process name, such as ",(0,i.jsx)(t.img,{alt:"number 1",src:n(12979).Z+"",width:"35",height:"35"})," node."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.img,{alt:"number 3",src:n(90604).Z+"",width:"35",height:"35"})," node cannot acquire its host and process data. For more information, see ",(0,i.jsx)(t.a,{href:"#untagged",children:"the following"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(t.h3,{id:"simplifying-the-process-name",children:"Simplifying the process name"}),(0,i.jsxs)(t.p,{children:["Option: ",(0,i.jsx)(t.code,{children:"processRegex"})]}),(0,i.jsx)(t.p,{children:"It simplifies long process names that are obscure. For example, Java processes include JVM launch options and the like as follows."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:"title='zookeeper process name'",children:"java -Dzookeeper.log.dir=/data/wpm/zookeeper/bin/../logs -Dzookeeper.log.file=zookeeper-whatap-server-Dev-Modules.log -XX:+HeapDumpOnOutOfMemoryError -XX:OnOutOfMemoryError=kill -9 %p -cp /data/wpm/zookeeper/bin/../zookeeper-server/target/classes:/data/wpm/zookeeper/bin/../build/classes:/data/wpm/zookeeper/bin/../zookeeper-server/target/lib/*.jar:/data/wpm/zookeeper/bin/../build/lib/*.jar:/data/wpm/zookeeper/bin/../lib/zookeeper-prometheus-metrics-3.8.0.jar:/data/wpm/zookeeper/bin/../lib/zookeeper-jute-3.8.0.jar:/data/wpm/zookeeper/bin/../lib/zookeeper-3.8.0.jar:/data/wpm/zookeeper/bin/../lib/snappy-java-1.1.7.7.jar:/data/wpm/zookeeper/bin/../lib/slf4j-api-1.7.30.jar:/data/wpm/zookeeper/bin/../lib/simpleclient_servlet-0.9.0.jar:/data/wpm/zookeeper/bin/../lib/simpleclient_hotspot-0.9.0.jar:/data/wpm/zookeeper/bin/../lib/simpleclient_common-0.9.0.jar:/data/wpm/zookeeper/bin/../lib/simpleclient-0.9.0.jar:/data/wpm/zookeeper/bin/../lib/netty-transport-native-unix-common-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-transport-native-epoll-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-transport-classes-epoll-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-transport-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-tcnative-classes-2.0.48.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-tcnative-2.0.48.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-resolver-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-handler-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-common-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-codec-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-buffer-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/metrics-core-4.1.12.1.jar:/data/wpm/zookeeper/bin/../lib/logback-core-1.2.10.jar:/data/wpm/zookeeper/bin/../lib/logback-classic-1.2.10.jar:/data/wpm/zookeeper/bin/../lib/jline-2.14.6.jar:/data/wpm/zookeeper/bin/../lib/jetty-util-ajax-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/jetty-util-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/jetty-servlet-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/jetty-server-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/jetty-security-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/jetty-io-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/jetty-http-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/javax.servlet-api-3.1.0.jar:/data/wpm/zookeeper/bin/../lib/jackson-databind-2.13.1.jar:/data/wpm/zookeeper/bin/../lib/jackson-core-2.13.1.jar:/data/wpm/zookeeper/bin/../lib/jackson-annotations-2.13.1.jar:/data/wpm/zookeeper/bin/../lib/commons-io-2.11.0.jar:/data/wpm/zookeeper/bin/../lib/commons-cli-1.4.jar:/data/wpm/zookeeper/bin/../lib/audience-annotations-0.12.0.jar:/data/wpm/zookeeper/bin/../zookeeper-*.jar:/data/wpm/zookeeper/bin/../zookeeper-server/src/main/resources/lib/*.jar:/data/wpm/zookeeper/bin/../conf: -Xmx1000m -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.local.only=false org.apache.zookeeper.server.quorum.QuorumPeerMain /data/wpm/zookeeper/bin/../conf/zoo.cfg\n"})}),(0,i.jsx)(t.p,{children:"In the above case, even if the name is displayed on a topology or chart,, it is difficult to recognize. Only the required parts are extracted from agents as much as possible. Apply the options by referring to the following example."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"title='tagRule.yaml'",children:"processRegEx:\n  - zookeeper\n  - whatap_[a-zA-Z]*\n"})}),(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"processRegex"})," option extracts names via the following rules."]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Java"})," is the executable JAR file name or method name."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Python"})," is the name of the executable script."]}),"\n"]}),"\n"]}),(0,i.jsx)(t.p,{children:"However, if the process name is long enough even after extraction, it can be shortened through the option. It can be input in the form of regular expression. If there are multiple rules, the longest matched string is selected."}),(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"If you use numerous short rules, you can tag wrong processes unintentionally. Use a unique naming rule."})})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(t.h3,{id:"process-white-list",children:"Process white list"}),(0,i.jsxs)(t.p,{children:["Option: ",(0,i.jsx)(t.code,{children:"processWhiteList"})]}),(0,i.jsx)(t.p,{children:"Set the list of processes to be collected. All data other data than the process specified through the option are ignored."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"title='tagRule.yaml'",children:"processWhiteList:\n  - zookeeper\n  - whatap_[a-zA-Z]*\n"})}),(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["If you use the ",(0,i.jsx)(t.code,{children:"processRegEx"})," option, the name matching the regular expression takes precedence over the OS name."]})})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(t.h3,{id:"process-black-list",children:"Process black list"}),(0,i.jsxs)(t.p,{children:["Option: ",(0,i.jsx)(t.code,{children:"processBlackList"})]}),(0,i.jsxs)(t.p,{children:["It sets the list of processes to exclude from collection. The process data specified through the option is ignored. If both ",(0,i.jsx)(t.code,{children:"processWhiteList"})," and ",(0,i.jsx)(t.code,{children:"processBlackList"})," are in use, data is collected except for the list corresponding to ",(0,i.jsx)(t.code,{children:"processBlackList"})," among the ",(0,i.jsx)(t.code,{children:"processWhiteList"}),"."]}),(0,i.jsx)(t.p,{children:"For example, when three processes (zookeeper, whatap_npmd, and whatap_infrad) are running, the following option is applied to collect data for two processes: zookeeper and whatap_infrad."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"title='tagRule.yaml'",children:"processWhiteList:\n  - zookeeper\n  - whatap_[a-zA-Z]*\n\nprocessBlackList:\n  - whatap_npmd\n"})}),(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["If you use the ",(0,i.jsx)(t.code,{children:"processRegEx"})," option, the name matching the regular expression takes precedence over the OS name."]})})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(t.h3,{id:"setting-the-process-type",children:"Setting the process type"}),(0,i.jsxs)(t.p,{children:["Option: ",(0,i.jsx)(t.code,{children:"processType"})]}),(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"processType"})," option is a tag for the most basic group represented in topologies and charts. The main purpose is to express processes that play the same role as a single node when the same process is expressed slightly differently depending on the version or OS."]}),(0,i.jsx)(t.p,{children:"The process name is used as a key and the matching type is specified. For the processes that are not defined with the option, the process name is automatically applied as the process type."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"titile='tagRule.yaml'",children:"processType:\n  apache:\n    - httpd\n    - apache2\n  mysql:\n    - mysqld\n    - mysqld_safe\n"})}),(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["If you use the ",(0,i.jsx)(t.code,{children:"processRegEx"})," option, the name matching the regular expression takes precedence over the OS name."]})})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(t.h3,{id:"setting-the-app-name",children:"Setting the App name"}),(0,i.jsxs)(t.p,{children:["Option: ",(0,i.jsx)(t.code,{children:"appName"})]}),(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"appName"})," option expresses the topology or chart in a form that is easy to understand. In case of the ",(0,i.jsx)(t.code,{children:"processType"})," option above, the same process is merged into a single node regardless of your intention. For ",(0,i.jsx)(t.code,{children:"appName"}),", you can express the node in your desired form by specifying the node to express separately and the node to merge through a key combination."]}),(0,i.jsxs)(t.p,{children:["Let's assume the case in which the network configuration of proxy \u2192 msa_process \u2192 msa_process2 \u2192 db is divided into three purposes: ",(0,i.jsx)(t.strong,{children:"operation stage"}),", ",(0,i.jsx)(t.strong,{children:"development stage"}),", and ",(0,i.jsx)(t.strong,{children:"testing stage"}),"."]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In case of visualization with the ",(0,i.jsx)(t.code,{children:"processType"})," option"]}),"\n",(0,i.jsx)(t.mermaid,{value:"flowchart LR\n  A[Proxy] --\x3e B(msa_process1);\n  B --\x3e C(msa_process2);\n  C --\x3e D(DB);"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In case the processes with the same name are divided into ",(0,i.jsx)(t.strong,{children:"operation stage"}),", ",(0,i.jsx)(t.strong,{children:"development stage"}),", and ",(0,i.jsx)(t.strong,{children:"testing stage"})," with the ",(0,i.jsx)(t.code,{children:"appName"})," option"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"title='tagRule.yaml'",children:"appName:\n    prod_proxy: # Operation stage\n        - host_tag: prod_proxy\n          process_type: proxy\n    prod_msa1: # Operation stage\n        - host_tag: prod_msa\n          process_type: msa_process1\n    prod_msa2: # Operation stage\n        - host_tag: prod_msa\n          process_type: msa_process2\n    dev_proxy: # Development stage\n        - host_tag: dev_proxy\n          process_type: proxy\n    dev_msa: # Development stage\n        - host_tag: dev_msa\n          process_type: msa_process1\n        - host_tag: dev_msa\n          process_type: msa_process2\n    test: # Testing stage\n        - host_tag: test\n    db:\n        - process_type: mysql\n"})}),"\n",(0,i.jsx)(t.mermaid,{value:"flowchart LR\n  A(prod_proxy) --\x3e B(prod_msa1);\n  B[prod_msa1] --\x3e C(prod_msa2);\n  C[prod_msa2] --\x3e D(DB);\n  E[dev_proxy] --\x3e F(dev_msa);\n  F[dev_msa] --\x3e D(DB);\n  G[test] --\x3e D(DB);"}),"\n"]}),"\n"]}),(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The keys available by ",(0,i.jsx)(t.code,{children:"appName"})," are ",(0,i.jsx)(t.code,{children:"host_tag"}),", ",(0,i.jsx)(t.code,{children:"process_type"}),", ",(0,i.jsx)(t.code,{children:"ip"}),", and ",(0,i.jsx)(t.code,{children:"port"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The keys that have not been entered are applied as wild cards."}),"\n"]}),"\n"]})}),(0,i.jsxs)(t.p,{children:["If the ",(0,i.jsx)(t.code,{children:"appName"})," option is not met, the field or value specified in the ",(0,i.jsx)(t.code,{children:"appNameDefault"})," option is applied."]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.code,{children:"appNameDefault"}),", enter the key to be used by default."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["If you enter any of ",(0,i.jsx)(t.code,{children:"host_tag"})," and ",(0,i.jsx)(t.code,{children:"process_type"}),", the field data is automatically assigned to ",(0,i.jsx)(t.code,{children:"appName"}),". If you enter a string other than that, it is fixed to the value."]}),"\n"]}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"title='tagRule.yaml'",children:"appNameDefault: host_tag # host_tag, process_type, custom string\n"})})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(t.h3,{id:"untagged",children:"Identification of unclear targets"}),(0,i.jsxs)(t.p,{children:["Option: ",(0,i.jsx)(t.code,{children:"untagOption"})]}),(0,i.jsx)(t.p,{children:"When communicating with a target that does not have an agent installed, such as ELB provided by a Cloud Service Provider (CSP) or external API, the host and process data cannot be acquired. Tags can be set based on the IP and port that you know (or the target to be managed)."}),(0,i.jsxs)(t.p,{children:["If the agent has not been installed and communication is made with the IP or port that has not been defined with the option, it is displayed as an ",(0,i.jsx)(t.strong,{children:"untagged"})," node on the topology."]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Untagged",src:n(90147).Z+"",width:"1200",height:"695"})}),(0,i.jsxs)(t.p,{children:["Set the tag with the IP and port as keys. In case of inbound traffic, set it to ",(0,i.jsx)(t.code,{children:"0"})," because the external port is the client port and is not the fixed service port."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"title='tagRule.yaml'",children:'untagOption:\n    15.165.146.117:\n        6600: "whatap-proxy"\n    172.31.24.16:\n        0: "ELB app/New-gitlab/5fe1a93082df3495"\n'})})]})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},45564:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/npm-tagrule-sample-13a8a594631353fb8a900387305d5291.png"},90147:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/npm-untagged-71675d043806b39237a7c8c0ca6248f0.png"},12979:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII="},39701:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII="},90604:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC"},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return o}});var s=n(67294);let i={},a=s.createContext(i);function o(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);