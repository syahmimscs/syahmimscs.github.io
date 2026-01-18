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
import AutodeskLogo from "@/public/autodesk.png";

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
    location: "Autodesk",
    icon: AutodeskLogo,
    date: "Jan 2026 - Present",
    description:
      "Contributing to high-throughput backend services, focusing on reliability, observability and operational best practices",
    tags: ["Go", "Microservices", "Ruby", "Javascript", "AWS"],
  },
  {
    title: "Software Engineer Intern",
    location: "Government of Singapore Investment Corporation (GIC)",
    icon: GICLogo,
    date: "Aug 2025 - Dec 2025",
    description:
      "Upgraded Docker base images across a large codebase and automated container build/publish workflows, improving build consistency and security posture. Built a backend-driven data refresh feature using .NET, Redis, React, and TanStack Query, enabling users to recache exposure/performance data without full page reloads and reducing downstream loading overhead. Improved operational reliability by integrating Datadog monitoring for Control-M jobs, migrated a legacy .NET batch job to Python, and standardised Python repos with Ruff linting/formatting.",
    tags: ["C#", ".NET", "React.js", "Python", "OpenShift", "Docker", "ControlM"],
  },
  {
    title: "Software Engineer Intern",
    location: "Gosoft (Thailand)",
    icon: GosoftLogo,
    date: "Jun 2025 - Aug 2025",
    description:
      "Worked in the IT-Enabled Business Process Transformation unit, modernising internal data platforms used across enterprise workflows. Optimised data ingestion from AWS S3 to PostgreSQL using Go concurrency and batch processing, reducing processing time by over 90%. Integrated Rsbuild-produced components with a Vite frontend, improving cross-system compatibility and reducing manual integration effort by 30%.",
    tags: ["Go", "React.js", "Vite", "PostgreSQL", "AWS S3", "Module Federation"],
  },
  {
    title: "Software Engineer Intern",
    location: "Crédit Agricole Corporate and Investment Bank (CACIB)",
    icon: CreditAgricoleLogo,
    date: "Jan 2025 - Jun 2025",
    description: "Identified long regression testing cycle times and implemented parallel test execution, developing a full-stack .NET Core + Angular reporting dashboard integrated with AWS S3, reducing testing time by 60%. Automated 130+ business analyst-defined test cases using Playwright, Cucumber BDD, and a robust test automation framework, increasing test coverage and deployment confidence in the CI/CD pipeline. Streamlined QA processes by leading bug triaging and introducing a validated prioritisation framework to address misprioritised regression issues, reducing recurring defects.",
    tags: ["C#", ".NET Core", "TypeScript",  "Angular","Playwright", "Cucumber", "AWS S3"],
  },
  {
    title: "Software Developer Intern",
    location: "Schneider Electric",
    description:
      "Designed and executed 90+ functional verification tests on embedded devices, identifying high-impact defects and ensuring compliance with product and company requirements. Refactored and optimised a large automated testing codebase to enhance scalability, maintainability, and knowledge transfer for new engineers. Developed automated test scripts using Python and Selenium and configured them to be executed through the Jenkins CI/CD pipeline, reducing manual testing effort and enabling continuous testing.",
    icon: SchneiderElectricLogo,
    date: "May 2024 - Dec 2024",
    tags: ["Python", "Selenium", "Automation", "Testing", "Jenkins"],
  },
  {
    title: "Software Engineer Intern",
    location: "Lumens",
    description:
      "Built and delivered a full-stack web application using React, Node.js (Express), and PostgreSQL, improving employee onboarding efficiency by 15%. Engineered Telegram chatbots for automated notifications and fixed frontend–backend data inconsistencies with multilingual support, enhancing accessibility, engagement, and reliability.",
    icon: LumensLogo,
    date: "Jun 2023 - Aug 2023",
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Telegram Bot API"],
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
  "C++",
  "Golang",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Vue.js",
  "Angular",
  "Node.js",
  "Spring Boot",
  ".NET",
  "Flask",
  "Django",
  "Express.js",
  "Git",
  "CI/CD",
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
  "Kubernetes",
  "AWS",
] as const;