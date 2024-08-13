"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[90416],{

/***/ 38700:
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
    a: "a",
    admonition: "admonition",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, InDoc, Link, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Link) _missingMdxReference("Link", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "WhaTapモニタリングサービスを利用するには、会員登録を行ってください。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "quick-guide",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["WhaTapモニタリングは無料で15日間トライアル可能です。支払い方式に関しては、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "management/billing",
              children: "次の文書"
            }), "を参照にしてください。"]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
        product: "quick-guide",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["WhaTapモニタリングは無料で15日間トライアル可能です。支払い方式に関しては、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../management/billing",
              children: "次の文書"
            }), "を参照にしてください。"]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "会員登録後、プロジェクトの作成および、プロジェクトアクセスキーを発行した時点から無料トライアルの開始になります。"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "試用期間終了後もサービスを続けて利用したい場合は、決済情報を登録してプロジェクトを有料に変更してください。"
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "http://www.whatap.io/",
          children: "WhaTapホームページ"
        }), " へ移動します。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["右上にある", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link, {
          to: "https://www.whatap.io/ja/signup/",
          target: "_blank",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "freetrial"
          })
        }), "ボタンを選択してください。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "名前、メールアドレス、パスワード、会社名を入力します。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "landingSignup",
          className: "uitext"
        }), "ボタンを選択します。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["通知をSMSで受信するには、ログインして右上にあるプロファイルアイコン > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "MNU07360",
          className: "uitext"
        }), "の順に選択します。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "account_user_phone",
          className: "uitext"
        }), "セクションに移動し、電話番号を入力します。"]
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

/***/ 91557:
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
    a: "a",
    admonition: "admonition",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "エージェントをインストールする前にプロジェクトを作成してください。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://service.whatap.io",
            children: "WhaTapモニタリングサービス"
          }), "に移動し、ログインします。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["プロジェクトを作成するには、左のサイドメニューから", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "BTN07332",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "+"
            })
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "BTN06696",
            className: "uitext"
          }), "ボタンを選択します。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL07073",
            className: "uitext"
          }), " 画面でプロジェクトにインストールする製品を選択してください。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "project_name",
            className: "uitext"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "data_server_region",
            className: "uitext"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "project_time_zone",
            className: "uitext"
          }), "などの項目を設定してください。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "create-project-v3.png",
          desc: ""
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL07727",
            className: "uitext"
          }), "で、警告通知メッセージの言語を選択します。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["すべての設定を完了した後は ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "creating_a_project",
            className: "uitext"
          }), " ボタンを選択します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "data_server_region",
              className: "uitext"
            }), "は、リージョン(クラウドサービスを提供するためにインストールしたデータセンターのグループ)を意味します。特定のリージョンを選択すると、そのリージョンに所属するデータセンターにユーザーのデータが保存されます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_time_zone",
              className: "uitext"
            }), "は通知とレポートを生成する基準時間です。"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "quick-guide",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["複数のプロジェクトをグループで管理する場合は、 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_groups",
              className: "uitext"
            }), "からグループを選択するか、グループを追加してください。 グループの詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "project/group",
              children: "次の文書"
            }), "を参照してください。"]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
        product: "quick-guide",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["複数のプロジェクトをグループで管理する場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_groups",
              className: "uitext"
            }), "からグループを選択するか、グループを追加してください。 グループの詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../project/group",
              children: "次の文書"
            }), "を参照してください。"]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["組織を選択してプロジェクトを追加する場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "group_of_organization",
            className: "uitext"
          }), "を必須に設定する必要があります。"]
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

/***/ 2215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ quick_guide_contentTitle),
  "default": () => (/* binding */ quick_guide_MDXContent),
  frontMatter: () => (/* binding */ quick_guide_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ quick_guide_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/account/_create-account.mdx
var _create_account = __webpack_require__(38700);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/getting-started/_create-project-intro-v2.mdx
var _create_project_intro_v2 = __webpack_require__(91557);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/getting-started/_accesskey-intro.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "プロジェクトアクセスキー"
      }), "は、WhaTapサービスを有効にするための固有IDです。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["インストール手順セクションで", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "issue_project_access_key",
        className: "uitext"
      }), "ボタンをクリックします。", (0,jsx_runtime.jsx)(_components.strong, {
        children: "プロジェクトアクセスキー"
      }), "が自動的に発行されると、次の手順に進みます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["プロジェクトを作成すると、自動的に", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), "ページに移動します。", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), "ページが表示されない場合は、左側のメニューから", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "all_projects",
          className: "uitext"
        }), "を選択し、新しく作成したプロジェクトを選択します。"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/quick-guide.mdx


const quick_guide_frontMatter = {
	id: 'quick-guide',
	title: 'クイックスタート',
	displayed_sidebar: 'indexSidebar',
	description: 'WhaTapモニタリングサービス機能をすばやく使用できるように簡単な案内を提供します。'
};
const quick_guide_contentTitle = undefined;
const metadata = {
  "id": "quick-guide",
  "title": "クイックスタート",
  "description": "WhaTapモニタリングサービス機能をすばやく使用できるように簡単な案内を提供します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/quick-guide.mdx",
  "sourceDirName": ".",
  "slug": "/quick-guide",
  "permalink": "/ja/quick-guide",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/quick-guide.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "quick-guide",
    "title": "クイックスタート",
    "displayed_sidebar": "indexSidebar",
    "description": "WhaTapモニタリングサービス機能をすばやく使用できるように簡単な案内を提供します。"
  },
  "sidebar": "indexSidebar",
  "previous": {
    "title": "サポート環境",
    "permalink": "/ja/support-env"
  },
  "next": {
    "title": "모바일 앱",
    "permalink": "/ja/mobile-app"
  }
};
const assets = {

};






const quick_guide_toc = [{
  "value": "クイックスタートのステップバイステップガイド",
  "id": "クイックスタートのステップバイステップガイド",
  "level": 2
}, {
  "value": "WhaTap会員登録",
  "id": "account",
  "level": 3
}, ..._create_account/* toc */.RM, {
  "value": "プロジェクト作成",
  "id": "cproject",
  "level": 3
}, ..._create_project_intro_v2/* toc */.RM, {
  "value": "プロジェクトアクセスキー確認",
  "id": "accesskey",
  "level": 3
}, ...toc, {
  "value": "エージェントインストール",
  "id": "install",
  "level": 3
}, {
  "value": "ダッシュボード参照",
  "id": "dashboard",
  "level": 3
}, {
  "value": "外部データ収集",
  "id": "collect",
  "level": 3
}, {
  "value": "通知設定",
  "id": "notification",
  "level": 3
}, {
  "value": "レポート参照",
  "id": "report",
  "level": 3
}, {
  "value": "メンバー管理",
  "id": "member",
  "level": 3
}];
function quick_guide_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, Details, Videos} = _components;
  if (!Cmdname) quick_guide_missingMdxReference("Cmdname", true);
  if (!Details) quick_guide_missingMdxReference("Details", true);
  if (!Videos) quick_guide_missingMdxReference("Videos", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "WhaTapモニタリングサービスの概要ページです。 WhaTapモニタリングサービスを初めて利用する新規ユーザーに役立ちます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTapモニタリングサービスエージェントのインストールと利用に関する詳細については、左記の製品別の技術文書を参照にしてください。"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "クイックスタートのステップバイステップガイド",
        children: "クイックスタートのステップバイステップガイド"
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "account",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(31511)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), "WhaTap会員登録"]
      }), (0,jsx_runtime.jsx)(_create_account/* default */.Ay, {}), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "cproject",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(47228)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), "プロジェクト作成"]
      }), (0,jsx_runtime.jsx)(_create_project_intro_v2/* default */.Ay, {}), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "accesskey",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(60293)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), "プロジェクトアクセスキー確認"]
      }), (0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "install",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(75626)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), "エージェントインストール"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "プロジェクトアクセスキー"
        }), "を発行された場合は、インストール手順セクションでWhaTapエージェントのインストールを続けることができます。 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "management",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), "メニューからインストール手順セクションにアクセスすることもできます。"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "サポート環境を確認してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "management",
              className: "uitext"
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "agent_installation",
              className: "uitext"
            }), "メニューの", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "JAVA-agent-setup-1-subject",
              className: "uitext"
            }), "タブを選択してください。 指示に従って直接エージェントをダウンロードするか、パッケージのインストールを進めてください。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "エージェントのダウンロード"
              })
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["環境に応じて", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "download",
                  className: "uitext"
                }), "ボタンを選択するか、コマンドを使用してサーバーから直接ダウンロードします。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "環境に応じて、リポジトリを登録し、パッケージをインストールします。"
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "プロジェクトアクセスキー"
            }), "と", (0,jsx_runtime.jsx)(_components.strong, {
              children: "WhaTapサーバーIP"
            }), "を入力し、設定スクリプトを実行します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "エージェントを再起動します。"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "これから、WhaTapモニタリングサービスが開始されます。"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "ダウンロードおよび設定プロセスの詳細については、製品別のインストール手順のドキュメントを参照にしてください。 左側から製品別メニューを選択するか、次のショートカットを確認してください。"
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsx)("summary", {
          children: "製品別の動作環境およびインストール手順のドキュメントへのショートカット"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Java"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "java/supported-spec",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "java/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PHP"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "php/supported-spec",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "php/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Node.js"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "nodejs/supported-spec",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "nodejs/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Python"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "python/supported-spec",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "python/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: ".NET"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "dotnet/supported-spec",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "dotnet/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Go"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "golang/supported-spec",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "golang/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Server"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "server/supported-spec",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "server/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Kubernetes"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "kubernetes/supported-spec",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "kubernetes/install",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "postgresql/monitoring-support",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "postgresql/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Oracle"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "oracle/monitoring-support",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "oracle/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MySQL"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "mysql/monitoring-support",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "mysql/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SQL Server"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "mssql/monitoring-support",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "mssql/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tibero"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "tibero/monitoring-support",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "tibero/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CUBRID"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "cubrid/monitoring-support",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "cubrid/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Altibase"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "altibase/monitoring-support",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "altibase/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Redis"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "redis/monitoring-support",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "redis/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MongoDB"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "mongodb/monitoring-support",
                  children: "動作環境"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "mongodb/install-agent",
                  children: "エージェントインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "url/url-install",
              children: "URL"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "クラウド"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "amazon-ecs/install-agent",
                  children: "Amazon ECS"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "amazon-cloudwatch/install-agent",
                  children: "Amazon Cloudwatch"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "azure/install-agent",
                  children: "Azure Monitor"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "ncloud/install-agent",
                  children: "Naver Cloud Monitoring"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "oracle-cloud/install-agent",
                  children: "Oracle Cloud Monitor"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "log/log-function",
              children: "Log"
            })
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["インストール中に問題が発生した場合は、各製品の", (0,jsx_runtime.jsx)(_components.strong, {
            children: "インストールに関するトラブルシューティング"
          }), "の記事を参照してください。"]
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "dashboard",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(30835)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), "ダッシュボード参照"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["エージェントをインストール後、データがWhaTapサーバーに送信されると、", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "dashboard",
          className: "uitext"
        }), "メニューからプロジェクトの全体の状況をリアルタイムで確認することができます。 WhaTapモニタリングサービスは、収集されたすべてのデータを統合ダッシュボードとして構成でき、ユーザーによって自由に編集できるパーソナライズされたダッシュボードを提供します。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["アプリケーションは、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "app_dashboard",
              className: "uitext"
            }), "と", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "transaction_map",
              className: "uitext"
            }), "、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "active_transaction",
              className: "uitext"
            }), "、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "application_topology",
              className: "uitext"
            }), "そして", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "flexboard",
              className: "uitext"
            }), "の各ウィジェットで収集された性能指標を確認できます。"]
          }), "\n", (0,jsx_runtime.jsx)(Videos, {
            url: "https://whatap-landing-resource.s3.ap-northeast-2.amazonaws.com/app-activeTransection.mp4"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["サーバーは、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "sms_resource_board",
              className: "uitext"
            }), "と", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "sms_compound_eye",
              className: "uitext"
            }), "そして", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "flexboard",
              className: "uitext"
            }), "の各ウィジェットで収集された性能指標を確認できます。"]
          }), "\n", (0,jsx_runtime.jsx)(Videos, {
            url: "https://whatap-landing-resource.s3.ap-northeast-2.amazonaws.com/server-compound.mp4"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["データベースは、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "instance_list",
              className: "uitext"
            }), "と", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "instance_monitoring",
              className: "uitext"
            }), "、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "multi_instance_monitoring",
              className: "uitext"
            }), "、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "slow_query",
              className: "uitext"
            }), "そして", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "flexboard",
              className: "uitext"
            }), "の各ウィジェットで収集された性能指標を確認できます。"]
          }), "\n", (0,jsx_runtime.jsx)(Videos, {
            url: "https://img.whatap.io/23/11/06/031831DB_prd.mp4"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Kubernetesは、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "containerMap",
              className: "uitext"
            }), "の各ウィジェットを使用して、ノード、コンテナ、アプリケーション、ログ、イベント情報を動的に確認できます。"]
          }), "\n", (0,jsx_runtime.jsx)(Videos, {
            url: "https://img.whatap.io/23/11/06/022318en_kubernetes_.mp4"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カスタム統合ダッシュボードであるFlexボードの作成および設定に関する詳細な説明は", (0,jsx_runtime.jsx)(_components.a, {
            href: "java/flex-board",
            children: "次の文書"
          }), "を参照してください。"]
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "collect",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(56344)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), "外部データ収集"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["TelegrafとFocusなどを活用してWhaTapサービス収集データを拡張できます。 詳細については、次の文書", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ja/telegraf/introduction",
          children: "Telegraf"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ja/focus/introduction",
          children: "Focus"
        }), "を参照してください。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "WhaTapプラグインをインストールすると、Telegrafで収集したデータをWhaTap収集サーバーに送信することができます。"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "WhaTap Focusをインストールして、ユーザーが独自のチェックスクリプトまたはデータベースクエリを実行して、収集された値をWhaTapプロジェクトにアップロードできます。"
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "notification",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(42535)/* ["default"] */ .A) + "",
          width: "37",
          height: "37"
        }), "通知設定"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["WhaTapモニタリングサービスは、収集されたすべての指標を使用して、しきい値ベースの通知設定が可能です。 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "event_statistic",
          className: "uitext"
        }), "メニューでは、イベントや受信設定及び過去の履歴を確認できます。 個人別に通知の受信設定が可能だけでなく、メール、SMS、メッセンジャーなどのさまざまな通知チャンネルを提供します。"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "アラート設定の詳細については、次の記事を参照してください。"
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsx)("summary", {
          children: "製品ごとの通知設定ガイド文書のショートカット"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "java/apm-set-notice",
              children: "Java"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "php/apm-set-notice",
              children: "PHP"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "nodejs/apm-set-notice",
              children: "Node.js"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "python/apm-set-notice",
              children: "Python"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "dotnet/apm-set-notice",
              children: ".NET"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "golang/apm-set-notice",
              children: "Go"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "server/set-notice",
              children: "Server"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "postgresql/set-notice",
              children: "PostgreSQL"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "oracle/set-notice",
              children: "Oracle"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "mysql/set-notice",
              children: "MySQL"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "mssql/set-notice",
              children: "SQL Server"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "tibero/set-notice",
              children: "Tibero"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "cubrid/set-notice",
              children: "CUBRID"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "altibase/set-notice",
              children: "Altibase"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "redis/set-notice",
              children: "Redis"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "mongodb/set-notice",
              children: "MongoDB"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "kubernetes/set-notice",
              children: "Kubernetes"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "url/url-event",
              children: "URL"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "amazon-cloudwatch/set-notice",
              children: "Amazon CloudWatch"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "amazon-ecs/set-notice",
              children: "Amazon ECS"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "azure/set-notice",
              children: "Azure Monitor"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "ncloud/set-notice",
              children: "Naver Cloud Monitoring"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "oracle-cloud/set-notice",
              children: "Oracle Cloudd Monitor"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "log/set-notice",
              children: "Log"
            })
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "report",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(61968)/* ["default"] */ .A) + "",
          width: "37",
          height: "37"
        }), "レポート参照"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["レポートは、サービス利用状況とトラブルの発生履歴を報告する文書であり、モニタリングデータ分析はサービス改善の方向性を決める指標になります。 WhaTapは、", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "report",
          className: "uitext"
        }), "メニューからレポートを作成し、業務の自動化をサポートします。 個々のプロジェクト単位のレポートと複数のプロジェクト単位の統合レポートを提供します。"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["レポートの詳細については、", (0,jsx_runtime.jsx)(_components.a, {
            href: "java/report-intro",
            children: "次の文書"
          }), "を参照してください。 製品別レポートの案内については、製品別の技術文書をご参考ください。"]
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "member",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(53089)/* ["default"] */ .A) + "",
          width: "37",
          height: "37"
        }), "メンバー管理"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ユーザーは、", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "management",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "project_member",
          className: "uitext"
        }), "メニューからプロジェクトメンバーを追加することができます。 プロジェクトとグループごとにメンバーの権限を設定し、メンバーを削除することもできます。"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メンバー権限体系の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
            href: "project/project-structure#project-auth",
            children: "次の文書"
          }), "を参照してください。"]
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    })]
  });
}
function quick_guide_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(quick_guide_createMdxContent, {
      ...props
    })
  }) : quick_guide_createMdxContent(props);
}
function quick_guide_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 42535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTguMTAzMiIgY3k9IjE4LjEwMzIiIHI9IjE4LjEwMzIiIGZpbGw9IiNGOUMxMkEiLz4KPHBhdGggZD0iTTI2LjQzNDggOC45NTY4NVYxMS4zMzU4TDE4LjU5IDI5LjU3NEgxMy45MTcyTDIxLjc2MTkgMTIuMzk3OEgxMS43MDgyVjguOTU2ODVIMjYuNDM0OFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 61968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTguMTAzMiIgY3k9IjE4LjEwMzIiIHI9IjE4LjEwMzIiIGZpbGw9IiNGOUMxMkEiLz4KPHBhdGggZD0iTTI2LjM2MzkgMjIuOTFDMjYuMzYzOSAyNC4yMTI3IDI2LjA1NzEgMjUuMzA3OCAyNS40NDM1IDI2LjE5NTFDMjQuODI5OSAyNy4wODI1IDIzLjk4OTcgMjcuNzQ4IDIyLjkyMyAyOC4xOTE3QzIxLjg2NTcgMjguNjM1NCAyMC42NTc0IDI4Ljg1NzIgMTkuMjk4IDI4Ljg1NzJDMTcuOTQ4MSAyOC44NTcyIDE2LjczNSAyOC42MzU0IDE1LjY1ODkgMjguMTkxN0MxNC41OTIxIDI3Ljc0OCAxMy43NDcyIDI3LjA4MjUgMTMuMTI0MiAyNi4xOTUxQzEyLjUwMTEgMjUuMzA3OCAxMi4xODk2IDI0LjIxMjcgMTIuMTg5NiAyMi45MUMxMi4xODk2IDIyLjAyMjYgMTIuMzY0MyAyMS4yMjQ5IDEyLjcxMzUgMjAuNTE2OUMxMy4wNzIzIDE5LjgwODkgMTMuNTY3OSAxOS4yMDQ3IDE0LjIwMDQgMTguNzA0NEMxNC44NDIzIDE4LjIwNDEgMTUuNTkyOCAxNy44MjE4IDE2LjQ1MTggMTcuNTU3NEMxNy4zMjAzIDE3LjI5MzEgMTguMjU5NiAxNy4xNjA5IDE5LjI2OTcgMTcuMTYwOUMyMC42MjkxIDE3LjE2MDkgMjEuODQyMSAxNy4zOTcgMjIuOTA4OSAxNy44NjlDMjMuOTg1IDE4LjMzMTUgMjQuODI5OSAxOC45OTIzIDI1LjQ0MzUgMTkuODUxNEMyNi4wNTcxIDIwLjcxMDQgMjYuMzYzOSAyMS43MyAyNi4zNjM5IDIyLjkxWk0yMS45MTc2IDIyLjU4NDNDMjEuOTE3NiAyMS45ODAxIDIxLjgwNDQgMjEuNDcwNCAyMS41Nzc4IDIxLjA1NUMyMS4zNjA3IDIwLjYzMDIgMjEuMDUzOSAyMC4zMDQ1IDIwLjY1NzQgMjAuMDc3OUMyMC4yNjA5IDE5Ljg0MTkgMTkuNzk4MyAxOS43MjM5IDE5LjI2OTcgMTkuNzIzOUMxOC43NDExIDE5LjcyMzkgMTguMjc4NSAxOS44NDE5IDE3Ljg4MiAyMC4wNzc5QzE3LjQ4NTUgMjAuMzA0NSAxNy4xNzQgMjAuNjMwMiAxNi45NDc0IDIxLjA1NUMxNi43MzAzIDIxLjQ3MDQgMTYuNjIxNyAyMS45ODAxIDE2LjYyMTcgMjIuNTg0M0MxNi42MjE3IDIzLjE2OTYgMTYuNzM1IDIzLjY3OTMgMTYuOTYxNiAyNC4xMTM2QzE3LjE4ODIgMjQuNTM4NCAxNy40OTk3IDI0Ljg2NDEgMTcuODk2MiAyNS4wOTA2QzE4LjI5MjYgMjUuMzA3OCAxOC43NTk5IDI1LjQxNjMgMTkuMjk4IDI1LjQxNjNDMTkuODM2MSAyNS40MTYzIDIwLjI5ODcgMjUuMzA3OCAyMC42ODU3IDI1LjA5MDZDMjEuMDcyOCAyNC44NjQxIDIxLjM3NDggMjQuNTM4NCAyMS41OTIgMjQuMTEzNkMyMS44MDkxIDIzLjY3OTMgMjEuOTE3NiAyMy4xNjk2IDIxLjkxNzYgMjIuNTg0M1pNMjUuOTI1IDEzLjQzNjhDMjUuOTI1IDE0LjUwMzYgMjUuNjQxOCAxNS40NDI5IDI1LjA3NTQgMTYuMjU0N0MyNC41MTg0IDE3LjA1NzEgMjMuNzM5NiAxNy42ODQ5IDIyLjczODkgMTguMTM4QzIxLjczODMgMTguNTgxNyAyMC41OTEzIDE4LjgwMzUgMTkuMjk4IDE4LjgwMzVDMTguMDA0NyAxOC44MDM1IDE2Ljg1MyAxOC41ODE3IDE1Ljg0MjkgMTguMTM4QzE0Ljg0MjMgMTcuNjg0OSAxNC4wNTQgMTcuMDU3MSAxMy40NzgyIDE2LjI1NDdDMTIuOTExOCAxNS40NDI5IDEyLjYyODYgMTQuNTAzNiAxMi42Mjg2IDEzLjQzNjhDMTIuNjI4NiAxMi4xOTA3IDEyLjkxMTggMTEuMTM4MiAxMy40NzgyIDEwLjI3OTFDMTQuMDU0IDkuNDIwMDYgMTQuODQyMyA4Ljc2ODcgMTUuODQyOSA4LjMyNTAxQzE2Ljg0MzYgNy44ODEzMyAxNy45ODU4IDcuNjU5NDggMTkuMjY5NyA3LjY1OTQ4QzIwLjU3MjQgNy42NTk0OCAyMS43MjQxIDcuODgxMzMgMjIuNzI0OCA4LjMyNTAxQzIzLjcyNTQgOC43Njg3IDI0LjUwOSA5LjQyMDA2IDI1LjA3NTQgMTAuMjc5MUMyNS42NDE4IDExLjEzODIgMjUuOTI1IDEyLjE5MDcgMjUuOTI1IDEzLjQzNjhaTTIxLjUwNyAxMy42NjM0QzIxLjUwNyAxMy4xNDQyIDIxLjQxNzMgMTIuNjk1OCAyMS4yMzggMTIuMzE4MkMyMS4wNjggMTEuOTMxMSAyMC44MTc5IDExLjYzMzggMjAuNDg3NSAxMS40MjYxQzIwLjE1NzEgMTEuMjA5IDE5Ljc1MTEgMTEuMTAwNCAxOS4yNjk3IDExLjEwMDRDMTguODA3MSAxMS4xMDA0IDE4LjQxMDYgMTEuMjA0MiAxOC4wODAyIDExLjQxMTlDMTcuNzQ5OCAxMS42MTAyIDE3LjQ5NSAxMS45MDI4IDE3LjMxNTYgMTIuMjg5OUMxNy4xNDU3IDEyLjY2NzUgMTcuMDYwNyAxMy4xMjUzIDE3LjA2MDcgMTMuNjYzNEMxNy4wNjA3IDE0LjE5MiAxNy4xNDU3IDE0LjY1NDYgMTcuMzE1NiAxNS4wNTExQzE3LjQ5NSAxNS40MzgxIDE3Ljc0OTggMTUuNzQ0OSAxOC4wODAyIDE1Ljk3MTVDMTguNDIwMSAxNi4xODg2IDE4LjgyNiAxNi4yOTcyIDE5LjI5OCAxNi4yOTcyQzE5Ljc3OTUgMTYuMjk3MiAyMC4xODA3IDE2LjE4ODYgMjAuNTAxNiAxNS45NzE1QzIwLjgzMiAxNS43NDQ5IDIxLjA4MjIgMTUuNDM4MSAyMS4yNTIxIDE1LjA1MTFDMjEuNDIyIDE0LjY1NDYgMjEuNTA3IDE0LjE5MiAyMS41MDcgMTMuNjYzNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 53089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTguMTAzMiIgY3k9IjE4LjEwMzIiIHI9IjE4LjEwMzIiIGZpbGw9IiNGOUMxMkEiLz4KPHBhdGggZD0iTTE1LjIwNTggMjUuMjQ2NkgxNS40ODlDMTYuNTI3NCAyNS4yNDY2IDE3LjQzODMgMjUuMTI4NiAxOC4yMjE5IDI0Ljg5MjZDMTkuMDA1NCAyNC42NDcxIDE5LjY2MTUgMjQuMjgzNyAyMC4xOTAxIDIzLjgwMjJDMjAuNzI4MiAyMy4zMTE0IDIxLjEzNDEgMjIuNzAyNSAyMS40MDc5IDIxLjk3NTZDMjEuNjgxNyAyMS4yMzkzIDIxLjgxODYgMjAuMzcwOCAyMS44MTg2IDE5LjM3MDFWMTUuMjkyQzIxLjgxODYgMTQuNTg0IDIxLjc1MjUgMTMuOTcwNCAyMS42MjAzIDEzLjQ1MTJDMjEuNDk3NiAxMi45MjI1IDIxLjMxMzUgMTIuNDgzNiAyMS4wNjgxIDEyLjEzNDNDMjAuODIyNiAxMS43ODUgMjAuNTM0NyAxMS41MjU0IDIwLjIwNDMgMTEuMzU1NUMxOS44NzM5IDExLjE4NTUgMTkuNTEwNCAxMS4xMDA2IDE5LjExNCAxMS4xMDA2QzE4LjY5ODYgMTEuMTAwNiAxOC4zMzA0IDExLjIwOTEgMTguMDA5NSAxMS40MjYzQzE3LjY5NzkgMTEuNjQzNCAxNy40Mjg5IDExLjkzNiAxNy4yMDIzIDEyLjMwNDJDMTYuOTc1OCAxMi42NzI0IDE2LjgwNTkgMTMuMDg3NyAxNi42OTI2IDEzLjU1MDNDMTYuNTc5MyAxNC4wMTI5IDE2LjUyMjcgMTQuNDg0OSAxNi41MjI3IDE0Ljk2NjNDMTYuNTIyNyAxNS40ODU1IDE2LjU3OTMgMTUuOTcxNyAxNi42OTI2IDE2LjQyNDhDMTYuODE1MyAxNi44Nzc5IDE2Ljk4OTkgMTcuMjc0NCAxNy4yMTY1IDE3LjYxNDNDMTcuNDQzMSAxNy45NTQxIDE3LjczMSAxOC4yMjMxIDE4LjA4MDMgMTguNDIxNEMxOC40Mjk2IDE4LjYxMDIgMTguODM1NSAxOC43MDQ2IDE5LjI5OCAxOC43MDQ2QzE5Ljc2MDYgMTguNzA0NiAyMC4xNjE4IDE4LjYxOTYgMjAuNTAxNyAxOC40NDk3QzIwLjg1MDkgMTguMjc5OCAyMS4xNDM2IDE4LjA1MzIgMjEuMzc5NiAxNy43N0MyMS42MjUgMTcuNDg2OCAyMS44MDkxIDE3LjE4IDIxLjkzMTggMTYuODQ5NkMyMi4wNTQ2IDE2LjUwOTggMjIuMTE1OSAxNi4xNzQ2IDIyLjExNTkgMTUuODQ0MkwyMy40NzUzIDE2Ljc1MDVDMjMuNDc1MyAxNy4zODMgMjMuMzMzNyAxOC4wMDYgMjMuMDUwNSAxOC42MTk2QzIyLjc3NjcgMTkuMjMzMiAyMi4zOTQ0IDE5Ljc5MDIgMjEuOTAzNSAyMC4yOTA1QzIxLjQxMjYgMjAuNzkwOSAyMC44NDE1IDIxLjE5MjEgMjAuMTkwMSAyMS40OTQxQzE5LjU0ODIgMjEuNzg2OCAxOC44NjM4IDIxLjkzMzEgMTguMTM2OSAyMS45MzMxQzE3LjE5MjkgMjEuOTMzMSAxNi4zNDMzIDIxLjc2MzIgMTUuNTg4MSAyMS40MjMzQzE0Ljg0MjMgMjEuMDgzNSAxNC4yMDk4IDIwLjYwNjggMTMuNjkwNiAxOS45OTMyQzEzLjE3MTQgMTkuMzcwMSAxMi43NzQ5IDE4LjYzMzggMTIuNTAxMiAxNy43ODQyQzEyLjIyNzQgMTYuOTM0NiAxMi4wOTA1IDE2IDEyLjA5MDUgMTQuOTgwNUMxMi4wOTA1IDEzLjk3OTggMTIuMjYwNCAxMy4wNDA1IDEyLjYwMDMgMTIuMTYyNkMxMi45NDAxIDExLjI3NTIgMTMuNDIxNiAxMC40OTY0IDE0LjA0NDYgOS44MjYxN0MxNC42Njc3IDkuMTU1OTIgMTUuNDA4NyA4LjYyNzI4IDE2LjI2NzggOC4yNDAyM0MxNy4xMzYzIDcuODUzMTkgMTguMDk0NCA3LjY1OTY3IDE5LjE0MjMgNy42NTk2N0MyMC4xNzEzIDcuNjU5NjcgMjEuMTE1MyA3Ljg1NzkxIDIxLjk3NDMgOC4yNTQzOUMyMi44MzM0IDguNjQxNDQgMjMuNTgzOSA5LjE5ODQgMjQuMjI1OCA5LjkyNTI5QzI0Ljg2NzcgMTAuNjUyMiAyNS4zNjMzIDExLjUzNDggMjUuNzEyNiAxMi41NzMyQzI2LjA3MTMgMTMuNjExNyAyNi4yNTA3IDE0Ljc4MjIgMjYuMjUwNyAxNi4wODVWMTcuNjE0M0MyNi4yNTA3IDE5LjAxMTQgMjYuMDkwMiAyMC4yOTUyIDI1Ljc2OTIgMjEuNDY1OEMyNS40NDgzIDIyLjYzNjQgMjQuOTc2MyAyMy42NzQ4IDI0LjM1MzIgMjQuNTgxMUMyMy43Mzk2IDI1LjQ4NzMgMjIuOTkzOCAyNi4yNTY3IDIyLjExNTkgMjYuODg5MkMyMS4yNDc0IDI3LjUyMTYgMjAuMjYwOSAyOC4wMDMxIDE5LjE1NjQgMjguMzMzNUMxOC4wNjE0IDI4LjY1NDUgMTYuODYyNSAyOC44MTQ5IDE1LjU1OTggMjguODE0OUgxNS4yMDU4VjI1LjI0NjZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");

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

/***/ 75626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzViZDMyNzctMzBhNS00ZGFjLWEyOTItYzZlNDYwMGIxNzhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg0QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjgzQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OWVmMWZkYmQtM2FiMS00MDBiLWEyYjAtZjU4ZGNmNjZkY2NiIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1YmQzMjc3LTMwYTUtNGRhYy1hMjkyLWM2ZTQ2MDBiMTc4YyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjAb6dMAAAJ4SURBVHjaYvy6g2HQABYS1YsBsRcQOwCxNhArADEfEP8H4s9AfB+IrwLxASDeDsSvSDGckciQsQXiMiD2IMEDv4F4GxB3AfExYjQwEZBXBuKtQHwIiH1IDElWIPYH4qNAvAmIFSlxTDQQX4BGC6XAF2pWGDmOaQTiJUDMQ8X0CUpbK4C4hhTHNAFxHY0yDCMQNwNxBTGOiQHiWjrk4jYgjsDnGBUgnkGnIgUUQjPREzVy7pgMxNykmnr/OQODTiKqGJHFBSgNTQRiP/SQcYCWISSDhnkU5zJrdMeUkmPSuoMMDGsOUxxlpciOkQRid1JN+PoDmP/nQ9jp3hQ5xgtazYAdAzKKmVQT5m5hYLjzAsL2tKDIMaywJAJyjB2puq8Aq8PKORC2vS4Dg6spxVHlAHOMLqk6u5ch2F1ZVMnq2jDHyJGbaMuBxZaOIlUcowhzjACxOl5/QCRaFQkGhswAqhWCvMQ0IVDA9A2IRFsPLOhEBRioCkAl8EcgFiSmpO1cgeAfuQTB2EDRZAjdl0u0Oz7DWnrngbQBMTnIPJPEsoj49vUpIDYHRdOVQdAWvwaLpkPQpgNeAMo1+HzK7UFWiMDAAVgCBrVx/w5gqPyB9iTAjnkGxDsH0DHbYF0aWNbuHUDHdGPrN+0gp/amEGyFdoEwmp05oLRHR4eAypZcXG3gO0CcRUfHZEC7wzh7B4uAuJ0ODgF1hZYR02+qgvZtaAXqcZnPhMfliVROQyCz4qCdRJL72guAWJ9KZdA2qFmLKRmFuAttnzqSUVKD1G6BNim9oWZRZXwGBqRA7W9Q0xdUXUFbibDmx3sgfog0WAQKjRekGA4QYAC/W4cAbCK1hAAAAABJRU5ErkJggg==");

/***/ }),

/***/ 30835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzViZDMyNzctMzBhNS00ZGFjLWEyOTItYzZlNDYwMGIxNzhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjgwQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI5Q0REM0UwQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGZkZTk4ZTUtMTdkMS00ZjdhLWE1NDYtMWVjNjk1MWNkMjFkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTE2ZmVkZDktZDVhNy1kYzQ3LWIzMzYtNzY5N2JiY2UyZDJjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GR8qLwAAAvVJREFUeNrMWE1IVFEUPmMJ5ZRkQmZFJLUInHIpmNXUxsxKF1JBEQZCVlYUWBlpZJAQtJAIFVpIRrQoCGmsiGiwsiKSFtrKGKygSKQfEYKS+k5zb29+muc9M28eHvh4982797xvzj33/DzPxD2aNjJTOH8BsBnwA4XAMiAb+A2MAyFgCAgCd4HPEuUeQ8usBY4DmwR/4CfQC1wA+k0WZEzxfDkQAPqALUJLZgKVwFOgByhIhcwu4LXallRlq9K1PRkyZ4FrwBwH/ZN96wZwWkKmBWhO04HxAOeAkyZkdgNNLpzi88BOOzIrgA6XQgpbqDPWqSNPxyXAa6LpGGZ2BuznvGgn8hVM6UNtwLZYy/hVDHFb+JStibVMg0TDw1fWuBrhMDc7fo53lrG6BhWL/kbgfFzfAzNMV3sjbOhAbuNIvYRTB29ThYRIGiRTuwiTWTcNErZfk1klWTXxwxqvx8qWrvC2FdWEx4OhpMgUap8Zw3W+6Sp+WfF++zmttUSHq0VkRrk8YcvMk6zKywmfIJZ98LbuRqLLRxAxF1pzGq8QPR8SkZmrLTNpUErESegjwmd+9PaV1BENfwrfn0Cwb64xVsebP5tJfEtmkyOJ6LhydId1fysoUjeuHXjEsRohyxprC5kaWpMZlJ4m3qL/yYdRa8z+JJA3mkyfZNVFlEdVcNoHL6N/53t2XC2lq0VkgtqBF+H6ziQK8wurmqLjzMqlRGPfiW4+jqhFcLL6O4zz0y9gMacD3R0ETGvdLjQgB9sSP2cit1vjHdxGelTh/q9V2cjJ2DhCfQX7Z0SPBiyLcOypLCUqKxZlbN0GPYntm3hU5nJOCqgWKK7srOfD4iIRji2HEtXAw8ABF8nU6fiSqDu4ynnOBSLcCl036ZtOqd4mXXImkf4MG+Z7HfYh1rVHNYniXhulEhUB9x0g0qt0dafyFeKtqk83qGM4KSDAc++okrJC6XLk+4wWTh3lnAkAH4BkQDnq2RdVAeiPRWwNUe7+I8AARDiqkQLMxlkAAAAASUVORK5CYII=");

/***/ }),

/***/ 56344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzViZDMyNzctMzBhNS00ZGFjLWEyOTItYzZlNDYwMGIxNzhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI5Q0REM0REQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI5Q0REM0RDQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjQ0MDY0NmQtZDc5OS00MzcxLThkYTUtMTUzMWUyMTUyMTEzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Y2YxZjhkZDgtYTkwMy0yZTQ3LTk5ZWYtZWExODlhMGIyYzIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iFZGSwAAAxtJREFUeNrMWF1IVEEUPmsJlREFGakRLfm2bj5E0IObm9HfWhQlEvSDQVBk9bZRUUkKBVEP1kMJhaIVPRSIuOoS0SYVWgRBWhCG5UPGFvQjC0JJfYed2Xt322v3tNelAx87y9xz7jdz5vzMdcV66L+R6cLnFwABwA94gCXAHOAXMAYMA4NABOgGohLjLps74wOOAhsEC/gBdAHngSd2FHL+Mr8UCAG9wCbhTuYCW4DHQAfgzoTMTuCFckumslnZqv4XMmeAG8BsB88nn63bwEkJmXrg9BQFjAtoAI7ZIbMLOJWFKD4L7JiMTDFwNUsphXeoKfVQm8lcBvIkFodHiS7dISqtgSKCPhAkakF2+fTV9hlqTJdnOIk9kBC594xoq4VDixdi2SC20mPLVJkK/8TOBCVE+gaTiZR7ifZXxkmwDH1EGM6ybS5oLgcFwHoJmfoWY3xuH9GRKuM/u6loPlGJ27a5gCozUSaDNdE0ya48fBkfV/mSibDUbBQf5lxVZlrZTaskmk9fm/LAOseiy6/d5JVovRs1HdRFxm59+ExUCPd4Uc3yZojJeDSZxRKtplCKw4OG23QkXaglWrtCRMatQ3vCRvVOCOcT84s5ctLJQDPeUGCbzDgwMydTZ9+/SMS5KtoeD28tbWG5LSbzTaKgcwnLzTojsfE5Ob7bmLsbEfEY02TeS7TWLLeey59rjK3cZ1VZNJkBiVbZMmP8ZiR5LjaefgdtyCtNplei5Ss1dWDNyQTC/cZ4u19EJqKjqRC/I5IszCm/ttGoS9UVRN9jODPXjGf6r9guCT+BIi4HumqHJL0u78b1zuSXm6W9QZRnOlTjnmghKjhKpaHIbUR3HxSfY2n58cjaVi4qkvoa9Cj13tQjrd4OSEhdgf7o9A6xB7JIhHPLYau2cwg4mEUyB3R+sbodtHK/lAUifBW6ZefedELdbaZK6qzs50zCfK/DZ4ht7VGXRPFdmztdzrdhB4h0KVttmXyFeKv609UqDCcEBPjZTtVSVipbjnyf0cKlg1tupDYqUV3iPDX3RXUA+mMR74aodv8WYACKXLbvvXLw3AAAAABJRU5ErkJggg==");

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