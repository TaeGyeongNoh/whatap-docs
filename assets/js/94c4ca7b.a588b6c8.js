"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["79338"], {
"79738": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_okta_mdx_94c_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-okta-mdx-94c.json
var site_docs_account_okta_mdx_94c_namespaceObject = JSON.parse('{"id":"account/okta","title":"Okta 연동","description":"SSO 계정 연동을 통해서 하나의 아이디와 비밀번호를 이용해 간편하게 계정을 관리하세요.","source":"@site/docs/account/okta.mdx","sourceDirName":"account","slug":"/account/okta","permalink":"/account/okta","draft":false,"unlisted":false,"editUrl":"undefined/docs/account/okta.mdx","tags":[],"version":"current","frontMatter":{"id":"okta","title":"Okta 연동","description":"SSO 계정 연동을 통해서 하나의 아이디와 비밀번호를 이용해 간편하게 계정을 관리하세요.","keywords":["SSO","계정","보안"],"displayed_sidebar":"manageSidebar","isTranslationMissing":false},"sidebar":"manageSidebar","previous":{"title":"Single Sign-On 연동","permalink":"/account/sso"},"next":{"title":"Microsoft Entra ID 연동","permalink":"/account/ms-entra-id"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/account/okta.mdx


const frontMatter = {
	id: 'okta',
	title: 'Okta 연동',
	description: 'SSO 계정 연동을 통해서 하나의 아이디와 비밀번호를 이용해 간편하게 계정을 관리하세요.',
	keywords: [
		'SSO',
		'계정',
		'보안'
	],
	displayed_sidebar: 'manageSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Okta 연동하기",
  "id": "integrateokta",
  "level": 2
}, {
  "value": "와탭에서 SSO 키 발급하기",
  "id": "generatessokey",
  "level": 3
}, {
  "value": "Okta 인증 설정하기",
  "id": "settingokta",
  "level": 3
}, {
  "value": "Okta 메타데이터 복사하기",
  "id": "copymetadata",
  "level": 3
}, {
  "value": "와탭에서 External IdP 정보 등록하기",
  "id": "registerexternalidp",
  "level": 3
}, {
  "value": "사용자 할당하기",
  "id": "사용자-할당하기",
  "level": 2
}, {
  "value": "SSO 연동 확인하기",
  "id": "checksso",
  "level": 2
}, {
  "value": "SSO 키 삭제하기",
  "id": "sso-키-삭제하기",
  "level": 2
}, {
  "value": "External Idp 정보 수정/삭제하기",
  "id": "external-idp-정보-수정삭제하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["클라우드 기반의 사용자 계정 관리 및 접근 권한 관리 솔루션인 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Okta"
      }), "와 와탭 모니터링을 연동할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Okta"
      }), "는 높은 수준의 보안 환경에서 수많은 애플리케이션을 하나의 계정으로 로그인할 수 있는 솔루션입니다. 조직 내에서 사용 중인 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Okta"
      }), " 계정으로 와탭 서비스에 로그인하고 주어진 권한 내에서 서비스를 이용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["와탭 로그인 연동을 위해 사용자는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Okta"
            }), " 계정을 가지고 있어야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Okta"
            }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.okta.com",
              children: "다음 링크"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "integrateokta",
        children: "Okta 연동하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음 안내에 따라 와탭 모니터링 서비스에 Okta 연동을 설정하세요."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "generatessokey",
        children: "와탭에서 SSO 키 발급하기"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "와탭 모니터링 서비스"
            }), "에 로그인하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "화면 오른쪽 위에 프로필 아이콘을 선택하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["팝업 메뉴가 나타나면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "MNU07360",
              className: "uitext"
            }), "를 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["화면 왼쪽 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "ssoIntegrations",
              className: "uitext"
            }), "을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Service provider ID (WhaTap)"
              })
            }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07473",
              className: "uitext"
            }), "에서 Key Name을 입력하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Key Name은 사용자가 임의로 입력할 수 있습니다."
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "sso-service-key.png",
            desc: "Service provider ID"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07473",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL07478",
              className: "uitext"
            }), "에서 ", (0,jsx_runtime.jsx)("span", {
              class: "uitext",
              children: "EntityID"
            }), "와 ", (0,jsx_runtime.jsx)("span", {
              class: "uitext",
              children: "Sign-On URL"
            }), " 항목의 값을 확인하고 복사하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "sso-check-sso-info.png",
            desc: "sso-info"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SSO 키는 최대 5개까지 발급할 수 있으며 각각 고유의 인증 정보 값을 가지고 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN07476",
                className: "uitext"
              }), " 버튼을 선택해 SSO 키를 추가하고 이후의 과정을 진행하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["추가된 SSO 정보는 ", (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Key Name"
                })
              }), " 항목에서 목록 상자를 선택해 확인할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "settingokta",
        children: "Okta 인증 설정하기"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Okta 관리자 페이지"
            }), "로 접속하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Applcations"
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Applications"
            }), " 메뉴로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Create App Integration"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Create a new app integration"
            }), " 팝업 창이 나타나면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SAML 2.0"
            }), " 항목을 클릭한 다음 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "App name"
            }), " 항목을 입력한 다음 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SAML Settings"
            }), " 섹션의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "General"
            }), " 항목들을 차례로 입력하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Okta - SAML Settings",
              src: (__webpack_require__(13820)/* ["default"] */.Z) + "",
              width: "600",
              height: "442"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Single sign-on URL"
                }), ": 와탭에서 발급 받은 SSO 정보 중 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Sign-On URL"
                  })
                }), " 값을 입력하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Audience URI"
                }), " (", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "SP Entity ID"
                }), "): 와탭에서 발급 받은 SSO 정보 중 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "EntityID"
                  })
                }), " 값을 입력하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Application username"
                }), " 목록에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Email"
                }), "을 선택하세요."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Attribute Statements"
            }), " (", (0,jsx_runtime.jsx)(_components.strong, {
              children: "optional"
            }), ")에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Name"
            }), " 항목에는 'email'을 입력한 다음, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Value"
            }), " 항목에서는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "user.email"
            }), "을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Okta - Attribute Statements",
              src: (__webpack_require__(35343)/* ["default"] */.Z) + "",
              width: "600",
              height: "189"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["다음 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "This is an internal app that we have created"
            }), " 항목을 선택한 다음 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "copymetadata",
        children: "Okta 메타데이터 복사하기"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Okta 관리자 페이지"
            }), "로 접속하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Applcations"
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Applications"
            }), " 메뉴로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Sign On"
            }), " 탭을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Metadata URL"
            }), " 항목에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Copy"
            }), " 버튼을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Metadata URL",
              src: (__webpack_require__(85874)/* ["default"] */.Z) + "",
              width: "600",
              height: "582"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["복사한 값을 등록하기 위해 와탭의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "ssoIntegrations",
              className: "uitext"
            }), " 메뉴로 이동하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "registerexternalidp",
        children: "와탭에서 External IdP 정보 등록하기"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["와탭 모니터링 서비스에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "ssoIntegrations",
              className: "uitext"
            }), " 메뉴로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL07484",
              className: "uitext"
            }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07491",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "sso-externalidp-button.png",
            desc: "External IdP"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07491",
              className: "uitext"
            }), " 창이 나타나면 ", (0,jsx_runtime.jsx)("b", {
              children: "Okta"
            }), "에서 복사한 ", (0,jsx_runtime.jsx)("b", {
              children: "Metadata URL"
            }), " 값을 ", (0,jsx_runtime.jsx)("span", {
              class: "uitext",
              children: "Metadata"
            }), " 항목에 붙여넣기하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["인증 데이터를 자동 변환하기 위해 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07494",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "SSO 연동을 완료했습니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "사용자-할당하기",
        children: "사용자 할당하기"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Okta 관리자 페이지"
            }), "로 접속하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Applcations"
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Applications"
            }), " 메뉴로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "목록에서 앞서 추가한 애플리케이션을 선택하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Assignments"
            }), " 탭을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Assign"
            }), " 버튼을 클릭한 다음 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assign to People"
            }), " (또는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assign to Groups"
            }), ")을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Assignments",
              src: (__webpack_require__(55438)/* ["default"] */.Z) + "",
              width: "600",
              height: "536"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["원하는 사용자를 할당(", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assign"
            }), ")하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Assignments",
              src: (__webpack_require__(49611)/* ["default"] */.Z) + "",
              width: "600",
              height: "205"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Save and Go Back"
            }), " 버튼을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Assignments",
              src: (__webpack_require__(73298)/* ["default"] */.Z) + "",
              width: "600",
              height: "213"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["모든 과정을 완료한 다음 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Done"
            }), " 버튼을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Assignments",
              src: (__webpack_require__(88205)/* ["default"] */.Z) + "",
              width: "600",
              height: "526"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "checksso",
        children: "SSO 연동 확인하기"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Okta 관리자 페이지"
            }), "로 접속하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Applcations"
            }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Applications"
            }), " 메뉴로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "목록에서 앞서 추가한 애플리케이션을 선택하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "General"
            }), " 탭을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["화면 아래로 스크롤하여 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "App Embed Link"
            }), "로 이동하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Okta - App Embed Link",
              src: (__webpack_require__(80884)/* ["default"] */.Z) + "",
              width: "600",
              height: "199"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Embed Link"
            }), " 항목에 url을 복사하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "웹 브라우저에서 복사한 url로 이동하세요."
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "와탭 모니터링 서비스 화면으로 로그인되면 정상 연동된 것입니다."
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "최초 SSO 연동 시 와탭에 해당 이메일 계정이 있을 경우 비밀번호 인증을 통한 연계 정보 등록(자동) 절차가 필요합니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "이메일이 없을 경우 필수 정보 입력 후 와탭 회원 가입 및 연계 정보 등록이 자동으로 처리됩니다."
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "sso-키-삭제하기",
        children: "SSO 키 삭제하기"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["와탭 모니터링 서비스에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "ssoIntegrations",
              className: "uitext"
            }), " 메뉴로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Service provider ID (WhaTap)"
              })
            }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL07478",
              className: "uitext"
            }), "에서 삭제하려는 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Key Name"
              })
            }), "을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "sso-delete-sso-key.png",
            desc: "Delete SSO Key"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07481",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["삭제 확인 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07481",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "external-idp-정보-수정삭제하기",
        children: "External Idp 정보 수정/삭제하기"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["와탭 모니터링 서비스에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "ssoIntegrations",
              className: "uitext"
            }), " 메뉴로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL07484",
              className: "uitext"
            }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07490",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07490",
              className: "uitext"
            }), " 창이 나타나면 ", (0,jsx_runtime.jsx)("span", {
              class: "uitext",
              children: "Meatadata"
            }), " 항목에 ", (0,jsx_runtime.jsx)("b", {
              children: "Okta 메타데이터"
            }), "를 붙여넣기하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["인증 데이터를 자동 변환하기 위한 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07494",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "tip",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "External Idp"
          }), " 정보를 삭제하려면 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "BTN07490",
            className: "uitext"
          }), " 버튼을 클릭한 다음 팝업 창에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "delete",
            className: "uitext"
          }), " 버튼을 선택하세요."]
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
"80884": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/okta-app-embed-link-b4af165875b432b3a243a546b6d44ff0.png");

}),
"35343": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/okta-attribute-statements-08b8db2af601e039bf2956e3bd9f757f.png");

}),
"13820": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/okta-samil-settings-general-f0d1f369584724a2dc61e8e7355ca362.png");

}),
"85874": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/okta-sign-on-b74de35e8bcd036fa9a87b0ce8119ec6.png");

}),
"88205": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/sso-assignments-assign-done-36b34c3711ee923bc292af0bc8c8c812.png");

}),
"49611": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/sso-assignments-assign-people-2b233f13637d4dd60080ac3f6ce6830f.png");

}),
"73298": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/sso-assignments-assign-save-c28daa8156751403858a84efdc763116.png");

}),
"55438": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/sso-assignments-assign-8a4c385c9e4d10b5b0d37c909e31b158.png");

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