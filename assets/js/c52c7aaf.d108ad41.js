"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["29812"], {
"7657": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_browser_browser_preset_mdx_c52_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-browser-browser-preset-mdx-c52.json
var site_docs_browser_browser_preset_mdx_c52_namespaceObject = JSON.parse('{"id":"browser/browser-preset","title":"사전설정","description":"브라우저 에이전트를 적용하기 위한 사전설정 방법을 제공합니다.","source":"@site/docs/browser/browser-preset.mdx","sourceDirName":"browser","slug":"/browser/browser-preset","permalink":"/browser/browser-preset","draft":false,"unlisted":false,"editUrl":"undefined/docs/browser/browser-preset.mdx","tags":[],"version":"current","frontMatter":{"id":"browser-preset","title":"사전설정","description":"브라우저 에이전트를 적용하기 위한 사전설정 방법을 제공합니다.","keywords":["브라우저 모니터링","사전설정"],"isTranslationMissing":false},"sidebar":"rumsSidebar","previous":{"title":"브라우저 호환성","permalink":"/browser/browser-compatibility"},"next":{"title":"브라우저 에이전트 적용","permalink":"/browser/apply-agent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/browser/browser-preset.mdx


const frontMatter = {
	id: 'browser-preset',
	title: '사전설정',
	description: '브라우저 에이전트를 적용하기 위한 사전설정 방법을 제공합니다.',
	keywords: [
		'브라우저 모니터링',
		'사전설정'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "콘텐츠 보안 정책 설정",
  "id": "콘텐츠-보안-정책-설정",
  "level": 2
}, {
  "value": "Timing-Allow-Origin 설정",
  "id": "timing-allow-origin-설정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "브라우저 에이전트를 적용하고 데이터 수집을 위해 다음 안내에 따라 사전설정을 진행하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "콘텐츠-보안-정책-설정",
        children: "콘텐츠 보안 정책 설정"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "기존 콘텐츠 보안 정책(Content Security Policy, 이하 CSP) 설정이 되어 있는 웹 애플리케이션의 경우 브라우저 에이전트의 CDN URL과 수집 데이터 전송을 위한 수집 서버의 URL을 추가해야 합니다."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "추가로 브라우저 에이전트가 효율적인 데이터 전송을 하기 위해 웹워커 관련 CSP 옵션을 추가해야합니다."
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "디렉티브(directive)"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "소스(source)"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "script-src, script-src-elem"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "unsafe-inline"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "브라우저 에이전트를 인라인 스크립트로 설치"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "script-src, script-src-elem"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap-browser-agent.io/rum/prod/",
                children: "https://repo.whatap-browser-agent.io/rum/prod/"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "브라우저 에이전트 CDN 도메인"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "connect-src"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://rum-ap-northeast-2.whatap-browser-agent.io",
                children: "https://rum-ap-northeast-2.whatap-browser-agent.io"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "수집한 데이터의 전송을 위한 도메인"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "worker-src, child-src"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "blob:"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "브라우저 에이전트가 효율적인 데이터 전송을 위한 웹워커 관련 CSP 옵션(권장사항)"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "timing-allow-origin-설정",
        children: "Timing-Allow-Origin 설정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["리소스를 제공하는 서버에 CORS를 적용하면 대부분의 리소스 타이밍 속성을 0으로 반환합니다. 브라우저 에이전트가 리소스의 속성 값을 수집하려면 서버에서 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Timing-Allow-Origin"
        }), " HTTP 응답 헤더를 반환해야 합니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "리소스를 제공하는 서버를 제어 가능한 경우 각 응답에 헤더를 추가하고 속성에 접근하는 모든 도메인(브라우저 에이전트를 적용한 웹사이트의 도메인)을 추가해야 합니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예시 1: 모든 출처에서 리소스 타이밍 정보를 제공합니다."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-json",
              children: "Timing-Allow-Origin: *\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예시 2: 브라우저 에이전트를 적용한 웹 애플리케이션의 도메인에서만 리소스 타이밍 정보를 제공합니다."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-json",
              children: "Timing-Allow-Origin: www.site.com\n"
            })
          }), "\n"]
        }), "\n"]
      })]
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