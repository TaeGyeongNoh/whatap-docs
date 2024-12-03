"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["30851"], {
"33030": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_db_dbx_1_6_7_mdx_4b5_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-db-dbx-1-6-7-mdx-4b5.json
var site_docs_release_notes_db_dbx_1_6_7_mdx_4b5_namespaceObject = JSON.parse('{"id":"release-notes/db/dbx-1_6_7","title":"DBX v1.6.7","description":"2023년 6월 23일","source":"@site/docs/release-notes/db/dbx-1.6.7.mdx","sourceDirName":"release-notes/db","slug":"/release-notes/db/dbx-1_6_7","permalink":"/release-notes/db/dbx-1_6_7","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/db/dbx-1.6.7.mdx","tags":[],"version":"current","frontMatter":{"id":"dbx-1_6_7","title":"DBX v1.6.7","toc_max_heading_level":2,"pagination_next":"release-notes/db/dbx-1_6_6","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"DBX v1.6.6","permalink":"/release-notes/db/dbx-1_6_6"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/db/dbx-1.6.7.mdx


const frontMatter = {
	id: 'dbx-1_6_7',
	title: 'DBX v1.6.7',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/db/dbx-1_6_6',
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
  "value": "PostgreSQL V2",
  "id": "postgresql-v2",
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
  "value": "SQL Server",
  "id": "sql-server",
  "level": 2
}, {
  "value": "Oracle",
  "id": "oracle",
  "level": 2
}, {
  "value": "MongoDB",
  "id": "mongodb",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2023년 6월 23일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "공통",
        children: "공통"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " ", (0,jsx_runtime.jsx)("em", {
              children: "uid.sh"
            }), " 파일 실행 실패 시 로그 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " version.sh 추가"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Change"
            }), " IPV6 호스트를 읽을 수 있도록 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Change"
            }), " README 파일 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " db connection fail이 발생하면 ", (0,jsx_runtime.jsx)("code", {
              children: "fatal_count"
            }), " 추가"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "postgresql-v2",
        children: "PostgreSQL V2"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " ", (0,jsx_runtime.jsx)("code", {
              children: "db_postgresql_tables"
            }), " 카테고리 추가"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " ", (0,jsx_runtime.jsx)("code", {
              children: "index scan"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "seq scan"
            }), " 지표 추가"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " ", (0,jsx_runtime.jsx)("code", {
              children: "blk_read_time"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "blk_write_time"
            }), " 버그 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " ", (0,jsx_runtime.jsx)("code", {
              children: "db_postgresql_deadtuple"
            }), " 카테고리 필드 수정"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "postgresql",
        children: "PostgreSQL"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " cache 지표 추가"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " horizon_xid 추가"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " active session 컬럼 ", (0,jsx_runtime.jsx)("code", {
              children: "backend_type"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "backend_xmin"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "backend_xid"
            }), " 추가, V2에만 적용"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " conflict, tps 지표 추가"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " active session 컬럼으로 ", (0,jsx_runtime.jsx)("code", {
              children: "backend_type"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "backend_xmin"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "backend_xid"
            }), " 추가, V1 적용"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " max runtime 지표 추가"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " DB 이름 중복 버그 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Change"
            }), " xview 추가 및 pg statements 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " ", (0,jsx_runtime.jsx)("code", {
              children: "replication_lag"
            }), " 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " deadtuple 추가"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
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
            }), " MySQL 5.0 버전의 경우 active session 수집을 위한 로직 분리"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " Tablesize Filesize 추가"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "sql-server",
        children: "SQL Server"
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)(Status, {
          children: "Change"
        }), " dop 컬럼 추가, 13.x 버전 이상"]
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "oracle",
        children: "Oracle"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Change"
            }), " object info 추가 (2023-05-15, 2023-05-22)"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " wait 내용 추가"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "mongodb",
        children: "MongoDB"
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)(Status, {
          children: "Feature"
        }), " atlas 지원"]
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