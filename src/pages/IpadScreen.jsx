import React from "react";
import Hero from "../components/ipad/Hero";
import Explore from "../components/ipad/Explore";
import Highlights from "../components/ipad/Highlights";
function IpadScreen() {
  return (
    <div className="bg-white">
      <Hero />
      <Highlights />
      <Explore />
    </div>
  );
}

export default IpadScreen;
