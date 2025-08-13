import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import recipe from "@/public/recipe.png";
import { StaticImageData } from "next/image";
import gym from "@/public/gym.png";
import ascenda from "@/public/ascenda.png";
import dota from "@/public/dota.png";
import SchneiderElectricLogo from "@/public/schneider.png";
import LumensLogo from "@/public/lumens.png";
import CreditAgricoleLogo from "@/public/cacib.png";
import GosoftLogo from "@/public/gosoft.png";
import GICLogo from "@/public/gic.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export type Experience = {
  title: string;
  location: string;
  icon: StaticImageData;
  date: string;
  description?: string;
  tags?: string[];
};

export const experiencesData: Experience[] = [
  {
    title: "Software Engineer Intern",
    location: "GIC",
    icon: GICLogo,
    date: "Aug 2025 - Present",
    description:
      "In Progress",
    tags: ["C#",".NET", "React.js", "Vite", "MySQL", "AWS S3"],
  },
  {
    title: "Software Engineer Intern",
    location: "Gosoft (Thailand)",
    icon: GosoftLogo,
    date: "Jun 2025 - Aug 2025",
    description:
      "Designed and optimised data import pipelines for the Smart Visit platform using Go, PostgreSQL, and AWS S3, improving processing time by 90% through batch uploads and parallelism. Migrated the frontend build system from RSBuild to Vite as part of Module Federation initiatives, increasing build speeds and developer productivity. Collaborated with the team to deliver scalable backend services and high-quality integrations for 7‑Eleven Thailand’s enterprise solutions.",
    tags: ["Go", "React.js", "Vite", "PostgreSQL", "AWS S3", "Module Federation"],
  },
  {
    title: "Software Engineer Intern",
    location: "Crédit Agricole CIB",
    icon: CreditAgricoleLogo,
    date: "Jan 2025 - Jun 2025",
    description: "Developed and integrated 130+ automated test cases using Playwright and Cucumber (BDD), enhancing test coverage and deployment confidence. Implemented parallel execution to reduce non-regression testing time by 60%, automated report uploads to S3, and developed a full-stack reporting interface using a .NET backend and Angular frontend. Performed sprint-based bug triaging and root cause analysis of critical regression issues, proposed a feature prioritisation framework, and collaborated with the team to refine QA processes, reducing the recurrence of defects.",
    tags: ["C#", ".NET", "Typescript", "Playwright", "Angular", "Cucumber", "AWS S3"],
  },
  {
    title: "Software Developer Intern",
    location: "Schneider Electric",
    description:
      "Designed and executed over 90 functional verification tests on embedded devices, uncovering key defects and ensuring compliance with product and company standards. Refactored and optimised a large automated testing codebase to improve scalability, maintainability, and facilitate knowledge transfer for new engineers. Additionally, I developed automated test scripts using Python and Selenium and integrated them into the Jenkins CI/CD pipeline, which reduced manual testing effort.",
    icon: SchneiderElectricLogo,
    date: "May 2024 - Dec 2024",
    tags: ["Python", "Testing", "Automation", "Jenkins"],
  },
  {
    title: "Software Engineer Intern",
    location: "Lumens",
    description:
      "Built and delivered a full‑stack web application using React, Node.js (Express), and PostgreSQL, improving employee onboarding efficiency by 15%. Developed Telegram chatbot integrations to automate notifications, enhancing accessibility and user engagement. Additionally, resolved data inconsistencies between frontend and backend services and implemented multilingual translation services, which improved overall reliability and user experience.",
    icon: LumensLogo,
    date: "Jun 2023 - Aug 2023",
    tags: ["React.js", "Express.js", "Node.js", "PostgreSQL"],
  },
];

export const projectsData = [
  {
    title: "DOTA Tournament Management System",
    description:
      "Built a backend system for DOTA tournaments, handling player registration, matchmaking, and rankings with Glicko. Deployed using Docker to ensure scalability and reliability.",
    tags: ["Java","Spring Boot", "PostgreSQL", "Docker","Kafka"],
    imageUrl: dota,
  },
  {
    title: "Ascenda Employee Management System",
    description:
      "Developed a web application that allows employees to manage their personal information, and perform certain actions based on their roles.",
    tags: ["Cognito", "React.js", "Amplify","Express.js","MongoDB","AWS"],
    imageUrl: ascenda,
  },
  {
    title: "Gym Daddy",
    description:
      "Contributed as a full-stack developer to a microservices-based gym management system, implementing features such as user authentication, class bookings, queue management, and real-time notifications.",
    tags: ["Vue.js", "Golang", "Docker","Flask","Redis","gRPC","Kafka"],
    imageUrl: gym,
  },
  
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C#",
  "Golang",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Spring Boot",
  ".NET",
  "Flask",
  "Django",
  "Express.js",
  "Git",
  "Tailwind",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "PostgreSQL",
  "Framer Motion",
  "Docker",
  "PHP",
  "NetLogo",
  "Kafka",
  "gRPC",
  "Tensorflow",
  "Pandas",
  "Pytorch",
  "Jenkins",
] as const;