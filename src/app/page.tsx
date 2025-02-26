import Profile from "@/components/profile/Profile";
import Introduce from "@/components/introduce/Introduce";
import Skill from "@/components/skill/Skill";
import WorkExperience from "@/components/work-experience/WorkExperience";
import OtherExperience from "@/components/other-experience/OtherExperience";

export default function Home() {
  return (
    <>
      <Profile />
      <Introduce />
      <Skill />
      <WorkExperience />
      <OtherExperience />
    </>
  );
}
