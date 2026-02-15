# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 프로젝트 개요

원페이지 개발자 웹 이력서 프로젝트. 빌드 도구 없이 순수 HTML/CSS/JavaScript와 TailwindCSS CDN으로 구성된 정적 사이트.

## 기술스택

- HTML, CSS, JavaScript (vanilla)
- TailwindCSS via CDN (빌드 불필요)
- 별도 패키지 매니저나 번들러 없음

## 개발 환경

로컬 개발 시 `index.html`을 브라우저에서 직접 열거나 Live Server 사용:
```
npx serve .
```

## 아키텍처

단일 페이지 정적 사이트:
- `index.html` — 전체 이력서 마크업 (7개 섹션: Hero, About, Skills, Experience, Projects, Education, Contact)
- `style.css` — TailwindCSS로 처리되지 않는 커스텀 스타일
- `main.js` — 인터랙션 (햄버거 메뉴, 스무스 스크롤, 스크롤 애니메이션, 다크모드)
- `assets/images/` — 이미지 리소스

## 코딩 컨벤션

- TailwindCSS 유틸리티 클래스 우선, 커스텀 CSS는 최소화
- 모바일 퍼스트 반응형 디자인
