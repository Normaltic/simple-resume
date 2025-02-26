import Section from "@/components/common/Section";
import Header3 from "@/components/common/Header3";
import Header4 from "@/components/common/Header4";
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
          <Header3 className="mb-4">{name}</Header3>
          {description && <Paragraph className="mb-8">{description}</Paragraph>}
          {experiences.map(({ position, start, end, experience }) => (
            <Row
              className={"[&:nth-last-child(n+2)]:mb-8"}
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
                      <Header4 className="[&:nth-child(n+2)]:mt-8">
                        {title}
                      </Header4>
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
