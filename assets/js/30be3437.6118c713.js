"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["35995"], {
"87066": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_telegraf_introduction_mdx_30b_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-telegraf-introduction-mdx-30b.json
var site_docs_telegraf_introduction_mdx_30b_namespaceObject = JSON.parse('{"id":"telegraf/introduction","title":"Telegraf란?","description":"Telegraf에 대해 안내합니다.","source":"@site/docs/telegraf/introduction.mdx","sourceDirName":"telegraf","slug":"/telegraf/introduction","permalink":"/telegraf/introduction","draft":false,"unlisted":false,"editUrl":"undefined/docs/telegraf/introduction.mdx","tags":[],"version":"current","frontMatter":{"id":"introduction","title":"Telegraf란?","description":"Telegraf에 대해 안내합니다.","keywords":["Telegraf"],"isTranslationMissing":false},"sidebar":"pluginSidebar","previous":{"title":"사용 예시","permalink":"/focus/focus-usage"},"next":{"title":"플러그인 설치","permalink":"/telegraf/telegraf-plugin-install"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js
var DocCardList = __webpack_require__("56098");
;// CONCATENATED MODULE: ./docs/telegraf/introduction.mdx


const frontMatter = {
	id: 'introduction',
	title: 'Telegraf란?',
	description: 'Telegraf에 대해 안내합니다.',
	keywords: [
		'Telegraf'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Telegraf는 데이터베이스, 시스템 및 IoT 센서에서 메트릭 및 이벤트를 수집하고 전송하기 위한 플러그인 중심 서버 에이전트입니다. Telegraf는 Go로 작성되었으며 외부 종속성 없이 단일 바이너리로 컴파일되며 최소한의 메모리 공간만 필요합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 종류의 데이터 수집 및 전송"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "데이터베이스"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "MongoDB, MySQL, Redis 등의 데이터 소스에 연결하여 메트릭을 수집하고 보냅니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "시스템"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "현대적인 클라우드 플랫폼, 컨테이너 및 오케스트레이터 스택에서 메트릭을 수집합니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "IoT 센서"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "IoT 센서 및 장치에서 중요한 상태 저장 데이터(압력 수준, 온도 수준 등)를 수집합니다."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Telegraf 플러그인"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Telegraf는 메트릭을 수집, 처리, 집계 및 작성하는 플러그인 중심 에이전트입니다. 입력, 출력, 애그리게이터 및 프로세서를 포함한 4가지 범주의 플러그인을 지원합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Telegraf의 와탭 output plugin을 활용하고 와탭 Telegraf 에이전트를 설치하여 Telegraf에서 수집하는 메트릭스를 와탭 수집 서버로 전달할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "telegraf-sync-structure.png",
      desc: "Telegraf - 와탭 연동 구조"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Telegraf 플러그인 또는 에이전트는 사용자가 해당 서비스에 직접 설치하고 설정해야 합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "플러그인 또는 에이전트 설치 방법 및 사용 예시 안내를 다음과 같이 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(DocCardList/* default */.Z, {})]
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
"56098": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return DocCardList; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67026);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69369);
/* ESM import */var _theme_DocCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94310);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocCardListForCurrentSidebarCategory(param) {
    let { className } = param;
    const category = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentSidebarCategory */.jA)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocCardList, {
        items: category.items,
        className: className
    });
}
function DocCardList(props) {
    const { items, className } = props;
    if (!items) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocCardListForCurrentSidebarCategory, {
            ...props
        });
    }
    const filteredItems = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .filterDocCardListItems */.MN)(items);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z)('row', className),
        children: filteredItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("article", {
                className: "col col--6 margin-bottom--lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_DocCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
                    item: item
                })
            }, index))
    });
}


}),
"43115": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  c: function() { return usePluralForm; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2933);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://x.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms = [
    'zero',
    'one',
    'two',
    'few',
    'many',
    'other'
];
function sortPluralForms(pluralForms) {
    return OrderedPluralForms.filter((pf)=>pluralForms.includes(pf));
}
// Hardcoded english/fallback implementation
const EnglishPluralForms = {
    locale: 'en',
    pluralForms: sortPluralForms([
        'one',
        'other'
    ]),
    select: (count)=>count === 1 ? 'one' : 'other'
};
function createLocalePluralForms(locale) {
    const pluralRules = new Intl.PluralRules(locale);
    return {
        locale,
        pluralForms: sortPluralForms(pluralRules.resolvedOptions().pluralCategories),
        select: (count)=>pluralRules.select(count)
    };
}
/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */ function useLocalePluralForms() {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */.Z)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        try {
            return createLocalePluralForms(currentLocale);
        } catch (err) {
            console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);
            return EnglishPluralForms;
        }
    }, [
        currentLocale
    ]);
}
function selectPluralMessage(pluralMessages, count, localePluralForms) {
    const separator = '|';
    const parts = pluralMessages.split(separator);
    if (parts.length === 1) {
        return parts[0];
    }
    if (parts.length > localePluralForms.pluralForms.length) {
        console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);
    }
    const pluralForm = localePluralForms.select(count);
    const pluralFormIndex = localePluralForms.pluralForms.indexOf(pluralForm);
    // In case of not enough plural form messages, we take the last one (other)
    // instead of returning undefined
    return parts[Math.min(pluralFormIndex, parts.length - 1)];
}
/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */ function usePluralForm() {
    const localePluralForm = useLocalePluralForms();
    return {
        selectMessage: (count, pluralMessages)=>selectPluralMessage(pluralMessages, count, localePluralForm)
    };
} //# sourceMappingURL=usePluralForm.js.map


}),
"94310": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocCard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("67026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("83012");
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__("69369");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__("43115");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("96025");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__("34403");
;// CONCATENATED MODULE: ./src/theme/DocCard/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"cardContainer":"cardContainer_S8oU","cardTitle":"cardTitle_HoSo","cardDescription":"cardDescription_c27F"});
;// CONCATENATED MODULE: ./src/theme/DocCard/index.js









function useCategoryItemsPlural() {
    const { selectMessage } = (0,usePluralForm/* usePluralForm */.c)();
    return (count)=>selectMessage(count, (0,Translate/* translate */.I)({
            message: '1 item|{count} items',
            id: 'theme.docs.DocCard.categoryDescription.plurals',
            description: 'The default description for a category card in the generated index about how many items this category includes'
        }, {
            count
        }));
}
function CardContainer(param) {
    let { href, children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        href: href,
        className: (0,clsx/* default */.Z)('card padding--lg', styles_module.cardContainer),
        children: children
    });
}
function CardLayout(param) {
    let { href, icon, title, description } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContainer, {
        href: href,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                as: "h2",
                className: (0,clsx/* default */.Z)('text--truncate', styles_module.cardTitle),
                title: title,
                children: title
            }),
            description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: (0,clsx/* default */.Z)('text--truncate', styles_module.cardDescription),
                title: description,
                children: description
            })
        ]
    });
}
function CardCategory(param) {
    let { item } = param;
    const href = (0,docsUtils/* findFirstSidebarItemLink */.LM)(item);
    const categoryItemsPlural = useCategoryItemsPlural();
    // Unexpected: categories that don't have a link have been filtered upfront
    if (!href) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLayout, {
        href: href,
        // icon="🗃️"
        title: item.label,
        description: item.description ?? categoryItemsPlural(item.items.length)
    });
}
function CardLink(param) {
    let { item } = param;
    // const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
    const doc = (0,docsUtils/* useDocById */.xz)(item.docId ?? undefined);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLayout, {
        href: item.href,
        // icon={icon}
        title: item.label,
        description: item.description ?? doc?.description
    });
}
function DocCard(param) {
    let { item } = param;
    switch(item.type){
        case 'link':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLink, {
                item: item
            });
        case 'category':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardCategory, {
                item: item
            });
        default:
            throw new Error(`unknown item type ${JSON.stringify(item)}`);
    }
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