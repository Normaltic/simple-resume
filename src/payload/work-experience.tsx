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
    {
      bold: true,
      value: "앱 진입 시 상태 복원 과정에서의 잦은 화면 전환 최적화"
    },
    [
      "복원 과정에서 발생하는 잦은 화면 전환을 UX 관점의 문제로 정의하고 팀에 공유",
      "진입 경험에 대한 개선 방향을 제안하고, 디자인팀과 함께 논의하며 스플래시 애니메이션 정의",
      "상태 판단 로직을 통합하고 prefetch를 통한 리소스 사전 로딩을 적용해 진입 흐름을 최적화",
      "애니메이션 도입과 화면 전환 최소화를 통해 진입 경험을 개선하고 대기 시간을 약 30% 단축"
    ],
    {
      bold: true,
      value: "서비스 안정화 및 데이터 유실 방지를 위한 신규 저장 방식 구축"
    },
    [
      "팀에서 실시간 저장 방식으로 인한 서버 부하 및 데이터 유실 이슈의 대응 방안을 구축",
      "IndexedDB와 S3 기반의 로컬 우선 저장 방식 및 파일 관리 구조를 설계하고 마이그레이션",
      "파일 버전 충돌 상황들을 도출하고 다른 팀과 공유하여 상황별 예외 처리 정책을 결정",
      "실시간 통신과의 트레이드오프를 통해 서비스의 안정성 향상 및 사용자의 작업 유실을 방지"
    ],
    {
      bold: true,
      value: "그리기 툴의 속성 제어 패널에 대한 비효율적인 인터페이스 개선"
    },
    [
      "반복 조작의 피곤함과 정밀 제어의 어려움이 있던 패널의 사용성을 디자이너와 함께 리뉴얼 진행",
      "디자인 초안을 바탕으로 기능 요소를 조율하고 구체화하여 신규 제어 인터페이스 구현",
      "화면 가림과 기본 조작 단계를 줄이고, 정밀 제어 모드를 도입해 기능 확장이 용이한 UI를 설계",
      "시각적 피드백과 세밀한 조정 기능을 제공해 직관적이고 효율적인 조작 흐름으로 UX를 향상"
    ],
    {
      bold: true,
      value: "기능간 의존성이 높은 아키텍처를 개선하기 위한 점진적 리팩토링"
    },
    [
      "의존성 증가로 인해 디버깅과 단위 테스트가 어려워지는 상황을 팀 내부에서 인식",
      "문제 해결을 위한 새로운 아키텍처를 설계해 제안하고, 빠른 도입을 시작으로 여러 방향을 탐색",
      "각 시도의 목표, 결과, 개선 방향 등을 지속적으로 공유하고 피드백을 반영하며 점진적으로 개선",
      "컴포넌트 기반 구조 및 전역 상태 관리를 도입해, 관심사를 분리하고 유지보수성 향상"
    ],
    {
      bold: true,
      value: "강결합된 제스처 로직을 구조화하여 범용적인 모듈로 구현"
    },
    [
      "기능 확장 논의 도중 기존 로직의 재사용과 유지보수의 어려움을 파악하고 리팩토링을 주도",
      "판단 조건을 명확히 분리하고, 클래스 및 커스텀 이벤트 기반으로 이벤트 구조 설계 및 구현",
      "팀이 쉽게 이해하고 사용할 수 있도록 범용 모듈로 구성하고 코드와 기능 명세를 문서화해 공유"
    ]
  ]
};

const SKETCHSOFT_ENGINEER_2: PositionExpeirence = {
  title: "스크럼 프로세스 도입 및 진행",
  contents: [
    { bold: true, value: "업무 방식 및 일정 정의를 위한 스프린트 진행" },
    [
      "불명확한 일정과 업무 방식을 개선하기 위해 스크럼 기반 스프린트를 도입",
      "제품의 마일스톤 기반 백로그 구성 및 스프린트 운영으로 작업 범위와 목표를 명확히 제시",
      "작업 단위를 세분화하고 리소스를 조율해 작업 간 충돌과 병목 현상을 완화",
      "스프린트 단위의 일정과 목표 설정을 통해 반복 가능한 협업 프로세스를 정의"
    ],
    { bold: true, value: "다른 팀과의 커뮤니케이션 및 협업 방식 개선" },
    [
      "팀 간 소통이 구체화되지 않은 상황에 대해 소통 수단을 제공하여 협업 흐름을 정비",
      "문서화된 기록과 진행 상황을 주기적으로 공유해 다른 팀과 협업하며 소통 방식을 정리",
      "주기적인 스테이징을 통해 작업 결과 및 제품의 상태를 직접 확인할 수 있는 수단을 제공"
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
    {
      bold: true,
      value: "HTML 기반 PDF 전자 서명 시스템 설계 및 프론트엔드 개발"
    },
    [
      "시간과 요구 사항의 제약을 이해하고 상황을 분석해 HTML 기반 방식을 제안하고 협의",
      "파이썬 코드를 작성하며 백엔드 개발자와 실험하여 계약서 문법을 HTML/CSS 기반으로 정의",
      "커스텀 태그 기반으로 입력 구조를 설계하고 화이트리스트 필터링을 통해 XSS 방지",
      "기능 흐름과 범위를 기획과 조율하며 전자 서명 기능을 구현해 목표를 달성"
    ],
    {
      bold: true,
      value: "SPA 환경에서의 버전 불일치 문제를 위한 사용자 안내 로직 구현"
    },
    [
      "배포 시 기존 접속자에게 신규 버전을 제공하지 못하는 문제에 대한 해결 방안 설계",
      "번들 엔트리포인트 해시값을 비교해 배포 여부를 판단하고, 사용자 행동 기반의 체크 로직 구현",
      "신규 버전 확인 시 사용자에게 안내해 버전 불일치 문제를 해결하고, 관련 에러 노출을 최소화"
    ],
    { bold: true, value: "컨텐츠 기반 로딩 표현을 통한 서비스의 로딩 UX 개선" },
    [
      "전체 화면 로딩의 잦은 사용과 상세 표현의 부재로 인한 화면 가림과 레이아웃 시프트 문제 정의",
      "데이터 로딩 로직을 세분화하고 기본 여백 확보 및 스켈레톤 UI, 스피너 등 컨텐츠별 로딩 적용",
      "화면 가림과 레이아웃 시프트를 최소화해 컨텐츠의 예측 가능성을 높이고 로딩 UX를 개선"
    ]
  ]
};

const BASETRADE_DEVELOPER_2: PositionExpeirence = {
  title: "암호화폐 거래소",
  techStack: ["react", "redux", "redux-saga", "scss", "styled-components"],
  contents: [
    {
      bold: true,
      value: "프로젝트 전반의 레거시, 중복 코드 제거 및 전역 상태 개선"
    },
    [
      "프로젝트 내 중복되고 비효율적인 코드 구조를 식별하고, 이를 정리하며 기본 코딩 컨벤션 정의",
      "레거시 라이프사이클 메서드(componentWillMount, componentWillReceiveProps)를 최신 메서드(getDerivedStateFromProps)로 교체",
      "Redux 상태 구조를 정리하고 구독 함수를 상세히 작성하여 불필요한 랜더링을 최소화",
      "관리자 페이지를 Hook 기반으로 전환하여 로직의 재사용성과 유지보수성을 향상"
    ],
    { bold: true, value: "첫 초기화 과정에서 발생하는 병목 현상 제거" },
    [
      "데이터 초기화 과정에서 데이터 간 의존성에 의한 순차적 요청으로 발생하는 병목 구간을 파악",
      "의존 관계를 분석해 실제 순차 처리가 필요한 흐름과 병렬 처리가 가능한 흐름을 구분",
      "요청 흐름을 재구성하고, redux-saga를 통해 병렬 처리로 전환해 초기화 속도를 약 30% 개선"
    ]
  ]
};

const BASETRADE_TEAM_LEAD: PositionExpeirence = {
  title: "프론트엔드 팀 리드 수행",
  contents: [
    { bold: true, value: "프론트엔드 개발 문화 형성" },
    [
      "팀이 구성되기 시작하며 정의되지 않았던 팀의 문화를 구성하고 형성",
      "코드 유지보수성과 일관성을 위해 Typescript 도입 및 AWS Amplify의 프리뷰를 활용한 코드 리뷰 문화 조성",
      "아키텍처 설계 등의 기술 결정 과정을 공유하며 팀이 함께 성장할 수 있는 분위기를 조성",
      "공용 로직 재사용을 위해 사내 npm registry를 구성하여 프로젝트 간 모듈 공유 환경 구축"
    ],
    { bold: true, value: "업무 프로세스 정비 및 개선" },
    [
      "팀으로 협업하기 시작하며 업무 흐름을 설계하고 프로세스를 정비",
      "담당자가 개발 논의에 참여하도록 유도해 작업에 대해 잘 이해할 수 있는 환경으로 개선",
      "팀의 작업을 세분화하고 우선순위를 구분해 일정과 개발 흐름을 정리"
    ],

    { bold: true, value: "브랜치 전략 구성 및 자동 배포 설계" },

    [
      "프로젝트 프론트엔드의 커밋 관리에 대한 기준을 정의하고 자동 배포 환경을 구축",
      "Develop-Staging-Release 전략에 맞춰 브랜치 관리 규칙을 정의하고 적용",
      "AWS Amplify의 브랜치 기반 자동 배포 기능을 활용해 배포 과정을 자동화"
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
