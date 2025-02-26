import Section from "@/components/common/Section";
import Row from "@/components/common/Row";
import Header5 from "@/components/common/Header5";
import UnorderedList from "@/components/common/UnorderedList";
import Anchor from "@/components/common/Anchor";

function Education() {
  return (
    <Section title="Education">
      <Row
        first={
          <>
            <div>동서대학교</div>
            <div>소프트웨어공학과</div>
            <div>2012.03 ~ 2019.02</div>
            <div>학사(4.0 / 4.5)</div>
          </>
        }
        last={
          <>
            <Header5>UbSE 학부 연구회 활동(2017.01 ~ 2019.02)</Header5>
            <UnorderedList
              items={[
                "학부 지도교수 산하 학부생 연구회 UbSE 소속으로 활동",
                "연구회 내부 스터디, 산학 프로젝트 진행"
              ]}
            />
            <Header5>학부 튜터 및 전공 멘토 활동(2017.01 ~ 2019.02)</Header5>
            <UnorderedList
              items={[
                "학부 저학년 대상으로 튜터링 팀을 구성하여 튜터로 활동",
                "저학년 강의 보조 및 진로 고민 상담 등 멘토 활동"
              ]}
            />
            <Header5>교내 작품 전시회 출품 및 교내외 개발 대회 참가</Header5>
            <Header5>국내 학술지 투고</Header5>
            <UnorderedList
              items={[
                <>
                  <Anchor
                    target="_blank"
                    href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002365780"
                  >
                    장비독립성 향상을 위한 웹 기반 판서 소프트웨어 개발
                  </Anchor>
                </>,
                "주 저자 / 한국차세대컴퓨팅학회 논문지. Vol. 14 No 3. [ 2018 ]"
              ]}
            />
          </>
        }
      />
    </Section>
  );
}

export default Education;
