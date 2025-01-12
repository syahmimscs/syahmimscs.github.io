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
    location: "Crédit Agricole CIB",
    icon: CreditAgricoleLogo,
    date: "Jan 2025 - Present",
    description: "In progress",
    tags: ["C#", ".NET", "Typescript", "Playwright", "Angular"],
  },
  {
    title: "Software Developer Intern",
    location: "Schneider Electric",
    description:
      "Collaborated with a team of engineers to implement new features, created 10 test cases, and executed 90+ verification tests. Detected and resolved bugs, ensuring precise alignment with product and company requirements. Automated, refactored and improved testing and deployment processes by leveraging Jenkins and existing software tools, reducing manual intervention and increasing overall efficiency.",
    icon: SchneiderElectricLogo,
    date: "May 2024 - Dec 2024",
    tags: ["Python", "Testing", "Automation", "Jenkins"],
  },
  {
    title: "Software Engineer Intern",
    location: "Lumens",
    description:
      "Developed dynamic and interactive web applications using React for the front end and Express with Node.js for the back end. Utilised PostgreSQL as the primary database to ensure efficient and reliable data management. Collaborated closely with developers and end-users to gather, prioritise, and refine product requirements. This process encompassed advanced feature design, intuitive user interfaces, and robust technical specifications, resulting in tailored software solutions that addressed specific market needs and elevated user satisfaction.",
    icon: LumensLogo,
    date: "Jun 2023 - Aug 2023",
    tags: ["React", "Express", "Node.js", "PostgreSQL"],
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
  "Golang",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Vue.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Django",
  "Framer Motion",
  "Docker",
  "MySQL",
  "PHP",
  "NetLogo",
  "Kafka",
  "gRPC",
  "Tensorflow",
  "Pandas",
  "Pytorch",
  "Jenkins",
  "Spring Boot",

] as const;