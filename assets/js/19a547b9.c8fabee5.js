"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[86915],{

/***/ 79518:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'quick-start',
	title: '빠른 설치 및 문제 해결',
	description: '와탭 .NET 모니터링 서비스 기능을 빠르게 사용할 수 있도록 안내를 제공합니다.',
	toc_max_heading_level: 2,
	keywords: [
		'애플리케이션',
		'.NET',
		'에이전트 설치',
		'트러블슈팅',
		'빠른 시작하기'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "dotnet/quick-start",
  "title": "빠른 설치 및 문제 해결",
  "description": "와탭 .NET 모니터링 서비스 기능을 빠르게 사용할 수 있도록 안내를 제공합니다.",
  "source": "@site/docs/dotnet/quick-start.mdx",
  "sourceDirName": "dotnet",
  "slug": "/dotnet/quick-start",
  "permalink": "/whatap-docs/dotnet/quick-start",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/dotnet/quick-start.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "quick-start",
    "title": "빠른 설치 및 문제 해결",
    "description": "와탭 .NET 모니터링 서비스 기능을 빠르게 사용할 수 있도록 안내를 제공합니다.",
    "toc_max_heading_level": 2,
    "keywords": [
      "애플리케이션",
      ".NET",
      "에이전트 설치",
      "트러블슈팅",
      "빠른 시작하기"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "dotNetSidebar",
  "previous": {
    "title": "설치 문제 해결",
    "permalink": "/whatap-docs/dotnet/agent-troubleshooting"
  },
  "next": {
    "title": "설정하기",
    "permalink": "/whatap-docs/dotnet/set-agent"
  }
};
const assets = {

};

/*

### 기타

위에서 안내한 방법으로 오류가 해결되지 않을 경우 상세한 디버깅 정보를 전달해 주세요. 디버깅 데이터 수집 과정은 다음과 같습니다.

1. 다음 링크에서 모니터링 프로그램(*UdpMonitor.exe*)을 다운 후 실행하세요.

* [모니터링 프로그램](https://whatap-dotnet.s3.ap-northeast-2.amazonaws.com/UdpMonitor.exe)

1. 디버깅용 에이전트를 다음 링크에서 다운 후 설치하세요.

* [디버깅용 에이전트](https://whatap-dotnet.s3.ap-northeast-2.amazonaws.com/whatap_dotnet_debug.exe)

1. 트랜잭션을 발생시키세요.

1. 트랜잭션을 충분히 유발한 경우 *UdpMonitor.exe*를 종료하세요.

1. *UdpMonitor.exe*와 동일한 폴더에 *UdpMonitor.txt*가 생성됩니다.

1. *UdpMonitor.txt* 파일을 담당자에게 전달해 주세요.

1. 디버깅 완료 시 디버깅용 에이전트를 제거하세요.

*/
/*모니터링 대상이 되는 메소드에서 예외가 처리되지 않는 경우 트랜잭션 종료 시점을 알 수 없습니다. 이런 상황에 대비하여 웹 서비스 모니터링은 기본적으로 5초 후에 타임아웃 처리됩니다.*/
/*
#### WCF 소스 코드

다음은 모니터링 대상이 되는 WCF 소스 코드 예제입니다.

```c {3-13}
namespace Whatap.DotNet.Examples
{
public class Service1 : IService1
{
public string GetData(int value)
{
...
}

public CompositeType GetDataUsingDataContract(CompositeType composite)
{
...
}

private string getFromDB()
{
...
}

private string getFromHttp()
{
...
}
}

public class Service2 : IService1
{
...
}

public class Service3 : IService1
{
public string IwantToSeeOnlyThis(int value)
{
...
}
}
}
```

* **GetData**

`GetData()` 메소드는 `Whatap.DotNet.Examples.Service1` 클래스에 속해 있습니다. 또한 Public 메소드이기 때문에 모니터링 대상이 됩니다. 이 메소드는 설정 파일의 `webservice_method_prefix` 옵션에 명시된 값에 포함되기 때문에 트랜잭션으로 처리됩니다. 메소드의 호출 경로는 다음과 같습니다.

> `Whatap.DotNet.Examples.Service1.GetData`

* **GetDataUsingDataContract**

`GetDataUsingDataContract()` 메소드는 Public 메소드이기 때문에 모니터링 대상이 됩니다. 메소드의 호출 경로는 다음과 같습니다.

> `Whatap.DotNet.Examples.Service1.GetDataUsingDataContract`

:::note[]

* `getFromDB()`, `getFromHttp()` 메소드는 Private 메소드이기 때문에 모니터링 대상이 아닙니다.

* `webservice_method_prefix` 옵션에 `Whatap.DotNet.Examples.Service3`를 추가할 경우 Public 메소드인 `IwantToSeeOnlyThis()` 메소드가 모니터링 대상이 될 수 있습니다.

:::

*/
/*

### 네임스페이스와 클래스 이름을 찾기 어려울 경우

WCF 서버 메소드가 정의된 네임스페이스를 찾기 어려울 경우 다음 방법을 사용해 네임스페이스와 클래스 이름을 찾을 수 있습니다.

1. 다음 링크에서 *GetNamesapces.exe* 파일을 다운로드하세요.

* [GetNamesapces.exe](https://repo.whatap.io/windows/GetNamesapces.exe)

1. 다음과 같이 웹 애플리케이션의 폴더 경로를 파라미터로 전달해 *GetNamesapces.exe* 파일을 실행하세요.

```
C:...\> GetNamesapces.exe C:\inetpub
```

1. 실행이 완료되면 해당 폴더와 그 하위 폴더에 있는 모든 *dll* 파일을 스캔해 네임스페이스와 클래스 이름을 목록으로 출력합니다.

:::note[]

결과 적용이 어려울 경우 *GetNamesapces.exe* 실행 후 동일한 폴더에 생성된 *GetNamesapces.txt* 파일을 담당자에게 전달하세요.

:::

*/


const toc = [{
  "value": "에이전트 설치 시",
  "id": "에이전트-설치-시",
  "level": 2
}, {
  "value": "윈도우 서버 2008 또는 .NET 4.6.1 미만 버전 사용할 경우",
  "id": "윈도우-서버-2008-또는-net-461-미만-버전-사용할-경우",
  "level": 3
}, {
  "value": "에이전트 설치 후",
  "id": "에이전트-설치-후",
  "level": 2
}, {
  "value": "데이터가 수집되지 않는 경우",
  "id": "데이터가-수집되지-않는-경우",
  "level": 3
}, {
  "value": "히트맵 데이터가 수집되지 않는 경우",
  "id": "히트맵-데이터가-수집되지-않는-경우",
  "level": 3
}, {
  "value": "지원 환경 확인이 어렵거나 지원 대상인 경우",
  "id": "지원-환경-확인이-어렵거나-지원-대상인-경우",
  "level": 3
}, {
  "value": "WCF 및 공식 미지원 라이브러리 모니터링",
  "id": "wcf-및-공식-미지원-라이브러리-모니터링",
  "level": 2
}, {
  "value": "설정 옵션",
  "id": "설정-옵션",
  "level": 3
}, {
  "value": "사용 예시",
  "id": "사용-예시",
  "level": 3
}, {
  "value": "whatap.conf 수정",
  "id": "whatapconf-수정",
  "level": 4
}, {
  "value": "네임스페이스와 클래스 이름 찾기",
  "id": "네임스페이스와-클래스-이름-찾기",
  "level": 2
}, {
  "value": "WCF의 경우",
  "id": "wcf의-경우",
  "level": 3
}, {
  "value": "Web Service의 경우",
  "id": "web-service의-경우",
  "level": 3
}, {
  "value": "설정 예시",
  "id": "설정-예시",
  "level": 3
}, {
  "value": "트랜잭션은 잡히지만 스텝 정보가 표시되지 않거나 너무 적을 때",
  "id": "트랜잭션은-잡히지만-스텝-정보가-표시되지-않거나-너무-적을-때",
  "level": 2
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
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "에이전트-설치-시",
        children: "에이전트 설치 시"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["에이전트 설치의 경우 프로젝트 생성부터 모니터링 활성화 단계까지 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "install-agent",
          children: "다음 문서"
        }), "를 참조하세요. 에이전트 설치 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "IIS"
        }), "가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "재시작"
        }), "됩니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "윈도우-서버-2008-또는-net-461-미만-버전-사용할-경우",
        children: "윈도우 서버 2008 또는 .NET 4.6.1 미만 버전 사용할 경우"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "와탭 .NET 에이전트는 윈도우 서버 2012 이상 및 .NET Framework 4.6.1 이상 사용을 권장합니다. 그 이하의 버전을 사용하는 경우 다음 링크의 설치 프로그램을 사용하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://repo.whatap.io/windows/whatap_dotnet_450.exe",
            children: "설치 프로그램"
          })
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "에이전트-설치-후",
        children: "에이전트 설치 후"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "오류 및 로그 전달"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "오류 발생 시 오류 화면을 캡쳐한 이미지 또는 해당 텍스트를 전달해 주세요."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "에이전트 로그 파일을 전달해 주세요. 다음 경로에서 로그 파일을 확인할 수 있습니다. 해당 오류가 없는 경우 폴더가 존재하지 않을 수 있습니다."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "C:\\Program Files\\WhaTap .NET\\logs"
                  })
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "C:\\ProgramData\\WhaTap"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "데이터가-수집되지-않는-경우",
        children: "데이터가 수집되지 않는 경우"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "dotnet-trst01.png",
        desc: "데이터 미수집"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["예시와 같이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL07975",
          className: "uitext"
        }), "에서 모든 정보가 정상적으로 수집되지 않는 경우 다음을 확인하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "액세스 키와 수집 서버 정보가 정확하게 입력되어있는지 확인하세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["해당 서버의 방화벽 설정을 확인하세요. 아웃바운드 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "6600"
            }), " 포트가 열려있어야 합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "히트맵-데이터가-수집되지-않는-경우",
        children: "히트맵 데이터가 수집되지 않는 경우"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "dotnet-trst02.png",
        desc: "히트맵 데이터 미수집"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["예시와 같이 히트맵 정보가 정상적으로 수집되지 않는 경우 대상 애플리케이션이 지원 환경에 해당하는지 확인하세요. 지원 환경은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://docs.whatap.io/dotnet/supported-spec",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "지원-환경-확인이-어렵거나-지원-대상인-경우",
        children: "지원 환경 확인이 어렵거나 지원 대상인 경우"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["대상 애플리케이션의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "web.config"
            }), " 파일을 전달해 주세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["대상 애플리케이션의 프로젝트 파일(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "*.csproj"
            }), ")을 전달해 주세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "다음 링크를 통해 .NET 에이전트 지원 환경에 해당하는지 AI를 활용하여 확인할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://whatap-dotnet.s3.ap-northeast-2.amazonaws.com/analysis.html",
                children: ".NET 에이전트 지원 환경 분석"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "wcf-및-공식-미지원-라이브러리-모니터링",
        children: "WCF 및 공식 미지원 라이브러리 모니터링"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "WCF(Windows Communication Foundation)와 같이 와탭 .NET 에이전트가 공식적으로 지원하지 않는 라이브러리를 모니터링하려면 다음 안내를 확인하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "광범위한 설정 시 과도한 트래픽이 발생할 수 있습니다."
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "설정-옵션",
        children: "설정 옵션"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "webservice_method_enabled"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              class: "type",
              children: "Boolean"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["기본값 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["값을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "true"
            }), "로 설정 시 웹 서비스를 추적할 수 있습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "해당 옵션을 변경한 후에는 IIS를 다시 시작해야 변경 사항이 적용됩니다."
            })]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "webservice_method_prefix"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              class: "type",
              children: "String"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "값에 추적할 메소드가 정의되어있는 네임스페이스 및 클래스 이름을 입력하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "메소드가 소속된 클래스 이름까지 입력 시 해당 클래스 내의 모든 Public 메소드가 추적 대상이 됩니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "조건에 맞는 메소드가 웹 서비스를 사용하지 않아도 추적 대상이 됩니다. 이 옵션의 경우 WCF와 웹 서비스 모니터링을 위해 설계되었지만 다양한 목적으로 사용할 수 있습니다."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "해당 옵션을 변경한 후에는 IIS를 다시 시작해야 변경 사항이 적용됩니다."
            })]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "webservice_method_prefix_realtime"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              class: "type",
              children: "Boolean"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../release-notes/dotnet/dotnet-2_3_6",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                className: "my",
                children: ".NET Agent v2.3.6 or later"
              })
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["기본값 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["값을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "true"
            }), "로 설정하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "webservice_method_prefix"
            }), " 대상을 이전과 같이 실시간으로 처리합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "webservice_method_timeout"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              class: "type",
              children: "Milliseconds"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["기본값 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "5000"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["모니터링 대상이 되는 메소드가 특정 시간 내에 완료되지 않을 경우 자동으로 타임아웃을 설정합니다. 기본값은 5초(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "5000"
            }), "ms)입니다."]
          }), "\n", "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "사용-예시",
        children: "사용 예시"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatapconf-수정",
        children: "whatap.conf 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf' {11,12} ",
          children: "license= ## 엑세스 키\nwhatap.server.host=15.165.146.117\nwhatap.server.port=6600\napp_process_name=w3wp.exe\ntag_counter_enabled=true\nperfcounter.enabled=true\napp_name= ## 애플리케이션 이름\nOID= ## 에이전트 ID\n\nwebservice_method_enabled=true\nwebservice_method_prefix=Whatap.Service.Controller, Whatap.DotNet.Examples.Service1\nwebservice_method_timeout=10000\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "webservice_method_prefix"
            }), " 옵션으로 추적할 네임스페이스 포함 메소드의 호출 경로를 지정했기 때문에 다음 중 하나일 경우 함수의 시작과 종료가 트랜잭션으로 처리됩니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Whatap.Service.Controller"
                })
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "Whatap.DotNet.Examples.Service1"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "webservice_method_timeout"
            }), "를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "10000"
            }), " 밀리초로 지정했기 때문에 10초가 지난 트랜잭션은 자동으로 종료 처리됩니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["다음과 같이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_management",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "agent_configuration",
            className: "uitext"
          }), " 메뉴를 통해 설정을 변경할 수도 있습니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "dotnet-trst03.png",
          desc: "에이전트 설정"
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "네임스페이스와-클래스-이름-찾기",
        children: "네임스페이스와 클래스 이름 찾기"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "wcf의-경우",
        children: "WCF의 경우"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["WCF의 경우 배포 폴더에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "*.svc"
        }), " 파일을 찾습니다. 이 파일을 메모장 등 텍스트 편집기로 열어 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Service"
        }), " 항목에 명시된 값을 확인하세요. 해당 값이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "webservice_method_prefix"
        }), "에 추가해야 할 정보입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "dotnet-quick-pic-01.png",
        desc: "WCF 설정 예시"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "web-service의-경우",
        children: "Web Service의 경우"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Web Service의 경우 배포 폴더에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "*.asmx"
        }), " 파일을 찾습니다. 이 파일을 메모장으로 열어 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Class"
        }), " 항목에 명시된 값을 확인하세요. 이 값이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "webservice_method_prefix"
        }), "에 추가해야 할 정보입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "dotnet-quick-pic-02.png",
        desc: "Web Service 설정 예시"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "설정-예시",
        children: "설정 예시"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음의 설정 예시를 참조하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          children: "webservice_method_enabled=true\nwebservice_method_prefix=wcfServer.Service1, WebServiceDemo.WebService\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "트랜잭션은-잡히지만-스텝-정보가-표시되지-않거나-너무-적을-때",
        children: "트랜잭션은 잡히지만 스텝 정보가 표시되지 않거나 너무 적을 때"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["트랜잭션은 감지되지만 스텝 정보가 보이지 않거나 부족한 경우, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Method hook"
        }), "을 통해 모니터링 범위를 확대할 수 있습니다. 다음 설정 예시를 참조하세요. 예시 설정을 통해 기본 라이브러리에서 모니터링 범위에서 제외된 항목을 스텝 정보로 표시할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          children: "hook_methods_enabled=true\nhook_methods_prefix=System.Net.Http.HttpClient., System.Net.WebRequest., System.Data., System.Net.Http.,\n# hook_methods_ignores=get,set\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "hook_methods_prefix"
            }), ": 지정된 값으로 시작하는 모든 메소드를 스텝에 표시합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "hook_methods_ignores"
            }), ": 지정된 값으로 시작하는 모든 메소드를 모니터링에서 제외합니다."]
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