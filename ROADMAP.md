# 개발자 웹 이력서 ROADMAP

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | 개발자 웹 이력서 |
| 목적 | 개인 역량과 경력을 소개하는 원페이지 웹 이력서 |
| 기술스택 | HTML, CSS, JavaScript, TailwindCSS (CDN) |
| 반응형 | 모바일 / 태블릿 / 데스크톱 지원 |

---

## 2. 이력서 섹션 구성

| 순서 | 섹션 | 설명 |
|------|------|------|
| 1 | Hero | 이름, 직함, 한줄 소개, CTA 버튼 |
| 2 | About Me | 자기소개 및 간단한 프로필 |
| 3 | Skills | 기술 스택 (프론트엔드, 백엔드, 도구) |
| 4 | Experience | 경력 사항 (회사명, 기간, 역할) |
| 5 | Projects | 주요 프로젝트 (이름, 설명, 기술, 링크) |
| 6 | Education | 학력 사항 |
| 7 | Contact | 연락처 및 소셜 링크 |

---

## 3. 개발 단계

### Phase 1: 프로젝트 초기 설정
- [ ] 폴더 구조 생성
- [ ] `index.html` 기본 템플릿 작성
- [ ] TailwindCSS CDN 연결
- [ ] `main.js` 파일 생성
- [ ] `style.css` 커스텀 스타일 파일 생성

### Phase 2: HTML 구조 및 섹션 마크업
- [ ] Navigation 바 마크업
- [ ] Hero 섹션 마크업
- [ ] About Me 섹션 마크업
- [ ] Skills 섹션 마크업
- [ ] Experience 섹션 마크업
- [ ] Projects 섹션 마크업
- [ ] Education 섹션 마크업
- [ ] Contact 섹션 마크업
- [ ] Footer 마크업

### Phase 3: TailwindCSS 스타일링
- [ ] 전체 레이아웃 및 색상 테마 적용
- [ ] 각 섹션별 스타일링
- [ ] 반응형 디자인 (모바일 우선)
- [ ] 호버 효과 및 트랜지션

### Phase 4: JavaScript 인터랙션
- [ ] 모바일 햄버거 메뉴 토글
- [ ] 스무스 스크롤 네비게이션
- [ ] 스크롤 시 섹션 애니메이션 (Intersection Observer)
- [ ] 다크모드 토글

### Phase 5: 최종 점검 및 배포
- [ ] 크로스 브라우저 테스트
- [ ] 반응형 확인 (모바일, 태블릿, 데스크톱)
- [ ] 성능 최적화 (이미지, 폰트)
- [ ] GitHub Pages 또는 Vercel 배포

---

## 4. 폴더 구조

```
project/
├── index.html        # 메인 HTML 파일
├── style.css         # 커스텀 CSS 스타일
├── main.js           # JavaScript 인터랙션
├── assets/
│   └── images/       # 프로필 사진, 프로젝트 이미지
└── ROADMAP.md        # 개발 로드맵 (현재 파일)
```

---

## 5. 샘플 이력서 데이터

### Hero
- **이름**: 홍길동
- **직함**: 풀스택 웹 개발자
- **한줄 소개**: 사용자 경험을 중심으로 웹 서비스를 만드는 개발자입니다.

### About Me
> 3년차 웹 개발자로, 프론트엔드와 백엔드를 아우르는 풀스택 개발을 하고 있습니다. 깔끔한 코드와 직관적인 UI/UX를 추구하며, 새로운 기술을 배우는 것을 즐깁니다.

### Skills

| 분류 | 기술 |
|------|------|
| Frontend | HTML, CSS, JavaScript, React, TailwindCSS |
| Backend | Node.js, Express, Python |
| Database | MySQL, MongoDB |
| Tools | Git, GitHub, VS Code, Figma |

### Experience

| 기간 | 회사 | 직책 | 주요 업무 |
|------|------|------|-----------|
| 2023.03 - 현재 | ABC 테크 | 프론트엔드 개발자 | React 기반 웹 서비스 개발 및 유지보수 |
| 2021.06 - 2023.02 | XYZ 소프트 | 주니어 개발자 | 사내 관리 시스템 풀스택 개발 |

### Projects

| 프로젝트 | 설명 | 기술 |
|----------|------|------|
| 할일 관리 앱 | 드래그앤드롭 기반 투두 리스트 웹앱 | React, TailwindCSS, Firebase |
| 날씨 대시보드 | 실시간 날씨 정보 조회 대시보드 | JavaScript, OpenWeather API |
| 개인 블로그 | 마크다운 기반 기술 블로그 | Next.js, MDX |

### Education

| 기간 | 학교 | 전공 |
|------|------|------|
| 2017.03 - 2021.02 | 한국대학교 | 컴퓨터공학과 |

### Contact
- **이메일**: hong@example.com
- **GitHub**: github.com/honggildong
- **LinkedIn**: linkedin.com/in/honggildong
