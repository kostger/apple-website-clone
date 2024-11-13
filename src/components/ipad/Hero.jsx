import React from "react";
import ipadHeroVideo from "/assets/videos/ipad-hero.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1, duration: 1, delay: 1 });
  }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row items-center w-full justify-between py-10 md:px-12 sm:px-4">
        <h1 id="heading" className="section-heading-ipad">
          iPad
        </h1>
        <h1
          id="heading"
          className="section-heading-ipad text-wrap  sm:w-3/4 md:w-1/4  "
        >
          Touch, draw, and type on one magical device.
        </h1>
      </div>
      <section className="w-full nav-height  relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <div className="w-full h-full">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={ipadHeroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
