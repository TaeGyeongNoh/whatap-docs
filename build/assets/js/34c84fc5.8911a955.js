"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[47733],{

/***/ 85506:
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
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang, InDoc, Xclude} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "컬럼 선택"
        })
      }), " 옵션 활용 시 원하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-node-list",
        children: "노드"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-pod-list",
        children: "Pod"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-application-list",
        children: "애플리케이션 목록"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-container-list",
        children: "컨테이너"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "deployment-list",
        children: "Deployment"
      }), " 정보를 선택해 목록을 조회할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      pages: "deployment-list",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-deployment-list-cl.png",
        desc: "컬럼 선택"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      pages: "resource-container-list",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-resource-container-list-cl.png",
        desc: "컬럼 선택"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      pages: "service-list",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-service-list-cl.png",
        desc: "컬럼 선택"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      pages: "node-disk-list",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-disk-cl.png",
        desc: "컬럼 선택"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      pages: "deployment-list,resource-container-list,service-list,node-disk-list",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-resource-node-list-cl.png",
        desc: "컬럼 선택"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "선택한 컬럼 목록은 메뉴 재진입 시 유지됩니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "초기화"
            })
          }), " 버튼 선택 시 사전 정의된 기본 주요 지표 컬럼이 선택됩니다. 이 경우 기존 컬럼 선택 내역은 삭제됩니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "컬럼은 최대 20개를 선택할 수 있습니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["컬럼 선택 후 우측 하단 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "적용"
            })
          }), " 버튼을 클릭 해 선택 내역을 적용할 수 있습니다."]
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

/***/ 54882:
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
    em: "em",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang, InDoc, LinkImage} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!LinkImage) _missingMdxReference("LinkImage", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "비교하기"
        })
      }), " 옵션 활용 시 여러 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-container-list",
        children: "컨테이너"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-node-list",
        children: "노드"
      }), "의 주요 지표에 대한 비교 차트를 확인할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      pages: "resource-container-list",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-resource-container-list-compare.png",
        desc: "비교하기 sc"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      pages: "resource-node-list",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-resource-node-list-compare.png",
        desc: "비교하기 sc"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "number a",
            src: (__webpack_require__(69625)/* ["default"] */ .A) + "",
            width: "35",
            height: "35"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "비교하기"
            })
          }), " 옵션 선택 시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
            pages: "resource-container-list",
            children: "컨테이너"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
            pages: "resource-node-list",
            children: "노드"
          }), " 목록에 비교 컬럼이 추가됩니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
            pages: "resource-container-list",
            children: "컨테이너"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
            pages: "resource-node-list",
            children: "노드"
          }), " 목록 좌측 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LinkImage, {
            img: "char-b.svg",
            className: "ico"
          }), " 비교 컬럼을 통해 비교를 원하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
            pages: "resource-container-list",
            children: "컨테이너"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
            pages: "resource-node-list",
            children: "노드"
          }), "를 선택하세요."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
                pages: "resource-container-list",
                children: "컨테이너"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
                pages: "resource-node-list",
                children: "노드"
              }), "는 최대 10개까지 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["선택한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
                pages: "resource-container-list",
                children: "컨테이너"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
                pages: "resource-node-list",
                children: "노드"
              }), "별로 다른 색상이 부여됩니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "number c",
            src: (__webpack_require__(38619)/* ["default"] */ .A) + "",
            width: "35",
            height: "35"
          }), " 영역에서 선택한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
            pages: "resource-container-list",
            children: "컨테이너"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
            pages: "resource-node-list",
            children: "노드"
          }), "의 비교 차트를 확인할 수 있습니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "number b",
                src: (__webpack_require__(78250)/* ["default"] */ .A) + "",
                width: "35",
                height: "35"
              }), " 비교 컬럼에서 선택한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
                pages: "resource-container-list",
                children: "컨테이너"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
                pages: "resource-node-list",
                children: "노드"
              }), "를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "number c",
                src: (__webpack_require__(38619)/* ["default"] */ .A) + "",
                width: "35",
                height: "35"
              }), " 영역 상단에서 확인할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "number c",
                src: (__webpack_require__(38619)/* ["default"] */ .A) + "",
                width: "35",
                height: "35"
              }), " 상단을 드래그해 비교 차트 영역 높이를 조절할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "number d",
            src: (__webpack_require__(28852)/* ["default"] */ .A) + "",
            width: "35",
            height: "35"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "기간 조회"
            })
          }), " 버튼 선택 시 다음과 같이 조회를 원하는 기간 내 비교 차트를 확인할 수 있습니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
          pages: "resource-container-list",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "k8s-resource-container-list-compare-time.png",
            desc: "기간 조회"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
          pages: "resource-node-list",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "k8s-resource-node-list-compare-time.png",
            desc: "기간 조회"
          })
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

/***/ 93421:
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



/*>
<InDoc pages="resource-container-list,resource-pod-list,resource-application-list,resource-node-list,">

<ImgLang img='k8s-resource-container-list-add-filter.png' desc='필터 추가' />

</InDoc>
*/


const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang, InDoc} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "필터"
        })
      }), " 옵션 활용 시 원하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-node-list",
        children: "노드 목록"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-pod-list",
        children: "Pod 목록"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-application-list",
        children: "애플리케이션 목록"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-container-list",
        children: "컨테이너 목록"
      }), "을 선택해 조회할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "and"
      }), " 조건을 통해 여러 개의 필터를 적용할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "필터 아이콘",
            src: (__webpack_require__(46817)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "필터"
            })
          }), " 입력 창에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "필터 더하기 아이콘",
            src: (__webpack_require__(86792)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "더하기 아이콘"
            })
          }), " 선택 시 다음과 같이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "필터 추가하기"
            })
          }), " 창이 나타납니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "k8s-resource-container-list-add-filter.png",
          desc: "필터 추가"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "필터 키"
                })
              }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "조건"
                })
              }), "을 선택하세요."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "조건에 맞는 값을 선택하세요."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["필터 설정 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "적용"
            })
          }), " 버튼을 선택해 해당 필터를 적용하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["여러 개의 필터를 추가하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "필터"
            })
          }), " 입력 창 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "필터 추가하기"
            })
          }), " 창에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "필터 더하기 아이콘",
            src: (__webpack_require__(86792)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "더하기 아이콘"
            })
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n"]
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

/***/ 35895:
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
    em: "em",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {InDoc} = _components;
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "원하는 컬럼 위에 마우스 커서를 위치시키면 다음과 같이 해당 컬럼이 제공하는 메트릭 정보를 확인할 수 있습니다."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-node-list,resource-pod-list,resource-application-list",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "메트릭 정보",
            src: (__webpack_require__(40181)/* ["default"] */ .A) + "",
            width: "645",
            height: "254"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-container-list",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "메트릭 정보",
            src: (__webpack_require__(97068)/* ["default"] */ .A) + "",
            width: "1200",
            height: "383"
          })
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "컬럼 선택"
          })
        }), " 옵션 화면 내 컬럼 목록에서 컬럼별 메트릭 정보를 확인할 수 있습니다. 원하는 컬럼 위에 마우스 커서를 위치시키면 컬럼 이름 우측에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "인포 아이콘",
          src: (__webpack_require__(83587)/* ["default"] */ .A) + "",
          width: "20",
          height: "20"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "인포 아이콘"
          })
        }), "이 나타납니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "인포 아이콘",
          src: (__webpack_require__(83587)/* ["default"] */ .A) + "",
          width: "20",
          height: "20"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "인포 아이콘"
          })
        }), " 위에 마우스 커서를 위치시키면 다음과 같이 메트릭 정보를 확인할 수 있습니다."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-node-list,resource-pod-list,resource-application-list",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "컬럼 목록 내 메트릭 정보",
            src: (__webpack_require__(80413)/* ["default"] */ .A) + "",
            width: "731",
            height: "230"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-container-list",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "컬럼 목록 내 메트릭 정보",
            src: (__webpack_require__(85710)/* ["default"] */ .A) + "",
            width: "1200",
            height: "471"
          })
        })
      }), "\n"]
    }), "\n"]
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

/***/ 78110:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28453);
/* harmony import */ var _common_items_k8s_list_metric_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35895);
/* harmony import */ var _common_items_k8s_list_filter_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93421);
/* harmony import */ var _common_items_k8s_list_compare_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54882);
/* harmony import */ var _common_items_k8s_list_cl_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85506);


const frontMatter = {
	id: 'resource-node-list',
	title: '노드 목록',
	description: '현재 프로젝트의 노드 현황 정보 및 상세 정보를 확인할 수 있습니다.',
	tags: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'클러스터',
		'노드 목록'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/resource-node-list",
  "title": "노드 목록",
  "description": "현재 프로젝트의 노드 현황 정보 및 상세 정보를 확인할 수 있습니다.",
  "source": "@site/docs/kubernetes/resource-node-list.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/resource-node-list",
  "permalink": "/kubernetes/resource-node-list",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/resource-node-list.mdx",
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
      "label": "클러스터",
      "permalink": "/tags/클러스터"
    },
    {
      "inline": true,
      "label": "노드 목록",
      "permalink": "/tags/노드-목록"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "resource-node-list",
    "title": "노드 목록",
    "description": "현재 프로젝트의 노드 현황 정보 및 상세 정보를 확인할 수 있습니다.",
    "tags": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "클러스터",
      "노드 목록"
    ]
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "Service 목록",
    "permalink": "/kubernetes/service-list"
  },
  "next": {
    "title": "노드 상세",
    "permalink": "/kubernetes/node-details"
  }
};
const assets = {

};

/*## 노드 상세 {#nodedetails}

***노드 상세*** 화면은 상단의 4개 차트와 노드 내 컨테이너 상세 정보로 구성되어 있습니다. 노드 셀렉터를 통해 조회를 원하는 노드를 선택할 수 있습니다.

<ImgLang img='k8s-resource-node-detail.png' desc='노드 상세 화면' />

* 상단 차트

다음과 같은 4개의 차트 정보를 확인할 수 있습니다.

* ***CPU Usage***: 노드의 CPU 사용량을 확인할 수 있습니다.

* ***Memory Usage***: 노드의 메모리 사용량을 확인할 수 있습니다.

* ***Network***: 노드의 네트워크 인터페이스의 입출력 트래픽과 오류 패킷을 확인할 수 있습니다.

* ***Disk Usage***: 노드의 Disk 사용량을 확인할 수 있습니다.

* 컨테이너 상세 정보

* 노드 내 컨테이너 상세 정보 상단에서 `cpu_quota`, `cpu_request`, `cpu_total_milli`, `mem_limit`, `mem_request`, `mem_working_set` 지표의 합계를 확인할 수 있습니다.

* 컨테이너 상세 정보는 다음 내용을 제공합니다.

| 항목             | 설명                                              |
| ---------------- | ------------------------------------------------- |
| 상태             | 컨테이너 상태                                     |
| 컨테이너         | Container ID                                      |
| 이미지           | 컨테이너 이미지 정보                              |
| 커맨드           | 컨테이너 실행 명령                                |
| 애플리케이션     | 컨테이너에 설치된 와탭 APM 에이전트의 이름        |
| Pod              | Pod 이름                                          |
| CpuByLimit       | CPU Limit 기준 CPU 전체 사용률                    |
| MemoryWsByLimit  | 컨테이너 메모리 Limit 기준 working set 사용량     |
| CpuThrottledCnt  | 컨테이너 CPU Throttled 건수                       |
| CpuThrottledTime | 컨테이너 CPU Throttled 시간                       |
| MemLimit         | 컨테이너 메모리 Limit 크기                        |
| MemRequest       | 컨테이너 메모리 Request 크기                      |
| MemWs            | 컨테이너 메모리 working set                       |
| IoReadBytes      | 컨테이너 전체 블럭 디바이스의 초당 읽은 바이트 합 |
| IoReadIops       | 컨테이너 전체 블럭 디바이스의 초당 읽은 건수 합   |
| IoWriteBytes     | 컨테이너 전체 블럭 디바이스의 초당 쓴 바이트 합   |
| IoWriteIops      | 컨테이너 전체 블럭 디바이스의 초당 쓴 건수 합     |
| NetRxBytes       | 컨테이너 전체 블럭 디바이스의 초당 읽기 바이트 합 |
| NetRxDropped     | 컨테이너 네트워크 수신 dropped 건수               |
| NetRxError       | 컨테이너 네트워크 수신 에러 건수                  |
| NetRxIops        | 컨테이너 네트워크 수신 건수                       |
| NetTxBytes        | 컨테이너 네트워크 송신 데이터 크기                |
| NetTxDropped     | 컨테이너 네트워크 송신 dropped 건수               |
| NetTxError       | 컨테이너 네트워크 송신 에러 건수                  |
| NetTxIops        | 컨테이너 네트워크 송신 건수                       |*/
/*ImgLang img='whatap_kubernetes_resource_node_list.png' desc='노드 목록' />

다음 기능을 추가로 제공합니다.

* ![비교하기 아이콘](/img/ico-compare.svg) ***비교하기***: 복수의 노드를 선택해 차트 기반으로 사용량을 비교할 수 있습니다.

* ![CSV 다운로드 아이콘](/img/ico-csv.svg) ***CSV 다운로드***: 화면에 표시된 목록 데이터를 CSV 파일로 다운로드할 수 있습니다.

서버 목록 페이지의 데이터는 60초 마다 자동 갱신됩니다. 사용자는 ![일시정지 아이콘](/img/ico-pause.svg) 버튼을 클릭해 데이터의 자동 갱신을 중지하거나 ![재생 아이콘](/img/ico-play-time.svg) 버튼을 클릭해 자동 갱신을 재시작할 수 있습니다.*/






const toc = [{
  "value": "기본 화면 안내",
  "id": "기본-화면-안내",
  "level": 2
}, {
  "value": "메트릭 정보",
  "id": "메트릭-정보",
  "level": 2
}, ..._common_items_k8s_list_metric_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "필터",
  "id": "필터",
  "level": 2
}, ..._common_items_k8s_list_filter_mdx__WEBPACK_IMPORTED_MODULE_2__/* .toc */ .RM, {
  "value": "비교하기",
  "id": "비교하기",
  "level": 2
}, ..._common_items_k8s_list_compare_mdx__WEBPACK_IMPORTED_MODULE_3__/* .toc */ .RM, {
  "value": "컬럼 선택",
  "id": "컬럼-선택",
  "level": 2
}, ..._common_items_k8s_list_cl_mdx__WEBPACK_IMPORTED_MODULE_4__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "cluster",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "node_list",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "특정 컬럼의 데이터가 표시되지 않는 것은 쿠버네티스 노드 에이전트가 구 버전이기 때문일 수 있습니다. 이런 경우 충분한 데이터가 수집될 수 있도록 쿠버네티스 노드 에이전트 버전을 1.3.7 이상으로 업데이트하세요."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "현재 프로젝트의 노드의 정보를 목록 형태로 확인할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "10초 주기로 실시간 데이터를 업데이트합니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["노드 상태 요약, 비교, 필터 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "CSV"
          }), " 파일 다운로드 기능을 제공합니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["CSV 파일명, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "kubernetes_node_list_{pcode}_{timestamp}.csv"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "기본-화면-안내",
        children: "기본 화면 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-resource-node-list-m.png",
        desc: "노드 목록 기본 화면"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "number 01",
          src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 영역에서 원하는 옵션을 선택해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "number 02",
          src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 영역에서 데이터를 조회할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 01",
              src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 영역 좌측 상단에서 전체 노드 개수 및 상태별 노드 개수를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 01",
              src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 영역 우측에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "→ 이전 버전으로 보기"
              })
            }), " 버튼 선택 시 개편 전 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "노드 목록"
              })
            }), " 화면을 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 02",
              src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 영역에서 원하는 컬럼 선택 시 해당 컬럼 기준으로 노드 목록을 정렬해 조회할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 02",
              src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 영역에서 OnodeName 컬럼 하위의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "상세 아이콘",
              src: (__webpack_require__(54842)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "상세"
              })
            }), " 아이콘 선택 시 해당 노드의 상세 페이지로 이동합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "노드 상세"
                })
              }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "node-details",
                children: "다음 문서"
              }), "를 참조하세요."]
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "메트릭-정보",
        children: "메트릭 정보"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_k8s_list_metric_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "필터",
        children: "필터"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_k8s_list_filter_mdx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "비교하기",
        children: "비교하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_k8s_list_compare_mdx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "컬럼-선택",
        children: "컬럼 선택"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_k8s_list_cl_mdx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {})]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
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

/***/ 69625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNy41IiBmaWxsPSIjRjlDMTJBIi8+DQo8cGF0aCBkPSJNMTkuNjcxOSAyMi41NjI1VjE0LjE0MDZDMTkuNjcxOSAxMy41NTczIDE5LjU4ODUgMTMuMDg4NSAxOS40MjE5IDEyLjczNDRDMTkuMjY1NiAxMi4zODAyIDE5LjAzMTIgMTIuMTI1IDE4LjcxODggMTEuOTY4OEMxOC40MTY3IDExLjgwMjEgMTguMDM2NSAxMS43MTg4IDE3LjU3ODEgMTEuNzE4OEMxNy4wOTkgMTEuNzE4OCAxNi42OTI3IDExLjgxNzcgMTYuMzU5NCAxMi4wMTU2QzE2LjAzNjUgMTIuMjEzNSAxNS43OTE3IDEyLjQ4NDQgMTUuNjI1IDEyLjgyODFDMTUuNDU4MyAxMy4xNjE1IDE1LjM3NSAxMy41NDY5IDE1LjM3NSAxMy45ODQ0SDExLjczNDRDMTEuNzM0NCAxMy4zMDczIDExLjg2OTggMTIuNjU2MiAxMi4xNDA2IDEyLjAzMTJDMTIuNDIxOSAxMS40MDYyIDEyLjgyMjkgMTAuODQ5IDEzLjM0MzggMTAuMzU5NEMxMy44NjQ2IDkuODY5NzkgMTQuNDk0OCA5LjQ4NDM4IDE1LjIzNDQgOS4yMDMxMkMxNS45NzQgOC45MjE4OCAxNi43OTY5IDguNzgxMjUgMTcuNzAzMSA4Ljc4MTI1QzE4Ljc4NjUgOC43ODEyNSAxOS43NSA4Ljk2MzU0IDIwLjU5MzggOS4zMjgxMkMyMS40Mzc1IDkuNjgyMjkgMjIuMDk5IDEwLjI2MDQgMjIuNTc4MSAxMS4wNjI1QzIzLjA2NzcgMTEuODU0MiAyMy4zMTI1IDEyLjg5NTggMjMuMzEyNSAxNC4xODc1VjIyLjA3ODFDMjMuMzEyNSAyMi44NTk0IDIzLjM1OTQgMjMuNTU3MyAyMy40NTMxIDI0LjE3MTlDMjMuNTU3MyAyNC43NzYgMjMuNjk3OSAyNS4zMDIxIDIzLjg3NSAyNS43NVYyNkgyMC4xNzE5QzIwLjAwNTIgMjUuNTkzOCAxOS44ODAyIDI1LjA3MjkgMTkuNzk2OSAyNC40Mzc1QzE5LjcxMzUgMjMuODAyMSAxOS42NzE5IDIzLjE3NzEgMTkuNjcxOSAyMi41NjI1Wk0yMC4xNTYyIDE1LjcwMzFMMjAuMTcxOSAxOC4wNjI1SDE4LjQyMTlDMTcuOTAxIDE4LjA2MjUgMTcuNDMyMyAxOC4xMzU0IDE3LjAxNTYgMTguMjgxMkMxNi41OTkgMTguNDE2NyAxNi4yNDQ4IDE4LjYxNDYgMTUuOTUzMSAxOC44NzVDMTUuNjcxOSAxOS4xMjUgMTUuNDUzMSAxOS40MzIzIDE1LjI5NjkgMTkuNzk2OUMxNS4xNTEgMjAuMTYxNSAxNS4wNzgxIDIwLjU2MjUgMTUuMDc4MSAyMUMxNS4wNzgxIDIxLjUzMTIgMTUuMTUxIDIxLjk2MzUgMTUuMjk2OSAyMi4yOTY5QzE1LjQ1MzEgMjIuNjMwMiAxNS42NzcxIDIyLjg4MDIgMTUuOTY4OCAyMy4wNDY5QzE2LjI3MDggMjMuMjAzMSAxNi42MzU0IDIzLjI4MTIgMTcuMDYyNSAyMy4yODEyQzE3LjY0NTggMjMuMjgxMiAxOC4xNTEgMjMuMTU2MiAxOC41NzgxIDIyLjkwNjJDMTkuMDE1NiAyMi42NDU4IDE5LjM0OSAyMi4zMzMzIDE5LjU3ODEgMjEuOTY4OEMxOS44MTc3IDIxLjYwNDIgMTkuOTExNSAyMS4yNzA4IDE5Ljg1OTQgMjAuOTY4OEwyMC42ODc1IDIyLjQ4NDRDMjAuNjA0MiAyMi44ODAyIDIwLjQ0NzkgMjMuMjk2OSAyMC4yMTg4IDIzLjczNDRDMjAgMjQuMTcxOSAxOS43MTM1IDI0LjU4ODUgMTkuMzU5NCAyNC45ODQ0QzE5LjAwNTIgMjUuMzgwMiAxOC41NzgxIDI1LjcwMzEgMTguMDc4MSAyNS45NTMxQzE3LjU3ODEgMjYuMTkyNyAxNyAyNi4zMTI1IDE2LjM0MzggMjYuMzEyNUMxNS4zOTU4IDI2LjMxMjUgMTQuNTUyMSAyNi4xMTQ2IDEzLjgxMjUgMjUuNzE4OEMxMy4wNzI5IDI1LjMyMjkgMTIuNDg5NiAyNC43NTUyIDEyLjA2MjUgMjQuMDE1NkMxMS42NDU4IDIzLjI2NTYgMTEuNDM3NSAyMi4zNjk4IDExLjQzNzUgMjEuMzI4MUMxMS40Mzc1IDIwLjQ4NDQgMTEuNTc4MSAxOS43MTg4IDExLjg1OTQgMTkuMDMxMkMxMi4xNDA2IDE4LjM0MzggMTIuNTU3MyAxNy43NTUyIDEzLjEwOTQgMTcuMjY1NkMxMy42NjE1IDE2Ljc2NTYgMTQuMzU0MiAxNi4zODAyIDE1LjE4NzUgMTYuMTA5NEMxNi4wMzEyIDE1LjgzODUgMTcuMDE1NiAxNS43MDMxIDE4LjE0MDYgMTUuNzAzMUgyMC4xNTYyWiIgZmlsbD0iIzMzMzMzMyIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 78250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNy41IiBmaWxsPSIjRjlDMTJBIi8+DQo8cGF0aCBkPSJNMTIuODQzOCA1SDE2LjQ2ODhWMjUuMzc1TDE2LjE4NzUgMjlIMTIuODQzOFY1Wk0yNS41NzgxIDE5Ljg5MDZWMjEuMjE4OEMyNS41NzgxIDIyLjU3MjkgMjUuNDYzNSAyMy43NTUyIDI1LjIzNDQgMjQuNzY1NkMyNS4wMDUyIDI1Ljc3NiAyNC42NjE1IDI2LjYxOTggMjQuMjAzMSAyNy4yOTY5QzIzLjc0NDggMjcuOTc0IDIzLjE3MTkgMjguNDc5MiAyMi40ODQ0IDI4LjgxMjVDMjEuNzk2OSAyOS4xNDU4IDIwLjk5NDggMjkuMzEyNSAyMC4wNzgxIDI5LjMxMjVDMTkuMjI0IDI5LjMxMjUgMTguNDg0NCAyOS4xMjUgMTcuODU5NCAyOC43NUMxNy4yNDQ4IDI4LjM2NDYgMTYuNzI0IDI3LjgyODEgMTYuMjk2OSAyNy4xNDA2QzE1Ljg4MDIgMjYuNDQyNyAxNS41NDY5IDI1LjYxNDYgMTUuMjk2OSAyNC42NTYyQzE1LjA1NzMgMjMuNjk3OSAxNC44ODAyIDIyLjY0MDYgMTQuNzY1NiAyMS40ODQ0VjE5LjYyNUMxNC44Njk4IDE4LjQ2ODggMTUuMDQxNyAxNy40MTE1IDE1LjI4MTIgMTYuNDUzMUMxNS41MzEyIDE1LjQ4NDQgMTUuODY0NiAxNC42NTYyIDE2LjI4MTIgMTMuOTY4OEMxNi42OTc5IDEzLjI3MDggMTcuMjE4OCAxMi43MzQ0IDE3Ljg0MzggMTIuMzU5NEMxOC40Njg4IDExLjk3NCAxOS4yMDgzIDExLjc4MTIgMjAuMDYyNSAxMS43ODEyQzIwLjk4OTYgMTEuNzgxMiAyMS43OTY5IDExLjk0NzkgMjIuNDg0NCAxMi4yODEyQzIzLjE3MTkgMTIuNjE0NiAyMy43NDQ4IDEzLjExOTggMjQuMjAzMSAxMy43OTY5QzI0LjY2MTUgMTQuNDYzNSAyNS4wMDUyIDE1LjMwNzMgMjUuMjM0NCAxNi4zMjgxQzI1LjQ2MzUgMTcuMzM4NSAyNS41NzgxIDE4LjUyNiAyNS41NzgxIDE5Ljg5MDZaTTIxLjkzNzUgMjEuMjE4OFYxOS44OTA2QzIxLjkzNzUgMTkuMDM2NSAyMS44OTA2IDE4LjI5NjkgMjEuNzk2OSAxNy42NzE5QzIxLjcxMzUgMTcuMDQ2OSAyMS41NjI1IDE2LjUzMTIgMjEuMzQzOCAxNi4xMjVDMjEuMTM1NCAxNS43MDgzIDIwLjg0MzggMTUuMzk1OCAyMC40Njg4IDE1LjE4NzVDMjAuMDkzOCAxNC45NzkyIDE5LjYxOTggMTQuODc1IDE5LjA0NjkgMTQuODc1QzE4LjU0NjkgMTQuODc1IDE4LjExNDYgMTQuOTc0IDE3Ljc1IDE1LjE3MTlDMTcuMzk1OCAxNS4zNjk4IDE3LjA5MzggMTUuNjUxIDE2Ljg0MzggMTYuMDE1NkMxNi41OTM4IDE2LjM2OTggMTYuMzk1OCAxNi43ODEyIDE2LjI1IDE3LjI1QzE2LjEwNDIgMTcuNzA4MyAxNi4wMDUyIDE4LjIwMzEgMTUuOTUzMSAxOC43MzQ0VjIyLjM3NUMxNi4wMjYgMjMuMDcyOSAxNi4xNzE5IDIzLjcxMzUgMTYuMzkwNiAyNC4yOTY5QzE2LjYxOTggMjQuODgwMiAxNi45NDc5IDI1LjM0MzggMTcuMzc1IDI1LjY4NzVDMTcuODEyNSAyNi4wMzEyIDE4LjM4MDIgMjYuMjAzMSAxOS4wNzgxIDI2LjIwMzFDMTkuNjMwMiAyNi4yMDMxIDIwLjA4ODUgMjYuMTA5NCAyMC40NTMxIDI1LjkyMTlDMjAuODE3NyAyNS43MzQ0IDIxLjEwOTQgMjUuNDM3NSAyMS4zMjgxIDI1LjAzMTJDMjEuNTU3MyAyNC42MjUgMjEuNzEzNSAyNC4xMDk0IDIxLjc5NjkgMjMuNDg0NEMyMS44OTA2IDIyLjg0OSAyMS45Mzc1IDIyLjA5MzggMjEuOTM3NSAyMS4yMTg4WiIgZmlsbD0iIzMzMzMzMyIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 38619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNy41IiBmaWxsPSIjRjlDMTJBIi8+DQo8cGF0aCBkPSJNMTcuODI4MSAyMy4yNjU2QzE4LjI5NjkgMjMuMjY1NiAxOC43MTM1IDIzLjE2NjcgMTkuMDc4MSAyMi45Njg4QzE5LjQ1MzEgMjIuNzcwOCAxOS43NSAyMi40NjM1IDE5Ljk2ODggMjIuMDQ2OUMyMC4xODc1IDIxLjYxOTggMjAuMzA3MyAyMS4wNjc3IDIwLjMyODEgMjAuMzkwNkgyMy43NUMyMy43MjkyIDIxLjU4ODUgMjMuNDUzMSAyMi42MzU0IDIyLjkyMTkgMjMuNTMxMkMyMi4zOTA2IDI0LjQxNjcgMjEuNjgyMyAyNS4xMDQyIDIwLjc5NjkgMjUuNTkzOEMxOS45MjE5IDI2LjA3MjkgMTguOTQ3OSAyNi4zMTI1IDE3Ljg3NSAyNi4zMTI1QzE2Ljc2MDQgMjYuMzEyNSAxNS43ODY1IDI2LjEzNTQgMTQuOTUzMSAyNS43ODEyQzE0LjEzMDIgMjUuNDE2NyAxMy40NDc5IDI0Ljg5MDYgMTIuOTA2MiAyNC4yMDMxQzEyLjM2NDYgMjMuNTE1NiAxMS45NTgzIDIyLjY4MjMgMTEuNjg3NSAyMS43MDMxQzExLjQyNzEgMjAuNzEzNSAxMS4yOTY5IDE5LjU4MzMgMTEuMjk2OSAxOC4zMTI1VjE2Ljc4MTJDMTEuMjk2OSAxNS41MjA4IDExLjQyNzEgMTQuMzk1OCAxMS42ODc1IDEzLjQwNjJDMTEuOTU4MyAxMi40MTY3IDEyLjM2NDYgMTEuNTc4MSAxMi45MDYyIDEwLjg5MDZDMTMuNDQ3OSAxMC4yMDMxIDE0LjEzMDIgOS42ODIyOSAxNC45NTMxIDkuMzI4MTJDMTUuNzc2IDguOTYzNTQgMTYuNzQ0OCA4Ljc4MTI1IDE3Ljg1OTQgOC43ODEyNUMxOS4wNDY5IDguNzgxMjUgMjAuMDcyOSA5LjAzMTI1IDIwLjkzNzUgOS41MzEyNUMyMS44MTI1IDEwLjAyMDggMjIuNDk0OCAxMC43Mzk2IDIyLjk4NDQgMTEuNjg3NUMyMy40NzQgMTIuNjM1NCAyMy43MjkyIDEzLjc5NjkgMjMuNzUgMTUuMTcxOUgyMC4zMjgxQzIwLjMwNzMgMTQuNDQyNyAyMC4xOTc5IDEzLjgzMzMgMjAgMTMuMzQzOEMxOS44MDIxIDEyLjg0MzggMTkuNTIwOCAxMi40Njg4IDE5LjE1NjIgMTIuMjE4OEMxOC44MDIxIDExLjk2ODggMTguMzU0MiAxMS44NDM4IDE3LjgxMjUgMTEuODQzOEMxNy4yMTg4IDExLjg0MzggMTYuNzI5MiAxMS45NTgzIDE2LjM0MzggMTIuMTg3NUMxNS45Njg4IDEyLjQwNjIgMTUuNjc3MSAxMi43MjkyIDE1LjQ2ODggMTMuMTU2MkMxNS4yNzA4IDEzLjU4MzMgMTUuMTMwMiAxNC4xMDQyIDE1LjA0NjkgMTQuNzE4OEMxNC45NzQgMTUuMzIyOSAxNC45Mzc1IDE2LjAxMDQgMTQuOTM3NSAxNi43ODEyVjE4LjMxMjVDMTQuOTM3NSAxOS4xMDQyIDE0Ljk3NCAxOS44MDczIDE1LjA0NjkgMjAuNDIxOUMxNS4xMTk4IDIxLjAyNiAxNS4yNTUyIDIxLjU0MTcgMTUuNDUzMSAyMS45Njg4QzE1LjY2MTUgMjIuMzk1OCAxNS45NTgzIDIyLjcxODggMTYuMzQzOCAyMi45Mzc1QzE2LjcyOTIgMjMuMTU2MiAxNy4yMjQgMjMuMjY1NiAxNy44MjgxIDIzLjI2NTZaIiBmaWxsPSIjMzMzMzMzIi8+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ 28852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNy41IiBmaWxsPSIjRjlDMTJBIi8+DQo8cGF0aCBkPSJNMTkuMzI4MSAyNS40Njg4VjVIMjIuOTY4OFYyOUwxOS42NzE5IDI5LjAxNTZMMTkuMzI4MSAyNS40Njg4Wk0xMC4yNSAyMS4yMzQ0VjE5LjkwNjJDMTAuMjUgMTguNTIwOCAxMC4zNzUgMTcuMzIyOSAxMC42MjUgMTYuMzEyNUMxMC44NzUgMTUuMjkxNyAxMS4yMzk2IDE0LjQ0MjcgMTEuNzE4OCAxMy43NjU2QzEyLjIwODMgMTMuMDg4NSAxMi43OTY5IDEyLjU4ODUgMTMuNDg0NCAxMi4yNjU2QzE0LjE3MTkgMTEuOTQyNyAxNC45NDc5IDExLjc4MTIgMTUuODEyNSAxMS43ODEyQzE2LjY1NjIgMTEuNzgxMiAxNy4zODU0IDExLjk3NCAxOCAxMi4zNTk0QzE4LjYxNDYgMTIuNzM0NCAxOS4xMzU0IDEzLjI3MDggMTkuNTYyNSAxMy45Njg4QzE5Ljk4OTYgMTQuNjY2NyAyMC4zMjgxIDE1LjUgMjAuNTc4MSAxNi40Njg4QzIwLjgzODUgMTcuNDI3MSAyMS4wMTU2IDE4LjUgMjEuMTA5NCAxOS42ODc1VjIxLjUzMTJDMjAuOTk0OCAyMi42NzcxIDIwLjgxMjUgMjMuNzI5MiAyMC41NjI1IDI0LjY4NzVDMjAuMzEyNSAyNS42MzU0IDE5Ljk3NCAyNi40NTMxIDE5LjU0NjkgMjcuMTQwNkMxOS4xMTk4IDI3LjgyODEgMTguNTkzOCAyOC4zNjQ2IDE3Ljk2ODggMjguNzVDMTcuMzU0MiAyOS4xMjUgMTYuNjMwMiAyOS4zMTI1IDE1Ljc5NjkgMjkuMzEyNUMxNC45MzIzIDI5LjMxMjUgMTQuMTU2MiAyOS4xNDA2IDEzLjQ2ODggMjguNzk2OUMxMi43OTE3IDI4LjQ1MzEgMTIuMjA4MyAyNy45NDI3IDExLjcxODggMjcuMjY1NkMxMS4yMzk2IDI2LjU4ODUgMTAuODc1IDI1Ljc1IDEwLjYyNSAyNC43NUMxMC4zNzUgMjMuNzM5NiAxMC4yNSAyMi41Njc3IDEwLjI1IDIxLjIzNDRaTTEzLjg5MDYgMTkuOTA2MlYyMS4yMzQ0QzEzLjg5MDYgMjIuMDk5IDEzLjk0MjcgMjIuODQzOCAxNC4wNDY5IDIzLjQ2ODhDMTQuMTUxIDI0LjA5MzggMTQuMzE3NyAyNC42MDk0IDE0LjU0NjkgMjUuMDE1NkMxNC43NzYgMjUuNDExNSAxNS4wNzgxIDI1LjcwODMgMTUuNDUzMSAyNS45MDYyQzE1LjgyODEgMjYuMDkzOCAxNi4yODEyIDI2LjE4NzUgMTYuODEyNSAyNi4xODc1QzE3LjQ3OTIgMjYuMTg3NSAxOC4wMjA4IDI2LjAyMDggMTguNDM3NSAyNS42ODc1QzE4Ljg2NDYgMjUuMzU0MiAxOS4xOTI3IDI0LjkwNjIgMTkuNDIxOSAyNC4zNDM4QzE5LjY2MTUgMjMuNzcwOCAxOS44MjgxIDIzLjEzNTQgMTkuOTIxOSAyMi40Mzc1VjE4Ljc5NjlDMTkuODY5OCAxOC4yNDQ4IDE5Ljc2NTYgMTcuNzM0NCAxOS42MDk0IDE3LjI2NTZDMTkuNDUzMSAxNi43ODY1IDE5LjI1IDE2LjM2OTggMTkgMTYuMDE1NkMxOC43NSAxNS42NjE1IDE4LjQ0MjcgMTUuMzg1NCAxOC4wNzgxIDE1LjE4NzVDMTcuNzI0IDE0Ljk3OTIgMTcuMzA3MyAxNC44NzUgMTYuODI4MSAxNC44NzVDMTYuMjk2OSAxNC44NzUgMTUuODQzOCAxNC45NzkyIDE1LjQ2ODggMTUuMTg3NUMxNS4wOTM4IDE1LjM4NTQgMTQuNzkxNyAxNS42OTI3IDE0LjU2MjUgMTYuMTA5NEMxNC4zMzMzIDE2LjUxNTYgMTQuMTYxNSAxNy4wMzY1IDE0LjA0NjkgMTcuNjcxOUMxMy45NDI3IDE4LjI5NjkgMTMuODkwNiAxOS4wNDE3IDEzLjg5MDYgMTkuOTA2MloiIGZpbGw9IiMzMzMzMzMiLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 54842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA0SDIwQzIxLjAzNTMgNCAyMS44OTM0IDQuNzk3MjMgMjEuOTkwOCA1LjgwODFMMjIgNlY5LjMzMzMzSDIwVjZINFYxOEgxNFYyMEg0QzIuOTY0NzEgMjAgMi4xMDY1NyAxOS4yMDI4IDIuMDA5MiAxOC4xOTE5TDIgMThWNkMyIDQuOTY0NzEgMi43OTcyMyA0LjEwNjU3IDMuODA4MSA0LjAwOTJMNCA0Wk0yMC40NTY3IDE5LjIxTDE3LjU0NjcgMTYuM0MxNi44NTY3IDE2Ljc0IDE2LjAzNjcgMTcgMTUuMTU2NyAxN0MxMi42NzY3IDE3IDEwLjY2NjcgMTQuOTkgMTAuNjY2NyAxMi41QzEwLjY2NjcgMTAuMDEgMTIuNjc2NyA4IDE1LjE2NjcgOEMxNy42NTY3IDggMTkuNjY2NyAxMC4wMSAxOS42NjY3IDEyLjVDMTkuNjY2NyAxMy4zOCAxOS40MDY3IDE0LjE5IDE4Ljk2NjcgMTQuODlMMjEuODc2NyAxNy43OUwyMC40NTY3IDE5LjIxWk0xNS4xNjY3IDEwQzEzLjc4NjcgMTAgMTIuNjY2NyAxMS4xMiAxMi42NjY3IDEyLjVDMTIuNjY2NyAxMy44OCAxMy43ODY3IDE1IDE1LjE2NjcgMTVDMTYuNTQ2NyAxNSAxNy42NjY3IDEzLjg4IDE3LjY2NjcgMTIuNUMxNy42NjY3IDExLjEyIDE2LjU0NjcgMTAgMTUuMTY2NyAxMFoiIGZpbGw9IiM3NTc1NzUiLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 86792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1wbHVzPC90aXRsZT4gLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2MC4wMDAwMDAsIC03ODIuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+DQogICAgICAgICAgICA8ZyBpZD0ic3VnZ2VzdGVkLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDczNy4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcGx1cyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIwLjAwMDAwMCwgNDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCA0LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTksMCBMOSw3IEwxNiw3IEwxNiw5IEw5LDkgTDksMTYgTDcsMTYgTDcsOC45OTkgTDAsOSBMMCw3IEw3LDYuOTk5IEw3LDAgTDksMCBaIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");

/***/ }),

/***/ 46817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1maWx0ZXI8L3RpdGxlPiAtLT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTI1NTEuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+DQogICAgICAgICAgICA8ZyBpZD0iYXBwbGljYXRpb24taWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMjM0Ni4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtZmlsdGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTIuMDAwMDAwLCAyMDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAyLjAwMDAwMCkiIGlkPSJJY29uIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDAgTDAsMS45NTE3MTE0NCBMOS4wNTQ2NDk2LDExLjY2NjY2NjcgTDkuMDU0NjQ5NiwyMCBMMTAuOTg2NDg3OSwxOC41NTY0MDI0IEwxMC45ODY0ODc5LDExLjY2NjY2NjcgTDIwLDEuOTUxNzExNDQgTDIwLDAgTDAsMCBaIE0zLjQ0NzI3ODExLDMgTDE2LjYxNDY0NTQsMyBMMTAuMDE0NTA0MiwxMCBMMy40NDcyNzgxMSwzIFoiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==");

/***/ }),

/***/ 83587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+DQogIDwhLS0gPHRpdGxlPmljLXMtaW5mby1jaXJjbGU8L3RpdGxlPiAtLT4NCiAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjQ2LjAwMDAwMCwgLTEwMTMuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+DQogICAgICAgICAgPGcgaWQ9InN1Z2dlc3RlZC1pY29ucy1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDk2Ni4wMDAwMDApIj4NCiAgICAgICAgICAgICAgPGcgaWQ9ImljLWluZm8tY2lyY2xlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDYuMDAwMDAwLCA0Ny4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LDAgQzEzLjk3MDU2MjcsMCAxOCw0LjAyOTQzNzI1IDE4LDkgQzE4LDEzLjk3MDU2MjcgMTMuOTcwNTYyNywxOCA5LDE4IEM0LjAyOTQzNzI1LDE4IDAsMTMuOTcwNTYyNyAwLDkgQzAsNC4wMjk0MzcyNSA0LjAyOTQzNzI1LDAgOSwwIFogTTksMS44IEM1LjAyMzU0OTgsMS44IDEuOCw1LjAyMzU0OTggMS44LDkgQzEuOCwxMi45NzY0NTAyIDUuMDIzNTQ5OCwxNi4yIDksMTYuMiBDMTIuOTc2NDUwMiwxNi4yIDE2LjIsMTIuOTc2NDUwMiAxNi4yLDkgQzE2LjIsNS4wMjM1NDk4IDEyLjk3NjQ1MDIsMS44IDksMS44IFogTTkuOSw4LjEgTDkuOSwxMy41IEw4LjEsMTMuNSBMOC4xLDguMSBMOS45LDguMSBaIE05LjksNC41IEw5LjksNi4zIEw4LjEsNi4zIEw4LjEsNC41IEw5LjksNC41IFoiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgIDwvZz4NCiAgICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+");

/***/ }),

/***/ 85710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-resource-container-list-metric-info-cl-027b1dfba1ebeb38efe9e1ef5ad3c8b4.png");

/***/ }),

/***/ 97068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-resource-container-list-metric-info-4091b7192402d02bf2cefcdbd56c5a4f.png");

/***/ }),

/***/ 80413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-resource-node-list-metric-info-cl-401493ae7feff569a79ef2eb6ee6600c.png");

/***/ }),

/***/ 40181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-resource-node-list-metric-info-4b7f19d76c6a5d575fe7c83c74d7ab0d.png");

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