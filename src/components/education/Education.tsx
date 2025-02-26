import Section from "@/components/common/Section";
import Row from "@/components/common/Row";
import Header5 from "@/components/common/Header5";
import UnorderedList, {
  UnorderedListProps
} from "@/components/common/UnorderedList";
import { displayPeriod } from "@/utils/formatDate";

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
            key={name}
            first={
              <>
                <div>{name}</div>
                {department && <div>{department}</div>}
                <div>
                  <div>{displayPeriod(start, end)}</div>
                </div>
                {degree && <div>{degree}</div>}
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
