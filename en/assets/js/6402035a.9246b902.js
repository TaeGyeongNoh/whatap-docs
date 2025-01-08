"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["34946"],{18080:function(e,t,s){s.d(t,{ZP:function(){return o},d$:function(){return n}});var a=s(85893),i=s(50065);let n=[{value:"Guide to major features",id:"guide-to-major-features",level:2},{value:"Basic usage guide",id:"basic-usage-guide",level:2},{value:"Top stack",id:"top-stack",level:2},{value:"View as Diagram",id:"view-as-diagram",level:3},{value:"Precautions",id:"precautions",level:3},{value:"Unique stack",id:"unique-stack",level:2},{value:"Filtering",id:"filtering",level:3},{value:"Active stack",id:"active-stack",level:2},{value:"Filtering",id:"filtering-1",level:3},{value:"Comparing stacks",id:"compare-stack",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Cmdname:n,ImgLang:c,InDoc:o,UI:r}=t;return!n&&l("Cmdname",!0),!c&&l("ImgLang",!0),!o&&l("InDoc",!0),!r&&l("UI",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Home > Select Project > ",(0,a.jsx)(n,{sid:"side_analysis",className:"uitext"})," > ",(0,a.jsx)(n,{sid:"side_stack",className:"uitext"})]}),"\n","\n",(0,a.jsxs)(t.p,{children:["You can check the call stack frequency and detailed information about methods and transactions in a specific time period. You can view ",(0,a.jsx)(n,{sid:"topstack",className:"uitext"}),", ",(0,a.jsx)(n,{sid:"uniquestack",className:"uitext"}),", and ",(0,a.jsx)(n,{sid:"activestack",className:"uitext"}),". ",(0,a.jsx)(n,{sid:"topstack",className:"uitext"})," displays the usage of frequently called methods, while ",(0,a.jsx)(n,{sid:"uniquestack",className:"uitext"})," analyzes the frequency of the same call stack. ",(0,a.jsx)(n,{sid:"activestack",className:"uitext"})," enables real-time performance analysis by regularly collecting stack information of active transactions."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["The stack analysis is supported in the ",(0,a.jsx)(t.strong,{children:"Java"}),", ",(0,a.jsx)(t.strong,{children:"Python"}),", and ",(0,a.jsx)(t.strong,{children:".NET"})," product platforms."]})}),"\n",(0,a.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(t.h2,{id:"guide-to-major-features",children:"Guide to major features"}),(0,a.jsx)(t.p,{children:"The following major features are available. Stack viewing allows you to quickly identify and resolve performance issues in your application. By checking the frequency of a specific method call, call path, response time, and the like, you can devise measures to improve the performance."}),(0,a.jsx)(c,{img:"apm-stack-functions.png",desc:"Stack"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Selecting a stack type"})}),"\n",(0,a.jsxs)(t.p,{children:["You can select a desired stack from ",(0,a.jsx)(n,{sid:"topstack",className:"uitext"}),", ",(0,a.jsx)(n,{sid:"uniquestack",className:"uitext"}),", and ",(0,a.jsx)(n,{sid:"activestack",className:"uitext"})," for a view."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(n,{sid:"topstack",className:"uitext"}),": Information of the stack with the most frequent calls is provided. For more information, see ",(0,a.jsx)(t.a,{href:"#top-stack",children:"the following"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(n,{sid:"uniquestack",className:"uitext"}),": Statistical information about the cases where the set of executed methods is the same, is provided. For more information, see ",(0,a.jsx)(t.a,{href:"#unique-stack",children:"the following"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(n,{sid:"activestack",className:"uitext"}),": The stack information of the running transaction is provided. For more information, see ",(0,a.jsx)(t.a,{href:"#active-stack",children:"the following"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(n,{sid:"time_selector",className:"uitext"})," / ",(0,a.jsx)(n,{sid:"start_date",className:"uitext"}),": Set the time to view. You can view the stacks for a specific time period or set a desired time period. Depending on the stack type, the lookup period may be restricted."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The maximum period to view ",(0,a.jsx)(n,{sid:"topstack",className:"uitext"})," and ",(0,a.jsx)(n,{sid:"uniquestack",className:"uitext"})," is 3 days."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["For more information on how to use the ",(0,a.jsx)(n,{sid:"time_selector",className:"uitext"})," option, see ",(0,a.jsx)(t.a,{href:"usage-ui#timeselector",children:"the following"}),"."]}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(n,{sid:"application",className:"uitext"}),": You can select an agent to view. You can select a specific agent. If nothing is selected, all agents in the project are viewed."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"Column selection icon",src:s(34945).Z+"",width:"24",height:"24"})," ",(0,a.jsx)(n,{sid:"column_select",className:"uitext"}),": You can display or hide the desired columns."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(n,{sid:"compare",className:"uitext"}),": When searching within 1 day by the same filter conditions, you can compare the selected stacks over time. This allows you to see the changes in the call stack over time and see the performance trend. For more information, see ",(0,a.jsx)(t.a,{href:"#compare-stack",children:"the following"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"Snapshot icon",src:s(3866).Z+"",width:"24",height:"24"}),": When you expand a stack or transaction in the table list for each stack type, a snapshot icon appears on the utmost right. Selection of this icon allows you to save the stack or transaction information as an image file."]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(t.h2,{id:"basic-usage-guide",children:"Basic usage guide"}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Select a desired stack type to view on the screen."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(n,{sid:"time_selector",className:"uitext"})," or ",(0,a.jsx)(n,{sid:"start_date",className:"uitext"}),", set the desired viewing time."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(n,{sid:"application",className:"uitext"}),", select an agent to view. If nothing is selected, all agents are viewed."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Select ",(0,a.jsx)(t.img,{alt:"Search icon",src:s(60396).Z+"",width:"35",height:"29"}),"."]}),"\n"]}),"\n"]}),(0,a.jsx)(t.p,{children:"You can see the search results in the list of the stack table."})]}),"\n",(0,a.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(t.h2,{id:"top-stack",children:"Top stack"}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(n,{sid:"topstack",className:"uitext"})," provides information on the most frequently called methods. Through the call frequency of the method at the top of the stack, you can quickly find the method that has the most impact on the service. By checking the frequency of method calls, you can analyze the cause of the load on the CPU or memory. Through this, the measures to improve the performance can be derived."]}),(0,a.jsx)(t.p,{children:"WhaTap can use the thread stacks collected every 10 seconds (default value) to analyze the performance delay sections in the method level."}),(0,a.jsxs)(o,{product:"java",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://img.whatap.io/media/user_guide_application/stack/st1.png",alt:"st1"})}),(0,a.jsxs)(t.p,{children:["In the example stack, the ",(0,a.jsx)(t.strong,{children:"top line"})," is ",(0,a.jsx)(t.code,{children:"socketRead0"}),"."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"java.net.SocketInputStream.socketRead0(Native Method)\n"})})]}),(0,a.jsxs)(o,{product:"dotnet",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:"DynamicClass.lambda_method(System.Runtime.CompilerServices.Closure,System.Object,System.Object[])\ndemo450.Controllers.DelayTestController.Get(Int32)\nSystem.Threading.Thread.Sleep(Int32)\nSystem.Web.Http.ApiController.ExecuteAsync(System.Web.Http.Controllers.HttpControllerContext,System.Threading.CancellationToken)\nSystem.Web.Http.Controllers.ActionFilterResult.ExecuteAsync(System.Threading.CancellationToken)\nSystem.Runtime.CompilerServices.AsyncTaskMethodBuilder`1[[System.__Canon,mscorlib]].Start[[System.Web.Http.Controllers.ActionFilterResult+<ExecuteAsync>d__5,System.Web.Http]](<ExecuteAsync>d__5 ByRef)\nSystem.Web.Http.Controllers.ActionFilterResult+<ExecuteAsync>d__5.MoveNext()\nSystem.Web.Http.Controllers.ApiControllerActionInvoker.InvokeActionAsync(System.Web.Http.Controllers.HttpActionContext,System.Threading.CancellationToken)\nSystem.Web.Http.Controllers.ApiControllerActionInvoker.InvokeActionAsyncCore(System.Web.Http.Controllers.HttpActionContext,System.Threading.CancellationToken)\n...\n"})}),(0,a.jsxs)(t.p,{children:["In the example stack, the ",(0,a.jsx)(t.strong,{children:"top line"})," is ",(0,a.jsx)(t.code,{children:"lambda_method"}),"."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:"DynamicClass.lambda_method(System.Runtime.CompilerServices.Closure,System.Object,System.Object[])\n"})})]}),(0,a.jsxs)(o,{product:"python",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"project (/home/ubuntu/python-sample/test/views/test.py:69)\n_get_response (/home/ubuntu/.local/lib/python3.10/site-packages/django/core/handlers/base.py:197)\ninner (/home/ubuntu/.local/lib/python3.10/site-packages/django/core/handlers/exception.py:56)\n__call__ (/home/ubuntu/.local/lib/python3.10/site-packages/django/utils/deprecation.py:136)\ninner (/home/ubuntu/.local/lib/python3.10/site-packages/django/core/handlers/exception.py:56)\n__call__ (/home/ubuntu/.local/lib/python3.10/site-packages/django/utils/deprecation.py:136)\ninner (/home/ubuntu/.local/lib/python3.10/site-packages/django/core/handlers/exception.py:56)\n__call__ (/home/ubuntu/.local/lib/python3.10/site-packages/django/utils/deprecation.py:136)\ninner (/home/ubuntu/.local/lib/python3.10/site-packages/django/core/handlers/exception.py:56)\n__call__ (/home/ubuntu/.local/lib/python3.10/site-packages/django/utils/deprecation.py:136)\ninner (/home/ubuntu/.local/lib/python3.10/site-packages/django/core/handlers/exception.py:56)\n__call__ (/home/ubuntu/.local/lib/python3.10/site-packages/django/utils/deprecation.py:136)\ninner (/home/ubuntu/.local/lib/python3.10/site-packages/django/core/handlers/exception.py:56)\n__call__ (/home/ubuntu/.local/lib/python3.10/site-packages/django/utils/deprecation.py:136)\ninner (/home/ubuntu/.local/lib/python3.10/site-packages/django/core/handlers/exception.py:56)\n...\n"})}),(0,a.jsxs)(t.p,{children:["In the example stack, the ",(0,a.jsx)(t.strong,{children:"top line"})," is ",(0,a.jsx)(t.code,{children:"project"}),"."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"project (/home/ubuntu/python-sample/test/views/test.py:69)\n"})})]}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Top line"})," indicates that the thread to be dumped is executing that method. It may be caught momentarily, but it appears on the stack as a percentage of the sum of the module processing times. By calculating the frequency of this ",(0,a.jsx)(t.strong,{children:"top line"})," method, you can determine the method-level performance. WhaTap calls the ",(0,a.jsx)(t.strong,{children:"top line frequency statistics"})," as ",(0,a.jsx)(n,{sid:"topstack",className:"uitext"}),"."]}),(0,a.jsx)(o,{product:"java",children:(0,a.jsx)(c,{img:"apm-analysis-apm-top-stack-01.png",desc:"Top stack"})}),(0,a.jsx)(o,{product:"dotnet",children:(0,a.jsx)(c,{img:"apm-analysis-apm-top-stack-dotnet-01.png",desc:"Top stack"})}),(0,a.jsx)(o,{product:"python",children:(0,a.jsx)(c,{img:"apm-analysis-apm-top-stack-python-01.png",desc:"Top stack"})}),(0,a.jsxs)(t.p,{children:["Through the ",(0,a.jsx)(n,{sid:"topstack",className:"uitext"})," analysis, you can analyze the frequencies of methods that were called. Based on each step on the stack trace, it provides the call rates between steps as percentage. The backlog frequency of the top step is calculated as percentage and the results are sorted in descending order."]}),(0,a.jsx)(o,{product:"java",children:(0,a.jsx)(c,{img:"apm-analysis-apm-top-stack-02.png",desc:"Top stack"})}),(0,a.jsx)(o,{product:"dotnet",children:(0,a.jsx)(c,{img:"apm-analysis-apm-top-stack-dotnet-02.png",desc:"Top stack"})}),(0,a.jsx)(o,{product:"python",children:(0,a.jsx)(c,{img:"apm-analysis-apm-top-stack-python-02.png",desc:"Top stack"})}),(0,a.jsxs)(t.p,{children:["If you select ",(0,a.jsx)(t.img,{alt:"Expand icon",src:s(74570).Z+"",width:"24",height:"24"})," on the utmost left of each step, the call frequency reference of the upper step that calls the step is calculated as percentage."]}),(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(n,{sid:"topstack",className:"uitext"})," statistics are good to make decision with enough data. If the number of collected stacks is a prime number of less than 10, it is insufficient to have a statistical significance."]}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(n,{sid:"topstack",className:"uitext"})," is useful to find tuning points that were difficult to recognize while tuning. The most frequent stacks can be determined to cause the most response delays in the application server. The rate on the utmost left is how much it affects the performance of the application server."]}),(0,a.jsx)(o,{product:"java",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"percent",src:s(76718).Z+"",width:"520",height:"100"})})}),(0,a.jsx)(o,{product:"dotnet",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"percent",src:s(79064).Z+"",width:"900",height:"121"})})}),(0,a.jsx)(o,{product:"python",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"percent",src:s(26991).Z+"",width:"675",height:"124"})})}),(0,a.jsx)(t.p,{children:"Even if it is a stable application server, a stack with a high call frequency is likely to cause performance degradation, so it is recommended to look at the class carefully."}),(0,a.jsxs)(t.p,{children:["If you click ",(0,a.jsx)(n,{sid:"topstack",className:"uitext"}),", the frequency of calls on the top stack can be checked. Because the call relationship of the ",(0,a.jsx)(n,{sid:"topstack",className:"uitext"})," is one-to-one, the data accuracy may decrease as the depth of the ",(0,a.jsx)(n,{sid:"topstack",className:"uitext"})," goes down. Use the information on the sub-depths for reference purposes and proceed with tuning."]}),(0,a.jsx)(t.p,{children:"To improve the application performance, the module with a high backlog rate in the top-level step must be checked for bottleneck. For modules with high backlog rates, even a small performance improvement can lead to significant enhancement throughout all applications."})]}),"\n",(0,a.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(t.h3,{id:"view-as-diagram",children:"View as Diagram"}),(0,a.jsxs)(t.p,{children:["It provides the diagram chart to help you easily understand the call steps of complex stacks. Select ",(0,a.jsx)(n,{sid:"view_as_diagram",className:"uitext"})," at the upper right of the stack table. This allows you to see at a glance the call frequencies and execution paths of each step."]}),(0,a.jsx)(o,{product:"java",children:(0,a.jsx)(c,{img:"apm-analysis-apm-top-stack-05.png",desc:"View as Diagram"})}),(0,a.jsx)(o,{product:"dotnet",children:(0,a.jsx)(c,{img:"apm-analysis-apm-top-stack-dotnet-05.png",desc:"View as Diagram"})}),(0,a.jsx)(o,{product:"python",children:(0,a.jsx)(c,{img:"apm-analysis-apm-top-stack-python-05.png",desc:"View as Diagram"})}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If you select each node, the stacks of lower depths appear."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"You can zoom in/out by scrolling the mouse or move it by dragging."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["To go back to the list of stack table, select ",(0,a.jsx)(n,{sid:"view_as_table",className:"uitext"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(t.h3,{id:"precautions",children:"Precautions"}),(0,a.jsxs)(o,{product:"java",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Top stack",src:s(51861).Z+"",width:"1200",height:"345"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",metastring:"{1,3}",children:"whatap.util.ThreadUtil.sleep\n// The call rate of jdbc.Control.exec is 40.02%.\njdbc.Control.exec \n// The call rate of jdbc.FakePreparedStatement.executeQuery is 68.06%.\n"})}),(0,a.jsxs)(t.p,{children:["The call rate of ",(0,a.jsx)(t.code,{children:"whatap.util.ThreadUtil.sleep"})," \u2190 ",(0,a.jsx)(t.code,{children:"jdbc.Control.exec"})," \u2190 ",(0,a.jsx)(t.code,{children:"jdbc.FakePreparedStatement.executeQuery"})," does not indicate 40.02% * 68.06%. It is because the possibility of calling other modules exist in ",(0,a.jsx)(t.code,{children:"jdbc.Control.exec"}),"."]})]}),(0,a.jsxs)(o,{product:"dotnet",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Top stack",src:s(15790).Z+"",width:"1200",height:"216"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",metastring:"{1,3}",children:"System.Threading.Thread.Sleep(Int32)\n// The call rate of System.Web.Http.ApiController.ExecuteAsync is 58.37%.\nSystem.Web.Http.ApiController.ExecuteAsync(System.Web.Http.Controllers.HttpControllerContext,System.Threading.CancellationToken)\n// The call rate of System.Web.Http.Controllers.ActionFilterResult.ExecuteAsync is 99.99%.\nSystem.Web.Http.Controllers.ActionFilterResult.ExecuteAsync(System.Threading.CancellationToken)\n"})}),(0,a.jsxs)(t.p,{children:["The call rate of ",(0,a.jsx)(t.code,{children:"System.Threading.Thread.Sleep"})," \u2190 ",(0,a.jsx)(t.code,{children:"System.Web.Http.ApiController.ExecuteAsync"})," \u2190 ",(0,a.jsx)(t.code,{children:"System.Web.Http.Controllers.ActionFilterResult.ExecuteAsync"})," does not mean 58.37% * 99.99%. This is because there is a possibility of calling other modules in ",(0,a.jsx)(t.code,{children:"System.Web.Http.ApiController.ExecuteAsync"}),"."]})]}),(0,a.jsxs)(t.p,{children:["When determining the call rate through ",(0,a.jsx)(n,{sid:"topstack",className:"uitext"}),", do not multiply the call rates between steps to calculate the overall call relationship. Because the call rate of the ",(0,a.jsx)(t.strong,{children:"top stack"})," is the result of the call rates between steps of the data exposed on the stack trace, the total call rate derived with the call rates between steps can lead to a distorted result."]})]}),"\n",(0,a.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(t.h2,{id:"unique-stack",children:"Unique stack"}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(n,{sid:"uniquestack",className:"uitext"})," provides statistical information about the cases where the set of methods executed based on the exact call information throughout all stack traces is the same."]}),(0,a.jsx)(o,{product:"java",children:(0,a.jsx)(c,{img:"apm-analysis-apm-unique-stack.png",desc:"Unique stack"})}),(0,a.jsx)(o,{product:"dotnet",children:(0,a.jsx)(c,{img:"apm-analysis-apm-unique-stack-dotnet.png",desc:"Unique stack"})}),(0,a.jsx)(o,{product:"python",children:(0,a.jsx)(c,{img:"apm-analysis-apm-unique-stack-python.png",desc:"Unique stack"})}),(0,a.jsx)(t.p,{children:"You can find information about the most frequently used stack. Even if the same stack is repeated multiple times, duplicates can be removed to identify the stack with the highest call frequency. For example, you can identify the stack traces with high backlog rates. You can also determine whether abnormal modules exist on the call path by reviewing detailed call steps."}),(0,a.jsx)(o,{product:"java",children:(0,a.jsx)(c,{img:"apm-analysis-apm-unique-stack-details.png",desc:"Unique stack"})}),(0,a.jsx)(o,{product:"dotnet",children:(0,a.jsx)(c,{img:"apm-analysis-apm-unique-stack-details-dotnet.png",desc:"Unique stack"})}),(0,a.jsx)(o,{product:"python",children:(0,a.jsx)(c,{img:"apm-analysis-apm-unique-stack-details-python.png",desc:"Unique stack"})}),(0,a.jsxs)(t.p,{children:["Each stack displays the call path (",(0,a.jsx)(n,{sid:"stack",className:"uitext"}),"), occupied percentage (",(0,a.jsx)(n,{sid:"percent",className:"uitext"}),"), and total call count of the method. Displays (",(0,a.jsx)(n,{sid:"count",className:"uitext"}),"). If you select ",(0,a.jsx)(t.img,{alt:"Expand icon",src:s(74570).Z+"",width:"24",height:"24"})," on the utmost left of each step, useful information for problem analysis is provided, such as method name, file name, and line number of the call stack."]})]}),"\n",(0,a.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(t.h3,{id:"filtering",children:"Filtering"}),(0,a.jsx)(c,{img:"apm-analysis-apm-unique-stack-filter.png",desc:"Unique stack"}),(0,a.jsxs)(t.p,{children:["You can filter the search results by entering the method name in ",(0,a.jsx)(n,{sid:"filter",className:"uitext"}),". Enter the string and then select ",(0,a.jsx)(t.img,{alt:"Search icon",src:s(60396).Z+"",width:"35",height:"29"}),"."]})]}),"\n",(0,a.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(t.h2,{id:"active-stack",children:"Active stack"}),(0,a.jsxs)(t.p,{children:['Transactions in progress are called "active transactions." ',(0,a.jsx)(t.strong,{children:"The stacks regularly dumped by active transactions"})," are called ",(0,a.jsx)(n,{sid:"activestack",className:"b600"}),"."]}),(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(n,{sid:"activestack",className:"uitext"}),", you can see the collected ",(0,a.jsx)(n,{sid:"activestack",className:"b600"})," in a time-series chart. The ratios for long-running methods and short-running but frequently executed methods allow you to understand the status of active transactions in real time."]}),(0,a.jsx)(c,{img:"apm-analysis-apm-active-stack.png",desc:"Active stack"}),(0,a.jsxs)(t.p,{children:["The chart uses the 5-minute unit statistical data to display the number of ",(0,a.jsx)(r,{children:"active transactions"})," on a bar graph and ",(0,a.jsx)(r,{children:"TPS"})," on a line graph. If you click the bar graph for a specific time zone, you can see a list of ",(0,a.jsx)(r,{children:"active transactions"})," for the time zone."]}),(0,a.jsx)(o,{product:"java",children:(0,a.jsx)(c,{img:"apm-analysis-apm-active-stack-details.png",desc:"Active stack"})}),(0,a.jsx)(o,{product:"dotnet",children:(0,a.jsx)(c,{img:"apm-analysis-apm-active-stack-details-dotnet.png",desc:"Active stack"})}),(0,a.jsxs)(t.p,{children:["If you select ",(0,a.jsx)(t.img,{alt:"Expand icon",src:s(74570).Z+"",width:"24",height:"24"})," on the utmost left of the transaction list, you can see the ",(0,a.jsx)(n,{sid:"activestack",className:"b600"})," information of the transaction."]}),(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["For more information about collection of ",(0,a.jsx)(t.strong,{children:"active transactions"}),", see ",(0,a.jsx)(t.a,{href:"active-transactions",children:"the following"}),". For other agent options related to the collection, see ",(0,a.jsx)(t.a,{href:"agent-transaction",children:"the following"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The WhaTap agent transmits ",(0,a.jsx)(t.strong,{children:"active stacks"})," dumped from ",(0,a.jsx)(t.strong,{children:"active transactions"})," to the server every 10 seconds (optional). For the agent option about the collection interval, see the following example."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"active_stack_second=10\n"})}),"\n"]}),"\n"]})})]}),"\n",(0,a.jsxs)(t.section,{className:"remark-sectionize-h3",children:[(0,a.jsx)(t.h3,{id:"filtering-1",children:"Filtering"}),(0,a.jsx)(c,{img:"apm-analysis-apm-active-stack-filter.png",desc:"Unique stack"}),(0,a.jsxs)(t.p,{children:["You can filter the search results by entering the transaction name in ",(0,a.jsx)(n,{sid:"filter",className:"uitext"}),". Enter the string and then select ",(0,a.jsx)(t.img,{alt:"Search icon",src:s(60396).Z+"",width:"35",height:"29"}),"."]})]}),"\n",(0,a.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,a.jsx)(t.h2,{id:"compare-stack",children:"Comparing stacks"}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(n,{sid:"topstack",className:"uitext"})," and ",(0,a.jsx)(n,{sid:"uniquestack",className:"uitext"})," provide the history of rate changes and collection counts over time based on a specific period of time."]}),(0,a.jsxs)(t.p,{children:["Set the time to view in ",(0,a.jsx)(n,{sid:"time_selector",className:"uitext"}),", and then select ",(0,a.jsx)(n,{sid:"compare",className:"uitext"}),". You can compare stacks over time when viewing the ",(0,a.jsx)(t.strong,{children:"within 1 day"})," period under the same filtering condition. This allows you to see the changes in the call stacks over time and see the performance trend. It can also be used as useful data for checking incident points and comparison before/after the performance improvement."]}),(0,a.jsx)(c,{img:"apm-analysis-apm-top-stack-04.png",desc:"Compare"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(n,{sid:"percent",className:"uitext"}),": You can see the rate changes of the selected stack during the inquiry period."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(n,{sid:"count",className:"uitext"}),": The number of collected stacks is proportional to the number of active transactions. For example, if the collection amount increased in a specific section, it can be seen that there was a service delay or a sudden increase in inflow."]}),"\n"]}),"\n"]}),(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If ",(0,a.jsx)(n,{sid:"compare",className:"uitext"})," is not enabled, you may have exceeded the inquiry time range or there is no enough data for comparison. Set the inquiry time range in ",(0,a.jsx)(n,{sid:"time_selector",className:"uitext"})," to enable the ",(0,a.jsx)(n,{sid:"compare",className:"uitext"})," button."]})})]})]})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}function l(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},73713:function(e,t,s){s.r(t),s.d(t,{metadata:()=>a,contentTitle:()=>l,default:()=>p,assets:()=>r,toc:()=>d,frontMatter:()=>o});var a=JSON.parse('{"id":"java/analysis-apm","title":"Stack","description":"You can see the call stack frequency and detailed information about the methods and transactions in a specific time period.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/java/analysis-apm.mdx","sourceDirName":"java","slug":"/java/analysis-apm","permalink":"/en/java/analysis-apm","draft":false,"unlisted":false,"editUrl":"undefined/docs/java/analysis-apm.mdx","tags":[],"version":"current","frontMatter":{"id":"analysis-apm","title":"Stack","description":"You can see the call stack frequency and detailed information about the methods and transactions in a specific time period.","keywords":["Java","Application","Analysis","Stack"],"isTranslationMissing":false},"sidebar":"javaSidebar","previous":{"title":"Performance Trend","permalink":"/en/java/performance-trend"},"next":{"title":"CUBE","permalink":"/en/java/cube"}}'),i=s("85893"),n=s("50065"),c=s("18080");let o={id:"analysis-apm",title:"Stack",description:"You can see the call stack frequency and detailed information about the methods and transactions in a specific time period.",keywords:["Java","Application","Analysis","Stack"],isTranslationMissing:!1},l=void 0,r={},d=[...c.d$];function h(e){return(0,i.jsx)(c.ZP,{})}function p(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},76718:function(e,t,s){s.d(t,{Z:function(){return a}});let a=s.p+"assets/images/apm-analysis-apm-top-stack-02-percent-4e6d3079424fa4a9202daaab94f2bd44.png"},51861:function(e,t,s){s.d(t,{Z:function(){return a}});let a=s.p+"assets/images/apm-analysis-apm-top-stack-03-779369aecde28c0de62b8899c76a64d3.png"},79064:function(e,t,s){s.d(t,{Z:function(){return a}});let a=s.p+"assets/images/apm-analysis-apm-top-stack-dotnet-02-percent-335052e4394859dea55bb215572f873e.png"},15790:function(e,t,s){s.d(t,{Z:function(){return a}});let a=s.p+"assets/images/apm-analysis-apm-top-stack-dotnet-03-1a29687283d8601a7ce8c9affaf94e2c.png"},26991:function(e,t,s){s.d(t,{Z:function(){return a}});let a=s.p+"assets/images/apm-analysis-apm-top-stack-python-02-percent-830ae99fc5da55a4da68223839559991.png"},3866:function(e,t,s){s.d(t,{Z:function(){return a}});let a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDNMNy4xNyA1Ljk5MDUzSDJDMiA1Ljk5MDUzIDIgNi44OTAzNiAyIDcuOTkwMTRWMTkuMDAwNEMyIDIwLjEwMDIgMiAyMSAyIDIxSDIyQzIyIDIxIDIyIDIwLjEwMDIgMjIgMTkuMDAwNFY3Ljk5MDE0QzIyIDYuODkwMzYgMjIgNS45OTA1MyAyMiA1Ljk5MDUzSDE2LjgzTDE1IDNIOVpNNCA4SDguMjQwODZMMTAuMDIwMSA0Ljk5MTgySDE0LjAxMTVMMTYuMDk3OCA4SDIwVjE5SDRMNCA4Wk0xMiAxN0M5Ljc5MiAxNyA4IDE1LjIwOCA4IDEzQzggMTAuNzkyIDkuNzkyIDkgMTIgOUMxNC4yMDggOSAxNiAxMC43OTIgMTYgMTNDMTYgMTUuMjA4IDE0LjIwOCAxNyAxMiAxN1pNMTIgMTVDMTMuMTA0NiAxNSAxNCAxNC4xMDQ2IDE0IDEzQzE0IDExLjg5NTQgMTMuMTA0NiAxMSAxMiAxMUMxMC44OTU0IDExIDEwIDExLjg5NTQgMTAgMTNDMTAgMTQuMTA0NiAxMC44OTU0IDE1IDEyIDE1WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K"},74570:function(e,t,s){s.d(t,{Z:function(){return a}});let a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzY1XzE5NDYpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjUgNkwxNi41IDEyTDguNSAxOEw4LjUgNloiIGZpbGw9IiM3NTc1NzUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF82NV8xOTQ2Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},60396:function(e,t,s){s.d(t,{Z:function(){return a}});let a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg=="},34945:function(e,t,s){s.d(t,{Z:function(){return a}});let a="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtY29sdW1uPC90aXRsZT4gLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Mi4wMDAwMDAsIC0zMDMxLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iYXBwbGljYXRpb24taWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMjM0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jb2x1bW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4wMDAwMDAsIDY4NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgNC4wMDAwMDApIiBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwwIEwwLDE2IEwyMCwxNiBMMjAsMCBMMCwwIFogTTEyLDIgTDEyLDE0IEw4LDE0IEw4LDIgTDEyLDIgWiBNMiwyIEw2LDIgTDYsMTQgTDIsMTQgTDIsMiBaIE0xOCwxNCBMMTQsMTQgTDE0LDIgTDE4LDIgTDE4LDE0IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},50065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return c}});var a=s(67294);let i={},n=a.createContext(i);function c(e){let t=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);