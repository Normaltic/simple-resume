import Section from "@/components/common/Section";
import Header4 from "../common/Header4";
import UnorderedList, { UnorderedListProps } from "../common/UnorderedList";

export interface SkillPayload {
  category: string;
  list: UnorderedListProps["items"];
}

export interface SkillProps {
  list: SkillPayload[];
}

function Skill({ list }: SkillProps) {
  return (
    <Section title="Skill">
      {list.map(({ category, list }) => (
        <>
          <Header4 className="mb-2">{category}</Header4>
          <UnorderedList items={list} />
        </>
      ))}
    </Section>
  );
}

export default Skill;
