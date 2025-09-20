---
layout: post
title: "Jekyll 블로그에 구글 태그 매니저(GTM) 설치하기"
date: 2025-09-20 20:00:00 +0900
categories: analytics
---

## 웹 분석의 첫걸음

블로그를 만들었으니 이제 방문자 데이터를 추적하고 분석할 차례입니다. 구글 태그 매니저(Google Tag Manager, GTM)는 웹사이트의 다양한 추적 코드를 쉽게 관리할 수 있게 해주는 강력한 도구입니다.

## 구글 태그 매니저란?

GTM은 구글에서 제공하는 무료 태그 관리 시스템으로, 웹사이트에 다양한 마케팅 및 분석 태그를 코드 수정 없이 쉽게 추가하고 관리할 수 있게 해줍니다.

### 주요 장점

- **코드 수정 없이 태그 관리**: 개발자 없이도 마케팅 팀에서 직접 태그를 추가/수정 가능
- **통합 관리**: Google Analytics, Facebook Pixel, 광고 추적 코드 등을 한 곳에서 관리
- **미리보기 기능**: 태그가 올바르게 작동하는지 배포 전에 테스트 가능
- **버전 관리**: 태그 설정의 변경 이력을 추적하고 롤백 가능

## Jekyll 블로그에 GTM 설치하기

Jekyll 블로그에서는 모든 페이지에 GTM이 적용되도록 기본 레이아웃 파일을 수정해야 합니다.

### 1단계: GTM 계정 및 컨테이너 생성

먼저 [Google Tag Manager](https://tagmanager.google.com)에서 계정을 생성하고 웹사이트용 컨테이너를 만듭니다. 컨테이너를 생성하면 `GTM-XXXXXXX` 형태의 컨테이너 ID를 받게 됩니다.

### 2단계: 레이아웃 파일 확인

Jekyll에서는 보통 `_layouts/default.html` 파일이 모든 페이지의 기본 템플릿 역할을 합니다. 다른 레이아웃 파일들(`post.html`, `page.html` 등)도 이 파일을 상속받는지 확인합니다.

```yaml
# _layouts/post.html 파일 상단
---
layout: default
---
```

### 3단계: GTM 코드 추가

GTM은 두 부분의 코드가 필요합니다:

#### Head 섹션에 추가할 스크립트

`_layouts/default.html` 파일의 `</head>` 태그 직전에 다음 코드를 추가합니다:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

#### Body 섹션에 추가할 Noscript 태그

`<body>` 태그 바로 다음에 다음 코드를 추가합니다:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### 실제 구현 코드

최종적으로 `_layouts/default.html` 파일에서 관련 부분은 다음과 같이 구성됩니다:

```html
<head>
    <!-- 기존 meta 태그들 -->
    
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
    <!-- End Google Tag Manager -->
</head>
<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <!-- 페이지 콘텐츠 -->
</body>
```

## 설치 확인 및 테스트

### 1. 로컬 테스트

Jekyll 개발 서버를 실행하여 GTM이 올바르게 로드되는지 확인합니다:

```bash
bundle exec jekyll serve
```

브라우저 개발자 도구의 Network 탭에서 `googletagmanager.com`으로의 요청이 성공하는지 확인합니다.

### 2. GTM 미리보기 모드

GTM 대시보드에서 "미리보기" 버튼을 클릭하면 Tag Assistant가 활성화됩니다. 이 상태에서 웹사이트를 방문하면 어떤 태그가 실행되는지 실시간으로 확인할 수 있습니다.

### 3. 실시간 보고서

GTM 대시보드의 "실시간" 섹션에서 현재 웹사이트 활동을 모니터링할 수 있습니다.

구글 태그 매니저 설치가 완료되었습니다. 이제 GTM 대시보드에서 다양한 태그를 추가하여 웹사이트 분석을 시작할 수 있습니다.
