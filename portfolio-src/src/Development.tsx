import { External, Facts, Figure, ProjectHead, Role, SectionHead } from './ui';
import { links } from './data';

export function Development() {
  return <>
    <section id="development" className="page-section">
      <SectionHead number="04" title="AI·자동화" description="문서를 찾아 답하는 도구, 기사 편집 시스템, API와 규칙을 연결한 자동화를 만들었습니다."/>
      <article className="project" id="ngms">
        <ProjectHead number="01" title="NGMS Manual Copilot" subtitle="공식 매뉴얼에서 근거를 찾는 업무 안내 도구" tags={['Google Opal','Gemini','Markdown']}/>
        <div className="project-grid">
          <Figure file="ngms-workflow.jpg" alt="공식 NGMS 매뉴얼 5종과 지식 문서, 질의응답 노드를 연결한 Google Opal 실제 화면" caption="실제 Google Opal 구성 화면 · 공식 매뉴얼과 검수된 지식 연결"/>
          <div className="project-copy"><p className="project-summary">NGMS 사용법을 질문하면 공식 매뉴얼에서 답을 찾아 메뉴 위치, 처리 절차, 참고 문서 페이지를 함께 안내합니다.</p>
            <div className="number-line"><div><strong>5<span>종</span></strong><p>공식 PDF 매뉴얼</p></div><div><strong>654<span>건</span></strong><p>질문·답변 정리</p></div><div><strong>476<span>건</span></strong><p>검수 후 사용</p></div></div>
            <Role>질문·답변 654건을 검수해 178건을 제외하고 476건을 사용했습니다. 지식 자료를 Markdown으로 정리하고 Google Opal에 연결했습니다.</Role>
            <Facts items={[[ '답변 방식','메뉴 위치·업무 처리 순서·참고 페이지를 함께 제시하고, 자료에 없는 내용은 확인할 수 없다고 답하도록 설정했습니다.'],['AI 활용','Gemini 기반 답변 생성과 문서 검수·지식 정리를 구분했습니다. 검수 건수는 실제 사용 자료의 수이며 정답률을 뜻하지 않습니다.']]}/>
            <div className="links"><External href="https://honeysuckle-rose-a94.notion.site/NGMS-Manual-Copilot-3caa892fe8d68127bd0efee6a8ceca75" primary>Notion 프로젝트 원문</External></div>
          </div>
        </div>
      </article>
      <article className="project" id="press">
        <ProjectHead number="02" title="PRESS-CMS · AI Reporter Room" subtitle="기자 피드백을 반영한 기사 작성·검토 시스템" tags={['팀 프로젝트 · 팀장','React · TypeScript','FastAPI · Supabase']}/>
        <Figure file="press-editor.png" alt="PRESS-CMS 기사 편집기와 오른쪽 AI 초안 작성 도구 실제 화면" caption="팀 프로젝트 실제 기사 편집 화면 · 문장 피드백과 AI 초안 작성" className="wide-evidence"/>
        <div className="text-columns">
          <div><p className="project-summary">취재 자료와 사진을 정리하고 기사를 작성·검토·출고하는 시스템입니다. 기자에게 받은 의견을 바탕으로 편집 화면의 개선 방향을 제안했습니다.</p><Facts items={[[ '팀이 구현한 기능','기사 편집, 사진·자료 관리, 문장별 피드백, 역할별 검토·출고, AI 초안 작성과 검수 보조.'],['기술 구성','React · TypeScript / FastAPI / Supabase / AI API.']]}/></div>
          <div><Role label="팀장으로 직접 맡은 일"><ul><li>기자 의견 정리와 편집 화면 개선 방향 제안</li><li>GitHub 협업 환경 구성과 Render 배포</li><li>작업일지·발표자료 작성 및 통합</li></ul></Role><p className="note">화면은 팀 전체의 결과물입니다. 개별 기능 전체를 단독 개발한 것으로 표기하지 않습니다.</p><div className="links"><External href="https://goalbangg-prog.github.io/PRESS-CMS-V4/" primary>발표자료 보기</External></div></div>
        </div>
      </article>
      <div className="automation-heading"><h3>관심사를 반복 업무 자동화로</h3><p>기상 API, JavaScript와 Discord를 연결한 두 가지 n8n 기술 데모입니다.</p></div>
      <article className="automation-row" id="tire"><header><span className="work-tag">n8n · JavaScript · Open-Meteo</span><h3>서킷 타이어 공기압<br/>계산 자동화</h3><p>입력 폼 → 기상정보 → 계산 → Discord</p></header><div>
        <p>차량·서킷·목표 열간 공기압을 입력받아 위치별 예보를 조회하고, 코드에 설정한 계수와 식으로 냉간 공기압 추정값을 구성하는 자동화입니다.</p>
        <Facts items={[[ '구현 범위','4개 차량·2개 서킷 입력, 좌표 매핑, 기상 API 응답 처리, 계산 결과와 보고서 메시지 구성. 5개 노드와 JavaScript Code 노드 2개로 구성했습니다.'],['기술적 경험','사용자 입력 구조화, 위치 기반 API 연동, 계산 로직과 외부 메시지 출력 연결.']]}/>
        <p className="note">실행 흐름에 LLM 호출은 없습니다. 실측·제조사 조건으로 검증한 공기압 권고 모델이 아닌 자동화 데모입니다. 현재 제공 코드의 변수·단위와 시간 처리에는 추가 점검이 필요합니다.</p>
        <div className="links"><External href={links.tire}>Notion 입력 폼·실행 화면</External></div>
      </div></article>
      <article className="automation-row" id="weather"><header><span className="work-tag">n8n · API · Discord Webhook</span><h3>서킷·와인딩<br/>기상 브리핑 자동화</h3><p>예약 실행 → 3개 장소 조회 → 통합 브리핑</p></header><div>
        <p>인제 스피디움, 용인 에버랜드 스피드웨이, 춘천 배후령의 기상예보를 조회하고, 장소별로 정한 조건에 따라 주의 요소를 분류해 Discord 브리핑으로 정리합니다.</p>
        <Facts items={[[ '구현 범위','Schedule Trigger, 3개 위치 API 조회, JavaScript 조건 분기·메시지 생성, Discord 전송을 4개 노드로 연결했습니다.'],['기술적 경험','정기 실행 구성, 다중 위치 응답 처리, 장소별 조건 분기, 통합 보고서 구성.']]}/>
        <p className="note">LLM을 호출하지 않는 규칙 기반 자동화입니다. 코드의 결빙 관련 값은 설정한 규칙의 점수이며 실측 검증된 발생 확률이나 주행 안전 판정이 아닙니다.</p>
        <div className="links"><External href={links.weather}>Notion 브리핑·실행 화면</External></div>
      </div></article>
    </section>
    <section id="web" className="page-section">
      <SectionHead number="05" title="웹 개발" description="직접 만든 화면과 API 연동 경험입니다. 클론 프로젝트는 학습 목적으로 제작했습니다."/>
      <div className="web-projects">
        <article><Figure file="ymgbeans.jpg" alt="YMG BEANS 생두 소개 웹사이트 실제 화면" caption="YMG BEANS · 생두 소개 사이트"/><h3>YMG BEANS</h3><p>지구본 탐색, 취향 선택과 상품 목록 화면을 React로 구현했습니다.</p><p className="stack-text">React · JavaScript · CSS</p><div className="links"><External href="https://goalbangg-prog.github.io/" primary>사이트</External><External href="https://github.com/goalbangg-prog/YMGBeans">GitHub</External></div></article>
        <article><Figure file="weart.jpg" alt="WeArt 클론 웹사이트 실제 화면" caption="WeArt · 학습용 클론"/><h3>WeArt 클론</h3><p>HTML·CSS로 화면을 구성하고, JSON 작품 데이터를 불러와 슬라이드와 작품 목록을 구현했습니다.</p><p className="stack-text">HTML · CSS · JavaScript · Fetch API</p><div className="links"><External href="https://goalbangg-prog.github.io/WeArt/" primary>사이트</External><External href="https://github.com/goalbangg-prog/WeArt">GitHub</External></div></article>
        <article><Figure file="kyobo.jpg" alt="교보문고 클론 도서 검색 웹사이트 실제 화면" caption="교보문고 · 학습용 클론"/><h3>교보문고 클론</h3><p>Kakao 책 검색 API를 연동해 도서를 검색하고 표지·저자·가격 정보를 표시했습니다.</p><p className="stack-text">HTML · CSS · JavaScript · Kakao API</p><div className="links"><External href="https://goalbangg-prog.github.io/0829/" primary>사이트</External><External href="https://github.com/goalbangg-prog/Kyobo-Clone">GitHub</External></div></article>
      </div>
    </section>
  </>;
}
