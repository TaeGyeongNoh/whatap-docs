"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["47293"], {
"62204": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return BlogArchive; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83012);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96025);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82743);
/* ESM import */var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11437);
/* ESM import */var _theme_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88714);
/* ESM import */var _theme_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34403);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function Year(param) {
    let { year, posts } = param;
    const dateTimeFormat = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .useDateTimeFormat */.P)({
        day: 'numeric',
        month: 'long',
        timeZone: 'UTC'
    });
    const formatDate = (lastUpdated)=>dateTimeFormat.format(new Date(lastUpdated));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */.Z, {
                as: "h3",
                id: year,
                children: year
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
                            to: post.metadata.permalink,
                            children: [
                                formatDate(post.metadata.date),
                                " - ",
                                post.metadata.title
                            ]
                        })
                    }, post.metadata.date))
            })
        ]
    });
}
function YearsSection(param) {
    let { years } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        className: "margin-vert--lg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "row",
                children: years.map((_props, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "col col--4 margin-vert--lg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Year, {
                            ..._props
                        })
                    }, idx))
            })
        })
    });
}
function listPostsByYears(blogPosts) {
    const postsByYear = blogPosts.reduce((posts, post)=>{
        const year = post.metadata.date.split('-')[0];
        const yearPosts = posts.get(year) ?? [];
        return posts.set(year, [
            post,
            ...yearPosts
        ]);
    }, new Map());
    return Array.from(postsByYear, (param)=>{
        let [year, posts] = param;
        return {
            year,
            posts
        };
    });
}
function BlogArchive(param) {
    let { archive } = param;
    const title = (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */.I)({
        id: 'theme.blog.archive.title',
        message: 'Archive',
        description: 'The page & hero title of the blog archive page'
    });
    const description = (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */.I)({
        id: 'theme.blog.archive.description',
        message: 'Archive',
        description: 'The page & hero description of the blog archive page'
    });
    const years = listPostsByYears(archive.blogPosts);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .PageMetadata */.d, {
                title: title,
                description: description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", {
                        className: "hero hero--primary",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */.Z, {
                                    as: "h1",
                                    className: "hero__title",
                                    children: title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    className: "hero__subtitle",
                                    children: description
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
                        children: years.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(YearsSection, {
                            years: years
                        })
                    })
                ]
            })
        ]
    });
}


}),
"11437": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  P: function() { return useDateTimeFormat; }
});
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2933);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function useCalendar() {
    const { i18n: { currentLocale, localeConfigs } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */.Z)();
    return localeConfigs[currentLocale].calendar;
}
function useDateTimeFormat() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */.Z)();
    const calendar = useCalendar();
    return new Intl.DateTimeFormat(currentLocale, {
        calendar,
        ...options
    });
} //# sourceMappingURL=IntlUtils.js.map


}),

}]);