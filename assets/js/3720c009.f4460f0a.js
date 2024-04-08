"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[84787],{

/***/ 44744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocTagsListPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(18215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(50118);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(23891);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(15418);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
const translateTagsPageTitle = ()=>(0,Translate/* translate */.T)({
        id: 'theme.tags.tagsPageTitle',
        message: 'Tags',
        description: 'The title of the tag list page'
    });
function getTagLetter(tag) {
    return tag[0].toUpperCase();
}
/**
 * Takes a list of tags (as provided by the content plugins), and groups them by
 * their initials.
 */ function listTagsByLetters(tags) {
    const groups = {};
    Object.values(tags).forEach((tag)=>{
        var _groups, _initial;
        const initial = getTagLetter(tag.label);
        var _;
        (_ = (_groups = groups)[_initial = initial]) !== null && _ !== void 0 ? _ : _groups[_initial] = [];
        groups[initial].push(tag);
    });
    return Object.entries(groups)// Sort letters
    .sort(([letter1], [letter2])=>letter1.localeCompare(letter2)).map(([letter, letterTags])=>{
        // Sort tags inside a letter
        const sortedTags = letterTags.sort((tag1, tag2)=>tag1.label.localeCompare(tag2.label));
        return {
            letter,
            tags: sortedTags
        };
    });
} //# sourceMappingURL=tagsUtils.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(99243);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(61917);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_Nnez"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}






function TagLetterEntryItem({ letterEntry }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                as: "h2",
                id: letterEntry.letter,
                children: letterEntry.letter
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: "padding--none",
                children: letterEntry.tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        className: styles_module.tag,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tag/* default */.A, _object_spread({}, tag))
                    }, tag.permalink))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {})
        ]
    });
}
function TagsListByLetter({ tags }) {
    const letterList = listTagsByLetters(tags);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "margin-vert--lg",
        children: letterList.map((letterEntry)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TagLetterEntryItem, {
                letterEntry: letterEntry
            }, letterEntry.letter))
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(63067);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocTagsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function DocTagsListPage_define_property(obj, key, value) {
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
function DocTagsListPage_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            DocTagsListPage_define_property(target, key, source[key]);
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
function _object_spread_props(target, source) {
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







function DocTagsListPageMetadata({ title }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be, {
                title: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchMetadata/* default */.A, {
                tag: "doc_tags_list"
            })
        ]
    });
}
function DocTagsListPageContent({ tags, title }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* HtmlClassNameProvider */.e3, {
        className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.page.docsTagsListPage),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container margin-vert--lg",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                    className: "col col--8 col--offset-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                            as: "h1",
                            children: title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsListByLetter, {
                            tags: tags
                        })
                    ]
                })
            })
        })
    });
}
function DocTagsListPage(props) {
    const title = translateTagsPageTitle();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocTagsListPageMetadata, _object_spread_props(DocTagsListPage_object_spread({}, props), {
                title: title
            })),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocTagsListPageContent, _object_spread_props(DocTagsListPage_object_spread({}, props), {
                title: title
            }))
        ]
    });
}


/***/ }),

/***/ 99243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(18215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28618);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function Tag({ permalink, label, count }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, {
        href: permalink,
        className: (0,clsx/* default */.A)(styles_module.tag, count ? styles_module.tagWithCount : styles_module.tagRegular),
        children: [
            label,
            count && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: count
            })
        ]
    });
}


/***/ })

}]);