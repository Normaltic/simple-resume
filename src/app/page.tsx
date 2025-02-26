import Profile from "@/components/profile/Profile";
import Introduce from "@/components/introduce/Introduce";
import Skill from "@/components/skill/Skill";
import WorkExperience from "@/components/work-experience/WorkExperience";
import OtherExperience from "@/components/other-experience/OtherExperience";
import Education from "@/components/education/Education";
import Etc from "@/components/etc/Etc";

export default function Home() {
  return (
    <>
      <Profile />
      <Introduce />
      <Skill />
      <WorkExperience />
      <OtherExperience />
      <Education />
      <Etc />
    </>
  );
}
