import type { ProfilePayload } from "@/components/profile/Profile";

import Github from "@/svgs/github.svg";
import Envelope from "@/svgs/envelope.svg";
import RSS from '@/svgs/rss.svg';

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
    },
    {
      icon: RSS,
      link: "https://blog.yunji.kim",
      text: "Yunji's Blog"
    }
  ]
};

export default payload;
