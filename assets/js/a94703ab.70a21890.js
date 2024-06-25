"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[79048],{

/***/ 8208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocRoot)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(86560);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(23891);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
var docsUtils = __webpack_require__(51538);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsSidebar.js
var docsSidebar = __webpack_require__(1088);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(15418);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(52204);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(83922);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useBackToTopButton.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


/** Wires the logic for the back to top button. */ function useBackToTopButton({ threshold ,  }) {
    const [shown, setShown] = (0,react.useState)(false);
    const isFocusedAnchor = (0,react.useRef)(false);
    const { startScroll , cancelScroll  } = (0,scrollUtils/* useSmoothScrollTo */.gk)();
    (0,scrollUtils/* useScrollPosition */.Mq)(({ scrollY: scrollTop  }, lastPosition)=>{
        const lastScrollTop = lastPosition === null || lastPosition === void 0 ? void 0 : lastPosition.scrollY;
        // Component is just being mounted. Not really a scroll event from the user.
        // Ignore it.
        if (!lastScrollTop) {
            return;
        }
        if (isFocusedAnchor.current) {
            // This scroll position change is triggered by navigating to an anchor.
            // Ignore it.
            isFocusedAnchor.current = false;
        } else if (scrollTop >= lastScrollTop) {
            // The user has scrolled down to "fight against" the animation. Cancel any
            // animation under progress.
            cancelScroll();
            setShown(false);
        } else if (scrollTop < threshold) {
            // Scrolled to the minimum position; hide the button.
            setShown(false);
        } else if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
            setShown(true);
        }
    });
    (0,useLocationChange/* useLocationChange */.$)((locationChangeEvent)=>{
        if (locationChangeEvent.location.hash) {
            isFocusedAnchor.current = true;
            setShown(false);
        }
    });
    return {
        shown,
        scrollToTop: ()=>startScroll(0)
    };
} //# sourceMappingURL=useBackToTopButton.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"backToTopButton":"backToTopButton_sjWU","backToTopButtonShow":"backToTopButtonShow_xfvO"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function BackToTopButton() {
    const { shown , scrollToTop  } = useBackToTopButton({
        threshold: 300
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        "aria-label": (0,Translate/* translate */.T)({
            id: 'theme.BackToTopButton.buttonAriaLabel',
            message: 'Scroll back to top',
            description: 'The ARIA label for the back to top button'
        }),
        className: (0,clsx/* default */.A)('clean-btn', ThemeClassNames/* ThemeClassNames */.G.common.backToTopButton, styles_module.backToTopButton, shown && styles_module.backToTopButtonShow),
        type: "button",
        onClick: scrollToTop
    });
};

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/accessibilityUtils.js
var accessibilityUtils = __webpack_require__(4249);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(93577);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(53114);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js
var Logo = __webpack_require__(65485);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Arrow/index.js
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
function IconArrow(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", _objectSpreadProps(_objectSpread({
        width: "20",
        height: "20",
        "aria-hidden": "true"
    }, props), {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            fill: "#7a7a7a",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/CollapseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CollapseButton_styles_module = ({"collapseSidebarButton":"collapseSidebarButton_JQG6","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_Iseg"});
;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/CollapseButton/index.js






function CollapseButton({ onClick  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        title: (0,Translate/* translate */.T)({
            id: 'theme.docs.sidebar.collapseButtonTitle',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        "aria-label": (0,Translate/* translate */.T)({
            id: 'theme.docs.sidebar.collapseButtonAriaLabel',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        className: (0,clsx/* default */.A)('button button--secondary button--outline', CollapseButton_styles_module.collapseSidebarButton),
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconArrow, {
            className: CollapseButton_styles_module.collapseSidebarButtonIcon
        })
    });
};

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var announcementBar = __webpack_require__(72501);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(25576);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docSidebarItemsExpandedState.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const EmptyContext = Symbol('EmptyContext');
const Context = /*#__PURE__*/ react.createContext(EmptyContext);
/**
 * Should be used to wrap one sidebar category level. This provider syncs the
 * expanded states of all sibling categories, and categories can choose to
 * collapse itself if another one is expanded.
 */ function DocSidebarItemsExpandedStateProvider({ children ,  }) {
    const [expandedItem, setExpandedItem] = (0,react.useState)(null);
    const contextValue = (0,react.useMemo)(()=>({
            expandedItem,
            setExpandedItem
        }), [
        expandedItem
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Context.Provider, {
        value: contextValue,
        children: children
    });
}
function useDocSidebarItemsExpandedState() {
    const value = (0,react.useContext)(Context);
    if (value === EmptyContext) {
        throw new reactUtils/* ReactContextError */.dV('DocSidebarItemsExpandedStateProvider');
    }
    return value;
} //# sourceMappingURL=docSidebarItemsExpandedState.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(98202);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(93989);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28618);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(12075);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Category/index.js
function Category_defineProperty(obj, key, value) {
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
function Category_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            Category_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function Category_ownKeys(object, enumerableOnly) {
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
function Category_objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        Category_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({ isActive , collapsed , updateCollapsed  }) {
    const wasActive = (0,reactUtils/* usePrevious */.ZC)(isActive);
    (0,react.useEffect)(()=>{
        const justBecameActive = isActive && !wasActive;
        if (justBecameActive && collapsed) {
            updateCollapsed(false);
        }
    }, [
        isActive,
        wasActive,
        collapsed,
        updateCollapsed
    ]);
}
/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */ function useCategoryHrefWithSSRFallback(item) {
    const isBrowser = (0,useIsBrowser/* default */.A)();
    return (0,react.useMemo)(()=>{
        if (item.href && !item.linkUnlisted) {
            return item.href;
        }
        // In these cases, it's not necessary to render a fallback
        // We skip the "findFirstCategoryLink" computation
        if (isBrowser || !item.collapsible) {
            return undefined;
        }
        return (0,docsUtils/* findFirstSidebarItemLink */.Nr)(item);
    }, [
        item,
        isBrowser
    ]);
}
function Category_CollapseButton({ collapsed , categoryLabel , onClick  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        "aria-label": collapsed ? (0,Translate/* translate */.T)({
            id: 'theme.DocSidebarItem.expandCategoryAriaLabel',
            message: "Expand sidebar category '{label}'",
            description: 'The ARIA label to expand the sidebar category'
        }, {
            label: categoryLabel
        }) : (0,Translate/* translate */.T)({
            id: 'theme.DocSidebarItem.collapseCategoryAriaLabel',
            message: "Collapse sidebar category '{label}'",
            description: 'The ARIA label to collapse the sidebar category'
        }, {
            label: categoryLabel
        }),
        "aria-expanded": !collapsed,
        type: "button",
        className: "clean-btn menu__caret",
        onClick: onClick
    });
}
function DocSidebarItemCategory(_param) {
    var { item , onItemClick , activePath , level , index  } = _param, props = _objectWithoutProperties(_param, [
        "item",
        "onItemClick",
        "activePath",
        "level",
        "index"
    ]);
    const { items , label , collapsible , className , href  } = item;
    const { docs: { sidebar: { autoCollapseCategories  } ,  } ,  } = (0,useThemeConfig/* useThemeConfig */.p)();
    const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
    const isActive = (0,docsUtils/* isActiveSidebarItem */.w8)(item, activePath);
    const isCurrentPage = (0,routesUtils/* isSamePath */.ys)(href, activePath);
    const { collapsed , setCollapsed  } = (0,Collapsible/* useCollapsible */.u)({
        // Active categories are always initialized as expanded. The default
        // (`item.collapsed`) is only used for non-active categories.
        initialState: ()=>{
            if (!collapsible) {
                return false;
            }
            return isActive ? false : item.collapsed;
        }
    });
    const { expandedItem , setExpandedItem  } = useDocSidebarItemsExpandedState();
    // Use this instead of `setCollapsed`, because it is also reactive
    const updateCollapsed = (toCollapsed = !collapsed)=>{
        setExpandedItem(toCollapsed ? null : index);
        setCollapsed(toCollapsed);
    };
    useAutoExpandActiveCategory({
        isActive,
        collapsed,
        updateCollapsed
    });
    (0,react.useEffect)(()=>{
        if (collapsible && expandedItem != null && expandedItem !== index && autoCollapseCategories) {
            setCollapsed(true);
        }
    }, [
        collapsible,
        expandedItem,
        index,
        setCollapsed,
        autoCollapseCategories
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemCategory, ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemCategoryLevel(level), 'menu__list-item', {
            'menu__list-item--collapsed': collapsed
        }, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,clsx/* default */.A)('menu__list-item-collapsible', {
                    'menu__list-item-collapsible--active': isCurrentPage
                }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, Category_objectSpreadProps(Category_objectSpread({
                        className: (0,clsx/* default */.A)('menu__link', {
                            'menu__link--sublist': collapsible,
                            'menu__link--sublist-caret': !href && collapsible,
                            'menu__link--active': isActive
                        }),
                        onClick: collapsible ? (e)=>{
                            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
                            if (href) {
                                updateCollapsed(false);
                            } else {
                                e.preventDefault();
                                updateCollapsed();
                            }
                        } : ()=>{
                            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
                        },
                        "aria-current": isCurrentPage ? 'page' : undefined,
                        role: collapsible && !href ? 'button' : undefined,
                        "aria-expanded": collapsible && !href ? !collapsed : undefined,
                        href: collapsible ? hrefWithSSRFallback !== null && hrefWithSSRFallback !== void 0 ? hrefWithSSRFallback : '#' : hrefWithSSRFallback
                    }, props), {
                        children: label
                    })),
                    href && collapsible && /*#__PURE__*/ (0,jsx_runtime.jsx)(Category_CollapseButton, {
                        collapsed: collapsed,
                        categoryLabel: label,
                        onClick: (e)=>{
                            e.preventDefault();
                            updateCollapsed();
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N, {
                lazy: true,
                as: "ul",
                className: "menu__list",
                collapsed: collapsed,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_DocSidebarItems, {
                    items: items,
                    tabIndex: collapsed ? -1 : 0,
                    onItemClick: onItemClick,
                    activePath: activePath,
                    level: level + 1
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(11410);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js + 1 modules
var ExternalLink = __webpack_require__(8096);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_styles_module = ({"menuExternalLink":"menuExternalLink_NmtK"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/index.js
function Link_defineProperty(obj, key, value) {
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
function Link_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            Link_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function Link_ownKeys(object, enumerableOnly) {
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
function Link_objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        Link_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function Link_objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = Link_objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function Link_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function DocSidebarItemLink(_param) {
    var { item , onItemClick , activePath , level , index  } = _param, props = Link_objectWithoutProperties(_param, [
        "item",
        "onItemClick",
        "activePath",
        "level",
        "index"
    ]);
    const { href , label , className , autoAddBaseUrl  } = item;
    const isActive = (0,docsUtils/* isActiveSidebarItem */.w8)(item, activePath);
    const isInternalLink = (0,isInternalUrl/* default */.A)(href);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLink, ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLinkLevel(level), 'menu__list-item', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, Link_objectSpreadProps(Link_objectSpread({
            className: (0,clsx/* default */.A)('menu__link', !isInternalLink && Link_styles_module.menuExternalLink, {
                'menu__link--active': isActive
            }),
            autoAddBaseUrl: autoAddBaseUrl,
            "aria-current": isActive ? 'page' : undefined,
            to: href
        }, isInternalLink && {
            onClick: onItemClick ? ()=>onItemClick(item) : undefined
        }, props), {
            children: [
                label,
                !isInternalLink && /*#__PURE__*/ (0,jsx_runtime.jsx)(ExternalLink/* default */.A, {})
            ]
        }))
    }, label);
};

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Html_styles_module = ({"menuHtmlItem":"menuHtmlItem_M9Kj"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocSidebarItemHtml({ item , level , index  }) {
    const { value , defaultStyle , className  } = item;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLink, ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLinkLevel(level), defaultStyle && [
            Html_styles_module.menuHtmlItem,
            'menu__list-item'
        ], className),
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: {
            __html: value
        }
    }, index);
};

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/index.js
function DocSidebarItem_defineProperty(obj, key, value) {
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
function DocSidebarItem_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            DocSidebarItem_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function DocSidebarItem_objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = DocSidebarItem_objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function DocSidebarItem_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocSidebarItem(_param) {
    var { item  } = _param, props = DocSidebarItem_objectWithoutProperties(_param, [
        "item"
    ]);
    switch(item.type){
        case 'category':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItemCategory, DocSidebarItem_objectSpread({
                item: item
            }, props));
        case 'html':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItemHtml, DocSidebarItem_objectSpread({
                item: item
            }, props));
        case 'link':
        default:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItemLink, DocSidebarItem_objectSpread({
                item: item
            }, props));
    }
};

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItems/index.js
function DocSidebarItems_defineProperty(obj, key, value) {
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
function DocSidebarItems_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            DocSidebarItems_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function DocSidebarItems_objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = DocSidebarItems_objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function DocSidebarItems_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function DocSidebarItems(_param) {
    var { items  } = _param, props = DocSidebarItems_objectWithoutProperties(_param, [
        "items"
    ]);
    const visibleItems = (0,docsUtils/* useVisibleSidebarItems */.Y)(items, props.activePath);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItemsExpandedStateProvider, {
        children: visibleItems.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItem, DocSidebarItems_objectSpread({
                item: item,
                index: index
            }, props), index))
    });
}
// Optimize sidebar at each "level"
/* harmony default export */ const theme_DocSidebarItems = (/*#__PURE__*/(0,react.memo)(DocSidebarItems));

;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Content_styles_module = ({"menu":"menu_Y1UP","menuWithAnnouncementBar":"menuWithAnnouncementBar_fPny"});
;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/Content/index.js








function useShowAnnouncementBar() {
    const { isActive  } = (0,announcementBar/* useAnnouncementBar */.M)();
    const [showAnnouncementBar, setShowAnnouncementBar] = (0,react.useState)(isActive);
    (0,scrollUtils/* useScrollPosition */.Mq)(({ scrollY  })=>{
        if (isActive) {
            setShowAnnouncementBar(scrollY === 0);
        }
    }, [
        isActive
    ]);
    return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent({ path , sidebar , className  }) {
    const showAnnouncementBar = useShowAnnouncementBar();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
        "aria-label": (0,Translate/* translate */.T)({
            id: 'theme.docs.sidebar.navAriaLabel',
            message: 'Docs sidebar',
            description: 'The ARIA label for the sidebar navigation'
        }),
        className: (0,clsx/* default */.A)('menu thin-scrollbar', Content_styles_module.menu, showAnnouncementBar && Content_styles_module.menuWithAnnouncementBar, className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarMenu, 'menu__list'),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_DocSidebarItems, {
                items: sidebar,
                activePath: path,
                level: 1
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Desktop_styles_module = ({"sidebar":"sidebar_mhZE","sidebarWithHideableNavbar":"sidebarWithHideableNavbar__6UL","sidebarHidden":"sidebarHidden__LRd","sidebarLogo":"sidebarLogo_F_0z"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(90062);
;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/index.js











function DocSidebarDesktop({ path , sidebar , onCollapse , isHidden  }) {
    const { navbar: { hideOnScroll  } , docs: { sidebar: { hideable  } ,  } ,  } = (0,useThemeConfig/* useThemeConfig */.p)();
    const { i18n: { currentLocale  } ,  } = (0,useDocusaurusContext/* default */.A)();
    let whataphome, docshome;
    if (currentLocale == 'ko') {
        whataphome = 'https://www.whatap.io';
        docshome = '/';
    } else {
        whataphome = 'https://www.whatap.io/' + currentLocale;
        docshome = '/' + currentLocale;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.A)(Desktop_styles_module.sidebar, hideOnScroll && Desktop_styles_module.sidebarWithHideableNavbar, isHidden && Desktop_styles_module.sidebarHidden),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "hold-menu",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: docshome,
                                className: "home",
                                children: (0,Translate/* translate */.T)({
                                    id: "docs_Name",
                                    message: "WhaTap Docs"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                                to: whataphome,
                                target: "_blank",
                                className: "ext",
                                rel: "noopener noreferrer",
                                children: (0,Translate/* translate */.T)({
                                    id: "whatap_link_go",
                                    message: "와탭 홈페이지 바로가기"
                                })
                            })
                        })
                    ]
                })
            }),
            hideOnScroll && /*#__PURE__*/ (0,jsx_runtime.jsx)(Logo/* default */.A, {
                tabIndex: -1,
                className: Desktop_styles_module.sidebarLogo
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarDesktopContent, {
                path: path,
                sidebar: sidebar
            }),
            hideable && /*#__PURE__*/ (0,jsx_runtime.jsx)(CollapseButton, {
                onClick: onCollapse
            })
        ]
    });
}
/* harmony default export */ const Desktop = (/*#__PURE__*/react.memo(DocSidebarDesktop));

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(11628);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js
var navbarMobileSidebar = __webpack_require__(24937);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Mobile/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu = ({ sidebar , path  })=>{
    const mobileSidebar = (0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarMenu, 'menu__list'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_DocSidebarItems, {
            items: sidebar,
            activePath: path,
            onItemClick: (item)=>{
                // Mobile sidebar should only be closed if the category has a link
                if (item.type === 'category' && item.href) {
                    mobileSidebar.toggle();
                }
                if (item.type === 'link') {
                    mobileSidebar.toggle();
                }
            },
            level: 1
        })
    });
};
function DocSidebarMobile(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(content/* NavbarSecondaryMenuFiller */.GX, {
        component: DocSidebarMobileSecondaryMenu,
        props: props
    });
}
/* harmony default export */ const Mobile = (/*#__PURE__*/react.memo(DocSidebarMobile));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/index.js
function DocSidebar_defineProperty(obj, key, value) {
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
function DocSidebar_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            DocSidebar_defineProperty(target, key, source[key]);
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



function DocSidebar(props) {
    const windowSize = (0,useWindowSize/* useWindowSize */.l)();
    // Desktop sidebar visible on hydration: need SSR rendering
    const shouldRenderSidebarDesktop = windowSize === 'desktop' || windowSize === 'ssr';
    // Mobile sidebar not visible on hydration: can avoid SSR rendering
    const shouldRenderSidebarMobile = windowSize === 'mobile';
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            shouldRenderSidebarDesktop && /*#__PURE__*/ (0,jsx_runtime.jsx)(Desktop, DocSidebar_objectSpread({}, props)),
            shouldRenderSidebarMobile && /*#__PURE__*/ (0,jsx_runtime.jsx)(Mobile, DocSidebar_objectSpread({}, props))
        ]
    });
};

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/ExpandButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ExpandButton_styles_module = ({"expandButton":"expandButton_TmdG","expandButtonIcon":"expandButtonIcon_i1dp"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/ExpandButton/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocRootLayoutSidebarExpandButton({ toggleSidebar  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: ExpandButton_styles_module.expandButton,
        title: (0,Translate/* translate */.T)({
            id: 'theme.docs.sidebar.expandButtonTitle',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar'
        }),
        "aria-label": (0,Translate/* translate */.T)({
            id: 'theme.docs.sidebar.expandButtonAriaLabel',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar'
        }),
        tabIndex: 0,
        role: "button",
        onKeyDown: toggleSidebar,
        onClick: toggleSidebar,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconArrow, {
            className: ExpandButton_styles_module.expandButtonIcon
        })
    });
};

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Sidebar_styles_module = ({"docSidebarContainer":"docSidebarContainer_YfHR","docSidebarContainerHidden":"docSidebarContainerHidden_DPk8","sidebarViewport":"sidebarViewport_aRkj"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange({ children  }) {
    const sidebar = (0,docsSidebar/* useDocsSidebar */.t)();
    var ref;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
        children: children
    }, (ref = sidebar === null || sidebar === void 0 ? void 0 : sidebar.name) !== null && ref !== void 0 ? ref : 'noSidebar');
}
function DocRootLayoutSidebar({ sidebar , hiddenSidebarContainer , setHiddenSidebarContainer ,  }) {
    const { pathname  } = (0,react_router/* useLocation */.zy)();
    const [hiddenSidebar, setHiddenSidebar] = (0,react.useState)(false);
    const toggleSidebar = (0,react.useCallback)(()=>{
        if (hiddenSidebar) {
            setHiddenSidebar(false);
        }
        // onTransitionEnd won't fire when sidebar animation is disabled
        // fixes https://github.com/facebook/docusaurus/issues/8918
        if (!hiddenSidebar && (0,accessibilityUtils/* prefersReducedMotion */.O)()) {
            setHiddenSidebar(true);
        }
        setHiddenSidebarContainer((value)=>!value);
    }, [
        setHiddenSidebarContainer,
        hiddenSidebar
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("aside", {
        className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarContainer, Sidebar_styles_module.docSidebarContainer, hiddenSidebarContainer && Sidebar_styles_module.docSidebarContainerHidden),
        onTransitionEnd: (e)=>{
            if (!e.currentTarget.classList.contains(Sidebar_styles_module.docSidebarContainer)) {
                return;
            }
            if (hiddenSidebarContainer) {
                setHiddenSidebar(true);
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ResetOnSidebarChange, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,clsx/* default */.A)(Sidebar_styles_module.sidebarViewport, hiddenSidebar && Sidebar_styles_module.sidebarViewportHidden),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebar, {
                        sidebar: sidebar,
                        path: pathname,
                        onCollapse: toggleSidebar,
                        isHidden: hiddenSidebar
                    }),
                    hiddenSidebar && /*#__PURE__*/ (0,jsx_runtime.jsx)(DocRootLayoutSidebarExpandButton, {
                        toggleSidebar: toggleSidebar
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Main_styles_module = ({"docMainContainer":"docMainContainer_TBSr","docMainContainerEnhanced":"docMainContainerEnhanced_lQrH","docItemWrapperEnhanced":"docItemWrapperEnhanced_JWYK"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocRootLayoutMain({ hiddenSidebarContainer , children  }) {
    const sidebar = (0,docsSidebar/* useDocsSidebar */.t)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        className: (0,clsx/* default */.A)(Main_styles_module.docMainContainer, (hiddenSidebarContainer || !sidebar) && Main_styles_module.docMainContainerEnhanced),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (0,clsx/* default */.A)('container padding-top--md padding-bottom--lg', Main_styles_module.docItemWrapper, hiddenSidebarContainer && Main_styles_module.docItemWrapperEnhanced),
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_styles_module = ({"docRoot":"docRoot_UBD9","docsWrapper":"docsWrapper_hBAB"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocRootLayout({ children  }) {
    const sidebar = (0,docsSidebar/* useDocsSidebar */.t)();
    const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: Layout_styles_module.docsWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BackToTopButton, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: Layout_styles_module.docRoot,
                children: [
                    sidebar && /*#__PURE__*/ (0,jsx_runtime.jsx)(DocRootLayoutSidebar, {
                        sidebar: sidebar.items,
                        hiddenSidebarContainer: hiddenSidebarContainer,
                        setHiddenSidebarContainer: setHiddenSidebarContainer
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocRootLayoutMain, {
                        hiddenSidebarContainer: hiddenSidebarContainer,
                        children: children
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NotFound/Content/index.js
var Content = __webpack_require__(99439);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocRoot(props) {
    const currentDocRouteMetadata = (0,docsUtils/* useDocRootMetadata */.B5)(props);
    if (!currentDocRouteMetadata) {
        // We only render the not found content to avoid a double layout
        // see https://github.com/facebook/docusaurus/pull/7966#pullrequestreview-1077276692
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Content/* default */.A, {});
    }
    const { docElement , sidebarName , sidebarItems  } = currentDocRouteMetadata;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* HtmlClassNameProvider */.e3, {
        className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.page.docsDocPage),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(docsSidebar/* DocsSidebarProvider */.V, {
            name: sidebarName,
            items: sidebarItems,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocRootLayout, {
                children: docElement
            })
        })
    });
};


/***/ }),

/***/ 99439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NotFoundContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15418);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61917);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function NotFoundContent({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)('container margin-vert--xl', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "row",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col col--6 col--offset-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                        as: "h1",
                        className: "hero__title",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                            id: "theme.NotFound.title",
                            description: "The title of the 404 page",
                            children: "Page Not Found"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                            id: "theme.NotFound.p1",
                            description: "The first paragraph of the 404 page",
                            children: "We could not find what you were looking for."
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                            id: "theme.NotFound.p2",
                            description: "The 2nd paragraph of the 404 page",
                            children: "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."
                        })
                    })
                ]
            })
        })
    });
};


/***/ })

}]);