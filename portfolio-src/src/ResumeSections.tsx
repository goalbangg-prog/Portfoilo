import { External, Facts, Figure, ProjectHead, Role, SectionHead } from './ui';
import { leapScenarios, links, qualifications } from './data';

export function Experience() {
  return <section id="experience" className="page-section experience-section">
    <SectionHead number="02" title="연구·행정 실무" description="제안서 작성부터 계약·착수, 연구비 관리, 보고와 법인 결산까지 직접 맡은 업무입니다."/>
    <div className="employment"><div><strong>세종대학교 기후환경융합센터</strong><p>연구원 · 2024.11–2025.07</p></div><div><strong>(사)한국기후환경원</strong><p>총무위원회 행정실장 · 같은 기간, 봉사직</p></div></div>
    <p className="experience-intro">연구진·발주기관·산학협력단과 협의하며 사업별 문서와 행정 절차를 처리했습니다. 아래는 사업 전체의 총괄 업무가 아닌, 실무담당자로서 직접 수행한 내용입니다.</p>
    <article className="work-block">
      <header><span className="work-number">01</span><h3>기상청 2025년<br/>IPCC 대응 방안 연구</h3><p>세종대 기후환경융합센터</p><span className="work-tag">연구용역 · 대외협력</span></header>
      <div className="work-detail">
        <h4>제안·수주부터 수행관리까지 문서를 작성했습니다.</h4>
        <dl className="duty-list">
          <div><dt>제안·수주</dt><dd>기존 양식과 연구진 검토 의견을 반영해 <strong>기술제안서 상당 부분</strong>을 작성했습니다. 정성·정량제안서, 연구 견적서, 사업비 산출내역서를 준비했습니다.</dd></div>
          <div><dt>착수·수행관리</dt><dd>착수보고회 발표자료, 사업수행상황보고서, 회의록을 작성했습니다.</dd></div>
          <div><dt>전문가 인터뷰</dt><dd><strong>국내 IPCC 주저자 인터뷰를 직접 진행</strong>하고 원고 초안·수정본을 작성해 기상청에 전달했습니다.</dd></div>
          <div><dt>포럼·국제회의</dt><dd>IPCC 전문가 포럼 운영을 지원했습니다. SRCities 주저자 LAM-2(두바이) 참석 관련 일정과 공무원 여비규정을 검토했습니다.</dd></div>
        </dl>
        <div className="published"><strong>기상청 공식 블로그에 공개된 인터뷰</strong><p>인터뷰 진행·원고 작성에 참여했으며, 최종 편집과 게시는 기상청에서 진행했습니다.</p><div className="links"><External href={links.interview}>국내 전문가 인터뷰 ①</External><External href="https://blog.naver.com/kma_131/223896577818">국내 전문가 인터뷰 ②</External></div></div>
      </div>
    </article>
    <article className="work-block">
      <header><span className="work-number">02</span><h3>광진 환경교육센터<br/>운영 용역</h3><p>광진구청 · (사)한국기후환경원</p><span className="work-tag">계약·착수 · 문제 해결</span></header>
      <div className="work-detail">
        <h4>계약·착수 서류를 준비하고, 날짜 불일치를 바로잡았습니다.</h4>
        <p>수의계약 서류, 착수신고서, 용역예정공정표, 현장대리인신고서, 선금지급신청서와 선금사용계획서를 준비해 제출했습니다.</p>
        <ol className="case-steps">
          <li><span>발견</span><div><strong>계약서와 신청서의 착수일 불일치</strong><p>계약서와 선금지급신청서에 기재된 착수일이 서로 다른 것을 확인했습니다.</p></div></li>
          <li><span>조정</span><div><strong>발주기관 기준 확인 → 서류 수정·재제출</strong><p>광진구청 담당자에게 적용 기준을 문의하고, 회신에 맞춰 서류를 수정한 뒤 보증기관에 다시 제출했습니다.</p></div></li>
          <li><span>완료</span><div><strong>나라장터 선금 수납의뢰 완료</strong><p>수정된 서류를 기준으로 후속 행정 절차를 마쳤습니다.</p></div></li>
        </ol>
      </div>
    </article>
    <article className="work-block">
      <header><span className="work-number">03</span><h3>기후변화특성화<br/>대학원 사업</h3><p>세종대 기후환경융합센터</p><span className="work-tag">연구비 · 인력 · 교육 지원</span></header>
      <div className="work-detail"><h4>연구비와 참여인력, 정기 보고를 관리했습니다.</h4>
        <dl className="duty-list">
          <div><dt>사업 보고</dt><dd>분기별 사업수행상황보고서를 작성·제출했습니다.</dd></div>
          <div><dt>예산·연구비</dt><dd>과제별 예산안을 수립하고 연구사업비를 집행·관리했습니다. 연구비 증빙자료를 정리했습니다.</dd></div>
          <div><dt>참여인력</dt><dd>참여연구원 등록·변경을 처리하고, 참여율에 따른 <strong>학생인건비 지급</strong>을 관리했습니다.</dd></div>
          <div><dt>협의·교육</dt><dd>산학협력단과 행정절차를 협의하고 대학원 수업조교를 맡았습니다.</dd></div>
          <div><dt>포럼 운영 지원</dt><dd>2024 세종기후환경포럼의 방명록·자료를 정리하고 회의록을 작성했습니다.</dd></div>
        </dl>
      </div>
    </article>
    <article className="work-block">
      <header><span className="work-number">04</span><h3>(사)한국기후환경원<br/>법인행정</h3><p>총무위원회 행정실장 · 봉사직</p><span className="work-tag">공문 · 세무 · 비영리 결산</span></header>
      <div className="work-detail"><h4>대외 문서부터 세금 신고·납부, 결산자료까지 처리했습니다.</h4>
        <dl className="duty-list">
          <div><dt>대외협력</dt><dd>기관 공식 공문을 작성하고 외부기관과의 업무협약(MOU) 관련 업무를 맡았습니다.</dd></div>
          <div><dt>발급 업무</dt><dd>전자세금계산서와 기부금영수증을 발급했습니다.</dd></div>
          <div><dt>세무 처리</dt><dd>기타소득세·지방소득세 신고와 납부를 처리하고, 과세사업자 전환 관련 업무를 수행했습니다.</dd></div>
          <div><dt>비영리 결산</dt><dd><strong>기부금품지출명세서, 운용소득지출명세서, 출연받은재산 사용명세서</strong> 등 법인 결산자료와 기부금 소명자료를 작성했습니다.</dd></div>
        </dl><p className="note">세종대 재직 중 별도 근로계약 없이 맡은 봉사직입니다.</p>
      </div>
    </article>
  </section>;
}

export function Research() {
  return <section id="research" className="page-section">
    <SectionHead number="03" title="논문·연구 활동과 LEAP" description="논문 제2저자, 학술대회 포스터 제1저자 경험과 대학원 수업에서 수행한 연구 설계입니다."/>
    <article className="research-row" id="paper">
      <Figure file="climate-paper.png" alt="토픽모델링 분석을 활용한 국내 기후기술 연구동향 분석 논문 첫 페이지" caption="한국기후변화학회지 16권 3-1호 · 2025" className="document-image"/>
      <div><span className="work-tag">학술논문 · 제2저자</span><h3>토픽모델링 분석을 활용한<br/>국내 기후기술 연구동향 분석</h3><p className="authors">유재호 · 김수현 · 전의찬</p>
        <p>KCI 기후기술 논문 <strong>285편</strong>에서 키워드 <strong>1,893개</strong>를 추출하고, LDA 토픽모델링으로 주요 연구주제 <strong>6개</strong>를 도출한 연구입니다.</p>
        <Facts items={[[ '방법·결과','NetMiner 기반 LDA와 연도별 핫토픽 분석. 정책 변화 이후 연구 확대와 2020년 이후 ESG 경영·소비자 인식 연구 증가를 살폈습니다.']]}/>
        <Role label="본인 기여 · 제2저자">연구 아이디어를 제안했습니다. 주요 데이터 분석은 제1저자가 담당했습니다.</Role>
        <div className="links"><External href={links.paper} primary>논문 원문</External></div>
      </div>
    </article>
    <article className="research-row" id="cdm">
      <Figure file="cdm-poster.png" alt="국내 CDM 연구 동향 분석 학술대회 포스터 원본" caption="2025 한국기후변화학회 상반기 학술대회 · 제1저자 포스터" className="document-image"/>
      <div><span className="work-tag">학술대회 포스터 · 제1저자</span><h3>LDA 토픽모델링을 통한<br/>국내 청정개발체제(CDM) 연구 동향 분석</h3><p className="authors">김수현 · 유재호 · 전의찬</p>
        <p>KCI의 CDM 관련 논문 <strong>219편</strong>을 분석해 주요 연구주제 <strong>7개</strong>를 정리했습니다. 개도국 국외감축사업 43편, 에너지전환 CDM 경제성 분석 42편 등이 포함됐습니다.</p>
        <Role label="직접 수행한 분석">
          <ul><li>CDM·청정개발체제 관련 서지정보 수집, 다른 분야의 동음 약어 논문 제외</li><li>국문 초록을 영어로 번역하고 텍스트 정제</li><li>불용어·지정어·유의어·제외어 사전 구성</li><li>NetMiner4에서 LDA 토픽모델링 수행</li></ul>
        </Role>
        <p className="note">시계열·중심성 분석을 추가해 연구 동향 해석을 더 정교하게 할 수 있습니다. 환경부 기후변화특성화대학원사업 지원 연구입니다.</p>
      </div>
    </article>
    <article className="project leap-project" id="leap">
      <ProjectHead number="LEAP" title="에너지·온실가스 시나리오 실습" subtitle="「기후변화모형연구」 수업과 공유차량 배출 영향 연구 설계" tags={['대학원 수업 · 2025','개인 기말과제','연구 설계']}/>
      <div className="project-grid leap-grid">
        <Figure file="leap-scenarios.png" alt="김수현의 LEAP 기말과제 6쪽: 필요한 자료 목록과 다섯 비교 시나리오" caption="직접 작성한 기말과제 6쪽 · 자료 수집 계획과 시나리오 표" className="document-image"/>
        <div>
          <h4>공유차량의 차종 구성과 이용량이 바뀌면?</h4>
          <p>「LEAP 모형을 활용한 고성능 내연기관 공유차량 도입의 온실가스 배출 영향 분석: 쏘카를 중심으로」를 주제로 연구계획을 작성했습니다.</p>
          <Role>연구 주제·배경·목적 설정, 필요한 입력자료 정리, 비교 시나리오 5개 구성, 검토할 정책적 쟁점 정리.</Role>
          <div className="scenario-list">{leapScenarios.map(s=><div key={s.code}><strong>{s.code}</strong><span>{s.title}</span></div>)}</div>
          <p className="note">7쪽 기말과제의 완료 범위는 연구계획과 시나리오 설계입니다. 운행 원자료, 실행 모델과 결과 그래프는 포함되지 않아 감축 성과로 제시하지 않습니다.</p>
          <div className="links"><External href="./assets/leap-research-plan.pdf" primary>기말과제 PDF</External></div>
        </div>
      </div>
      <div className="course-work"><h4>수업에서 실습한 내용</h4><p>가상 국가 Freedonia를 통해 에너지 수요·전환·자원에서 배출량과 비용까지 연결하는 방법을 익혔습니다.</p><div className="course-columns">
        <div><strong>수요 구조와 활동자료</strong><p>가정·산업·상업·수송의 Branch 구성, 활동량·보급률·에너지집약도 입력. 수송에서는 주행거리·연비·탑승인원을 연결했습니다.</p></div>
        <div><strong>전환·자원과 산정 경계</strong><p>송배전 손실, 발전효율·설비용량·급전순위, 자원 수입 조건을 구성하고 배출계수 적용 위치와 이중계산을 점검했습니다.</p></div>
        <div><strong>정책·비용 시나리오</strong><p>기준·감축 시나리오 상속, 효율 개선·연료 전환 비교, 자본비·운영유지비·자원비·할인율 설정을 다뤘습니다.</p></div>
      </div><p className="note">학습 근거: 유재호, 기후변화모형연구 2·3·4·5·10주차 강의자료. 강의의 입력 조건과 예시는 실제 국가 통계나 본인의 실증 결과와 구분합니다.</p></div>
    </article>
  </section>;
}

export function Career() {
  const career=[
    ['2026','기후 데이터·AI·웹 개발','생성형 AI 마스터 클래스(KDT) 수강. Python 데이터 분석, n8n 자동화, 웹 개발을 학습하며 BMW LCA, EPD, NGMS 등 프로젝트를 제작했습니다.'],
    ['2025.07–2026.05','성동지역아동복지센터 · 사회복지사','사회복지 현장에서 다양한 사람과 협업하고 의견을 정리하는 경험을 쌓았습니다.'],
    ['2024.11–2025.07','세종대학교 기후환경융합센터 · 연구원','기상청 IPCC 대응방안 연구, 기후변화특성화대학원 사업, 연구비 행정을 수행했습니다. 같은 기간 (사)한국기후환경원 법인행정을 봉사직으로 맡았습니다.'],
    ['2025 연구 활동','세종대학교 대학원 기후에너지융합학과','석박사통합과정에서 논문·학술대회 포스터 연구에 참여하고, LEAP 수업 실습과 기말과제를 수행했습니다.'],
    ['2023.02 졸업','한림대학교 · 사회복지학 / 기후변화융합전공','사회복지학을 전공하고 기후변화융합전공을 복수전공했습니다. 2022년 온실가스관리 전문인력 양성과정을 수료하고 최우수상을 받았습니다.'],
  ];
  return <>
    <section id="career" className="page-section">
      <SectionHead number="06" title="경력·교육" description="사회복지에서 기후변화 연구로, 연구·행정 경험에서 데이터 분석과 개발로 이어졌습니다."/>
      <div className="career-list">{career.map(([date,title,body])=><article key={date}><time>{date}</time><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
      <External href={links.hallym}>한림대학교 인터뷰 · 기후행동 전문가를 꿈꾸다</External>
    </section>
    <section id="qualifications" className="page-section">
      <SectionHead number="07" title="자격·수상·활용 역량" description="취득 이력과 실제 프로젝트에서 사용한 도구를 함께 정리했습니다."/>
      <div className="qualification-list">{qualifications.map(([date,kind,title,note])=><div key={title}><time>{date}</time><span className="qualification-kind">{kind}</span><div><strong>{title}</strong>{note&&<p>{note}</p>}</div></div>)}</div>
      <h3 className="skills-heading">프로젝트에서 활용한 역량</h3>
      <div className="skill-table">
        <div><strong>LCA·온실가스</strong><p>기능단위·시스템 경계 설정, 국가 LCI DB 활용, Scope 3·회피배출 산정, EPD 평가계수 검토</p><a href="#bmw">BMW · EPD ↗</a></div>
        <div><strong>데이터 분석</strong><p>Python · Pandas · NumPy · Matplotlib · Scikit-learn, 순위상관·부트스트랩, NetMiner · LDA</p><a href="#epd">EPD · CDM 포스터 ↗</a></div>
        <div><strong>연구·법인행정</strong><p>제안·견적·사업비 산출, 계약·착수·선금, 연구비·인건비, 공문·MOU, 세무·비영리 결산</p><a href="#experience">연구·행정 실무 ↗</a></div>
        <div><strong>AI·자동화</strong><p>Google Opal · Gemini · n8n, 문서 기반 Q&A, 답변 검수, API 응답 처리·자동 보고서</p><a href="#development">NGMS · n8n ↗</a></div>
        <div><strong>웹 개발·협업</strong><p>HTML · CSS · JavaScript · TypeScript · React, API 연동, GitHub · GitHub Pages · Render</p><a href="#web">PRESS-CMS · 웹 개발 ↗</a></div>
        <div><strong>분석 프로그램</strong><p>LEAP 수업 실습 · NetMiner 분석 · openLCA 예제 실습 · Excel</p><a href="#leap">연구·학습 경험 ↗</a></div>
      </div>
    </section>
  </>;
}
