# V4 자료 및 캡처 출처

확인·캡처일: 2026-10-14

| 프로젝트 | 실제 방문 URL | 반영한 화면 |
|---|---|---|
| PRESS-CMS | https://goalbangg-prog.github.io/PRESS-CMS-V4/ | V4 발표자료 첫 화면 |
| NGMS Manual Copilot | https://honeysuckle-rose-a94.notion.site/NGMS-Manual-Copilot-3caa892fe8d68127bd0efee6a8ceca75 | 공개 페이지에 포함된 Google Opal 워크플로우 이미지 |
| K-ETS Compliance & Cost Optimizer | https://honeysuckle-rose-a94.notion.site/K-ETS-Compliance-Cost-Optimizer-3cca892fe8d6813d879ce97daea02eef | 공개 페이지에 포함된 n8n 워크플로우와 Google Docs 테스트 보고서 |
| WeArt | https://goalbangg-prog.github.io/WeArt/ | 배포 사이트 메인 화면 |
| YMG BEANS | https://goalbangg-prog.github.io/ | 배포 사이트 메인 화면 |
| 교보문고 클론 | https://goalbangg-prog.github.io/0829/ | 배포 사이트 메인 화면 |

PRESS-CMS 기사 편집기·대시보드, 논문 첫 페이지와 CDM 연구 포스터는 사용자가 제공한 V2 ZIP의 원본 이미지를 유지했습니다.
NGMS와 K-ETS 화면은 설명 페이지에서 공개한 구현 이미지입니다. 별도의 인증된 서비스에 로그인해 실행한 결과를 뜻하지 않습니다.
K-ETS는 가상 데이터로 검증한 MVP로 소개하며, 실제 비용 절감 실적을 주장하지 않습니다.
PRESS-CMS는 공개 발표자료에 따라 개인 역할과 팀 구현 기능을 구분했습니다.
WeArt와 교보문고는 학습 목적의 클론 프로젝트로 표기했습니다.

## V4 기술 스택 확인

2026-10-14 배포된 HTML과 JavaScript 소스를 확인했습니다.
- YMG BEANS: 메인 HTML이 static/js/main.f91f7104.js를 불러오며, 번들에서 React DOM, createRoot, useState, useEffect 사용을 확인했습니다. React / JavaScript / CSS로 표기했습니다.
- WeArt: js/main.js의 ES Module 가져오기와 js/01_fetch_popular.js에서 Fetch API로 JSON 작품 데이터를 불러오는 코드를 확인했습니다.
- 교보문고: js/main.js와 js/api.js에서 Kakao 책 검색 API(dapi.kakao.com/v3/search/book), Fetch API, 도서 검색 및 제목 검색 함수를 확인했습니다. 사용자 설명과도 일치합니다.
- PRESS-CMS: 기존에 확인한 공개 발표자료를 기준으로 React / TypeScript / Supabase / AI API 표기를 유지했습니다.

배포 화면에서 확인하지 못한 백엔드나 별도 실험 기능을 웹사이트의 구현 기술로 추가하지 않았습니다.
이번 V4는 문구와 기술 스택 수정본이며, 추가 브라우저 시각 검수는 수행하지 않았습니다.
