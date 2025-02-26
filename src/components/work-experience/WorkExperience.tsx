import Section from "@/components/common/Section";
import Header3 from "@/components/common/Header3";
import Header4 from "@/components/common/Header4";
import Paragraph from "@/components/common/Paragraph";
import Row from "@/components/common/Row";
import UnorderedList, {
  UnorderedListProps
} from "@/components/common/UnorderedList";
import { displayPeriod } from "@/utils/formatDate";
import TechBadge from "./TechBadge";

interface PositionExpeirence {
  position: string;
  start: Date;
  end?: Date;
  experience: Array<{
    title: string;
    techStack?: string[];
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
              className={
                "[&:nth-last-child(n+2)]:mb-8 max-sm:flex-col max-sm:gap-4 max-sm:first:*:w-[initial]"
              }
              key={`${position}-${start.toString()}`}
              first={
                <div className="text-gray-500 text-xl italic max-sm:flex max-sm:flex-col-reverse">
                  <div>{position}</div>
                  <div>{displayPeriod(start, end)}</div>
                </div>
              }
              last={
                <>
                  {experience.map(({ title, techStack, contents }) => (
                    <>
                      <Header4 className="[&:nth-child(n+2)]:mt-8">
                        {title}
                      </Header4>
                      {techStack && (
                        <div>
                          {techStack.map((tech) => (
                            <TechBadge className="mr-1" key={tech}>
                              {tech}
                            </TechBadge>
                          ))}
                        </div>
                      )}
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
