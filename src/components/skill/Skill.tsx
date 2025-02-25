import Section from "@/components/common/Section";
import Header4 from "../common/Header4";
import UnorderedList from "../common/UnorderedList";

function Skill() {
  return (
    <Section title="Skill">
      <Header4 className="mb-2">Frontend</Header4>
      <UnorderedList
        className="mb-6"
        items={[
          "React, Redux, Zustand, (Next.js)",
          "Styled-components, SCSS, (Tailwind.css)"
        ]}
      />
      <Header4 className="mb-2">Backend</Header4>
      <UnorderedList className="mb-6" items={["Express.js, (MongoDB)"]} />
      <Header4 className="mb-2">Build & Deploy</Header4>
      <UnorderedList items={["Webpack, Rollup, AWS Amplify, EC2, (esbuild)"]} />
    </Section>
  );
}

export default Skill;
