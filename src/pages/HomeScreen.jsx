import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Model from "../components/Model";
import { gsap } from "gsap";
import AltNavbar from "../components/AltNavbar";

function HomeScreen() {
  const [showAltNavbar, setShowAltNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowAltNavbar(scrollPosition > 100); // Trigger the navbar when scrolled 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showAltNavbar) {
      gsap.to(".alt-navbar", { y: 0, duration: 0.5, ease: "power2.out" }); // Slide down
    } else {
      gsap.to(".alt-navbar", { y: "-100%", duration: 0.5, ease: "power2.in" }); // Slide up off-screen
    }
  }, [showAltNavbar]);

  return (
    <>
      <div
        className="alt-navbar fixed top-0 left-0 w-full z-20"
        style={{ transform: "translateY(-100%)" }} // Start off-screen
      >
        <AltNavbar />
      </div>
      <div id="overview">
        <Hero />
      </div>

      <div id="specs">
        <Highlights />
      </div>

      <div id="configure">
        <Model />
      </div>
    </>
  );
}

export default HomeScreen;
