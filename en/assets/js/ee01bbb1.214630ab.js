"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["34547"],{14360:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"project/project-structure","title":"The project structure and member roles","description":"Let\'s learn about the project hierarchy.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/project/project-structure.mdx","sourceDirName":"project","slug":"/project/project-structure","permalink":"/en/project/project-structure","draft":false,"unlisted":false,"editUrl":"undefined/docs/project/project-structure.mdx","tags":[],"version":"current","frontMatter":{"id":"project-structure","title":"The project structure and member roles","description":"Let\'s learn about the project hierarchy.","keywords":["Project"],"isTranslationMissing":false},"sidebar":"manageSidebar","previous":{"title":"Microsoft Entra ID linking","permalink":"/en/account/ms-entra-id"},"next":{"title":"Project Management","permalink":"/en/project/project-manage"}}'),s=r("85893"),t=r("50065");let o={id:"project-structure",title:"The project structure and member roles",description:"Let's learn about the project hierarchy.",keywords:["Project"],isTranslationMissing:!1},l=void 0,a={},c=[{value:"Hierarchical structure",id:"hierarchical-structure",level:2},{value:"What is the project?",id:"what-is-the-project",level:3},{value:"What is the group?",id:"what-is-the-group",level:3},{value:"What is the organization?",id:"what-is-the-organization",level:3},{value:"Member role",id:"member-auth",level:2},{value:"Member hierarchy scheme",id:"project-auth",level:2},{value:"Inquiry and analysis",id:"inquiry-and-analysis",level:3},{value:"Edit",id:"edit",level:3},{value:"Member Management",id:"member-management",level:3},{value:"Alert Reception",id:"alert-reception",level:3},{value:"Alert Config",id:"alert-config",level:3},{value:"View Log",id:"view-log",level:3},{value:"Log Edit",id:"log-edit",level:3},{value:"Project flexboard update",id:"project-flexboard-update",level:3},{value:"Billing",id:"billing",level:3},{value:"Editing Member Role",id:"modify-auth",level:2},{value:"Modifying the project member role",id:"modifying-the-project-member-role",level:3},{value:"Modifying the roles of the organization or group members",id:"modifying-the-roles-of-the-organization-or-group-members",level:3}];function d(e){let n={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",section:"section",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{Cmdname:r,ImgLang:i,LinkImage:o}=n;return!r&&m("Cmdname",!0),!i&&m("ImgLang",!0),!o&&m("LinkImage",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In the WhaTap monitoring service, you can easily manage multiple projects with the project hierarchy (grouping)."}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"hierarchical-structure",children:"Hierarchical structure"}),(0,s.jsx)(i,{img:"project-management-3depth.png",desc:"Project hierarchy",className:"noneborder"})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"what-is-the-project",children:"What is the project?"}),(0,s.jsx)(n.p,{children:"The WhaTap monitoring project means a monitoring unit. In addition to being divided by project, the tenant roles can also be managed. A project is the most basic layer."})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"what-is-the-group",children:"What is the group?"}),(0,s.jsx)(n.p,{children:"Groups are helpful when managing multiple projects. Multiple projects make it cumbersome to manage. How can I add or grant roles to users for each project? In this case, you can group two projects into a group and manage users by the group. A single user can own multiple projects in a group."}),(0,s.jsx)(n.p,{children:"Project users can inherit group users, and the users can monitor all projects in the group. A user who is granted the role only on the project can monitor only the project, regardless of whether the user is in a group or not."})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"what-is-the-organization",children:"What is the organization?"}),(0,s.jsx)(n.p,{children:"An organization is a parent group to which groups can belong. In most situations, projects and groups are enough."}),(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"What customers can benefit from?"})}),(0,s.jsx)(n.p,{children:"In case of a business that specializes in the operations management service, multiple companies exist as a group. The number of groups and projects can be great. In this case, the group concept is not enough. We need one more concept to integrate groups for management. Use the organization concept."}),(0,s.jsx)(n.p,{children:"A professional maintenance service company can group multiple subgroups into a single organization at a parent level. Grant each group member the corresponding roles. Members who have been granted roles can manage the group independently."})]})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"member-auth",children:"Member role"}),(0,s.jsx)(n.p,{children:"If a parent group exists, the member roles of the parent group are inherited by default. For example, there are Organization A, Group B, and Project C. Without extra settings, Group B inherits Organization A's membership roles, and Project C inherits Group B's member roles."}),(0,s.jsx)(i,{img:"project-member-auth.png",desc:"Member Role",className:"noneborder"}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Inheritance in programming is different from the general concept. For example, let's assume that User 1 in the organization B inherits specific roles from User 1 in the organization A. Nevertheless, User 1 in the organization B still has those roles."})})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"project-auth",children:"Member hierarchy scheme"}),(0,s.jsx)(n.p,{children:"You can flexibly grant different roles to different members for each project or group. Below are basic descriptions of each role."}),(0,s.jsx)("div",{class:"c5-3-5-avg",children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Role scheme"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"View"}),(0,s.jsx)(n.td,{children:"Viewing a project"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Edit"}),(0,s.jsx)(n.td,{children:"Moving, modifying, and deleting an organization, group, project or maintenance plan"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"View Log"}),(0,s.jsx)(n.td,{children:"Log inquiry and access of log-related functions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Log Edit"}),(0,s.jsx)(n.td,{children:"Editing the log settings"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Project flexboard update"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(r,{sid:"flexboard",className:"uitext"})," editing of the project"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Member Management"}),(0,s.jsx)(n.td,{children:"Modifying member roles and adding or excluding members"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Alert Reception"}),(0,s.jsx)(n.td,{children:"Alert Reception"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Alert Config"}),(0,s.jsx)(n.td,{children:"Alert notification setting, maintenance plan, process grouping for the server product"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Billing"}),(0,s.jsx)(n.td,{children:"Charging the bill"})]})]})]})})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"inquiry-and-analysis",children:"Inquiry and analysis"}),(0,s.jsxs)(n.p,{children:["This role is granted to members by default when inviting them to an organization, group, or project. You can view the ",(0,s.jsx)(r,{sid:"dashboard",className:"uitext"})," and other menus."]})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"edit",children:"Edit"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can modify the functions of the project. For example, you can add, modify, and delete ",(0,s.jsx)(r,{sid:"dashboard",className:"uitext"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can move, modify, and delete settings of a group or project."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Maintenance plan"})})," can be registered, modified, or deleted."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Process grouping of the server product is available."}),"\n"]}),"\n"]}),(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Maintenance plan"})})," settings require the ",(0,s.jsx)(n.strong,{children:"Edit"})," or ",(0,s.jsx)(n.strong,{children:"Alert settings"})," role. For more information about ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Maintenance plan"})}),", see ",(0,s.jsx)(n.a,{href:"../management/maintenance",children:"the following"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The process grouping feature of the Server product requires the ",(0,s.jsx)(n.strong,{children:"Edit"})," or ",(0,s.jsx)(n.strong,{children:"Alert settings"})," role. For more information about the grouping, see ",(0,s.jsx)(n.a,{href:"../server/server-detail-process-group",children:"the following"}),"."]}),"\n"]}),"\n"]})]})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"member-management",children:"Member Management"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can add or delete members and modify roles for each organization, group, or project."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["There must be at least one member with the ",(0,s.jsx)(n.strong,{children:"Member Management"})," role."]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"alert-reception",children:"Alert Reception"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(r,{sid:"event_statistic",className:"uitext"})," > ",(0,s.jsx)(r,{sid:"event_receive_configuration",className:"uitext"}),", you can manage the alert reception settings."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you do not set the ",(0,s.jsx)(n.strong,{children:"Alert Reception"})," role, you can handle only the reception settings for your own account."]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"alert-config",children:"Alert Config"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(r,{sid:"event_statistic",className:"uitext"})," > ",(0,s.jsx)(r,{sid:"event_receive_configuration",className:"uitext"}),", the alerts can be added, deleted, or modified. You can also manage other functions."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Maintenance plan"})})," can be registered, modified, or deleted."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Process grouping of the server product is available."}),"\n"]}),"\n"]}),(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Maintenance plan"})})," settings require the ",(0,s.jsx)(n.strong,{children:"Edit"})," or ",(0,s.jsx)(n.strong,{children:"Alert settings"})," role. For more information about ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Maintenance plan"})}),", see ",(0,s.jsx)(n.a,{href:"../management/maintenance",children:"the following"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The process grouping feature of the Server product requires the ",(0,s.jsx)(n.strong,{children:"Edit"})," or ",(0,s.jsx)(n.strong,{children:"Alert settings"})," role. For more information about the grouping, see ",(0,s.jsx)(n.a,{href:"../server/server-detail-process-group",children:"the following"}),"."]}),"\n"]}),"\n"]})]})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"view-log",children:"View Log"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can search the logs. This role is granted to members by default when inviting them to an organization, group, or project."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Only members with the ",(0,s.jsx)(n.strong,{children:"Log Read"})," role can access the log-related functions. The log-related functions are as follows."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{sid:"log",className:"uitext"})," menu and sub menus"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{sid:"event_statistic",className:"uitext"})," > ",(0,s.jsx)(r,{sid:"event_setting",className:"uitext"})," > ",(0,s.jsx)(r,{sid:"log",className:"uitext"})," tab"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{sid:"transaction_log",className:"uitext"})," tab in the Transaction Detail window"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{sid:"log",className:"uitext"})," tab in ",(0,s.jsx)("b",{children:"Summary Detail"})," or ",(0,s.jsx)("b",{children:"Display Detail"})," under Container Map"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"log-edit",children:"Log Edit"}),(0,s.jsxs)(n.p,{children:["It is the role to edit the settings in ",(0,s.jsx)(r,{sid:"log",className:"uitext"})," > ",(0,s.jsx)(r,{sid:"log_setting",className:"uitext"}),". If you have the ",(0,s.jsx)("b",{children:"Log Edit"})," role, you can use the ",(0,s.jsx)(r,{sid:"log_setting",className:"uitext"})," menu."]}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Even if you have the ",(0,s.jsx)(n.strong,{children:"Log Edit"})," role, you cannot use the ",(0,s.jsx)(r,{sid:"log_setting",className:"uitext"})," menu when an ",(0,s.jsx)(n.strong,{children:"access key"})," has not been issued or the log monitoring is disabled."]})})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"project-flexboard-update",children:"Project flexboard update"}),(0,s.jsxs)(n.p,{children:["It is the role to edit the dashboards in the project's ",(0,s.jsx)(r,{sid:"flexboard",className:"uitext"})," menu. In ",(0,s.jsx)(r,{sid:"flexboard",className:"uitext"})," under the project, you can access to ",(0,s.jsx)(r,{sid:"edit_mode",className:"uitext"}),", ",(0,s.jsx)(r,{sid:"admin",className:"uitext"})," Mode, and ",(0,s.jsx)(r,{sid:"filter",className:"uitext"}),"."]}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For more information about Flex Board, see ",(0,s.jsx)(n.a,{href:"../java/flex-board",children:"the following"}),"."]})})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"billing",children:"Billing"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Each organization, group, or project provides the ",(0,s.jsx)(n.strong,{children:"billing"})," role to only one person. There must be only 1 member with the billing role."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{sid:"billing",className:"uitext"})," appears next to the member with the ",(0,s.jsx)("b",{children:"billing"})," role."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If A has transferred the ",(0,s.jsx)(n.strong,{children:"billing"})," role to B, A no longer has the right to make ",(0,s.jsx)(n.strong,{children:"billing"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The member to whom the ",(0,s.jsx)(n.strong,{children:"billing"})," role is transferred must have registered the billing information. The billing information can be registered in ",(0,s.jsx)(r,{sid:"my_usage",className:"uitext"}),". For more information, see ",(0,s.jsx)(n.a,{href:"../management/billing",children:"the following"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If there are billing staff for each organization, group, and project, the billing roles are granted in the order of project, group, and organization. If there is no billing staff for a group or project, billing is charged to the parent group or organization's staff with the billing role."}),"\n",(0,s.jsx)(i,{img:"project-str-billing.png",desc:"",className:"noneborder"}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(n.section,{className:"remark-sectionize-h2",children:(0,s.jsx)(n.h2,{id:"modify-auth",children:"Editing Member Role"})}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"modifying-the-project-member-role",children:"Modifying the project member role"}),(0,s.jsx)(n.p,{children:"You can modify the roles of members in the list of the selected organization, group, or project."}),(0,s.jsx)(i,{img:"member-modify-authority-0508.png",desc:"Modify member role"}),(0,s.jsxs)(n.p,{children:["You can set roles by selecting the toggle button on the right. After configuration, select ",(0,s.jsx)(r,{sid:"apply",className:"uitext"}),"."]})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"modifying-the-roles-of-the-organization-or-group-members",children:"Modifying the roles of the organization or group members"}),(0,s.jsx)(n.p,{children:"You can set member roles for a group or project that belongs to an organization or subgroup."}),(0,s.jsx)(i,{img:"modify-organize-member-authority.png",desc:"Modify member role"}),(0,s.jsxs)(n.p,{children:["Under the ",(0,s.jsx)(r,{sid:"user_role_per_group_of_organization",className:"uitext"})," or ",(0,s.jsx)(r,{sid:"user_role_per_project_of_group",className:"uitext"})," section, select ",(0,s.jsx)(o,{img:"ico-edit.svg",desc:"edit icon"})," to modify the roles. The ",(0,s.jsx)(r,{sid:"edit_member_role",className:"uitext"})," window appears. The options that can be set for roles are as follows."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{sid:"inheritance",className:"uitext"}),(0,s.jsx)("span",{class:"uitext",children:"("}),(0,s.jsx)(r,{sid:"allow",className:"uitext"}),(0,s.jsx)("span",{class:"uitext",children:")"}),": Inherits the roles of the parent organization or group."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{sid:"allowed",className:"uitext"}),": Enables the roles of the selected group or project."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{sid:"deny",className:"uitext"}),": Disables the roles of the selected group or project."]}),"\n"]}),"\n"]}),(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"For more information about adding, deleting, or modifying members, see the following documentation."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"project-manage#member-list",children:"Project Member Management"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"group#add-member",children:"Group Member Management"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"organization#member-list",children:"Organization Member Management"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"integrated-manage#member",children:"Integrated Member Management"})}),"\n"]}),"\n"]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var i=r(67294);let s={},t=i.createContext(s);function o(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);