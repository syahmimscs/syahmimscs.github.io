import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import recipe from "@/public/recipe.png";
import gym from "@/public/gym.png";
import ascenda from "@/public/ascenda.png";

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
    title: "Software Engineer Intern",
    location: "LUMENS",
    description:
      "Developed dynamic and interactive web applications using React, a front-end framework, and leveraged Express, a back-end framework alongside Node.js. Employed PostgreSQL as preferred database as well",
      icon: React.createElement(FaReact),
    date: "JUN 2023 - AUG 2023",
  },
  {
    title: "Software Developer Intern",
    location: "SCHNEIDER ELECTRIC",
    description:
      "Working on implementing new features, writing tests, and fixing bugs based on company requirements. Developing a deeper understanding of the integration between software solutions and hardware systems. Automated testing and deployment processes.",
    icon: React.createElement(CgWorkAlt),
    date: "MAY 2024 - PRESENT",
  }
] as const;

export const projectsData = [
  {
    title: "Gym Daddy",
    description:
      "I worked as a full-stack developer on a comprehensive gym management system, which is architected using multiple microservices to ensure scalability, maintainability, and efficient performance. The system is designed to manage various gym-related functionalities including user authentication, class bookings, queue management, and notifications",
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
  "Golang",
  "Docker",
  "SQL",
  "PHP",
  "NetLogo",
  "Pandas",
  "Pytorch",

] as const;