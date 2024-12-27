import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import recipe from "@/public/recipe.png";
import gym from "@/public/gym.png";
import ascenda from "@/public/ascenda.png";
import dota from "@/public/dota.png";

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

export const experiencesData = [
  {
    title: "Software Developer Intern",
    location: "Schneider Electric",
    description:
      "Collaborated with a team of engineers to implement new features, created 10 test cases, and executed 90+ verification tests. Detected and resolved bugs, ensuring precise alignment with product and company requirements. Automated, refactored and improved testing and deployment processes by leveraging Jenkins and existing software tools, reducing manual intervention and increasing overall efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Dec 2024",
    tags: ["Python", "Testing", "Automation", "Jenkins"],
  },
  {
    title: "Software Engineer Intern",
    location: "Lumens",
    description:
      "Developed dynamic and interactive web applications using React, a front-end framework, and leveraged Express, a back-end framework alongside Node.js. Employed PostgreSQL as preferred database as well. Cooperated directly with developers, and end-users to detail and rank product requirements, encompassing advanced feature sets, intuitive user interfaces, and robust technical specifications, guaranteeing development of software solutions tailored to address specific market demands and enhance user satisfaction.",
    icon: React.createElement(FaReact),
    date: "Jun 2023 - Aug 2023",
    tags: ["React", "Express", "Node.js", "PostgreSQL"],
  },
] as const;

export const projectsData = [
  {
    title: "DOTA Tournament Management System",
    description:
      "Built a backend system for DOTA tournaments, handling player registration, matchmaking, and rankings with Glicko. Deployed using Docker to ensure scalability and reliability.",
    tags: ["Java","Spring Boot", "PostgreSQL", "Docker","Kafka"],
    imageUrl: dota,
  },
  {
    title: "Gym Daddy",
    description:
      "I worked as a full-stack developer on a microservices-based gym management system, handling user authentication, class bookings, queue management, and notifications",
    tags: ["Vue.js", "Golang", "Docker","Flask","Redis","gRPC","Kafka"],
    imageUrl: gym,
  },
  {
    title: "Recipe Daddy",
    description:
      "I worked as a full-stack developer on this project. A web app that allows users to search for recipes based on ingredients they have. It also has features like user authentication, saving recipes, and scheduling meals",
    tags: ["Vue.js", "Python", "Django","Javascript","PostgreSQL"],
    imageUrl: recipe,
  },
  {
    title: "Ascenda Employee Management System",
    description:
      "I worked as a frontend developer on this project. It is a web app that allows employees to manage their personal information, and perform certain actions based on their roles",
    tags: ["Cognito", "React.js", "Amplify","Express.js","MongoDB","AWS"],
    imageUrl: ascenda,
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