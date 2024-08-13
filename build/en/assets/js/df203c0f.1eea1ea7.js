"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[24279],{

/***/ 32638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Unlisted)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93192);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23891);
/* harmony import */ var _theme_Admonition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39608);
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
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
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



function UnlistedBanner({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Admonition__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        type: "caution",
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .UnlistedBannerTitle */ .Rc, {}),
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(className, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames */ .G.common.unlistedBanner),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .UnlistedBannerMessage */ .Uh, {})
    });
}
function Unlisted(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .UnlistedMetadata */ .AE, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UnlistedBanner, _objectSpread({}, props))
        ]
    });
};


/***/ }),

/***/ 67933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DocTagDocListPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28618);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83477);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86560);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23891);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15418);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63067);
/* harmony import */ var _theme_ContentVisibility_Unlisted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32638);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61917);
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







// Very simple pluralization: probably good enough for now
function useNDocsTaggedPlural() {
    const { selectMessage  } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .usePluralForm */ .W)();
    return (count)=>selectMessage(count, (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */ .T)({
            id: 'theme.docs.tagDocListPageTitle.nDocsTagged',
            description: 'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: 'One doc tagged|{count} docs tagged'
        }, {
            count
        }));
}
function usePageTitle(props) {
    const nDocsTaggedPlural = useNDocsTaggedPlural();
    return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */ .T)({
        id: 'theme.docs.tagDocListPageTitle',
        description: 'The title of the page for a docs tag',
        message: '{nDocsTagged} with "{tagName}"'
    }, {
        nDocsTagged: nDocsTaggedPlural(props.tag.count),
        tagName: props.tag.label
    });
}
function DocItem({ doc  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "margin-vert--lg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                to: doc.permalink,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                    as: "h2",
                    children: doc.title
                })
            }),
            doc.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                children: doc.description
            })
        ]
    });
}
function DocTagDocListPageMetadata({ title , tag  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .PageMetadata */ .be, {
                title: title,
                description: tag.description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                tag: "doc_tag_doc_list"
            })
        ]
    });
}
function DocTagDocListPageContent({ tag , title  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .HtmlClassNameProvider */ .e3, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .ThemeClassNames */ .G.page.docsTagDocListPage),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "container margin-vert--lg",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    className: "col col--8 col--offset-2",
                    children: [
                        tag.unlisted && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_ContentVisibility_Unlisted__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            className: "margin-bottom--xl",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                                    as: "h1",
                                    children: title
                                }),
                                tag.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    children: tag.description
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                                    href: tag.allTagsPath,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                                        id: "theme.tags.tagsPageLink",
                                        description: "The label of the link targeting the tag list page",
                                        children: "View All Tags"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                            className: "margin-vert--lg",
                            children: tag.items.map((doc)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocItem, {
                                    doc: doc
                                }, doc.id))
                        })
                    ]
                })
            })
        })
    });
}
function DocTagDocListPage(props) {
    const title = usePageTitle(props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocTagDocListPageMetadata, _objectSpreadProps(_objectSpread({}, props), {
                title: title
            })),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocTagDocListPageContent, _objectSpreadProps(_objectSpread({}, props), {
                title: title
            }))
        ]
    });
};


/***/ }),

/***/ 93192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AE: () => (/* binding */ UnlistedMetadata),
/* harmony export */   Rc: () => (/* binding */ UnlistedBannerTitle),
/* harmony export */   TT: () => (/* binding */ DraftBannerMessage),
/* harmony export */   Uh: () => (/* binding */ UnlistedBannerMessage),
/* harmony export */   Yh: () => (/* binding */ DraftBannerTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15418);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3248);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function UnlistedBannerTitle() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        id: "theme.contentVisibility.unlistedBanner.title",
        description: "The unlisted content banner title",
        children: "Unlisted page"
    });
}
function UnlistedBannerMessage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        id: "theme.contentVisibility.unlistedBanner.message",
        description: "The unlisted content banner message",
        children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it."
    });
}
// TODO Docusaurus v4 breaking change (since it's v3 public theme-common API :/)
//  Move this to theme/ContentVisibility/Unlisted
function UnlistedMetadata() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
            name: "robots",
            content: "noindex, nofollow"
        })
    });
}
function DraftBannerTitle() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        id: "theme.contentVisibility.draftBanner.title",
        description: "The draft content banner title",
        children: "Draft page"
    });
}
function DraftBannerMessage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        id: "theme.contentVisibility.draftBanner.message",
        description: "The draft content banner message",
        children: "This page is a draft. It will only be visible in dev and be excluded from the production build."
    });
} //# sourceMappingURL=contentVisibilityTranslations.js.map


/***/ })

}]);