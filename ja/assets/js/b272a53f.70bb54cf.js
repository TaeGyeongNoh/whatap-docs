"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["16602"],{1437:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>t});var s=JSON.parse('{"id":"npm/set-tagrule","title":"tagRule\u8A2D\u5B9A","description":"\u4E0D\u898F\u5247\u3067\u591A\u69D8\u306A\u60C5\u5831\u3092\u53CE\u96C6\u3057\u3001\u30C8\u30DD\u30ED\u30B8\u30FC\u307E\u305F\u306F\u30C1\u30E3\u30FC\u30C8\u3067\u8868\u793A\u3067\u304D\u308BtagRule\u8A2D\u5B9A\u306B\u5BFE\u3059\u308B\u8AAC\u660E\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/npm/set-tagrule.mdx","sourceDirName":"npm","slug":"/npm/set-tagrule","permalink":"/ja/npm/set-tagrule","draft":false,"unlisted":false,"editUrl":"undefined/docs/npm/set-tagrule.mdx","tags":[],"version":"current","frontMatter":{"id":"set-tagrule","title":"tagRule\u8A2D\u5B9A","description":"\u4E0D\u898F\u5247\u3067\u591A\u69D8\u306A\u60C5\u5831\u3092\u53CE\u96C6\u3057\u3001\u30C8\u30DD\u30ED\u30B8\u30FC\u307E\u305F\u306F\u30C1\u30E3\u30FC\u30C8\u3067\u8868\u793A\u3067\u304D\u308BtagRule\u8A2D\u5B9A\u306B\u5BFE\u3059\u308B\u8AAC\u660E\u3067\u3059\u3002","keywords":["\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u6027\u80FD\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0","tagRule"],"isTranslationMissing":false},"sidebar":"npmsidebar","previous":{"title":"AWS\u30EA\u30BD\u30FC\u30B9\u60C5\u5831\u306E\u53CE\u96C6\u30AA\u30D7\u30B7\u30E7\u30F3","permalink":"/ja/npm/set-aws-resource-options"},"next":{"title":"UI\u306E\u4F7F\u3044\u65B9","permalink":"/ja/npm/usage-ui"}}'),a=i("85893"),l=i("50065");let t={id:"set-tagrule",title:"tagRule\u8A2D\u5B9A",description:"\u4E0D\u898F\u5247\u3067\u591A\u69D8\u306A\u60C5\u5831\u3092\u53CE\u96C6\u3057\u3001\u30C8\u30DD\u30ED\u30B8\u30FC\u307E\u305F\u306F\u30C1\u30E3\u30FC\u30C8\u3067\u8868\u793A\u3067\u304D\u308BtagRule\u8A2D\u5B9A\u306B\u5BFE\u3059\u308B\u8AAC\u660E\u3067\u3059\u3002",keywords:["\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u6027\u80FD\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0","tagRule"],isTranslationMissing:!1},r=void 0,c={},o=[{value:"tagRule\u30AA\u30D7\u30B7\u30E7\u30F3",id:"tagrule\u30AA\u30D7\u30B7\u30E7\u30F3",level:2},{value:"\u30D7\u30ED\u30BB\u30B9\u540D\u306E\u7C21\u7D20\u5316",id:"\u30D7\u30ED\u30BB\u30B9\u540D\u306E\u7C21\u7D20\u5316",level:3},{value:"\u30D7\u30ED\u30BB\u30B9\u306E\u30DB\u30EF\u30A4\u30C8\u30EA\u30B9\u30C8(White List)",id:"\u30D7\u30ED\u30BB\u30B9\u306E\u30DB\u30EF\u30A4\u30C8\u30EA\u30B9\u30C8white-list",level:3},{value:"\u30D7\u30ED\u30BB\u30B9\u306E\u30D6\u30E9\u30C3\u30AF\u30EA\u30B9\u30C8(Black List)",id:"\u30D7\u30ED\u30BB\u30B9\u306E\u30D6\u30E9\u30C3\u30AF\u30EA\u30B9\u30C8black-list",level:3},{value:"\u30D7\u30ED\u30BB\u30B9\u30BF\u30A4\u30D7(Type)\u6307\u5B9A",id:"\u30D7\u30ED\u30BB\u30B9\u30BF\u30A4\u30D7type\u6307\u5B9A",level:3},{value:"\u30A2\u30D7\u30EA\u540D(App Name) \u6307\u5B9A",id:"\u30A2\u30D7\u30EA\u540Dapp-name-\u6307\u5B9A",level:3},{value:"\u4E0D\u660E\u306A\u5BFE\u8C61\u533A\u5206",id:"untagged",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\u30BF\u30B0"}),"(Tag)\u306F\u3001\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u5BFE\u8C61\u30B5\u30FC\u30D0\u30FC\u304B\u3089\u53CE\u96C6\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3092\u30B0\u30EB\u30FC\u30D7\u5358\u4F4D\u3067\u8868\u793A\u3059\u308B\u305F\u3081\u306E\u57FA\u6E96\u306B\u306A\u308A\u307E\u3059\u3002 ",(0,a.jsx)(n.strong,{children:"NPM"}),"\u3067\u6700\u3082\u91CD\u8981\u306A\u8981\u7D20\u306F\u53EF\u8996\u6027\u3067\u3059\u3002 \u30B0\u30EB\u30FC\u30D7\u5316\u306F\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3068\u3044\u3046\u4E0D\u898F\u5247\u3067\u591A\u69D8\u306A\u60C5\u5831\u304C\u3042\u3075\u308C\u308B\u74B0\u5883\u3067\u3001\u53EF\u8996\u6027\u3092\u78BA\u4FDD\u3059\u308B\u305F\u3081\u306E\u5FC5\u9808\u8981\u7D20\u3067\u3059\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306F\u3001Raw Data\u306BIP\u30A2\u30C9\u30EC\u30B9\u304A\u3088\u3073Port(Source\u3001Target)\u3001Host Name\u3001Process Name\u60C5\u5831\u3092\u30AD\u30FC\u3068\u3057\u3066\u53CE\u96C6\u3057\u307E\u3059\u3002 \u53CE\u96C6\u3057\u305F\u60C5\u5831\u306B\u57FA\u3065\u3044\u3066\u3001\u30C8\u30DD\u30ED\u30B8\u30FC\u307E\u305F\u306F\u30C1\u30E3\u30FC\u30C8\u306B\u8868\u793A\u3059\u308B\u30CE\u30FC\u30C9\u306E\u30B0\u30EB\u30FC\u30D7\u5358\u4F4D\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u304B\u3089\u53CE\u96C6\u3059\u308B\u30C7\u30D5\u30A9\u30EB\u30C8\u30BF\u30B0\u306B\u52A0\u3048\u3066\u3001\u30E6\u30FC\u30B6\u30FC\u304C\u7C21\u5358\u306B\u5909\u66F4\u3057\u3066\u9069\u7528\u3067\u304D\u308B\u30EB\u30FC\u30EB\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002 \u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30D1\u30B9(",(0,a.jsx)(n.em,{children:"/usr/whatap/whatap-npmd"}),")\u306E",(0,a.jsx)(n.em,{children:"tagRule.yaml"}),"\u30D5\u30A1\u30A4\u30EB\u3092\u4FEE\u6B63\u3057\u3066\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9069\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,a.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(n.h2,{id:"tagrule\u30AA\u30D7\u30B7\u30E7\u30F3",children:"tagRule\u30AA\u30D7\u30B7\u30E7\u30F3"}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"tagRule"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u9069\u7528\u3055\u308C\u305F\u7D50\u679C\u306F\u3001",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9"})})," >",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30C8\u30DD\u30ED\u30B8\u30FC"})}),"\u30E1\u30CB\u30E5\u30FC\u3067\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002 \u30B0\u30EB\u30FC\u30D7\u5316\u306B\u3088\u308A\u3001\u8907\u96D1\u3067\u4E0D\u898F\u5247\u306A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u9593\u306E\u95A2\u9023\u6027\u3092\u5358\u7D14\u5316\u3057\u3001\u62BD\u8C61\u5316\u3055\u308C\u305F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u6027\u80FD\u3092\u53EF\u8996\u5316\u3057\u3066\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u3067\u304D\u307E\u3059\u3002"]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Topology Chart",src:i(45564).Z+"",width:"1200",height:"722"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"tagRule"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u9069\u5FDC\u3055\u308C\u305F",(0,a.jsx)(n.img,{alt:"\u6570\u5B57\uFF11",src:i(12979).Z+"",width:"35",height:"35"}),"\u30CE\u30FC\u30C9\u3067\u3059\u3002 \u9577\u304F\u3066\u8907\u96D1\u306A\u30D7\u30ED\u30BB\u30B9\u540D\u3092\u7C21\u7D20\u5316\u3057\u3066\u30CE\u30FC\u30C9\u306B\u8868\u793A\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"tagRule"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u9069\u5FDC\u3055\u308C\u3066\u3044\u306A\u3044",(0,a.jsx)(n.img,{alt:"\u6570\u5B57\uFF12",src:i(39701).Z+"",width:"35",height:"35"}),"\u30CE\u30FC\u30C9\u3067\u3059\u3002 \u3069\u3093\u306A\u30D7\u30ED\u30BB\u30B9\u306A\u306E\u304B\u628A\u63E1\u3057\u306B\u304F\u3044\u306E\u3067",(0,a.jsx)(n.img,{alt:"\u6570\u5B57\uFF11",src:i(12979).Z+"",width:"35",height:"35"}),"\u30CE\u30FC\u30C9\u306E\u3088\u3046\u306B",(0,a.jsx)(n.strong,{children:"tagRule"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9069\u7528\u3057\u3066\u3001\u30D7\u30ED\u30BB\u30B9\u540D\u3092\u7C21\u7D20\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"\u6570\u5B57\uFF13",src:i(90604).Z+"",width:"35",height:"35"}),"\u30CE\u30FC\u30C9\u306F\u3001\u305D\u306E\u30DB\u30B9\u30C8\u304A\u3088\u3073\u30D7\u30ED\u30BB\u30B9\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u306A\u3044\u5834\u5408\u3067\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,a.jsx)(n.a,{href:"#untagged",children:"\u6B21\u306E\u6587\u66F8"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(n.h3,{id:"\u30D7\u30ED\u30BB\u30B9\u540D\u306E\u7C21\u7D20\u5316",children:"\u30D7\u30ED\u30BB\u30B9\u540D\u306E\u7C21\u7D20\u5316"}),(0,a.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\uFF1A",(0,a.jsx)(n.code,{children:"processRegex"})]}),(0,a.jsx)(n.p,{children:"\u540D\u524D\u304C\u4E0D\u660E\u306A\u9577\u3044\u30D7\u30ED\u30BB\u30B9\u540D\u3092\u7C21\u7D20\u5316\u3057\u307E\u3059\u3002 \u4F8B\u3048\u3070Java Process\u306E\u5834\u5408\u3001\u6B21\u306E\u3088\u3046\u306BJVM\u5B9F\u884C\u30AA\u30D7\u30B7\u30E7\u30F3\u306A\u3069\u3092\u542B\u307F\u307E\u3059\u3002"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"title='zookeeper process name'",children:"java -Dzookeeper.log.dir=/data/wpm/zookeeper/bin/../logs -Dzookeeper.log.file=zookeeper-whatap-server-Dev-Modules.log -XX:+HeapDumpOnOutOfMemoryError -XX:OnOutOfMemoryError=kill -9 %p -cp /data/wpm/zookeeper/bin/../zookeeper-server/target/classes:/data/wpm/zookeeper/bin/../build/classes:/data/wpm/zookeeper/bin/../zookeeper-server/target/lib/*.jar:/data/wpm/zookeeper/bin/../build/lib/*.jar:/data/wpm/zookeeper/bin/../lib/zookeeper-prometheus-metrics-3.8.0.jar:/data/wpm/zookeeper/bin/../lib/zookeeper-jute-3.8.0.jar:/data/wpm/zookeeper/bin/../lib/zookeeper-3.8.0.jar:/data/wpm/zookeeper/bin/../lib/snappy-java-1.1.7.7.jar:/data/wpm/zookeeper/bin/../lib/slf4j-api-1.7.30.jar:/data/wpm/zookeeper/bin/../lib/simpleclient_servlet-0.9.0.jar:/data/wpm/zookeeper/bin/../lib/simpleclient_hotspot-0.9.0.jar:/data/wpm/zookeeper/bin/../lib/simpleclient_common-0.9.0.jar:/data/wpm/zookeeper/bin/../lib/simpleclient-0.9.0.jar:/data/wpm/zookeeper/bin/../lib/netty-transport-native-unix-common-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-transport-native-epoll-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-transport-classes-epoll-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-transport-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-tcnative-classes-2.0.48.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-tcnative-2.0.48.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-resolver-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-handler-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-common-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-codec-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/netty-buffer-4.1.73.Final.jar:/data/wpm/zookeeper/bin/../lib/metrics-core-4.1.12.1.jar:/data/wpm/zookeeper/bin/../lib/logback-core-1.2.10.jar:/data/wpm/zookeeper/bin/../lib/logback-classic-1.2.10.jar:/data/wpm/zookeeper/bin/../lib/jline-2.14.6.jar:/data/wpm/zookeeper/bin/../lib/jetty-util-ajax-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/jetty-util-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/jetty-servlet-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/jetty-server-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/jetty-security-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/jetty-io-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/jetty-http-9.4.43.v20210629.jar:/data/wpm/zookeeper/bin/../lib/javax.servlet-api-3.1.0.jar:/data/wpm/zookeeper/bin/../lib/jackson-databind-2.13.1.jar:/data/wpm/zookeeper/bin/../lib/jackson-core-2.13.1.jar:/data/wpm/zookeeper/bin/../lib/jackson-annotations-2.13.1.jar:/data/wpm/zookeeper/bin/../lib/commons-io-2.11.0.jar:/data/wpm/zookeeper/bin/../lib/commons-cli-1.4.jar:/data/wpm/zookeeper/bin/../lib/audience-annotations-0.12.0.jar:/data/wpm/zookeeper/bin/../zookeeper-*.jar:/data/wpm/zookeeper/bin/../zookeeper-server/src/main/resources/lib/*.jar:/data/wpm/zookeeper/bin/../conf: -Xmx1000m -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.local.only=false org.apache.zookeeper.server.quorum.QuorumPeerMain /data/wpm/zookeeper/bin/../conf/zoo.cfg\n"})}),(0,a.jsx)(n.p,{children:"\u4E0A\u8A18\u306E\u5834\u5408\u3001\u30C8\u30DD\u30ED\u30B8\u30FC\u3084\u30C1\u30E3\u30FC\u30C8\u4E0A\u306B\u540D\u524D\u3092\u8868\u793A\u3057\u3066\u3082\u628A\u63E1\u3057\u306B\u304F\u3044\u305F\u3081\u3001\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u304B\u3089\u6700\u5927\u9650\u306B\u5FC5\u8981\u306A\u90E8\u5206\u3060\u3051\u3092\u62BD\u51FA\u3057\u3066\u4F7F\u7528\u3057\u307E\u3059\u3002 \u6B21\u306E\u4F8B\u3092\u53C2\u7167\u3057\u3066\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9069\u7528\u3057\u307E\u3059\u3002"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"title='tagRule.yaml'",children:"processRegEx:\n  - zookeeper\n  - whatap_[a-zA-Z]*\n"})}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"processRegex"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u6B21\u306E\u30EB\u30FC\u30EB\u3067\u540D\u524D\u3092\u62BD\u51FA\u3057\u307E\u3059\u3002"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Java"}),"\u306F\u5B9F\u884Cjar\u30D5\u30A1\u30A4\u30EB\u540D\u307E\u305F\u306F\u30E1\u30BD\u30C3\u30C9\u540D"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Python"}),"\u306F\u5B9F\u884C\u30B9\u30AF\u30EA\u30D7\u30C8\u540D"]}),"\n"]}),"\n"]}),(0,a.jsx)(n.p,{children:"\u305F\u3060\u3057\u3001\u62BD\u51FA\u5F8C\u3082\u30D7\u30ED\u30BB\u30B9\u540D\u304C\u9577\u3044\u5834\u5408\u306F\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u6E1B\u3089\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u6B63\u898F\u8868\u73FE\u3067\u5165\u529B\u3067\u304D\u3001\u30EB\u30FC\u30EB\u304C\u8907\u6570\u3042\u308B\u5834\u5408\u3001\u6700\u3082\u9577\u304F\u30DE\u30C3\u30C1\u30F3\u30B0\u3055\u308C\u305F\u6587\u5B57\u5217\u304C\u9078\u629E\u3055\u308C\u307E\u3059\u3002"}),(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"\u77ED\u3044\u30EB\u30FC\u30EB\u3092\u591A\u6570\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u610F\u56F3\u3057\u3066\u3044\u306A\u3044\u30D7\u30ED\u30BB\u30B9\u304C\u30BF\u30AE\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002 \u56FA\u6709\u306E\u540D\u524D\u30EB\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"})})]}),"\n",(0,a.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(n.h3,{id:"\u30D7\u30ED\u30BB\u30B9\u306E\u30DB\u30EF\u30A4\u30C8\u30EA\u30B9\u30C8white-list",children:"\u30D7\u30ED\u30BB\u30B9\u306E\u30DB\u30EF\u30A4\u30C8\u30EA\u30B9\u30C8(White List)"}),(0,a.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\uFF1A",(0,a.jsx)(n.code,{children:"processWhiteList"})]}),(0,a.jsx)(n.p,{children:"\u53CE\u96C6\u5BFE\u8C61\u306E\u30D7\u30ED\u30BB\u30B9\u4E00\u89A7\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u8A72\u5F53\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u901A\u3058\u3066\u6307\u5B9A\u3055\u308C\u305F\u30D7\u30ED\u30BB\u30B9\u4EE5\u5916\u306E\u30C7\u30FC\u30BF\u306F\u3059\u3079\u3066\u7121\u8996\u3057\u307E\u3059\u3002"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"title='tagRule.yaml'",children:"processWhiteList:\n  - zookeeper\n  - whatap_[a-zA-Z]*\n"})}),(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"processRegEx"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u5229\u7528\u3059\u308B\u3068\u3001OS\u306E\u540D\u524D\u3088\u308A\u3082\u6B63\u898F\u8868\u73FE\u306B\u30DE\u30C3\u30C1\u30F3\u30B0\u3055\u308C\u305F\u540D\u524D\u304C\u512A\u5148\u3055\u308C\u307E\u3059\u3002"]})})]}),"\n",(0,a.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(n.h3,{id:"\u30D7\u30ED\u30BB\u30B9\u306E\u30D6\u30E9\u30C3\u30AF\u30EA\u30B9\u30C8black-list",children:"\u30D7\u30ED\u30BB\u30B9\u306E\u30D6\u30E9\u30C3\u30AF\u30EA\u30B9\u30C8(Black List)"}),(0,a.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\uFF1A",(0,a.jsx)(n.code,{children:"processBlackList"})]}),(0,a.jsxs)(n.p,{children:["\u53CE\u96C6\u3057\u306A\u3044\u30D7\u30ED\u30BB\u30B9\u4E00\u89A7\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u901A\u3058\u3066\u3001\u6307\u5B9A\u3055\u308C\u305F\u30D7\u30ED\u30BB\u30B9\u30C7\u30FC\u30BF\u3092\u7121\u8996\u3057\u307E\u3059\u3002 ",(0,a.jsx)(n.code,{children:"processWhiteList"}),"\u3068",(0,a.jsx)(n.code,{children:"processBlackList"}),"\u304C\u3059\u3079\u3066\u5229\u7528\u4E2D\u306E\u5834\u5408\u3001",(0,a.jsx)(n.code,{children:"processWhiteList"}),"\u306E\u4E00\u89A7\u306E\u4E2D\u304B\u3089 ",(0,a.jsx)(n.code,{children:"processBlackList"}),"\u306B\u8A72\u5F53\u3059\u308B\u4E00\u89A7\u3092\u9664\u3044\u3066\u30C7\u30FC\u30BF\u3092\u53CE\u96C6\u3057\u307E\u3059\u3002"]}),(0,a.jsx)(n.p,{children:"\u4F8B\u3048\u3070\u3001zookeeper\u3001whatap_npmd\u3001whatap_infrad\u306E3\u3064\u306E\u30D7\u30ED\u30BB\u30B9\u304C\u52D5\u4F5C\u3057\u3066\u3044\u308B\u3068\u304D\u306B\u3001\u6B21\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9069\u7528\u3059\u308B\u3068zookeeper\u3068whatap_infrad\u306E2\u3064\u306E\u30D7\u30ED\u30BB\u30B9\u60C5\u5831\u3092\u53CE\u96C6\u3057\u307E\u3059\u3002"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"title='tagRule.yaml'",children:"processWhiteList:\n  - zookeeper\n  - whatap_[a-zA-Z]*\n\nprocessBlackList:\n  - whatap_npmd\n"})}),(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"processRegEx"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u5229\u7528\u3059\u308B\u3068\u3001OS\u306E\u540D\u524D\u3088\u308A\u3082\u6B63\u898F\u8868\u73FE\u306B\u30DE\u30C3\u30C1\u30F3\u30B0\u3055\u308C\u305F\u540D\u524D\u304C\u512A\u5148\u3055\u308C\u307E\u3059\u3002"]})})]}),"\n",(0,a.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(n.h3,{id:"\u30D7\u30ED\u30BB\u30B9\u30BF\u30A4\u30D7type\u6307\u5B9A",children:"\u30D7\u30ED\u30BB\u30B9\u30BF\u30A4\u30D7(Type)\u6307\u5B9A"}),(0,a.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\uFF1A",(0,a.jsx)(n.code,{children:"processType"})]}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"processType"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u30C8\u30DD\u30ED\u30B8\u30FC\u3068\u30C1\u30E3\u30FC\u30C8\u306B\u8868\u793A\u3055\u308C\u308B\u6700\u3082\u57FA\u672C\u7684\u306A\u30B0\u30EB\u30FC\u30D7\u3067\u3042\u308B\u30BF\u30B0\u3067\u3059\u3002 \u4E3B\u306A\u76EE\u7684\u306F\u3001\u540C\u3058\u30D7\u30ED\u30BB\u30B9\u304C\u30D0\u30FC\u30B8\u30E7\u30F3\u3084OS\u74B0\u5883\u306B\u3088\u3063\u3066\u5C11\u3057\u305A\u3064\u7570\u306A\u308B\u5834\u5408\u3001\u540C\u3058\u5F79\u5272\u3092\u679C\u305F\u3059\u30D7\u30ED\u30BB\u30B9\u3089\u30921\u3064\u306E\u30CE\u30FC\u30C9\u3068\u3057\u3066\u8868\u793A\u3067\u304D\u307E\u3059\u3002"]}),(0,a.jsx)(n.p,{children:"\u30D7\u30ED\u30BB\u30B9\u540D(Process name)\u3092\u30AD\u30FC\u3068\u3057\u3066\u4F7F\u7528\u3057\u3001\u30DE\u30C3\u30C1\u30F3\u30B0\u3055\u308C\u308B\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3059\u308B\u5F62\u3067\u4F7F\u7528\u3057\u307E\u3059\u3002 \u8A72\u5F53\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u30D7\u30ED\u30BB\u30B9\u306F\u3001\u30D7\u30ED\u30BB\u30B9\u540D(Processname)\u304C\u30D7\u30ED\u30BB\u30B9\u30BF\u30A4\u30D7(Processtype)\u3068\u3057\u3066\u81EA\u52D5\u7684\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"titile='tagRule.yaml'",children:"processType:\n  apache:\n    - httpd\n    - apache2\n  mysql:\n    - mysqld\n    - mysqld_safe\n"})}),(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"processRegEx"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u5229\u7528\u3059\u308B\u3068\u3001OS\u306E\u540D\u524D\u3088\u308A\u3082\u6B63\u898F\u8868\u73FE\u306B\u30DE\u30C3\u30C1\u30F3\u30B0\u3055\u308C\u305F\u540D\u524D\u304C\u512A\u5148\u3055\u308C\u307E\u3059\u3002"]})})]}),"\n",(0,a.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(n.h3,{id:"\u30A2\u30D7\u30EA\u540Dapp-name-\u6307\u5B9A",children:"\u30A2\u30D7\u30EA\u540D(App Name) \u6307\u5B9A"}),(0,a.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\uFF1A",(0,a.jsx)(n.code,{children:"appName"})]}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"appName"}),"\u306F\u3001\u30C8\u30DD\u30ED\u30B8\u30FC\u307E\u305F\u306F\u30C1\u30E3\u30FC\u30C8\u3092\u30E6\u30FC\u30B6\u30FC\u306B\u3068\u3063\u3066\u7406\u89E3\u3057\u3084\u3059\u3044\u5F62\u3067\u8868\u73FE\u3059\u308B\u305F\u3081\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u3059\u3002 \u4E0A\u8A18\u306E",(0,a.jsx)(n.code,{children:"processType"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5834\u5408\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u610F\u56F3\u3068\u306F\u95A2\u4FC2\u306A\u304F\u3001\u540C\u3058\u30D7\u30ED\u30BB\u30B9\u306F 1 \u3064\u306E\u30CE\u30FC\u30C9\u306B\u7D71\u5408(Merge)\u3055\u308C\u3066\u8868\u793A\u3055\u308C\u307E\u3059\u3002 ",(0,a.jsx)(n.code,{children:"appName"}),"\u306F\u30AD\u30FC\u306E\u7D44\u307F\u5408\u308F\u305B\u306B\u3088\u308A\u3001\u5206\u96E2\u3057\u3066\u8868\u793A\u3057\u305F\u3044\u30CE\u30FC\u30C9\u3068\u5408\u308F\u305B\u305F\u3044\u30CE\u30FC\u30C9\u3092\u6307\u5B9A\u3057\u3001\u30E6\u30FC\u30B6\u30FC\u304C\u5E0C\u671B\u3059\u308B\u5F62\u306E\u30CE\u30FC\u30C9\u3092\u8868\u793A\u3067\u304D\u307E\u3059\u3002"]}),(0,a.jsxs)(n.p,{children:["proxy\u2192msa_process\u2192msa_process2\u2192db\u306B\u3064\u306A\u304C\u308B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u69CB\u6210\u304C",(0,a.jsx)(n.strong,{children:"\u672C\u756A\u6A5F"}),"/",(0,a.jsx)(n.strong,{children:"\u958B\u767A\u6A5F"}),"/",(0,a.jsx)(n.strong,{children:"\u691C\u8A3C\u6A5F"}),"\u306E3\u3064\u306E\u76EE\u7684\u306B\u5206\u304B\u308C\u3066\u3044\u308B\u5834\u5408\u3092\u53EF\u8996\u5316\u3059\u308B\u30B1\u30FC\u30B9\u3092\u60F3\u5B9A\u3057\u3066\u307F\u307E\u3059\u3002"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"processType"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u53EF\u8996\u5316\u3059\u308B\u5834\u5408"]}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart LR\n  A[Proxy] --\x3e B(msa_process1);\n  B --\x3e C(msa_process2);\n  C --\x3e D(DB);"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"appName"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u540C\u3058\u540D\u79F0\u306E\u30D7\u30ED\u30BB\u30B9\u3089\u3092",(0,a.jsx)(n.strong,{children:"\u672C\u756A\u6A5F"}),"/",(0,a.jsx)(n.strong,{children:"\u958B\u767A\u6A5F"}),"/",(0,a.jsx)(n.strong,{children:"\u691C\u8A3C\u6A5F"}),"\u306B\u5206\u96E2\u3059\u308B\u5834\u5408"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"title='tagRule.yaml'",children:"appName:\n    prod_proxy: # \u672C\u756A\u6A5F\n        - host_tag: prod_proxy\n          process_type: proxy\n    prod_msa1: # \u672C\u756A\u6A5F\n        - host_tag: prod_msa\n          process_type: msa_process1\n    prod_msa2: # \u672C\u756A\u6A5F\n        - host_tag: prod_msa\n          process_type: msa_process2\n    dev_proxy: # \u958B\u767A\u6A5F\n        - host_tag: dev_proxy\n          process_type: proxy\n    dev_msa: # \u958B\u767A\u6A5F\n        - host_tag: dev_msa\n          process_type: msa_process1\n        - host_tag: dev_msa\n          process_type: msa_process2\n    test: # \u691C\u8A3C\u6A5F\n        - host_tag: test\n    db:\n        - process_type: mysql\n"})}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart LR\n  A(prod_proxy) --\x3e B(prod_msa1);\n  B[prod_msa1] --\x3e C(prod_msa2);\n  C[prod_msa2] --\x3e D(DB);\n  E[dev_proxy] --\x3e F(dev_msa);\n  F[dev_msa] --\x3e D(DB);\n  G[test] --\x3e D(DB);"}),"\n"]}),"\n"]}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"appName"}),"\u533A\u5206\u3067\u4F7F\u7528\u53EF\u80FD\u306Akey\u306F",(0,a.jsx)(n.code,{children:"host_tag"}),"\u3001",(0,a.jsx)(n.code,{children:"process_type"}),"\u3001",(0,a.jsx)(n.code,{children:"ip"}),"\u3001",(0,a.jsx)(n.code,{children:"port"}),"\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5165\u529B\u3055\u308C\u3066\u3044\u306A\u3044Key\u306F\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3068\u3057\u3066\u9069\u7528\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n"]})}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"appName"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u30DE\u30C3\u30C1\u30F3\u30B0\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001",(0,a.jsx)(n.code,{children:"appNameDefault"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5024\u304C\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"appNameDefault"}),"\u306B\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u4F7F\u7528\u3059\u308Bkey\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"host_tag"}),"\u3001",(0,a.jsx)(n.code,{children:"process_type"}),"\u306E\u3044\u305A\u308C\u304B\u3092\u5165\u529B\u3059\u308B\u3068\u3001\u305D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u60C5\u5831\u304C",(0,a.jsx)(n.code,{children:"appName"}),"\u306B\u81EA\u52D5\u4ED8\u4E0E\u3055\u308C\u3001\u3082\u3057\u305D\u306E\u4ED6\u306EString\u5024\u3092\u5165\u529B\u3059\u308B\u3068\u3001\u305D\u306E\u5024\u306B\u56FA\u5B9A\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"title='tagRule.yaml'",children:"appNameDefault: host_tag # host_tag, process_type, custom string\n"})})]}),"\n",(0,a.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(n.h3,{id:"untagged",children:"\u4E0D\u660E\u306A\u5BFE\u8C61\u533A\u5206"}),(0,a.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\uFF1A",(0,a.jsx)(n.code,{children:"untagOption"})]}),(0,a.jsx)(n.p,{children:"CSP(\u30AF\u30E9\u30A6\u30C9\u30B5\u30FC\u30D3\u30B9\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC)\u304C\u63D0\u4F9B\u3059\u308BELB\u3001\u5916\u90E8\u306B\u8981\u8ACB\u3059\u308BAPI\u306A\u3069\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u306A\u3044\u5BFE\u8C61\u3068\u901A\u4FE1\u3059\u308B\u5834\u5408\u3001\u305D\u306E\u30DB\u30B9\u30C8\u304A\u3088\u3073\u30D7\u30ED\u30BB\u30B9\u306E\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3002 \u30B7\u30B9\u30C6\u30E0\u904B\u7528\u8005\u304C\u77E5\u3063\u3066\u3044\u308B(\u307E\u305F\u306F\u7BA1\u7406\u5BFE\u8C61\u306E)IP\u3001Port\u60C5\u5831\u306B\u57FA\u3065\u3044\u3066\u30BF\u30B0\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"}),(0,a.jsxs)(n.p,{children:["\u3082\u3057\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3082\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305A\u3001\u305D\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u3082\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044IP\u3001Port\u3068\u901A\u4FE1\u3059\u308B\u5834\u5408\u3001\u30C8\u30DD\u30ED\u30B8\u30FC\u3067\u306F",(0,a.jsx)(n.strong,{children:"untagged"}),"\u3068\u3044\u3046\u30CE\u30FC\u30C9\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Untagged",src:i(90147).Z+"",width:"1200",height:"695"})}),(0,a.jsx)(n.p,{children:"IP\u3068Port\u3092\u30AD\u30FC\u3067\u30BF\u30B0\u3092\u8A2D\u5B9A\u3057\u3001Inbound\u30C8\u30E9\u30D5\u30A3\u30C3\u30AF\u306E\u5834\u5408\u3001\u5916\u90E8Port\u304CClient\u30DD\u30FC\u30C8\u3067\u56FA\u5B9A\u3055\u308C\u305F\u30B5\u30FC\u30D3\u30B9\u30DD\u30FC\u30C8\u3067\u306F\u306A\u3044\u305F\u3081\u3001'0'\u306B\u8A2D\u5B9A\u3057\u3066\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"title='tagRule.yaml'",children:'untagOption:\n    15.165.146.117:\n        6600: "whatap-proxy"\n    172.31.24.16:\n        0: "ELB app/New-gitlab/5fe1a93082df3495"\n'})})]})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},45564:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/npm-tagrule-sample-13a8a594631353fb8a900387305d5291.png"},90147:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/npm-untagged-71675d043806b39237a7c8c0ca6248f0.png"},12979:function(e,n,i){i.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII="},39701:function(e,n,i){i.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII="},90604:function(e,n,i){i.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC"},50065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return t}});var s=i(67294);let a={},l=s.createContext(a);function t(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);