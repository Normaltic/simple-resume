import Section from "@/components/common/Section";
import Header4 from "@/components/common/Header4";
import Header5 from "@/components/common/Header5";
import Paragraph from "@/components/common/Paragraph";
import Row from "@/components/common/Row";
import UnorderedList, {
  UnorderedListProps
} from "@/components/common/UnorderedList";
import Position from "./Position";

const LIST1: UnorderedListProps["items"] = [
  { bold: true, value: "제품의 마일스톤 기반 백로그 구성 및 스프린트 진행" },
  [
    "가시적인 일정과 정리된 작업을 통해 명확환 목표를 제공하여 팀의 집중도를 향상",
    "작업 단위를 세분화하고 리소스를 관리하여 작업 간 충돌과 병목을 최소화"
  ],
  { bold: true, value: "다른 팀과의 소통 및 협업 진행" },
  [
    "문서화된 기록을 통해 다른 팀과의 소통을 개선하여 원활한 협업을 진행",
    "작업 결과와 배포 전 모습을 지속적으로 확인할 수 있게 하여 제품의 상태를 명확히 파악할 수 있도록 지원"
  ]
];

const LIST2: UnorderedListProps["items"] = [
  { bold: true, value: "어플리케이션 진입 시 마지막 상태 복원 과정 최적화" },
  [
    "상태를 판단하는 로직을 통합하고 prefetch를 통해 다음 페이지의 리소스를 사전 로딩",
    "화면 전환을 최소화하여 복원 과정에 대한 UX를 개선하고 복원 시간을 약 30% 단축"
  ],
  { bold: true, value: "드로잉 데이터 저장 방식 마이그레이션" },
  [
    "IndexedDB를 활용한 로컬 우선 저장 방식으로 일시적인 오프라인일 때에도 작업 지원 및 데이터 유실을 방지",
    "데이터 업로드 시 델타 압축을 적용하여 백터 데이터의 크기를 약 60% 감소",
    "비정상적 종료 시에도 작업을 보존하고 접속 시 복원할 수 있는 기능을 구현하여 서비스 안정성 향상"
  ],
  { bold: true, value: "그리기 툴의 속성 제어 UI의 사용성 개선" },
  [
    "좌측 제어 패널을 항상 노출하는 대신 내부 아이템을 수직으로 배치해 화면 가림을 최소화하고 즉각적인 속성 제어 기능을 제공",
    "직관적이고 세밀한 조작 경험을 위해 제스처 인터랙션과 시각적인 피드백, 정밀 조정 기능 추가"
  ],
  { bold: true, value: "프로젝트 아키텍처의 문제 해결을 위한 점진적 리팩토링" },
  [
    "높은 결합도 등의 구조적 문제 해결을 위해 프로젝트에 적합한 아키텍처를 지속적으로 검증",
    "AR 구현 시 신규 구조 적용을 시작으로 다양한 시도를 하며 점진적으로 리팩토링",
    "React, Zustand 도입으로 컴포넌트 기반 구조와 상태 관리를 적용"
  ],

  { bold: true, value: "프로젝트의 모듈 시스템 정리" },
  [
    "팀의 선호 문법을 유지하면서 프로젝트와 ESLint, Jest의 파싱 옵션, esbuild의 결과물을 CJS로 통일하여 일관된 설정을 적용"
  ],
  { bold: true, value: "서비스 공지사항 풀스택 개발" },
  [
    "이미지 삽입을 위한 에디터 라이브러리 확장과 백오피스 공지사항 CRUD 구현으로 담당자의 작업 효율을 개선",
    "이미지를 포함한 복수개의 공지사항 출력과 슬라이드 탐색을 통해 사용자에게 다양한 정보를 제공"
  ],
  { bold: true, value: "제스쳐 이벤트 모듈화 작업 진행" },
  [
    "포인터 이벤트를 활용해 조건에 따라 펜과 손가락의 제스쳐를 구분하고 커스텀 이벤트로 정의하여 제스쳐 이벤트 시스템 구현",
    "상세한 문서화와 직관적인 구조로 개발자가 쉽게 이해하고 사용할 수 있도록 모듈화"
  ]
];

function WorkExperience() {
  return (
    <Section title="Work Experience">
      <Header4>Sketchsoft</Header4>
      <Paragraph className="mb-12">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        voluptatibus inventore asperiores sint veritatis, dicta itaque sapiente,
        rerum ducimus aperiam eligendi repellat sit. Repellat id maxime totam,
        ratione veniam distinctio.
      </Paragraph>
      <Row
        className="mb-12"
        first={
          <Position
            className="text-right"
            position="Engineer"
            start={new Date("2021-10")}
            end={new Date("2024-06")}
          />
        }
        last={
          <>
            <Header5>스크럼 마스터 수행</Header5>
            <UnorderedList items={LIST1} />

            <Header5>3D Sketchbook Feather</Header5>
            <UnorderedList items={LIST2} />
          </>
        }
      />

      <Header4>Sketchsoft</Header4>
      <Paragraph className="mb-12">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        voluptatibus inventore asperiores sint veritatis, dicta itaque sapiente,
        rerum ducimus aperiam eligendi repellat sit. Repellat id maxime totam,
        ratione veniam distinctio.
      </Paragraph>
      <Row
        className="mb-6"
        first={
          <Position
            className="text-right"
            position="Engineer"
            start={new Date("2021-10")}
            end={new Date("2024-06")}
          />
        }
        last={
          <>
            <Header5>스크럼 마스터 수행</Header5>
            <UnorderedList items={LIST1} />
          </>
        }
      />

      <Row
        first={
          <Position
            className="text-right"
            position="Engineer"
            start={new Date("2021-10")}
            end={new Date("2024-06")}
          />
        }
        last={
          <>
            <Header5>3D Sketchbook Feather</Header5>
            <UnorderedList items={LIST2} />
          </>
        }
      />
    </Section>
  );
}

export default WorkExperience;
