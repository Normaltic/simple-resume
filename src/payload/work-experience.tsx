import type { CareerPayload } from "@/components/work-experience/WorkExperience";

type DiscoveredArray<T> = T extends Array<infer R> ? R : never;

type Experience = DiscoveredArray<CareerPayload["experiences"]>;

type PositionExpeirence = DiscoveredArray<Experience["experience"]>;

const SKETCHSOFT_ENGINEER_1: PositionExpeirence = {
  title: "스크럼 마스터 수행",
  contents: [
    { bold: true, value: "제품의 마일스톤 기반 백로그 구성 및 스프린트 진행" },
    [
      "가시적인 일정과 정리된 작업을 통해 명확한 목표를 제공하여 팀의 집중도를 향상",
      "작업 단위를 세분화하고 리소스를 관리하여 작업 간 충돌과 병목을 최소화"
    ],
    { bold: true, value: "다른 팀과의 소통 및 협업 진행" },
    [
      "문서화된 기록을 통해 다른 팀과의 소통을 개선하여 원활한 협업을 진행",
      "작업 결과와 배포 전 모습을 지속적으로 확인할 수 있게 하여 제품의 상태를 명확히 파악할 수 있도록 지원"
    ]
  ]
};

const SKETCHSOFT_ENGINEER_2: PositionExpeirence = {
  title: "3D Sketchbook Feather",
  techStack: [
    "react",
    "typescript",
    "zustand",
    "three.js",
    "styled-components"
  ],
  contents: [
    { bold: true, value: "어플리케이션 진입 시 마지막 상태 복원 과정 최적화" },
    [
      "상태를 판단하는 로직을 통합하고 prefetch를 통해 목표 페이지의 리소스를 사전 로딩",
      "화면 전환을 최소화하여 복원 과정에 대한 UX를 개선하고 복원 시간을 약 30% 단축"
    ],
    { bold: true, value: "드로잉 데이터 저장 방식 마이그레이션" },
    [
      "IndexedDB를 활용한 로컬 우선 저장 방식 적용으로 일시적인 오프라인일 때에도 작업 지원 및 데이터 유실을 방지",
      "데이터 업로드 시 델타 압축을 적용하여 벡터 데이터의 크기를 약 60% 감소",
      "비정상적 종료 시에도 작업을 보존하고 접속 시 복원할 수 있는 기능을 구현하여 서비스 안정성 향상"
    ],
    { bold: true, value: "그리기 툴의 속성 제어 UI의 사용성 개선" },
    [
      "좌측 제어 패널을 항상 노출하는 대신 내부 아이템을 수직으로 배치해 화면 가림을 최소화하고 즉각적인 속성 제어 기능을 제공",
      "직관적이고 세밀한 조작 경험을 위해 제스처 인터랙션과 시각적인 피드백, 정밀 조정 기능 추가"
    ],
    {
      bold: true,
      value: "프로젝트 아키텍처의 문제 해결을 위한 점진적 리팩토링"
    },
    [
      "높은 의존성 등의 구조적 문제 해결을 위해 프로젝트에 적합한 아키텍처를 지속적으로 검증",
      "AR 구현 시 신규 구조 적용을 시작으로 다양한 시도를 하며 점진적으로 리팩토링 진행",
      "React, Zustand 도입으로 컴포넌트 기반 구조와 전역 상태 관리를 적용"
    ],

    { bold: true, value: "프로젝트의 모듈 시스템 정리" },
    [
      "팀의 선호 문법을 유지하면서 프로젝트와 ESLint, Jest의 파싱 옵션, esbuild의 결과물을 CJS로 통일하여 일관된 설정을 적용"
    ],
    { bold: true, value: "서비스 공지사항 풀스택 개발" },
    [
      "이미지 삽입을 위해 에디터 라이브러리를 확장히고 백오피스 공지사항 CRUD 구현을 통해 담당자의 작업 효율을 개선",
      "이미지를 포함한 복수개의 공지사항 출력과 슬라이드 탐색을 통해 사용자에게 다양한 정보를 제공"
    ],
    { bold: true, value: "제스처 이벤트 모듈화 작업 진행" },
    [
      "포인터 이벤트를 활용해 조건에 따라 펜과 손가락의 제스처를 구분하고 커스텀 이벤트로 정의하여 제스처 이벤트 모듈 구현",
      "상세한 문서화 및 직관적인 구조로 개발자가 쉽게 이해하고 사용할 수 있도록 모듈화"
    ]
  ]
};

const SKETCHSOFT_EXPERIENCES: Experience = {
  position: "Engineer",
  start: new Date("2021-10"),
  end: new Date("2024-06"),
  experience: [SKETCHSOFT_ENGINEER_1, SKETCHSOFT_ENGINEER_2]
};

const SKETCHSOFT_PAYLOAD: CareerPayload = {
  name: "Sketchsoft",
  start: new Date("2021-10"),
  end: new Date("2024-06"),
  description:
    "‘어떤 상상도 바로 그릴 수 있게’를 추구하며 3차원 스케치북 서비스 ‘Feather’를 개발하는 스타트업입니다. 엔지니어로 합류하여 주로 서비스의 프론트엔드를 개발하였고, 상황에 따라 백엔드 개발도 진행하였습니다. 팀 내부에서 일정 관리에 대한 필요성이 생겨, 스크럼을 도입하고 스프린트를 진행하며 제품 개발에 대한 프로세스를 정립하였습니다.",
  experiences: [SKETCHSOFT_EXPERIENCES]
};

const BASETRADE_TEAM_LEAD: PositionExpeirence = {
  title: "프론트엔드 팀 리드 수행",
  contents: [
    { bold: true, value: "프론트엔드 개발 문화 형성 및 기술 스택 확장" },
    [
      "Typescript, AWS Amplify 등 신규 기술 도입",
      "프로젝트의 아키텍처 고민 등 기술적 지점에 대한 공유와 논의를 통해 프로젝트 이해도를 향상",
      "사내 npm registry 구성을 통한 공용 로직 재사용 환경 구성"
    ],
    { bold: true, value: "업무 프로세스 개선" },
    [
      "담당자가 개발 논의에 참여하도록 하여 협업 환경을 개선",
      "작업을 세분화하고 우선순위를 정리하여 작업의 흐름을 최적화"
    ],

    { bold: true, value: "브랜치 전략 구성 및 배포 관리" },

    [
      "Develop-Staging-Release 전략을 구성하고 적용",
      "AWS Amplify를 통해 프로젝트의 배포를 자동화"
    ]
  ]
};

const BASETRADE_DEVELOPER_1: PositionExpeirence = {
  title: "투자 조합 관리 플랫폼 RedFi",
  techStack: ["react", "typescript", "recoil", "styled-components"],
  contents: [
    { bold: true, value: "HTML 기반 PDF 전자 서명 시스템 프론트엔드 개발" },
    [
      "전자 서명에 대한 기능 요구 사항과 제약 사항을 분석하여 빠르게 구현 가능한 방식을 제안하고 진행",
      "계약서의 문법과 스타일을 HTML/CSS 로 정의하고, 화이트리스트 기반 필터링으로 XSS 방지",
      "커스텀 태그를 활용해 입력 처리를 설계하고 구현하여 입력 데이터 처리를 구조화"
    ],
    {
      bold: true,
      value: "SPA 환경에서의 신규 버전 배포 시 사용자 안내 방법 개발"
    },
    [
      "번들 엔트리포인트의 해시값 비교를 통해 신규 버전 배포 확인 로직을 구현",
      "사용자 행동 기반의 버전 체크 로직 적용(페이지 체류 2시간, API 호출과 주소 변경 3분 기준)"
    ],
    { bold: true, value: "로딩 표현 세분화를 통한 사용자 경험 개선" },
    [
      "스켈레톤 UI와 기본 여백으로 컨텐츠의 공간을 미리 확보하여 레이아웃 시프트를 최소화",
      "컨텐츠별 다양한 로딩 UI를 적용해 사용자에게 예측 가능한 UI를 제공하고 로딩에 대한 경험을 개선"
    ]
  ]
};

const BASETRADE_DEVELOPER_2: PositionExpeirence = {
  title: "암호화폐 거래소",
  techStack: ["react", "redux", "redux-saga", "scss", "styled-components"],
  contents: [
    { bold: true, value: "레거시 코드 리팩토링 및 성능 최적화" },
    [
      "레거시 라이프사이클 메서드 componentWillMount, componentWillReceiveProps를 최신 getDerivedStateFromProps 메서드로 교체",
      "Redux 상태의 구조와 구독하는 방식을 정리하여 불필요한 랜더링 최소화",
      "중복 코드를 정리하고 로직의 수월한 재사용을 위해 관리자 페이지의 코드를 Hook 기반으로 리팩토링"
    ],
    { bold: true, value: "첫 초기화 과정에서 발생하는 병목 현상 제거" },
    [
      "데이터 초기화 과정에서 데이터 간 의존성으로 인한 병목 현상을 식별하고 최적화",
      "의존 관계를 분석하여 불필요한 순차 처리 구간을 redux-saga를 활용하여 비동기 처리로 구성",
      "비동기 처리 및 순서 재구성을 통해 모든 데이터를 불러오는 시간을 약 30% 단축"
    ]
  ]
};

const BASETRADE_EXPERIENCES_1: Experience = {
  position: "Frontend team lead",
  start: new Date("2020-08"),
  end: new Date("2021-10"),
  experience: [BASETRADE_TEAM_LEAD]
};

const BASETRADE_EXPERIENCES_2: Experience = {
  position: "Frontend developer",
  start: new Date("2019-10"),
  end: new Date("2021-10"),
  experience: [BASETRADE_DEVELOPER_1, BASETRADE_DEVELOPER_2]
};

const BASETRADE_PAYLOAD: CareerPayload = {
  name: "베이스트레이드",
  start: new Date("2019-10"),
  end: new Date("2021-10"),
  description:
    "블록체인 관련 기술을 보유한 스타트업으로, 프론트엔드 개발자로 합류하였습니다. 초기에는 사내에서 개발 중이던 거래소의 신규 기능 개발과 유지보수를 진행하였습니다. 이후 회사의 방향성에 의해 투자 조합 관리 플랫폼을 개발하였습니다. 합류하고 얼마 지나지 않아 프론트엔드 개발자가 혼자가 되었으나, 팀원이 생기며 작은 규모의 팀 리드를 맡게 되었습니다.",
  experiences: [BASETRADE_EXPERIENCES_1, BASETRADE_EXPERIENCES_2]
};

const payload: CareerPayload[] = [SKETCHSOFT_PAYLOAD, BASETRADE_PAYLOAD];

export default payload;
