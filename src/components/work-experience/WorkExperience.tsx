import Section from "@/components/common/Section";
import Header4 from "@/components/common/Header4";
import Header5 from "@/components/common/Header5";
import Paragraph from "@/components/common/Paragraph";
import Row from "@/components/common/Row";
import UnorderedList, {
  UnorderedListProps
} from "@/components/common/UnorderedList";
import Position, { PositionProps } from "./Position";

interface PositionExpeirence extends Omit<PositionProps, "className"> {
  experience: Array<{
    title: string;
    contents: UnorderedListProps["items"];
  }>;
}

export interface CareerPayload {
  name: string;
  description?: string;
  experiences: PositionExpeirence[];
}

export interface WorkExperienceProps {
  careers: CareerPayload[];
}

function WorkExperience({ careers }: WorkExperienceProps) {
  return (
    <Section title="Work Experience">
      {careers.map(({ name, description, experiences }) => (
        <article className="[&:nth-last-child(n+2)]:mb-12" key={name}>
          <Header4 className="mb-2">{name}</Header4>
          {description && <Paragraph className="mb-8">{description}</Paragraph>}
          {experiences.map(({ position, start, end, experience }) => (
            <Row
              className={"[&:nth-last-child(n+2)]:mb-6"}
              key={`${position}-${start.toString()}`}
              first={
                <Position
                  className="text-right"
                  position={position}
                  start={start}
                  end={end}
                />
              }
              last={
                <>
                  {experience.map(({ title, contents }) => (
                    <>
                      <Header5>{title}</Header5>
                      <UnorderedList items={contents} />
                    </>
                  ))}
                </>
              }
            />
          ))}
        </article>
      ))}
    </Section>
  );
}

export default WorkExperience;
