import Section from "@/components/common/Section";
import Header4 from "@/components/common/Header4";
import UnorderedList from "@/components/common/UnorderedList";
import Anchor from "@/components/common/Anchor";

function OtherExperience() {
  return (
    <Section title="Other Experience">
      <Header4>
        <Anchor
          target="_blank"
          href="https://www.npmjs.com/package/react-daum-postcode"
        >
          react-daum-postcode
        </Anchor>
      </Header4>
      <UnorderedList
        items={[
          "주간 다운로드 수 4만+, 깃허브 스타 170+",
          "다음 우편번호 서비스를 React 환경에서 사용하기 쉽도록 만든 오픈소스 라이브러리",
          "이슈 대응, 유지 보수 등을 하며 라이브러리의 메인테이너로 활동 중"
        ]}
      />
    </Section>
  );
}

export default OtherExperience;
