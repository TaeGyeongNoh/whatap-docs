"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["33994"], {
"90110": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "다음 단계",
  "id": "다음-단계",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, InDoc, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "다음-단계",
      children: "다음 단계"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "nodejs",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "nextstep",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "설치 점검하기"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["프로젝트 생성 및 에이전트 설치까지 모두 적용했다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "install-check",
                children: "다음 문서"
              }), "에서 점검 사항을 확인하세요."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "설치 문제 해결"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["에이전트 설치 시 발생할 수 있는 다양한 문제들과 이를 해결하기 위한 구체적인 지침을 제공합니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "agent-troubleshooting",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "에이전트 설정"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["에이전트 설정(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "whatap.conf"
              }), ") 파일에 옵션을 적용해 모니터링을 위한 다양한 기능을 제공합니다. 기본 설정부터 서버 연결 및 데이터 전송 설정, 여러 애플리케이션 서버의 설정 파일 관리 방법, 트랜잭션 추적 등을 포함합니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "set-agent",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "모니터링 시작하기"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["모든 설정을 완료한 다음 애플리케이션 서버를 다시 시작하세요. 에이전트가 정보를 수집하기 시작합니다. 먼저 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_appDashboard",
                className: "uitext"
              }), " 메뉴에서 모니터링 데이터가 수집되는지 확인하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_appDashboard",
                className: "uitext"
              }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "dashboard",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n"]
        })
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "nodejs",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "nextstep",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "설치 점검하기"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["프로젝트 생성 및 에이전트 설치까지 모두 적용했다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "install-check",
                children: "다음 문서"
              }), "에서 점검 사항을 확인하세요."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "에이전트 설정"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["에이전트 설정(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "whatap.conf"
              }), ") 파일에 옵션을 적용해 모니터링을 위한 다양한 기능을 제공합니다. 기본 설정부터 서버 연결 및 데이터 전송 설정, 여러 애플리케이션 서버의 설정 파일 관리 방법, 트랜잭션 추적 등을 포함합니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "set-agent",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "모니터링 시작하기"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["모든 설정을 완료한 다음 애플리케이션 서버를 다시 시작하세요. 에이전트가 정보를 수집하기 시작합니다. 먼저 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_appDashboard",
                className: "uitext"
              }), " 메뉴에서 모니터링 데이터가 수집되는지 확인하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_appDashboard",
                className: "uitext"
              }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "dashboard",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n"]
        })
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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



}),
"48030": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_nodejs_install_agent_svelte_mdx_e14_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-nodejs-install-agent-svelte-mdx-e14.json
var site_docs_nodejs_install_agent_svelte_mdx_e14_namespaceObject = JSON.parse('{"id":"nodejs/install-agent-svelte","title":"Svelte 환경 설치","description":"Svelte와 같은 서버 사이드 렌더링(SSR) 프레임워크에서 Node.js 애플리케이션 모니터링을 위해 Custom Server 설정을 안내합니다.","source":"@site/docs/nodejs/install-agent-svelte.mdx","sourceDirName":"nodejs","slug":"/nodejs/install-agent-svelte","permalink":"/nodejs/install-agent-svelte","draft":false,"unlisted":false,"editUrl":"undefined/docs/nodejs/install-agent-svelte.mdx","tags":[],"version":"current","frontMatter":{"id":"install-agent-svelte","title":"Svelte 환경 설치","description":"Svelte와 같은 서버 사이드 렌더링(SSR) 프레임워크에서 Node.js 애플리케이션 모니터링을 위해 Custom Server 설정을 안내합니다.","keywords":["Node.js","Svelte","에이전트"],"isTranslationMissing":false},"sidebar":"nodejsSidebar","previous":{"title":"Nuxt.js 환경 설치","permalink":"/nodejs/install-agent-nuxtjs"},"next":{"title":"설치 점검","permalink":"/nodejs/install-check"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_apm-next-stemp-exclude-java.mdx
var _apm_next_stemp_exclude_java = __webpack_require__("90110");
;// CONCATENATED MODULE: ./docs/nodejs/install-agent-svelte.mdx


const frontMatter = {
	id: 'install-agent-svelte',
	title: 'Svelte 환경 설치',
	description: 'Svelte와 같은 서버 사이드 렌더링(SSR) 프레임워크에서 Node.js 애플리케이션 모니터링을 위해 Custom Server 설정을 안내합니다.',
	keywords: [
		'Node.js',
		'Svelte',
		'에이전트'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*다음 단계*/



const toc = [{
  "value": "에이전트 설치하기",
  "id": "installagent",
  "level": 2
}, {
  "value": "에이전트 파일 구성",
  "id": "agentfiles",
  "level": 2
}, {
  "value": "svelte.config.js 코드 작성하기",
  "id": "svelteconfigjs-코드-작성하기",
  "level": 2
}, {
  "value": "Whatap 에이전트 초기화",
  "id": "whatap-에이전트-초기화",
  "level": 3
}, {
  "value": "애플리케이션 실행하기",
  "id": "애플리케이션-실행하기",
  "level": 2
}, ..._apm_next_stemp_exclude_java/* toc */.d$];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Filetree, FiletreeItem} = _components;
  if (!Filetree) _missingMdxReference("Filetree", true);
  if (!FiletreeItem) _missingMdxReference("FiletreeItem", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SvelteKit"
      }), "과 같은 서버사이드 렌더링(Server-Side Rendering, SSR) 프레임워크에서 애플리케이션 모니터링을 위해 커스텀 서버 설정이 필요합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SvelteKit"
      }), "은 기본적으로 빌드된 결과를 다양한 환경에 배포할 수 있도록 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "어댑터"
      }), "(", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adapter"
      }), ")를 사용합니다. Node.js 에이전트를 적용하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SvelteKit"
      }), "의 설정 파일(", (0,jsx_runtime.jsx)(_components.strong, {
        children: "svelte.config.js"
      }), ")에 코드를 추가해야 합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["참고 자료: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://kit.svelte.dev/docs/configuration",
              children: "Svelte Configuration"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이 문서는 svelte v3.54.0, sveltekit v1.5 가이드 문서 기준으로 작성되었습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "installagent",
        children: "에이전트 설치하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음 명령어를 이용해 에이전트를 설치하세요."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=\"BASH\"",
          children: "npm install whatap\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "agentfiles",
        children: "에이전트 파일 구성"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "에이전트 파일 구성은 다음을 참조하세요."
      }), (0,jsx_runtime.jsxs)(Filetree, {
        name: "whatap",
        children: [(0,jsx_runtime.jsx)(FiletreeItem, {
          name: "package.json",
          type: "file",
          children: "샘플 애플리케이션 정보와 의존성(dependency) 관리 문서 파일입니다."
        }), (0,jsx_runtime.jsx)(FiletreeItem, {
          name: "whatap.conf",
          type: "file",
          children: "모니터링을 위한 에이전트의 정보 및 액세스 키, 와탭 데이터 수집 서버의 IP 정보 등을 저장하는 설정 파일입니다."
        }), (0,jsx_runtime.jsx)(FiletreeItem, {
          name: "security.conf (or paramkey.txt)",
          type: "file",
          children: "SQL 변수, HTTP 쿼리를 조회하거나 Thread 중지 기능을 이용할 때 입력하는 보안키를 저장합니다."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "svelteconfigjs-코드-작성하기",
        children: "svelte.config.js 코드 작성하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Svelte"
        }), " 애플리케이션 인스턴스를 위한 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "svelte.config.js"
        }), " 파일을 수정하세요. 이 파일은 프로젝트의 루트(Root) 경로에 위치합니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "whatap-에이전트-초기화",
        children: "Whatap 에이전트 초기화"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          metastring: "title=\"svelte.config.js\"",
          children: "import WhatapAgent from 'whatap'; // ESM Module\nWhatapAgent.NodeAgent;\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "애플리케이션-실행하기",
        children: "애플리케이션 실행하기"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=\"SH\"",
          children: "npm run preview\n"
        })
      }), (0,jsx_runtime.jsx)(_apm_next_stemp_exclude_java/* default */.ZP, {})]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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



}),
"50065": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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


}),

}]);