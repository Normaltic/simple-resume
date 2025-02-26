import Section from "@/components/common/Section";
import Header5 from "../common/Header5";
import UnorderedList from "../common/UnorderedList";

function Etc() {
  return (
    <Section title="Etc.">
      <Header5>자격증</Header5>
      <UnorderedList
        className="mb-6"
        items={[
          "정보처리기사 (2018.05 취득)",
          "TOPCIT 475점 (수준3, 2018.05 응시)"
        ]}
      />
      <Header5>병역</Header5>
      <UnorderedList
        className="mb-6"
        items={["육군 병장 만기 전역 (2014.08 ~ 2016.05)"]}
      />
      <Header5>수상</Header5>
      <UnorderedList
        items={[
          "부산정보산업진흥원 주최, 제 1회 한국 VR 해커톤 최우수상 수상 (2017.01)",
          "학부 주최, 교내 전시회 3회, 해커톤 3회 수상 (2016.10 ~ 2018.10)"
        ]}
      />
    </Section>
  );
}

export default Etc;
