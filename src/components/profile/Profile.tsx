import Section from "@/components/common/Section";
import Row from "@/components/common/Row";
import Header3 from "@/components/common/Header3";

import IconLink from "./IconLink";

export interface ProfilePayload {
  name: string;
  profileImage: string;
  contacts: Array<{
    iconUrl: string;
    link: string;
    text: string;
  }>;
}

export interface ProfileProps {
  info: ProfilePayload;
}

function Profile({ info }: ProfileProps) {
  return (
    <Section>
      <Row
        className="first:*:justify-center last:*:flex last:*:flex-col last:*:justify-center last:*:py-4 last:*:gap-2"
        first={
          <img
            className="bg-gray-500 max-w-[12rem]"
            src={info.profileImage}
            alt="Profile Image"
          />
        }
        last={
          <>
            <Header3 className="mb-12">{info.name}</Header3>
            {info.contacts.map(({ iconUrl, link, text }) => (
              <IconLink key={text} iconUrl={iconUrl} link={link} text={text} />
            ))}
          </>
        }
      />
    </Section>
  );
}

export default Profile;
