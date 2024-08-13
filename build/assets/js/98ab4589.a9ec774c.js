"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[66229],{

/***/ 58964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ MDXContent),
/* harmony export */   RM: () => (/* binding */ toc)
/* harmony export */ });
/* unused harmony exports frontMatter, contentTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*@since v1.6.2*/


const toc = [{
  "value": "Background Thread에 대한 액티브 스택",
  "id": "background-thread에-대한-액티브-스택",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "background-thread에-대한-액티브-스택",
      children: "Background Thread에 대한 액티브 스택"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["기본적으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "액티브 스택"
      }), "은 트랜잭션이 수행되고 있는 스레드의 스택을 의미합니다. 하지만 일부 백그라운드 스레드에 대해서도 스택을 분석할 필요가 있을 수 있습니다. 이때 옵션을 통해서 백그라운드 스레드에 대한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "액티브 스택"
      }), "을 확보할 수 있습니다. 이 기능은 Java 에이전트 1.6.2 버전 이후부터 지원합니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "async_stack_enabled"
          }), "의 값을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "true"
          }), "로 설정하면 활성화됩니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "async_stack_enabled=false\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "스택 덤프 간격은 포그라운드 액티브 스택 설정에 따라갑니다."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "active_stack_second=10\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["대상 스레드 이름을 지정할 때는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "*"
          }), "를 사용하여 문자열 패턴을 지정합니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "async_thread_match=http*,abc*\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "스레드 이름으로 스택 덤프 대상을 식별합니다. 쉼표(,)를 구분자로 사용하여 match를 여러 개 지정할 수 있습니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["스택의 Top 메소드가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "async_thread_parking"
          }), "에 등록된 클래스 또는 메소드일 때 스레드가 파킹 상태에 있다고 판단하고 덤프를 생성하지 않습니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "async_thread_parking_class=sun.misc.Unsafe\nasync_thread_parking_method=park\n"
          })
        }), "\n"]
      }), "\n"]
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



/***/ }),

/***/ 67697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ active_transactions_contentTitle),
  "default": () => (/* binding */ active_transactions_MDXContent),
  frontMatter: () => (/* binding */ active_transactions_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ active_transactions_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_compact-active-stacks.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "컴팩트한 액티브 스택 수집",
  "id": "컴팩트한-액티브-스택-수집",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, InDoc} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "컴팩트한-액티브-스택-수집",
      children: "컴팩트한 액티브 스택 수집"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "액티브 스택은 스레드 덤프를 정기적으로 수행하기 때문에 잘못 구현되면 에이전트에 오버헤드가 커질 수 있습니다. 와탭은 에이전트 부하를 최소화하면서 액티브 스택을 수집하기 위해 다양한 옵션들을 가지고 있습니다."
    }), (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_agentsConfiguration",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), " 메뉴에서 스레드 목록 중 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "WhaTap-ActiveStackDump"
        }), " 스레드의 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "cpu_time",
          className: "uitext"
        }), "을 확인하면 오버헤드를 판단할 수 있습니다."]
      })
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "액티브 스택 예시"
      })
    }), (0,jsx_runtime.jsx)(InDoc, {
      product: "java,python",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='JAVA'",
          children: "java.lang.StringBuffer.append(StringBuffer.java:309)\njava.util.regex.Matcher.appendReplacement(Matcher.java:839)\njava.util.regex.Matcher.replaceAll(Matcher.java:906)\njava.lang.String.replaceAll(String.java:2162)\ncore.log.triggers.TriggerRegister.changeNotify(TriggerRegister.java:114)\ncore.log.aop.handler.DaoInfo.log(DaoInfo.java:141)\ncore.log.aop.handler.DaoInfo.doAround(DaoInfo.java:102)\ncore.log.aop.reflection.profiler.AroundProfiler.invoke(AroundProfiler.java:19)\ncom.sun.proxy.$Proxy39.getUpdateCount(Unknown Source)\norg.apache.ibatis.executor.resultset.DefaultResultSetHandler.getNextResultSet(DefaultResultSetHandler.java:256)\norg.apache.ibatis.executor.resultset.DefaultResultSetHandler.handleResultSets(DefaultResultSetHandler.java:193)\norg.apache.ibatis.executor.statement.PreparedStatementHandler.query(PreparedStatementHandler.java:64)\n\n* * *\n\nsun.reflect.GeneratedMethodAccessor140.invoke(Unknown Source)\nsun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\njava.lang.reflect.Method.invoke(Method.java:606)\norg.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:221)\norg.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:136)\norg.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:114)\norg.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:827)\n"
        })
      })
    }), (0,jsx_runtime.jsx)(InDoc, {
      product: "dotnet",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-csharp",
          metastring: "title='.NET'",
          children: "DomainNeutralILStubClass.IL_STUB_ReversePInvoke(Int64,Int64,Int64,Int32)\nSystem.Web.Hosting.PipelineRuntime.ProcessRequestNotification(IntPtr,IntPtr,IntPtr,Int32)\nSystem.Web.Hosting.PipelineRuntime.ProcessRequestNotificationHelper(IntPtr,IntPtr,IntPtr,Int32)\nDomainNeutralILStubClass.IL_STUB_PInvoke(IntPtr,System.Web.RequestNotificationStatus ByRef)\nSystem.Threading.ThreadHelper.ThreadStart()\nSystem.Threading.ExecutionContext.Run(System.Threading.ExecutionContext,System.Threading.ContextCallback,System.Object)\nSystem.Threading.ExecutionContext.Run(System.Threading.ExecutionContext,System.Threading.ContextCallback,System.Object,Boolean)\nSystem.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext,System.Threading.ContextCallback,System.Object,Boolean)\nSystem.Net.TimerThread.ThreadProc()\nSystem.Threading.WaitHandle.WaitAny(System.Threading.WaitHandle[],Int32,Boolean)\nSystem.Threading.Thread.Sleep(Int32)\n"
        })
      })
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "최적화된 데이터 수집"
      })
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "트랜잭션을 수행 중인 스레드에 대해서만 스택을 덤프합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "액티브 스택 덤프 시간 간격을 조정할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "active_stack_second=10\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "액티브 스택의 최대 라인에 제한되어 있습니다. Top 라인에서부터 기본 50라인을 수집합니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "trace_active_callstack_depth=50\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "액티브 스택의 각 라인은 해시 처리되어 수집됩니다. text는 한 번만 수집됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "한 타임에 수집되는 최대 액티브 스택 개수도 제한되어 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "active_stack_count=100\n"
          })
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


// EXTERNAL MODULE: ./docs/common-items/_background-thread.mdx
var _background_thread = __webpack_require__(58964);
;// CONCATENATED MODULE: ./docs/common-items/_active-transaction.mdx


const _active_transaction_frontMatter = {};
const _active_transaction_contentTitle = (/* unused pure expression or super */ null && (undefined));







const _active_transaction_toc = [...toc, ..._background_thread/* toc */.RM, {
  "value": "참고 자료",
  "id": "참고-자료",
  "level": 2
}];
function _active_transaction_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["진행 중인 트랜잭션을 액티브 트랜잭션이라고 합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "액티브 트랜잭션에서 정기적으로 덤프한 스택을 액티브 스택"
      }), "이라 합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 에이전트는 매 10초(옵션 가능)마다 액티브 트랜잭션에 대해서 액티브 스택을 덤프하고 이것을 서버에 전송합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "active_stack_second=10"
        })]
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_background_thread/* default */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "참고-자료",
        children: "참고 자료"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://brunch.co.kr/@leedongins/152",
            children: "액티브 트랜잭션"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://brunch.co.kr/@leedongins/31",
            children: "장애를 가장 빠르게 알아내는 액티브 트랜잭션"
          })
        }), "\n"]
      })]
    })]
  });
}
function _active_transaction_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_active_transaction_createMdxContent, {
      ...props
    })
  }) : _active_transaction_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/java/active-transactions.mdx


const active_transactions_frontMatter = {
	id: 'active-transactions',
	title: '액티브 트랜잭션',
	description: '액티브 트랜잭션을 안내합니다.',
	tags: [
		'Java',
		'트랜잭션',
		'액티브 트랜잭션',
		'UI',
		'애플리케이션',
		'애플리케이션 모니터링'
	]
};
const active_transactions_contentTitle = undefined;
const metadata = {
  "id": "java/active-transactions",
  "title": "액티브 트랜잭션",
  "description": "액티브 트랜잭션을 안내합니다.",
  "source": "@site/docs/java/active-transactions.mdx",
  "sourceDirName": "java",
  "slug": "/java/active-transactions",
  "permalink": "/java/active-transactions",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/active-transactions.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Java",
      "permalink": "/tags/java"
    },
    {
      "inline": true,
      "label": "트랜잭션",
      "permalink": "/tags/트랜잭션"
    },
    {
      "inline": true,
      "label": "액티브 트랜잭션",
      "permalink": "/tags/액티브-트랜잭션"
    },
    {
      "inline": true,
      "label": "UI",
      "permalink": "/tags/ui"
    },
    {
      "inline": true,
      "label": "애플리케이션",
      "permalink": "/tags/애플리케이션"
    },
    {
      "inline": true,
      "label": "애플리케이션 모니터링",
      "permalink": "/tags/애플리케이션-모니터링"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "active-transactions",
    "title": "액티브 트랜잭션",
    "description": "액티브 트랜잭션을 안내합니다.",
    "tags": [
      "Java",
      "트랜잭션",
      "액티브 트랜잭션",
      "UI",
      "애플리케이션",
      "애플리케이션 모니터링"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "트랜잭션 트레이싱",
    "permalink": "/java/trs-profile"
  },
  "next": {
    "title": "멀티 트랜잭션",
    "permalink": "/java/trs-multi-trace"
  }
};
const assets = {

};




const active_transactions_toc = [..._active_transaction_toc];
function active_transactions_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(_active_transaction_MDXContent, {});
}
function active_transactions_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(active_transactions_createMdxContent, {
      ...props
    })
  }) : active_transactions_createMdxContent(props);
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