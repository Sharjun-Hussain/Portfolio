import { Fragment } from "react";

import { FollowerPointerCard } from "./Component/ui/Following-pointer";
import AboutSection from "./Sections/About";
import { Timeline } from "./Component/ui/timeline";
import { experience } from "./lib/Data";
import ProjectsSection from "./Sections/AchivementCounter";
import Hero from "./Sections/Hero";
import SkillsSection from "./Sections/Skills";
import { ProjectsSections } from "./Sections/ProjectShowcase";
import { ContactGlobe } from "./Sections/FooterComponents/ContactGlobe";
import { AIContact } from "./Sections/FooterComponents/AICOntact";
import { VideoContactCard } from "./Sections/FooterComponents/VideoBusinessCard";
import { SecureContact } from "./Sections/FooterComponents/SecureCOntact";
import { ARContactCard } from "./Sections/FooterComponents/ARContactCard";
import { ContactSection } from "./Sections/Contact";

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
