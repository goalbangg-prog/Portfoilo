import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpRight, Menu, X } from 'lucide-react';
import { Figure, External, SectionHead, ProjectHead, Role, Facts, ImageContext } from './ui';
import { Experience, Research, Career } from './ResumeSections';
import { Development } from './Development';
import { links } from './data';

const nav=[['intro','소개'],['climate','기후·데이터 분석'],['experience','연구·행정 실무'],['research','논문·LEAP'],['development','AI·자동화'],['web','웹 개발'],['career','경력·교육'],['qualifications','자격·역량']];
const aliases:Record<string,string>={selected:'intro',about:'intro',timeline:'career',skills:'qualifications'};
function resolveLegacyHash() {
  if(!location.hash.startsWith('#/'))return;
  const [section,project]=location.hash.slice(2).split('/');
  const projectIds:Record<string,string>={bmw:'bmw',epd:'epd',kets:'kets',leap:'leap',ngms:'ngms',press:'press',tire:'tire',weather:'weather'};
  const target=projectIds[project]||aliases[section]||section;
  history.replaceState(null,'','#'+target);
}
export default function App() {
  const [active,setActive]=useState('intro');
  const [menu,setMenu]=useState(false);
  const [zoom,setZoom]=useState<{src:string;alt:string}|null>(null);
  const dialog=useRef<HTMLDialogElement>(null);
  useEffect(()=>{
    resolveLegacyHash();
    const scrollToHash=()=>{resolveLegacyHash();const id=location.hash.slice(1);document.getElementById(id)?.scrollIntoView();};
    if(location.hash)requestAnimationFrame(scrollToHash);
    window.addEventListener('hashchange',scrollToHash);
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting);
      if(visible.length)setActive(visible[0].target.id);
    },{rootMargin:'-8% 0px -68% 0px',threshold:0});
    nav.forEach(([id])=>{const node=document.getElementById(id);if(node)observer.observe(node);});
    return()=>{observer.disconnect();window.removeEventListener('hashchange',scrollToHash);};
  },[]);
  useEffect(()=>{
    if(!zoom)return;
    dialog.current?.showModal();
    const old=document.body.style.overflow;
    document.body.style.overflow='hidden';
    return()=>{document.body.style.overflow=old;};
  },[zoom]);
  useEffect(()=>{
    if(!menu)return;
    const onEscape=(e:KeyboardEvent)=>{if(e.key==='Escape')setMenu(false);};
    window.addEventListener('keydown',onEscape);
    return()=>window.removeEventListener('keydown',onEscape);
  },[menu]);
  const closeImage=()=>{dialog.current?.close();setZoom(null);};
  return <ImageContext.Provider value={setZoom}>
    <a className="skip-link" href="#main">본문으로 바로가기</a>
    <header className="mobile-header"><a href="#intro" onClick={()=>setMenu(false)}>김수현 <span>포트폴리오</span></a><button aria-expanded={menu} aria-controls="main-nav" onClick={()=>setMenu(!menu)} aria-label={menu?'메뉴 닫기':'메뉴 열기'}>{menu?<X/>:<Menu/>}<span>목차</span></button></header>
    <aside className={'sidebar '+(menu?'is-open':'')}>
      <a className="brand" href="#intro" onClick={()=>setMenu(false)}><span className="brand-mark">KS.</span><strong>김수현</strong><span>PORTFOLIO 2026</span></a>
      <p className="nav-label">포트폴리오 목차</p>
      <nav id="main-nav" aria-label="포트폴리오 섹션">{nav.map(([id,label],i)=><a key={id} href={'#'+id} onClick={()=>{setMenu(false);setActive(id);}} aria-current={active===id?'location':undefined}><span className="nav-number">{String(i+1).padStart(2,'0')}</span>{label}</a>)}</nav>
      <div className="sidebar-bottom"><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={17}/><span className="sr-only"> (새 창)</span></a><p>기후변화 · 온실가스 · LCA<br/>데이터 분석 · 연구행정</p></div>
    </aside>
    <main id="main" tabIndex={-1}>
      <section id="intro" className="intro page-section">
        <div className="intro-top"><span className="eyebrow">기후변화 · 온실가스 · LCA</span><span className="edition">김수현 포트폴리오 / 2026</span></div>
        <div className="intro-body">
          <div className="intro-copy"><h1>안녕하세요.<br/><em>김수현</em>입니다.</h1>
            <p className="intro-lead">기후변화 연구와 행정 실무를 경험하고,<br className="desktop-break"/> 데이터를 분석해 직접 도구로 만듭니다.</p>
            <p>사회복지학과 기후변화융합전공을 함께 공부했습니다. 세종대학교 기후환경융합센터에서 연구용역과 연구비 행정을 맡았고, 지금은 온실가스·LCA 분석에 AI와 웹 개발을 연결하고 있습니다.</p>
            <div className="intro-actions"><a className="button primary" href="#climate">프로젝트 보기 <ArrowDown size={18}/></a><a className="button" href="#experience">연구·행정 경력 보기 <ArrowDown size={18}/></a></div>
          </div>
          <figure className="portrait"><img src="./assets/profile.jpg" alt="김수현 증명사진" width="1050" height="1470" fetchPriority="high"/><figcaption><strong>김수현</strong><span>기후변화 · 온실가스 분야 지원</span></figcaption></figure>
        </div>
        <div className="intro-summary"><div><span>분석·개발</span><strong>LCA · EPD · AI 자동화</strong><p>공개 데이터 분석부터 웹 구현까지</p></div><div><span>연구·실무</span><strong>기후환경융합센터 연구원</strong><p>연구용역 · 연구비 · 비영리법인 행정</p></div><div><span>자격·수상</span><strong>온실가스관리기사</strong><p>전문인력 양성과정 최우수상 · 2022</p></div></div>
        <a className="scroll-cue" href="#climate"><ArrowDown size={16}/> 아래로 스크롤하며 프로젝트와 경력을 확인하세요.</a>
      </section>

      <section id="climate" className="page-section">
        <SectionHead number="01" title="기후·데이터 분석" description="공개 자료를 수집하고, 계산 근거를 점검하고, 결과를 웹으로 전달했습니다."/>
        <article className="project" id="bmw">
          <ProjectHead number="01" title="BMW 5시리즈 온실가스 분석" subtitle="다섯 차종의 생애주기 배출부터 Scope 3·회피배출까지" tags={['개인 프로젝트','Python','LCA · Scope 3']}/>
          <div className="project-grid">
            <Figure file="bmw-result.png" alt="BMW 다섯 차종 생애주기 배출량과 단계별 결과를 비교하는 실제 분석 웹사이트" caption="직접 구현한 분석 웹사이트 · 차량별 결과와 조건 변경 화면"/>
            <div className="project-copy">
              <p className="project-summary">같은 5시리즈라도 가솔린·PHEV·전기차의 온실가스 배출은 얼마나 다를까? 국내 전력과 공인 연비를 적용해 <strong>제조부터 폐차까지</strong> 다시 계산했습니다.</p>
              <Role>기획, 공개 자료 수집, Python 모델링, 결과 검증, 웹 계산기 구현을 1인으로 수행했습니다.</Role>
              <Facts items={[
                ['자료·범위','국가 LCI DB, BMW Vehicle Footprint, 한국에너지공단 자료. 승용차 1대 × 20만 km(15년), 제조·에너지 공급·주행·폐차 포함.'],
                ['핵심 결과',<><strong>i5 eDrive40 40.6 vs 520i 56.7 tCO₂eq</strong><br/>기준 시나리오에서 생애주기 배출 약 28% 감소. 530e 56.1, M5 69.6, i5 M60 45.5 tCO₂eq.</>],
                ['분석 확장','2025년 상반기 판매분 9,456대의 Scope 3 예시와 i5 828대의 회피배출을 산정했습니다.'],
                ['검증','공식값 5개 항목 대조, Python·웹 계산 결과 비교, 11개 가정을 하나씩 바꾼 민감도 분석.'],
              ]}/>
              <p className="note">정비·충전 인프라·재활용 크레딧 제외. M5·i5 M60 제조는 추정값입니다. 외부 검토를 받지 않은 개인 분석이며 BMW 공식 공시가 아닙니다.</p>
              <div className="links"><External href="https://goalbangg-prog.github.io/BMW-5-series-LCA-SCOPE3-WBCSD/" primary>실제 사이트</External><External href={links.bmwReport}>분석 보고서</External><External href={links.bmw}>GitHub</External></div>
            </div>
          </div>
        </article>
        <article className="project" id="epd">
          <ProjectHead number="02" title="EPD 데이터 분석 · Beyond Carbon" subtitle="환경성적표지 평가계수 398건 전수 점검" tags={['공공데이터','Python','데이터 품질 검토']}/>
          <Figure file="epd-six-flags.svg" alt="원 분석 리포트의 여섯 검토 사례와 일곱 영향범주 비교 도표" caption="분석 리포트에 사용한 원본 도표 · 6개는 검토 사례 수이며, 오류가 확정된 행 수가 아닙니다." className="wide-evidence"/>
          <div className="text-columns">
            <div><p className="project-summary">탄소발자국만 확인하면 어떤 데이터를 놓칠까? 한국환경산업기술원의 <strong>398건 × 7개 영향범주</strong> 평가계수를 점검했습니다.</p>
              <Facts items={[[ '분석 과정','단위·결측 정리 → 값 일치·자릿수 이상·오존층영향 고값 점검 → 순위상관 분석 → 가상 제품 영향 비교.'],['발견','추가 확인이 필요한 6개 사례 중 4개가 탄소 외 범주에 있었습니다. 가상 제품에서는 무게 0.05%인 전선 1 g이 물발자국 98.9%를 차지했습니다.']]}/>
              <div className="links"><External href="https://goalbangg-prog.github.io/EPD-Data-Analysis/" primary>실제 분석 리포트</External><External href={links.epd}>GitHub</External></div>
            </div>
            <div><Facts items={[[ '상관·검증','kg 단위 원료 187종 중 탄소·물소모가 짝지어진 163개 자료의 Spearman ρ = 0.32(구간 0.15–0.49). 부트스트랩 2,000회, 원료군·의심 계수 제외 분석, 웹·Python 39개 항목 검산.'],['해석 범위','공개 배포 파일(2021.08.02)의 산정 근거가 없어 오류로 단정하지 않았습니다. 상관계수만으로 두 범주가 독립이라고 결론 내리지 않았습니다.']]}/>
              <div className="subcase"><strong>연결 프로젝트 · Looply mini LCA</strong><p>간단한 LCA 웹 계산기와 계산 결과를 쉬운 말로 설명하는 AI 해설 기능을 구현한 경험입니다.</p></div>
            </div>
          </div>
        </article>
        <article className="project" id="kets">
          <ProjectHead number="03" title="K-ETS Compliance & Cost Optimizer" subtitle="배출권 구매와 감축 조합을 비교하는 자동 보고서" tags={['가상 데이터 MVP','n8n','JavaScript · Google Docs']}/>
          <div className="project-grid">
            <div className="evidence-stack"><Figure file="ets-workflow.jpg" alt="K-ETS 자동화 프로젝트의 실제 n8n 노드 연결 화면" caption="실제 n8n 워크플로우"/><Figure file="ets-report.jpg" alt="K-ETS 가상 기업 분석 보고서 예시" caption="기존 프로젝트의 가상 데이터 보고서 예시 · 수치는 재현 검증 전" className="report-preview"/></div>
            <div className="project-copy"><p className="project-summary">배출권을 구매할지, 직접 감축할지 비교하고 그 결과를 보고서로 연결하는 프로토타입입니다.</p>
              <Facts items={[[ '프로젝트 구성','가상 기업 배출량·할당량·가격 입력 → 규칙과 가격 조건 적용 → 시나리오 비용 비교 → 설명 생성 → Google Docs 보고서.'],['구현 의도','계산은 n8n Code 노드에서 처리하고, AI는 계산 결과를 설명하도록 역할을 분리했습니다.'],['확인된 산출물','노드 연결 구조와 프로젝트 설명, 자동 생성 보고서 예시를 확인할 수 있습니다.']]}/>
              <div className="limitation"><strong>가상 데이터 기반 프로토타입</strong><p>현재 보관된 코드에는 노드 설정이 누락되어 계산식을 재현·검증하지 못했습니다. 보고서 이미지는 기존 실행 예시이며, 실제 기업의 비용 절감 성과를 뜻하지 않습니다.</p></div>
              <div className="links"><External href={links.kets} primary>Notion 프로젝트 원문</External></div>
            </div>
          </div>
        </article>
      </section>
      <Experience/>
      <Research/>
      <Development/>
      <Career/>
      <footer><div><strong>김수현</strong><p>기후변화 · 온실가스 · LCA</p></div><div className="links"><External href={links.github}>GitHub</External><a className="button" href="#intro">맨 위로 <ArrowUp size={18}/></a></div></footer>
    </main>
    <dialog ref={dialog} className="image-dialog" onClose={()=>setZoom(null)} onClick={e=>{if(e.target===e.currentTarget)closeImage();}} aria-label="프로젝트 이미지 확대">
      {zoom&&<><div className="dialog-toolbar"><p>{zoom.alt}</p><a href={zoom.src} target="_blank" rel="noopener noreferrer">원본 열기 <ArrowUpRight size={17}/></a><button onClick={closeImage} aria-label="이미지 닫기" autoFocus><X size={22}/></button></div><div className="dialog-content"><img src={zoom.src} alt={zoom.alt}/></div></>}
    </dialog>
  </ImageContext.Provider>;
}
