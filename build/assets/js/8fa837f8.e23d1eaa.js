"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[7198],{

/***/ 35450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ MDXContent),
/* harmony export */   RM: () => (/* binding */ toc)
/* harmony export */ });
/* unused harmony exports frontMatter, contentTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "기본 옵션",
  "id": "기본-옵션",
  "level": 2
}, {
  "value": "히트맵 패턴",
  "id": "히트맵-패턴",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_event",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_eventSetting",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "hitmap_pattern",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "애플리케이션 실행 분포 패턴을 머신 러닝을 통해 자동 인식하여 경고 알림을 보냅니다. 복잡한 조건 설정 없이도 이슈 상황을 빠르고 정확하게 인지할 수 있습니다. 수많은 히트맵 패턴들이 학습되어 있으며 실시간으로 수집되는 데이터에서 학습된 패턴과 유사한 패턴이 발생하면 경고 알림을 받아 볼 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "ai-alert.png",
      desc: "히트맵 패턴"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["히트맵과 히트맵 패턴에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "trs-view",
          children: "다음 문서"
        }), "를 참조하세요."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "기본-옵션",
        children: "기본 옵션"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "hitmap_exc_time",
              className: "uitext"
            }), ": 설정한 시간 미만의 패턴은 무시합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "silent",
              className: "uitext"
            }), ": 과도한 경고 알림 발생을 방지할 수 있는 옵션입니다. 첫번째 경고 알림 이후 선택한 시간 동안 경고 알림을 보내지 않습니다. 또한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_eventHistory",
              className: "uitext"
            }), " 메뉴에 기록되지 않습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), ": 설정한 내용을 저장하고 반영합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "히트맵-패턴",
        children: "히트맵 패턴"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음의 히트맵 패턴이 발생하면 경고 알림을 보내도록 설정할 수 있습니다. 각 항목의 토글 버튼을 선택해 경고 알림을 켜거나 끌 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "hitmap_pattern_horizontal",
              className: "uitext"
            }), ": 여러 트랜젝션이 일정한 시간 내에 종료되는 패턴입니다. 자원을 획득하거나 외부 HTTPS Call을 할 때 타임아웃 또는 지연이 발생합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "가로라인 패턴",
              src: (__webpack_require__(1393)/* ["default"] */ .A) + "",
              width: "331",
              height: "201"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "hitmap_pattern_vertical",
              className: "uitext"
            }), ": 호출 시점이 다르지만 동일 시점에 트랜잭션이 종료되는 패턴입니다. 트랜잭션이 사용하는 공통의 자원에 일시적인 병목이 발생합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "세로라인 패턴",
              src: (__webpack_require__(3528)/* ["default"] */ .A) + "",
              width: "331",
              height: "201"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "hitmap_pattern_flying",
              className: "uitext"
            }), ": 특정 리소스나 로그와 같은 공통 자원 부족현상으로 간격을 두고 파도 치는 것과 같은 현상의 패턴이 발생합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "플라잉 패턴",
              src: (__webpack_require__(88803)/* ["default"] */ .A) + "",
              width: "331",
              height: "201"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "hitmap_pattern_overload",
              className: "uitext"
            }), ": 전체 또는 일부 응답에 일시적인 문제가 발생하면 일시적으로 트랜젝션이 밀집하는 패턴이 발생합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "과부하 패턴",
              src: (__webpack_require__(71226)/* ["default"] */ .A) + "",
              width: "331",
              height: "201"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "hitmap_pattern_flood",
              className: "uitext"
            }), ": 과도한 트렌잭션의 요청이나 부하가 발생하면 응답시간이 전체적으로 증가하는 패턴이 발생합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "폭주 패턴",
              src: (__webpack_require__(71085)/* ["default"] */ .A) + "",
              width: "331",
              height: "201"
            })
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

/***/ 13356:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _common_items_hitmap_pattern_notice_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35450);


const frontMatter = {
	id: 'hitmap-notice',
	title: 'AI 기반의 히트맵 패턴 경고 알림',
	description: '애플리케이션 실행 분포 패턴을 머신 러닝을 통해 자동 인식하여 경고 알림을 보냅니다.',
	tags: [
		'Go',
		'히트맵',
		'경고 알림',
		'애플리케이션',
		'애플리케이션 모니터링'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "golang/hitmap-notice",
  "title": "AI 기반의 히트맵 패턴 경고 알림",
  "description": "애플리케이션 실행 분포 패턴을 머신 러닝을 통해 자동 인식하여 경고 알림을 보냅니다.",
  "source": "@site/docs/golang/hitmap-notice.mdx",
  "sourceDirName": "golang",
  "slug": "/golang/hitmap-notice",
  "permalink": "/golang/hitmap-notice",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/golang/hitmap-notice.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Go",
      "permalink": "/tags/go"
    },
    {
      "inline": true,
      "label": "히트맵",
      "permalink": "/tags/히트맵"
    },
    {
      "inline": true,
      "label": "경고 알림",
      "permalink": "/tags/경고-알림"
    },
    {
      "inline": true,
      "label": "애플리케이션",
      "permalink": "/tags/애플리케이션"
    },
    {
      "inline": true,
      "label": "애플리케이션 모니터링",
      "permalink": "/tags/애플리케이션-모니터링"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "hitmap-notice",
    "title": "AI 기반의 히트맵 패턴 경고 알림",
    "description": "애플리케이션 실행 분포 패턴을 머신 러닝을 통해 자동 인식하여 경고 알림을 보냅니다.",
    "tags": [
      "Go",
      "히트맵",
      "경고 알림",
      "애플리케이션",
      "애플리케이션 모니터링"
    ]
  },
  "sidebar": "goSidebar",
  "previous": {
    "title": "알림 메시지 사용자 정의",
    "permalink": "/golang/set-notification-message"
  },
  "next": {
    "title": "이상치 탐지 경고 알림",
    "permalink": "/golang/set-event-detect-anomal"
  }
};
const assets = {

};




const toc = [..._common_items_hitmap_pattern_notice_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_hitmap_pattern_notice_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["히트맵과 히트맵 패턴에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "trs-view",
          children: "다음 문서"
        }), "를 참조하세요."]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 1393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 3528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAADJCAYAAACquBD5AAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABS6ADAAQAAAABAAAAyQAAAACyohy2AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAAJvUlEQVR4Ae3dMXIjRRQGYJkidUhCRhFyCS5DsheYjIBMFyDhMlyCkCIjIeQABmlXa01p2vvKmnb7vf62ymtr1Orp/l7rh5le7R6WZXk6+EWAAAECLwp89eKzniRAgACBs4CwtBAIECAQEBCWASRNCBAgICytAQIECAQEhGUASRMCBAgIS2uAAAECAQFhGUDShAABAsLSGiBAgEBAQFgGkDQhQICAsLQGCBAgEBAQlgEkTQgQICAsrQECBAgEBIRlAEkTAgQICEtrgAABAgEBYRlA0oQAAQLC0hogQIBAQEBYBpA0IUCAgLC0BggQIBAQEJYBJE0IECAgLK0BAgQIBASEZQBJEwIECAhLa4AAAQIBAWEZQNKEAAECwtIaIECAQEBAWAaQNCFAgICwtAYIECAQEBCWASRNCBAgICytAQIECAQEhGUASRMCBAgIS2uAAAECAQFhGUDShAABAsLSGiBAgEBAQFgGkDQhQICAsLQGCBAgEBAQlgEkTQgQICAsrQECBAgEBIRlAEkTAgQICEtrgAABAgGBc1guy/J0+rq095iH9eD98J7zYMjYrt8UlwH4ToAAAQJrAZfhaw+PCBAgsCkgLDdZHCRAgMBaQFiuPTwiQIDApoCw3GRxkAABAmsBYbn28IgAAQKbAsJyk8VBAgQIrAWE5drDIwIECGwKCMtNFgcJECCwFhCWaw+PCBAgsCnw9eZRBwkUFPju138/f6T3NL2/Pjw+FJymKXUS8H+WnWB1S4BALQFhWaueZkOAQCcBYdkJVrcECNQScM+yVj3N5gUB9yhfwPHUFwWE5ReJNKgiYIOnSiXHzMNl+Bh3ZyVAIJmAsExWMMMlQGCMgLAc4+6sBAgkE3DPMlnBDPf1AjZ4Xm/nlYeDsLQKphGwwTNNqbtM1GV4F1adEiBQTUBYVquo+RAg0EVAWHZh1SkBAtUE3LOsVlHzaQrY4GnSeCIgICwDSJrUELDBU6OOo2bhMnyUvPMSIJBKQFimKpfBEiAwSkBYjpJ3XgIEUgm4Z5mqXAZ7j4ANnnv0vFZYWgPTCNjgmabUXSbqMrwLq04JEKgmICyrVdR8CBDoIiAsu7DqlACBagLuWVarqPk0BWzwNGk8ERAQlgEkTWoI2OCpUcdRs3AZPkreeQkQSCUgLFOVy2AJEBglICxHyTsvAQKpBM73LJdleTqN+ng8Ppy+e8yj5Hr48Lhe36dJ/v/Les+33odk1WWhfFw2fidQV+C0wXP9VXemZtZDwGV4D1V9EiBQTkBYliupCREg0ENAWPZQ1ScBAuUE/KH0ciU1oZaAT/C0ZByPCAjLiJI2JQR8gqdEGYdNwmX4MHonJkAgk4CwzFQtYyVAYJiAsBxG78QECGQScM8yU7WM9S4BGzx38U3/YmE5/RKYB8AGzzy17jFTl+E9VPVJgEA5AWFZrqQmRIBADwFh2UNVnwQIlBNwz7JcSU2oJWCDpyXjeERAWEaUtCkh8MfhcP57Wy+T+eFwOP/9lpfHvhN4ScBl+Es6niNAgMAnAWFpKRAgQCAgICwDSJoQIEDAPUtrYBoB9yinKXWXiQrLLqw6fY8CPsHzHquSZ0wuw/PUykgJEBgoICwH4js1AQJ5BIRlnloZKQECAwXcsxyI79RvK+ATPG/rXe1swrJaRc2nKWCDp0njiYCAy/AAkiYECBAQltYAAQIEAgLCMoCkCQECBNyztAamEbDBM02pu0xUWHZh1el7FLDB8x6rkmdMLsPz1MpICRAYKCAsB+I7NQECeQSEZZ5aGSkBAgMF3LMciO/Ubytgg+dtvaudTVhWq6j5NAVs8DRpPBEQcBkeQNKEAAECwtIaIECAQEBAWAaQNCFAgMD5nuWyLOd/T/l4PJ7/HWWPeZzeGuXWw4fH9fr+9P633vOt9yFr87JQ/HeDQHWB0wbP9Vf1+ZrfvgIuw/f11BsBAkUFhGXRwpoWAQL7CgjLfT31RoBAUQF/KL1oYU3rVsAneG5NHIkLCMu4lZbJBXyCJ3kBBw/fZfjgAjg9AQI5BIRljjoZJQECgwWE5eACOD0BAjkE3LPMUSej3EHABs8OiBN3ISwnLv5sU7fBM1vF952vy/B9PfVGgEBRAWFZtLCmRYDAvgLCcl9PvREgUFTAPcuihTWtWwEbPLcmjsQFhGXcSsvkAjZ4khdw8PBdhg8ugNMTIJBDQFjmqJNREiAwWEBYDi6A0xMgkEPAPcscdTLKHQRs8OyAOHEXwnLi4s82dRs8s1V83/m6DN/XU28ECBQVEJZFC2taBAjsKyAs9/XUGwECRQXcsyxaWNO6FbDBc2viSFxAWMattEwuYIMneQEHD99l+OACOD0BAjkEhGWOOhklAQKDBYTl4AI4PQECOQTcs8xRJ6PcQcAGzw6IE3chLCcu/mxTt8EzW8X3na/L8H099UaAQFEBYVm0sKZFgMC+AsJyX0+9ESBQVMA9y6KFNa1bARs8tyaOxAWEZdxKy+QCNniSF3Dw8F2GDy6A0xMgkENAWOaok1ESIDBYQFgOLoDTEyCQQ+B8z3JZlqfTcI/H48Ppu8c8Sq6HD4/r9X2a5P+/rPd8631IVl0Wysdl43cCdQVOGzzXX3VnamY9BFyG91DVJwEC5QSEZbmSmhABAj0EhGUPVX0SIFBOwB9KL1dSE2oJ+ARPS8bxiICwjChpU0LAJ3hKlHHYJFyGD6N3YgIEMgkIy0zVMlYCBIYJCMth9E5MgEAmAfcsM1XLWO8SsMFzF9/0LxaW0y+BeQBs8MxT6x4zdRneQ1WfBAiUExCW5UpqQgQI9BAQlj1U9UmAQDkB9yzLldSEWgI2eFoyjkcEhGVESZsSAjZ4SpRx2CRchg+jd2ICBDIJCMtM1TJWAgSGCQjLYfROTIBAJgH3LDNVy1jvErDBcxff9C8WltMvgXkAbPDMU+seM3UZ3kNVnwQIlBMQluVKakIECPQQEJY9VPVJgEA5Afcsy5XUhFoCNnhaMo5HBIRlRGlAG5sR+6PfY7r3a+/pb3+Z1/e4NY+tY68/Q/yVW+fdOhbvcd3SZfjawyMCBAhsCgjLTRYHCRAgsBYQlmsPjwgQILAtsCzL0/YzjhIgQIDAReDzBs/WjVDHHh8Y5DS4LPDr72qZs5bvpW4uw6/fTX4mQIBAQ0BYNmAcJkCAwLWAsLzW8DMBAgRaAjZ4WjKOEyBA4Fng8wbPNz/9vtoV/+e3Hx8cY/De1kH0Zv/zEn/+aeu1337/82rd//3nL9a99/5ha927DH9+L/mJAAECTQFh2aTxBAECBJ4FhOWzhZ8IECDQFrDB07bxDAECBC4CD8LyQuE7AQIE2gL/AfdPRx8aEBzNAAAAAElFTkSuQmCC");

/***/ }),

/***/ 88803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 71226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 71085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAADJCAYAAACquBD5AAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABS6ADAAQAAAABAAAAyQAAAACyohy2AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAARI0lEQVR4Ae2dPZJbxxVGMS5XMWKgJThQ5N04cHENLOWTKXKCXOU1aDeKHClgeQUKHDmiBciAgMaZ0QfcRr+/w4TT39zf0w9X9bo1nJfX19ev+/3+5S///M/X3cWfL58/vvxrt7vS/rrbofbfH7+9svvw6eeXX7679v3mh91Lb7s0x0Vb5y+pX6qP7FKN6iOmlJe0c/EXX5AdaVQz2VW0NAfZkVaphThTDtJo30hL66Na0nipXVoL9UtaJS/1W8lBvlP0+6eLz51fSkACEpDAGwQclm+AUZaABCRwScBheUnDryUgAQm8ReBwZvnW99QlIAEJSOA3An8WxPsE6HD5fY/7v0uH1ZW8FV+qPo2X2lEO0nrHoxyk0eUG2VU06o2eg0qOii/VR/HIjrRKbxSPaqloSQ5fwyuE9ZWABDZDwGG5ma22UQlIoELAYVmhp68EJLAdAl7wbGev7VQCEnicwPmCJzngPKQhu8rh7eOls6e1MJeKOmLPR+wb9UFcRtRCedei9eaX7tuz+fka/mzCxpeABFZBwGG5im20CQlI4NkEHJbPJmx8CUhgHQS84FnHPtqFBCTwXALnCx5Kkx7UjjiAHZGDGKhNR4D2PH0mp6v68czU7+PR+ntSfaT1zzxNxLY3X8On2QezSkACCyPgsFzYhlmuBCQwDQGH5TTczSoBCSyNgBc8S9sx65WABKYgcL7gaQ8zD7+DZ+6H6SPq652DOI/Y+Knyjugt3aOUQRqPeiNf0sg31dI+0ngVO6qFtEqOufj6Gj6XnbAOCUhg1gQclrPeHouTgATmQsBhOZedsA4JSGDeBLzgmff+WJ0EJDAPAucLnnmUs4wqeh/Y9+567vX17nfu8dL9GHExMiIH7cca8voaTjurJgEJSKAh4LBsgLiUgAQkQAQclkRFTQISkEBLwAuelohrCUhAArcEnnbBkx5q35Y0RuldX+94KYWp8k51YJ9ySe2IH2lpvIrdmpkSl7TfqfajrdnX8JaIawlIQAJAwGEJUJQkIAEJtAQcli0R1xKQgASIgBc8REVNAhKQwDWBLhc8Iw5gR+S4RvOc1Yg+0oPz3h2uJW+6RyPs0hzpXk61R2l9ve169utreO/dMZ4EJLBKAg7LVW6rTUlAAr0JOCx7EzWeBCSwSgLHM8vTJc9+v385dHnv+vuf/naE86h/ku/7n3a7y/ivr7uvl+tDAUtYf/j080vSb6Wfv//7H0/fD6zv119FctDP/R2ruFg/+Hyd473h37vf9Hn+8On68/LrE3jsuK23Eq/383L4dTFtfWte9+z3CO40ZP7/bPvXAwTSg+TU7oEShrr0vnioFN+7ll++2329rOebH3bH/whcatWvqWbS6HkhLa0n9aVa0hxkl+Yl34qW5k369TW8shP6SkACmyHgsNzMVtuoBCRQIeCwrNDTVwIS2A6B0+Hudjq2UwlIQAL3E7j7J3iSg9D7y1iWR3poTF2N4DciB/XWW6twrtQy1QUP1TwVg6nyEoMRWtKvr+EjdsIcEpDA4gk4LBe/hTYgAQmMIOCwHEHZHBKQwPIJeMGz/D20AwlI4PkE7r7goZLWcqFAvZFGh8FzZ0A1U28jtLSW1I5qnvt+rKXmdI+WuB/tHvka3hJxLQEJSAAIOCwBipIEJCCBloDDsiXiWgISkAAR8IKHqKhJQAISuCYw9IKHDoPTn5Yg3xGHxpSDaqlo11syvxUxSKtMfVO7NG9vO9rf3jnmxKDSb8WXmI7gktTsazjtjpoEJCCBhoDDsgHiUgISkAARcFgSFTUJSEACLQEveFoiriUgAQncEuhywZMcjt6mvk9Jc5BdekBMvqlWyXEfiWtrqu/aYhkr6qO3RntEOVI78k1pky9ddpJdmoPspopXyTuVb8vP1/CWiGsJSEACQMBhCVCUJCABCbQEHJYtEdcSkIAEiIAXPERFTQISkMA1gXcveNKD1dTuOvVzViMO559T+WNRR7BPc/S2o718jNJ9Xmkf90X9Y+sReYlpJS/Fo04rOSheqlF9j9bia3hKXTsJSGDTBByWm95+m5eABFICDsuUlHYSkMC2CXjBs+39t3sJSCAj8O4FTxaiZvXoYWsta82baiaNstCBM2lpvNSOakm1Sg7yJY1qqXBJfakW0qi+3hrVnOagmkmjeJSXtDQe5eitUS2kUV7qjbQ2nq/hRFNNAhKQQEPAYdkAcSkBCUiACDgsiYqaBCQggZaAFzwtEdcSkIAEbgl0ueBpD0K/fP74cptqt0vtyJcOYMluKi3trXcflJe0EVzS3ir1kW+at8KA8lI8qoU08iUtzUu+Fa1ScyXvVL5Jv76GT7U75pWABBZFwGG5qO2yWAlIYCoCDsupyJtXAhJYFIGXywue/X5/PGs8aa7lcXiafR5evx44+HnY9ufhOCwPDwEdJCeHnoeHaMQfqq+Sd6reeveRxuvdb5qX9ij17V0z1TInbap+aT9G1EJ5aT9SO/IljeIl/foaTjTVJCABCTQEHJYNEJcSkIAEiIDDkqioSUACEmgJnA7vW921BCQgAQn8TuDdn+BJDj1/D3X9FR2iXlvct+pdSyXefZVfW1PeCiuKd52xvkpzVPqo+NY7vI6Q9nvt9dsq9U3tKAdpxI808qVaSCPf3hrVXNGoPuqNtNbX1/CWiGsJSEACQMBhCVCUJCABCbQEHJYtEdcSkIAEiIAXPERFTQISkMA1gXcveOhg9dr9txUdjqa+FK+3NqdaiFXvfrcWb8T+pvs2opYROdJ+6VkjX6qZNIo3QqOa27y+hrdEXEtAAhIAAg5LgKIkAQlIoCXgsGyJuJaABCRABLzgISpqEpCABK4JnC94Rhy2/vLd7vjvAp5K+OaHHf6untP3L/+mA1jSqI/UjnxJu6zr3q97x7s3/yP2xI/ipHa9fSleqtF+VPqgvBRvRF6qJdXos5r2QTnIl+xII1ZkV9GSfn0NrxDWVwIS2AwBh+VmttpGJSCBCgGHZYWevhKQwHYIeMGznb22UwlI4HEC5wseCpEerKaHt6kd1UIa1ZdqFI80ilex6+1L8VKNeqM9Ii3NQXZpXvIdoVG/pKW1UL+pb2pHOVKNctCFRyUe+fZmSjlIe7RfX8OJnJoEJCCBhoDDsgHiUgISkAARcFgSFTUJSEACLQEveFoiriUgAQncEnj3gufWnJXKQS1HvFUpR3p4exttt6v4UrxUoz5IS+NV7FIGVB/5klapL/Wt1JfWnNpRzVQf2aVapZbUl+xIS2uu2FXypr5k12q+hld2UV8JSGAzBByWm9lqG5WABCoEHJYVevpKQALbIeAFz3b22k4lIIHHCSz6gidtuz2o/fL54wtplXjkSzlII9+Kll4o0E9pVPKO6I3qmyov1ZJqS6w57a23Xfo8987bxvM1vCXiWgISkAAQcFgCFCUJSEACLQGHZUvEtQQkIAEi4AUPUVGTgAQkcE3g3Que9BA6PYBN412X+PaK4pFGEVI78iWN4pFGlypkRzl6a5W8qW9q17u3SjyqOX3G07yUI/WlWigeaWmO1De1o7y9fXvHa2v2Nbwl4loCEpAAEHBYAhQlCUhAAi0Bh2VLxLUEJCABIPByecGz3++Pv8f7pLmWx+GZ8Xl4Pf6+ez8P2/48HIfl6SGAYTprqXKgS4fkI5qdKm+lN+JMWpqDfFMu5FvJO8KXeiMtrWWEXaU+8q3sG8XrzSDJ4Wt4b+rGk4AEVknAYbnKbbUpCUigNwGHZW+ixpOABNZJ4HR4v87u7EoCEpBAHwLv/gQPpaCDWtLIlw5RyTe1oxwUr2JHvpX6KF6qpb2l8bQbQ4D2jbRKNRSPNMpBzzPZVbS0FspBvqlG8R7t19dwoqkmAQlIoCHgsGyAuJSABCRABByWREVNAhKQQEvAC56WiGsJSEACtwTuvuC5DdFfocNbykIHteRLGsVborbm3nrvxwhWaY7edr1Z9Y6X9ts7b894vob3pGksCUhgtQQclqvdWhuTgAR6EnBY9qRpLAlIYL0EvOBZ797amQQk0I/Aoi941nBo/NZWVnqr+FI9lXgVX6qFNMpBGvn21qbKW+kjrZnsSOtdy4gcVHOb19dwoqQmAQlIoCHgsGyAuJSABCRABByWREVNAhKQQEvAC56WiGsJSEACtwTOFzztYeaXzx+Pv7ysdUntWr+31pV4qW9q91aNPfW0FrKraNQDxSO7uWvUB2lpHxXfETmmqo/ykkYMUjvyHaFRfa3ma/iInTCHBCSweAIOy8VvoQ1IQAIjCDgsR1A2hwQksHwCXvAsfw/tQAISeD6Buy94nl9SnqE9gH3rUooijvCdKkclb29WFC/VRvRBOVJtqj7SvCPsiBXl7W1HOZ6t+Rr+bMLGl4AEVkHAYbmKbbQJCUjg2QQcls8mbHwJSGAdBLzgWcc+2oUEJPBcAkMveNJDXmqZfFON4lU0ypvGI1/S0nhkV4lHvqRR3qm0EfVRDtLmxCCtL7Wj3iq+FC/VKC9pFC+1a319DW+JuJaABCQABByWAEVJAhKQQEvAYdkScS0BCUiACHjBQ1TUJCABCVwTOF/wXMtvr+hwNNXejnr9nd7xrqM/Z0U1PyfT+KjUG2lpZeRLWiUe+VZyUDzS0hypHeWYu9a7t97xHuXna/ij5PSTgAQ2RcBhuanttlkJSOBRAg7LR8npJwEJbIrAy+UFz36/P/4qiZPmWh6HT4PPw+vXAwc/D9v+PByH5ekhODwQj/yhA9hUS/NRvIpvGo/sUo3qI9/UjnxJo3ipRvFSjXKkvqldJQf5plpaH9mlOeZkN6c+RtSS5PA1fE5PqLVIQAKzJeCwnO3WWJgEJDAnAg7LOe2GtUhAAvMlcDq8n2+FViYBCUhgegLv/gRPcuh5aGGEHeUgrYKU4lW0//747fEW9VTTh08/H/9vg9P69Hea42Tf62/K2yv2e3EoL2nvxbj83ghfylHRLuu/92vKe2+MP7KnHBWN8qXxyLe3ltTia3hv6saTgARWScBhucpttSkJSKA3AYdlb6LGk4AE1knAC5517qtdSUACfQl0ueChkpID0y+fP+KFB8UjjXKkdr19KR5plfrSeJUcI3zTiy+qhbSUC9n11qg+0nrnTeNRLaSl8Sp2lDfV0rw94/kantLUTgIS2DQBh+Wmt9/mJSCBlIDDMiWlnQQksG0CXvBse//tXgISyAicL3jSA9Op7KidtJbUl+xSrXctdAmS5qjYUb9UC9lVNKqZ4pFdqlG8VKMcFV+KR1qaY+521Btp1EdqR749NV/De9I0lgQksFoCDsvVbq2NSUACPQk4LHvSNJYEJLBeAl7wrHdv7UwCEuhH4HzBQyHpYDXV0nipXZp3Kjvqg7RKfRQv1Sp5K75UX+94aY7UrlLfVL50CUfaVPWledM9ot5IS/Mmdr6G0+6oSUACEmgIOCwbIC4lIAEJEAGHJVFRk4AEJNAS8IKnJeJaAhKQwC2B8wVPcsD51j+plvpW7G5L59/90zsH5SUtzUu+pFG81I58K1olb+qb2lX6qPhSfaRVcozwHVFzJUfFl/j1jOdrONFUk4AEJNAQcFg2QFxKQAISIAIOS6KiJgEJSKAl4AVPS8S1BCQggVsCd1/w0CHqmrVbZP0vlkbwq/RR8R3Rmzk+vsydwRqeIV/DaRfVJCABCTQEHJYNEJcSkIAEiIDDkqioSUACEmgJeMHTEnEtAQlI4JbA+YLn9lt8kUF2c9IqB91pHyNyUC1pXvIlrXc8yjFCoz7SvORLWu94lCPV0loqdlQLxettRzlGaEkfvoaP2AlzSEACiyfgsFz8FtqABCQwgoDDcgRlc0hAAssn4AXP8vfQDiQggecTeHFYPh+yGSQggeUT+B/ic8L7iaa8CQAAAABJRU5ErkJggg==");

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