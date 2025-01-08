"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["61685"],{4484:function(e,i,s){s.d(i,{ZP:function(){return o},d$:function(){return r}});var n=s(85893),a=s(50065);let r=[];function t(e){let i={a:"a",admonition:"admonition",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["On the upper right of each widget, select ",(0,n.jsx)(i.img,{alt:"Display Detail icon",src:s(17181).Z+"",width:"24",height:"24"}),". Then you can see the widget data in full screen."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["If you select ",(0,n.jsx)(i.img,{alt:"Configuration icon",src:s(45522).Z+"",width:"20",height:"20"})," on the upper right of the widget, the chart configuration screen appears. You can set the options to display on the chart."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Depending on the screen size of the web browser, the icon shape on the upper right of a widget may differ. If you select ",(0,n.jsx)(i.img,{alt:"More icon",src:s(1675).Z+"",width:"24",height:"24"}),", the additional icons appear."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["For more information about the widget configuration, see ",(0,n.jsx)(i.a,{href:"dashboard-widget-setting",children:"the following"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["For more information on how to use the time selector, see ",(0,n.jsx)(i.a,{href:"usage-ui#timeselector",children:"the following"}),"."]}),"\n"]}),"\n"]})})}function o(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},75909:function(e,i,s){s.r(i),s.d(i,{metadata:()=>n,contentTitle:()=>l,default:()=>M,assets:()=>c,toc:()=>d,frontMatter:()=>o});var n=JSON.parse('{"id":"browser/dashboard","title":"Browser Monitoring Dashboard","description":"This dashboard allows you to check statistical data in real time.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/browser/dashboard.mdx","sourceDirName":"browser","slug":"/browser/dashboard","permalink":"/en/browser/dashboard","draft":false,"unlisted":false,"editUrl":"undefined/docs/browser/dashboard.mdx","tags":[],"version":"current","frontMatter":{"id":"dashboard","title":"Browser Monitoring Dashboard","description":"This dashboard allows you to check statistical data in real time.","keywords":["Browser Monitoring","Dashboard"],"isTranslationMissing":false},"sidebar":"rumsSidebar","previous":{"title":"UI usage guide","permalink":"/en/browser/usage-ui"},"next":{"title":"Browser Error","permalink":"/en/browser/browser-error-dashboard"}}'),a=s("85893"),r=s("50065"),t=s("4484");let o={id:"dashboard",title:"Browser Monitoring Dashboard",description:"This dashboard allows you to check statistical data in real time.",keywords:["Browser Monitoring","Dashboard"],isTranslationMissing:!1},l=void 0,c={},d=[...t.d$,{value:"Page Load Timeline",id:"pageloadtimeline",level:2},{value:"Page loading time and load count",id:"page-loading-time-and-load-count",level:2},{value:"Page Load Hitmap",id:"page-load-hitmap",level:2},{value:"Error counts per page and message",id:"error-counts-per-page-and-message",level:2},{value:"User session count and user sessions",id:"user-session-count-and-user-sessions",level:2},{value:"Average AJAX Response Time TopN",id:"average-ajax-response-time-topn",level:2},{value:"AJAX failure count",id:"ajax-failure-count",level:2},{value:"AJAX HITMAP",id:"ajax-hitmap",level:2},{value:"Hitmap Chart",id:"hitmap-chart",level:3},{value:"AJAX Event Detailed Information",id:"ajax-event-detailed-information",level:3},{value:"Page load times and counts per region",id:"page-load-times-and-counts-per-region",level:2},{value:"Page Load By Browser",id:"page-load-by-browser",level:2},{value:"Core Web Vitals Metric",id:"core-web-vitals-metric",level:2},{value:"Largest Contentful Paint",id:"largest-contentful-paint",level:3},{value:"First Input Delay",id:"first-input-delay",level:3},{value:"Cumulative Layout Shift",id:"cumulative-layout-shift",level:3}];function g(e){let i={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",section:"section",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Cmdname:n,ImgLang:o,Link:l}=i;return!n&&h("Cmdname",!0),!o&&h("ImgLang",!0),!l&&h("Link",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["Home > Select Project > ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Dashboard"})})," > ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Browser Monitoring Dashboard"})})]}),"\n",(0,a.jsx)(o,{img:"browser-dashboard.png",desc:"Browser monitoring dashboard"}),"\n",(0,a.jsx)(i.p,{children:"This is a dashboard where you can search real-time and historical data. Monitor the user experiences and performances of the browser applications. It provides data from various aspects, such as performance metrics, browser, and region, so that you can quickly identify health anomalies. It also provides the performance data for page load events and AJAX events."}),"\n",(0,a.jsx)(i.p,{children:"This dashboard organizes real-time statistical data into chart-type widgets. Statistical data based on the page load and AJAX data generated by the web browser can be checked in real time."}),"\n","\n",(0,a.jsx)(t.ZP,{}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(i.h2,{id:"pageloadtimeline",children:"Page Load Timeline"}),(0,a.jsx)(o,{img:"browser-pageload-timeline.png",desc:"Page load timeline"}),(0,a.jsx)(i.p,{children:"It provides the overall page loading performances for the browser applications. It displays the page load times and the average times for each load step. You can see the overall performance of your browser applications through this."}),(0,a.jsx)(i.p,{children:"For detailed descriptions of each step, see the following."}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Redirect"})}),": The average amount of redirection time spent by the browser when loading web pages."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Caching"})}),": The average time spent by a browser to search cached resources while loading web pages."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"DNS Lookup"})}),": The average time spent by a browser to look up website domains while loading web pages."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"TCP Connection"})}),": The average TCP handshake time spent by a browser when loading web pages."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Response Wait"})}),": The average time spent from the browser sending network requests while fetching web pages to the first byte receptions from the server."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Download"})}),": The average time spent for a browser to download resources from the server while loading web pages."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Rendering"})}),": Average time spent rendering resources downloaded from the server to the screen and completing page load events."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Load Time"})}),": The average time spent for a browser to fully load web pages."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Front-End"})}),": Average time taken to initially render web pages."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Back-End"})}),": Average time taken to download resources by page load requests."]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(i.h2,{id:"page-loading-time-and-load-count",children:"Page loading time and load count"}),(0,a.jsx)(o,{img:"browser-pageload-time-num.png",desc:"Page load widget"}),(0,a.jsx)(i.p,{children:"When end users access the web pages via the browser application, they can see in real time how long and how often each page takes to load. With this information, the developers can identify high-traffic and slow-loading pages and prioritize which pages need speed improvements."}),(0,a.jsx)(i.p,{children:"For example, if a page accessed by many users takes long time to load, the developers can focus on improving the performance of the page. On the contrary, if a page with slow loading speed has a low traffic, it can be more efficient to invest more development resources in other pages rather than improving the page."}),(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsxs)(i.p,{children:["To check the overall status, select ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Page Group"})})," in the upper right corner. In the metrics list, select ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"All"})}),"."]})}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Average Page Load Time TopN"})})}),"\n",(0,a.jsx)(i.p,{children:"It displays the average page load times by page group. The horizontal bar chart displays the average load times for each page group during the lookup period. Only the top 8 are displayed."}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Page Load Count TopN"})})}),"\n",(0,a.jsx)(i.p,{children:"Page load counts are displayed by the page group. The horizontal bar chart displays the sum of loads for each page group during the lookup period. Only the top 8 are displayed."}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(i.h2,{id:"page-load-hitmap",children:"Page Load Hitmap"}),(0,a.jsx)(o,{img:"browser-pageload-hitmap.png",desc:"Page load hitmap"}),(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Page Load Hitmap"})})," is a distribution chart of response times for page loads over time."]}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"The horizontal axis is the end time of the page load event, and the vertical axis is the elapsed time of the page load event."}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Normal page load events are displayed in light blue \u2192 blue \u2192 Indigo in order."}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Erroneous page load events are displayed in yellow \u2192 orange \u2192 red in order. The erroneous page load event occurs when a browser error is encountered while loading pages."}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Drag a specific area of the chart to see the detailed information. The ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Page Load Detail"})})," window appears. You can see the detailed information of the load event in the dragged area. For more information, see ",(0,a.jsx)(i.a,{href:"analyze-pageload#pageload-details",children:"the following"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(i.h2,{id:"error-counts-per-page-and-message",children:"Error counts per page and message"}),(0,a.jsx)(o,{img:"browser-error-num.png",desc:"Error count"}),(0,a.jsx)(i.p,{children:"It displays the browser errors encountered by end users while using the browser applications. The errors are displayed for each page and error message. Through this, you can quickly identify the pages where errors usually occur and the content of each error."}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Page Error Count"})})}),"\n",(0,a.jsx)(i.p,{children:"It displays the numbers of all errors on each page. If you hover your mouse over the chart, you can see the number of errors in the page group."}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Error Counts per Error Message"})})}),"\n",(0,a.jsx)(i.p,{children:"It displays the messages for source and AJAX errors, excluding console errors. The horizontal bar chart displays the sum of errors for each error message during the lookup period. Only the top 8 are displayed."}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(i.h2,{id:"user-session-count-and-user-sessions",children:"User session count and user sessions"}),(0,a.jsx)(o,{img:"browser-user-session.png",desc:"User sessions"}),(0,a.jsx)(i.p,{children:"You can monitor the numbers of user sessions accessing the browser applications in real time. You can see the overall usage of your browser applications through this. A sharp increase in the session count indicates an increase in the number of users. On the other hand, if the session count decreases, it is likely that many users are no longer using the application or had uncomfortable experiences."}),(0,a.jsx)(i.p,{children:"If you use the wired session widget and other widgets together, you can see a comprehensive view of the application usage."}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"User Session Count"})})}),"\n",(0,a.jsx)(i.p,{children:"It displays the total number of non-overlapping user sessions based on the lookup time."}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"User Sessions"})})}),"\n",(0,a.jsxs)(i.p,{children:["It displays the numbers of non-overlapping user sessions every 5 seconds, 5 minutes, and 1 hour. Select ",(0,a.jsx)(i.img,{alt:"More icon",src:s(1675).Z+"",width:"24",height:"24"})," on the upper right of the widget, and then select Change Metric. You can select a desired time interval."]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(i.h2,{id:"average-ajax-response-time-topn",children:"Average AJAX Response Time TopN"}),(0,a.jsx)(o,{img:"browser-ajax-response-time.png",desc:"AJAX response time"}),(0,a.jsxs)(i.p,{children:["Browser applications frequently send and receive data for rendering via AJAX. On pages where AJAX events continue to occur after page loads, the load of AJAX can be used as an important metric for user experience to browser applications. The ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Average AJAX Response Time TopN"})})," widget displays the average AJAX response times when end users are using the browser applications."]}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["It provides charts for each AJAX request path. You can select and check the charts by the request host, request page, and overall average. Select ",(0,a.jsx)(i.img,{alt:"More icon",src:s(1675).Z+"",width:"24",height:"24"})," on the upper right of the widget, and then select Change Metric. You can change the chart data."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["By default, the top 10 data appears based on the lookup time. To change the data count, select ",(0,a.jsx)(i.img,{alt:"More icon",src:s(1675).Z+"",width:"24",height:"24"})," on the upper right of the widget and then select ",(0,a.jsx)(i.img,{alt:"Display Detail icon",src:s(17181).Z+"",width:"24",height:"24"}),". If you select the Top N button on the upper right of the screen, the option to change the count appears."]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(i.h2,{id:"ajax-failure-count",children:"AJAX failure count"}),(0,a.jsx)(o,{img:"browser-ajax-fail-count.png",desc:"AJAX fail count"}),(0,a.jsx)(i.p,{children:"The AJAX error indicates that the status code is 400 or higher or the request has been canceled because the request itself could not be executed. It displays the number of AJAX errors occurring in the browser applications by classifying them by the fetch or XHR type."})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(i.h2,{id:"ajax-hitmap",children:"AJAX HITMAP"}),(0,a.jsx)(i.p,{children:"AJAX requests from browser applications are provided in the form of a hitmap chart, and the detailed information on each request can be viewed in a table form. By analyzing each AJAX, you can pinpoint the cause of the performance anomaly."}),(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsxs)(i.p,{children:["For more information about ",(0,a.jsx)(n,{sid:"ajaxAnalytics",className:"uitext"}),", see ",(0,a.jsx)(l,{to:"analyze-ajax-hitmap",children:"the following"}),"."]})})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(i.h3,{id:"hitmap-chart",children:"Hitmap Chart"}),(0,a.jsx)(o,{img:"browser-ajax-hitmap.png",desc:"AJAX hitmap"}),(0,a.jsx)(i.p,{children:"The AJAX hitmap chart displays a distribution of the response times of AJAX requests over time."}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"The horizontal axis is the AJAX end time, and the vertical axis is the AJAX load time."}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Normal AJAXs are displayed in light blue \u2192 blue \u2192 Indigo in order."}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Erroneous AJAXs are displayed in yellow \u2192 orange \u2192 red in order. Their state code is 400. To see only the errors on the chart, select ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Error"})})," on the upper right of the widget."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["If ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Y Axis Auto"})})," is active, the maximum value of the Y axis automatically changed depending on the distribution. To fix the Y-axis, select ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Y-Axis Auto"})})," to disable it."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Select ",(0,a.jsx)(i.img,{alt:"Up arrow icon",src:s(97429).Z+"",width:"24",height:"24"})," or ",(0,a.jsx)(i.img,{alt:"Down arrow icon",src:s(42128).Z+"",width:"24",height:"24"})," to move the chart location up or down."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Drag a specific area of the chart to see the detailed information. To display the AJAX event list and details of the dragged area, the ",(0,a.jsx)(n,{sid:"ajax",className:"uitext"})," ",(0,a.jsx)(n,{sid:"analysis",className:"uitext"})," window appears."]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(i.h3,{id:"ajax-event-detailed-information",children:"AJAX Event Detailed Information"}),(0,a.jsx)(o,{img:"browser-analysis-ajax-hitmap-details.png",desc:"AJAX Event Details"}),(0,a.jsxs)(i.p,{children:["If you select each item in the ",(0,a.jsx)(n,{sid:"ajax",className:"uitext"})," ",(0,a.jsx)(n,{sid:"analysis",className:"uitext"})," window, the ",(0,a.jsx)(n,{sid:"ajax",className:"uitext"})," ",(0,a.jsx)(n,{sid:"info",className:"uitext"})," window appears on the right to display the detailed information."]}),(0,a.jsxs)(i.p,{children:["To see only the AJAX list that has errors, on the upper left of the ",(0,a.jsx)(n,{sid:"ajax",className:"uitext"})," ",(0,a.jsx)(n,{sid:"info",className:"uitext"})," window, select from the ",(0,a.jsx)(n,{sid:"error",className:"uitext"})," ",(0,a.jsx)(n,{sid:"all",className:"uitext"})," choose list."]}),(0,a.jsx)(i.p,{children:"Each AJAX has the following information:"}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"AJAX URL"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"URL of the page that requested AJAX"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Browser, device, and OS information"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Error message"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Regional information"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"AJAX detailed timing"}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(i.h2,{id:"page-load-times-and-counts-per-region",children:"Page load times and counts per region"}),(0,a.jsx)(o,{img:"browser-pageload-map.png",desc:"Pageload map"}),(0,a.jsx)(i.p,{children:"It displays the page load times and counts by region for browser applications in the map chart and table. You can easily compare the website performances for each region. The page load time displays the legend every 2 seconds, and the page load count displays the legend at 50, 75, 90, and 95 percentile intervals."}),(0,a.jsx)(i.p,{children:"The widget displays the countries with the highest page load based on the search time."}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"You can scroll the mouse wheel or use the slider to zoom in or out on the map."}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["To view the world map, select ",(0,a.jsx)(i.img,{alt:"Earth icon",src:s(29575).Z+"",width:"50",height:"50"}),". You can select a country to see its regional data."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["To see the data in a table format, select ",(0,a.jsx)(i.img,{alt:"Table icon",src:s(4787).Z+"",width:"50",height:"50"}),". To return to the map format, select ",(0,a.jsx)(i.img,{alt:"Map icon",src:s(15378).Z+"",width:"24",height:"24"}),"."]}),"\n",(0,a.jsx)(o,{img:"browser-pageload-map-table.png",desc:"Pageload table"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"In case of regional maps, data appears based on the upper administrative district. (Korea: province or metropolitan city)"}),"\n"]}),"\n"]}),(0,a.jsx)(i.admonition,{type:"info",children:(0,a.jsxs)(i.p,{children:["This site or product includes IP2Location LITE data available from ",(0,a.jsx)(i.a,{href:"https://lite.ip2location.com",children:"https://lite.ip2location.com"}),"."]})})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(i.h2,{id:"page-load-by-browser",children:"Page Load By Browser"}),(0,a.jsx)(o,{img:"browser-pageload-by-browser.png",desc:"Pageload by browser"}),(0,a.jsxs)(i.p,{children:["It provides the page load times and page load counts for browser applications. You can easily compare the performances of different browsers. To change the data to ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Page Load Time"})})," or ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.em,{children:"Page Load Count"})}),", select ",(0,a.jsx)(i.img,{alt:"More icon",src:s(1675).Z+"",width:"24",height:"24"})," on the upper right of the widget, and then select Metrics."]})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(i.h2,{id:"core-web-vitals-metric",children:"Core Web Vitals Metric"}),(0,a.jsx)(i.p,{children:"Core web vitals are three important metrics related to the website performance among various metrics that affect user experience as defined by Google. Metrics are displayed differently depending on the website loading and interaction with users."}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Largest Contentful Paint"}),": A metric that measures the time loaded for the largest content element on your website."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"First Input Delay"}),": Time taken between the website loading and user's first input."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Cumulative Layout Shift"}),": A metric of how often the layout changes while the website is loaded."]}),"\n"]}),"\n"]}),(0,a.jsx)(i.p,{children:"These measurements play an important role in evaluating and improving the website performance. Understanding and measuring the core web vitals metrics is very useful to improve user experiences and optimizing the website performance."})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(i.h3,{id:"largest-contentful-paint",children:"Largest Contentful Paint"}),(0,a.jsx)(o,{img:"browser-lcp-widget.png",desc:"LCP"}),(0,a.jsx)(i.p,{children:"It displays the average maximum contentful paint time for each page group. It displays the averages of maximum contentful paint times for the top 8 groups of each page group during the lookup time in a horizontal bar chart."})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(i.h3,{id:"first-input-delay",children:"First Input Delay"}),(0,a.jsx)(o,{img:"browser-cls-widget.png",desc:"FID"}),(0,a.jsx)(i.p,{children:"It displays the average initial input delay times for each page group. If you hover your mouse over the chart, the time value for the page group appears."})]}),"\n",(0,a.jsxs)(i.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(i.h3,{id:"cumulative-layout-shift",children:"Cumulative Layout Shift"}),(0,a.jsx)(o,{img:"browser-fid-widget.png",desc:"CLS"}),(0,a.jsx)(i.p,{children:"It displays the cumulative layout values for each page group. If you hover your mouse over the chart, the value for the page group appears."})]})]})}function M(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}function h(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},42128:function(e,i,s){s.d(i,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxMnB4O2hlaWdodDogMTJweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZG93bjwvdGl0bGU+IC0tPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTE2NC4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1kb3duIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTEuMzAwMDAwLCA0NC4zMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgOC4wMDAwMDApIiBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS40MTQyMTM1NiwxMy40MzUwMjg4IEw0LDEyLjAyMDgxNTMgTDExLjA3MSw0Ljk0OTQ2NjA5IEw0LC0yLjEyMTMyMDM0IEw1LjQxNDIxMzU2LC0zLjUzNTUzMzkxIEwxMy44OTk0OTQ5LDQuOTQ5NzQ3NDcgTDUuNDE0MjEzNTYsMTMuNDM1MDI4OCBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljk0OTc0NywgNC45NDk3NDcpIHNjYWxlKDEsIC0xKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC04Ljk0OTc0NywgLTQuOTQ5NzQ3KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},15378:function(e,i,s){s.d(i,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC41IDNMMjAuMzQgMy4wM0wxNSA1LjFMOSAzTDMuMzYgNC45QzMuMTUgNC45NyAzIDUuMTUgMyA1LjM4VjIwLjVDMyAyMC43OCAzLjIyIDIxIDMuNSAyMUwzLjY2IDIwLjk3TDkgMTguOUwxNSAyMUwyMC42NCAxOS4xQzIwLjg1IDE5LjAzIDIxIDE4Ljg1IDIxIDE4LjYyVjMuNUMyMSAzLjIyIDIwLjc4IDMgMjAuNSAzWk0xMCA1LjQ3TDE0IDYuODdWMTguNTNMMTAgMTcuMTNWNS40N1pNNSA2LjQ2TDggNS40NVYxNy4xNUw1IDE4LjMxVjYuNDZaTTE5IDE3LjU0TDE2IDE4LjU1VjYuODZMMTkgNS43VjE3LjU0WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K"},29575:function(e,i,s){s.d(i,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC45Nzk1IDQuMTY2OTlDMTMuNDc5NSA0LjE2Njk5IDQuMTY2OTkgMTMuNTAwMyA0LjE2Njk5IDI1LjAwMDNDNC4xNjY5OSAzNi41MDAzIDEzLjQ3OTUgNDUuODMzNyAyNC45Nzk1IDQ1LjgzMzdDMzYuNTAwMyA0NS44MzM3IDQ1LjgzMzcgMzYuNTAwMyA0NS44MzM3IDI1LjAwMDNDNDUuODMzNyAxMy41MDAzIDM2LjUwMDMgNC4xNjY5OSAyNC45Nzk1IDQuMTY2OTlWNC4xNjY5OVpNMzkuNDE3IDE2LjY2N0gzMy4yNzEyQzMyLjYwNDUgMTQuMDYyOCAzMS42NDYyIDExLjU2MjggMzAuMzk2MiA5LjI1MDMzQzM0LjIyOTUgMTAuNTYyOCAzNy40MTcgMTMuMjI5NSAzOS40MTcgMTYuNjY3VjE2LjY2N1pNMjUuMDAwMyA4LjQxNjk5QzI2LjcyOTUgMTAuOTE3IDI4LjA4MzcgMTMuNjg3OCAyOC45Nzk1IDE2LjY2N0gyMS4wMjEyQzIxLjkxNyAxMy42ODc4IDIzLjI3MTIgMTAuOTE3IDI1LjAwMDMgOC40MTY5OVY4LjQxNjk5Wk04Ljg3NTMzIDI5LjE2N0M4LjU0MTk5IDI3LjgzMzcgOC4zMzM2NiAyNi40Mzc4IDguMzMzNjYgMjUuMDAwM0M4LjMzMzY2IDIzLjU2MjggOC41NDE5OSAyMi4xNjcgOC44NzUzMyAyMC44MzM3SDE1LjkxN0MxNS43NTAzIDIyLjIwODcgMTUuNjI1MyAyMy41ODM3IDE1LjYyNTMgMjUuMDAwM0MxNS42MjUzIDI2LjQxNyAxNS43NTAzIDI3Ljc5MiAxNS45MTcgMjkuMTY3SDguODc1MzNWMjkuMTY3Wk0xMC41ODM3IDMzLjMzMzdIMTYuNzI5NUMxNy4zOTYyIDM1LjkzNzggMTguMzU0NSAzOC40Mzc4IDE5LjYwNDUgNDAuNzUwM0MxNS43NzEyIDM5LjQzNzggMTIuNTgzNyAzNi43OTIgMTAuNTgzNyAzMy4zMzM3VjMzLjMzMzdaTTE2LjcyOTUgMTYuNjY3SDEwLjU4MzdDMTIuNTgzNyAxMy4yMDg3IDE1Ljc3MTIgMTAuNTYyOCAxOS42MDQ1IDkuMjUwMzNDMTguMzU0NSAxMS41NjI4IDE3LjM5NjIgMTQuMDYyOCAxNi43Mjk1IDE2LjY2N1YxNi42NjdaTTI1LjAwMDMgNDEuNTgzN0MyMy4yNzEyIDM5LjA4MzcgMjEuOTE3IDM2LjMxMjggMjEuMDIxMiAzMy4zMzM3SDI4Ljk3OTVDMjguMDgzNyAzNi4zMTI4IDI2LjcyOTUgMzkuMDgzNyAyNS4wMDAzIDQxLjU4MzdWNDEuNTgzN1pNMjkuODc1MyAyOS4xNjdIMjAuMTI1M0MxOS45Mzc4IDI3Ljc5MiAxOS43OTIgMjYuNDE3IDE5Ljc5MiAyNS4wMDAzQzE5Ljc5MiAyMy41ODM3IDE5LjkzNzggMjIuMTg3OCAyMC4xMjUzIDIwLjgzMzdIMjkuODc1M0MzMC4wNjI4IDIyLjE4NzggMzAuMjA4NyAyMy41ODM3IDMwLjIwODcgMjUuMDAwM0MzMC4yMDg3IDI2LjQxNyAzMC4wNjI4IDI3Ljc5MiAyOS44NzUzIDI5LjE2N1YyOS4xNjdaTTMwLjM5NjIgNDAuNzUwM0MzMS42NDYyIDM4LjQzNzggMzIuNjA0NSAzNS45Mzc4IDMzLjI3MTIgMzMuMzMzN0gzOS40MTdDMzcuNDE3IDM2Ljc3MTIgMzQuMjI5NSAzOS40Mzc4IDMwLjM5NjIgNDAuNzUwM1Y0MC43NTAzWk0zNC4wODM3IDI5LjE2N0MzNC4yNTAzIDI3Ljc5MiAzNC4zNzUzIDI2LjQxNyAzNC4zNzUzIDI1LjAwMDNDMzQuMzc1MyAyMy41ODM3IDM0LjI1MDMgMjIuMjA4NyAzNC4wODM3IDIwLjgzMzdINDEuMTI1M0M0MS40NTg3IDIyLjE2NyA0MS42NjcgMjMuNTYyOCA0MS42NjcgMjUuMDAwM0M0MS42NjcgMjYuNDM3OCA0MS40NTg3IDI3LjgzMzcgNDEuMTI1MyAyOS4xNjdIMzQuMDgzN1YyOS4xNjdaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo="},4787:function(e,i,s){s.d(i,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NS44MzM3IDQuMTY2OTlINC4xNjY5OVYxNi42NjdWMjAuODMzN1Y0NS44MzM3SDQ1LjgzMzdWMjAuODMzN1YxNi42NjdWNC4xNjY5OVpNOC4zMzM2NiAyOS4xNjdWMjAuODMzN0gxNi42NjdWMjkuMTY3SDguMzMzNjZaTTguMzMzNjYgMzMuMzMzN1Y0MS42NjdIMTYuNjY3VjMzLjMzMzdIOC4zMzM2NlpNMjAuODMzNyAzMy4zMzM3VjQxLjY2N0gyOS4xNjdWMzMuMzMzN0gyMC44MzM3Wk0zMy4zMzM3IDMzLjMzMzdWNDEuNjY3SDQxLjY2N1YzMy4zMzM3SDMzLjMzMzdaTTQxLjY2NyAyOS4xNjdIMzMuMzMzN1YyMC44MzM3SDQxLjY2N1YyOS4xNjdaTTI5LjE2NyAyOS4xNjdIMjAuODMzN1YyMC44MzM3SDI5LjE2N1YyOS4xNjdaTTQxLjY2NyAxNi42NjdIMzMuMzMzN0gyOS4xNjdIMjAuODMzN0gxNi42NjdIOC4zMzM2NlY4LjMzMzY2SDQxLjY2N1YxNi42NjdaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo="},17181:function(e,i,s){s.d(i,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZnVsbHNjcmVlbjwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjQuMDAwMDAwLCAtMzI0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iZGlyZWN0aW9uYWwtaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMTE5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWZ1bGxzY3JlZW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNC4wMDAwMDAsIDIwNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjAwMDAwMCwgMy4wMDAwMDApIiBpZD0iSWNvbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLDEyIEwyLDE2IEw2LDE2IEw2LDE4IEwtMS41ODA5NTc1OWUtMTMsMTggTC0xLjU4MDk1NzU5ZS0xMywxMiBMMiwxMiBaIE0xOCwxMiBMMTgsMTggTDEyLDE4IEwxMiwxNiBMMTYsMTYgTDE2LDEyIEwxOCwxMiBaIE02LDIuNDg2ODk5NThlLTE0IEw2LDIgTDIsMiBMMiw2IEwtMS41ODA5NTc1OWUtMTMsNiBMLTEuNTgwOTU3NTllLTEzLDMuNjYwOTYwNDJlLTE0IEwtMS41ODA5NTc1OWUtMTMsMy42NjA5NjA0MmUtMTQgTDYsMi40ODY4OTk1OGUtMTQgWiBNMTgsLTMuMTk3NDQyMzFlLTE0IEwxOCw2IEwxNiw2IEwxNiwyIEwxMiwyIEwxMiwtMy4xOTc0NDIzMWUtMTQgTDE4LC0zLjE5NzQ0MjMxZS0xNCBMMTgsLTMuMTk3NDQyMzFlLTE0IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},1675:function(e,i,s){s.d(i,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtbW9yZS12ZXJ0aWNhbDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjQuMDAwMDAwLCAtMjk1MS4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtbW9yZS12ZXJ0aWNhbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI0LjAwMDAwMCwgNjA1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMy4wMDAwMDApIiBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMiwxNCBDMy4xMDQ1Njk1LDE0IDQsMTQuODk1NDMwNSA0LDE2IEM0LDE3LjEwNDU2OTUgMy4xMDQ1Njk1LDE4IDIsMTggQzAuODk1NDMwNSwxOCAwLDE3LjEwNDU2OTUgMCwxNiBDMCwxNC44OTU0MzA1IDAuODk1NDMwNSwxNCAyLDE0IFogTTIsNyBDMy4xMDQ1Njk1LDcgNCw3Ljg5NTQzMDUgNCw5IEM0LDEwLjEwNDU2OTUgMy4xMDQ1Njk1LDExIDIsMTEgQzAuODk1NDMwNSwxMSAwLDEwLjEwNDU2OTUgMCw5IEMwLDcuODk1NDMwNSAwLjg5NTQzMDUsNyAyLDcgWiBNMiwwIEMzLjEwNDU2OTUsMCA0LDAuODk1NDMwNSA0LDIgQzQsMy4xMDQ1Njk1IDMuMTA0NTY5NSw0IDIsNCBDMC44OTU0MzA1LDQgMCwzLjEwNDU2OTUgMCwyIEMwLDAuODk1NDMwNSAwLjg5NTQzMDUsMCAyLDAgWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},45522:function(e,i,s){s.d(i,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmb3VuZGF0aW9uPSJbb2JqZWN0IE9iamVjdF0iIGNsYXNzPSJJbm5lckljb25zdHlsZWRfX0ljb24tY2gtZnJvbnRfX3NjLTE5N2g1YmItMCBka0RyT3IiIGRlZmF1bHRvcGFjaXR5PSIxIiBob3ZlcmVkb3BhY2l0eT0iMSIgbWFyZ2ludG9wPSIwIiBtYXJnaW5yaWdodD0iMCIgbWFyZ2luYm90dG9tPSIwIiBtYXJnaW5sZWZ0PSIwIiB3aXRodGhlbWU9InRydWUiPjxwYXRoIGZpbGw9IiM3OTc5NzkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS44MzM1NCAxMC4wMDAxQzUuODMzNTQgNy42OTkzOSA3LjY5ODgxIDUuODMzNDIgMTAuMDAwMiA1LjgzMzQyQzEyLjMwMDkgNS44MzM0MiAxNC4xNjY5IDcuNjk5MzkgMTQuMTY2OSAxMC4wMDAxQzE0LjE2NjkgMTIuMzAwOCAxMi4zMDA5IDE0LjE2NjcgMTAuMDAwMiAxNC4xNjY3QzcuNjk4ODEgMTQuMTY2NyA1LjgzMzU0IDEyLjMwMDggNS44MzM1NCAxMC4wMDAxWk0xOC4zMzM1IDExLjI1MDFWOC43NTAwOEwxNi40NzUyIDguNDQwMDhDMTYuMzA5NCA3Ljc1NTA4IDE2LjAzOTQgNy4xMTE3NSAxNS42Nzk0IDYuNTI2NzVMMTYuNzc2IDQuOTkwOTFMMTUuMDA4NSAzLjIyMzQxTDEzLjQ3MjcgNC4zMjA5MUMxMi44ODc3IDMuOTYwOTEgMTIuMjQ1MiAzLjY5MDkxIDExLjU2MDIgMy41MjUwOEwxMS4yNTAyIDEuNjY2NzVIOC43NTAyTDguNDQwMiAzLjUyNTA4QzcuNzU1MiAzLjY5MDkxIDcuMTExODcgMy45NjA5MSA2LjUyNjg3IDQuMzIwOTFMNC45OTEwNCAzLjIyMzQxTDMuMjIzNTQgNC45OTA5MUw0LjMyMDIgNi41MjY3NUMzLjk2MTA0IDcuMTExNzUgMy42OTAyIDcuNzU1MDggMy41MjUyIDguNDQwMDhMMS42NjY4NyA4Ljc1MDA4VjExLjI1MDFMMy41MjUyIDExLjU2MDFDMy42OTAyIDEyLjI0NTEgMy45NjEwNCAxMi44ODg0IDQuMzIwMiAxMy40NzM0TDMuMjIzNTQgMTUuMDA5Mkw0Ljk5MTA0IDE2Ljc3NjdMNi41MjY4NyAxNS42NzkyQzcuMTExODcgMTYuMDM4NCA3Ljc1NTIgMTYuMzA5MiA4LjQ0MDIgMTYuNDc1MUw4Ljc1MDIgMTguMzMzNEgxMS4yNTAyTDExLjU2MDIgMTYuNDc1MUMxMi4yNDUyIDE2LjMwOTIgMTIuODg3NyAxNi4wMzg0IDEzLjQ3MjcgMTUuNjc5MkwxNS4wMDg1IDE2Ljc3NjdMMTYuNzc2IDE1LjAwOTJMMTUuNjc5NCAxMy40NzM0QzE2LjAzOTQgMTIuODg4NCAxNi4zMDk0IDEyLjI0NTEgMTYuNDc1MiAxMS41NjAxTDE4LjMzMzUgMTEuMjUwMVoiPjwvcGF0aD48L3N2Zz4="},97429:function(e,i,s){s.d(i,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtdXA8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQ4LjAwMDAwMCwgLTE2NC4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy11cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTA3LjMwMDAwMCwgNDQuNzAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wMDAwMDAsIDcuMDAwMDAwKSIgaWQ9IkNvbWJpbmVkLVNoYXBlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuNDE0MjEzNTYsMTMuNDM1MDI4OCBMNCwxMi4wMjA4MTUzIEwxMS4wNzEsNC45NDk0NjYwOSBMNCwtMi4xMjEzMjAzNCBMNS40MTQyMTM1NiwtMy41MzU1MzM5MSBMMTMuODk5NDk0OSw0Ljk0OTc0NzQ3IEw1LjQxNDIxMzU2LDEzLjQzNTAyODggWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC45NDk3NDcsIDQuOTQ5NzQ3KSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC04Ljk0OTc0NywgLTQuOTQ5NzQ3KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},50065:function(e,i,s){s.d(i,{Z:function(){return o},a:function(){return t}});var n=s(67294);let a={},r=n.createContext(a);function t(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);