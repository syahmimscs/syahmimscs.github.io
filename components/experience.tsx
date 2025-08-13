"use client";

import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import type { Experience } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import React from "react";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 relative"
    >
      <SectionHeading>My experience</SectionHeading>
      <div className="relative w-full">
        <VerticalTimeline
          lineColor={theme === "light" ? "#9ca3af" : "#ffffff66"}
        >
          {experiencesData.map((item: Experience, index: number) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                position: "relative",
                visibility: "visible",
                zIndex: 1,
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255.0.5)",
              }}
              date={item.date}
              icon={
                <div className="icon-wrapper">
                  <div className="relative w-full h-full rounded-full">
                    <Image
                      src={item.icon}
                      alt={item.location}
                      fill
                      sizes="64px"
                      className="object-contain scale-98"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              }
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "4rem",
                height: "4rem",
                visibility: "visible",
                overflow: "hidden",
                boxSizing: "border-box",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              <ul className="flex flex-wrap mt-4 gap-2">
                {item.tags?.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-2 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
