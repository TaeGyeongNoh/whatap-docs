"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["44152"],{76877:function(e,n,t){t.d(n,{ZP:function(){return r},d$:function(){return o}});var i=t(85893),s=t(50065);let o=[{value:"AWS CloudWatch configuration",id:"awscloudwatch",level:2},{value:"Selecting the service to which you want to add metrics",id:"selecting-the-service-to-which-you-want-to-add-metrics",level:3},{value:"Entering parameters",id:"entering-parameters",level:3},{value:"Configuring the AWS CloudFormation",id:"configuring-the-aws-cloudformation",level:3},{value:"Setting the required roles",id:"setting-the-required-roles",level:3},{value:"Checking the collection metrics",id:"checking-the-collection-metrics",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Cmdname:o,Details:c,ImgLang:r,InDoc:a,UI:d,Xclude:u}=n;return!o&&l("Cmdname",!0),!c&&l("Details",!0),!r&&l("ImgLang",!0),!a&&l("InDoc",!0),!d&&l("UI",!0),!u&&l("Xclude",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"awscloudwatch",children:"AWS CloudWatch configuration"}),(0,i.jsx)(n.p,{children:"You can monitor the status and resource usage of the database running in the AWS cloud environment."})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"selecting-the-service-to-which-you-want-to-add-metrics",children:"Selecting the service to which you want to add metrics"}),(0,i.jsx)(u,{product:"oracle,mssql",children:(0,i.jsx)(r,{img:"db-cloudsettings-select-service.png",desc:"Select service"})}),(0,i.jsx)(a,{product:"oracle,mssql",children:(0,i.jsx)(r,{img:"db-cloudsettings-select-service-oracle.png",desc:"Select service"})}),(0,i.jsxs)(n.p,{children:["In the first section, select ",(0,i.jsx)(d,{children:"AWS CloudWatch"}),". Install the ",(0,i.jsx)(n.strong,{children:"AWS CloudFormation"})," template to collect the Amazon CloudWatch metric."]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"entering-parameters",children:"Entering parameters"}),(0,i.jsxs)(n.p,{children:["Enter required items before proceeding with the ",(0,i.jsx)(n.strong,{children:"AWS Cloud Formation"})," configuration."]}),(0,i.jsx)(r,{img:"db-cloudsettings-input-parameters.png",desc:"Parameters"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DB Identifier"})}),": Enter the identifier of the AWS database instance to monitor."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Enter the ",(0,i.jsx)(n.strong,{children:"DB identifier"})," value of the Database instance created by the Amazon RDS service."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DB Identifire",src:t(50725).Z+"",width:"600",height:"384"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Instance"})}),": Select an instance (agent) to monitor metrics collected from databases running in the AWS cloud environment."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Interval"})}),": Select a metric collection interval. (60 sec / 300 sec)"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"configuring-the-aws-cloudformation",children:"Configuring the AWS CloudFormation"}),(0,i.jsxs)(n.p,{children:["Install the ",(0,i.jsx)(n.strong,{children:"AWS CloudFormation"})," template provided by WhaTap. This template allows you to collect the CloudWatch metric through WhaTap. If you select ",(0,i.jsx)(d,{children:"AWS CloudFormation"})," ",(0,i.jsx)(o,{sid:"setting",className:"uitext"}),", the installation starts and the configuration process is performed."]}),(0,i.jsx)(r,{img:"db-cloudsettings-set-cloud-formation.png",desc:"AWS CloudFormation"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When you select ",(0,i.jsx)(d,{children:"AWS CloudFormation"})," ",(0,i.jsx)(o,{sid:"setting",className:"uitext"}),", the ",(0,i.jsx)(n.strong,{children:"AWS CloudFormation"})," configuration screen appears."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Check the values \u200B\u200Bfor the items automatically filled in the ",(0,i.jsx)(n.strong,{children:"Stack name"})," and ",(0,i.jsx)(n.strong,{children:"Parameters"})," sections."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.strong,{children:"Create stack"})," located at the bottom of the screen."]}),"\n"]}),"\n"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For more information about ",(0,i.jsx)(n.strong,{children:"AWS CloudFormation"}),", see ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html",children:"the following link"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For the ",(0,i.jsx)(n.strong,{children:"Amazon CloudWatch"})," metrics about ",(0,i.jsx)(n.strong,{children:"Amazon RDS"}),", see ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-metrics.html",children:"the following link"}),"."]}),"\n"]}),"\n"]})})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"setting-the-required-roles",children:"Setting the required roles"}),(0,i.jsxs)(n.p,{children:["To create a ",(0,i.jsx)(n.strong,{children:"CloudFormation"})," stack, set the following AWS roles:"]}),(0,i.jsxs)(c,{children:[(0,i.jsx)("summary",{children:"Guide to AWS roles (JSON)"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "cloudformation:CreateStack",\n        "cloudformation:UpdateStack",\n        "cloudformation:DeleteStack",\n        "cloudformation:DescribeStacks",\n        "cloudformation:DescribeStackResources",\n        "cloudformation:GetTemplateSummary",\n        "cloudformation:DescribeStackEvents",\n        "cloudformation:ListStacks",\n        "cloudformation:ListStackResources"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "lambda:CreateFunction",\n        "lambda:UpdateFunctionCode",\n        "lambda:UpdateFunctionConfiguration",\n        "lambda:InvokeFunction",\n        "lambda:DeleteFunction",\n        "lambda:GetFunction",\n        "lambda:GetFunctionConfiguration",\n        "lambda:ListFunctions"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "logs:CreateLogGroup",\n        "logs:CreateLogStream",\n        "logs:PutLogEvents"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "events:PutRule",\n        "events:PutTargets",\n        "events:RemoveTargets",\n        "events:DeleteRule",\n        "events:DescribeRule",\n        "events:EnableRule",\n        "events:DisableRule"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "iam:CreateRole",\n        "iam:AttachRolePolicy",\n        "iam:PutRolePolicy",\n        "iam:GetRole",\n        "iam:DeleteRole",\n        "iam:PassRole",\n        "iam:ListRoles"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "cloudwatch:GetMetricData"\n      ],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "s3:GetObject"\n      ],\n      "Resource": "arn:aws:s3:::repo.whatap.io/agent/db/WhaTapRDSMonitoring.zip"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "scheduler:GetSchedule",\n        "scheduler:ListSchedules",\n        "scheduler:CreateSchedule"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n'})})]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the JSON content from ",(0,i.jsx)(n.strong,{children:"Guide to AWS roles"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In IAM, select a ",(0,i.jsx)(n.strong,{children:"user"})," that will create the ",(0,i.jsx)(n.strong,{children:"CloudFormation"})," stack."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.strong,{children:"Create inline policy"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"AWS",src:t(39992).Z+"",width:"800",height:"557"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After selecting ",(0,i.jsx)(n.strong,{children:"JSON"}),", paste the copied roles to register the policy."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"AWS",src:t(73738).Z+"",width:"800",height:"378"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"checking-the-collection-metrics",children:"Checking the collection metrics"}),(0,i.jsxs)(n.p,{children:["After completing the cloud data connection, the ",(0,i.jsx)(o,{sid:"TTL08633",className:"uitext"})," section is generated on the screen. You can see a list of instances (agents) connected to the cloud database and the metrics being collected."]}),(0,i.jsx)(r,{img:"db-cloudsettings-added-aws-cloud-services.png",desc:"Cloud Services"}),(0,i.jsxs)(n.p,{children:["The metrics collected from ",(0,i.jsx)(n.strong,{children:"AWS CloudWatch"})," fall into the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"CloudWatch"})})," category."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CloudWatch",src:t(65434).Z+"",width:"800",height:"447"})}),(0,i.jsx)(n.p,{children:"You can check in the following paths."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(o,{sid:"side_dashboard",className:"uitext"})," > ",(0,i.jsx)(o,{sid:"side_dbMonitoring",className:"uitext"}),": You can select metrics by selecting the ",(0,i.jsx)(n.img,{alt:"Settings icon",src:t(45522).Z+"",width:"20",height:"20"})," button on the widget."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(o,{sid:"side_dashboard",className:"uitext"})," > ",(0,i.jsx)(o,{sid:"side_multiInstance",className:"uitext"}),": You can select metrics by adding custom widgets."]}),"\n"]}),"\n"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For more information on how to change the metrics of a widget in the ",(0,i.jsx)(o,{sid:"side_dbMonitoring",className:"uitext"})," menu, see ",(0,i.jsx)(n.a,{href:"instance-monitoring#selectmetrics",children:"the following"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For more information on how to add custom widgets in the ",(0,i.jsx)(o,{sid:"side_multiInstance",className:"uitext"})," menu, see ",(0,i.jsx)(n.a,{href:"multi-instance-monitoring#customwidget",children:"the following"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(o,{sid:"side_analysis",className:"uitext"})," > ",(0,i.jsx)(o,{sid:"side_metricsSearch",className:"uitext"}),", select the ",(0,i.jsx)(o,{sid:"category",className:"uitext"})," entry with ",(0,i.jsx)(n.strong,{children:"db_aws_rds"}),". You can check the related tags and fields."]}),"\n"]}),"\n"]})})]})]})}function r(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function l(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},39036:function(e,n,t){t.d(n,{ZP:function(){return r},d$:function(){return o}});var i=t(85893),s=t(50065);let o=[];function c(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{Cmdname:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Cmdname",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Home > Select Project > ",(0,i.jsx)(t,{sid:"side_management",className:"uitext"})," > ",(0,i.jsx)(t,{sid:"side_dbCloudSetting",className:"uitext"})]}),"\n",(0,i.jsxs)(n.p,{children:["It provides the feature to set up additional collection and monitoring for monitoring metrics provided by cloud services on the dashboard of the database project. Through the ",(0,i.jsx)(t,{sid:"side_dbCloudSetting",className:"uitext"})," menu, you can monitor the resource status of the cloud database server in real time to maximize the operational efficiency."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The configuration process is intuitive and easy, so even non-developers can quickly perform it."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"After completing the configuration, you can immediately check and correct errors through visual feedbacks."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"By creating and configuring roles directly on the CSP console, you can enable granular control over security groups and policies."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"After configuration, extra charge may be incurred in the cloud depending on the usage, separate from the WhaTap fee. Check the pricing policy of the cloud service in use before installation."})})]})}function r(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},90589:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>m,assets:()=>d,toc:()=>u,frontMatter:()=>l});var i=JSON.parse('{"id":"oracle/cloudsettings","title":"Cloud Settings","description":"You can collect and monitor the resources for the cloud database server.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/oracle/cloudsettings.mdx","sourceDirName":"oracle","slug":"/oracle/cloudsettings","permalink":"/en/oracle/cloudsettings","draft":false,"unlisted":false,"editUrl":"undefined/docs/oracle/cloudsettings.mdx","tags":[],"version":"current","frontMatter":{"id":"cloudsettings","title":"Cloud Settings","description":"You can collect and monitor the resources for the cloud database server.","keywords":["Oracle","DATABASE","Cloud"],"isTranslationMissing":false},"sidebar":"dboracleV2Sidebar","previous":{"title":"XOS agent configuration","permalink":"/en/oracle/agent-xos-settings"},"next":{"title":"Management","permalink":"/en/oracle/agent-manage"}}'),s=t("85893"),o=t("50065"),c=t("39036"),r=t("76877");let l={id:"cloudsettings",title:"Cloud Settings",description:"You can collect and monitor the resources for the cloud database server.",keywords:["Oracle","DATABASE","Cloud"],isTranslationMissing:!1},a=void 0,d={},u=[...c.d$,...r.d$];function h(e){return(0,s.jsxs)(s.Fragment,{children:["\n","\n",(0,s.jsx)(c.ZP,{}),"\n","\n","\n",(0,s.jsx)(r.ZP,{})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},73738:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/db-cloudsettings-aws-iam-policy-json-7ac8d746b132238df1772621e3aae35e.png"},39992:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/db-cloudsettings-aws-iam-policy-a3df1139d9c682b3411d795694314f80.png"},65434:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/db-cloudsettings-check-metrics-category-aws-13a2cb523bab64601e1a781b5aaa34c7.png"},50725:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/db-cloudsettings-input-parameters-db-identifier-bee8d247771572dc45d3f760293e789f.png"},45522:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmb3VuZGF0aW9uPSJbb2JqZWN0IE9iamVjdF0iIGNsYXNzPSJJbm5lckljb25zdHlsZWRfX0ljb24tY2gtZnJvbnRfX3NjLTE5N2g1YmItMCBka0RyT3IiIGRlZmF1bHRvcGFjaXR5PSIxIiBob3ZlcmVkb3BhY2l0eT0iMSIgbWFyZ2ludG9wPSIwIiBtYXJnaW5yaWdodD0iMCIgbWFyZ2luYm90dG9tPSIwIiBtYXJnaW5sZWZ0PSIwIiB3aXRodGhlbWU9InRydWUiPjxwYXRoIGZpbGw9IiM3OTc5NzkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS44MzM1NCAxMC4wMDAxQzUuODMzNTQgNy42OTkzOSA3LjY5ODgxIDUuODMzNDIgMTAuMDAwMiA1LjgzMzQyQzEyLjMwMDkgNS44MzM0MiAxNC4xNjY5IDcuNjk5MzkgMTQuMTY2OSAxMC4wMDAxQzE0LjE2NjkgMTIuMzAwOCAxMi4zMDA5IDE0LjE2NjcgMTAuMDAwMiAxNC4xNjY3QzcuNjk4ODEgMTQuMTY2NyA1LjgzMzU0IDEyLjMwMDggNS44MzM1NCAxMC4wMDAxWk0xOC4zMzM1IDExLjI1MDFWOC43NTAwOEwxNi40NzUyIDguNDQwMDhDMTYuMzA5NCA3Ljc1NTA4IDE2LjAzOTQgNy4xMTE3NSAxNS42Nzk0IDYuNTI2NzVMMTYuNzc2IDQuOTkwOTFMMTUuMDA4NSAzLjIyMzQxTDEzLjQ3MjcgNC4zMjA5MUMxMi44ODc3IDMuOTYwOTEgMTIuMjQ1MiAzLjY5MDkxIDExLjU2MDIgMy41MjUwOEwxMS4yNTAyIDEuNjY2NzVIOC43NTAyTDguNDQwMiAzLjUyNTA4QzcuNzU1MiAzLjY5MDkxIDcuMTExODcgMy45NjA5MSA2LjUyNjg3IDQuMzIwOTFMNC45OTEwNCAzLjIyMzQxTDMuMjIzNTQgNC45OTA5MUw0LjMyMDIgNi41MjY3NUMzLjk2MTA0IDcuMTExNzUgMy42OTAyIDcuNzU1MDggMy41MjUyIDguNDQwMDhMMS42NjY4NyA4Ljc1MDA4VjExLjI1MDFMMy41MjUyIDExLjU2MDFDMy42OTAyIDEyLjI0NTEgMy45NjEwNCAxMi44ODg0IDQuMzIwMiAxMy40NzM0TDMuMjIzNTQgMTUuMDA5Mkw0Ljk5MTA0IDE2Ljc3NjdMNi41MjY4NyAxNS42NzkyQzcuMTExODcgMTYuMDM4NCA3Ljc1NTIgMTYuMzA5MiA4LjQ0MDIgMTYuNDc1MUw4Ljc1MDIgMTguMzMzNEgxMS4yNTAyTDExLjU2MDIgMTYuNDc1MUMxMi4yNDUyIDE2LjMwOTIgMTIuODg3NyAxNi4wMzg0IDEzLjQ3MjcgMTUuNjc5MkwxNS4wMDg1IDE2Ljc3NjdMMTYuNzc2IDE1LjAwOTJMMTUuNjc5NCAxMy40NzM0QzE2LjAzOTQgMTIuODg4NCAxNi4zMDk0IDEyLjI0NTEgMTYuNDc1MiAxMS41NjAxTDE4LjMzMzUgMTEuMjUwMVoiPjwvcGF0aD48L3N2Zz4="},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var i=t(67294);let s={},o=i.createContext(s);function c(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);