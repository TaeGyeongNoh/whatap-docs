"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[88780],{

/***/ 12768:
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
	id: 'container-map-call-information',
	title: 'Call Information',
	description: '컨테이너 상에서 실행 중인 애플리케이션의 호출 흐름과 외부 호출 대상의 상태를 확인할 수 있습니다.',
	tags: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'호출 정보'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/container-map-call-information",
  "title": "Call Information",
  "description": "컨테이너 상에서 실행 중인 애플리케이션의 호출 흐름과 외부 호출 대상의 상태를 확인할 수 있습니다.",
  "source": "@site/docs/kubernetes/container-map-call-information.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/container-map-call-information",
  "permalink": "/kubernetes/container-map-call-information",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/container-map-call-information.mdx",
  "tags": [
    {
      "inline": true,
      "label": "쿠버네티스",
      "permalink": "/tags/쿠버네티스"
    },
    {
      "inline": true,
      "label": "쿠버네티스 모니터링",
      "permalink": "/tags/쿠버네티스-모니터링"
    },
    {
      "inline": true,
      "label": "호출 정보",
      "permalink": "/tags/호출-정보"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "container-map-call-information",
    "title": "Call Information",
    "description": "컨테이너 상에서 실행 중인 애플리케이션의 호출 흐름과 외부 호출 대상의 상태를 확인할 수 있습니다.",
    "tags": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "호출 정보"
    ]
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "Event",
    "permalink": "/kubernetes/container-map-event"
  },
  "next": {
    "title": "퍼포먼스 요약",
    "permalink": "/kubernetes/performance-summary"
  }
};
const assets = {

};

/*

* ![일시 정지 아이콘](/img/ic-s-pause.svg) 일시 정지

*/


const toc = [{
  "value": "App 호출 흐름도",
  "id": "app-call-flow",
  "level": 2
}, {
  "value": "지시선 1 사용자 지정 그룹(okind)",
  "id": "지시선-1-사용자-지정-그룹okind",
  "level": 4
}, {
  "value": "지시선 2 Pod",
  "id": "지시선-2-pod",
  "level": 4
}, {
  "value": "지시선 3 DB 연결 및 외부 호출",
  "id": "지시선-3-db-연결-및-외부-호출",
  "level": 4
}, {
  "value": "외부 호출 상태",
  "id": "remote-access-status",
  "level": 2
}, {
  "value": "지시선 1 상단 바 옵션",
  "id": "지시선-1-상단-바-옵션",
  "level": 4
}, {
  "value": "지시선 2 외부 호출 로그 목록",
  "id": "지시선-2-외부-호출-로그-목록",
  "level": 4
}, {
  "value": "지시선 3 마지막 호출 상태",
  "id": "지시선-3-마지막-호출-상태",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h4: "h4",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "외부 호출 상태"
          })
        }), " 조회 기능은 애플리케이션이 Java인 경우만 제공합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "대시보드"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "컨테이너 맵"
        })
      }), " > 대상 선택 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "상세 보기"
      }), " 화면 진입 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "호출 정보"
        })
      }), " 탭 선택"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "쿠버네티스 컨테이너 상에서 실행 중인 애플리케이션의 호출 흐름과 외부 호출 대상의 상태를 확인할 수 있습니다. 와탭 쿠버네티스 모니터링에서 제공하는 호출 정보는 다음과 같습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "App 호출 흐름도"
            })
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "외부 호출 상태"
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "app-call-flow",
        children: "App 호출 흐름도"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-container-map-call-info-app.png",
        desc: "App 호출 흐름도"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Pod 내부에서 실행 중인 컨테이너 애플리케이션의 호출 흐름을 표현한 차트를 제공합니다. 사용자 지정 그룹(Okind), Pod, DB 연결(DBC) 및 외부 호출(HTTPC) 세 가지의 노드간 연결 관계를 확인할 수 있습니다. 각 노드는 다음과 같은 정보를 제공합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
        id: "지시선-1-사용자-지정-그룹okind",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 1",
          src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 사용자 지정 그룹(okind)"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "사용자가 지정한 그룹 명칭을 의미합니다. 그룹(okind)을 지정하지 않은 경우 해당 노드는 표시되지 않습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
        id: "지시선-2-pod",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 2",
          src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " Pod"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["컨테이너 애플리케이션이 속해 있는 Pod 명칭을 의미합니다. 컨테이너 애플리케이션 내 액티브 트랜잭션 총 개수와 처리 속도를 확인할 수 있습니다. 선택 시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "액티브 트랜잭션"
          })
        }), " 메뉴로 이동합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Active Tx"
              })
            }), ": 컨테이너 애플리케이션 내 액티브 트랜잭션을 의미합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Total"
                  })
                }), ": 컨테이너 애플리케이션 내 총 액티브 트랜잭션의 개수를 의미합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "normal",
                  children: "Normal"
                }), ": 0~3초 내 처리되는 트랜잭션의 개수를 의미합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "slow",
                  children: "Slow"
                }), ": 3~8초 내 처리되는 트랜잭션의 개수를 의미합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "vslow",
                  children: "Very Slow"
                }), ": 처리에 8초 이상 소요되는 트랜잭션의 개수를 의미합니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Application"
              })
            }), ": Pod 내부의 Application 명칭을 의미합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Node"
              })
            }), ": Pod가 속한 Node 명칭을 의미합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Namespace"
              })
            }), ": Pod가 속한 Namespace 명칭을 의미합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "ReplicaSet"
              })
            }), ": Pod가 속한 ReplicaSet 명칭을 의미합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Deployment"
              })
            }), ": Pod가 속한 Deployment 명칭을 의미합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
        id: "지시선-3-db-연결-및-외부-호출",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 3",
          src: (__webpack_require__(86865)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " DB 연결 및 외부 호출"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "DB 연결(dbc)"
              })
            }), ": Pod 내부의 컨테이너 애플리케이션이 호출한 DB Connection을 의미합니다. 선택 시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "외부 호출 상태"
              })
            }), " 조회 탭으로 이동합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Active Tx"
                  })
                }), ": DB Connection 중인 컨테이너 애플리케이션 내 액티브 트랜잭션을 의미합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Total"
                  })
                }), ": 컨테이너 애플리케이션 내 총 액티브 트랜잭션의 개수를 의미합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "normal",
                  children: "Normal"
                }), ": 0~3초 내 처리되는 트랜잭션의 개수를 의미합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "slow",
                  children: "Slow"
                }), ": 3~8초 내 처리되는 트랜잭션의 개수를 의미합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "vslow",
                  children: "Very Slow"
                }), ": 처리에 8초 이상 소요되는 트랜잭션의 개수를 의미합니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "외부 호출(httpc)"
              })
            }), ": Pod 내부의 컨테이너 애플리케이션이 호출한 외부 API를 의미합니다. 선택 시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "외부 호출 상태"
              })
            }), " 조회 탭으로 이동합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Active Tx"
                  })
                }), ": 외부 API 호출 중인 컨테이너 애플리케이션 내 액티브 트랜잭션을 의미합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Total"
                  })
                }), ": 컨테이너 애플리케이션 내 총 액티브 트랜잭션의 개수를 의미합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "normal",
                  children: "Normal"
                }), ": 0~3초 내 처리되는 트랜잭션의 개수를 의미합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "slow",
                  children: "Slow"
                }), ": 3~8초 내 처리되는 트랜잭션의 개수를 의미합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "vslow",
                  children: "Very Slow"
                }), ": 처리에 8초 이상 소요되는 트랜잭션의 개수를 의미합니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "remote-access-status",
        children: "외부 호출 상태"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["외부 호출 로그를 이용해 모니터링 대상이 호출하는 목적지의 연결 상태 정보를 기반으로 외부 호출 대상의 정상 여부 정보를 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "외부 호출 상태"
          })
        }), " 조회 기능을 통해 접속 불가 대상의 가시성을 제공합니다. 이를 통해 서비스 이슈 발생 시 문제 발생 지점을 용이하게 파악할 수 있습니다. 또한 지속적인 접속 실패에 의한 스레드와 커넥션 증가 등의 자원 잠식 현상을 사전에 감지하고 이에 대응할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "외부 호출 로그"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "애플리케이션 에이전트 설정을 통해 각 모니터링 대상별 외부 호출에 대한 성공 및 실패 여부를 기록한 로그입니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "외부 호출 유형은 다음과 같습니다."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "httpcall"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "db"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "socket"
              })]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["외부 호출 로그를 수집하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "에이전트 설정"
                })
              }), "에 다음 옵션을 추가해야 합니다."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-ini",
                children: "logsink_rt_enabled=true\r\nlogsink_enabled=true\n"
              })
            }), "\n"]
          }), "\n"]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-container-map-call-info-remote.png",
        desc: "외부 호출 로그"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "외부 호출 상태"
          })
        }), " 탭에서 외부 호출 로그를 목록 형식으로 조회할 수 있습니다. 최근 24시간 범위의 로그를 최대 500개 불러와 표시합니다. 실시간 조회 시 데이터는 3초 간격으로 업데이트됩니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
        id: "지시선-1-상단-바-옵션",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 1",
          src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 상단 바 옵션"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "에이전트"
              })
            }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "업무"
              })
            }), " 컬럼의 표시 여부를 선택할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "검색어 입력창을 통해 해당 검색어가 속한 에이전트, 업무, 로그가 포함된 열을 필터링할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "재생 아이콘",
              src: (__webpack_require__(60156)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "재생"
              })
            }), ": 로그가 업데이트 되었을 시 최하단으로 이동해 가장 최근 로그를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "일시 정지 아이콘",
              src: (__webpack_require__(57723)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "일시 정지"
              })
            }), ": 자동 스크롤 이동을 일시적으로 중지합다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "상단 아이콘",
              src: (__webpack_require__(47318)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "하단 아이콘",
              src: (__webpack_require__(81402)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), ": 최상단 또는 최하단으로 이동합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
        id: "지시선-2-외부-호출-로그-목록",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 2",
          src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 외부 호출 로그 목록"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["아이콘과 태그를 통해 외부 호출 로그의 주요 내용을 쉽게 확인할 수 있습니다. 에러 로그의 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "vslow",
          children: "빨간색"
        }), "으로 표시됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["외부 호출 유형은 아이콘 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "dbc 아이콘",
              src: (__webpack_require__(50406)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "db"
              })
            }), "), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "httpc 아이콘",
              src: (__webpack_require__(50583)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "httpcall"
              })
            }), "), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "socket 아이콘",
              src: (__webpack_require__(23540)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "socket"
              })
            }), ")을 통해 안내합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "target"
            }), ": 외부 호출 및 연결 대상을 의미합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "content"
            }), ": 로그의 내용을 의미합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "exception"
            }), ": 에러 발생 시 기록된 로그의 내용을 의미합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
        id: "지시선-3-마지막-호출-상태",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 3",
          src: (__webpack_require__(86865)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 마지막 호출 상태"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["조회된 모든 로그의 외부 호출 대상 목록을 확인합니다. 가장 최근 연결 상태에 따라 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "vslow",
          children: "성공"
        }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "mstop",
          children: "실패"
        }), "로 표시됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "조회 모드"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "List"
                  })
                }), ": 기본 목록 뷰입니다. 전체 목록의 길이가 화면 높이를 넘어갈 경우 스크롤이 생깁니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Map"
                  })
                }), ": 목록이 화면을 넘어가게되면 목록의 길이를 줄여 가로 방향으로 외부 호출 대상을 나열합니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "필터"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "외부 호출 대상을 선택 시 해당 외부 호출 대상에 대한 로그만 필터링해 외부 호출 로그 목록을 조회할 수 있습니다. 재선택 시 해제됩니다."
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "데이터가 없는 경우"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "실시간 조회 시 최근 24시간 동안 외부 호출 로그가 수집되었는지 확인합니다. 24시간 동안 외부 호출 로그가 수집되지 않은 경우 다음과 같은 안내 메시지를 제공합니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "k8s-container-map-call-info-remote-none.png",
          desc: "데이터 미수집"
        })]
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

/***/ 23540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIgMTFWM0gxNVY2SDlWM0gyVjExSDlWOEgxMVYxOEgxNVYyMUgyMlYxM0gxNVYxNkgxM1Y4SDE1VjExSDIyWk03IDlINFY1SDdWOVpNMTcgMTVIMjBWMTlIMTdWMTVaTTE3IDVIMjBWOUgxN1Y1WiIgZmlsbD0iIzc1NzU3NSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 81402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiA5TDEyIDE2TDE4IDlINloiIGZpbGw9IiM3NTc1NzUiLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 60156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF82NV8xOTQ2KSI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNSA2TDE2LjUgMTJMOC41IDE4TDguNSA2WiIgZmlsbD0iIzc1NzU3NSIvPg0KPC9nPg0KPGRlZnM+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwXzY1XzE5NDYiPg0KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPg0KPC9jbGlwUGF0aD4NCjwvZGVmcz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 47318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiAxNkwxMiA5TDE4IDE2SDZaIiBmaWxsPSIjNzU3NTc1Ii8+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ 50406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjEgNkMyMSAzLjIzODU4IDE2Ljk3MDYgMSAxMiAxQzcuMDI5NDQgMSAzIDMuMjM4NTggMyA2VjYuNTU2MjFDMy41NDM2OSA4Ljc4NyA3LjI3Nzg1IDEwLjg3NSAxMiAxMC44NzVDMTYuNzIyMiAxMC44NzUgMjAuNDU2MyA4Ljc4NyAyMSA2LjU1NjIxVjZaTTIxIDkuMzQ5OUMxOS4xNjI3IDExLjIzNzUgMTUuODE5NSAxMi41IDEyIDEyLjVDOC4xODA1MSAxMi41IDQuODM3MzUgMTEuMjM3NSAzIDkuMzQ5OVYxMC41NTYyQzMuNTQzNjkgMTIuNzg3IDcuMjc3ODUgMTQuODc1IDEyIDE0Ljg3NUMxNi43MjIyIDE0Ljg3NSAyMC40NTYzIDEyLjc4NyAyMSAxMC41NTYyVjkuMzQ5OVpNMyAxNC41NTYyVjEzLjM0OTlDNC44MzczNSAxNS4yMzc1IDguMTgwNTEgMTYuNSAxMiAxNi41QzE1LjgxOTUgMTYuNSAxOS4xNjI3IDE1LjIzNzUgMjEgMTMuMzQ5OVYxNC41NTYyQzIwLjQ1NjMgMTYuNzg3IDE2LjcyMjIgMTguODc1IDEyIDE4Ljg3NUM3LjI3Nzg1IDE4Ljg3NSAzLjU0MzY5IDE2Ljc4NyAzIDE0LjU1NjJaTTMgMTcuMzQ5OVYxOEMzIDIwLjc2MTQgNy4wMjk0NCAyMyAxMiAyM0MxNi45NzA2IDIzIDIxIDIwLjc2MTQgMjEgMThWMTcuMzQ5OUMxOS4xNjI3IDE5LjIzNzUgMTUuODE5NSAyMC41IDEyIDIwLjVDOC4xODA1MSAyMC41IDQuODM3MzUgMTkuMjM3NSAzIDE3LjM0OTlaIiBmaWxsPSIjNzU3NTc1Ii8+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ 50583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuOTMwOCAxMEMxNi45NzYzIDEwLjY1MDUgMTcgMTEuMzE4NiAxNyAxMkMxNyAxMi42ODE0IDE2Ljk3NjMgMTMuMzQ5NSAxNi45MzA4IDE0SDIxLjc5OTdDMjEuOTMxIDEzLjM1MzcgMjIgMTIuNjg0OSAyMiAxMkMyMiAxMS4zMTUxIDIxLjkzMSAxMC42NDYzIDIxLjc5OTcgMTBIMTYuOTMwOFpNMTQuOTIyOSAxMEMxNC45NzI4IDEwLjY0NDIgMTUgMTEuMzEyNyAxNSAxMkMxNSAxMi42ODcyIDE0Ljk3MjggMTMuMzU1OCAxNC45MjI5IDE0SDkuMDc2OTlDOS4wMjcxNiAxMy4zNTU4IDkgMTIuNjg3MiA5IDEyQzkgMTEuMzEyNyA5LjAyNzE2IDEwLjY0NDIgOS4wNzY5OCAxMEgxNC45MjI5Wk0xNi43MTUxIDhIMjEuMTY2OEMyMC4wMjIxIDUuMzgzMjggMTcuNzg4NyAzLjM0OTY1IDE1LjAzNzkgMi40NzIwNkMxNS43OTk5IDMuODczMjkgMTYuMzg4OSA1Ljc4ODA2IDE2LjcxNTEgOFpNMTEuOTk5OCAyQzEyLjg4MDIgMi4wMDg4NSAxNC4xMTQ2IDQuNDM3NzQgMTQuNjg2NCA4SDkuMzEyOTFDOS44ODM1MyA0LjQzNzE1IDExLjExNSAyLjAwNzk1IDExLjk5MDcgMkMxMS45OTM3IDIgMTEuOTk2OCAyIDExLjk5OTggMlpNOC45NjAxMiAyLjQ2ODE0QzYuMjA4OTQgMy4zNDM1OCAzLjk3NTMxIDUuMzc5MzggMi44MzEzOSA4SDcuMjg0MjhDNy42MTAwNSA1Ljc4NTk5IDguMTk4NjIgMy44Njk3MiA4Ljk2MDEyIDIuNDY4MTRaTTcuMDY5MDggMTBIMi4xOTk4OUMyLjA2ODgxIDEwLjY0NjMgMiAxMS4zMTUxIDIgMTJDMiAxMi42ODQ5IDIuMDY4ODEgMTMuMzUzNyAyLjE5OTg5IDE0SDcuMDY5MDhDNy4wMjM2NSAxMy4zNDk1IDcgMTIuNjgxNCA3IDEyQzcgMTEuMzE4NiA3LjAyMzY1IDEwLjY1MDUgNy4wNjkwOCAxMFpNNy4yODQyOCAxNkgyLjgzMTM5QzMuOTc1MzEgMTguNjIwNiA2LjIwODk0IDIwLjY1NjQgOC45NjAxMiAyMS41MzE5QzguMTk4NjIgMjAuMTMwMyA3LjYxMDA1IDE4LjIxNCA3LjI4NDI4IDE2Wk0xNS4wMzc5IDIxLjUyNzlDMTcuNzg4NyAyMC42NTA0IDIwLjAyMjEgMTguNjE2NyAyMS4xNjY4IDE2SDE2LjcxNTFDMTYuMzg4OSAxOC4yMTE5IDE1Ljc5OTkgMjAuMTI2NyAxNS4wMzc5IDIxLjUyNzlaTTE0LjY4NjQgMTZIOS4zMTI5MkM5Ljg4NDQ3IDE5LjU2ODcgMTEuMTE5IDIyIDExLjk5NSAyMkMxMi44NzU3IDIyIDE0LjExMzUgMTkuNTY4OCAxNC42ODY0IDE2WiIgZmlsbD0iIzc1NzU3NSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 57723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1wYXVzZTwvdGl0bGU+IC0tPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NTIuMDAwMDAwLCAtNzgyLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPg0KICAgICAgICAgICAgPGcgaWQ9InN1Z2dlc3RlZC1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCA3MzcuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9ImljLXBhdXNlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTIuMDAwMDAwLCA0NS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4wMDAwMDAsIDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMywwIEwzLDE0IEwwLDE0IEwwLDAgTDMsMCBaIE0xMCwwIEwxMCwxNCBMNywxNCBMNywwIEwxMCwwIFoiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==");

/***/ }),

/***/ 29859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 93000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

/***/ }),

/***/ 86865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC");

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