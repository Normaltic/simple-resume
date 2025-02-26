import type { SkillPayload } from "@/components/skill/Skill";

const payload: SkillPayload[] = [
  {
    category: "Frontend",
    list: [
      "React, Redux, Zustand, (Next.js)",
      "Styled-components, SCSS, (Tailwind.css)"
    ]
  },
  {
    category: "Backend",
    list: ["Express.js, (MongoDB)"]
  },
  {
    category: "Build & Deploy",
    list: ["Webpack, Rollup, AWS Amplify, EC2, (esbuild)"]
  }
];

export default payload;
