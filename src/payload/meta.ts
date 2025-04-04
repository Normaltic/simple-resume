import type { Metadata } from "next";

const payload: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"),
  title: "Resume: Yunji Kim",
  description: "Frontend developer Yunji Kim's resume",
  openGraph: {
    title: "Resume: Yunji Kim",
    description: "Frontend developer Yunji Kim's resume",
    images: [
      {
        url: "/images/Thumbnail.png",
        width: 600,
        height: 300,
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
