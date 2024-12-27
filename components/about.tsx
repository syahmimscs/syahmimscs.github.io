"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I’m currently a penultimate-year student at SMU, pursuing a degree in <span className="font-medium">Software Engineering</span> with a second major in <span className="font-medium">Artificial Intelligence (AI)</span>. What excites me most about programming is the thrill of solving problems and crafting innovative solutions. I thrive on challenges and am always eager to explore and learn new technologies.
      </p>
      <p>
        Beyond academics, I enjoy staying active through gym workouts, park runs, and playing sports like football and basketball. I’m also passionate about expanding my knowledge and embracing opportunities for personal growth during my free time.
      </p>
    </motion.section>
  );
}