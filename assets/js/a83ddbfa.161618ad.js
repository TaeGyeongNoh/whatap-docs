"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["36472"], {
"56746": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_altibase_v_1_agent_data_mdx_a83_namespaceObject),
  contentTitle: () => (/* binding */ agent_data_contentTitle),
  "default": () => (/* binding */ agent_data_MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ agent_data_toc),
  frontMatter: () => (/* binding */ agent_data_frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-altibase-v-1-agent-data-mdx-a83.json
var site_docs_altibase_v_1_agent_data_mdx_a83_namespaceObject = JSON.parse('{"id":"altibase-v1/agent-data","title":"에이전트 데이터 수집","description":"데이터베이스 서버의 정보를 수집하는 설정에 대한 설명입니다.","source":"@site/docs/altibase-v1/agent-data.mdx","sourceDirName":"altibase-v1","slug":"/altibase-v1/agent-data","permalink":"/altibase-v1/agent-data","draft":false,"unlisted":false,"editUrl":"undefined/docs/altibase-v1/agent-data.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-data","title":"에이전트 데이터 수집","description":"데이터베이스 서버의 정보를 수집하는 설정에 대한 설명입니다.","keywords":["Altibase","데이터베이스","데이터베이스 모니터링","에이전트"],"isTranslationMissing":false},"sidebar":"altibasev1Sidebar","previous":{"title":"AWS CloudWatch 이용","permalink":"/altibase-v1/agent-aws"},"next":{"title":"관리하기","permalink":"/altibase-v1/agent-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/common-items/_db-agent-data.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {InDoc} = _components;
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "데이터베이스 서버의 정보를 수집하는 설정에 대한 설명입니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "multi_db_stat"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "1"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["multi db의 stat 정보 수집 처리 유무를 설정합니다. oracle(pluggable db인 경우)과 postgresql에서만 유효합니다. db instance 내의 각 db 별로 stat 수집 여부를 설정하며 수집 부하를 줄이기 위해 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          }), "으로 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "long_run_session_sec"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Second"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "10"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "설정한 시간보다 길게 수행되고 있는 세션을 long run 세션으로 처리합니다. (단위: 초)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "tables_hour"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "5"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["테이블 정보를 저장하기 위해 정보를 수집하는 시각을 설정합니다. 기본값으로 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "5"
          }), "이며 새벽 5시에 수집을 시작합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "tables_exclude_sys"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["테이블 정보를 수집할 때 sys 소유인 테이블 정보의 수집 유무를 설정합니다. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          }), "로 설정하면 sys 소유의 테이블 정보는 수집하지 않습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(InDoc, {
      product: "oracle,tibero",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "tables_min_size"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Int"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "테이블 정보를 수집할 때 설정한 값보다 작은 크기의 테이블 정보는 수집하지 않습니다. 테이블 데이터를 수집하는 최소 단위로 기본값은 10MB 입니다."
          }), "\n"]
        }), "\n"]
      })
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


;// CONCATENATED MODULE: ./docs/altibase-v1/agent-data.mdx


const agent_data_frontMatter = {
	id: 'agent-data',
	title: '에이전트 데이터 수집',
	description: '데이터베이스 서버의 정보를 수집하는 설정에 대한 설명입니다.',
	keywords: [
		'Altibase',
		'데이터베이스',
		'데이터베이스 모니터링',
		'에이전트'
	],
	isTranslationMissing: false
};
const agent_data_contentTitle = undefined;

const assets = {

};




const agent_data_toc = [...toc];
function agent_data_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(MDXContent, {});
}
function agent_data_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_data_createMdxContent, {
      ...props
    })
  }) : agent_data_createMdxContent(props);
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