import { Fragment } from "react";

import { FollowerPointerCard } from "./Component/ui/Following-pointer";
import { About } from "./Sections/About";
import { Timeline } from "./Component/ui/timeline";
import { experience } from "./lib/Data";
import { AchievementsCounter } from "./Sections/AchivementCounter";
import Hero from "./Sections/Hero";

export default function Home() {
  return (
    <Fragment>
      {/* <FollowerPointerCard> */}
      <Hero />

      <About />
      <AchievementsCounter />
      <Timeline data={experience} />

      {/* </FollowerPointerCard> */}
    </Fragment>
  );
}
