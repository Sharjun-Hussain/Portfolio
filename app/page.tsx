"use client";
import { Fragment } from "react";
import { Timeline } from "./Component/ui/timeline";
import { experience } from "./lib/Data";
import ProjectsSection from "./Sections/AchivementCounter";
import Hero from "./Sections/Hero";
import SkillsSection from "./Sections/Skills";
import ContactSection from "./Sections/Contact";

export default function Home() {
  return (
    <Fragment>
      {/* <FollowerPointerCard> */}
      <Hero />
      <SkillsSection />

      <ProjectsSection />
      {/* <ProjectsSections />   this is for all projects */}
      {/* <AboutSection /> */}
      <Timeline data={experience} />
      <ContactSection />

      {/* </FollowerPointerCard> */}
    </Fragment>
  );
}
