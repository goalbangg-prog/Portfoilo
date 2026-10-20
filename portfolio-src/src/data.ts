export const links = {
  github:'https://github.com/goalbangg-prog',
  bmw:'https://github.com/goalbangg-prog/BMW-5-series-LCA-SCOPE3-WBCSD',
  bmwReport:'https://github.com/goalbangg-prog/BMW-5-series-LCA-SCOPE3-WBCSD/blob/main/docs/BMW-5-series-LCA.pdf',
  epd:'https://github.com/goalbangg-prog/EPD-Data-Analysis',
  kets:'https://honeysuckle-rose-a94.notion.site/K-ETS-Compliance-Cost-Optimizer-3cca892fe8d6813d879ce97daea02eef',
  tire:'https://honeysuckle-rose-a94.notion.site/3c2a892fe8d6809b90eee22e41aa4d37?pvs=74',
  weather:'https://honeysuckle-rose-a94.notion.site/3c2a892fe8d680a6aceaf1ed62951c53?pvs=74',
  paper:'https://doi.org/10.15531/KSCCR.2025.16.3.415',
  interview:'https://blog.naver.com/kma_131/223896576766',
  hallym:'https://blog.naver.com/hallymde1330/222937049921',
};
export const leapScenarios = [
  {code:'S0',title:'현 상태 유지',type:'BASELINE',demand:'현재 구조 유지',fleet:'현재 차량군 유지',question:'다른 시나리오를 비교하기 위한 기준입니다.'},
  {code:'S1',title:'전체 수요 증가',type:'DEMAND',demand:'전체 이용 수요 증가',fleet:'차량군 구성 유지',question:'차종 구성 변화 없이 이용량이 늘면 배출 경향이 어떻게 바뀔까?'},
  {code:'S2',title:'고성능 ICE 확대',type:'PERFORMANCE ICE',demand:'시나리오 입력자료 확보 필요',fleet:'고성능 내연기관 확대',question:'프리미엄 차량군의 확대가 플랫폼의 배출에 어떤 영향을 줄까?'},
  {code:'S3',title:'EV 확대·ICE 감소',type:'ELECTRIFICATION',demand:'내연기관 수요 감소',fleet:'전기차 도입 확대',question:'전동화 경로에 따라 배출 경향은 어떻게 달라질까?'},
  {code:'S4',title:'ICE·EV 동시 확대',type:'MIXED PATHWAY',demand:'전체 수요 증가',fleet:'일반 ICE는 EV로 전환·고성능 ICE 유지 및 확대',question:'전기차와 고성능 내연기관의 수요가 함께 늘 때 효과가 어떻게 달라질까?'},
];
export const qualifications = [
  ['2023.06','어학','TOEIC 885','2023년 취득 기록'],['2023.03','국가자격','사회복지사 1급',''],
  ['2023.02','국가기술자격','온실가스관리기사',''],['2022.08','수상·수료','온실가스관리 전문인력 양성과정 최우수상','한국환경공단 · 이론시험 최고점'],
  ['2022.08','수상','HALLYM-ODA 3기 서포터즈 최우수상',''],['2022.07','수상','복수전공 수기 공모전 우수상','한림대학교 · 기후변화융합전공'],
  ['2022.05','활동','탄소중립 도민참여 자문단','한국기후변화연구원'],['2019.12','국가기술자격','컴퓨터활용능력 2급',''],
];
