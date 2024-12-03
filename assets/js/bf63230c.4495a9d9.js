"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["70851"], {
"82427": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_npm_metrics_npm_mdx_bf6_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-npm-metrics-npm-mdx-bf6.json
var site_docs_npm_metrics_npm_mdx_bf6_namespaceObject = JSON.parse('{"id":"npm/metrics-npm","title":"네트워크 성능 지표","description":"네트워크 성능 지표를 안내합니다.","source":"@site/docs/npm/metrics-npm.mdx","sourceDirName":"npm","slug":"/npm/metrics-npm","permalink":"/npm/metrics-npm","draft":false,"unlisted":false,"editUrl":"undefined/docs/npm/metrics-npm.mdx","tags":[],"version":"current","frontMatter":{"id":"metrics-npm","title":"네트워크 성능 지표","description":"네트워크 성능 지표를 안내합니다.","keywords":["네트워크 성능 모니터링","메트릭스","UI"],"toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"npmsidebar","previous":{"title":"메트릭스","permalink":"/npm/metrics-intro"},"next":{"title":"메트릭스 조회","permalink":"/npm/metrics-search"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/npm/metrics-npm.mdx


const frontMatter = {
	id: 'metrics-npm',
	title: '네트워크 성능 지표',
	description: '네트워크 성능 지표를 안내합니다.',
	keywords: [
		'네트워크 성능 모니터링',
		'메트릭스',
		'UI'
	],
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "npm_process_tag_data",
  "id": "npm_process_tag_data",
  "level": 2
}, {
  "value": "npm_process_tag_list",
  "id": "npm_process_tag_list",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
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
  }, {Cmdname, Link} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Link) _missingMdxReference("Link", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["네트워크 성능 모니터링에서 수집하고 있는 메트릭스 지표에 대한 설명입니다. ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "sitemap",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "tag_count",
        className: "uitext"
      }), " 메뉴에서 검색할 수 있습니다. 네트워크 성능 지표는 모든 정보를 필드(Field)에 폴딩된 형태로 제공합니다."]
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      className: "metricslist",
      children: [(0,jsx_runtime.jsxs)(_components.section, {
        className: "remark-sectionize-h2",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "npm_process_tag_data",
          children: "npm_process_tag_data"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "세션 별 네트워크 통신 지표를 의미합니다. 수집 간격은 1분입니다."
        }), (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "필드 이름"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "단위"
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
                  children: "app_name"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 주체에 대한 커스텀 식별 태그"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["기본값", (0,jsx_runtime.jsx)("br", {}), "- 단일 리눅스 서버 환경: 호스트 이름", (0,jsx_runtime.jsx)("br", {}), "- 쿠버네티스 컨테이너 환경: Pod 이름"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "avg_jitter"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "ms"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "패킷 왕복 지연 시간 변동 값의 평균"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "수집 간격 동안의 평균 jitter"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "avg_latency"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "ms"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "패킷 왕복 지연 시간의 평균"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "수집 간격 동안의 평균 latency"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "container_name"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "쿠버네티스 환경에서 수집된 컨테이너의 이름"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "쿠버네티스 환경이 아니면 빈값"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "direction"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "세션의 연결 방향"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "IN"
                }), "(Inbound), ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "OUT"
                }), "(Outbound)"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_container_id"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "쿠버네티스 컨테이너 내에 로컬 통신인 경우에 해당 컨테이너의 id"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "로컬 통신인 경우, IP 주소, 포트 번호로는 대상을 알 수 없어 정확한 대상을 찾기 위해 추가 정보 제공"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_ip"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 대상의 IP 주소"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_pod_id"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "쿠버네티스 Pod 내에 로컬 통신인 경우 해당 Pod의 id"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "로컬 통신인 경우, IP 주소, 포트 번호로는 대상을 알 수 없어 정확한 대상을 찾기 위해 추가 정보 제공"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_port"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 대상의 포트 번호"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Client Port(Inbound - ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_port"
                }), ")는 0으로 데이터가 병합되어 표기"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "host_tag"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 주체의 호스트 이름"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "local_ip"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 주체의 IP 주소"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "local_port"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 주체의 포트 번호"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Client Port(Outbound - ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "local_port"
                }), ")는 0으로 데이터가 병합되어 표기"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "lost_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "count"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 패킷의 수량"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "max_jitter"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "ms"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "패킷 왕복 지연 시간 변동 값의 최댓값"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "일정 주기 동안 수집된 jitter 중 최댓값"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "max_latency"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "ms"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "패킷 왕복 지연 시간의 최댓값"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "일정 주기 동안 수집된 latency 중 최댓값"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "min_jitter"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "ms"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "패킷 왕복 지연 시간 변동 값의 최솟값"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "일정 주기 동안 수집된 jitter 중 최솟값"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "min_latency"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "ms"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "패킷 왕복 지연 시간의 최솟값"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "일정 주기 동안 수집된 latency 중 최솟값"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "pod_name"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 주체가 쿠버네티스 환경이면 Pod 이름"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "쿠버네티스 환경이 아니면 빈값"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "process_type"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신을 수행한 프로세스의 종류"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "protocol"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 프로토콜 종류"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TCP / UDP"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "recv_packet_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "count"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "수신한 패킷의 수량"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "recv_packet_size"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "byte"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "수신한 패킷의 데이터 크기"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "retransmission_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "count"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "재전송이 일어난 패킷 수량"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "row_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "count"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "중복을 포함한 세션 개수"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "send_packet_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "count"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "송신한 패킷의 수량"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "send_packet_size"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "byte"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "송신한 패킷의 전체 크기"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "session_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "count"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "중복을 제외한 세션 개수"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["유니크 세션의 수는 단순 합산이 아닌 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "HyperLogLog"
                }), (0,jsx_runtime.jsx)("sup", {
                  children: (0,jsx_runtime.jsx)(Link, {
                    to: "#hyperloglog",
                    children: "(1)"
                  })
                }), "로 산출"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "session_count_lobits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["유니크 세션 계산을 위한 bit 정보(", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "HyperLogLog"
                }), ")"]
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["통계 처리를 위한 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "HyperLogLog"
                }), " 관련 정보입니다."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "tot_jitter"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "ms"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "패킷 왕복 지연 시간 변동 값의 합산 값"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "tot_latency"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "ms"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "패킷 왕복 지연 시간의 합산 값"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            })]
          })]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("a", {
              name: "hyperloglog",
              children: "(1)"
            }), ": ", (0,jsx_runtime.jsx)("b", {
              children: "HyperLogLog"
            }), "는 매우 적은 메모리로 집합의 원소 개수를 추정하는 확률적 자료 구조를 의미합니다."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.section, {
        className: "remark-sectionize-h2",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "npm_process_tag_list",
          children: "npm_process_tag_list"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "세션의 Foreign 영역 태깅 처리를 위한 내부 데이터입니다."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "세션 별 태그 목록"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "수집 주기: 1분"
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "필드 이름"
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
                  children: "foreign_app_name"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 대상의 커스텀 식별 값"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["기본값", (0,jsx_runtime.jsx)("br", {}), "- 단일 리눅스 서버 환경: 호스트 이름", (0,jsx_runtime.jsx)("br", {}), "- 쿠버네티스 컨테이너 환경: Pod 이름"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_container_id"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "쿠버네티스 컨테이너 내에 로컬 통신인 경우에 해당 컨테이너의 id"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_container_name"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 대상이 쿠버네티스 환경이면 컨테이너 이름"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_host_tag"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 대상의 호스트 이름"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_ip"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 대상의 IP 주소"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_pod_id"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "쿠버네티스 Pod 내에 로컬 통신인 경우 해당 Pod의 id"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_pod_name"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 대상이 쿠버네티스 환경이면 Pod 이름"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_port"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 대상의 포트 번호"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "foreign_process_type"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "통신 대상의 프로세스 이름"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["식별이 안되면 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "untagged"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "local_inbound_check"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "내부망에서 발생한 Inbound 통신 여부 확인"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            })]
          })]
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