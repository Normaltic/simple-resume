import type { SkillPayload } from "@/components/skill/Skill";

const payload: SkillPayload[] = [
  {
    category: "Frontend",
    list: [
      "React, Redux, zustand, (Next.js, Three.js)",
      "SCSS, (Tailwind.CSS, emotion)"
    ]
  },
  {
    category: "Backend",
    list: ["Express, (MongoDB)"]
  },
  {
    category: "Build & Deploy",
    list: ["webpack, Rollup, AWS Amplify, EC2, (esbuild)"]
  }
];

export default payload;
