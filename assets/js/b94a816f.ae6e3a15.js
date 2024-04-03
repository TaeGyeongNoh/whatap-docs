"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[10740],{

/***/ 17078:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"label":"에이전트","permalink":"/whatap-docs/tags/에이전트","allTagsPath":"/whatap-docs/tags","count":109,"items":[{"id":"java/agent-apdex","title":"Apdex","description":"사용자 만족도를 측정하는 Apdex 점수를 설정하는 자바(Java) 에이전트 옵션을 안내합니다. Apdex 지표를 통해 애플리케이션의 성능을 객관적으로 평가하고 사용자 경험을 개선할 수 있습니다.","permalink":"/whatap-docs/java/agent-apdex"},{"id":"altibase/agent-aws","title":"AWS CloudWatch 이용","description":"AWS CloudWatch를 이용하는 에이전트 설정에 대한 설명입니다.","permalink":"/whatap-docs/altibase/agent-aws"},{"id":"mssql/agent-aws","title":"AWS CloudWatch 이용","description":"AWS CloudWatch를 이용하는 에이전트 설정에 대한 설명입니다.","permalink":"/whatap-docs/mssql/agent-aws"},{"id":"tibero/agent-aws","title":"AWS CloudWatch 이용","description":"AWS CloudWatch를 이용하는 에이전트 설정에 대한 설명입니다.","permalink":"/whatap-docs/tibero/agent-aws"},{"id":"npm/set-aws-resource-options","title":"AWS 리소스 정보 수집 옵션","description":"AWS 환경에서 리소스 정보를 수집하여 토폴로지 화면에 표현할 수 있습니다.","permalink":"/whatap-docs/npm/set-aws-resource-options"},{"id":"java/agent-usage","title":"CPU/메모리/디스크 사용량 수집","description":"자바(Java) 에이전트가 CPU, 메모리, 디스크 사용량을 수집하는 방법을 안내합니다. 자바(Java)의 JMX 라이브러리를 기본적으로 활용하며, 필요에 따라 Linux의 proc 디렉터리나 oshi, sigar 라이브러리를 통한 성능 지표 수집 방법을 확인할 수 있습니다.","permalink":"/whatap-docs/java/agent-usage"},{"id":"java/agent-dbsql","title":"DB, SQL","description":"데이터베이스 및 SQL 성능 데이터 수집을 위한 자바(Java) 에이전트의 다양한 옵션을 안내합니다. DBCP, Hikari, Tomcat 등 다양한 DB 연결 풀(Connection Pool) 정보 추적 및 SQL 실행 세부 사항을 기록할 수 있습니다. 또한, SQL 파라미터 정보 기록, DB 연결 누수 추적 등 성능 최적화에 필수적인 정보 수집 옵션을 제공합니다.","permalink":"/whatap-docs/java/agent-dbsql"},{"id":"mongodb/agent-dbx-settings","title":"DBX 에이전트 설정","description":"MongoDB 데이터베이스에서 whatap.conf 파일에 설정할 수 있는 옵션에 대해 안내합니다.","permalink":"/whatap-docs/mongodb/agent-dbx-settings"},{"id":"java/add-jvm-opt/docker","title":"Docker","description":"도커(Docker) 환경에서 Java 애플리케이션에 와탭 자바(Java) 모니터링 에이전트를 적용하는 방법을 단계별로 안내합니다. 사용자는 기존 Docker 이미지에 와탭 자바(Java) 에이전트 설정을 추가하여 새로운 이미지를 빌드하는 과정, whatap.conf 파일 생성, Dockerfile 작성, JAVA_OPT 수정 방법 등을 확인할 수 있습니다. 또한, Java 17 이상의 버전에서 필요한 추가 JVM 옵션과 다양한 Java 버전에 따른 힙 히스토그램 조회 설정 방법도 제공합니다.","permalink":"/whatap-docs/java/add-jvm-opt/docker"},{"id":"nodejs/install-agent-docker","title":"Docker 환경 설치","description":"Docker 환경에서 DockerFile을 작성해 Node.js 에이전트를 설치한 다음 실행하는 방법을 안내합니다.","permalink":"/whatap-docs/nodejs/install-agent-docker"},{"id":"java/add-jvm-opt/elastic-beanstalk","title":"Elastic Beanstalk","description":"AWS Elastic Beanstalk 환경에서 Java 애플리케이션을 실행하는 사용자가 와탭의 자바(Java) 모니터링 에이전트를 효과적으로 적용하기 위한 JVM 옵션을 설정하는 방법을 안내합니다. Elastic Beanstalk에 맞춘 와탭 자바(Java) 에이전트의 설치 및 구성 과정, 필수 JVM 옵션의 추가 및 설정 방법을 확인할 수 있습니다. 추가로 힙스토그램 조회 방법을 포함하고 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/elastic-beanstalk"},{"id":"java/agent-httpcapicall","title":"HTTPC, API Call","description":"HTTP 외부 호출과 API 호출 관련 데이터를 수집, 분석을 위한 자바(Java) 에이전트의 옵션 설정 방법을 안내합니다. TOO SLOW 에러 처리 및 CPU와 메모리 사용량 추적, 호출 시점의 스택 트레이스 기록, URL 정규화 등 세밀한 모니터링을 위한 다양한 옵션을 제공합니다. 이를 통해 개발자는 애플리케이션의 외부 의존성을 효율적으로 관리하고 성능 문제를 식별할 수 있습니다.","permalink":"/whatap-docs/java/agent-httpcapicall"},{"id":"java/add-jvm-opt/ibm-bluemix","title":"IBM BlueMix","description":"IBM Bluemix 클라우드 플랫폼에서 Java 애플리케이션을 실행하는 사용자가 와탭의 자바(Java) 모니터링 에이전트를 효과적으로 적용하기 위한 JVM 옵션을 설정하는 방법에 대해 안내합니다. 사용자는 이 문서를 통해 IBM Bluemix 환경에서 와탭의 자바(Java) 에이전트를 설치한 후 에이전를 구성하는 과정, 필요한 JVM 옵션의 추가 방법을 단계별로 확인할 수 있습니다. 추가로 힙스토그램 조회 방법을 포함하고 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/ibm-bluemix"},{"id":"java/add-jvm-opt/java-under-ver","title":"Java 1.6 버전 미만","description":"자바(Java) 1.6 버전 미만에서 자바(Java) 에이전트를 적용하는 방법을 안내합니다. Java 1.5와 1.4 버전 각각에 대해 에이전트 설치 및 설정 절차, 그리고 -javaagent 옵션과 관련한 제약사항을 확인할 수 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/java-under-ver"},{"id":"java/add-jvm-opt/jboss","title":"JBoss","description":"와탭 모니터링 솔루션을 JBoss 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 JBoss 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 JBoss와의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/jboss"},{"id":"java/add-jvm-opt/jetty","title":"Jetty","description":"와탭 모니터링 솔루션을 Jetty 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 Jetty 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 Jetty와의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/jetty"},{"id":"java/add-jvm-opt/jeus","title":"JEUS","description":"와탭 모니터링 솔루션을 JEUS 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 JEUS 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 JEUS와의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/jeus"},{"id":"java/add-jvm-opt/liberty","title":"Liberty","description":"와탭 모니터링 솔루션을 Liberty 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 Liberty 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 Liberty와의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/liberty"},{"id":"java/msa-group","title":"MSA 업무 그룹 구분","description":"Auto Scale Out 환경에서 자동 등록된 자바(Java) 에이전트를 업무 단위로 쉽게 식별할 수 있도록 okind JVM 옵션을 사용할 수 있습니다. 특히 Docker 환경에서의 에이전트 관리에 유용한 이 설정은 에이전트의 역할이나 소속된 서비스 그룹을 구분하는 데 유용합니다.","permalink":"/whatap-docs/java/msa-group"},{"id":"java/add-jvm-opt/play2","title":"Play2","description":"와탭 모니터링 솔루션을 Play2 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 Play2 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 Play2와의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/play2"},{"id":"java/add-jvm-opt/resin","title":"Resin","description":"와탭 모니터링 솔루션을 Resin 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 Resin 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 Resin과의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/resin"},{"id":"java/scale-in-auto-delete","title":"Scale In에서 에이전트 자동 삭제","description":"Auto Scale 환경에서 자동으로 확장된 시스템이 Scale In을 실행할 때, 자바(Java) 에이전트를 자동 삭제하는 방법을 안내합니다. 에이전트는 특정 파일 생성을 통해 SILENT_SHUTDOWN 이벤트를 서버에 전송하며, 이를 통해 에이전트가 자동으로 목록에서 제거됩니다. 이 과정은 시스템의 자동 축소 시점에 맞춰 에이전트 관리를 용이하게 하며, 추가적인 운영자 개입 없이 리소스를 효율적으로 관리할 수 있습니다.","permalink":"/whatap-docs/java/scale-in-auto-delete"},{"id":"java/add-jvm-opt/spring-boot","title":"Spring Boot","description":"와탭 모니터링 솔루션을 Spring Boot 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 Spring Boot 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 Spring Boot와의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/spring-boot"},{"id":"java/add-jvm-opt/tomcat","title":"Tomcat","description":"와탭 모니터링 솔루션을 톰캣(Tomcat) 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 톰캣(Tomcat) 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 톰캣(Tomcat)과의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/tomcat"},{"id":"java/add-jvm-opt/weblogic","title":"WebLogic","description":"와탭 모니터링 솔루션을 웹로직(WebLogic) 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 웹로직(WebLogic) 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 웹로직(WebLogic)과의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/weblogic"},{"id":"java/add-jvm-opt/websphere","title":"WebSphere","description":"와탭 모니터링 솔루션을 WebSphere 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 WebSphere 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 WebSphere과의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.","permalink":"/whatap-docs/java/add-jvm-opt/websphere"},{"id":"oracle/agent-xos-settings","title":"XOS 에이전트 설정","description":"데이터베이스 프로세스 모니터링 설정에 대해 알아봅니다.","permalink":"/whatap-docs/oracle/agent-xos-settings"},{"id":"mongodb/agent-manage","title":"관리하기","description":"MongoDB 데이터베이스의 에이전트를 업데이트하거나 삭제하는 방법을 알아봅니다.","permalink":"/whatap-docs/mongodb/agent-manage"},{"id":"redis/agent-manage","title":"관리하기","description":"Redis 데이터베이스의 에이전트를 업데이트하거나 삭제하는 방법을 알아봅니다.","permalink":"/whatap-docs/redis/agent-manage"},{"id":"kubernetes/install-master-node-agent","title":"마스터 및 노드 에이전트 설치","description":"설치 안내 페이지에 따라 마스터 및 노드 에이전트 설치 과정을 진행하세요.","permalink":"/whatap-docs/kubernetes/install-master-node-agent"},{"id":"java/add-jvm-opt/batch-app","title":"배치 애플리케이션","description":"와탭의 자바(Java) 에이전트를 배치 애플리케이션에 적용하는 방법을 안내합니다. 배치 애플리케이션의 독특한 시작 및 중지 반복 동작으로 인한 웹 애플리케이션과의 차이점을 설명하고, 필요한 에이전트 다운로드, 에이전트 및 배치 호스트 구성, 에이전트와 함께 배치 작업 실행, time_limit 설정 등을 통한 실행 시간 모니터링 방법을 제공합니다.","permalink":"/whatap-docs/java/add-jvm-opt/batch-app"},{"id":"java/agent-additional-option","title":"부가 기능","description":"자바(Java) 애플리케이션의 모니터링 수준을 사용자의 필요에 맞게 조정할 수 있는 추가적인 에이전트 설정 옵션을 안내합니다. SQL 파라미터 수집, HTTP 파라미터 및 헤더 정보 수집, 사용자 IP 정보 추출, 사용자 수 추적 방법 선택, SAP Function 추적 등을 포함합니다. 이 옵션들을 통해 보다 세밀한 데이터 수집 및 분석이 가능하며, 특히 보안이 중요한 환경에서 필요에 따라 옵션을 조정할 수 있습니다.","permalink":"/whatap-docs/java/agent-additional-option"},{"id":"java/agent-load-amount","title":"부하량 제어","description":"자바(Java) 애플리케이션 서버의 트래픽 쓰로틀링 옵션을 설정하는 에이전트 옵션을 안내합니다. 애플리케이션의 최대 동시 요청 수를 제한하고, 특정 사용자나 URL을 기준으로 서비스 접근을 제어하는 기능을 포함합니다. 사용자 정의 메시지 전송, URL 리다이렉션 설정, 이벤트 알림 활성화 등 다양한 옵션을 제공하여 과부하 상황에서 애플리케이션의 안정성을 보장할 수 있습니다.","permalink":"/whatap-docs/java/agent-load-amount"},{"id":"browser/collect-data","title":"브라우저 에이전트 수집 데이터","description":"와탭 브라우저 에이전트가 수집하는 데이터에 대한 설명입니다.","permalink":"/whatap-docs/browser/collect-data"},{"id":"browser/apply-agent","title":"브라우저 에이전트 적용","description":"웹 애플리케이션에 와탭 브라우저 에이전트를 적용하고 브라우저 모니터링을 시작하세요.","permalink":"/whatap-docs/browser/apply-agent"},{"id":"java/async-tracking","title":"비동기 추적","description":"자바(Java) 에이전트 설정을 통해 비동기 애플리케이션 활동을 추적하는 방법을 안내합니다. CompletableFuture 메소드 수집 방법과 사용자 애플리케이션에 해당 메소드를 hooking하는 방식을 포함합니다. 설정 예시와 함께 whatap.conf 파일에 추가해야 할 옵션을 제공하여 비동기 호출의 성능 모니터링을 강화할 수 있도록 지원합니다.","permalink":"/whatap-docs/java/async-tracking"},{"id":"java/install-agent-with-buildpack","title":"빌드팩을 이용한 Java 에이전트 설치","description":"빌드팩을 이용해 Java 에이전트를 설치하는 방법을 안내합니다.","permalink":"/whatap-docs/java/install-agent-with-buildpack"},{"id":"postgresql/install-agent-quick-setup","title":"빠른 에이전트 설정","description":"DBX 에이전트의 구성 파일 중 setup.sh 파일을 실행하면 에이전트 설정을 빠르고 쉽게 진행할 수 있습니다.","permalink":"/whatap-docs/postgresql/install-agent-quick-setup"},{"id":"java/agent-number-of-user","title":"사용자 수","description":"자바(Java) 웹 애플리케이션 서버에 연결된 사용자 수를 에이전트 설정을 통해 집계하는 방법을 안내합니다. 실시간 사용자 집계 활성화 여부 설정, 사용자 수를 집계하기 위한 쿠키 제한 설정, IP 주소 또는 HTTP 헤더 특정 값을 기준으로 한 사용자 집계 방법, 클라이언트 IP 정보 추적을 위한 HTTP 헤더 설정 등을 포함합니다.","permalink":"/whatap-docs/java/agent-number-of-user"},{"id":"browser/collect-custom-events","title":"사용자 정의 이벤트 수집","description":"브라우저 모니터링을 통해 웹 서비스의 문제점을 파악하고 사용자 경험을 개선하기 위해, 웹 페이지에서 발생하는 이벤트 중 개발자와 운영자가 원하는 이벤트를 추가로 수집할 수 있는 인터페이스를 제공합니다.","permalink":"/whatap-docs/browser/collect-custom-events"},{"id":"npm/set-agent","title":"설정하기","description":"description","permalink":"/whatap-docs/npm/set-agent"},{"id":"opentelemetry/set-agent","title":"설정하기","description":"에이전트 설정을 통해 OpenTelemetry로부터 다양한 지표를 수집할 수 있습니다.","permalink":"/whatap-docs/opentelemetry/set-agent"},{"id":"altibase/troubleshooting","title":"설치 문제 해결","description":"데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.","permalink":"/whatap-docs/altibase/troubleshooting"},{"id":"cubrid/troubleshooting","title":"설치 문제 해결","description":"데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.","permalink":"/whatap-docs/cubrid/troubleshooting"},{"id":"mongodb/troubleshooting","title":"설치 문제 해결","description":"MongoDB 데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.","permalink":"/whatap-docs/mongodb/troubleshooting"},{"id":"mssql/troubleshooting","title":"설치 문제 해결","description":"데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.","permalink":"/whatap-docs/mssql/troubleshooting"},{"id":"mysql/troubleshooting","title":"설치 문제 해결","description":"데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.","permalink":"/whatap-docs/mysql/troubleshooting"},{"id":"oracle/troubleshooting","title":"설치 문제 해결","description":"데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.","permalink":"/whatap-docs/oracle/troubleshooting"},{"id":"postgresql/troubleshooting","title":"설치 문제 해결","description":"데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.","permalink":"/whatap-docs/postgresql/troubleshooting"},{"id":"redis/troubleshooting","title":"설치 문제 해결","description":"Redis 데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.","permalink":"/whatap-docs/redis/troubleshooting"},{"id":"tibero/troubleshooting","title":"설치 문제 해결","description":"데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.","permalink":"/whatap-docs/tibero/troubleshooting"},{"id":"altibase/after-install-agent","title":"설치 점검 사항","description":"데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.","permalink":"/whatap-docs/altibase/after-install-agent"},{"id":"cubrid/after-install-agent","title":"설치 점검 사항","description":"데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.","permalink":"/whatap-docs/cubrid/after-install-agent"},{"id":"java/install-check","title":"설치 점검 사항","description":"자바(Java) 에이전트 설치 후 확인해야 할 중요한 점검 사항들에 대해 안내합니다. JAVA_OPTS 설정의 정확성, 애플리케이션 서버의 재시작 필요성 및 모니터링 서비스를 통한 에이전트 연결성 검증을 포함합니다.","permalink":"/whatap-docs/java/install-check"},{"id":"mongodb/after-install-agent","title":"설치 점검 사항","description":"데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.","permalink":"/whatap-docs/mongodb/after-install-agent"},{"id":"mssql/after-install-agent","title":"설치 점검 사항","description":"데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.","permalink":"/whatap-docs/mssql/after-install-agent"},{"id":"mysql/after-install-agent","title":"설치 점검 사항","description":"데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.","permalink":"/whatap-docs/mysql/after-install-agent"},{"id":"oracle/after-install-agent","title":"설치 점검 사항","description":"데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.","permalink":"/whatap-docs/oracle/after-install-agent"},{"id":"postgresql/after-install-agent","title":"설치 점검 사항","description":"데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.","permalink":"/whatap-docs/postgresql/after-install-agent"},{"id":"redis/after-install-agent","title":"설치 점검 사항","description":"데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.","permalink":"/whatap-docs/redis/after-install-agent"},{"id":"server/install-check","title":"설치 점검 사항","description":"서버 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.","permalink":"/whatap-docs/server/install-check"},{"id":"tibero/after-install-agent","title":"설치 점검 사항","description":"데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.","permalink":"/whatap-docs/tibero/after-install-agent"},{"id":"java/script-plugin","title":"스크립트 플러그인","description":"자바(Java) 에이전트에서 제공하는 플러그인 옵션을 통해 사용자가 원하는 코드를 트레이스 데이터에 주입하거나 메소드 수행 전후로 부가 정보를 추가하는 방법을 제공합니다. 메소드 시작/종료 시점에 특정 코드를 실행할 위치를 설정하는 옵션과 사용자 정의 pool을 모니터링하기 위한 클래스 설정 방법을 포함합니다. 실제 플러그인 적용 사례를 통해 구체적인 활용 방안을 제시하며, 모니터링의 유연성과 세밀함을 높일 수 있는 다양한 설정 예시와 API 사용법을 안내합니다.","permalink":"/whatap-docs/java/script-plugin"},{"id":"browser/set-real-user-id","title":"실제 사용자 ID 설정","description":"브라우저 모니터링에서 실제 사용자의 로그인 ID나 이메일 등으로 사용자 ID를 설정해 데이터를 수집할 수 있습니다.","permalink":"/whatap-docs/browser/set-real-user-id"},{"id":"java/agent-control-function","title":"에이전트 기능 제어","description":"자바(Java) 애플리케이션 서버의 모니터링을 위한 에이전트 기능을 세밀하게 조정하는 방법을 안내합니다. 에이전트의 활성화/비활성화, 트랜잭션 및 성능 카운터 추적, OS 정보 수집 등의 기능을 포함하며, 각 기능을 제어하는 다양한 설정 옵션들에 대해 확인할 수 있습니다.","permalink":"/whatap-docs/java/agent-control-function"},{"id":"altibase/agent-network","title":"에이전트 네트워크 통신","description":"데이터베이스 에이전트의 네트워크 통신에 관한 설정입니다.","permalink":"/whatap-docs/altibase/agent-network"},{"id":"mssql/agent-network","title":"에이전트 네트워크 통신","description":"데이터베이스 에이전트의 네트워크 통신에 관한 설정입니다.","permalink":"/whatap-docs/mssql/agent-network"},{"id":"tibero/agent-network","title":"에이전트 네트워크 통신","description":"데이터베이스 에이전트의 네트워크 통신에 관한 설정입니다.","permalink":"/whatap-docs/tibero/agent-network"},{"id":"altibase/agent-data","title":"에이전트 데이터 수집","description":"데이터베이스 서버의 정보를 수집하는 설정에 대한 설명입니다.","permalink":"/whatap-docs/altibase/agent-data"},{"id":"mssql/agent-data","title":"에이전트 데이터 수집","description":"데이터베이스 서버의 정보를 수집하는 설정에 대한 설명입니다.","permalink":"/whatap-docs/mssql/agent-data"},{"id":"tibero/agent-data","title":"에이전트 데이터 수집","description":"데이터베이스 서버의 정보를 수집하는 설정에 대한 설명입니다.","permalink":"/whatap-docs/tibero/agent-data"},{"id":"java/agent-log","title":"에이전트 로그 설정","description":"자바(Java) 애플리케이션 환경에서 발생하는 로그 데이터를 에이전트를 통해 관리하는 방법을 안내합니다. 로그 파일의 경로 및 이름 설정, 보관 기간 설정, 로그 모니터링, 사용자 정의 로그 추적 활성화 방법 등을 포함합니다. 로그 관리를 위한 다양한 설정 옵션을 제공해 시스템의 효율적인 로그 관리를 도와줍니다.","permalink":"/whatap-docs/java/agent-log"},{"id":"kubernetes/uninstall-agent","title":"에이전트 삭제","description":"쿠버네티스 에이전트 삭제 방법을 안내합니다.","permalink":"/whatap-docs/kubernetes/uninstall-agent"},{"id":"java/uninstall-agent","title":"에이전트 삭제 및 롤백","description":"자바(Java) 에이전트를 제거하거나 이전 버전으로 되돌리는 과정을 안내합니다. 에이전트를 삭제할 때는 -javaagent JVM 옵션을 제거하고 서버를 재시작하는 단계, 환경 변수를 정리하는 과정을 포함합니다.","permalink":"/whatap-docs/java/uninstall-agent"},{"id":"java/set-agent","title":"에이전트 설정","description":"자바(Java) 에이전트의 설정 방법을 안내합니다. whatap.conf 파일을 통해 에이전트의 기본 설정, 서버 연결 및 데이터 전송 설정, 여러 애플리케이션 서버의 설정 파일 관리 방법 등을 포함합니다. 또한, WhaTap 모니터링 서비스 화면에서 직접 에이전트 옵션을 관리하는 방법도 제공합니다.","permalink":"/whatap-docs/java/set-agent"},{"id":"altibase/install-agent","title":"에이전트 설치","description":"와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다.","permalink":"/whatap-docs/altibase/install-agent"},{"id":"cubrid/install-agent","title":"에이전트 설치","description":"와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다.","permalink":"/whatap-docs/cubrid/install-agent"},{"id":"java/install-agent","title":"에이전트 설치","description":"와탭의 자바(Java) 애플리케이션 모니터링 에이전트를 설치하는 데 필요한 모든 단계를 자세하게 설명합니다. 이 문서에서는 에이전트 다운로드 및 설치, 구성 파일, 에이전트 기본 설정 방법을 안내합니다.","permalink":"/whatap-docs/java/install-agent"},{"id":"kubernetes/install","title":"에이전트 설치","description":"쿠버네티스 모니터링을 위한 에이전트 설치 단계를 설명합니다.","permalink":"/whatap-docs/kubernetes/install"},{"id":"mongodb/install-agent","title":"에이전트 설치","description":"와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다.","permalink":"/whatap-docs/mongodb/install-agent"},{"id":"mssql/install-agent","title":"에이전트 설치","description":"와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다.","permalink":"/whatap-docs/mssql/install-agent"},{"id":"mysql/install-agent","title":"에이전트 설치","description":"와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다.","permalink":"/whatap-docs/mysql/install-agent"},{"id":"npm/install-agent","title":"에이전트 설치","description":"와탭 모니터링 서비스에서 프로젝트를 생성하고 에이전트를 설치하는 과정에 대해 알아봅니다.","permalink":"/whatap-docs/npm/install-agent"},{"id":"oracle/install-agent","title":"에이전트 설치","description":"와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다.","permalink":"/whatap-docs/oracle/install-agent"},{"id":"php/install-agent","title":"에이전트 설치","description":"PHP 환경에서 동작하는 애플리케이션 서버에 적용할 수 있는 에이전트 설치 방법을 확인하세요.","permalink":"/whatap-docs/php/install-agent"},{"id":"postgresql/install-agent","title":"에이전트 설치","description":"와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다.","permalink":"/whatap-docs/postgresql/install-agent"},{"id":"redis/install-agent","title":"에이전트 설치","description":"와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다.","permalink":"/whatap-docs/redis/install-agent"},{"id":"tibero/install-agent","title":"에이전트 설치","description":"와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다.","permalink":"/whatap-docs/tibero/install-agent"},{"id":"java/agent-performance","title":"에이전트 성능","description":"자바(Java) 에이전트의 성능 관련 옵션을 안내합니다. 동시에 처리할 수 있는 최대 트랜잭션 수와 트랜잭션 데이터를 저장하는 버퍼의 초기 크기 설정을 확인할 수 있습니다. 이는 시스템의 부하와 자원 사용을 최적화하는 데 중요한 역할을 합니다.","permalink":"/whatap-docs/java/agent-performance"},{"id":"java/agent-notification","title":"에이전트 알림","description":"자바(Java) 에이전트를 통해 애플리케이션 서버에서 발생하는 다양한 이벤트에 대한 알림 설정 방법을 제공합니다. 트랜잭션 재귀 호출, 서비스 거절, HTTPC 연결 오류, 힙 및 디스크 사용량 초과, CPU 사용량 임계치 도달, DB 커넥션 중복 할당 및 예외 발생 시 이벤트 알림을 설정하는 옵션을 포함합니다. 각 이벤트별로 발행 간격, 발행 여부, 임계치 설정 등 세밀한 조정을 할 수 있습니다.","permalink":"/whatap-docs/java/agent-notification"},{"id":"java/update-agent","title":"에이전트 업데이트","description":"자바(Java) 에이전트를 최신 버전으로 업데이트하는 과정을 안내합니다. 최신 에이전트를 다운로드하고 애플리케이션 서버를 재시작하여 업데이트를 적용하는 방법을 포함합니다. 또한, 안정적인 시스템 종료를 위해 앱 종료, 에이전트 JAR 파일 변경, 앱 시작 순서에 따라 업데이트하는 절차를 확인할 수 있습니다.","permalink":"/whatap-docs/java/update-agent"},{"id":"dotnet/topology-settings","title":"에이전트 옵션 설정","description":"토폴로지 기능을 이용하기 위해 에이전트에 옵션을 적용하는 방법을 제공합니다.","permalink":"/whatap-docs/dotnet/topology-settings"},{"id":"java/topology-settings","title":"에이전트 옵션 설정","description":"토폴로지 기능을 이용하기 위해 에이전트에 옵션을 적용하는 방법을 제공합니다.","permalink":"/whatap-docs/java/topology-settings"},{"id":"nodejs/topology-settings","title":"에이전트 옵션 설정","description":"토폴로지 기능을 이용하기 위해 에이전트에 옵션을 적용하는 방법을 제공합니다.","permalink":"/whatap-docs/nodejs/topology-settings"},{"id":"php/topology-settings","title":"에이전트 옵션 설정","description":"토폴로지 기능을 이용하기 위해 에이전트에 옵션을 적용하는 방법을 제공합니다.","permalink":"/whatap-docs/php/topology-settings"},{"id":"altibase/agent-naming","title":"에이전트 이름 식별","description":"모니터링 대상을 식별하기 위해 에이전트 이름 설정 방법을 제공합니다.","permalink":"/whatap-docs/altibase/agent-naming"},{"id":"java/agent-name","title":"에이전트 이름 식별","description":"모니터링 대상을 구별하기 위한 애플리케이션 서버의 고유 식별자 설정에 대해 안내합니다. 모니터링 대상 시스템 내에서 애플리케이션 서버를 정확히 구분하는 데 필수적입니다. 서버 유형, IP 등의 정보를 기반으로 한 자동 이름 지정 방식과 사용자가 직접 whatap.conf 파일이나 JVM 옵션을 통해 에이전트 이름을 설정하는 방법을 확인할 수 있습니다.","permalink":"/whatap-docs/java/agent-name"},{"id":"mssql/agent-naming","title":"에이전트 이름 식별","description":"모니터링 대상을 식별하기 위해 에이전트 이름 설정 방법을 제공합니다.","permalink":"/whatap-docs/mssql/agent-naming"},{"id":"server/agent-name","title":"에이전트 이름 식별","description":"모니터링 대상을 식별하기 위해 에이전트 이름 설정 방법을 제공합니다.","permalink":"/whatap-docs/server/agent-name"},{"id":"tibero/agent-naming","title":"에이전트 이름 식별","description":"모니터링 대상을 식별하기 위해 에이전트 이름 설정 방법을 제공합니다.","permalink":"/whatap-docs/tibero/agent-naming"},{"id":"java/agent-network","title":"에이전트 통신 설정","description":"자바(Java) 에이전트가 애플리케이션 서버로부터 수집한 데이터를 서버로 전송하기 위한 네트워크 설정 방법을 안내합니다. 주요 설정 옵션으로는 수집 서버 호스트, 포트, 타임아웃 값, 네트워크 전송 크기, 데이터 전송 큐 크기 등이 있으며, 에이전트의 효율적인 데이터 관리 및 안정적인 서버 통신을 보장하는 데 중요합니다.","permalink":"/whatap-docs/java/agent-network"},{"id":"server/agent-network","title":"에이전트 통신 설정","description":"에이전트와 서버 간의 연결에 관한 설정입니다.","permalink":"/whatap-docs/server/agent-network"},{"id":"java/agent-weaving","title":"오픈소스 추적","description":"자바(Java) 애플리케이션에서 사용하는 프레임워크나 오픈소스 라이브러리를 에이전트를 통해 추적하는 설정 방법을 제공합니다. Java 에이전트 설정 파일(whatap.conf)에 weaving 옵션을 추가하여 설정하며, 다양한 프레임워크 및 라이브러리 버전에 대응하는 방법을 안내합니다.","permalink":"/whatap-docs/java/agent-weaving"},{"id":"kubernetes/agent-manage","title":"쿠버네티스 에이전트","description":"쿠버네티스 내에 실행 중인 애플리케이션의 모니터링을 위해 설치한 에이전트 구성에 대해 알아봅니다.","permalink":"/whatap-docs/kubernetes/agent-manage"},{"id":"java/agent-toplogy","title":"토폴로지 맵","description":"자바(Java) 에이전트가 수집한 데이터를 사용하여 애플리케이션의 토폴로지 맵을 생성하는 에이전트 설정 옵션을 안내합니다. 트랜잭션 호출자, 데이터베이스 연결 정보, HTTPC 아웃바운드 정보, 액티브 트랜잭션 상태 등의 다양한 지표를 통해 시스템의 토폴로지를 시각화하고 분석할 수 있습니다.","permalink":"/whatap-docs/java/agent-toplogy"},{"id":"java/agent-static","title":"통계","description":"자바(Java) 애플리케이션 모니터링을 위한 다양한 통계 수집 기능 관련 에이전트 옵션을 안내합니다. 성능 카운터 확장, 도메인별 트랜잭션 수집, 멀티 서버 트랜잭션 의존성 분석, 로그인 유형별 및 Referer 별 통계 수집 등을 포함합니다. 또한 SQL, HTTP Call, 오류 통계와 사용자 에이전트 정보 수집에 대한 최대 레코드 수 제한 설정도 확인할 수 있습니다.","permalink":"/whatap-docs/java/agent-static"},{"id":"java/agent-transaction","title":"트랜잭션","description":"자바(Java) 애플리케이션 내 각 트랜잭션의 성능 데이터를 에이전트가 추적하고 분석할 수 있는 설정 방법을 안내합니다. 트랜잭션의 요청 처리, 응답 시간, 자원 사용량 등을 추적하여 애플리케이션 성능을 평가합니다.","permalink":"/whatap-docs/java/agent-transaction"},{"id":"java/agent-transaction-error-stack","title":"트랜잭션 에러 스택","description":"자바(Java) 애플리케이션에서 트랜잭션 중 발생하는 에러를 감지하고 이에 대한 스택 트레이스를 표시하는 에이전트 설정 옵션을 안내합니다. 트랜잭션, 메소드, SQL, HTTP 호출, SOCKET 호출 등 다양한 영역에서 에러 정보를 수집하고, 에러 스택의 길이, 제목 길이 등을 설정하는 방법을 포함합니다. 에이전트 설정을 통해 에러 관리를 개선하고, 애플리케이션의 오류 진단을 보다 효율적으로 수행할 수 있도록 지원합니다.","permalink":"/whatap-docs/java/agent-transaction-error-stack"},{"id":"browser/analyze-pageload","title":"페이지 로드 분석하기","description":"페이지 로드 이벤트를 차트 형태로 제공하고, 이벤트에 대한 상세 정보를 분석할 수 있습니다.","permalink":"/whatap-docs/browser/analyze-pageload"}]}');

/***/ })

}]);