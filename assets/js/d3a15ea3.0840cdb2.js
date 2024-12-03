"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["34510"], {
"65": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_telegraf_telegraf_plugin_settings_mdx_d3a_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-telegraf-telegraf-plugin-settings-mdx-d3a.json
var site_docs_telegraf_telegraf_plugin_settings_mdx_d3a_namespaceObject = JSON.parse('{"id":"telegraf/telegraf-plugin-settings","title":"설정하기","description":"Telegraf의 config 파일을 통해 설정하는 방법을 알아봅니다.","source":"@site/docs/telegraf/telegraf-plugin-settings.mdx","sourceDirName":"telegraf","slug":"/telegraf/telegraf-plugin-settings","permalink":"/telegraf/telegraf-plugin-settings","draft":false,"unlisted":false,"editUrl":"undefined/docs/telegraf/telegraf-plugin-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"telegraf-plugin-settings","title":"설정하기","description":"Telegraf의 config 파일을 통해 설정하는 방법을 알아봅니다.","keywords":["Telegraf","설정하기"],"isTranslationMissing":false},"sidebar":"pluginSidebar","previous":{"title":"플러그인 설치","permalink":"/telegraf/telegraf-plugin-install"},"next":{"title":"지원 환경","permalink":"/telegraf/supported-spec"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/telegraf/telegraf-plugin-settings.mdx


const frontMatter = {
	id: 'telegraf-plugin-settings',
	title: '설정하기',
	description: 'Telegraf의 config 파일을 통해 설정하는 방법을 알아봅니다.',
	keywords: [
		'Telegraf',
		'설정하기'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "whatap 프로젝트 정보",
  "id": "whatap-프로젝트-정보",
  "level": 3
}, {
  "value": "config 설정(toml)",
  "id": "config-설정toml",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Telegraf의 config 파일(", (0,jsx_runtime.jsx)(_components.em, {
        children: "telegraf.conf"
      }), ")에 다음 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "outputs.whatap"
      }), " 설정을 활성화하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Telegraf 플러그인은 사용자가 해당 서비스에 직접 설정해야 합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "whatap plugin이 포함된 config 파일은 다음과 같이 생성할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title=SH",
        children: "# telegraf --sample-config > telegraf.conf\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "whatap-프로젝트-정보",
        children: "whatap 프로젝트 정보"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://service.whatap.io/",
          children: "홈 화면"
        }), "에서 프로젝트를 선택하고 프로젝트의 정보를 설정하세요. 연결할 프로젝트의 에이전트 설치 안내에서 확인 가능합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "프로젝트 액세스 키"
            }), " : 프로젝트를 식별하는 프로젝트 액세스 키입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "프로젝트 코드"
            }), " : 프로젝트를 식별하는 숫자형 코드입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "수집 서버 정보"
            }), "(IP, 포트) : 수집 정보를 전달할 와탭 수집 서버의 아이피와 포트입니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "config-설정toml",
        children: "config 설정(toml)"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-toml",
          metastring: "title='/etc/telegraf/telegraf.conf'",
          children: "# # Configuration for WhaTap\n[[outputs.whatap]]\n#   ## You can create a project on the WhaTap site(https://www.whatap.io)\n#   ## to get license, project code and server IP information.\n#\n#   ## WhaTap license. Required\nlicense = \"x2tggtnopk2t9-xxxxxxxxxx-aaaaaaaaaa\"\n#\n#   ## WhaTap project code. Required\npcode = 118\n#\n#   ## WhaTap server IP. Required\n#   # Put multiple IPs with / as delimiters. e.g. \"1.1.1.1/2.2.2.2\"\n\nservers = [\"tcp://1.2.3.4:6600\", \"tcp://5.6.7.8:6600\"]\n\n#   ## Connection timeout.\n#   # timeout = \"60s\"\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[[outputs.whatap]]"
            }), " 주석(#)을 삭제하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "license"
            }), "의 주석(#)을 삭제하세요. 프로젝트의 프로젝트 액세스 키 정보를 입력하세요. 문자형입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pcode"
            }), "의 주석(#)을 삭제하세요. 프로젝트 코드를 입력하세요. 숫자형입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "servers"
            }), "의 주석(#)을 삭제하세요. 수집 서버 정보(IP, 포트)를 설정하세요. 프로토콜은 tcp만 지원합니다. 문자 형식으로 \"tcp://아이피:포트\"를 등록하세요. 배열 형식으로 등록하세요. 콤마(,)로 구분하여 배열 형식으로 등록하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "caution",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Telegraf를 다시 시작해야 변경된 설정이 적용됩니다."
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