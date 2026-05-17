import {
  Code2,
  Brain,
  Database,
} from "lucide-react";

export const skillsData = [
  {
    title: "Full Stack Development",
    icon: Code2,
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "Node.js", level: 86 },
      { name: "FastAPI", level: 80 },
      { name: "Tailwind CSS", level: 94 },
    ],
  },

  {
    title: "AI & Intelligent Systems",
    icon: Brain,
    skills: [
      { name: "RAG Pipelines", level: 88 },
      { name: "LangChain", level: 90 },
      { name: "Vector Databases", level: 84 },
      { name: "LLMs", level: 86 },
      { name: "Prompt Engineering", level: 93 },
      { name: "AI Workflows", level: 82 },
    ],
  },

  {
    title: "Tools, Concepts & Infra",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 84 },
      { name: "MongoDB", level: 88 },
      { name: "JWT Authentication", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "Cloudinary", level: 80 },
      { name: "Git & GitHub", level: 89 },
    ],
  },
];