import Section from "@/components/common/Section";
import Row from "@/components/common/Row";
import Header5 from "@/components/common/Header5";
import UnorderedList, {
  UnorderedListProps
} from "@/components/common/UnorderedList";
import { displayPeriod } from "@/utils/date";
import Header4 from "../common/Header4";

export interface EducationPayload {
  name: string;
  department?: string;
  start: Date;
  end?: Date;
  degree?: string;
  activities: Array<{
    title: string;
    descriptions?: UnorderedListProps["items"];
  }>;
}

export interface EducationProps {
  educations: EducationPayload[];
}

function Education({ educations }: EducationProps) {
  return (
    <Section title="Education">
      {educations.map(
        ({ name, department, start, end, degree, activities }) => (
          <Row
            className="max-sm:block max-sm:first:*:w-[initial] max-sm:first:*:mb-4"
            key={name}
            first={
              <>
                <div className="max-sm:flex max-sm:gap-1">
                  <Header4>{name}</Header4>
                  {department && <Header4>{department}</Header4>}
                </div>
                <div className="text-gray-400 italic">
                  <div>{displayPeriod(start, end)}</div>
                  {degree && <div>{degree}</div>}
                </div>
              </>
            }
            last={activities.map(({ title, descriptions }) => (
              <>
                <Header5 className="[&:nth-child(n+2)]:mt-4">{title}</Header5>
                {descriptions && <UnorderedList items={descriptions} />}
              </>
            ))}
          />
        )
      )}
    </Section>
  );
}

export default Education;
