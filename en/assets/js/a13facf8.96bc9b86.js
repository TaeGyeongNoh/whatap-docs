"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["76226"],{64276:function(e,i,n){n.d(i,{ZP:function(){return c},d$:function(){return a}});var t=n(85893),s=n(50065);let a=[];function d(e){let i={p:"p",...(0,s.a)(),...e.components};return(0,t.jsx)(i.p,{children:"The following explains how to use the user interface (UI) elements commonly used in individual menus of the WhaTap monitoring service. Common UI elements are designed to maintain consistency across menus and allow users to quickly and intuitively access desired features. It also provides a consistent and efficient user experience. This guide helps you understand all the features of the WhaTap monitoring service more easily and use them more efficiently."})}function c(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4634:function(e,i,n){n.d(i,{ZP:function(){return c},d$:function(){return a}});var t=n(85893),s=n(50065);let a=[{value:"Time selector",id:"timeselector",level:2},{value:"Real-time mode",id:"real-time-mode",level:3},{value:"Period setting mode (past time query)",id:"period-setting-mode-past-time-query",level:3},{value:"Selecting the specific date and time",id:"selecting-the-specific-date-and-time",level:3},{value:"Changing with the keyboard",id:"changing-with-the-keyboard",level:4},{value:"Changing in the calendar",id:"changing-in-the-calendar",level:4},{value:"Selecting a predefined query range",id:"selecting-a-predefined-query-range",level:4},{value:"Changing by paste",id:"changing-by-paste",level:4}];function d(e){let i={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Cmdname:a,ImgLang:d,UI:c}=i;return!a&&o("Cmdname",!0),!d&&o("ImgLang",!0),!c&&o("UI",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,t.jsx)(i.h2,{id:"timeselector",children:"Time selector"}),(0,t.jsx)(i.p,{children:"It provides the feature to set dates and times so that users can quickly and accurately analyze the required data. The following guides you to the main features of the time selector and how to use them."})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(i.h3,{id:"real-time-mode",children:"Real-time mode"}),(0,t.jsxs)(i.p,{children:["This mode allows you to check the current status by updating the dashboard data in real time. When the current menu is in ",(0,t.jsx)(i.strong,{children:"live mode"}),", the date and time selection tools at the top of the screen display ",(0,t.jsx)(i.img,{alt:"Pause icon",src:n(21187).Z+"",width:"24",height:"24"})," ",(0,t.jsx)(c,{children:"Live"}),"."]}),(0,t.jsx)(d,{img:"common-ui/ui-timeselector-live.png",desc:"Real-time mode"}),(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Real-time mode"})," collects data at an interval of 5 seconds by default and displays it on the screen. If the time selector displays a green icon (e.g. ",(0,t.jsx)("code",{className:"time",children:(0,t.jsx)(a,{sid:"5_min"})}),"), the data is updated every 5 seconds during the query."]}),(0,t.jsx)(d,{img:"common-ui/ui-timeselector-realtime-range-5m.png",desc:"Real-time mode"}),(0,t.jsxs)(i.p,{children:["For example, if the time selector displays ",(0,t.jsx)("code",{className:"time",children:(0,t.jsx)(a,{sid:"5_min"})}),", the charts or data displayed on the screen is continuously updated every 5 seconds for 5 minutes."]}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"You can change the data query range by selecting the green icon button."}),"\n",(0,t.jsx)(d,{img:"common-ui/ui-timeselector-realtime-range.png",desc:"Real-time mode"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["If you want to stop ",(0,t.jsx)(i.strong,{children:"real-time mode"})," and view the data at a specific time, select ",(0,t.jsx)(i.img,{alt:"Pause icon",src:n(21187).Z+"",width:"24",height:"24"})," or the clock area."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Real-time mode",src:n(24931).Z+"",width:"1016",height:"80"})}),"\n"]}),"\n"]}),(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Real-time mode"})," may not be supported depending on the menus and features provided."]})})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(i.h3,{id:"period-setting-mode-past-time-query",children:"Period setting mode (past time query)"}),(0,t.jsxs)(i.p,{children:["This mode allows users to set the desired start and end times and then retrieve data for the period. To return to ",(0,t.jsx)(i.strong,{children:"live mode"}),", select ",(0,t.jsx)(i.img,{alt:"Play icon",src:n(12998).Z+"",width:"24",height:"24"}),"."]}),(0,t.jsx)(d,{img:"common-ui/ui-timeselector-timerange.png",desc:"Period setting mode"}),(0,t.jsxs)(i.p,{children:["To view a past time, you can set a desired viewing period by clicking ",(0,t.jsx)(i.img,{alt:"Pause icon",src:n(21187).Z+"",width:"24",height:"24"})," or selecting the date and time."]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Period setting mode",src:n(19763).Z+"",width:"812",height:"80"})}),(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["The maximum query period may differ depending on the provided menus and features, and the ",(0,t.jsx)(i.strong,{children:"real-time mode"})," (",(0,t.jsx)(i.img,{alt:"Play icon",src:n(12998).Z+"",width:"24",height:"24"}),") may not be supported."]})})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(i.h3,{id:"selecting-the-specific-date-and-time",children:"Selecting the specific date and time"}),(0,t.jsx)(i.p,{children:"You can select the desired date and time to view the data for the period."})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h4",children:[(0,t.jsx)(i.h4,{id:"changing-with-the-keyboard",children:"Changing with the keyboard"}),(0,t.jsx)(i.p,{children:"You can click the date or time and then use your keyboard to change the time."}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Period setting mode",src:n(19763).Z+"",width:"812",height:"80"})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Press the left or right arrow keys on your keyboard to move through the step of year, month, day, hour, and minute. You can also navigate by pressing ",(0,t.jsx)(i.code,{children:"TAB"})," or ",(0,t.jsx)(i.code,{children:"Shift + TAB"})," keys."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"You can change the date or time to your taste by pressing the up or down arrow key on your keyboard."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Change the time using your keyboard, and then press ",(0,t.jsx)(i.code,{children:"Enter"})," or click outside the time selector. If you press ",(0,t.jsx)(i.code,{children:"ESC"})," while typing, your changes is not applied."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In ",(0,t.jsx)(i.strong,{children:"Period setting mode"}),", you can change the desired query period by selecting ",(0,t.jsx)(i.img,{alt:"Left arrow icon",src:n(35636).Z+"",width:"24",height:"25"})," or ",(0,t.jsx)(i.img,{alt:"Right arrow icon",src:n(22287).Z+"",width:"24",height:"24"}),". At this time, the time unit to be changed is based on the value indicated on the green icon."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h4",children:[(0,t.jsx)(i.h4,{id:"changing-in-the-calendar",children:"Changing in the calendar"}),(0,t.jsxs)(i.p,{children:["Select ",(0,t.jsx)(i.img,{alt:"Calendar icon",src:n(1954).Z+"",width:"24",height:"24"})," on the utmost right of the time selector. A window appears allowing you to select a calendar and time. You can change it by selecting the desired date and time. After changing the date and time, select ",(0,t.jsx)(a,{sid:"BTN06053",className:"uitext"}),"."]}),(0,t.jsx)(d,{img:"common-ui/ui-timeselector-date-picker.png",desc:"Date picker"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["You can change by month by selecting ",(0,t.jsx)(i.img,{alt:"Left arrow icon",src:n(35636).Z+"",width:"24",height:"25"})," or ",(0,t.jsx)(i.img,{alt:"Right arrow icon",src:n(22287).Z+"",width:"24",height:"24"})," at the top of the calendar."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["You can select the desired time from the time selection box at the bottom of the calendar. Select a time and then click ",(0,t.jsx)(a,{sid:"BTN06053",className:"uitext"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["You can change it to the current time by selecting ",(0,t.jsx)(a,{sid:"TTL07425",className:"uitext"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Dates that are grayed out cannot be selected."}),"\n"]}),"\n"]}),(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["If you select ",(0,t.jsx)(i.img,{alt:"WhaTap Docs icon",src:n(34316).Z+"",width:"24",height:"24"}),", the current document page appears."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Maximum query period"})," may differ depending on the menus and features provided."]}),"\n"]}),"\n"]})})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h4",children:[(0,t.jsx)(i.h4,{id:"selecting-a-predefined-query-range",children:"Selecting a predefined query range"}),(0,t.jsx)(i.p,{children:"It provides the feature to select a predefined query range to enable quick and efficient data retrieval. Select the green button in the time selector."}),(0,t.jsx)(d,{img:"common-ui/ui-timeselector-select-custom.png",desc:"Time selector"}),(0,t.jsxs)(i.p,{children:["The options to select from short term to mid term, or a specific date. Select the desired options and then click ",(0,t.jsx)(i.img,{alt:"Left arrow icon",src:n(35636).Z+"",width:"24",height:"25"})," or ",(0,t.jsx)(i.img,{alt:"Right arrow icon",src:n(22287).Z+"",width:"24",height:"24"}),". You can change the time based on the selected query range unit."]}),(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(a,{sid:"recent_time_history",className:"uitext"})," option allows you to select a list of recently searched times."]}),(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"The list of predefined query ranges that can be selected may differ depending on the menus and features provided."})})]}),"\n",(0,t.jsxs)(i.section,{className:"remark-sectionize-h4",children:[(0,t.jsx)(i.h4,{id:"changing-by-paste",children:"Changing by paste"}),(0,t.jsx)(i.p,{children:"After copying the time from the time selector, you can paste it after changing the text value to a desired value."}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"page time",src:n(20674).Z+"",width:"2188",height:"222"})}),(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In the time selector, press ",(0,t.jsx)(i.code,{children:"Ctrl + C"})," to copy from the year, month, day, and time area."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Paste it into the text editor and then change it to your desired date and time."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Copy the changed date and time in the text editor."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Paste by pressing ",(0,t.jsx)(i.code,{children:"Ctrl + V"})," in the time selector."]}),"\n"]}),"\n"]}),(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["For the date and time format that can be pasted, see the following. ",(0,t.jsx)(i.code,{children:"YYYY/MM/DD HH:MM ~ YYYY/MM/DD HH:MM"})]}),"\n",(0,t.jsx)(i.p,{children:"e.g. 2024/12/10 09:00 to 2024/12/11 13:00"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"If the date and time format is incorrect, it is not pasted."}),"\n"]}),"\n"]})})]})]})}function c(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function o(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},92193:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>r,default:()=>I,assets:()=>l,toc:()=>g,frontMatter:()=>o});var t=JSON.parse('{"id":"dotnet/usage-ui","title":"UI usage guide","description":"The following explains how to use common User Interface (UI) components for consistent and efficient user experience across individual menus in the service.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/dotnet/usage-ui.mdx","sourceDirName":"dotnet","slug":"/dotnet/usage-ui","permalink":"/en/dotnet/usage-ui","draft":false,"unlisted":false,"editUrl":"undefined/docs/dotnet/usage-ui.mdx","tags":[],"version":"current","frontMatter":{"id":"usage-ui","title":"UI usage guide","description":"The following explains how to use common User Interface (UI) components for consistent and efficient user experience across individual menus in the service.","keywords":["WhaTap","WhaTap","UI","User Interface"],"isTranslationMissing":false},"sidebar":"dotNetSidebar","previous":{"title":"\uAD00\uB9AC\uD558\uAE30","permalink":"/en/dotnet/agent-manage"},"next":{"title":"Dashboard","permalink":"/en/dotnet/dashboard-intro"}}'),s=n("85893"),a=n("50065"),d=n("64276"),c=n("4634");let o={id:"usage-ui",title:"UI usage guide",description:"The following explains how to use common User Interface (UI) components for consistent and efficient user experience across individual menus in the service.",keywords:["WhaTap","WhaTap","UI","User Interface"],isTranslationMissing:!1},r=void 0,l={},g=[...d.d$,...c.d$];function h(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.ZP,{}),"\n","\n",(0,s.jsx)(c.ZP,{})]})}function I(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},24931:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/ui-timeselector-live2specific-3d2d41134dd924dfe3caa13aa168f9ec.gif"},20674:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/ui-timeselector-paste-d14b243341f7d6a5b2b2ac65c7bcf619.gif"},19763:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/ui-timeselector-timerange-mov-94fce8ed2bfa28721f3907ea0453fc89.gif"},34316:function(e,i,n){n.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOSA4SDVWMThDNSAxOS4xMDQ2IDUuODk1NDMgMjAgNyAyMEgxOVY4Wk0zIDZWMThDMyAyMC4yMDkxIDQuNzkwODYgMjIgNyAyMkgyMVY2SDNaIiBmaWxsPSIjOEI4QjhCIi8+CjxwYXRoIGQ9Ik0zIDhWNUw1IDhIM1oiIGZpbGw9IiM4QjhCOEIiLz4KPHBhdGggZD0iTTEzIDEwSDExVjEySDEzVjEwWiIgZmlsbD0iIzhCOEI4QiIvPgo8cGF0aCBkPSJNMTMgMTNIMTFWMThIMTNWMTNaIiBmaWxsPSIjOEI4QjhCIi8+CjxwYXRoIGQ9Ik01LjcgNEgyMVYySDUuN0M0LjIwODgzIDIgMyAzLjM0MzE1IDMgNUMzIDYuNjU2ODUgNC4yMDg4MyA4IDUuNyA4SDIxVjZINS43QzUuMjAyOTQgNiA0LjggNS41NTIyOSA0LjggNUM0LjggNC40NDc3MiA1LjIwMjk0IDQgNS43IDRaIiBmaWxsPSIjOEI4QjhCIi8+CjxwYXRoIGQ9Ik0yMCA0SDE5LjdDMTkuMjAyOSA0IDE4LjggNC40NDc3MiAxOC44IDVDMTguOCA1LjU1MjI5IDE5LjIwMjkgNiAxOS43IDZIMjBWOEgxOS43QzE4LjIwODggOCAxNyA2LjY1Njg1IDE3IDVDMTcgMy4zNDMxNSAxOC4yMDg4IDIgMTkuNyAySDIwVjRaIiBmaWxsPSIjOEI4QjhCIi8+Cjwvc3ZnPgo="},21187:function(e,i,n){n.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDJINlYyMkg5VjJaTTE4IDJIMTVWMjJIMThWMloiIGZpbGw9IiMwMkI1NDMiLz4KPC9zdmc+Cg=="},12998:function(e,i,n){n.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyQzE3LjUyMjggMiAyMiA2LjQ3NzE1IDIyIDEyQzIyIDE3LjUyMjggMTcuNTIyOCAyMiAxMiAyMkM2LjQ3NzE1IDIyIDIgMTcuNTIyOCAyIDEyQzIgNi40NzcxNSA2LjQ3NzE1IDIgMTIgMlpNMTIgNEM3LjU4MTcyIDQgNCA3LjU4MTcyIDQgMTJDNCAxNi40MTgzIDcuNTgxNzIgMjAgMTIgMjBDMTYuNDE4MyAyMCAyMCAxNi40MTgzIDIwIDEyQzIwIDcuNTgxNzIgMTYuNDE4MyA0IDEyIDRaTTE1IDEyTDEwIDhWMTZMMTUgMTJaIiBmaWxsPSIjMDBCNTQzIi8+Cjwvc3ZnPgo="},1954:function(e,i,n){n.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjY2NjY3IDJDMy4xODY2NyAyIDIuMDEzMzMgMiAyLjAxMzMzIDJMMiAyMkMyIDIyIDMuMTg2NjcgMjIgNC42NjY2NyAyMkgyMkMyMiAyMiAyMiAyMC44IDIyIDE5LjMzMzNWNC42NjY2N0MyMiAzLjIgMjIgMiAyMiAyTDQuNjY2NjcgMlpNNCAyMFY2SDIwVjIwSDRaTTYgOEgxMFYxMkg2VjhaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo="},35636:function(e,i,n){n.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI1cHgiIHZpZXdCb3g9IjAgMCAyNCAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtbGVmdDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NDQuMDAwMDAwLCAtMTYzLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iZGlyZWN0aW9uYWwtaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMTE5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWxlZnQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwNC4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMDAwMDAwLCAzLjAwMDAwMCkiIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjU1NzM5MzUsMTcuNDYzNTM2NiBMMC4xNDMxNzk5NCwxNi4wNDkzMjMgTDcuMjE0MTc5OTQsOC45Nzc5NzM4MyBMMC4xNDMxNzk5NCwxLjkwNzE4NzQgTDEuNTU3MzkzNSwwLjQ5Mjk3MzgzNCBMMTAuMDQyNjc0OSw4Ljk3ODI1NTIxIEwxLjU1NzM5MzUsMTcuNDYzNTM2NiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjA5MjkyNywgOC45NzgyNTUpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTUuMDkyOTI3LCAtOC45NzgyNTUpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},22287:function(e,i,n){n.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxMnB4O2hlaWdodDogMTJweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcmlnaHQ8L3RpdGxlPiAtLT4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc0MC4wMDAwMDAsIC0xNjQuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICAgIDxnIGlkPSJkaXJlY3Rpb25hbC1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxMTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcmlnaHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwMC4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCAzLjAwMDAwMCkiIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjU1NzM5MzUsMTcuNDYzNTM2NiBMMC4xNDMxNzk5NCwxNi4wNDkzMjMgTDcuMjE0MTc5OTQsOC45Nzc5NzM4MyBMMC4xNDMxNzk5NCwxLjkwNzE4NzQgTDEuNTU3MzkzNSwwLjQ5Mjk3MzgzNCBMMTAuMDQyNjc0OSw4Ljk3ODI1NTIxIEwxLjU1NzM5MzUsMTcuNDYzNTM2NiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},50065:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return d}});var t=n(67294);let s={},a=t.createContext(s);function d(e){let i=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);