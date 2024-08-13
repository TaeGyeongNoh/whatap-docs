"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[23393],{

/***/ 55764:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28453);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74235);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15947);


const frontMatter = {
	id: 'install-master-node-agent-v2',
	title: 'マスターおよびノードエージェントのインストール',
	description: 'インストール手順のページに従って、マスターおよびノードエージェントのインストールプロセスを進めてください。',
	tags: [
		'Kubernetes',
		'Kubernetesモニタリング',
		'エージェント',
		'マスター',
		'ノード',
		'エージェントのインストール'
	],
	toc_max_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/install-master-node-agent-v2",
  "title": "マスターおよびノードエージェントのインストール",
  "description": "インストール手順のページに従って、マスターおよびノードエージェントのインストールプロセスを進めてください。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/kubernetes/install-master-node-agent-v2.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/install-master-node-agent-v2",
  "permalink": "/ja/kubernetes/install-master-node-agent-v2",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/install-master-node-agent-v2.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Kubernetes",
      "permalink": "/ja/tags/kubernetes"
    },
    {
      "inline": true,
      "label": "Kubernetesモニタリング",
      "permalink": "/ja/tags/kubernetesモニタリング"
    },
    {
      "inline": true,
      "label": "エージェント",
      "permalink": "/ja/tags/エージェント"
    },
    {
      "inline": true,
      "label": "マスター",
      "permalink": "/ja/tags/マスター"
    },
    {
      "inline": true,
      "label": "ノード",
      "permalink": "/ja/tags/ノード"
    },
    {
      "inline": true,
      "label": "エージェントのインストール",
      "permalink": "/ja/tags/エージェントのインストール"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "install-master-node-agent-v2",
    "title": "マスターおよびノードエージェントのインストール",
    "description": "インストール手順のページに従って、マスターおよびノードエージェントのインストールプロセスを進めてください。",
    "tags": [
      "Kubernetes",
      "Kubernetesモニタリング",
      "エージェント",
      "マスター",
      "ノード",
      "エージェントのインストール"
    ],
    "toc_max_heading_level": 2
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "エージェントのインストール",
    "permalink": "/ja/kubernetes/install"
  },
  "next": {
    "title": "管理 > アプリケーションエージェントのインストール",
    "permalink": "/ja/kubernetes/install-application-agent"
  }
};
const assets = {

};





const toc = [{
  "value": "インストール方法の選択",
  "id": "インストール方法の選択",
  "level": 2
}, {
  "value": "追加機能の適用",
  "id": "追加機能の適用",
  "level": 2
}, {
  "value": "インストール ファイル ダウンロード",
  "id": "インストール-ファイル-ダウンロード",
  "level": 2
}, {
  "value": "実行コマンドの入力",
  "id": "実行コマンドの入力",
  "level": 2
}, {
  "value": "Kubernetes環境",
  "id": "kubernetes環境",
  "level": 3
}, {
  "value": "Kubernetesエージェント作成",
  "id": "create-kubernetes-agent",
  "level": 3
}, {
  "value": "Helmチャート基準のインストール",
  "id": "helmチャート基準のインストール",
  "level": 4
}, {
  "value": "<em>values.yaml</em>の主な設定項目",
  "id": "valuesyamlの主な設定項目",
  "level": 4
}, {
  "value": "Yamlファイル基準インストール",
  "id": "yamlファイル基準インストール",
  "level": 4
}, {
  "value": "エージェントのインストール確認",
  "id": "check-kubernetes-agent",
  "level": 2
}, {
  "value": "Running状態の場合",
  "id": "running状態の場合",
  "level": 4
}, {
  "value": "Running状態でない場合",
  "id": "running状態でない場合",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["次のように、マスター及びノードエージェントのインストール過程を案内します。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "インストール案内"
        })
      }), "画面と同じプロセスです。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "EKS Fargateは、対応予定です。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "インストール方法の選択",
        children: "インストール方法の選択"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["アクセスキー確認後、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "インストールの案内"
          })
        }), "画面で", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "インストール方法の選択"
          })
        }), "タブを選択してください。 WhaTap Kubernetesエージェントがサポートする", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Helm"
        }), "チャートと", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Yaml"
        }), "インストール方法の中から希望するインストール方法を選択し、ユーザーのKubernetes環境に合わせて適切な項目を選択してください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-install-master-node-method.png",
        desc: "インストール方式の選択"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Helm"
              })
            }), "チャートと", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Yaml"
              })
            }), "の中から希望する", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "インストール方法"
            }), "を選択してください。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "1.16以降"
              })
            }), "バージョンまたは", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "1.16未満"
              })
            }), "バージョンの中で該当する", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Kubernetesバージョン"
            }), "を選択してください。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "containerd"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Docker Engine"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "CRI-O"
              })
            }), "の中、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "コンテナランタイム"
            }), "を選択してください。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "ユーザーKubernetes環境"
            }), "(GKE, OpenShift, Istio, GPU Cluster) の中、該当する項目がある場合は選択してください。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["インストール方法に関する項目を選択した後、画面右下の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "次"
              })
            }), "ボタンをクリックするか、左の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "追加機能の適用"
              })
            }), "タブを選択して次のステップへ移動してください。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "追加機能の適用",
        children: "追加機能の適用"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["WhaTap Kubernetesモニタリングは、現在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "コントロールプレーンモニタリング"
        }), "を追加機能として提供します。 追加機能の適用を希望する場合、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Control Plane"
          })
        }), "チェックボックスを選択してください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-install-master-node-addition.png",
        desc: "追加機能の適用"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "追加適用された機能が多いほど、収集されるデータの量とエージェントが使用するリソースの量が増加する可能性があります。 インストール後、エージェント設定により、その機能をアクティブまたは非アクティブにすることができます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["追加機能を適用するかどうかを選択した後、画面右下の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "次"
          })
        }), "ボタンをクリックするか、左の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "インストールファイルのダウンロード"
          })
        }), "タブを選択して次のステップへ移動してください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "コントロールプレーンモニタリング"
          }), "についての詳細は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://docs.whatap.io/kubernetes/kube-apiserver-dashboard",
            children: "次の文書"
          }), "を参照してください。"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "インストール-ファイル-ダウンロード",
        children: "インストール ファイル ダウンロード"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["インストールファイルをダウンロードする前に、ユーザーKubernetes環境に適した項目\nが選択されていることを確認してください。 選択項目を確認した後、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "インストールファイルのダウンロード"
          })
        }), "ボタンをクリックしてインストールに必要なデフォルト設定ファイル(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "values.yaml"
        }), ")をダウンロードしてください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-install-master-node-download.png",
        desc: "インストールファイルのダウンロード"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["ダウンロード後、画面右下の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "次"
          })
        }), "ボタンをクリックするか、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "実行コマンドの入力"
          })
        }), "タブを選択して次のステップへ移動してください。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "実行コマンドの入力",
        children: "実行コマンドの入力"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "インストール方法の選択"
          })
        }), "タブで選択した環境とインストール方法の案内に沿って、実行コマンドを入力してインストールを進めてください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-install-master-node-command.png",
        desc: "実行コマンドの入力"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "kubernetes環境",
        children: "Kubernetes環境"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "インストール方法の選択"
          })
        }), "タブで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "GKE"
        }), "または", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "OpenShift"
        }), "環境を選択した場合は、次のガイドを参照してください。 該当しない場合は、次の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "#create-kubernetes-agent",
          children: "Kubernetesエージェントの生成"
        }), " ステップに進んでください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
          value: "gke",
          label: "GKE環境",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "インストール方法の選択"
              })
            }), "タブで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Google Kubernetes Engine"
            }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "GKE"
            }), ") 環境を選択した場合は、ユーザークラスターを作成した後、権限設定のために次のコマンドを実行してください。"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "ACCOUNT=$(gcloud info --format='value(config.account)')\nkubectl create clusterrolebinding owner-cluster-admin-binding \\\n  --clusterrole cluster-admin \\\n  --user $ACCOUNT\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["gcloudコマンドのインストールの詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://cloud.google.com/sdk/docs/install",
                children: "グーグルクラウド文書"
              }), "を参照してください。"]
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
          value: "openshift",
          label: "OpenShift環境",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "インストール方法の選択"
              })
            }), "タブで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "OpenShift"
            }), "環境を選択した場合は、権限設定のために次のコマンドを実行してください。"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "oc create -f whatap_openshift_scc.yaml\n"
            })
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "create-kubernetes-agent",
        children: "Kubernetesエージェント作成"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["WhaTap Kubernetesエージェントのインストール時、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Helm"
        }), "チャート基準のインストール方法案内と", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Yaml"
        }), "ファイル基準のインストール方法案内を次のように提供します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
          value: "helm",
          label: "Helm Chart",
          default: true,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
            id: "helmチャート基準のインストール",
            children: "Helmチャート基準のインストール"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "インストール方法の選択"
              })
            }), "タブで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Helm"
              })
            }), "チャートのインストール方法を選択した場合は、次のガイドを参照してください。"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["次のコマンドを通じて", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: "helm"
                }), "バージョンを確認してください。 3.xバージョン以降をサポートします。"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  className: "language-bash",
                  children: "helm Version\n\n# 出力例\n# version.BuildInfo{Version:\"v3.x\", GitCommit:\"xxx\", GitTreeState:\"clean\", GoVersion:\"go1.20.8\"}\n"
                })
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "WhaTap Helmリポジトリに対するネットワーク接続状態を確認してください。"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  className: "language-bash",
                  children: "curl https://whatap.github.io/helm/ping \n# 出力例 \n# pong\n"
                })
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "次のコマンドを実行して、WhaTap Helmリポジトリを追加します。"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  className: "language-bash",
                  children: "helm repo add whatap https://whatap.github.io/helm/\nhelm repo update\n"
                })
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "次のようにエージェントアプリケーションをインストールします。"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                  children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                    children: ["エージェントを", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                      children: "初めて"
                    }), "インストールするユーザーは、次のコマンドを実行してエージェントアプリケーションをインストールします。"]
                  }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      className: "language-bash",
                      children: "helm install whatap-kube-agent whatap/kube -f values.yaml\n"
                    })
                  }), "\n"]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                  children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                      children: "既存"
                    }), "WhaTap Kubernetesエージェントのユーザーは、次のコマンドを実行してエージェントアプリケーションをインストールします。"]
                  }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      className: "language-bash",
                      children: "kubectl delete ns whatap-monitoring\nkubectl delete clusterrole whatap\nkubectl delete clusterrolebinding whatap\nhelm install whatap-kube-agent whatap/kube -f values.yaml\n"
                    })
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
                type: "note",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["既存 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "yaml"
                  }), " ファイル方式でWhaTap Kubernetesエージェントをインストールした場合、Clean Installが必要です。 既存のKubernetesエージェントを削除した後、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "helm"
                  }), " チャートによるインストールが可能です。"]
                })]
              }), "\n"]
            }), "\n"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
            id: "valuesyamlの主な設定項目",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "values.yaml"
            }), "の主な設定項目"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["WhaTap Kubernetesエージェントの設定を修正するには、デフォルト設定ファイル(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "values.yaml"
            }), ")を修正する必要があります。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "values.yaml"
            }), " ファイル内の主な設定項目を次のように案内します。"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            class: "k8s-values-yaml-table",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                    children: "キー"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                    children: "タイプ"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                    children: "既定値"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                    children: "説明"
                  })]
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "whatap.license"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "# <license-key>"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "Whatapライセンスキー"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "whatap.host"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "# <whatap-server-host>"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "Whatapサーバーのホストアドレス"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "whatap.port"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "Int"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "# <whatap-server-port>"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "Whatapポート番号"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "containerRuntime"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"docker\""
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                    children: ["使用中のコンテナランタイム。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"docker\""
                    }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"containerd\""
                    }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"crio\""
                    }), "のいずれかを選択"]
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.name"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "whatap-node-agent"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "DaemonSetの名前"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.label"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "whatap-node-agent"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "DaemonSetに指定するラベル"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.initContainers.nodeDebugger.enabled"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "Bool"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "true"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "Whatapノードデバッガコンテナの活性化有無"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeHelper.image"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "whatap/kube_mon"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "nodeHelperコンテナのイメージ"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeHelper.requests.memory"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "100Mi"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "nodeHelper MEMORY request"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeHelper.requests.cpu"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "100m"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "nodeHelper CPU request"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeHelper.limits.memory"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "350Mi"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "nodeHelper MEMORY limit"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeHelper.limits.cpu"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "200m"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "nodeHelper CPU limit"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeAgent.image"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "whatap/kube_mon"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "nodeAgentコンテナのイメージ"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeAgent.requests.memory"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "300Mi"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "nodeAgent MEMORY request"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeAgent.requests.cpu"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "100m"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "nodeAgent CPU request"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeAgent.limits.memory"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "350Mi"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "nodeAgent MEMORY limit"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeAgent.limits.cpu"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "200m"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "nodeAgent CPU limit"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.name"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "whatap-master-agent"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "Deploymentの名前"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.label"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "whatap-master-agent"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "Deploymentに指定するラベル"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.replicas"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "Int"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "1"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "Deploymentのreplica数"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.enabled"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "Boolean"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "true"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "whatap-control-plane-helperコンテナの活性化有無"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.image"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"whatap/kube_mon\""
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "controlPlaneHelperコンテナのイメージ"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.port"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "9496"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "controlPlaneHelperコンテナのポート番号"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.resources.requests.memory"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"300Mi\""
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "controlPlaneHelperコンテナMEMORY request"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.resources.requests.cpu"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"100m\""
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "controlPlaneHelperコンテナCPU request"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.resources.limits.memory"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"350Mi\""
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "controlPlaneHelperコンテナMEMORY limit"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.resources.limits.cpu"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"200m\""
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "controlPlaneHelperコンテナCPU limit"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.name"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "whatap-master-agent"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "masterAgentコンテナ名"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.image"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"whatap/kube_mon\""
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "masterAgentコンテナイメージ"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.port"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "Int"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "6600"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "masterAgentコンテナポート番号"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.resources.requests.memory"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"300Mi\""
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "masterAgentコンテナMEMORY request"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.resources.requests.cpu"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"100m\""
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "masterAgentコンテナCPU request"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.resources.limits.memory"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"350Mi\""
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "masterAgentコンテナMEMORY limit"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.resources.limits.cpu"
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "String"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      children: "\"200m\""
                    })
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                    children: "masterAgentコンテナCPU request"
                  })]
                })]
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["Helmチャート基準での", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "インストール問題の解決"
              }), "についての案内は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "agent-troubleshooting#troubleshooting-helm-chart",
                children: "次の文書"
              }), "を参照してください。"]
            })]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
          value: "yaml",
          label: "Yaml",
          default: true,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
            id: "yamlファイル基準インストール",
            children: "Yamlファイル基準インストール"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "インストール方法の選択"
              })
            }), "タブで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Yaml"
              })
            }), "ファイルのインストール方法を選択した場合は、エージェントを生成するために次のコマンドを実行してください。"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "kubectl apply -f whatap_kube_agent.yaml\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "マスターエージェントが使用するリソースの量"
              }), "は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "ユーザー環境のノード数"
              }), "にある程度", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "比例"
              }), "します。 つまり、クラスタ内にノード数が多い場合、既定値に設定されたメモリLimit(350MB)以上の資源を使ってOOM(Out Of Memory)が発生することがあります。 マスターエージェントに割り当てられたメモリLimit数値は、エージェントのインストール ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "YAML"
              }), " ファイルから変更できます。"]
            })
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "check-kubernetes-agent",
        children: "エージェントのインストール確認"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Kubernetesエージェントのインストールが正常に完了した場合、次のコマンドを実行してマスターエージェントとノードエージェントの状態を確認できます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "kubectl get pod -n whatap-monitoring\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "running状態の場合",
        children: "Running状態の場合"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["次のように", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "STATUS"
        }), "項目が", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Running"
        }), "である場合", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "インストールを完了した状態"
        }), "です。 マスター及びノードエージェントのインストールを完了すると、Kubernetes環境のリソースモニタリングを開始します。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io",
          children: "WhaTapモニタリングサービス"
        }), "に移動し、プロジェクトリスト", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "とダッシュボード"
          })
        }), " >", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "コンテナマップ"
          })
        }), "メニューから性能情報を収集することを確認してください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          src: (__webpack_require__(57163)/* ["default"] */ .A) + "",
          width: "771",
          height: "144"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "running状態でない場合",
        children: "Running状態でない場合"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["次のように", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "STATUS"
        }), "項目が", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Running"
        }), "でない場合、インストールが正しく行われていない状態です。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          src: (__webpack_require__(55730)/* ["default"] */ .A) + "",
          width: "771",
          height: "153"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "マスターノードで次のコマンドを実行し、Podの生成に失敗した原因を特定します。"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "kubectl describe pod {POD_NAME} -n whatap-monitoring\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["実行結果の下部の ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Events:"
            }), " 項目を確認してください。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              src: (__webpack_require__(96481)/* ["default"] */ .A) + "",
              width: "771",
              height: "524"
            })
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "tip",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "kubectl"
          }), "コマンドを使用する場合、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "-n {ネームスペース}"
          }), "オプションを使用すつと、特定のネームスペースを対象にタスクを実行します。 WhaTapエージェントは、基本的に", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "whatap-monitoring"
          }), "というネームスペースにインストールされるため、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "-n whatap-monitoring"
          }), "というオプションを追加します。"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["画面右下に", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: "モニタリング開始のご案内"
                })
              }), "ボタンを選択すると、WhaTap Kubernetesモニタリングの主要メニューに関する案内を確認することができます。 各主要メニューの案内下のボタンをクリックすると、そのメニューへ移動します。"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["アプリケーションエージェントのインストールを進めるには、メニューの画面右下の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: "追加モニタリングのインストール"
                })
              }), "ボタンを選択してください。 詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "install-application-agent",
                children: "次の文書"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["エージェントを最新バージョンにアップデートするには", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "agent-update",
                children: "次の文書"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n"]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
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

/***/ 15947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function TabItem({ children , hidden , className  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "tabpanel",
        className: (0,clsx/* default */.A)(styles_module.tabItem, className),
        hidden,
        children: children
    });
};


/***/ }),

/***/ 74235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(52204);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(13321);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(57641);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(73094);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__(57237);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp) {
    const { props  } = comp;
    return !!props && typeof props === 'object' && 'value' in props;
}
function sanitizeTabsChildren(children) {
    var ref;
    var ref1;
    return (ref1 = (ref = react.Children.toArray(children).filter((child)=>child !== '\n').map((child)=>{
        if (!child || /*#__PURE__*/ (0,react.isValidElement)(child) && isTabItem(child)) {
            return child;
        }
        // child.type.name will give non-sensical values in prod because of
        // minification, but we assume it won't throw in prod.
        throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
        typeof child.type === 'string' ? child.type : child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);
    })) === null || ref === void 0 ? void 0 : ref.filter(Boolean)) !== null && ref1 !== void 0 ? ref1 : [];
}
function extractChildrenTabValues(children) {
    return sanitizeTabsChildren(children).map(({ props: { value , label , attributes , default: isDefault  }  })=>({
            value,
            label,
            attributes,
            default: isDefault
        }));
}
function ensureNoDuplicateValue(values) {
    const dup = (0,jsUtils/* duplicates */.XI)(values, (a, b)=>a.value === b.value);
    if (dup.length > 0) {
        throw new Error(`Docusaurus error: Duplicate values "${dup.map((a)=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);
    }
}
function useTabValues(props) {
    const { values: valuesProp , children  } = props;
    return (0,react.useMemo)(()=>{
        const values = valuesProp !== null && valuesProp !== void 0 ? valuesProp : extractChildrenTabValues(children);
        ensureNoDuplicateValue(values);
        return values;
    }, [
        valuesProp,
        children
    ]);
}
function isValidValue({ value , tabValues ,  }) {
    return tabValues.some((a)=>a.value === value);
}
function getInitialStateValue({ defaultValue , tabValues ,  }) {
    if (tabValues.length === 0) {
        throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');
    }
    if (defaultValue) {
        // Warn user about passing incorrect defaultValue as prop.
        if (!isValidValue({
            value: defaultValue,
            tabValues
        })) {
            throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map((a)=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);
        }
        return defaultValue;
    }
    var ref;
    const defaultTabValue = (ref = tabValues.find((tabValue)=>tabValue.default)) !== null && ref !== void 0 ? ref : tabValues[0];
    if (!defaultTabValue) {
        throw new Error('Unexpected error: 0 tabValues');
    }
    return defaultTabValue.value;
}
function getStorageKey(groupId) {
    if (!groupId) {
        return null;
    }
    return `docusaurus.tab.${groupId}`;
}
function getQueryStringKey({ queryString =false , groupId ,  }) {
    if (typeof queryString === 'string') {
        return queryString;
    }
    if (queryString === false) {
        return null;
    }
    if (queryString === true && !groupId) {
        throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);
    }
    return groupId !== null && groupId !== void 0 ? groupId : null;
}
function useTabQueryString({ queryString =false , groupId ,  }) {
    const history = (0,react_router/* useHistory */.W6)();
    const key = getQueryStringKey({
        queryString,
        groupId
    });
    const value = (0,historyUtils/* useQueryStringValue */.aZ)(key);
    const setValue = (0,react.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        const searchParams = new URLSearchParams(history.location.search);
        searchParams.set(key, newValue);
        history.replace(_objectSpreadProps(_objectSpread({}, history.location), {
            search: searchParams.toString()
        }));
    }, [
        key,
        history
    ]);
    return [
        value,
        setValue
    ];
}
function useTabStorage({ groupId  }) {
    const key = getStorageKey(groupId);
    const [value, storageSlot] = (0,storageUtils/* useStorageSlot */.Dv)(key);
    const setValue = (0,react.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        storageSlot.set(newValue);
    }, [
        key,
        storageSlot
    ]);
    return [
        value,
        setValue
    ];
}
function useTabs(props) {
    const { defaultValue , queryString =false , groupId  } = props;
    const tabValues = useTabValues(props);
    const [selectedValue, setSelectedValue] = (0,react.useState)(()=>getInitialStateValue({
            defaultValue,
            tabValues
        }));
    const [queryStringValue, setQueryString] = useTabQueryString({
        queryString,
        groupId
    });
    const [storageValue, setStorageValue] = useTabStorage({
        groupId
    });
    // We sync valid querystring/storage value to state on change + hydration
    const valueToSync = (()=>{
        const value = queryStringValue !== null && queryStringValue !== void 0 ? queryStringValue : storageValue;
        if (!isValidValue({
            value,
            tabValues
        })) {
            return null;
        }
        return value;
    })();
    // Sync in a layout/sync effect is important, for useScrollPositionBlocker
    // See https://github.com/facebook/docusaurus/issues/8625
    (0,useIsomorphicLayoutEffect/* default */.A)(()=>{
        if (valueToSync) {
            setSelectedValue(valueToSync);
        }
    }, [
        valueToSync
    ]);
    const selectValue = (0,react.useCallback)((newValue)=>{
        if (!isValidValue({
            value: newValue,
            tabValues
        })) {
            throw new Error(`Can't select invalid tab value=${newValue}`);
        }
        setSelectedValue(newValue);
        setQueryString(newValue);
        setStorageValue(newValue);
    }, [
        setQueryString,
        setStorageValue,
        tabValues
    ]);
    return {
        selectedValue,
        selectValue,
        tabValues
    };
} //# sourceMappingURL=tabsUtils.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(12075);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
function Tabs_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function Tabs_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            Tabs_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function Tabs_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function Tabs_objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        Tabs_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TabList({ className , block , selectedValue , selectValue , tabValues  }) {
    const tabRefs = [];
    const { blockElementScrollPositionUntilNextRender  } = (0,scrollUtils/* useScrollPositionBlocker */.a_)();
    const handleTabChange = (event)=>{
        const newTab = event.currentTarget;
        const newTabIndex = tabRefs.indexOf(newTab);
        const newTabValue = tabValues[newTabIndex].value;
        if (newTabValue !== selectedValue) {
            blockElementScrollPositionUntilNextRender(newTab);
            selectValue(newTabValue);
        }
    };
    const handleKeydown = (event)=>{
        let focusElement = null;
        switch(event.key){
            case 'Enter':
                {
                    handleTabChange(event);
                    break;
                }
            case 'ArrowRight':
                {
                    const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
                    var _nextTab;
                    focusElement = (_nextTab = tabRefs[nextTab]) !== null && _nextTab !== void 0 ? _nextTab : tabRefs[0];
                    break;
                }
            case 'ArrowLeft':
                {
                    const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
                    var _prevTab;
                    focusElement = (_prevTab = tabRefs[prevTab]) !== null && _prevTab !== void 0 ? _prevTab : tabRefs[tabRefs.length - 1];
                    break;
                }
            default:
                break;
        }
        focusElement === null || focusElement === void 0 ? void 0 : focusElement.focus();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        role: "tablist",
        "aria-orientation": "horizontal",
        className: (0,clsx/* default */.A)('tabs', {
            'tabs--block': block
        }, className),
        children: tabValues.map(({ value , label , attributes  })=>{
            /*#__PURE__*/ return (0,jsx_runtime.jsx)("li", Tabs_objectSpreadProps(Tabs_objectSpread({
                // TODO extract TabListItem
                role: "tab",
                tabIndex: selectedValue === value ? 0 : -1,
                "aria-selected": selectedValue === value,
                ref: (tabControl)=>tabRefs.push(tabControl),
                onKeyDown: handleKeydown,
                onClick: handleTabChange
            }, attributes), {
                className: (0,clsx/* default */.A)('tabs__item', styles_module.tabItem, attributes === null || attributes === void 0 ? void 0 : attributes.className, {
                    'tabs__item--active': selectedValue === value
                }),
                children: label !== null && label !== void 0 ? label : value
            }), value);
        })
    });
}
function TabContent({ lazy , children , selectedValue  }) {
    const childTabs = (Array.isArray(children) ? children : [
        children
    ]).filter(Boolean);
    if (lazy) {
        const selectedTabItem = childTabs.find((tabItem)=>tabItem.props.value === selectedValue);
        if (!selectedTabItem) {
            // fail-safe or fail-fast? not sure what's best here
            return null;
        }
        return /*#__PURE__*/ (0,react.cloneElement)(selectedTabItem, {
            className: (0,clsx/* default */.A)('margin-top--md', selectedTabItem.props.className)
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "margin-top--md",
        children: childTabs.map((tabItem, i)=>/*#__PURE__*/ (0,react.cloneElement)(tabItem, {
                key: i,
                hidden: tabItem.props.value !== selectedValue
            }))
    });
}
function TabsComponent(props) {
    const tabs = useTabs(props);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.A)('tabs-container', styles_module.tabList),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabList, Tabs_objectSpread({}, tabs, props)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContent, Tabs_objectSpread({}, tabs, props))
        ]
    });
}
function Tabs(props) {
    const isBrowser = (0,useIsBrowser/* default */.A)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabsComponent, Tabs_objectSpreadProps(Tabs_objectSpread({}, props), {
        children: sanitizeTabsChildren(props.children)
    }), String(isBrowser));
};


/***/ }),

/***/ 96481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-check-install-fail-ba3d8f37ab7f298faedcb9663be127c8.svg");

/***/ }),

/***/ 57163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-check-running-agent-monitoring-b549837fbaa82697b0c5c4a38eaaa84a.svg");

/***/ }),

/***/ 55730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-not-running-agent-monitoring-bf973783a5f1db1cf4ec16fb3a2c93c1.svg");

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