import Section from "@/components/common/Section";
import Row from "@/components/common/Row";
import Header3 from "@/components/common/Header3";

import IconLink from "./IconLink";

function Profile() {
  return (
    <Section>
      <Row
        className="first:*:justify-center last:*:flex last:*:flex-col last:*:justify-center last:*:py-4 last:*:gap-2"
        first={
          <img
            className="bg-gray-500 max-w-[12rem]"
            src="/images/Profile.png"
            alt="Profile Image"
          />
        }
        last={
          <>
            <Header3 className="mb-12">김윤지 ( Yunji Kim )</Header3>
            <IconLink
              iconUrl="/svgs/github.svg"
              link="https://github.com/Normaltic"
              text="Normaltic"
            />
            <IconLink
              iconUrl="/svgs/envelope.svg"
              link="mailto:normaltic@gmail.com"
              text="normaltic@gmail.com"
            />
          </>
        }
      />
    </Section>
  );
}

export default Profile;
