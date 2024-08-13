"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[41187],{

/***/ 94651:
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
/* harmony import */ var _common_items_integrated_report_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15037);


const frontMatter = {
	id: 'integrated-report',
	title: '統合レポート',
	description: '統合レポートに関する情報を提供します。',
	tags: [
		'Altibase',
		'データベース',
		'データベースモニタリング',
		'統合レポート'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "altibase/integrated-report",
  "title": "統合レポート",
  "description": "統合レポートに関する情報を提供します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/altibase/integrated-report.mdx",
  "sourceDirName": "altibase",
  "slug": "/altibase/integrated-report",
  "permalink": "/ja/altibase/integrated-report",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/altibase/integrated-report.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Altibase",
      "permalink": "/ja/tags/altibase"
    },
    {
      "inline": true,
      "label": "データベース",
      "permalink": "/ja/tags/データベース"
    },
    {
      "inline": true,
      "label": "データベースモニタリング",
      "permalink": "/ja/tags/データベースモニタリング"
    },
    {
      "inline": true,
      "label": "統合レポート",
      "permalink": "/ja/tags/統合レポート"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "integrated-report",
    "title": "統合レポート",
    "description": "統合レポートに関する情報を提供します。",
    "tags": [
      "Altibase",
      "データベース",
      "データベースモニタリング",
      "統合レポート"
    ]
  },
  "sidebar": "altibaseSidebar",
  "previous": {
    "title": "レポート",
    "permalink": "/ja/altibase/report-intro"
  },
  "next": {
    "title": "通知設定",
    "permalink": "/ja/altibase/set-notice"
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

/***/ 15037:
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
  "value": "レポートと統合レポートの違い",
  "id": "レポートと統合レポートの違い",
  "level": 2
}, {
  "value": "レポート作成の方法",
  "id": "レポート作成の方法",
  "level": 2
}, {
  "value": "タスク一覧を確認",
  "id": "タスク一覧を確認",
  "level": 2
}, {
  "value": "表示と共有",
  "id": "表示と共有",
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
      children: ["ホーム画面 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["WhaTapモニタリングサービスの初期画面でプロジェクトを選択せず、サイドメニューの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), "を選択します。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), "は、複数のプロジェクトに関するレポートを簡単に作成できます。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "レポートの種類と目的のプロジェクトを選択してレポートを作成でき、レポート作成一覧からタスクの進行状況を確認できます。レポート作成中に特定のプロジェクトでエラーが発生した場合、エラー内容を確認できます。作業が完了したレポートを直接表示したり、ダウンロードおよび印刷機能を使用して、他のユーザーとレポートを共有できます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "integration_report_01.png"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), "の機能は次のとおりです。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "マルチプロジェクトサポート"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), "メニューから複数のプロジェクトを選択して、一括でレポートを作成できます。既存の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_report",
            className: "uitext"
          }), "メニューでは、プロジェクトごとにレポートを作成する必要がありました。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "タスクごとのレポート作成"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "create_report",
            className: "uitext"
          }), "メニューからタスクごとにプロジェクトを選択し、テンプレートとして保存できます。通常タスクごとにプロジェクトを分割して使用するマイクロサービスアーキテクチャ(MSA、Micro Service Architecture)の環境で有効な機能です。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "大容量データの最適化"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), "メニューを使用すると、レポートの生成時間が大幅に短縮されます。また、一部のプロジェクトレポートの生成中にエラーが発生した場合でも、レポートの結果を表示できます。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "レポート作成中に同時作業が可能"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), "メニューからレポートを生成すると同時に、他のタスクを行うことができます。既存の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_report",
            className: "uitext"
          }), "メニューでは、生成が完了するまで待ちました。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), "メニューからレポートの生成を開始した後、別のページに移動できます。また、レポートの結果一覧から進捗状況と生成されたレポートを照会できます。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "レポート作業の共有"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "同じプロジェクト権限を持つユーザーが作成したレポートを表示できます。関連するレポートがすでに作成されているかを確認できるため、重複の作成を回避できます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "レポートと統合レポートの違い",
        children: "レポートと統合レポートの違い"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), "は、一つのプロジェクトに対するレポートを作成するメニューです。従って、プロジェクトを選択した後、左部の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_reportStat",
          className: "uitext"
        }), " または", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), "メニューからアクセスできます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_integratedReport",
          className: "uitext"
        }), "は、複数のプロジェクトのレポートを作成するメニューです。プロジェクトを選択することなく、メインメニューからアクセスできます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), "の詳細は", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "report-intro",
          children: "次の文書"
        }), "で確認できます。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "レポート作成の方法",
        children: "レポート作成の方法"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "レポートの種類の選択"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "integration_report_02.png"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "report_type",
              className: "uitext"
            }), "メニューから目的のレポートのタイプを選択すると、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "create_report",
              className: "uitext"
            }), "ボタンが活性化されます。レポート名の前にある", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "アイコン"
            }), "は、レポートのフォームがサポートするプロジェクトプラットのフォームを意味します。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "プラットフォームアプリケーションicon",
                src: (__webpack_require__(84243)/* ["default"] */ .A) + "",
                width: "32",
                height: "32"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Application"
              }), "プロジェクトプラットフォームを示します。"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "プラットフォームKubernetes icon",
                src: (__webpack_require__(14675)/* ["default"] */ .A) + "",
                width: "32",
                height: "32"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Kubernetes"
              }), "プロジェクトのプラットフォームを示します。"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "プラットフォームサーバicon",
                src: (__webpack_require__(85906)/* ["default"] */ .A) + "",
                width: "30",
                height: "30"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Server"
              }), "プロジェクトプラットフォームを示します。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "詳細設定"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "master_report.png"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["レポートの種類を選択した後、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "create_report",
              className: "uitext"
            }), "ボタンをクリックしてください。次のように詳細設定ができます。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "レポートのタイトル"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "同じ種類のレポートが複数ある場合、名前を指定するとレポートの結果を区別するときに役に立ちます。"
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "時間"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "レポートで使用するデータの期間を選択します。期間はレポートの種類(日、週、月)によって異なります。"
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "プロジェクト選択"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "レポートを作成するプロジェクトを選択します。グループまたは個別のプロジェクト別に選択できます。"
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "レポートフォームの保存と読み込み"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "現在入力されたレポートの設定をテンプレートとして保存し、次回作成時にリスト一覧から読み込むことができます。この機能は、プロジェクトベースで頻繁に使用することが多い場合に便利です。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "レポート作成"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["設定が完了したら、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "create_report",
              className: "uitext"
            }), "ボタンを押してレポートを作成してください。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "タスク一覧を確認",
        children: "タスク一覧を確認"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "integration_report_03.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "generation_report_list",
          className: "uitext"
        }), "で以前に作成したレポートと現在作業中のレポートを確認できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "all",
          className: "uitext"
        }), "一覧では、作成したレポートのに加え、自分と同じ権限を持つユーザーが作成したレポートを表示できます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "my_report",
          className: "uitext"
        }), "一覧では、作成したレポートのみをフィルタリングして表示できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["エラーなく作成されたレポートは", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          class: "woer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "チェックicon",
            src: (__webpack_require__(73527)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), "チェック"]
        }), "アイコンとして表示され、エラーが含まれている場合は", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          class: "wer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "警告icon",
            src: (__webpack_require__(74753)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), "警告"]
        }), "アイコンが一緒に表示されます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          class: "wer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "警告icon",
            src: (__webpack_require__(74753)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), "警告"]
        }), "アイコンをクリックすると、どのプロジェクトでエラーが発生したのか確認できます。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "表示と共有",
        children: "表示と共有"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "integration_report_04.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "レポートは、次の 3 つの方法で表示されます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "画面照会"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "タスク一覧から作成したレポートを選択すると、画面上で直接表示できます。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "ダウンロード"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "download",
              className: "uitext"
            }), "ボタンをクリックすると、レポートと同じファイルがhtml形式でダウンロードされ、モニタリングの管理権限を持たないユーザーとレポートを共有できます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "印刷およびPDF保存"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "print",
              className: "uitext"
            }), "ボタンを押すと、パソコンに接続されたプリンターで印刷または、PDF形式で保存できます。"]
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

/***/ 73527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC40NTI3IDZMOS41NzQ3NiAxNS4xMTFMNS41NDczMyAxMC43Nzc2TDQgMTIuMzA1MUw5LjU3NDc2IDE4TDIwIDcuNTI3NTRMMTguNDUyNyA2VjZaIiBmaWxsPSIjNDQ4NUZGIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 74753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4xMjYgMy40MTg0QzExLjUxOSAyLjc5OTI3IDEyLjQyMjcgMi43OTk3NyAxMi44MTUgMy40MTkzMkwyMi4yODcxIDE4LjM3NjFDMjIuNzA4OCAxOS4wNDE5IDIyLjIzMDQgMTkuOTExMSAyMS40NDIzIDE5LjkxMTFIMi40NzUxNkMxLjY4NjU2IDE5LjkxMTEgMS4yMDgyNiAxOS4wNDA5IDEuNjMwOTEgMTguMzc1MUwxMS4xMjYgMy40MTg0Wk00LjI5NDcxIDE3LjkxMTFMMTkuNjI1NiAxNy45MTExTDExLjk2OTQgNS44MjE3OUw0LjI5NDcxIDE3LjkxMTFaTTEwLjk5OTkgMTQuOTU0NUgxMi45OTk5VjE2Ljk1NDVIMTAuOTk5OVYxNC45NTQ1Wk0xMi45OTk5IDguOTU0NTRIMTAuOTk5OVYxMy45NTQ1SDEyLjk5OTlWOC45NTQ1NFoiIGZpbGw9IiNGRjk5MDAiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 84243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOS4zMzMzIDQuNjY2NjlDMjkuMzMzMyAzLjU2MjEyIDI4LjQzNzkgMi42NjY2OSAyNy4zMzMzIDIuNjY2NjlINC42NjY2N0MzLjU2MjEgMi42NjY2OSAyLjY2NjY3IDMuNTYyMTIgMi42NjY2NyA0LjY2NjY5VjI3LjMzMzRDMi42NjY2NyAyOC40Mzc5IDMuNTYyMSAyOS4zMzM0IDQuNjY2NjcgMjkuMzMzNEgyNy4zMzMzQzI4LjQzNzkgMjkuMzMzNCAyOS4zMzMzIDI4LjQzNzkgMjkuMzMzMyAyNy4zMzM0VjQuNjY2NjlaTTIxLjMzMzMgMTAuMzQzMkwxOS40NDc3IDEyLjIyODhMMjMuMjE5IDE2TDE5LjQ0NzcgMTkuNzcxM0wyMS4zMzMzIDIxLjY1NjlMMjUuMTA0NiAxNy44ODU2TDI2Ljk5MDIgMTZMMjUuMTA0NiAxNC4xMTQ0TDIxLjMzMzMgMTAuMzQzMlpNMTIuNTUyMyAxMi4yMjg4TDEwLjY2NjcgMTAuMzQzMkw2Ljg5NTQ0IDE0LjExNDRMNS4wMDk4MiAxNkw2Ljg5NTQ0IDE3Ljg4NTZMMTAuNjY2NyAyMS42NTY5TDEyLjU1MjMgMTkuNzcxM0w4Ljc4MTA1IDE2TDEyLjU1MjMgMTIuMjI4OFpNMTkuNTMzMSAxMC4xOTE0TDE3LjAyNzIgOS4yNzkzOEwxMi40NjY5IDIxLjgwODZMMTQuOTcyOCAyMi43MjA3TDE5LjUzMzEgMTAuMTkxNFoiIGZpbGw9IiMwMEIwRTIiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 14675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC42NjY3IDBIMTcuMzMzM1Y0LjA3MzI0QzIwLjc0NDggNC40NTAzNiAyMy43MjUzIDYuMjU3NTUgMjUuNjYyIDguODgyMDZMMjkuMTg5NyA2Ljg0NTNMMzAuNTIzMSA5LjE1NDdMMjYuOTk3MyAxMS4xOTAzQzI3LjY0MjIgMTIuNjYyOCAyOCAxNC4yODk2IDI4IDE2QzI4IDE3LjcxMDQgMjcuNjQyMiAxOS4zMzcyIDI2Ljk5NzMgMjAuODA5N0wzMC41MjMxIDIyLjg0NTNMMjkuMTg5NyAyNS4xNTQ3TDI1LjY2MiAyMy4xMTc5QzIzLjcyNTMgMjUuNzQyNCAyMC43NDQ4IDI3LjU0OTYgMTcuMzMzMyAyNy45MjY4VjMySDE0LjY2NjdWMjcuOTI2OEMxMS4yNTUyIDI3LjU0OTYgOC4yNzQ3MyAyNS43NDI0IDYuMzM4MDMgMjMuMTE3OUwyLjgxMDI2IDI1LjE1NDdMMS40NzY5MyAyMi44NDUzTDUuMDAyNzQgMjAuODA5N0M0LjM1Nzg0IDE5LjMzNzIgNCAxNy43MTA0IDQgMTZDNCAxNC4yODk2IDQuMzU3ODQgMTIuNjYyOCA1LjAwMjc0IDExLjE5MDNMMS40NzY5MyA5LjE1NDdMMi44MTAyNiA2Ljg0NTNMNi4zMzgwMyA4Ljg4MjA2QzguMjc0NzMgNi4yNTc1NSAxMS4yNTUyIDQuNDUwMzYgMTQuNjY2NyA0LjA3MzI0VjBaTTI1LjMzMzMgMTZDMjUuMzMzMyAxNy4yMjQ1IDI1LjA5NzUgMTguMzkzOSAyNC42Njg4IDE5LjQ2NTRMMTkuOTMzMyAxNi43MzEzQzE5Ljk3NzEgMTYuNDk0MiAyMCAxNi4yNDk4IDIwIDE2QzIwIDE1Ljc1MDIgMTkuOTc3MSAxNS41MDU4IDE5LjkzMzMgMTUuMjY4N0wyNC42Njg4IDEyLjUzNDZDMjUuMDk3NSAxMy42MDYxIDI1LjMzMzMgMTQuNzc1NSAyNS4zMzMzIDE2Wk0xOC41OTk0IDEyLjk1OTZMMjMuMzMzNyAxMC4yMjYzQzIxLjg4NDcgOC4zODgzMSAxOS43NTk1IDcuMTA4MjIgMTcuMzMzMyA2Ljc2MTE5VjEyLjIyNzZDMTcuODAxNSAxMi4zOTMxIDE4LjIyOTYgMTIuNjQzMiAxOC41OTk0IDEyLjk1OTZaTTE0LjY2NjcgMTIuMjI3NlY2Ljc2MTE5QzEyLjI0MDUgNy4xMDgyMiAxMC4xMTUzIDguMzg4MzEgOC42NjYzMyAxMC4yMjYzTDEzLjQwMDYgMTIuOTU5NkMxMy43NzA0IDEyLjY0MzIgMTQuMTk4NSAxMi4zOTMxIDE0LjY2NjcgMTIuMjI3NlpNMTIuMDY2NyAxNS4yNjg3TDcuMzMxMTYgMTIuNTM0NkM2LjkwMjQ4IDEzLjYwNjEgNi42NjY2NyAxNC43NzU1IDYuNjY2NjcgMTZDNi42NjY2NyAxNy4yMjQ1IDYuOTAyNDggMTguMzkzOSA3LjMzMTE2IDE5LjQ2NTRMMTIuMDY2NyAxNi43MzEzQzEyLjAyMjkgMTYuNDk0MiAxMiAxNi4yNDk4IDEyIDE2QzEyIDE1Ljc1MDIgMTIuMDIyOSAxNS41MDU4IDEyLjA2NjcgMTUuMjY4N1pNMTMuNDAwNiAxOS4wNDA0QzEzLjc3MDQgMTkuMzU2OCAxNC4xOTg1IDE5LjYwNjkgMTQuNjY2NyAxOS43NzI0VjI1LjIzODhDMTIuMjQwNSAyNC44OTE4IDEwLjExNTMgMjMuNjExNyA4LjY2NjMzIDIxLjc3MzdMMTMuNDAwNiAxOS4wNDA0Wk0xNy4zMzMzIDE5Ljc3MjRDMTcuODAxNSAxOS42MDY5IDE4LjIyOTYgMTkuMzU2OCAxOC41OTk0IDE5LjA0MDRMMjMuMzMzNyAyMS43NzM3QzIxLjg4NDcgMjMuNjExNyAxOS43NTk1IDI0Ljg5MTggMTcuMzMzMyAyNS4yMzg4VjE5Ljc3MjRaIiBmaWxsPSIjNDQ4NUZGIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 85906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS41IDIuMTY2NjlWOS4xNjY2OUg0LjVWMi4xNjY2OUgyNS41Wk00LjUgMTEuNUgyNS41VjE4LjVINC41VjExLjVaTTQuNSAyMC44MzM0VjI3LjgzMzRIMjUuNVYyMC44MzM0SDQuNVpNNi44MzMzMyA0LjUwMDAySDkuMTY2NjdWNi44MzMzNUg2LjgzMzMzVjQuNTAwMDJaTTkuMTY2NjcgMTMuODMzNEg2LjgzMzMzVjE2LjE2NjdIOS4xNjY2N1YxMy44MzM0Wk02LjgzMzMzIDIzLjE2NjdIOS4xNjY2N1YyNS41SDYuODMzMzNWMjMuMTY2N1pNMjMuMTY2NyA0LjUwMDAySDEyLjY2NjdWNi44MzMzNUgyMy4xNjY3VjQuNTAwMDJaTTEyLjY2NjcgMTMuODMzNEgyMy4xNjY3VjE2LjE2NjdIMTIuNjY2N1YxMy44MzM0Wk0yMy4xNjY3IDIzLjE2NjdIMTIuNjY2N1YyNS41SDIzLjE2NjdWMjMuMTY2N1oiIGZpbGw9IiMwMEM1QjEiLz4KPC9zdmc+Cg==");

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