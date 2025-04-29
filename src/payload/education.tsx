import type { EducationPayload } from "@/components/education/Education";
import Anchor from "@/components/common/Anchor";

const payload: EducationPayload[] = [
  {
    name: "동서대학교",
    department: "소프트웨어공학과",
    start: new Date("2012.03"),
    end: new Date("2019.02"),
    degree: "학사(4.0 / 4.5)",
    activities: [
      {
        title: "UbSE 학부 연구회 활동(17.01 ~ 19.02)",
        descriptions: [
          "학부 지도교수 산하 학부생 연구회 UbSE 소속으로 활동",
          "연구회 내부 스터디, 산학 프로젝트 진행"
        ]
      },

      {
        title: "학부 튜터 및 전공 멘토 활동(17.03 ~ 18.06)",
        descriptions: [
          "학부 저학년 대상으로 튜터링 팀을 구성하여 튜터로 활동",
          "저학년 강의 보조 및 진로 고민 상담 등 멘토 활동"
        ]
      },
      {
        title: "국내 학술지 투고",
        descriptions: [
          <>
            <Anchor
              target="_blank"
              href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002365780"
            >
              장비독립성 향상을 위한 웹 기반 판서 소프트웨어 개발
            </Anchor>
          </>,
          "주 저자 / 한국차세대컴퓨팅학회 논문지. Vol. 14 No 3. [ 18 ]"
        ]
      }
    ]
  }
];

export default payload;
