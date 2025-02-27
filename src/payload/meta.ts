import type { Metadata } from "next";

const payload: Metadata = {
  title: "Resume: Yunji Kim",
  description: "This is Frontend developer Yunji Kim's resume",
  openGraph: {
    title: "Resume: Yunji Kim",
    description: "This is Frontend developer Yunji Kim's resume",
    images: [
      {
        url: "/images/Profile.png",
        width: 800,
        height: 600,
        alt: "Page preview image"
      }
    ],
    type: "profile",
    firstName: "Yunji",
    lastName: "Kim",
    gender: "male"
  }
};

export default payload;
