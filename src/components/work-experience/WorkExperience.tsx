import { Fragment } from "react";

import Section from "@/components/common/Section";
import Header3 from "@/components/common/Header3";
import Header4 from "@/components/common/Header4";
import Paragraph from "@/components/common/Paragraph";
import Row from "@/components/common/Row";
import UnorderedList, {
  UnorderedListProps
} from "@/components/common/UnorderedList";

import { dateDiff, displayPeriod } from "@/utils/date";
import { mergeClassNames } from "@/utils/mergeClassNames";

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
  start: Date;
  end?: Date;
  description?: string;
  experiences: PositionExpeirence[];
}

export interface WorkExperienceProps {
  careers: CareerPayload[];
}

function WorkExperience({ careers }: WorkExperienceProps) {
  return (
    <Section title="Work Experience" className="break-before-page">
      {careers.map(({ name, start, end, description, experiences }) => (
        <article className="[&:nth-last-child(n+2)]:mb-12" key={name}>
          <Header3 className="">{name}</Header3>
          <i className="block text-xl mb-4 text-gray-400">
            {displayPeriod(start, end)} ({dateDiff(start, end ?? new Date())})
          </i>
          {description && <Paragraph className="mb-8">{description}</Paragraph>}
          {experiences.map(({ position, start, end, experience }) => (
            <Row
              className={
                "[&:nth-last-child(n+2)]:mb-8 max-sm:flex-col max-lg:gap-4 max-sm:first:*:w-[initial]"
              }
              key={`${position}-${start.toString()}`}
              first={
                <div className="sticky print:static top-4 text-gray-400 text-xl italic max-sm:flex max-sm:flex-col-reverse">
                  <div>{position}</div>
                  <div>{displayPeriod(start, end)}</div>
                </div>
              }
              last={
                <>
                  {experience.map(({ title, techStack, contents }) => (
                    <Fragment key={title}>
                      <Header4
                        className={mergeClassNames(
                          "[&:nth-child(n+2)]:mt-8",
                          techStack === undefined ? "mb-2" : ""
                        )}
                      >
                        {title}
                      </Header4>
                      {techStack && (
                        <div className="mb-2">
                          {techStack.map((tech) => (
                            <TechBadge className="mr-1" key={tech}>
                              {tech}
                            </TechBadge>
                          ))}
                        </div>
                      )}
                      <UnorderedList items={contents} />
                    </Fragment>
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
