# 김수현 포트폴리오

기후변화·온실가스·LCA 분석, 연구·행정 실무, AI·웹 개발 경험을 소개합니다.

- 첫 화면: 증명사진과 자기소개
- 탐색: 세로 스크롤, 한글 목차, 모바일 메뉴
- 프로젝트: 실제 화면·보고서를 본문에 표시하고 선택 시 이미지 확대
- 행정: IPCC 연구용역, 광진 환경교육센터 계약, 특성화대학원, 법인행정 상세 내용

## 파일 구성

- index.html, assets/, favicon.svg: GitHub Pages 실행 파일
- portfolio-src/src/: 수정할 React·TypeScript·CSS 소스
- portfolio-src/public/: 이미지·PDF 원본
- portfolio-src/evidence/: 데이터 근거와 이미지 출처

기존 V4의 portfolio_assets, app.js, styles.css, SOURCES.md는 이력 참고용으로 보존했습니다.
현재 index.html은 새 assets의 빌드 결과를 사용합니다.

## 실행·수정·배포

Node.js 22.12 이상을 사용합니다. 저장소를 내려받은 뒤:

    cd portfolio-src
    npm ci
    npm run dev

GitHub Pages에 반영할 때:

    npm run build:pages
    cd ..
    git add .
    git commit -m "Update portfolio"
    git push origin main

GitHub Pages의 기존 main 브랜치 / 루트 배포 방식을 유지합니다.
소스만 수정했을 때도 build:pages를 실행해 루트의 실행 파일을 함께 갱신해야 합니다.

## 콘텐츠 범위·검증

K-ETS는 가상 데이터 MVP입니다. 제공 코드의 계산 설정 누락으로 재현 검증 전이며 보고서 수치를 실제 절감 성과로 제시하지 않습니다.
LEAP 기말과제는 연구 설계이며 실행 결과와 구분합니다.
논문 제2저자와 CDM 포스터 제1저자의 기여를 구분합니다.
이메일·이력서는 확인된 자료가 없어 연결하지 않았습니다.

TypeScript·production build, 원본 데이터 검산, 정적 이미지·앵커 경로를 확인했습니다.
실제 브라우저 시각 검수는 수행하지 못했습니다.
두 n8n Notion 캡처는 확보하지 못해 설명과 원문 링크로 표시했습니다.
