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
        Currently a penultimate student studying{" "}
        <span className="font-medium">Software Engineering</span> in SMU with a second major in Artificial Intelligence (AI).{" "}
        <span className="italic">My favorite part of programming</span> is the
        process of finding a solution to a problem. I <span className="underline">enjoy</span> challenging myself and always looking forward to
        learn new technologies.
      </p>
      <p>
        <span className="italic">My other hobbies would be</span> going to the gym, going for runs in the park and also expanding my knowledge!
        I am also a fan of{" "} football and basketball and I enjoy playing sports in general during my free time. 
      </p>
    </motion.section>
  );
}
