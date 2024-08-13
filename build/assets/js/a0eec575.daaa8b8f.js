"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[10490],{

/***/ 98313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'apm-faq',
	title: 'Application FAQs',
	description: '와탭 애플리케이션 모니터링 서비스 FAQ 문서입니다.',
	tags: [
		'애플리케이션',
		'FAQ'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "faq/apm-faq",
  "title": "Application FAQs",
  "description": "와탭 애플리케이션 모니터링 서비스 FAQ 문서입니다.",
  "source": "@site/docs/faq/apm-faq.mdx",
  "sourceDirName": "faq",
  "slug": "/faq/apm-faq",
  "permalink": "/faq/apm-faq",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/faq/apm-faq.mdx",
  "tags": [
    {
      "inline": true,
      "label": "애플리케이션",
      "permalink": "/tags/애플리케이션"
    },
    {
      "inline": true,
      "label": "FAQ",
      "permalink": "/tags/faq"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "apm-faq",
    "title": "Application FAQs",
    "description": "와탭 애플리케이션 모니터링 서비스 FAQ 문서입니다.",
    "tags": [
      "애플리케이션",
      "FAQ"
    ]
  },
  "sidebar": "referSidebar",
  "previous": {
    "title": "자주 묻는 질문",
    "permalink": "/faq/"
  },
  "next": {
    "title": "Database FAQs",
    "permalink": "/faq/db-faq"
  }
};
const assets = {

};



const toc = [{
  "value": "Springboot 업데이트 후 일부 위젯의 정보가 나오지 않아요.",
  "id": "springboot-업데이트-후-일부-위젯의-정보가-나오지-않아요",
  "level": 3
}, {
  "value": "스레드 중지 버튼이 동작하지 않아요.",
  "id": "스레드-중지-버튼이-동작하지-않아요",
  "level": 3
}, {
  "value": "&#39;Lost Connection&#39; 메시지",
  "id": "lost-connection-메시지",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "와탭 애플리케이션 모니터링 서비스 사용자들이 자주 묻는 질문을 확인해 보세요."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "faqs",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "springboot-업데이트-후-일부-위젯의-정보가-나오지-않아요",
          children: "Springboot 업데이트 후 일부 위젯의 정보가 나오지 않아요."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Springboot 업데이트 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "AA005",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "today_user",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "today_tps",
              className: "uitext"
            }), " 위젯의 정보가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_appDashboard",
              className: "uitext"
            }), " 메뉴에서 나오지 않아요."]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Springboot를 업데이트한 이후에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_appDashboard",
            className: "uitext"
          }), " 메뉴에서 일부 위젯의 데이터가 출력되지 않는다면 다음 사항을 확인하세요."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "에이전트 설정"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "다음 옵션을 설정한 다음 애플리케이션을 재시작하세요."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title=\"whatap.conf\"",
                children: "weaving=spring-boot-3.0\n"
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Java 17 버전 이상"
              }), "을 사용하는 환경이라면 reflection 관련한 다음 옵션을 추가하세요."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-java",
                children: "--add-opens=java.base/java.lang=ALL-UNNAMED\n"
              })
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "today_user",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "today_tps",
              className: "uitext"
            }), " 위젯의 지표는 1시간 통계 데이터를 활용해 위젯에 차트로 표시합니다. 위 설정을 진행한 이후 시간이 지나 통계 데이터가 만들어지기 때문에 데이터가 바로 보이지 않을 수 있습니다."]
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "스레드-중지-버튼이-동작하지-않아요",
          children: "스레드 중지 버튼이 동작하지 않아요."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "stop_thread",
              className: "uitext"
            }), " 버튼을 눌러도 반응이 없는데요. 별도 설정이 필요한건가요?"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "stop_thread",
            className: "uitext"
          }), " 기능은 애플리케이션에서 실행 중인 스레드를 강제로 종료하는 기능입니다. 그러나 이 기능은 모든 경우에 동작하지 않을 수 있습니다. 예를 들어, 스레드가 IO 작업을 수행 중이라면 스레드를 즉시 중지할 수 없습니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "stop_thread",
            className: "uitext"
          }), " 기능을 사용하면 스레드가 IO 작업을 수행 중이더라도 종료를 시도합니다. 하지만 스레드가 IO 작업을 완료하기 전까지는 중지되지 않습니다. 즉, 스레드는 중지 요청을 받아들이지만, 작업이 완료되고 다음 작업으로 넘어가기 전까지 중지되지 않습니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "이러면 스레드를 강제로 종료하는 것은 비즈니스 로직에 문제가 발생할 수 있으며, 예기치 못한 동작을 유발할 수 있기 때문에 권장하지 않습니다. 그래도 스레드를 중지해야 한다면 애플리케이션 전체를 중지한 후 재시작해야 합니다."
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "lost-connection-메시지",
          children: "'Lost Connection' 메시지"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "트랜잭션의 트레이스 정보에서 'Lost Connection'으로 표시되고, 어떤 프로세스까지 실행되다가 종료되었는지 자세한 내용을 확인할 수 없어요."
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "PHP"
          }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Python"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: ".NET"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Go"
          }), " 상품의 애플리케이션 모니터링에서는 다음 에이전트 설정 옵션으로 5분(기본값 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "300000"
          }), ") 안에 종료되지 않는 트랜잭션의 정보를 더 이상 수집하지 않습니다. 트레이스 내역에는 'Lost Connection' 메시지를 남깁니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["5분 이상 지연되는 트랜잭션에 대한 트레이스 정보를 수집하려면 다음 옵션 값을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "300000"
          }), " 이상으로 설정하세요."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.ini\"",
            children: "# PHP\nwhatap.trace_active_transaction_lost_time=300000\n\n#Python, .NET, Go\ntrace_active_transaction_lost_time=300000\n"
          })
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);