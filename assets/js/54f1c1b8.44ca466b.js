"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["91271"], {
"77267": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_focus_install_focus_mdx_54f_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-focus-install-focus-mdx-54f.json
var site_docs_focus_install_focus_mdx_54f_namespaceObject = JSON.parse('{"id":"focus/install-focus","title":"설치하기","description":"와탭 Focus를 설치하는 방법을 제공합니다.","source":"@site/docs/focus/install-focus.mdx","sourceDirName":"focus","slug":"/focus/install-focus","permalink":"/focus/install-focus","draft":false,"unlisted":false,"editUrl":"undefined/docs/focus/install-focus.mdx","tags":[],"version":"current","frontMatter":{"id":"install-focus","title":"설치하기","description":"와탭 Focus를 설치하는 방법을 제공합니다.","keywords":["Focus","설치하기"],"isTranslationMissing":false},"sidebar":"pluginSidebar","previous":{"title":"지원 환경","permalink":"/focus/supported-spec"},"next":{"title":"설정하기","permalink":"/focus/focus-setting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/focus/install-focus.mdx


const frontMatter = {
	id: 'install-focus',
	title: '설치하기',
	description: '와탭 Focus를 설치하는 방법을 제공합니다.',
	keywords: [
		'Focus',
		'설치하기'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*구성 수정 필요*/


const toc = [{
  "value": "실행 파일 다운로드",
  "id": "실행-파일-다운로드",
  "level": 2
}, {
  "value": "64 bit Debian / Ubuntu / Red Hat / CentOS / Amazon Linux / SUSE",
  "id": "64-bit-debian--ubuntu--red-hat--centos--amazon-linux--suse",
  "level": 3
}, {
  "value": "64 bit OSX",
  "id": "64-bit-osx",
  "level": 3
}, {
  "value": "64 bit FreeBSD",
  "id": "64-bit-freebsd",
  "level": 3
}, {
  "value": "64 bit OSX",
  "id": "64-bit-osx-1",
  "level": 3
}, {
  "value": "64 bit Windows",
  "id": "64-bit-windows",
  "level": 3
}, {
  "value": "ArmV5 Linux",
  "id": "armv5-linux",
  "level": 3
}, {
  "value": "ArmV6 Linux",
  "id": "armv6-linux",
  "level": 3
}, {
  "value": "ArmV7 Linux",
  "id": "armv7-linux",
  "level": 3
}, {
  "value": "Arm64 Linux",
  "id": "arm64-linux",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
  }, {Details} = _components;
  if (!Details) _missingMdxReference("Details", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "와탭 포커스는 단일 실행 파일로 구성되어 별도의 설치 과정이나 등록 과정이 불필요합니다. 실행 파일을 다운로드해 임의의 위치에서 실행할 수 있습니다."
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "실행-파일-다운로드",
        children: "실행 파일 다운로드"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "와탭 Focus는 단일 실행 파일로 구성되어 버전별로 다운로드해 바로 사용할 수 있습니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "64-bit-debian--ubuntu--red-hat--centos--amazon-linux--suse",
        children: "64 bit Debian / Ubuntu / Red Hat / CentOS / Amazon Linux / SUSE"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "wget http://repo.whatap.io/focus/linux_amd64/focus\nchmod +x ./focus\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "64-bit-osx",
        children: "64 bit OSX"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "wget http://repo.whatap.io/focus/darwin_amd64/focus\nchmod +x ./focus\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "64-bit-freebsd",
        children: "64 bit FreeBSD"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "wget http://repo.whatap.io/focus/freebsd_amd64/focus\nchmod +x ./focus\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "64-bit-osx-1",
        children: "64 bit OSX"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "wget http://repo.whatap.io/focus/darwin_amd64/focus\nchmod +x ./focus\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "64-bit-windows",
        children: "64 bit Windows"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "Invoke-WebRequest -Uri http://repo.whatap.io/focus/windows_amd64/focus.exe -OutFile focus.exe\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "armv5-linux",
        children: "ArmV5 Linux"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "wget http://repo.whatap.io/focus/linux_arm_5/focus\nchmod +x ./focus\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "armv6-linux",
        children: "ArmV6 Linux"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "wget http://repo.whatap.io/focus/linux_arm_6/focus\nchmod +x ./focus\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "armv7-linux",
        children: "ArmV7 Linux"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "wget http://repo.whatap.io/focus/linux_arm_7/focus\nchmod +x ./focus\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "arm64-linux",
        children: "Arm64 Linux"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "wget http://repo.whatap.io/focus/linux_amd64/focus\nchmod +x ./focus\n"
        })
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsx)("summary", {
          children: "Focus 파일 구성"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Linux / FreeBSD / OSX / Raspberry Pi OS"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "focus"
              }), ": 데이터 수집 및 전송 프로그램입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Windows"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "focus.exe"
              }), ": 데이터 수집 및 전송 프로그램입니다."]
            }), "\n"]
          }), "\n"]
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