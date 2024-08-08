import { Fragment } from "react";

import Hero from "./Sections/Hero";
import { FollowerPointerCard } from "./Component/ui/Following-pointer";

export default function Home() {
  return (
    <Fragment>
      {/* <FollowerPointerCard> */}
        <Hero />
      {/* </FollowerPointerCard> */}
    </Fragment>
  );
}
