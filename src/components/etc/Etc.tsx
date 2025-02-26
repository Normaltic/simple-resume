import Section from "@/components/common/Section";
import Header5 from "../common/Header5";
import UnorderedList, { UnorderedListProps } from "../common/UnorderedList";

export interface EtcPayload {
  title: string;
  descriptions: UnorderedListProps["items"];
}
export interface EtcProps {
  etcs: EtcPayload[];
}

function Etc({ etcs }: EtcProps) {
  return (
    <Section title="Etc.">
      {etcs.map(({ title, descriptions }) => (
        <>
          <Header5>{title}</Header5>
          <UnorderedList className="mb-6" items={descriptions} />
        </>
      ))}
    </Section>
  );
}

export default Etc;
