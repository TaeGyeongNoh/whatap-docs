"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[72604],{

/***/ 99807:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93070);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50551);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _define_property(obj, key, value) {
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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
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
function _object_without_properties_loose(source, excluded) {
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


const frontMatter = {
    id: 'server-aws',
    title: 'Elastic Beanstalk',
    description: 'Elastic Beanstalk環境でWhaTapサーバーモニタリングエージェントをインストールする方法を提供します。',
    tags: [
        'Server',
        'インストール',
        'Elastic Beanstalk',
        'AWS'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "server/server-os/server-aws",
    "id": "server/server-os/server-aws",
    "title": "Elastic Beanstalk",
    "description": "Elastic Beanstalk環境でWhaTapサーバーモニタリングエージェントをインストールする方法を提供します。",
    "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/server/server-os/sv-aws.mdx",
    "sourceDirName": "server/server-os",
    "slug": "/server/server-os/server-aws",
    "permalink": "/ja/server/server-os/server-aws",
    "draft": false,
    "editUrl": "undefined/docs/server/server-os/sv-aws.mdx",
    "tags": [
        {
            "label": "Server",
            "permalink": "/ja/tags/server"
        },
        {
            "label": "インストール",
            "permalink": "/ja/tags/インストール"
        },
        {
            "label": "Elastic Beanstalk",
            "permalink": "/ja/tags/elastic-beanstalk"
        },
        {
            "label": "AWS",
            "permalink": "/ja/tags/aws"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "server-aws",
        "title": "Elastic Beanstalk",
        "description": "Elastic Beanstalk環境でWhaTapサーバーモニタリングエージェントをインストールする方法を提供します。",
        "tags": [
            "Server",
            "インストール",
            "Elastic Beanstalk",
            "AWS"
        ]
    },
    "sidebar": "serverSidebar",
    "previous": {
        "title": "サーバー以外の場合",
        "permalink": "/ja/server/server-os/server-other"
    },
    "next": {
        "title": "インストールチェックリスト",
        "permalink": "/ja/server/install-check"
    }
};
const assets = {};


const toc = [];
const layoutProps = {
    toc
};
const MDXLayout = "wrapper";
function MDXContent(_param) {
    var { components } = _param, props = _object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Elastic Beanstalk`), `を使用してデプロイする場合、WhaTapエージェントを適用します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Linuxのインストール環境に合わせ、以下をElastic Beanstalkの `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `インストールスクリプト`), `に追加します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        parentName: "li",
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatap.server.host`), `と`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `license`), `は`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `プロジェクトアクセスキー`), `をユーザーに合わせて入力します。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "du",
        label: "Debian / Ubuntu",
        default: true,
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `wget http://repo.whatap.io/debian/release.gpg -O -|sudo apt-key add -
wget http://repo.whatap.io/debian/whatap-repo_1.0_all.deb
sudo dpkg -i whatap-repo_1.0_all.deb
sudo apt-get update
sudo apt-get install whatap-infra
echo "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf
echo "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
echo "createdtime=\`date +%s%N\`" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
sudo service whatap-infra restart
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "co",
        label: "CentOS",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `sudo rpm --import http://repo.whatap.io/centos/release.gpg
sudo rpm -Uvh http://repo.whatap.io/centos/5/noarch/whatap-repo-1.0-1.noarch.rpm
sudo yum install whatap-infra
echo "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf
echo "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
echo "createdtime=\`date +%s%N\`" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
sudo service whatap-infra restart
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "al",
        label: "Amazon Linux",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `sudo rpm --import http://repo.whatap.io/centos/release.gpg
echo "[whatap]" | sudo tee /etc/yum.repos.d/whatap.repo > /dev/null
echo "name=whatap packages for enterprise linux" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null
echo "baseurl=http://repo.whatap.io/centos/latest/\\$basearch" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null
echo "enabled=1" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null
echo "gpgcheck=0" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null
sudo yum install whatap-infra
echo "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf
echo "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
echo "createdtime=date +%s%N" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
sudo service whatap-infra restart
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "suse",
        label: "SUSE",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `sudo rpm --import http://repo.whatap.io/suse/release.gpg
echo "[whatap]" | sudo tee /etc/zypp/repos.d/whatap.repo > /dev/null
echo "name=whatap packages for enterprise linux" | sudo tee -a /etc/zypp/repos.d/whatap.repo > /dev/null
echo "baseurl=http://repo.whatap.io/suse/12/x86_64" | sudo tee -a /etc/zypp/repos.d/whatap.repo > /dev/null
echo "enabled=1" | sudo tee -a /etc/zypp/repos.d/whatap.repo > /dev/null
echo "gpgcheck=1" | sudo tee -a /etc/zypp/repos.d/whatap.repo > /dev/null
sudo zypper refresh
sudo zypper install whatap-infra
echo "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf
echo "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
echo "createdtime=\`date +%s%N\`" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
sudo /etc/init.d/whatap-infra restart
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "fb",
        label: "FreeBSD",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `wget http://repo.whatap.io/freebsd/10/whatap-infra.txz
pkg install whatap-infra.txz
echo "license={LICENSE_INFO}" |tee /usr/whatap/infra/conf/whatap.conf
echo "whatap.server.host={HOST_IP}" |tee -a /usr/whatap/infra/conf/whatap.conf
echo "createdtime=\`date +%s%N\`" |tee -a /usr/whatap/infra/conf/whatap.conf
service whatap_infra restart
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "xs",
        label: "XenServer",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `sudo rpm --import http://repo.whatap.io/centos/release.gpg
sudo rpm -Uvh http://repo.whatap.io/centos/python/5/noarch/whatap-repo-1.0-1.noarch.rpm
sudo yum install whatap-infra
echo "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf
echo "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
echo "createdtime=\`date +%s%N\`" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
sudo service whatap_infra restart
`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `次の`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `コマンド`), `を変更します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `echo "createdtime=date +%s%N" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `インストール後、サーバーモニタリングをBeanstalkに含めて、アプリケーションをデプロイすると、サーバーモニタリングが繰り返される可能性があります。 `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `WhaTapエージェントの内部IDが、上記のコマンドが実行されるたびに新しく発行されるためです。 今後のデプロイ時に新しいリストが追加されないように、次のように変更します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `echo "createdtime=12345678" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
`)))));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);