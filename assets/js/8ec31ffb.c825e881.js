"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[41197],{

/***/ 29636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ dashboard_active_transaction_contentTitle),
  "default": () => (/* binding */ dashboard_active_transaction_MDXContent),
  frontMatter: () => (/* binding */ dashboard_active_transaction_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ dashboard_active_transaction_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_php-dashboard-active-transaction.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "화면 구성",
  "id": "화면-구성",
  "level": 2
}, {
  "value": "에이전트 목록 필터링",
  "id": "에이전트-목록-필터링",
  "level": 2
}, {
  "value": "자동 갱신 설정",
  "id": "자동-갱신-설정",
  "level": 2
}, {
  "value": "트랜잭션 목록 필터링",
  "id": "트랜잭션-목록-필터링",
  "level": 2
}, {
  "value": "참고 자료",
  "id": "참고-자료",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면에서 프로젝트를 선택하고 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "대시보드"
        })
      }), " 하위 메뉴 중 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "애플리케이션 대시보드"
        })
      }), "를 선택하세요. 다음과 같은 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "애플리케이션 대시보드"
        })
      }), "의 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "액티브 트랜잭션"
        })
      }), " 위젯 영역에서 ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "right-arrow",
        src: (__webpack_require__(21376)/* ["default"] */ .A) + "",
        width: "24",
        height: "24"
      }), " 버튼을 클릭하면 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "액티브 트랜잭션"
        })
      }), " 상세 페이지로 이동합니다."]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "apm-dashboard-active-tx.png",
      desc: "액티브 트랜잭션"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "현재 진행 중인 트랜잭션의 URL, SQL, HTTP 호출 정보로 이상 트랜잭션을 신속하게 파악할 수 있으며, 상세 트레이스를 통해서 지연 구간을 상세하게 분석할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "화면-구성",
        children: "화면 구성"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "dashboard-active-transaction.png",
        desc: "액티브 트랜잭션"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.img, {
          alt: "지시선 1",
          src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "에이전트 별 액티브 트랜잭션"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["전체 애플리케이션 서버의 목록과 진행 중인 트랜잭션의 총 개수를 표시합니다. 차트의 각 그래프에 마우스를 오버하면 트랜잭션 상태 속도를 표시합니다. 트랜잭션 상태의 속도는 ", (0,jsx_runtime.jsx)("span", {
          class: "normal",
          children: "Normal"
        }), ", ", (0,jsx_runtime.jsx)("span", {
          class: "slow",
          children: "Slow"
        }), ", ", (0,jsx_runtime.jsx)("span", {
          class: "vslow",
          children: "Very Slow"
        }), "로 분류합니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.img, {
          alt: "지시선 2",
          src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "에이전트 목록"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["애플리케이션 서버의 목록과 진행 중인 트랜잭션의 총 개수를 표시합니다. 해당 애플리케이션 서버를 선택하면 ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "지시선 3",
          src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 트랜잭션 목록에 세부 정보가 나타납니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.img, {
          alt: "지시선 3",
          src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "트랜잭션 목록"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["진행 중인 트랜잭션의 URL, SQL, HTTP 호출 정보의 상세 내용을 표시합니다. Top 10 항목 탭을 선택하면 각 항목별 경과 시간이 높은 순으로 정렬된 표를 확인할 수 있습니다. 마찬가지로 트랜잭션 상태의 속도는 ", (0,jsx_runtime.jsx)("span", {
          class: "normal",
          children: "Normal"
        }), ", ", (0,jsx_runtime.jsx)("span", {
          class: "slow",
          children: "Slow"
        }), ", ", (0,jsx_runtime.jsx)("span", {
          class: "vslow",
          children: "Very Slow"
        }), "로 분류합니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "에이전트-목록-필터링",
        children: "에이전트 목록 필터링"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.img, {
          alt: "지시선 2",
          src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "에이전트 목록"
        }), "에서 필터링 대상을 선택하거나 검색해 트랜잭션 목록에서 개별로 확인할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["현재 활성화된 에이전트를 확인하려면 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "활성화 에이전트만 보기"
              })
            }), " 체크박스를 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "전체 에이전트"
              })
            }), " 목록 상자를 클릭하세요. 에이전트를 카테고리 별로 분류해 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["진행 중인 트랜잭션 정보를 에이전트 별로 확인하려면 에이전트를 선택한 다음 아래에 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "적용"
              })
            }), " 버튼을 클릭하세요. 선택을 취소하려면 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "리셋 아이콘",
              src: (__webpack_require__(25099)/* ["default"] */ .A) + "",
              width: "25",
              height: "24"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "자동-갱신-설정",
        children: "자동 갱신 설정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["진행 중인 트랜잭션을 설정한 간격마다 자동 갱신할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "자동 갱신(초)"
          })
        }), " 토글 버튼을 선택해 옵션을 활성화한 다음 오른쪽 텍스트 입력 상자에 갱신 간격을 입력하세요."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["자동 갱신 설정을 비활성화하려면 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "자동 갱신(초)"
          })
        }), " 토글 버튼을 다시 선택하세요."]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "시간은 초 단위로 갱신합니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["자동 갱신 설정을 비활성화한 상태에서 트랜잭션 목록을 갱신하려면 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "자동갱신 아이콘",
              src: (__webpack_require__(99216)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "트랜잭션-목록-필터링",
        children: "트랜잭션 목록 필터링"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.img, {
          alt: "지시선 3",
          src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "트랜잭션 목록"
        }), "에서 URL 또는 IP 값을 검색해 필터링할 수 있습니다. 오른쪽 위에 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "URL / IP"
          })
        }), " 텍스트 입력 상자에 필터링할 대상을 입력한 다음 엔터를 입력하거나 ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "검색 아이콘",
          src: (__webpack_require__(70378)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " 버튼을 선택하세요. 입력한 텍스트 값을 포함하는 트랜잭션 목록으로 필터링합니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["필터링한 목록을 초기화하려면 오른쪽 위에 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "URL / IP"
          })
        }), " 텍스트 입력 상자의 텍스트를 삭제한 다음 엔터를 입력하거나 ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "검색 아이콘",
          src: (__webpack_require__(70378)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " 버튼을 선택하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "참고-자료",
        children: "참고 자료"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://brunch.co.kr/@leedongins/152",
            children: "액티브 트랜잭션"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://brunch.co.kr/@leedongins/31",
            children: "장애를 가장 빠르게 알아내는 액티브 트랜잭션"
          })
        }), "\n"]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
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


;// CONCATENATED MODULE: ./docs/php/dashboard-active-transaction.mdx


const dashboard_active_transaction_frontMatter = {
	id: 'dashboard-active-transaction',
	title: '액티브 트랜잭션',
	description: '현재 진행 중인 트랜잭션의 URL, SQL, HTTP 호출 정보로 이상 트랜잭션을 신속하게 파악할 수 있으며, 상세 트레이스를 통해서 지연 구간을 상세하게 분석할 수 있습니다.',
	tags: [
		'PHP',
		'액티브 트랜잭션',
		'대시보드',
		'애플리케이션',
		'애플리케이션 모니터링'
	]
};
const dashboard_active_transaction_contentTitle = undefined;
const metadata = {
  "id": "php/dashboard-active-transaction",
  "title": "액티브 트랜잭션",
  "description": "현재 진행 중인 트랜잭션의 URL, SQL, HTTP 호출 정보로 이상 트랜잭션을 신속하게 파악할 수 있으며, 상세 트레이스를 통해서 지연 구간을 상세하게 분석할 수 있습니다.",
  "source": "@site/docs/php/dashboard-active-transaction.mdx",
  "sourceDirName": "php",
  "slug": "/php/dashboard-active-transaction",
  "permalink": "/whatap-docs/php/dashboard-active-transaction",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/php/dashboard-active-transaction.mdx",
  "tags": [
    {
      "label": "PHP",
      "permalink": "/whatap-docs/tags/php"
    },
    {
      "label": "액티브 트랜잭션",
      "permalink": "/whatap-docs/tags/액티브-트랜잭션"
    },
    {
      "label": "대시보드",
      "permalink": "/whatap-docs/tags/대시보드"
    },
    {
      "label": "애플리케이션",
      "permalink": "/whatap-docs/tags/애플리케이션"
    },
    {
      "label": "애플리케이션 모니터링",
      "permalink": "/whatap-docs/tags/애플리케이션-모니터링"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "dashboard-active-transaction",
    "title": "액티브 트랜잭션",
    "description": "현재 진행 중인 트랜잭션의 URL, SQL, HTTP 호출 정보로 이상 트랜잭션을 신속하게 파악할 수 있으며, 상세 트레이스를 통해서 지연 구간을 상세하게 분석할 수 있습니다.",
    "tags": [
      "PHP",
      "액티브 트랜잭션",
      "대시보드",
      "애플리케이션",
      "애플리케이션 모니터링"
    ]
  },
  "sidebar": "phpSidebar",
  "previous": {
    "title": "트랜잭션 맵",
    "permalink": "/whatap-docs/php/dashboard-transactionmap"
  },
  "next": {
    "title": "히트맵 - 트레이스 분석",
    "permalink": "/whatap-docs/php/dashboard-hitmap-trace"
  }
};
const assets = {

};




const dashboard_active_transaction_toc = [...toc];
function dashboard_active_transaction_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(MDXContent, {});
}
function dashboard_active_transaction_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(dashboard_active_transaction_createMdxContent, {
      ...props
    })
  }) : dashboard_active_transaction_createMdxContent(props);
}



/***/ }),

/***/ 99216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMWU1MDAyNS1hY2U4LTQ4OGUtYTMyNy1lYzYzYzFlZjUwOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRFQzI5Mjc1MkE4MTFFRDlCM0E5NTc3MjZCNzA3NDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRFQzI5MjY1MkE4MTFFRDlCM0E5NTc3MjZCNzA3NDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIwMjMgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjBmOTFjYzItZTZiYy00YjUwLThhZTQtOGNmZThmOGI4OTQ2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDJiOGIwNTktYWQ4YS1hZjRhLTljNTMtMjlkMzcxNTBkOGY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+M9zsYQAABPJJREFUeNrEWGtoHFUU/u6du5vdbZJNk8Zqi602pFRDTULVBCpaW3yCYH8YTREpqH9aBBF8oIj0jw/6Q0EMhVBQRBvwR18ICmrQtiLUojVNbGObxtjm/Wx3N7uZmXs9Z6ZpLCo720nTC8Psnb0z57vnfOc7Z0bsOuigs1cnKpPYfvCI3Xx+RCeVBVcIGFyjYQyE48JaXimnHlsf2TMyhY9qbpEZVZIQsZ5+t3Xf984WNq8UIHBtB23UszM4qtF6IFd/R7Wqa7zd2ib7hty3jnfbW3I2LZLXHshlQPDtsV22TzieFfXPpc3opPbQioVCcmXIvGNJmeyQQ+N6yvPIdQAyGzK2TzgWyYXgSJCQEQ5HhgEiaUfTOQPbCe9Zvl1erWspNTEwalC52EJFUnjzsKNgMOzK3IzBhbRBXbWF3a/EkSwWOHfWRWrawNVX7yVV6A1ZSsV0VuCNZ2J4tdm/ffM9CqWLJP4a1vhzQENrg/JS4YXRFCCdYmXTxUk6J4Msdl3WBYM3t8bxwuZ/7yOdBY6edNGy38a+H2awhMIXiwroYIC6rbKa11+jH7G8WnApRHweHDdYXCKxZoUf5T3fOcQfjZuW+Nee2KAwkRY43OFCWcJT2wBjLC8YeYmsExcNIkogUUT8GNFo+9ZGx1lg/VqFl1uyeHtXDp+227DIOEk7HrrLIv2w8M0xG0URgQBpmx9MOmuwarnC0w9GcPqcS6kMxAlQhHZ77JSDn7pcpCm9QeHI0Nr9h22MXBB44E4LG+ok9h5yMTyhPUD5wMh8KTxCIamvltixNYqnNkU9D3HY+OHLKCxdvWSM1sSiwOJSvibQ0pbFzjbbe8ZLTVHKsnlIbZuelyQS3ldrefOuXo2omuMRj+I4ccKaqzFRAllM6fAFhSxDXmzepLB6hYVU1oQDkyU9oZ4DG9cpj7Q/djpeiPKRvbxU4mSfi997fSVcsVQimwsJhgWsNA5UlFDenZ8LXZAywaQ/0qm9eV2VQDoTMkyzss9Cd+tSwKLVgTSDmzRay2HiwaSXMiQY5sfwFHCCUvjmGwS526KiGACN8MWRPcLjdD8RvCgkGBarsUmDU32ON3+kQWGMuJMvVJMpjXVrFB6+2+faoeMOiaQIB4ZFTmuNlr0z3nz74wpVK5VXg2ZFjAk7PHFlG6FdgTIqnhMpoK3d8fSHn5Vv5BU9atjR0aNRv1qhtkri3lqFn7s1Os+4iESYCwIb6hV6BgwuZoxXixKU7oNjGl8fdfELrWXAYj4UeNZDR05orF1lkdRLT41TOS4RfnN14J0EHm1U6B0y+O2M9nQnHhPop3rFAIuigXqKsUBVm3c1foElXeLDF+N48n7r8n/skRvLuWb589YvHezck8NUypAmFdSddAeqp7NCxrvc9v40Fb8IGshDjTUKNSvFFT30XB9jUGh3XVA/I4T/njNJ9YkzrSIpUUwBbv8gQWrNXrHx3mczKIkbaraEJ5rz7pl/eoi1p7LMN5TKaDq4n3HxyVczOP6Hg6Xl0uNYgUAK98z/9sQ2K7XBoljgru4/PSPDvt1r4/ODC2gIIH4n6TgI/bkhGgn30sT2CYeSFOOk0YV18fP+rk32CUdaNm2MvMtu5mxYaEBsz7drQDg+llSJd9SujnxeFPERLhQetsP22C7bJxy7FQlZdtUy6/mG26xfr+eXK8KR+VuAAQDQvDP0Yp7wsgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 25099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNXB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNSAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtdW5kbzwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNTYuMDAwMDAwLCAtMTQ3NS4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImVkaXRvci1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxMzUwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLXVuZG8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMxNi41MDAwMDAsIDEyNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLDAgTDEwLDIgTDEwLDIgQzUuNTgxNzIyLDIgMiw1LjU4MTcyMiAyLDEwIEMyLDE0LjQxODI3OCA1LjU4MTcyMiwxOCAxMCwxOCBDMTQuNDE4Mjc4LDE4IDE4LDE0LjQxODI3OCAxOCwxMCBDMTgsOC42NjI5MjcwMSAxNy42NzE5ODMyLDcuNDAyNDY2NDMgMTcuMDkyMDMwNSw2LjI5NDY5OTA0IEwxNS4zNTE5MjM4LDcuMjk5MDM4MTEgTDE2LjQ1LDMuMjAwOTYxODkgTDIwLjU0ODA3NjIsNC4yOTkwMzgxMSBMMTguODI1ODYyMyw1LjI5NDMwMzE2IEMxOS41NzUxOSw2LjY5Njc4NzQ5IDIwLDguMjk4NzgzOSAyMCwxMCBDMjAsMTUuNTIyODQ3NSAxNS41MjI4NDc1LDIwIDEwLDIwIEM0LjQ3NzE1MjUsMjAgLTguNTI2NTEyODNlLTE0LDE1LjUyMjg0NzUgLTguNTI2NTEyODNlLTE0LDEwIEMtOC41MjY1MTI4M2UtMTQsNC40NzcxNTI1IDQuNDc3MTUyNSwwIDEwLDAgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMjc0MDM4LCAxMC4wMDAwMDApIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMC4yNzQwMzgsIC0xMC4wMDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ 70378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtc2VhcmNoPC90aXRsZT4gLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0OC4wMDAwMDAsIC00MjYyLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iaWMtc2VhcmNoLWNvcHktMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0OC4wMDAwMDAsIDQyNjIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtc2VhcmNoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMi4zNDMxNDU3NSwyLjM0MzE0NTc1IEM1LjQ2NzM0MDA4LC0wLjc4MTA0ODU4MyAxMC41MzI2NTk5LC0wLjc4MTA0ODU4MyAxMy42NTY4NTQyLDIuMzQzMTQ1NzUgQzE2LjU0MTYyNTUsNS4yMjc5MTcgMTYuNzYyNzAwNCw5Ljc2NzY5Njk5IDE0LjMyMDA3ODgsMTIuOTA2MTMxOSBMMTkuMzYzNjAzOSwxNy45NDkzOTAzIEwxNy45NDkzOTAzLDE5LjM2MzYwMzkgTDEyLjkwNjEzMTksMTQuMzIwMDc4OCBDOS43Njc2OTY5OSwxNi43NjI3MDA0IDUuMjI3OTE3LDE2LjU0MTYyNTUgMi4zNDMxNDU3NSwxMy42NTY4NTQyIEMtMC43ODEwNDg1ODMsMTAuNTMyNjU5OSAtMC43ODEwNDg1ODMsNS40NjczNDAwOCAyLjM0MzE0NTc1LDIuMzQzMTQ1NzUgWiBNMTIuMjQyNjQwNywzLjc1NzM1OTMxIEM5Ljg5OTQ5NDk0LDEuNDE0MjEzNTYgNi4xMDA1MDUwNiwxLjQxNDIxMzU2IDMuNzU3MzU5MzEsMy43NTczNTkzMSBDMS40MTQyMTM1Niw2LjEwMDUwNTA2IDEuNDE0MjEzNTYsOS44OTk0OTQ5NCAzLjc1NzM1OTMxLDEyLjI0MjY0MDcgQzYuMTAwNTA1MDYsMTQuNTg1Nzg2NCA5Ljg5OTQ5NDk0LDE0LjU4NTc4NjQgMTIuMjQyNjQwNywxMi4yNDI2NDA3IEMxNC41ODU3ODY0LDkuODk5NDk0OTQgMTQuNTg1Nzg2NCw2LjEwMDUwNTA2IDEyLjI0MjY0MDcsMy43NTczNTkzMSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ 15856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 29675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

/***/ }),

/***/ 55522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC");

/***/ }),

/***/ 21376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxMnB4O2hlaWdodDogMTJweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcmlnaHQ8L3RpdGxlPiAtLT4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc0MC4wMDAwMDAsIC0xNjQuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICAgIDxnIGlkPSJkaXJlY3Rpb25hbC1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxMTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcmlnaHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwMC4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCAzLjAwMDAwMCkiIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjU1NzM5MzUsMTcuNDYzNTM2NiBMMC4xNDMxNzk5NCwxNi4wNDkzMjMgTDcuMjE0MTc5OTQsOC45Nzc5NzM4MyBMMC4xNDMxNzk5NCwxLjkwNzE4NzQgTDEuNTU3MzkzNSwwLjQ5Mjk3MzgzNCBMMTAuMDQyNjc0OSw4Ljk3ODI1NTIxIEwxLjU1NzM5MzUsMTcuNDYzNTM2NiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

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