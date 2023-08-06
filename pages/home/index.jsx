import React, { useRef } from "react";
import { gsap } from "gsap";

import NavBar from "components/navbar";
import Landing from "./components/landing";
import SubLanding from "./components/sublanding";
import Private from "./components/private";
import Footer from "components/footer";
import Gallery from "./components/gallery";
import Comments from "./components/comments";

import Mission from "../about/components/mission";

function HomePage({ events = [], gallery = [] }) {
  // define the selectors
  const homeComponentRef = useRef();
  let q = gsap.utils.selector(homeComponentRef);
  return (
    <div ref={homeComponentRef}>
      <NavBar selector={q} useFadeDownAnimation />
      <Landing selector={q} />
      <Comments gallery={gallery} />
      <SubLanding />
      <Gallery gallery={gallery} />
      {/* <Private /> */}
      {/* <Mission /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
