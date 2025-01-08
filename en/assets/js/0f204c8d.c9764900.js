"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["41996"],{14254:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>o,assets:()=>a,toc:()=>d,frontMatter:()=>c});var i=JSON.parse('{"id":"kubernetes/container-map-event","title":"Event","description":"WhaTap Kubernetes Monitoring provides Kubernetes events and WhaTap events.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/kubernetes/container-map-event.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/container-map-event","permalink":"/en/kubernetes/container-map-event","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/container-map-event.mdx","tags":[],"version":"current","frontMatter":{"id":"container-map-event","title":"Event","description":"WhaTap Kubernetes Monitoring provides Kubernetes events and WhaTap events.","keywords":["Kubernetes","Kubernetes Monitoring","Event"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"Log","permalink":"/en/kubernetes/container-map-log"},"next":{"title":"Call Information","permalink":"/en/kubernetes/container-map-call-information"}}'),s=t("85893"),l=t("50065");let c={id:"container-map-event",title:"Event",description:"WhaTap Kubernetes Monitoring provides Kubernetes events and WhaTap events.",keywords:["Kubernetes","Kubernetes Monitoring","Event"],isTranslationMissing:!1},r=void 0,a={},d=[{value:"Basic screen guide",id:"basic-screen-guide",level:2},{value:"Kubernetes event",id:"kubernetes-event",level:2},{value:"WhaTap event",id:"whatap-event",level:2}];function h(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",section:"section",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{Cmdname:i,ImgLang:c}=n;return!i&&m("Cmdname",!0),!c&&m("ImgLang",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Select Home > Select Project > ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Dashboard"})})," > ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Container Map"})})," > Target, and then in ",(0,s.jsx)(i,{sid:"BTN07712",className:"uitext"}),", select the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Event"})})," tab."]}),"\n",(0,s.jsx)(n.p,{children:"It provides records for all events that occur during the resource lifecycle. The events provided in WhaTap Kubernetes Monitoring are as follows."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Kubernetes Event (",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Kubernetes"})}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["WhaTap event (",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"WhaTap"})}),")"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"basic-screen-guide",children:"Basic screen guide"}),(0,s.jsx)(c,{img:"k8s-event-default3.png",desc:"Kubernetes Display Detail Event tab"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can select a ",(0,s.jsx)(n.img,{alt:"number 1",src:t(12979).Z+"",width:"35",height:"35"})," Kubernetes event (",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Kubernetes"})}),") or WhaTap event (",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"WhatTap"})}),") for query."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Selecting all or multiple blocks"}),"\n",(0,s.jsxs)(n.p,{children:["You can search ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"All Kubernetes events"})})," or ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"All WhatTap events"})})," when all or multiple blocks are selected from ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Container Map"})})," and the card on the left."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Selecting clustering or individual block"}),"\n",(0,s.jsxs)(n.p,{children:["When selecting ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Step 2"})})," grouping or individual block at the top of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Container Map"})}),", you can view the event. For more information about ",(0,s.jsx)(n.strong,{children:"grouping"})," (clustering), see ",(0,s.jsx)(n.a,{href:"container-group",children:"the following"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Before entering the ",(0,s.jsx)(n.strong,{children:"Display Detail"})," screen, depending on the view or grouping selected at the top of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Container Map"})}),", the events that can be viewed may differ."]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.img,{alt:"number 2",src:t(39701).Z+"",width:"35",height:"35"})," time selector, you can set the time zone to view event records in. The default value is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"1 day"})}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["For more information on how to use the time selector, see ",(0,s.jsx)(n.a,{href:"usage-ui#timeselector",children:"the following"}),"."]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"event number trend"})})," in the ",(0,s.jsx)(n.img,{alt:"number 3",src:t(90604).Z+"",width:"35",height:"35"})," selected time zone can be viewed with a bar chart."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.img,{alt:"number 4",src:t(93711).Z+"",width:"35",height:"35"})," list format, you can see the event records."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you select ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Hide Tag"})})," on the upper right of the event record list, you can see the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"timestamp"})})," and ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"message"})})," excluding the tags while recording events."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Kubernetes"})})," events"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can see the data by selecting a desired event type: ",(0,s.jsx)("span",{class:"k8s-normal",children:"Normal"})," or ",(0,s.jsx)("span",{class:"slow",children:"Warning"}),". These event types are identical to the event types provided by Kubernetes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The bars on the left of each event indicate the event types. Gray means ",(0,s.jsx)("span",{class:"k8s-normal",children:"Normal"}),", and orange means ",(0,s.jsx)("span",{class:"slow",children:"Warning"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"WhaTap"})})," events"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a desired event level to search among ",(0,s.jsx)("span",{class:"vslow",children:"Critical"}),", ",(0,s.jsx)("span",{class:"k8s-normal",children:"Info"}),", and ",(0,s.jsx)("span",{class:"slow",children:"Warning"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The bars on the left of each event indicate the event levels. Gray indicates ",(0,s.jsx)("span",{class:"k8s-normal",children:"Info"}),", orange ",(0,s.jsx)("span",{class:"slow",children:"Warning"}),", and red ",(0,s.jsx)("span",{class:"vslow",children:"Critical"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"kubernetes-event",children:"Kubernetes event"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Kubernetes"})})," events are provided by Kubernetes itself. In the Kubernetes environment, you can use the ",(0,s.jsx)(n.code,{children:"kubectl get events"})," command to get the event data of the Kubernetes cluster."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'\n$ kubectl get events -A\n NAMESPACE   LAST SEEN   TYPE      REASON                   OBJECT                            MESSAGE\n community   15m         Normal    ScalingReplicaSet        deployment/baekdusan              Scaled up replica set baekdusan-59554d4859 to 5\n community   12m         Normal    ScalingReplicaSet        deployment/suraksan               Scaled down replica set suraksan-66fc4bf889 to 3\n community   5m18s       Normal    ScalingReplicaSet        deployment/baekdusan              Scaled down replica set baekdusan-59554d4859 to 3\n community   7m10s       Normal    Created                  pod/suraksan-66fc4bf889-h2cw8     Created container suraksan\n community   6m56s       Normal    Pulled                   pod/suraksan-66fc4bf889-h2cw8     Container image "123456789123.dkr.ecr.ap-northeast-2.amazonaws.com/suraksan:0.48" already present on machine\n community   7m9s        Normal    Started                  pod/suraksan-66fc4bf889-h2cw8     Started container suraksan\n community   2m7s        Warning   BackOff                  pod/suraksan-66fc4bf889-h2cw8     Back-off restarting failed container\n community   7m12s       Normal    Started                  pod/suraksan-66fc4bf889-t27rp     Started container suraksan\n community   6m54s       Normal    Pulled                   pod/suraksan-66fc4bf889-t27rp     Container image "123456789123.dkr.ecr.ap-northeast-2.amazonaws.com/suraksan:0.48" already present on machine\n community   7m12s       Normal    Created                  pod/suraksan-66fc4bf889-t27rp     Created container suraksan\n community   2m46s       Warning   BackOff                  pod/suraksan-66fc4bf889-t27rp     Back-off restarting failed container\n community   7m19s       Normal    ScalingReplicaSet        deployment/mountain               Scaled up replica set mountain-6795bfbc54 to 5\n community   27m         Normal    ScalingReplicaSet        deployment/mountain               Scaled down replica set mountain-6795bfbc54 to 4\n community   6m53s       Normal    Pulled                   pod/suraksan-66fc4bf889-mjbsj     Container image "123456789123.dkr.ecr.ap-northeast-2.amazonaws.com/suraksan:0.48" already present on machine\n community   7m10s       Normal    Created                  pod/suraksan-66fc4bf889-mjbsj     Created container suraksan\n community   7m10s       Normal    Started                  pod/suraksan-66fc4bf889-mjbsj     Started container suraksan\n community   2m10s       Warning   BackOff                  pod/suraksan-66fc4bf889-mjbsj     Back-off restarting failed container\n community   5m18s       Warning   FailedToUpdateEndpoint   endpoints/baekdusan-svc           Failed to update endpoint community/baekdusan-svc: Operation cannot be fulfilled on endpoints "baekdusan-svc": the object has been modified; please apply your changes to the latest version and try again\n\n'})}),(0,s.jsx)(n.p,{children:"However, the event data is not stored continuously. The events that occurred after a specified time are no longer available."}),(0,s.jsx)(n.p,{children:"WhaTap Kubernetes collects and stores all Kubernetes events that occurred in the user cluster environment. Event data such as pod, ReplicaSet, deployment, and namespace is provided according to the target to check."}),(0,s.jsx)(c,{img:"k8s-container-event-k8s-all.png",desc:"Kubernetes Events"}),(0,s.jsxs)(n.p,{children:["The bars on the left of each event indicate the event types. Gray means ",(0,s.jsx)("span",{class:"k8s-normal",children:"Normal"}),", and orange means ",(0,s.jsx)("span",{class:"slow",children:"Warning"}),". The Kubernetes events provided by user selection are as follows."]}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Selected target"}),(0,s.jsx)(n.th,{children:"Provided event"}),(0,s.jsx)(n.th,{children:"Provision-related event"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"All"}),(0,s.jsx)(n.td,{colSpan:"2",children:"All project events"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Namespace"}),(0,s.jsx)(n.td,{colSpan:"2",children:"All events under the namespace"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Node"}),(0,s.jsx)(n.td,{colSpan:"2",children:"Node events or all pod (container) events in the node"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Deployment"}),(0,s.jsxs)(n.td,{children:["\u2460 ",(0,s.jsx)(n.code,{children:"kind"})," is Deployment\u2461 ",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"name"})," is identical to the user deployment name"]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"name"})," starts with the user deployment name."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ReplicaSet"}),(0,s.jsxs)(n.td,{children:["\u2460 ",(0,s.jsx)(n.code,{children:"kind"})," is ReplicaSet.\u2461 ",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"name"})," is identical to the user's ReplicaSet name"]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"name"})," starts with the user ReplicaSet name."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Pod (container)"}),(0,s.jsxs)(n.td,{children:["\u2460 ",(0,s.jsx)(n.code,{children:"kind"})," is Pod\u2461 ",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"name"})," is identical to the user pod name"]}),(0,s.jsx)(n.td,{children:"The pod starts with the name of the deployment to which the pod belongs or with the ReplicaSet name."})]})]})]}),(0,s.jsxs)(n.p,{children:["Kubenetes events stored in WhaTap consists of ",(0,s.jsx)(n.code,{children:"message"}),", ",(0,s.jsx)(n.code,{children:"namespace"}),", ",(0,s.jsx)(n.code,{children:"kind"}),", ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"reason"})," and ",(0,s.jsx)(n.code,{children:"type"}),"."]})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"whatap-event",children:"WhaTap event"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"WhaTap"})})," events occur depending on the event conditions registered by the event configuration. Under the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Event"})})," tab on the detailed view screen of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Container Map"})}),", you can see the list of events based on the WhaTap alert settings."]}),(0,s.jsx)(c,{img:"k8s-container-event-wt-all.png",desc:"WhaTap Events"}),(0,s.jsxs)(n.p,{children:["The bars on the left of each event indicate the event levels. Gray means ",(0,s.jsx)("span",{class:"k8s-normal",children:"Info"}),", orange ",(0,s.jsx)("span",{class:"slow",children:"Warning"}),", and red ",(0,s.jsx)("span",{class:"vslow",children:"Critical"}),". Available WhaTap events according to the selected target are as follows."]}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Selected target"}),(0,s.jsx)(n.th,{children:"Provided event"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"All"}),(0,s.jsx)(n.td,{children:"All project events"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Namespace"}),(0,s.jsx)(n.td,{children:"All events under the namespace"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Node"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"onodeName"})," is identical to the user node name"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Deployment"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"deployment"})," is identical to the Deployment name"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ReplicaSet"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"replicaSetName"})," is identical to the user ReplicaSet name"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Pod"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"podName"})," is identical to the user pod name"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Container"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"containerId"})," is identical to the user Container ID"]})]})]})]}),(0,s.jsxs)(n.p,{children:["WhaTap events consist of the items such as ",(0,s.jsx)(n.code,{children:"message"}),", ",(0,s.jsx)(n.code,{children:"status"}),", ",(0,s.jsx)(n.code,{children:"title"}),", and ",(0,s.jsx)(n.code,{children:"level"}),". The following example screen displays the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"WhatTap Container Event"})})," records."]}),(0,s.jsx)(c,{img:"k8s-container-event-wt.png",desc:"Kubernetes WhaTap Event"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["From the summary information card on the left of ",(0,s.jsx)(n.img,{alt:"number 1",src:t(12979).Z+"",width:"35",height:"35"})," ",(0,s.jsx)(n.strong,{children:"Display Detail"}),", select a target to view."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["From the ",(0,s.jsx)(n.img,{alt:"number 2",src:t(39701).Z+"",width:"35",height:"35"})," summary information list, check the information of the selected one."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.img,{alt:"number 3",src:t(90604).Z+"",width:"35",height:"35"})," ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Event"})})," tab, select a ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"WhaTap"})})," event."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Before entering the ",(0,s.jsx)(n.strong,{children:"Display Detail"})," screen, you can view ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"container events"})})," by setting the option at the top of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Container map"})})," to Container view."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Through the ",(0,s.jsx)(n.img,{alt:"number 4",src:t(93711).Z+"",width:"35",height:"35"})," time selector, select a time to view. The default value is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"1 day"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Through the ",(0,s.jsx)(n.img,{alt:"number 5",src:t(51418).Z+"",width:"35",height:"35"})," bar chart, see the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Trend of number of events"})})," in the specified time zone."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"If you look at the trend for event counts for the specified time ranges, you can see that two events have been counted."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["From the ",(0,s.jsx)(n.img,{alt:"number 6",src:t(94676).Z+"",width:"35",height:"35"})," event history, check the information of event records. You can see the levels for each event through the bars on the left of the list. To check all event messages and tags, select the ",(0,s.jsx)(n.img,{alt:"Down arrow icon",src:t(29153).Z+"",width:"24",height:"24"})," icon."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["In the event record list, you can view for two ",(0,s.jsx)("span",{class:"slow",children:"Warning"})," level events: ",(0,s.jsx)(n.code,{children:"CPU utilization of 85% or more by the container limit"})," and ",(0,s.jsx)(n.code,{children:"GC count or more"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},29153:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDlMMTIgMTZMMTggOUg2WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K"},12979:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII="},39701:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII="},90604:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC"},93711:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzViZDMyNzctMzBhNS00ZGFjLWEyOTItYzZlNDYwMGIxNzhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg0QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjgzQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OWVmMWZkYmQtM2FiMS00MDBiLWEyYjAtZjU4ZGNmNjZkY2NiIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1YmQzMjc3LTMwYTUtNGRhYy1hMjkyLWM2ZTQ2MDBiMTc4YyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjAb6dMAAAJ4SURBVHjaYvy6g2HQABYS1YsBsRcQOwCxNhArADEfEP8H4s9AfB+IrwLxASDeDsSvSDGckciQsQXiMiD2IMEDv4F4GxB3AfExYjQwEZBXBuKtQHwIiH1IDElWIPYH4qNAvAmIFSlxTDQQX4BGC6XAF2pWGDmOaQTiJUDMQ8X0CUpbK4C4hhTHNAFxHY0yDCMQNwNxBTGOiQHiWjrk4jYgjsDnGBUgnkGnIgUUQjPREzVy7pgMxNykmnr/OQODTiKqGJHFBSgNTQRiP/SQcYCWISSDhnkU5zJrdMeUkmPSuoMMDGsOUxxlpciOkQRid1JN+PoDmP/nQ9jp3hQ5xgtazYAdAzKKmVQT5m5hYLjzAsL2tKDIMaywJAJyjB2puq8Aq8PKORC2vS4Dg6spxVHlAHOMLqk6u5ch2F1ZVMnq2jDHyJGbaMuBxZaOIlUcowhzjACxOl5/QCRaFQkGhswAqhWCvMQ0IVDA9A2IRFsPLOhEBRioCkAl8EcgFiSmpO1cgeAfuQTB2EDRZAjdl0u0Oz7DWnrngbQBMTnIPJPEsoj49vUpIDYHRdOVQdAWvwaLpkPQpgNeAMo1+HzK7UFWiMDAAVgCBrVx/w5gqPyB9iTAjnkGxDsH0DHbYF0aWNbuHUDHdGPrN+0gp/amEGyFdoEwmp05oLRHR4eAypZcXG3gO0CcRUfHZEC7wzh7B4uAuJ0ODgF1hZYR02+qgvZtaAXqcZnPhMfliVROQyCz4qCdRJL72guAWJ9KZdA2qFmLKRmFuAttnzqSUVKD1G6BNim9oWZRZXwGBqRA7W9Q0xdUXUFbibDmx3sgfog0WAQKjRekGA4QYAC/W4cAbCK1hAAAAABJRU5ErkJggg=="},51418:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzViZDMyNzctMzBhNS00ZGFjLWEyOTItYzZlNDYwMGIxNzhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjgwQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI5Q0REM0UwQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGZkZTk4ZTUtMTdkMS00ZjdhLWE1NDYtMWVjNjk1MWNkMjFkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTE2ZmVkZDktZDVhNy1kYzQ3LWIzMzYtNzY5N2JiY2UyZDJjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GR8qLwAAAvVJREFUeNrMWE1IVFEUPmMJ5ZRkQmZFJLUInHIpmNXUxsxKF1JBEQZCVlYUWBlpZJAQtJAIFVpIRrQoCGmsiGiwsiKSFtrKGKygSKQfEYKS+k5zb29+muc9M28eHvh4982797xvzj33/DzPxD2aNjJTOH8BsBnwA4XAMiAb+A2MAyFgCAgCd4HPEuUeQ8usBY4DmwR/4CfQC1wA+k0WZEzxfDkQAPqALUJLZgKVwFOgByhIhcwu4LXallRlq9K1PRkyZ4FrwBwH/ZN96wZwWkKmBWhO04HxAOeAkyZkdgNNLpzi88BOOzIrgA6XQgpbqDPWqSNPxyXAa6LpGGZ2BuznvGgn8hVM6UNtwLZYy/hVDHFb+JStibVMg0TDw1fWuBrhMDc7fo53lrG6BhWL/kbgfFzfAzNMV3sjbOhAbuNIvYRTB29ThYRIGiRTuwiTWTcNErZfk1klWTXxwxqvx8qWrvC2FdWEx4OhpMgUap8Zw3W+6Sp+WfF++zmttUSHq0VkRrk8YcvMk6zKywmfIJZ98LbuRqLLRxAxF1pzGq8QPR8SkZmrLTNpUErESegjwmd+9PaV1BENfwrfn0Cwb64xVsebP5tJfEtmkyOJ6LhydId1fysoUjeuHXjEsRohyxprC5kaWpMZlJ4m3qL/yYdRa8z+JJA3mkyfZNVFlEdVcNoHL6N/53t2XC2lq0VkgtqBF+H6ziQK8wurmqLjzMqlRGPfiW4+jqhFcLL6O4zz0y9gMacD3R0ETGvdLjQgB9sSP2cit1vjHdxGelTh/q9V2cjJ2DhCfQX7Z0SPBiyLcOypLCUqKxZlbN0GPYntm3hU5nJOCqgWKK7srOfD4iIRji2HEtXAw8ABF8nU6fiSqDu4ynnOBSLcCl036ZtOqd4mXXImkf4MG+Z7HfYh1rVHNYniXhulEhUB9x0g0qt0dafyFeKtqk83qGM4KSDAc++okrJC6XLk+4wWTh3lnAkAH4BkQDnq2RdVAeiPRWwNUe7+I8AARDiqkQLMxlkAAAAASUVORK5CYII="},94676:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzViZDMyNzctMzBhNS00ZGFjLWEyOTItYzZlNDYwMGIxNzhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI5Q0REM0REQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI5Q0REM0RDQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjQ0MDY0NmQtZDc5OS00MzcxLThkYTUtMTUzMWUyMTUyMTEzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Y2YxZjhkZDgtYTkwMy0yZTQ3LTk5ZWYtZWExODlhMGIyYzIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iFZGSwAAAxtJREFUeNrMWF1IVEEUPmsJlREFGakRLfm2bj5E0IObm9HfWhQlEvSDQVBk9bZRUUkKBVEP1kMJhaIVPRSIuOoS0SYVWgRBWhCG5UPGFvQjC0JJfYed2Xt322v3tNelAx87y9xz7jdz5vzMdcV66L+R6cLnFwABwA94gCXAHOAXMAYMA4NABOgGohLjLps74wOOAhsEC/gBdAHngSd2FHL+Mr8UCAG9wCbhTuYCW4DHQAfgzoTMTuCFckumslnZqv4XMmeAG8BsB88nn63bwEkJmXrg9BQFjAtoAI7ZIbMLOJWFKD4L7JiMTDFwNUsphXeoKfVQm8lcBvIkFodHiS7dISqtgSKCPhAkakF2+fTV9hlqTJdnOIk9kBC594xoq4VDixdi2SC20mPLVJkK/8TOBCVE+gaTiZR7ifZXxkmwDH1EGM6ybS5oLgcFwHoJmfoWY3xuH9GRKuM/u6loPlGJ27a5gCozUSaDNdE0ya48fBkfV/mSibDUbBQf5lxVZlrZTaskmk9fm/LAOseiy6/d5JVovRs1HdRFxm59+ExUCPd4Uc3yZojJeDSZxRKtplCKw4OG23QkXaglWrtCRMatQ3vCRvVOCOcT84s5ctLJQDPeUGCbzDgwMydTZ9+/SMS5KtoeD28tbWG5LSbzTaKgcwnLzTojsfE5Ob7bmLsbEfEY02TeS7TWLLeey59rjK3cZ1VZNJkBiVbZMmP8ZiR5LjaefgdtyCtNplei5Ss1dWDNyQTC/cZ4u19EJqKjqRC/I5IszCm/ttGoS9UVRN9jODPXjGf6r9guCT+BIi4HumqHJL0u78b1zuSXm6W9QZRnOlTjnmghKjhKpaHIbUR3HxSfY2n58cjaVi4qkvoa9Cj13tQjrd4OSEhdgf7o9A6xB7JIhHPLYau2cwg4mEUyB3R+sbodtHK/lAUifBW6ZefedELdbaZK6qzs50zCfK/DZ4ht7VGXRPFdmztdzrdhB4h0KVttmXyFeKv609UqDCcEBPjZTtVSVipbjnyf0cKlg1tupDYqUV3iPDX3RXUA+mMR74aodv8WYACKXLbvvXLw3AAAAABJRU5ErkJggg=="},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var i=t(67294);let s={},l=i.createContext(s);function c(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);