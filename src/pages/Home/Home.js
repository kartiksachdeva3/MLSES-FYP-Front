import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
function Home() {
  return (
    <div>
      <div id="home">
        <HeroSection {...homeObjOne} />{" "}
      </div>
      <div id="Vision">
        <HeroSection {...homeObjTwo} />
      </div>
      <div id="About">
        <HeroSection {...homeObjThree} />
      </div>
    </div>
  );
}

export default Home;
