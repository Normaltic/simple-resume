import type { ProfilePayload } from "@/components/profile/Profile";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const payload: ProfilePayload = {
  name: "김윤지 ( Yunji Kim )",
  profileImage: "/images/Profile.png",
  contacts: [
    {
      icon: faGithub,
      link: "https://github.com/Normaltic",
      text: "Normaltic"
    },

    {
      icon: faEnvelope,
      link: "mailto:normaltic@gmail.com",
      text: "normaltic@gmail.com"
    }
  ]
};

export default payload;
