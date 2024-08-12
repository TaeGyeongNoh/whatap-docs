"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[39689],{

/***/ 8643:
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
  "value": "보고서와 통합 보고서의 차이",
  "id": "보고서와-통합-보고서의-차이",
  "level": 2
}, {
  "value": "보고서 생성 방법",
  "id": "보고서-생성-방법",
  "level": 2
}, {
  "value": "작업 목록 확인",
  "id": "작업-목록-확인",
  "level": 2
}, {
  "value": "조회 및 공유",
  "id": "조회-및-공유",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 모니터링 서비스 초기 화면에서 프로젝트를 선택하지 않고 사이드 메뉴의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), "를 선택하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), "는 여러 프로젝트에 대한 보고서를 간편하게 생성할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "보고서 종류와 원하는 프로젝트를 선택하여 보고서를 생성할 수 있고, 보고서 생성 목록에서 작업 진행 상태를 확인할 수 있습니다. 보고서 생성 중 특정 프로젝트에서 에러가 발생한 경우 에러 내용을 확인할 수 있습니다. 작업이 완료된 보고서를 바로 조회하거나, 다운로드 및 인쇄 기능을 통해 다른 사람에게 보고서를 공유할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "integration_report_01.png"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), "의 기능은 다음과 같습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "멀티 프로젝트 지원"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), " 메뉴에서 여러 프로젝트를 선택해 한 번에 보고서를 생성할 수 있어 편리합니다. 기존 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_report",
            className: "uitext"
          }), " 메뉴는 프로젝트마다 보고서를 생성해야 했습니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "업무 단위 보고서 생성"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "create_report",
            className: "uitext"
          }), " 메뉴에서 업무 단위로 프로젝트를 선택해 템플릿으로 저장할 수 있습니다. 보통 업무 단위로 프로젝트를 나누어 사용하는 마이크로 서비스 아키텍처(MSA, Micro Service Architecture) 환경에서 유용한 기능입니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "대용량 데이터 최적화"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), " 메뉴는 보고서 생성 시간이 획기적으로 줄어들었습니다. 그리고 일부 프로젝트 보고서 작성 과정에서 오류가 발생하더라도 보고서 결과를 조회할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "보고서 생성 중 동시 작업 가능"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), " 메뉴에서 보고서를 생성하는 동시에 다른 업무를 보는 것이 가능합니다. 기존 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_report",
            className: "uitext"
          }), " 메뉴는 생성 작업이 완료될 때까지 기다려야만 했습니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), " 메뉴에서 보고서 생성을 시작한 후 다른 페이지로 이동할 수 있습니다. 또한 보고서 결과 목록에서 진행 상태와 완료된 보고서를 조회할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "보고서 작업 공유"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "동일 프로젝트 권한을 가진 사용자라면 누구든 생성한 보고서를 조회할 수 있습니다. 관련 보고서가 이미 생성됐는지 확인할 수 있어 중복으로 작성하지 않을 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "보고서와-통합-보고서의-차이",
        children: "보고서와 통합 보고서의 차이"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), "는 하나의 프로젝트에 대한 보고서를 생성하는 메뉴입니다. 따라서 프로젝트를 선택 후 좌측의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_reportStat",
          className: "uitext"
        }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), " 메뉴를 통해 접근이 가능합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_integratedReport",
          className: "uitext"
        }), "는 여러 프로젝트에 대한 보고서를 생성하는 메뉴입니다. 프로젝트를 선택하지 않고 기본 메뉴에서 접근이 가능합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), "의 상세 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "report-intro",
          children: "다음 문서"
        }), "에서 확인할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "보고서-생성-방법",
        children: "보고서 생성 방법"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "보고서 종류 선택"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "integration_report_02.png"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "report_type",
              className: "uitext"
            }), "에서 원하는 보고서 유형을 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "create_report",
              className: "uitext"
            }), " 버튼이 활성화됩니다. 보고서 이름 앞의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "아이콘"
            }), "은 보고서의 양식이 지원하는 프로젝트 플랫폼을 의미합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "플랫폼 애플리케이션 icon",
                src: (__webpack_require__(91183)/* ["default"] */ .A) + "",
                width: "32",
                height: "32"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Application"
              }), " 프로젝트 플랫폼을 나타냅니다."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "플랫폼 쿠버네티스 icon",
                src: (__webpack_require__(81479)/* ["default"] */ .A) + "",
                width: "32",
                height: "32"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Kubernetes"
              }), " 프로젝트 플랫폼을 나타냅니다."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "플랫폼 서버 icon",
                src: (__webpack_require__(11678)/* ["default"] */ .A) + "",
                width: "30",
                height: "30"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Server"
              }), " 프로젝트 플랫폼을 나타냅니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "상세 설정"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "master_report.png"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["보고서 종류 선택 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "create_report",
              className: "uitext"
            }), " 버튼을 클릭하세요. 다음과 같이 상세 설정을 할 수 있습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "보고서 제목"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "같은 타입의 보고서가 여러 개인 경우 이름을 지정하면 보고서 결과를 구분하기 쉽습니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "시간"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "보고서에 사용될 데이터의 기간을 선택하세요. 기간은 보고서 타입(일, 주, 월)에 따라 달라집니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "프로젝트 선택"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "보고서를 작성할 프로젝트를 선택하세요. 그룹 및 개별 프로젝트 단위로 선택이 가능합니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "보고서 양식 저장과 불러오기"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "지금 입력된 보고서의 설정을 템플릿으로 저장하고 다음 생성 시 타입 목록에서 불러올 수 있습니다. 업무 단위로 프로젝트를 자주 사용하시는 분들에게 유용한 기능입니다."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "보고서 생성"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["설정을 완료했다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "create_report",
              className: "uitext"
            }), " 버튼을 눌러 보고서를 생성하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "작업-목록-확인",
        children: "작업 목록 확인"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "integration_report_03.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "generation_report_list",
          className: "uitext"
        }), "에서 이전에 만들었던 보고서와 현재 작업 중인 보고서를 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "all",
          className: "uitext"
        }), " 목록에서는 내가 생성한 보고서 외에도 나와 같은 권한을 가진 사람이 생성한 보고서를 함께 볼 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "my_report",
          className: "uitext"
        }), " 목록에서는 내가 생성한 보고서만 필터링하여 볼 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["에러 없이 생성된 보고서는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          class: "woer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "체크 icon",
            src: (__webpack_require__(48219)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 체크"]
        }), " 아이콘으로 표시되며, 에러가 포함된 경우는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          class: "wer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "경고 icon",
            src: (__webpack_require__(94301)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 경고"]
        }), " 아이콘이 함께 표시됩니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          class: "wer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "경고 icon",
            src: (__webpack_require__(94301)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 경고"]
        }), " 아이콘을 클릭하시면 어떤 프로젝트에서 에러가 발생했는지 확인할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "조회-및-공유",
        children: "조회 및 공유"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "integration_report_04.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "보고서는 3가지 방식으로 제공됩니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "화면 조회"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "작업 목록에서 생성한 보고서를 선택하면 화면에서 바로 조회하여 볼 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "다운로드"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "download",
              className: "uitext"
            }), " 버튼을 클릭하면 바로 보기의 보고서와 같은 파일이 html 형식으로 다운로드 됩니다. 모니터링 관리 권한이 없는 사람에게 보고서를 공유할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "인쇄 및 PDF 저장"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "print",
              className: "uitext"
            }), " 버튼을 누르면 컴퓨터에 연결된 프린터로 인쇄하거나 또는 PDF 형식으로 저장할 수 있습니다."]
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

/***/ 93295:
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
/* harmony import */ var _common_items_integrated_report_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8643);


const frontMatter = {
	id: 'integrated-report',
	title: '통합 보고서',
	description: '통합 보고서에 대해서 안내합니다.',
	tags: [
		'Tibero',
		'데이터베이스',
		'데이터베이스 모니터링',
		'통합 보고서'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "tibero/integrated-report",
  "title": "통합 보고서",
  "description": "통합 보고서에 대해서 안내합니다.",
  "source": "@site/docs/tibero/integrated-report.mdx",
  "sourceDirName": "tibero",
  "slug": "/tibero/integrated-report",
  "permalink": "/tibero/integrated-report",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/tibero/integrated-report.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Tibero",
      "permalink": "/tags/tibero"
    },
    {
      "inline": true,
      "label": "데이터베이스",
      "permalink": "/tags/데이터베이스"
    },
    {
      "inline": true,
      "label": "데이터베이스 모니터링",
      "permalink": "/tags/데이터베이스-모니터링"
    },
    {
      "inline": true,
      "label": "통합 보고서",
      "permalink": "/tags/통합-보고서"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "integrated-report",
    "title": "통합 보고서",
    "description": "통합 보고서에 대해서 안내합니다.",
    "tags": [
      "Tibero",
      "데이터베이스",
      "데이터베이스 모니터링",
      "통합 보고서"
    ]
  },
  "sidebar": "tiberoSidebar",
  "previous": {
    "title": "보고서",
    "permalink": "/tibero/report-intro"
  },
  "next": {
    "title": "알림 설정하기",
    "permalink": "/tibero/set-notice"
  }
};
const assets = {

};




const toc = [..._common_items_integrated_report_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_integrated_report_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {});
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

/***/ 48219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTguNDUyNyA2TDkuNTc0NzYgMTUuMTExTDUuNTQ3MzMgMTAuNzc3Nkw0IDEyLjMwNTFMOS41NzQ3NiAxOEwyMCA3LjUyNzU0TDE4LjQ1MjcgNlY2WiIgZmlsbD0iIzQ0ODVGRiIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 94301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMTI2IDMuNDE4NEMxMS41MTkgMi43OTkyNyAxMi40MjI3IDIuNzk5NzcgMTIuODE1IDMuNDE5MzJMMjIuMjg3MSAxOC4zNzYxQzIyLjcwODggMTkuMDQxOSAyMi4yMzA0IDE5LjkxMTEgMjEuNDQyMyAxOS45MTExSDIuNDc1MTZDMS42ODY1NiAxOS45MTExIDEuMjA4MjYgMTkuMDQwOSAxLjYzMDkxIDE4LjM3NTFMMTEuMTI2IDMuNDE4NFpNNC4yOTQ3MSAxNy45MTExTDE5LjYyNTYgMTcuOTExMUwxMS45Njk0IDUuODIxNzlMNC4yOTQ3MSAxNy45MTExWk0xMC45OTk5IDE0Ljk1NDVIMTIuOTk5OVYxNi45NTQ1SDEwLjk5OTlWMTQuOTU0NVpNMTIuOTk5OSA4Ljk1NDU0SDEwLjk5OTlWMTMuOTU0NUgxMi45OTk5VjguOTU0NTRaIiBmaWxsPSIjRkY5OTAwIi8+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ 91183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjkuMzMzMyA0LjY2NjY5QzI5LjMzMzMgMy41NjIxMiAyOC40Mzc5IDIuNjY2NjkgMjcuMzMzMyAyLjY2NjY5SDQuNjY2NjdDMy41NjIxIDIuNjY2NjkgMi42NjY2NyAzLjU2MjEyIDIuNjY2NjcgNC42NjY2OVYyNy4zMzM0QzIuNjY2NjcgMjguNDM3OSAzLjU2MjEgMjkuMzMzNCA0LjY2NjY3IDI5LjMzMzRIMjcuMzMzM0MyOC40Mzc5IDI5LjMzMzQgMjkuMzMzMyAyOC40Mzc5IDI5LjMzMzMgMjcuMzMzNFY0LjY2NjY5Wk0yMS4zMzMzIDEwLjM0MzJMMTkuNDQ3NyAxMi4yMjg4TDIzLjIxOSAxNkwxOS40NDc3IDE5Ljc3MTNMMjEuMzMzMyAyMS42NTY5TDI1LjEwNDYgMTcuODg1NkwyNi45OTAyIDE2TDI1LjEwNDYgMTQuMTE0NEwyMS4zMzMzIDEwLjM0MzJaTTEyLjU1MjMgMTIuMjI4OEwxMC42NjY3IDEwLjM0MzJMNi44OTU0NCAxNC4xMTQ0TDUuMDA5ODIgMTZMNi44OTU0NCAxNy44ODU2TDEwLjY2NjcgMjEuNjU2OUwxMi41NTIzIDE5Ljc3MTNMOC43ODEwNSAxNkwxMi41NTIzIDEyLjIyODhaTTE5LjUzMzEgMTAuMTkxNEwxNy4wMjcyIDkuMjc5MzhMMTIuNDY2OSAyMS44MDg2TDE0Ljk3MjggMjIuNzIwN0wxOS41MzMxIDEwLjE5MTRaIiBmaWxsPSIjMDBCMEUyIi8+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ 81479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNjY2NyAwSDE3LjMzMzNWNC4wNzMyNEMyMC43NDQ4IDQuNDUwMzYgMjMuNzI1MyA2LjI1NzU1IDI1LjY2MiA4Ljg4MjA2TDI5LjE4OTcgNi44NDUzTDMwLjUyMzEgOS4xNTQ3TDI2Ljk5NzMgMTEuMTkwM0MyNy42NDIyIDEyLjY2MjggMjggMTQuMjg5NiAyOCAxNkMyOCAxNy43MTA0IDI3LjY0MjIgMTkuMzM3MiAyNi45OTczIDIwLjgwOTdMMzAuNTIzMSAyMi44NDUzTDI5LjE4OTcgMjUuMTU0N0wyNS42NjIgMjMuMTE3OUMyMy43MjUzIDI1Ljc0MjQgMjAuNzQ0OCAyNy41NDk2IDE3LjMzMzMgMjcuOTI2OFYzMkgxNC42NjY3VjI3LjkyNjhDMTEuMjU1MiAyNy41NDk2IDguMjc0NzMgMjUuNzQyNCA2LjMzODAzIDIzLjExNzlMMi44MTAyNiAyNS4xNTQ3TDEuNDc2OTMgMjIuODQ1M0w1LjAwMjc0IDIwLjgwOTdDNC4zNTc4NCAxOS4zMzcyIDQgMTcuNzEwNCA0IDE2QzQgMTQuMjg5NiA0LjM1Nzg0IDEyLjY2MjggNS4wMDI3NCAxMS4xOTAzTDEuNDc2OTMgOS4xNTQ3TDIuODEwMjYgNi44NDUzTDYuMzM4MDMgOC44ODIwNkM4LjI3NDczIDYuMjU3NTUgMTEuMjU1MiA0LjQ1MDM2IDE0LjY2NjcgNC4wNzMyNFYwWk0yNS4zMzMzIDE2QzI1LjMzMzMgMTcuMjI0NSAyNS4wOTc1IDE4LjM5MzkgMjQuNjY4OCAxOS40NjU0TDE5LjkzMzMgMTYuNzMxM0MxOS45NzcxIDE2LjQ5NDIgMjAgMTYuMjQ5OCAyMCAxNkMyMCAxNS43NTAyIDE5Ljk3NzEgMTUuNTA1OCAxOS45MzMzIDE1LjI2ODdMMjQuNjY4OCAxMi41MzQ2QzI1LjA5NzUgMTMuNjA2MSAyNS4zMzMzIDE0Ljc3NTUgMjUuMzMzMyAxNlpNMTguNTk5NCAxMi45NTk2TDIzLjMzMzcgMTAuMjI2M0MyMS44ODQ3IDguMzg4MzEgMTkuNzU5NSA3LjEwODIyIDE3LjMzMzMgNi43NjExOVYxMi4yMjc2QzE3LjgwMTUgMTIuMzkzMSAxOC4yMjk2IDEyLjY0MzIgMTguNTk5NCAxMi45NTk2Wk0xNC42NjY3IDEyLjIyNzZWNi43NjExOUMxMi4yNDA1IDcuMTA4MjIgMTAuMTE1MyA4LjM4ODMxIDguNjY2MzMgMTAuMjI2M0wxMy40MDA2IDEyLjk1OTZDMTMuNzcwNCAxMi42NDMyIDE0LjE5ODUgMTIuMzkzMSAxNC42NjY3IDEyLjIyNzZaTTEyLjA2NjcgMTUuMjY4N0w3LjMzMTE2IDEyLjUzNDZDNi45MDI0OCAxMy42MDYxIDYuNjY2NjcgMTQuNzc1NSA2LjY2NjY3IDE2QzYuNjY2NjcgMTcuMjI0NSA2LjkwMjQ4IDE4LjM5MzkgNy4zMzExNiAxOS40NjU0TDEyLjA2NjcgMTYuNzMxM0MxMi4wMjI5IDE2LjQ5NDIgMTIgMTYuMjQ5OCAxMiAxNkMxMiAxNS43NTAyIDEyLjAyMjkgMTUuNTA1OCAxMi4wNjY3IDE1LjI2ODdaTTEzLjQwMDYgMTkuMDQwNEMxMy43NzA0IDE5LjM1NjggMTQuMTk4NSAxOS42MDY5IDE0LjY2NjcgMTkuNzcyNFYyNS4yMzg4QzEyLjI0MDUgMjQuODkxOCAxMC4xMTUzIDIzLjYxMTcgOC42NjYzMyAyMS43NzM3TDEzLjQwMDYgMTkuMDQwNFpNMTcuMzMzMyAxOS43NzI0QzE3LjgwMTUgMTkuNjA2OSAxOC4yMjk2IDE5LjM1NjggMTguNTk5NCAxOS4wNDA0TDIzLjMzMzcgMjEuNzczN0MyMS44ODQ3IDIzLjYxMTcgMTkuNzU5NSAyNC44OTE4IDE3LjMzMzMgMjUuMjM4OFYxOS43NzI0WiIgZmlsbD0iIzQ0ODVGRiIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 11678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUuNSAyLjE2NjY5VjkuMTY2NjlINC41VjIuMTY2NjlIMjUuNVpNNC41IDExLjVIMjUuNVYxOC41SDQuNVYxMS41Wk00LjUgMjAuODMzNFYyNy44MzM0SDI1LjVWMjAuODMzNEg0LjVaTTYuODMzMzMgNC41MDAwMkg5LjE2NjY3VjYuODMzMzVINi44MzMzM1Y0LjUwMDAyWk05LjE2NjY3IDEzLjgzMzRINi44MzMzM1YxNi4xNjY3SDkuMTY2NjdWMTMuODMzNFpNNi44MzMzMyAyMy4xNjY3SDkuMTY2NjdWMjUuNUg2LjgzMzMzVjIzLjE2NjdaTTIzLjE2NjcgNC41MDAwMkgxMi42NjY3VjYuODMzMzVIMjMuMTY2N1Y0LjUwMDAyWk0xMi42NjY3IDEzLjgzMzRIMjMuMTY2N1YxNi4xNjY3SDEyLjY2NjdWMTMuODMzNFpNMjMuMTY2NyAyMy4xNjY3SDEyLjY2NjdWMjUuNUgyMy4xNjY3VjIzLjE2NjdaIiBmaWxsPSIjMDBDNUIxIi8+DQo8L3N2Zz4NCg==");

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