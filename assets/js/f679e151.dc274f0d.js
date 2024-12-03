"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["26476"], {
"24185": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_server_server_2_3_8_mdx_f67_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-server-server-2-3-8-mdx-f67.json
var site_docs_release_notes_server_server_2_3_8_mdx_f67_namespaceObject = JSON.parse('{"id":"release-notes/server/server-2_3_8","title":"Server Agent v2.3.8","description":"배포 내역","source":"@site/docs/release-notes/server/server-2.3.8.mdx","sourceDirName":"release-notes/server","slug":"/release-notes/server/server-2_3_8","permalink":"/release-notes/server/server-2_3_8","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/server/server-2.3.8.mdx","tags":[],"version":"current","frontMatter":{"id":"server-2_3_8","title":"Server Agent v2.3.8","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/server/server-2.3.8.mdx


const frontMatter = {
	id: 'server-2_3_8',
	title: 'Server Agent v2.3.8',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "배포 내역",
  "id": "배포-내역",
  "level": 2
}, {
  "value": "다운로드",
  "id": "다운로드",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "배포-내역",
        children: "배포 내역"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "배포일: 2023년 6월 19일"
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)(Status, {
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)("code", {
          children: "nowrap_keywords"
        }), " 옵션으로 설정한 키워드를 검색하면 이전 로그에 병합하는 기능 추가"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "다운로드",
        children: "다운로드"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "RPM (Red Hat/CentOS/Amazon linux)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "6Server / 6"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["x86_64 ", (0,jsx_runtime.jsx)(_components.a, {
                      href: "http://repo.whatap.io/centos/6/x86_64/whatap-infra-2.3-8.x86_64.rpm",
                      children: "http://repo.whatap.io/centos/6/x86_64/whatap-infra-2.3-8.x86_64.rpm"
                    })]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["i386 ", (0,jsx_runtime.jsx)(_components.a, {
                      href: "http://repo.whatap.io/centos/6/i386/whatap-infra-1.2-4.i386.rpm",
                      children: "http://repo.whatap.io/centos/6/i386/whatap-infra-1.2-4.i386.rpm"
                    })]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "7Server / 7"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["x86_64 ", (0,jsx_runtime.jsx)(_components.a, {
                      href: "http://repo.whatap.io/centos/7/x86_64/whatap-infra-2.3-8.x86_64.rpm",
                      children: "http://repo.whatap.io/centos/7/x86_64/whatap-infra-2.3-8.x86_64.rpm"
                    })]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["aarch64 ", (0,jsx_runtime.jsx)(_components.a, {
                      href: "http://repo.whatap.io/centos/7/aarch64/whatap-infra-2.3-8.aarch64.rpm",
                      children: "http://repo.whatap.io/centos/7/aarch64/whatap-infra-2.3-8.aarch64.rpm"
                    })]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "8Server / 8"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["x86_64 ", (0,jsx_runtime.jsx)(_components.a, {
                      href: "http://repo.whatap.io/centos/8/x86_64/whatap-infra-2.3-8.x86_64.rpm",
                      children: "http://repo.whatap.io/centos/8/x86_64/whatap-infra-2.3-8.x86_64.rpm"
                    })]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["aarch64 ", (0,jsx_runtime.jsx)(_components.a, {
                      href: "http://repo.whatap.io/centos/8/aarch64/whatap-infra-2.3-8.aarch64.rpm",
                      children: "http://repo.whatap.io/centos/8/aarch64/whatap-infra-2.3-8.aarch64.rpm"
                    })]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "9Server / 9"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["x86_64 ", (0,jsx_runtime.jsx)(_components.a, {
                      href: "http://repo.whatap.io/centos/9/x86_64/whatap-infra-2.3-8.x86_64.rpm",
                      children: "http://repo.whatap.io/centos/9/x86_64/whatap-infra-2.3-8.x86_64.rpm"
                    })]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["aarch64 ", (0,jsx_runtime.jsx)(_components.a, {
                      href: "http://repo.whatap.io/centos/9/aarch64/whatap-infra-2.3-8.aarch64.rpm",
                      children: "http://repo.whatap.io/centos/9/aarch64/whatap-infra-2.3-8.aarch64.rpm"
                    })]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Amazon Linux2"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["x86_64 ", (0,jsx_runtime.jsx)(_components.a, {
                      href: "http://repo.whatap.io/centos/latest/x86_64/whatap-infra-2.3-8.x86_64.rpm",
                      children: "http://repo.whatap.io/centos/latest/x86_64/whatap-infra-2.3-8.x86_64.rpm"
                    })]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["aarch64 ", (0,jsx_runtime.jsx)(_components.a, {
                      href: "http://repo.whatap.io/centos/latest/aarch64/whatap-infra-2.3-8.aarch64.rpm",
                      children: "http://repo.whatap.io/centos/latest/aarch64/whatap-infra-2.3-8.aarch64.rpm"
                    })]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "DEB (Ubuntu/Debian)"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Ubuntu 12 and above"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["amd64 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "http://repo.whatap.io/debian/unstable/whatap-infra_2.3.8_amd64.deb",
                  children: "http://repo.whatap.io/debian/unstable/whatap-infra_2.3.8_amd64.deb"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["arm64 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "http://repo.whatap.io/debian/unstable/whatap-infra_2.3.8_arm64.deb",
                  children: "http://repo.whatap.io/debian/unstable/whatap-infra_2.3.8_arm64.deb"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["TXZ (Freebsd)\nFreebsd 10 and above ", (0,jsx_runtime.jsx)(_components.a, {
              href: "http://repo.whatap.io/freebsd/10/whatap-infra-1.1.2.txz",
              children: "http://repo.whatap.io/freebsd/10/whatap-infra-1.1.2.txz"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "EXE(Windows)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Windows Server 2008 R2 and above, 32/64bit ", (0,jsx_runtime.jsx)(_components.a, {
              href: "http://repo.whatap.io/windows/whatap_infra.zip",
              children: "http://repo.whatap.io/windows/whatap_infra.zip"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "PKG(SPARC)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SUNOS 11 and above, SPARC ", (0,jsx_runtime.jsx)(_components.a, {
              href: "http://repo.whatap.io/sunos/11/whatap-infra.1.21.SPARC.pkg.tar.gz",
              children: "http://repo.whatap.io/sunos/11/whatap-infra.1.21.SPARC.pkg.tar.gz"
            })]
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