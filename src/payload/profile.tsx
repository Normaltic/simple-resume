import type { ProfilePayload } from "@/components/profile/Profile";

import Github from "@/svgs/github.svg";
import Envelope from "@/svgs/envelope.svg";

const payload: ProfilePayload = {
  name: "김윤지 ( Yunji Kim )",
  profileImage: "/images/Profile.png",
  contacts: [
    {
      icon: Github,
      link: "https://github.com/Normaltic",
      text: "Normaltic"
    },

    {
      icon: Envelope,
      link: "mailto:normaltic@gmail.com",
      text: "normaltic@gmail.com"
    }
  ]
};

export default payload;
