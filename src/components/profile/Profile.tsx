import Section from "@/components/common/Section";
import Row from "@/components/common/Row";

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
        className="max-sm:flex-col max-sm:items-center"
        first={
          <img
            className="bg-gray-500 max-w-[12rem]"
            src={info.profileImage}
            alt="Profile Image"
          />
        }
        last={
          <div className="h-[100%] flex flex-col justify-center gap-2">
            <h1 className="text-4xl mb-12">{info.name}</h1>
            {info.contacts.map(({ iconUrl, link, text }) => (
              <IconLink key={text} iconUrl={iconUrl} link={link} text={text} />
            ))}
          </div>
        }
      />
    </Section>
  );
}

export default Profile;
