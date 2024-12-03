"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["73858"], {
"42322": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kubernetes_agent_troubleshooting_mdx_f6a_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kubernetes-agent-troubleshooting-mdx-f6a.json
var site_docs_kubernetes_agent_troubleshooting_mdx_f6a_namespaceObject = JSON.parse('{"id":"kubernetes/agent-troubleshooting","title":"에이전트 문제 해결","description":"에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.","source":"@site/docs/kubernetes/agent-troubleshooting.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/agent-troubleshooting","permalink":"/kubernetes/agent-troubleshooting","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/agent-troubleshooting.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-troubleshooting","title":"에이전트 문제 해결","description":"에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.","toc_max_heading_level":2,"keywords":["쿠버네티스","쿠버네티스 모니터링","Troubleshooting","문제 해결","에이전트 문제"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"네임스페이스 프로젝트 만들기","permalink":"/kubernetes/create-name-space-project"},"next":{"title":"설정하기","permalink":"/kubernetes/set-agent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/kubernetes/agent-troubleshooting.mdx


const frontMatter = {
	id: 'agent-troubleshooting',
	title: '에이전트 문제 해결',
	description: '에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.',
	toc_max_heading_level: 2,
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'Troubleshooting',
		'문제 해결',
		'에이전트 문제'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*다음 단계를 통해 와탭 쿠버네티스 모니터링을 재설치하세요.*/
/*사용자 쿠버네티스 환경에 따라 내부 Cgroups의 영향으로 컨테이너 ID를 확보하지 못하는 경우가 발생할 수 있습니다. 와탭은 이러한 상황에 대응하기 위해 쿠버네티스 모니터링의 컨테이너와 애플리케이션간 매핑 매커니즘을 변경하였습니다. 해당 변경 사항의 경우 쿠버네티스 에이전트 1.7.7 및 자바 에이전트 2.2.33 버전부터 적용되었습니다.*/


const toc = [{
  "value": "Helm 차트 기준 설치 문제 해결",
  "id": "troubleshooting-helm-chart",
  "level": 2
}, {
  "value": "이름이 <code>whatap</code> 다른 Helm 리포지토리가 있을 경우",
  "id": "이름이-whatap-다른-helm-리포지토리가-있을-경우",
  "level": 3
}, {
  "value": "이름이 <code>whatap-monitoring</code>인 다른 네임스페이스가 클러스터에 있을 경우",
  "id": "이름이-whatap-monitoring인-다른-네임스페이스가-클러스터에-있을-경우",
  "level": 3
}, {
  "value": "<code>clusterrole</code>, <code>clusterrolebinding</code> 리소스가 이미 클러스터에 있을 경우",
  "id": "clusterrole-clusterrolebinding-리소스가-이미-클러스터에-있을-경우",
  "level": 3
}, {
  "value": "<code>whatap-monitoring</code> 네임스페이스를 사용할 수 없는 경우",
  "id": "whatap-monitoring-namespace-unavailable",
  "level": 3
}, {
  "value": "사전 준비",
  "id": "사전-준비",
  "level": 4
}, {
  "value": "설치 과정",
  "id": "설치-과정",
  "level": 4
}, {
  "value": "업데이트 및 삭제",
  "id": "업데이트-및-삭제",
  "level": 4
}, {
  "value": "에이전트 기동 시 발생하는 문제 해결",
  "id": "troubleshooting-agent",
  "level": 2
}, {
  "value": "구형 YAML 파일을 통해 와탭 쿠버네티스 모니터링 설치한 경우",
  "id": "구형-yaml-파일을-통해-와탭-쿠버네티스-모니터링-설치한-경우",
  "level": 3
}, {
  "value": "해결 방법",
  "id": "해결-방법",
  "level": 4
}, {
  "value": "애플리케이션 연동 문제 해결",
  "id": "troubleshooting-k8s-application",
  "level": 2
}, {
  "value": "컨테이너 맵에 Java 모니터링 데이터가 표시되지 않는 경우",
  "id": "컨테이너-맵에-java-모니터링-데이터가-표시되지-않는-경우",
  "level": 3
}, {
  "value": "해결 방법",
  "id": "해결-방법-1",
  "level": 4
}, {
  "value": "에이전트 업데이트",
  "id": "에이전트-업데이트",
  "level": 5
}, {
  "value": "추가 환경변수 설정",
  "id": "추가-환경변수-설정",
  "level": 5
}, {
  "value": "컨테이너와 APM 간 정상 매핑 확인 방법",
  "id": "컨테이너와-apm-간-정상-매핑-확인-방법",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    table: "table",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "troubleshooting-helm-chart",
        children: "Helm 차트 기준 설치 문제 해결"
      }), (0,jsx_runtime.jsxs)("div", {
        class: "faq",
        children: [(0,jsx_runtime.jsxs)(_components.h3, {
          id: "이름이-whatap-다른-helm-리포지토리가-있을-경우",
          children: ["이름이 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "whatap"
          }), " 다른 Helm 리포지토리가 있을 경우"]
        }), (0,jsx_runtime.jsx)(_components.table, {
          children: (0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsx)(_components.tr, {
              children: (0,jsx_runtime.jsx)(_components.th, {
                children: "\"whatap\" already exists with the same configuration, skipping"
              })
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이미 동일한 이름의 다른 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "whatap"
          }), " 리포지토리가 존재할 경우 다음 명령어를 통해 기존 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "whatap"
          }), " 리포지토리 삭제 후 설치를 진행하세요."]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "helm repo remove whatap\n"
          })
        }), (0,jsx_runtime.jsxs)(_components.h3, {
          id: "이름이-whatap-monitoring인-다른-네임스페이스가-클러스터에-있을-경우",
          children: ["이름이 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "whatap-monitoring"
          }), "인 다른 네임스페이스가 클러스터에 있을 경우"]
        }), (0,jsx_runtime.jsx)(_components.table, {
          children: (0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsx)(_components.tr, {
              children: (0,jsx_runtime.jsx)(_components.th, {
                children: "Error: INSTALLATION FAILED: Unable to continue with install: Namespace \"whatap-monitoring\" in namespace \"\" exists and cannot be imported into the current release"
              })
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["클러스터에 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "whatap-monitoring"
          }), " 네임스페이스가 존재한다면 사용자가 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "yaml"
          }), " 파일 기준으로 이미 와탭 쿠버네티스 에이전트를 설치했기 때문입니다. 이 경우 다음 명령어를 통해 기존 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "whatap-monitoring"
          }), " 네임스페이스 및 관련 리소스를 삭제하세요."]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "kubectl delete namespace whatap-monitoring\nkubectl delete clusterrolebinding whatap\nkubectl delete clusterrole whatap\n"
          })
        }), (0,jsx_runtime.jsxs)(_components.h3, {
          id: "clusterrole-clusterrolebinding-리소스가-이미-클러스터에-있을-경우",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "clusterrole"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "clusterrolebinding"
          }), " 리소스가 이미 클러스터에 있을 경우"]
        }), (0,jsx_runtime.jsx)(_components.table, {
          children: (0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsx)(_components.tr, {
              children: (0,jsx_runtime.jsx)(_components.th, {
                children: "Error: INSTALLATION FAILED: Unable to continue with install: ClusterRole \"whatap\" in namespace \"\" exists and cannot be imported into the current release"
              })
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["클러스터에 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "clusterrole"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "clusterrolebinding"
          }), " 리소스가 이미 존재할 경우 다음 명령어를 통해 해당 리소스를 삭제하세요."]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "kubectl delete clusterrolebinding whatap\nkubectl delete clusterrole whatap\n"
          })
        }), (0,jsx_runtime.jsxs)(_components.h3, {
          id: "whatap-monitoring-namespace-unavailable",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "whatap-monitoring"
          }), " 네임스페이스를 사용할 수 없는 경우"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본적으로 와탭 쿠버네티스 에이전트는 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "whatap-monitoring"
          }), " 네임스페이스에 설치됩니다. 그러나 해당 네임스페이스를 사용할 수 없거나 또는 사용자가 특정 네임스페이스를 지정해야 하는 경우, 다음 과정을 참고하여 원하는 네임스페이스에 에이전트 설치를 진행하세요."]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "사전-준비",
          children: "사전 준비"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "차트 버전"
              }), ": whatap/kube 1.7.11 이상"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "다음 명령어를 통해 차트 버전을 확인하세요."
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                children: "helm search repo whatap/kube --versions\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "1.7.11 버전 미만인 경우 다음 명령어를 통해 차트 버전을 업데이트하세요."
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                children: "helm repo update\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Helm 버전"
              }), ": Helm 3 이상"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "설치-과정",
          children: "설치 과정"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용하고자 하는 네임스페이스 이름을 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<namespace>"
          }), " 자리에 입력한 후 다음 명령어를 실행하여 에이전트를 설치하세요."]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "helm install whatap-kube-agent whatap/kube --create-namespace --namespace <namespace> --set namespaceOverrideEnabled=true --wait -f values.yaml\n"
          })
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "업데이트-및-삭제",
          children: "업데이트 및 삭제"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "업데이트"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "다음 명령어를 통해 에이전트를 업데이트하세요."
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                children: "helm update whatap-kube-agent whatap/kube --namespace <namespace> --wait\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "삭제"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "다음 명령어를 통해 에이전트를 삭제하세요."
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                children: "helm uninstall whatap-kube-agent whatap/kube --namespace <namespace>\n"
              })
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "troubleshooting-agent",
        children: "에이전트 기동 시 발생하는 문제 해결"
      }), (0,jsx_runtime.jsxs)("div", {
        class: "faq",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "구형-yaml-파일을-통해-와탭-쿠버네티스-모니터링-설치한-경우",
          children: "구형 YAML 파일을 통해 와탭 쿠버네티스 모니터링 설치한 경우"
        }), (0,jsx_runtime.jsx)(_components.table, {
          children: (0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsx)(_components.tr, {
              children: (0,jsx_runtime.jsxs)(_components.th, {
                children: ["Unrecognized VM option 'UseCGroupMemoryLimitForHeap'", (0,jsx_runtime.jsx)("br", {}), "Error: Could not create the Java Virtual Machine.", (0,jsx_runtime.jsx)("br", {}), "Error: A fatal exception has occurred. Program will exit."]
              })
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "2022년 8월 24일 이전"
          }), "에 다운로드한 설치 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "YAML"
          }), "을 통해 와탭 쿠버네티스 모니터링을 설치한 경우 노드 에이전트(whatap-node-agent) 기동 시 오류가 발생하며 기동에 실패하는 경우가 있습니다."]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원인은 다음과 같습니다. 2022년 8월 24일 이전에 다운로드한 설치 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "YAML"
          }), " 파일 내 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UseCGroupMemoryLimitForHeap"
          }), " JVM 옵션을 사용한 노드 에이전트 실행 스크립트가 포함되어 있습니다."]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["와탭 노드 에이전트 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1.2.0 이상"
          }), "(2022년 11월 21일 배포) 버전부터 에이전트 내부에서 사용하는 JDK가 업그레이드 되었으며 업그레이드된 JDK 버전은 더 이상 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UseCGroupMemoryLimitForHeap"
          }), " 옵션을 제공하지 않습니다. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2022년 8월 24일 이전"
          }), "에 다운로드한 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "YAML"
          }), " 파일로 와탭 쿠버네티스 모니터링을 설치한 상태로 노드 에이전트 1.2.0 이상 버전을 기동하는 경우 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Unrecognized VM option 'UseCGroupMemoryLimitForHeap’"
          }), " 메세지가 발생하며 기동에 실패하게 됩니다."]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "해결-방법",
          children: "해결 방법"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "이 문제를 해결하기 위해 다음과 같이 쿠버네티스 모니터링을 재설치하세요."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_management",
                className: "uitext"
              }), "  > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "agentInstall",
                className: "uitext"
              }), " 화면에서 최신 ", (0,jsx_runtime.jsx)(_components.em, {
                children: "YAML"
              }), " 파일을 다운로드하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["사용자 쿠버네티스 환경에서 다운로드한 ", (0,jsx_runtime.jsx)(_components.em, {
                children: "YAML"
              }), " 파일을 사용하여 에이전트를 설치하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 쿠버네티스 환경에서 설치 과정 중 오류 출력 여부를 확인하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "와탭 모니터링 에이전트 Pod가 Running 상태인지 확인하세요."
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "note",
              children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
                children: ["사용자 쿠버네티스 환경 및 ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "side_workload",
                  className: "uitext"
                }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "side_podList",
                  className: "uitext"
                }), " 메뉴에서 확인하세요."]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_management",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_kubernetesAgentList",
                className: "uitext"
              }), " 메뉴에서 각 모니터링 에이전트에서 발생하는 로그를 확인하세요."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "troubleshooting-k8s-application",
        children: "애플리케이션 연동 문제 해결"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "컨테이너-맵에-java-모니터링-데이터가-표시되지-않는-경우",
        children: "컨테이너 맵에 Java 모니터링 데이터가 표시되지 않는 경우"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["사용자 쿠버네티스 환경에서 Cgroups의 설정 및 관리 방식에 따라 특정 상황에서 컨테이너 ID를 확보하지 못하는 문제가 발생할 수 있습니다. 와탭은 이러한 상황에 대응하기 위해 쿠버네티스 모니터링의 컨테이너와 애플리케이션 간 매핑 메커니즘을 변경하였습니다. 해당 변경 사항의 경우 와탭 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "쿠버네티스 에이전트 1.7.7"
        }), " 버전과 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Java 에이전트 2.2.33"
        }), " 버전부터 적용되어 Cgroups 영향으로 컨테이너 ID가 누락되는 문제를 해결합니다."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h4",
      children: (0,jsx_runtime.jsx)(_components.h4, {
        id: "해결-방법-1",
        children: "해결 방법"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h5",
      children: [(0,jsx_runtime.jsx)(_components.h5, {
        id: "에이전트-업데이트",
        children: "에이전트 업데이트"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["쿠버네티스 환경에서 발생하는 컨테이너 ID 식별 문제를 해결하기 위해서는 와탭 쿠버네티스 에이전트와 APM이 서로 주고받는 데이터를 정확히 식별할 수 있도록 지원하는 최신 버전을 사용해야 합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "쿠버네티스 에이전트"
        }), "는 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1.7.7 버전 이상"
        }), "을 설치하고 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Java 에이전트"
        }), "는 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2.2.33 버전 이상"
        }), "을 설치하세요."]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
          children: "현재는 Java 에이전트만 지원하고 있으며 다른 언어의 APM은 추후 지원할 예정입니다."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h5",
      children: [(0,jsx_runtime.jsx)(_components.h5, {
        id: "추가-환경변수-설정",
        children: "추가 환경변수 설정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["에이전트 버전 업데이트 이후에도 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_containerMap",
          className: "uitext"
        }), "에 Java 애플리케이션 정보가 표시되지 않는 경우 사용자 환경변수를 추가하여 문제를 해결할 수 있습니다. 이 설정은 Java APM이 설치된 컨테이너 매니페스트(", (0,jsx_runtime.jsx)(_components.em, {
          children: "YAML"
        }), ")의 환경변수에 해당 컨테이너 내 Java 에이전트의 절대 경로를 나타내는 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHATAP_JAVA_AGENT_PATH"
        }), " 옵션을 추가합니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음은 Java APM이 설치된 컨테이너 환경변수에 해당 옵션을 추가한 예시입니다."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-YAML",
          children: "env:\n- name: NODE_IP\n  valueFrom: {fieldRef: {fieldPath: status.hostIP}}\n- name: NODE_NAME\n  valueFrom: {fieldRef: {fieldPath: spec.nodeName}}\n- name: POD_NAME\n  valueFrom: {fieldRef: {fieldPath: metadata.name}}\n- name: OKIND\n  value: {YOUR_OKIND_NAME}\n- name: license\n  value: <Project Access Key>\n- name: whatap.server.host\n  value: <수집서버 IP 주소>\n- name: whatap.micro.enabled\n  value: \"true\"\n- name: WHATAP_JAVA_AGENT_PATH\n  value: \"/whatap/whatap.agent-2.2.35.jar\"\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "컨테이너와-apm-간-정상-매핑-확인-방법",
        children: "컨테이너와 APM 간 정상 매핑 확인 방법"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "컨테이너와 애플리케이션이 정상 매핑되었는지 확인하는 방법은 다음과 같습니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_dashboard",
              className: "uitext"
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_containerMap",
              className: "uitext"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_containerMap",
              className: "uitext"
            }), " 블록 내부에 흰색 마이크로 컨테이너가 존재할 경우 정상적으로 매핑된 상태입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_analysis",
              className: "uitext"
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_metricsSearch",
              className: "uitext"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "app_counter"
            }), " 카테고리의 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "container"
            }), " 필드에 애플리케이션이 실행 중인 컨테이너 ID가 기록된 경우 정상적으로 매핑된 상태입니다."]
          }), "\n"]
        }), "\n"]
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