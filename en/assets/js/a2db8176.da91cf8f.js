"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["23175"],{47101:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"kubernetes/kubernetes-event","title":"Kubernetes event","description":"It guides you to the Kubernetes event menus.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/kubernetes/kubernetes-event.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/kubernetes-event","permalink":"/en/kubernetes/kubernetes-event","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/kubernetes-event.mdx","tags":[],"version":"current","frontMatter":{"id":"kubernetes-event","title":"Kubernetes event","description":"It guides you to the Kubernetes event menus.","keywords":["Kubernetes","Kubernetes Monitoring","Cluster","Kubernetes event"],"displayed_sidebar":"kubeSidebar","toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"Object Manifest Information","permalink":"/en/kubernetes/object-manifest"},"next":{"title":"kube-apiserver Dashboard","permalink":"/en/kubernetes/kube-apiserver-dashboard"}}'),i=n("85893"),c=n("50065");let l={id:"kubernetes-event",title:"Kubernetes event",description:"It guides you to the Kubernetes event menus.",keywords:["Kubernetes","Kubernetes Monitoring","Cluster","Kubernetes event"],displayed_sidebar:"kubeSidebar",toc_max_heading_level:2,isTranslationMissing:!1},r=void 0,d={},o=[{value:"Event count trend",id:"event-count-trend",level:2},{value:"Event list",id:"event-list",level:2},{value:"Event details",id:"event-details",level:2},{value:"Suggestions",id:"suggestions",level:3},{value:"Adjacent logs",id:"adjacent-logs",level:3},{value:"Event timeline",id:"event-timeline",level:3}];function a(e){let t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",section:"section",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{Cmdname:s,ImgLang:l}=t;return!s&&j("Cmdname",!0),!l&&j("ImgLang",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Home > Select Project > ",(0,i.jsx)(s,{sid:"side_cluster",className:"uitext"})," > ",(0,i.jsx)(s,{sid:"side_kubeEventList",className:"uitext"})]}),"\n",(0,i.jsxs)(t.p,{children:["The WhaTap ",(0,i.jsx)(s,{sid:"side_kubeEventList",className:"uitext"})," menu allows you to perform various queries and searches for Kubernetes events without using commands. You can check the cluster events and also view past events through the time selector."]}),"\n","\n",(0,i.jsx)(l,{img:"k8s-kuber-event.png",desc:"Kubernetes event"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"You can find the desired events through the filtering options and search bar."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["You can quickly filter by event type, such as ",(0,i.jsx)("span",{class:"k8s-normal",children:"Normal"})," or ",(0,i.jsx)("span",{class:"slow",children:"Warning"}),", and ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Reason"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["For more information about Kubernetes events, see ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/kubernetes-api/cluster-resources/event-v1/#Event",children:"the following"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["For more information on how to use the time selector, see ",(0,i.jsx)(t.a,{href:"usage-ui#timeselector",children:"the following"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(t.h2,{id:"event-count-trend",children:"Event count trend"}),(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.img,{alt:"Leader line 1",src:n(12979).Z+"",width:"35",height:"35"})," ",(0,i.jsx)(s,{sid:"TTL06683",className:"uitext"})," presented in the bar chart format allows you to visually see the change in the number of events that occurred within the selected time range."]}),(0,i.jsx)(t.p,{children:"You can select a desired time zone to view and see the events occurred in the zone. This allows you to quickly identify the time zone when events were concentrated and analyze its details."})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(t.h2,{id:"event-list",children:"Event list"}),(0,i.jsxs)(t.p,{children:["You can see the list of Kubernetes events that occurred during a specific time period in the ",(0,i.jsx)(t.img,{alt:"Leader line 2",src:n(39701).Z+"",width:"35",height:"35"})," area. WhaTap stores the event data up to 30 days, allowing you to view and analyze past events."]}),(0,i.jsxs)(t.p,{children:["You can also quickly filter desired events by selecting the event type (",(0,i.jsx)("span",{class:"slow",children:"Warning"}),", ",(0,i.jsx)("span",{class:"k8s-normal",children:"Normal"}),"), or ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Reason"})})," at the top of the list."]}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Item"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Timestamp"})})}),(0,i.jsx)(t.td,{children:"It is the time when the event occurred."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Target"})})}),(0,i.jsx)(t.td,{children:"It is the target on which the event occurred. If Kind is Pod, it indicates the Pod name. If Kind is Node, it indicates the node name."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Namespace"})})}),(0,i.jsx)(t.td,{children:"It is the namespace in which the event occurred."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Kind"})})}),(0,i.jsx)(t.td,{children:"It is the type of object on which the event occurred."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Reason"})})}),(0,i.jsx)(t.td,{children:"It is the reason why the event occurred."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"First event occurrence time"})})}),(0,i.jsx)(t.td,{children:"It is the time when the event was first observed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Event occurrence count"})})}),(0,i.jsx)(t.td,{children:"It is the number of events that occurred continuously over a period of time."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Event content"})})}),(0,i.jsx)(t.td,{children:"It is a specific event details."})]})]})]})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(t.h2,{id:"event-details",children:"Event details"}),(0,i.jsxs)(t.p,{children:["You can check the ",(0,i.jsx)(t.strong,{children:"event details"})," by selecting the ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"details"})})," icon on the left of the event to view in the event list",(0,i.jsx)(t.img,{alt:"detail icon",src:n(56319).Z+"",width:"24",height:"24"}),"."]}),(0,i.jsx)(l,{img:"k8s-kuber-event-details.png",desc:"Kubernetes event detail"})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(t.h3,{id:"suggestions",children:"Suggestions"}),(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Suggestions"})})," tab provides insights into the cause of an event and provides directions for tracing the problem based on the event message that occurred."]}),(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsxs)(t.p,{children:["Currently, only the ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"BackOff"})})," event of the ",(0,i.jsx)("span",{class:"slow",children:"Warning"})," type is provided as a feature."]})]})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(t.h3,{id:"adjacent-logs",children:"Adjacent logs"}),(0,i.jsx)(t.p,{children:"You can see adjacent logs based on the time of occurrence of the selected event. You can set the desired adjacent range by using the time selection button."}),(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Log query role"})}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["If you have ",(0,i.jsx)(t.strong,{children:"Log query role"}),", you can see all adjacent logs."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["If your have no ",(0,i.jsx)(t.strong,{children:"log query role"}),", you can view only the adjacent Kubernetes events."]}),"\n"]}),"\n"]})]})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(t.h3,{id:"event-timeline",children:"Event timeline"}),(0,i.jsxs)(t.p,{children:["It provides all events that occurred from the time the target of the selected event (",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Kind"})}),") was created to the present in a timeline format. This allows you to see the target's event history at a glance."]})]})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function j(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},56319:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcGFnZXZpZXc8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjguMDAwMDAwLCAtMjcxMS4wMDAwMDApIiBmaWxsPSIjMjk2Y2YyIj4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcGFnZXZpZXciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgMzY1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCA0LjAwMDAwMCkiIGlkPSJwYWdldmlldyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwwIEMxOS4wMzUyOTQxLDAgMTkuODkzNDI1NiwwLjc5NzIzMTgzNCAxOS45OTA3OTk5LDEuODA4MTAwOTYgTDIwLDIgTDE5Ljk5OSw1LjMzMyBMMTcuOTk5LDUuMzMzIEwxOCwyIEwyLDIgTDIsMTQgTDEyLDE0IEwxMiwxNiBMMiwxNiBDMC45NjQ3MDU4ODIsMTYgMC4xMDY1NzQzOTQsMTUuMjAyNzY4MiAwLjAwOTIwMDA4MTQyLDE0LjE5MTg5OSBMLTUuMzI5MDcwNTJlLTE1LDE0IEwtNS4zMjkwNzA1MmUtMTUsMiBDLTUuMzI5MDcwNTJlLTE1LDAuOTY0NzA1ODgyIDAuNzk3MjMxODM0LDAuMTA2NTc0Mzk0IDEuODA4MTAwOTYsMC4wMDkyMDAwODE0MiBMMiwwIEwxOCwwIFogTTEzLjE2NjY2NjcsNCBDMTUuNjU2NjY2Nyw0IDE3LjY2NjY2NjcsNi4wMSAxNy42NjY2NjY3LDguNSBDMTcuNjY2NjY2Nyw5LjM4IDE3LjQwNjY2NjcsMTAuMTkgMTYuOTY2NjY2NywxMC44OSBMMTkuODc2NjY2NywxMy43OSBMMTguNDU2NjY2NywxNS4yMSBMMTUuNTQ2NjY2NywxMi4zIEMxNC44NTY2NjY3LDEyLjc0IDE0LjAzNjY2NjcsMTMgMTMuMTU2NjY2NywxMyBDMTAuNjc2NjY2NywxMyA4LjY2NjY2NjY3LDEwLjk5IDguNjY2NjY2NjcsOC41IEM4LjY2NjY2NjY3LDYuMDEgMTAuNjc2NjY2Nyw0IDEzLjE2NjY2NjcsNCBaIE0xMy4xNjY2NjY3LDYgQzExLjc4NjY2NjcsNiAxMC42NjY2NjY3LDcuMTIgMTAuNjY2NjY2Nyw4LjUgQzEwLjY2NjY2NjcsOS44OCAxMS43ODY2NjY3LDExIDEzLjE2NjY2NjcsMTEgQzE0LjU0NjY2NjcsMTEgMTUuNjY2NjY2Nyw5Ljg4IDE1LjY2NjY2NjcsOC41IEMxNS42NjY2NjY3LDcuMTIgMTQuNTQ2NjY2Nyw2IDEzLjE2NjY2NjcsNiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},12979:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII="},39701:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII="},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var s=n(67294);let i={},c=s.createContext(i);function l(e){let t=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);