"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[13810],{

/***/ 90151:
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
	id: 'browser',
	title: '브라우저 모니터링',
	description: '브라우저 모니터링(Browser Monitoring)은 브라우저 애플리케이션의 페이지 로드 시간, 서버 응답 시간, 리소스 로딩 시간, 브라우저 에러 등 다양한 성능 지표를 수집하여 분석합니다.',
	tags: [
		'브라우저 모니터링'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "browser",
  "title": "브라우저 모니터링",
  "description": "브라우저 모니터링(Browser Monitoring)은 브라우저 애플리케이션의 페이지 로드 시간, 서버 응답 시간, 리소스 로딩 시간, 브라우저 에러 등 다양한 성능 지표를 수집하여 분석합니다.",
  "source": "@site/docs/browser.mdx",
  "sourceDirName": ".",
  "slug": "/browser",
  "permalink": "/whatap-docs/browser",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/browser.mdx",
  "tags": [
    {
      "inline": true,
      "label": "브라우저 모니터링",
      "permalink": "/whatap-docs/tags/브라우저-모니터링"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "browser",
    "title": "브라우저 모니터링",
    "description": "브라우저 모니터링(Browser Monitoring)은 브라우저 애플리케이션의 페이지 로드 시간, 서버 응답 시간, 리소스 로딩 시간, 브라우저 에러 등 다양한 성능 지표를 수집하여 분석합니다.",
    "tags": [
      "브라우저 모니터링"
    ]
  },
  "sidebar": "rumsSidebar",
  "next": {
    "title": "브라우저 호환성",
    "permalink": "/whatap-docs/browser/browser-compatibility"
  }
};
const assets = {

};



const toc = [{
  "value": "브라우저 모니터링, 왜 필요한가?",
  "id": "브라우저-모니터링-왜-필요한가",
  "level": 2
}, {
  "value": "주요 기능",
  "id": "주요-기능",
  "level": 2
}, {
  "value": "페이지 로드 성능 정보 제공",
  "id": "페이지-로드-성능-정보-제공",
  "level": 3
}, {
  "value": "AJAX 성능 정보 제공",
  "id": "ajax-성능-정보-제공",
  "level": 3
}, {
  "value": "웹 페이지 리소스 정보 제공",
  "id": "웹-페이지-리소스-정보-제공",
  "level": 3
}, {
  "value": "브라우저 에러 정보 제공",
  "id": "브라우저-에러-정보-제공",
  "level": 3
}, {
  "value": "코어 웹 바이탈 정보 제공",
  "id": "코어-웹-바이탈-정보-제공",
  "level": 3
}, {
  "value": "사용자 접속 환경 분석",
  "id": "사용자-접속-환경-분석",
  "level": 3
}, {
  "value": "브라우저 모니터링 시작하기",
  "id": "브라우저-모니터링-시작하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "브라우저 모니터링"
      }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Browser Monitoring"
      }), ")은 브라우저 애플리케이션의 페이지 로드 시간, 서버 응답 시간, 리소스 로딩 시간, 브라우저 에러 등 다양한 성능 지표를 수집하여 분석합니다. 수집, 분석한 데이터를 통해 브라우저 애플리케이션의 병목 현상이나 성능 이슈를 파악하고 최적화할 수 있습니다. 또한 브라우저별로 성능 차이를 파악할 수 있어 최상의 사용자 경험을 제공할 수 있는 데이터를 제공합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "브라우저-모니터링-왜-필요한가",
        children: "브라우저 모니터링, 왜 필요한가?"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "클라우드와 MSA 시대의 복잡한 서버환경에서 브라우저 애플리케이션의 응답 시간 최적화"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "클라우드, MSA 등의 등장에 따라 서버 환경이 더욱 복잡해졌습니다. 이렇게 복잡해진 환경에서 개별 서버의 성능 지표만으로는 브라우저 애플리케이션의 응답 시간 지연 원인을 파악하기 어렵습니다. 이에 따라 서버와 클라이언트 간의 네트워크 상황과 브라우저의 로딩 시간을 포함한 요소를 고려해야 합니다. 또한 응답 시간에 영향을 미치는 브라우저의 요청 데이터 사이즈나 요청 주기 등 관련 요소들도 고려해야 합니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["실 사용자의 응답 시간 및 사용자 경험 최적화를 위해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "브라우저 모니터링"
            }), "은 필요합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "실 사용자 환경에서 발생하는 예측 불가능한 에러에 대한 빠른 대응"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "개발, 수정, 배포가 빈번하게 발생하는 CI/CD 도입으로 실제 사용자에게 발생하는 에러를 배포 전 테스트만으로 예방하기 어렵습니다. 실 사용자가 웹 페이지를 이용하면서 발생하는 에러는 사용자의 디바이스나 브라우저 종류, 네트워크 상태 등에 따라 다양한 에러가 발생할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "브라우저 모니터링"
            }), "을 통해 실제 사용자에게 발생하는 에러를 모니터링하고 이를 예방하거나 최소화하는 기술적인 방법을 적용해야 합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "다양한 브라우저와 디바이스에서 최적화된 사용자 경험을 제공하기 위한 통계 데이터 제공"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "브라우저의 종류와 디바이스가 다양해짐에 따라 실제 사용자들이 경험하는 에러를 모니터링해야 합니다. 예를 들어 특정 브라우저 또는 디바이스에서만 발생하는 에러를 확인할 수 있습니다. 이를 통해 사용자 경험을 개선하고, 더 나은 서비스를 제공할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "SPA 환경에서 브라우저 애플리케이션 성능 분석 및 최적화"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["웹 애플리케이션인 SPA(Single Page Application)에서는 주로 브라우저에서 웹 페이지를 구현합니다. 이전에는 웹 페이지의 모든 요소가 서버에서 렌더링되었지만, 이제는 브라우저에서 페이지를 렌더링하고 필요한 데이터만 서버에서 가져와 사용합니다. 이렇게 웹 애플리케이션이 복잡해지면서 서버만 관리한다고 해서 성능이 빠르거나 느리다는 것을 알 수 없습니다. 따라서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "브라우저 모니터링"
            }), "을 통해 브라우저 애플리케이션의 문제를 찾고 최적화를 수행해야 합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "1st Party와 3rd Party 리소스의 종합적 응답 시간 측정 및 최적화를 통한 사용자 체감 성능 개선"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "웹 서비스의 실 사용자 체감 성능은 사내에서 직접 운영하는 1st party와 외부에서 운영하는 3rd party의 응답 시간을 종합적으로 측정해야 합니다. 3rd party 리소스의 응답 시간 지연만으로 전체 응답 시간이 지연될 수 있습니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "주요-기능",
        children: "주요 기능"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "브라우저 모니터링"
        }), "은 최종 사용자 입장에서 웹사이트 이용의 문제 여부, 최종 사용자의 사용성, 최종 사용자의 환경을 모니터링합니다. 다음의 주요 기능을 제공합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "페이지-로드-성능-정보-제공",
        children: "페이지 로드 성능 정보 제공"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-pageload-timeline.png",
        desc: "Page load timeline"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-pageload-details.png",
        desc: "Page load details"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "브라우저가 웹 페이지를 얼마나 빠르게 로드하는지를 모니터링합니다. 사용자들은 빠르게 로드되는 웹 페이지를 선호하므로 페이지 로드 성능 정보를 통해 개발자들은 웹 페이지의 성능을 최적화할 수 있습니다. 페이지 로드 성능 정보는 브라우저가 페이지를 로드하는 데 걸린 시간, 페이지 요소의 로드 시간, 서버 응답 시간 등을 제공합니다. 이 정보를 통해 웹 페이지의 성능을 개선할 수 있는 방안을 찾을 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "ajax-성능-정보-제공",
        children: "AJAX 성능 정보 제공"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-ajax-hitmap.png",
        desc: "AJAX hitmap"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["AJAX를 통해 서버와 데이터를 주고 받을 때의 성능 정보를 모니터링합니다. AJAX는 웹 페이지가 서버와 비동기적으로 데이터를 교환하여, 페이지를 새로고침하지 않고도 브라우저 애플리케이션을 업데이트할 수 있게 해주는 기술입니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "브라우저 모니터링"
        }), "은 AJAX 요청 및 응답 시간 측정, 서버 응답 시간 분석, 네트워크 대기 시간 등 다양한 데이터를 수집합니다. 수집 데이터는 브라우저 애플리케이션의 성능 향상 및 사용자 경험을 개선하는데 유용합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "웹-페이지-리소스-정보-제공",
        children: "웹 페이지 리소스 정보 제공"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-page-resource-list.png",
        desc: "Web page resource list"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "브라우저가 서버로부터 다운로드하는 리소스는 페이지 로드 성능에 큰 영향을 끼칩니다. 리소스 목록에서는 로딩 속도가 느리거나 파일 사이즈가 큰 리소스를 빠르게 파악할 수 있습니다. 이러한 정보를 사용해 웹 페이지의 성능을 향상시키고 사용자 경험을 개선하는데 활용할 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "브라우저-에러-정보-제공",
        children: "브라우저 에러 정보 제공"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-error-info.png",
        desc: "Browser error information"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "사용자가 웹사이트를 이용하는 과정에서 발생하는 브라우저 에러 정보를 수집합니다. 이 정보를 통해 개발자는 사용자가 웹사이트를 이용하면서 겪는 문제를 파악하고 신속 대응할 수 있습니다. 사용자 경험을 개선하고 웹사이트의 안정성을 높일 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "코어-웹-바이탈-정보-제공",
        children: "코어 웹 바이탈 정보 제공"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "rum-core-web-vitals.png",
        desc: "Core web vitals"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "코어 웹 바이탈은 구글에서 정의한 웹 페이지의 성능에 대한 중요한 지표로 페이지 로드 시간과 응답 시간, 렌더링 시간, 사용자 상호 작용 시간 등이 있습니다. 이러한 정보를 수집하고 분석하여 웹 사이트가 상위 노출하는 데 도움이 될 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "사용자-접속-환경-분석",
        children: "사용자 접속 환경 분석"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-user-env.png",
        desc: "User environments"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "사용자의 디바이스 정보 및 브라우저 정보, 운영체제 정보, 지역 정보 등 다양한 사용자 접속 환경을 분석합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "특정 디바이스에서 문제가 발생하는 경우 해당 디바이스의 정보를 분석하여 문제를 해결할 수 있습니다. 또한 특정 지역에서 웹 애플리케이션이 느리게 동작하는 경우 해당 지역의 정보를 파악하여 최적화를 수행할 수 있습니다. 사용자들이 사용하는 브라우저나 운영체제 등을 파악하여 웹 애플리케이션의 호환성 문제를 해결하는데 필요한 정보를 제공할 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "브라우저-모니터링-시작하기",
        children: "브라우저 모니터링 시작하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["다음의 단계를 따라 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "브라우저 모니터링"
        }), "을 시작할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["와탭 계정이 없다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://www.whatap.io/ko/signup/",
              children: "회원 가입"
            }), "을 진행하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "브라우저 호환성 및 사전 설정을 살펴보세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "와탭 모니터링 서비스"
            }), "로 이동해 브라우저 프로젝트를 생성하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "브라우저 에이전트를 적용하세요."
          }), "\n"]
        }), "\n"]
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