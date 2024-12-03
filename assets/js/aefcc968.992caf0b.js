"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["91769"], {
"76538": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_telegraf_telegraf_plugin_install_mdx_aef_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-telegraf-telegraf-plugin-install-mdx-aef.json
var site_docs_telegraf_telegraf_plugin_install_mdx_aef_namespaceObject = JSON.parse('{"id":"telegraf/telegraf-plugin-install","title":"플러그인 설치","description":"Telegraf의 whatap output plugin(tcp)을 사용하는 방법을 안내합니다.","source":"@site/docs/telegraf/telegraf-plugin-install.mdx","sourceDirName":"telegraf","slug":"/telegraf/telegraf-plugin-install","permalink":"/telegraf/telegraf-plugin-install","draft":false,"unlisted":false,"editUrl":"undefined/docs/telegraf/telegraf-plugin-install.mdx","tags":[],"version":"current","frontMatter":{"id":"telegraf-plugin-install","title":"플러그인 설치","description":"Telegraf의 whatap output plugin(tcp)을 사용하는 방법을 안내합니다.","keywords":["Telegraf","플러그인","설치하기"],"isTranslationMissing":false},"sidebar":"pluginSidebar","previous":{"title":"Telegraf란?","permalink":"/telegraf/introduction"},"next":{"title":"설정하기","permalink":"/telegraf/telegraf-plugin-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__("47902");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__("5525");
;// CONCATENATED MODULE: ./docs/telegraf/telegraf-plugin-install.mdx


const frontMatter = {
	id: 'telegraf-plugin-install',
	title: '플러그인 설치',
	description: 'Telegraf의 whatap output plugin(tcp)을 사용하는 방법을 안내합니다.',
	keywords: [
		'Telegraf',
		'플러그인',
		'설치하기'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "whatap output plugin",
  "id": "whatap-output-plugin",
  "level": 2
}, {
  "value": "지원 환경",
  "id": "지원-환경",
  "level": 2
}, {
  "value": "다운로드 설치",
  "id": "다운로드-설치",
  "level": 2
}, {
  "value": "Telegraf release 버전",
  "id": "telegraf-release-버전",
  "level": 3
}, {
  "value": "컴파일 설치",
  "id": "installcompile",
  "level": 2
}, {
  "value": "사전 준비 사항",
  "id": "사전-준비-사항",
  "level": 3
}, {
  "value": "설치 과정",
  "id": "설치-과정",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "whatap-output-plugin",
        children: "whatap output plugin"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Telegraf의 whatap output plugin(tcp)을 활용해 Telegraf에서 수집하는 메트릭스를 와탭 수집 서버로 전달할 수 있습니다. 수집된 데이터는 whatap의 프로젝트 내부에서 확인 가능합니다."
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Telegraf 플러그인은 사용자가 해당 서비스에 직접 설치하고 설정해야 합니다."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "지원-환경",
        children: "지원 환경"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["다음 목록에 있는 운영체제는 다운로드 설치가 가능합니다. 다른 운영체제는 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#installcompile",
          children: "컴파일 설치"
        }), "로 진행해 주세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "macOS"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Red Hat & CentOS"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Ubuntu & Debian"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "FreeBSD"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "windows"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "다운로드-설치",
        children: "다운로드 설치"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Telegraf release 버전을 기준으로 whatap plugin을 추가하여 미리 생성한 설치 파일입니다. Telegraf가 이미 설치되었으면 실행 파일만 교체해 whatap plugin을 활성화할 수 있습니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "telegraf-release-버전",
        children: "Telegraf release 버전"
      }), (0,jsx_runtime.jsxs)(Tabs/* default */.Z, {
        children: [(0,jsx_runtime.jsx)(TabItem/* default */.Z, {
          value: "1211",
          label: "1.21.1",
          default: true,
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Red Hat & CentOS"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.21.1/linux/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.21.1/linux/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.21.1/linux/amd64/telegraf-1.21.1-1.amd64.rpm",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.21.1/linux/amd64/telegraf-1.21.1-1.amd64.rpm"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.21.1/linux/amd64/telegraf-1.21.1_linux_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.21.1/linux/amd64/telegraf-1.21.1_linux_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Ubuntu & Debian"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.21.1/linux/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.21.1/linux/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.21.1/linux/amd64/telegraf_1.21.1-1_amd64.deb",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.21.1/linux/amd64/telegraf_1.21.1-1_amd64.deb"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf-1.21.1_linux_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf-1.21.1_linux_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          })
        }), (0,jsx_runtime.jsx)(TabItem/* default */.Z, {
          value: "1160",
          label: "1.16.0",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "macOS"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/darwin/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/darwin/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/darwin/amd64/telegraf-1.16.0_darwin_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/darwin/amd64/telegraf-1.16.0_darwin_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Red Hat & CentOS"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf-1.16.0-1.x86_64.rpm",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf-1.16.0-1.x86_64.rpm"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf-1.16.0_linux_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf-1.16.0_linux_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Ubuntu & Debian"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf_1.16.0-1_amd64.deb",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf_1.16.0-1_amd64.deb"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf-1.16.0_linux_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/linux/amd64/telegraf-1.16.0_linux_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "FreeBSD"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/freebsd/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/freebsd/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/freebsd/amd64/telegraf-1.16.0_freebsd_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/freebsd/amd64/telegraf-1.16.0_freebsd_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "windows"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/windows/amd64/telegraf.exe",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/windows/amd64/telegraf.exe"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/windows/amd64/telegraf-1.16.0_windows_amd64.zip",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0/windows/amd64/telegraf-1.16.0_windows_amd64.zip"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          })
        }), (0,jsx_runtime.jsx)(TabItem/* default */.Z, {
          value: "1154",
          label: "1.15.4",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "macOS"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/darwin/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/darwin/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/darwin/amd64/telegraf-1.15.4_darwin_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/darwin/amd64/telegraf-1.15.4_darwin_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Red Hat & CentOS"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/linux/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/linux/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/linux/amd64/telegraf-1.15.4-1.x86_64.rpm",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/linux/amd64/telegraf-1.15.4-1.x86_64.rpm"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/linux/amd64/telegraf-1.15.4_linux_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/linux/amd64/telegraf-1.15.4_linux_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Ubuntu & Debian"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/linux/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/linux/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/linux/amd64/telegraf_1.15.4-1_amd64.deb",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/linux/amd64/telegraf_1.15.4-1_amd64.deb"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/linux/amd64/telegraf-1.15.4_linux_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/linux/amd64/telegraf-1.15.4_linux_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "FreeBSD"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/freebsd/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/freebsd/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/freebsd/amd64/telegraf-1.15.4_freebsd_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/freebsd/amd64/telegraf-1.15.4_freebsd_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "windows"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/windows/amd64/telegraf.exe",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/windows/amd64/telegraf.exe"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/windows/amd64/telegraf-1.15.4_windows_amd64.zip",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4/windows/amd64/telegraf-1.15.4_windows_amd64.zip"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          })
        }), (0,jsx_runtime.jsx)(TabItem/* default */.Z, {
          value: "1145",
          label: "1.14.5",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "macOS"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/darwin/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/darwin/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/darwin/amd64/telegraf-1.14.5_darwin_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/darwin/amd64/telegraf-1.14.5_darwin_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Red Hat & CentOS"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/linux/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/linux/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/linux/amd64/telegraf-1.14.5-1.x86_64.rpm",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/linux/amd64/telegraf-1.14.5-1.x86_64.rpm"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/linux/amd64/telegraf-1.14.5_linux_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/linux/amd64/telegraf-1.14.5_linux_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Ubuntu & Debian"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/linux/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/linux/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/linux/amd64/telegraf_1.14.5-1_amd64.deb",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/linux/amd64/telegraf_1.14.5-1_amd64.deb"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/linux/amd64/telegraf-1.14.5_linux_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/linux/amd64/telegraf-1.14.5_linux_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "FreeBSD"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/freebsd/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/freebsd/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/freebsd/amd64/telegraf-1.14.5_freebsd_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/freebsd/amd64/telegraf-1.14.5_freebsd_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "windows"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/windows/amd64/telegraf.exe",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/windows/amd64/telegraf.exe"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/windows/amd64/telegraf-1.14.5_windows_amd64.zip",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5/windows/amd64/telegraf-1.14.5_windows_amd64.zip"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          })
        }), (0,jsx_runtime.jsx)(TabItem/* default */.Z, {
          value: "1132",
          label: "1.13.2",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "macOS"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/darwin/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/darwin/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/darwin/amd64/telegraf-1.13.0~842282d_darwin_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/darwin/amd64/telegraf-1.13.0~842282d_darwin_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Red Hat & CentOS"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/linux/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/linux/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/linux/amd64/telegraf-1.13.0~842282d-0.x86_64.rpm",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/linux/amd64/telegraf-1.13.0~842282d-0.x86_64.rpm"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/linux/amd64/telegraf-1.13.0~842282d_linux_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/linux/amd64/telegraf-1.13.0~842282d_linux_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Ubuntu & Debian"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/linux/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/linux/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/linux/amd64/telegraf_1.13.0~842282d-0_amd64.deb",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/linux/amd64/telegraf_1.13.0~842282d-0_amd64.deb"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/linux/amd64/telegraf-1.13.0~842282d_linux_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/linux/amd64/telegraf-1.13.0~842282d_linux_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "FreeBSD"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/freebsd/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/freebsd/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/freebsd/amd64/telegraf-1.13.0~842282d_freebsd_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/freebsd/amd64/telegraf-1.13.0~842282d_freebsd_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "windows"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/windows/amd64/telegraf.exe",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/windows/amd64/telegraf.exe"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/windows/amd64/telegraf-1.13.0~842282d_windows_amd64.zip",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2/windows/amd64/telegraf-1.13.0~842282d_windows_amd64.zip"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          })
        }), (0,jsx_runtime.jsx)(TabItem/* default */.Z, {
          value: "112",
          label: "1.12",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "macOS"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.12/darwin/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.12/darwin/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.12/darwin/amd64/telegraf-1.12.0~842282d_darwin_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.12/darwin/amd64/telegraf-1.12.0~842282d_darwin_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Red Hat & CentOS"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.12/linux/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.12/linux/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.12/linux/amd64/telegraf-1.12.0~842282d-0.x86_64.rpm",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.12/linux/amd64/telegraf-1.12.0~842282d-0.x86_64.rpm"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.12/linux/amd64/telegraf-1.12.0~842282d_linux_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.12/linux/amd64/telegraf-1.12.0~842282d_linux_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Ubuntu & Debian"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.12/linux/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.12/linux/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.12/linux/amd64/telegraf_1.12.0~842282d-0_amd64.deb",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.12/linux/amd64/telegraf_1.12.0~842282d-0_amd64.deb"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.12/linux/amd64/telegraf-1.12.0~842282d_linux_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.12/linux/amd64/telegraf-1.12.0~842282d_linux_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "FreeBSD"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.12/freebsd/amd64/telegraf",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.12/freebsd/amd64/telegraf"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.12/freebsd/amd64/telegraf-1.12.0~842282d_freebsd_amd64.tar.gz",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.12/freebsd/amd64/telegraf-1.12.0~842282d_freebsd_amd64.tar.gz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "windows"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.12/windows/amd64/telegraf.exe",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.12/windows/amd64/telegraf.exe"
                  }), " (실행파일)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://repo.whatap.io/telegraf/telegraf-release-1.12/windows/amd64/telegraf-1.12.0~842282d_windows_amd64.zip",
                    children: "https://repo.whatap.io/telegraf/telegraf-release-1.12/windows/amd64/telegraf-1.12.0~842282d_windows_amd64.zip"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "installcompile",
        children: "컴파일 설치"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "사전-준비-사항",
        children: "사전 준비 사항"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Go SDK 구성"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "go dep 설치"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "소스 파일"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsxs)(_components.em, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "${GOPATH}"
              }), "/src/github.com/influxdata/telegraf/"]
            }), " 디렉터리 밑에 압축을 해제하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Telegraf release 버전에 whatap plugin을 포함한 소스 파일입니다."
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/telegraf/telegraf-release-1.12_whatap.tar.gz",
                children: "https://repo.whatap.io/telegraf/telegraf-release-1.12_whatap.tar.gz"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2_whatap.tar.gz",
                children: "https://repo.whatap.io/telegraf/telegraf-release-1.13.2_whatap.tar.gz"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5_whatap.tar.gz",
                children: "https://repo.whatap.io/telegraf/telegraf-release-1.14.5_whatap.tar.gz"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4_whatap.tar.gz",
                children: "https://repo.whatap.io/telegraf/telegraf-release-1.15.4_whatap.tar.gz"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0_whatap.tar.gz",
                children: "https://repo.whatap.io/telegraf/telegraf-release-1.16.0_whatap.tar.gz"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "설치-과정",
        children: "설치 과정"
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["상세한 빌드 안내는 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/influxdata/telegraf",
            children: "Telegraf github"
          }), " 페이지를 참조하세요."]
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsxs)(_components.em, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "${GOPATH}"
          }), "/src/github.com/influxdata/telegraf"]
        }), " 이하 Makefile로 빌드를 진행하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "의존성 설치를 진행하세요. 의존성 설치는 go dep을 사용하기 때문에 go dep이 먼저 설치되어야 합니다."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "# make deps\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["실행 파일을 빌드하세요. ", (0,jsx_runtime.jsxs)(_components.em, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "${GOPATH}"
              }), "/bin"]
            }), " 디렉터리에 실행 파일(telegraf)이 생성됩니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "# make go-install\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설치 패키지가 필요하면 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "make package"
            }), " 명령어로 생성할 수 있습니다. 크로스 컴파일을 진행하여 운영 체제별로 패키지 파일을 생성하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "# make package\n"
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
"5525": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("67026");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function TabItem(param) {
    let { children, hidden, className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "tabpanel",
        className: (0,clsx/* default */.Z)(styles_module.tabItem, className),
        hidden,
        children: children
    });
}


}),
"47902": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("67026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__("69599");
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__("16550");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__("32000");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__("4520");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__("38341");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__("76009");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp) {
    const { props } = comp;
    return !!props && typeof props === 'object' && 'value' in props;
}
function sanitizeTabsChildren(children) {
    return react.Children.toArray(children).filter((child)=>child !== '\n').map((child)=>{
        if (!child || /*#__PURE__*/ (0,react.isValidElement)(child) && isTabItem(child)) {
            return child;
        }
        // child.type.name will give non-sensical values in prod because of
        // minification, but we assume it won't throw in prod.
        throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
        typeof child.type === 'string' ? child.type : child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);
    })?.filter(Boolean) ?? [];
}
function extractChildrenTabValues(children) {
    return sanitizeTabsChildren(children).map((param)=>{
        let { props: { value, label, attributes, default: isDefault } } = param;
        return {
            value,
            label,
            attributes,
            default: isDefault
        };
    });
}
function ensureNoDuplicateValue(values) {
    const dup = (0,jsUtils/* duplicates */.lx)(values, (a, b)=>a.value === b.value);
    if (dup.length > 0) {
        throw new Error(`Docusaurus error: Duplicate values "${dup.map((a)=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);
    }
}
function useTabValues(props) {
    const { values: valuesProp, children } = props;
    return (0,react.useMemo)(()=>{
        const values = valuesProp ?? extractChildrenTabValues(children);
        ensureNoDuplicateValue(values);
        return values;
    }, [
        valuesProp,
        children
    ]);
}
function isValidValue(param) {
    let { value, tabValues } = param;
    return tabValues.some((a)=>a.value === value);
}
function getInitialStateValue(param) {
    let { defaultValue, tabValues } = param;
    if (tabValues.length === 0) {
        throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');
    }
    if (defaultValue) {
        // Warn user about passing incorrect defaultValue as prop.
        if (!isValidValue({
            value: defaultValue,
            tabValues
        })) {
            throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map((a)=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);
        }
        return defaultValue;
    }
    const defaultTabValue = tabValues.find((tabValue)=>tabValue.default) ?? tabValues[0];
    if (!defaultTabValue) {
        throw new Error('Unexpected error: 0 tabValues');
    }
    return defaultTabValue.value;
}
function getStorageKey(groupId) {
    if (!groupId) {
        return null;
    }
    return `docusaurus.tab.${groupId}`;
}
function getQueryStringKey(param) {
    let { queryString = false, groupId } = param;
    if (typeof queryString === 'string') {
        return queryString;
    }
    if (queryString === false) {
        return null;
    }
    if (queryString === true && !groupId) {
        throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);
    }
    return groupId ?? null;
}
function useTabQueryString(param) {
    let { queryString = false, groupId } = param;
    const history = (0,react_router/* useHistory */.k6)();
    const key = getQueryStringKey({
        queryString,
        groupId
    });
    const value = (0,historyUtils/* useQueryStringValue */._X)(key);
    const setValue = (0,react.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        const searchParams = new URLSearchParams(history.location.search);
        searchParams.set(key, newValue);
        history.replace({
            ...history.location,
            search: searchParams.toString()
        });
    }, [
        key,
        history
    ]);
    return [
        value,
        setValue
    ];
}
function useTabStorage(param) {
    let { groupId } = param;
    const key = getStorageKey(groupId);
    const [value, storageSlot] = (0,storageUtils/* useStorageSlot */.Nk)(key);
    const setValue = (0,react.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        storageSlot.set(newValue);
    }, [
        key,
        storageSlot
    ]);
    return [
        value,
        setValue
    ];
}
function useTabs(props) {
    const { defaultValue, queryString = false, groupId } = props;
    const tabValues = useTabValues(props);
    const [selectedValue, setSelectedValue] = (0,react.useState)(()=>getInitialStateValue({
            defaultValue,
            tabValues
        }));
    const [queryStringValue, setQueryString] = useTabQueryString({
        queryString,
        groupId
    });
    const [storageValue, setStorageValue] = useTabStorage({
        groupId
    });
    // We sync valid querystring/storage value to state on change + hydration
    const valueToSync = (()=>{
        const value = queryStringValue ?? storageValue;
        if (!isValidValue({
            value,
            tabValues
        })) {
            return null;
        }
        return value;
    })();
    // Sync in a layout/sync effect is important, for useScrollPositionBlocker
    // See https://github.com/facebook/docusaurus/issues/8625
    (0,useIsomorphicLayoutEffect/* default */.Z)(()=>{
        if (valueToSync) {
            setSelectedValue(valueToSync);
        }
    }, [
        valueToSync
    ]);
    const selectValue = (0,react.useCallback)((newValue)=>{
        if (!isValidValue({
            value: newValue,
            tabValues
        })) {
            throw new Error(`Can't select invalid tab value=${newValue}`);
        }
        setSelectedValue(newValue);
        setQueryString(newValue);
        setStorageValue(newValue);
    }, [
        setQueryString,
        setStorageValue,
        tabValues
    ]);
    return {
        selectedValue,
        selectValue,
        tabValues
    };
} //# sourceMappingURL=tabsUtils.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__("7227");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function TabList(param) {
    let { className, block, selectedValue, selectValue, tabValues } = param;
    const tabRefs = [];
    const { blockElementScrollPositionUntilNextRender } = (0,scrollUtils/* useScrollPositionBlocker */.o5)();
    const handleTabChange = (event)=>{
        const newTab = event.currentTarget;
        const newTabIndex = tabRefs.indexOf(newTab);
        const newTabValue = tabValues[newTabIndex].value;
        if (newTabValue !== selectedValue) {
            blockElementScrollPositionUntilNextRender(newTab);
            selectValue(newTabValue);
        }
    };
    const handleKeydown = (event)=>{
        let focusElement = null;
        switch(event.key){
            case 'Enter':
                {
                    handleTabChange(event);
                    break;
                }
            case 'ArrowRight':
                {
                    const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
                    focusElement = tabRefs[nextTab] ?? tabRefs[0];
                    break;
                }
            case 'ArrowLeft':
                {
                    const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
                    focusElement = tabRefs[prevTab] ?? tabRefs[tabRefs.length - 1];
                    break;
                }
            default:
                break;
        }
        focusElement?.focus();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        role: "tablist",
        "aria-orientation": "horizontal",
        className: (0,clsx/* default */.Z)('tabs', {
            'tabs--block': block
        }, className),
        children: tabValues.map((param)=>{
            let { value, label, attributes } = param;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                // TODO extract TabListItem
                role: "tab",
                tabIndex: selectedValue === value ? 0 : -1,
                "aria-selected": selectedValue === value,
                ref: (tabControl)=>tabRefs.push(tabControl),
                onKeyDown: handleKeydown,
                onClick: handleTabChange,
                ...attributes,
                className: (0,clsx/* default */.Z)('tabs__item', styles_module.tabItem, attributes?.className, {
                    'tabs__item--active': selectedValue === value
                }),
                children: label ?? value
            }, value);
        })
    });
}
function TabContent(param) {
    let { lazy, children, selectedValue } = param;
    const childTabs = (Array.isArray(children) ? children : [
        children
    ]).filter(Boolean);
    if (lazy) {
        const selectedTabItem = childTabs.find((tabItem)=>tabItem.props.value === selectedValue);
        if (!selectedTabItem) {
            // fail-safe or fail-fast? not sure what's best here
            return null;
        }
        return /*#__PURE__*/ (0,react.cloneElement)(selectedTabItem, {
            className: (0,clsx/* default */.Z)('margin-top--md', selectedTabItem.props.className)
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "margin-top--md",
        children: childTabs.map((tabItem, i)=>/*#__PURE__*/ (0,react.cloneElement)(tabItem, {
                key: i,
                hidden: tabItem.props.value !== selectedValue
            }))
    });
}
function TabsComponent(props) {
    const tabs = useTabs(props);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.Z)('tabs-container', styles_module.tabList),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabList, {
                ...tabs,
                ...props
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContent, {
                ...tabs,
                ...props
            })
        ]
    });
}
function Tabs(props) {
    const isBrowser = (0,useIsBrowser/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabsComponent, {
        ...props,
        children: sanitizeTabsChildren(props.children)
    }, String(isBrowser));
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