import type { ProfilePayload } from "@/components/profile/Profile";

const payload: ProfilePayload = {
  name: "김윤지 ( Yunji Kim )",
  profileImage: "/images/Profile.png",
  contacts: [
    {
      iconUrl: "/svgs/github.svg",
      link: "https://github.com/Normaltic",
      text: "Normaltic"
    },

    {
      iconUrl: "/svgs/envelope.svg",
      link: "mailto:normaltic@gmail.com",
      text: "normaltic@gmail.com"
    }
  ]
};

export default payload;
