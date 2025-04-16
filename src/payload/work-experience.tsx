import type { CareerPayload } from "@/components/work-experience/WorkExperience";

type DiscoveredArray<T> = T extends Array<infer R> ? R : never;

type Experience = DiscoveredArray<CareerPayload["experiences"]>;

type PositionExpeirence = DiscoveredArray<Experience["experience"]>;

const SKETCHSOFT_ENGINEER_1: PositionExpeirence = {
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
      "복원 과정 중 잦은 화면 전환을 UX 문제로 인식하고 개선을 제안",
      "상태 판단 로직을 통합하고 prefetch를 통해 목표 페이지의 리소스를 사전 로딩",
      "화면 전환을 최소화해 UX를 개선하고 복원 시간을 약 30% 단축"
    ],
    { bold: true, value: "그림 데이터 저장 방식 마이그레이션" },
    [
      "서버 부하 및 데이터 유실 문제 해결을 위해 IndexedDB 기반의 로컬 우선 저장 방식으로 마이그레이션",
      "업로드 시 델타 압축을 적용하여 벡터 데이터의 크기를 약 60% 감소",
      "비정상적 종료 시에도 작업을 보존하고 접속 시 복원하는 기능을 구현해 서비스 안정성 향상"
    ],
    { bold: true, value: "그리기 툴의 속성 제어 UI의 사용성 개선" },
    [
      "반복적인 조작과 정밀 제어의 어려움으로 인한 사용성 문제를 개선",
      "패널을 상시 노출하고 수직 배치를 적용해 화면 가림을 줄이고 즉각적인 속성 제어를 지원",
      "제스처 인터랙션, 시각적 피드백, 정밀 조정 기능을 도입해 조작 경험을 개선"
    ],
    {
      bold: true,
      value: "프로젝트 아키텍처의 문제 해결을 위한 점진적 리팩토링"
    },
    [
      "높은 의존성 등의 구조적 문제 해결을 위해 적합한 아키텍처를 지속적으로 검증",
      "AR 구현 시 신규 구조 적용을 시작으로 다양한 시도를 하며 점진적으로 리팩토링 진행",
      "React, Zustand 도입으로 컴포넌트 기반 구조와 전역 상태 관리 체계를 적용"
    ],

    { bold: true, value: "프로젝트의 모듈 시스템 정리" },
    [
      "외부 라이브러리 도입 시 발생한 모듈 오류를 해결하고 개발부터 빌드까지의 일관성을 확보",
      "팀의 선호 문법을 유지하면서 프로젝트와 ESLint, Jest, esbuild 결과물을 CJS로 통일"
    ],
    { bold: true, value: "서비스 공지사항 풀스택 개발" },
    [
      "리소스가 부족한 상황에서 팀의 목표 달성을 위해 풀스택 개발을 주도적으로 진행",
      "이미지 삽입을 위해 에디터 라이브러리를 확장하고 백오피스 공지사항 CRUD 구현을 통해 담당자의 작업 효율을 개선",
      "이미지를 포함한 복수개의 공지사항 출력과 슬라이드 탐색을 통해 사용자에게 다양한 정보를 제공"
    ],
    { bold: true, value: "제스처 이벤트 모듈화 작업 진행" },
    [
      "기존 로직의 유지보수 문제를 해결하기 위해 포인터 이벤트 기반의 제스처 모듈을 구현",
      "제스처를 커스텀 이벤트로 추상화하고 클래스 기반 구조로 설계",
      "직관적인 구조와 상세한 문서화를 통해 개발자가 쉽게 이해하고 활용할 수 있도록 정리"
    ]
  ]
};

const SKETCHSOFT_ENGINEER_2: PositionExpeirence = {
  title: "스크럼 프로세스 도입 및 진행",
  contents: [
    { bold: true, value: "스프린트 구성 및 진행" },
    [
      "제품의 마일스톤을 기반으로 백로그를 구성하고 스프린트를 주기적으로 운영",
      "가시적인 일정과 정리된 작업을 통해 명확한 목표를 제공해 팀의 집중도를 향상",
      "작업 단위를 세분화하고 리소스를 조율하여 작업 간 충돌과 병목을 최소화"
    ],
    { bold: true, value: "다른 팀과의 소통 및 협업 개선" },
    [
      "문서화된 기록을 통해 다른 팀과 협업을 진행하며 소통 방식을 정리",
      "작업 결과와 배포 전 모습을 지속적으로 공유하여 제품 상태를 명확히 파악할 수 있도록 지원"
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
    "‘어떤 상상도 바로 그릴 수 있게’를 추구하며 3차원 스케치북 서비스 ‘Feather’를 개발하는 스타트업으로, 엔지니어로 합류해 서비스의 프론트엔드를 담당했습니다. 신규 기능을 구현하고 서비스의 사용자 경험을 개선해 나갔으며, 아키텍처 개선, 모듈화 등 DX를 고려한 작업을 진행했습니다. 또한, 팀의 목표를 이루기 위해 백엔드 개발을 진행하기도 했습니다. 팀의 협업 방식에 대한 개선이 필요하게 되어, 스크럼을 도입하고 스프린트를 진행하며 제품 개발에 대한 프로세스를 정리하였습니다.",
  experiences: [SKETCHSOFT_EXPERIENCES]
};

const BASETRADE_DEVELOPER_1: PositionExpeirence = {
  title: "투자 조합 관리 플랫폼 RedFi",
  techStack: ["react", "typescript", "recoil", "styled-components"],
  contents: [
    { bold: true, value: "HTML 기반 PDF 전자 서명 시스템 프론트엔드 개발" },
    [
      "기능의 요구 사항과 제약을 분석하여 빠르게 구현 가능한 방향을 제안하고 실행",
      "계약서의 문법과 스타일을 HTML/CSS 로 정의하고, 화이트리스트 기반 필터링으로 XSS 방지",
      "커스텀 태그를 활용해 입력 구조를 설계하고 데이터 처리 흐름을 구성"
    ],
    {
      bold: true,
      value: "SPA 환경에서의 신규 버전 배포 시 사용자 안내 방법 개발"
    },
    [
      "SPA 환경에서의 사용자 버전 불일치 문제 해결을 위해 신규 배포 감지 로직을 구현",
      "번들 엔트리포인트의 해시값 비교를 통해 신규 버전 배포 확인 로직을 작성",
      "사용자 행동 기반의 버전 체크 로직 적용(페이지 체류 2시간, API 호출과 주소 변경 3분 기준)"
    ],
    { bold: true, value: "로딩 표현 세분화를 통한 사용자 경험 개선" },
    [
      "전체 화면 로딩의 잦은 사용으로 인한 불편을 개선하기 위해 로딩 표현을 세분화",
      "스켈레톤 UI와 기본 여백으로 컨텐츠의 공간을 미리 확보하여 레이아웃 시프트를 최소화",
      "컨텐츠별 다양한 로딩 표현을 적용해 예측 가능한 UI를 제공하고 로딩 경험을 개선"
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
      "중복 코드를 정리하고 로직의 재사용성 증가를 위해 위해 관리자 페이지를 Hook 기반으로 리팩토링"
    ],
    { bold: true, value: "첫 초기화 과정에서 발생하는 병목 현상 제거" },
    [
      "데이터 초기화 과정에서 데이터 간 의존성으로 인한 병목 현상을 식별하고 최적화",
      "의존 관계를 분석하여 불필요한 순차 처리 구간을 redux-saga를 활용하여 비동기 처리로 구성",
      "비동기 처리 및 순서 재구성을 통해 모든 데이터를 초기화하는 시간을 약 30% 단축"
    ]
  ]
};

const BASETRADE_TEAM_LEAD: PositionExpeirence = {
  title: "프론트엔드 팀 리드 수행",
  contents: [
    { bold: true, value: "프론트엔드 개발 문화 형성" },
    [
      "Typescript, AWS Amplify 등 신규 기술을 도입하고 프로젝트에 적용",
      "아키텍처 설계 등의 기술적인 지점에 대해 공유하고 논의하며 함께 성장하는 문화를 조성",
      "사내 npm registry를 구성해 공용 로직 재사용이 가능한 환경을 구성"
    ],
    { bold: true, value: "업무 프로세스 개선" },
    [
      "담당자가 개발 논의에 참여하도록 유도하여 이해를 향상시키고 협업 환경을 개선",
      "작업을 세분화하고 우선순위를 정리하여 작업의 흐름을 정리"
    ],

    { bold: true, value: "브랜치 전략 구성 및 자동 배포 설계" },

    [
      "Develop-Staging-Release 브랜치 전략을 구성하고 적용",
      "AWS Amplify를 활용해 브랜치 기반 자동 배포를 설정해 배포 과정을 자동화"
    ]
  ]
};

const BASETRADE_EXPERIENCES_1: Experience = {
  position: "Frontend developer",
  start: new Date("2019-10"),
  end: new Date("2021-10"),
  experience: [BASETRADE_DEVELOPER_1, BASETRADE_DEVELOPER_2]
};

const BASETRADE_EXPERIENCES_2: Experience = {
  position: "Frontend team lead",
  start: new Date("2020-08"),
  end: new Date("2021-10"),
  experience: [BASETRADE_TEAM_LEAD]
};

const BASETRADE_PAYLOAD: CareerPayload = {
  name: "베이스트레이드",
  start: new Date("2019-10"),
  end: new Date("2021-10"),
  description:
    "블록체인 관련 기술을 보유한 스타트업으로, 프론트엔드 개발자로 합류했습니다. 초기에는 사내에서 개발 중이던 거래소의 기능 개발과 함께, 기술 부채를 해결하고 성능을 개선하는 작업을 진행했습니다. 이후 회사의 방향성에 따라 투자 조합 관리 플랫폼을 처음부터 개발하여 서비스를 구축했습니다. 합류하고 얼마 지나지 않아 프론트엔드 개발을 혼자 진행하게 되었으나 팀원이 생기기 시작했고, 작은 규모의 팀 리드를 맡게 되어 개발 문화를 조성해 나갔습니다.",
  experiences: [BASETRADE_EXPERIENCES_1, BASETRADE_EXPERIENCES_2]
};

const payload: CareerPayload[] = [SKETCHSOFT_PAYLOAD, BASETRADE_PAYLOAD];

export default payload;
