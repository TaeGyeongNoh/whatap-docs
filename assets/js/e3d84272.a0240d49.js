"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["37543"], {
"18421": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_db_dbx_1_6_11_mdx_e3d_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-db-dbx-1-6-11-mdx-e3d.json
var site_docs_release_notes_db_dbx_1_6_11_mdx_e3d_namespaceObject = JSON.parse('{"id":"release-notes/db/dbx-1_6_11","title":"DBX v1.6.11","description":"2023년 10월 4일","source":"@site/docs/release-notes/db/dbx-1.6.11.mdx","sourceDirName":"release-notes/db","slug":"/release-notes/db/dbx-1_6_11","permalink":"/release-notes/db/dbx-1_6_11","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/db/dbx-1.6.11.mdx","tags":[],"version":"current","frontMatter":{"id":"dbx-1_6_11","title":"DBX v1.6.11","toc_max_heading_level":2,"pagination_next":"release-notes/db/dbx-1_6_10","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"DBX v1.6.10","permalink":"/release-notes/db/dbx-1_6_10"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/db/dbx-1.6.11.mdx


const frontMatter = {
	id: 'dbx-1_6_11',
	title: 'DBX v1.6.11',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/db/dbx-1_6_10',
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "공통",
  "id": "공통",
  "level": 2
}, {
  "value": "PostgreSQL",
  "id": "postgresql",
  "level": 2
}, {
  "value": "MySQL",
  "id": "mysql",
  "level": 2
}, {
  "value": "Oracle",
  "id": "oracle",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2023년 10월 4일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "공통",
        children: "공통"
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)(Status, {
          children: "Fixed"
        }), " 세션 킬 기능이 정상 동작하더라도 '잘못된 파라미터 키' 메시지가 나타나는 버그 수정"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "postgresql",
        children: "PostgreSQL"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " deadtuple 수집 쿼리 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " 수집 간격이 1일인 카테고리는 5분 통계 데이터를 만들지 않도록 수정"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "mysql",
        children: "MySQL"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " Maria DB에서 table 사이즈가 수집 안되는 버그 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " 액티브 세션 state 값을 ", (0,jsx_runtime.jsx)("code", {
              children: "S"
            }), "에서 ", (0,jsx_runtime.jsx)("code", {
              children: "Sending data"
            }), "로 수정"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "oracle",
        children: "Oracle"
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)(Status, {
          children: "New"
        }), " 각종 ratio 지표 추가, 다음과 같이 옵션을 설정하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "ora_ratio=true\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "수집하는 지표는 다음과 같습니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "buffer cache hit ratio"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "soft parse ratio"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hard parse ratio"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "library cache hit ratio"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "library cache pin hit ratio"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "library cache get hit ratio"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "latch hit ratio"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "shared pool free mem ratio"
          })
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