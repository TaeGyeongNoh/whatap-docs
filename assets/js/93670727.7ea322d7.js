"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["47317"], {
"6495": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_preview_preview_2_11_0_a_mdx_936_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-preview-preview-2-11-0-a-mdx-936.json
var site_docs_release_notes_preview_preview_2_11_0_a_mdx_936_namespaceObject = JSON.parse('{"id":"release-notes/preview/preview-2_11_0x","title":"Preview 2.11.0.a","description":"preview.whatap.io에서 다음 추가한 신기능과 수정한 내용을 미리 경험할 수 있습니다.","source":"@site/docs/release-notes/preview/preview-2.11.0.a.mdx","sourceDirName":"release-notes/preview","slug":"/release-notes/preview/preview-2_11_0x","permalink":"/release-notes/preview/preview-2_11_0x","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/preview/preview-2.11.0.a.mdx","tags":[],"version":"current","frontMatter":{"id":"preview-2_11_0x","title":"Preview 2.11.0.a","toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"previewSidebar","previous":{"title":"Preview 2.12.0.a","permalink":"/release-notes/preview/preview-2_12_0x"},"next":{"title":"Preview 2.10.0.a","permalink":"/release-notes/preview/preview-2_10_0x"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/preview/preview-2.11.0.a.mdx


const frontMatter = {
	id: 'preview-2_11_0x',
	title: 'Preview 2.11.0.a',
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*ALERT-133 수신 테스트시 설정된 수신자 태그 적용 항목의 경우 21일 이후 프리뷰 배포 가능성 있기 때문에 추적 및 대기 필요*/
/*

11월 정식 배포로 안내 제외

#### SQL Server V2

- <Status priority='1'>Feature</Status> <Cmdname sid="side_reportStat" className="uitext" /> 하위에 <Cmdname sid="side_dbSize" className="uitext" /> 메뉴 추가

- <Status priority='0'>Feature</Status> <Cmdname sid="side_analysis" className="uitext" /> 하위에 <Cmdname sid="side_deadLock" className="uitext" />

*/


const toc = [{
  "value": "Preview 2.11.0.a4",
  "id": "preview-2110a4",
  "level": 2
}, {
  "value": "<code>공통</code>",
  "id": "공통",
  "level": 3
}, {
  "value": "<code>Server</code>",
  "id": "server",
  "level": 3
}, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes",
  "level": 3
}, {
  "value": "<code>Database</code>",
  "id": "database",
  "level": 3
}, {
  "value": "공통",
  "id": "공통-1",
  "level": 4
}, {
  "value": "Database <code class=\"my\">V2</code>",
  "id": "database-v2",
  "level": 4
}, {
  "value": "SQL Server",
  "id": "sql-server",
  "level": 4
}, {
  "value": "Oracle, Oracle Pro",
  "id": "oracle-oracle-pro",
  "level": 4
}, {
  "value": "<code>Browser</code>",
  "id": "browser",
  "level": 3
}, {
  "value": "<code>Log</code>",
  "id": "log",
  "level": 3
}, {
  "value": "Preview 2.11.0.a3",
  "id": "preview-2110a3",
  "level": 2
}, {
  "value": "<code>공통</code>",
  "id": "공통-2",
  "level": 3
}, {
  "value": "<code>Application</code>",
  "id": "application",
  "level": 3
}, {
  "value": "<code>Server</code>",
  "id": "server-1",
  "level": 3
}, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes-1",
  "level": 3
}, {
  "value": "<code>Database</code>",
  "id": "database-1",
  "level": 3
}, {
  "value": "PostgreSQL",
  "id": "postgresql",
  "level": 4
}, {
  "value": "Oracle, Oracle Pro",
  "id": "oracle-oracle-pro-1",
  "level": 4
}, {
  "value": "Preview 2.11.0.a2",
  "id": "preview-2110a2",
  "level": 2
}, {
  "value": "<code>공통</code>",
  "id": "공통-3",
  "level": 3
}, {
  "value": "<code>Application</code>",
  "id": "application-1",
  "level": 3
}, {
  "value": "<code>Server</code>",
  "id": "server-2",
  "level": 3
}, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes-2",
  "level": 3
}, {
  "value": "<code>Database</code>",
  "id": "database-2",
  "level": 3
}, {
  "value": "공통",
  "id": "공통-4",
  "level": 4
}, {
  "value": "Database <code class=\"my\">V1</code>",
  "id": "database-v1",
  "level": 4
}, {
  "value": "Oracle, Oracle Pro",
  "id": "oracle-oracle-pro-2",
  "level": 4
}, {
  "value": "<code>Browser</code>",
  "id": "browser-1",
  "level": 3
}, {
  "value": "<code>Log</code>",
  "id": "log-1",
  "level": 3
}, {
  "value": "Preview 2.11.0.a1",
  "id": "preview-2110a1",
  "level": 2
}, {
  "value": "<code>공통</code>",
  "id": "공통-5",
  "level": 3
}, {
  "value": "<code>Application</code>",
  "id": "application-2",
  "level": 3
}, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes-3",
  "level": 3
}, {
  "value": "<code>Database</code>",
  "id": "database-3",
  "level": 3
}, {
  "value": "<code>Log</code>",
  "id": "log-2",
  "level": 3
}, {
  "value": "Preview 2.11.0.a0",
  "id": "preview-2110a0",
  "level": 2
}, {
  "value": "<code>Application</code>",
  "id": "application-3",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, Head, LinkImage, Status, UI} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Head) _missingMdxReference("Head", true);
  if (!LinkImage) _missingMdxReference("LinkImage", true);
  if (!Status) _missingMdxReference("Status", true);
  if (!UI) _missingMdxReference("UI", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://preview.whatap.io",
          children: "preview.whatap.io"
        }), "에서 다음 추가한 신기능과 수정한 내용을 미리 경험할 수 있습니다."]
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "preview-2110a4",
        children: "Preview 2.11.0.a4"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "2024년 11월 20일"
      }), (0,jsx_runtime.jsxs)("div", {
        class: "indentTab",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "공통",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "공통"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " 사이드 메뉴를 접은 상태에서 조직을 선택하고, 즐겨찾기한 Flex 보드가 있으면, ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_integratedFlexboard",
                className: "uitext"
              }), " 메뉴를 선택할 때 조직 선택이 해제되는 문제 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " 조직 내에서 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "goto_alertTemplate",
                className: "uitext"
              }), " 이동 후 조직 내 조회가 정상 동작하지 않는 문제 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "server",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Server"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "New"
              }), " 클라우드 및 엔터프라이즈 온프레미스 인프라 모니터링을 지원하는 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_serverInventoryMap",
                className: "uitext"
              }), " 메뉴 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_serverList",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_serverInventory",
                className: "uitext"
              }), " 메뉴명을 ", (0,jsx_runtime.jsx)(UI, {
                children: "서버 인벤토리"
              }), "로 변경"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "kubernetes",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Kubernetes"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_cluster",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_kubeEventList",
                className: "uitext"
              }), " 메뉴에 상세 보기 기능 추가(Suggestions, 인접 로그, 이벤트 타임라인)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_cluster",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_kubeEventList",
                className: "uitext"
              }), " 메뉴에 Type, Reason 개수 표시 및 시간별 이벤트 개수 차트에 Type 구분 표시 추가"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "database",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Database"
          })
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "공통-1",
          children: "공통"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbMonitoring",
            className: "uitext"
          }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "active_sessions",
            className: "uitext"
          }), " 테이블에서 컬럼 변경 사항이 CSV 데이터에 반영되지 않는 문제 수정"]
        }), (0,jsx_runtime.jsxs)(_components.h4, {
          id: "database-v2",
          children: ["Database ", (0,jsx_runtime.jsx)("code", {
            className: "my",
            children: "V2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbTrendComparison",
            className: "uitext"
          }), " 메뉴의 지표 선택 화면에서 지표가 보이지 않는 문제 수정"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "sql-server",
          children: "SQL Server"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "New"
          }), " SQL Server ", (0,jsx_runtime.jsx)("code", {
            className: "my",
            children: "V2"
          }), " 서비스 시작"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "oracle-oracle-pro",
          children: "Oracle, Oracle Pro"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_multiInstance",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(UI, {
            children: "Disk Usage"
          }), " 위젯의 크게 보기 창에서 여백에 대한 UI 변경"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "browser",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Browser"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_statistics",
            className: "uitext"
          }), " 메뉴 하위에 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_ipLoadStatistics",
            className: "uitext"
          }), " 메뉴 추가"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "log",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Log"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_log",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_logSetting",
            className: "uitext"
          }), " 메뉴에서 다음 기능 추가 및 수정"]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "로그 데이터 보존 기간을 직접 입력하여 변경할 수 있는 기능 추가"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "로그 데이터 보존 기간의 데이터 표시 방식 수정"
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "preview-2110a3",
        children: "Preview 2.11.0.a3"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "2024년 11월 14일"
      }), (0,jsx_runtime.jsxs)("div", {
        class: "indentTab",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "공통-2",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "공통"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_integratedRealtimeAlert",
                className: "uitext"
              }), "에서 CSV 다운로드 기능 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_myUsage",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_projectSubscription",
                className: "uitext"
              }), " 메뉴에서 프로젝트 전체 및 개별 프로젝트의 과금 단위 요약 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "my_profile",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_ssoIntegrations",
                className: "uitext"
              }), " 메뉴에서 Okta에 한정된 안내 문구 변경"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "my_profile",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "notification_setting",
                className: "uitext"
              }), " 섹션에서 조회 에러 발생 시 알림이 종료되지 않는 현상 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_myUsage",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_paymentInformation",
                className: "uitext"
              }), " 메뉴에서 AWS Marketplace 재구독 버튼이 활성화되지 않는 현상 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_flexboard",
                className: "uitext"
              }), " 메뉴에서 특수 문자를 포함한 메트릭스 지표가 통합되어 표시되는 현상 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "application",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Application"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), " 창의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06125",
                className: "uitext"
              }), " 탭에서 에러 트랜잭션이 아님에도 에러 단계 필드가 노출되는 현상 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), " 창의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06125",
                className: "uitext"
              }), " 탭에서 Pod명, 컨테이너 ID 필드를 별도의 그룹으로 표시하도록 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), " 창의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06126",
                className: "uitext"
              }), " 탭에서 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06224",
                className: "uitext"
              }), " 조회 시 비밀번호가 해제되지 않은 경우에도 바인드 변수 매핑 기능이 활성화되는 현상 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "server-1",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Server"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " 사용자 행위 이력이 남는 API로 교체하여 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_serverList",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_serverInventory",
                className: "uitext"
              }), " 메뉴 삭제 기능 개선"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), "  ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_serverList",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_serverInventory",
                className: "uitext"
              }), " 메뉴에서 커스텀 컬럼 수정 후 저장되지 않는 현상 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "kubernetes-1",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Kubernetes"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "New"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_cluster",
                className: "uitext"
              }), " 하위에 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_etcdDashboard",
                className: "uitext"
              }), "  메뉴 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_containerMap",
                className: "uitext"
              }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_integratedContainerMap",
                className: "uitext"
              }), " 메뉴에서 외부 프로젝트 에이전트가 설치된 컨테이너 식별 및 해당 프로젝트 이동 기능 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " 컨테이너 개수가 많을 때 메트릭스 대시보드가 로딩 상태를 반복하는 문제 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "database-1",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Database"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_reportStat",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbSqlStat",
                className: "uitext"
              }), " 메뉴에서 차트 영역 테두리(border) 제거"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbMonitoring",
                className: "uitext"
              }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06220",
                className: "uitext"
              }), " 창에서 ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "이벤트 설정 아이콘",
                src: (__webpack_require__(10017)/* ["default"] */.Z) + "",
                width: "24",
                height: "24"
              }), " 이벤트 설정 선택 시 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_eventSettingV2",
                className: "uitext"
              }), " ", (0,jsx_runtime.jsx)("code", {
                class: "newfunc",
                children: "New"
              }), " 메뉴로 이동하도록 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "postgresql",
          children: "PostgreSQL"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_reportStat",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbSqlStat",
            className: "uitext"
          }), " 메뉴에서 빈 쿼리가 조회되는 문제 수정"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "이 수정 사항은 DBX 에이전트 1.6.7 버전 이상에서 지원합니다."
          })
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "oracle-oracle-pro-1",
          children: "Oracle, Oracle Pro"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbSqlAnalysis",
                className: "uitext"
              }), " 메뉴의 ", (0,jsx_runtime.jsx)(UI, {
                children: "Plan Change History"
              }), " 탭에서 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "sql_id"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "sql_hash_value"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PLAN_HASH_VALUE"
              }), "로 검색할 수 있는 필터 기능 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbSqlAnalysis",
                className: "uitext"
              }), " 메뉴의 ", (0,jsx_runtime.jsx)(UI, {
                children: "Plan Change History"
              }), " 탭에서 Plan Diff 확인 시 새 창으로 보기 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbSqlAnalysis",
                className: "uitext"
              }), " 메뉴의 ", (0,jsx_runtime.jsx)(UI, {
                children: "Plan Change History"
              }), " 탭에서 시간 간 발생한 데이터가 명확히 구분되도록 차트 수정"]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "preview-2110a2",
        children: "Preview 2.11.0.a2"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "2024년 11월 07일"
      }), (0,jsx_runtime.jsxs)("div", {
        class: "indentTab",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "공통-3",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "공통"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " 사이드 메뉴의 통합 검색 중 ", (0,jsx_runtime.jsx)(UI, {
                children: "Agent/IP"
              }), " 검색 시 비활성 에이전트 검색 기능 제공"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL07402",
                className: "uitext"
              }), " 화면에서 ", (0,jsx_runtime.jsx)(LinkImage, {
                img: "ic-setting.svg",
                desc: "설정 아이콘"
              }), " 설정 드롭다운 메뉴 내 마우스 호버 스타일 추가 제공"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_event",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_eventHistory",
                className: "uitext"
              }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "exclude_resolved_alerts",
                className: "uitext"
              }), " 기능 제공"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_myUsage",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_paymentInformation",
                className: "uitext"
              }), " 메뉴에서 AWS 재구독 기능 제공"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " 서비스 공지 진입 시 헤더 타이틀을 기존 ", (0,jsx_runtime.jsx)("b", {
                children: "공지사항"
              }), "에서 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06766",
                className: "uitext"
              }), "로 변경"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_metricsChart",
                className: "uitext"
              }), " ", (0,jsx_runtime.jsx)("code", {
                className: "newfunc",
                children: "New"
              }), " 메뉴에서 위젯의 데이터 표시 형식을 소수점 둘째 자리까지 표시하도록 개선"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_reportStat",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbSqlStat",
                className: "uitext"
              }), " 메뉴에서 불필요한 가로 스크롤이 나타나는 현상 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_event",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_eventSetting",
                className: "uitext"
              }), " 메뉴에서 메트릭스 이벤트 안내 문구 깨짐 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "application-1",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Application"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Java"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Node.js"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Python"
              }), " 상품의 애플리케이션 에이전트 설정값 중 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "encrypt_level"
              }), " 영문 안내 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_txSearch",
                className: "uitext"
              }), " 메뉴의 숫자 입력 폼(경과 시간, HTTP 호출 건수, SQL 건수, SQL 패치 건수)에 한 자리 숫자만 있을 경우 값을 삭제할 수 없는 현상 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "server-2",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Server"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_flexboard",
                className: "uitext"
              }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "server_disk"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "server_process"
              }), " 카테고리 내 필드를 사용하여 위젯을 생성할 경우 oname 태그가 id에 필수로 포함되지 않도록 변경"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_event",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_eventHistory",
                className: "uitext"
              }), " 메뉴 UI 변경"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_integratedRealtimeAlert",
                className: "uitext"
              }), "에서 이벤트 선택 시 이벤트 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL08422",
                className: "uitext"
              }), " 화면으로 이동하도록 변경"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "kubernetes-2",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Kubernetes"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_containerMap",
            className: "uitext"
          }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "metrics",
            className: "uitext"
          }), " 탭을 신규 메트릭스 대시보드로 변경"]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "시간 범위를 선택할 수 없도록 제한(10분 고정)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["컨테이너 뷰의 ", (0,jsx_runtime.jsx)(UI, {
                children: "Container CPU Total Usage"
              }), " 위젯과 Pod 뷰의 ", (0,jsx_runtime.jsx)(UI, {
                children: "CPU Total Usage"
              }), " 위젯은 cores에서 ", (0,jsx_runtime.jsx)("b", {
                children: "millicores"
              }), "로 변경"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "database-2",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Database"
          })
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "공통-4",
          children: "공통"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " 액티브 세션 연계 분석 화면의 ", (0,jsx_runtime.jsx)(UI, {
            children: "ThreadStat"
          }), " 값을 문자로 변경"]
        }), (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
            children: ["적용 플랫폼: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "MySQL"
            }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oracle"
            }), " ", (0,jsx_runtime.jsx)("code", {
              className: "my",
              children: "V2"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oracle Pro"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.h4, {
          id: "database-v1",
          children: ["Database ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbLockTree",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06224",
            className: "uitext"
          }), " 창 팝업 시 쿼리 텍스트가 보이지 않는 현상 수정"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "oracle-oracle-pro-2",
          children: "Oracle, Oracle Pro"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_multiInstance",
                className: "uitext"
              }), " 메뉴에 ", (0,jsx_runtime.jsx)(UI, {
                children: "Disk Usage"
              }), " 위젯 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_reportStat",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbSqlStat",
                className: "uitext"
              }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06224",
                className: "uitext"
              }), " 팝업 창의 ", (0,jsx_runtime.jsx)(UI, {
                children: "Runtime Plan"
              }), " 탭의 UI 변경"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_instanceList",
                className: "uitext"
              }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_multiInstance",
                className: "uitext"
              }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "session_detail",
                className: "uitext"
              }), " 창에서 세션이 종료되더라도 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "sid"
              }), "와 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "serial#"
              }), " 정보가 유지되도록 변경"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_instanceList",
                className: "uitext"
              }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_multiInstance",
                className: "uitext"
              }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "session_detail",
                className: "uitext"
              }), " 창의 ", (0,jsx_runtime.jsx)(UI, {
                children: "Session Info"
              }), "에 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "sql_hash_value"
              }), " 값 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_instanceList",
                className: "uitext"
              }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_multiInstance",
                className: "uitext"
              }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "session_detail",
                className: "uitext"
              }), " 창의 ", (0,jsx_runtime.jsx)(UI, {
                children: "Session Info"
              }), "에 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "command"
              }), " 값을 상태명으로 표시하도록 변경"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_reportStat",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbSqlStat",
                className: "uitext"
              }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06224",
                className: "uitext"
              }), " 팝업 창에서 플랜 조회 시 조회 범위를 변경"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "browser-1",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Browser"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "my_usage",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_adminMetering",
                className: "uitext"
              }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "billingPreview",
                className: "uitext"
              }), "에서 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL08103",
                className: "uitext"
              }), " 과금 표시"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_event",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_eventSetting",
                className: "uitext"
              }), " 메뉴에 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL08559",
                className: "uitext"
              }), " 알림 설정 추가"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "log-1",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Log"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " 로그 필터 즐겨찾기 제한 개수 10개에서 50개로 변경"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_logSetting",
                className: "uitext"
              }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "getting_started_log_monitoring",
                className: "uitext"
              }), "  탭 디자인 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "log_long_term_keep_statistic",
                className: "uitext"
              }), " 수정 화면의 태그 사이 간격 변경"]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "preview-2110a1",
        children: "Preview 2.11.0.a1"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "2024년 10월 31일"
      }), (0,jsx_runtime.jsxs)("div", {
        class: "indentTab",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "공통-5",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "공통"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_event",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_eventSetting",
                className: "uitext"
              }), " ", (0,jsx_runtime.jsx)("code", {
                className: "newfunc",
                children: "New"
              }), " 메뉴의 테이블 목록에 순번(No) 컬럼 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Feature"
              }), " 와탭 사용자 교육 신청서(구글폼)에 대한 다국어 지원 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_event",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_eventSetting",
                className: "uitext"
              }), " 메뉴에서 검색된 결과대로 이벤트 설정 목록을 JSON 내보내기(export)하도록 변경"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_event",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_eventSetting",
                className: "uitext"
              }), " ", (0,jsx_runtime.jsx)("code", {
                className: "newfunc",
                children: "New"
              }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN07761",
                className: "uitext"
              }), " 기능을 이용할 때, ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "overwrite",
                className: "uitext"
              }), " 버튼을 클릭해도 확인 창이 나타나지 않는 문제 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_integratedFlexboard",
                className: "uitext"
              }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_flexboard",
                className: "uitext"
              }), " 메뉴에서 대시보드가 반응형 레이아웃인 경우, 인쇄 모드에서 위젯이 표시되지 않는 문제 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_integratedFlexboard",
                className: "uitext"
              }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_flexboard",
                className: "uitext"
              }), " 메뉴에서 일부 환경에 따라 PDF 파일을 다운로드할 때 비정상적으로 그려지는 문제 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " 페이지네이션 UI에서 선택 상자(Select box) 요소의 다크 테마 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "application-2",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Application"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_multi_server_tx_trace",
                className: "uitext"
              }), " 메뉴에서 다음 상황에 ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "검색 아이콘",
                src: (__webpack_require__(60396)/* ["default"] */.Z) + "",
                width: "35",
                height: "29"
              }), " 버튼을 비활성화하는 기능 추가"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "이전 검색과 동일한 필터값(MTID/CUSTID, 시간, 선택한 프로젝트)을 설정한 경우"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "필터값(MTID/CUSTID, 시간, 선택한 프로젝트) 중 하나라도 입력을 하지 않은 경우"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_multi_server_tx_trace",
                className: "uitext"
              }), " 메뉴에서 프로젝트 이름이 실제 프로젝트 이름과 다르게 보이는 문제 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), " 창의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06126",
                className: "uitext"
              }), " 탭에서 SQL 스텝의 높이가 실제 영역보다 크게 출력되는 문제 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_multi_server_tx_trace",
                className: "uitext"
              }), " 메뉴에서 선택한 프로젝트가 검색에 반영이 되지 않는 문제 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Java"
              }), " 플랫폼의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_management",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_agentSetting",
                className: "uitext"
              }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "sigar_enabled"
              }), " 옵션의 기본값을 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "true"
              }), "에서 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "false"
              }), "로 변경"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "kubernetes-3",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Kubernetes"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_cluster",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_ingressList",
                className: "uitext"
              }), " 메뉴에서 쿠버네티스 에이전트 버전이 1.7.13 미만일 때 에이전트 업데이트 안내 화면 표시"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_cluster",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_nodeTimeline",
                className: "uitext"
              }), " 메뉴에서 최소 선택할 수 있는 시간 단위를 5분으로 고정하도록 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "sitemap",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_instanceTopology",
                className: "uitext"
              }), " 메뉴에서 컨텍스트 메뉴의 링크가 동작하지 않는 문제 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " 네임스페이스 프로젝트에서 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_containerMap",
                className: "uitext"
              }), " 메뉴에서 컨테이너의 Stdout/Stderr 로그가 표시되지 않는 문제 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "database-3",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Database"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_event",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_eventHistory",
                className: "uitext"
              }), " 메뉴에서 이벤트 이름을 선택하면 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbMonitoring",
                className: "uitext"
              }), " 메뉴로 이동하는 기능 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " 실시간 알림에서 발생한 이벤트를 선택하면 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbMonitoring",
                className: "uitext"
              }), " 메뉴로 이동하고, 이벤트 발생 시각을 기준으로 데이터를 조회하도록 수정"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbTrendComparison",
                className: "uitext"
              }), " 메뉴에서 다음 사항을 수정"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "기존 날짜와 비교 날짜 간의 차트 색상을 다르게 표시하도록 수정"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "기존 시간이 표시되는 툴팁에 날짜를 표시하지 않도록 수정"
                }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["예, 기존: ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "2024-10-29 18:38:29"
                    }), " / 현재: ", (0,jsx_runtime.jsx)(_components.em, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "Compare Time: 18:38:29"
                      })
                    })]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "툴팁에 지표와 함께 날짜를 표시하도록 수정"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["예, 기존: ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Innodb_buffer_pool_read_requests"
                  }), " / 현재: ", (0,jsx_runtime.jsx)(_components.em, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "Innodb_buffer_pool_read_requests (2024-10-29)"
                    })
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " 다음 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "active_sessions",
                className: "uitext"
              }), " 테이블에서 ", (0,jsx_runtime.jsx)(UI, {
                children: "elapse"
              }), " 컬럼 제거"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "side_dashboard",
                    className: "uitext"
                  }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                    sid: "side_dbMonitoring",
                    className: "uitext"
                  })]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "side_dashboard",
                    className: "uitext"
                  }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                    sid: "side_multiInstance",
                    className: "uitext"
                  })]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "side_analysis",
                    className: "uitext"
                  }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                    sid: "side_dbTrendComparison",
                    className: "uitext"
                  })]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "side_analysis",
                    className: "uitext"
                  }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                    sid: "side_dbWaitAnalysis",
                    className: "uitext"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["적용 플랫폼: ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "PostgreSQL"
                }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Oracle"
                }), " ", (0,jsx_runtime.jsx)("code", {
                  className: "my",
                  children: "V2"
                }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Oracle Pro"
                })]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " Redis, MongoDB 플랫폼의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_lab",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbScriptManager",
                className: "uitext"
              }), " 메뉴를 숨김 처리"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "log-2",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Log"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " 로그 보관 기간 설정 시 변경된 값이 없을 경우 저장 버튼 비활성화 되도록 수정"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "preview-2110a0",
        children: "Preview 2.11.0.a0"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "2024년 10월 25일"
      }), (0,jsx_runtime.jsxs)("div", {
        class: "indentTab",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "application-3",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Application"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), " 창의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06126",
            className: "uitext"
          }), " 탭에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "active_stack",
            className: "uitext"
          }), " 버튼을 선택하면 발생하는 화이트 아웃 현상 수정"]
        })]
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
"60396": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg==");

}),
"10017": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyNnB4O2hlaWdodDogMjZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZXZlbnQ8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjguMDAwMDAwLCAtMjM5MS4wMDAwMDApIiBmaWxsPSIjNzk3OTc5Ij4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtZXZlbnQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgNDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDEuMDAwMDAwKSIgaWQ9IkNvbWJpbmVkLVNoYXBlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcsMTkgTDEzLDE5IEMxMywyMC42NTY4NTQyIDExLjY1Njg1NDIsMjIgMTAsMjIgQzguNDAyMzE5MTIsMjIgNy4wOTYzMzkxMiwyMC43NTEwOCA3LjAwNTA5MjY5LDE5LjE3NjI3MjggTDcsMTkgTDEzLDE5IFogTTEwLDAgQzExLjEwNDU2OTUsMCAxMiwwLjg5NTQzMDUgMTIsMiBDMTIsMi4wOTY5NzY1MyAxMS45OTMwOTc5LDIuMTkyMzQwOTkgMTEuOTc5NzU4MiwyLjI4NTYyODk1IEMxNC44ODE4MDcyLDMuMTM4MTQ1MzcgMTcsNS44MjE3MDc0NyAxNyw5IEwxNywxNSBMMTksMTUgQzE5LjU1MjI4NDcsMTUgMjAsMTUuNDQ3NzE1MyAyMCwxNiBDMjAsMTYuNTUyMjg0NyAxOS41NTIyODQ3LDE3IDE5LDE3IEwxLDE3IEMwLjQ0NzcxNTI1LDE3IDYuNzYzNTM3NTFlLTE3LDE2LjU1MjI4NDcgMCwxNiBDLTYuNzYzNTM3NTFlLTE3LDE1LjQ0NzcxNTMgMC40NDc3MTUyNSwxNSAxLDE1IEwzLDE1IEwzLDkgTDMuMDA0MDU5MDIsOC43NTkzNTAyNSBDMy4xMDc4NTc5NSw1LjY4Njg3MzI3IDUuMTkxNzI1NDIsMy4xMTY1MDAwNCA4LjAxOTkwNDkxLDIuMjgzOTg3MDYgQzguMDA2OTAyMDYsMi4xOTIzNDA5OSA4LDIuMDk2OTc2NTMgOCwyIEM4LDAuODk1NDMwNSA4Ljg5NTQzMDUsMCAxMCwwIFogTTEwLDQgQzcuMzAyODE1OCw0IDUuMDkzNjkxMTksNi4xMzk5ODcwNyA1LjAwMzc3NDU5LDguNzkzMDc5MjggTDUsOSBMNSwxNSBMMTUsMTUgTDE1LDkgQzE1LDYuMjM4NTc2MjUgMTIuNzYxNDIzNyw0IDEwLDQgWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

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