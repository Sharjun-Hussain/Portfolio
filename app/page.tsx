import { Fragment } from "react";

import Hero from "./Sections/Hero";
import { FollowerPointerCard } from "./Component/ui/Following-pointer";
import { About } from "./Sections/About";
import { Timeline } from "./Component/ui/timeline";
import { experience } from "./lib/Data";

export default function Home() {
  return (
    <Fragment>
      {/* <FollowerPointerCard> */}
      <Hero />
      <About />
      <Timeline data={experience} />

      {/* </FollowerPointerCard> */}
    </Fragment>
  );
}
