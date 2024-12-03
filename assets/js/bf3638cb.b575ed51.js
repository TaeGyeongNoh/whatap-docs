"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["52306"], {
"36469": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_reference_script_manager_mdx_bf3_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reference-script-manager-mdx-bf3.json
var site_docs_reference_script_manager_mdx_bf3_namespaceObject = JSON.parse('{"id":"reference/script-manager","title":"스크립트 매니저","description":"에이전트 설치 경로에 SQL 스크립트를 저장하면, 와탭 모니터링 서비스 화면에서 해당 스크립트를 불러와 실시간으로 수행 결과를 조회할 수 있습니다.","source":"@site/docs/reference/script-manager.mdx","sourceDirName":"reference","slug":"/reference/script-manager","permalink":"/reference/script-manager","draft":false,"unlisted":false,"editUrl":"undefined/docs/reference/script-manager.mdx","tags":[],"version":"current","frontMatter":{"id":"script-manager","title":"스크립트 매니저","description":"에이전트 설치 경로에 SQL 스크립트를 저장하면, 와탭 모니터링 서비스 화면에서 해당 스크립트를 불러와 실시간으로 수행 결과를 조회할 수 있습니다.","keywords":["데이터베이스","스크립트 매니저"],"displayed_sidebar":"dbSidebar","isTranslationMissing":false},"sidebar":"dbSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/reference/script-manager.mdx


const frontMatter = {
	id: 'script-manager',
	title: '스크립트 매니저',
	description: '에이전트 설치 경로에 SQL 스크립트를 저장하면, 와탭 모니터링 서비스 화면에서 해당 스크립트를 불러와 실시간으로 수행 결과를 조회할 수 있습니다.',
	keywords: [
		'데이터베이스',
		'스크립트 매니저'
	],
	displayed_sidebar: 'dbSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "SQL 스크립트 실행하기",
  "id": "sql-스크립트-실행하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_lab",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_dbScriptManager",
        className: "uitext"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "에이전트 설치 경로에 SQL 스크립트를 저장하면, 와탭 모니터링 서비스 화면에서 해당 스크립트를 불러와 실시간으로 수행 결과를 조회할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SQL 스크립트를 모니터링 도구 내에서 바로 불러와 실행할 수 있습니다. 이를 통해 추가적인 설정이나 외부 도구 없이도 빠르고 효율적으로 데이터를 조회할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 SQL 스크립트를 미리 저장하여 반복적으로 사용할 수 있어, 일관된 데이터를 지속적으로 모니터링하거나 분석할 때 유용합니다. 이는 수동 작업을 줄여 자동화된 프로세스를 구축하는 데 도움이 됩니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "시작하기-전에",
        children: "시작하기 전에"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_dbScriptManager",
          className: "uitext"
        }), " 메뉴에서 SQL 스크립트를 실행하려면 다음 단계를 따라 에이전트 설치 경로에 SQL 스크립트를 저장하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["에이전트 설치 경로 하위의 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "scripts"
            }), " 폴더로 이동하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(24658)/* ["default"] */.Z) + "",
              width: "1200",
              height: "338"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "데이터베티스 타입 폴더로 진입하세요. 원하는 폴더가 없으면 생성하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(14012)/* ["default"] */.Z) + "",
              width: "1200",
              height: "190"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "SQL 스크립트를 작성하세요. 이때 SQL 스크립트를 수행하는 계정은 에이전트에서 사용하는 계정입니다."
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(5926)/* ["default"] */.Z) + "",
              width: "1200",
              height: "80"
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["SQL 스크립트를 수행하는 계정은 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap.conf"
          }), " 파일에 명시했거나 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "uid.sh"
          }), " 파일에서 사용한 계정입니다."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "sql-스크립트-실행하기",
        children: "SQL 스크립트 실행하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 모니터링 서비스 홈 화면에서 데이터베이스 모니터링 상품 프로젝트를 선택하세요. ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_lab",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_dbScriptManager",
          className: "uitext"
        }), " 메뉴로 진입하세요."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "script-manager-screen.png",
        desc: "스크립트 매니저"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL08478",
              className: "uitext"
            }), " 섹션에서 SQL 스크립트를 실행할 에이전트를 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["화면 왼쪽에 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL08480",
              className: "uitext"
            }), "에서 실행할 스크립트를 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL08478",
              className: "uitext"
            }), " 섹션에서 선택한 스크립트의 SQL 문을 확인하고 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "run",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL08479",
              className: "uitext"
            }), " 섹션에서 조회 결과를 확인하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "에이전트 설치 경로별로 SQL 스크립트를 불러오기 때문에 각 에이전트에서 다른 스크립트 파일을 불러올 수 있습니다."
        })
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
"24658": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/script-manager-starting-step01-7e29eeaa5541799e4fe05b1d76193851.png");

}),
"14012": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/script-manager-starting-step02-c0669b307d973a102c797ef70bfc46f4.png");

}),
"5926": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/script-manager-starting-step03-38cb3654550a77e20c4b55dfadbe95c9.png");

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