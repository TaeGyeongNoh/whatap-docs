"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[14897],{

/***/ 83961:
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
  "value": "에이전트 확인하기",
  "id": "에이전트-확인하기",
  "level": 2
}, {
  "value": "에이전트 연결 상태 확인하기",
  "id": "에이전트-연결-상태-확인하기",
  "level": 3
}, {
  "value": "에이전트별 모니터링",
  "id": "에이전트별-모니터링",
  "level": 3
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
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang, InDoc} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "에이전트-확인하기",
        children: "에이전트 확인하기"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "에이전트-연결-상태-확인하기",
        children: "에이전트 연결 상태 확인하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "dashboard",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "apm-dashboard-check-agent.png",
          desc: "에이전트 연결 상태"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "dashboard-transactionmap",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "txmap-check-agent.png",
          desc: "에이전트 연결 상태"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "화면 왼쪽 위, 시간 선택자의 오른쪽에서는 해당 프로젝트와 연결된 에이전트의 상태를 확인할 수 있는 정보를 제공합니다. 이를 통해 모니터링 대상 서버의 동작 여부를 바로 확인할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Total"
              })
            }), ": 프로젝트와 연결된 모든 에이전트의 수"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Active"
              })
            }), ": 활성화된 에이전트의 수"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Inactive"
              })
            }), ": 비활성화된 에이전트의 수"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "에이전트 표시 아이콘",
              src: (__webpack_require__(68655)/* ["default"] */ .A) + "",
              width: "15",
              height: "19"
            }), ": 비활성화된 에이전트를 표시하거나 감출 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "에이전트별-모니터링",
        children: "에이전트별 모니터링"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "dashboard,multi-instance-monitoring",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "apm-dashboard-select-agent.png",
          desc: "에이전트 선택하기"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "dashboard-transactionmap",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "txmap-select-agent.png",
          desc: "에이전트 선택하기"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "dashboard,multi-instance-monitoring",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "기본적으로 대시보드에는 모든 에이전트로부터 수집한 지표들을 차트에 표시하지만 에이전트별로 데이터를 조회할 수도 있습니다. 시간 선택자 아래에 위치한 에이전트를 하나 또는 둘 이상을 선택하세요. 선택한 에이전트의 지표들로 대시보드에 배치된 위젯의 데이터를 갱신합니다."
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "dashboard-transactionmap",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "기본적으로 차트에는 모든 에이전트로부터 수집한 지표들을 차트에 표시하지만 에이전트별로 데이터를 조회할 수도 있습니다. 시간 선택자 아래에 위치한 에이전트를 하나 또는 둘 이상을 선택하세요. 선택한 에이전트의 트랜잭션 데이터로 차트를 갱신합니다."
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "tip",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["에이전트를 하나 또는 둘 이상을 선택한 상태에서 다시 모든 에이전트를 선택하려면 선택을 해제하거나 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Total"
            })
          }), "을 선택하세요."]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "java,python,php,nodejs,dotnet,golang",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["프로젝트에 연결된 에이전트의 수가 많을 경우 에이전트의 이름을 짧게 설정하는 것이 효율적입니다. 에이전트 이름 설정에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "agent-name",
              children: "다음 문서"
            }), "를 참조하세요."]
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "postgresql,mysql,redis,mongodb,oracle-pro,oracle",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["프로젝트에 연결된 에이전트의 수가 많을 경우 에이전트의 이름을 짧게 설정하는 것이 효율적입니다. 에이전트 이름 설정에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "agent-dbx-settings#naming",
              children: "다음 문서"
            }), "를 참조하세요."]
          })
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

/***/ 29324:
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
  "value": "프리셋",
  "id": "preset",
  "level": 2
}, {
  "value": "새로운 프리셋 만들기",
  "id": "newpreset",
  "level": 3
}, {
  "value": "프리셋 삭제하기",
  "id": "removepreset",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, UI, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!UI) _missingMdxReference("UI", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "preset",
        children: "프리셋"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        product: "java,php,python,nodejs,dotnet,golang,redis,mongodb,oracle-pro",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "apm-dashboard-preset-list.png",
          desc: "Preset"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "대시보드에서 사용자가 설정한 위젯의 설정과 레이아웃 상태를 저장하고 불러올 수 있습니다. 위젯의 크기를 조절하고, 원하는 위치에 배치해 새로운 프리셋을 만들 수 있습니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "default",
              className: "uitext"
            }), "으로 설정된 프리셋은 변경할 수 없습니다."]
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        product: "postgresql,mysql,oracle",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "대시보드에서 사용자가 설정한 위젯의 설정과 레이아웃 상태를 저장하고 불러올 수 있습니다. 위젯의 크기를 조절하고, 원하는 위치에 배치해 새로운 프리셋을 만들 수 있습니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "db-preset-list.png",
          desc: "프리셋"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Default"
                })
              }), ": XOS 지표와 AWS RDS CloudWatch 지표, 주요 DB 지표로 구성된 프리셋입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Default(xos)"
                })
              }), ": XOS 지표와 주요 DB 지표로 구성된 프리셋입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Default(rds)"
                })
              }), ": AWS RDS CloudWatch 지표와 주요 DB 지표로 구성된 프리셋입니다."]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["기본 프리셋(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "kube_default",
              className: "uitext"
            }), ")은 변경할 수 없습니다."]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "newpreset",
        children: "새로운 프리셋 만들기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "대시보드에서 원하는 형식으로 위젯을 배치해 보세요. 크기를 조절하고 자주 확인하는 위젯만 배치할 수도 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["화면 오른쪽 위에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "저장 아이콘",
              src: (__webpack_require__(16379)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "새로운 프리셋 이름을 입력하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "apm-dashboard-preset-save.png",
            desc: "프리셋 저장하기"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["에이전트 선택 내역을 같이 저장하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "ITM07345",
              className: "uitext"
            }), "을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "프리셋 목록에서 새로 저장한 프리셋을 확인할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["새로 만든 프리셋에 변경 사항이 생겼다면 다시 프리셋을 저장해야 합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "저장 아이콘",
                src: (__webpack_require__(16379)/* ["default"] */ .A) + "",
                width: "24",
                height: "24"
              }), " 버튼을 선택한 다음 같은 이름으로 프리셋을 저장하세요. 기존의 프리셋에 변경 사항을 덮어쓰기합니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "대시보드의 변경 사항을 저장하지 않고 다른 메뉴로 이동하면 변경 사항은 저장되지 않습니다."
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
          product: "java,php,python,golang,nodejs,dotnet",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "프리셋은 프로젝트 단위로 저장되어 다른 사용자와 공유할 수 있습니다."
            }), "\n"]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
          product: "java,php,python,golang,nodejs,dotnet",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "프리셋은 사용자 계정으로 저장되며 현재는 다른 사용자와 공유할 수 없습니다. 더 나은 기능을 제공하도록 업데이트 예정입니다."
            }), "\n"]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "removepreset",
        children: "프리셋 삭제하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["사용하지 않는 프리셋이 있다면 프리셋 목록에서 삭제할 수 있습니다. 프리셋 목록에서 삭제하려는 항목의 오른쪽에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "삭제 아이콘",
          src: (__webpack_require__(67831)/* ["default"] */ .A) + "",
          width: "20",
          height: "20"
        }), " 버튼을 선택하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
            children: "Default"
          }), " 프리셋은 삭제할 수 없습니다."]
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

/***/ 67108:
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
  "value": "과거 데이터 조회하기",
  "id": "과거-데이터-조회하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "과거-데이터-조회하기",
      children: "과거 데이터 조회하기"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "대시보드에서는 실시간 모니터링 기능을 기본 제공하지만 과거 시간의 데이터를 조회할 수도 있습니다."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "실시간 모드"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "비실시간 모드"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tbody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "실시간 모드",
              src: (__webpack_require__(12456)/* ["default"] */ .A) + "",
              width: "300",
              height: "82"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "비실시간 모드",
              src: (__webpack_require__(37651)/* ["default"] */ .A) + "",
              width: "349",
              height: "82"
            })
          })]
        })
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["화면 왼쪽 위에 시간 선택자에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "멈춤 아이콘",
            src: (__webpack_require__(9831)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 버튼을 선택하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "날짜 및 시간 영역을 클릭해 원하는 시간대를 설정하세요."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "apm-timeselector-setting.png",
          desc: "시간 수동 설정"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "apply",
            className: "uitext"
          }), " 버튼을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["사용자가 설정한 시간을 기준으로 대시보드에 배치한 위젯의 데이터를 갱신합니다. 실시간 모드로 전환하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "재생 아이콘",
        src: (__webpack_require__(84233)/* ["default"] */ .A) + "",
        width: "24",
        height: "24"
      }), " 버튼을 선택하세요."]
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

/***/ 71668:
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
  "value": "위젯 옵션 이용하기",
  "id": "위젯-옵션-이용하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, InDoc} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "위젯-옵션-이용하기",
      children: "위젯 옵션 이용하기"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "위젯에 표시된 아이콘 버튼의 기능은 다음과 같습니다."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "java,php,python,nodejs,dotent,golang",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "정보 아이콘",
              src: (__webpack_require__(57765)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " : 주요 위젯에 대한 기능 및 정보를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "병합 아이콘",
              src: (__webpack_require__(53332)/* ["default"] */ .A) + "",
              width: "24",
              height: "25"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TLT06734",
              className: "uitext"
            }), ": 해당 위젯 항목의 에이전트 데이터를 개별 또는 병합해 그래프로 표시합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "상세 아이콘",
              src: (__webpack_require__(31252)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "detail",
              className: "uitext"
            }), ": 해당 위젯 항목의 데이터를 에이전트별로 구분해 조회할 수 있는 모달 창이 나타납니다."]
          }), "\n"]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "postgresql,mysql,redis,mongodb,oracle-pro,oracle",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "정보 아이콘",
              src: (__webpack_require__(57765)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " : 주요 위젯에 대한 기능 및 정보를 확인할 수 있습니다. (다국어 지원 예정)"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "위 방향 아이콘",
              src: (__webpack_require__(2432)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "아래 방향 아이콘",
              src: (__webpack_require__(89839)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " : 차트의 세로축 범위를 확대 또는 축소할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "확대보기 아이콘",
              src: (__webpack_require__(21671)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " : 해당 위젯의 데이터를 넓은 화면으로 펼쳐볼 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "상세 아이콘",
              src: (__webpack_require__(31252)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " : 해당 위젯 항목의 데이터를 에이전트별로 구분해 조회할 수 있는 상세 창이 나타납니다."]
          }), "\n"]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "위젯에 따라 제공되는 옵션은 다를 수 있습니다."
      })
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

/***/ 84162:
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
  "value": "대시보드 위젯 편집하기",
  "id": "대시보드-위젯-편집하기",
  "level": 2
}, {
  "value": "위젯 크기 조절하기",
  "id": "위젯-크기-조절하기",
  "level": 3
}, {
  "value": "위젯 이동하기",
  "id": "위젯-이동하기",
  "level": 3
}, {
  "value": "위젯 삭제하기",
  "id": "위젯-삭제하기",
  "level": 3
}, {
  "value": "위젯 추가하기",
  "id": "위젯-추가하기",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, ProdImg} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "대시보드-위젯-편집하기",
        children: "대시보드 위젯 편집하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "대시보드에 배치한 위젯은 사용자가 원하는 크기로 조절할 수 있고, 원하는 위치에 배치할 수 있습니다. 불필요하다고 생각되는 위젯은 삭제하고 다시 추가할 수도 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "위젯-크기-조절하기",
        children: "위젯 크기 조절하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "java,php,python,nodejs,dotent,golang",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "apm-dashboard-widget-resize.png",
          desc: "위젯 크기 조절하기"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "postgresql,mysql,redis,mongodb,oracle-pro,oracle",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "위젯 크기 조절하기",
            src: (__webpack_require__(26779)/* ["default"] */ .A) + "",
            width: "1200",
            height: "525"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["위젯의 오른쪽 아래에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "크기 조절 아이콘",
          src: (__webpack_require__(49365)/* ["default"] */ .A) + "",
          width: "50",
          height: "50"
        }), " 요소를 마우스로 클릭한 상태에서 원하는 크기로 드래그하세요. 균일한 가로, 세로 비율의 격자가 표시되고, 격자 단위로 위젯의 크기를 조절할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "위젯-이동하기",
        children: "위젯 이동하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "java,php,python,nodejs,dotent,golang",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "apm-dashboard-widget-move.png",
          desc: "위젯 이동하기"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "postgresql,mysql,redis,mongodb,oracle-pro,oracle",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "위젯 이동하기",
            src: (__webpack_require__(27004)/* ["default"] */ .A) + "",
            width: "1200",
            height: "524"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["위젯의 윗 부분으로 마우스 커서를 이동하면 커서 모양이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "이동 아이콘",
          src: (__webpack_require__(80567)/* ["default"] */ .A) + "",
          width: "88",
          height: "88"
        }), " 모양으로 변경됩니다. 이때 마우스 왼쪽 버튼을 클릭한 상태로 원하는 위치로 드래그하여 위젯을 이동할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "위젯-삭제하기",
        children: "위젯 삭제하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "java,php,python,nodejs,dotent,golang",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "apm-dashboard-widget-remove.png",
          desc: "위젯 삭제하기"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "postgresql,mysql,redis,mongodb,oracle-pro,oracle",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "db-dashboard-widget-remove.png",
          desc: "위젯 삭제하기"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["삭제하길 원하는 위젯에서 마우스 오른쪽 버튼을 클릭하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "delete",
          className: "uitext"
        }), " 버튼을 선택하면 해당 위젯이 대시보드에서 삭제됩니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "위젯-추가하기",
        children: "위젯 추가하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "java,php,python,nodejs,dotent,golang",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "apm-dashboard-widget-add.png",
          desc: "위젯 추가하기"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "postgresql,mysql,redis,mongodb,oracle-pro,oracle",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
          img: "db-dashboard-widget-add.png",
          desc: "위젯 추가하기",
          multi: "true"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "대시보드에서 빈 공간으로 마우스 커서를 이동한 다음 마우스 오른쪽 버튼을 클릭하세요. 팝업 메뉴에서 추가하려는 위젯을 선택하세요. 원하는 위치로 위젯을 배치하고 크기를 조절하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["대시보드에 배치할 수 있는 위젯에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "#about-widget",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "현재 추가할 수 있는 위젯은 고정적이지만 향후 업데이트를 통해 위젯 지원을 늘려갈 계획입니다."
            }), "\n"]
          }), "\n"]
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

/***/ 37430:
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
  "value": "분류별 에이전트 모니터링",
  "id": "select-agent-category",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h3",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "select-agent-category",
      children: "분류별 에이전트 모니터링"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "db-dashboard-select-agent-by-category.png",
      desc: "분류별 에이전트 선택하기"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "에이전트 설정을 통해 분류한 그룹 단위로 에이전트를 선택해 모니터링할 수 있습니다."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "ITM06005",
            className: "uitext"
          }), ": 개별 에이전트를 선택하거나 모두 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "ITM07760",
            className: "uitext"
          }), ": 클러스터로 구성된 데이터베이스의 경우 클러스터별 단위로 에이전트를 에이전트를 모니터링할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "ITM07760",
          className: "uitext"
        }), " 항목을 이용하려면 DBX 에이전트(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), ")의 다음 옵션을 설정해야 합니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "agent-dbx-settings#cluster-set",
          children: "다음 문서"
        }), "를 참조하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title=\"whatap.conf\"",
          children: "cluster_name={cluster_name}\n"
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

/***/ 751:
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
  "value": "조회 목록 다운로드하기",
  "id": "downloadcsv",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, InDoc} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h3",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "downloadcsv",
      children: "조회 목록 다운로드하기"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["현재 조회 중 인 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Session Table"
        })
      }), " 목록을 CSV 파일 형식으로 다운로드할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Session Table"
        })
      }), " 섹션의 오른쪽 위에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "다운로드 아이콘",
        src: (__webpack_require__(22099)/* ["default"] */ .A) + "",
        width: "24",
        height: "25"
      }), " 버튼을 선택하세요."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "다운로드한 파일의 이름 형식은 다음과 같습니다."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "postgresql,mysql,mongodb",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "active_sessions",
              className: "uitext"
            }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", {
              children: "activeSession_HH_MM_SS.csv"
            })]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "lock_tree",
              className: "uitext"
            }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", {
              children: "lockTree_HH_MM_SS.csv"
            })]
          }), "\n"]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "redis",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "active_sessions",
          className: "uitext"
        }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", {
          children: "activeSession_HH_MM_SS.csv"
        })]
      })
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

/***/ 22189:
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
  "value": "새창으로 보기",
  "id": "새창으로-보기",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h3: "h3",
    img: "img",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h3",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "새창으로-보기",
      children: "새창으로 보기"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Session Table"
        })
      }), " 목록을 새창으로 열어 더 넓은 화면으로 펼쳐볼 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Session Table"
        })
      }), " 섹션의 오른쪽 위에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "새창 아이콘",
        src: (__webpack_require__(51658)/* ["default"] */ .A) + "",
        width: "24",
        height: "24"
      }), " 버튼을 선택하세요."]
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



/***/ }),

/***/ 42962:
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





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, TabItem, Tabs} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
    groupId: "db-columns",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
      value: "activesession",
      label: "Active session",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["다음은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "active_sessions",
          className: "uitext"
        }), " 섹션의 테이블에 표시되는 컬럼 정보입니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "currentOp"
        }), " 명령으로 수집된 데이터입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "항목"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "opid"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "operation의 고유 식별자(identifier)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "type"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["값이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "op"
              }), "인 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "op"
              }), " 필드에서 작업 유형 확인 가능"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "host"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "서버 이름"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "desc"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "connectionId"
              }), "를 포함한 클라이언트 설명"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "active"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["작업이 시작되면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "true"
              }), ", idle이면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "false"
              })]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "currentOpTime"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "operation의 시작 시간"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "op"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["operation 유형(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "none"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "update"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "insert"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "query"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "command"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "getmore"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "remove"
              }), " 등)"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "ns"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["네임스페이스 이름으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Database"
              }), ".", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Collection"
              }), " 으로 표시"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "numYields"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "작업이 수행된 수"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "waitingForLock"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["락(lock)을 대기하고 있으면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "true"
              }), ", 락(lock)을 획득하였으면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "false"
              })]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "waitingForFlowControl"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "flowcontrol"
              }), "을 대기하고 있으면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "true"
              })]
            })]
          })]
        })]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
      value: "locktree",
      label: "Lock tree",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "항목"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "holder type"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "holder"
              }), " 세션의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "type"
              }), " (transaction id, tuple 등)"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "lock mode"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "holder_mode"
              }), " (exclusive lock, shared lock 등)"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "waiter type"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "waiter"
              }), " 세션의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "type"
              }), " (transaction id, tuple 등)"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "lock request"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "waiter_mode"
              }), " (exclusive lock, shared lock 등)"]
            })]
          })]
        })]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
      value: "process-info",
      label: "Process information",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음 항목은 XOS 에이전트를 설치한 경우 수집되는 지표입니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "항목"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cputime"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "CPU 사용 시간"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpuusage"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "CPU 사용률"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "elapse"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "CPU 사용 경과 시간"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "vsize"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "가상 메모리 사이즈(Kb)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "rss"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Resident Set Size(RSS), 프로세스와 관련한 물리적 페이지 수"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "state"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "프로세스 상태"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "ioread"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "블록을 읽는 데 소요된 실제 시간(milliseconds)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "iowrite"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "블록을 쓰는 데 소요된 실제 시간(milliseconds)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pss"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "프로세스 고유 메모리 사용량 + 하나의 프로세스가 차지하는 공유 메모리 비율"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "uid"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "user id"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cmd"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "수행 중인 명령어"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "longcmd"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "cmd의 전체 경로"
            })]
          })]
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

/***/ 6020:
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





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "tip",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_dashboard",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_instanceList",
        className: "uitext"
      }), " 메뉴에서 비교하려는 에이전트를 선택한 다음 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "multi_view",
        className: "uitext"
      }), " 버튼을 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_multiInstance",
        className: "uitext"
      }), " 메뉴로 진입할 수 있습니다."]
    })
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

/***/ 93782:
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





const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ProdImg} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
      img: "db-bottom-table-filter.png",
      desc: "Filter"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["테이블의 오른쪽 위에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "필터 아이콘",
            src: (__webpack_require__(47013)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 버튼을 선택하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "테이블의 컬럼 헤더 항목과 조건을 선택하세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "enter_condition",
            className: "uitext"
          }), " 텍스트 상자에 원하는 값을 입력하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "save",
            className: "uitext"
          }), " 버튼을 선택하세요."]
        }), "\n"]
      }), "\n"]
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

/***/ 19193:
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
  "value": "컬럼 추가하기",
  "id": "컬럼-추가하기",
  "level": 4
}, {
  "value": "컬럼 삭제하기",
  "id": "컬럼-삭제하기",
  "level": 4
}, {
  "value": "컬럼 순서 변경하기",
  "id": "컬럼-순서-변경하기",
  "level": 4
}, {
  "value": "설정 사항 초기화하기",
  "id": "설정-사항-초기화하기",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h4: "h4",
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
      children: ["테이블 헤더 컬럼을 감추거나 원하는 항목을 추가할 수 있습니다. 컬럼 순서를 변경할 수도 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "컬럼 아이콘",
        src: (__webpack_require__(36693)/* ["default"] */ .A) + "",
        width: "24",
        height: "24"
      }), " 버튼을 선택하세요."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "db-v2-column-setting.png",
      desc: "컬럼 설정"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["설정을 완료한 다음에는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06053",
              className: "uitext"
            }), " 버튼을 선택해야 설정 사항이 테이블에 반영됩니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "숫자 3",
              src: (__webpack_require__(60293)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 검색란에 텍스트를 입력해 원하는 컬럼 항목을 검색할 수 있습니다. 입력한 텍스트와 매칭되는 컬럼 항목만 표시됩니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "컬럼-추가하기",
        children: "컬럼 추가하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "숫자 1",
          src: (__webpack_require__(31511)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 목록에서 테이블 헤더 컬럼으로 추가할 항목을 선택하세요. 모든 항목을 추가하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN06048",
          className: "uitext"
        }), "을 선택하세요."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "컬럼-삭제하기",
        children: "컬럼 삭제하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "숫자 1",
          src: (__webpack_require__(31511)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 목록에서 삭제할 컬럼 항목의 체크 박스를 선택 해제하세요. 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "숫자 2",
          src: (__webpack_require__(47228)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 목록에서 삭제할 항목의 오른쪽에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "삭제 아이콘",
          src: (__webpack_require__(11191)/* ["default"] */ .A) + "",
          width: "20",
          height: "20"
        }), " 버튼을 선택하세요."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "컬럼-순서-변경하기",
        children: "컬럼 순서 변경하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "숫자 2",
          src: (__webpack_require__(47228)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 목록에 순서를 변경할 항목을 드래그해서 원하는 위치로 이동할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "설정-사항-초기화하기",
        children: "설정 사항 초기화하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["변경 사항은 모두 취소하고 초기화하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "초기화 아이콘",
          src: (__webpack_require__(94816)/* ["default"] */ .A) + "",
          width: "25",
          height: "24"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "initialized",
          className: "uitext"
        }), " 버튼을 선택하세요."]
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

/***/ 23701:
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
  "value": "Session Table 위젯",
  "id": "session-table-위젯",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {InDoc} = _components;
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "session-table-위젯",
      children: "Session Table 위젯"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "postgresql,mysql",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["화면 하단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Session Table"
          })
        }), " 위젯에서는 실시간 수행 중인 액티브 세션 및 락 트리 정보를 조회할 수 있습니다."]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "redis,mongodb",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["화면 하단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Session Table"
          })
        }), " 위젯에서는 실시간 수행 중인 액티브 세션을 조회할 수 있습니다."]
      })
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

/***/ 6962:
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





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["테이블 목록에 글자 색상은 검정색 → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        class: "slow",
        children: "주황색"
      }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        class: "vslow",
        children: "빨간색"
      }), " 순으로 세션의 수행 속도가 느린 것을 의미합니다."]
    })
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



/***/ }),

/***/ 75629:
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





const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, Link} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Link) _missingMdxReference("Link", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_dashboard",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_multiInstance",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link, {
        to: "instance-monitoring",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_dbMonitoring",
          className: "uitext"
        })
      }), " 메뉴에서는 하나의 에이전트(인스턴스)만 모니터링한다면, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_multiInstance",
        className: "uitext"
      }), "은 여러 에이전트(인스턴스)를 동시에 감시하고 관리할 수 있는 기능을 제공합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "각 인스턴스에서 발생하는 주요 성능 지표들을 한 눈에 비교하고 분석할 수 있습니다. 실행 중인 각 에이전트의 수, 모든 액티브 세션의 총합, 트랜잭션 수와 같은 데이터를 집계하여 효과적으로 모니터링할 수 있습니다. 사용자는 그래프 차트를 통해 시간에 따른 지표 값의 변화와 각 인스턴스별 높은 성능 지표를 쉽게 확인할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "또한 가장 오랫동안 지속되는 액티브 세션에 대한 정보를 확인할 수 있어 사용자는 시스템의 성능 병목 현상을 진단하고 해결할 수 있는 근거 자료로 활용할 수 있습니다."
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

/***/ 38332:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(28453);
/* harmony import */ var _common_items_db_v2_mulit_instance_monitoring_desc_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75629);
/* harmony import */ var _common_items_db_multi_instance_monitoring_desc_notes_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6020);
/* harmony import */ var _common_items_apm_dashboard_set_past_time_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67108);
/* harmony import */ var _common_items_apm_dashboard_check_agent_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83961);
/* harmony import */ var _common_items_db_dashboard_select_agent_category_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37430);
/* harmony import */ var _common_items_apm_dashborad_edit_widget_mdx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84162);
/* harmony import */ var _common_items_apm_dashboard_widget_options_mdx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71668);
/* harmony import */ var _common_items_apm_dashboard_preset_mdx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29324);
/* harmony import */ var _common_items_db_v2_mim_activesession_desc_mdx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23701);
/* harmony import */ var _common_items_db_v2_mim_activesession_note_mdx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6962);
/* harmony import */ var _common_items_db_table_data_filtering_mdx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93782);
/* harmony import */ var _common_items_db_v2_data_edit_column_mdx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19193);
/* harmony import */ var _common_items_db_mongodb_activesessions_columns_mdx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42962);
/* harmony import */ var _common_items_db_dashboard_session_table_download_mdx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(751);
/* harmony import */ var _common_items_db_dashboard_session_table_new_mdx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22189);


const frontMatter = {
	id: 'multi-instance-monitoring',
	title: '멀티 인스턴스 모니터링',
	description: '다수의 데이터베이스 인스턴스 핵심 지표를 통합해 확인할 수 있는 기능을 제공합니다.',
	tags: [
		'Redis',
		'인스턴스',
		'대시보드',
		'데이터베이스',
		'멀티 인스턴스 모니터링'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "mongodb/multi-instance-monitoring",
  "title": "멀티 인스턴스 모니터링",
  "description": "다수의 데이터베이스 인스턴스 핵심 지표를 통합해 확인할 수 있는 기능을 제공합니다.",
  "source": "@site/docs/mongodb/multi-instance-monitoring.mdx",
  "sourceDirName": "mongodb",
  "slug": "/mongodb/multi-instance-monitoring",
  "permalink": "/mongodb/multi-instance-monitoring",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/mongodb/multi-instance-monitoring.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Redis",
      "permalink": "/tags/redis"
    },
    {
      "inline": true,
      "label": "인스턴스",
      "permalink": "/tags/인스턴스"
    },
    {
      "inline": true,
      "label": "대시보드",
      "permalink": "/tags/대시보드"
    },
    {
      "inline": true,
      "label": "데이터베이스",
      "permalink": "/tags/데이터베이스"
    },
    {
      "inline": true,
      "label": "멀티 인스턴스 모니터링",
      "permalink": "/tags/멀티-인스턴스-모니터링"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "multi-instance-monitoring",
    "title": "멀티 인스턴스 모니터링",
    "description": "다수의 데이터베이스 인스턴스 핵심 지표를 통합해 확인할 수 있는 기능을 제공합니다.",
    "tags": [
      "Redis",
      "인스턴스",
      "대시보드",
      "데이터베이스",
      "멀티 인스턴스 모니터링"
    ]
  },
  "sidebar": "mongodbSidebar",
  "previous": {
    "title": "인스턴스 모니터링",
    "permalink": "/mongodb/instance-monitoring"
  },
  "next": {
    "title": "Flex 보드",
    "permalink": "/mongodb/flex-board"
  }
};
const assets = {

};

/*개요*/
/*Notes*/
/*과거 데이터 조회하기*/
/*에이전트 확인하기*/
/*클러스터별 에이전트*/
/*위젯 편집하기*/
/*위젯 옵션 이용하기*/
/*프리셋*/
/*Session Table*/
/*조회 목록 다운로드하기*/
/*새창으로 보기*/

















const toc = [..._common_items_db_v2_mulit_instance_monitoring_desc_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, ..._common_items_db_multi_instance_monitoring_desc_notes_mdx__WEBPACK_IMPORTED_MODULE_2__/* .toc */ .RM, ..._common_items_apm_dashboard_set_past_time_mdx__WEBPACK_IMPORTED_MODULE_3__/* .toc */ .RM, ..._common_items_apm_dashboard_check_agent_mdx__WEBPACK_IMPORTED_MODULE_4__/* .toc */ .RM, ..._common_items_db_dashboard_select_agent_category_mdx__WEBPACK_IMPORTED_MODULE_5__/* .toc */ .RM, ..._common_items_apm_dashborad_edit_widget_mdx__WEBPACK_IMPORTED_MODULE_6__/* .toc */ .RM, ..._common_items_apm_dashboard_widget_options_mdx__WEBPACK_IMPORTED_MODULE_7__/* .toc */ .RM, ..._common_items_apm_dashboard_preset_mdx__WEBPACK_IMPORTED_MODULE_8__/* .toc */ .RM, {
  "value": "주요 위젯 알아보기",
  "id": "about-widget",
  "level": 2
}, ..._common_items_db_v2_mim_activesession_desc_mdx__WEBPACK_IMPORTED_MODULE_9__/* .toc */ .RM, ..._common_items_db_v2_mim_activesession_note_mdx__WEBPACK_IMPORTED_MODULE_10__/* .toc */ .RM, {
  "value": "테이블 데이터 필터링하기",
  "id": "테이블-데이터-필터링하기",
  "level": 3
}, ..._common_items_db_table_data_filtering_mdx__WEBPACK_IMPORTED_MODULE_11__/* .toc */ .RM, {
  "value": "테이블 컬럼 설정하기",
  "id": "change-column",
  "level": 3
}, ..._common_items_db_v2_data_edit_column_mdx__WEBPACK_IMPORTED_MODULE_12__/* .toc */ .RM, {
  "value": "컬럼 정보 안내",
  "id": "column-info",
  "level": 3
}, ..._common_items_db_mongodb_activesessions_columns_mdx__WEBPACK_IMPORTED_MODULE_13__/* .toc */ .RM, ..._common_items_db_dashboard_session_table_download_mdx__WEBPACK_IMPORTED_MODULE_14__/* .toc */ .RM, ..._common_items_db_dashboard_session_table_new_mdx__WEBPACK_IMPORTED_MODULE_15__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ProdImg} = _components;
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ["\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_db_v2_mulit_instance_monitoring_desc_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
      img: "db-multi-instance.png",
      desc: "멀티 인스턴스 모니터링"
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_db_multi_instance_monitoring_desc_notes_mdx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {}), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_apm_dashboard_set_past_time_mdx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay, {}), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_apm_dashboard_check_agent_mdx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {}), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_db_dashboard_select_agent_category_mdx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {}), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_apm_dashborad_edit_widget_mdx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {}), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_apm_dashboard_widget_options_mdx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {}), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_apm_dashboard_preset_mdx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "about-widget",
        children: "주요 위젯 알아보기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "대시보드에 배치할 수 있는 위젯의 종류는 다음과 같습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "DB Status"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "프로젝트에 포함된 에이전트(인스턴스)의 상태를 확인할 수 있습니다. 개별 에이전트를 육각형 모양으로 표시하며, 마우스를 오버하면 현재 상태와 IP 주소를 확인할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "DB Status",
              src: (__webpack_require__(31525)/* ["default"] */ .A) + "",
              width: "400",
              height: "403"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "에이전트의 상태는 다음과 같이 구분할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "normal",
                  children: "정상"
                }), ": 정상 상태의 에이전트 수입니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "mstop",
                  children: "비활성화된 에이전트"
                }), ": 연결이 해제된 에이전트의 수입니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "[XOS] CPU"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "에이전트별 CPU 사용률을 실시간으로 확인할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "[XOS] Memory"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "에이전트별 메모리 사용률을 실시간으로 확인할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "XOS Disk Usage"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["에이전트별 디스크 사용률과 사용 가능 크기, 전체 크기 정보를 표시합니다. 위젯의 오른쪽 위에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "아이콘",
              src: (__webpack_require__(47542)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " 버튼을 선택하면 더 넓은 화면으로 펼쳐볼 수 있습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
            type: "tip",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["데이터가 표시되지 않는다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "xos.conf"
              }), " 파일에 다음 설정을 추가하세요."]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title='xos.conf'",
                children: "# disk usage 0 이면 off, 단위: 초\ndisk_usage_interval=60\n"
              })
            })]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Read requests"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "초당 읽기 요청 수를 측정한 위젯입니다. 읽기 요청은 데이터베이스에서 데이터를 조회하거나 검색하는 쿼리, 집계 작업, 인덱스 스캔 등과 관련한 작업입니다. 데이터베이스의 사용 패턴의 변화를 감지하는데 유용합니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["산출 방식: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "query$opcounters"
              }), " + ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "getmore$opcounters"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Write requests"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "초당 쓰기 요청 수를 측정한 위젯입니다. 쓰기 요청은 데이터베이스에 새로운 데이터를 추가하거나 업데이트, 삭제와 관련한 작업입니다. 데이터베이스의 사용 패턴의 변화를 감지하는데 유용합니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["산출 방식: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "insert$opcounters"
              }), " + ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "update$opcounters"
              }), " + ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "delete$opcounters"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Read Latency"
              })
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "latency$reads$opLatencies"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "읽기 작업의 지연 시간(microsecond)을 측정한 위젯으로, 클라이언트가 읽기 작업을 요청하고 데이터베이스에서 해당 작업을 수행하는 데 걸린 시간입니다. 읽기 작업의 지연 시간이 긴 경우 인덱스를 최적화하거나 쿼리를 개선해 성능을 향상시키는 방법을 검토하세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Write Latency"
              })
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "latency$writes$opLatencies"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "쓰기 작업의 지연 시간(microsecond)을 측정한 위젯으로, 클라이언트가 쓰기 작업을 요청하고 데이터베이스에서 해당 작업을 수행하는 데 걸린 시간입니다. 쓰기 작업의 지연 시간이 긴 경우 인덱스를 최적화하거나 쓰기 작업을 배치 처리해 성능을 향상시키는 방법을 검토하세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Page Faults"
              })
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "page_faults$extra_info"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "페이지 폴트(page faults) 현상이 발생한 횟수를 측정한 위젯입니다. 페이지 폴트는 메모리 관리에서 발생하는 현상으로, 프로세스가 요청한 메모리 페이지가 물리적인 메모리에 없어서 디스크로부터 해당 페이지를 읽어와야 할 때 발생합니다. 이때 디스크 I/O가 발생해 작업이 지연될 수 있습니다. 일반적으로 시스템의 메모리 부족 상태를 의미합니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "데이터베이스의 읽기 및 쓰기 작업이 디스크 I/O에 의존하는지를 확인하고 메모리 부족 상태가 성능 문제의 원인이 되는지 파악할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["Page faults에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://www.mongodb.com/docs/v4.0/administration/analyzing-mongodb-performance/#page-faults",
                children: "다음 링크"
              }), "를 참조하세요."]
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Active Connections"
              })
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "active$connections"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "현재 작업 중인 클라이언트의 연결 수를 측정한 위젯입니다. 데이터베이스 서버에서 동시에 처리할 수 있는 클라이언트의 연결 수를 모니터링할 수 있습니다. 높은 연결 수는 서버 용량을 증설할 필요가 있음을 의미합니다. 반대의 경우 문제가 발생했을 가능성이 있으므로 시스템 상태를 신속히 파악해 보는 것이 좋습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Read Clients"
              })
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "readers$activeClients$globalLock"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "MongoDB의 전역 잠금(global lock)에서 현재 읽기 작업을 수행 중인 클라이언트의 수를 측정한 위젯입니다. 데이터베이스 서버가 읽기 작업을 위해 얼마나 많은 수의 클라이언트를 처리하는지 파악할 수 있습니다. 데이터베이스의 성능을 모니터링하고 응답 시간을 추적하는데 유용한 지표입니다. 과도한 읽기 작업이 발생할 경우 성능 저하의 원인이 될 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Write Clients"
              })
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "writers$activeClients$globalLock"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "현재 MongoDB의 전역 잠금(global lock)에서 쓰기 작업을 수행 중인 클라이언트의 수를 측정한 위젯입니다. 데이터베이스 서버가 쓰기 작업을 위해 얼마나 많은 수의 클라이언트를 처리하는지 파악할 수 있습니다. 데이터베이스의 성능을 모니터링하고 응답 시간을 추적하는데 유용한 지표입니다. 과도한 쓰기 작업이 발생할 경우 성능 저하의 원인이 될 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Queued Read Requests"
              })
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "readers$currentQueue$globalLock"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "현재 시스템에서 대기 중인 읽기 작업을 처리하기 위해 전역 잠금(global lock)을 대기 중인 클라이언트의 수를 측정한 위젯입니다. 데이터베이스의 성능 및 확장성을 평가할 수 있는 정보를 제공합니다. 대기 중인 읽기 요청 작업이 많을 수록 클라이언트의 요청에 대한 응답 시간이 늘어날 수 있으며, 처리량이 한계에 도달할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "대기 중인 읽기 작업이 급격하게 증가할 경우 서버의 리소스 증설을 검토하거나, 대기 중인 읽기 작업의 원인을 분석하고 쿼리 최적화 및 인덱스 튜닝 등의 조치를 통해 병목 현상을 해결할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Queued Write Requests"
              })
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "writers$currentQueue$globalLock"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "현재 시스템에서 대기 중인 쓰기 작업을 처리하기 위해 전역 잠금(global lock)을 대기 중인 클라이언트의 수를 측정한 위젯입니다. 데이터베이스의 성능을 평가하고 최적화하기 위한 필수 지표입니다. 대기 중인 쓰기 작업이 늘어나면 시스템 성능이 저하되거나 응답 시간이 증가할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "리소스 증설을 검토하거나 어떤 작업이 병목 현상을 유발하는지 파악해볼 필요가 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Resident Memory"
              })
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "resident$mem"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "현재 시스템에서 프로세스가 사용하는 메모리 사이즈(MB)입니다. 얼마나 많은 메모리를 사용하는지 파악할 수 있습니다. 메모리 사용량 추적을 통해 메모리 사용량을 최적화하여 성능을 향상시키고, 메모리 리소스를 효율적으로 활용하는데 중요한 지표가 됩니다. 또한 더 많은 메모리가 필요한지, 쌰드를 추가해야 하는지를 결정하는데 도움이 됩니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Virtual Memory"
              })
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "virtual$mem"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "현재 시스템에서 프로세스가 사용하는 가상 메모리 사이즈(MB)입니다. 현재 실행 중인 환경에서 얼마나 많은 메모리 리소스를 요구하는지를 파악할 수 있습니다. 가상 메모리의 사이즈를 파악하면 더 많은 물리 메모리가 필요할지, 가상 메모리 사용량을 줄이기 위한 조치를 결정하는데 도움이 됩니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Network Out"
              })
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "bytesOut$network"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "클라이언트나 기타 인스턴스의 연결을 통해 서버가 보낸 총 바이트 수입니다. 데이터베이스 서버가 외부로부터 요청을 받고 응답을 반환할 때 전송한 데이터의 총량을 의미합니다. 데이터베이스 서버에서 발생하는 네트워크 트래픽을 파악할 수 있으며, 이를 통해 네크워크 대역폭이나 서버 리소스 사용에 대한 최적화를 진행할 수 있습니다. 또한 높은 네트워크 트래픽은 응답 시간의 증가와 같은 성능 문제와 연관되어 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Network In"
              })
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "bytesIn$network"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "클라이언트나 기타 인스턴스의 연결을 통해 서버가 수신한 총 바이트 수입니다. 데이터베이스 서버가 외부로부터 수신한 요청 및 데이터의 총량을 의미하며, 클라이언트가 데이터베이스 서버로부터 요청을 보내고 응답을 받을 때 발생하는 데이터 전송량을 포함합니다. 특정 애플리케이션 또는 작업에서 데이터베이스와 어떻게 통신을 사용하는지 파악할 수 있습니다. 또한 네트워크 트래픽의 추이를 파악하여 시스템의 용량을 게획하고 확정성을 평가할 수 있습니다."
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "전역 잠금(globl lock)은 MongoDB에서 데이터의 일관성을 유지하기 위해 사용되는 메커니즘입니다. 읽기와 쓰기 작업 모두에 적용되며, 작업을 수행하려는 클라이언트는 전역 잠금을 획득해야 합니다."
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_db_v2_mim_activesession_desc_mdx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_db_v2_mim_activesession_note_mdx__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "테이블-데이터-필터링하기",
        children: "테이블 데이터 필터링하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_db_table_data_filtering_mdx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "change-column",
        children: "테이블 컬럼 설정하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_db_v2_data_edit_column_mdx__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "column-info",
        children: "컬럼 정보 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_db_mongodb_activesessions_columns_mdx__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_db_dashboard_session_table_download_mdx__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_db_dashboard_session_table_new_mdx__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay, {})]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_16__/* .useMDXComponents */ .R)(),
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

/***/ 37651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 12456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 31525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/db-dashboard-status-widget-b4d654ec0eaa58eb4ea3645d317ff8ef.png");

/***/ }),

/***/ 27004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/db-dashboard-widget-move-8a91a5454abbd7e046512c151577e9a7.png");

/***/ }),

/***/ 26779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/db-dashboard-widget-resize-ad7ea93b106c9dab47afbb5892e0ee8d.png");

/***/ }),

/***/ 89839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxMnB4O2hlaWdodDogMTJweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZG93bjwvdGl0bGU+IC0tPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTE2NC4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1kb3duIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTEuMzAwMDAwLCA0NC4zMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgOC4wMDAwMDApIiBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS40MTQyMTM1NiwxMy40MzUwMjg4IEw0LDEyLjAyMDgxNTMgTDExLjA3MSw0Ljk0OTQ2NjA5IEw0LC0yLjEyMTMyMDM0IEw1LjQxNDIxMzU2LC0zLjUzNTUzMzkxIEwxMy44OTk0OTQ5LDQuOTQ5NzQ3NDcgTDUuNDE0MjEzNTYsMTMuNDM1MDI4OCBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljk0OTc0NywgNC45NDk3NDcpIHNjYWxlKDEsIC0xKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC04Ljk0OTc0NywgLTQuOTQ5NzQ3KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 21671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDlIM1YzSDVIOVY1SDVWOVpNMyAyMVYxNUg1VjE5SDlWMjFINUgzWk0xNSAxOVYyMUgyMVYxOVYxNUgxOVYxOUgxNVpNMTUgNVYzSDIxVjVWOUgxOVY1SDE1WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 68655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxNSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSA4LjMzMzMzVjEzLjMzMzNMMTIuNjQxNCAxNC45MjM5TDExLjY3MDMgMTMuNTg3MkwxMy4zMzMzIDEyLjUwNThWOC4zMzMzM0gxNVpNMTUgNi42NjY2N1YwSDguMzMzMzNWMS42NjY2N0gxMy4zMzMzVjYuNjY2NjdIMTVaTTYuNjY2NjcgMS42NjY2N1YwSDBWNi42NjY2N0gxLjY2NjY3VjEuNjY2NjdINi42NjY2N1pNMS42NjY2NyA4LjMzMzMzSDBWMTMuMzMzM0wyLjM1ODU2IDE0LjkyMzlMMy4zMjk3MSAxMy41ODcyTDEuNjY2NjcgMTIuNTA1OFY4LjMzMzMzWk00LjcyODc5IDE0LjQ5NzFMMy43NDEyMSAxNS44NTY0TDcuNSAxOC4zOTEyTDExLjI1ODggMTUuODU2NEwxMC4yNzEyIDE0LjQ5NzFMNy41IDE2LjI5OTJMNC43Mjg3OSAxNC40OTcxWk01LjczMjIzIDQuNTUzNzJMNC41NTM3MiA1LjczMjIzTDYuMzIxNDkgNy41TDQuNTUzNzIgOS4yNjc3N0w1LjczMjIzIDEwLjQ0NjNMNy41IDguNjc4NTFMOS4yNjc3NyAxMC40NDYzTDEwLjQ0NjMgOS4yNjc3N0w4LjY3ODUxIDcuNUwxMC40NDYzIDUuNzMyMjNMOS4yNjc3NyA0LjU1MzcyTDcuNSA2LjMyMTQ5TDUuNzMyMjMgNC41NTM3MloiIGZpbGw9IiMyOTZDRjIiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 57765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyQzE3LjUyMjggMiAyMiA2LjQ3NzE1IDIyIDEyQzIyIDE3LjUyMjggMTcuNTIyOCAyMiAxMiAyMkM2LjQ3NzE1IDIyIDIgMTcuNTIyOCAyIDEyQzIgNi40NzcxNSA2LjQ3NzE1IDIgMTIgMlpNMTIgNEM3LjU4MTcyIDQgNCA3LjU4MTcyIDQgMTJDNCAxNi40MTgzIDcuNTgxNzIgMjAgMTIgMjBDMTYuNDE4MyAyMCAyMCAxNi40MTgzIDIwIDEyQzIwIDcuNTgxNzIgMTYuNDE4MyA0IDEyIDRaTTExIDdWOUgxM1Y3SDExWk0xMSAxMVYxN0gxM1YxMUgxMVoiIGZpbGw9IiM3NTc1NzUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 80567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMzczMjUgNDRMMTUgMjkuNTIxNlYzNVYzNkgxNkgzNkgzN1YzNVYxOFYxN0gzNkgzMC4yMjY4TDQ0IDEuNTA1Mkw1Ny43NzMyIDE3SDUySDUxVjE4VjM1VjM2SDUySDcySDczVjM1VjI5LjUyMTZMODYuNjI2NyA0NEw3MyA1OC40Nzg0VjUzVjUySDcySDUySDUxVjUzVjcwVjcxSDUySDU3Ljc3MzJMNDQgODYuNDk0OEwzMC4yMjY4IDcxSDM2SDM3VjcwVjUzVjUySDM2SDE2SDE1VjUzVjU4LjQ3ODRMMS4zNzMyNSA0NFoiIGZpbGw9ImJsYWNrIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 51658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMiAyVjE3SDdWMkgyMlpNMjAgNEg5VjZIMjBWNFpNMjAgOFYxNUg5VjhIMjBaTTIgOVYyMkgxNUgxN1YyMFYxOEgxNVYyMEg0VjlINlY3SDRIMlY5WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 16379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMiA2LjA1MTE2TDE4IDJIMTZIOEgyVjIySDZIMThIMjJWNi4wNTExNlpNMTggMjBIMjBWNi44NzNMMTcuMTY0IDRIMTZWOEg4VjRINFYyMEg2VjEySDE4VjIwWk0xNiAyMFYxNEg4VjIwSDE2Wk0xMCA0SDE0VjZIMTBWNFoiIGZpbGw9IiM3NTc1NzUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 49365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01MCAzNy41VjBINDMuNzVWMzcuNUM0My43NSA0MC45NTE4IDQwLjk1MTggNDMuNzUgMzcuNSA0My43NUgwVjUwSDM3LjVDNDQuNDAzNiA1MCA1MCA0NC40MDM2IDUwIDM3LjVaIiBmaWxsPSIjQURBREFEIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 36693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtY29sdW1uPC90aXRsZT4gLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Mi4wMDAwMDAsIC0zMDMxLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iYXBwbGljYXRpb24taWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMjM0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jb2x1bW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4wMDAwMDAsIDY4NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgNC4wMDAwMDApIiBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwwIEwwLDE2IEwyMCwxNiBMMjAsMCBMMCwwIFogTTEyLDIgTDEyLDE0IEw4LDE0IEw4LDIgTDEyLDIgWiBNMiwyIEw2LDIgTDYsMTQgTDIsMTQgTDIsMiBaIE0xOCwxNCBMMTQsMTQgTDE0LDIgTDE4LDIgTDE4LDE0IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 53332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI1IiB2aWV3Qm94PSIwIDAgMjQgMjUiPgogICAgPHBhdGggZmlsbD0iIzc1NzU3NSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNTkgNkwxNy43NCA5LjIxNSAxNi4zOCAxMC43MzcgMTMuNSAxMy45ODIgOS41IDkuOTc2IDIgMTcuNDk4IDMuNSAxOSA5LjUgMTIuOTgxIDEzLjUgMTYuOTg3IDE3LjU1IDEyLjQzIDE4Ljk2IDEwLjgzNyAyMiA3LjQxMnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLjUxKSI+PC9wYXRoPgo8L3N2Zz4=");

/***/ }),

/***/ 31252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtYW5hbHlzaXM8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTMyLjAwMDAwMCwgLTE3MDQuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICAgIDxnIGlkPSJkYXRhLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDE1NzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtYW5hbHlzaXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg5Mi4wMDAwMDAsIDEyNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMi4wMDAwMDApIiBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjAsMCBMMjAsMjAgTDAsMjAgTDAsMCBMMjAsMCBaIE00Ljk3MTczODAyLDkuNDc4NjQwMDcgTDIsMTEuOTY5IEwyLDE4IEwxOCwxOCBMMTgsMTAuMjU2IEwxNS45NTcyOTA3LDEyLjAzNzQzMTEgQzE1Ljk3NTUzNDcsMTIuMTM0OTUyOCAxNS45ODgxMTY3LDEyLjIzNDQ2ODYgMTUuOTk0NjgyMywxMi4zMzU2MjQzIEwxNiwxMi41IEMxNiwxMy44ODA3MTE5IDE0Ljg4MDcxMTksMTUgMTMuNSwxNSBDMTIuMTE5Mjg4MSwxNSAxMSwxMy44ODA3MTE5IDExLDEyLjUgQzExLDEyLjI3Nzk4ODggMTEuMDI4OTM5MSwxMi4wNjI3MzY4IDExLjA4MzI1MDksMTEuODU3ODEwMyBMNy45NzA1OTcyMyw5LjUyMTkzNSBDNy41NTc5MTc1NSw5LjgyMjYwMjA1IDcuMDQ5Njc1NTMsMTAgNi41LDEwIEM1LjkyNDQzNzEzLDEwIDUuMzk0MzAyMzUsOS44MDU0OTkyNCA0Ljk3MTczODAyLDkuNDc4NjQwMDcgWiBNMTMuNSwxMS41IEMxMi45NDc3MTUzLDExLjUgMTIuNSwxMS45NDc3MTUzIDEyLjUsMTIuNSBDMTIuNSwxMy4wNTIyODQ3IDEyLjk0NzcxNTMsMTMuNSAxMy41LDEzLjUgQzE0LjA1MjI4NDcsMTMuNSAxNC41LDEzLjA1MjI4NDcgMTQuNSwxMi41IEMxNC41LDExLjk0NzcxNTMgMTQuMDUyMjg0NywxMS41IDEzLjUsMTEuNSBaIE0xOCwyIEwyLDIgTDIsMTAuMDEyIEw0LjExMTUyNTkxLDguMjQwNjIzMzIgQzQuMDU0NTYzNjksOC4wNTY3MTc3MSA0LjAxODI1NzEzLDcuODYzNzMxMzYgNC4wMDUzMTc2OCw3LjY2NDM3NTY5IEw0LDcuNSBDNCw2LjExOTI4ODEzIDUuMTE5Mjg4MTMsNSA2LjUsNSBDNy44ODA3MTE4Nyw1IDksNi4xMTkyODgxMyA5LDcuNSBDOSw3Ljc4NTUzNDk3IDguOTUyMTMxLDguMDU5ODg5NTQgOC44NjM5ODAyOSw4LjMxNTQ3NjQgTDExLjg4OTA1NDgsMTAuNTg4MTYwMSBDMTIuMzI0MTQ0MywxMC4yMjExNzA5IDEyLjg4NjI0MzYsMTAgMTMuNSwxMCBDMTQuMTY3ODA4NSwxMCAxNC43NzQ0NjA1LDEwLjI2MTg0MjIgMTUuMjIyODkwNCwxMC42ODg0NjExIEwxOCw4LjI2NiBMMTgsMiBaIE02LjUsNi41IEM1Ljk0NzcxNTI1LDYuNSA1LjUsNi45NDc3MTUyNSA1LjUsNy41IEM1LjUsOC4wNTIyODQ3NSA1Ljk0NzcxNTI1LDguNSA2LjUsOC41IEM3LjA1MjI4NDc1LDguNSA3LjUsOC4wNTIyODQ3NSA3LjUsNy41IEM3LjUsNi45NDc3MTUyNSA3LjA1MjI4NDc1LDYuNSA2LjUsNi41IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 22099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI1cHgiIHZpZXdCb3g9IjAgMCAyNCAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZG93bmxvYWQ8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODM2LjAwMDAwMCwgLTI3MTEuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICAgIDxnIGlkPSJhcHBsaWNhdGlvbi1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAyMzQ2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWRvd25sb2FkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTYuMDAwMDAwLCAzNjUuMDY3Mjg0KSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDIuMDAwMDAwKSIgaWQ9Ikljb24iPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIsNy45MzI3MTYxMiBMMTIsNC40MjcyOTU0OGUtMTQgTDYsNC40MjcyOTU0OGUtMTQgTDYsNy45MzI3MTYxMiBMMiw3LjkzMjcxNjEyIEw5LDE0LjkzMjcxNjEgTDE2LDcuOTMyNzE2MTIgTDEyLDcuOTMyNzE2MTIgWiBNMCwxNi45MzI3MTYxIEwwLDE4LjkzMjcxNjEgTDE4LDE4LjkzMjcxNjEgTDE4LDE2LjkzMjcxNjEgTDAsMTYuOTMyNzE2MSBMMCwxNi45MzI3MTYxIFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 47542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyNHB4O2hlaWdodDogMjRweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtY2FyZXQtcmlnaHQ8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY0LjAwMDAwMCwgLTI0NC4wMDAwMDApIiBmaWxsPSIjOTU5NTk1Ij4KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jYXJldC1yaWdodCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI0LjAwMDAwMCwgMTI1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNi4wMDAwMDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTI3MC4wMDAwMDApIHRyYW5zbGF0ZSgtNC4wMDAwMDAsIC02LjAwMDAwMCkgIiBkPSJNLTIgMiA0IDEwIDEwIDJ6Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ 47013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZmlsdGVyPC90aXRsZT4gLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Mi4wMDAwMDAsIC0yNTUxLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iYXBwbGljYXRpb24taWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMjM0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1maWx0ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4wMDAwMDAsIDIwNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMi4wMDAwMDApIiBpZD0iSWNvbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDAgTDAsMS45NTE3MTE0NCBMOS4wNTQ2NDk2LDExLjY2NjY2NjcgTDkuMDU0NjQ5NiwyMCBMMTAuOTg2NDg3OSwxOC41NTY0MDI0IEwxMC45ODY0ODc5LDExLjY2NjY2NjcgTDIwLDEuOTUxNzExNDQgTDIwLDAgTDAsMCBaIE0zLjQ0NzI3ODExLDMgTDE2LjYxNDY0NTQsMyBMMTAuMDE0NTA0MiwxMCBMMy40NDcyNzgxMSwzIFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 9831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcGF1c2U8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTc4Mi4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9InN1Z2dlc3RlZC1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCA3MzcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcGF1c2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCA1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMywwIEwzLDE0IEwwLDE0IEwwLDAgTDMsMCBaIE0xMCwwIEwxMCwxNCBMNywxNCBMNywwIEwxMCwwIFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 84233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtbGl2ZS10aW1lPC90aXRsZT4gLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2My4wMDAwMDAsIC0yMjQyLjAwMDAwMCkiIGZpbGw9IiMyOGE5MmMiPgogICAgICAgICAgICA8ZyBpZD0idGltZS1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDMuMDAwMDAwLCAyMTk3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWxpdmUtdGltZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIwLjAwMDAwMCwgNDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwwIEMxNS41MjI4NDc1LDAgMjAsNC40NzcxNTI1IDIwLDEwIEMyMCwxNS41MjI4NDc1IDE1LjUyMjg0NzUsMjAgMTAsMjAgQzQuNDc3MTUyNSwyMCAwLDE1LjUyMjg0NzUgMCwxMCBDMCw0LjQ3NzE1MjUgNC40NzcxNTI1LDAgMTAsMCBaIE0xMCwyIEM1LjU4MTcyMiwyIDIsNS41ODE3MjIgMiwxMCBDMiwxNC40MTgyNzggNS41ODE3MjIsMTggMTAsMTggQzE0LjQxODI3OCwxOCAxOCwxNC40MTgyNzggMTgsMTAgQzE4LDUuNTgxNzIyIDE0LjQxODI3OCwyIDEwLDIgWiBNOCw2IEwxNCwxMCBMOCwxNCBMOCw2IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 11191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcy1jbG9zZTwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MzQuMDAwMDAwLCAtMTAxMy4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9InN1Z2dlc3RlZC1pY29ucy1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDk2Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jbG9zZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkyLjAwMDAwMCwgNDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMyw0IEwxMi45OTksMTEgTDIwLDExIEwyMCwxMyBMMTIuOTk5LDEzIEwxMywyMCBMMTEsMjAgTDEwLjk5OSwxMyBMNCwxMyBMNCwxMSBMMTAuOTk5LDExIEwxMSw0IEwxMyw0IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMTIuMDAwMDAwKSByb3RhdGUoLTMxNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTIuMDAwMDAwLCAtMTIuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 67831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcy1jbG9zZTwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MzQuMDAwMDAwLCAtMTAxMy4wMDAwMDApIiBmaWxsPSIjZDUwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9InN1Z2dlc3RlZC1pY29ucy1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDk2Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jbG9zZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkyLjAwMDAwMCwgNDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMyw0IEwxMi45OTksMTEgTDIwLDExIEwyMCwxMyBMMTIuOTk5LDEzIEwxMywyMCBMMTEsMjAgTDEwLjk5OSwxMyBMNCwxMyBMNCwxMSBMMTAuOTk5LDExIEwxMSw0IEwxMyw0IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMTIuMDAwMDAwKSByb3RhdGUoLTMxNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTIuMDAwMDAwLCAtMTIuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 94816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNXB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNSAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtdW5kbzwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNTYuMDAwMDAwLCAtMTQ3NS4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImVkaXRvci1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxMzUwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLXVuZG8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMxNi41MDAwMDAsIDEyNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLDAgTDEwLDIgTDEwLDIgQzUuNTgxNzIyLDIgMiw1LjU4MTcyMiAyLDEwIEMyLDE0LjQxODI3OCA1LjU4MTcyMiwxOCAxMCwxOCBDMTQuNDE4Mjc4LDE4IDE4LDE0LjQxODI3OCAxOCwxMCBDMTgsOC42NjI5MjcwMSAxNy42NzE5ODMyLDcuNDAyNDY2NDMgMTcuMDkyMDMwNSw2LjI5NDY5OTA0IEwxNS4zNTE5MjM4LDcuMjk5MDM4MTEgTDE2LjQ1LDMuMjAwOTYxODkgTDIwLjU0ODA3NjIsNC4yOTkwMzgxMSBMMTguODI1ODYyMyw1LjI5NDMwMzE2IEMxOS41NzUxOSw2LjY5Njc4NzQ5IDIwLDguMjk4NzgzOSAyMCwxMCBDMjAsMTUuNTIyODQ3NSAxNS41MjI4NDc1LDIwIDEwLDIwIEM0LjQ3NzE1MjUsMjAgLTguNTI2NTEyODNlLTE0LDE1LjUyMjg0NzUgLTguNTI2NTEyODNlLTE0LDEwIEMtOC41MjY1MTI4M2UtMTQsNC40NzcxNTI1IDQuNDc3MTUyNSwwIDEwLDAgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMjc0MDM4LCAxMC4wMDAwMDApIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMC4yNzQwMzgsIC0xMC4wMDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ 31511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 47228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

/***/ }),

/***/ 60293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC");

/***/ }),

/***/ 2432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtdXA8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQ4LjAwMDAwMCwgLTE2NC4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy11cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTA3LjMwMDAwMCwgNDQuNzAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wMDAwMDAsIDcuMDAwMDAwKSIgaWQ9IkNvbWJpbmVkLVNoYXBlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuNDE0MjEzNTYsMTMuNDM1MDI4OCBMNCwxMi4wMjA4MTUzIEwxMS4wNzEsNC45NDk0NjYwOSBMNCwtMi4xMjEzMjAzNCBMNS40MTQyMTM1NiwtMy41MzU1MzM5MSBMMTMuODk5NDk0OSw0Ljk0OTc0NzQ3IEw1LjQxNDIxMzU2LDEzLjQzNTAyODggWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC45NDk3NDcsIDQuOTQ5NzQ3KSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC04Ljk0OTc0NywgLTQuOTQ5NzQ3KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

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