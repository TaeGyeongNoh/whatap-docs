"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[86675],{

/***/ 49464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'session-replay',
	title: '세션 리플레이',
	description: '사용자가 웹 사이트에서 수행하는 모든 이벤트를 기록하고 재생할 수 있는 세션 리플레이 기능을 적용하는 방법을 안내합니다.',
	keywords: [
		'브라우저 모니터링',
		'에이전트',
		'세션 리플레이'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "browser/session-replay",
  "title": "세션 리플레이",
  "description": "사용자가 웹 사이트에서 수행하는 모든 이벤트를 기록하고 재생할 수 있는 세션 리플레이 기능을 적용하는 방법을 안내합니다.",
  "source": "@site/docs/browser/session-replay.mdx",
  "sourceDirName": "browser",
  "slug": "/browser/session-replay",
  "permalink": "/whatap-docs/browser/session-replay",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/browser/session-replay.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "session-replay",
    "title": "세션 리플레이",
    "description": "사용자가 웹 사이트에서 수행하는 모든 이벤트를 기록하고 재생할 수 있는 세션 리플레이 기능을 적용하는 방법을 안내합니다.",
    "keywords": [
      "브라우저 모니터링",
      "에이전트",
      "세션 리플레이"
    ]
  },
  "sidebar": "rumsSidebar",
  "previous": {
    "title": "사용자 세션 로그 검색",
    "permalink": "/whatap-docs/browser/user-session-log-search"
  },
  "next": {
    "title": "메트릭스",
    "permalink": "/whatap-docs/browser/metrics-intro"
  }
};
const assets = {

};



const toc = [{
  "value": "수집 방식",
  "id": "수집-방식",
  "level": 2
}, {
  "value": "민감 정보 수집 제외",
  "id": "민감-정보-수집-제외",
  "level": 3
}, {
  "value": "특정 영역 마스킹 처리하기",
  "id": "특정-영역-마스킹-처리하기",
  "level": 3
}, {
  "value": "에이전트 옵션 적용하기",
  "id": "set-agentoption",
  "level": 2
}, {
  "value": "세션 리플레이 이용하기",
  "id": "세션-리플레이-이용하기",
  "level": 2
}, {
  "value": "페이지 로드 히트맵",
  "id": "side_rumPageLoadHitmap",
  "level": 3
}, {
  "value": "AJAX 히트맵",
  "id": "side_ajaxAnalytics",
  "level": 3
}, {
  "value": "사용자 세션 로그 검색",
  "id": "side_userSessionEventSearch",
  "level": 3
}, {
  "value": "세션 리플레이 활용하기",
  "id": "usage",
  "level": 2
}, {
  "value": "세션 리플레이 플레이어",
  "id": "세션-리플레이-플레이어",
  "level": 3
}, {
  "value": "사용자 세션 정보",
  "id": "TTL07745",
  "level": 3
}, {
  "value": "사용자 세션 플로우",
  "id": "TTL07746",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, UI} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!UI) _missingMdxReference("UI", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "TTL08103",
        className: "uitext"
      }), "는 사용자가 웹 사이트에서 수행하는 모든 이벤트를 기록하고 재생할 수 있는 기능입니다. 이 기능을 통해 클릭, 스크롤, 입력, 페이지 전환 등의 사용자 행동을 재현할 수 있습니다. 이를 통해 사용자가 실제로 웹사이트와 어떻게 상호 작용하는지 정확히 파악할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "사용자 행동 기록 및 재생"
          }), ": 세션 리플레이는 사용자 행동을 기록합니다. 기록된 사용자의 행동은 마우스 이동, 클릭, 스크롤 등을 포함합니다. 기록된 사용자의 행동을 그대로 재생하여 특정 시점에 무엇을 했는지 시각적으로 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "에러 추적 및 장애 재현"
          }), ": 특정 이벤트나 오류 발생 시점을 추적하여 장애 원인을 분석할 수 있습니다. 페이지를 불러오는데 오랜 시간이 문제나 화면에서 발생하는 기타 기술적 결함이 사용자에게 어떻게 보여지는지 시각적으로 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08103",
          className: "uitext"
        }), " 기능은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "log_read",
          className: "b600"
        }), " 권한을 가진 멤버가 이용할 수 있습니다. 멤버 권한 체계에 대한 자세한 설명은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "../project/project-structure#project-auth",
          children: "다음 문서"
        }), "를 참조하세요."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "수집-방식",
        children: "수집 방식"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "실제 화면을 녹화하거나 이미지로 캡처하는 대신, DOM 변경 사항과 CSS 스타일 정보 등을 텍스트 형태로 수집합니다. 이때 오버헤드를 방지하기 위해 브라우저의 메인 스레드가 유휴 상태일 때만 변경 사항을 수집하고 데이터를 전송합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "민감-정보-수집-제외",
        children: "민감 정보 수집 제외"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "민감 정보에 대한 수집 제외 방식을 기본 제공합니다. 화면의 모든 텍스트는 다음과 같이 마스킹 처리되어 수집됩니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-session-replay-masking-example.png",
        desc: "Session replay"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "특정-영역-마스킹-처리하기",
        children: "특정 영역 마스킹 처리하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "텍스트 외에도 개인 식별 정보나 민감한 데이터가 포함될 수 있으며, 이를 보호하기 위해 특정 영역을 마스킹 처리하는 옵션이 제공합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Masking",
          src: (__webpack_require__(2973)/* ["default"] */ .A) + "",
          width: "600",
          height: "451"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["수집 대상에서 제외할 영역에 대한 html 요소(element)의 클래스 이름(class name)에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "session-replay-ignore-class"
        }), "를 추가하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-html",
          metastring: "showLineNumbers {1}",
          children: "<div class=\"session-replay-ignore-class home-header pure-menu pure-menu-horizontal\">\n  <div class=\"home-header-bar\">\n    {% if site.data.archive %}\n    <ul class=\"home-header-menu pure-menu-list\">\n      {% for item in site.data.archive %}\n        <li class=\"pure-menu-item\">\n          <a href=\"{{ item.url | relative_url }}\" class=\"pure-menu-link {% if page.url == item.url %}current-item{% endif %}\"\">{{ item.title }}</a>\n        </li>\n      {% endfor %}\n    </ul>\n    {% endif %}\n  </div>\n</div>\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "set-agentoption",
        children: "에이전트 옵션 적용하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["세션 리플레이 기능을 적용하려면 브라우저 에이전트 옵션을 적용해야 합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "config"
        }), " 객체에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "sessionReplaySampleRate"
        }), " 속성을 0부터 100까지 설정할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "showLineNumbers {8}",
          children: "<script>\n(function (w, h, _a, t, a, b) {\n    w = w[a] = w[a] || {\n        config: {\n            projectAccessKey: {projec_access_key},\n            pcode: {pcode},\n            sampleRate: 100,\n            sessionReplaySampleRate: 50,\n            proxyBaseUrl: \"https://rum-ap-northeast-2.whatap-browser-agent.io/\",\n        },\n    };\n    a = h.createElement(_a);\n    a.async = 1;\n    a.src = t;\n    t = h.getElementsByTagName(_a)[0];\n    t.parentNode.insertBefore(a, t);\n})(window, document, 'script', 'https://repo.whatap-browser-agent.io/rum/prod/v1/whatap-browser-agent.js', 'WhatapBrowserAgent', '');\n</script>\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["수집하는 세션 중에서 세션 리플레이를 적용할 세션의 비율을 설정할 수 있습니다. 예를 들어, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "sampleRate"
        }), "가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "100"
        }), "이고 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "sessionReplaySampleRate"
        }), "가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "50"
        }), "이라면, 전체 세션 중 50%만 세션 리플레이로 기록됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["반면에, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "sampleRate"
        }), "가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "50"
        }), "이고 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "sessionReplaySampleRate"
        }), "가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "100"
        }), "이라면, 전체 세션의 50%가 수집 대상이며, 이 중 100%가 세션 리플레이로 기록됩니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "세션-리플레이-이용하기",
        children: "세션 리플레이 이용하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08103",
          className: "uitext"
        }), " 기능은 다음 메뉴 경로에서 이용할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_analysis",
              className: "uitext"
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_rumPageLoadHitmap",
              className: "uitext"
            })]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_analysis",
              className: "uitext"
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_ajaxAnalytics",
              className: "uitext"
            })]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_analysis",
              className: "uitext"
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_userSessionEventSearch",
              className: "uitext"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "side_rumPageLoadHitmap",
        children: "페이지 로드 히트맵"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_analysis",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_rumPageLoadHitmap",
          className: "uitext"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-pageloadhitmap-session-replay.png",
        desc: "페이지 로드 히트맵"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "page_load",
              className: "uitext"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "hitmap",
              className: "uitext"
            }), " 차트에서 특정 영역을 드래그하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "page",
              className: "uitext"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "list",
              className: "uitext"
            }), "에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08103"
            }), " 기능을 확인할 항목의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "상세 아이콘",
              src: (__webpack_require__(65557)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "page_load",
              className: "uitext"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "detail",
              className: "uitext"
            }), " 창이 나타나면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08103",
              className: "uitext"
            }), " 탭을 선택하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "side_ajaxAnalytics",
        children: "AJAX 히트맵"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_analysis",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_ajaxAnalytics",
          className: "uitext"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-ajaxhitmap-session-replay.png",
        desc: "AJAX 히트맵"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_ajaxAnalytics",
              className: "uitext"
            }), " 차트에서 특정 영역을 드래그하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "ajax",
              className: "uitext"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "analysis",
              className: "uitext"
            }), " 창이 나타나면 목록에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08103"
            }), " 기능을 확인할 항목을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["오른쪽 화면에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08103",
              className: "uitext"
            }), " 탭을 선택하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "side_userSessionEventSearch",
        children: "사용자 세션 로그 검색"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_analysis",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_userSessionEventSearch",
          className: "uitext"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-usersessionlog-session-replay.png",
        desc: "사용자 세션 로그 검색"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "time",
              className: "uitext"
            }), "에서 조회하길 원하는 시간을 설정하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["화면 오른쪽에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "검색 아이콘",
              src: (__webpack_require__(13732)/* ["default"] */ .A) + "",
              width: "35",
              height: "29"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["조회 결과 목록에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08103"
            }), " 기능을 확인할 항목의 가장 오른쪽에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "analysis",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07736",
              className: "uitext"
            }), " 창이 나타나면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08103",
              className: "uitext"
            }), " 탭을 선택하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "usage",
        children: "세션 리플레이 활용하기"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "세션-리플레이-플레이어",
        children: "세션 리플레이 플레이어"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "기록된 사용자 행동 이벤트를 재생하여 실제 사용자가 화면을 어떻게 조작하는지 확인할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "세션 리플레이 플레이어",
          src: (__webpack_require__(60676)/* ["default"] */ .A) + "",
          width: "800",
          height: "394"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "재생 아이콘",
              src: (__webpack_require__(92872)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "일시정지 아이콘",
              src: (__webpack_require__(59648)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " : 기록된 사용자 행동 이벤트를 재생하거나 일시 정지할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
              children: "1x"
            }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
              children: "2x"
            }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
              children: "3x"
            }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
              children: "4x"
            }), ": 재생 속도를 조절할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "전체화면 아이콘",
              src: (__webpack_require__(62512)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " : 플레이어 화면을 전체 화면으로 확대할 수 있습니다. 전체 화면을 종료하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ESC"
            }), " 키를 누르세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "타임라인을 드래그하여 원하는 위치로 이동할 수 있습니다. 마우스 상호 작용이 없는 구간은 밝은 회색으로 표시됩니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Timeline",
              src: (__webpack_require__(43370)/* ["default"] */ .A) + "",
              width: "600",
              height: "22"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "TTL07745",
        children: "사용자 세션 정보"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08103",
          className: "uitext"
        }), " 화면 오른쪽에서는 실제 사용자의 세션 정보를 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-session-replay-user-info.png",
        desc: "사용자 세션 정보"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "browser",
            className: "uitext"
          }), ": 최종 사용자가 사용한 브라우저 종류"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "os",
            className: "uitext"
          }), ": 최종 사용자가 사용한 기기의 운영체제 종류"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "device",
            className: "uitext"
          }), ": 최종 사용자가 사용한 기기 종류"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "user_id",
            className: "uitext"
          }), ": 최종 사용자가 웹 애플리케이션을 처음 접속할 때 발급하는 고유 ID"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "session_id",
            className: "uitext"
          }), ": 웹 애플리케이션의 최종 사용자가 웹 페이지 탐색을 시작할 때 발급하는 고유 ID"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "ip",
            className: "uitext"
          }), ": 최종 사용자가 사용한 기기의 IP 주소"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "user_agent",
            className: "uitext"
          }), ": 이벤트가 발생한 브라우저의 user agent 정보"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "TTL07746",
        children: "사용자 세션 플로우"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["시작 시간을 기준으로 수집한 이벤트 기록을 확인할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL07736",
          className: "uitext"
        }), "에서 보여지는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL07746",
          className: "uitext"
        }), " 정보와 같습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-session-replay-user-session-flow.png",
        desc: "사용자 세션 플로우"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "개별 이벤트를 선택하면 세션 리플레이 플레이어의 타임라인이 해당 이벤트의 시점으로 이동합니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["개별 이벤트에 대한 상세 정보를 확인하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "상세 아이콘",
              src: (__webpack_require__(65557)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL07736",
            className: "uitext"
          }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "user-session-log-search#analysisusersession",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 2973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/browser-session-replay-masking-area-c8ffd9e30d5b50241a4dadb814fa1b89.png");

/***/ }),

/***/ 60676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/browser-session-replay-player-d8a579b53c571401092f8169f7638ea6.png");

/***/ }),

/***/ 43370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAAWCAYAAAAcq+LpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJjSURBVHgB7d1Pa9NwHMfxT5KmfwKrViiKCBs46Nhg3gY7TG+Cz0C8eRIv+hQ8ePQBiBd3VHwCCh7GLt5ExQoenKIDpQelOsSWNDEVtI1tk+rSrU3eLyikNE3I75IP3++P38/wAwIAAEBiTAEAACBROWGk9vaK0i5/tq5JycL4AQAwDBUsAACAhBGwAAAAEkaLcEyTbKUdtMNo3aVp/AAAGKb//To0YL3e9XT7UVtvPnXU8aTTJyxdOmdrbdGSSc0LAAAg0kDAevjU1Y37P/T1e2/1hrcNT1svXV29kNeV83lCFgAAQIRQVPqy5+vmg3C4+s31fN0Jqlr1954AAAAwWqiC9fi5q897o9cdbbm+7m1/03GnpSw42nfcaDQGfjeDUl6hUNC0a7Va8rxeMI57rqRE3ccwDBWLRQEAMGscx5FlWZHnhAJW/UNHcXY+tif6Up4mcUHEtm2Vy2VNu2azKdd1/3yfhoDVDaeVSkUAAMyabnElLmCFWoSObShOzmJnHQAAgCihCtbGSk6bW+3IP6wvH1Gtlo3Kg/+kd1yr1YaeY87AjP9qtar+LSfHea4kxN1nFsYOAIC/dae5xAkFrPUlS8unTL3aHT6Rfb5q6uJGPmiNxV84DfqjZrcdmBYH9VxpHT8AAOIMlBDuXnO0tpgLqgu9ENU9Xjpp6tblko7NZSNcAQAA/K+BdbDmSoY2r5f04p2nZzsduUFr6cyCpdV5SzbrvgMAAMQaGZlWF8xfHwAAAPwbalJjOoz9+9KE8QMAZAklKgAAgIQRsAAAABJm+P0LJAEAAGDfqGABAAAk7CeGjJVJ4/RrtAAAAABJRU5ErkJggg==");

/***/ }),

/***/ 62512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDlIM1YzSDVIOVY1SDVWOVpNMyAyMVYxNUg1VjE5SDlWMjFINUgzWk0xNSAxOVYyMUgyMVYxOVYxNUgxOVYxOUgxNVpNMTUgNVYzSDIxVjVWOUgxOVY1SDE1WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 59648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMlYxSDVWMkg2Wk05IDJIMTBWMUg5VjJaTTYgMjJINVYyM0g2VjIyWk05IDIyVjIzSDEwVjIySDlaTTE1IDJWMUgxNFYySDE1Wk0xOCAySDE5VjFIMThWMlpNMTUgMjJIMTRWMjNIMTVWMjJaTTE4IDIyVjIzSDE5VjIySDE4Wk02IDNIOVYxSDZWM1pNNyAyMlYySDVWMjJIN1pNOSAyMUg2VjIzSDlWMjFaTTggMlYyMkgxMFYySDhaTTE1IDNIMThWMUgxNVYzWk0xNiAyMlYySDE0VjIySDE2Wk0xOCAyMUgxNVYyM0gxOFYyMVpNMTcgMlYyMkgxOVYySDE3WiIgZmlsbD0iI0E4QThBOCIvPgo8L3N2Zz4K");

/***/ }),

/***/ 92872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzk1MzZfMzY4NjUpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDJMMTkgMTJMNiAyMkw2IDJaIiBzdHJva2U9IiNBOEE4QTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzk1MzZfMzY4NjUiPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==");

/***/ }),

/***/ 13732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg==");

/***/ }),

/***/ 65557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcGFnZXZpZXc8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjguMDAwMDAwLCAtMjcxMS4wMDAwMDApIiBmaWxsPSIjMjk2Y2YyIj4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcGFnZXZpZXciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgMzY1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCA0LjAwMDAwMCkiIGlkPSJwYWdldmlldyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwwIEMxOS4wMzUyOTQxLDAgMTkuODkzNDI1NiwwLjc5NzIzMTgzNCAxOS45OTA3OTk5LDEuODA4MTAwOTYgTDIwLDIgTDE5Ljk5OSw1LjMzMyBMMTcuOTk5LDUuMzMzIEwxOCwyIEwyLDIgTDIsMTQgTDEyLDE0IEwxMiwxNiBMMiwxNiBDMC45NjQ3MDU4ODIsMTYgMC4xMDY1NzQzOTQsMTUuMjAyNzY4MiAwLjAwOTIwMDA4MTQyLDE0LjE5MTg5OSBMLTUuMzI5MDcwNTJlLTE1LDE0IEwtNS4zMjkwNzA1MmUtMTUsMiBDLTUuMzI5MDcwNTJlLTE1LDAuOTY0NzA1ODgyIDAuNzk3MjMxODM0LDAuMTA2NTc0Mzk0IDEuODA4MTAwOTYsMC4wMDkyMDAwODE0MiBMMiwwIEwxOCwwIFogTTEzLjE2NjY2NjcsNCBDMTUuNjU2NjY2Nyw0IDE3LjY2NjY2NjcsNi4wMSAxNy42NjY2NjY3LDguNSBDMTcuNjY2NjY2Nyw5LjM4IDE3LjQwNjY2NjcsMTAuMTkgMTYuOTY2NjY2NywxMC44OSBMMTkuODc2NjY2NywxMy43OSBMMTguNDU2NjY2NywxNS4yMSBMMTUuNTQ2NjY2NywxMi4zIEMxNC44NTY2NjY3LDEyLjc0IDE0LjAzNjY2NjcsMTMgMTMuMTU2NjY2NywxMyBDMTAuNjc2NjY2NywxMyA4LjY2NjY2NjY3LDEwLjk5IDguNjY2NjY2NjcsOC41IEM4LjY2NjY2NjY3LDYuMDEgMTAuNjc2NjY2Nyw0IDEzLjE2NjY2NjcsNCBaIE0xMy4xNjY2NjY3LDYgQzExLjc4NjY2NjcsNiAxMC42NjY2NjY3LDcuMTIgMTAuNjY2NjY2Nyw4LjUgQzEwLjY2NjY2NjcsOS44OCAxMS43ODY2NjY3LDExIDEzLjE2NjY2NjcsMTEgQzE0LjU0NjY2NjcsMTEgMTUuNjY2NjY2Nyw5Ljg4IDE1LjY2NjY2NjcsOC41IEMxNS42NjY2NjY3LDcuMTIgMTQuNTQ2NjY2Nyw2IDEzLjE2NjY2NjcsNiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
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


/***/ })

}]);