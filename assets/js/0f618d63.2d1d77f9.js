"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["29654"], {
"6248": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_browser_collect_data_mdx_0f6_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-browser-collect-data-mdx-0f6.json
var site_docs_browser_collect_data_mdx_0f6_namespaceObject = JSON.parse('{"id":"browser/collect-data","title":"브라우저 에이전트 수집 데이터","description":"와탭 브라우저 에이전트가 수집하는 데이터에 대한 설명입니다.","source":"@site/docs/browser/collect-data.mdx","sourceDirName":"browser","slug":"/browser/collect-data","permalink":"/browser/collect-data","draft":false,"unlisted":false,"editUrl":"undefined/docs/browser/collect-data.mdx","tags":[],"version":"current","frontMatter":{"id":"collect-data","title":"브라우저 에이전트 수집 데이터","description":"와탭 브라우저 에이전트가 수집하는 데이터에 대한 설명입니다.","keywords":["브라우저 모니터링","에이전트"],"isTranslationMissing":false},"sidebar":"rumsSidebar","previous":{"title":"시스템 이벤트 안내","permalink":"/browser/common-alert"},"next":{"title":"실험실","permalink":"/browser/labs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/browser/collect-data.mdx


const frontMatter = {
	id: 'collect-data',
	title: '브라우저 에이전트 수집 데이터',
	description: '와탭 브라우저 에이전트가 수집하는 데이터에 대한 설명입니다.',
	keywords: [
		'브라우저 모니터링',
		'에이전트'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "타입(Type)",
  "id": "타입type",
  "level": 2
}, {
  "value": "공통 수집 데이터",
  "id": "공통-수집-데이터",
  "level": 2
}, {
  "value": "페이지 로드 이벤트",
  "id": "페이지-로드-이벤트",
  "level": 2
}, {
  "value": "페이지 로드 시간",
  "id": "pageloadtime",
  "level": 2
}, {
  "value": "Navigation timing",
  "id": "navigation-timing",
  "level": 3
}, {
  "value": "라우터 변경 이벤트",
  "id": "라우터-변경-이벤트",
  "level": 2
}, {
  "value": "리소스 로드 이벤트",
  "id": "리소스-로드-이벤트",
  "level": 2
}, {
  "value": "에러 이벤트",
  "id": "error-event",
  "level": 2
}, {
  "value": "코어 웹 바이탈 이벤트",
  "id": "코어-웹-바이탈-이벤트",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "와탭 브라우저 에이전트는 사용자의 브라우저에서 발생한 이벤트를 수집하고, 수집한 데이터를 재가공해 모니터링에 활용합니다. 모든 수집 데이터는 사용자 세션에 종속적입니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "타입type",
        children: "타입(Type)"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음은 와탭 브라우저 에이전트가 수집하는 데이터 유형입니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Long"
          }), " : long to string32형식의 고유 ID 데이터 타입입니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TimeStamp"
          }), " : ms(millisecond) 단위, 측정 시각의 타임스탬프입니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HighResolutionTime"
          }), " : ms 단위의 소요된 시간입니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TimeSet"
          }), " : 타임라인 표시를 위해 시작 타임스탬프와 소요시간으로 표현합니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ResourceType"
          }), " : ", (0,jsx_runtime.jsx)(_components.code, {
            children: "document"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "xhr"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fetch"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "beacon"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "css"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "script"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "image"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "font"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "media"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "other"
          }), " 중 하나를 의미합니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ErrorType"
          }), " : ", (0,jsx_runtime.jsx)(_components.code, {
            children: "console"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "onError"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "promiseRejection"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fetchError"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "xhrError"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "messageError"
          }), " 중 하나를 의미합니다."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "공통-수집-데이터",
        children: "공통 수집 데이터"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "이벤트 발생 시 기본으로 수집 데이터는 다음과 같습니다."
      }), (0,jsx_runtime.jsx)("div", {
        class: "br-data",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "데이터 이름"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "타입"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "설명"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "예시"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "sessionID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Long"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "웹 애플리케이션 사용자가 웹 페이지 탐색을 시작할 때 발급하는 고유 ID입니다. 세션의 유지 기간은 최대 4시간이며, 15분 동안 활동이 없으면 ID는 만료합니다. 브라우저 쿠키에 저장합니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "x7dbvq64ga80sd"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "userID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Long"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "웹 애플리케이션 사용자가 처음 접속할 때 발급하는 고유 ID로 만료 시간이 없습니다. 브라우저 쿠키에 저장합니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "z7eqnnitlc19j9"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "sendEventID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Long"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "이벤트 발생 후 수집 서버로 데이터 전송 시 발급하는 요청 고유 ID입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "x4rp4tnuq25i0h"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "page.url"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "이벤트가 발생한 페이지 URL입니다."
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["https", (0,jsx_runtime.jsx)("span", {
                  children: "://"
                }), "site.whatap.io/8/dashboard?dataKey=abcd"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "page.host"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "이벤트가 발생한 페이지 URL의 도메인 이름입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "site.whatap.io"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "page.path"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "이벤트가 발생한 페이지 URL의 경로입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "/8/dashboard"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "page.query"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "이벤트가 발생한 페이지 URL의 parameter입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "dataKey=abcd"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "page.protocol"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "이벤트가 발생한 페이지 URL의 프로토콜입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "https"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "page.title"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "이벤트가 발생한 페이지의 문서 제목입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SaaS 모니터링 No.1 와탭 모니터링 | 와탭"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "userAgent"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "이벤트가 발생한 브라우저의 useragent입니다."
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)", (0,jsx_runtime.jsx)("br", {}), "AppleWebKit/537.36 (KHTML, like Gecko)", (0,jsx_runtime.jsx)("br", {}), "Chrome/103.0.0.0", (0,jsx_runtime.jsx)("br", {}), "Safari/537.36"]
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "페이지-로드-이벤트",
        children: "페이지 로드 이벤트"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "사용자가 웹 애플리케이션에 접속 후 페이지의 콘텐츠를 완전히 불러오고 발생하는 이벤트입니다. 기본 수집 데이터는 다음과 같습니다."
      }), (0,jsx_runtime.jsx)("div", {
        class: "br-data",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "데이터 이름"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "타입"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "설명"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "예시"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.startTimeStamp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeStamp"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "navigationStart"
                }), "의 타임스탬프입니다. 페이지를 불러오기 시작하는 시간의 타임스탬프값입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1658057382311"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.eventID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Long"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "페이지를 불러오는 이벤트 발생 시 발급하는 고유 ID입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "x7mkg24tags307"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.redirect"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "http 리디렉션의 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 10, start: 315}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.cache"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "app cache 리소스를 불러오는 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 5, start: 325}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.dns"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "웹사이트 domain 탐색 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 5, start: 330}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.connect"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TCP 연결 설정의 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 6, start: 335}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.ssl"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ssl handshake 프로세스 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 5, start: 336}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.download"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "document 다운로드 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 100, start: 341}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.firstByte"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "브라우저가 서버에 document를 요청하고 첫 번째 바이트를 수신할 때까지의 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 10, start: 341}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.domInteractive"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "HighResolutionTime"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "navigationStart"
                }), "부터 브라우저가 document 파싱을 완료한 시각입니다. DOM이 준비된 상태입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "441"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.domContnentLoaded"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DOM 트리를 생성하는데 걸린 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 50, start: 441}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.domComplete"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "HighResolutionTime"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "navigationStart"
                }), "부터 document 및 하위 리소스 불러오기를 완료한 시각입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "491"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.domLoad"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "onload"
                }), " 이벤트 소요 시간입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 1, start: 491}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.backendTime"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "HighResolutionTime"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "navigationStart"
                }), "부터 리소스 다운로드까지의 소요 시간입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "126"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.frontendTime"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "브라우저가 파싱을 완료한 시각부터 load 이벤트가 완료될 때까지의 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 51, start: 441}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "navigationTiming.loadTime"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "HighResolutionTime"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "navigationStart"
                }), "부터 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "loadEventEnd"
                }), "까지 소요 시간입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "492"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "totalDuration"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "HighResolutionTime"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "navigationStart"
                }), "부터 최종 페이지 불러오기를 완료한 시각입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "550"
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "pageloadtime",
        children: "페이지 로드 시간"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.mozilla.org/docs/Glossary/Page_load_time",
          children: "페이지 로드 시간"
        }), "은 웹 브라우저에서 특정 페이지의 URL을 요청한 순간부터 페이지의 모든 리소스(HTML, CSS, JavaScript, 이미지 등)가 다운로드 및 처리되고, 브라우저가 페이지를 완전히 렌더링하여 사용 가능한 상태가 되기까지의 총 시간을 의미합니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["페이지 로드 시간을 수집하기 위해 브라우저 에이전트는 브라우저에서 제공하는 Web API 중 하나인 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Navigation Timing API"
        }), "를 통해 수집합니다. 이 API를 통해 각 단계별 시간(예: 요청 시작, 응답, 렌더링 시작 및 완료)을 측정하여 제공합니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "navigation-timing",
        children: "Navigation timing"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming",
          children: "PerformanceTiming"
        }), " 인터페이스를 통해 접근할 수 있는 밀리초 단위의 측정 이벤트들이 있습니다. 다음은 이러한 이벤트들이 발생하는 순서대로 나열한 목록입니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          src: "https://w3c.github.io/navigation-timing/timestamp-diagram.svg",
          alt: "Navigation timing"
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: "tableScroll",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "이벤트"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "설명"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "비고"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "navigationStart"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "페이지 탐색 시작 시점입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "redirectStart"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "첫 번째 HTTP 리다이렉트 시작 시점입니다."
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["리다이렉트가 없으면 값은 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "0"
                }), "입니다."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "redirectEnd"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "마지막 리다이렉트의 응답 수신 완료 시점입니다."
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["리다이렉트가 없으면 값은 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "0"
                }), "입니다."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "fetchStart"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "브라우저가 리소스를 가져오기 위한 프로세스를 시작하는 시점입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "캐시 조회가 시작되는 시점이기도 합니다."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "domainLookupStart"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "도메인 이름에 대한 DNS 조회 시작 시점입니다."
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["브라우저가 URL의 호스트 이름을 IP 주소로 변환하기 시작합니다. 캐시된 DNS 정보가 있거나 로컬 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "hosts"
                }), " 파일에 정보가 있다면 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "fetchStart"
                }), "와 동일한 값을 가질 수 있습니다."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "domainLookupEnd"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DNS 조회 완료 시점입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "브라우저가 도메인에 대한 IP 주소를 성공적으로 받아옵니다. DNS 조회를 실패하더라도 이 시점으로 기록합니다."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "connectStart"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "서버와의 연결 시작 시점입니다."
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["TCP 연결을 시작합니다. 만약 지속적인 연결(persistent connection)을 재사용하는 경우라면 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "domainLookupEnd"
                }), "와 동일한 값을 가질 수 있습니다."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "connectEnd"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "서버와의 연결이 완전히 설정된 시점입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TCP 핸드셰이크를 완료합니다. HTTPS의 경우 SSL/TLS 핸드셰이크도 이 시점까지 완료합니다. 연결이 실패하더라도 이 시점으로 기록합니다."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "secureConnectionStart"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HTTPS 연결 시작 시점입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "해당하는 경우에만 기록합니다."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "requestStart"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "서버에 리소스를 요청하기 시작한 시점입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "responseStart"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "서버로부터 응답의 첫 바이트(byte)를 받기 시작한 시점입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HTTP 응답 헤더의 첫 바이트(byte)를 받은 시점으로 서버의 초기 응답 시간(Time to First Byte, TTFB)을 계산하는 데 사용합니다."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "responseEnd"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "서버로부터 마지막 바이트(byte)를 받은 시점"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "전체 응답(헤더와 본문)을 모두 받은 시점입니다. 리다이렉트 응답이 있으면 최종 응답의 마지막 바이트(byte)를 받은 시점입니다."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "domInteractive"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DOM 파싱이 끝나고 스크립트 실행 준비가 된 시점입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "domContentLoadedEventStart"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "DOMContentLoaded"
                }), " 이벤트가 발생한 시점입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "이 때는 HTML 문서의 로딩과 파싱이 완료되었으며 DOM 트리가 완전히 구축되었음을 의미합니다."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "domContentLoadedEventEnd"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["모든 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "DOMContentLoaded"
                }), " 이벤트 핸들러의 실행이 완료된 시점입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "domComplete"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DOM 로딩과 하위 리소스 로딩이 완료된 시점입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "loadEventStart"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "load 이벤트 발생 직전 시점입니다."
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["DOM이 완전히 구성되고 모든 리소스를 로드한 직후입니다. ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "window.onload"
                }), " 이벤트 핸들러가 실행되기 직전의 시점입니다."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "loadEventEnd"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "모든 load 이벤트 핸들러의 실행이 완료된 시점입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "페이지와 모든 종속 리소스를 완전히 로드한 상태입니다."
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "라우터-변경-이벤트",
        children: "라우터 변경 이벤트"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "사용자가 Single Page Application(SPA) 형태의 웹 애플리케이션에서 페이지 이동 시 발생하는 이벤트입니다. 기본 수집 데이터는 다음과 같습니다."
      }), (0,jsx_runtime.jsx)("div", {
        class: "br-data",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "데이터 이름"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "타입"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "설명"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "예시"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "loadTime"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "HighResolutionTime"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "라우터 변경 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "500"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "startTimeStamp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeStamp"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "라우터 변경 시작 시각 타임스탬프입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1658057382311"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "endTimeStamp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeStamp"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "라우터 변경 종료 시각 타임스탬프입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1658057382811"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "pageLocation"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "라우터 변경 이벤트가 발생한 페이지 URL입니다."
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["https", (0,jsx_runtime.jsx)("span", {
                  children: "://"
                }), "site.whatap.io/8/dashboard?dataKey=abcd"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "host"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "라우터 변경 이벤트가 발생한 페이지 URL의 도메인 이름입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "site.whatap.io"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "path"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "라우터 변경 이벤트가 발생한 페이지 URL의 경로입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "/8/dashboard"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "query"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "라우터 변경 이벤트가 발생한 페이지 URL의 parameter입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "dataKey=abcd"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "protocol"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "라우터 변경 이벤트가 발생한 페이지 URL의 프로토콜입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "https"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "isComplete"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "라우터 변경이 완료되지 않은 상태에서 다른 페이지로 라우터를 변경하는 경우 구분하기 위한 값입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "true"
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "리소스-로드-이벤트",
        children: "리소스 로드 이벤트"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "사용자가 웹 애플리케이션을 사용 중 리소스를 불러올 때 발생하는 이벤트입니다. 기본 수집 데이터는 다음과 같습니다."
      }), (0,jsx_runtime.jsx)("div", {
        class: "br-data",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "데이터 이름"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "타입"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "설명"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "예시"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "startTime"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "HighResolutionTime"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "navigationStart"
                }), "로 부터 리소스 요청 시작까지의 시간입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1000"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "startTimeStamp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeStamp"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 요청 시작 타임스탬프입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1658057382321"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "eventID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Long"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스를 불러올 때마다 발급하는 고유 ID입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "x280or4ok0kqo0"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "type"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "ResourceType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 타입입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "image"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "url"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 URL입니다."
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["https", (0,jsx_runtime.jsx)("span", {
                  children: "://"
                }), "unpkg.com/purecss", (0,jsx_runtime.jsx)("span", {
                  children: "@"
                }), "2.0.3/build/pure-min.css?dataKey=abcd"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "urlHost"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 URL의 도메인 이름입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "unpkg.com"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "urlPath"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 URL의 경로입니다."
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["/purecss", (0,jsx_runtime.jsx)("span", {
                  children: "@"
                }), "2.0.3/build/pure-min.css"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "urlQuery"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 URL의 parameter입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "dataKey=abcd"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "urlProtocol"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 URL의 프로토콜입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "https"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "is3rdParty"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "3rd party로 요청한 리소스를 구분하기 위한 값입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "false"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timing.duration"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "HighResolutionTime"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 다운로드 완료까지 소요된 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "61"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timing.size"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Number"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 인코딩 사이즈입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "20"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timing.redirect"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "http 리디렉션의 소요시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 10, start: 315}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timing.cache"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "app cache 리소스를 불러오는 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 5, start: 325}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timing.dns"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 도메인 탐색 소요시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 5, start: 330}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timing.connect"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TCP 연결 설정의 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 6, start: 335}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timing.ssl"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ssl handshake 프로세스 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 5, start: 336}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timing.firstByte"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "브라우저가 서버에 리소스를 요청하고 첫 번째 바이트를 수신할 때까지의 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 10, start: 341}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timing.download"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeSet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 다운로드 소요 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "{duration: 100, start: 341}"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "resourceInfo.method"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 요청 메소드입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "POST"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "resourceInfo.status"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Number"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "리소스 요청 상태입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "200"
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "error-event",
        children: "에러 이벤트"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "사용자가 웹 애플리케이션 사용 중 브라우저에서 발생한 에러입니다. 기본 수집 데이터는 다음과 같습니다."
      }), (0,jsx_runtime.jsx)("div", {
        class: "br-data",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "데이터 이름"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "타입"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "설명"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "예시"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "message"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "에러 발생 시 메시지 정보입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SyntaxError: Unexpected end of JSON input"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "stack"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "에러 발생 시 스택 정보입니다."
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["at printWarning (webpack-internal:///../node_modules/react-dom/cjs/react-dom.development.js:86:30)", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "at error (webpack-internal:///../node_modules/react-dom/cjs/react-dom.development.js:60:7)"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "timestamp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "TimeStamp"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "에러 발생 시점의 타임스탬프입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1658057382321"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "type"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "ErrorType"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "에러 타입입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "onError"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "status"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Number"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["에러 타입이 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "xhr"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "fetch"
                }), "의 경우 수집하는 에러 상태값입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "501"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "url"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "String"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["에러 타입이 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "xhr"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "fetch"
                }), "의 경우 AJAX 요청 URL입니다."]
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["https", (0,jsx_runtime.jsx)("span", {
                  children: "://"
                }), "site.whatap.io/yard/api?pcode=8&type=summary"]
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "코어-웹-바이탈-이벤트",
        children: "코어 웹 바이탈 이벤트"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "코어 웹 바이탈"
        }), "(Core Web Vitals)은 웹 콘텐츠 이용자의 사용 경험에 영향을 미치는 다양한 측정값들 중 구글이 중요하다고 강조하는 3가지 지표입니다. 기본 수집 데이터는 다음와 같습니다."]
      }), (0,jsx_runtime.jsx)("div", {
        class: "br-data",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "데이터 이름"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "타입"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "설명"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "예시"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "lcp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "HighResolutionTime"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Largest Contentful Paint(LCP), 페이지를 처음 불러오기 시작한 시간을 기준으로 뷰포트 내에 있는 가장 큰 이미지 또는 텍스트 블록의 렌더링 시간을 보고합니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "12334"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "fid"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "HighResolutionTime"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "First Input Delay(FID), 사용자가 페이지와 처음 상호 작용할 때(예: 링크를 클릭하거나 버튼을 탭할 때, 사용자 지정 JavaScript 기반 컨트롤을 사용할 때)부터 해당 상호 작용에 대한 응답으로 브라우저가 실제로 이벤트 핸들러 처리를 시작하기까지의 시간을 측정합니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "7"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cls"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Number"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Cumulative Layout Shift(CLS)는 동적으로 불러온 콘텐츠로 예기치 못한 레이아웃 이동을 수치화하여 표현한 점수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2"
              })]
            })]
          })]
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