"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["96300"], {
"39017": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_apidoc_openapi_call_prject_stat_mdx_c1f_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-apidoc-openapi-call-prject-stat-mdx-c1f.json
var site_docs_apidoc_openapi_call_prject_stat_mdx_c1f_namespaceObject = JSON.parse('{"id":"apidoc/openapi-call-project-stat","title":"프로젝트 통계 조회","description":"프로젝트 통계 조회를 위한 Open API에 대한 설명을 제공합니다.","source":"@site/docs/apidoc/openapi-call-prject-stat.mdx","sourceDirName":"apidoc","slug":"/apidoc/openapi-call-project-stat","permalink":"/apidoc/openapi-call-project-stat","draft":false,"unlisted":false,"editUrl":"undefined/docs/apidoc/openapi-call-prject-stat.mdx","tags":[],"version":"current","frontMatter":{"id":"openapi-call-project-stat","title":"프로젝트 통계 조회","description":"프로젝트 통계 조회를 위한 Open API에 대한 설명을 제공합니다.","keywords":["Open API","API","통계","프로젝트 통계 조회"],"isTranslationMissing":false},"sidebar":"openapiSidebar","previous":{"title":"Database","permalink":"/apidoc/openapi-call-db"},"next":{"title":"장기 통계","permalink":"/apidoc/openapi-call-long-stat"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/apidoc/openapi-call-prject-stat.mdx


const frontMatter = {
	id: 'openapi-call-project-stat',
	title: '프로젝트 통계 조회',
	description: '프로젝트 통계 조회를 위한 Open API에 대한 설명을 제공합니다.',
	keywords: [
		'Open API',
		'API',
		'통계',
		'프로젝트 통계 조회'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "프로젝트 내 TPS",
  "id": "프로젝트-내-tps",
  "level": 2
}, {
  "value": "프로젝트 내 평균 응답 시간",
  "id": "프로젝트-내-평균-응답-시간",
  "level": 2
}, {
  "value": "프로젝트 내 평균 CPU 사용률",
  "id": "프로젝트-내-평균-cpu-사용률",
  "level": 2
}, {
  "value": "프로젝트 내 데이터 소스별 DB Connection 수",
  "id": "프로젝트-내-데이터-소스별-db-connection-수",
  "level": 2
}, {
  "value": "IP 기반 트랜잭션 검색",
  "id": "ip-기반-트랜잭션-검색",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "프로젝트-내-tps",
        children: "프로젝트 내 TPS"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/raw/tag/app_counter/tps",
          children: "https://api.whatap.io/open/api/raw/tag/app_counter/tps"
        }), "?", (0,jsx_runtime.jsx)("code", {
          children: "stitme"
        }), "=[stime]&", (0,jsx_runtime.jsx)("code", {
          children: "etime"
        }), "=[etime]&", (0,jsx_runtime.jsx)("code", {
          children: "timeMerge"
        }), "=[timeMerge]"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/raw/tag/app_counter/tps?stime=1554163200000&etime=1554422400000&timeMerge=avg\"\n"
        })
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "66.0\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "프로젝트-내-평균-응답-시간",
        children: "프로젝트 내 평균 응답 시간"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/raw/tag/app_counter/resp_time",
          children: "https://api.whatap.io/open/api/raw/tag/app_counter/resp_time"
        }), "?", (0,jsx_runtime.jsx)("code", {
          children: "stitme"
        }), "=[stime]&", (0,jsx_runtime.jsx)("code", {
          children: "etime"
        }), "=[etime]&", (0,jsx_runtime.jsx)("code", {
          children: "timeMerge"
        }), "=[timeMerge]"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/raw/tag/app_counter/resp_time?stime=1554163200000&etime=1554422400000&timeMerge=avg\"\n"
        })
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "1640\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "프로젝트-내-평균-cpu-사용률",
        children: "프로젝트 내 평균 CPU 사용률"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/raw/tag/app_host_resource/cpu",
          children: "https://api.whatap.io/open/api/raw/tag/app_host_resource/cpu"
        }), "?", (0,jsx_runtime.jsx)("code", {
          children: "stitme"
        }), "=[stime]&", (0,jsx_runtime.jsx)("code", {
          children: "etime"
        }), "=[etime]&", (0,jsx_runtime.jsx)("code", {
          children: "timeMerge"
        }), "=[timeMerge]"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/raw/tag/app_host_resource/cpu?stime=1554163200000&etime=1554422400000&timeMerge=avg\"\n"
        })
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "11.05\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "프로젝트-내-데이터-소스별-db-connection-수",
        children: "프로젝트 내 데이터 소스별 DB Connection 수"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/tag/db_pool_detail/dbconn",
          children: "https://api.whatap.io/open/api/tag/db_pool_detail/dbconn"
        }), "?", (0,jsx_runtime.jsx)("code", {
          children: "stitme"
        }), "=[stime]&", (0,jsx_runtime.jsx)("code", {
          children: "etime"
        }), "=[etime]&", (0,jsx_runtime.jsx)("code", {
          children: "timeMerge"
        }), "=[timeMerge]"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/tag/db_pool_detail/dbconn?stime=1554163200000&etime=1554422400000&timeMerge=avg\"\n"
        })
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\n  \"pcode\":35,\n  \"time\":1554163200000,\n  \"dbc_total\":[\n    {\n      \"oid\":-963710734,\n      \"oname\":\"TC-29-96-8082\",\n      \"jdbc:db:virtual\":\"jdbc:db:virtual\",\n      \"active\":49,\n      \"idle\":51,\n      \"total\":100\n    },\n  ]\n}\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "ip-기반-트랜잭션-검색",
        children: "IP 기반 트랜잭션 검색"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["사용자가 지정한 시작 시간(", (0,jsx_runtime.jsx)(_components.code, {
          children: "stime"
        }), ")으로부터 1시간 동안, 특정 IP가 요청한 트랜잭션을 호출 건수 많은 순으로 정렬하여 최대 100건의 URL 목록을 전달합니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("span", {
          class: "apitype",
          children: "POST"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/v2/yard/flush",
          children: "https://api.whatap.io/open/api/v2/yard/flush"
        })]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=\"command\"",
          children: "curl --location 'https://api.whatap.io/open/api/v2/yard/flush' \\\n--header 'x-whatap-token: {{PROJECT API TOKEN}}' \\\n--header 'x-whatap-pcode: {{projectCode}}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"type\": \"profiles\",\n    \"path\": \"/filter/search\",\n    \"pcode\": \"{{projectCode}}\",\n    \"params\": {\n        \"stime\": {{stime}},\n        \"filter\": {\n            \"ip\": \"{{ip}}\"\n        }\n    }\n}'\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Response Field"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Field Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "elapsed"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "number"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["시작 시간(", (0,jsx_runtime.jsx)(_components.code, {
                children: "stime"
              }), ") 기준으로부터 경과 시간"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "count"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HTTP 호출 건수"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "url"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클라이언트가 요청한 트랜잭션 이름"
            })]
          })]
        })]
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